"use client";
import { useState } from "react";
import Link from "next/link";

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

const carouselCards = [
  {
    color: "#F5C842",
    bg: "#fdf5d6ff",
    title: "Pre veľké srdcia, ktoré vychovávajú tie malé",
    paragraphs: [
      "Objavte svetlo aj tam, kde sa zdá, že je len únava, chaos či pochybnosti.",
      "Byť rodičom znamená zodpovednosť, ale aj neustále otázky: Robím to správne?",
      "Ak ste pripravení otvoriť svoju myseľ a pozrieť sa na veci z iného uhla, rada vás budem sprevádzať. Nie návodmi na dokonalosť, ale návratom k sebe a k vnútornému pokoju. K miestu, kde sa dá žiť ľahšie. Nie preto, že zmiznú všetky problémy, ale preto, že sa zmení váš postoj.",
      "Pretože skutočná sila sa skrýva v našom postoji.",
    ],
  },
  {
    color: "#5BC8C8",
    bg: "#EDF7ED",
    title: "Pre deti, ktorým sa svet zdá príliš rýchly",
    paragraphs: [
      "Niektoré deti vnímajú svet inak.",
      "Dysgrafia. Dyslexia. Dysortografia. Za týmito slovami sa často skrýva viac než len slovo porucha. Niekedy je to tlak. Očakávania. Porovnávanie. Pocit, že svet sa zrýchlil a písmenká či čísla sa kamsi rozutekali.",
      "Dieťa však nepotrebuje ďalší tlak na to, aby niečo zvládalo. Potrebuje bezpečie. Porozumenie. Prijatie.",
      "Pretože skutočná vnútorná motivácia nevzniká z povinnosti ani zo strachu z chýb. Vzniká z hladu duše. Keď je dieťa v kontakte so svojím vnútorným svetom, učenie sa sa stáva prirodzeným.",
      "Keď sa cíti prijaté, rastie. Keď je v bezpečí, odváži sa skúšať. A práve tam začína skutočná zmena.",
    ],
  },
  {
    color: "#F5A0A0",
    bg: "#FDF0F0",
    title: "Pre jednotlivcov, ktorí chcú porozumieť sami sebe",
    paragraphs: [
      "Niekedy je najťažší rozhovor ten, ktorý vedieme sami so sebou.",
      "Únava. Preťaženie. Pochybnosti. Pocit, že musím zvládnuť všetko a pritom sa nikto nepýta, či mi niečo nechýba.",
      "Žiť ľahšie sa dá. Nie únikom, ale pochopením, čo a prečo nás tak veľmi vyčerpáva.",
      "Ak chcete objaviť, čo sa deje pod povrchom vašich reakcií, vzťahov a rozhodnutí, som tu pre vás. Nie, aby som vám povedala, kým máte byť, ale aby ste sa mohli znovu stretnúť sami so sebou.",
      "Pretože statiť sa nie je hanba ani nič definitívne. Je to príležitosť lepšie spoznať svoje vnútro a konečne sa slobodne nadýchnuť.",
    ],
  },
  {
    color: "#6DBF67",
    bg: "#EDF7ED",
    title: "Pre páry, ktoré si znova hľadajú cestu k sebe",
    paragraphs: [
      "Byť vo vzťahu znamená kráčať po spoločnej ceste. A občas sa na tej ceste stratí blízkosť, ktorú nahradia hádky alebo naopak dusivé ticho, zraňujúce správanie či úplné vyčerpanie.",
      "Ak nehľadáte vinníka, ale cestu k vzájomnému porozumeniu, rada vás ňou budem sprevádzať. Otvorenými rozhovormi a spoločnými cvičeniami sa priblížite k sebe aby ste sa mohli opäť naladiť na rovnakú vlnu.",
      "Pretože láska nepotrebuje dokonalosť. Potrebuje bezpečný priestor.",
    ],
  },


];

function CarouselSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  function goTo(idx: number) {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 250);
  }

  const card = carouselCards[active];

  return (
    <section style={{ padding: "80px 24px", background: "#F5F6F0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "#5BC8C8", opacity: 0.07, top: -120, right: -100 }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#F5A0A0", opacity: 0.07, bottom: -80, left: -80 }} />

      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
        {/* Card */}
        <div
          style={{
            background: card.bg,
            borderRadius: 28,
            padding: "48px 52px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
            minHeight: 340,
            textAlign: "center",
          }}
        >
          {/* Colour accent dot */}
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: card.color, marginBottom: 24, margin: "0 auto 24px" }} />

          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: 24,
              lineHeight: 1.3,
            }}
          >
            {card.title}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {card.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  margin: 0,
                  color: i === card.paragraphs.length - 1 ? "#9CA3AF" : "#4B5563",
                  fontSize: 16,
                  lineHeight: 1.8,
                  fontStyle: i === card.paragraphs.length - 1 ? "italic" : "normal",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 36 }}>
          {/* Prev */}
          <button
            onClick={() => goTo((active - 1 + carouselCards.length) % carouselCards.length)}
            aria-label="Predchádzajúci"
            style={{
              width: 40, height: 40, borderRadius: "50%", border: "2px solid #E5E7EB",
              background: "white", cursor: "pointer", fontSize: 18, display: "flex",
              alignItems: "center", justifyContent: "center", transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = card.color; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 10 }}>
            {carouselCards.map((c, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Snímka ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                style={{
                  width: i === active ? 28 : 12,
                  height: 12,
                  borderRadius: 999,
                  background: i === active ? c.color : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => goTo((active + 1) % carouselCards.length)}
            aria-label="Nasledujúci"
            style={{
              width: 40, height: 40, borderRadius: "50%", border: "2px solid #E5E7EB",
              background: "white", cursor: "pointer", fontSize: 18, display: "flex",
              alignItems: "center", justifyContent: "center", transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = card.color; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

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
              {/* doplniť ze kamaratka */}

              {/*
              <p style={{ margin: 0 }}>
                Budem vás sprevádzať s rešpektom a pokojom, nech prechádzate akýmkoľvek obdobím. Bez hodnotenia a bez tlaku na rýchle odpovede.<br /><br />
              </p>
              
              <p style={{ margin: 0, fontStyle: "italic", color: "#9CA3AF" }}>
                Pretože život nie je len jasná obloha. Občas prídu prehánky, hmla a vietor.
                Spolu môžeme nájsť spôsob, ako prečkať obdobie dažďov a znovu sa nadýchnuť, keď vyjde slnko.
              </p>
              */}
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
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
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
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
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

            {/* Image card */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                width: "100%",
                maxWidth: 470,
                rotate: "10deg"
              }}
            >
              {/* Hero image – WebP with JPG fallback */}
              <picture>
                <source srcSet="/hero-image.webp" type="image/webp" />
                <img
                  src="/hero-image.jpg"
                  alt="Kreslená ilustrácia domu, slnka, kvetov a stromu"
                  style={{ width: "100%", display: "block" }}
                />
              </picture>
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
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
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

        <style>{`
          @media (max-width: 1024px) { .feelings-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .feelings-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── CAROUSEL ── */}
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
            <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 520 }}>

            </p>
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
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 16,
                  }}
                >
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

        <style>{`
          @media (max-width: 900px) { .approach-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .approach-grid { grid-template-columns: 1fr !important; } }
        `}</style>
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
            Vykročte na cestu ku  {" "}
            <span style={{ color: "#F5C842" }}>krajším dňom</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>

          </p>
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
                transition: "transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
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
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,200,66,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Zavolajte mi
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { order: -1; margin-bottom: 16px; }
        }
      `}</style>
    </div>
  );
}
