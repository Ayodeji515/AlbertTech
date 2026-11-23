import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact & Project Enquiries | ALBERTECH",
  description:
    "Initiate your digital project with ALBERTECH. Submit your requirements or contact our solutions team directly via WhatsApp or email. Response guaranteed within 24 business hours.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="brand">Start a Partnership</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Let&apos;s Architect Your Digital Next Step
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you are launching a new enterprise platform, upgrading your e-commerce architecture,
            or streamlining operations through automation, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Submit Project Brief
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the specifications below. Our solutions director will review and reply within 24 hours.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Direct Channels & Operational Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Channel */}
            <div className="p-7 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Direct WhatsApp Channel
                  </h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    Fastest channel for immediate international scoping questions
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Need quick clarification or prefer voice notes? Chat directly with an ALBERTECH technical consultant.
              </p>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20ALBERTECH,%20I%20would%20like%20to%20discuss%20a%20new%20digital%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA59] text-white font-semibold text-sm transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Open WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Contact Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Enquiries & RFPs
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Support Hotline
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Standard Business Hours
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {siteConfig.contact.businessHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Operations Hub
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {siteConfig.contact.addressPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-500" />
                  <span>Standard Non-Disclosure Agreement (NDA) Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

