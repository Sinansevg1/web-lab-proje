import type { Category } from "./project";

export interface QuickFact {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Certificate {
  title: string;
  org: string;
  detail: string;
}

export interface SiteProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  accent?: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SiteContent {
  profile: {
    name: string;
    subtitle: string;
    title: string;
    heroDescription: string;
    location: string;
    email: string;
    phone: string;
    photoUrl: string;
    photoRole: string;
    linkedin: string;
    whatsapp: string;
    quickOrderDemo: string;
  };
  header: {
    initials: string;
    domain: string;
    navLinks: NavLink[];
    ctaLabel: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    description: string;
    bio: string;
    quickFacts: QuickFact[];
  };
  skills: {
    sectionLabel: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  education: {
    sectionLabel: string;
    title: string;
    description: string;
    school: string;
    department: string;
    date: string;
    city: string;
    languages: Language[];
  };
  certificates: {
    sectionLabel: string;
    title: string;
    description: string;
    items: Certificate[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    description: string;
    items: SiteProject[];
  };
  contact: {
    sectionLabel: string;
    title: string;
    description: string;
    formTitle: string;
    formSubtitle: string;
    formSubmitEmail: string;
    items: ContactItem[];
  };
  footer: {
    name: string;
    tagline: string;
    linkedin: string;
  };
  seo: {
    pageTitle: string;
    metaDescription: string;
    ogUrl: string;
    siteName: string;
  };
}
