import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-ink shadow-[0_0_0_1px_rgb(32_200_244/0.4),0_10px_30px_-10px_rgb(32_200_244/0.55)] hover:bg-[#4ad4f6] hover:shadow-[0_0_0_1px_rgb(32_200_244/0.6),0_14px_40px_-10px_rgb(32_200_244/0.7)] active:translate-y-px",
  secondary:
    "border border-line-strong bg-transparent text-cream hover:border-cyan/60 hover:bg-cyan/5 active:translate-y-px",
  ghost: "text-cream hover:text-cyan",
  whatsapp:
    "bg-lime text-ink hover:bg-[#b8ec78] shadow-[0_10px_30px_-12px_rgb(166_227_95/0.6)] active:translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export type ButtonLinkProps = StyleProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children"> & { href: string };

export type ButtonNativeProps = StyleProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function buttonClasses({ variant = "primary", size = "md", className }: Omit<StyleProps, "children">) {
  return cn(base, variants[variant], sizes[size], className);
}

function isExternal(href: string) {
  return /^(https?:|tel:|mailto:|sms:)/.test(href);
}

export function ButtonLink({ variant, size, className, children, href, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Button({ variant, size, className, children, type = "button", ...rest }: ButtonNativeProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
