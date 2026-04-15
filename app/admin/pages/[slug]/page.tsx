"use client";

import { use, useState, useEffect } from "react";
import { savePageContent } from "../../actions";
import { useActionState } from "react";

// Fake ziskavanie hodnot. V produkcii by to mal nacitat dopredu server component,
// ale kedze chceme interaktivne formulare podla klucov, aspon skeleton
export default function PageEditor({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [pageData, setPageData] = useState<any>(null);
    const [state, formAction, isPending] = useActionState(savePageContent, null);

    useEffect(() => {
        // Natiahneme initial data cez API endpoint co teraz vytvorime
        fetch(`/api/admin/page/${slug}`)
            .then(r => r.json())
            .then(data => setPageData(data))
            .catch(() => setPageData({ content: {} }));
    }, [slug]);

    if (!pageData) return <div>Načítavam...</div>;

    return (
        <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", fontFamily: "Playfair Display, Georgia, serif" }}>
                Upraviť stránku: {slug}
            </h1>

            {state?.success && (
                <div style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
                    {state.success}
                </div>
            )}
            
            {state?.error && (
                <div style={{ backgroundColor: "#fee2e2", color: "#991b1b", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
                    {state.error}
                </div>
            )}

            <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <input type="hidden" name="slug" value={slug} />

                <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>SEO a Metadáta</h2>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Titulok stránky (Title)</label>
                            <input type="text" name="title" defaultValue={pageData.title || ""} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Popis pre vyhľadávače (Meta Description)</label>
                            <textarea name="description" defaultValue={pageData.description || ""} rows={3} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Kľúčové slová (Keywords)</label>
                            <input type="text" name="keywords" defaultValue={pageData.keywords || ""} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box" }} />
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>Obsah stránky (JSON konfigurácia)</h2>
                    
                    {/* Kedze polia mozu by dynamicke (napr. homepage ma heroTitle, cards, atd), ponukneme jednoduche textarea pre arraye a pre stringy generujeme dynamicky */}
                    {Object.keys(pageData.content || {}).map((key) => {
                        const val = pageData.content[key];
                        const isObject = typeof val === 'object' && val !== null;
                        
                        return (
                            <div key={key} style={{ marginBottom: "1.5rem" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Kľúč: {key}</label>
                                {isObject ? (
                                    <textarea 
                                        name={`content_${key}`} 
                                        defaultValue={JSON.stringify(val, null, 2)} 
                                        rows={10} 
                                        style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical", fontFamily: "monospace" }} 
                                    />
                                ) : (
                                    <textarea 
                                        name={`content_${key}`} 
                                        defaultValue={val} 
                                        rows={3} 
                                        style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical" }} 
                                    />
                                )}
                            </div>
                        )
                    })}
                    
                    {Object.keys(pageData.content || {}).length === 0 && (
                        <p style={{ color: "#6b7280" }}>Žiadne texty. Spustite migračný skript na naplnenie databázy.</p>
                    )}
                </div>

                <div style={{ position: "sticky", bottom: "2rem", display: "flex", justifyContent: "flex-end" }}>
                    <button
                        type="submit"
                        disabled={isPending}
                        style={{
                            backgroundColor: "#1A1A1A",
                            color: "white",
                            padding: "1rem 2rem",
                            borderRadius: "999px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: isPending ? "not-allowed" : "pointer",
                            opacity: isPending ? 0.7 : 1,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        {isPending ? "Ukladám..." : "Uložiť všetky zmeny"}
                    </button>
                </div>
            </form>
        </div>
    );
}
