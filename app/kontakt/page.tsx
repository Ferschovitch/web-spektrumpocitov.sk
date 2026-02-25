"use client";
import { useState } from "react";

export default function ContactPage() {
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "white", padding: "64px 24px 48px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>📬 KONTAKT</span>
                    </div>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>
                        Začnime spolu už dnes
                    </h1>
                    <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 500 }}>
                        Máte otázky alebo si chcete rezervovať konzultáciu? <br />Napíšte mi a ja vám odpoviem.
                    </p>
                </div>
            </section>

            {/* Contact info */}
            <section style={{ maxWidth: 600, margin: "0 auto", padding: "64px 24px" }}>


                {[
                    { icon: "📧", label: "E-mail", value: "info@spektrumpocitov.sk", href: "mailto:info@spektrumpocitov.sk" },
                    { icon: "📞", label: "Telefón", value: "+421 908 500 266", href: "tel:+421908500266" },
                    { icon: "📍", label: "Adresa", value: "Bratislava", href: null },
                ].map((item) => (
                    <div
                        key={item.label}
                        style={{
                            display: "flex",
                            gap: 16,
                            alignItems: "flex-start",
                            marginBottom: 20,
                            background: "white",
                            borderRadius: 16,
                            padding: "20px 24px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                        }}
                    >
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: "#EDF7ED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                            {item.icon}
                        </div>
                        <div>
                            <p style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</p>
                            {item.href ? (
                                <a href={item.href} style={{ color: "#1A1A1A", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>{item.value}</a>
                            ) : (
                                <p style={{ color: "#1A1A1A", margin: 0, fontSize: 16, fontWeight: 500 }}>{item.value}</p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Partner links */}
                <div style={{ marginTop: 16 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>Užitočné odkazy</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {[
                            { title: "Kid Genius", url: "https://www.kidgenius.sk/", subtitle: "Lektorka a psychologička", color: "#F5C842", bg: "#fdf5d6ff", icon: "🧒" },
                            { title: "Světladíl", url: "https://www.svetladil.cz/", subtitle: "Lektorka extraokulárneho videnia", color: "#5BC8C8", bg: "#EAF6FB", icon: "✨" },
                            { title: "OZ Pre detské hlavičky", url: null, subtitle: "Členka združenia", color: "#F5A0A0", bg: "#FDF0F0", icon: "🧠", tooltip: "OZ, ktoré sa zaoberá podporou vzdelávania a rozvoja detí, aj so špeciálnymi potrebami." },
                        ].map((link) => (
                            <div key={link.title} style={{ position: "relative" }}>
                                <a
                                    href={link.url ?? undefined}
                                    target={link.url ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    onClick={link.tooltip ? (e) => { e.preventDefault(); setOpenTooltip(openTooltip === link.title ? null : link.title); } : undefined}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14,
                                        background: "white",
                                        borderRadius: 16,
                                        padding: "16px 24px",
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                                        textDecoration: "none",
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                        borderLeft: `4px solid ${link.color}`,
                                        cursor: link.tooltip ? "pointer" : "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                                    }}
                                >
                                    <div style={{ width: 40, height: 40, borderRadius: 10, background: link.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                                        {link.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#1A1A1A" }}>{link.title}</p>
                                        <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF" }}>{link.subtitle}</p>
                                    </div>
                                    {link.url && <span style={{ color: "#D1D5DB", fontSize: 18 }}>↗</span>}
                                    {link.tooltip && <span style={{ color: "#D1D5DB", fontSize: 16 }}>💬</span>}
                                </a>
                                {link.tooltip && openTooltip === link.title && (
                                    <div style={{
                                        marginTop: 8,
                                        background: "#1A1A1A",
                                        color: "white",
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                        borderRadius: 12,
                                        padding: "12px 16px",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                                        animation: "fadeSlideIn 0.18s ease",
                                    }}>
                                        {link.tooltip}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
