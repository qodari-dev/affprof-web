import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { SITE_URLS } from "../../site-config";
import {
  getContactDictionary,
  getDictionary,
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

  const dict = await getContactDictionary(lang as Locale);
  const url = `${BASE_URL}/${lang}/contact`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/contact`;
  }
  languages["x-default"] = `${BASE_URL}/en/contact`;

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
          url: `${BASE_URL}/og-image.png`,
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
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getContactDictionary(lang as Locale);
  const mainDict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar dict={mainDict.nav} lang={lang} />

      <main className="flex-1 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              {dict.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {dict.intro}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {dict.responseTime}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {dict.directEmailPrefix}{" "}
              <a
                href={`mailto:${SITE_URLS.supportEmail}`}
                className="font-medium text-primary-light underline-offset-2 hover:underline"
              >
                {SITE_URLS.supportEmail}
              </a>{" "}
              {dict.directEmailSuffix}
            </p>
          </header>

          <div className="my-10 h-px bg-white/8" />

          <ContactForm dict={dict.form} lang={lang} />
        </div>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
