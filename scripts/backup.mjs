import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const backupsDir = path.join(rootDir, 'backups');

const date = new Date().toISOString().replace(/[:.]/g, '-');
const currentBackupDir = path.join(backupsDir, `backup-${date}`);

// Define what to backup
const dirsToBackup = ['app', 'components', 'content', 'public', 'scripts'];
const filesToBackup = [
  'package.json', 
  'package-lock.json', 
  'tsconfig.json', 
  'next.config.ts', 
  'postcss.config.mjs', 
  'eslint.config.mjs', 
  'README.md',
  '.gitignore'
];

async function copyItem(src, dest) {
  try {
    const stats = await fs.stat(src);
    if (stats.isDirectory()) {
      await fs.mkdir(dest, { recursive: true });
      const entries = await fs.readdir(src);
      for (const entry of entries) {
        await copyItem(path.join(src, entry), path.join(dest, entry));
      }
    } else {
      const destDir = path.dirname(dest);
      await fs.mkdir(destDir, { recursive: true });
      await fs.copyFile(src, dest);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(`Error copying ${src}:`, error.message);
    }
  }
}

async function runBackup() {
  console.log(`Starting backup...`);
  await fs.mkdir(currentBackupDir, { recursive: true });
  
  for (const dir of dirsToBackup) {
    console.log(`Backing up directory: ${dir}`);
    await copyItem(path.join(rootDir, dir), path.join(currentBackupDir, dir));
  }

  for (const file of filesToBackup) {
    console.log(`Backing up file: ${file}`);
    await copyItem(path.join(rootDir, file), path.join(currentBackupDir, file));
  }

  console.log(`\n✅ Backup completed successfully!`);
  console.log(`📁 Files saved to: ${currentBackupDir}`);
}

runBackup().catch(console.error);
