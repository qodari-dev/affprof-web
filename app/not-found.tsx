"use client";

// Next.js uses this global not-found for ALL unmatched routes.
// app/[lang]/not-found.tsx is only triggered by explicit notFound() calls.
// So this file handles both cases and detects the lang from the URL.

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const copy = {
  en: {
    title: "Page not found",
    subtitle: "Looks like this link is broken — ironic, we know.",
    cta: "Back to home",
    hint: "If you were looking for something specific, it may have moved or never existed.",
  },
  es: {
    title: "Página no encontrada",
    subtitle: "Parece que este enlace está roto — irónico, lo sabemos.",
    cta: "Volver al inicio",
    hint: "Si buscabas algo en concreto, es posible que se haya movido o nunca haya existido.",
  },
} as const;

export default function GlobalNotFound() {
  const [lang] = useState<"en" | "es">(() =>
    typeof window !== "undefined" && window.location.pathname.startsWith("/es")
      ? "es"
      : "en",
  );

  const t = copy[lang];
  const home = `/${lang}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.12),transparent_65%)]"
      />

      <Link href={home} className="flex items-center gap-2 mb-12">
        <Image
          src="/logo-close.png"
          alt="AffProf"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <span className="text-lg font-semibold tracking-tight">AffProf</span>
      </Link>

      <div className="relative">
        <p
          aria-hidden
          className="select-none text-[10rem] sm:text-[14rem] font-black leading-none text-border-subtle/60 tracking-tight"
        >
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
            <svg
              width="32"
              height="32"
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
        </div>
      </div>

      <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
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
