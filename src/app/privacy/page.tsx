import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { content } from "@/content";

/*
 * TODO before publication: complete the placeholders in src/content/en/legal.ts
 * (controller address and email, hosting provider, log retention) and revisit
 * this policy whenever analytics, forms or embeds are added.
 * See README.md → "Legal checklist".
 */

export const metadata: Metadata = {
  title: content.privacy.title,
  description: content.privacy.metaDescription,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return <LegalPage page={content.privacy} updated="2026-09" />;
}
