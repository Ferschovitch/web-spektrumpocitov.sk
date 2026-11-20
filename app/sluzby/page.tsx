import type { Metadata } from "next";
import { getPageContent } from "@/lib/page-content";
import { getPageMetadata } from "@/lib/page-metadata";
import ServicesFaq from "@/components/ServicesFaq";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    return getPageMetadata("sluzby", await getPageContent("sluzby"));
}

export default async function SluzbyPageWrapper() {
    const pageDb = await getPageContent("sluzby");
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
            <ServicesFaq content={content} />
        </>
    );
}
