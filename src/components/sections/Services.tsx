import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title="How I can help your team."
      description="I'm most effective where product complexity meets front-end craft — and comfortable owning features across the stack."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <Reveal
            as="li"
            key={title}
            delay={(index % 3) * 0.08}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_var(--glow)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] opacity-0 transition-opacity group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 size-48 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl border border-accent/30 bg-accent-soft text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-fg">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
