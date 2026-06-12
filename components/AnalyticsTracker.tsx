"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const lastTracked = useRef<string | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Ochrana pred duplicitným odoslaním v rovnakom renderi (napr. React StrictMode v dev)
        if (lastTracked.current === pathname) return;
        lastTracked.current = pathname;

        const trackPage = async () => {
            try {
                // Ignorujeme administrátorské, prihlasovacie a API cesty
                if (
                    pathname.startsWith("/admin") || 
                    pathname.startsWith("/api") || 
                    pathname.startsWith("/login") ||
                    pathname.includes("/_not-found")
                ) {
                    return;
                }

                await fetch("/api/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        path: pathname,
                        referrer: document.referrer || null,
                    }),
                    keepalive: true,
                });
            } catch (err) {
                // Tichá ignorácia chýb na klientskej strane
                console.warn("Chyba sledovania návštevnosti:", err);
            }
        };

        // Oneskorenie, aby sme neblokovali dôležité vykresľovanie stránky pre používateľa
        const timer = setTimeout(trackPage, 200);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null; // Komponent nemá vizuálnu reprezentáciu
}
