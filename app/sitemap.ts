import type { MetadataRoute } from "next";

const BASE_URL = "https://affprof.com";

const locales = ["en", "es"] as const;

function localizedEntry(
  path: string,
  opts: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
): MetadataRoute.Sitemap[number] {
  const url = path === "" ? BASE_URL : `${BASE_URL}/en${path}`;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] =
      path === "" ? `${BASE_URL}/${l}` : `${BASE_URL}/${l}${path}`;
  }
  languages["x-default"] = path === "" ? BASE_URL : `${BASE_URL}/en${path}`;

  return {
    url,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    localizedEntry("", { changeFrequency: "weekly", priority: 1 }),
    localizedEntry("/privacy", { changeFrequency: "yearly", priority: 0.3 }),
    localizedEntry("/terms", { changeFrequency: "yearly", priority: 0.3 }),
  ];
}
