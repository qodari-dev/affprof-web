import { BLOG_ID_BY_SLUG, BLOG_SLUGS_BY_ID } from "../blog/slugs";

type Locale = "en" | "es";

export function getOtherLocale(locale: string): Locale {
  return locale === "en" ? "es" : "en";
}

export function getLocalizedPathname(pathname: string, currentLocale: string) {
  const nextLocale = getOtherLocale(currentLocale);
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  segments[0] = nextLocale;

  if (segments[1] === "blog" && segments[2]) {
    const blogId = BLOG_ID_BY_SLUG[segments[2]];
    if (!blogId) {
      return `/${nextLocale}/blog`;
    }

    segments[2] = BLOG_SLUGS_BY_ID[blogId][nextLocale];
  }

  return `/${segments.join("/")}`;
}
