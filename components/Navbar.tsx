"use client";
import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/o-nas", label: "O mne" },
    { href: "/kontakt", label: "Kontakt" },
];

// Sparkle colours matching the brand palette
const SPARKLE_COLORS = ["#F5C842", "#6DBF67", "#5BC8C8", "#F5A0A0", "#ffffff", "#F5C842"];

interface Sparkle {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    angle: number;
    distance: number;
    shape: "star" | "circle" | "dot";
}

let sparkleCounter = 0;

function createSparkles(count: number, originX: number, originY: number): Sparkle[] {
    return Array.from({ length: count }, () => {
        sparkleCounter += 1;
        return {
            id: sparkleCounter,
            x: originX,
            y: originY,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
            size: 5 + Math.random() * 7,
            angle: Math.random() * 360,
            distance: 28 + Math.random() * 36,
            shape: (["star", "circle", "dot"] as const)[Math.floor(Math.random() * 3)],
        };
    });
}

function SparkleParticle({ sparkle }: { sparkle: Sparkle }) {
    const rad = (sparkle.angle * Math.PI) / 180;
    const tx = Math.cos(rad) * sparkle.distance;
    const ty = Math.sin(rad) * sparkle.distance;

    const style: React.CSSProperties = {
        position: "absolute",
        left: sparkle.x,
        top: sparkle.y,
        width: sparkle.size,
        height: sparkle.size,
        pointerEvents: "none",
        zIndex: 200,
        transform: "translate(-50%, -50%)",
        animation: `sparkle-burst 0.55s ease-out forwards`,
        // Pass travel via CSS variables
        // @ts-expect-error custom properties
        "--tx": `${tx}px`,
        "--ty": `${ty}px`,
        color: sparkle.color,
    };

    if (sparkle.shape === "star") {
        return (
            <span style={{ ...style, fontSize: sparkle.size, lineHeight: 1 }}>✦</span>
        );
    }
    if (sparkle.shape === "circle") {
        return (
            <span
                style={{
                    ...style,
                    borderRadius: "50%",
                    background: sparkle.color,
                    display: "block",
                }}
            />
        );
    }
    // dot
    return (
        <span
            style={{
                ...style,
                width: sparkle.size * 0.55,
                height: sparkle.size * 0.55,
                borderRadius: "50%",
                background: sparkle.color,
                display: "block",
            }}
        />
    );
}

function SparkleLink({
    href,
    className,
    children,
    onClick,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const spawnSparkles = useCallback((e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newSparkles = createSparkles(7, x, y);
        setSparkles((prev) => [...prev, ...newSparkles]);
        setTimeout(() => {
            setSparkles((prev) =>
                prev.filter((s) => !newSparkles.find((n) => n.id === s.id))
            );
        }, 600);
    }, []);

    return (
        <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
            <Link
                href={href}
                className={className}
                onMouseEnter={spawnSparkles}
                onClick={(e) => {
                    spawnSparkles(e);
                    onClick?.();
                }}
            >
                {children}
            </Link>
            {sparkles.map((s) => (
                <SparkleParticle key={s.id} sparkle={s} />
            ))}
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <style>{`
        @keyframes sparkle-burst {
          0%   { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); opacity: 1; }
          60%  { opacity: 0.8; }
          100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .nav-link {
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          color: #4B5563;
          transition: color 0.2s;
          position: relative;
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
                            <SparkleLink
                                key={link.href}
                                href={link.href}
                                className={`nav-link${pathname === link.href ? " active" : ""}`}
                            >
                                {link.label}
                            </SparkleLink>
                        ))}
                        <SparkleLink href="/kontakt" className="nav-cta">
                            Rezervovať hovor
                        </SparkleLink>
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
                            <SparkleLink
                                key={link.href}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </SparkleLink>
                        ))}
                        <SparkleLink
                            href="/kontakt"
                            className="mobile-cta"
                            onClick={() => setOpen(false)}
                        >
                            Rezervovať hovor
                        </SparkleLink>
                    </div>
                )}
            </nav>
        </>
    );
}
