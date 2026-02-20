"use client";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 18px",
        borderRadius: 12,
        border: "1.5px solid #E5E7EB",
        fontSize: 15,
        color: "#1A1A1A",
        background: "white",
        outline: "none",
        transition: "border-color 0.2s",
        fontFamily: "Inter, system-ui, sans-serif",
    };

    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "white", padding: "64px 24px 48px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>📬 KONTAKT</span>
                    </div>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>
                        Začnime spolu
                    </h1>
                    <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 500 }}>
                        Máte otázky alebo chcete rezervovať konzultáciu? Napíšte nám — odpovieme do 24 hodín.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="contact-grid">
                    {/* Form */}
                    <div style={{ background: "white", borderRadius: 24, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", marginBottom: 28 }}>
                            Napíšte nám
                        </h2>

                        {status === "success" && (
                            <div style={{ background: "#EDF7ED", borderRadius: 12, padding: "16px 20px", marginBottom: 24, display: "flex", gap: 12, alignItems: "center" }}>
                                <span style={{ fontSize: 20 }}>✅</span>
                                <div>
                                    <p style={{ fontWeight: 600, color: "#1A1A1A", margin: 0, fontSize: 15 }}>Správa odoslaná!</p>
                                    <p style={{ color: "#4B5563", margin: 0, fontSize: 14 }}>Správa bola úspešne odoslaná. Ozveme sa vám čoskoro.</p>
                                </div>
                            </div>
                        )}

                        {status === "error" && (
                            <div style={{ background: "#FDF0F0", borderRadius: 12, padding: "16px 20px", marginBottom: 24, display: "flex", gap: 12, alignItems: "center" }}>
                                <span style={{ fontSize: 20 }}>⚠️</span>
                                <div>
                                    <p style={{ fontWeight: 600, color: "#1A1A1A", margin: 0, fontSize: 15 }}>Nastala chyba</p>
                                    <p style={{ color: "#4B5563", margin: 0, fontSize: 14 }}>Nastala chyba, skúste znova alebo nás kontaktujte priamo.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                                    Meno *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Vaše meno"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#6DBF67"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="vas@email.sk"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#6DBF67"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                                    Telefón <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(voliteľné)</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+421 908 500 266"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#6DBF67"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                                    Správa *
                                </label>
                                <textarea
                                    required
                                    placeholder="Povedzte nám o sebe a o tom, ako vám môžeme pomôcť..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    rows={5}
                                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#6DBF67"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                style={{
                                    background: status === "loading" ? "#9CA3AF" : "#6DBF67",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "15px 32px",
                                    border: "none",
                                    fontSize: 15,
                                    fontWeight: 700,
                                    cursor: status === "loading" ? "not-allowed" : "pointer",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    fontFamily: "Inter, system-ui, sans-serif",
                                }}
                                onMouseEnter={(e) => {
                                    if (status !== "loading") {
                                        e.currentTarget.style.transform = "scale(1.03)";
                                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(109,191,103,0.35)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                {status === "loading" ? "Odosielam..." : "Odoslať správu"}
                            </button>
                        </form>
                    </div>

                    {/* Contact info */}
                    <div style={{ paddingTop: 8 }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", marginBottom: 32 }}>
                            Kde nás nájdete
                        </h2>

                        {[
                            { icon: "📧", label: "E-mail", value: "info@spektrumpocitov.sk", href: "mailto:info@spektrumpocitov.sk" },
                            { icon: "📞", label: "Telefón", value: "+421 908 500 266", href: "tel:+421908500266" },
                            { icon: "📍", label: "Adresa", value: "Bratislava", href: null },
                            { icon: "🕐", label: "Ordinačné hodiny", value: "Po–Pia: 9:00 – 18:00", href: null },
                        ].map((item) => (
                            <div
                                key={item.label}
                                style={{
                                    display: "flex",
                                    gap: 16,
                                    alignItems: "flex-start",
                                    marginBottom: 28,
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
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}
