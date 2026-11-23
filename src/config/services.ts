import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Design & Development",
    shortDescription:
      "Enterprise-grade web applications, corporate digital platforms, and high-converting marketing sites built with modern headless architectures.",
    heroHeadline: "Bespoke Web Platforms Engineered for Performance & Conversion",
    heroSubheadline:
      "We design and engineer fast, accessible, and scalable web solutions tailored to international business requirements. From interactive web apps to robust corporate flagships, we turn code into commercial advantage.",
    iconName: "Code2",
    accentColor: "#2563EB",
    problemsSolved: [
      {
        problem: "Slow, legacy CMS platforms causing visitor drop-off",
        impact: "Every second of load latency reduces conversion rates by up to 20% on international traffic.",
        solution: "Modern static-first and server-rendered Next.js architectures with sub-second global edge delivery.",
      },
      {
        problem: "Fragmented mobile experiences that fail on varying viewports",
        impact: "Over 60% of modern B2B and B2C interactions occur on mobile, leading to lost client trust.",
        solution: "Fluid responsive engineering tested across all device breakpoints and accessibility standards.",
      },
      {
        problem: "Rigid content editing workflows that depend constantly on engineers",
        impact: "Marketing teams face multi-week delays simply to update copy, launch landing pages, or test campaigns.",
        solution: "Clean headless CMS integrations giving non-technical teams visual publishing control with complete guardrails.",
      },
    ],
    deliverables: [
      {
        title: "Architecture & Frontend Engineering",
        description: "Modern, component-driven development with clean code standards.",
        items: [
          "Next.js App Router & TypeScript framework",
          "Component library with Tailwind CSS design tokens",
          "Internationalization (i18n) ready structure",
          "Full WCAG 2.1 AA accessibility compliance",
        ],
      },
      {
        title: "Content & Systems Integration",
        description: "Connecting your digital frontend with business workflows.",
        items: [
          "Headless CMS integration (Sanity, Contentful, or Strapi)",
          "RESTful & GraphQL API client architecture",
          "Lead capture & CRM sync pipelines (HubSpot, Salesforce)",
          "Enterprise analytics & event attribution hooks",
        ],
      },
      {
        title: "Performance & Security Hardening",
        description: "Ensuring resilience under heavy international traffic loads.",
        items: [
          "Global Edge CDN deployment configuration",
          "Core Web Vitals optimization (LCP, INP, CLS)",
          "Security header configurations & SSL setup",
          "Automated CI/CD build & deployment pipelines",
        ],
      },
    ],
    benefits: [
      {
        title: "Blazing Load Speeds",
        description: "Deliver instant interactions worldwide with serverless edge caching.",
        metric: "< 0.8s LCP",
      },
      {
        title: "Higher Conversion Rates",
        description: "Clear information architecture and frictionless buyer journeys increase qualified leads.",
        metric: "+35% Avg Conversion",
      },
      {
        title: "Future-Proof Scalability",
        description: "Modular TypeScript codebases built to adapt as your organization scales.",
        metric: "100% Modularity",
      },
      {
        title: "Search Engine Readiness",
        description: "Server-side rendering and structured metadata maximize organic crawling efficiency.",
        metric: "Top SEO Audit Scores",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Scoping",
        description: "We audit user journeys, technical constraints, business requirements, and conversion targets.",
      },
      {
        step: "02",
        title: "UX Wireframing & Design Systems",
        description: "Figma-based high-fidelity interactive prototypes focused on information hierarchy and clarity.",
      },
      {
        step: "03",
        title: "Agile Frontend & API Engineering",
        description: "Sprint-based iterative development with staging environment previews for stakeholder review.",
      },
      {
        step: "04",
        title: "Quality Assurance & Performance Auditing",
        description: "Rigorous cross-browser testing, device testing, security checks, and Core Web Vitals profiling.",
      },
      {
        step: "05",
        title: "Deployment & Knowledge Transfer",
        description: "Zero-downtime production launch, DNS propagation, team documentation, and ongoing support.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom website development project typically take?",
        answer:
          "Timelines typically range between 4 to 8 weeks for standard marketing platforms and 8 to 14 weeks for complex web applications with bespoke integrations, depending on scope complexity.",
      },
      {
        question: "Can our internal marketing team update copy and images after launch?",
        answer:
          "Yes. We configure intuitive headless content management systems so your team can easily update content, publish articles, and launch landing pages without touching code.",
      },
      {
        question: "Will the website be optimized for international visitors?",
        answer:
          "All our websites are distributed via global edge CDNs, ensuring that visitors across the Americas, Europe, Asia, and Africa experience rapid loading times and localized formatting.",
      },
      {
        question: "Do you provide post-launch maintenance and support?",
        answer:
          "Yes, we provide continuous monitoring, dependency patching, security updates, and performance tuning under structured SLA agreements.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-commerce Solutions",
    shortDescription:
      "High-converting storefronts, frictionless multi-currency checkouts, and custom headless commerce integrations built for global scale.",
    heroHeadline: "Scalable E-commerce Platforms Engineered to Maximize Average Order Value",
    heroSubheadline:
      "We build robust digital commerce systems for ambitious direct-to-consumer and B2B brands. From Shopify Plus to bespoke headless commerce, we engineer shopping experiences that turn browsers into lifelong customers.",
    iconName: "ShoppingBag",
    accentColor: "#0284C7",
    problemsSolved: [
      {
        problem: "Cart abandonment caused by slow, complicated checkout flows",
        impact: "Over 70% of e-commerce carts are abandoned due to friction, unexpected fees, or slow steps.",
        solution: "Streamlined single-page checkouts, localized payment methods (Apple Pay, Google Pay), and instant validation.",
      },
      {
        problem: "Poor inventory synchronization across channels causing stockouts",
        impact: "Overselling and manual stock reconciliation damages customer reputation and wastes operations hours.",
        solution: "Automated real-time inventory and ERP synchronizations across multi-warehouse configurations.",
      },
      {
        problem: "Inability to sell internationally due to currency and tax complexities",
        impact: "Missed international revenue opportunities when overseas buyers cannot purchase in local currencies.",
        solution: "Multi-currency pricing, geo-IP redirection, and automated tax/VAT compliance integrations.",
      },
    ],
    deliverables: [
      {
        title: "Storefront Development",
        description: "Custom UI/UX optimized for product discovery and fast purchasing.",
        items: [
          "Custom Shopify Plus or Next.js Commerce architecture",
          "Dynamic product filtering, variant selectors & search",
          "Mobile-first responsive shopping experience",
          "Micro-animations and frictionless cart drawers",
        ],
      },
      {
        title: "Checkout & Payment Architecture",
        description: "Global payment gateway and compliance integrations.",
        items: [
          "Stripe, PayPal, Apple Pay & Klarna configurations",
          "Multi-currency pricing & automatic exchange rates",
          "Automated sales tax, VAT, and duty calculation",
          "Fraud prevention rules & PCI DSS compliance adherence",
        ],
      },
      {
        title: "Backend & Operations Sync",
        description: "Connecting sales channels directly with order fulfillment.",
        items: [
          "ERP, CRM, and 3PL fulfillment integrations",
          "Automated transactional emails (Klaviyo, Postmark)",
          "Customer accounts & order tracking portals",
          "Comprehensive e-commerce analytics tracking (GA4, CAPI)",
        ],
      },
    ],
    benefits: [
      {
        title: "Reduced Abandonment",
        description: "Optimized micro-interactions and frictionless checkout pathways increase completions.",
        metric: "-28% Abandonment",
      },
      {
        title: "Global Reach",
        description: "Accept multi-currency payments with localized international shopping experiences.",
        metric: "135+ Currencies",
      },
      {
        title: "Faster Product Browsing",
        description: "Instantaneous catalog navigation keeps shoppers engaged across thousands of SKUs.",
        metric: "< 1s Catalog Search",
      },
      {
        title: "Higher Repeat Purchases",
        description: "Personalized post-purchase workflows and automated email triggers drive retention.",
        metric: "+22% Repeat Orders",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product & Buyer Flow Audit",
        description: "We map catalog hierarchy, SKU taxonomy, checkout friction points, and customer personas.",
      },
      {
        step: "02",
        title: "Commerce UX & Wireframing",
        description: "Designing high-converting PDPs (Product Display Pages), PLPs, and modular cart experiences.",
      },
      {
        step: "03",
        title: "Storefront & Integration Build",
        description: "Developing custom themes, headless frontends, payment APIs, and ERP connections.",
      },
      {
        step: "04",
        title: "Payment, Tax & Logistics Testing",
        description: "End-to-end sandbox purchase verification, tax automation audits, and fulfillment webhooks.",
      },
      {
        step: "05",
        title: "Launch & Growth Optimization",
        description: "Catalog migration, production launch, conversion rate tracking, and post-launch A/B testing.",
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platforms do you build on?",
        answer:
          "We specialize in Shopify & Shopify Plus for rapid scaling, as well as Headless Commerce architectures (Next.js + Medusa / Shopify Storefront API) for bespoke enterprise needs.",
      },
      {
        question: "Can you migrate our existing store from WooCommerce or Magento without losing customer data?",
        answer:
          "Yes. We execute secure migrations preserving existing customer accounts, order history, product variants, and SEO-critical URL redirects.",
      },
      {
        question: "How do you handle multi-currency payments for international clients?",
        answer:
          "We configure multi-currency payment gateways with automated geolocation detection, enabling international customers to browse and check out in their domestic currency.",
      },
      {
        question: "Can we integrate our third-party logistics (3PL) warehouse?",
        answer:
          "Yes. We engineer automated webhook integrations that sync inventory levels, purchase orders, and shipment tracking numbers directly with your fulfillment partner.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDescription:
      "Data-driven multi-channel customer acquisition campaigns, conversion rate optimization (CRO), and measurable performance marketing.",
    heroHeadline: "Data-Driven Marketing Engineered for Predictable Client Acquisition",
    heroSubheadline:
      "Stop wasting ad spend on vanity metrics. We construct full-funnel digital marketing strategies that connect paid acquisition, content strategy, and conversion optimization to drive tangible revenue and qualified leads.",
    iconName: "TrendingUp",
    accentColor: "#10B981",
    problemsSolved: [
      {
        problem: "High advertising spend yielding low-intent, unqualified leads",
        impact: "Marketing budgets get drained while sales teams waste valuable time on prospects who never convert.",
        solution: "Granular audience targeting, negative keyword architectures, and intent-focused campaign structuring.",
      },
      {
        problem: "Inability to accurately attribute which marketing channels generate revenue",
        impact: "Leadership cannot make confident scaling decisions due to missing or inaccurate tracking data.",
        solution: "Server-side tracking, Meta Conversions API (CAPI), and clean multi-touch attribution reporting.",
      },
      {
        problem: "High traffic landing on pages that fail to convert visitors",
        impact: "Traffic acquisition costs spike while conversion rates stagnate under poorly structured messaging.",
        solution: "Systematic Conversion Rate Optimization (CRO), A/B landing page testing, and behavioral heatmapping.",
      },
    ],
    deliverables: [
      {
        title: "Paid Acquisition (PPC & Paid Social)",
        description: "Targeted campaigns across search engines and business networks.",
        items: [
          "Google Ads (Search, Performance Max, Display, YouTube)",
          "Meta Ads (Facebook & Instagram targeting)",
          "LinkedIn Ads for B2B enterprise outreach",
          "Continuous bid strategy & ROAS optimization",
        ],
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Maximizing the percentage of visitors who take high-value action.",
        items: [
          "Custom landing page design & copywriting",
          "Multivariate and A/B split testing",
          "Session recording & click-heat analysis",
          "Form drop-off mitigation & UX optimization",
        ],
      },
      {
        title: "Analytics, Attribution & Reporting",
        description: "Clear data visibility into every dollar invested.",
        items: [
          "Server-side Google Tag Manager (sGTM) setup",
          "Custom Looker Studio executive dashboards",
          "CAC, LTV, and ROAS real-time performance tracking",
          "Bi-weekly strategic review and growth planning",
        ],
      },
    ],
    benefits: [
      {
        title: "Lower Customer Acquisition Cost",
        description: "Targeting high-intent searchers and refining audiences drives down acquisition overhead.",
        metric: "-32% Average CAC",
      },
      {
        title: "Higher Return on Ad Spend",
        description: "Optimized ad creatives and targeted messaging generate superior return on advertising capital.",
        metric: "3.8x Avg ROAS",
      },
      {
        title: "Qualified Pipeline Growth",
        description: "Align marketing messaging directly with sales criteria to attract qualified decision makers.",
        metric: "High Intent Pipeline",
      },
      {
        title: "Transparent Attribution",
        description: "Know exactly which campaigns, ads, and landing pages drive bottom-line enterprise value.",
        metric: "100% Attribution",
      },
    ],
    process: [
      {
        step: "01",
        title: "Market & Competitor Positioning",
        description: "We analyze competitor advertising strategies, keyword opportunities, and ideal customer profiles.",
      },
      {
        step: "02",
        title: "Attribution & Tracking Foundation",
        description: "Installing server-side tracking, event tags, and conversion pipelines before launching spend.",
      },
      {
        step: "03",
        title: "Campaign Architecture & Creative Production",
        description: "Writing high-converting ad copy, designing creative collateral, and building dedicated landing pages.",
      },
      {
        step: "04",
        title: "Launch & Systematic Optimization",
        description: "Iterative testing of audiences, headlines, bid strategies, and negative keyword pruning.",
      },
      {
        step: "05",
        title: "Scale & Retention Expansion",
        description: "Doubling down on profitable channels, expanding lookalike audiences, and nurturing leads.",
      },
    ],
    faqs: [
      {
        question: "What ad budget do we need to get started?",
        answer:
          "We work with companies investing starting from $2,500/month up to six-figure monthly enterprise budgets, tailoring campaign structures to maximize return at each spending level.",
      },
      {
        question: "How quickly do we see results from paid campaigns?",
        answer:
          "Paid search campaigns can generate traffic within days of launch. Typically, the first 14-30 days focus on data gathering and bid calibration, with meaningful ROI acceleration in months 2 and beyond.",
      },
      {
        question: "Do you create the ad copy and landing page designs?",
        answer:
          "Yes. We handle end-to-end campaign execution: strategy, ad copywriting, visual creatives, landing page development, and technical attribution tracking.",
      },
      {
        question: "Do we retain ownership of our ad accounts and data?",
        answer:
          "Absolutely. You retain 100% ownership of all ad accounts, tracking containers, and data. We operate as invited partners with managerial access.",
      },
    ],
  },
  {
    id: "seo",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDescription:
      "Technical audits, international crawl optimization, authoritative content architecture, and sustained organic rankings that drive inbound revenue.",
    heroHeadline: "Technical & Strategic SEO Engineered for Sustainable Organic Dominance",
    heroSubheadline:
      "Achieve long-term organic visibility on Google. We deliver technical infrastructure audits, semantic entity optimization, international multi-region SEO, and high-authority content strategies designed to capture high-intent commercial searches.",
    iconName: "Search",
    accentColor: "#8B5CF6",
    problemsSolved: [
      {
        problem: "Low search visibility despite having a visually modern website",
        impact: "Competitors capture high-intent buyers searching for your core offerings every day.",
        solution: "Comprehensive technical SEO audits identifying and remediating indexing blocks, duplicate content, and schema gaps.",
      },
      {
        problem: "Slow page load and poor Core Web Vitals dragging down search rankings",
        impact: "Google algorithms penalize slow platforms, prioritizing faster competitor pages.",
        solution: "Full performance remediation: optimizing server response, JavaScript payload, and layout shifts.",
      },
      {
        problem: "Content that fails to rank or attract commercial decision makers",
        impact: "Marketing teams waste time writing blogs that generate zero qualified organic leads.",
        solution: "Search intent modeling, topic cluster architectures, and entity-based optimization for commercial keywords.",
      },
    ],
    deliverables: [
      {
        title: "Technical SEO Foundation",
        description: "Ensuring search engines can crawl, index, and interpret your website flawlessly.",
        items: [
          "Crawl budget optimization & XML sitemap generation",
          "Robots.txt directive auditing & canonicalization",
          "JSON-LD structured data (Organization, Services, Article, FAQ)",
          "Core Web Vitals remediation (LCP, INP, CLS)",
        ],
      },
      {
        title: "On-Page & Semantic Content Strategy",
        description: "Aligning your content with exact search query intent.",
        items: [
          "High-intent keyword research and topical gap analysis",
          "Semantic heading hierarchy & metadata optimization",
          "Content briefs for authoritative service & landing pages",
          "Internal linking architecture & topic cluster mapping",
        ],
      },
      {
        title: "International & Local SEO",
        description: "Optimizing visibility across international markets.",
        items: [
          "Hreflang multi-region tag implementation",
          "Geotargeting strategy for multi-country presence",
          "Local business entity alignment and citations",
          "Google Search Console & Bing Webmaster monitoring",
        ],
      },
    ],
    benefits: [
      {
        title: "Compounding Traffic Value",
        description: "Organic search delivers an appreciating asset without continuous cost-per-click ad fees.",
        metric: "Zero Ad Spend Traffic",
      },
      {
        title: "Commercial Intent Focus",
        description: "Capture buyers at the exact moment they search for your solutions.",
        metric: "+64% Organic Leads",
      },
      {
        title: "Global Reach",
        description: "Structured international configurations allow your brand to rank across target global regions.",
        metric: "Multi-Region Visibility",
      },
      {
        title: "Algorithm Resilience",
        description: "White-hat technical best practices that protect your website through core algorithm updates.",
        metric: "100% White Hat",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Technical & Crawl Audit",
        description: "We deep-crawl every URL to uncover indexability blocks, redirect chains, and schema errors.",
      },
      {
        step: "02",
        title: "Competitor & Keyword Opportunity Analysis",
        description: "Identifying where competitors outrank you and uncovering untapped commercial search queries.",
      },
      {
        step: "03",
        title: "Technical Remediation & Schema Deployment",
        description: "Patching speed bottlenecks, resolving indexing errors, and embedding rich structured data.",
      },
      {
        step: "04",
        title: "Content Optimization & Architecture",
        description: "Revamping key service pages and publishing authoritative topic clusters with structured internal links.",
      },
      {
        step: "05",
        title: "Monitoring, Reporting & Iteration",
        description: "Monthly tracking of ranking positions, organic click impressions, and inbound conversion rates.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see tangible SEO results?",
        answer:
          "Technical fixes and indexing improvements often show initial ranking movements within 30 to 60 days. Substantial organic traffic and revenue growth typically mature over 3 to 6 months of consistent execution.",
      },
      {
        question: "Do you guarantee number 1 rankings on Google?",
        answer:
          "No ethical agency can guarantee an exact #1 position due to dynamic search algorithms. We do guarantee proven technical best practices, high-intent targeting, and rigorous methodology that consistently delivers measurable ranking and traffic growth.",
      },
      {
        question: "How does SEO differ for international companies?",
        answer:
          "International SEO requires specialized hreflang configurations, geo-targeting directives, localized keyword variations, and global edge delivery so search bots in different countries crawl fast.",
      },
      {
        question: "Will our website traffic drop during a website redesign?",
        answer:
          "We engineer strict 301 redirect maps, metadata parity, and canonical checks during redesigns to preserve and protect your hard-earned SEO equity and ranking history.",
      },
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Business Automation Systems",
    shortDescription:
      "Workflow optimization, custom API bridges, automated CRM pipelines, and intelligent operations tools that eliminate manual overhead.",
    heroHeadline: "Intelligent Business Automation to Eliminate Friction & Scale Operations",
    heroSubheadline:
      "Manual processes throttle business growth. We build custom API bridges, automated customer journeys, CRM synchronization pipelines, and bespoke operational tools that empower your team to accomplish more with fewer overhead costs.",
    iconName: "Cpu",
    accentColor: "#F59E0B",
    problemsSolved: [
      {
        problem: "Repetitive manual data entry across disconnected software tools",
        impact: "Human errors, delayed client responses, and hundreds of lost team hours every month.",
        solution: "Automated webhook pipelines and API integrations synchronizing data instantly across systems.",
      },
      {
        problem: "Delayed lead response times causing high-intent prospects to go cold",
        impact: "Inquiries answered after 1 hour are 7x less likely to convert into paying clients.",
        solution: "Instant automated lead qualification, WhatsApp/SMS routing, and automated calendar scheduling.",
      },
      {
        problem: "Manual invoicing, payment tracking, and onboarding bottlenecks",
        impact: "Cash flow stalls and new client onboarding experiences feel clunky and slow.",
        solution: "Triggered onboarding sequences, automated contract generation, and automated accounting syncs.",
      },
    ],
    deliverables: [
      {
        title: "Workflow Automation & Pipeline Design",
        description: "Connecting operational systems into unified, hands-off workflows.",
        items: [
          "CRM automation (HubSpot, Salesforce, Pipedrive, Zoho)",
          "Instant lead distribution and sales routing logic",
          "Automated client onboarding sequences and document signing",
          "Automated task creation in project management tools (Jira, Linear, Asana)",
        ],
      },
      {
        title: "Custom API & Webhook Integrations",
        description: "Bridging modern tools with legacy databases and third-party services.",
        items: [
          "Bespoke serverless API endpoints & webhook handlers",
          "Zapier / Make / n8n enterprise workflow automation",
          "Database synchronization (PostgreSQL, Supabase, BigQuery)",
          "Automated error logging and fallback notification systems",
        ],
      },
      {
        title: "Internal Tools & Operational Dashboards",
        description: "Empowering internal teams with bespoke web interfaces.",
        items: [
          "Custom administration panels and management dashboards",
          "Automated PDF report and invoice generation pipelines",
          "Automated notification bots for Slack and Microsoft Teams",
          "Detailed documentation and team training protocols",
        ],
      },
    ],
    benefits: [
      {
        title: "Hundreds of Hours Saved",
        description: "Eliminate repetitive copy-pasting so your high-value talent focuses on strategic client work.",
        metric: "120+ hrs/mo Saved",
      },
      {
        title: "Sub-Minute Lead Response",
        description: "Respond to incoming enquiries automatically before competitors even see the email.",
        metric: "< 60s Lead Response",
      },
      {
        title: "Zero Human Error",
        description: "Automated data validation ensures accurate data entry between CRM, accounting, and project tools.",
        metric: "99.9% Data Accuracy",
      },
      {
        title: "Scalable Without Headcount",
        description: "Process 10x the operational volume without needing to hire additional administrative staff.",
        metric: "10x Throughput",
      },
    ],
    process: [
      {
        step: "01",
        title: "Operational Bottleneck Discovery",
        description: "We map your team's manual steps, software tech stack, handoffs, and data leaks.",
      },
      {
        step: "02",
        title: "Automation Architecture Blueprint",
        description: "Designing data schemas, trigger logic, error fallbacks, and security access controls.",
      },
      {
        step: "03",
        title: "Integration & Webhook Development",
        description: "Building API connectors, configuring webhook endpoints, and setting up data transformation logic.",
      },
      {
        step: "04",
        title: "Edge Case & Stress Testing",
        description: "Simulating edge-case failures, large payload volumes, and verifying automated error notifications.",
      },
      {
        step: "05",
        title: "Deployment & Team Handover",
        description: "Going live, training internal teams on monitoring, and delivering complete API documentation.",
      },
    ],
    faqs: [
      {
        question: "Can you automate tools that do not have native integrations?",
        answer:
          "Yes. We build custom serverless webhooks and API middleware that connect any software with an open API or webhook capability, ensuring seamless communication.",
      },
      {
        question: "What happens if a third-party API goes down or changes?",
        answer:
          "We build fault-tolerant architectures with automatic retry queues, dead-letter storage, and instant alert notifications (Slack/email) so no data is ever lost.",
      },
      {
        question: "Do we need to switch from our existing CRM or tools?",
        answer:
          "No. We prioritize automating within your existing software stack (HubSpot, Salesforce, Notion, Google Workspace, etc.) so your team does not need to learn an entirely new platform.",
      },
      {
        question: "Is our business data secure during automated transfers?",
        answer:
          "Yes. All automated data transfers use TLS 1.3 encryption, secure OAuth2 credentials, and strict environment variable storage adhering to global security standards.",
      },
    ],
  },
];

