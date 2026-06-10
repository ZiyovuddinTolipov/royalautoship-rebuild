import type { Metadata } from "next";
import { businessData } from "@/lib/services-data";
import { BusinessPageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "auto-dealerships";
const d = businessData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/business/auto-dealerships" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <BusinessPageTemplate
      data={d}
      breadcrumb={[{ label: "Auto Dealerships", href: "/business/auto-dealerships" }]}
    />
  );
}
