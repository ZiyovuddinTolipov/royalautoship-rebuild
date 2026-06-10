import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Crown } from "@/components/Logo";
import { site } from "@/lib/site";
import type { ServiceData, CostRow } from "@/lib/services-data";

function CostTable({ rows, hasEnclosed }: { rows: CostRow[]; hasEnclosed: boolean }) {
  const hasPrice = rows.some((r) => r.price);
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full text-sm">
        <thead className="bg-paper-2/80">
          <tr>
            <th className="px-5 py-3 text-left font-semibold text-ink">Route</th>
            {hasPrice ? (
              <th className="px-5 py-3 text-left font-semibold text-ink">Estimated cost</th>
            ) : (
              <>
                <th className="px-5 py-3 text-left font-semibold text-ink">Open transport</th>
                {hasEnclosed && (
                  <th className="px-5 py-3 text-left font-semibold text-ink">Enclosed</th>
                )}
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((r) => (
            <tr key={r.route} className="hover:bg-paper-2/40">
              <td className="px-5 py-3 text-ink">{r.route}</td>
              {hasPrice ? (
                <td className="px-5 py-3 font-medium text-gold">{r.price}</td>
              ) : (
                <>
                  <td className="px-5 py-3 font-medium text-gold">{r.open ?? "—"}</td>
                  {hasEnclosed && (
                    <td className="px-5 py-3 font-medium text-gold">{r.enclosed ?? "—"}</td>
                  )}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ServicePageTemplate({
  data,
  breadcrumb,
}: {
  data: ServiceData;
  breadcrumb: { label: string; href: string }[];
}) {
  const hasEnclosed = data.costRows.some((r) => r.enclosed);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ...breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        item: `${site.url}${b.href}`,
      })),
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-dark">
              <li>
                <Link href="/" className="hover:text-gold-bright">Home</Link>
              </li>
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-1">
                  <span aria-hidden="true">/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-gold">{b.label}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-gold-bright">{b.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="rise flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold">
            <Crown className="w-5" /> Royal Auto Ship
          </p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            {data.h1}
          </h1>
          <p
            className="rise mt-4 max-w-xl text-lg leading-relaxed text-muted-dark"
            style={{ animationDelay: "200ms" }}
          >
            {data.tagline}
          </p>
          <div
            className="rise mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/quote"
              className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-line-dark px-7 py-3 font-medium text-paper transition hover:border-gold-bright"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 space-y-16">
        {/* Intro */}
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{data.intro}</p>
        </Reveal>

        {/* What is it */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">What is {data.h1.toLowerCase()}?</h2>
            <p className="mt-4 leading-relaxed text-muted">{data.whatIs}</p>
          </section>
        </Reveal>

        {/* How it works */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">How it works</h2>
            <ol className="mt-6 space-y-4">
              {data.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-semibold text-sm text-ink">
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        {/* CTA inline */}
        <Reveal>
          <div className="rounded-3xl border border-gold/30 bg-paper-2/60 p-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <p className="font-display text-xl font-light">
              Ready to ship? Get your all-inclusive price in two minutes.
            </p>
            <Link
              href="/quote"
              className="shrink-0 rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get a free quote
            </Link>
          </div>
        </Reveal>

        {/* Pricing */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">How much does it cost?</h2>
            <p className="mt-4 leading-relaxed text-muted">{data.costIntro}</p>
            <div className="mt-6">
              <CostTable rows={data.costRows} hasEnclosed={hasEnclosed} />
            </div>
            <p className="mt-3 text-sm text-muted">{data.costNote}</p>
          </section>
        </Reveal>

        {/* Factors (if present) */}
        {data.factors && data.factors.length > 0 && (
          <Reveal>
            <section>
              <h2 className="font-display text-2xl sm:text-3xl">What affects the price?</h2>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                {data.factors.map((f) => (
                  <div key={f.title} className="rounded-xl border border-line p-5">
                    <dt className="font-display text-lg">{f.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{f.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </Reveal>
        )}

        {/* FAQ */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {data.faqs.map((f) => (
                <details key={f.q} className="faq py-4">
                  <summary className="flex items-center justify-between gap-4 font-display text-base sm:text-lg">
                    {f.q}
                    <span className="faq-icon shrink-0 text-2xl font-light text-gold" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted text-sm sm:text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Related */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl">Related services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {data.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="rounded-full border border-line px-5 py-2 text-sm font-medium text-ink transition hover:border-gold hover:text-gold"
                >
                  {slug
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-line bg-ink text-paper grain">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-2xl font-light sm:text-3xl">
            $0 down. Fully insured. One advisor, start to finish.
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

// Business page variant — simpler layout
export function BusinessPageTemplate({
  data,
  breadcrumb,
}: {
  data: {
    metaTitle?: string;
    metaDesc?: string;
    slug: string;
    h1: string;
    tagline: string;
    intro: string;
    benefits: { title: string; text: string }[];
    costRows: CostRow[];
    costNote: string;
    faqs: { q: string; a: string }[];
  };
  breadcrumb: { label: string; href: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-dark">
              <li><Link href="/" className="hover:text-gold-bright">Home</Link></li>
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-1">
                  <span aria-hidden="true">/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-gold">{b.label}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-gold-bright">{b.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="rise font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            {data.h1}
          </h1>
          <p className="rise mt-4 max-w-xl text-lg text-muted-dark" style={{ animationDelay: "120ms" }}>
            {data.tagline}
          </p>
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <Link href="/quote" className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright">
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="rounded-full border border-line-dark px-7 py-3 font-medium text-paper hover:border-gold-bright">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 space-y-14">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{data.intro}</p>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">Why Royal Auto Ship?</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {data.benefits.map((b) => (
                <div key={b.title} className="rounded-xl border border-line p-5">
                  <Crown className="w-5 text-gold" />
                  <dt className="mt-3 font-display text-lg">{b.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{b.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">Pricing</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-paper-2/80">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold text-ink">Route / volume</th>
                    <th className="px-5 py-3 text-left font-semibold text-ink">Estimated cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {data.costRows.map((r) => (
                    <tr key={r.route} className="hover:bg-paper-2/40">
                      <td className="px-5 py-3 text-ink">{r.route}</td>
                      <td className="px-5 py-3 font-medium text-gold">{r.price ?? r.open ?? r.enclosed ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">{data.costNote}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {data.faqs.map((f) => (
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

      <section className="border-t border-line bg-ink text-paper grain">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-2xl font-light sm:text-3xl">
            Volume rates. One advisor. $0 down per shipment.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink hover:-translate-y-0.5 hover:bg-gold-bright transition">
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
