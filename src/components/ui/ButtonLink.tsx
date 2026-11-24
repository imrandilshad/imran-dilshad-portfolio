import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg shadow-[0_8px_30px_-10px_var(--glow)] hover:brightness-110",
  secondary: "border border-line bg-surface text-fg hover:border-accent/60 hover:text-accent",
  ghost: "text-fg hover:text-accent",
};

export function ButtonLink({
  variant = "primary",
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 active:scale-[0.98]",
        variants[variant],
        className,
      )}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
    </a>
  );
}
