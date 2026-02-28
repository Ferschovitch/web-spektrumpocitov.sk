// Server Component – no "use client" needed since interactivity is isolated in CarouselSection
import Link from "next/link";
import Image from "next/image";
import CarouselSection from "@/components/CarouselSection";

const feelingsCards = [
  {
    emoji: "🟡",
    color: "#F5C842",
    bg: "#fdf5d6ff",
    label: "Rodiny",
    text: "Rodinná dynamika, jasne nastavené pravidlá a hranice aj funkčná spolupráca tvoria základ bezpečného prostredia, v ktorom môžu rásť deti aj dospelí. Ponúkam vám podporu na ceste k väčšiemu porozumeniu, rešpektu a blízkosti medzi vami a vašimi blízkymi.",
  },
  {
    emoji: "🔵",
    color: "#5BC8C8",
    bg: "#EAF6FB",
    label: "Deti",
    text: "Podporujem rozvoj rôznych schopností a zručností dieťaťa, posilňujem jeho schopnosť zamerať pozornosť prospešným smerom a rozvíjať emočnú sebareguláciu, pričom spolu hľadáme a citlivo identifikujeme jeho skutočné potreby, aby mohlo rásť v bezpečí a porozumení.",
  },
  {
    emoji: "🔴",
    color: "#F5A0A0",
    bg: "#FDF0F0",
    label: "Jednotlivci",
    text: "Cesta k hlbšiemu sebapoznaniu, vnútornému pokoju a zmene postoja, ktorá prináša úľavu. Pracujeme na zvýšení sebavedomia a autonómie vo vlastnom živote, zveľadujeme vašu psychickú aj fyzickú kondíciu.",
  },
  {
    emoji: "🟢",
    color: "#6DBF67",
    bg: "#EDF7ED",
    label: "Páry",
    text: "Objavíme vzájomný jazyk lásky, nastavíme efektívnu komunikáciu a naučíme sa bezpečne a zdravo hádať. Budeme sa venovať otázkam, ako spolu tráviť zmysluplný čas, ako budovať pocit bezpečia a spolupatričnosti a ako byť jeden pre druhého stále atraktívnym a inšpiratívnym partnerom.",
  },
];

const approachCards = [
  {
    icon: "🪞",
    title: "Podpora v osobnom raste, sebarozvoj, sebapoznanie, sebavedomie",
    text: "Sprevádzam vás na ceste k hlbšiemu pochopeniu seba samých, aby ste mohli žiť vedomejšie a v súlade so svojimi hodnotami.",
    accentBg: "#EDF7ED",
  },
  {
    icon: "🆘",
    title: "Krízová intervencia a závislosti",
    text: "Pomáham nájsť stabilitu a bezpečie v náročných obdobiach, keď sa zdá, že situácia je nad vaše sily.",
    accentBg: "#FDF0F0",
  },
  {
    icon: "💬",
    title: "Tréning efektívnej komunikácie, práca s emóciami",
    text: "Učím, ako pomenovať svoje potreby, zvládať emócie a komunikovať tak, aby vzťahy mohli rásť namiesto toho, aby vyhoreli.",
    accentBg: "#EAF6FB",
  },
  {
    icon: "🕊️",
    title: "Pravidlá zdravej a bezpečnej hádky",
    text: "Ukazujem, ako zvládať konflikty bez zraňovania, s rešpektom a dôrazom na porozumenie.",
    accentBg: "#fdf5d6ff",
  },
  {
    icon: "🤝",
    title: "Partnerské a pracovné vzťahy, toxické vzťahy",
    text: "Podporujem hľadanie rovnováhy a vzájomného rešpektu vo vzťahoch doma aj v pracovnom prostredí. Venujem sa rôznym vzťahovým dynamikám (mužsko-ženská, narcis vs. empat, obeť vs. tyran, atď.).",
    accentBg: "#EDF7ED",
  },
  {
    icon: "✨",
    title: "Pracovné zameranie, uplatnenie talentov, poslanie",
    text: "Spoločne objavíme vaše silné stránky a nájdeme cestu, po ktorej môže váš talent vykročiť. Postupne nahradíme pocity vyhorenia za spokojnosť a pracovné naplnenie.",
    accentBg: "#fdf5d6ff",
  },
  {
    icon: "🧠",
    title: "Rozvoj mysle, vedomia a intuície",
    text: "Vediem vás k citlivejšiemu vnímaniu vnútorného hlasu a k vedomejšiemu rozhodovaniu, aj pomocou identifikácie zautomatizovaných reakcií a vzorcov myslenia, rôznych blokov a strachov.",
    accentBg: "#EAF6FB",
  },
  {
    icon: "🧘",
    title: "Autogénny tréning, relaxácia a meditácia",
    text: "Učíme sa techniky, ktoré umožňujú rýchlejší návrat k vnútornému pokoju, premene neprospešných návykov na prospešné.",
    accentBg: "#EDF7ED",
  },
  {
    icon: "⚛️",
    title: "Energetické zákony a manifestácia",
    text: "Odhalíme príčiny a následky aktuálnej podoby vašich vzťahov, práce, psychosomatických príčin narušeného zdravotného stavu a celkovej životnej situácie.",
    accentBg: "#FDF0F0",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#F5F6F0" }}>
      {/* ── HERO ── */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}
        className="hero-section"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          {/* Left: text */}
          <div>
            <h1
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(38px, 5vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                color: "#1A1A1A",
              }}
            >
              Spolu objavme{" "}
              <span style={{ color: "#F5C842" }}>svetlo</span>{" "}
              v{" "}
              <span style={{ color: "#5BC8C8" }}>tme</span>
            </h1>

            <div
              style={{
                fontSize: 18,
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              <p style={{ margin: 0 }}>
                Som tu pre všetkých, ktorí túžia po pochopení. Pre tých, ktorí chcú lepšie porozumieť vlastnej situácii, aj pre tých, ktorí hľadajú cestu z trápení, vzťahových kríz či výchovných dilem.<br /><br />
              </p>

              <p style={{ margin: 0 }}>
                Ľudí vnímam a prijímam práve takých, akí sú, bez hodnotenia, nálepiek či tlaku. Spolu môžeme nájsť odpovede na vaše otázky, správny smer na ceste riešenia vašich problémov a vytúžený vnútorný pokoj.<br /><br />
              </p>

              <p style={{ margin: 0 }}>
                Ponúkam autentický a ľudský prístup.<br />
              </p>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/kontakt"
                style={{
                  background: "#1A1A1A",
                  color: "white",
                  borderRadius: 999,
                  padding: "14px 28px",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                Napíšte mi
              </Link>
              <Link
                href="#toolkit"
                style={{
                  background: "transparent",
                  color: "#1A1A1A",
                  borderRadius: 999,
                  padding: "14px 28px",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "2px solid #1A1A1A",
                  display: "inline-block",
                }}
              >
                Zavolajte mi
              </Link>
            </div>
          </div>

          {/* Right: Image card with blobs */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-image-wrap">
            {/* Blob 1 – yellow */}
            <div style={{
              position: "absolute", width: 300, height: 300, borderRadius: "50%",
              background: "#F5C842", opacity: 0.18, top: -40, right: -20, zIndex: 0,
            }} />
            {/* Blob 2 – teal */}
            <div style={{
              position: "absolute", width: 200, height: 200, borderRadius: "50%",
              background: "#5BC8C8", opacity: 0.15, bottom: 10, left: -30, zIndex: 0,
            }} />

            {/* Image card – next/image with priority + sizes for responsive cropping */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                width: "100%",
                maxWidth: 470,
                rotate: "10deg",
              }}
            >
              <Image
                src="/hero-image.webp"
                alt="Kreslená ilustrácia domu, slnka, kvetov a stromu"
                width={470}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 470px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEELINGS EXPLORER ── */}
      <section style={{ background: "white", padding: "80px 24px" }} id="pocity">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Odpoveď sa skrýva vo vás
            </h2>
            <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
              Spolu ju môžeme objaviť, pomenovať a v bezpečnom prostredí na nej postaviť váš život opäť na nohy.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
            className="feelings-grid"
          >
            {feelingsCards.map((card) => (
              <div
                key={card.label}
                style={{
                  background: card.bg,
                  borderRadius: 20,
                  padding: "32px 24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "transform 0.25s ease",
                }}
              >
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

      {/* ── CAROUSEL (client component) ── */}
      <CarouselSection />

      {/* ── OUR APPROACH ── */}
      <section id="nas-pristup" style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Témy, ktorým sa venujem
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="approach-grid">
            {approachCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: card.accentBg,
                  borderRadius: 20,
                  padding: "28px 24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: 10,
                    lineHeight: 1.4,
                  }}
                >
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
          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "white",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Vykročte na cestu ku{" "}
            <span style={{ color: "#F5C842" }}>krajším dňom</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }} />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/kontakt"
              style={{
                background: "white",
                color: "#1A1A1A",
                borderRadius: 999,
                padding: "14px 28px",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Napíšte mi
            </Link>
            <Link
              href="/kontakt"
              style={{
                background: "#F5C842",
                color: "#1A1A1A",
                borderRadius: 999,
                padding: "14px 28px",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Zavolajte mi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
