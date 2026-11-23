import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ShoppingBag,
  TrendingUp,
  Search,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/config/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Search: <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
};

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Capabilities"
          title="Engineered Services to Scale Your Digital Presence"
          subtitle="We specialize in five high-impact digital disciplines. Each discipline is delivered by experienced architects and focused on measurable commercial outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 flex flex-col justify-between hover:shadow-lg hover:border-brand-500/30 transition-all duration-300 group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit group-hover:scale-105 transition-transform">
                  {iconMap[service.iconName] || <Code2 className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables[0]?.items.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}

          {/* Consultation Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                Unsure Where to Begin?
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Multi-Service Technical Scoping
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Most international digital initiatives span across web, e-commerce, SEO, and workflow automation. Schedule an initial consultation to define your technology roadmap.
              </p>
            </div>

            <div className="pt-6 mt-6">
              <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                <span>Request Scoping Session</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

