import type { CaseStudy } from "../types";

/**
 * Case studies. To add another project, add an entry here (and, for a full
 * page, register the slug in src/app/work/[...]/). See README → "Adding a case study".
 */
export const sevenSinne: CaseStudy = {
  slug: "7sinne",
  name: "7sinne.at",
  url: "https://7sinne.at",
  urlLabel: "Visit 7sinne.at",
  sector: "Specialist practice · Children and families",
  location: "Vienna, Austria",
  title: "7sinne.at · Case study",
  metaDescription:
    "How NurekStudio built a complete digital presence for 7sinne, a specialist practice in Vienna supporting children and families in sensory integration, neurodevelopment and FASD.",
  description:
    "A complete digital presence for a specialist practice in Vienna supporting children and families in the areas of sensory integration, neurodevelopment and FASD.",
  intro:
    "7sinne is a specialist practice in Vienna supporting children and families in the areas of sensory integration, neurodevelopment and FASD. NurekStudio handled the project end to end, from strategy and structure to development, visual assets and ongoing technical support.",
  scope: [
    "Website strategy and structure",
    "Web design",
    "Website development",
    "Branding implementation",
    "Graphics and visual assets",
    "Responsive design",
    "Content presentation",
    "SEO foundations",
    "Technical setup",
    "Ongoing technical support",
  ],
  screenshots: {
    desktop: {
      src: "/images/work/7sinne/desktop.webp",
      alt: "Desktop view of the 7sinne.at homepage",
    },
    mobile: {
      src: "/images/work/7sinne/mobile.webp",
      alt: "Mobile view of the 7sinne.at homepage",
    },
  },
  challenge: {
    headline: "The challenge",
    paragraphs: [
      "The practice works in a sensitive, specialised field. Parents arriving on the website are often searching for help with a specific concern and need to understand quickly what the practice offers, who it is for and how to get in touch.",
      "The site had to present clinical topics such as sensory integration, neurodevelopment and FASD in language that is clear and reassuring, while giving the practice a professional, trustworthy presence that reflects the care behind the work.",
    ],
  },
  approach: {
    headline: "The approach",
    steps: [
      {
        title: "Structure first",
        text: "The content was organised around the questions families actually ask: what the practice does, who it helps and what the first step looks like. Each service area received a clear place in the page hierarchy.",
      },
      {
        title: "A calm, credible design",
        text: "The visual system implements the practice’s branding consistently across the site, with graphics and visual assets created to support the content rather than decorate it.",
      },
      {
        title: "Built for every device",
        text: "Most visitors arrive on a phone. The site was developed responsively, with fast loading, accessible markup and a clear route to contact on every screen size.",
      },
      {
        title: "Foundations for being found",
        text: "Metadata, page structure and technical setup were prepared so that the practice can be found for its specialist areas in Vienna.",
      },
    ],
  },
  scopeSection: {
    headline: "Scope of work",
    intro: "Everything below was planned, designed and delivered by NurekStudio.",
  },
  visuals: {
    headline: "The website",
    intro:
      "Desktop and mobile views of the live website. Screenshot files are documented in the README and can be dropped in without code changes.",
  },
  result: {
    headline: "The result",
    paragraphs: [
      "7sinne now has a complete, professional digital presence: a website that explains a specialised offer in plain language, presents the practice with credibility and makes contact straightforward for families.",
      "The website is live at 7sinne.at and continues to be supported by NurekStudio.",
    ],
  },
  ongoing:
    "NurekStudio provides ongoing technical support for the website, including updates, checks and content changes as the practice develops.",
};

export const caseStudies: CaseStudy[] = [sevenSinne];
