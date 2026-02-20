"use client";
import Link from "next/link";

const footerLinks = [
    { href: "/#nas-pristup", label: "Náš prístup" },
    { href: "/blog", label: "Blog" },
    { href: "/o-nas", label: "O nás" },
    { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
    { href: "/ochrana-sukromia", label: "Ochrana súkromia" },
    { href: "/podmienky", label: "Podmienky služby" },
    { href: "/kontakt", label: "Kontaktujte nás" },
];

export default function Footer() {
    return (
        <>
            <style>{`
        .footer-link { text-decoration: none; color: #9CA3AF; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #6DBF67; }
        .footer-legal-link { text-decoration: none; color: #6B7280; font-size: 13px; }
        .footer-legal-link:hover { color: #9CA3AF; }
        .footer-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; align-items: start; margin-bottom: 40px; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div:last-child { text-align: center !important; }
          .footer-contact-info { text-align: center !important; }
          .footer-links-col { align-items: center !important; }
        }
      `}</style>
            <footer style={{ background: "#1A1A1A", color: "white", padding: "48px 24px 32px" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div className="footer-grid">
                        {/* Logo */}
                        <div>
                            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 12 }}>
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #F5C842 40%, #6DBF67 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 16,
                                    }}
                                >
                                    ☀️
                                </div>
                                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 16, color: "white" }}>
                                    Spektrum Pocitov
                                </span>
                            </Link>
                            <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.6, maxWidth: 240 }}>
                                Terapia pre deti a rodiny s láskavým, nádejným prístupom.
                            </p>
                        </div>

                        {/* Nav links */}
                        <div className="footer-links-col" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                            {footerLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact info */}
                        <div className="footer-contact-info" style={{ textAlign: "right" }}>
                            <p style={{ color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>📧 info@spektrumpocitov.sk</p>
                            <p style={{ color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>📞 +421 900 000 000</p>
                            <p style={{ color: "#9CA3AF", fontSize: 14 }}>📍 Bratislava, Slovensko</p>
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid #374151",
                            paddingTop: 24,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 12,
                        }}
                    >
                        <p style={{ color: "#6B7280", fontSize: 13 }}>© 2026 Spektrum Pocitov. Všetky práva vyhradené.</p>
                        <div style={{ display: "flex", gap: 20 }}>
                            {legalLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="footer-legal-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
