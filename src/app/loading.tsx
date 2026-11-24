import { Skeleton } from "@/components/ui/Skeleton";

// Shown while a route segment streams in (e.g. client navigation); mirrors the home layout.
export default function Loading() {
  return (
    <main id="main" aria-busy="true" aria-label="Loading content" className="pt-32 pb-20 sm:pt-40">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-6">
          <Skeleton className="h-7 w-56 rounded-full" />
          <Skeleton className="h-5 w-72" />
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-4/5" />
          </div>
          <Skeleton className="h-20 w-full max-w-xl" />
          <div className="flex gap-3">
            <Skeleton className="h-11 w-40 rounded-full" />
            <Skeleton className="h-11 w-48 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-80 w-full rounded-2xl" />
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:mt-24 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <Skeleton key={index} className="h-28 rounded-2xl" />
        ))}
      </div>

      <div className="mx-auto mt-24 grid w-full max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-48 rounded-2xl" />
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </main>
  );
}
