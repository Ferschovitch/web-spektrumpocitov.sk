import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // Auth je uz rieseny middleware-om
    const page = await prisma.pageContent.findUnique({
        where: { slug }
    });
    
    if (!page) {
        return NextResponse.json({ content: {} }, { status: 404 });
    }
    
    return NextResponse.json(page);
}
