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
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", fontFamily: "Playfair Display, Georgia, serif" }}>
                Úprava obsahu: <span style={{ color: "#6DBF67" }}>{slug}</span>
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

                {/* We serialize contentState into the form so the Server Action can simply read it */}
                {Object.entries(contentState).map(([k, v]) => (
                    <input key={k} type="hidden" name={`content_${k}`} value={typeof v === 'object' ? JSON.stringify(v) : v} />
                ))}

                <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>SEO Metadáta</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Titulok (Browser Title)</label>
                            <input type="text" name="title" defaultValue={pageData.title || ""} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Popis pre vyhľadávače</label>
                            <textarea name="description" defaultValue={pageData.description || ""} rows={2} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Kľúčové slová</label>
                            <input type="text" name="keywords" defaultValue={pageData.keywords || ""} style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc", boxSizing: "border-box" }} />
                        </div>
                    </div>
                </div>

                {schema.length > 0 ? schema.map((section: SectionSchema) => (
                    <div key={section.id} style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid #6DBF67" }}>
                        <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{section.title}</h2>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
                            {section.fields.map(field => (
                                <div key={field.name}>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>{field.label}</label>
                                    
                                    {field.type === "textarea" ? (
                                        <textarea
                                            value={contentState[field.name] || ""}
                                            onChange={e => handleContentChange(field.name, e.target.value)}
                                            rows={3}
                                            style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
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
                                            style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )) : (
                    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "white", borderRadius: "1rem", color: "#6b7280" }}>
                        Pre túto stránku zatiaľ nie je definovaná vizuálna štruktúra, prepína sa do núdzového režimu.
                        {/* Fallback code if schema is missing can be placed here, currently skipping since we have all 5 covered */}
                    </div>
                )}

                {/* Global Save Button */}
                <div style={{ position: "sticky", bottom: "2rem", display: "flex", justifyContent: "flex-end", zIndex: 50 }}>
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
                        {isPending ? "Ukladám..." : "Uložiť zmeny v obsahu"}
                    </button>
                </div>
            </form>
        </div>
    );
}
