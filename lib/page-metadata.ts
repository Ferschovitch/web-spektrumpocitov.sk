import type { Metadata } from "next";
import copy from "@/content/client-copy.json";

type PageSlug = keyof typeof copy.pages;
type StoredMetadata = { title?: string | null; description?: string | null; keywords?: string | null };

export function getPageMetadata(slug: PageSlug, page?: StoredMetadata | null): Metadata {
    const defaults = copy.pages[slug];
    const title = page?.title || defaults.title;
    const description = page?.description || defaults.description;
    const path = slug === "home" ? "/" : `/${slug}`;

    return {
        title: { absolute: title },
        description,
        keywords: page?.keywords || copy.keywords,
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: `https://www.spektrumpocitov.sk${path}`,
            type: slug === "o-mne" ? "profile" : "website",
            siteName: "Spektrum Pocitov",
            locale: "sk_SK",
            images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Spektrum Pocitov – Psychologická podpora" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.png"],
        },
    };
}
