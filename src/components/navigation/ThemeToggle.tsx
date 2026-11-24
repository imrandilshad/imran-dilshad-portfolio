"use client";

import { Moon, Sun } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(siteConfig.themeStorageKey, next);
    } catch {
      // Storage may be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-accent/60 hover:text-accent"
    >
      {/* Icon visibility is CSS-driven so server and client markup always match. */}
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
    </button>
  );
}
