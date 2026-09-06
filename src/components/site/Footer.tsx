import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { legalNav, primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { content } from "@/content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{content.footer.tagline}</p>
          <p className="mt-6 text-sm text-muted">
            <span className="text-cream">{siteConfig.founder}</span>
            <br />
            {siteConfig.location.city}, {siteConfig.location.country}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="eyebrow mb-4">{content.footer.navigationHeading}</h2>
          <ul className="space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-cream/85 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="eyebrow mb-4">{content.footer.contactHeading}</h2>
          <ul className="space-y-3">
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-cyan"
              >
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-lime"
              >
                <MessageCircle className="h-4 w-4 text-lime" aria-hidden="true" />
                {content.cta.messageWhatsApp}
              </a>
            </li>
            {siteConfig.contact.email && (
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-cream/85 hover:text-cyan">
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <nav aria-label="Legal" className="md:col-span-2">
          <h2 className="eyebrow mb-4">{content.footer.legalHeading}</h2>
          <ul className="space-y-2.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-cream/85 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} · {siteConfig.founder}. {content.footer.rights}
          </p>
          <p className="font-mono">
            {siteConfig.location.city} · {siteConfig.location.countryCode}
          </p>
        </div>
      </div>
    </footer>
  );
}
