import * as React from "react";
import { siteConfig } from "@/config/site";

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-colors py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center sm:text-left p-3 border-l-2 border-brand-500/30 pl-4 sm:pl-6"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                {metric.label}
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                {metric.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

