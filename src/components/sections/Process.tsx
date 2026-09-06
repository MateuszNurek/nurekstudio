import { ProcessStep } from "@/components/ui/ProcessStep";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content";

export function Process() {
  const { process } = content;
  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="process-heading">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading id="process-heading" eyebrow={process.eyebrow} title={process.headline} intro={process.intro} />
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={100}>
            <p className="border-l-2 border-lime/70 pl-5 text-sm leading-relaxed text-muted">{process.note}</p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80}>
              <ProcessStep {...step} isLast={i === process.steps.length - 1} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
