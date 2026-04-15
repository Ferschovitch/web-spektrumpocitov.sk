import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
    // Ziskame celkovy pocet stranok v DB
    const pagesCount = await prisma.pageContent.count();
    
    // Ziskame posledne upravene stranky
    const recentPages = await prisma.pageContent.findMany({
        orderBy: { updatedAt: 'desc' },
        take: 5
    });

    return (
        <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", fontFamily: "Playfair Display, Georgia, serif" }}>
                Vitajte v Administrácii
            </h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "0.5rem" }}>Stránky v databáze</h3>
                    <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>{pagesCount}</p>
                </div>
                
                <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "0.5rem" }}>Rýchla akcia</h3>
                    <Link href="/admin/pages/home" style={{ color: "#d97706", textDecoration: "underline", display: "inline-block", marginTop: "0.5rem" }}>
                        Upraviť Domovskú stránku &rarr;
                    </Link>
                </div>
            </div>

            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>Nedávne zmeny</h2>
                
                {recentPages.length === 0 ? (
                    <p style={{ color: "#6b7280" }}>Žiadne stránky ešte neboli upravené. Skúste pustiť migračný seed.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                                <th style={{ padding: "0.75rem", color: "#4b5563" }}>ID podstránky</th>
                                <th style={{ padding: "0.75rem", color: "#4b5563" }}>Názov (SEO)</th>
                                <th style={{ padding: "0.75rem", color: "#4b5563", textAlign: "right" }}>Akcia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentPages.map((page) => (
                                <tr key={page.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                                    <td style={{ padding: "0.75rem", fontWeight: "500" }}>{page.slug}</td>
                                    <td style={{ padding: "0.75rem", color: "#6b7280" }}>{page.title}</td>
                                    <td style={{ padding: "0.75rem", textAlign: "right" }}>
                                        <Link href={`/admin/pages/${page.slug}`} style={{ backgroundColor: "#F5F6F0", padding: "0.5rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "#1f2937", fontSize: "0.875rem" }}>
                                            Upraviť
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
