import { siteConfig } from "@/config/site";
import { content } from "@/content";

/**
 * Structured data for a professional service business.
 * Only contains facts that are actually known — no address, email or ratings.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: content.meta.description,
        telephone: siteConfig.contact.phoneE164,
        priceRange: `from ${siteConfig.pricing.startingPrice}`,
        founder: { "@id": `${siteConfig.url}/#founder` },
        areaServed: [
          { "@type": "City", name: siteConfig.location.city },
          { "@type": "Country", name: siteConfig.location.country },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        sameAs: [siteConfig.contact.whatsappHrefPlain],
        knowsAbout: ["Web design", "Website development", "Landing pages", "Website redesign", "SEO foundations", "Branding"],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`,
        name: siteConfig.founder,
        jobTitle: "Founder, web designer and developer",
        worksFor: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
