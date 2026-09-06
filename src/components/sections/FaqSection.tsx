import { Faq } from "@/components/ui/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content";

export function FaqSection() {
  const { faq } = content;
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="faq-heading">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading id="faq-heading" eyebrow={faq.eyebrow} title={faq.headline} intro={faq.intro} />
        </Reveal>
        <Reveal className="lg:col-span-8" delay={100}>
          <Faq items={faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
