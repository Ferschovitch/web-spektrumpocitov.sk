"use client";

import { use, useState, useEffect } from "react";
import { savePageContent } from "../../actions";
import { PAGE_SCHEMAS, SectionSchema, FieldSchema } from "@/lib/content-schemas";
import { useActionState } from "react";

// Helper components for Arrays
function ArrayEditor({ field, value, onChange }: { field: FieldSchema, value: any[], onChange: (val: any[]) => void }) {
    const list = Array.isArray(value) ? value : [];
    const schema = field.schema || [];

    const handleChange = (index: number, key: string, newVal: any) => {
        const next = [...list];
        next[index] = { ...next[index], [key]: newVal };
        onChange(next);
    };

    const handleAdd = () => {
        const newItem: any = {};
        schema.forEach(f => newItem[f.name] = "");
        onChange([...list, newItem]);
    };

    const handleRemove = (index: number) => {
        onChange(list.filter((_, i) => i !== index));
    };

    return (
        <div style={{ marginTop: "1rem", border: "1px solid #e5e7eb", borderRadius: "0.5rem", padding: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {list.map((item, index) => (
                    <div key={index} style={{ padding: "1rem", backgroundColor: "#f9fafb", borderRadius: "0.5rem", position: "relative", border: "1px solid #e5e7eb" }}>
                        <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "bold", color: "#6b7280", marginBottom: "1rem" }}>Položka #{index + 1}</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {schema.map(subField => (
                                <div key={subField.name}>
                                    <label style={{ display: "block", marginBottom: "0.25rem", fontSize: "0.85rem", fontWeight: "500", color: "#4b5563" }}>{subField.label}</label>
                                    {subField.type === "textarea" ? (
                                        <textarea
                                            value={item[subField.name] || ""}
                                            onChange={e => handleChange(index, subField.name, e.target.value)}
                                            rows={3}
                                            style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #d1d5db", fontSize: "0.875rem" }}
                                        />
                                    ) : subField.type === "color" ? (
                                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <input
                                                type="color"
                                                value={item[subField.name] || "#000000"}
                                                onChange={e => handleChange(index, subField.name, e.target.value)}
                                                style={{ width: "40px", height: "40px", padding: "0", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
                                            />
                                            <input
                                                type="text"
                                                value={item[subField.name] || ""}
                                                onChange={e => handleChange(index, subField.name, e.target.value)}
                                                style={{ padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #d1d5db", fontSize: "0.875rem" }}
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            value={item[subField.name] || ""}
                                            onChange={e => handleChange(index, subField.name, e.target.value)}
                                            style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #d1d5db", fontSize: "0.875rem" }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <button 
                            type="button" 
                            onClick={() => handleRemove(index)}
                            style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "#fee2e2", color: "#dc2626", border: "none", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.75rem", cursor: "pointer", fontWeight: "bold" }}
                        >Odstrániť položku</button>
                    </div>
                ))}
            </div>
            <button 
                type="button" 
                onClick={handleAdd}
                style={{ marginTop: "1rem", backgroundColor: "#e0f2fe", color: "#0369a1", border: "none", padding: "0.5rem 1rem", borderRadius: "0.375rem", fontSize: "0.875rem", cursor: "pointer", fontWeight: "bold" }}
            >+ Pridať ďalšiu položku</button>
        </div>
    );
}

export default function PageEditor({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [pageData, setPageData] = useState<any>(null);
    const [contentState, setContentState] = useState<Record<string, any>>({});
    const [state, formAction, isPending] = useActionState(savePageContent, null);

    const schema = PAGE_SCHEMAS[slug] || [];

    useEffect(() => {
        fetch(`/api/admin/page/${slug}`)
            .then(r => r.json())
            .then(data => {
                setPageData(data);
                setContentState(data.content || {});
            })
            .catch(() => {
                setPageData({ title: "", description: "", keywords: "" });
                setContentState({});
            });
    }, [slug]);

    if (!pageData) return <div>Načítavam štruktúry pre editáciu...</div>;

    const handleContentChange = (key: string, val: any) => {
        setContentState(prev => ({ ...prev, [key]: val }));
    };

    return (
        <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", fontFamily: "Playfair Display, Georgia, serif" }}>
                Úprava obsahu: <span style={{ color: "#6DBF67" }}>{slug}</span>
            </h1>
            <p style={{ color: "#9CA3AF", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Zmeny sa prejavia na webe okamžite po uložení.
            </p>

            {state?.success && (
                <div style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    ✅ {state.success}
                </div>
            )}

            {state?.error && (
                <div style={{ backgroundColor: "#fee2e2", color: "#991b1b", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    ❌ {state.error}
                </div>
            )}

            <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <input type="hidden" name="slug" value={slug} />

                {Object.entries(contentState).map(([k, v]) => (
                    <input key={k} type="hidden" name={`content_${k}`} value={typeof v === 'object' ? JSON.stringify(v) : v} />
                ))}

                {/* ── SEO ZONE ── */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>🔍</div>
                        <div>
                            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#5B21B6", margin: 0 }}>SEO &amp; Metadáta</h2>
                            <p style={{ fontSize: "0.8rem", color: "#8B5CF6", margin: 0 }}>Tieto polia sa zobrazujú vo vyhľadávačoch (Google, Bing...), nie priamo na stránke.</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid #8B5CF6", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.35rem", fontWeight: "600", color: "#374151" }}>
                                Titulok stránky <span style={{ fontWeight: 400, color: "#9CA3AF", fontSize: "0.8rem" }}>(zobrazuje sa v záložke prehliadača a vo výsledkoch Google)</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={pageData.title || ""}
                                placeholder="napr. Spektrum Pocitov – Psychologická podpora Bratislava"
                                style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #DDD6FE", boxSizing: "border-box", fontSize: "0.9rem" }}
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.35rem", fontWeight: "600", color: "#374151" }}>
                                Meta popis <span style={{ fontWeight: 400, color: "#9CA3AF", fontSize: "0.8rem" }}>(krátky popis stránky vo výsledkoch vyhľadávania, ideálne 120–160 znakov)</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={pageData.description || ""}
                                rows={2}
                                placeholder="napr. Psychologická podpora pre deti, páry a jednotlivcov v Bratislave..."
                                style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #DDD6FE", boxSizing: "border-box", resize: "vertical", fontSize: "0.9rem" }}
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.35rem", fontWeight: "600", color: "#374151" }}>
                                Kľúčové slová <span style={{ fontWeight: 400, color: "#9CA3AF", fontSize: "0.8rem" }}>(oddeľte čiarkou – napr. psychológ Bratislava, terapia, koučing)</span>
                            </label>
                            <input
                                type="text"
                                name="keywords"
                                defaultValue={pageData.keywords || ""}
                                placeholder="napr. psychológ Bratislava, terapia pre deti, rodinné poradenstvo"
                                style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #DDD6FE", boxSizing: "border-box", fontSize: "0.9rem" }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── DIVIDER ── */}
                {schema.length > 0 && (
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>Obsah stránky</span>
                        <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
                    </div>
                )}

                {/* ── CONTENT ZONE ── */}
                {schema.length > 0 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "-0.5rem" }}>
                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>✏️</div>
                            <div>
                                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#166534", margin: 0 }}>Text na webe</h2>
                                <p style={{ fontSize: "0.8rem", color: "#4ade80", margin: 0 }}>Tieto polia sa zobrazujú priamo návštevníkom stránky.</p>
                            </div>
                        </div>

                        {schema.map((section: SectionSchema) => (
                            <div key={section.id} style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid #6DBF67" }}>
                                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.25rem", color: "#1A1A1A" }}>{section.title}</h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.25rem" }}>
                                    {section.fields.map(field => (
                                        <div key={field.name}>
                                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>{field.label}</label>
                                            {field.type === "textarea" ? (
                                                <textarea
                                                    value={contentState[field.name] || ""}
                                                    onChange={e => handleContentChange(field.name, e.target.value)}
                                                    rows={3}
                                                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #D1FAE5", fontSize: "0.9rem" }}
                                                />
                                            ) : field.type === "array" ? (
                                                <ArrayEditor
                                                    field={field}
                                                    value={contentState[field.name] || []}
                                                    onChange={(newVal) => handleContentChange(field.name, newVal)}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={contentState[field.name] || ""}
                                                    onChange={e => handleContentChange(field.name, e.target.value)}
                                                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #D1FAE5", fontSize: "0.9rem" }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "white", borderRadius: "1rem", color: "#6b7280", border: "1px dashed #e5e7eb" }}>
                        Pre túto stránku zatiaľ nie je definovaná editovateľná štruktúra obsahu.
                    </div>
                )}

                {/* Global Save Button – fixed so it's always visible */}
                <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 100 }}>
                    <button
                        type="submit"
                        disabled={isPending}
                        style={{
                            backgroundColor: isPending ? "#374151" : "#1A1A1A",
                            color: "white",
                            padding: "0.85rem 1.75rem",
                            borderRadius: "999px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: isPending ? "not-allowed" : "pointer",
                            opacity: isPending ? 0.75 : 1,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                            fontSize: "0.95rem",
                            transition: "background-color 0.2s, box-shadow 0.2s",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {isPending ? "⏳ Ukladám..." : "💾 Uložiť zmeny"}
                    </button>
                </div>
            </form>
        </div>
    );
}

