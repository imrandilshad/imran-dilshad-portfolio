import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { additionalWork, featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title={
        <>
          Enterprise products, <span className="text-gradient">engineered end to end.</span>
        </>
      }
      description="A selection of retail analytics and enterprise platforms I build and maintain — the problem, my contributions, and how the solution fits together."
      className="bg-surface-2/40"
    >
      <div className="space-y-6 lg:space-y-8">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal as="h3" className="text-2xl font-semibold tracking-tight text-fg">
          More engineering work
        </Reveal>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {additionalWork.map(({ title, description, icon: Icon, items, links }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 0.08}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_var(--glow)]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h4 className="mt-5 font-semibold text-fg">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fg">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent hover:underline"
                >
                  {link.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ))}
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
