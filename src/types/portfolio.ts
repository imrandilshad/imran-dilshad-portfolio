import type { LucideIcon } from "lucide-react";

export type SocialIcon = "github" | "linkedin" | "email";

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: SocialIcon;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  availability: string;
  yearsOfExperience: string;
  headline: { lead: string; highlight: string };
  summary: string;
  about: string[];
  strengths: string[];
  principles: Principle[];
  stats: Stat[];
  spokenLanguages: string[];
  photo: { src: string; alt: string };
}

export interface Skill {
  name: string;
  /** Daily-driver technology, visually emphasised. */
  core?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  context: string;
  summary: string;
  challenge: string;
  contributions: string[];
  features: string[];
  tech: string[];
  /** High-level solution flow rendered as an architecture diagram. */
  flow: string[];
  confidential: boolean;
  links?: ProjectLink[];
}

export interface AdditionalWork {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  links?: ProjectLink[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}
