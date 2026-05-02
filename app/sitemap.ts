import type { MetadataRoute } from "next";
import { getBlogPath, getBlogPostById, getBlogPosts } from "./blog/content";
import { SITE_URLS } from "./site-config";

const BASE_URL = SITE_URLS.baseUrl;

const locales = ["en", "es"] as const;

const pages = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/guides/getting-started",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/guides/custom-domain",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/guides/import-links",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
  },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

function buildUrl(locale: (typeof locales)[number], path: string): string {
  return path === "" ? `${BASE_URL}/${locale}` : `${BASE_URL}/${locale}${path}`;
}

function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[locale] = buildUrl(locale, path);
  }

  languages["x-default"] = buildUrl("en", path);

  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = pages.flatMap((page) =>
    locales.map((locale) => ({
      url: buildUrl(locale, page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: buildAlternates(page.path),
      },
    })),
  );

  const blogPosts = getBlogPosts().map((post) => {
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
      url: `${BASE_URL}${getBlogPath(post)}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages,
      },
    };
  });

  return [...staticPages, ...blogPosts];
}
