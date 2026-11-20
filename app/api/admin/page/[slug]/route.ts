import { NextResponse } from "next/server";
import { getPageContent } from "@/lib/page-content";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // Auth je uz rieseny middleware-om
    const page = await getPageContent(slug);
    
    if (!page) {
        return NextResponse.json({ content: {} }, { status: 404 });
    }
    
    return NextResponse.json(page);
}
