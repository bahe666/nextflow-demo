import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["zh", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path starts with a supported locale
  const pathnameLocale = SUPPORTED_LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    // Strip the locale prefix from the URL
    const newPathname = pathname.replace(`/${pathnameLocale}`, "") || "/";
    const url = new URL(newPathname, request.url);

    // Set the locale cookie on the request so SSR can read it
    request.cookies.set("locale", pathnameLocale);

    const response = NextResponse.rewrite(url, { request });
    // Also set it on the response for the browser to persist
    response.cookies.set("locale", pathnameLocale, { maxAge: 31536000 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
