import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  Bookmark,
  User,
} from "lucide-react";
import { blogPosts } from "@/config/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | ALBERTECH Insights`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) =>
    post.relatedSlugs.includes(p.slug)
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: `${siteConfig.url}/logo.png`,
    },
  };

  return (
    <article className="py-12 sm:py-20 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="brand">{post.category}</Badge>
          <span className="text-xs text-slate-400 font-mono">Whitepaper</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {post.author.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-500" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-72 sm:h-96 lg:h-[460px] bg-slate-100 dark:bg-slate-900 shadow-xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
        {/* Intro */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 font-medium text-slate-800 dark:text-slate-200">
          {post.content.introduction}
        </div>

        {/* Content Sections */}
        {post.content.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {section.keyTakeaways && (
              <div className="mt-6 p-6 rounded-2xl border border-brand-200 dark:border-brand-900/60 bg-brand-50/50 dark:bg-brand-950/30 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 block">
                  Strategic Architectural Key Takeaways
                </span>
                <div className="space-y-2">
                  {section.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Conclusion */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Summary & Strategic Conclusion
          </h3>
          <p className="leading-relaxed">{post.content.conclusion}</p>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Related Engineering Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <Badge variant="neutral">{related.category}</Badge>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTABanner
        title="Apply These Engineering Standards to Your Tech Stack"
        subtitle="Schedule a technical review with ALBERTECH. We evaluate your current systems and map out an optimization plan."
      />
    </article>
  );
}

