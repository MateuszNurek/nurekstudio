import { LayoutTemplate, Palette, RefreshCw, Search, ShieldCheck, Target, type LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/content/types";

const icons: Record<ServiceItem["icon"], LucideIcon> = {
  layout: LayoutTemplate,
  target: Target,
  refresh: RefreshCw,
  palette: Palette,
  search: Search,
  shield: ShieldCheck,
};

export function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const Icon = icons[item.icon];
  return (
    <article
      id={`service-${item.id}`}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_30px_60px_-30px_rgb(32_200_244/0.35)] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink-2 text-cyan transition-colors duration-500 group-hover:border-cyan/40 group-hover:bg-cyan/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-muted-2">0{index + 1}</span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-cream">{item.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.description}</p>
    </article>
  );
}
