import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SetLang from "../components/SetLang";
import { SITE_URLS } from "../site-config";
import { getDictionary, hasLocale, locales, type Locale } from "./dictionaries";

const BASE_URL = SITE_URLS.baseUrl;

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

  const dict = await getDictionary(lang as Locale);
  const url = `${BASE_URL}/${lang}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}`;
  }
  languages["x-default"] = `${BASE_URL}/en`;

  return {
    title: {
      default: dict.meta.title,
      template: `%s | AffProf`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <SetLang lang={lang} />
      {children}
    </>
  );
}
