import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  ShoppingBag,
  TrendingUp,
  Search,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { servicesData } from "@/config/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services & Capabilities | Digital Agency",
  description:
    "Explore ALBERTECH's comprehensive digital practices: Website Development, E-commerce Solutions, Digital Marketing, SEO, and Business Automation.",
};

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-brand-600 dark:text-brand-400" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8 text-sky-600 dark:text-sky-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
  Search: <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
  Cpu: <Cpu className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="brand">Our Core Practices</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Specialized Digital Services Engineered for Business Value
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            We provide deep expertise across five foundational disciplines. We do not offer
            one-size-fits-all packages; every solution is architected around your specific commercial goals.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              className={`p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Info Column */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 w-fit">
                    {iconMap[service.iconName] || <Code2 className="w-8 h-8" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Practice 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.heroSubheadline}
                </p>

                {/* Problems Solved Highlight */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Primary Challenge We Solve:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {service.problemsSolved[0]?.problem}
                  </p>
                  <p className="text-xs text-brand-600 dark:text-brand-400">
                    → {service.problemsSolved[0]?.solution}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Core Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {service.deliverables[0]?.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="primary"
                    size="md"
                  >
                    <span>View Full {service.title} Practice</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Metrics & Performance Column */}
              <div className="w-full lg:w-80 shrink-0 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Observed Impact
                  </span>
                  <div className="space-y-3">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                            {benefit.title}
                          </span>
                          {benefit.metric && (
                            <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                              {benefit.metric}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Scale Your Digital Infrastructure?"
        subtitle="Request a complimentary technical consultation. We analyze your requirements and provide an architectural blueprint with timeline estimates."
      />
    </div>
  );
}

