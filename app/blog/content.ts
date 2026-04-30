import { SITE_URLS } from "../site-config";
import type { Locale } from "../[lang]/dictionaries";
import { BLOG_SLUGS_BY_ID } from "./slugs";

export type BlogCalloutTone = "info" | "warning" | "success" | "danger";

export type BlogCallout = {
  tone: BlogCalloutTone;
  title: string;
  text: string;
};

type BlogList = {
  type: "ordered" | "unordered";
  items: string[];
};

type BlogSubsection = {
  heading: string;
  paragraphs: string[];
  list?: BlogList;
};

export type BlogSection = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  list?: BlogList;
  callouts?: BlogCallout[];
  subsections?: BlogSubsection[];
  paragraphsAfter?: string[];
  ctaBox?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
    secondaryText: string;
  };
};

export type BlogPost = {
  id: string;
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  intro: string[];
  author: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  ogImage: string;
  tocHeading: string;
  sections: BlogSection[];
  relatedHeading: string;
    relatedArticles: Array<{
    title: string;
    url: string;
    comingSoon?: boolean;
  }>;
  labels: {
    category: string;
    backToBlog: string;
    updated: string;
    comingSoon: string;
    readArticle: string;
  };
};

export const BLOG_INDEX_COPY: Record<
  Locale,
  {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    subtitle: string;
  }
> = {
  en: {
    title: "Affiliate Marketing Blog | AffProf",
    description:
      "Practical guides for affiliate marketers on link monitoring, redirects, analytics, and revenue protection.",
    eyebrow: "AffProf Blog",
    heading: "Affiliate link management, without the guesswork",
    subtitle:
      "Practical guides for creators and affiliate sites that want healthier links, cleaner tracking, and fewer lost commissions.",
  },
  es: {
    title: "Blog de Affiliate Marketing | AffProf",
    description:
      "Guías prácticas para marketers de afiliados sobre monitoreo de enlaces, redirects, analítica y protección de ingresos.",
    eyebrow: "Blog de AffProf",
    heading: "Gestión de enlaces de afiliado, sin adivinar",
    subtitle:
      "Guías prácticas para creadores y sitios de afiliados que quieren enlaces más sanos, tracking más claro y menos comisiones perdidas.",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "affiliate-links-break",
    locale: "en",
    slug: BLOG_SLUGS_BY_ID["affiliate-links-break"].en,
    title:
      "Why Affiliate Links Break, and How to Detect Them Before They Cost You Sales",
    description:
      "Affiliate links break silently and kill your sales. Learn the 6 most common reasons and how to detect them automatically before losing revenue.",
    subtitle:
      "Every broken link is revenue you lose silently. Here are the most common reasons and how to automate detection.",
    intro: [
      "Your affiliate links are probably not all healthy right now. Some may be broken, pointing at the wrong product, or sending visitors to pages that no longer convert.",
      "That is one of the quiet risks in affiliate marketing: a link can stop working from one day to the next without you, Amazon, or the affiliate program telling you. Your audience clicks, lands somewhere useless, leaves, and you never see the lost sale.",
      "This guide explains why affiliate links break, how to detect problems manually or automatically, and what to do when you find one.",
    ],
    author: "AffProf Team",
    readTime: "8 min read",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-30",
    ogImage: "/blog/og/broken-affiliate-links-en.png",
    tocHeading: "In this article",
    labels: {
      category: "Affiliate links",
      backToBlog: "Back to blog",
      updated: "Updated",
      comingSoon: "Coming soon",
      readArticle: "Read article",
    },
    sections: [
      {
        id: "the-real-problem",
        heading: "The real problem with broken affiliate links",
        paragraphs: [
          "If you have 50 active affiliate links and 5 are broken, that is 10% of your link inventory leaking traffic. If those links point to your highest-intent products, the revenue impact can be much larger than the raw count suggests.",
          "The bigger issue is visibility. Most affiliate marketers assume a link works because it worked when they created it. But affiliate links are not static. Products disappear, programs change tracking systems, and landing pages move without warning.",
        ],
        callouts: [
          {
            tone: "warning",
            title: "The hidden cost",
            text: "A broken affiliate link does not just lose a click. It breaks trust at the exact moment your audience was ready to act.",
          },
        ],
      },
      {
        id: "6-reasons",
        heading: "The 6 most common reasons affiliate links break",
        intro:
          "Before choosing a detection system, it helps to understand what usually causes the failure.",
        subsections: [
          {
            heading: "1. The product was discontinued",
            paragraphs: [
              "This is common in ecommerce. A product is replaced by a newer model, the original page is removed, and links that used to convert now land on a 404 page or a generic category page.",
              "Tech products are especially fragile because the product cycle moves quickly. A link that worked last year may point to an outdated or unavailable item today.",
            ],
          },
          {
            heading: "2. The affiliate program changed URLs",
            paragraphs: [
              "Affiliate programs occasionally migrate platforms, update tracking domains, or change redirect structures. Old links may keep working for a while, then stop redirecting correctly.",
              "The worst version is subtle: the visitor reaches the merchant, but the sale is no longer attributed to you.",
            ],
          },
          {
            heading: "3. The product is out of stock",
            paragraphs: [
              "A link can be technically alive and still fail commercially. If the page loads but the product cannot be purchased, the visitor cannot convert.",
              "This often happens during high-demand periods like Black Friday, holiday campaigns, product launches, and seasonal promotions.",
            ],
          },
          {
            heading: "4. The promotion ended",
            paragraphs: [
              "Time-limited offers are useful, but they age badly. After a deadline, the landing page may disappear, show an expired offer, or display the product without the promised discount.",
            ],
            list: {
              type: "unordered",
              items: [
                "The visitor sees a price that does not match your content.",
                "The offer page redirects to a dead campaign URL.",
                "The merchant shows an expired-promotion message that kills momentum.",
              ],
            },
          },
          {
            heading: "5. Geographic or language restrictions",
            paragraphs: [
              "A link can work perfectly for you and fail for part of your audience. A product may be available in Canada but not Argentina, in the US but not Spain, or in one language store but not another.",
              "If your audience is international, this is one of the easiest problems to miss during manual checks.",
            ],
          },
          {
            heading: "6. The merchant or program disappeared",
            paragraphs: [
              "Smaller programs, course launches, niche SaaS products, and independent creators sometimes close, move platforms, or let tracking domains expire.",
              "When that happens, your old affiliate URLs can stop existing entirely.",
            ],
          },
        ],
      },
      {
        id: "detect-manually",
        heading: "How to detect broken links manually",
        intro:
          "If you only manage a handful of links, a manual process can work. Keep it simple and repeatable.",
        list: {
          type: "ordered",
          items: [
            "Create a spreadsheet with every active affiliate link, where it was published, when it was created, and what product it should open.",
            "Once a month, open each link in a private browser window so you see what your audience sees.",
            "Confirm that the page loads, the product is correct, and the purchase path still works.",
            "Mark any link with a problem and replace, redirect, or remove it.",
            "Repeat the process on a fixed schedule.",
          ],
        },
        paragraphs: [
          "This works, but it does not scale well. It also misses failures that happen between checks. If a link breaks the day after your monthly review, you may lose traffic for weeks before noticing.",
        ],
        callouts: [
          {
            tone: "info",
            title: "Manual checking has a real cost",
            text: "Fifty links at one minute each is almost an hour per month before you fix anything. The process is useful, but it becomes fragile when your link library grows.",
          },
        ],
      },
      {
        id: "detect-automatically",
        heading: "How to detect broken links automatically",
        paragraphs: [
          "The better long-term solution is to let a system monitor your affiliate links and alert you when something changes. There are a few ways to do it.",
        ],
        subsections: [
          {
            heading: "Option 1: Custom scripts",
            paragraphs: [
              "If you are technical, you can build a script that checks your links on a schedule. You will need a URL list, HTTP checks, redirect logic, alerting, and somewhere reliable to run it.",
              "This gives you control, but it also creates maintenance work. It may still miss soft failures like out-of-stock products or pages that load but no longer match the intended item.",
            ],
          },
          {
            heading: "Option 2: Generic uptime monitoring",
            paragraphs: [
              "Tools built for uptime can tell you if a URL responds. That helps for simple 404 or 500 errors, but affiliate links need more context: redirects, destination changes, product availability, and attribution risk.",
            ],
          },
          {
            heading: "Option 3: Affiliate link management tools",
            paragraphs: [
              "A dedicated affiliate link tool monitors the links you actually publish, keeps the short URL stable, and helps you prioritize fixes based on traffic.",
              "AffProf was built for this workflow: short links, monitoring, alerts, click analytics, and fallback URLs in one place.",
            ],
            list: {
              type: "unordered",
              items: [
                "Check links on a schedule instead of relying on memory.",
                "Detect hard failures like 404s, server errors, and timeouts.",
                "Keep analytics close to the links so you know which fixes matter most.",
                "Use fallback URLs so dead traffic can land somewhere useful.",
              ],
            },
          },
        ],
      },
      {
        id: "what-to-do",
        heading: "What to do when you find a broken affiliate link",
        intro:
          "Detection is only half the workflow. The next step is recovering the traffic without breaking links you already published.",
        list: {
          type: "ordered",
          items: [
            "Identify the cause: discontinued product, changed URL, expired campaign, stock issue, or geographic restriction.",
            "Find the closest useful replacement, such as the new model, a current promo, or a comparison page.",
            "Update the destination behind the short link, not the public slug.",
            "Test the replacement in a private browser window.",
            "Document what changed so you can spot patterns later.",
          ],
        },
        paragraphs: [
          "The key is to keep the public short URL stable. If you shared a link in YouTube descriptions, blog posts, newsletters, or PDFs, changing the slug creates a second problem. Change the destination behind the slug instead.",
        ],
      },
      {
        id: "fallback",
        heading: "The fallback URL technique",
        paragraphs: [
          "A fallback URL is a backup destination. When the primary destination fails, the visitor can be redirected somewhere useful instead of landing on an error page.",
          "For example, if your link points to a discontinued microphone, the fallback could be your recommended microphones page. The visitor still gets a relevant next step, and you may recover revenue that would otherwise be lost.",
        ],
        callouts: [
          {
            tone: "danger",
            title: "Without fallback",
            text: "Visitor clicks, product is discontinued, visitor sees an error, revenue goes to zero.",
          },
          {
            tone: "success",
            title: "With fallback",
            text: "Visitor clicks, primary product fails, traffic goes to a relevant backup page with similar options.",
          },
        ],
        paragraphsAfter: [
          "Fallbacks do not recover every sale, but they turn a dead end into a second chance. That is a meaningful improvement over sending motivated visitors to a broken page.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion: treat affiliate links like infrastructure",
        paragraphs: [
          "Affiliate links are not set-and-forget assets. They are infrastructure for your revenue. If they break silently, you lose clicks, trust, and commissions.",
          "If you have a small number of links, a monthly manual check is a reasonable start. Once you manage 10 or more active links, automation becomes the more reliable option.",
          "The important step is not choosing a perfect system. It is choosing a system at all, so broken links stop hiding in plain sight.",
        ],
        ctaBox: {
          title: "Protect your affiliate links with AffProf",
          subtitle:
            "Monitor broken links, keep short URLs stable, and redirect dead traffic with fallback URLs.",
          buttonText: "Start free",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Free plan available. No credit card required to get started.",
        },
      },
    ],
    relatedHeading: "Related articles",
    relatedArticles: [
      {
        title: "Bitly vs Pretty Links vs AffProf: which is best for affiliates",
        url: "/en/blog/bitly-vs-pretty-links-vs-affprof",
        comingSoon: true,
      },
      {
        title: "The 7 best tools for affiliate marketers in 2026",
        url: "/en/blog/best-affiliate-marketing-tools",
        comingSoon: true,
      },
      {
        title: "How to set up UTMs on affiliate links correctly",
        url: "/en/blog/utm-affiliate-links",
        comingSoon: true,
      },
    ],
  },
  {
    id: "affiliate-links-break",
    locale: "es",
    slug: BLOG_SLUGS_BY_ID["affiliate-links-break"].es,
    title:
      "Por qué se rompen tus enlaces de afiliado, y cómo detectarlos antes de perder ventas",
    description:
      "Los enlaces de afiliado se rompen silenciosamente y matan tus ventas. Aprende las 6 razones más comunes y cómo detectarlos automáticamente antes de perder revenue.",
    subtitle:
      "Cada enlace roto es revenue que pierdes en silencio. Estas son las causas más comunes y cómo automatizar la detección.",
    intro: [
      "Tus enlaces de afiliado probablemente no están todos sanos ahora mismo. Algunos pueden estar rotos, apuntando al producto equivocado o llevando a visitantes a páginas que ya no convierten.",
      "Ese es uno de los riesgos silenciosos del affiliate marketing: un enlace puede dejar de funcionar de un día para otro sin que tú, Amazon o el programa de afiliados te avise. Tu audiencia hace clic, llega a una página inútil, se va, y tú nunca ves la venta perdida.",
      "Esta guía explica por qué se rompen los enlaces de afiliado, cómo detectar problemas manual o automáticamente, y qué hacer cuando encuentres uno.",
    ],
    author: "AffProf Team",
    readTime: "8 min",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-30",
    ogImage: "/blog/og/links-afiliado-rotos-es.png",
    tocHeading: "En este artículo",
    labels: {
      category: "Enlaces de afiliado",
      backToBlog: "Volver al blog",
      updated: "Actualizado",
      comingSoon: "Próximamente",
      readArticle: "Leer artículo",
    },
    sections: [
      {
        id: "el-problema-real",
        heading: "El problema real con los enlaces de afiliado rotos",
        paragraphs: [
          "Si tienes 50 enlaces de afiliado activos y 5 están rotos, eso es 10% de tu inventario de enlaces perdiendo tráfico. Si esos enlaces apuntan a tus productos con mayor intención de compra, el impacto en revenue puede ser mucho más grande que el número sugiere.",
          "El problema más grande es la visibilidad. La mayoría de marketers de afiliados asumen que un enlace funciona porque funcionaba el día que lo crearon. Pero los enlaces de afiliado no son estáticos. Los productos desaparecen, los programas cambian sistemas de tracking y las landing pages se mueven sin avisar.",
        ],
        callouts: [
          {
            tone: "warning",
            title: "El costo oculto",
            text: "Un enlace de afiliado roto no solo pierde un clic. Rompe la confianza justo en el momento en que tu audiencia estaba lista para actuar.",
          },
        ],
      },
      {
        id: "6-razones",
        heading:
          "Las 6 razones más comunes por las que se rompen los enlaces de afiliado",
        intro:
          "Antes de escoger un sistema de detección, ayuda entender qué suele causar el fallo.",
        subsections: [
          {
            heading: "1. El producto fue descontinuado",
            paragraphs: [
              "Esto es común en ecommerce. Un producto es reemplazado por un modelo nuevo, la página original desaparece y los enlaces que antes convertían ahora llevan a un 404 o a una categoría genérica.",
              "Los productos de tecnología son especialmente frágiles porque el ciclo se mueve rápido. Un enlace que funcionó el año pasado puede apuntar a un producto desactualizado o no disponible hoy.",
            ],
          },
          {
            heading: "2. El programa de afiliados cambió sus URLs",
            paragraphs: [
              "Los programas de afiliados a veces migran de plataforma, actualizan dominios de tracking o cambian estructuras de redirección. Los enlaces viejos pueden seguir funcionando un tiempo y después dejar de redirigir correctamente.",
              "La peor versión es sutil: el visitante llega al merchant, pero la venta ya no se atribuye a ti.",
            ],
          },
          {
            heading: "3. El producto está sin stock",
            paragraphs: [
              "Un enlace puede estar técnicamente vivo y aun así fallar comercialmente. Si la página carga pero el producto no se puede comprar, el visitante no puede convertir.",
              "Esto pasa mucho en momentos de alta demanda como Black Friday, campañas de temporada, lanzamientos de productos y promociones limitadas.",
            ],
          },
          {
            heading: "4. La promoción terminó",
            paragraphs: [
              "Las ofertas con fecha límite son útiles, pero envejecen mal. Después de la fecha, la landing puede desaparecer, mostrar una oferta expirada o mostrar el producto sin el descuento prometido.",
            ],
            list: {
              type: "unordered",
              items: [
                "El visitante ve un precio que no coincide con tu contenido.",
                "La oferta redirige a una URL de campaña muerta.",
                "El merchant muestra un mensaje de promoción expirada que corta el impulso.",
              ],
            },
          },
          {
            heading: "5. Bloqueo geográfico o por idioma",
            paragraphs: [
              "Un enlace puede funcionar perfecto para ti y fallar para parte de tu audiencia. Un producto puede estar disponible en Canadá pero no en Argentina, en Estados Unidos pero no en España, o en una tienda por idioma pero no en otra.",
              "Si tu audiencia es internacional, este es uno de los problemas más fáciles de pasar por alto en chequeos manuales.",
            ],
          },
          {
            heading: "6. El merchant o programa desapareció",
            paragraphs: [
              "Programas pequeños, lanzamientos de cursos, SaaS de nicho y creators independientes a veces cierran, cambian de plataforma o dejan expirar dominios de tracking.",
              "Cuando eso pasa, tus URLs antiguas de afiliado pueden dejar de existir por completo.",
            ],
          },
        ],
      },
      {
        id: "detectar-manualmente",
        heading: "Cómo detectar enlaces rotos manualmente",
        intro:
          "Si manejas pocos enlaces, un proceso manual puede funcionar. Mantenlo simple y repetible.",
        list: {
          type: "ordered",
          items: [
            "Crea una hoja con cada enlace activo, dónde se publicó, cuándo se creó y qué producto debería abrir.",
            "Una vez al mes, abre cada enlace en una ventana privada para ver lo mismo que ve tu audiencia.",
            "Confirma que la página carga, que el producto es correcto y que el camino de compra funciona.",
            "Marca cualquier enlace con problemas y reemplázalo, redirígelo o quítalo.",
            "Repite el proceso con una frecuencia fija.",
          ],
        },
        paragraphs: [
          "Funciona, pero no escala bien. También pierde fallos que ocurren entre revisiones. Si un enlace se rompe el día después de tu chequeo mensual, puedes perder tráfico por semanas antes de darte cuenta.",
        ],
        callouts: [
          {
            tone: "info",
            title: "El chequeo manual tiene un costo real",
            text: "Cincuenta enlaces a un minuto cada uno es casi una hora al mes antes de arreglar nada. El proceso sirve, pero se vuelve frágil cuando tu librería crece.",
          },
        ],
      },
      {
        id: "detectar-automaticamente",
        heading: "Cómo detectar enlaces rotos automáticamente",
        paragraphs: [
          "La mejor solución a largo plazo es dejar que un sistema monitoree tus enlaces de afiliado y te avise cuando algo cambie. Hay varias formas de hacerlo.",
        ],
        subsections: [
          {
            heading: "Opción 1: Scripts custom",
            paragraphs: [
              "Si eres técnico, puedes crear un script que revise tus enlaces con una frecuencia definida. Necesitas una lista de URLs, chequeos HTTP, lógica de redirects, alertas y un lugar confiable donde correrlo.",
              "Te da control, pero también crea mantenimiento. Aun así puede perder fallos suaves como productos sin stock o páginas que cargan pero ya no corresponden al producto esperado.",
            ],
          },
          {
            heading: "Opción 2: Monitoreo genérico de uptime",
            paragraphs: [
              "Las herramientas de uptime pueden decirte si una URL responde. Eso ayuda con errores simples como 404 o 500, pero los enlaces de afiliado necesitan más contexto: redirects, cambios de destino, disponibilidad del producto y riesgo de atribución.",
            ],
          },
          {
            heading: "Opción 3: Herramientas de gestión de enlaces de afiliado",
            paragraphs: [
              "Una herramienta dedicada monitorea los enlaces que realmente publicas, mantiene estable la URL corta y te ayuda a priorizar arreglos según el tráfico.",
              "AffProf fue construido para este flujo: enlaces cortos, monitoreo, alertas, analítica de clics y fallback URLs en un solo lugar.",
            ],
            list: {
              type: "unordered",
              items: [
                "Revisar enlaces con una frecuencia fija en vez de depender de memoria.",
                "Detectar fallos duros como 404, errores de servidor y timeouts.",
                "Mantener la analítica cerca de los enlaces para saber qué arreglos importan más.",
                "Usar fallback URLs para que el tráfico muerto llegue a una página útil.",
              ],
            },
          },
        ],
      },
      {
        id: "que-hacer",
        heading: "Qué hacer cuando encuentras un enlace de afiliado roto",
        intro:
          "Detectar el problema es solo la mitad del flujo. El siguiente paso es recuperar el tráfico sin romper enlaces que ya publicaste.",
        list: {
          type: "ordered",
          items: [
            "Identifica la causa: producto descontinuado, URL cambiada, campaña expirada, falta de stock o restricción geográfica.",
            "Busca el reemplazo más útil, como el modelo nuevo, una promoción actual o una página comparativa.",
            "Actualiza el destino detrás del enlace corto, no el slug público.",
            "Prueba el reemplazo en una ventana privada.",
            "Documenta qué cambió para detectar patrones después.",
          ],
        },
        paragraphs: [
          "La clave es mantener estable la URL corta pública. Si compartiste un enlace en descripciones de YouTube, posts, newsletters o PDFs, cambiar el slug crea un segundo problema. Cambia el destino detrás del slug.",
        ],
      },
      {
        id: "fallback",
        heading: "La técnica del fallback URL",
        paragraphs: [
          "Un fallback URL es un destino de respaldo. Cuando el destino principal falla, el visitante puede ser redirigido a una página útil en vez de caer en un error.",
          "Por ejemplo, si tu enlace apunta a un micrófono descontinuado, el fallback podría ser tu página de micrófonos recomendados. El visitante todavía recibe un siguiente paso relevante y puedes recuperar revenue que de otra forma se perdería.",
        ],
        callouts: [
          {
            tone: "danger",
            title: "Sin fallback",
            text: "El visitante hace clic, el producto está descontinuado, ve un error y el revenue se va a cero.",
          },
          {
            tone: "success",
            title: "Con fallback",
            text: "El visitante hace clic, el producto principal falla y el tráfico va a una página de respaldo con opciones similares.",
          },
        ],
        paragraphsAfter: [
          "Los fallbacks no recuperan cada venta, pero convierten un callejón sin salida en una segunda oportunidad. Eso es mucho mejor que enviar visitantes motivados a una página rota.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusión: trata tus enlaces como infraestructura",
        paragraphs: [
          "Los enlaces de afiliado no son activos de publicar y olvidar. Son infraestructura para tu revenue. Si se rompen en silencio, pierdes clics, confianza y comisiones.",
          "Si tienes pocos enlaces, un chequeo manual mensual es un buen inicio. Cuando manejas 10 o más enlaces activos, la automatización se vuelve la opción más confiable.",
          "El paso importante no es escoger el sistema perfecto. Es escoger algún sistema para que los enlaces rotos dejen de esconderse a simple vista.",
        ],
        ctaBox: {
          title: "Protege tus enlaces de afiliado con AffProf",
          subtitle:
            "Monitorea enlaces rotos, mantiene URLs cortas estables y redirige tráfico muerto con fallback URLs.",
          buttonText: "Empezar gratis",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Plan gratuito disponible. No necesitas tarjeta de crédito para empezar.",
        },
      },
    ],
    relatedHeading: "Artículos relacionados",
    relatedArticles: [
      {
        title: "Bitly vs Pretty Links vs AffProf: cuál es mejor para afiliados",
        url: "/es/blog/bitly-vs-pretty-links-vs-affprof",
        comingSoon: true,
      },
      {
        title: "Las 7 mejores herramientas para affiliate marketers en 2026",
        url: "/es/blog/herramientas-affiliate-marketers",
        comingSoon: true,
      },
      {
        title: "Cómo configurar UTMs en enlaces de afiliado correctamente",
        url: "/es/blog/utms-links-afiliado",
        comingSoon: true,
      },
    ],
  },
];

export function getBlogPosts(locale?: Locale): BlogPost[] {
  const posts = locale
    ? BLOG_POSTS.filter((post) => post.locale === locale)
    : BLOG_POSTS;

  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.locale === locale && post.slug === slug);
}

export function getBlogPostById(id: string, locale: Locale): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id && post.locale === locale);
}

export function getBlogPath(post: Pick<BlogPost, "locale" | "slug">): string {
  return `/${post.locale}/blog/${post.slug}`;
}
