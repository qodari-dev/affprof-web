import { getBlogPath, type BlogPost } from "../content";
import { SITE_URLS } from "../../site-config";

const BASE_URL = SITE_URLS.baseUrl;

export default function ArticleJsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${BASE_URL}${post.ogImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AffProf",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-close.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${getBlogPath(post)}`,
    },
    inLanguage: post.locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
