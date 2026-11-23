import * as React from "react";
import {
  Laptop,
  ShoppingBag,
  Truck,
  Landmark,
  Factory,
  HeartPulse,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function IndustriesSection() {
  const industries = [
    {
      icon: <Laptop className="w-5 h-5 text-brand-500" />,
      name: "SaaS & High-Growth Tech",
      description:
        "High-converting marketing sites, interactive product tours, and developer documentation architectures.",
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-sky-500" />,
      name: "E-commerce & Global Retail",
      description:
        "Headless storefronts, localized multi-currency checkouts, and high-volume catalog synchronization.",
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-500" />,
      name: "Logistics & Global Supply Chain",
      description:
        "Real-time tracking portals, quotation engines, and customer shipment management dashboards.",
    },
    {
      icon: <Landmark className="w-5 h-5 text-emerald-500" />,
      name: "Financial & Professional Services",
      description:
        "Authority-building corporate web flagships, secure lead qualification pipelines, and regulatory compliance.",
    },
    {
      icon: <Factory className="w-5 h-5 text-purple-500" />,
      name: "Industrial & Manufacturing",
      description:
        "B2B ordering portals, ERP integrations, and automated request-for-proposal (RFP) routing.",
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      name: "Health & Life Sciences",
      description:
        "Accessible, high-trust digital platforms, patient intake flows, and secure data handling.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Market Sectors"
          title="Tailored Digital Solutions Across Core Industries"
          subtitle="While every business model is unique, our architectural foundations ensure rapid deployment, stability, and high conversion regardless of industry vertical."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-500/30 transition-all space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

