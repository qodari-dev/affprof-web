import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTermsDictionary, hasLocale, locales, type Locale } from "../dictionaries";

const BASE_URL = "https://affprof.com";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getTermsDictionary(lang as Locale);
  const url = `${BASE_URL}/${lang}/terms`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/terms`;
  }

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { canonical: url, languages },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getTermsDictionary(lang as Locale);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-dark/95 backdrop-blur border-b border-border-subtle">
        <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image src="/logo-close.png" alt="AffProf" width={28} height={28} className="h-7 w-7 object-contain" />
            <span className="text-base font-semibold tracking-tight">AffProf</span>
          </Link>
          <Link
            href={`/${lang}`}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            &larr; {lang === "es" ? "Volver" : "Back"}
          </Link>
        </nav>
      </header>

      <main className="flex-1 py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{dict.title}</h1>
          <p className="mt-2 text-sm text-text-muted">
            {lang === "es" ? "Última actualización" : "Last updated"}: {dict.lastUpdated}
          </p>

          <div className="mt-10 space-y-8">
            {dict.sections.map((section: { heading: string; content: string }) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-text-primary">{section.heading}</h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="border-t border-border-subtle py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-xs text-text-muted">
          &copy; 2025 AffProf. All rights reserved. · hello@affprof.com
        </div>
      </footer>
    </>
  );
}
