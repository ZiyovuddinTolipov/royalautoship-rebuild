import type { Metadata } from "next";
import Link from "next/link";
import { Crown } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Auto Transport Experts",
  description:
    "Royal Auto Ship is a Philadelphia-based auto transport company moving vehicles across all 50 states. Meet the team, our mission and the standards behind every shipment.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Transparency",
    text: "The first price is the final price. Every quote is all-inclusive and every process step is visible to you.",
  },
  {
    title: "Reliability",
    text: "We only dispatch carriers whose insurance and safety records we have verified ourselves — no exceptions.",
  },
  {
    title: "Care",
    text: "Your car is treated like the crown jewel it is. Inspection reports at both ends, updates in between.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="grain bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="rise text-sm uppercase tracking-[0.3em] text-gold">
            About Royal Auto Ship
          </p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Auto transport, treated like a{" "}
            <em className="italic text-gold-bright">royal duty.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-light sm:text-4xl">
              Who we are
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Royal Auto Ship is an auto transport company headquartered in
              Philadelphia, Pennsylvania, moving cars, motorcycles and fleets
              across all 50 states. We built the company around a simple
              observation: car shipping is stressful because customers are kept
              in the dark — about price, about timing, about who is actually
              driving their car.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              So we turned the lights on. All-inclusive quotes with no
              deposits. Carriers whose insurance we verify before every single
              assignment. One dedicated advisor per shipment who answers the
              phone, knows your name and knows where your car is.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-light sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              To make vehicle transport feel effortless — safe, transparent and
              on time, every time. We measure ourselves on one number: how many
              customers come back or send a friend. With more than 2,000
              vehicles delivered and over 1,000 five-star reviews, that number
              keeps growing.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                ["2,000+", "deliveries"],
                ["1,000+", "5-star reviews"],
                ["50", "states"],
              ].map(([v, l]) => (
                <div key={l} className="border-t-2 border-gold pt-3">
                  <p className="font-display text-3xl">{v}</p>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-light sm:text-4xl">
              What we stand on
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-paper p-7">
                  <Crown className="w-6 text-gold" />
                  <h3 className="mt-4 font-display text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Put us to the test.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/quote"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="font-medium text-ink hover:text-gold">
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
