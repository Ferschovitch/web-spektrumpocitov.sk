import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { getPageContent } from "@/lib/page-content";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Dropped weight "300" – not visually used anywhere on the site
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spektrumpocitov.sk"),
  title: {
    default: "Spektrum Pocitov – spojenie tradičnej a alternatívnej psychológie",
    template: "%s | Spektrum Pocitov",
  },
  description:
    "Psychologická podpora a rozvoj vedomia",
  keywords: [
    "psychologička Bratislava",
    "terapia pre deti",
    "rodinná terapia",
    "krízová intervencia",
    "Theta Healing",
    "Etikoterapia",
    "extraokulárne videnie",
    "Vision Extra Ocular",
    "neurolingvistické programovanie",
    "toxické vzťahy",
    "narcizmus",
    "emočná sebaregulácia",
  ],

  openGraph: {
    siteName: "Spektrum Pocitov",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spektrum Pocitov – Psychologická podpora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spektrumpocitov",
  },
  robots: {
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalDb = await getPageContent("global");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalContent = (globalDb?.content as Record<string, any>) || {};

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.spektrumpocitov.sk/#website",
    "url": "https://www.spektrumpocitov.sk",
    "name": "Spektrum Pocitov",
    "inLanguage": "sk",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.spektrumpocitov.sk/#organization",
    "name": "Spektrum Pocitov",
    "description": "Psychologická podpora a rozvoj vedomia pre deti, jednotlivcov, páry a rodiny v Bratislave.",
    "url": "https://www.spektrumpocitov.sk",
    "logo": "https://www.spektrumpocitov.sk/logo-sun.webp",
    "image": "https://www.spektrumpocitov.sk/og-image.png",
    "telephone": globalContent.footerPhone || "+421908500266",
    "email": globalContent.footerEmail || "info@spektrumpocitov.sk",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bratislava",
      "addressCountry": "SK",
    },
    "areaServed": {
      "@type": "City",
      "name": "Bratislava",
    },
  };

  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font fetching */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD – WebSite and Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <AnalyticsTracker />
        <Navbar />
        <main>{children}</main>
        <Footer content={globalContent} />
      </body>
    </html>
  );
}
