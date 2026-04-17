import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "kontakt" } });
    return {
        title: page?.title || "Kontakt – Spektrum Pocitov",
        description: page?.description || "Kontaktujte nás – napíšte alebo zavolajte Mgr. Linde Stanislavovej.",
        keywords: page?.keywords || "",
        alternates: { canonical: "https://www.spektrumpocitov.sk/kontakt" },
        openGraph: {
            title: page?.title || "Kontakt – Spektrum Pocitov",
            description: page?.description || "Kontaktujte nás – napíšte alebo zavolajte Mgr. Linde Stanislavovej.",
            url: "https://www.spektrumpocitov.sk/kontakt",
            type: "website",
        },
    };
}

export default async function ContactPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: "kontakt" } });
    const content = pageDb?.content || {};

    return <ClientPage content={content} />;
}
