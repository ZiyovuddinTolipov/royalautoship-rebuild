"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VEHICLE_TYPES = [
  "Car",
  "Truck",
  "SUV",
  "Motorcycle",
  "ATV & UTV",
  "Boat",
  "RV / Trailer",
  "Commercial Truck",
  "Heavy Equipment",
  "Other",
];

const CURRENT_YEAR = 2026;
const YEARS = Array.from({ length: CURRENT_YEAR - 1959 }, (_, i) =>
  String(CURRENT_YEAR - i),
);

type FormData = {
  from: string;
  to: string;
  transport: "open" | "enclosed" | "";
  consent: boolean;
  vehicleType: string;
  year: string;
  make: string;
  model: string;
  running: "yes" | "no" | "";
  date: string;
  name: string;
  phone: string;
  email: string;
};

const EMPTY: FormData = {
  from: "",
  to: "",
  transport: "",
  consent: false,
  vehicleType: "Car",
  year: "",
  make: "",
  model: "",
  running: "",
  date: "",
  name: "",
  phone: "",
  email: "",
};

const STORAGE_KEY = "ras-quote-draft";

const STEPS = ["Route", "Vehicle", "Contact"];

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export function QuoteForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  // Restore draft from sessionStorage, URL prefill wins; runs client-side only
  // (the form renders inside <Suspense>, so there is no server-rendered markup
  // to mismatch against)
  const [data, setData] = useState<FormData>(() => {
    if (typeof window === "undefined") return EMPTY;
    let draft: Partial<FormData> = {};
    try {
      draft = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {
      /* corrupt draft — start clean */
    }
    return {
      ...EMPTY,
      ...draft,
      from: params.get("from") ?? draft.from ?? "",
      to: params.get("to") ?? draft.to ?? "",
    };
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const set = (patch: Partial<FormData>) => {
    setError("");
    setData((d) => ({ ...d, ...patch }));
  };

  const validate = (s: number): string => {
    if (s === 0) {
      if (!data.from.trim() || !data.to.trim())
        return "Enter both pickup and delivery locations.";
      if (!data.transport) return "Choose open or enclosed transport.";
      if (!data.consent) return "Please accept the consent checkbox.";
    }
    if (s === 1) {
      if (!data.year) return "Select the vehicle year.";
      if (!data.make.trim() || !data.model.trim())
        return "Enter the vehicle make and model.";
      if (!data.running) return "Tell us whether the vehicle runs.";
    }
    if (s === 2) {
      if (!data.date) return "Pick the first available date.";
      if (!data.name.trim()) return "Enter your full name.";
      if (!/^[\d\s()+.-]{7,}$/.test(data.phone))
        return "Enter a valid phone number.";
      if (!/^\S+@\S+\.\S+$/.test(data.email))
        return "Enter a valid email address.";
    }
    return "";
  };

  const next = () => {
    const msg = validate(step);
    if (msg) return setError(msg);
    setStep((s) => Math.min(s + 1, 2));
  };

  const submit = async () => {
    const msg = validate(2);
    if (msg) return setError(msg);
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      sessionStorage.removeItem(STORAGE_KEY);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong sending your request. Please try again or call us.");
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_24px_60px_-30px_rgba(15,20,34,0.35)] sm:p-10">
      {/* Progress */}
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
            <span
              className={`hidden text-sm sm:block ${
                i === step ? "font-semibold text-ink" : "text-muted"
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <span
                className={`h-px flex-1 ${i < step ? "bg-gold" : "bg-line"}`}
                aria-hidden="true"
              />
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
        {step === 0 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Transport car from">
                <input
                  className={inputCls}
                  placeholder="City or ZIP"
                  value={data.from}
                  onChange={(e) => set({ from: e.target.value })}
                  autoFocus
                />
              </Field>
              <Field label="Transport car to">
                <input
                  className={inputCls}
                  placeholder="City or ZIP"
                  value={data.to}
                  onChange={(e) => set({ to: e.target.value })}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-ink">
                Transport type
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    {
                      id: "open",
                      title: "Open",
                      hint: "Industry standard — most economical",
                    },
                    {
                      id: "enclosed",
                      title: "Enclosed",
                      hint: "Full protection — classics & exotics",
                    },
                  ] as const
                ).map((t) => (
                  <label
                    key={t.id}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      data.transport === t.id
                        ? "border-gold bg-gold/10"
                        : "border-line hover:border-gold/50"
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
                    <span className="mt-1 block text-sm text-muted">
                      {t.hint}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set({ consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 accent-(--gold)"
              />
              <span>
                I agree to be contacted by Royal Auto Ship by phone, SMS or
                email about my quote. Message and data rates may apply.
              </span>
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Vehicle type">
                <select
                  className={inputCls}
                  value={data.vehicleType}
                  onChange={(e) => set({ vehicleType: e.target.value })}
                >
                  {VEHICLE_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Year">
                <select
                  className={inputCls}
                  value={data.year}
                  onChange={(e) => set({ year: e.target.value })}
                >
                  <option value="">Select year…</option>
                  {YEARS.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </Field>
              <Field label="Make">
                <input
                  className={inputCls}
                  placeholder="e.g. Toyota"
                  value={data.make}
                  onChange={(e) => set({ make: e.target.value })}
                />
              </Field>
              <Field label="Model">
                <input
                  className={inputCls}
                  placeholder="e.g. Camry"
                  value={data.model}
                  onChange={(e) => set({ model: e.target.value })}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-ink">
                Is it running?
              </legend>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((v) => (
                  <label
                    key={v}
                    className={`cursor-pointer rounded-xl border px-6 py-3 capitalize transition ${
                      data.running === v
                        ? "border-gold bg-gold/10 font-semibold"
                        : "border-line hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="running"
                      className="sr-only"
                      checked={data.running === v}
                      onChange={() => set({ running: v })}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First available date">
              <input
                type="date"
                className={inputCls}
                value={data.date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => set({ date: e.target.value })}
              />
            </Field>
            <Field label="Full name">
              <input
                className={inputCls}
                placeholder="Jane Doe"
                value={data.name}
                onChange={(e) => set({ name: e.target.value })}
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
            <Field label="Send quote to (email)">
              <input
                type="email"
                className={inputCls}
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => set({ email: e.target.value })}
              />
            </Field>
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
              ← Previous
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
