import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
    try {
        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { path, referrer } = body;

        if (!path) {
            return NextResponse.json({ error: "Path is required" }, { status: 400 });
        }

        // Ignorujeme administrátorské a API cesty
        if (path.startsWith("/admin") || path.startsWith("/api") || path.startsWith("/_next") || path === "/favicon.ico") {
            return NextResponse.json({ skipped: "Technical path ignored" });
        }

        const userAgent = request.headers.get("user-agent") || "";

        // Filtrovanie vyhľadávacích robotov a automatizovaných skenerov (bot, crawler, spider atď.)
        const botRegex = /bot|crawler|spider|lighthouse|slurp|duckduckbot|baiduspider|yandex/i;
        if (botRegex.test(userAgent)) {
            return NextResponse.json({ skipped: "Bot user-agent ignored" });
        }

        // GDPR kompatibilná anonymizácia IP adresy (IP adresa + aktuálny deň)
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || 
                   request.headers.get("x-real-ip") || 
                   "127.0.0.1";
        
        // Získame dnešný dátum v tvare YYYY-MM-DD
        const todayStr = new Date().toISOString().split("T")[0];
        
        // Vytvoríme jednosmerný hash z kombinácie IP a dátumu
        const ipHash = createHash("sha256")
            .update(`${ip}-${todayStr}`)
            .digest("hex");

        // Geolokácia z CDN hlavičiek (napr. Vercel alebo Cloudflare)
        const country = request.headers.get("x-vercel-ip-country") || 
                        request.headers.get("cf-ipcountry") || 
                        request.headers.get("x-country-code") || 
                        null;

        // Uložíme zobrazenie stránky do databázy
        await prisma.pageView.create({
            data: {
                path,
                referrer: referrer || null,
                ipHash,
                userAgent: userAgent || null,
                country
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Chyba pri sledovaní návštevnosti:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
