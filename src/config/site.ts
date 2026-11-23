import { NavItem } from "@/types";

export const siteConfig = {
  name: "ALBERTECH",
  legalName: "ALBERTECH Digital Agency",
  tagline: "International Digital Agency for Scalable Growth",
  description:
    "ALBERTECH partners with ambitious enterprises, startups, and growing brands worldwide to design high-performance websites, e-commerce architectures, ROI-driven digital marketing, technical SEO, and business automation systems.",
  url: "https://albertech.agency", // Placeholder domain until production domain is finalized
  ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

  contact: {
    email: "contact@albertech.agency", // Centralized editable email placeholder
    phone: "+1 (800) 555-0199", // Centralized editable international support line placeholder
    whatsapp: "+18005550199", // WhatsApp link target (format without spaces or symbols)
    whatsappDisplay: "+1 (800) 555-0199",
    businessHours: "Mon – Fri: 08:00 – 18:00 UTC",
    addressPlaceholder: "International Operations Hub (Remote & Distributed Worldwide)",
    responseTime: "Guaranteed response within 24 business hours",
  },

  socials: {
    linkedin: "https://linkedin.com/company/albertech-agency",
    twitter: "https://twitter.com/albertechagency",
    github: "https://github.com/albertech-agency",
    instagram: "https://instagram.com/albertech.agency",
  },

  // Trust statistics & milestones (representative placeholders clearly documented)
  metrics: [
    { label: "Client Project Deliveries", value: "120+", note: "Global client implementations" },
    { label: "Countries Served", value: "18+", note: "Across North America, Europe, Asia & Africa" },
    { label: "Average Client Retention", value: "94%", note: "Long-term partnership contracts" },
    { label: "Combined Growth Value", value: "$45M+", note: "Revenue influenced across portfolios" },
  ],

  // International phone dialing prefixes for contact form
  countryCodes: [
    { code: "+1", country: "United States / Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+31", country: "Netherlands" },
    { code: "+61", country: "Australia" },
    { code: "+65", country: "Singapore" },
    { code: "+971", country: "United Arab Emirates" },
    { code: "+27", country: "South Africa" },
    { code: "+234", country: "Nigeria" },
    { code: "+254", country: "Kenya" },
    { code: "+91", country: "India" },
  ],

  // Project budget brackets
  budgetRanges: [
    "< $5,000 (Targeted Milestone)",
    "$5,000 – $15,000 (Growth Solution)",
    "$15,000 – $35,000 (Full-Scale Build)",
    "$35,000 – $75,000+ (Enterprise Transformation)",
    "Undisclosed / Retainer",
  ],
};

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Website Development",
        href: "/services/website-development",
        description: "Custom web applications, corporate websites, and headless architectures engineered for speed.",
      },
      {
        title: "E-commerce Solutions",
        href: "/services/ecommerce",
        description: "Scalable storefronts, multi-currency checkout, and custom integrations that convert shoppers.",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Data-driven performance marketing, multi-channel customer acquisition, and paid social.",
      },
      {
        title: "SEO Services",
        href: "/services/seo",
        description: "Technical search audits, international SEO, programmatic content, and organic visibility.",
      },
      {
        title: "Business Automation",
        href: "/services/automation",
        description: "Workflow streamlining, CRM integrations, custom API bridges, and operational tooling.",
      },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNavItems = {
  services: [
    { title: "Website Development", href: "/services/website-development" },
    { title: "E-commerce Solutions", href: "/services/ecommerce" },
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "SEO Services", href: "/services/seo" },
    { title: "Business Automation", href: "/services/automation" },
  ],
  company: [
    { title: "About ALBERTECH", href: "/about" },
    { title: "Portfolio & Case Studies", href: "/portfolio" },
    { title: "Insights & Blog", href: "/blog" },
    { title: "Contact & Enquiries", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms and Conditions", href: "/terms" },
  ],
};

