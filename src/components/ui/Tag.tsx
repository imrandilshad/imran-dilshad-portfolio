import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  highlight?: boolean;
}

export function Tag({ children, highlight = false }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs leading-none",
        highlight
          ? "border-accent/40 bg-accent-soft text-accent"
          : "border-line bg-surface-2/60 text-muted",
      )}
    >
      {children}
    </span>
  );
}
