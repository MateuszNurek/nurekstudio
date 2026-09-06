import { About } from "@/components/sections/About";
import { Care } from "@/components/sections/Care";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { VisualWork } from "@/components/sections/VisualWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <FeaturedCase />
      <VisualWork />
      <Process />
      <Care />
      <About />
      <Pricing />
      <FaqSection />
      <FinalCta />
    </>
  );
}
