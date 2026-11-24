import { Bot, Building2, Layers, PanelsTopLeft, Plug, Rocket } from "lucide-react";
import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive, accessible, and maintainable interfaces built from reusable, typed components.",
    icon: PanelsTopLeft,
  },
  {
    title: "React & Next.js Applications",
    description:
      "Production React and Next.js apps with clean architecture, predictable state, and strong performance.",
    icon: Rocket,
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end features with Node.js and Express.js services connected to modern front ends.",
    icon: Layers,
  },
  {
    title: "API Integration",
    description:
      "REST, streaming (SSE), and authentication flows such as OAuth2 PKCE and SSO, integrated reliably.",
    icon: Plug,
  },
  {
    title: "Enterprise Application Development",
    description:
      "Portals, dashboards, and reporting tools built for complex business rules and multiple markets.",
    icon: Building2,
  },
  {
    title: "AI-Powered Application Integration",
    description:
      "Conversational and AI-assisted experiences with streamed responses and explorable results.",
    icon: Bot,
  },
];
