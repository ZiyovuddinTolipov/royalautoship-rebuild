import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, services } from "@/lib/site";

const quickLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About us" },
  { href: "/quote", label: "Get a quote" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="grain bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-dark">
            Nationwide auto transport with royal treatment. Door-to-door,
            fully insured, $0 down — since day one, your car is our crown
            jewel.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-dark transition-colors hover:text-gold-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/#services" className="text-muted-dark transition-colors hover:text-gold-bright">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Contact
          </h2>
          <address className="mt-4 not-italic leading-relaxed text-muted-dark">
            {site.address.street}, {site.address.city}, {site.address.state}{" "}
            {site.address.zip}
          </address>
          <p className="mt-2">
            <a href={site.phoneHref} className="text-paper transition-colors hover:text-gold-bright">
              {site.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="text-muted-dark transition-colors hover:text-gold-bright">
              {site.email}
            </a>
          </p>
          <ul className="mt-4 space-y-1 text-muted-dark">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="text-paper">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-dark sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-gold-bright">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="transition-colors hover:text-gold-bright">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
