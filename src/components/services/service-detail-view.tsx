import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Zap,
  MessageCircle,
} from "lucide-react";
import { Service } from "@/types";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CTABanner } from "@/components/sections/cta-banner";

interface ServiceDetailViewProps {
  service: Service;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Services
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <Badge variant="brand">{service.title}</Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            {service.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {service.heroSubheadline}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">
              <span>Request Scoping for {service.title}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20ALBERTECH,%20I%20have%20an%20enquiry%20regarding%20${encodeURIComponent(service.title)}`}
              isExternal
              size="lg"
              variant="whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>Discuss via WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Challenges Remediated"
          title="Common Bottlenecks We Eliminate"
          subtitle="How our architectural solutions address the core vulnerabilities hindering your digital growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {service.problemsSolved.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
            >
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.problem}
                </h3>
                <p className="text-xs text-rose-700 dark:text-rose-400 mt-1">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Commercial Cost:</span>{" "}
                  {item.impact}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400">
                  <Lightbulb className="w-4 h-4" />
                  <span>The ALBERTECH Solution:</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className="bg-slate-50/70 dark:bg-slate-950/40 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Scope"
            title="Scope of Deliverables & Technical Specifications"
            subtitle="Every engagement includes concrete architectural artifacts, fully tested modules, and production documentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.deliverables.map((deliv, dIdx) => (
              <div
                key={dIdx}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Specification 0{dIdx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {deliv.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {deliv.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Observed Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Measured Value"
          title="Tangible Commercial Outcomes"
          subtitle="Our engineering standards deliver measurable business performance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((b, bIdx) => (
            <div
              key={bIdx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
            >
              {b.metric && (
                <div className="text-2xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  {b.metric}
                </div>
              )}
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {b.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service-Specific Delivery Process */}
      <section className="bg-slate-50/70 dark:bg-slate-950/40 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process Cadence"
            title={`Our ${service.title} Delivery Framework`}
            subtitle="Iterative, predictable milestones designed to minimize risk and launch on schedule."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
              >
                <span className="font-mono text-xl font-bold text-brand-600 dark:text-brand-400">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Practice FAQs"
          title={`Frequently Asked Questions on ${service.title}`}
          subtitle="Detailed guidance regarding contracts, technical dependencies, and post-launch maintenance."
        />

        <div className="mt-8 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title={`Accelerate Your Organization with ${service.title}`}
        subtitle="Contact an ALBERTECH solutions architect for a technical scoping session. We prepare detailed timeline estimates and cost projections within 24 business hours."
      />
    </div>
  );
}

