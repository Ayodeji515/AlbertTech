import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scene3D } from "@/components/ui/scene-3d";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-28 bg-grid-pattern">
      {/* Subtle modern ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/3 right-10 w-[450px] h-[280px] bg-sky-400/15 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Top Glass Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
              International Digital Agency
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
              Global Scale Engineering
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06]">
            Architecting Digital Solutions That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-sky-500 dark:from-brand-400 dark:via-blue-300 dark:to-sky-400">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto shadow-xl shadow-brand-500/20">
              <Sparkles className="w-4 h-4 mr-1.5" />
              <span>Start a Project Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href="/portfolio"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200/80 dark:border-white/10"
            >
              <span>Explore Case Studies</span>
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              size="lg"
              variant="whatsapp"
              className="w-full sm:w-auto shadow-md"
              title="Immediate chat with an international consultant"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>WhatsApp Direct</span>
            </Button>
          </div>

          {/* Quick Credibility Tickers */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sub-Second Global Edge</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>TypeScript Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Measurable ROI Delivery</span>
            </div>
          </div>
        </div>

        {/* 3D Interactive Scene Display with Mouse Parallax */}
        <div className="mt-10 sm:mt-14">
          <Scene3D />
        </div>
      </div>
    </section>
  );
}
