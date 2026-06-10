import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Car Shipping Works — Step by Step",
  description:
    "How auto transport works with Royal Auto Ship: get an all-inclusive quote, we assign a vetted carrier, your car is picked up at your door and delivered on time. $0 down.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    title: "Request your quote",
    text: "Fill out the two-minute form or call your advisor. Tell us the route, the vehicle and your first available date. The price you get is all-inclusive — fuel, insurance and taxes built in.",
  },
  {
    title: "Confirm and book",
    text: "Happy with the price? Confirm the order online. You pay nothing at this point — $0 down is the rule, not a promotion.",
  },
  {
    title: "We assign a vetted carrier",
    text: "We match your shipment with an insured, top-rated carrier from our network. We verify their insurance and safety record before every assignment.",
  },
  {
    title: "Pickup at your door",
    text: "The driver meets you at the pickup address, completes a bumper-to-bumper inspection report with photos, and loads your vehicle.",
  },
  {
    title: "Track it in transit",
    text: "Your advisor sends free status updates at every milestone. Questions in between? One call, one person, real answers.",
  },
  {
    title: "Delivery and final inspection",
    text: "The carrier delivers to the destination address. You inspect the vehicle against the pickup report, sign, and pay the balance — only now.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How car shipping works with Royal Auto Ship",
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.text,
          })),
        }}
      />

      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="rise text-sm uppercase tracking-[0.3em] text-gold">
            How it works
          </p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            From your driveway to theirs —{" "}
            <em className="italic text-gold-bright">six royal steps.</em>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted-dark"
            style={{ animationDelay: "240ms" }}
          >
            No deposits, no hidden fees, no call centers. One advisor walks
            your car through every step below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <ol className="space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.title}>
              <li className="relative border-l-2 border-gold pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display font-semibold text-ink">
                  {i + 1}
                </span>
                <h2 className="font-display text-2xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-16 rounded-3xl border border-line bg-paper-2/60 p-8 text-center">
            <h2 className="font-display text-2xl font-light">
              Ready to start step one?
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/quote"
                className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                Get a free quote
              </Link>
              <a href={site.phoneHref} className="font-medium text-ink hover:text-gold">
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
