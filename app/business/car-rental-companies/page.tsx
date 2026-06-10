import type { Metadata } from "next";
import { businessData } from "@/lib/services-data";
import { BusinessPageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "car-rental-companies";
const d = businessData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/business/car-rental-companies" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <BusinessPageTemplate
      data={d}
      breadcrumb={[{ label: "Car Rental Companies", href: "/business/car-rental-companies" }]}
    />
  );
}
