import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import articles from "@/content/articles.json";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};
    return {
        title: `${article.title} – Spektrum Pocitov`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) notFound();

    const relatedArticles = article.related
        .map((s) => articles.find((a) => a.slug === s))
        .filter(Boolean) as typeof articles;

    const coverBg = article.coverColor || "#EAF6FB";

    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Hero */}
            <div
                style={{
                    width: "100%",
                    height: 320,
                    background: coverBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 80,
                }}
            >
                {getCategoryEmoji(article.category)}
            </div>

            {/* Article body */}
            <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
                {/* Back link */}
                <Link
                    href="/blog"
                    style={{ color: "#6DBF67", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}
                >
                    ← Späť na blog
                </Link>

                {/* Category */}
                <div style={{ marginBottom: 20 }}>
                    <span style={{ background: "#EDF7ED", color: "#4a9c45", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 600 }}>
                        {article.category}
                    </span>
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontFamily: "Playfair Display, Georgia, serif",
                        fontSize: "clamp(26px, 4vw, 42px)",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        lineHeight: 1.2,
                        marginBottom: 24,
                    }}
                >
                    {article.title}
                </h1>

                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#6DBF67", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 16 }}>
                            👤
                        </div>
                        <div>
                            <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>{article.author}</p>
                            <p style={{ fontSize: 12, color: "#9CA3AF", margin: 0 }}>{formatDate(article.date)}</p>
                        </div>
                    </div>
                    <span style={{ background: "#F5F6F0", color: "#6B7280", borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>
                        ⏱ {article.readTime} čítanie
                    </span>
                </div>

                {/* Content */}
                <div
                    style={{ color: "#374151", fontSize: 17, lineHeight: 1.85 }}
                    dangerouslySetInnerHTML={{ __html: styledContent(article.content) }}
                />
            </div>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
                <section style={{ background: "white", padding: "64px 24px" }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <h2
                            style={{
                                fontFamily: "Playfair Display, Georgia, serif",
                                fontSize: 28,
                                fontWeight: 700,
                                color: "#1A1A1A",
                                marginBottom: 32,
                            }}
                        >
                            Súvisiace články
                        </h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="related-grid">
                            {relatedArticles.map((a) => (
                                <ArticleCard key={a.id} article={a} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <style>{`
        div[dangerouslySetInnerHTML] p, .article-body p { margin-bottom: 20px; }
        div[dangerouslySetInnerHTML] h2, .article-body h2 { font-family: "Playfair Display", Georgia, serif; font-size: 24px; font-weight: 700; color: #1A1A1A; margin: 36px 0 16px; }
        div[dangerouslySetInnerHTML] ul, .article-body ul { padding-left: 24px; margin-bottom: 20px; }
        div[dangerouslySetInnerHTML] li, .article-body li { margin-bottom: 10px; }
        @media (max-width: 900px) { .related-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .related-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}

function styledContent(html: string): string {
    return html
        .replace(/<p>/g, '<p style="margin-bottom:20px;color:#374151;font-size:17px;line-height:1.85;">')
        .replace(/<h2>/g, '<h2 style="font-family:\'Playfair Display\',Georgia,serif;font-size:24px;font-weight:700;color:#1A1A1A;margin:36px 0 16px;">')
        .replace(/<ul>/g, '<ul style="padding-left:24px;margin-bottom:20px;">')
        .replace(/<li>/g, '<li style="margin-bottom:10px;color:#374151;">');
}

function getCategoryEmoji(category: string): string {
    const map: Record<string, string> = {
        "Emócie": "💛", "Rozvoj": "🌱", "Herná terapia": "🎮",
        "Pre rodičov": "❤️", "Úzkosť": "🌧️", "Každodenný život": "🌙",
        "Škola": "📚", "Rodinné vzťahy": "🏠",
    };
    return map[category] || "✨";
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("sk-SK", { year: "numeric", month: "long", day: "numeric" });
}
