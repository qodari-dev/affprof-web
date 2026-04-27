import type { MetadataRoute } from "next";

const BASE_URL = "https://affprof.com";

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

  return pages.flatMap((page) =>
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
}
