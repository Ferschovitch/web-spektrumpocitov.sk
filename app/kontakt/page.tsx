import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "kontakt" } });
    return {
        title: { absolute: page?.title || "Kontakt – Spektrum Pocitov" },
        description: page?.description || "Kontaktujte nás – napíšte alebo zavolajte Mgr. Linde Stanislavovej.",
        keywords: page?.keywords || "",
        alternates: { canonical: "/kontakt" },
        openGraph: {
            title: page?.title || "Kontakt – Spektrum Pocitov",
            description: page?.description || "Kontaktujte nás – napíšte alebo zavolajte Mgr. Linde Stanislavovej.",
            url: "https://www.spektrumpocitov.sk/kontakt",
            type: "website",
        },
        twitter: {
            card: "summary",
            title: "Kontakt | Spektrum Pocitov",
            description: "Napíšte alebo zavolajte a dohodneme si konzultáciu v Bratislave.",
        },
    };
}

export default async function ContactPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: "kontakt" } });
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
