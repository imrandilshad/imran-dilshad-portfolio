import Link from "next/link";
import { profile } from "@/data/profile";

export function Logo() {
  return (
    <Link
      href="/#top"
      className="group flex items-center gap-3 rounded-lg"
      aria-label={`${profile.name} — home`}
    >
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft font-mono text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-accent-fg"
      >
        ID
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-fg sm:block">
        {profile.name}
      </span>
    </Link>
  );
}
