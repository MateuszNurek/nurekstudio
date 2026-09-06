"use client";

import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

/**
 * "Depth and precision": three stacked interface layers.
 *  - back layer: an unclear, noisy presence (scattered fragments)
 *  - middle layer: structure being imposed (wireframe grid)
 *  - front layer: a focused page that ends in one clear next step
 *
 * Pointer movement drives a subtle parallax through CSS variables only
 * (no React re-renders). Disabled when prefers-reduced-motion is set.
 */
export function HeroVisual({ label }: { label: string }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      stage.style.setProperty("--px", curX.toFixed(4));
      stage.style.setProperty("--py", curY.toFixed(4));
      if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      targetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      role="img"
      aria-label={label}
      className="relative mx-auto aspect-[5/6] w-full max-w-[34rem] select-none sm:aspect-square lg:aspect-[4/5] [--px:0] [--py:0]"
      style={{ perspective: "1400px" }}
    >
      {/* Background depth field */}
      <div aria-hidden="true" className="grid-lines absolute inset-[-10%]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[90px]"
      />

      {/* LAYER 1 — unclear presence */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[6%] top-[4%] h-[62%] rounded-2xl border border-line bg-surface/60 opacity-70 will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * -18px), calc(var(--py) * -14px), 0) rotateX(calc(var(--py) * -3deg)) rotateY(calc(var(--px) * 4deg)) scale(0.92)",
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute left-[8%] top-[10%] h-2 w-[42%] rounded bg-white/10 blur-[1px]" />
          <span className="absolute left-[56%] top-[16%] h-2 w-[26%] rounded bg-white/8 blur-[1px]" />
          <span className="absolute left-[12%] top-[30%] h-10 w-[30%] rounded-md bg-white/6" />
          <span className="absolute left-[48%] top-[26%] h-16 w-[38%] rounded-md bg-white/5" />
          <span className="absolute left-[8%] top-[58%] h-2 w-[60%] rounded bg-white/8 blur-[1px]" />
          <span className="absolute left-[20%] top-[70%] h-2 w-[18%] rounded bg-white/8" />
          <span className="absolute left-[64%] top-[66%] h-8 w-[24%] rounded-md bg-white/6" />
          <span className="absolute left-[5%] top-[84%] h-2 w-[70%] rounded bg-white/6 blur-[2px]" />
          <span className="absolute right-[6%] top-[6%] font-mono text-[10px] uppercase tracking-widest text-muted-2">
            before
          </span>
        </div>
      </div>

      {/* LAYER 2 — structure */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[3%] top-[16%] h-[62%] rounded-2xl border border-cyan/25 bg-ink-2/80 will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * -8px), calc(var(--py) * -6px), 0) rotateX(calc(var(--py) * -2deg)) rotateY(calc(var(--px) * 3deg)) scale(0.97)",
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(32 200 244 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(32 200 244 / 0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <span className="absolute left-[6%] top-[8%] h-[14%] w-[52%] rounded-md border border-dashed border-cyan/40" />
          <span className="absolute left-[6%] top-[28%] h-[10%] w-[36%] rounded-md border border-dashed border-cyan/40" />
          <span className="absolute left-[6%] top-[44%] h-[40%] w-[88%] rounded-md border border-dashed border-cyan/30" />
          <span className="absolute left-[62%] top-[8%] h-[30%] w-[32%] rounded-md border border-dashed border-cyan/30" />
          <div className="animate-scan absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent" />
        </div>
      </div>

      {/* LAYER 3 — focused page */}
      <div
        className="absolute inset-x-0 top-[28%] rounded-2xl border border-line-strong bg-surface shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7),0_0_0_1px_rgb(32_200_244/0.08)] will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * 6px), calc(var(--py) * 5px), 0) rotateX(calc(var(--py) * -1.5deg)) rotateY(calc(var(--px) * 2deg))",
          transition: "transform 0.1s linear",
        }}
      >
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-3 h-4 flex-1 rounded-full bg-white/5 px-3 font-mono text-[9px] leading-4 text-muted-2">
            yourbusiness.at
          </span>
        </div>

        <div className="relative p-5 sm:p-6">
          <span className="eyebrow block text-[0.6rem]">What we do</span>
          <p className="mt-2 font-display text-[1.35rem] font-semibold leading-[1.05] tracking-[-0.03em] text-cream sm:text-2xl">
            A clear offer,
            <br />
            <span className="text-muted">one next step.</span>
          </p>

          <ul className="mt-4 space-y-1.5 text-[0.7rem] text-muted sm:text-xs">
            {["What you offer", "Why to trust you", "What to do next"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-3 w-3 text-lime" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-cyan px-4 text-[0.72rem] font-semibold text-ink">
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="h-9 w-20 rounded-full border border-line-strong" />
          </div>

          {/* signal path from CTA to contact */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 bottom-[-2.25rem] h-28 w-40 sm:right-0"
            viewBox="0 0 160 112"
            fill="none"
          >
            <path
              d="M6 6 C 60 6, 70 60, 120 60 L 152 60"
              stroke="rgb(32 200 244 / 0.25)"
              strokeWidth="1.5"
            />
            <path
              d="M6 6 C 60 6, 70 60, 120 60 L 152 60"
              stroke="#20C8F4"
              strokeWidth="1.5"
              strokeDasharray="140"
              className="animate-signal"
            />
            <circle cx="152" cy="60" r="3" fill="#A6E35F" />
          </svg>
        </div>

        {/* contact pill: the destination */}
        <div className="absolute -bottom-6 right-4 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-ink px-3.5 py-2 text-xs font-medium text-cream shadow-[0_10px_30px_-10px_rgb(166_227_95/0.5)] sm:right-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-lime/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          <MessageCircle className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
          New enquiry
        </div>
      </div>

      {/* depth markers */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden flex-col gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-2 sm:flex"
      >
        <span>01 · Unclear</span>
        <span className="text-cyan/70">02 · Structured</span>
        <span className="text-cream/80">03 · Focused</span>
      </div>
    </div>
  );
}
