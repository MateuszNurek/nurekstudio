import { ContactCta } from "@/components/ui/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/content";

export function FinalCta() {
  const { finalCta } = content;
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="contact-heading">
      <div className="container-x">
        <Reveal>
          <ContactCta {...finalCta} />
        </Reveal>
      </div>
    </section>
  );
}
