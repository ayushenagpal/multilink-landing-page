import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SHOP_ORIGIN = "https://shop.multilink.us";

const PASSTHROUGH_PATHS = new Set(["/", "/shop", "/favicon.ico", "/robots.txt", "/sitemap.xml"]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    PASSTHROUGH_PATHS.has(pathname) ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  const target = new URL(`${SHOP_ORIGIN}${pathname}${search}`);
  return NextResponse.redirect(target, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"]
};
