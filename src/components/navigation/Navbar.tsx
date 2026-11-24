"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { navItems, siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        isScrolled || isOpen
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <ScrollProgress />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm transition",
                    isActive ? "bg-accent-soft text-accent" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.resumePath}
            download
            className="hidden min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition hover:brightness-110 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-fg lg:hidden"
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex min-h-12 items-center rounded-xl px-4 text-base transition",
                  activeId === item.href.slice(1)
                    ? "bg-accent-soft text-accent"
                    : "text-fg hover:bg-surface-2",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a
              href={siteConfig.resumePath}
              download
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent text-base font-medium text-accent-fg"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
