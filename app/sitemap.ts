import type { MetadataRoute } from "next";

const BASE_URL = "https://www.spektrumpocitov.sk";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/sluzby`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/o-mne`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/kontakt`,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
