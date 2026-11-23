import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Wrench,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { portfolioProjects } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} Case Study | ${project.category}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} Case Study – ALBERTECH`,
      description: project.tagline,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Breadcrumb & Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="brand">{project.category}</Badge>
            <Badge variant="neutral">{project.clientIndustry}</Badge>
            {project.isSample && (
              <Badge variant="sample">Representative Case Study</Badge>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>Project Duration: {project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-500" />
              <span>Deployment: Global Edge CDN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-[360px] sm:h-[480px] lg:h-[560px] w-full bg-slate-100 dark:bg-slate-900 shadow-xl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-6">
            Observed Commercial Results & Key Performance Indicators
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1 border-l-2 border-brand-500 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {m.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {m.indicator}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative: Challenge & Architectural Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Project Summary
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                The Core Technical Challenge
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                The ALBERTECH Solution & Architecture
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Key Outcomes List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Verified Outcomes & Milestones
              </h3>
              <div className="space-y-3">
                {project.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Images */}
            {project.galleryImages.length > 1 && (
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Interface & Architecture Previews
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-56 bg-slate-100 dark:bg-slate-900"
                    >
                      <img
                        src={img}
                        alt={`${project.title} Preview ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Metadata & Fast Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {project.deliverables.map((deliv, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Build a Similar System
                </span>
                <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                  <span>Enquire for Similar Scope</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20ALBERTECH,%20I%20am%20interested%20in%20a%20solution%20similar%20to%20${encodeURIComponent(project.title)}`}
                  isExternal
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  <span>Discuss via WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title={`Plan Your Next Project with ALBERTECH`}
        subtitle="Bring your digital challenge to our solutions team. We review technical specifications, timeline feasibility, and provide full scoping documentation."
      />
    </div>
  );
}

