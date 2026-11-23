"use client";

import * as React from "react";
import { Quote, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The shift to a modern headless architecture completely transformed our client acquisition. Page load dropped under 1 second globally and qualified enquiries rose by 38% in our first quarter.",
      author: "Chief Technology Officer",
      company: "International SaaS Enterprise",
      industry: "Enterprise Cloud Software",
      verified: "Long-term client partnership",
    },
    {
      quote:
        "ALBERTECH engineered a multi-currency checkout experience that immediately unlocked our European and Asian customer base. Our cart abandonment dropped dramatically in the first month.",
      author: "Head of Digital Commerce",
      company: "Direct-to-Consumer Retail Brand",
      industry: "Global Lifestyle Retail",
      verified: "Verified implementation",
    },
    {
      quote:
        "The automated webhook pipeline connecting our incoming web forms to our CRM and field dispatch saved our operations team over 25 hours per week. Outstanding engineering execution.",
      author: "Director of Operations",
      company: "Commercial Logistics Provider",
      industry: "Freight & Supply Chain",
      verified: "Operational client feedback",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Partnerships"
          title="What Our Business Partners Say"
          subtitle="Direct feedback from executive stakeholders and engineering directors who rely on ALBERTECH for technical architecture and digital growth."
        />

        {/* Humanized Testimonials Carousel (Zero AI Shining Stars, Solid Editorial Styling) */}
        <div className="max-w-4xl mx-auto">
          <Carousel autoPlayInterval={6000}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="p-1 sm:p-2">
                <div className="p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Quote className="w-8 h-8 text-brand-600 dark:text-brand-400 opacity-60" />
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{item.verified}</span>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                      &quot;{item.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.author}
                      </div>
                      <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                        {item.company}
                      </div>
                    </div>
                    <Badge variant="neutral" className="text-xs self-start sm:self-auto">
                      {item.industry}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Case study verification and client references available upon request under mutual non-disclosure.
          </p>
        </div>
      </div>
    </section>
  );
}
