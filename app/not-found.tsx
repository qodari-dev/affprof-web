// Next.js uses this global not-found for ALL unmatched routes.
// app/[lang]/not-found.tsx is only triggered by explicit notFound() calls.
// So this file handles both cases and detects the lang from x-pathname header set by proxy.ts.

import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Locale } from "./[lang]/dictionaries";

export default async function GlobalNotFound() {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "/";
  const lang: Locale = pathname.startsWith("/es") ? "es" : "en";

  const dict = await getDictionary(lang);
  const t = dict.notFound;
  const home = `/${lang}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_65%)]"
      />

      <Link
        href={home}
        className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <Image
          src="/logo-close.png"
          alt="AffProf"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <span className="text-base font-semibold tracking-tight">AffProf</span>
      </Link>

      <div className="flex flex-col items-center gap-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-error/10 text-error ring-1 ring-error/20">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 17H7a5 5 0 0 1 0-10h2" />
            <path d="M15 7h2a5 5 0 0 1 4.54 7" />
            <line x1="8" y1="12" x2="12" y2="12" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </div>

        <p
          aria-hidden
          className="select-none text-[9rem] sm:text-[12rem] font-black leading-none tracking-tight bg-linear-to-b from-text-primary/30 via-text-primary/15 to-transparent bg-clip-text text-transparent"
        >
          404
        </p>
      </div>

      <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        {t.title}
      </h1>
      <p className="mt-3 text-text-secondary text-base max-w-sm">
        {t.subtitle}
      </p>
      <p className="mt-2 text-text-muted text-sm max-w-xs">{t.hint}</p>

      <Link
        href={home}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2.5 transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        {t.cta}
      </Link>
    </div>
  );
}
