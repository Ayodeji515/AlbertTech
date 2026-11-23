import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What types of businesses does ALBERTECH typically work with?",
      answer:
        "We partner with ambitious startups, growing small-to-medium enterprises, international corporate brands, and venture-backed organizations. Whether you need a ground-up web application, e-commerce re-architecture, technical SEO acceleration, or business process automation, our engagements are customized to your stage of growth.",
    },
    {
      question: "How do you manage international client engagements across different time zones?",
      answer:
        "ALBERTECH operates on a globally distributed, asynchronous-first communication model with dedicated overlap hours for live synchronization via Zoom or Google Meet. We provide clients with dedicated Slack or WhatsApp channels, weekly video sprint reviews, and real-time staging preview links.",
    },
    {
      question: "What is your typical project delivery timeline?",
      answer:
        "Targeted digital projects (such as specialized landing page systems or technical SEO remediation) typically take 2 to 4 weeks. Full custom corporate websites, e-commerce platforms, or multi-system automation architectures typically range between 6 to 12 weeks depending on scope complexity.",
    },
    {
      question: "Do we retain full ownership of our code, assets, and accounts?",
      answer:
        "Yes, absolutely. Upon final milestone completion, all source code (GitHub/GitLab repositories), design Figma files, database schemas, hosting accounts, and ad platform ownership belong 100% to you. We transfer all credentials and deliver comprehensive architecture documentation.",
    },
    {
      question: "Do you offer post-launch maintenance, hosting management, and continuous optimization?",
      answer:
        "Yes. We offer structured monthly SLA partnership retainers that encompass 24/7 uptime monitoring, security patching, Core Web Vitals maintenance, conversion rate optimization (CRO) split testing, and continuous feature development.",
    },
    {
      question: "How do project payments and contracts work internationally?",
      answer:
        "We issue transparent, milestone-based contracts with invoicing in major international currencies (USD, EUR, GBP). Projects are divided into clear deliverables (e.g., Discovery/Design, Beta Staging, Production Launch) so you only release funds as verified milestones are achieved.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers to Critical Project Questions"
          subtitle="Everything you need to know about working with ALBERTECH, our engineering contracts, timelines, and international delivery standards."
        />

        <div className="mt-8 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

