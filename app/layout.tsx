import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spektrum Pocitov – Ako sa vyznať vo všetkých tých rozmanitých emóciách",
  description: "Psychologická podpora a rozvoj vedomia",
  keywords: "Terapia, Toxické vzťahy, narcis, narcizmus, empat, krízová intervencia, Vision Extra Ocular, extraokulárne videnie, Theta Healing, Etikoterapia, neurolingvistické programovanie, Slovensko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
