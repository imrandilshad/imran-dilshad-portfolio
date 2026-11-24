import { marqueeTech } from "@/data/skills";

export function TechMarquee() {
  return (
    <div className="mt-14 sm:mt-16">
      <p className="mb-5 text-center font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Technologies I work with
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              aria-label={copy === 0 ? "Technologies" : undefined}
              className="flex shrink-0 gap-3 pr-3"
            >
              {marqueeTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm whitespace-nowrap text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
