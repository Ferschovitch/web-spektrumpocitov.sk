"use client";
import { useState } from "react";

const carouselCards = [
    {
        color: "#F5C842",
        bg: "#fdf5d6ff",
        title: "Pre veľké srdcia, ktoré vychovávajú tie malé",
        paragraphs: [
            "Objavte svetlo aj tam, kde sa zdá, že je len únava, chaos či pochybnosti.",
            "Byť rodičom znamená zodpovednosť, ale aj neustále otázky: Robím to správne?",
            "Ak ste pripravení otvoriť svoju myseľ a pozrieť sa na veci z iného uhla, rada vás budem sprevádzať. Nie návodmi na dokonalosť, ale návratom k sebe a k vnútornému pokoju. K miestu, kde sa dá žiť ľahšie. Nie preto, že zmiznú všetky problémy, ale preto, že sa zmení váš postoj.",
            "Pretože skutočná sila sa skrýva v našom postoji.",
        ],
    },
    {
        color: "#5BC8C8",
        bg: "#EDF7ED",
        title: "Pre deti, ktorým sa svet zdá príliš rýchly",
        paragraphs: [
            "Niektoré deti vnímajú svet inak.",
            "Dysgrafia. Dyslexia. Dysortografia. Za týmito slovami sa často skrýva viac než len slovo porucha. Niekedy je to tlak. Očakávania. Porovnávanie. Pocit, že svet sa zrýchlil a písmenká či čísla sa kamsi rozutekali.",
            "Dieťa však nepotrebuje ďalší tlak na to, aby niečo zvládalo. Potrebuje bezpečie. Porozumenie. Prijatie.",
            "Pretože skutočná vnútorná motivácia nevzniká z povinnosti ani zo strachu z chýb. Vzniká z hladu duše. Keď je dieťa v kontakte so svojím vnútorným svetom, učenie sa stáva prirodzeným.",
            "Keď sa cíti prijaté, rastie. Keď je v bezpečí, odváži sa skúšať. A práve tam začína skutočná zmena.",
        ],
    },
    {
        color: "#F5A0A0",
        bg: "#FDF0F0",
        title: "Pre jednotlivcov, ktorí chcú porozumieť sami sebe",
        paragraphs: [
            "Niekedy je najťažší rozhovor ten, ktorý vedieme sami so sebou.",
            "Únava. Preťaženie. Pochybnosti. Pocit, že musím zvládnuť všetko a pritom sa nikto nepýta, či mi niečo nechýba.",
            "Žiť ľahšie sa dá. Nie únikom, ale pochopením, čo a prečo nás tak veľmi vyčerpáva.",
            "Ak chcete objaviť, čo sa deje pod povrchom vašich reakcií, vzťahov a rozhodnutí, som tu pre vás. Nie, aby som vám povedala, kým máte byť, ale aby ste sa mohli znovu stretnúť sami so sebou.",
            "Pretože statiť sa nie je hanba ani nič definitívne. Je to príležitosť lepšie spoznať svoje vnútro a konečne sa slobodne nadýchnuť.",
        ],
    },
    {
        color: "#6DBF67",
        bg: "#EDF7ED",
        title: "Pre páry, ktoré si znova hľadajú cestu k sebe",
        paragraphs: [
            "Byť vo vzťahu znamená kráčať po spoločnej ceste. A občas sa na tej ceste stratí blízkosť, ktorú nahradia hádky alebo naopak dusivé ticho, zraňujúce správanie či úplné vyčerpanie.",
            "Ak nehľadáte vinníka, ale cestu k vzájomnému porozumeniu, rada vás ňou budem sprevádzať. Otvorenými rozhovormi a spoločnými cvičeniami sa priblížite k sebe aby ste sa mohli opäť naladiť na rovnakú vlnu.",
            "Pretože láska nepotrebuje dokonalosť. Potrebuje bezpečný priestor.",
        ],
    },
];

export default function CarouselSection({ cards = [] }: { cards?: any[] }) {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);

    const actualCards = (cards && cards.length > 0) ? cards : carouselCards;

    function goTo(idx: number) {
        if (idx === active || animating) return;
        setAnimating(true);
        setTimeout(() => {
            setActive(idx);
            setAnimating(false);
        }, 250);
    }

    if (actualCards.length === 0) return null;
    const card = actualCards[active % actualCards.length];

    // Normalize paragraphs (they might be strings or objects {text: string} from the CMS)
    const paragraphs = card.paragraphs.map((p: any) => typeof p === 'string' ? p : p.text);

    return (
        <section style={{ padding: "80px 24px", background: "#F5F6F0", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "#5BC8C8", opacity: 0.07, top: -120, right: -100 }} />
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#F5A0A0", opacity: 0.07, bottom: -80, left: -80 }} />

            <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
                {/* Card */}
                <div
                    style={{
                        background: card.bg,
                        borderRadius: 28,
                        padding: "48px 52px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                        opacity: animating ? 0 : 1,
                        transform: animating ? "translateY(12px)" : "translateY(0)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                        minHeight: 340,
                        textAlign: "center",
                    }}
                >
                    {/* Colour accent dot */}
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: card.color, marginBottom: 24, margin: "0 auto 24px" }} />

                    <h2
                        style={{
                            fontFamily: "Playfair Display, Georgia, serif",
                            fontSize: "clamp(22px, 3vw, 34px)",
                            fontWeight: 700,
                            color: "#1A1A1A",
                            marginBottom: 24,
                            lineHeight: 1.3,
                        }}
                    >
                        {card.title}
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {paragraphs.map((para: string, i: number) => (
                            <p
                                key={i}
                                style={{
                                    margin: 0,
                                    color: i === paragraphs.length - 1 ? "#9CA3AF" : "#4B5563",
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    fontStyle: i === paragraphs.length - 1 ? "italic" : "normal",
                                }}
                            >
                                {para}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 36 }}>
                    {/* Prev */}
                    <button
                        onClick={() => goTo((active - 1 + actualCards.length) % actualCards.length)}
                        aria-label="Predchádzajúci"
                        style={{
                            width: 40, height: 40, borderRadius: "50%", border: "2px solid #E5E7EB",
                            background: "white", cursor: "pointer", fontSize: 18, display: "flex",
                            alignItems: "center", justifyContent: "center", transition: "border-color 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = card.color; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    {/* Dots */}
                    <div style={{ display: "flex", gap: 10 }}>
                        {actualCards.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Snímka ${i + 1}`}
                                aria-current={i === active ? "true" : undefined}
                                style={{
                                    width: i === active ? 28 : 12,
                                    height: 12,
                                    borderRadius: 999,
                                    background: i === active ? c.color : "#D1D5DB",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        onClick={() => goTo((active + 1) % actualCards.length)}
                        aria-label="Nasledujúci"
                        style={{
                            width: 40, height: 40, borderRadius: "50%", border: "2px solid #E5E7EB",
                            background: "white", cursor: "pointer", fontSize: 18, display: "flex",
                            alignItems: "center", justifyContent: "center", transition: "border-color 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = card.color; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
