import type { Metadata } from "next";
import { businessData } from "@/lib/services-data";
import { BusinessPageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "auto-auctions";
const d = businessData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/business/auto-auctions" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <BusinessPageTemplate
      data={d}
      breadcrumb={[{ label: "Auto Auctions", href: "/business/auto-auctions" }]}
    />
  );
}
