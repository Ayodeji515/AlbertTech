import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export function DeliveryProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements Blueprint",
      description:
        "We audit current digital bottlenecks, map user journeys, define API integrations, and establish explicit Core Web Vitals and conversion KPIs.",
      deliverable: "Technical Scope & Architecture Brief",
    },
    {
      number: "02",
      title: "UI/UX Architecture & Prototyping",
      description:
        "We craft high-fidelity wireframes and interactive Figma prototypes, refining information hierarchy and user flow prior to development.",
      deliverable: "Design System & Interactive Prototype",
    },
    {
      number: "03",
      title: "Iterative Frontend & API Engineering",
      description:
        "Developing in structured two-week sprints using TypeScript, Next.js, and headless APIs, with live preview staging URLs for continuous stakeholder feedback.",
      deliverable: "Production Codebase & Staging Previews",
    },
    {
      number: "04",
      title: "Quality Assurance & Edge Auditing",
      description:
        "Rigorous cross-device testing, international latency profiling, accessibility validation (WCAG AA), security checks, and SEO audits.",
      deliverable: "QA Certification & Lighthouse 95+ Audit",
    },
    {
      number: "05",
      title: "Zero-Downtime Launch & Continuous Care",
      description:
        "Deployment to global edge CDN networks, DNS cutover, team training on content management, and ongoing performance monitoring.",
      deliverable: "Production Release & SLA Support",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Delivery Methodology"
          title="Predictable, Transparent Engineering from Day One"
          subtitle="Our five-stage delivery framework eliminates guesswork, guarantees code quality, and ensures projects launch on schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-4 hover:border-brand-500/30 transition-all"
            >
              <div className="space-y-3">
                <span className="font-mono text-2xl font-extrabold text-brand-600 dark:text-brand-400 block">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  Milestone Deliverable
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

