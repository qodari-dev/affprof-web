import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  BLOG_INDEX_COPY,
  getBlogPath,
  getBlogPosts,
} from "../../blog/content";
import { SITE_URLS } from "../../site-config";
import { getDictionary, hasLocale, locales, type Locale } from "../dictionaries";

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

  const copy = BLOG_INDEX_COPY[lang];
  const url = `${BASE_URL}/${lang}/blog`;

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}/blog`;
  }
  languages["x-default"] = `${BASE_URL}/en/blog`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "AffProf",
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: `${BASE_URL}/og-image-v2.png`,
          width: 1200,
          height: 630,
          alt: "AffProf",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [`${BASE_URL}/og-image-v2.png`],
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const copy = BLOG_INDEX_COPY[locale];
  const posts = getBlogPosts(locale);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />

      <main className="flex-1">
        <section className="border-b border-white/8">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
              {copy.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {copy.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
              {copy.subtitle}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03] transition-colors hover:border-primary/25"
              >
                <Link href={getBlogPath(post)} className="block">
                  <Image
                    src={post.ogImage}
                    alt=""
                    width={1200}
                    height={630}
                    className="aspect-[1200/630] w-full object-cover"
                    priority={posts.indexOf(post) === 0}
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                      <span>{post.labels.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {post.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-primary-light">
                      {post.labels.readArticle}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
