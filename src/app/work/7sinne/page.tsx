import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { ContactCta } from "@/components/ui/ContactCta";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/ProjectFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { content } from "@/content";
import { publicAssetExists } from "@/lib/assets";

const project = content.sevenSinne;

export const metadata: Metadata = {
  title: project.title,
  description: project.metaDescription,
  alternates: { canonical: `/work/${project.slug}` },
  openGraph: {
    title: `${project.title} · ${siteConfig.name}`,
    description: project.metaDescription,
    url: `${siteConfig.url}/work/${project.slug}`,
    type: "article",
  },
};

export default function SevenSinneCaseStudy() {
  const desktop = { ...project.screenshots.desktop, exists: publicAssetExists(project.screenshots.desktop.src) };
  const mobile = { ...project.screenshots.mobile, exists: publicAssetExists(project.screenshots.mobile.src) };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    url: `${siteConfig.url}/work/${project.slug}`,
    about: project.description,
    creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    sameAs: project.url,
  };

  return (
    <article className="pt-28 sm:pt-36 lg:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Intro */}
      <header className="container-x">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to selected work
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-cyan/70" />
              Case study · {project.sector}
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-cream sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{project.intro}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 self-end text-sm lg:col-span-4 lg:grid-cols-1">
            <div>
              <dt className="eyebrow mb-1">Client</dt>
              <dd className="text-cream">{project.name}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Location</dt>
              <dd className="text-cream">{project.location}</dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="eyebrow mb-1">Website</dt>
              <dd>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-cream"
                >
                  7sinne.at <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Hero visual */}
      <div className="container-x mt-14 lg:mt-20">
        <Reveal>
          <div className="relative sm:pr-28 lg:pr-40">
            <BrowserFrame shot={desktop} url="7sinne.at" priority />
            <PhoneFrame shot={mobile} className="absolute -bottom-8 right-0 hidden w-40 sm:block lg:w-52" />
          </div>
        </Reveal>
      </div>

      {/* Challenge */}
      <section className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-12" aria-labelledby="challenge-heading">
        <Reveal className="lg:col-span-4">
          <SectionHeading id="challenge-heading" eyebrow="01" title={project.challenge.headline} />
        </Reveal>
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7 lg:col-start-6" delay={100}>
          {project.challenge.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Approach */}
      <section className="relative py-20 sm:py-28" aria-labelledby="approach-heading">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
        <div className="container-x">
          <Reveal>
            <SectionHeading id="approach-heading" eyebrow="02" title={project.approach.headline} />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.approach.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8">
                  <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-cream">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Scope */}
      <section className="relative py-20 sm:py-28" aria-labelledby="scope-heading">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading id="scope-heading" eyebrow="03" title={project.scopeSection.headline} intro={project.scopeSection.intro} />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-cream/90">
                  <Check className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Visual presentation */}
      <section className="relative py-20 sm:py-28" aria-labelledby="visuals-heading">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
        <div className="container-x">
          <Reveal>
            <SectionHeading id="visuals-heading" eyebrow="04" title={project.visuals.headline} intro={project.visuals.intro} />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-8">
              <BrowserFrame shot={desktop} url="7sinne.at" />
            </Reveal>
            <Reveal className="lg:col-span-3 lg:col-start-10" delay={120}>
              <PhoneFrame shot={mobile} className="mx-auto w-52 lg:w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="relative py-20 sm:py-28" aria-labelledby="result-heading">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading id="result-heading" eyebrow="05" title={project.result.headline} />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {project.result.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-lime/70 pl-5 text-sm leading-relaxed text-muted">{project.ongoing}</p>
            <div className="mt-8">
              <ButtonLink href={project.url} target="_blank" rel="noopener noreferrer" size="lg">
                {project.urlLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28" aria-labelledby="contact-heading">
        <Reveal>
          <ContactCta {...content.finalCta} />
        </Reveal>
      </section>
    </article>
  );
}
