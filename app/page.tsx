"use client";
import Link from "next/link";

const feelingsCards = [
  {
    emoji: "🟡",
    color: "#F5C842",
    bg: "#FEF9E7",
    label: "Šťastný",
    text: "Oslavujeme radosť a svetlo v každodenných objavoch. Je to palivo pre rast a odvahu skúšať nové veci.",
  },
  {
    emoji: "🔵",
    color: "#5BC8C8",
    bg: "#EAF6FB",
    label: "Smutný",
    text: "Potvrdzujeme tiché chvíle spracovania a odpočinku. Slzy sú len dážď pre dušu a rastieme po každom prechode.",
  },
  {
    emoji: "🔴",
    color: "#F5A0A0",
    bg: "#FDF0F0",
    label: "Nahnevaný",
    text: "Premieňame veľkú energiu na tvorivé vyjadrenie. Hnev je ochranca s hlasným hlasom, ktorý má čo povedať.",
  },
  {
    emoji: "🟢",
    color: "#6DBF67",
    bg: "#EDF7ED",
    label: "Odvážny",
    text: "Budujeme silu skúšať nové veci, krok za krokom. Odvaha rastie v malých každodenných činoch a dobrodružstvách.",
  },
];

const approachCards = [
  {
    icon: "�",
    title: "Podpora v osobnom raste, sebarozvoj, sebapoznanie",
    text: "Sprevádzam vás na ceste k hlbšiemu pochopeniu seba samých, aby ste mohli žiť vedomejšie a v súlade so svojimi hodnotami.",
    accentBg: "#EDF7ED",
  },
  {
    icon: "🆘",
    title: "Krízová intervencia, závislosti, toxické vzťahy",
    text: "Pomáham nájsť stabilitu a bezpečie v náročných obdobiach, keď sa zdá, že situácia prerástla vaše sily.",
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
    accentBg: "#FEF9E7",
  },
  {
    icon: "🤝",
    title: "Partnerské a pracovné vzťahy",
    text: "Podporujem hľadanie rovnováhy, hraníc a vzájomného rešpektu vo vzťahoch doma aj v pracovnom prostredí.",
    accentBg: "#EDF7ED",
  },
  {
    icon: "✨",
    title: "Pracovné zameranie, uplatnenie talentov, poslanie",
    text: "Spoločne objavíme vaše silné stránky a nájdeme cestu, po ktorej môže váš talent vykročiť.",
    accentBg: "#FEF9E7",
  },
  {
    icon: "🧠",
    title: "Rozvoj mysle a vedomia, rozvoj intuície",
    text: "Vediem k citlivejšiemu vnímaniu vlastného vnútorného hlasu a k vedomejšiemu rozhodovaniu.",
    accentBg: "#EAF6FB",
  },
  {
    icon: "🧘",
    title: "Autogénny tréning, relaxácia a meditácia",
    text: "Učím techniky, ktoré umožňujú rýchlejší návrat k vnútornému pokoju.",
    accentBg: "#EDF7ED",
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
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#EDF7ED",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 12 }}>🌱</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>VITAJTE V SPEKTRUM POCITOV</span>
            </div>

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
              Objímame{" "}
              <span style={{ color: "#F5C842" }}>slnko</span>{" "}
              aj{" "}
              <span style={{ color: "#5BC8C8" }}>dážď</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              Terapia pre deti so svežím, nádejným prístupom. Sprevádzame vašu rodinu každým ročným obdobím rastu — so srdcom a hrou.
            </p>

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
                Rezervovať hovor
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
                Naša sada nástrojov
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
                maxWidth: 420,
              }}
            >
              {/* SVG illustration as hero image placeholder */}
              <svg
                viewBox="0 0 420 460"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", display: "block" }}
              >
                {/* Sky */}
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#B8E8FF", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#FEF9E7", stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#90D870", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#6DBF50", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="420" height="460" fill="url(#skyGrad)" />
                {/* Sun */}
                <circle cx="340" cy="80" r="50" fill="#F5C842" opacity="0.9" />
                <circle cx="340" cy="80" r="65" fill="#F5C842" opacity="0.25" />
                {/* Clouds */}
                <ellipse cx="80" cy="100" rx="60" ry="35" fill="white" opacity="0.85" />
                <ellipse cx="130" cy="90" rx="50" ry="30" fill="white" opacity="0.85" />
                <ellipse cx="200" cy="130" rx="45" ry="25" fill="white" opacity="0.7" />
                {/* Rain drops */}
                <g fill="#5BC8C8" opacity="0.5">
                  <ellipse cx="60" cy="200" rx="3" ry="8" />
                  <ellipse cx="110" cy="220" rx="3" ry="8" />
                  <ellipse cx="160" cy="190" rx="3" ry="8" />
                  <ellipse cx="210" cy="215" rx="3" ry="8" />
                  <ellipse cx="85" cy="245" rx="3" ry="8" />
                  <ellipse cx="135" cy="260" rx="3" ry="8" />
                </g>
                {/* Grass */}
                <rect x="0" y="360" width="420" height="100" fill="url(#grassGrad)" />
                {/* Child body */}
                <ellipse cx="210" cy="400" rx="30" ry="15" fill="#4a9c45" opacity="0.3" />
                <rect x="195" y="310" width="30" height="80" rx="10" fill="#F5DEB3" />
                {/* Child head */}
                <circle cx="210" cy="295" r="26" fill="#F5DEB3" />
                {/* Hair */}
                <ellipse cx="210" cy="278" rx="26" ry="16" fill="#8B5E3C" />
                {/* Eyes */}
                <circle cx="202" cy="292" r="3" fill="#5C4033" />
                <circle cx="218" cy="292" r="3" fill="#5C4033" />
                {/* Smile */}
                <path d="M 203 302 Q 210 309 217 302" stroke="#5C4033" strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* Umbrella handle */}
                <line x1="210" y1="270" x2="210" y2="200" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round" />
                <path d="M 210 200 Q 212 215 225 215" stroke="#8B5E3C" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Umbrella canopy */}
                <path d="M 145 200 Q 175 165 210 162 Q 245 165 275 200 Z" fill="#F5C842" />
                <path d="M 145 200 Q 175 165 210 162 Q 245 165 275 200 Z" fill="none" stroke="#D4A820" strokeWidth="2" />
                {/* Umbrella ribs */}
                <line x1="210" y1="163" x2="145" y2="200" stroke="#D4A820" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="163" x2="275" y2="200" stroke="#D4A820" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="163" x2="210" y2="200" stroke="#D4A820" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="163" x2="177" y2="197" stroke="#D4A820" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="163" x2="243" y2="197" stroke="#D4A820" strokeWidth="1.5" opacity="0.6" />
                {/* Flowers */}
                <circle cx="80" cy="370" r="8" fill="#F5A0A0" />
                <circle cx="80" cy="362" r="4" fill="#F5C842" />
                <circle cx="340" cy="375" r="7" fill="#5BC8C8" />
                <circle cx="340" cy="368" r="4" fill="white" />
                {/* Boots */}
                <ellipse cx="202" cy="388" rx="10" ry="6" fill="#5BC8C8" />
                <ellipse cx="218" cy="388" rx="10" ry="6" fill="#5BC8C8" />
              </svg>
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
              Prieskumník pocitov
            </h2>
            <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
              Každý pocit má svoje miesto a hodnotu. Spolu ich spoznávame, vyjadrujeme a prijímame.
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
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: card.color }} />
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>{card.label}</span>
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

      {/* ── BIG HEARTS ── */}
      <section style={{ padding: "80px 24px", background: "#F5F6F0", position: "relative", overflow: "hidden" }}>
        {/* Decorative blobs */}
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "#5BC8C8", opacity: 0.08, top: -100, right: -100 }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#F5A0A0", opacity: 0.08, bottom: -80, left: -80 }} />

        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: 20,
            }}
          >
            Spolu objímeme{" "}
            <span style={{ color: "#5BC8C8" }}>slnko aj dážď</span>
          </h2>
          <div style={{ color: "#6B7280", fontSize: 17, lineHeight: 1.8, marginBottom: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ margin: 0 }}>
              Som tu pre všetkých, ktorí túžia po pochopení. Pre tých, ktorí si chcú lepšie porozumieť vo vlastnej situácii, aj pre tých, ktorí hľadajú cestu z trápení, vzťahových kríz či výchovných dilem.
            </p>
            <p style={{ margin: 0 }}>
              Nech práve prechádzate akýmkoľvek obdobím, budem vás sprevádzať s rešpektom a pokojom. Bez hodnotenia a bez tlaku na rýchle odpovede.
            </p>
            <p style={{ margin: 0, fontStyle: "italic", color: "#9CA3AF" }}>
              Pretože život nie je len jasná obloha. Sú v ňom aj prehánky, hmla aj vietor.
              Spolu môžeme nájsť spôsob, ako prečkať obdobie dažďov a znovu sa nadýchnuť, keď vyjde slnko.
            </p>
          </div>

          {/* Dot pagination */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F5C842" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F5A0A0" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#5BC8C8" }} />
          </div>
        </div>
      </section>

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
              Každý človek je iný — preto pracujem s celou šírkou tém, ktoré sa vás môžu dotýkať.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="approach-grid">
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
          @media (max-width: 1200px) { .approach-grid { grid-template-columns: repeat(2, 1fr) !important; } }
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
            Ste pripravení urobiť{" "}
            <span style={{ color: "#F5C842" }}>prvý krok?</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            Napíšte mi alebo rovno zavolajte, a vykročte po svojej vlastnej ceste ku krajším dňom, na ktorej vás budem rada sprevádzať.
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
