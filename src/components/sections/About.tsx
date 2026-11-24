import { Check, Clock, GraduationCap, Languages, MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Clock, label: "Experience", value: `${profile.yearsOfExperience} years` },
  { icon: GraduationCap, label: "Education", value: education[0].degree },
  { icon: Languages, label: "Languages", value: profile.spokenLanguages.join(", ") },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Engineering is more than <span className="text-gradient">writing code.</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <Reveal as="aside" className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="rounded-[1.25rem] bg-[linear-gradient(140deg,var(--accent),transparent_45%,var(--accent-2))] p-px">
            <div className="overflow-hidden rounded-[calc(1.25rem-1px)] bg-surface">
              <div className="skeleton relative aspect-square rounded-none">
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
              <dl className="divide-y divide-line">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 px-5 py-3.5">
                    <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="ml-auto text-right text-sm font-medium text-fg">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {profile.about.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-fg" : undefined}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--accent),var(--accent-2))]"
            />
            <h3 className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
              What I bring to teams
            </h3>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {profile.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-relaxed text-fg">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Check className="size-3 text-accent" aria-hidden="true" />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <Reveal as="h3" className="mb-6 text-xl font-semibold tracking-tight text-fg">
          Engineering philosophy
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.principles.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_var(--glow)]"
            >
              <span className="absolute top-5 right-5 font-mono text-4xl font-semibold text-line transition-colors group-hover:text-accent/20">
                0{index + 1}
              </span>
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h4 className="mt-5 font-semibold text-fg">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
