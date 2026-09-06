import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** Text-based wordmark. Replace with an SVG logo later (see siteConfig.assets.logo). */
export function Wordmark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display font-semibold tracking-[-0.03em] text-cream",
        compact ? "text-lg" : "text-xl",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        aria-hidden="true"
        className="relative block h-5 w-5 overflow-hidden rounded-[5px] border border-cyan/60 bg-cyan/10 transition-colors group-hover:bg-cyan/25"
      >
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-cyan/70" />
        <span className="absolute inset-x-[35%] top-[15%] h-[45%] w-[30%] bg-cream/90" />
      </span>
      <span>
        Nurek<span className="text-cyan">Studio</span>
      </span>
    </Link>
  );
}
