"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLangSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  const otherLang = lang === "en" ? "es" : "en";
  const otherLabel = lang === "en" ? "Español" : "English";
  const otherCode = lang === "en" ? "ES" : "EN";

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    segments.push(otherLang);
  } else {
    segments[0] = otherLang;
  }
  const targetHref = `/${segments.join("/")}`;

  return (
    <Link
      href={targetHref}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-text-secondary transition-colors hover:border-primary/40 hover:text-text-primary"
      aria-label={`Switch to ${otherLabel}`}
    >
      <span className="tracking-[0.18em]">{otherCode}</span>
      <span className="text-text-muted">·</span>
      <span className="text-text-muted normal-case">{otherLabel}</span>
    </Link>
  );
}
