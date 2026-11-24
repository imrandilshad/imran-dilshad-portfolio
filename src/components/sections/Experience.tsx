import { Briefcase, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="Seven years of building for real users."
      description="From landing pages and dashboards to enterprise retail platforms used by head-office and store teams."
    >
      <ol className="relative space-y-6 pl-6 before:absolute before:top-2 before:bottom-2 before:left-0 before:w-px before:bg-[linear-gradient(180deg,var(--accent),var(--accent-2)_60%,transparent)] sm:ml-3 sm:pl-10">
        {experiences.map((job) => (
          <Reveal as="li" key={`${job.company}-${job.start}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-8 -left-6 flex size-4 -translate-x-1/2 items-center justify-center sm:-left-10"
            >
              {job.current ? (
                <span className="relative flex size-3.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
                  <span className="relative size-3.5 rounded-full border-2 border-bg bg-accent" />
                </span>
              ) : (
                <span className="size-3 rounded-full border-2 border-accent bg-bg" />
              )}
            </span>

            <article className="group rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent/50 hover:shadow-[0_20px_50px_-28px_var(--glow)] sm:p-8">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                    <Briefcase className="size-4 text-accent" aria-hidden="true" />
                    <span className="font-medium text-fg">{job.company}</span>
                    <span aria-hidden="true">·</span>
                    {job.location}
                  </p>
                </div>
                <p className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted sm:pt-1.5">
                  <span className="rounded-full border border-line bg-surface-2/60 px-2.5 py-1">
                    <time>{job.start}</time> – <time>{job.end}</time>
                  </span>
                  {job.current && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent">
                      Current
                    </span>
                  )}
                </p>
              </header>

              <p className="mt-5 leading-relaxed text-pretty text-muted">{job.summary}</p>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-fg">
                    <ChevronRight
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.tech.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
