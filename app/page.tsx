import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CarouselSection from "@/components/CarouselSection";
import { prisma } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.pageContent.findUnique({ where: { slug: 'home' } });
  
  if (!page) {
    return {
      title: "Spektrum Pocitov – spojenie tradičnej a alternatívnej psychológie",
      description: "Psychologická podpora a rozvoj vedomia",
    }
  }

  return {
    title: page.title || "Spektrum Pocitov",
    description: page.description || "Psychológia",
    keywords: page.keywords || "",
    alternates: {
      canonical: "https://www.spektrumpocitov.sk",
    },
    openGraph: {
      title: page.title || "Spektrum Pocitov",
      description: page.description || "",
      url: "https://www.spektrumpocitov.sk",
      type: "website",
    },
  };
}

export default async function HomePage() {
  const pageDb = await prisma.pageContent.findUnique({ where: { slug: 'home' } });
  
  const defaultContent = {
    heroTitleStart: "Spolu objavme ",
    heroTitleHighlight1: "svetlo",
    heroTitleMiddle: " v ",
    heroTitleHighlight2: "tme",
    heroBody1: "Som tu pre všetkých, ktorí túžia po pochopení a podpore. Pre tých, ktorí chcú lepšie porozumieť vlastnej situácii, aj pre tých, ktorí hľadajú cestu z trápení, vzťahových kríz či výchovných dilem.",
    heroBody2: "Ľudí vnímam a prijímam práve takých, akí sú, bez hodnotenia, nálepiek či tlaku. Spolu môžeme nájsť odpovede na vaše otázky, správny smer na ceste riešenia vašich problémov a vytúžený vnútorný pokoj.",
    heroBody3: "Ponúkam autentický a ľudský prístup, spojenie tradičnej a alternatívnej psychológie.",
    feelingsTitle: "Odpoveď sa skrýva vo vás",
    feelingsSubtitle: "Spolu ju môžeme objaviť, pomenovať a v bezpečnom prostredí na nej postaviť váš život opäť na nohy.",
    feelingsCards: [
      { emoji: "🟡", color: "#F5C842", bg: "#fdf5d6ff", label: "Rodiny", text: "Rodinná dynamika, jasne nastavené pravidlá a hranice aj funkčná spolupráca tvoria základ bezpečného prostredia, v ktorom môžu rásť deti aj dospelí. Ponúkam vám podporu na ceste k väčšiemu porozumeniu, rešpektu a blízkosti medzi vami a vašimi blízkymi." },
      { emoji: "🔵", color: "#5BC8C8", bg: "#EAF6FB", label: "Deti", text: "Podporujem rozvoj rôznych schopností a zručností dieťaťa..." },
      { emoji: "🔴", color: "#F5A0A0", bg: "#FDF0F0", label: "Jednotlivci", text: "Cesta k hlbšiemu sebapoznaniu, vnútornému pokoju a zmene postoja..." },
      { emoji: "🟢", color: "#6DBF67", bg: "#EDF7ED", label: "Páry", text: "Objavíme vzájomný jazyk lásky, nastavíme efektívnu komunikáciu..." }
    ],
    approachTitle: "Témy, ktorým sa venujem",
    approachCards: [
      { icon: "", title: "Podpora v osobnom raste...", text: "Sprevádzam vás na ceste...", accentBg: "#EDF7ED" },
      { icon: "", title: "Krízová intervencia...", text: "Pomáham nájsť stabilitu...", accentBg: "#FDF0F0" },
      { icon: "", title: "Tréning efektívnej komunikácie...", text: "Učím, ako pomenovať...", accentBg: "#EAF6FB" }
    ],
    ctaTitleStart: "Vykročte na cestu ku ",
    ctaTitleHighlight: "krajším dňom",
    ctaSubtitle: ""
  };

  const content = pageDb?.content ? (pageDb.content as any) : defaultContent;

  return (
    <div style={{ background: "#F5F6F0" }}>
      {/* ── HERO ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 20, color: "#1A1A1A" }}>
              {content.heroTitleStart || "Spolu objavme "}
              <span style={{ color: "#F5C842" }}>{content.heroTitleHighlight1 || "svetlo"}</span>
              {content.heroTitleMiddle || " v "}
              <span style={{ color: "#5BC8C8" }}>{content.heroTitleHighlight2 || "tme"}</span>
            </h1>

            <div style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              <p style={{ margin: 0 }}>{content.heroBody1}<br /><br /></p>
              <p style={{ margin: 0 }}>{content.heroBody2}<br /><br /></p>
              <p style={{ margin: 0 }}>{content.heroBody3}<br /></p>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/kontakt" style={{ background: "#1A1A1A", color: "white", borderRadius: 999, padding: "14px 28px", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
                Napíšte mi
              </Link>
              <Link href="#toolkit" style={{ background: "transparent", color: "#1A1A1A", borderRadius: 999, padding: "14px 28px", textDecoration: "none", fontSize: 15, fontWeight: 600, border: "2px solid #1A1A1A" }}>
                Zavolajte mi
              </Link>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#F5C842", opacity: 0.18, top: -40, right: -20 }} />
            <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "#5BC8C8", opacity: 0.15, bottom: 10, left: -30 }} />
            <div style={{ position: "relative", zIndex: 1, borderRadius: 28, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", width: "100%", maxWidth: 470, rotate: "10deg" }}>
              <Image src="/hero-image.webp" alt="Kreslená ilustrácia domu, slnka, kvetov a stromu" width={470} height={400} priority sizes="(max-width: 768px) 100vw, 470px" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEELINGS EXPLORER ── */}
      <section style={{ background: "white", padding: "80px 24px" }} id="pocity">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
              {content.feelingsTitle}
            </h2>
            <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
              {content.feelingsSubtitle}
            </p>
          </div>

          <div className="feelings-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {(content.feelingsCards || []).map((card: any) => (
              <div key={card.label} style={{ background: card.bg, borderRadius: 20, padding: "32px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", transition: "transform 0.25s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: card.color, flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, fontSize: 20, color: "#1A1A1A", fontFamily: "Playfair Display, Georgia, serif" }}>{card.label}</span>
                </div>
                <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ── */}
      <CarouselSection />

      {/* ── OUR APPROACH ── */}
      <section id="nas-pristup" style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
              {content.approachTitle}
            </h2>
          </div>

          <div className="approach-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {(content.approachCards || []).map((card: any) => (
              <div key={card.title} style={{ background: card.accentBg, borderRadius: 20, padding: "28px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{card.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1A1A", marginBottom: 10, lineHeight: 1.4 }}>
                  {card.title}
                </h3>
                <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section id="toolkit" style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, fontStyle: "italic", color: "white", marginBottom: 20, lineHeight: 1.2 }}>
            {content.ctaTitleStart || "Vykročte na cestu ku "}
            <span style={{ color: "#F5C842" }}>{content.ctaTitleHighlight || "krajším dňom"}</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>{content.ctaSubtitle || ""}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/kontakt" style={{ background: "white", color: "#1A1A1A", borderRadius: 999, padding: "14px 28px", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
              Napíšte mi
            </Link>
            <Link href="/kontakt" style={{ background: "#F5C842", color: "#1A1A1A", borderRadius: 999, padding: "14px 28px", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
              Zavolajte mi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
