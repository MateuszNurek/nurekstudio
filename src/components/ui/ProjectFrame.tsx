import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Shot = { src: string; alt: string; exists: boolean };

/**
 * Placeholder rendered when a screenshot has not been supplied yet. Clearly
 * labelled with the expected file path so it can never be mistaken for a real
 * screenshot.
 */
function MissingShot({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-ink-2 p-6 text-center">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-80" />
      <ImageIcon className="relative h-6 w-6 text-muted-2" aria-hidden="true" />
      <p className="relative text-xs font-medium text-muted">{label}</p>
      <p className="relative break-all font-mono text-[10px] text-muted-2">{src}</p>
    </div>
  );
}

export function BrowserFrame({
  shot,
  url,
  className,
  priority = false,
}: {
  shot: Shot;
  url: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_40px_100px_-30px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-ink-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white/5 px-3 font-mono text-[11px] text-muted">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {shot.exists ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top"
            priority={priority}
          />
        ) : (
          <MissingShot src={shot.src} label="Desktop screenshot placeholder" />
        )}
      </div>
    </figure>
  );
}

export function PhoneFrame({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[2rem] border border-line-strong bg-surface p-2 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.5rem] bg-ink-2">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/60"
        />
        {shot.exists ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 18vw, 40vw"
            className="object-cover object-top"
          />
        ) : (
          <MissingShot src={shot.src} label="Mobile screenshot placeholder" />
        )}
      </div>
    </figure>
  );
}
