import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { siteConfig, footerNavItems } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      {/* Pre-footer Callout / International Presence */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  International Digital Partnerships
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Engineering high-performance digital products for businesses across 18+ countries.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              ALBERTECH is an international digital agency. We partner with ambitious organizations
              to architect fast websites, e-commerce platforms, data-driven marketing, SEO, and
              intelligent business automation.
            </p>
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{siteConfig.contact.businessHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>{siteConfig.contact.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Agency
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Governance
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-mono inline-flex items-center gap-1"
              >
                {siteConfig.contact.email}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed & Engineered for High Performance & International Scalability.
          </p>
        </div>
      </div>
    </footer>
  );
}

