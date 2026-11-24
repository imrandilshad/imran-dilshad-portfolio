import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "BITLogix Pvt. Ltd.",
    role: "Senior Software Engineer / MERN Stack Developer",
    location: "Lahore, Pakistan",
    start: "Dec 2022",
    end: "Present",
    current: true,
    summary:
      "Engineer and maintain enterprise retail applications, translating product requirements and design specifications into reusable components, responsive interfaces, and reliable API-connected workflows.",
    highlights: [
      "Develop and maintain the ASDA StockWise Config Portal — a React 18 and TypeScript application with Redux Toolkit, Ant Design, and OAuth2 PKCE authentication.",
      "Deliver API-driven, localized features for AvailabilityInsight, a retail on-shelf availability and alerting platform.",
      "Build conversational query experiences for Decision Insight (Kroger and Sprouts) using streaming SSE responses, Snowflake-backed integrations, result tables, and CSV export.",
      "Develop Store Insight dashboards and Smart Actions — KPI tiles, drill-downs, top drivers, action cards, feedback flows, and reminder/calendar interfaces.",
      "Diagnose cross-layer issues involving API payloads, authentication and sessions, environment configuration, localization, and performance in deployed environments.",
      "Ship through focused pull requests, code reviews, Jira, and CI/CD pipelines; build Node.js- and Python-based data-extraction utilities and contribute to React Native development.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Node.js",
      "Python",
      "React Native",
    ],
  },
  {
    company: "Ciel Technology",
    role: "Senior React.js / Next.js / Node.js Developer",
    location: "Lahore, Pakistan",
    start: "Dec 2021",
    end: "Dec 2022",
    summary:
      "Developed web interfaces, corporate websites, dashboards, and client-facing product features using React, Next.js, and JavaScript.",
    highlights: [
      "Contributed to De-Evente Web, Sela-client Web, Profit Model Dashboard, da-game, Seasoned Investor, HMRS, Zoltan Land, FLY FTR, Meta-Land, Allied Help, and other client projects.",
      "Implemented responsive layouts and reusable components, integrated APIs, and supported iterative UI delivery across multiple technology stacks.",
    ],
    tech: ["React", "Next.js", "JavaScript", "Node.js", "REST APIs"],
  },
  {
    company: "Virtual Recruitment Days DHA",
    role: "Senior React.js Developer",
    location: "Lahore, Pakistan",
    start: "May 2021",
    end: "Dec 2021",
    summary:
      "Built React interfaces for web products, including an event management system, and integrated REST APIs into user-facing workflows.",
    highlights: [
      "Managed application state with React Redux, Redux Toolkit, Redux Saga, and Redux Thunk, and implemented token-based authentication.",
      "Delivered responsive interfaces with SCSS, Ant Design, Material UI, Tailwind CSS, Formik, Reactstrap, and Bootstrap.",
    ],
    tech: ["React", "Redux Toolkit", "Redux Saga", "Ant Design", "Tailwind CSS"],
  },
  {
    company: "MDSol (Technology)",
    role: "React.js Developer",
    location: "Lahore, Pakistan",
    start: "Aug 2019",
    end: "Apr 2021",
    summary:
      "Developed landing pages, dashboards, and reusable UI components using React and JavaScript.",
    highlights: [
      "Integrated REST APIs and managed application state using React Redux, Redux Saga, and Redux Thunk.",
      "Built responsive layouts using Ant Design, Material UI, Formik, React Router, SCSS, Reactstrap, and Bootstrap.",
    ],
    tech: ["React", "JavaScript", "Redux", "Material UI", "SCSS"],
  },
];
