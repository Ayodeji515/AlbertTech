import * as React from "react";
import {
  Code,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Users,
  Clock,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ValueProps() {
  const values = [
    {
      icon: <Code className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
      title: "Senior Engineering Execution",
      description:
        "No junior handoffs. Every line of TypeScript, CSS, and database schema is crafted by experienced architects who adhere to clean code standards.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Obsession with Conversion & ROI",
      description:
        "We treat your website as an active sales asset. From information architecture to one-click checkouts, our decisions are optimized for pipeline generation.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "Modern Jamstack & Headless Tech",
      description:
        "We build with Next.js, Vercel Edge, and decoupled CMS engines that guarantee sub-second load times and freedom from slow legacy platforms.",
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Transparent Sprints & Timelines",
      description:
        "Weekly milestones, staging URL preview deployments, and direct Slack/WhatsApp communication keep you in full control without surprise delays.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Enterprise Security & WCAG AA",
      description:
        "Built-in compliance with global accessibility standards, strict data encryption, and automated CI/CD security audits from day one.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: "International Audience Readiness",
      description:
        "Designed for global markets with edge caching, multi-currency payment handling, and international SEO hreflang foundations.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why ALBERTECH"
          title="The Engineering Discipline That Sets Us Apart"
          subtitle="International digital projects fail when design, code, and marketing operate in silos. Here is how ALBERTECH delivers consistent, predictable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-500/30 transition-all space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

