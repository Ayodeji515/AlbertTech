import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

const service = servicesData.find((s) => s.slug === "website-development")!;

export const metadata: Metadata = {
  title: `${service.title} | Enterprise Next.js Development`,
  description: service.shortDescription,
  openGraph: {
    title: `${service.title} – ALBERTECH`,
    description: service.shortDescription,
  },
};

export default function WebsiteDevelopmentPage() {
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}

