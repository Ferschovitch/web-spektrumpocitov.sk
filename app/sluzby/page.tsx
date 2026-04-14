"use client";
import Link from "next/link";

export default function SluzbyPage() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Spektrum Pocitov – Ako sa vyznať vo všetkých tých rozmanitých emóciách",
        provider: {
            "@type": "Person",
            name: "Mgr. Linda Stanislavová",
            url: "https://www.spektrumpocitov.sk/o-mne",
        },
        areaServed: { "@type": "City", name: "Bratislava" },
        url: "https://www.spektrumpocitov.sk/sluzby",
    };

    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />

            {/* ── Hero ── */}
            <section style={{ background: "white", padding: "80px 24px 72px" }}>
                <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                    <h1 style={{
                        fontFamily: "Playfair Display, Georgia, serif",
                        fontWeight: 700,
                        fontSize: "clamp(32px, 5vw, 56px)",
                        color: "#1A1A1A",
                        lineHeight: 1.2,
                        marginBottom: 20,
                    }}>
                        Služby {" "}
                        <span style={{ color: "#6DBF67", fontStyle: "italic" }}>
                        </span>
                    </h1>
                </div>
            </section>

            {/* ── Products ── */}
            <section style={{ padding: "80px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>

                    {/* ── Product 1: Konzultácia ── */}
                    <div style={{
                        background: "white",
                        borderRadius: 24,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        minHeight: 340,
                    }}
                        className="product-grid"
                    >
                        {/* Left accent */}
                        <div style={{
                            background: "linear-gradient(135deg, #fdf5d6ff 0%, #FFF8DC 100%)",
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>

                            <h2 style={{
                                fontFamily: "Playfair Display, Georgia, serif",
                                fontWeight: 700,
                                fontSize: "clamp(24px, 3vw, 36px)",
                                color: "#1A1A1A",
                                lineHeight: 1.25,
                                marginBottom: 16,
                            }}>
                                Konzultácia
                            </h2>
                            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7 }}>
                                Porozprávame sa a nastavíme si spoluprácu.
                            </p>
                        </div>

                        {/* Right */}
                        <div style={{
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 16,
                            textAlign: "center",
                        }}>

                            <Link
                                href="mailto:info@spektrumpocitov.sk"
                                style={{
                                    marginTop: 8,
                                    background: "#F5C842",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "12px 28px",
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    display: "inline-block",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.04)";
                                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(245,200,66,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Mám záujem o konzultáciu
                            </Link>
                        </div>
                    </div>

                    {/* ── Product 2: Tréning vybranej oblasti ── */}
                    <div style={{
                        background: "white",
                        borderRadius: 24,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        minHeight: 340,
                    }}
                        className="product-grid"
                    >
                        {/* Left accent */}
                        <div style={{
                            background: "linear-gradient(135deg, #FDF0F0 0%, #fae8e8 100%)",
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>

                            <h2 style={{
                                fontFamily: "Playfair Display, Georgia, serif",
                                fontWeight: 700,
                                fontSize: "clamp(24px, 3vw, 36px)",
                                color: "#1A1A1A",
                                lineHeight: 1.25,
                                marginBottom: 16,
                            }}>
                                Tréning vybranej oblasti
                            </h2>
                            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7 }}>
                                Cielený rozvoj konkrétnej zručnosti.
                            </p>
                        </div>

                        {/* Right */}
                        <div style={{
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 16,
                            textAlign: "center",
                        }}>

                            <Link
                                href="mailto:info@spektrumpocitov.sk"
                                style={{
                                    marginTop: 8,
                                    background: "#F5A0A0",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "12px 28px",
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    display: "inline-block",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.04)";
                                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(245,160,160,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Mám záujem o tréning
                            </Link>
                        </div>
                    </div>

                    {/* ── Product 3: Kurz rozvoja vedomia ── */}
                    <div style={{
                        background: "white",
                        borderRadius: 24,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                    }}>
                        {/* Header band */}
                        <div style={{
                            background: "linear-gradient(135deg, #EAF6FB 0%, #d4f0f0 100%)",
                            padding: "52px 56px 44px",
                        }}>

                            <h2 style={{
                                fontFamily: "Playfair Display, Georgia, serif",
                                fontWeight: 700,
                                fontSize: "clamp(26px, 3.5vw, 42px)",
                                color: "#1A1A1A",
                                lineHeight: 1.25,
                                marginBottom: 16,
                                maxWidth: 800,
                            }}>
                                Kurz rozvoja vedomia pre deti
                                <span style={{ display: "block", fontSize: "clamp(16px, 2vw, 22px)", color: "#5BC8C8", fontStyle: "italic", marginTop: 6 }}>
                                    Extraokulárne videnie
                                </span>
                                <span style={{ display: "block", fontSize: "clamp(14px, 2vw, 20px)", color: "#5BC8C8", fontStyle: "normal", marginTop: 8 }}>
                                    <span style={{ display: "block", marginBottom: 4 }}>Časť 1: Myseľ (10 lekcií)</span>
                                    <span style={{ display: "block", marginBottom: 12 }}>Časť 2: Emócie (10 lekcií)</span>
                                    <span style={{ display: "block", fontSize: "0.85em", color: "#6B7280" }}>Jednotlivé časti je možné absolvovať samostatne.</span>
                                </span>
                            </h2>
                            {/* Main benefit */}
                            <div style={{
                                background: "white",
                                borderRadius: 16,
                                padding: "20px 28px",
                                marginTop: 24,
                                borderLeft: "4px solid #5BC8C8",
                                maxWidth: 780,
                            }}>
                                <p style={{ color: "#1A1A1A", fontSize: 16, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                                    Dieťa získa prístup k vnútornému zdroju istoty a sebadôvery, trénuje svoju pozornosť a vytrvalosť. Zručnosti, ktoré dieťa získa, si môže nosiť po celý život a pozitívne ovplyvniť akúkoľvek tému vo svojom živote.
                                </p>
                            </div>
                        </div>

                        {/* Body – three columns */}
                        <div style={{ padding: "48px 56px 56px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 36 }} className="course-details-grid">

                            {/* Column 1 – What it resolves */}
                            <div>
                                <h3 style={{
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#1A1A1A",
                                    marginBottom: 16,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}>
                                    <span style={{ fontSize: 20 }}></span> Kurz pomáha pri ťažkostiach ako:
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {[
                                        "Strachy a nočné mory",
                                        "Plačlivosť a šikana",
                                        "Problémy v škole – učenie, čítanie, sústredenie",
                                        "Problémy v kolektíve",
                                        "Nízka sebadôvera",
                                        "Hyperaktivita",
                                        "Prekážky v športe",
                                        "Problémy s autoritou",
                                        "Problémy so stravovacími návykmi, ...",
                                    ].map((item) => (
                                        <div key={item} style={{
                                            display: "flex", alignItems: "flex-start", gap: 10,
                                            background: "#EAF6FB", borderRadius: 10, padding: "9px 14px",
                                        }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#5BC8C8", flexShrink: 0, marginTop: 6 }} />
                                            <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 – Benefits */}
                            <div>
                                <h3 style={{
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#1A1A1A",
                                    marginBottom: 16,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}>
                                    <span style={{ fontSize: 20 }}></span> Prínosy
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {[
                                        "Upokojenie a dôvera v seba a v život",
                                        "Lepšie rodinné a priateľské vzťahy",
                                        "Otvorenosť emóciám a schopnosť o nich komunikovať",
                                        "Samostatnosť a zodpovednosť",
                                        "Odchádzajú strachy a nočné mory",
                                        "Rýchlejšie učenie — škola, šport, hudba",
                                        "Rozvinutá myseľ, vedomie a intuícia",
                                        "Lepšie správanie doma, v škole aj v spoločnosti",
                                    ].map((item) => (
                                        <div key={item} style={{
                                            display: "flex", alignItems: "flex-start", gap: 10,
                                            background: "#EDF7ED", borderRadius: 10, padding: "9px 14px",
                                        }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#6DBF67", flexShrink: 0, marginTop: 6 }} />
                                            <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 3 – How it works */}
                            <div>
                                <h3 style={{
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#1A1A1A",
                                    marginBottom: 16,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}>
                                    <span style={{ fontSize: 20 }}></span> Ako prebieha
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {[
                                        {
                                            label: "10 lekcií",
                                            text: "Kurz 1 aj Kurz 2 obsahuje 10 lekcií, opakujúcich sa ideálne každý týždeň alebo každé 2 týždne — podľa vašich možností.",
                                            color: "#5BC8C8", bg: "#EAF6FB",
                                        },
                                        {
                                            label: "Jedna lekcia trvá 2 hodiny",
                                            text: "Prvú hodinu trávim s dieťaťom — učíme sa pracovať s maskou, ktorá zakrýva oči, čo umožňuje dieťaťu sústrediť sa.",
                                            color: "#6DBF67", bg: "#EDF7ED",
                                        },
                                        {
                                            label: "Práca s rodičmi",
                                            text: "Druhú hodinu konzultujeme s rodičmi dporúčania na udržanie pokroku, ktorý dieťa na lekcii dosiahlo.",
                                            color: "#F5C842", bg: "#fdf5d6ff",
                                        },
                                    ].map((step) => (
                                        <div key={step.label} style={{
                                            background: step.bg, borderRadius: 14, padding: "16px 18px",
                                        }}>
                                            <div style={{
                                                fontWeight: 700, fontSize: 14, color: step.color, marginBottom: 6,
                                            }}>
                                                {step.label}
                                            </div>
                                            <p style={{ color: "#374151", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                    <Link
                                        href="/kontakt"
                                        style={{
                                            marginTop: 8,
                                            background: "#5BC8C8",
                                            color: "white",
                                            borderRadius: 999,
                                            padding: "13px 28px",
                                            textDecoration: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            display: "inline-block",
                                            textAlign: "center",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.04)";
                                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(91,200,200,0.4)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        Mám záujem o kurz
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Product 4: Kurz rozvoja vedomia  ── */}
                    <div style={{
                        background: "white",
                        borderRadius: 24,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                    }}>
                        {/* Header band */}
                        <div style={{
                            background: "linear-gradient(135deg, #EAF6FB 0%, #d4f0f0 100%)",
                            padding: "52px 56px 44px",
                        }}>

                            <h2 style={{
                                fontFamily: "Playfair Display, Georgia, serif",
                                fontWeight: 700,
                                fontSize: "clamp(26px, 3.5vw, 42px)",
                                color: "#1A1A1A",
                                lineHeight: 1.25,
                                marginBottom: 16,
                                maxWidth: 800,
                            }}>
                                Kurz rozvoja vedomia pre dospelých
                                <span style={{ display: "block", fontSize: "clamp(16px, 2vw, 22px)", color: "#5BC8C8", fontStyle: "italic", marginTop: 6 }}>
                                    Extraokulárne videnie
                                </span>
                                <span style={{ display: "block", fontSize: "clamp(14px, 2vw, 20px)", color: "#5BC8C8", fontStyle: "normal", marginTop: 8 }}>
                                    <span style={{ display: "block", marginBottom: 4 }}>Časť 1: Myseľ (10 lekcií)</span>
                                    <span style={{ display: "block", marginBottom: 12 }}>Časť 2: Emócie (10 lekcií)</span>
                                    <span style={{ display: "block", fontSize: "0.85em", color: "#6B7280" }}>Jednotlivé časti je možné absolvovať samostatne.</span>
                                </span>
                            </h2>
                            {/* Placeholder Content */}
                            <div style={{ marginTop: 24 }}>
                                <p style={{ color: "#1A1A1A", fontSize: 16, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                                    Na obsahu sa pracuje
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}
