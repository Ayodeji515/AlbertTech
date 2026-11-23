import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

const service = servicesData.find((s) => s.slug === "automation")!;

export const metadata: Metadata = {
  title: `${service.title} | Workflow & API Integration`,
  description: service.shortDescription,
  openGraph: {
    title: `${service.title} – ALBERTECH`,
    description: service.shortDescription,
  },
};

export default function AutomationPage() {
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}

