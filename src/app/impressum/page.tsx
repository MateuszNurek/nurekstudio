import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { content } from "@/content";

/*
 * TODO before publication: complete the placeholders in src/content/en/legal.ts
 * (address, email, VAT/UID, trade authority, registration details).
 * See README.md → "Legal checklist".
 */

export const metadata: Metadata = {
  title: content.impressum.title,
  description: content.impressum.metaDescription,
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return <LegalPage page={content.impressum} updated="2026-09" />;
}
