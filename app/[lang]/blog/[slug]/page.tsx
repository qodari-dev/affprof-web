import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleJsonLd from "../../../blog/components/ArticleJsonLd";
import BlogArticle from "../../../blog/components/BlogArticle";
import {
  getBlogPath,
  getBlogPost,
  getBlogPostById,
  getBlogPosts,
} from "../../../blog/content";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { getDictionary, hasLocale, locales, type Locale } from "../../dictionaries";

const BASE_URL = "https://affprof.com";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    lang: post.locale,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};

  const post = getBlogPost(lang as Locale, slug);
  if (!post) return {};

  const url = `${BASE_URL}${getBlogPath(post)}`;
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    const localized = getBlogPostById(post.id, locale);
    if (localized) {
      languages[locale] = `${BASE_URL}${getBlogPath(localized)}`;
    }
  }
  const defaultPost = getBlogPostById(post.id, "en");
  if (defaultPost) {
    languages["x-default"] = `${BASE_URL}${getBlogPath(defaultPost)}`;
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "article",
      url,
      siteName: "AffProf",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: `${BASE_URL}${post.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}${post.ogImage}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <ArticleJsonLd post={post} />
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1">
        <BlogArticle post={post} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
