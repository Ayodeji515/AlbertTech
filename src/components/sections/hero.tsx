import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
  CheckCircle2,
  Code2,
  Users,
  Clock,
  Globe2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Top Clean Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
              Independent Digital Agency
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
              Senior Engineers & Strategists
            </span>
          </div>

          {/* Main Headline - Clean, Solid, Humanized Typography (Zero Gradient) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Architecting Digital Solutions That{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Accelerate Enterprise Growth
            </span>
          </h1>

          {/* Subheading - Realistic human value proposition */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We partner directly with founders, marketing leaders, and engineering teams to design
            high-performance websites, e-commerce stores, measurable marketing, and business automation.
          </p>

          {/* Dual CTAs - Clean, Solid Buttons (No Artificial Sparkles) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto shadow-sm">
              <span>Start a Project Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href="/portfolio"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <span>Explore Case Studies</span>
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              size="lg"
              variant="whatsapp"
              className="w-full sm:w-auto shadow-sm"
              title="Immediate chat with an international consultant"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>WhatsApp Direct</span>
            </Button>
          </div>

          {/* Clear Human Credibility Points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Direct Lead Architect Access</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Full Code & Asset Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              <span>24h Scoping Turnaround</span>
            </div>
          </div>
        </div>

        {/* Humanized Agency Work Platform Preview (Clean, Solid UI, Zero Sci-Fi AI Glow) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 sm:p-5 shadow-lg">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Header bar */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                  albertech.agency/client-delivery-overview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Sprint 14: On Schedule
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture & Speed</span>
                  <span className="text-emerald-400 font-mono font-bold">100 / 100</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Sub-second LCP on international mobile networks. Zero bloatware.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Conversion Optimization</span>
                  <span className="text-blue-400 font-mono font-bold">+38.4% Lift</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[85%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Simplified checkout flows and high-intent landing page journeys.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Process Automation</span>
                  <span className="text-amber-400 font-mono font-bold">150+ hrs/mo</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[92%]" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Webhook synchronizations across CRM, invoicing, and logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
