import type { Metadata } from "next";
import Link from "next/link";
import { Crown } from "@/components/Logo";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Shipping & Auto Transport Services | Royal Auto Ship",
  description:
    "Ship your car anywhere in the US with Royal Auto Ship. Door-to-door auto transport, $0 down payment, full insurance and live updates. Free instant quote — (215) 201-2020.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "2,000+", label: "Vehicles delivered" },
  { value: "1,000+", label: "Five-star reviews" },
  { value: "50", label: "States covered" },
  { value: "$0", label: "Down payment" },
];

const steps = [
  {
    n: "01",
    title: "Get your quote",
    text: "Tell us the route and the vehicle. A dedicated advisor confirms an all-inclusive price — no hidden fees, nothing due up front.",
  },
  {
    n: "02",
    title: "We pick it up",
    text: "A vetted, insured carrier collects your vehicle at your door. You get a full inspection report and live updates in transit.",
  },
  {
    n: "03",
    title: "Delivered like royalty",
    text: "Your car arrives on schedule at the destination address. Inspect it, sign, done — payment only on delivery.",
  },
];

const features = [
  {
    title: "$0 down payment",
    text: "You pay when the carrier is assigned — never before. No deposits, no surprises.",
  },
  {
    title: "Full insurance coverage",
    text: "Every shipment rides under comprehensive carrier insurance, verified by us before pickup.",
  },
  {
    title: "Dedicated advisor",
    text: "One person owns your shipment start to finish. Real names, direct lines, no call centers.",
  },
  {
    title: "Free live updates",
    text: "Know where your vehicle is at every stage — pickup, transit, delivery — without asking.",
  },
];

const reviews = [
  {
    quote:
      "From quote to delivery in five days, cross-country. The driver called ahead, the car arrived spotless. Easiest part of my move.",
    name: "Amanda R.",
    route: "California → New York",
  },
  {
    quote:
      "As a dealer I ship dozens of cars a month. Royal is the only broker whose first price is the final price, every single time.",
    name: "Marcus T.",
    route: "Auto dealer, Florida",
  },
  {
    quote:
      "They moved my '67 Mustang enclosed, door to door. White-glove treatment the whole way. Worth every cent.",
    name: "George K.",
    route: "Texas → Arizona",
  },
];

const faqs = [
  {
    q: "How much does it cost to ship a car?",
    a: "Most coast-to-coast shipments run $1,000–$1,500 for open transport; shorter routes start around $500. Price depends on distance, vehicle size, transport type and season. Your quote is all-inclusive — fuel, insurance and taxes built in.",
  },
  {
    q: "How long does car shipping take?",
    a: "Cross-country routes typically take 7–10 days, regional routes 1–5 days. Your advisor gives you a pickup window when you book and live updates in transit.",
  },
  {
    q: "Is my car insured during transport?",
    a: "Yes. Every carrier in our network holds comprehensive cargo insurance, which we verify before assignment. Your vehicle is covered from pickup inspection to delivery inspection.",
  },
  {
    q: "Do I pay anything up front?",
    a: "No. Royal Auto Ship requires $0 down. You pay only after a carrier is assigned, with the balance due on delivery.",
  },
  {
    q: "What's the difference between open and enclosed transport?",
    a: "Open transport — your car rides on an open multi-car trailer, the safe industry standard and the most economical option. Enclosed transport adds full protection from weather and debris, recommended for classic, luxury and exotic vehicles.",
  },
  {
    q: "Can you ship a car that doesn't run?",
    a: "Yes. Non-running vehicles just need a carrier with a winch — mention the condition in your quote and we'll arrange the right equipment.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: site.name,
          url: site.url,
          telephone: "+1-215-201-2020",
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "US",
          },
          areaServed: "US",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: site.rating.value,
            reviewCount: site.rating.count,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-24 hidden w-full lg:block"
          viewBox="0 0 1200 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-20 100 C 200 100, 280 30, 520 40 S 980 90, 1220 30"
            stroke="var(--gold)"
            strokeOpacity="0.5"
            strokeWidth="2"
            className="route-dash"
          />
          <circle cx="520" cy="40" r="4" fill="var(--gold)" />
          <circle cx="1190" cy="33" r="4" fill="var(--gold)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-20 sm:px-6 lg:pt-28">
          <p className="rise flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold">
            <Crown className="w-5" /> Nationwide auto transport
          </p>
          <h1
            className="rise mt-6 max-w-3xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Ship your car{" "}
            <em className="font-light italic text-gold-bright">like royalty.</em>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted-dark"
            style={{ animationDelay: "240ms" }}
          >
            Door-to-door car shipping across all 50 states — fully insured,
            $0 down, one dedicated advisor from first call to final mile.
          </p>

          {/* Quote starter — no JS, GET → /quote prefilled */}
          <form
            action="/quote"
            method="GET"
            className="rise mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-line-dark bg-ink-2/80 p-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <label className="flex-1">
              <span className="sr-only">Ship from</span>
              <input
                name="from"
                required
                placeholder="From — city or ZIP"
                className="w-full rounded-xl border border-line-dark bg-ink px-4 py-3 text-paper placeholder:text-muted-dark focus:border-gold focus:outline-none"
              />
            </label>
            <svg
              viewBox="0 0 24 24"
              className="hidden h-5 w-5 shrink-0 text-gold sm:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 12h16m0 0-6-6m6 6-6 6" />
            </svg>
            <label className="flex-1">
              <span className="sr-only">Ship to</span>
              <input
                name="to"
                required
                placeholder="To — city or ZIP"
                className="w-full rounded-xl border border-line-dark bg-ink px-4 py-3 text-paper placeholder:text-muted-dark focus:border-gold focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-xl bg-gold px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get my quote
            </button>
          </form>

          <p
            className="rise mt-4 text-sm text-muted-dark"
            style={{ animationDelay: "480ms" }}
          >
            Or call{" "}
            <a href={site.phoneHref} className="font-medium text-gold-bright">
              {site.phone}
            </a>{" "}
            — advisors answer 7 days a week.
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-line-dark bg-ink-2/60">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl text-gold-bright">
                  {s.value}
                </dd>
                <dt className="mt-1 text-sm uppercase tracking-widest text-muted-dark">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            01 — How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight sm:text-5xl">
            Three steps between your driveway and theirs.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <article className="border-t-2 border-gold pt-6">
                <p className="font-display text-5xl font-light text-paper-2 [text-shadow:0_1px_0_var(--line)]">
                  {s.n}
                </p>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link
            href="/how-it-works"
            className="mt-12 inline-block border-b border-gold pb-0.5 font-medium text-ink transition-colors hover:text-gold"
          >
            See the full process →
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              02 — Services
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight sm:text-5xl">
              Whatever rolls, we move it.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <article className="group h-full rounded-2xl border border-line bg-paper p-7 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_40px_-12px_rgba(15,20,34,0.25)]">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  <Link
                    href={`/quote?service=${s.slug}`}
                    className="mt-5 inline-block text-sm font-medium text-gold transition group-hover:translate-x-1"
                  >
                    Get a quote →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Royal */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              03 — Why Royal
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
              The crown is earned, not claimed.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Auto transport runs on trust. We earn it with verified carriers,
              transparent pricing and a single advisor who answers the phone —
              every time.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink-3"
            >
              Start your shipment
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="rounded-2xl border border-line p-6">
                  <Crown className="w-6 text-gold" />
                  <h3 className="mt-4 font-display text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              04 — Reviews
            </p>
            <h2 className="mt-4 font-display text-4xl font-light sm:text-5xl">
              Word travels. So do we.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="flex h-full flex-col justify-between border-l-2 border-gold pl-6">
                  <blockquote className="font-display text-lg font-light italic leading-relaxed text-paper">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-gold-bright">
                      {r.name}
                    </span>
                    <span className="block text-muted-dark">{r.route}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            05 — FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-light sm:text-5xl">
            Before you ask.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="faq group py-5">
              <summary className="flex items-center justify-between gap-4 font-display text-lg">
                {f.q}
                <span
                  className="faq-icon shrink-0 text-2xl font-light text-gold"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-paper-2/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-light leading-snug sm:text-4xl">
              Your car&apos;s next journey starts with a{" "}
              <em className="italic text-gold">two-minute quote.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/quote"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                Get a free quote
              </Link>
              <a
                href={site.phoneHref}
                className="font-medium text-ink hover:text-gold"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
