import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const page = await prisma.pageContent.findUnique({ where: { slug: "o-mne" } });
    return {
        title: page?.title || "O mne – Mgr. Linda Stanislavová | Spektrum Pocitov",
        description: page?.description || "Psychologička, koučka a lektorka rozvoja mysle, vedomia a intuície. Venujem sa deťom, jednotlivcom, párom aj rodinám.",
        keywords: page?.keywords || "",
        alternates: { canonical: "https://www.spektrumpocitov.sk/o-mne" },
        openGraph: {
            title: page?.title || "O mne – Mgr. Linda Stanislavová | Spektrum Pocitov",
            description: page?.description || "Psychologička, koučka a lektorka rozvoja mysle, vedomia a intuície.",
            url: "https://www.spektrumpocitov.sk/o-mne",
            type: "profile",
        },
    };
}

export default function AboutPageWrapper() {
    return <ClientPage />;
}
