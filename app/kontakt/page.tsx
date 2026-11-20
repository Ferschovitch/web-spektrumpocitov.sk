import type { Metadata } from "next";
import { getPageContent } from "@/lib/page-content";
import { getPageMetadata } from "@/lib/page-metadata";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    return getPageMetadata("kontakt", await getPageContent("kontakt"));
}

export default async function ContactPageWrapper() {
    const pageDb = await getPageContent("kontakt");
    const content = (pageDb?.content as Record<string, unknown>) || {};

    const contactPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.spektrumpocitov.sk/kontakt/#webpage",
        "name": "Kontakt – Spektrum Pocitov",
        "url": "https://www.spektrumpocitov.sk/kontakt",
        "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.spektrumpocitov.sk/#organization"
        }
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
                "name": "Kontakt",
                "item": "https://www.spektrumpocitov.sk/kontakt"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c") }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
            />
            <ClientPage content={content} />
        </>
    );
}
