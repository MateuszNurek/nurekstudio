import type { LegalPageCopy } from "../types";

/*
 * LEGAL PAGES — TODO BEFORE PUBLICATION
 *
 * The entries flagged `todo: true` below are placeholders. They render as
 * clearly visible TODO blocks on the live pages until replaced. Do not publish
 * the site before completing the checklist in README.md → "Legal checklist":
 *
 *   - Business (postal) address
 *   - Email address
 *   - VAT number (UID) if applicable
 *   - Company registration / trade authority details (Gewerbe, if applicable)
 *   - Supervisory authority / professional association details (if applicable)
 *   - Hosting provider and their data-processing terms
 *   - Any analytics, forms, embeds or cookies that are added later
 *
 * Nothing here is legal advice. Have the final wording reviewed for Austrian
 * requirements (ECG §5, MedienG §25, DSGVO/GDPR) before going live.
 */

export const impressum: LegalPageCopy = {
  title: "Impressum",
  metaDescription: "Legal notice (Impressum) for NurekStudio, Vienna, Austria.",
  intro: "Information in accordance with §5 ECG and §25 MedienG (Austria).",
  todoNotice:
    "This page contains placeholders that must be completed before the website is published.",
  lastUpdatedLabel: "Last updated",
  sections: [
    {
      heading: "Business owner",
      items: [
        { label: "Studio", value: "NurekStudio" },
        { label: "Owner", value: "Mateusz Nurek" },
        { label: "Location", value: "Vienna, Austria" },
        { label: "Postal address", value: "Street, postcode and city", todo: true },
      ],
    },
    {
      heading: "Contact",
      items: [
        { label: "Telephone", value: "+43 660 6086818" },
        { label: "Email", value: "Public email address", todo: true },
      ],
    },
    {
      heading: "Registration details",
      items: [
        { label: "Business activity", value: "Web design and development", todo: false },
        { label: "Trade authority (Gewerbebehörde)", value: "Competent authority", todo: true },
        { label: "VAT number (UID)", value: "If applicable", todo: true },
        { label: "Company registration", value: "Registration number and court, if applicable", todo: true },
        { label: "Professional association", value: "e.g. WKO membership, if applicable", todo: true },
      ],
    },
    {
      heading: "Liability for content",
      paragraphs: [
        "The content of this website has been prepared with care. NurekStudio nevertheless accepts no liability for the accuracy, completeness or currency of the information provided.",
      ],
    },
    {
      heading: "Liability for links",
      paragraphs: [
        "This website contains links to external websites. NurekStudio has no influence over their content and accepts no liability for it. The respective provider or operator is responsible for the content of linked pages.",
      ],
    },
    {
      heading: "Copyright",
      paragraphs: [
        "All content on this website, including text, design and graphics, is protected by copyright unless otherwise stated. Reproduction or use requires prior written consent.",
      ],
    },
  ],
};

export const privacy: LegalPageCopy = {
  title: "Privacy Policy",
  metaDescription:
    "Privacy policy for the NurekStudio website. No analytics, tracking pixels or non-essential cookies are used.",
  intro:
    "This policy explains what personal data is processed when you visit this website or contact NurekStudio, and why.",
  todoNotice:
    "This page contains placeholders that must be completed before the website is published.",
  lastUpdatedLabel: "Last updated",
  sections: [
    {
      heading: "Controller",
      items: [
        { label: "Name", value: "Mateusz Nurek, NurekStudio" },
        { label: "Location", value: "Vienna, Austria" },
        { label: "Postal address", value: "Street, postcode and city", todo: true },
        { label: "Email", value: "Public email address", todo: true },
        { label: "Telephone", value: "+43 660 6086818" },
      ],
    },
    {
      heading: "Hosting and server logs",
      paragraphs: [
        "When you visit this website, the hosting provider automatically processes technical data required to deliver the pages, such as IP address, date and time of the request, the requested page, browser type and referring URL. This data is processed on the basis of legitimate interest (Art. 6(1)(f) GDPR) in operating the website securely.",
      ],
      items: [
        { label: "Hosting provider", value: "Provider name, location and link to their privacy policy", todo: true },
        { label: "Log retention", value: "Retention period according to the provider", todo: true },
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This website does not use analytics tools, tracking pixels, advertising cookies or other non-essential cookies. No consent banner is required for the current version of the website.",
        "If analytics or embedded third-party services are added in future, this section and, where required, a consent mechanism will be updated first.",
      ],
    },
    {
      heading: "Contact via WhatsApp and telephone",
      paragraphs: [
        "If you contact NurekStudio via WhatsApp or telephone, your telephone number and the content of the conversation are processed in order to respond to your enquiry (Art. 6(1)(b) GDPR, pre-contractual measures). WhatsApp is operated by WhatsApp Ireland Limited; its own privacy terms apply to messages sent through the service.",
        "Enquiry data is stored only as long as necessary to handle the enquiry and any resulting project, and in line with statutory retention obligations.",
      ],
    },
    {
      heading: "External links",
      paragraphs: [
        "This website links to external websites, for example client projects. NurekStudio is not responsible for the data-processing practices of those websites.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You have the right to access, rectification, erasure, restriction of processing, data portability and objection regarding your personal data. You also have the right to lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde, dsb.gv.at).",
        "To exercise your rights, contact NurekStudio using the details above.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "This policy is updated whenever the website’s technical setup changes, for example when new services are integrated.",
      ],
    },
  ],
};
