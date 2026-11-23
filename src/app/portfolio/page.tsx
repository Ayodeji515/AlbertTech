"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { portfolioProjects } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

const categories = [
  "All",
  "Website Development",
  "E-commerce",
  "Digital Marketing",
  "SEO",
  "Business Automation",
] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="brand">Case Studies & Portfolios</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Engineering Showcases & Architecture Blueprints
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Explore our representative implementations. Each case study details the technical challenge,
            our architectural solution, technologies deployed, and measurable commercial outcomes.
          </p>

          <div className="pt-2 flex justify-center">
            <Badge variant="sample">
              Representative Case Studies — Demonstrating Technical Architecture & Delivery Standards
            </Badge>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-500/30 transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <Badge variant="neutral" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur">
                    {project.category}
                  </Badge>
                  {project.isSample && (
                    <Badge variant="sample">
                      Representative
                    </Badge>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {project.clientIndustry}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Primary Metric Pill */}
                  {project.metrics && project.metrics[0] && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-sm font-mono font-bold text-brand-600 dark:text-brand-400">
                        {project.metrics[0].value}
                      </span>
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Have a Vision for Your Next Digital Flagship?"
        subtitle="Bring your business goals to an international solutions architect. We will structure the technical scope, timeline, and deliverables within 24 business hours."
      />
    </div>
  );
}

