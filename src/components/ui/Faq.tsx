import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/types";

/**
 * Native <details>/<summary> accordion: keyboard accessible, no JavaScript,
 * content visible to search engines.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.question} className="group" name="faq">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-lg font-medium tracking-[-0.01em] text-cream transition-colors hover:text-cyan sm:py-6 sm:text-xl [&::-webkit-details-marker]:hidden">
            <span className="flex gap-4">
              <span className="mt-1 font-mono text-xs text-muted-2">{String(i + 1).padStart(2, "0")}</span>
              {item.question}
            </span>
            <Plus
              className="mt-1 h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ease-out-expo group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 pl-10 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
