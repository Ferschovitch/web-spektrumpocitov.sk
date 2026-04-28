export type FieldType = "text" | "textarea" | "array" | "color";

export interface FieldSchema {
    name: string;
    label: string;
    type: FieldType;
    schema?: FieldSchema[];
}

export interface SectionSchema {
    id: string;
    title: string;
    fields: FieldSchema[];
}

export const PAGE_SCHEMAS: Record<string, SectionSchema[]> = {
    home: [
        {
            id: "hero",
            title: "Hlavička (Hero)",
            fields: [
                { name: "heroTitleStart", label: "Nadpis (začiatok)", type: "text" },
                { name: "heroTitleHighlight1", label: "Zvýraznené slovo 1", type: "text" },
                { name: "heroTitleMiddle", label: "Stredný text", type: "text" },
                { name: "heroTitleHighlight2", label: "Zvýraznené slovo 2", type: "text" },
                { name: "heroBody1", label: "Hlavný text (odsek 1)", type: "textarea" },
                { name: "heroBody2", label: "Hlavný text (odsek 2)", type: "textarea" },
                { name: "heroBody3", label: "Hlavný text (odsek 3)", type: "textarea" },
            ]
        },
        {
            id: "feelings",
            title: "Sekcia: Naše pocity",
            fields: [
                { name: "feelingsTitle", label: "Hlavný nadpis", type: "text" },
                { name: "feelingsSubtitle", label: "Podnadpis", type: "textarea" },
                {
                    name: "feelingsCards",
                    label: "Karty pocitov",
                    type: "array",
                    schema: [
                        { name: "emoji", label: "Emoji ikona", type: "text" },
                        { name: "color", label: "Farba témy (Hex: #...)", type: "color" },
                        { name: "bg", label: "Farba pozadia (Hex: #...)", type: "color" },
                        { name: "label", label: "Názov kategórie", type: "text" },
                        { name: "text", label: "Popis kategórie", type: "textarea" }
                    ]
                }
            ]
        },
        {
            id: "approach",
            title: "Sekcia: Prístup / Témy",
            fields: [
                { name: "approachTitle", label: "Nadpis", type: "text" },
                {
                    name: "approachCards",
                    label: "Karty prístupov",
                    type: "array",
                    schema: [
                        { name: "icon", label: "Ikona alebo emoji", type: "text" },
                        { name: "title", label: "Názov prístupu", type: "text" },
                        { name: "text", label: "Popis prístupu", type: "textarea" },
                        { name: "accentBg", label: "Farba pozadia (Hex: #...)", type: "color" }
                    ]
                }
            ]
        },
        {
            id: "cta",
            title: "Výzva k akcii (Pätička bannera)",
            fields: [
                { name: "ctaTitleStart", label: "Nadpis (začiatok)", type: "text" },
                { name: "ctaTitleHighlight", label: "Zvýraznené slovo", type: "text" },
                { name: "ctaSubtitle", label: "Podnadpis / Doplnkový text", type: "textarea" }
            ]
        },
        {
            id: "carousel",
            title: "Sekcia: Myšlienky / Carousel",
            fields: [
                {
                    name: "carouselCards",
                    label: "Karty v carouseli",
                    type: "array",
                    schema: [
                        { name: "title", label: "Nadpis karty", type: "text" },
                        { name: "color", label: "Farba akcentu (bodka/šípky)", type: "color" },
                        { name: "bg", label: "Farba pozadia", type: "color" },
                        {
                            name: "paragraphs",
                            label: "Odseky textu",
                            type: "array",
                            schema: [
                                { name: "text", label: "Text odseku", type: "textarea" }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    sluzby: [
        {
            id: "general",
            title: "Nadpis Stránky",
            fields: [
                { name: "pageTitle", label: "Nadpis Stránky (H1)", type: "text" }
            ]
        },
        {
            id: "konzultacia",
            title: "Modul: Konzultácia",
            fields: [
                { name: "konzultaciaTitle", label: "Nadpis", type: "text" },
                { name: "konzultaciaDesc", label: "Popis", type: "textarea" },
                { name: "konzultaciaBtn", label: "Text Tlačidla", type: "text" }
            ]
        },
        {
            id: "trening",
            title: "Modul: Tréning vybranej oblasti",
            fields: [
                { name: "treningTitle", label: "Nadpis", type: "text" },
                { name: "treningDesc", label: "Popis", type: "textarea" },
                { name: "treningBtn", label: "Text Tlačidla", type: "text" }
            ]
        },
        {
            id: "kurzDeti",
            title: "Modul: Kurz rozvoja vedomia pre deti",
            fields: [
                { name: "detiTitle", label: "Hlavný nadpis", type: "text" },
                { name: "detiSubtitle", label: "Podnadpis", type: "text" },
                { name: "detiDesc", label: "Krátky text (benefity)", type: "textarea" },
                {
                    name: "detiHelpsWith",
                    label: "Zoznam: S čím kurz pomáha",
                    type: "array",
                    schema: [
                        { name: "text", label: "Položka (text)", type: "text" }
                    ]
                },
                {
                    name: "detiBenefits",
                    label: "Zoznam: Prínosy",
                    type: "array",
                    schema: [
                        { name: "text", label: "Položka (text)", type: "text" }
                    ]
                },
                {
                    name: "detiHowItWorks",
                    label: "Zoznam: Ako prebieha (3 kroky)",
                    type: "array",
                    schema: [
                        { name: "label", label: "Nadpis kroku", type: "text" },
                        { name: "text", label: "Popis kroku", type: "textarea" },
                        { name: "color", label: "Farba nadpisu (Hex: #...)", type: "color" },
                        { name: "bg", label: "Farba pozadia (Hex: #...)", type: "color" }
                    ]
                },
                { name: "detiKurzBtn", label: "Text tlačidla kurzu", type: "text" }
            ]
        },
        {
            id: "kurzDospeli",
            title: "Modul: Kurz rozvoja vedomia pre dospelých",
            fields: [
                { name: "dospeliTitle", label: "Hlavný nadpis", type: "text" },
                { name: "dospeliSubtitle", label: "Podnadpis", type: "text" },
                { name: "dospeliDesc", label: "Text informácie", type: "textarea" }
            ]
        }
    ],
    "o-mne": [
        {
            id: "hero",
            title: "Profil & Bio",
            fields: [
                { name: "name", label: "Meno", type: "text" },
                { name: "paragraph1", label: "O mne (1. odsek)", type: "textarea" },
                { name: "paragraph2", label: "O mne (2. odsek)", type: "textarea" },
                { name: "paragraph3", label: "O mne (3. odsek)", type: "textarea" },
                {
                    name: "expertiseTags",
                    label: "Menovky (Základné školy, atď.)",
                    type: "array",
                    schema: [
                        { name: "label", label: "Názov menovky", type: "text" },
                        { name: "color", label: "Farba textu", type: "color" },
                        { name: "bg", label: "Farba pozadia", type: "color" }
                    ]
                },
                {
                    name: "bulletPoints",
                    label: "Aktivity / Metódy",
                    type: "array",
                    schema: [
                        { name: "text", label: "Text odrážky", type: "text" },
                        { name: "color", label: "Farba ikony", type: "color" },
                        { name: "bg", label: "Farba pozadia", type: "color" }
                    ]
                }
            ]
        },
        {
            id: "values",
            title: "Hodnoty pri práci",
            fields: [
                { name: "valuesTitle", label: "Nadpis sekcie hodnôt", type: "text" },
                {
                    name: "valuesCards",
                    label: "Karty hodnôt",
                    type: "array",
                    schema: [
                        { name: "label", label: "Nadpis", type: "text" },
                        { name: "text", label: "Popis", type: "textarea" },
                        { name: "color", label: "Farba bodky", type: "color" },
                        { name: "bg", label: "Farba pozadia", type: "color" }
                    ]
                }
            ]
        }
    ],
    kontakt: [
        {
            id: "header",
            title: "Hlavička kontaktu",
            fields: [
                { name: "title", label: "Nadpis stránky", type: "text" },
                { name: "subtitle", label: "Podnadpis", type: "textarea" },
                { name: "formTitle", label: "Nadpis nad formulárom", type: "text" }
            ]
        },
        {
            id: "contactData",
            title: "Kontaktné údaje",
            fields: [
                { name: "email", label: "E-mail", type: "text" },
                { name: "phone", label: "Telefónne číslo", type: "text" },
                { name: "address", label: "Adresa", type: "text" },
            ]
        },
        {
            id: "links",
            title: "Užitočné odkazy",
            fields: [
                {
                    name: "partnerLinks",
                    label: "Klikateľné Odkazy",
                    type: "array",
                    schema: [
                        { name: "title", label: "Názov odkazu", type: "text" },
                        { name: "subtitle", label: "Podnadpis", type: "text" },
                        { name: "url", label: "Akvítny odkaz (URL)", type: "text" },
                        { name: "icon", label: "Emoji", type: "text" },
                        { name: "color", label: "Farba okraja", type: "color" },
                        { name: "bg", label: "Farba ikony na pozadí", type: "color" },
                    ]
                }
            ]
        }
    ],
    global: [
        {
            id: "footer",
            title: "Pätička",
            fields: [
                { name: "footerText", label: "Úvodný text", type: "textarea" },
                { name: "footerEmail", label: "E-mail", type: "text" },
                { name: "footerPhone", label: "Telefón", type: "text" },
                { name: "footerAddress", label: "Adresa", type: "text" },
                { name: "footerCopyright", label: "Copyright text", type: "text" }
            ]
        }
    ]
};
