export default function ContactPage() {
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
                        Máte otázky alebo chcete rezervovať konzultáciu? Napíšte mi — odpoviem do 24 hodín.
                    </p>
                </div>
            </section>

            {/* Contact info */}
            <section style={{ maxWidth: 600, margin: "0 auto", padding: "64px 24px" }}>
                <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", marginBottom: 32 }}>
                    Napíšte mi, zavolajte mi
                </h2>

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
            </section>
        </div>
    );
}
