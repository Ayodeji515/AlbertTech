import { Project } from "@/types";

export const portfolioProjects: Project[] = [
  {
    id: "sample-nexus-logistics",
    slug: "nexus-global-logistics-portal",
    title: "Nexus Global Logistics",
    tagline: "Headless enterprise freight & tracking platform serving international supply chains.",
    category: "Website Development",
    clientIndustry: "Global Logistics & Supply Chain",
    featured: true,
    isSample: true, // Clearly marked representative agency case study
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ],
    summary:
      "A representative enterprise web application engineered to demonstrate our capability in high-concurrency data portals, real-time tracking dashboards, and global edge delivery.",
    challenge:
      "The client required an overhaul of their customer-facing logistics dashboard that suffered from 6-second page load times, fragmented tracking APIs across three continents, and an outdated user experience that hindered B2B enterprise client acquisition.",
    solution:
      "ALBERTECH architected a decoupled Next.js platform deployed across global edge networks with localized multi-language routing, an interactive real-time cargo tracking dashboard, and an integrated quoting engine connected directly to their freight ERP.",
    keyOutcomes: [
      "Reduced average dashboard load time from 5.8s down to 0.75s globally.",
      "Engineered automated instant quote calculator reducing manual sales desk friction.",
      "Achieved 100% WCAG 2.1 AA accessibility score across all dashboard viewports.",
      "Seamlessly integrated webhook endpoints handling 40,000+ daily tracking events.",
    ],
    metrics: [
      { label: "Load Time Reduction", value: "87%", indicator: "Faster page render" },
      { label: "Quote Inquiries", value: "+46%", indicator: "Quarter-over-quarter" },
      { label: "Core Web Vitals", value: "99/100", indicator: "Google Lighthouse" },
    ],
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "GraphQL", "PostgreSQL", "Vercel Edge"],
    duration: "10 Weeks",
    deliverables: [
      "Enterprise Design System & UI Kit",
      "Interactive Real-Time Shipment Tracking UI",
      "Multi-Currency B2B Freight Cost Calculator",
      "ERP Webhook Integration Layer",
    ],
  },
  {
    id: "sample-aerovita-store",
    slug: "aerovita-luxury-wellness",
    title: "AeroVita Luxury Wellness",
    tagline: "High-performance multi-currency e-commerce storefront with headless checkout.",
    category: "E-commerce",
    clientIndustry: "Health & Luxury Retail",
    featured: true,
    isSample: true,
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    ],
    summary:
      "A flagship luxury lifestyle e-commerce store engineered to demonstrate headless commerce architecture, fluid product personalization, and multi-currency international sales.",
    challenge:
      "A rapidly expanding direct-to-consumer lifestyle brand faced cart abandonment on mobile devices and struggled to accept native currencies from emerging European and Asian markets.",
    solution:
      "We built a bespoke headless storefront utilizing Next.js Commerce paired with Shopify Storefront API, automated geolocation-based currency conversion, and frictionless single-tap payment methods.",
    keyOutcomes: [
      "Lowered mobile cart abandonment rate by 24% through one-click checkout.",
      "Enabled automatic localized purchasing across 32 international currencies.",
      "Instantaneous product filtering and search across 800+ product variants.",
      "Custom subscription logic and loyalty reward integrations.",
    ],
    metrics: [
      { label: "Mobile Checkout Speed", value: "1.2s", indicator: "Average completion" },
      { label: "Conversion Lift", value: "+38%", indicator: "Post-launch 60 days" },
      { label: "International Share", value: "41%", indicator: "Of total revenue" },
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe Multi-Currency", "Framer Motion"],
    duration: "8 Weeks",
    deliverables: [
      "Custom E-commerce Storefront & Design System",
      "Localized Multi-Currency Checkout Architecture",
      "Automated Stock & 3PL Warehouse Webhook Sync",
      "Klaviyo Automated Post-Purchase Retention Flow",
    ],
  },
  {
    id: "sample-vertex-capital",
    slug: "vertex-growth-marketing",
    title: "Vertex Strategic Capital",
    tagline: "Integrated B2B performance marketing and search engine organic authority campaign.",
    category: "Digital Marketing",
    clientIndustry: "Private Equity & Advisory",
    featured: true,
    isSample: true,
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ],
    summary:
      "A sample performance marketing case study demonstrating high-intent lead acquisition, full-funnel tracking attribution, and conversion rate optimization for advisory services.",
    challenge:
      "The firm had high customer acquisition costs through general LinkedIn advertising with poor lead qualification and zero visibility into the customer acquisition funnel.",
    solution:
      "ALBERTECH restructured the digital acquisition strategy with hyper-targeted audience segments, server-side tracking, dedicated interactive landing pages, and automated lead scoring.",
    keyOutcomes: [
      "Decreased Cost Per Qualified Lead (CPQL) by 42% in 90 days.",
      "Built multi-touch server-side attribution connecting ad spend directly to closed mandates.",
      "Implemented automated CRM routing sending high-value enquiries to senior partners instantly.",
    ],
    metrics: [
      { label: "Cost Per Lead", value: "-42%", indicator: "Optimized acquisition" },
      { label: "Qualified Pipeline", value: "$12M+", indicator: "Attributed pipeline" },
      { label: "Lead Response Time", value: "< 5m", indicator: "Automated routing" },
    ],
    technologies: ["Google Ads Search", "LinkedIn Campaign Manager", "Looker Studio", "Server-Side GTM", "HubSpot"],
    duration: "Ongoing Strategy",
    deliverables: [
      "Full-Funnel Campaign Architecture",
      "Custom High-Converting B2B Landing Pages",
      "Executive Growth & ROI Attribution Dashboard",
      "Automated Lead Qualification Pipeline",
    ],
  },
  {
    id: "sample-strata-seo",
    slug: "strata-cloud-technical-seo",
    title: "Strata Cloud Infrastructure",
    tagline: "Comprehensive technical SEO overhaul & international search visibility strategy.",
    category: "SEO",
    clientIndustry: "Cloud Software & SaaS",
    featured: false,
    isSample: true,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    ],
    summary:
      "A representative technical SEO audit and architectural restructuring that resolved deep crawling issues and elevated non-branded search impressions.",
    challenge:
      "Following a CMS migration, the platform lost 45% of organic traffic due to broken redirect chains, missing canonical structures, and excessive client-side JavaScript execution blocking Googlebot.",
    solution:
      "We executed an in-depth technical crawl audit, rebuilt dynamic XML sitemaps, implemented comprehensive JSON-LD entity schemas, and migrated documentation pages to server-side rendering.",
    keyOutcomes: [
      "Recovered 100% of lost search equity and achieved 85% year-over-year organic traffic growth.",
      "Ranked #1–#3 on Google for 40+ high-value commercial cloud terminology keywords.",
      "Eliminated 100% of crawl errors and redirect loops reported by Google Search Console.",
    ],
    metrics: [
      { label: "Organic Clicks", value: "+140%", indicator: "6 months post-audit" },
      { label: "Keyword Positions", value: "340+", indicator: "In Top 10 Google results" },
      { label: "Crawl Efficiency", value: "3.2x", indicator: "Googlebot page fetch rate" },
    ],
    technologies: ["Screaming Frog", "Google Search Console", "Next.js SSR", "Schema.org JSON-LD", "Ahrefs"],
    duration: "6 Months",
    deliverables: [
      "Technical Crawl & Indexation Remediation",
      "Dynamic XML Sitemap & Canonical Strategy",
      "Semantic Topic Cluster Architecture",
      "Ongoing Organic Search Monitoring",
    ],
  },
  {
    id: "sample-omni-automate",
    slug: "omni-operations-automation-engine",
    title: "Omni Industrial Group",
    tagline: "End-to-end operational workflow automation connecting CRM, ERP, and field dispatch.",
    category: "Business Automation",
    clientIndustry: "Industrial Manufacturing",
    featured: true,
    isSample: true,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    summary:
      "A representative workflow automation system demonstrating how custom API bridges eliminate 150+ hours of repetitive manual administration each week.",
    challenge:
      "Sales, contract signing, manufacturing orders, and dispatch lived in four separate, siloed software systems, requiring five full-time staff members just to manually copy-paste customer orders.",
    solution:
      "ALBERTECH developed a centralized event-driven automation middleware utilizing secure webhook receivers, data sanitization microservices, and automatic contract generation.",
    keyOutcomes: [
      "Completely eliminated manual re-entry errors across sales and fulfillment.",
      "Reduced order-to-production processing time from 48 hours to under 3 minutes.",
      "Saved an estimated $110,000 annually in administrative operational overhead.",
    ],
    metrics: [
      { label: "Hours Saved / Wk", value: "150 hrs", indicator: "Team productivity" },
      { label: "Processing Speed", value: "< 3 mins", indicator: "From order to factory" },
      { label: "Data Accuracy", value: "99.98%", indicator: "Audit compliance" },
    ],
    technologies: ["Node.js Serverless", "Docker", "PostgreSQL", "Zapier Enterprise", "Salesforce API", "DocuSign API"],
    duration: "7 Weeks",
    deliverables: [
      "Enterprise Automation Blueprint & Data Schema",
      "Custom Secure Webhook Microservice Layer",
      "Automated Contract Generation & Signing Workflow",
      "Admin Health Dashboard with Error Alerts",
    ],
  },
];

