"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { content } from "@/content";
import { cn } from "@/lib/cn";
import { StartProjectButton } from "@/components/ui/ContactChoices";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "container-x flex items-center justify-between transition-[height] duration-500 ease-out-expo",
          scrolled ? "h-16" : "h-20 lg:h-24",
        )}
      >
        <Wordmark compact={scrolled} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.9rem] text-muted transition-colors hover:text-cream focus-visible:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <StartProjectButton size={scrolled ? "sm" : "md"} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-cyan/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Backdrop behind the open mobile menu */}
      {open && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 h-screen w-screen cursor-default bg-ink/70 lg:hidden"
        />
      )}

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-ink/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col py-4">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-medium tracking-[-0.02em] text-cream transition-colors hover:text-cyan"
            >
              {item.label}
              <span className="font-mono text-xs text-muted-2">0{i + 1}</span>
            </Link>
          ))}
          <div className="pt-5">
            <StartProjectButton size="lg" className="w-full" label={content.cta.startProject} />
          </div>
        </nav>
      </div>
    </header>
  );
}
