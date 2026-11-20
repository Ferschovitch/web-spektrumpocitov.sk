import "server-only";
import { readFile, rename, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { randomUUID } from "node:crypto";
import type { PageContent, Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";

// Opt-in local content store: never fall back to the shared database if it fails.
export function usesLocalContent() {
    return Boolean(process.env.LOCAL_CONTENT_FILE);
}

async function readLocalPages(): Promise<PageContent[]> {
    const file = resolve(process.env.LOCAL_CONTENT_FILE!);
    const pages = JSON.parse(await readFile(file, "utf8")) as PageContent[];
    if (!Array.isArray(pages) || pages.some(page => typeof page.slug !== "string")) {
        throw new Error("Invalid local page content file");
    }
    return pages.map(page => ({ ...page, updatedAt: new Date(page.updatedAt) }));
}

export async function getPageContent(slug: string) {
    if (usesLocalContent()) {
        const pages = await readLocalPages();
        return pages.find(page => page.slug === slug) ?? null;
    }
    return prisma.pageContent.findUnique({ where: { slug } });
}

interface PageUpdate {
    slug: string;
    title: string;
    description: string;
    keywords: string;
    content: Prisma.InputJsonObject;
}

// Serialize local saves so two editor submissions cannot overwrite each other.
let localSave: Promise<unknown> = Promise.resolve();

export async function savePageContentData(data: PageUpdate) {
    if (!usesLocalContent()) {
        return prisma.pageContent.upsert({
            where: { slug: data.slug },
            update: data,
            create: data,
        });
    }

    const save = localSave.then(async () => {
        const pages = await readLocalPages();
        const index = pages.findIndex(page => page.slug === data.slug);
        const page = {
            ...data,
            id: index >= 0 ? pages[index].id : randomUUID(),
            updatedAt: new Date(),
        };
        const next = [...pages];
        next.splice(index >= 0 ? index : next.length, index >= 0 ? 1 : 0, page as PageContent);
        const file = resolve(process.env.LOCAL_CONTENT_FILE!);
        const temporary = `${file}.${randomUUID()}.tmp`;
        await writeFile(temporary, JSON.stringify(next, null, 2) + "\n", "utf8");
        await rename(temporary, file);
        return page;
    });
    localSave = save.catch(() => undefined);
    return save;
}
