import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  const primary = acceptLang.split(",")[0].split(";")[0].trim().toLowerCase();
  for (const locale of locales) {
    if (primary === locale || primary.startsWith(`${locale}-`)) {
      return locale;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  if (pathname === "/") {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl, 308);
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths, static files, images, and metadata files
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo-close.png|logo-fondo-blanco.png|logo-fondo-negro.png|.*\\.svg$|.*\\.png$|.*\\.ico$).*)",
  ],
};
