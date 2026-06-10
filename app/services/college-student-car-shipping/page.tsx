import type { Metadata } from "next";
import { serviceData } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "college-student-car-shipping";
const d = serviceData[SLUG];

export const metadata: Metadata = {
  title: d?.metaTitle,
  description: d?.metaDesc,
  alternates: { canonical: "/services/college-student-car-shipping" },
};

export default function Page() {
  if (!d) notFound();
  return (
    <ServicePageTemplate
      data={d}
      breadcrumb={[{ label: "College Student Car Shipping", href: "/services/college-student-car-shipping" }]}
    />
  );
}
