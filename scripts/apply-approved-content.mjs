import nextEnv from '@next/env';
import { PrismaClient } from '@prisma/client';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { createHash } from 'node:crypto';

const args = process.argv.slice(2);
if (args.some(arg => arg !== '--apply')) throw new Error('Usage: node scripts/apply-approved-content.mjs [--apply]');
const apply = args.includes('--apply');
nextEnv.loadEnvConfig(process.cwd(), true);
const source = await readFile(new URL('../content/client-copy.json', import.meta.url), 'utf8');
const copy = JSON.parse(source);
const revision = createHash('sha256').update(source).digest('hex').slice(0, 12);
const slugs = Object.keys(copy.pages);
const prisma = new PrismaClient();

try {
    const pages = await prisma.pageContent.findMany({ where: { slug: { in: slugs } } });
    const updates = slugs.map(slug => {
        const page = pages.find(item => item.slug === slug);
        if (!page) throw new Error(`Missing database page: ${slug}`);
        const patch = copy.pages[slug];
        const data = {
            title: patch.title,
            description: patch.description,
            keywords: copy.keywords.join(', '),
            content: { ...page.content, ...patch.content },
        };
        const fields = Object.keys(data).filter(key => !isDeepStrictEqual(data[key], page[key]));
        return { page, data, fields };
    }).filter(update => update.fields.length > 0);

    console.log(`${apply ? 'APPLY' : 'DRY RUN'}: approved content ${revision}; configured PostgreSQL database (not the local preview).`);
    console.table(updates.map(({ page, fields }) => ({ page: page.slug, fields: fields.join(', ') })));
    if (!updates.length) {
        console.log('All approved fields already match; no database writes.');
    } else if (!apply) {
        console.log('No database writes. Use --apply to publish this reviewed plan.');
    } else {
        const backupDirectory = resolve('backups');
        await mkdir(backupDirectory, { recursive: true });
        const backup = resolve(backupDirectory, `approved-content-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
        await writeFile(backup, JSON.stringify({ revision, createdAt: new Date().toISOString(), pages }, null, 2) + '\n', { flag: 'wx' });

        await prisma.$transaction(async tx => {
            for (const { page, data } of updates) {
                const result = await tx.pageContent.updateMany({
                    where: { id: page.id, updatedAt: page.updatedAt },
                    data,
                });
                if (result.count !== 1) throw new Error(`Concurrent edit detected for ${page.slug}; all changes rolled back.`);
            }
            await tx.auditLog.create({
                data: {
                    action: 'DEPLOY_APPROVED_CONTENT',
                    details: `Approved copy ${revision}: ${updates.map(update => update.page.slug).join(', ')}`,
                },
            });
        }, { timeout: 20000 });
        console.log(`Published ${updates.length} pages. Previous records backed up to ${backup}`);
    }
} finally {
    await prisma.$disconnect();
}
