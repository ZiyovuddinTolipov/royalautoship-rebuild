import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routesData, routeBySlug } from "@/lib/routes-data";
import { stateBySlug } from "@/lib/states-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return routesData.map((r) => ({ route: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>;
}): Promise<Metadata> {
  const { route } = await params;
  const r = routeBySlug[route];
  if (!r) return {};
  return {
    title: `Ship a Car from ${r.fromName} to ${r.toName} | Royal Auto Ship`,
    description: `Auto transport from ${r.fromName} to ${r.toName}: ${r.distanceMiles.toLocaleString()} miles, ${r.transitDays} days transit. Open from ${r.openPrice}. Door-to-door, $0 down, fully insured.`,
    alternates: { canonical: `/ship-car-from/${r.slug}` },
  };
}

export default async function RouteShippingPage({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route } = await params;
  const r = routeBySlug[route];
  if (!r) notFound();

  // reverse route link
  const reverseSlug = `${r.to}-to-${r.from}`;
  const reverseRoute = routeBySlug[reverseSlug];

  const fromState = stateBySlug[r.from];
  const toState = stateBySlug[r.to];

  const faqs = [
    {
      q: `How much does it cost to ship a car from ${r.fromName} to ${r.toName}?`,
      a: `Open transport from ${r.fromName} to ${r.toName} typically runs ${r.openPrice}. Enclosed transport runs ${r.enclosedPrice}. Your Royal Auto Ship quote is all-inclusive — fuel, insurance and taxes built in, nothing extra at delivery.`,
    },
    {
      q: `How long does car shipping from ${r.fromName} to ${r.toName} take?`,
      a: `The route covers approximately ${r.distanceMiles.toLocaleString()} miles. Transit typically takes ${r.transitDays} days from pickup. Your advisor gives you a pickup window at booking and live updates throughout transit.`,
    },
    {
      q: `Do I pay anything upfront to ship from ${r.fromName} to ${r.toName}?`,
      a: `No. Royal Auto Ship requires $0 down. Nothing is due until a carrier is assigned, with the balance payable on delivery.`,
    },
    {
      q: `What is the difference between open and enclosed transport on this route?`,
      a: `Open transport (${r.openPrice}) is the safe, industry-standard method — your vehicle rides on an exposed multi-car carrier. Enclosed transport (${r.enclosedPrice}) seals your vehicle in a covered trailer, recommended for classic, luxury and high-value vehicles.`,
    },
  ];

  if (r.notes) {
    faqs.push({
      q: `Are there seasonal pricing factors on this route?`,
      a: r.notes,
    });
  }

  return (
    <>
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: `Ship Car from ${r.fromName} to ${r.toName}`, item: `${site.url}/ship-car-from/${r.slug}` },
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
                <span className="text-gold">
                  {r.fromName} → {r.toName}
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="rise font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Ship a Car from {r.fromName} to {r.toName}
          </h1>

          {/* Route stats */}
          <dl
            className="rise mt-8 flex flex-wrap gap-8 text-sm"
            style={{ animationDelay: "150ms" }}
          >
            {[
              ["Distance", `${r.distanceMiles.toLocaleString()} miles`],
              ["Transit time", `${r.transitDays} days`],
              ["Open transport", r.openPrice],
              ["Enclosed", r.enclosedPrice],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-muted-dark uppercase tracking-widest text-xs">{label}</dt>
                <dd className="mt-1 font-display text-2xl text-gold-bright">{value}</dd>
              </div>
            ))}
          </dl>

          {r.notes && (
            <p
              className="rise mt-6 max-w-xl rounded-xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm text-gold-bright"
              style={{ animationDelay: "250ms" }}
            >
              {r.notes}
            </p>
          )}

          <div className="rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "320ms" }}>
            <Link
              href={`/quote?from=${encodeURIComponent(r.fromName)}&to=${encodeURIComponent(r.toName)}`}
              className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get my {r.fromName} → {r.toName} quote
            </Link>
            <a href={site.phoneHref} className="rounded-full border border-line-dark px-7 py-3 font-medium text-paper hover:border-gold-bright">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 space-y-16">

        {/* Price table */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">
              {r.fromName} to {r.toName} car shipping cost
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-paper-2/80">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold text-ink">Transport type</th>
                    <th className="px-5 py-3 text-left font-semibold text-ink">Estimated cost</th>
                    <th className="px-5 py-3 text-left font-semibold text-ink">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr className="hover:bg-paper-2/40">
                    <td className="px-5 py-3 font-medium text-ink">Open transport</td>
                    <td className="px-5 py-3 font-medium text-gold">{r.openPrice}</td>
                    <td className="px-5 py-3 text-muted">Everyday vehicles — most economical</td>
                  </tr>
                  <tr className="hover:bg-paper-2/40">
                    <td className="px-5 py-3 font-medium text-ink">Enclosed transport</td>
                    <td className="px-5 py-3 font-medium text-gold">{r.enclosedPrice}</td>
                    <td className="px-5 py-3 text-muted">Classic, luxury and high-value vehicles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Prices are all-inclusive estimates — fuel, insurance and tolls included. Locked at booking. $0 due upfront.
            </p>
          </section>
        </Reveal>

        {/* Cities */}
        <Reveal>
          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl">
                Pickup cities in {r.fromName}
              </h2>
              <ul className="mt-4 space-y-2">
                {r.topCitiesFrom.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl">
                Delivery cities in {r.toName}
              </h2>
              <ul className="mt-4 space-y-2">
                {r.topCitiesTo.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* How it works */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">
              How {r.fromName} to {r.toName} shipping works
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                `Request your free quote — enter ${r.fromName} as origin and ${r.toName} as destination.`,
                "A dedicated advisor confirms the all-inclusive price and books the order. $0 due at this step.",
                `We assign a vetted, insured carrier on the ${r.fromName}–${r.toName} corridor.`,
                "Carrier arrives at your pickup address, completes a photo inspection, loads your vehicle.",
                `Live updates during the ${r.transitDays}-day transit. Your advisor is one call away.`,
                `Carrier delivers to your ${r.toName} address. Inspect against pickup report, sign, pay balance.`,
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-semibold text-sm text-ink">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-muted sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">
              {r.fromName} to {r.toName} — frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
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

        {/* Related: reverse route + state pages */}
        <Reveal>
          <section>
            <h2 className="font-display text-xl">Related routes &amp; guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {reverseRoute && (
                <Link
                  href={`/ship-car-from/${reverseSlug}`}
                  className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-medium text-ink transition hover:bg-gold/20"
                >
                  ↩ {r.toName} → {r.fromName}
                </Link>
              )}
              {fromState && (
                <Link
                  href={`/car-shipping/${fromState.slug}`}
                  className="rounded-full border border-line px-5 py-2 text-sm font-medium text-ink transition hover:border-gold"
                >
                  {fromState.name} car shipping guide
                </Link>
              )}
              {toState && (
                <Link
                  href={`/car-shipping/${toState.slug}`}
                  className="rounded-full border border-line px-5 py-2 text-sm font-medium text-ink transition hover:border-gold"
                >
                  {toState.name} car shipping guide
                </Link>
              )}
            </div>
          </section>
        </Reveal>
      </div>

      {/* CTA */}
      <section className="border-t border-line bg-ink text-paper grain">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-2xl font-light sm:text-3xl">
            {r.fromName} → {r.toName}. Your quote takes two minutes.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/quote?from=${encodeURIComponent(r.fromName)}&to=${encodeURIComponent(r.toName)}`}
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
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
