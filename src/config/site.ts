import type { NavItem, SocialLink } from "@/types/portfolio";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  url: resolveSiteUrl().replace(/\/$/, ""),
  title: "Imran Dilshad — Senior Software Engineer",
  shortTitle: "Imran Dilshad",
  description:
    "Senior Software Engineer with 7+ years building scalable web applications, enterprise portals, retail analytics platforms, and AI-powered experiences with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Imran Dilshad",
    "Senior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Engineer",
    "Full-Stack Developer",
    "Node.js",
    "Redux Toolkit",
    "Enterprise Applications",
    "Lahore",
    "Pakistan",
    "Remote",
  ],
  locale: "en_US",
  resumePath: "/resume/imran-dilshad-senior-software-engineer-resume.pdf",
  themeStorageKey: "theme",
  /** Update when content changes; used by sitemap.xml. */
  lastUpdated: "2026-11-24",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "github.com/imrandilshad",
    href: "https://github.com/imrandilshad",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/imran-dilshad-12383b164",
    href: "https://www.linkedin.com/in/imran-dilshad-12383b164",
    icon: "linkedin",
  },
  {
    label: "Email",
    handle: "imrandilshad96@gmail.com",
    href: "mailto:imrandilshad96@gmail.com",
    icon: "email",
  },
];
