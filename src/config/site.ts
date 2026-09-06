/**
 * Central business configuration for NurekStudio.
 *
 * Edit contact details, links and business facts here. Every component reads
 * from this file, so the telephone number and WhatsApp URL are never duplicated
 * by hand elsewhere in the codebase.
 */

const PHONE_E164 = "+436606086818";
const PHONE_DISPLAY = "+43 660 6086818";
const WHATSAPP_NUMBER = "436606086818";

const WHATSAPP_MESSAGE =
  "Hello Mateusz, I found NurekStudio and would like to discuss a website project.";

export const siteConfig = {
  name: "NurekStudio",
  founder: "Mateusz Nurek",
  /** Production URL. Update when the final domain is confirmed. */
  url: "https://nurekstudio.com",
  locale: "en",
  /** Locales the site is prepared for. German content can be added under src/content/de. */
  locales: ["en"] as const,
  location: {
    city: "Vienna",
    country: "Austria",
    countryCode: "AT",
  },
  contact: {
    phoneE164: PHONE_E164,
    phoneDisplay: PHONE_DISPLAY,
    phoneHref: `tel:${PHONE_E164}`,
    whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    whatsappHrefPlain: `https://wa.me/${WHATSAPP_NUMBER}`,
    whatsappMessage: WHATSAPP_MESSAGE,
    /** No public email address yet. Add one here when available (e.g. "hello@nurekstudio.com"). */
    email: null as string | null,
  },
  pricing: {
    startingPrice: "€500",
  },
  callOffer: "Free 20-minute project call",
  /**
   * Asset locations. Files are optional; components render intentional
   * placeholders when a file is missing. See README.md → Asset checklist.
   */
  assets: {
    portrait: "/images/mateusz-nurek.webp",
    logo: "/images/nurekstudio-logo.svg",
    ogImage: "/images/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
