import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { content } from "@/content";

/**
 * Sticky contact bar for small screens. Page content receives bottom padding
 * (see `pb-safe-bar` in globals.css) so the bar never covers anything.
 */
export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime font-medium text-ink"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {content.cta.mobileBarWhatsApp}
        </a>
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface font-medium text-cream"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          {content.cta.mobileBarCall}
        </a>
      </div>
    </div>
  );
}
