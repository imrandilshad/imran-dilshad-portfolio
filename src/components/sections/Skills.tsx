import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="Tools I use to ship reliable products."
      description="Organised by domain rather than a flat list. Highlighted technologies are the ones I use day to day in production."
      className="bg-surface-2/40"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, description, icon: Icon, skills }, index) => (
          <Reveal
            as="li"
            key={title}
            delay={(index % 3) * 0.08}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_var(--glow)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-fg">{title}</h3>
              <span className="ml-auto font-mono text-xs text-muted">
                {String(skills.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">{description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
              {skills.map((skill) => (
                <li key={skill.name}>
                  <Tag highlight={skill.core}>{skill.name}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
