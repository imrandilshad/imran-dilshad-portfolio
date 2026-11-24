import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { socialIcons } from "@/components/ui/SocialLinks";
import { socialLinks } from "@/config/site";
import { profile } from "@/data/profile";

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Hello Imran — let's talk")}`;
const linkedin = socialLinks.find((link) => link.icon === "linkedin");

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-70" />
          <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10">
            <div className="animate-blob size-80 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent-2)_20%,transparent),transparent)]" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/2 -z-10 h-80 w-[min(700px,120vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
          />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                Contact
              </p>
              <h2
                id="contact-title"
                className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl lg:text-5xl"
              >
                Let&apos;s build something <span className="text-gradient">reliable together.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-pretty text-muted sm:text-lg">
                I&apos;m open to senior frontend and full-stack roles, including remote positions.
                If you&apos;re hiring or have a product challenge to discuss, I&apos;d love to hear
                from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={mailto}>
                  <Mail className="size-4" aria-hidden="true" />
                  Email me
                </ButtonLink>
                {linkedin && (
                  <ButtonLink href={linkedin.href} variant="secondary" external>
                    Connect on LinkedIn
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </ButtonLink>
                )}
              </div>
            </div>

            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                const href = link.icon === "email" ? mailto : link.href;
                const external = href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-bg/60 p-4 transition hover:border-accent/50"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-fg group-hover:text-accent">
                          {link.handle}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="ml-auto size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
              <li className="flex items-center gap-4 rounded-2xl border border-line bg-bg/60 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                    Location
                  </span>
                  <span className="block text-sm font-medium text-fg">
                    {profile.location} · Remote-friendly
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
