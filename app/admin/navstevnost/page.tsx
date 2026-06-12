import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function NavestevnostPage() {
    // Získame dnešný začiatok (miestny čas servera)
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

    // 1. Základné štatistiky návštevnosti
    const totalViews = await prisma.pageView.count();
    const viewsToday = await prisma.pageView.count({
        where: { createdAt: { gte: todayStart } }
    });

    // Celkové unikátne návštevy (počet unikátnych dvojíc IP+dátum v celej histórii)
    const totalUniquesGroup = await prisma.pageView.groupBy({
        by: ['ipHash']
    }).catch(() => []); // Fallback ak by zlyhalo
    const totalUniques = totalUniquesGroup ? totalUniquesGroup.length : 0;

    // Unikátne návštevy dnes
    const uniquesTodayGroup = await prisma.pageView.groupBy({
        by: ['ipHash'],
        where: { createdAt: { gte: todayStart } }
    });
    const uniquesToday = uniquesTodayGroup.length;

    // 2. Návštevnosť za posledných 30 dní pre graf
    const thirtyDaysAgo = new Date(todayStart);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);

    const pageViews30Days = await prisma.pageView.findMany({
        where: { createdAt: { gte: thirtyDaysAgo } },
        select: { createdAt: true, ipHash: true },
        orderBy: { createdAt: 'asc' }
    });

    // Vytvorenie mapy posledných 30 dní pre agregáciu v pamäti
    const dailyStatsMap: { [dateStr: string]: { dateLabel: string; views: number; uniques: Set<string> } } = {};
    for (let i = 29; i >= 0; i--) {
        const d = new Date(todayStart);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split("T")[0]; // YYYY-MM-DD pre stabilné mapovanie
        const dateLabel = d.toLocaleDateString("sk-SK", { day: "numeric", month: "numeric" });
        dailyStatsMap[key] = { dateLabel, views: 0, uniques: new Set() };
    }

    pageViews30Days.forEach(pv => {
        const key = pv.createdAt.toISOString().split("T")[0];
        if (dailyStatsMap[key]) {
            dailyStatsMap[key].views += 1;
            if (pv.ipHash) {
                dailyStatsMap[key].uniques.add(pv.ipHash);
            }
        }
    });

    const chartData = Object.entries(dailyStatsMap).map(([key, data]) => ({
        dateLabel: data.dateLabel,
        views: data.views,
        uniques: data.uniques.size
    }));

    // Konfigurácia SVG grafu
    const maxVal = Math.max(...chartData.map(d => Math.max(d.views, d.uniques)), 10);
    const width = 600;
    const height = 200;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Generovanie bodov pre views a uniques
    const viewsPoints = chartData.map((d, i) => {
        const x = paddingLeft + (i * chartWidth) / 29;
        const y = paddingTop + chartHeight - (d.views / maxVal) * chartHeight;
        return { x, y };
    });

    const uniquesPoints = chartData.map((d, i) => {
        const x = paddingLeft + (i * chartWidth) / 29;
        const y = paddingTop + chartHeight - (d.uniques / maxVal) * chartHeight;
        return { x, y };
    });

    const viewsPath = viewsPoints.length > 0 
        ? `M ${viewsPoints[0].x} ${viewsPoints[0].y} ` + viewsPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ")
        : "";

    const uniquesPath = uniquesPoints.length > 0 
        ? `M ${uniquesPoints[0].x} ${uniquesPoints[0].y} ` + uniquesPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ")
        : "";

    const viewsAreaPath = viewsPoints.length > 0
        ? `${viewsPath} L ${viewsPoints[viewsPoints.length - 1].x} ${paddingTop + chartHeight} L ${viewsPoints[0].x} ${paddingTop + chartHeight} Z`
        : "";

    // 3. Najnavštevovanejšie podstránky (agregácia cez groupBy v DB)
    const popularPagesGroup = await prisma.pageView.groupBy({
        by: ['path'],
        _count: {
            path: true
        },
        orderBy: {
            _count: {
                path: 'desc'
            }
        },
        take: 6
    });

    // Získanie názvov stránok z DB pre krajšie zobrazenie
    const dbPages = await prisma.pageContent.findMany({
        select: { slug: true, title: true }
    });
    const pageTitleMap: { [key: string]: string } = {};
    dbPages.forEach(p => {
        pageTitleMap[p.slug] = p.title || p.slug;
    });

    const getFriendlyPageName = (path: string) => {
        if (path === "/") return "Domov (Hlavná stránka)";
        const slug = path.replace(/^\//, "");
        if (pageTitleMap[slug]) return pageTitleMap[slug];
        if (slug === "kontakt") return "Kontakt";
        if (slug === "o-mne") return "O mne";
        if (slug === "sluzby") return "Služby";
        return path;
    };

    // 4. Zdroje návštevnosti (Referrers) - agregácia posledných 1000 návštev v pamäti pre čistotu dát
    const recentReferrers = await prisma.pageView.findMany({
        where: { referrer: { not: null } },
        select: { referrer: true },
        orderBy: { createdAt: 'desc' },
        take: 1000
    });

    const referrerCounts: { [host: string]: number } = {};
    const nonNullReferrerCount = await prisma.pageView.count({
        where: { referrer: { not: null } }
    });
    const directCount = totalViews - nonNullReferrerCount;

    recentReferrers.forEach(pv => {
        if (!pv.referrer) return;
        try {
            const host = new URL(pv.referrer).hostname.replace("www.", "");
            referrerCounts[host] = (referrerCounts[host] || 0) + 1;
        } catch {
            const fallback = pv.referrer.substring(0, 30);
            referrerCounts[fallback] = (referrerCounts[fallback] || 0) + 1;
        }
    });

    const sortedReferrers = Object.entries(referrerCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    if (directCount > 0) {
        sortedReferrers.push({ name: "Priamy vstup / Záložky", count: directCount });
        sortedReferrers.sort((a, b) => b.count - a.count);
    }

    return (
        <div>
            <style>{`
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.25rem;
                    margin-bottom: 2rem;
                }
                @media (max-width: 1024px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 640px) {
                    .stats-grid {
                        grid-template-columns: 1fr;
                    }
                }
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
                .dashboard-section-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                @media (max-width: 1024px) {
                    .dashboard-section-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .table-hover-row:hover {
                    background-color: #f9fafb;
                }
            `}</style>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, fontFamily: "Playfair Display, Georgia, serif", color: "#111827" }}>
                        Štatistiky návštevnosti
                    </h1>
                    <p style={{ color: "#6b7280", margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>
                        Analýza zobrazení, unikátnych používateľov a zdrojov návštev
                    </p>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280", padding: "0.5rem 1rem", backgroundColor: "white", borderRadius: "999px", border: "1px solid #e5e7eb" }}>
                    Dnes: {now.toLocaleDateString("sk-SK", { day: "numeric", month: "long", year: "numeric" })}
                </div>
            </div>

            {/* ── CARD METRICS ROW ── */}
            <div className="stats-grid">
                <div className="dashboard-card" style={{ borderLeft: "4px solid #5BC8C8" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Zobrazenia dnes
                    </h3>
                    <p style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, color: "#111827" }}>{viewsToday}</p>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>celkovo: {totalViews}</span>
                </div>

                <div className="dashboard-card" style={{ borderLeft: "4px solid #F5C842" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Unikátni dnes
                    </h3>
                    <p style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, color: "#111827" }}>{uniquesToday}</p>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>celkové unikáty: {totalUniques}</span>
                </div>

                <div className="dashboard-card" style={{ borderLeft: "4px solid #6DBF67" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Zobrazenia / Unikát
                    </h3>
                    <p style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, color: "#111827" }}>
                        {uniquesToday > 0 ? (viewsToday / uniquesToday).toFixed(1) : "0.0"}
                    </p>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>priemerný počet akcií na návštevu</span>
                </div>

                <div className="dashboard-card" style={{ borderLeft: "4px solid #3b82f6" }}>
                    <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280", margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                        Celkové návštevy
                    </h3>
                    <p style={{ fontSize: "2.25rem", fontWeight: "bold", margin: 0, color: "#111827" }}>{totalUniques}</p>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>od spustenia sledovania</span>
                </div>
            </div>

            {/* ── GRAF NÁVŠTEVNOSTI (30 dní) ── */}
            <div className="dashboard-card" style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                    <div>
                        <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0, color: "#111827" }}>
                            Návštevnosť za posledných 30 dní
                        </h2>
                        <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                            Trend zobrazení a unikátnych používateľov
                        </span>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                            <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: "#5BC8C8", borderRadius: "3px" }} />
                            <span style={{ color: "#4b5563" }}>Zobrazenia</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                            <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: "#F5C842", borderRadius: "3px" }} />
                            <span style={{ color: "#4b5563" }}>Unikátni návštevníci</span>
                        </div>
                    </div>
                </div>

                <div style={{ position: "relative", width: "100%", height: "200px" }}>
                    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ overflow: "visible" }}>
                        <defs>
                            <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#5BC8C8" stopOpacity="0.25"/>
                                <stop offset="100%" stopColor="#5BC8C8" stopOpacity="0.0"/>
                            </linearGradient>
                        </defs>

                        {/* Mriežka na pozadí */}
                        {[0, 0.25, 0.5, 0.75, 1.0].map((ratio, index) => {
                            const val = Math.round(ratio * maxVal);
                            const y = paddingTop + chartHeight - ratio * chartHeight;
                            return (
                                <g key={index}>
                                    <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#f3f4f6" strokeWidth="1" />
                                    <text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af" fontFamily="system-ui">{val}</text>
                                </g>
                            );
                        })}

                        {/* Popisky osi X */}
                        {chartData.map((d, i) => {
                            if (i % 5 !== 0 && i !== 29) return null;
                            const x = paddingLeft + (i * chartWidth) / 29;
                            return (
                                <g key={i}>
                                    <line x1={x} y1={paddingTop + chartHeight} x2={x} y2={paddingTop + chartHeight + 4} stroke="#e5e7eb" />
                                    <text x={x} y={height - 8} textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="system-ui">
                                        {d.dateLabel}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Area pod zobrazeniami */}
                        {viewsAreaPath && <path d={viewsAreaPath} fill="url(#viewsGrad)" />}

                        {/* Čiary grafov */}
                        {viewsPath && (
                            <path d={viewsPath} fill="none" stroke="#5BC8C8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                        {uniquesPath && (
                            <path d={uniquesPath} fill="none" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        )}

                        {/* Posledné body na grafe (zvýraznenie) */}
                        {viewsPoints.length > 0 && (
                            <circle cx={viewsPoints[viewsPoints.length - 1].x} cy={viewsPoints[viewsPoints.length - 1].y} r="4.5" fill="#5BC8C8" stroke="white" strokeWidth="1.5" />
                        )}
                        {uniquesPoints.length > 0 && (
                            <circle cx={uniquesPoints[uniquesPoints.length - 1].x} cy={uniquesPoints[uniquesPoints.length - 1].y} r="4.5" fill="#F5C842" stroke="white" strokeWidth="1.5" />
                        )}
                    </svg>
                </div>
            </div>

            {/* ── PODSTRÁNKY A REFERRERY ROW ── */}
            <div className="dashboard-section-grid">
                {/* Populárne podstránky */}
                <div className="dashboard-card">
                    <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "1rem", color: "#111827" }}>
                        Najnavštevovanejšie podstránky
                    </h2>
                    {popularPagesGroup.length === 0 ? (
                        <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>Zatiaľ žiadne zaznamenané zobrazenia stránok.</p>
                    ) : (
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                                        <th style={{ padding: "0.6rem", fontSize: "0.8rem", color: "#4b5563", textTransform: "uppercase" }}>Stránka</th>
                                        <th style={{ padding: "0.6rem", fontSize: "0.8rem", color: "#4b5563", textTransform: "uppercase", textAlign: "right" }}>Zobrazenia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popularPagesGroup.map((page, index) => (
                                        <tr key={index} className="table-hover-row" style={{ borderBottom: "1px solid #f3f4f6" }}>
                                            <td style={{ padding: "0.6rem", fontSize: "0.875rem" }}>
                                                <div style={{ fontWeight: 500, color: "#111827" }}>{getFriendlyPageName(page.path)}</div>
                                                <div style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "monospace" }}>{page.path}</div>
                                            </td>
                                            <td style={{ padding: "0.6rem", fontSize: "0.875rem", fontWeight: 600, color: "#111827", textAlign: "right" }}>
                                                {page._count.path}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Zdroje návštevnosti */}
                <div className="dashboard-card">
                    <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "1rem", color: "#111827" }}>
                        Zdroje návštevnosti
                    </h2>
                    {sortedReferrers.length === 0 ? (
                        <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>Žiadne zaznamenané referrery.</p>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                            {sortedReferrers.map((ref, index) => {
                                const percentage = totalViews > 0 ? Math.round((ref.count / totalViews) * 100) : 0;
                                return (
                                    <div key={index} style={{ fontSize: "0.875rem" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", color: "#374151" }}>
                                            <span style={{ fontWeight: 500 }}>{ref.name}</span>
                                            <span style={{ color: "#6b7280" }}>{ref.count}x ({percentage}%)</span>
                                        </div>
                                        <div style={{ width: "100%", height: "6px", backgroundColor: "#f3f4f6", borderRadius: "3px", overflow: "hidden" }}>
                                            <div style={{ 
                                                width: `${percentage}%`, 
                                                height: "100%", 
                                                backgroundColor: index === 0 ? "#5BC8C8" : index === 1 ? "#F5C842" : "#9ca3af", 
                                                borderRadius: "3px" 
                                            }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
