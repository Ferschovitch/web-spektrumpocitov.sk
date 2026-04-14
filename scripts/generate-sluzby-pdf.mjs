import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, '..', 'sluzby.pdf');

console.log('Launching browser...');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

// Set viewport to A4-like width
await page.setViewport({ width: 1200, height: 900 });

console.log('Navigating to http://localhost:3000/sluzby ...');
await page.goto('http://localhost:3000/sluzby', {
  waitUntil: 'networkidle0',
  timeout: 30000,
});

// Wait a bit for fonts and animations to settle
await new Promise(r => setTimeout(r, 2000));

console.log('Generating PDF...');
await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: {
    top: '20mm',
    bottom: '20mm',
    left: '15mm',
    right: '15mm',
  },
});

await browser.close();
console.log(`PDF saved to: ${outputPath}`);
