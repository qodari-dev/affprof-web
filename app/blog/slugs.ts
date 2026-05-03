type Locale = "en" | "es";

export const BLOG_SLUGS_BY_ID: Record<string, Record<Locale, string>> = {
  "qr-codes-small-business": {
    en: "qr-codes-small-business-ideas-that-work",
    es: "codigos-qr-pequenos-negocios-ideas-que-funcionan",
  },
  "affiliate-links-break": {
    en: "why-affiliate-links-break",
    es: "por-que-se-rompen-enlaces-de-afiliado",
  },
};

export const BLOG_ID_BY_SLUG = Object.fromEntries(
  Object.entries(BLOG_SLUGS_BY_ID).flatMap(([id, slugs]) =>
    Object.values(slugs).map((slug) => [slug, id]),
  ),
) as Record<string, string>;
