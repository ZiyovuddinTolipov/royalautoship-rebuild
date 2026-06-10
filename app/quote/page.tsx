import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Car Shipping Quote",
  description:
    "Get a free, all-inclusive auto transport quote in two minutes. $0 down, full insurance, door-to-door delivery across all 50 states.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">
        Free instant quote
      </p>
      <h1 className="mt-4 font-display text-4xl font-light sm:text-5xl">
        Two minutes to a <em className="italic text-gold">royal price.</em>
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        All-inclusive pricing — fuel, insurance and taxes built in. Nothing due
        until a carrier is assigned. Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-medium text-ink underline decoration-gold underline-offset-4">
          {site.phone}
        </a>
      </p>

      <div className="mt-10">
        <Suspense>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
