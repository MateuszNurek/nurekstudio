import { ArrowDownRight, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { StartProjectButton } from "@/components/ui/ContactChoices";
import { content } from "@/content";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { hero, cta } = content;
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32" aria-labelledby="hero-heading">
      {/* depth backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-6 bg-cyan/70" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up mt-6 font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] text-cream [animation-delay:80ms] xs:text-5xl sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
          >
            {hero.headline}
          </h1>
          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
            {hero.supporting}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <StartProjectButton size="lg" />
            <ButtonLink href="/#work" variant="secondary" size="lg">
              {cta.viewWork}
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
          </div>

          <dl className="animate-fade-up mt-10 flex flex-col gap-4 border-l border-line pl-5 text-sm [animation-delay:320ms] sm:flex-row sm:gap-10">
            <div>
              <dt className="text-cream">{hero.priceNote}</dt>
              <dd className="mt-1 text-muted">{hero.priceDetail}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-cream">
                <PhoneCall className="h-4 w-4 text-lime" aria-hidden="true" />
                {hero.callOffer}
              </dt>
              <dd className="mt-1 text-muted">No commitment, no sales pitch.</dd>
            </div>
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
          <HeroVisual label={hero.visualLabel} />
        </div>
      </div>
    </section>
  );
}
