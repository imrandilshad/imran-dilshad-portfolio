import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal as="header" className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
