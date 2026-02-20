import ArticleCard from "@/components/ArticleCard";
import articles from "@/content/articles.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog – Spektrum Pocitov",
    description: "Odborné články o detskej psychológii, rodičovstve a emocionálnom zdraví od Spektrum Pocitov.",
};

export default function BlogPage() {
    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "white", padding: "64px 24px 48px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                        <span style={{ fontSize: 12 }}>📚</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>BLOG & ZDROJE</span>
                    </div>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>
                        Tipy a rady pre{" "}
                        <span style={{ color: "#5BC8C8" }}>vašu rodinu</span>
                    </h1>
                    <p style={{ color: "#6B7280", fontSize: 18, maxWidth: 560 }}>
                        Odborné články plné praktických tipov o emocionálnom zdraví, detskom vývoji a rodičovstve.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px" }}>
                <div
                    style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
                    className="blog-grid"
                >
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}
