import { Reveal } from "@/components/ui/Reveal";
import { StartProjectButton } from "@/components/ui/ContactChoices";
import { content } from "@/content";

export function Pricing() {
  const { pricing } = content;
  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="pricing-heading">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan/25 bg-surface px-6 py-12 text-center sm:px-10 sm:py-16 lg:py-20">
            <div aria-hidden="true" className="grid-lines absolute inset-0" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow">{pricing.eyebrow}</p>
              <h2
                id="pricing-heading"
                className="mt-5 font-display text-4xl font-semibold tracking-[-0.035em] text-cream sm:text-5xl lg:text-6xl"
              >
                {pricing.headline}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">{pricing.supporting}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">{pricing.detail}</p>
              <div className="mt-9">
                <StartProjectButton size="lg" label={pricing.cta} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
