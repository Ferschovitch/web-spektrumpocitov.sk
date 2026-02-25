import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="sk">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
