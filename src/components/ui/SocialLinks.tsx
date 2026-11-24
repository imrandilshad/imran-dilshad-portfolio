import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import type { SocialIcon } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export const socialIcons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = socialIcons[link.icon];
        const isExternal = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
