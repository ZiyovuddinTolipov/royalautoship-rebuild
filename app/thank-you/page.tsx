import type { Metadata } from "next";
import Link from "next/link";
import { Crown } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <Crown className="w-12 text-gold" />
      <h1 className="mt-6 font-display text-4xl font-light sm:text-5xl">
        Your quote is on its way.
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-muted">
        A dedicated advisor is reviewing your route and will reach out shortly
        with an all-inclusive price. In a hurry? Call{" "}
        <a href={site.phoneHref} className="font-medium text-ink underline decoration-gold underline-offset-4">
          {site.phone}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink-3"
      >
        Back to home
      </Link>
    </div>
  );
}
