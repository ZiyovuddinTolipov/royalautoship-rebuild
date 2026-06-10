import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to a Royal Auto Ship advisor: (215) 201-2020, support@royalautoship.com, or visit us at 300 Avon St, Philadelphia, PA 19116. Open 7 days a week.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Royal Auto Ship",
          url: `${site.url}/contact`,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-light sm:text-5xl">
          Real people, <em className="italic text-gold">real answers.</em>
        </h1>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-paper p-7">
            <h2 className="font-display text-lg">Call us</h2>
            <p className="mt-2 text-sm text-muted">
              Advisors answer 7 days a week.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 block font-display text-2xl text-ink transition-colors hover:text-gold"
            >
              {site.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-7">
            <h2 className="font-display text-lg">Email us</h2>
            <p className="mt-2 text-sm text-muted">
              Replies within one business hour.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-all font-medium text-ink underline decoration-gold underline-offset-4 hover:text-gold"
            >
              {site.email}
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-7">
            <h2 className="font-display text-lg">Visit us</h2>
            <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-ink">{h.days}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-line bg-paper-2/60 p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-light sm:text-3xl">
            Already know the route? Skip the small talk.
          </h2>
          <Link
            href="/quote"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
