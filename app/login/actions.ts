"use server";

import { compare } from "bcryptjs";
import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";

// Zamedzenie brute force rate limitingom (jednoduche lokalne)
const memoryLimiter = new Map<string, { count: number; expires: number }>();

export async function loginAction(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Minimalny rate limiting (pre demo, limituje pocet pokusov IP/celkovo)
    // Kedze sme v Edge, nemame pristup ku request.ip priamo v Server Action rovnako ako Middleware.
    // Jedboducny limiter na ucet:
    const now = Date.now();
    const attempts = memoryLimiter.get(username) || { count: 0, expires: now + 5 * 60 * 1000 };
    
    if (attempts.count >= 5 && now < attempts.expires) {
        return { error: "Príliš veľa nesprávnych pokusov. Skúste to znovu o 5 minút." };
    }

    const envUser = process.env.ADMIN_USER;
    const envHash = process.env.ADMIN_PASSWORD_HASH;

    if (!envUser || !envHash) {
        return { error: "Systém nie je nakonfigurovaný (chýbajú env premenné)." };
    }

    if (username !== envUser) {
        attempts.count += 1;
        memoryLimiter.set(username, attempts);
        return { error: "Nesprávne prihlasovacie údaje." };
    }

    const isValid = await compare(password, envHash);

    if (!isValid) {
        attempts.count += 1;
        memoryLimiter.set(username, attempts);
        return { error: "Nesprávne prihlasovacie údaje." };
    }

    // Uspesne prihlasenie - reset limits
    memoryLimiter.delete(username);

    await createSession(username);

    // Po uspesnom loign ideme do adminu
    redirect("/admin");
}
