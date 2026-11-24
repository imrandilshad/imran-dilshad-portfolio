import { ArrowRight, Download, MapPin } from "lucide-react";
import { CountUp } from "@/components/animations/CountUp";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { cssVars } from "@/lib/utils";
import { HeroCodeWindow } from "./HeroCodeWindow";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="absolute -top-40 left-[8%] -z-10">
        <div className="animate-blob size-[420px] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      </div>
      <div aria-hidden="true" className="absolute top-24 right-[4%] -z-10">
        <div
          className="animate-blob size-[360px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent-2)_22%,transparent),transparent)]"
          style={cssVars({ "--delay": "-6s" })}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span
              aria-hidden="true"
              className="animate-pulse-dot size-2 rounded-full bg-emerald-500"
            />
            {profile.availability}
          </p>

          <h1 id="hero-title" className="mt-6">
            <span className="block font-mono text-sm font-medium tracking-wide text-accent sm:text-base">
              {profile.name} · {profile.role}
            </span>
            <span className="mt-4 block text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-fg sm:text-5xl lg:text-[3.6rem]">
              {profile.headline.lead}{" "}
              <span className="text-gradient">{profile.headline.highlight}</span>
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
            style={cssVars({ "--delay": "120ms" })}
          >
            {profile.summary}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={cssVars({ "--delay": "200ms" })}
          >
            <ButtonLink href="#projects" className="group">
              View Projects
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary" download>
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </ButtonLink>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={cssVars({ "--delay": "280ms" })}
          >
            <SocialLinks />
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>

        <HeroCodeWindow />
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8 lg:mt-24">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/60 backdrop-blur lg:grid-cols-4">
          {profile.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="group relative flex flex-col border-line p-6 transition-colors hover:bg-accent-soft/40 sm:p-8 lg:[&:not(:last-child)]:border-r max-lg:[&:nth-child(-n+2)]:border-b max-lg:[&:nth-child(odd)]:border-r"
            >
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="order-first mb-2 text-gradient font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <TechMarquee />
    </section>
  );
}
