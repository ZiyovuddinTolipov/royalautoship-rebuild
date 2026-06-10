import type { Metadata } from "next";
import { serviceData } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "open-car-shipping";
const d = serviceData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/services/open-car-shipping" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <ServicePageTemplate
      data={d}
      breadcrumb={[{ label: "Open Car Shipping", href: "/services/open-car-shipping" }]}
    />
  );
}
