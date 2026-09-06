import Image from "next/image";
import { User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { content } from "@/content";
import { publicAssetExists } from "@/lib/assets";

export function About() {
  const { about } = content;
  const hasPortrait = publicAssetExists(siteConfig.assets.portrait);

  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="about-heading">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <figure className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line-strong bg-surface">
              {hasPortrait ? (
                <Image
                  src={siteConfig.assets.portrait}
                  alt={about.portraitAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${about.portraitPlaceholder} (image to be added)`}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-surface-2 to-ink-2"
                >
                  <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />
                  <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full border border-line-strong bg-ink text-muted">
                    <User className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <p className="relative font-display text-lg font-medium text-muted">{about.portraitPlaceholder}</p>
                  <p className="relative font-mono text-[10px] text-muted-2">{siteConfig.assets.portrait}</p>
                </div>
              )}
            </div>
            <figcaption className="absolute -bottom-4 left-4 rounded-full border border-line-strong bg-ink px-4 py-2 text-sm text-cream shadow-lg sm:left-6">
              {siteConfig.founder} <span className="text-muted">· Founder</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7" delay={100}>
          <SectionHeading id="about-heading" eyebrow={about.eyebrow} title={about.headline} />
          <div className="mt-6 space-y-4 text-muted leading-relaxed sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="eyebrow mt-10 mb-4">{about.approachTitle}</h3>
          <ul className="flex flex-wrap gap-2">
            {about.approach.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-cream/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
