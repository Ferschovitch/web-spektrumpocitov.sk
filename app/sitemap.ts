import type { MetadataRoute } from "next";

const BASE_URL = "https://www.spektrumpocitov.sk";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/sluzby`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/o-mne`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/kontakt`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
