"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { siteConfig } from "@/config/site";
import { content } from "@/content";
import { buttonClasses } from "./Button";
import { cn } from "@/lib/cn";

/**
 * Primary conversion flow. A single native <dialog> is mounted once via
 * <ContactDialogProvider> (in the root layout); every <StartProjectButton>
 * on the page opens it. The platform dialog handles focus trapping, Escape
 * and the accessibility tree.
 */

const ContactDialogContext = createContext<{ open: () => void; isOpen: boolean } | null>(null);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descId = useId();

  const open = useCallback(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (!d.open) d.showModal();
    setIsOpen(true);
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setIsOpen(false);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <ContactDialogContext.Provider value={{ open, isOpen }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className={cn(
          "m-auto w-[min(92vw,30rem)] rounded-3xl border border-line-strong bg-surface p-0 text-cream shadow-[0_40px_120px_-30px_rgb(0_0_0/0.8)]",
          "backdrop:bg-ink/80 backdrop:backdrop-blur-sm",
          "open:animate-fade-up",
        )}
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-cream"
            aria-label={content.cta.contactDialogClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <p className="eyebrow mb-3">{siteConfig.callOffer}</p>
          <h2 id={titleId} className="pr-10 font-display text-2xl font-semibold tracking-[-0.02em]">
            {content.cta.contactDialogTitle}
          </h2>
          <p id={descId} className="mt-2 text-sm leading-relaxed text-muted">
            {content.cta.contactDialogIntro}
          </p>

          <div className="mt-6 grid gap-3">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={buttonClasses({ variant: "whatsapp", size: "lg", className: "w-full" })}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {content.cta.messageWhatsApp}
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              onClick={close}
              className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full" })}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {content.cta.callMateusz}
            </a>
            <p className="text-center font-mono text-sm text-muted">{siteConfig.contact.phoneDisplay}</p>
          </div>
        </div>
      </dialog>
    </ContactDialogContext.Provider>
  );
}

export function StartProjectButton({
  label = content.cta.startProject,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}) {
  const ctx = useContext(ContactDialogContext);

  // Graceful fallback if rendered outside the provider: link straight to WhatsApp.
  if (!ctx) {
    return (
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses({ variant, size, className })}
      >
        {children ?? label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={ctx.open}
      className={buttonClasses({ variant, size, className })}
      aria-haspopup="dialog"
      aria-expanded={ctx.isOpen}
    >
      {children ?? label}
    </button>
  );
}
