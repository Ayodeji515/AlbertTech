import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Compass, Layers, ShieldCheck, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function AgencyIntro() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
      title: "Decoupled Architecture",
      description:
        "We build modular frontend applications separated from content backends, enabling rapid iterations without technical debt.",
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Commercial Conversion Focus",
      description:
        "Every layout decision, interaction, and copy line is designed to guide qualified visitors toward client enquiries.",
    },
    {
      icon: <Compass className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "International Scalability",
      description:
        "Engineered for multi-country audiences with global edge content distribution, localized payments, and international SEO.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Zero-Compromise Security",
      description:
        "Rigorous adherence to modern Web Standards, strict CSP headers, automated sanitization, and data privacy protocols.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              Agency Overview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              A Strategic Digital Partner, Not Just a Design Vendor
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              ALBERTECH was founded to solve a chronic problem in modern technology delivery: the disconnect between visual design aesthetics, engineering rigor, and real commercial revenue.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We operate as an embedded digital partner for high-growth businesses. By uniting custom software engineering, e-commerce infrastructure, data-driven marketing, technical SEO, and workflow automation under a single cohesive team, we build digital assets that compound in value over time.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button href="/about" variant="primary" size="md">
                <span>Learn About Our Methodology</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/services" variant="outline" size="md">
                <span>Browse All Practices</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Operational Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-500/30 transition-all space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

