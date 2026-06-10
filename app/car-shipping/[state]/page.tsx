import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statesData, stateBySlug } from "@/lib/states-data";
import { routeBySlug } from "@/lib/routes-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return statesData.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) return {};
  return {
    title: `${s.name} Car Shipping Services | Royal Auto Ship`,
    description: `Ship a car to or from ${s.name}. Door-to-door auto transport across all 50 states — $0 down, fully insured. Free quote from Royal Auto Ship. Call (215) 201-2020.`,
    alternates: { canonical: `/car-shipping/${s.slug}` },
  };
}

const faqs = (stateName: string) => [
  {
    q: `How much does it cost to ship a car to or from ${stateName}?`,
    a: `Cost depends on the distance, vehicle type and transport method. Short regional hauls typically run $300–$600; mid-distance routes $600–$1,000; cross-country moves $1,000–$1,500. Your Royal Auto Ship quote is all-inclusive — no hidden fees.`,
  },
  {
    q: `How long does car shipping to or from ${stateName} take?`,
    a: `Regional routes (under 500 miles) take 1–3 days. Most interstate moves take 3–7 days. Cross-country routes run 7–10 days. Your advisor gives you a window at booking and live updates in transit.`,
  },
  {
    q: `Do I pay anything upfront to ship a car from ${stateName}?`,
    a: `No. Royal Auto Ship requires $0 down. Nothing is due until a carrier is assigned, with the balance payable on delivery.`,
  },
  {
    q: `Is my vehicle insured during transport in ${stateName}?`,
    a: `Yes. Every carrier in our network carries comprehensive cargo insurance, which we verify before assignment. Your vehicle is covered from pickup to delivery.`,
  },
];

export default async function StateShippingPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) notFound();

  const stateRoutes = s.popularRoutes
    .map((slug) => routeBySlug[slug])
    .filter(Boolean);

  const pageFaqs = faqs(s.name);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pageFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: `${s.name} Car Shipping`, item: `${site.url}/car-shipping/${s.slug}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-dark">
              <li><Link href="/" className="hover:text-gold-bright">Home</Link></li>
              <li className="flex items-center gap-1">
                <span aria-hidden="true">/</span>
                <span className="text-gold">{s.name} Car Shipping</span>
              </li>
            </ol>
          </nav>

          <p className="rise text-sm uppercase tracking-[0.3em] text-gold">
            {s.abbr} — Auto Transport
          </p>
          <h1 className="rise mt-4 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
            {s.name} Car Shipping Services
          </h1>
          <p className="rise mt-5 max-w-2xl text-lg leading-relaxed text-muted-dark" style={{ animationDelay: "200ms" }}>
            {s.blurb}
          </p>
          {s.seasonal && (
            <p className="rise mt-4 max-w-xl rounded-xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm text-gold-bright" style={{ animationDelay: "280ms" }}>
              {s.seasonal}
            </p>
          )}
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
            <Link href="/quote" className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright">
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="rounded-full border border-line-dark px-7 py-3 font-medium text-paper hover:border-gold-bright">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 space-y-16">

        {/* Cities */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">
              Cities we serve in {s.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {s.cities.map((city) => (
                <span key={city} className="rounded-full border border-line bg-paper-2/60 px-4 py-1.5 text-sm font-medium text-ink">
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We pick up and deliver door-to-door throughout {s.name} — not just major cities. If your street can fit a carrier truck, we come to you. Otherwise your advisor arranges the closest safe meeting point.
            </p>
          </section>
        </Reveal>

        {/* Popular routes */}
        {stateRoutes.length > 0 && (
          <Reveal>
            <section>
              <h2 className="font-display text-2xl sm:text-3xl">
                Popular {s.name} auto transport routes
              </h2>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full text-sm">
                  <thead className="bg-paper-2/80">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-ink">Route</th>
                      <th className="px-5 py-3 text-left font-semibold text-ink">Distance</th>
                      <th className="px-5 py-3 text-left font-semibold text-ink">Transit</th>
                      <th className="px-5 py-3 text-left font-semibold text-ink">Open est.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {stateRoutes.map((r) => (
                      <tr key={r.slug} className="hover:bg-paper-2/40">
                        <td className="px-5 py-3">
                          <Link href={`/ship-car-from/${r.slug}`} className="font-medium text-gold underline-offset-4 hover:underline">
                            {r.fromName} → {r.toName}
                          </Link>
                        </td>
                        <td className="px-5 py-3 text-muted">{r.distanceMiles.toLocaleString()} mi</td>
                        <td className="px-5 py-3 text-muted">{r.transitDays} days</td>
                        <td className="px-5 py-3 font-medium text-gold">{r.openPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted">Prices are estimates. Your quote is all-inclusive and locked at booking.</p>
            </section>
          </Reveal>
        )}

        {/* Why Royal */}
        <Reveal>
          <section className="rounded-3xl border border-line bg-paper-2/50 p-8">
            <h2 className="font-display text-2xl sm:text-3xl">Why ship with Royal Auto Ship?</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                ["$0 down payment", "Nothing is due until a carrier is assigned. Pay the balance on delivery."],
                ["Full insurance coverage", "Every carrier is verified for comprehensive cargo insurance before assignment."],
                ["Door-to-door delivery", "We pick up at your address and deliver to the destination — no terminals."],
                ["Dedicated advisor", "One person manages your shipment from quote to delivery. Real name, direct line."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-line bg-paper p-5">
                  <dt className="font-display text-lg">{title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">
              {s.name} car shipping — frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {pageFaqs.map((f) => (
                <details key={f.q} className="faq py-4">
                  <summary className="flex items-center justify-between gap-4 font-display text-base sm:text-lg">
                    {f.q}
                    <span className="faq-icon shrink-0 text-2xl font-light text-gold" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* CTA */}
      <section className="border-t border-line bg-ink text-paper grain">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-2xl font-light sm:text-3xl">
            Ready to ship your car to or from {s.name}?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright">
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="rounded-full border border-line-dark px-8 py-3.5 font-medium text-paper hover:border-gold-bright">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
