"use client";
import { useState, useEffect } from "react";

export default function ContactPage({ content = {} }: { content?: any }) {
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const [originUrl, setOriginUrl] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setOriginUrl(window.location.origin + window.location.pathname + "?success=true");
            if (window.location.search.includes("success=true")) {
                setStatus("success");
                window.history.replaceState(null, "", window.location.pathname);
            }
        }
    }, []);


    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "white", padding: "64px 24px 48px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>📬 KONTAKT</span>
                    </div>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>
                        {content.title || "Začnime spolu už dnes"}
                    </h1>
                    <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 500 }}>
                        {content.subtitle || "Máte otázky alebo si chcete rezervovať konzultáciu? Tak napíšte alebo zavolajte."}
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px", display: "grid", gap: 64 }} className="contact-grid">
                
                {/* Form Column */}
                <div>
                    <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", marginBottom: 24 }}>
                        {content.formTitle || "Napíšte mi"}
                    </h2>
                    
                    {status === "success" ? (
                        <div style={{ background: "#EDF7ED", border: "1px solid #6DBF67", color: "#4a9c45", padding: "24px", borderRadius: 16, fontWeight: 500, textAlign: "center", fontSize: 18 }}>
                            Vaša správa bola odoslaná.
                        </div>
                    ) : (
                        <form action="https://formsubmit.co/info@spektrumpocitov.sk" method="POST" onSubmit={() => setStatus("submitting")} style={{ display: "flex", flexDirection: "column", gap: 20, background: "white", padding: "36px 32px", borderRadius: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                            {originUrl && <input type="hidden" name="_next" value={originUrl} />}
                            <input type="hidden" name="_subject" value="Nová správa z webu Spektrum Pocitov" />
                            <input type="hidden" name="_template" value="box" />
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                                <div>
                                    <label htmlFor="name" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Meno *</label>
                                    <input type="text" id="name" name="name" required style={{ width: "100%", boxSizing: "border-box", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 16px", fontSize: 15, outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#6DBF67"; e.target.style.boxShadow = "0 0 0 3px rgba(109,191,103,0.15)"; }} onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }} />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>E-mail *</label>
                                    <input type="email" id="email" name="email" required style={{ width: "100%", boxSizing: "border-box", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 16px", fontSize: 15, outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#6DBF67"; e.target.style.boxShadow = "0 0 0 3px rgba(109,191,103,0.15)"; }} onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }} />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="phone" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Telefónné číslo</label>
                                <input type="tel" id="phone" name="phone" style={{ width: "100%", boxSizing: "border-box", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 16px", fontSize: 15, outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#6DBF67"; e.target.style.boxShadow = "0 0 0 3px rgba(109,191,103,0.15)"; }} onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }} />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Správa *</label>
                                <textarea id="message" name="message" required rows={4} style={{ width: "100%", boxSizing: "border-box", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 16px", fontSize: 15, resize: "vertical", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#6DBF67"; e.target.style.boxShadow = "0 0 0 3px rgba(109,191,103,0.15)"; }} onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }}></textarea>
                            </div>

                            {status === "error" && (
                                <div style={{ color: "#ef4444", fontSize: 14 }}>
                                    Vyskytla sa chyba pri odosielaní. Skúste to prosím znova, alebo mi napíšte priamo na e-mail.
                                </div>
                            )}

                            <button type="submit" disabled={status === "submitting"} style={{ background: "#6DBF67", color: "white", border: "none", borderRadius: 999, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: status === "submitting" ? "not-allowed" : "pointer", opacity: status === "submitting" ? 0.7 : 1, transition: "transform 0.2s, box-shadow 0.2s", alignSelf: "flex-start", marginTop: 8 }} onMouseEnter={(e) => { if (status !== "submitting") { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(109,191,103,0.3)"; } }} onMouseLeave={(e) => { if (status !== "submitting") { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; } }}>
                                {status === "submitting" ? "Odosielanie..." : "Odoslať"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Info Column */}
                <div>
                    <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", marginBottom: 24, marginTop: 12 }}>
                        Kontaktné údaje
                    </h2>
                    {[
                        { icon: "📧", label: "E-mail", value: content.email || "info@spektrumpocitov.sk", href: `mailto:${content.email || "info@spektrumpocitov.sk"}` },
                        { icon: "📞", label: "Telefón", value: content.phone || "+421 908 500 266", href: `tel:${(content.phone || "+421 908 500 266").replace(/\s/g, "")}` },
                        { icon: "📍", label: "Adresa", value: content.address || "Bratislava", href: null },
                    ].map((item: any, i: number) => (
                        <div
                            key={i}
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
                    <div style={{ marginTop: 24 }}>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>Užitočné odkazy</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {(content.partnerLinks || [
                                { title: "Světladíl", url: "https://www.svetladil.cz/", subtitle: "", color: "#5BC8C8", bg: "#EAF6FB", icon: "✨" },
                                { title: "OZ Pre detské hlavičky", url: "https://www.facebook.com/profile.php?id=61574330332603", subtitle: "", color: "#F5A0A0", bg: "#FDF0F0", icon: "" },
                            ]).map((link: { title: string; url: string; subtitle: string; color: string; bg: string; icon: string; tooltip?: string }, i: number) => (
                                <div key={i} style={{ position: "relative" }}>
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
                </div>
            </section>
            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* Media query for grid layout */
                @media (min-width: 900px) {
                    .contact-grid {
                        grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
                    }
                }
                @media (max-width: 899px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
