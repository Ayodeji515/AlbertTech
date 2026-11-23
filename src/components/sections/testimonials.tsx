"use client";

import * as React from "react";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { Card3D } from "@/components/ui/card-3d";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The shift to a modern headless architecture completely transformed our customer acquisition. Page load dropped under 1 second globally and qualified inquiries rose significantly within 60 days.",
      author: "Chief Technology Officer",
      company: "International SaaS Enterprise",
      industry: "Enterprise Cloud Software",
      rating: 5,
    },
    {
      quote:
        "ALBERTECH engineered a multi-currency checkout experience that immediately unlocked our European and Asian customer base. Our cart abandonment dropped dramatically in the first month.",
      author: "Head of Digital Commerce",
      company: "Direct-to-Consumer Retail Brand",
      industry: "Global Lifestyle Retail",
      rating: 5,
    },
    {
      quote:
        "The automated webhook pipeline connecting our incoming web forms to our CRM and field dispatch saved our operations team over 25 hours per week. Outstanding engineering execution.",
      author: "Director of Operations",
      company: "Commercial Logistics Provider",
      industry: "Freight & Supply Chain",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Partnerships"
          title="What Our Business Partners Say"
          subtitle="Representative feedback illustrating our commitment to engineering excellence, transparent communication, and measurable commercial value."
        />

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel autoPlayInterval={5000}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="p-2">
                <Card3D depth={6}>
                  <div className="p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
                    {/* Top ambient glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between">
                        <Quote className="w-10 h-10 text-brand-500/30 dark:text-brand-400/40" />
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed italic font-normal">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between relative z-10">
                      <div>
                        <div className="font-extrabold text-base text-slate-900 dark:text-white">
                          {item.author}
                        </div>
                        <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                          {item.company}
                        </div>
                      </div>
                      <Badge variant="neutral" className="text-xs bg-slate-100/80 dark:bg-slate-800/80">
                        {item.industry}
                      </Badge>
                    </div>
                  </div>
                </Card3D>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Badge variant="neutral" className="text-slate-500 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-800/70">
            Client quotes representative of production feedback. Case study verification available upon request under NDA.
          </Badge>
        </div>
      </div>
    </section>
  );
}
