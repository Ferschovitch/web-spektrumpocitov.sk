import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
            <aside style={{ width: "250px", backgroundColor: "#1A1A1A", color: "white", padding: "2rem 1rem", display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "2rem", paddingLeft: "1rem" }}>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "Playfair Display, Georgia, serif" }}>Spektrum Pocitov</h2>
                    <span style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Administrácia</span>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Link href="/admin" style={{ padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", display: "block", transition: "background 0.2s" }} className="admin-nav-link">
                        Domovský prehľad
                    </Link>
                    <Link href="/admin/pages/home" style={{ padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", display: "block", transition: "background 0.2s" }} className="admin-nav-link">
                        📝 Domov (Hlavná stránka)
                    </Link>
                    <Link href="/admin/pages/sluzby" style={{ padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", display: "block", transition: "background 0.2s" }} className="admin-nav-link">
                        📝 Služby
                    </Link>
                    <Link href="/admin/pages/o-mne" style={{ padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", display: "block", transition: "background 0.2s" }} className="admin-nav-link">
                        📝 O mne
                    </Link>
                    <Link href="/admin/pages/kontakt" style={{ padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", display: "block", transition: "background 0.2s" }} className="admin-nav-link">
                        📝 Kontakt
                    </Link>
                </nav>

                <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid #374151" }}>
                    <Link href="/" target="_blank" style={{ padding: "0.75rem 1rem", display: "block", color: "#9ca3af", textDecoration: "none" }}>
                        ↗ Zobraziť web
                    </Link>
                </div>
            </aside>

            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                {children}
            </main>
        </div>
    );
}
