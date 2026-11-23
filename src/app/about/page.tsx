import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  ShieldCheck,
  Zap,
  Users,
  Code2,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us | International Digital Agency",
  description:
    "Learn about ALBERTECH: our mission, values, architectural discipline, and how we deliver high-performance digital products to organizations across the globe.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Commercial Purpose Over Pure Aesthetics",
      description:
        "Visual design is meaningless if it fails to convert visitors into clients. We engineer every component to support business growth and user clarity.",
    },
    {
      title: "Senior Architectural Standards",
      description:
        "We reject fragile shortcuts and bloated dependencies. We write clean, typed, modular code with rigorous automated validation from day one.",
    },
    {
      title: "Global Inclusivity & Accessibility",
      description:
        "The web is international. Our products adhere to WCAG 2.1 AA accessibility guidelines and load with sub-second speeds on varying international networks.",
    },
    {
      title: "Radical Communication Transparency",
      description:
        "No buzzwords, hidden fee schedules, or opaque timelines. Clients have continuous access to live staging environments and direct engineering dialogue.",
    },
  ];

  const differentiators = [
    {
      label: "Full-Funnel Capabilities",
      detail:
        "We combine software engineering, e-commerce, SEO, paid performance marketing, and process automation in-house, eliminating agency finger-pointing.",
    },
    {
      label: "Asynchronous-First Global Agility",
      detail:
        "Operating as a modern distributed agency allows us to collaborate efficiently with executive stakeholders across time zones with zero delay.",
    },
    {
      label: "Decoupled Technology Stacks",
      detail:
        "We liberate clients from sluggish legacy monolithic platforms by architecting composable Next.js frontends and headless content infrastructures.",
    },
    {
      label: "100% Asset & IP Ownership",
      detail:
        "You retain outright ownership of every repository, design file, API bridge, and campaign container. Zero lock-in contracts.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="brand">About ALBERTECH</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Engineering the Future of Global Digital Experiences
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            ALBERTECH is an international digital agency dedicated to helping businesses,
            startups, and enterprises turn complex digital requirements into measurable commercial
            success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              To empower organizations worldwide by engineering robust, high-performance digital platforms and growth strategies that eliminate operational drag, maximize customer acquisition, and scale smoothly without technical debt.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              To become the premier international technology partner for ambitious companies, recognized globally for uniting software engineering rigor, conversion rate optimization, and transparent partnership delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-slate-50/70 dark:bg-slate-950/40 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="The Values That Govern Our Work"
            subtitle="How we approach our architecture, partnerships, and commercial commitments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-brand-600 dark:text-brand-400">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes ALBERTECH Different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="brand">Our Edge</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Why Forward-Thinking Leaders Choose ALBERTECH
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Most digital agencies either specialize exclusively in visual graphic design with fragile technical backends, or pure software engineering lacking user psychology and conversion acumen.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              ALBERTECH sits at the exact intersection of robust engineering, modern design systems, and aggressive commercial growth strategy.
            </p>
            <div>
              <Button href="/portfolio" variant="primary" size="md">
                <span>View Selected Case Studies</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {differentiators.map((diff, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {diff.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {diff.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Solutions Architecture Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Solutions Practice"
          title="Multi-Disciplinary Engineering Leadership"
          subtitle="Our distributed team brings together decades of collective experience in distributed web platforms, headless commerce, algorithmic SEO, and operational systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-2xl font-mono">
              FE
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Frontend & Systems Architecture
              </h3>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider mt-0.5">
                Practice Directorate
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Specializing in Next.js App Router, edge computing, dynamic state management, and WCAG AA accessibility compliance.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-2xl font-mono">
              CX
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Commerce & Growth Optimization
              </h3>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider mt-0.5">
                Practice Directorate
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Focused on headless checkout flows, multi-currency architectures, conversion rate optimization (CRO), and attribution modeling.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-2xl font-mono">
              AP
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                API & Automation Engineering
              </h3>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider mt-0.5">
                Practice Directorate
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Designing event-driven webhook microservices, automated CRM synchronization, and enterprise workflow orchestration.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Badge variant="neutral">
            Individual architect bios and direct engagement credentials provided during project scoping.
          </Badge>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Collaborate with a Dedicated Digital Partner?"
        subtitle="Schedule an initial technical scoping call. We will review your current infrastructure and provide actionable recommendations within 24 business hours."
      />
    </div>
  );
}

