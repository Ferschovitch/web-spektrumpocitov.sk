"use client";
import Link from "next/link";



const valuesCards = [
    { color: "#F5C842", bg: "#fdf5d6ff", label: "Rešpekt k jedinečnosti", text: "Každý príbeh je iný, každý z nás žije iným tempom. Vytváram priestor, kde môžete byť prijatí bez strachu z toho, že vás niekto bude posudzovať." },
    { color: "#5BC8C8", bg: "#EAF6FB", label: "Prepojenie telo – myseľ – vzťahy", text: "Vnímam človeka ako celok. To, čo prežívame vnútri, sa odráža v našom tele aj vo vzťahoch, a práve v tomto prepojení často nachádzame odpovede." },
    { color: "#F5A0A0", bg: "#FDF0F0", label: "Bezpečie a dôvera", text: "Skutočná zmena sa deje tam, kde sa cítime bezpečne. Mojou prioritou je vytvoriť prostredie, v ktorom môžete hovoriť otvorene a bez obáv." },
    { color: "#6DBF67", bg: "#EDF7ED", label: "Vedomý rast a vnútorná rovnováha", text: "Verím, že rovnováha neprichádza zvonka, ale vzniká v nás. Podporujem kroky, ktoré vedú k väčšiemu pokoju a dôvere v samého seba." },
];

export default function AboutPage() {
    return (
        <div style={{ background: "#F5F6F0", minHeight: "100vh" }}>
            {/* Hero bio */}
            <section style={{ background: "white", padding: "80px 24px" }}>
                <div
                    style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
                    className="about-hero-grid"
                >
                    {/* Photo */}
                    <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "#F5C842", opacity: 0.15, top: -30, left: -30 }} />
                        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "#5BC8C8", opacity: 0.12, bottom: 0, right: -20 }} />
                        <div
                            style={{
                                position: "relative",
                                borderRadius: 24,
                                overflow: "hidden",
                                boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
                                background: "#EDF7ED",
                                height: 420,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Therapist SVG placeholder */}
                            <svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                                <defs>
                                    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: "#EDF7ED" }} />
                                        <stop offset="100%" style={{ stopColor: "#D4EDDA" }} />
                                    </linearGradient>
                                </defs>
                                <rect width="400" height="420" fill="url(#bgGrad2)" />
                                {/* Body */}
                                <rect x="140" y="250" width="120" height="150" rx="20" fill="#5BC8C8" />
                                {/* Neck */}
                                <rect x="183" y="220" width="34" height="40" rx="8" fill="#F5DEB3" />
                                {/* Head */}
                                <circle cx="200" cy="190" r="60" fill="#F5DEB3" />
                                {/* Hair */}
                                <ellipse cx="200" cy="145" rx="60" ry="35" fill="#8B5E3C" />
                                <ellipse cx="150" cy="175" rx="22" ry="40" fill="#8B5E3C" />
                                <ellipse cx="250" cy="175" rx="22" ry="40" fill="#8B5E3C" />
                                {/* Eyes */}
                                <ellipse cx="182" cy="185" rx="8" ry="9" fill="white" />
                                <ellipse cx="218" cy="185" rx="8" ry="9" fill="white" />
                                <circle cx="183" cy="186" r="5" fill="#5C4033" />
                                <circle cx="219" cy="186" r="5" fill="#5C4033" />
                                <circle cx="185" cy="184" r="2" fill="white" />
                                <circle cx="221" cy="184" r="2" fill="white" />
                                {/* Smile */}
                                <path d="M 185 205 Q 200 218 215 205" stroke="#C0785A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                {/* Cheeks */}
                                <ellipse cx="168" cy="200" rx="12" ry="8" fill="#F5A0A0" opacity="0.5" />
                                <ellipse cx="232" cy="200" rx="12" ry="8" fill="#F5A0A0" opacity="0.5" />
                                {/* Arms */}
                                <ellipse cx="125" cy="300" rx="22" ry="60" fill="#5BC8C8" transform="rotate(-10 125 300)" />
                                <ellipse cx="275" cy="300" rx="22" ry="60" fill="#5BC8C8" transform="rotate(10 275 300)" />
                                {/* Hands */}
                                <circle cx="108" cy="355" r="18" fill="#F5DEB3" />
                                <circle cx="292" cy="355" r="18" fill="#F5DEB3" />
                                {/* Heart in hands */}
                                <path d="M 196 365 C 196 355 187 350 183 355 C 179 360 183 368 196 378 C 209 368 213 360 209 355 C 205 350 196 355 196 365 Z" fill="#F5A0A0" opacity="0.7" />
                                {/* Badge / name tag */}
                                <rect x="170" y="270" width="60" height="35" rx="6" fill="white" opacity="0.8" />
                                <text x="200" y="288" textAnchor="middle" fontSize="8" fill="#1A1A1A" fontWeight="bold">Mgr. Jana</text>
                                <text x="200" y="299" textAnchor="middle" fontSize="7" fill="#6B7280">Terapeutka</text>
                            </svg>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF7ED", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9c45" }}>🌿 SPOZNAJTE MA</span>
                        </div>
                        <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 20, lineHeight: 1.2 }}>
                            Mgr. Linda Stanislavová
                        </h1>
                        <p style={{ color: "#6DBF67", fontSize: 15, fontWeight: 600, marginBottom: 20 }}>
                            Terapia pre deti, rodiny, páry aj jednotlivcov | Kurz rozvoja mysle | Škola etikoterapie
                        </p>
                        <p style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                            Som terapeutka s dlhoročnou praxou v poradenstve pre deti, jednotlivcov, páry aj rodiny.<br /><br />
                            Sprevádzam rodičov pri výchove detí, pomáham harmonizovať rodinné vzťahy a podporujem otvorenú, rešpektujúcu komunikáciu. V partnerských vzťahoch vytváram bezpečný priestor pre porozumenie, blízkosť a obnovu dôvery.
                        </p>
                        <p style={{ color: "#4B5563", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                            Verím, že vzťah, ktorý máme sami so sebou a so svojím telom, ovplyvňuje všetko ostatné - naše rozhodnutia, emócie aj kvalitu našich vzťahov. Vo svojej práci sa preto zameriavam na rozvoj vedomia a sebapoznanie, ako aj na psychosomatiku – citlivé prepojenie medzi telom, mysľou a správaním. <br /><br />Keď porozumieme tomu, čo sa deje pod povrchom, dokážeme prirodzene meniť aj to, čo sa deje navonok.
                            <br /><br />
                            Rozvoj vedomia.<br />
                            Zdravé vzťahy.<br />
                            Vnútorný pokoj.<br />
                            Sloboda byť samým sebou.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                            {["Rodinné poradenstvo", "Párová terapia", "Rozvoj vedomia a intuície", "Vision Extra Ocular", "Hravá metóda rozvoja vedomia"].map((tag) => (
                                <span key={tag} style={{ background: "#fdf5d6ff", color: "#4B5563", borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                            <Link
                                href="/kontakt"
                                style={{
                                    background: "#6DBF67",
                                    color: "white",
                                    borderRadius: 999,
                                    padding: "14px 28px",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: 700,
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    display: "inline-block",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.04)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Napíšte mi
                            </Link>
                            <Link
                                href="/kontakt"
                                style={{
                                    background: "transparent",
                                    color: "#6DBF67",
                                    borderRadius: 999,
                                    padding: "14px 28px",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: 600,
                                    border: "2px solid #6DBF67",
                                    transition: "transform 0.2s",
                                    display: "inline-block",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                            >
                                Zavolajte mi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: "80px 24px", background: "#e1ffd6ff" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
                            Moje hodnoty
                        </h2>
                        <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>
                            Princípy, ktoré formujú každú terapeutickú hodinu a každý rozhovor.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="values-grid">
                        {valuesCards.map((card) => (
                            <div key={card.label} style={{ background: card.bg, borderRadius: 20, padding: "28px 22px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: card.color }} />
                                    <span style={{ fontWeight: 700, fontSize: 17, color: "#1A1A1A", lineHeight: 1.25 }}>{card.label}</span>
                                </div>
                                <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
          @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 900px) { .about-hero-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Education & Experience */}
            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                    {/* Section heading */}
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
                            Vzdelanie a odborné zázemie
                        </h2>

                    </div>

                    {/* Education card */}
                    <div style={{ marginBottom: 56 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fdf5d6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
                            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Vzdelanie</h3>
                        </div>
                        <div style={{ background: "#fdf5d6ff", borderRadius: 20, padding: "28px 32px", borderLeft: "4px solid #F5C842" }}>
                            <p style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 6 }}>Sociálna a pracovná psychológia</p>
                            <p style={{ color: "#6DBF67", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Univerzita Komenského v Bratislave, Fakulta sociálnych a ekonomických vied</p>
                            <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.7, margin: 0 }}>Odborné vzdelanie zamerané na psychológiu jednotlivca, vzťahov a pracovného prostredia.</p>
                        </div>
                    </div>

                    {/* Experience groups */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }} className="exp-grid">

                        {/* 1. Psychologická prax */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#5BC8C8", flexShrink: 0 }} />
                                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Psychologická prax</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ background: "#EAF6FB", borderRadius: 16, padding: "20px 24px" }}>
                                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>Školská psychologička (základné aj materské školy)</p>
                                    <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Individuálne konzultácie so žiakmi a deťmi v predškolskom veku, preventívne programy, psychodiagnostika, krízová a skupinová intervencia, spolupráca s rodičmi a pedagógmi. Podpora detí v ich prirodzenom vývine a vytváranie bezpečného prostredia pre ich emocionálny aj sociálny rast.</p>
                                </div>
                                <div style={{ background: "#EAF6FB", borderRadius: 16, padding: "20px 24px" }}>
                                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>Krízová linka pomoci – IPčko.sk</p>
                                    <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Krízová intervencia a emailové poradenstvo pre klientov v náročných životných situáciách.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Psychoterapeutický výcvik */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F5A0A0", flexShrink: 0 }} />
                                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Psychoterapeutický výcvik</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ background: "#FDF0F0", borderRadius: 16, padding: "20px 24px" }}>
                                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>Transformačná systemická terapia podľa Virginie Satirovej</p>
                                    <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Komplexný psychoterapeutický výcvik zameraný na prácu so vzťahmi, rodinnými systémami, vnútornými zdrojmi a osobnostným rastom.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Práca s deťmi a rozvoj potenciálu */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#6DBF67", flexShrink: 0 }} />
                                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Práca s deťmi a rozvoj potenciálu</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ background: "#EDF7ED", borderRadius: 16, padding: "20px 24px" }}>
                                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>Mentálna aritmetika a Numicon (Kid Genius)</p>
                                    <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Podpora rozvoja oboch mozgových hemisfér, jemnej motoriky a sebadôvery detí prostredníctvom hravých a rešpektujúcich metód učenia.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Rozvoj vedomia a práca s vnútorným priestorom */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F5C842", flexShrink: 0 }} />
                                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Rozvoj vedomia a práca s vnútorným priestorom</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ background: "#fdf5d6ff", borderRadius: 16, padding: "20px 24px" }}>
                                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>Výcviky Visión ExtraOcular, A.C. – Extraokulárne videnie 1 a 2</p>
                                    <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Metódy zamerané na rozvoj vedomia, intuície a spracovanie hlbších príčin psychických a fyzických ťažkostí u detí aj dospelých, vrátane práce s rodinným systémom.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) { .exp-grid { grid-template-columns: 1fr !important; } }
                `}</style>
            </section>
        </div>
    );
}
