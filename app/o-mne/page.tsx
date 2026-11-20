import type { Metadata } from "next";
import { getPageContent } from "@/lib/page-content";
import { getPageMetadata } from "@/lib/page-metadata";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    return getPageMetadata("o-mne", await getPageContent("o-mne"));
}

export default async function AboutPageWrapper() {
    const page = await getPageContent("o-mne");
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
