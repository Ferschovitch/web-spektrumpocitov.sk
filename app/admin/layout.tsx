"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const checkActive = (path: string) => {
        if (path === "/admin") return pathname === "/admin";
        return pathname.startsWith(path);
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6", fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
            <style>{`
                .admin-nav-link {
                    display: block;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    color: #9ca3af;
                    font-size: 0.95rem;
                    font-weight: 500;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    margin-bottom: 0.25rem;
                }
                .admin-nav-link:hover {
                    color: white;
                    background-color: rgba(255, 255, 255, 0.05);
                    padding-left: 1.25rem;
                }
                .admin-nav-link.active {
                    color: white;
                    background-color: #374151;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .admin-nav-link.active::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 20%;
                    height: 60%;
                    width: 3px;
                    background-color: #5BC8C8; 
                    border-radius: 0 4px 4px 0;
                }
                .admin-header-serif {
                    font-family: var(--font-serif), serif;
                }
                .sidebar-section-title {
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    padding-left: 1rem;
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #4b5563;
                    font-weight: 700;
                }
            `}</style>
            
            <aside style={{ 
                width: "260px", 
                backgroundColor: "#111827", 
                color: "white", 
                padding: "2rem 1.25rem", 
                display: "flex", 
                flexDirection: "column",
                boxShadow: "4px 0 10px rgba(0,0,0,0.05)",
                zIndex: 10
            }}>
                <div style={{ marginBottom: "2.5rem", paddingLeft: "0.5rem" }}>
                    <h2 className="admin-header-serif" style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.25rem", color: "#F5F6F0" }}>
                        Spektrum Pocitov
                    </h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6DBF67" }} />
                        <span style={{ fontSize: "0.8rem", color: "#6b7280", letterSpacing: "0.02em" }}>Systém administrácie</span>
                    </div>
                </div>

                <nav style={{ display: "flex", flexDirection: "column" }}>
                    <Link href="/admin" className={`admin-nav-link ${checkActive("/admin") ? "active" : ""}`}>
                        Administrácia
                    </Link>

                    <div className="sidebar-section-title">Obsah stránok</div>

                    <Link href="/admin/pages/home" className={`admin-nav-link ${checkActive("/admin/pages/home") ? "active" : ""}`}>
                        Domov
                    </Link>
                    <Link href="/admin/pages/sluzby" className={`admin-nav-link ${checkActive("/admin/pages/sluzby") ? "active" : ""}`}>
                        Služby
                    </Link>
                    <Link href="/admin/pages/o-mne" className={`admin-nav-link ${checkActive("/admin/pages/o-mne") ? "active" : ""}`}>
                        O mne
                    </Link>
                    <Link href="/admin/pages/kontakt" className={`admin-nav-link ${checkActive("/admin/pages/kontakt") ? "active" : ""}`}>
                        Kontakt
                    </Link>
                </nav>

                <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
                    <Link 
                        href="/" 
                        target="_blank" 
                        style={{ 
                            padding: "0.75rem 1rem", 
                            display: "flex", 
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#6b7280", 
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                    >
                        <span>Zobraziť webovú stránku</span>
                    </Link>
                    <div style={{ fontSize: "0.7rem", color: "#374151", paddingLeft: "1rem", marginTop: "1rem" }}>
                        v1.2.0 &bull; 2026
                    </div>
                </div>
            </aside>

            <main style={{ flex: 1, padding: "2.5rem", overflowY: "auto", position: "relative" }}>
                <div style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    height: "4px", 
                    background: "linear-gradient(90deg, #F5C842 0%, #5BC8C8 100%)",
                    opacity: 0.6
                }} />
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    {children}
                </div>
            </main>
        </div>
    );
}
