import { Blocks, Bug, Compass, Users } from "lucide-react";
import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Imran Dilshad",
  role: "Senior Software Engineer",
  location: "Lahore, Pakistan",
  email: "imrandilshad96@gmail.com",
  availability: "Open to remote opportunities",
  yearsOfExperience: "7+",
  headline: {
    lead: "I turn complex data and business rules into",
    highlight: "clear, scalable products.",
  },
  summary:
    "Senior Software Engineer with 7+ years of experience building enterprise portals, retail analytics platforms, and AI-powered experiences with React, Next.js, TypeScript, and Node.js.",
  about: [
    "I'm a Senior Software Engineer with 7+ years of experience building scalable web applications, enterprise portals, retail analytics platforms, and API-integrated products. My core expertise is React, Next.js, TypeScript, JavaScript, Redux Toolkit, and modern front-end architecture, complemented by hands-on work with Node.js, REST APIs, Python, and React Native.",
    "Today I work on enterprise retail products used by head-office and store teams — from a secure configuration portal and localized availability alerting, to interactive performance dashboards and an AI-powered conversational analytics experience that streams answers from Snowflake-backed data.",
    "I enjoy translating product requirements into maintainable user experiences, integrating back-end services, and resolving the tricky cross-layer issues that sit between the UI, APIs, authentication, and deployed environments.",
  ],
  strengths: [
    "Production-grade React, Next.js, and TypeScript architecture",
    "Reliable integration with REST APIs, streaming (SSE), and auth flows such as OAuth2 PKCE",
    "Cross-layer debugging across UI, API payloads, sessions, and environments",
    "Localization-ready, responsive, and accessible interfaces",
    "Focused pull requests and smooth collaboration with product, design, and engineering",
  ],
  principles: [
    {
      title: "Product-minded engineering",
      description:
        "I start from the user problem and the business rule behind it, then shape the simplest interface that makes the data actionable.",
      icon: Compass,
    },
    {
      title: "Maintainable architecture",
      description:
        "Reusable components, typed contracts, and predictable state keep large enterprise codebases easy to extend and review.",
      icon: Blocks,
    },
    {
      title: "Root-cause debugging",
      description:
        "I trace issues across UI, API payloads, authentication, configuration, and deployments instead of patching symptoms.",
      icon: Bug,
    },
    {
      title: "Collaborative delivery",
      description:
        "Clear pull requests, responsive reviews, and close work with product and design through Jira and CI/CD pipelines.",
      icon: Users,
    },
  ],
  stats: [
    { value: "7+", label: "Years of experience" },
    { value: "4", label: "Enterprise retail platforms" },
    { value: "15+", label: "Products & client projects" },
    { value: "4", label: "Companies" },
  ],
  spokenLanguages: ["English", "Urdu"],
  photo: {
    src: "/images/imran-dilshad.jpg",
    alt: "Portrait of Imran Dilshad, Senior Software Engineer",
  },
};
