import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function runBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const backupDir = path.join(process.cwd(), 'backups');
    const backupFile = path.join(backupDir, `db_backup_${timestamp}.json`);

    console.log(`Starting database backup at ${timestamp}...`);

    try {
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir);
        }

        // Fetch all data from tables
        console.log('Fetching PageContent...');
        const pageContent = await prisma.pageContent.findMany();
        
        console.log('Fetching AuditLog...');
        const auditLog = await prisma.auditLog.findMany();

        const backupData = {
            metadata: {
                timestamp: new Date().toISOString(),
                version: '1.0',
                tables: ['PageContent', 'AuditLog']
            },
            data: {
                pageContent,
                auditLog
            }
        };

        fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
        
        console.log(`\nSuccessfully created backup: ${path.basename(backupFile)}`);
        console.log(`Total records: ${pageContent.length} pages, ${auditLog.length} logs.`);

    } catch (error) {
        console.error('Backup failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

runBackup();
