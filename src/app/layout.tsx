import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JsonLd } from "@/components/site/JsonLd";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { ContactDialogProvider } from "@/components/ui/ContactChoices";
import { siteConfig } from "@/config/site";
import { content } from "@/content";
import { publicAssetExists } from "@/lib/assets";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const hasOgImage = publicAssetExists(siteConfig.assets.ogImage);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: content.meta.siteTitle,
    template: content.meta.titleTemplate,
  },
  description: content.meta.description,
  keywords: [...content.meta.keywords],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AT",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: content.meta.siteTitle,
    description: content.meta.description,
    ...(hasOgImage
      ? { images: [{ url: siteConfig.assets.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — web design and development in Vienna` }] }
      : {}),
  },
  twitter: {
    card: hasOgImage ? "summary_large_image" : "summary",
    title: content.meta.siteTitle,
    description: content.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070A0F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locale} className={`${display.variable} ${sans.variable}`}>
      <body className="pb-safe-bar sm:pb-0">
        <JsonLd />
        <ContactDialogProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileContactBar />
        </ContactDialogProvider>
      </body>
    </html>
  );
}
