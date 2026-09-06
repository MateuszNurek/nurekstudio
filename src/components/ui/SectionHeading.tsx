import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
  children,
  size = "md",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn("h-px w-6 bg-cyan/70", align === "center" && "hidden")}
          />
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          "font-display font-semibold tracking-[-0.03em] text-cream",
          size === "lg"
            ? "text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
      )}
      {children}
    </div>
  );
}
