import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'spektrum_pocitov_komplet.pdf');

const allRoutes = [
    '/',
    '/o-mne',
    '/sluzby',
    '/kontakt'
];

async function generatePDF() {
    console.log(`Starting simplified PDF generation for ${allRoutes.length} pages...`);
    
    const browser = await puppeteer.launch({ headless: true });
    const mergedPdf = await PDFDocument.create();

    for (const route of allRoutes) {
        const url = `${BASE_URL}${route}`;
        console.log(`Capturing: ${url}`);
        
        const page = await browser.newPage();
        
        try {
            // Set PC Desktop Viewport
            await page.setViewport({ width: 1280, height: 800 });
            
            // Navigate to page
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
            
            // Very simple scroll to trigger animations
            await page.evaluate(async () => {
                window.scrollTo(0, document.body.scrollHeight);
                await new Promise(r => setTimeout(r, 1000));
                window.scrollTo(0, 0);
                await new Promise(r => setTimeout(r, 500));
            });

            // Capture the full page exactly as seen
            const screenshotBuffer = await page.screenshot({ fullPage: true });

            // Add to PDF
            const image = await mergedPdf.embedPng(screenshotBuffer);
            const { width, height } = image.scale(1);
            const pdfPage = mergedPdf.addPage([width, height]);
            pdfPage.drawImage(image, { x: 0, y: 0, width, height });
            
        } catch (error) {
            console.error(`Failed to capture ${url}:`, error.message);
        } finally {
            await page.close();
        }
    }

    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(OUTPUT_FILE, mergedPdfBytes);
    
    await browser.close();
    console.log(`\nSuccessfully created PDF (Screenshot based): ${OUTPUT_FILE}`);
}

generatePDF().catch(err => {
    console.error('Fatal error during PDF generation:', err);
    process.exit(1);
});
