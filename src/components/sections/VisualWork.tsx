import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content";
import type { VisualWorkItem } from "@/content/types";
import { publicAssetExists } from "@/lib/assets";
import { cn } from "@/lib/cn";

const ratios: Record<VisualWorkItem["ratio"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
};

/**
 * Flexible gallery. Each item is either a real image (when the file exists)
 * or a clearly marked content slot. Populate via src/content/en/home.ts.
 */
export function VisualWork() {
  const { visualWork } = content;
  return (
    <section id="visual-work" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-36" aria-labelledby="visual-heading">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-x">
        <Reveal>
          <SectionHeading id="visual-heading" eyebrow={visualWork.eyebrow} title={visualWork.headline} intro={visualWork.subtitle} />
        </Reveal>

        <ul className="mt-12 columns-1 gap-4 xs:columns-2 lg:mt-16 lg:columns-3 [&>li]:mb-4 [&>li]:break-inside-avoid">
          {visualWork.items.map((item, i) => {
            const hasImage = item.image !== null && publicAssetExists(item.image.src);
            return (
              <Reveal as="li" key={item.id} delay={(i % 3) * 70}>
                <figure
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-line bg-surface",
                    ratios[item.ratio],
                  )}
                >
                  {hasImage && item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 420px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />
                      <div className="relative flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">{item.category}</span>
                        <ImagePlus className="h-4 w-4 text-muted-2" aria-hidden="true" />
                      </div>
                      <div className="relative">
                        <p className="font-display text-lg font-medium text-muted">{item.label}</p>
                        <p className="mt-1 text-[11px] leading-snug text-muted-2">{visualWork.slotNote}</p>
                      </div>
                    </div>
                  )}
                  <figcaption className="sr-only">
                    {hasImage && item.image ? item.image.alt : `${item.label}: ${item.category} content slot`}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
