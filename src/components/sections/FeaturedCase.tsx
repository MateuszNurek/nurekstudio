import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/ProjectFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content";
import { publicAssetExists } from "@/lib/assets";

export function FeaturedCase() {
  const { featuredWork, sevenSinne: project } = content;
  const desktop = { ...project.screenshots.desktop, exists: publicAssetExists(project.screenshots.desktop.src) };
  const mobile = { ...project.screenshots.mobile, exists: publicAssetExists(project.screenshots.mobile.src) };

  return (
    <section id="work" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-36" aria-labelledby="work-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-cyan/[0.06] blur-[120px]" />
      </div>

      <div className="container-x">
        <Reveal>
          <SectionHeading id="work-heading" eyebrow={featuredWork.eyebrow} title={featuredWork.headline} intro={featuredWork.intro} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* visual */}
          <Reveal className="relative lg:col-span-8">
            <div className="relative pr-0 sm:pr-24 lg:pr-28">
              <BrowserFrame shot={desktop} url={project.url.replace("https://", "")} />
              <PhoneFrame
                shot={mobile}
                className="absolute -bottom-6 right-2 hidden w-36 sm:block sm:w-40 lg:right-0 lg:w-44"
              />
            </div>
            <div className="mt-6 sm:hidden">
              <PhoneFrame shot={mobile} className="mx-auto w-40" />
            </div>
          </Reveal>

          {/* details */}
          <Reveal className="lg:col-span-4" delay={120}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-2">{project.sector}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-cream">{project.name}</h3>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

                <h4 className="eyebrow mt-8 mb-3">Scope</h4>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 text-sm text-cream/85 xs:grid-cols-2 lg:grid-cols-1">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <ButtonLink href={project.url} target="_blank" rel="noopener noreferrer" variant="primary">
                  {project.urlLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={`/work/${project.slug}`} variant="secondary">
                  {featuredWork.caseStudyLink}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
