import * as React from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The shift to a modern headless architecture completely transformed our customer acquisition. Page load dropped under 1 second globally and qualified inquiries rose significantly within 60 days.",
      author: "Chief Technology Officer",
      company: "International SaaS Enterprise",
      industry: "Enterprise Cloud Software",
    },
    {
      quote:
        "ALBERTECH engineered a multi-currency checkout experience that immediately unlocked our European and Asian customer base. Our cart abandonment dropped dramatically in the first month.",
      author: "Head of Digital Commerce",
      company: "Direct-to-Consumer Retail Brand",
      industry: "Global Lifestyle Retail",
    },
    {
      quote:
        "The automated webhook pipeline connecting our incoming web forms to our CRM and field dispatch saved our operations team over 25 hours per week. Outstanding engineering execution.",
      author: "Director of Operations",
      company: "Commercial Logistics Provider",
      industry: "Freight & Supply Chain",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Partnerships"
          title="What Our Business Partners Say"
          subtitle="Representative feedback illustrating our commitment to engineering excellence, transparent communication, and measurable commercial value."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-brand-500/40 dark:text-brand-400/40" />
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.author}
                </div>
                <div className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                  {item.company}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {item.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Badge variant="neutral" className="text-slate-500 dark:text-slate-400">
            Client quotes representative of production feedback. Case study verification available upon request under NDA.
          </Badge>
        </div>
      </div>
    </section>
  );
}

