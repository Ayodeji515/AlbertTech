import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageCircle,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-grid-pattern">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              International Digital Agency
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">
              Accepting Global Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Architecting Digital Solutions That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-sky-600 dark:from-brand-400 dark:via-blue-300 dark:to-sky-400">
              Accelerate Enterprise Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We partner with ambitious startups, growing enterprises, and international brands
            to design high-performance websites, scalable e-commerce systems, data-driven marketing,
            technical SEO, and business automation.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto shadow-md">
              <span>Start a Project Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href="/portfolio"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <span>Explore Case Studies</span>
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              size="lg"
              variant="whatsapp"
              className="w-full sm:w-auto"
              title="Immediate chat with an international consultant"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>WhatsApp Direct</span>
            </Button>
          </div>

          {/* Quick Credibility Tickers */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sub-Second Edge Speeds</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>Clean TypeScript Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Data-Driven ROI Focus</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Dashboard Preview */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-3 sm:p-5 shadow-2xl">
          <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-950 text-white overflow-hidden">
            {/* Top Bar */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400 text-[11px] hidden sm:inline">
                  https://albertech.agency/system-overview
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Global Edge Network: Active
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Core Web Vitals</span>
                  <span className="text-emerald-400 font-mono font-bold">100 / 100</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Sub-second LCP across global distribution nodes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Conversion Optimization</span>
                  <span className="text-brand-400 font-mono font-bold">+38.4%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full w-[85%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Structured buyer journeys & zero-friction checkout flows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Operations Automated</span>
                  <span className="text-amber-400 font-mono font-bold">150+ hrs/wk</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[92%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Automated CRM routing, webhook synchronization & invoicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

