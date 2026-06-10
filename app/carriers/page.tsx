import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carriers — Join the Royal Auto Ship Network",
  description:
    "Are you a licensed auto transport carrier? Partner with Royal Auto Ship to grow your load volume. Apply to join our vetted carrier network.",
  alternates: { canonical: "/carriers" },
};

const requirements = [
  "Active MC authority and DOT registration",
  "Minimum $1,000,000 cargo insurance coverage",
  "Clean safety rating (Satisfactory or Conditional)",
  "At least one year of active hauling history",
  "Professional communication — our customers expect updates",
];

export default function CarriersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">For carriers</p>
      <h1 className="mt-4 font-display text-4xl font-light sm:text-5xl">
        Join the Royal Auto Ship carrier network.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted">
        We connect quality carriers with consistent load volume on routes across
        all 50 states. We work with carriers who take their safety record and
        customer communication as seriously as we do.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-light">What we look for</h2>
        <ul className="mt-5 space-y-3">
          {requirements.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span className="text-muted">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-line bg-paper-2/50 p-8">
        <h2 className="font-display text-2xl font-light">Apply to the network</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Email your MC number, DOT number and a brief note about your operation
          to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-ink underline decoration-gold underline-offset-4"
          >
            {site.email}
          </a>{" "}
          with subject line <strong>Carrier Application</strong>. We review
          every application and respond within 2 business days.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Prefer to talk? Call{" "}
          <a
            href={site.phoneHref}
            className="font-medium text-ink underline decoration-gold underline-offset-4"
          >
            {site.phone}
          </a>{" "}
          and ask for the carrier relations team.
        </p>
      </section>
    </div>
  );
}
