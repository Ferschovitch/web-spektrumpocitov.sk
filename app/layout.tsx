import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spektrum Pocitov – Terapia pre deti a rodiny",
  description: "Terapia pre deti so svežím, nádejným prístupom. Sprevádzame vašu rodinu každým ročným obdobím rastu — so srdcom a hrou.",
  keywords: "terapia pre deti, rodinná terapia, herná terapia, detský terapeut, Slovensko",
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
