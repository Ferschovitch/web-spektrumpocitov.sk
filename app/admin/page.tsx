import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
    // Získame celkový počet stránok v DB
    const pagesCount = await prisma.pageContent.count();
    
    // Získame posledné upravené stránky
    const recentPages = await prisma.pageContent.findMany({
        orderBy: { updatedAt: 'desc' },
        take: 5
    });

    return (
        <div>
            <style>{`
                .dashboard-card {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
                    border: 1px solid rgba(229, 231, 235, 0.5);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .dashboard-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03);
                }
                .table-hover-row:hover {
                    background-color: #f9fafb;
                }
            `}</style>

            <div style={{ marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, fontFamily: "Playfair Display, Georgia, serif", color: "#111827" }}>
                    Vitajte v Administrácii
                </h1>
                <p style={{ color: "#6b7280", margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>
                    Vitajte v systéme pre správu obsahu webu Spektrum Pocitov.
                </p>
            </div>

            {/* ── CARD OVERVIEW ROW ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                <div className="dashboard-card" style={{ borderLeft: "4px solid #6DBF67" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Stránky v databáze
                    </h3>
                    <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#111827" }}>{pagesCount}</p>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Všetky editovateľné sekcie webu</span>
                </div>
                
                <div className="dashboard-card" style={{ borderLeft: "4px solid #F5C842" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Rýchla akcia
                    </h3>
                    <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0.5rem 0 0.5rem 0" }}>
                        Úprava obsahu stránok
                    </p>
                    <Link href="/admin/pages/home" style={{ color: "#d97706", textDecoration: "underline", fontSize: "0.85rem", display: "inline-block", fontWeight: 500 }}>
                        Upraviť Domovskú stránku &rarr;
                    </Link>
                </div>
            </div>

            {/* ── NEDÁVNE ZMENY OBSAHU ── */}
            <div className="dashboard-card">
                <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1.25rem", color: "#111827", fontFamily: "Playfair Display, Georgia, serif" }}>
                    Nedávne zmeny obsahu webu
                </h2>
                
                {recentPages.length === 0 ? (
                    <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>Žiadne stránky ešte neboli upravené. Skúste pustiť migračný seed.</p>
                ) : (
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                                    <th style={{ padding: "0.75rem", fontSize: "0.85rem", color: "#4b5563", fontWeight: 600 }}>Slug podstránky</th>
                                    <th style={{ padding: "0.75rem", fontSize: "0.85rem", color: "#4b5563", fontWeight: 600 }}>Názov (SEO Title)</th>
                                    <th style={{ padding: "0.75rem", fontSize: "0.85rem", color: "#4b5563", fontWeight: 600 }}>Dátum úpravy</th>
                                    <th style={{ padding: "0.75rem", fontSize: "0.85rem", color: "#4b5563", fontWeight: 600, textAlign: "right" }}>Akcia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentPages.map((page) => (
                                    <tr key={page.id} className="table-hover-row" style={{ borderBottom: "1px solid #f3f4f6" }}>
                                        <td style={{ padding: "0.75rem", fontWeight: "600", fontSize: "0.875rem", color: "#111827" }}>
                                            /{page.slug === "home" ? "" : page.slug}
                                        </td>
                                        <td style={{ padding: "0.75rem", color: "#6b7280", fontSize: "0.875rem" }}>
                                            {page.title || <span style={{ color: "#d1d5db", fontStyle: "italic" }}>— bez názvu —</span>}
                                        </td>
                                        <td style={{ padding: "0.75rem", color: "#6b7280", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                                            {page.updatedAt.toLocaleString("sk-SK", {
                                                day: "numeric", month: "numeric", year: "numeric",
                                                hour: "2-digit", minute: "2-digit",
                                            })}
                                        </td>
                                        <td style={{ padding: "0.75rem", textAlign: "right" }}>
                                            <Link href={`/admin/pages/${page.slug}`} style={{ backgroundColor: "#F5F6F0", padding: "0.4rem 0.8rem", borderRadius: "0.5rem", textDecoration: "none", color: "#1f2937", fontSize: "0.8rem", fontWeight: 500, display: "inline-block", transition: "background-color 0.2s" }}>
                                                Upraviť obsah
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
