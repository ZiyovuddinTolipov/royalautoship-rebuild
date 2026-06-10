import type { Metadata } from "next";
import { serviceData } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "motorcycle-shipping";
const d = serviceData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/services/motorcycle-shipping" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <ServicePageTemplate
      data={d}
      breadcrumb={[{ label: "Motorcycle Shipping", href: "/services/motorcycle-shipping" }]}
    />
  );
}
