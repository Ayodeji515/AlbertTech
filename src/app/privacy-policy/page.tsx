import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | ALBERTECH",
  description: "Read ALBERTECH's privacy policy and data governance practices.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "February 15, 2025";

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-4">
        <Badge variant="neutral">Legal & Compliance</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last revised: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Overview & Commitment
          </h2>
          <p>
            {siteConfig.legalName} (&quot;ALBERTECH&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the personal information and corporate data entrusted to us by clients, prospective clients, and website visitors. This Privacy Policy details how we collect, process, store, and protect information submitted via our digital channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Information We Collect
          </h2>
          <p>We collect information you explicitly provide when engaging with our services:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Contact & Project Inquiries:</strong> Full name, corporate email address, telephone number, organization name, requested service, and project scope details submitted via our contact forms.
            </li>
            <li>
              <strong>Direct Communications:</strong> Records of communications conducted via email, WhatsApp, or scheduled video consultations.
            </li>
            <li>
              <strong>Technical Usage Data:</strong> Anonymized analytical parameters including browser type, operating system, referral URL, and interaction timestamps collected to optimize site performance.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. How We Use Collected Information
          </h2>
          <p>Information collected is utilized strictly for legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Evaluating project briefs and preparing commercial proposals and engineering estimates.</li>
            <li>Direct correspondence with project stakeholders regarding milestones and deliverables.</li>
            <li>Maintaining service agreements, issuing milestone invoices, and fulfilling contract obligations.</li>
            <li>Protecting the security and integrity of our digital platforms against fraudulent submissions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Data Confidentiality & Non-Disclosure
          </h2>
          <p>
            We do not sell, rent, or trade your personal or corporate data with third-party advertisers. All project briefs, proprietary diagrams, and client specifications shared with ALBERTECH are treated under standard professional confidentiality obligations. Where requested, we execute formal bilateral Non-Disclosure Agreements (NDAs) prior to detailed discovery calls.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. International Data Transfers
          </h2>
          <p>
            As an international digital agency, our hosting and communication infrastructure utilizes globally distributed edge networks (including servers located in North America, Europe, and Asia). By submitting your information, you acknowledge that your data may be processed across these secure cloud regions under strict encryption protocols (TLS 1.3).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Your Rights & Data Inquiries
          </h2>
          <p>
            Depending on your jurisdiction (such as GDPR in the European Union or CCPA in California), you have the right to request access to, rectification of, or deletion of your personal data.
          </p>
          <p>
            To submit a data access or deletion request, please contact our data governance team at:{" "}
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

