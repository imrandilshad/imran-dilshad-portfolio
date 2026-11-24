import { ArrowDown } from "lucide-react";
import { Fragment } from "react";

interface ArchitectureFlowProps {
  steps: string[];
  label: string;
}

export function ArchitectureFlow({ steps, label }: ArchitectureFlowProps) {
  return (
    <figure className="rounded-xl border border-line bg-bg/60 p-5">
      <figcaption className="mb-4 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        Solution flow
        <span className="flex items-center gap-1.5 tracking-normal normal-case">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
          high-level
        </span>
      </figcaption>
      <ol aria-label={label} className="flex flex-col items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step}>
            <li className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3.5 py-2.5">
              <span className="font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-fg">{step}</span>
            </li>
            {index < steps.length - 1 && (
              <li aria-hidden="true" className="flex justify-center py-1 text-accent/70">
                <ArrowDown className="size-3.5" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </figure>
  );
}
