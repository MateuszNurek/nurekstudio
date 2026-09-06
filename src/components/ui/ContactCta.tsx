import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { content } from "@/content";

/** Reusable final call-to-action block with direct WhatsApp and telephone links. */
export function ContactCta({
  headline,
  supporting,
  offerLabel,
  offerDetail,
}: {
  headline: string;
  supporting: string;
  offerLabel: string;
  offerDetail: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-ink-2 p-6 sm:p-10 lg:p-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-[-40%] h-96 w-96 rounded-full bg-cyan/10 blur-[110px]" />
        <div className="absolute -right-20 top-[-40%] h-80 w-80 rounded-full bg-lime/[0.07] blur-[110px]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            id="contact-heading"
            className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-cream sm:text-5xl lg:text-[3.6rem]"
          >
            {headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{supporting}</p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <p className="eyebrow">{offerLabel}</p>
            <p className="mt-2 text-sm text-muted">{offerDetail}</p>
            <div className="mt-6 grid gap-3">
              <ButtonLink
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {content.cta.messageWhatsApp}
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phoneHref} variant="secondary" size="lg" className="w-full">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {content.cta.callMateusz}
              </ButtonLink>
            </div>
            <p className="mt-5 text-center font-mono text-lg tracking-wide text-cream">
              <a href={siteConfig.contact.phoneHref} className="link-underline">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
