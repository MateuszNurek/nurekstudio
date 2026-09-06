/**
 * Shared content shapes. A German version (src/content/de) should export the
 * same structures so components never need to change for localisation.
 */

export type CtaCopy = {
  startProject: string;
  viewWork: string;
  discussProject: string;
  messageWhatsApp: string;
  callMateusz: string;
  visitSite: string;
  backHome: string;
  contactDialogTitle: string;
  contactDialogIntro: string;
  contactDialogClose: string;
  mobileBarWhatsApp: string;
  mobileBarCall: string;
};

export type HeroCopy = {
  eyebrow: string;
  headline: string;
  supporting: string;
  priceNote: string;
  priceDetail: string;
  callOffer: string;
  visualLabel: string;
};

export type ProblemCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  needs: { title: string; text: string }[];
  bridge: string;
  pillars: { title: string; text: string }[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "layout" | "target" | "refresh" | "palette" | "search" | "shield";
};

export type ServicesCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  items: ServiceItem[];
  customNote: { title: string; text: string; cta: string };
};

export type CaseStudySummary = {
  slug: string;
  name: string;
  url: string;
  urlLabel: string;
  sector: string;
  location: string;
  description: string;
  scope: string[];
  screenshots: {
    desktop: { src: string; alt: string };
    mobile: { src: string; alt: string };
  };
};

export type CaseStudy = CaseStudySummary & {
  title: string;
  metaDescription: string;
  intro: string;
  challenge: { headline: string; paragraphs: string[] };
  approach: { headline: string; steps: { title: string; text: string }[] };
  scopeSection: { headline: string; intro: string };
  visuals: { headline: string; intro: string };
  result: { headline: string; paragraphs: string[] };
  ongoing: string;
};

export type FeaturedWorkCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  caseStudyLink: string;
};

export type VisualWorkItem = {
  id: string;
  /** Placeholder label shown until a real image and title are supplied. */
  label: string;
  category: string;
  image: { src: string; alt: string } | null;
  /** Aspect ratio for the card, expressed as a Tailwind arbitrary value. */
  ratio: "square" | "portrait" | "landscape";
};

export type VisualWorkCopy = {
  eyebrow: string;
  headline: string;
  subtitle: string;
  slotNote: string;
  items: VisualWorkItem[];
};

export type ProcessCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  steps: { number: string; title: string; text: string }[];
  note: string;
};

export type CareCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  items: { title: string; text: string }[];
  note: string;
};

export type AboutCopy = {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  approachTitle: string;
  approach: string[];
  portraitAlt: string;
  portraitPlaceholder: string;
};

export type PricingCopy = {
  eyebrow: string;
  headline: string;
  supporting: string;
  detail: string;
  cta: string;
};

export type FaqItem = { question: string; answer: string };

export type FaqCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  items: FaqItem[];
};

export type FinalCtaCopy = {
  headline: string;
  supporting: string;
  offerLabel: string;
  offerDetail: string;
};

export type FooterCopy = {
  tagline: string;
  navigationHeading: string;
  contactHeading: string;
  legalHeading: string;
  rights: string;
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  /** Items flagged `todo: true` render as visible TODO placeholders. */
  items?: { label: string; value: string; todo?: boolean }[];
};

export type LegalPageCopy = {
  title: string;
  metaDescription: string;
  intro: string;
  todoNotice: string;
  sections: LegalSection[];
  lastUpdatedLabel: string;
};
