"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/#nas-pristup", label: "Náš prístup" },
    { href: "/blog", label: "Blog" },
    { href: "/o-nas", label: "O nás" },
    { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <style>{`
        .nav-link {
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          color: #4B5563;
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active { color: #6DBF67; }
        .nav-cta {
          background: #6DBF67;
          color: white !important;
          border-radius: 999px;
          padding: 10px 22px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
        }
        .nav-cta:hover {
          transform: scale(1.04);
          box-shadow: 0 6px 20px rgba(109,191,103,0.35);
          color: white !important;
        }
        .mobile-link {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: #1A1A1A;
          display: block;
        }
        .mobile-link:hover { color: #6DBF67; }
        .mobile-cta {
          background: #6DBF67;
          color: white !important;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          display: block;
          margin-top: 8px;
        }
        @media (min-width: 769px) { .hamburger-btn { display: none !important; } .mobile-menu { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger-btn { display: flex !important; flex-direction: column; } }
      `}</style>
            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    background: "white",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        padding: "0 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: 68,
                    }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <div
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #F5C842 40%, #6DBF67 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                            }}
                        >
                            ☀️
                        </div>
                        <span
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontWeight: 700,
                                fontSize: 18,
                                color: "#1A1A1A",
                            }}
                        >
                            Spektrum Pocitov
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link${pathname === link.href ? " active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/kontakt" className="nav-cta">
                            Rezervovať hovor
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="hamburger-btn"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            display: "none",
                        }}
                        aria-label="Menu"
                    >
                        <div style={{ width: 24, height: 2, background: "#1A1A1A", marginBottom: 5, borderRadius: 2 }} />
                        <div style={{ width: 24, height: 2, background: "#1A1A1A", marginBottom: 5, borderRadius: 2 }} />
                        <div style={{ width: 24, height: 2, background: "#1A1A1A", borderRadius: 2 }} />
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div
                        className="mobile-menu"
                        style={{
                            background: "white",
                            borderTop: "1px solid rgba(0,0,0,0.06)",
                            padding: "20px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/kontakt" className="mobile-cta" onClick={() => setOpen(false)}>
                            Rezervovať hovor
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
}
