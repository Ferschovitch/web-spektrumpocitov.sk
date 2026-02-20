"use client";
import Link from "next/link";

interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    coverColor?: string;
}

export default function ArticleCard({ article }: { article: Article }) {
    const coverBg = article.coverColor || "#EAF6FB";
    return (
        <Link
            href={`/blog/${article.slug}`}
            style={{ textDecoration: "none", display: "block" }}
        >
            <div
                style={{
                    borderRadius: 20,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    background: "white",
                    overflow: "hidden",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                }}
            >
                {/* Cover image area */}
                <div
                    style={{
                        height: 180,
                        background: coverBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 48,
                    }}
                >
                    {getCategoryEmoji(article.category)}
                </div>

                <div style={{ padding: "20px 24px 24px" }}>
                    {/* Category tag */}
                    <span
                        style={{
                            display: "inline-block",
                            background: "#F0FDF0",
                            color: "#4a9c45",
                            borderRadius: 999,
                            padding: "4px 12px",
                            fontSize: 12,
                            fontWeight: 600,
                            marginBottom: 12,
                        }}
                    >
                        {article.category}
                    </span>

                    {/* Title */}
                    <h3
                        style={{
                            fontFamily: "Playfair Display, Georgia, serif",
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#1A1A1A",
                            marginBottom: 10,
                            lineHeight: 1.3,
                        }}
                    >
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                        style={{
                            color: "#6B7280",
                            fontSize: 14,
                            lineHeight: 1.6,
                            marginBottom: 16,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: "#9CA3AF", fontSize: 13 }}>
                            {formatDate(article.date)}
                        </span>
                        <span
                            style={{
                                background: "#F5F6F0",
                                color: "#6B7280",
                                borderRadius: 999,
                                padding: "4px 10px",
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        >
                            ⏱ {article.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function getCategoryEmoji(category: string): string {
    const map: Record<string, string> = {
        "Emócie": "💛",
        "Rozvoj": "🌱",
        "Herná terapia": "🎮",
        "Pre rodičov": "❤️",
        "Úzkosť": "🌧️",
        "Každodenný život": "🌙",
        "Škola": "📚",
        "Rodinné vzťahy": "🏠",
    };
    return map[category] || "✨";
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("sk-SK", { year: "numeric", month: "long", day: "numeric" });
}
