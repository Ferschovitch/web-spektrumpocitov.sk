"use client";
import Link from "next/link";

export default function SluzbyPage({ content = {} }: { content?: any }) {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Spektrum Pocitov – spojenie tradičnej a alternatívnej psychológie",
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
                        {content.pageTitle || "Služby"} {" "}
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
                                {content.konzultaciaTitle || "Konzultácia"}
                            </h2>
                            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                                {content.konzultaciaDesc || "Porozprávame sa a nastavíme si spoluprácu."}
                            </p>

                            {/* Elegant divider */}
                            <div style={{
                                height: 1,
                                background: "rgba(0, 0, 0, 0.08)",
                                margin: "20px 0 16px"
                            }} />

                            {/* Price information */}
                            <div>
                                <div style={{
                                    fontSize: "clamp(18px, 2.2vw, 22px)",
                                    fontWeight: 800,
                                    color: "#1A1A1A",
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    marginBottom: 6
                                }}>
                                    {content.konzultaciaPrice !== undefined ? content.konzultaciaPrice : "Cena od 50 €/hod."}
                                </div>
                                <div style={{
                                    color: "#5C616C",
                                    fontSize: 13,
                                    lineHeight: 1.6,
                                    fontWeight: 500
                                }}>
                                    {content.konzultaciaPriceDetails !== undefined ? content.konzultaciaPriceDetails : "podľa zamerania a rozsahu práce. Presná cena závisí od rozsahu a charakteru stretnutia. Dohodneme si ju vopred, ešte pred začatím spolupráce."}
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div style={{
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}>
                            <Link
                                href="/kontakt"
                                style={{
                                    background: "#F5C842",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "14px 36px",
                                    textDecoration: "none",
                                    fontSize: 15,
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
                                {content.konzultaciaBtn || "Mám záujem o konzultáciu"}
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
                                {content.treningTitle || "Tréning vybranej oblasti"}
                            </h2>
                            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                                {content.treningDesc || "Cielený rozvoj konkrétnej zručnosti."}
                            </p>

                            {/* Elegant divider */}
                            <div style={{
                                height: 1,
                                background: "rgba(0, 0, 0, 0.08)",
                                margin: "20px 0 16px"
                            }} />

                            {/* Price information */}
                            <div>
                                <div style={{
                                    fontSize: "clamp(18px, 2.2vw, 22px)",
                                    fontWeight: 800,
                                    color: "#1A1A1A",
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    marginBottom: 6
                                }}>
                                    {content.treningPrice !== undefined ? content.treningPrice : "Cena od 70 €/hod."}
                                </div>
                                <div style={{
                                    color: "#5C616C",
                                    fontSize: 13,
                                    lineHeight: 1.6,
                                    fontWeight: 500
                                }}>
                                    {content.treningPriceDetails !== undefined ? content.treningPriceDetails : "podľa zamerania a rozsahu práce. Presná cena závisí od rozsahu a charakteru stretnutia. Dohodneme si ju vopred, ešte pred začatím spolupráce."}
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div style={{
                            padding: "52px 48px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}>
                            <Link
                                href="/kontakt"
                                style={{
                                    background: "#F5A0A0",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "14px 36px",
                                    textDecoration: "none",
                                    fontSize: 15,
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
                                {content.treningBtn || "Mám záujem o tréning"}
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
                                {content.detiTitle || "Kurz rozvoja vedomia pre deti"}
                                <span style={{ display: "block", fontSize: "clamp(16px, 2vw, 22px)", color: "#5BC8C8", fontStyle: "italic", marginTop: 6 }}>
                                    {content.detiSubtitle || "Extraokulárne videnie"}
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
                                    {content.detiDesc || "Dieťa získa prístup k vnútornému zdroju istoty a sebadôvery, trénuje svoju pozornosť a vytrvalosť. Zručnosti, ktoré dieťa získa, si môže nosiť po celý život a pozitívne ovplyvniť akúkoľvek tému vo svojom živote."}
                                </p>
                            </div>
                        </div>

                        {/* Body – three columns */}
                        <div style={{ padding: "48px 56px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 36 }} className="course-details-grid">

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
                                    {(content.detiHelpsWith || [
                                        { text: "Strachy a nočné mory" },
                                        { text: "Plačlivosť a šikana" },
                                        { text: "Problémy v škole – učenie, čítanie, sústredenie" },
                                        { text: "Problémy v kolektíve" },
                                        { text: "Nízka sebadôvera" },
                                        { text: "Hyperaktivita" },
                                        { text: "Prekážky v športe" },
                                        { text: "Problémy s autoritou" },
                                        { text: "Problémy so stravovacími návykmi, ..." },
                                    ]).map((item: any, i: number) => (
                                        <div key={i} style={{
                                            display: "flex", alignItems: "flex-start", gap: 10,
                                            background: "#EAF6FB", borderRadius: 10, padding: "9px 14px",
                                        }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#5BC8C8", flexShrink: 0, marginTop: 6 }} />
                                            <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5 }}>{item.text}</span>
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
                                    {(content.detiBenefits || [
                                        { text: "Upokojenie a dôvera v seba a v život" },
                                        { text: "Lepšie rodinné a priateľské vzťahy" },
                                        { text: "Otvorenosť emóciám a schopnosť o nich komunikovať" },
                                        { text: "Samostatnosť a zodpovednosť" },
                                        { text: "Odchádzajú strachy a nočné mory" },
                                        { text: "Rýchlejšie učenie — škola, šport, hudba" },
                                        { text: "Rozvinutá myseľ, vedomie a intuícia" },
                                        { text: "Lepšie správanie doma, v škole aj v spoločnosti" },
                                    ]).map((item: any, i: number) => (
                                        <div key={i} style={{
                                            display: "flex", alignItems: "flex-start", gap: 10,
                                            background: "#EDF7ED", borderRadius: 10, padding: "9px 14px",
                                        }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#6DBF67", flexShrink: 0, marginTop: 6 }} />
                                            <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5 }}>{item.text}</span>
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
                                    {(content.detiHowItWorks || [
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
                                    ]).map((step: any) => (
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
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Price and CTA Button (Identical in style and centering to the second course) */}
                        <div style={{ padding: "0 56px 56px", marginTop: 32 }}>
                            <div style={{ 
                                background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)", 
                                border: "2px solid #5BC8C8",
                                borderRadius: 20,
                                padding: "24px 32px",
                                maxWidth: 480,
                                margin: "0 auto",
                                textAlign: "center",
                                boxShadow: "0 4px 16px rgba(91,200,200,0.08)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    background: "#5BC8C8",
                                    color: "white",
                                    fontSize: 10,
                                    fontWeight: 800,
                                    letterSpacing: "0.05em",
                                    padding: "3px 14px",
                                    borderRadius: "0 0 8px 8px",
                                    textTransform: "uppercase"
                                }}>
                                    Cena & Zľava
                                </div>

                                <div style={{ marginTop: 8 }}>
                                    <div style={{
                                        fontSize: "clamp(20px, 2.5vw, 24px)",
                                        fontWeight: 800,
                                        color: "#1A1A1A",
                                        fontFamily: "Playfair Display, Georgia, serif",
                                        lineHeight: 1.15,
                                    }}>
                                        {content.detiPrice || "100 € / 1 lekcia (2 hodiny)"}
                                    </div>
                                </div>

                                <div style={{
                                    height: 1,
                                    background: "linear-gradient(90deg, transparent, #E5E7EB, transparent)",
                                    margin: "14px 0"
                                }} />

                                <div style={{
                                    background: "rgba(91, 200, 200, 0.08)",
                                    borderRadius: 12,
                                    padding: "12px 16px",
                                    border: "1px dashed rgba(91, 200, 200, 0.4)"
                                }}>
                                    <div style={{
                                        fontSize: 11,
                                        color: "#0E7490",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.02em",
                                        marginBottom: 4
                                    }}>
                                        Zvýhodnený balík
                                    </div>
                                    <div style={{
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                        fontWeight: 600,
                                        color: "#4B5563"
                                    }}>
                                        {content.detiPriceDiscount || "Pri platbe za celý kurz (10 lekcií = 20 hodín) je cena 900 €."}
                                    </div>
                                </div>
                            </div>

                            <div style={{ textAlign: "center", marginTop: 32 }}>
                                <Link
                                    href="/kontakt"
                                    style={{
                                        background: "#5BC8C8",
                                        color: "white",
                                        borderRadius: 999,
                                        padding: "14px 40px",
                                        textDecoration: "none",
                                        fontSize: 15,
                                        fontWeight: 700,
                                        display: "inline-block",
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.04)";
                                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(91,200,200,0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {content.detiKurzBtn || "Mám záujem o kurz"}
                                </Link>
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
                                {content.dospeliTitle || "Kurz rozvoja vedomia pre dospelých"}
                                <span style={{ display: "block", fontSize: "clamp(16px, 2vw, 22px)", color: "#5BC8C8", fontStyle: "italic", marginTop: 6 }}>
                                    {content.dospeliSubtitle || "Extraokulárne videnie"}
                                </span>
                                <span style={{ display: "block", fontSize: "clamp(14px, 2vw, 20px)", color: "#5BC8C8", fontStyle: "normal", marginTop: 8 }}>
                                    <span style={{ display: "block", marginBottom: 4 }}>Časť 1: Myseľ (10 lekcií)</span>
                                    <span style={{ display: "block", marginBottom: 12 }}>Časť 2: Emócie (10 lekcií)</span>
                                    <span style={{ display: "block", fontSize: "0.85em", color: "#6B7280" }}>Jednotlivé časti je možné absolvovať samostatne.</span>
                                </span>
                            </h2>
                            {/* Main Intro */}
                            <div style={{
                                background: "white",
                                borderRadius: 16,
                                padding: "20px 28px",
                                marginTop: 24,
                                borderLeft: "4px solid #5BC8C8",
                                maxWidth: 780,
                            }}>
                                <p style={{ color: "#1A1A1A", fontSize: 16, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                                    {content.dospeliDesc || "Smerujeme k sebapoznaniu, seba-vedomiu, sebadôvere – teda dôvere v našu intuíciu."}
                                </p>
                            </div>
                        </div>

                        {/* Body – Intro & Process */}
                        <div style={{ padding: "48px 56px 24px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48 }} className="course-details-grid">
                                <div>
                                    <h3 style={{
                                        fontFamily: "Playfair Display, Georgia, serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#1A1A1A",
                                        marginBottom: 20,
                                    }}>
                                        Prebudenie vnútornej sily a intuície
                                    </h3>
                                    {Array.isArray(content.dospeliIntro) ? (
                                        content.dospeliIntro.map((item: any, i: number) => (
                                            <p key={i} style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                                                {item.text}
                                            </p>
                                        ))
                                    ) : (
                                        <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                                            {content.dospeliIntro}
                                        </p>
                                    )}
                                    <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8 }}>
                                        {content.dospeliTraining}
                                    </p>
                                </div>

                                <div>
                                    <h3 style={{
                                        fontFamily: "Playfair Display, Georgia, serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#1A1A1A",
                                        marginBottom: 20,
                                    }}>
                                        Prínosy kurzu
                                    </h3>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        {(content.dospeliBenefits || []).map((item: any, i: number) => (
                                            <div key={i} style={{
                                                display: "flex", alignItems: "flex-start", gap: 12,
                                                background: "#EDF7ED", borderRadius: 12, padding: "12px 16px",
                                            }}>
                                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6DBF67", flexShrink: 0, marginTop: 7 }} />
                                                <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Outcomes & Support */}
                        <div style={{ padding: "0 56px 56px" }}>
                            <div style={{ 
                                background: "#F9FAFB", 
                                borderRadius: 20, 
                                padding: "40px",
                                border: "1px solid #E5E7EB"
                            }}>
                                <h3 style={{
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#1A1A1A",
                                    marginBottom: 16,
                                }}>
                                    Čo získate v bežnom živote
                                </h3>
                                <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                                    {content.dospeliOutcomes}
                                </p>
                                
                                <div style={{ 
                                    background: "#EAF6FB", 
                                    borderRadius: 14, 
                                    padding: "20px 24px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    marginTop: 32
                                }}>
                                    <div style={{ fontSize: 24 }}>💡</div>
                                    <p style={{ color: "#0E7490", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                        {content.dospeliSupport}
                                    </p>
                                </div>

                                <div style={{ 
                                    background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)", 
                                    border: "2px solid #5BC8C8",
                                    borderRadius: 20,
                                    padding: "24px 32px",
                                    maxWidth: 480,
                                    margin: "32px auto 0",
                                    textAlign: "center",
                                    boxShadow: "0 4px 16px rgba(91,200,200,0.08)",
                                    position: "relative",
                                    overflow: "hidden"
                                }}>
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        background: "#5BC8C8",
                                        color: "white",
                                        fontSize: 10,
                                        fontWeight: 800,
                                        letterSpacing: "0.05em",
                                        padding: "3px 14px",
                                        borderRadius: "0 0 8px 8px",
                                        textTransform: "uppercase"
                                    }}>
                                        Cena & Zľava
                                    </div>

                                    <div style={{ marginTop: 8 }}>
                                        <div style={{
                                            fontSize: "clamp(20px, 2.5vw, 24px)",
                                            fontWeight: 800,
                                            color: "#1A1A1A",
                                            fontFamily: "Playfair Display, Georgia, serif",
                                            lineHeight: 1.15,
                                        }}>
                                            {content.dospeliPrice || "100 € / 1 lekcia (2 hodiny)"}
                                        </div>
                                    </div>

                                    <div style={{
                                        height: 1,
                                        background: "linear-gradient(90deg, transparent, #E5E7EB, transparent)",
                                        margin: "14px 0"
                                    }} />

                                    <div style={{
                                        background: "rgba(91, 200, 200, 0.08)",
                                        borderRadius: 12,
                                        padding: "12px 16px",
                                        border: "1px dashed rgba(91, 200, 200, 0.4)"
                                    }}>
                                        <div style={{
                                            fontSize: 11,
                                            color: "#0E7490",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.02em",
                                            marginBottom: 4
                                        }}>
                                            Zvýhodnený balík
                                        </div>
                                        <div style={{
                                            fontSize: 13,
                                            lineHeight: 1.6,
                                            fontWeight: 600,
                                            color: "#4B5563"
                                        }}>
                                            {content.dospeliPriceDiscount || "Pri platbe za celý kurz (10 lekcií = 20 hodín) je cena 900 €."}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ textAlign: "center", marginTop: 32 }}>
                                    <Link
                                        href="/kontakt"
                                        style={{
                                            background: "#5BC8C8",
                                            color: "white",
                                            borderRadius: 999,
                                            padding: "14px 40px",
                                            textDecoration: "none",
                                            fontSize: 15,
                                            fontWeight: 700,
                                            display: "inline-block",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.04)";
                                            e.currentTarget.style.boxShadow = "0 8px 25px rgba(91,200,200,0.4)";
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
                </div>
            </section>




        </div>
    );
}
