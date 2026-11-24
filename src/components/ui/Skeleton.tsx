import { cn } from "@/lib/utils";

/** Shimmering placeholder block; size and shape come from `className`. */
export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("skeleton rounded-lg", className)} />;
}
