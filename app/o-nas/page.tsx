"use client";
import Link from "next/link";
import Image from "next/image";


const valuesCards = [
    { color: "#F5C842", bg: "#fdf5d6ff", label: "Rešpekt k jedinečnosti", text: "Každý príbeh je iný, každý z nás žije iným tempom. Vytváram priestor, kde môžete byť prijatí bez strachu z toho, že vás niekto bude posudzovať." },
    { color: "#5BC8C8", bg: "#EAF6FB", label: "Prepojenie telo – myseľ – vzťahy", text: "Vnímam človeka ako celok. To, čo prežívame vnútri, sa odráža v našom tele aj vo vzťahoch, a práve v tomto prepojení často nachádzame odpovede." },
    { color: "#F5A0A0", bg: "#FDF0F0", label: "Bezpečie a dôvera", text: "Skutočná zmena je možná tam, kde je na ňu bezpečný priestor. Mojou prioritou je vytvoriť prostredie, v ktorom môžete hovoriť otvorene a bez obáv." },
    { color: "#6DBF67", bg: "#EDF7ED", label: "Vedomý rast a vnútorná rovnováha", text: "Verím, že rovnováha neprichádza zvonka, ale vzniká v nás. Podporujem kroky, ktoré vedú k väčšiemu pokoju a dôvere v samého seba." },
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
                            {/* Portrait – next/image with lazy loading (below fold) */}
                            <Image
                                src="/therapist-portrait.webp"
                                alt="Mgr. Linda Stanislavová – psychologička a terapeutka"
                                width={500}
                                height={420}
                                loading="lazy"
                                sizes="(max-width: 900px) 100vw, 500px"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#1A1A1A", marginBottom: 20, lineHeight: 1.25 }}>
                            <span style={{ display: "block", fontSize: "clamp(16px, 2.2vw, 26px)", color: "#9CA3AF" }}>Mgr.</span>
                            <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 52px)" }}>Linda</span>
                            <span style={{ display: "block", fontSize: "clamp(16px, 2.2vw, 26px)", color: "#9CA3AF" }}>Stanislavová</span>
                        </h1>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                            {[
                                { label: "Základné školy", color: "#F5C842", bg: "#fdf5d6ff" },
                                { label: "Materské školy", color: "#5BC8C8", bg: "#EAF6FB" },
                                { label: "Mentálna aritmetika - Kid Genius", color: "#5BC8C8", bg: "#EAF6FB" },
                                { label: "Krízová intervencia", color: "#F5A0A0", bg: "#FDF0F0" },
                                { label: "Terapeutické metódy", color: "#6DBF67", bg: "#EDF7ED" },
                                { label: "Vision Extra Ocular", color: "#F5C842", bg: "#fdf5d6ff" },
                                { label: "Mimozmyslové vnímanie", color: "#5BC8C8", bg: "#EAF6FB" },
                                { label: "Theta Healing", color: "#6DBF67", bg: "#EDF7ED" },
                                { label: "Etikoterapia", color: "#F5A0A0", bg: "#FDF0F0" },
                            ].map((tag) => (
                                <span key={tag.label} style={{
                                    background: tag.bg,
                                    color: tag.color,
                                    borderRadius: 999,
                                    padding: "5px 14px",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    letterSpacing: "0.01em",
                                }}>
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                        <p style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                            Som skúsenou psychologičkou a lektorkou rozvoja mysle, vedomia a intuície. Venujem sa deťom, jednotlivcom, párom aj rodinám.<br /><br />
                            Verím, že vzťah, ktorý máme sami k sebe, ovplyvňuje celý náš život. Vo svojej práci sa aj preto zameriavam na rozvoj sebapoznania, rozšírenie vedomia, ako aj na psychosomatiku, teda citlivé prepojenie medzi telom, mysľou a správaním.
                        </p>
                        <div style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                            Pomáham harmonizovať rodinné vzťahy a podporujem otvorenú, rešpektujúcu komunikáciu. V partnerských vzťahoch vytváram bezpečný priestor pre porozumenie, blízkosť a obnovu dôvery. Rodičom pomáham pozrieť sa na výchovu detskými očami. <br /><br />Keď porozumieme tomu, čo sa deje pod povrchom, dokážeme prirodzene meniť aj to, čo sa deje navonok.
                            <br /><br />
                            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                                {[
                                    { text: "Emocionálne liečenie tela, mysle a duše.", color: "#F5A0A0", bg: "#FDF0F0" },
                                    { text: "Zvýšenie imunity organizmu.", color: "#6DBF67", bg: "#EDF7ED" },
                                    { text: "Uvoľnenie napätia, tráum, psychosomatických ťažkostí.", color: "#5BC8C8", bg: "#EAF6FB" },
                                    { text: "Pochopenie životných udalostí.", color: "#F5C842", bg: "#fdf5d6ff" },
                                    { text: "Sloboda byť samým sebou a autenticita.", color: "#6DBF67", bg: "#EDF7ED" },
                                ].map((item) => (
                                    <div key={item.text} style={{
                                        display: "flex", alignItems: "center", gap: 12,
                                        background: item.bg, borderRadius: 12, padding: "10px 16px",
                                    }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                                        <span style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.6 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                            <Link
                                href="/kontakt"
                                style={{
                                    background: "#6DBF67",
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
                                href="/kontakt"
                                style={{
                                    background: "transparent",
                                    color: "#6DBF67",
                                    borderRadius: 999,
                                    padding: "14px 28px",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: 600,
                                    border: "2px solid #6DBF67",
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
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: "80px 24px", background: "#e1ffd6ff" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
                            Moje hodnoty
                        </h2>
                        <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 600, margin: "0 auto" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="values-grid">
                        {valuesCards.map((card) => (
                            <div key={card.label} style={{ background: card.bg, borderRadius: 20, padding: "28px 22px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: card.color }} />
                                    <span style={{ fontWeight: 700, fontSize: 17, color: "#1A1A1A", lineHeight: 1.25 }}>{card.label}</span>
                                </div>
                                <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
