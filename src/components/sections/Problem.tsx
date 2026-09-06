import { Compass, Layers, Cpu, HelpCircle, ShieldCheck, MousePointerClick } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content";

const needIcons = [HelpCircle, ShieldCheck, MousePointerClick];
const pillarIcons = [Compass, Layers, Cpu];

export function Problem() {
  const { problem } = content;
  return (
    <section className="relative py-20 sm:py-28 lg:py-36" aria-labelledby="problem-heading">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="problem-heading" eyebrow={problem.eyebrow}
              title={problem.headline}
              intro={problem.intro}
            />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative border-l border-line pl-0">
              {problem.needs.map((need, i) => {
                const Icon = needIcons[i] ?? HelpCircle;
                return (
                  <Reveal as="li" key={need.title} delay={i * 90} className="relative py-6 pl-8 first:pt-0 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-px top-6 h-px w-5 bg-cyan/60 first:top-0"
                    />
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-cyan">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-cream">
                          <span className="mr-3 font-mono text-xs text-muted-2">0{i + 1}</span>
                          {need.title}
                        </h3>
                        <p className="mt-2 text-muted leading-relaxed">{need.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>

        <Reveal className="mt-16 sm:mt-24">
          <div className="surface relative overflow-hidden p-6 sm:p-10">
            <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
            <div className="relative grid gap-8 lg:grid-cols-12">
              <p className="max-w-xl font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-cream lg:col-span-5 sm:text-[1.7rem]">
                {problem.bridge}
              </p>
              <ul className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
                {problem.pillars.map((pillar, i) => {
                  const Icon = pillarIcons[i] ?? Layers;
                  return (
                    <li key={pillar.title} className="border-t border-line pt-5">
                      <Icon className="h-5 w-5 text-lime" aria-hidden="true" />
                      <h3 className="mt-3 font-semibold text-cream">{pillar.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
