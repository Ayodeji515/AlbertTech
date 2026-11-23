export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  accentColor: string;
  problemsSolved: {
    problem: string;
    impact: string;
    solution: string;
  }[];
  deliverables: {
    title: string;
    description: string;
    items: string[];
  }[];
  benefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Website Development" | "E-commerce" | "Digital Marketing" | "SEO" | "Business Automation";
  clientIndustry: string;
  featured: boolean;
  isSample: boolean;
  coverImage: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  metrics: {
    label: string;
    value: string;
    indicator: string;
  }[];
  technologies: string[];
  duration: string;
  deliverables: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
  relatedSlugs: string[];
};

export type ContactEnquiry = {
  fullName: string;
  email: string;
  phone: string;
  countryCode?: string;
  companyName?: string;
  service: string;
  budget?: string;
  projectDescription: string;
  honeypot?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  industry: string;
  isRepresentative?: boolean;
};

