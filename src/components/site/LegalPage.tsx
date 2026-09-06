import { AlertTriangle } from "lucide-react";
import type { LegalPageCopy } from "@/content/types";

/**
 * Renders Impressum / Privacy content. Entries flagged `todo` are shown as
 * visible TODO placeholders until real details are supplied — see README.
 */
export function LegalPage({ page, updated }: { page: LegalPageCopy; updated: string }) {
  const hasTodos = page.sections.some((s) => s.items?.some((i) => i.todo));

  return (
    <article className="container-x max-w-3xl pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-cream sm:text-5xl">{page.title}</h1>
      <p className="mt-5 text-lg text-muted">{page.intro}</p>
      <p className="mt-2 font-mono text-xs text-muted-2">
        {page.lastUpdatedLabel}: {updated}
      </p>

      {hasTodos && (
        <div
          role="note"
          className="mt-8 flex gap-3 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-amber-100"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
          <p>
            <strong className="font-semibold">TODO:</strong> {page.todoNotice}
          </p>
        </div>
      )}

      <div className="mt-12 space-y-12">
        {page.sections.map((section) => (
          <section key={section.heading} aria-labelledby={`legal-${slug(section.heading)}`}>
            <h2 id={`legal-${slug(section.heading)}`} className="font-display text-2xl font-semibold tracking-[-0.02em] text-cream">
              {section.heading}
            </h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {section.items && (
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {section.items.map((item) => (
                  <div key={item.label} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-6">
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="sm:col-span-2">
                      {item.todo ? (
                        <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-amber-400/50 bg-amber-400/10 px-2 py-1 font-mono text-xs text-amber-200">
                          TODO · {item.value}
                        </span>
                      ) : (
                        <span className="text-cream">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
