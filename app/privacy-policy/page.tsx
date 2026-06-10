import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Royal Auto Ship collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-light">Privacy Policy</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink">
        <p>
          Royal Auto Ship (&quot;we&quot;, &quot;us&quot;) respects your
          privacy. This policy describes what we collect, why, and the choices
          you have.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you request a quote we collect your name, phone number, email
          address, vehicle details and the pickup and delivery locations. We
          also collect standard technical data (IP address, browser type) for
          security and analytics.
        </p>
        <h2>How we use it</h2>
        <p>
          We use your information to prepare your quote, arrange transport,
          communicate about your shipment, and — only with your consent — send
          service updates by phone, SMS or email. We never sell your personal
          information.
        </p>
        <h2>Sharing</h2>
        <p>
          We share shipment details with the assigned carrier strictly to
          perform the transport. Service providers (hosting, analytics) process
          data on our behalf under contract.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access, correction or deletion of your data at any
          time by emailing{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline decoration-gold underline-offset-4">
            {site.email}
          </a>
          . You can opt out of SMS by replying STOP.
        </p>
        <h2>Contact</h2>
        <p>
          {site.name}, {site.address.street}, {site.address.city},{" "}
          {site.address.state} {site.address.zip} — {site.phone}
        </p>
      </div>
    </div>
  );
}
