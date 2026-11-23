import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms and Conditions | ALBERTECH",
  description: "Read the terms of service governing ALBERTECH digital agency engagements.",
};

export default function TermsPage() {
  const lastUpdated = "February 15, 2025";

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-4">
        <Badge variant="neutral">Legal & Compliance</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Terms & Conditions of Service
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last revised: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing the website of {siteConfig.legalName} (&quot;ALBERTECH&quot;) or executing a Statement of Work (SOW) with us, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you should refrain from using our digital services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Scope of Services & SOW Execution
          </h2>
          <p>
            All professional engagements—including Website Design and Development, E-commerce Implementations, Digital Marketing Campaigns, Technical SEO Services, and Business Automation—are governed by project-specific Statements of Work detailing milestones, deliverables, timelines, and commercial consideration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Intellectual Property Ownership
          </h2>
          <p>
            Upon settlement of all invoiced milestone amounts, ALBERTECH assigns to the client 100% full, unrestricted ownership of all bespoke source code, visual design assets, and database schemas developed specifically for the client&apos;s project.
          </p>
          <p>
            ALBERTECH retains rights to general reusable open-source libraries, utility scripts, and underlying development tooling that existed prior to or independently of the client engagement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Milestone Invoicing & Payments
          </h2>
          <p>
            Payments are structured on verified project milestones (e.g., Initial Technical Scoping, Beta Staging Approval, Production Deployment). Standard invoices are issued electronically in USD, EUR, or GBP, payable within 14 calendar days via international bank transfer or supported corporate card gateways.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Warranties & SLA Support
          </h2>
          <p>
            ALBERTECH warrants that all custom deliverables will function in substantial conformity with agreed technical specifications for a period of 30 days post-launch. Any bugs or regressions identified during this warranty period are remediated at zero additional cost.
          </p>
          <p>
            Ongoing security updates, third-party API deprecations, and feature expansions post-launch are covered under structured monthly Service Level Agreements (SLAs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, or consequential damages resulting from platform downtime or third-party service outages (e.g., hosting providers, payment gateways, ad platforms). Total liability under any engagement shall not exceed the total fees paid under the relevant Statement of Work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            7. Contact Information
          </h2>
          <p>
            For questions regarding these Terms or contractual arrangements, please reach out to our legal affairs team at:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

