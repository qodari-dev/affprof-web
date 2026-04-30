import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  getDictionary,
  getPrivacyDictionary,
  hasLocale,
  locales,
  type Locale,
} from "../dictionaries";

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

  const dict = await getPrivacyDictionary(lang as Locale);
  const url = `${BASE_URL}/${lang}/privacy`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/privacy`;
  }
  languages["x-default"] = `${BASE_URL}/en/privacy`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: "AffProf",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: `${BASE_URL}/og-image-v2.png`,
          width: 1200,
          height: 630,
          alt: "AffProf — Affiliate Link Management",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${BASE_URL}/og-image-v2.png`],
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getPrivacyDictionary(lang as Locale);
  const mainDict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar dict={mainDict.nav} lang={lang} />

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

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
