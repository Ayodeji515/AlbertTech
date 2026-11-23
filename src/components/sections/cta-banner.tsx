import * as React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CTABanner({
  title = "Ready to Build Your Digital Advantage?",
  subtitle = "Discuss your project scope with an international solutions architect. We provide transparent estimates, technical blueprints, and clear milestones within 24 business hours.",
  showWhatsApp = true,
}: {
  title?: string;
  subtitle?: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle lighting accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/30">
          Start Your Project
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow-lg"
          >
            <span>Submit a Project Brief</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          {showWhatsApp && (
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20ALBERTECH,%20I%20would%20like%20to%20discuss%20a%20new%20digital%20project.`}
              isExternal
              size="lg"
              variant="whatsapp"
              className="w-full sm:w-auto font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Direct WhatsApp Chat</span>
            </Button>
          )}

          <Button
            href={`mailto:${siteConfig.contact.email}`}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-800"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Email Agency</span>
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Mutual Non-Disclosure Protection</span>
          </div>
          <span>•</span>
          <div>Zero obligation scoping</div>
          <span>•</span>
          <div>Rapid 24h turn-around</div>
        </div>
      </div>
    </section>
  );
}

