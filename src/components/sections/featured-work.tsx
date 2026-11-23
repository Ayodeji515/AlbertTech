import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedWork() {
  const featured = portfolioProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-3.5">
              <Badge variant="brand">Featured Projects</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Selected Case Studies & Engineering Showcases
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Explore how we solve complex digital challenges through architectural precision,
              user-centric design, and performance engineering.
            </p>
          </div>
          <Button href="/portfolio" variant="outline" size="md" className="shrink-0 self-start md:self-auto">
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-500/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
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
                      Representative Architecture
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content Block */}
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

                  {/* Highlights Metric Pill */}
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

                  {/* Tech Stack Chips */}
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

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

