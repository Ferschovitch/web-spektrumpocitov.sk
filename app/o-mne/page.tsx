import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "o-mne" } });
    return {
        title: { absolute: page?.title || "O mne – Mgr. Linda Stanislavová | Spektrum Pocitov" },
        description: page?.description || "Psychologička, koučka a lektorka rozvoja mysle, vedomia a intuície. Venujem sa deťom, jednotlivcom, párom aj rodinám.",
        keywords: page?.keywords || "",
        alternates: { canonical: "/o-mne" },
        openGraph: {
            title: page?.title || "O mne – Mgr. Linda Stanislavová | Spektrum Pocitov",
            description: page?.description || "Psychologička, koučka a lektorka rozvoja mysle, vedomia a intuície.",
            url: "https://www.spektrumpocitov.sk/o-mne",
            type: "profile",
        },
        twitter: {
            card: "summary_large_image",
            title: "O nás – Mgr. Linda Stanislavová | Spektrum Pocitov",
            description: "Spoznajte Mgr. Lindu Stanislavovú – psychologičku a lektorku rozvoja mysle.",
        },
    };
}

export default async function AboutPageWrapper() {
    const page = await prisma.pageContent.findUnique({ where: { slug: "o-mne" } });
    const content = (page?.content as Record<string, unknown>) || {};

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.spektrumpocitov.sk/o-mne/#person",
        "name": content.name || "Mgr. Linda Stanislavová",
        "jobTitle": "Psychologička a terapeutka",
        "url": "https://www.spektrumpocitov.sk/o-mne",
        "worksFor": {
            "@type": "Organization",
            "@id": "https://www.spektrumpocitov.sk/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bratislava",
            "addressCountry": "SK"
        },
        "telephone": "+421908500266",
        "email": "info@spektrumpocitov.sk"
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
                "name": "O mne",
                "item": "https://www.spektrumpocitov.sk/o-mne"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
            />
            <ClientPage content={content} />
        </>
    );
}
