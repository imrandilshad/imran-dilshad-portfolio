import { Globe, Smartphone, Workflow } from "lucide-react";
import type { AdditionalWork, Project } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    slug: "decision-insight",
    title: "Decision Insight — Kroger & Sprouts",
    category: "AI-powered conversational analytics",
    context: "Enterprise retail · BITLogix",
    summary:
      "A conversational business-intelligence experience where users ask questions in natural language and receive streamed, data-backed answers they can explore and export.",
    challenge:
      "Make large retail datasets approachable for decision-makers by turning natural-language questions into fast, trustworthy, and explorable results.",
    contributions: [
      "Built the conversational query interface in React and TypeScript.",
      "Integrated streaming responses using server-sent events (SSE) for progressive rendering.",
      "Connected the UI to Snowflake-backed query integrations.",
      "Presented query results in interactive table views with CSV export.",
    ],
    features: [
      "Natural-language querying",
      "Streaming AI responses",
      "Interactive result tables",
      "CSV data export",
    ],
    tech: ["React", "TypeScript", "Server-Sent Events", "Snowflake", "REST APIs"],
    flow: [
      "Natural-language question",
      "React conversational UI",
      "Streaming API (SSE)",
      "Snowflake-backed insights",
      "Interactive tables & CSV export",
    ],
    confidential: true,
  },
  {
    slug: "asda-stockwise-config-portal",
    title: "ASDA StockWise Config Portal",
    category: "Enterprise configuration portal",
    context: "Enterprise retail · BITLogix",
    summary:
      "A secure configuration portal for the StockWise retail platform, used to manage application configuration across environments.",
    challenge:
      "Give authorised users a reliable, secure way to manage enterprise application configuration while keeping state, authentication, and environments consistent.",
    contributions: [
      "Develop and maintain the React 18 and TypeScript application built with Vite.",
      "Build configuration workflows using Redux Toolkit, React Router, and Ant Design.",
      "Implement OAuth2 PKCE authentication and integrate it with application state.",
      "Integrate REST APIs and troubleshoot deployment and environment issues.",
    ],
    features: [
      "Configuration management workflows",
      "OAuth2 PKCE sign-in",
      "Typed REST API integration",
      "Environment-aware deployments",
    ],
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Ant Design",
      "Tailwind CSS",
      "SCSS",
      "OAuth2 PKCE",
    ],
    flow: [
      "Enterprise user sign-in",
      "OAuth2 PKCE authentication",
      "React + Redux Toolkit portal",
      "Configuration REST APIs",
      "Environment deployments",
    ],
    confidential: true,
  },
  {
    slug: "store-insight",
    title: "Store Insight",
    category: "Retail analytics dashboards",
    context: "Enterprise retail · BITLogix",
    summary:
      "Interactive store-performance dashboards and Smart Actions that help retail teams understand performance and act on business insights.",
    challenge:
      "Turn dense store-performance data into clear dashboards and actionable tasks while the underlying API contracts continue to evolve.",
    contributions: [
      "Developed KPI tiles, drill-downs, performance breakdowns, and top-driver views.",
      "Built Smart Actions: action cards, feedback and status flows, and reminder and calendar interfaces.",
      "Aligned front-end delivery with evolving API contracts and product feedback.",
    ],
    features: [
      "KPI tiles & drill-downs",
      "Top drivers & breakdowns",
      "Smart Action cards",
      "Reminders & calendar",
    ],
    tech: ["React", "TypeScript", "JavaScript", "REST APIs", "Data visualization"],
    flow: [
      "Store & head-office users",
      "React dashboards",
      "Insights & KPI APIs",
      "Smart Actions workflow",
      "Feedback & status tracking",
    ],
    confidential: true,
  },
  {
    slug: "availability-insight",
    title: "AvailabilityInsight",
    category: "Retail availability & alerting",
    context: "Enterprise retail · BITLogix",
    summary:
      "Head Office and Store Alerting applications for an on-shelf availability platform that helps store teams identify availability issues and respond to alerts.",
    challenge:
      "Deliver reliable alerting experiences across multiple markets and languages while diagnosing defects that span the UI, APIs, and data responses.",
    contributions: [
      "Delivered API-driven features for the Head Office and Store Alerting applications.",
      "Supported localized market experiences with multi-language internationalization.",
      "Diagnosed defects across UI, API, and database response layers.",
    ],
    features: [
      "Head Office application",
      "Store Alerting application",
      "Multi-language support (i18n)",
      "Availability issue alerts",
    ],
    tech: ["React", "TypeScript", "JavaScript", "REST APIs", "i18n"],
    flow: [
      "Head Office & store teams",
      "Localized React apps (i18n)",
      "Availability APIs",
      "Alerts & availability data",
    ],
    confidential: true,
  },
];

export const additionalWork: AdditionalWork[] = [
  {
    title: "Client Web Products",
    description:
      "Web interfaces, corporate websites, and dashboards delivered for clients at Ciel Technology and earlier roles.",
    icon: Globe,
    items: [
      "De-Evente Web & event-management solutions",
      "Profit Model Dashboard & Seasoned Investor",
      "Sela-client Web, HMRS, Allied Help",
      "Zoltan Land, Meta-Land, FLY FTR, da-game",
    ],
  },
  {
    title: "Automation & Data Extraction",
    description:
      "Node.js- and Python-based utilities that collect and structure data from the web for downstream use.",
    icon: Workflow,
    items: [
      "Node.js web scraping & automation",
      "Python data-extraction tooling",
      "CSV export workflows",
    ],
  },
  {
    title: "Mobile, Microfrontends & Auth",
    description: "Cross-platform and architectural work beyond single-page web apps.",
    icon: Smartphone,
    items: [
      "React Native mobile development",
      "Microfrontend architecture",
      "SSO & authentication integrations",
      "Angular & Vue.js development",
    ],
    links: [
      { label: "Angular CRM app on GitHub", href: "https://github.com/imrandilshad/CRM-App" },
    ],
  },
];
