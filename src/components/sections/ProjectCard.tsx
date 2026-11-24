import { ArrowUpRight, Check, Lock } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/portfolio";
import { ArchitectureFlow } from "./ArchitectureFlow";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const headingId = `project-${project.slug}`;

  return (
    <article
      aria-labelledby={headingId}
      className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition duration-300 hover:border-accent/40 hover:shadow-[0_30px_80px_-40px_var(--glow)] sm:p-8 lg:p-10"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] transition-transform duration-500 group-hover:scale-x-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-0 transition duration-500 group-hover:opacity-100"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line" />
            <span className="tracking-wider text-muted uppercase">{project.category}</span>
          </div>

          <h3
            id={headingId}
            className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{project.context}</p>

          <p className="mt-5 leading-relaxed text-pretty text-fg/90">{project.summary}</p>

          <div className="mt-6 rounded-xl border-l-2 border-accent bg-accent-soft/60 px-4 py-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
              Challenge
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-fg">{project.challenge}</p>
          </div>

          <h4 className="mt-7 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            My contributions
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <ArchitectureFlow steps={project.flow} label={`${project.title} solution flow`} />

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              Key features
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg border border-line bg-surface-2/50 px-3 py-2 text-xs leading-snug text-fg"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.links && project.links.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {project.confidential && (
            <p className="mt-auto flex gap-2.5 text-xs leading-relaxed text-muted">
              <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Enterprise client work — described at a high level. Source code, data, and internal
              systems are confidential.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
