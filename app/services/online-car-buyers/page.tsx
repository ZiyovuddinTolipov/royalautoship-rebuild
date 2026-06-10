import type { Metadata } from "next";
import { serviceData } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "online-car-buyers";
const d = serviceData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/services/online-car-buyers" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <ServicePageTemplate
      data={d}
      breadcrumb={[{ label: "Online Car Buyers", href: "/services/online-car-buyers" }]}
    />
  );
}
