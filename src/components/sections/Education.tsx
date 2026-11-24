import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { certifications, education } from "@/data/education";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & certifications"
      title="Foundations in information technology."
      className="bg-surface-2/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <h3 className="flex items-center gap-2.5 font-semibold text-fg">
            <GraduationCap className="size-5 text-accent" aria-hidden="true" />
            Education
          </h3>
          <ol className="mt-5 space-y-4">
            {education.map((item, index) => (
              <li
                key={item.degree}
                className={cn(
                  "rounded-2xl border bg-surface transition duration-300 hover:-translate-y-0.5 hover:border-accent/50",
                  index === 0
                    ? "relative overflow-hidden border-accent/40 p-6 shadow-[0_20px_50px_-30px_var(--glow)]"
                    : "border-line p-5",
                )}
              >
                {index === 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
                  />
                )}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4
                    className={
                      index === 0 ? "text-lg font-semibold text-fg" : "font-medium text-fg"
                    }
                  >
                    {item.degree}
                  </h4>
                  <p className="font-mono text-xs text-muted">{item.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {item.institution} <span aria-hidden="true">·</span>{" "}
                  <span className="font-medium text-accent">{item.result}</span>
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="flex items-center gap-2.5 font-semibold text-fg">
            <Award className="size-5 text-accent" aria-hidden="true" />
            Certifications & training
          </h3>
          <ul className="mt-5 space-y-4">
            {certifications.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-medium text-fg">{item.title}</h4>
                  <p className="mt-0.5 text-sm text-muted">
                    {item.issuer} <span aria-hidden="true">·</span> {item.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
