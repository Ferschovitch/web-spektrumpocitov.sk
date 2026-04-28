import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "sluzby" } });
    return {
        title: page?.title || "Služby – Spektrum Pocitov",
        description: page?.description || "Konzultácie, tréningy a kurzy rozvoja vedomia pre deti aj dospelých.",
        keywords: page?.keywords || "",
        alternates: { canonical: "https://www.spektrumpocitov.sk/sluzby" },
        openGraph: {
            title: page?.title || "Služby – Spektrum Pocitov",
            description: page?.description || "Konzultácie, tréningy a kurzy rozvoja vedomia pre deti aj dospelých.",
            url: "https://www.spektrumpocitov.sk/sluzby",
            type: "website",
        },
    };
}

export default async function SluzbyPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: "sluzby" } });
    const content = (pageDb?.content as any) || {};

    return <ClientPage content={content} />;
}
