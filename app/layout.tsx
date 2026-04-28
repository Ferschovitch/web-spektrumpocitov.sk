import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/db";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Dropped weight "300" – not visually used anywhere on the site
const inter = Inter({
  subsets: ["latin"],
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
  alternates: {
    canonical: "https://www.spektrumpocitov.sk",
  },
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  const globalDb = await prisma.pageContent.findUnique({ where: { slug: 'global' } });
  const globalContent = (globalDb?.content as any) || {};

  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font fetching */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD – Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spektrum Pocitov",
              url: "https://www.spektrumpocitov.sk",
              logo: "https://www.spektrumpocitov.sk/logo-sun.webp",
              telephone: globalContent.footerPhone || "+421908500266",
              email: globalContent.footerEmail || "info@spektrumpocitov.sk",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bratislava",
                addressCountry: "SK",
              },
              sameAs: [
                "https://www.kidgenius.sk/",
                "https://www.svetladil.cz/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer content={globalContent} />
      </body>
    </html>
  );
}
