"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ZipSearch } from "@/components/ZipSearch";

const VEHICLE_API = "https://done.ship.cars";
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1959 }, (_, i) =>
  String(CURRENT_YEAR - i),
);

type ZipLocation = { zip: string; city: string; state: string };

type FormData = {
  pickup: ZipLocation;
  delivery: ZipLocation;
  transport: "open" | "enclosed" | "";
  date: string;
  year: string;
  make: string;
  model: string;
  inoperable: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
};

const EMPTY_LOC: ZipLocation = { zip: "", city: "", state: "" };
const EMPTY: FormData = {
  pickup: EMPTY_LOC,
  delivery: EMPTY_LOC,
  transport: "",
  date: "",
  year: "",
  make: "",
  model: "",
  inoperable: false,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  notes: "",
  consent: false,
};

const STORAGE_KEY = "ras-quote-v2";
const STEPS = ["Route", "Vehicle", "Contact"];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

const selectCls = inputCls + " cursor-pointer";

export function QuoteForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(0);

  const [data, setData] = useState<FormData>(() => {
    if (typeof window === "undefined") return EMPTY;
    let draft: Partial<FormData> = {};
    try {
      draft = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {
      /* corrupt draft */
    }
    // URL prefill: ?from=ZIP&to=ZIP
    const fromParam = params.get("from");
    const toParam = params.get("to");
    return {
      ...EMPTY,
      ...draft,
      pickup: fromParam
        ? { zip: fromParam, city: "", state: "" }
        : (draft.pickup ?? EMPTY_LOC),
      delivery: toParam
        ? { zip: toParam, city: "", state: "" }
        : (draft.delivery ?? EMPTY_LOC),
    };
  });

  // Dynamic make/model state
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [loadingMakes, setLoadingMakes] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Persist draft
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  // Load makes when year changes
  useEffect(() => {
    if (!data.year) { setMakes([]); return; }
    setLoadingMakes(true);
    setMakes([]);
    setData((d) => ({ ...d, make: "", model: "" }));
    fetch(`${VEHICLE_API}/makes/?year=${data.year}`)
      .then((r) => r.json())
      .then((res: { make: string }[]) => setMakes(res.map((x) => x.make)))
      .catch(() => setMakes([]))
      .finally(() => setLoadingMakes(false));
  }, [data.year]);

  // Load models when make changes
  useEffect(() => {
    if (!data.year || !data.make) { setModels([]); return; }
    setLoadingModels(true);
    setModels([]);
    setData((d) => ({ ...d, model: "" }));
    fetch(`${VEHICLE_API}/models/?year=${data.year}&make=${encodeURIComponent(data.make)}`)
      .then((r) => r.json())
      .then((res: { model: string }[]) => setModels(res.map((x) => x.model)))
      .catch(() => setModels([]))
      .finally(() => setLoadingModels(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.make]);

  const set = (patch: Partial<FormData>) => {
    setError("");
    setData((d) => ({ ...d, ...patch }));
  };

  const validate = (s: number): string => {
    if (s === 0) {
      if (!data.pickup.zip) return "Enter a pickup location.";
      if (!data.delivery.zip) return "Enter a delivery location.";
      if (!data.transport) return "Choose open or enclosed transport.";
      if (!data.date) return "Select a first available ship date.";
      if (!data.consent) return "Please accept the consent checkbox.";
    }
    if (s === 1) {
      if (!data.year) return "Select the vehicle year.";
      if (!data.make) return "Select the vehicle make.";
      if (!data.model) return "Select the vehicle model.";
    }
    if (s === 2) {
      if (!data.firstName.trim()) return "Enter your first name.";
      if (!/^[\d\s()+.\-]{7,}$/.test(data.phone)) return "Enter a valid phone number.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) return "Enter a valid email address.";
    }
    return "";
  };

  const next = () => {
    const msg = validate(step);
    if (msg) return setError(msg);
    setStep((s) => s + 1);
  };

  const submit = async () => {
    const msg = validate(2);
    if (msg) return setError(msg);
    setSubmitting(true);
    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        pickupZip: data.pickup.zip,
        pickupCity: data.pickup.city,
        pickupState: data.pickup.state,
        deliveryZip: data.delivery.zip,
        deliveryCity: data.delivery.city,
        deliveryState: data.delivery.state,
        pickupDate: data.date,
        specialInstructions: data.notes,
        vehicles: [
          {
            vehicleYear: data.year,
            vehicleMake: data.make,
            vehicleModel: data.model,
            vehicleCondition: data.inoperable,
            transportType: data.transport,
          },
        ],
        pagePath: typeof window !== "undefined" ? window.location.pathname : "/quote",
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      sessionStorage.removeItem(STORAGE_KEY);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us.");
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_24px_60px_-30px_rgba(15,20,34,0.35)] sm:p-10">
      {/* Progress steps */}
      <ol className="flex items-center gap-2" aria-label="Quote progress">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                i < step
                  ? "bg-gold text-ink"
                  : i === step
                    ? "border-2 border-gold text-ink"
                    : "border border-line text-muted"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? "✓" : i + 1}
            </span>
            <span className={`hidden text-sm sm:block ${i === step ? "font-semibold text-ink" : "text-muted"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <span className={`h-px flex-1 ${i < step ? "bg-gold" : "bg-line"}`} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>

      <form
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 2) next();
          else submit();
        }}
        noValidate
      >
        {/* Step 1: Route */}
        {step === 0 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <ZipSearch
                label="Transport car from"
                placeholder="City, state or ZIP"
                initialValue={data.pickup.zip}
                autoFocus
                onSelect={(r) => set({ pickup: r })}
                onClear={() => set({ pickup: EMPTY_LOC })}
              />
              <ZipSearch
                label="Transport car to"
                placeholder="City, state or ZIP"
                initialValue={data.delivery.zip}
                onSelect={(r) => set({ delivery: r })}
                onClear={() => set({ delivery: EMPTY_LOC })}
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-ink">Transport type</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    { id: "open" as const, title: "Open", hint: "Industry standard — most economical" },
                    { id: "enclosed" as const, title: "Enclosed", hint: "Full protection — classics & exotics" },
                  ]
                ).map((t) => (
                  <label
                    key={t.id}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      data.transport === t.id ? "border-gold bg-gold/10" : "border-line hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="transport"
                      className="sr-only"
                      checked={data.transport === t.id}
                      onChange={() => set({ transport: t.id })}
                    />
                    <span className="block font-display text-lg">{t.title}</span>
                    <span className="mt-1 block text-sm text-muted">{t.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <Field label="First available ship date">
              <input
                type="date"
                className={inputCls}
                value={data.date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => set({ date: e.target.value })}
              />
            </Field>

            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set({ consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 accent-(--gold)"
              />
              <span>
                I agree to be contacted by Royal Auto Ship by phone, SMS or email about my quote.
                Message and data rates may apply.
              </span>
            </label>
          </div>
        )}

        {/* Step 2: Vehicle */}
        {step === 1 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Year">
                <select
                  className={selectCls}
                  value={data.year}
                  onChange={(e) => set({ year: e.target.value })}
                >
                  <option value="">Select year…</option>
                  {YEARS.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </Field>

              <Field label={loadingMakes ? "Make (loading…)" : "Make"}>
                <select
                  className={selectCls}
                  value={data.make}
                  disabled={!data.year || loadingMakes}
                  onChange={(e) => set({ make: e.target.value })}
                >
                  <option value="">{loadingMakes ? "Loading…" : "Select make…"}</option>
                  {makes.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </Field>

              <Field label={loadingModels ? "Model (loading…)" : "Model"}>
                <select
                  className={selectCls}
                  value={data.model}
                  disabled={!data.make || loadingModels}
                  onChange={(e) => set({ model: e.target.value })}
                >
                  <option value="">{loadingModels ? "Loading…" : "Select model…"}</option>
                  {models.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-ink">Vehicle condition</legend>
              <div className="flex gap-3">
                {[
                  { label: "Running", value: false },
                  { label: "Non-running", value: true },
                ].map((opt) => (
                  <label
                    key={String(opt.value)}
                    className={`cursor-pointer rounded-xl border px-6 py-3 text-sm transition ${
                      data.inoperable === opt.value
                        ? "border-gold bg-gold/10 font-semibold text-ink"
                        : "border-line text-muted hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="inoperable"
                      className="sr-only"
                      checked={data.inoperable === opt.value}
                      onChange={() => set({ inoperable: opt.value })}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
              {data.inoperable && (
                <p className="mt-2 text-xs text-muted">
                  Non-running vehicles require winch equipment — additional $100–$250 applies.
                </p>
              )}
            </fieldset>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 2 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name">
              <input
                className={inputCls}
                placeholder="Jane"
                value={data.firstName}
                onChange={(e) => set({ firstName: e.target.value })}
                autoFocus
              />
            </Field>
            <Field label="Last name">
              <input
                className={inputCls}
                placeholder="Doe"
                value={data.lastName}
                onChange={(e) => set({ lastName: e.target.value })}
              />
            </Field>
            <Field label="Phone">
              <input
                type="tel"
                className={inputCls}
                placeholder="(555) 123-4567"
                value={data.phone}
                onChange={(e) => set({ phone: e.target.value })}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                className={inputCls}
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => set({ email: e.target.value })}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Special instructions (optional)">
                <textarea
                  className={inputCls + " min-h-[80px] resize-y"}
                  placeholder="e.g. gate code, contact at destination, vehicle modifications…"
                  value={data.notes}
                  onChange={(e) => set({ notes: e.target.value })}
                />
              </Field>
            </div>
          </div>
        )}

        {error && (
          <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="rounded-full border border-line px-6 py-3 font-medium text-ink transition hover:border-gold"
            >
              ← Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright disabled:opacity-60"
          >
            {step < 2 ? "Next →" : submitting ? "Sending…" : "Get my quote"}
          </button>
        </div>
      </form>
    </div>
  );
}
