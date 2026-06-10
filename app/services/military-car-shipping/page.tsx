import type { Metadata } from "next";
import { serviceData } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "military-car-shipping";
const d = serviceData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/services/military-car-shipping" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <ServicePageTemplate
      data={d}
      breadcrumb={[{ label: "Military Car Shipping", href: "/services/military-car-shipping" }]}
    />
  );
}
