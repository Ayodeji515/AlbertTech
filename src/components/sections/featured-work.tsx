"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers } from "lucide-react";
import { portfolioProjects } from "@/config/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Card3D } from "@/components/ui/card-3d";

export function FeaturedWork() {
  const featured = portfolioProjects;

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-3.5">
              <Badge variant="brand">Featured Projects & Carousel</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Selected Case Studies & 3D Showcases
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Interactive project showcase engineered with modern decoupled architectures,
              sub-second performance, and measurable commercial results.
            </p>
          </div>
          <Button href="/portfolio" variant="outline" size="md" className="shrink-0 self-start md:self-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur">
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        {/* Interactive Showcase Carousel */}
        <div className="mb-14">
          <Carousel autoPlayInterval={6000}>
            {featured.map((project) => (
              <div key={project.id} className="p-1">
                <Card3D depth={8}>
                  <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-xl flex flex-col lg:flex-row gap-8 items-center p-6 sm:p-8">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 relative group">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge variant="neutral" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur">
                          {project.category}
                        </Badge>
                        {project.isSample && (
                          <Badge variant="sample">Representative</Badge>
                        )}
                      </div>
                    </div>

                    {/* Info Column */}
                    <div className="flex-1 space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                        {project.clientIndustry} • {project.duration}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Primary Metrics Grid */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                            <div className="text-xs text-slate-500 dark:text-slate-400">{m.label}</div>
                            <div className="text-lg font-mono font-bold text-brand-600 dark:text-brand-400">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline gap-1.5"
                        >
                          <span>Explore Full Case Study & Architecture</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
