import { ShieldCheck, Zap } from "lucide-react";
import { cssVars } from "@/lib/utils";

type TokenKind = "keyword" | "property" | "string" | "punctuation" | "literal" | "plain";
type Line = Array<[TokenKind, string]>;

const tokenClass: Record<TokenKind, string> = {
  keyword: "text-violet-600 dark:text-violet-300",
  property: "text-sky-700 dark:text-sky-300",
  string: "text-emerald-700 dark:text-emerald-300",
  punctuation: "text-muted",
  literal: "text-amber-700 dark:text-amber-300",
  plain: "text-fg",
};

const lines: Line[] = [
  [
    ["keyword", "const "],
    ["plain", "engineer"],
    ["punctuation", " = {"],
  ],
  [
    ["property", "  name"],
    ["punctuation", ": "],
    ["string", '"Imran Dilshad"'],
    ["punctuation", ","],
  ],
  [
    ["property", "  role"],
    ["punctuation", ": "],
    ["string", '"Senior Software Engineer"'],
    ["punctuation", ","],
  ],
  [
    ["property", "  experience"],
    ["punctuation", ": "],
    ["string", '"7+ years"'],
    ["punctuation", ","],
  ],
  [
    ["property", "  stack"],
    ["punctuation", ": ["],
    ["string", '"React"'],
    ["punctuation", ", "],
    ["string", '"Next.js"'],
    ["punctuation", ","],
  ],
  [
    ["plain", "          "],
    ["string", '"TypeScript"'],
    ["punctuation", ", "],
    ["string", '"Node.js"'],
    ["punctuation", "],"],
  ],
  [
    ["property", "  focus"],
    ["punctuation", ": "],
    ["string", '"Enterprise & AI products"'],
    ["punctuation", ","],
  ],
  [
    ["property", "  basedIn"],
    ["punctuation", ": "],
    ["string", '"Lahore, PK"'],
    ["punctuation", ","],
  ],
  [
    ["property", "  remoteReady"],
    ["punctuation", ": "],
    ["literal", "true"],
    ["punctuation", ","],
  ],
  [["punctuation", "};"]],
  [],
  [
    ["keyword", "export default "],
    ["plain", "engineer"],
    ["punctuation", ";"],
  ],
];

export function HeroCodeWindow() {
  return (
    <div
      aria-hidden="true"
      className="animate-fade-up relative mx-auto w-full max-w-lg lg:max-w-none"
      style={cssVars({ "--delay": "160ms" })}
    >
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,var(--accent-soft),transparent_60%)] blur-xl" />

      <div className="overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-2xl shadow-black/10 backdrop-blur dark:shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2/60 px-4 py-3">
          <span className="size-3 rounded-full bg-rose-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted">engineer.ts</span>
        </div>

        <pre className="overflow-x-auto px-4 py-5 font-mono text-xs leading-6 sm:px-5 sm:text-[13px] sm:leading-7">
          <code>
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="flex">
                <span className="mr-4 inline-block w-5 shrink-0 text-right text-muted/50 select-none">
                  {lineIndex + 1}
                </span>
                <span className="whitespace-pre">
                  {line.map(([kind, text], tokenIndex) => (
                    <span key={tokenIndex} className={tokenClass[kind]}>
                      {text}
                    </span>
                  ))}
                  {lineIndex === lines.length - 1 && (
                    <span className="animate-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
                  )}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>

      <div className="animate-float absolute -top-5 -right-3 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-fg shadow-lg sm:flex">
        <ShieldCheck className="size-4 text-emerald-500" />
        OAuth2 PKCE · SSO
      </div>
      <div
        className="animate-float absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-fg shadow-lg sm:flex"
        style={cssVars({ "--delay": "1.5s" })}
      >
        <Zap className="size-4 text-accent" />
        Streaming SSE · REST APIs
      </div>
    </div>
  );
}
