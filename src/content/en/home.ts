import type {
  AboutCopy,
  CareCopy,
  FaqCopy,
  FeaturedWorkCopy,
  FinalCtaCopy,
  HeroCopy,
  PricingCopy,
  ProblemCopy,
  ProcessCopy,
  ServicesCopy,
  VisualWorkCopy,
} from "../types";

export const hero: HeroCopy = {
  eyebrow: "Independent web studio · Vienna",
  headline: "Websites that turn attention into enquiries.",
  supporting:
    "NurekStudio helps small businesses build a professional digital presence through strategy, design, development and ongoing technical care.",
  priceNote: "Website projects start from €500.",
  priceDetail: "The final price depends on scope, content and functionality.",
  callOffer: "Free 20-minute project call",
  visualLabel:
    "Illustration: an unclear online presence being organised into a focused customer journey that ends in contact.",
};

export const problem: ProblemCopy = {
  eyebrow: "Why it matters",
  headline: "A website should do more than look good.",
  intro:
    "Most visitors decide within seconds whether to stay. In that moment they are not admiring your design. They are looking for three answers.",
  needs: [
    {
      title: "What do you offer?",
      text: "A clear headline, plain language and a structure that puts the main service first.",
    },
    {
      title: "Why should I trust you?",
      text: "Real work, a real person behind the business and details that show you know what you are doing.",
    },
    {
      title: "What should I do next?",
      text: "One obvious next step that is easy to take on a phone, on a desk, in a hurry.",
    },
  ],
  bridge:
    "NurekStudio combines clear structure, considered design and solid technology so that every page guides visitors toward getting in touch.",
  pillars: [
    {
      title: "Structure",
      text: "The message, page hierarchy and user journey are planned before anything is drawn.",
    },
    {
      title: "Design",
      text: "A distinctive visual system that builds trust and makes the offer easy to understand.",
    },
    {
      title: "Technology",
      text: "Fast, accessible, well-built pages that work on every device and are simple to maintain.",
    },
  ],
};

export const services: ServicesCopy = {
  eyebrow: "Services",
  headline: "A focused offer for small businesses.",
  intro:
    "Everything needed to establish a professional presence online, delivered by one person who understands the design, the code and the commercial goal.",
  items: [
    {
      id: "business-websites",
      title: "Business Websites",
      description:
        "Modern, responsive websites that clearly communicate the company’s value and encourage enquiries.",
      icon: "layout",
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      description:
        "Focused pages for services, campaigns, products and lead generation.",
      icon: "target",
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      description:
        "Improvements to outdated, confusing or ineffective websites.",
      icon: "refresh",
    },
    {
      id: "branding",
      title: "Branding & Visual Design",
      description:
        "Visual identity, graphic assets and consistent brand presentation connected to the digital project.",
      icon: "palette",
    },
    {
      id: "seo-foundations",
      title: "SEO Foundations",
      description:
        "Technical structure, page hierarchy, metadata, performance and local-search fundamentals.",
      icon: "search",
    },
    {
      id: "website-care",
      title: "Website Care",
      description:
        "Updates, backups, security checks, content changes and ongoing technical support.",
      icon: "shield",
    },
  ],
  customNote: {
    title: "Need something more specific?",
    text: "Online stores, booking systems and custom functionality are scoped individually, depending on what the business actually needs. Let’s discuss the project.",
    cta: "Discuss your project",
  },
};

export const featuredWork: FeaturedWorkCopy = {
  eyebrow: "Selected work",
  headline: "A complete digital presence for a specialist practice in Vienna.",
  intro:
    "One project, handled end to end: from structure and design to development, branding implementation and ongoing technical support.",
  caseStudyLink: "Read the case study",
};

export const visualWork: VisualWorkCopy = {
  eyebrow: "Visual work",
  headline: "Selected visual work",
  subtitle:
    "Branding, campaign materials and visual systems created alongside digital projects.",
  slotNote:
    "Content slot. Add an image to /public/images/visual-work/ and update src/content/en/home.ts to populate this space.",
  items: [
    { id: "visual-01", label: "Content slot 01", category: "Branding", image: null, ratio: "portrait" },
    { id: "visual-02", label: "Content slot 02", category: "Campaign materials", image: null, ratio: "landscape" },
    { id: "visual-03", label: "Content slot 03", category: "Visual system", image: null, ratio: "square" },
    { id: "visual-04", label: "Content slot 04", category: "Graphic design", image: null, ratio: "landscape" },
    { id: "visual-05", label: "Content slot 05", category: "Print", image: null, ratio: "square" },
    { id: "visual-06", label: "Content slot 06", category: "Social media assets", image: null, ratio: "portrait" },
  ],
};

export const process: ProcessCopy = {
  eyebrow: "Process",
  headline: "Four steps, one point of contact.",
  intro:
    "No account managers, no handovers between departments. You talk directly to the person who plans, designs and builds your website.",
  steps: [
    {
      number: "01",
      title: "Discover",
      text: "Understand the business, customer and purpose of the website.",
    },
    {
      number: "02",
      title: "Structure",
      text: "Plan the message, user journey and content hierarchy.",
    },
    {
      number: "03",
      title: "Design & Build",
      text: "Create the visual system and develop the responsive website.",
    },
    {
      number: "04",
      title: "Launch & Care",
      text: "Publish, verify and provide ongoing technical support.",
    },
  ],
  note: "Most projects begin with a short call, followed by a written scope and quote. Work starts once both are agreed.",
};

export const care: CareCopy = {
  eyebrow: "Ongoing website care",
  headline: "Launch is the beginning, not the end.",
  intro:
    "A website needs attention after it goes live: software updates, security, small content changes and someone to call when something is not right. NurekStudio stays available after launch.",
  items: [
    {
      title: "Technical maintenance",
      text: "Keeping the underlying platform, dependencies and hosting setup healthy.",
    },
    {
      title: "Updates",
      text: "Applying framework, plugin and security updates before they become a problem.",
    },
    {
      title: "Backups",
      text: "Regular backups so content and configuration can be restored if needed.",
    },
    {
      title: "Small content changes",
      text: "New opening hours, an updated price list, a fresh photo. Sent over, done.",
    },
    {
      title: "Performance checks",
      text: "Monitoring loading speed and fixing regressions as content grows.",
    },
    {
      title: "Ongoing help",
      text: "A direct line to Mateusz whenever something needs a second look.",
    },
  ],
  note: "Care arrangements are agreed individually after launch, based on how much support the business needs.",
};

export const about: AboutCopy = {
  eyebrow: "About",
  headline: "Direct collaboration, from first idea to launch.",
  paragraphs: [
    "Mateusz Nurek founded NurekStudio in Vienna to give small businesses access to strategy, design and development through one direct point of contact.",
    "Instead of passing a project between a strategist, a designer, a developer and an account manager, you work with the person who does all of it. Decisions are faster, details are not lost, and the website reflects what the business actually needs.",
  ],
  approachTitle: "The approach combines",
  approach: [
    "Business understanding",
    "Conversion-focused structure",
    "Visual design",
    "Practical implementation",
    "Long-term technical support",
  ],
  portraitAlt: "Portrait of Mateusz Nurek, founder of NurekStudio",
  portraitPlaceholder: "Portrait of Mateusz Nurek",
};

export const pricing: PricingCopy = {
  eyebrow: "Pricing",
  headline: "Website projects start from €500.",
  supporting:
    "Every business needs a different level of content, design and functionality. After a short conversation, you’ll receive a clear scope and individual quote.",
  detail:
    "€500 is a starting point for a focused, well-built website. Larger sites, additional pages, branding work or custom functionality are quoted individually.",
  cta: "Discuss your project",
};

export const faq: FaqCopy = {
  eyebrow: "FAQ",
  headline: "Questions people usually ask first.",
  intro: "Straight answers. If yours is not here, ask on WhatsApp.",
  items: [
    {
      question: "How much does a website cost?",
      answer:
        "Website projects start from €500. The final price depends on the number of pages, the amount of content, the level of design work and any additional functionality. After a short conversation you receive a written scope and an individual quote, so there are no surprises.",
    },
    {
      question: "What is included in the starting price?",
      answer:
        "The starting price covers a focused, professionally designed and developed website: planning the structure, a custom design, responsive development, basic SEO setup and a checked launch. The exact page count and content scope are agreed in the quote.",
    },
    {
      question: "How long does a website take?",
      answer:
        "Timelines depend on scope and on how quickly content and feedback are available. A focused website or landing page can be ready within a few weeks. Larger sites or projects that include branding take longer. You receive a realistic timeline with the quote.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. A redesign starts with a review of what currently works and what does not. Depending on the state of the existing site, the work ranges from restructuring and refreshing the design to a complete rebuild on a modern foundation.",
    },
    {
      question: "Do you also provide branding and graphics?",
      answer:
        "Yes. Visual identity, logo refinement, graphic assets and marketing materials can be created alongside the website so that everything is consistent. Branding work is scoped separately from the website itself.",
    },
    {
      question: "Can you maintain the website after launch?",
      answer:
        "Yes. Ongoing website care includes updates, backups, security checks, small content changes and technical support. The arrangement is agreed individually, based on how much support the business needs.",
    },
    {
      question: "Can you help with SEO?",
      answer:
        "Every website is built with solid SEO foundations: clean structure, sensible page hierarchy, metadata, fast loading and local-search basics. Ongoing content strategy or campaigns are not part of the standard offer, but can be discussed.",
    },
    {
      question: "Do I need to provide all the content?",
      answer:
        "You know your business best, so text and photos usually come from you. Mateusz helps structure the content, advises on what each page needs and can refine wording so it reads clearly. If content is missing, this is planned for in the project.",
    },
    {
      question: "Do you work only with businesses in Vienna?",
      answer:
        "No. NurekStudio is based in Vienna and happy to meet local clients in person, but projects are handled remotely just as well. Communication runs through WhatsApp, phone and video calls, wherever the business is located.",
    },
  ],
};

export const finalCta: FinalCtaCopy = {
  headline: "Let’s build a website that works for your business.",
  supporting:
    "Start with a free 20-minute conversation about your business, your customers and what the website needs to achieve. No commitment, no sales pitch.",
  offerLabel: "Free 20-minute initial conversation",
  offerDetail: "Message on WhatsApp or call directly.",
};
