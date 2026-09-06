import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { content } from "@/content";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-28 pb-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-cream sm:text-5xl">
        This page does not exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">The link may be outdated. Everything you need is on the homepage.</p>
      <ButtonLink href="/" variant="secondary" className="mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {content.cta.backHome}
      </ButtonLink>
    </section>
  );
}
