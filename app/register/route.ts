import { NextRequest, NextResponse } from "next/server";
import { SITE_URLS } from "../site-config";

function buildRegisterUrl(request: NextRequest) {
  const targetUrl = new URL(SITE_URLS.register);
  targetUrl.search = request.nextUrl.search;

  return targetUrl;
}

export function GET(request: NextRequest) {
  return NextResponse.redirect(buildRegisterUrl(request), 302);
}

export function HEAD(request: NextRequest) {
  return NextResponse.redirect(buildRegisterUrl(request), 302);
}
