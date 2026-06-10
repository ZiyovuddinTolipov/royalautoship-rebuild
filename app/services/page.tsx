import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Auto Transport Services | Royal Auto Ship",
  description:
    "Full range of auto transport services — door-to-door, open & enclosed shipping, motorcycle transport, military PCS, snowbird routes and more. Free quotes nationwide.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    slug: "door-to-door-car-shipping",
    title: "Door-to-Door Car Shipping",
    desc: "Carrier picks up and delivers directly to your address — no terminals, no extra trips.",
    icon: "🏠",
  },
  {
    slug: "open-car-shipping",
    title: "Open Car Transport",
    desc: "The industry-standard method. Safe, economical, and used for 90% of all shipments.",
    icon: "🚗",
  },
  {
    slug: "enclosed-car-shipping",
    title: "Enclosed Car Transport",
    desc: "Fully covered trailer for luxury, classic, and high-value vehicles. Maximum protection.",
    icon: "🔒",
  },
  {
    slug: "motorcycle-shipping",
    title: "Motorcycle Shipping",
    desc: "Secure crating and soft-strap loading for motorcycles, ATVs, and powersports.",
    icon: "🏍️",
  },
  {
    slug: "military-car-shipping",
    title: "Military Car Shipping",
    desc: "PCS-ready transport with military discount. We've moved vehicles for every branch.",
    icon: "⭐",
  },
  {
    slug: "snowbird-car-shipping",
    title: "Snowbird Car Shipping",
    desc: "Seasonal transport between Florida, Arizona and the northern states. Book early.",
    icon: "🌞",
  },
  {
    slug: "college-student-car-shipping",
    title: "College Student Car Shipping",
    desc: "Affordable transport when students move between home and campus — no surcharges.",
    icon: "🎓",
  },
  {
    slug: "classic-car-shipping",
    title: "Classic Car Shipping",
    desc: "Enclosed, white-glove transport for collector cars, antiques, and show vehicles.",
    icon: "🏆",
  },
  {
    slug: "online-car-buyers",
    title: "Online Car Buyers",
    desc: "Purchased from eBay, Carvana, or a private seller across the country? We deliver it.",
    icon: "💻",
  },
  {
    slug: "car-resellers",
    title: "Car Resellers & Independent Dealers",
    desc: "Volume pricing and priority dispatch for dealers moving inventory across states.",
    icon: "🏪",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          ],
        }}
      />

      {/* Hero */}
      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="rise text-sm uppercase tracking-[0.3em] text-gold">Auto transport services</p>
          <h1 className="rise mt-4 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
            Every way to ship a car.<br className="hidden sm:block" /> One trusted name.
          </h1>
          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark" style={{ animationDelay: "160ms" }}>
            From a daily driver across two states to a classic car collection headed to auction —
            Royal Auto Ship has the equipment, carriers, and experience to move it safely.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <Link
              href="/quote"
              className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-line-dark px-7 py-3 font-medium text-paper hover:border-gold-bright"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-3xl border border-line bg-paper p-7 transition hover:border-gold/50 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                <svg
                  className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="mt-4 font-display text-xl font-light text-ink group-hover:text-gold">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "States covered", value: "All 50" },
              { label: "Carrier network", value: "15,000+" },
              { label: "Years in service", value: "10+" },
              { label: "Deposit required", value: "$0 down" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-sm uppercase tracking-widest text-muted">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-light text-gold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="grain bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-2xl font-light sm:text-3xl">
            Not sure which service fits? Talk to a real advisor.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-line-dark px-8 py-3.5 font-medium text-paper hover:border-gold-bright"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
