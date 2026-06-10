"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const services = [
  { href: "/services/door-to-door-car-shipping", label: "Door-to-Door Shipping" },
  { href: "/services/open-car-shipping", label: "Open Car Transport" },
  { href: "/services/enclosed-car-shipping", label: "Enclosed Car Transport" },
  { href: "/services/motorcycle-shipping", label: "Motorcycle Shipping" },
  { href: "/services/military-car-shipping", label: "Military Car Shipping" },
  { href: "/services/snowbird-car-shipping", label: "Snowbird Shipping" },
  { href: "/services/college-student-car-shipping", label: "Student Car Shipping" },
  { href: "/services/classic-car-shipping", label: "Classic Car Shipping" },
  { href: "/services/online-car-buyers", label: "Online Car Buyers" },
  { href: "/services/car-resellers", label: "Car Resellers" },
];

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Royal Auto Ship — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {/* Services dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm tracking-wide transition-colors hover:text-gold ${
                pathname.startsWith("/services") ? "text-gold" : "text-ink"
              }`}
            >
              Services
              <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-2xl border border-line bg-paper py-2 shadow-xl ring-1 ring-ink/5">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-sm text-ink transition-colors hover:bg-paper-2/60 hover:text-gold"
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="mx-5 mt-1 border-t border-line pt-2">
                  <Link
                    href="/services"
                    className="block py-2 text-xs font-medium text-gold hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-gold"
                  : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-medium tabular-nums text-ink transition-colors hover:text-gold"
          >
            {site.phone}
          </a>
          <Link
            href="/quote"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper px-4 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {/* Mobile services accordion */}
          <div className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-center justify-between py-3 text-base text-ink"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pb-3 pl-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted hover:text-gold"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="block pt-1 text-xs font-medium text-gold"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-4">
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Get a quote
            </Link>
            <a href={site.phoneHref} className="text-sm font-medium text-ink">
              {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
