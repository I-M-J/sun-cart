import dns from "node:dns";
import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

dns.setServers(['8.8.8.8', '8.8.4.4']);

export const proxy = async (request) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: [
        "/products/:path+",
        "/profile/:path*"
    ]
}