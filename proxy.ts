import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  // Simple matching: find first locale that appears in accept-language
  for (const locale of locales) {
    if (acceptLang.toLowerCase().includes(locale)) {
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
