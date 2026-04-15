import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./lib/auth";

export async function middleware(request: NextRequest) {
    // len /admin cesty chranime
    if (!request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    // presmerovanie z /admin na /admin/dashboard alebo zobrazenie login
    const session = request.cookies.get("session")?.value;
    
    // Validate session
    let parsed = null;
    if (session) {
        parsed = await decrypt(session);
    }

    if (!parsed) {
        // Redirekt na login ak nie je prihlaseny
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
