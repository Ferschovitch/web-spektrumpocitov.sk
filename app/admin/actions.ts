"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth";

export async function savePageContent(prevState: any, formData: FormData) {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session || !(await decrypt(session))) {
        return { error: "Nepovolený prístup. Relácia vypršala." };
    }

    const slug = formData.get("slug") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const keywords = formData.get("keywords") as string;
    
    // Extrahujeme vsetky kluce
    const allKeys = Array.from(formData.keys());
    const contentValues: Record<string, any> = {};
    
    for (const key of allKeys) {
        if (key.startsWith("content_")) {
            const actualKey = key.replace("content_", "");
            const value = formData.get(key) as string;
            
            // Jednoduche parsovanie JSON struktur ak ide o array objektov z textarea
            try {
                if (value.trim().startsWith("[") || value.trim().startsWith("{")) {
                    contentValues[actualKey] = JSON.parse(value);
                } else {
                    contentValues[actualKey] = value;
                }
            } catch (e) {
                // fallback as text
                contentValues[actualKey] = value;
            }
        }
    }

    try {
        await prisma.pageContent.upsert({
            where: { slug },
            update: {
                title,
                description,
                keywords,
                content: contentValues
            },
            create: {
                slug,
                title,
                description,
                keywords,
                content: contentValues
            }
        });

        // Vytvorenie auditu
        await prisma.auditLog.create({
            data: {
                action: "UPDATE_PAGE",
                details: `Stranka ${slug} bola upravena`,
                ip: "admin"
            }
        });

        // Invalidate the cache for the frontend so it immediately updates
        revalidatePath("/");
        revalidatePath(`/${slug}`);
        
        return { success: "Obsah stránky bol úspešne uložený." };
    } catch (error) {
        console.error(error);
        return { error: "Nepodarilo sa uložiť obsah. Skontrolujte formát JSON textov." };
    }
}
