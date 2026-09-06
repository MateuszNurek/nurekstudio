import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StartProjectButton } from "@/components/ui/ContactChoices";
import { content } from "@/content";

export function Services() {
  const { services } = content;
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="services-heading">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-x">
        <Reveal>
          <SectionHeading id="services-heading" eyebrow={services.eyebrow} title={services.headline} intro={services.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {services.items.map((item, i) => (
            <Reveal as="li" key={item.id} delay={(i % 3) * 80}>
              <ServiceCard item={item} index={i} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 lg:mt-10">
          <div className="flex flex-col gap-6 rounded-2xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-cream">
                {services.customNote.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{services.customNote.text}</p>
            </div>
            <StartProjectButton variant="secondary" label={services.customNote.cta} className="shrink-0">
              {services.customNote.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </StartProjectButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
