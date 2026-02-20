import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "O nás – Spektrum Pocitov",
    description: "Spoznajte terapeutov Spektrum Pocitov a náš prístup k detskej a rodinnej terapii.",
};

const valuesCards = [
    { color: "#F5C842", bg: "#FEF9E7", label: "Bezpečnosť", text: "Každé dieťa si zaslúži priestor, kde sa môže cítiť úplne bezpečne — bez súdenia a s plným prijatím." },
    { color: "#5BC8C8", bg: "#EAF6FB", label: "Autentickosť", text: "Veríme v skutočné prepojenie — s deťmi, s rodičmi, aj s procesom. Žiadne masky, len úprimná prítomnosť." },
    { color: "#F5A0A0", bg: "#FDF0F0", label: "Radosť", text: "Hra, smiech a ľahkosť sú rovnako terapeutické ako hlboké rozhovory. Radosť je súčasťou liečenia." },
    { color: "#6DBF67", bg: "#EDF7ED", label: "Rast", text: "Veríme, že každý má kapacitu na zmenu a rast — deti, rodičia aj celé rodiny. Sprevádzame každý krok." },
];

export default function AboutPage() {
    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Hero bio */}
            <section style={{ background: "white", padding: "80px 24px" }}>
                <div
                    style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
                    className="about-hero-grid"
                >
                    {/* Photo */}
                    <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "#F5C842", opacity: 0.15, top: -30, left: -30 }} />
                        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "#5BC8C8", opacity: 0.12, bottom: 0, right: -20 }} />
                        <div
                            style={{
                                position: "relative",
                                borderRadius: 24,
                                overflow: "hidden",
                                boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
                                background: "#EDF7ED",
                                height: 420,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Therapist SVG placeholder */}
                            <svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                                <defs>
                                    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: "#EDF7ED" }} />
                                        <stop offset="100%" style={{ stopColor: "#D4EDDA" }} />
                                    </linearGradient>
                                </defs>
                                <rect width="400" height="420" fill="url(#bgGrad2)" />
                                {/* Body */}
                                <rect x="140" y="250" width="120" height="150" rx="20" fill="#5BC8C8" />
                                {/* Neck */}
                                <rect x="183" y="220" width="34" height="40" rx="8" fill="#F5DEB3" />
                                {/* Head */}
                                <circle cx="200" cy="190" r="60" fill="#F5DEB3" />
                                {/* Hair */}
                                <ellipse cx="200" cy="145" rx="60" ry="35" fill="#8B5E3C" />
                                <ellipse cx="150" cy="175" rx="22" ry="40" fill="#8B5E3C" />
                                <ellipse cx="250" cy="175" rx="22" ry="40" fill="#8B5E3C" />
                                {/* Eyes */}
                                <ellipse cx="182" cy="185" rx="8" ry="9" fill="white" />
                                <ellipse cx="218" cy="185" rx="8" ry="9" fill="white" />
                                <circle cx="183" cy="186" r="5" fill="#5C4033" />
                                <circle cx="219" cy="186" r="5" fill="#5C4033" />
                                <circle cx="185" cy="184" r="2" fill="white" />
                                <circle cx="221" cy="184" r="2" fill="white" />
                                {/* Smile */}
                                <path d="M 185 205 Q 200 218 215 205" stroke="#C0785A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                {/* Cheeks */}
                                <ellipse cx="168" cy="200" rx="12" ry="8" fill="#F5A0A0" opacity="0.5" />
                                <ellipse cx="232" cy="200" rx="12" ry="8" fill="#F5A0A0" opacity="0.5" />
                                {/* Arms */}
                                <ellipse cx="125" cy="300" rx="22" ry="60" rx2="22" fill="#5BC8C8" transform="rotate(-10 125 300)" />
                                <ellipse cx="275" cy="300" rx="22" ry="60" rx2="22" fill="#5BC8C8" transform="rotate(10 275 300)" />
                                {/* Hands */}
                                <circle cx="108" cy="355" r="18" fill="#F5DEB3" />
                                <circle cx="292" cy="355" r="18" fill="#F5DEB3" />
                                {/* Heart in hands */}
                                <path d="M 196 365 C 196 355 187 350 183 355 C 179 360 183 368 196 378 C 209 368 213 360 209 355 C 205 350 196 355 196 365 Z" fill="#F5A0A0" opacity="0.7" />
                                {/* Badge / name tag */}
                                <rect x="170" y="270" width="60" height="35" rx="6" fill="white" opacity="0.8" />
                                <text x="200" y="288" textAnchor="middle" fontSize="8" fill="#1A1A1A" fontWeight="bold">Mgr. Jana</text>
                                <text x="200" y="299" textAnchor="middle" fontSize="7" fill="#6B7280">Terapeutka</text>
                            </svg>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>🌿 SPOZNAJTE NÁS</span>
                        </div>
                        <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 20, lineHeight: 1.2 }}>
                            Mgr. Jana Horáková
                        </h1>
                        <p style={{ color: "#6DBF67", fontSize: 15, fontWeight: 600, marginBottom: 20 }}>
                            Detská a rodinná terapeutka | Herná terapia | EMDR
                        </p>
                        <p style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                            Som certifikovaná detská a rodinná terapeutka s viac ako 8 rokmi skúseností. Verím, že každé dieťa v sebe nesie nesmiernu vnútornú múdrosť — a mojou úlohou je pomôcť jej zasviatiť.
                        </p>
                        <p style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                            Špecializujem sa na herná terapiu, detskú úzkosť, reguláciu emócií a rodinné poradenstvo. Pracujem s deťmi vo veku 3–16 rokov a ich rodinami s hlbokým rešpektom k ich jedinečnej ceste.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                            {["Herná terapia", "EMDR", "Úzkosť u detí", "Rodinné poradenstvo", "Emocionálna regulácia"].map((tag) => (
                                <span key={tag} style={{ background: "#F5F6F0", color: "#4B5563", borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href="/kontakt"
                            style={{ background: "#6DBF67", color: "white", borderRadius: 999, padding: "14px 28px", textDecoration: "none", fontSize: 15, fontWeight: 700, display: "inline-block" }}
                        >
                            Kontaktovať Janu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: "80px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
                            Naše hodnoty
                        </h2>
                        <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
                            Tieto princípy formujú každú terapeutickú hodinu, každý rozhovor a každý vzťah.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="values-grid">
                        {valuesCards.map((card) => (
                            <div key={card.label} style={{ background: card.bg, borderRadius: 20, padding: "28px 22px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: card.color }} />
                                    <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>{card.label}</span>
                                </div>
                                <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
          @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 900px) { .about-hero-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}
