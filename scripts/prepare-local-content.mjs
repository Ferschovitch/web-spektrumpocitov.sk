import nextEnv from '@next/env';
import { PrismaClient } from '@prisma/client';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

nextEnv.loadEnvConfig(process.cwd(), true);
const copy = JSON.parse(await readFile(new URL('../content/client-copy.json', import.meta.url), 'utf8'));
const file = resolve(process.env.LOCAL_CONTENT_FILE || '.local/page-content.json');
const prisma = new PrismaClient();

try {
    let pages;
    try {
        pages = JSON.parse(await readFile(file, 'utf8'));
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        // Only public page content is copied. No remote writes are performed.
        pages = await prisma.pageContent.findMany();
    }
    if (!Array.isArray(pages)) throw new Error('Invalid local page content file');
    for (const slug of Object.keys(copy.pages)) {
        if (!pages.some(page => page.slug === slug)) throw new Error(`Missing page: ${slug}`);
    }
    await mkdir(dirname(file), { recursive: true });
    const backup = `${file}.${new Date().toISOString().replace(/[:.]/g, '-')}.backup.json`;
    await writeFile(backup, JSON.stringify(pages, null, 2) + '\n');
    const updated = pages.map(page => {
        const patch = copy.pages[page.slug];
        if (!patch) return page;
        return {
            ...page,
            title: patch.title,
            description: patch.description,
            keywords: copy.keywords.join(', '),
            content: { ...page.content, ...patch.content },
            updatedAt: new Date().toISOString(),
        };
    });
    await writeFile(file, JSON.stringify(updated, null, 2) + '\n');
    console.log(`Local content prepared: ${file}`);
    console.log('Use LOCAL_CONTENT_FILE=.local/page-content.json in .env.local. The remote database was not changed.');
} finally {
    await prisma.$disconnect();
}
