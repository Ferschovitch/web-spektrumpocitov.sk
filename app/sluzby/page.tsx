import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "sluzby" } });
    return {
        title: { absolute: page?.title || "Služby – Spektrum Pocitov" },
        description: page?.description || "Konzultácie, tréningy a kurzy rozvoja vedomia pre deti aj dospelých.",
        keywords: page?.keywords || "",
        alternates: { canonical: "/sluzby" },
        openGraph: {
            title: page?.title || "Služby – Spektrum Pocitov",
            description: page?.description || "Konzultácie, tréningy a kurzy rozvoja vedomia pre deti aj dospelých.",
            url: "https://www.spektrumpocitov.sk/sluzby",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Služby – Psychologická podpora | Spektrum Pocitov",
            description: "Terapeutická podpora pre deti, rodiny a jednotlivcov. Theta Healing, Etikoterapia, Vision Extra Ocular a viac.",
        },
    };
}

export default async function SluzbyPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: "sluzby" } });
    const content = (pageDb?.content as Record<string, unknown>) || {};

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.spektrumpocitov.sk/sluzby/#service",
        "name": "Psychologická podpora a rozvoj vedomia",
        "provider": {
            "@type": "Person",
            "@id": "https://www.spektrumpocitov.sk/o-mne/#person",
            "name": "Mgr. Linda Stanislavová"
        },
        "areaServed": {
            "@type": "City",
            "name": "Bratislava"
        },
        "url": "https://www.spektrumpocitov.sk/sluzby"
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Domov",
                "item": "https://www.spektrumpocitov.sk"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Služby",
                "item": "https://www.spektrumpocitov.sk/sluzby"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
            />
            <ClientPage content={content} />
        </>
    );
}
