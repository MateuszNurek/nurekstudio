import { Activity, Database, FileEdit, LifeBuoy, RefreshCw, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StartProjectButton } from "@/components/ui/ContactChoices";
import { content } from "@/content";

const icons = [Wrench, RefreshCw, Database, FileEdit, Activity, LifeBuoy];

export function Care() {
  const { care } = content;
  return (
    <section id="care" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="care-heading">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-lime/20 bg-gradient-to-br from-surface via-ink-2 to-ink p-6 sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime/10 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-lime/40 to-transparent"
            />

            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeading id="care-heading" eyebrow={care.eyebrow} title={care.headline} intro={care.intro} />
                <div className="mt-8">
                  <StartProjectButton variant="secondary" label={content.cta.discussProject} />
                </div>
              </div>

              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7">
                {care.items.map((item, i) => {
                  const Icon = icons[i] ?? LifeBuoy;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-lime/25 bg-lime/5 text-lime">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-cream">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="relative mt-10 border-t border-line pt-6 text-sm text-muted-2">{care.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
