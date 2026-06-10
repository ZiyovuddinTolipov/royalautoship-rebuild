import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing auto transport services provided by Royal Auto Ship.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-light">
        Terms &amp; Conditions
      </h1>
      <div className="mt-8 space-y-6 leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink">
        <h2>1. Services</h2>
        <p>
          Royal Auto Ship arranges the transport of vehicles through a network
          of licensed, insured motor carriers. We act as a registered broker;
          the assigned carrier performs the physical transport.
        </p>
        <h2>2. Quotes and payment</h2>
        <p>
          Quotes are all-inclusive estimates based on the information you
          provide. No deposit is required; payment becomes due when a carrier
          is assigned, with the balance payable on delivery unless agreed
          otherwise.
        </p>
        <h2>3. Pickup and delivery</h2>
        <p>
          Pickup and delivery dates are estimates and may shift due to
          weather, traffic or mechanical factors. An inspection report is
          completed at both pickup and delivery; please note any damage on the
          report before signing.
        </p>
        <h2>4. Insurance and claims</h2>
        <p>
          Vehicles are covered by the assigned carrier&apos;s cargo insurance
          from pickup to delivery. Claims must be noted on the delivery
          inspection report and submitted in writing within the period required
          by the carrier&apos;s policy.
        </p>
        <h2>5. Vehicle condition</h2>
        <p>
          Remove personal belongings and ensure the vehicle has no more than a
          quarter tank of fuel. Non-running vehicles must be declared at the
          time of quoting.
        </p>
        <h2>6. Contact</h2>
        <p>
          Questions about these terms: {site.phone} or {site.email}.{" "}
          {site.name}, {site.address.street}, {site.address.city},{" "}
          {site.address.state} {site.address.zip}.
        </p>
      </div>
    </div>
  );
}
