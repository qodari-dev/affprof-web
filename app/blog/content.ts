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
  code?: string;
  paragraphsAfter?: string[];
};

export type BlogSection = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  code?: string;
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
    title: "AffProf Blog — Smart link management",
    description:
      "Practical guides on link monitoring, QR codes, click analytics, and getting more out of every link you share.",
    eyebrow: "AffProf Blog",
    heading: "Smart link management, without the guesswork",
    subtitle:
      "Practical guides for creators, marketers, and businesses who want healthier links, cleaner tracking, and more value from every click.",
  },
  es: {
    title: "Blog de AffProf — Gestión inteligente de enlaces",
    description:
      "Guías prácticas sobre monitoreo de enlaces, códigos QR, analíticas de clics y cómo sacarle más provecho a cada enlace que compartes.",
    eyebrow: "Blog de AffProf",
    heading: "Gestión inteligente de enlaces, sin adivinar",
    subtitle:
      "Guías prácticas para creadores, marketers y negocios que quieren enlaces más sanos, tracking más claro y más valor en cada clic.",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "utm-tracking-guide",
    locale: "en",
    slug: BLOG_SLUGS_BY_ID["utm-tracking-guide"].en,
    title:
      "UTM Tracking Made Simple: How to Know Which Channels Actually Bring You Customers",
    description:
      "Learn what UTM tracking is, which parameters matter, and how to use UTMs to identify the channels that actually bring customers.",
    subtitle:
      "Stop guessing where your customers come from. Use UTM tracking to connect every shared link to the channel, campaign, and customer action behind it.",
    intro: [
      "You share your links everywhere. Instagram bio. Newsletter. Podcast. Facebook ads. QR codes on flyers. Maybe even WhatsApp groups.",
      "But here is the question that keeps founders, marketers, and creators up at night: which one is actually working?",
      'If your honest answer is "I do not know, I just check Google Analytics sometimes and hope for the best," you are not alone. Most people compare their own marketing to a black box. They post, they share, they hope.',
      "The good news: there is a simple, free system that has been around for over a decade and solves exactly this problem. It is called UTM tracking.",
      'This guide will show you what UTMs are, the five parameters that matter, and real examples for affiliate marketers, coaches, small businesses, and agencies. By the end, you will never wonder "where did this customer come from?" again.',
    ],
    author: "AffProf",
    readTime: "6 min read",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    ogImage: "/blog/og/utm-tracking-guide-en.png",
    tocHeading: "In this article",
    labels: {
      category: "UTM tracking",
      backToBlog: "Back to blog",
      updated: "Updated",
      comingSoon: "Coming soon",
      readArticle: "Read article",
    },
    sections: [
      {
        id: "what-is-a-utm",
        heading: "What is a UTM?",
        paragraphs: [
          "A UTM is a small tag you add to the end of any URL. When someone clicks that tagged link, Google Analytics or any analytics tool records exactly where they came from.",
          "Here is the same link, before and after UTMs.",
        ],
        subsections: [
          {
            heading: "Without UTM",
            paragraphs: [],
            code: "https://yoursite.com/products",
          },
          {
            heading: "With UTM",
            paragraphs: [],
            code: "https://yoursite.com/products?utm_source=instagram&utm_medium=bio&utm_campaign=spring_promo",
          },
        ],
        paragraphsAfter: [
          'Same destination. But now your analytics knows: "this visitor came from Instagram, specifically from the bio link, during the spring promo campaign."',
          "Multiply this by every channel you use, and suddenly you can see exactly which ones bring real customers, not just clicks.",
        ],
      },
      {
        id: "five-utm-parameters",
        heading: "The Five UTM Parameters",
        intro:
          "There are five parameters you can use. The first three are the most important.",
        list: {
          type: "unordered",
          items: [
            "utm_source: the platform or website where the link was shared. Examples: instagram, newsletter, youtube, podcast, facebook, partner_blog.",
            "utm_medium: the type of channel. Examples: social, email, cpc, organic, referral, qr_code.",
            "utm_campaign: the specific campaign or promotion. Examples: summer_launch, black_friday, welcome_series, affiliate_amazon.",
            "utm_content: used to differentiate similar links within the same campaign. Examples: header_button, footer_link, image_cta, video_description.",
            "utm_term: used mostly for paid search to track keywords. Examples: link_management, qr_code_generator.",
          ],
        },
        paragraphs: [
          "You do not need all five every time. Most people use just source, medium, and campaign for 90% of their tracking.",
        ],
      },
      {
        id: "real-use-cases",
        heading: "Real Use Cases by Profile",
        intro:
          "This is where UTMs go from theory to actual money in your bank account.",
        subsections: [
          {
            heading: "For Affiliate Marketers",
            paragraphs: [
              "You promote the same Amazon product across YouTube, Instagram, and your blog. Without UTMs, you have no idea which channel converts best.",
              "With UTMs, your three links look like this.",
            ],
            code: "amazon.com/dp/B0XXX?tag=youraff-20&utm_source=youtube&utm_medium=video&utm_campaign=product_review\n\namazon.com/dp/B0XXX?tag=youraff-20&utm_source=instagram&utm_medium=story&utm_campaign=product_review\n\namazon.com/dp/B0XXX?tag=youraff-20&utm_source=blog&utm_medium=post&utm_campaign=product_review",
            paragraphsAfter: [
              'After 30 days, you can see: "Instagram brought 200 clicks but 1 sale. YouTube brought 50 clicks but 8 sales." Now you know where to focus.',
            ],
          },
          {
            heading: "For Coaches and Creators",
            paragraphs: [
              "You share your booking page in your Instagram bio, in your weekly newsletter, and in your podcast description. They all point to the same Calendly link. Without UTMs, all bookings look identical in your dashboard.",
            ],
            code: "calendly.com/yourname?utm_source=instagram&utm_medium=bio&utm_campaign=q4_2026\n\ncalendly.com/yourname?utm_source=newsletter&utm_medium=email&utm_campaign=q4_2026\n\ncalendly.com/yourname?utm_source=podcast&utm_medium=show_notes&utm_campaign=q4_2026",
            paragraphsAfter: [
              'Now you can answer: "Is my newsletter actually bringing clients, or am I writing for nothing?" If 80% of your bookings come from Instagram and 5% from newsletter, you know where to invest your time.',
            ],
          },
          {
            heading: "For Small Businesses",
            paragraphs: [
              "You print 5,000 flyers with a QR code. You also run Facebook ads. You also send a monthly email to your list.",
              'Without UTMs, all this traffic shows up as "direct" or mixed in your analytics. With UTMs in your QR code link, ad link, and email link, you can finally answer: "Was the $400 I spent printing flyers worth it, or should I move that budget to Facebook ads?"',
            ],
          },
          {
            heading: "For Marketing Agencies",
            paragraphs: [
              "You manage links for three clients across multiple platforms. Each client wants a clear report at the end of the month.",
              "UTMs let you tag every link with the client name, channel, and campaign.",
            ],
            code: "client_a_landing.com?utm_source=facebook&utm_medium=cpc&utm_campaign=client_a_q4\n\nclient_b_landing.com?utm_source=linkedin&utm_medium=organic&utm_campaign=client_b_thought_leadership",
          },
        ],
        paragraphsAfter: [
          "When report day comes, you filter by utm_campaign=client_a_q4 and have your entire performance breakdown ready in two clicks.",
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes That Kill Your Tracking",
        intro: "Here are the four most common mistakes people make with UTMs.",
        list: {
          type: "ordered",
          items: [
            "Inconsistent capitalization. Instagram, instagram, and INSTAGRAM are three different sources in Google Analytics. Pick lowercase and stick to it forever.",
            "Not documenting your UTMs. Six months from now, you will not remember if you used summer_launch or summer_2026 for that campaign. Keep a simple spreadsheet with every UTM you create.",
            "Using UTMs on internal links. If you tag links between pages on your own website, you will break your Analytics sessions. UTMs are for external traffic only.",
            "Forgetting to track QR codes. A printed QR code is just a link. If you do not add UTMs to it before generating the QR, you will never know how many scans it actually got.",
          ],
        },
      },
      {
        id: "without-losing-your-mind",
        heading: "How to Do This Without Losing Your Mind",
        paragraphs: [
          "Manually building UTMs for every link is tedious. You will forget parameters. You will typo a campaign name. You will lose the spreadsheet.",
          "This is why link management tools exist. AffProf, for example, includes a built-in UTM builder that generates parameters automatically, saves your templates, and tracks every click in real time. You also get short branded links, custom QR codes, and broken-link alerts so your printed materials never become useless.",
          "But the tool matters less than the habit. Whatever you use, the rule is simple: never share a marketing link without UTMs again.",
          "The customers you did not know you had are about to become very obvious.",
        ],
        ctaBox: {
          title: "Ready to track every link in one place?",
          subtitle:
            "AffProf gives you short links, custom QR codes, click analytics by country and device, and an automatic UTM builder in one dashboard.",
          buttonText: "Start free",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Free plan available. No credit card required. Available in English and Spanish.",
        },
      },
    ],
    relatedHeading: "Related articles",
    relatedArticles: [
      {
        title:
          "QR Codes for Small Business: 7 Practical Ideas That Actually Bring Customers",
        url: "/en/blog/qr-codes-small-business-ideas-that-work",
      },
      {
        title:
          "Why Affiliate Links Break, and How to Detect Them Before They Cost You Sales",
        url: "/en/blog/why-affiliate-links-break",
      },
      {
        title: "How to track QR code campaigns with UTMs",
        url: "/en/blog/track-qr-code-campaigns-with-utms",
        comingSoon: true,
      },
    ],
  },
  {
    id: "utm-tracking-guide",
    locale: "es",
    slug: BLOG_SLUGS_BY_ID["utm-tracking-guide"].es,
    title:
      "Tracking con UTMs Sin Complicarte: Cómo Saber Qué Canales Te Traen Clientes",
    description:
      "Aprende qué es el tracking con UTMs, qué parámetros importan y cómo usar UTMs para identificar los canales que realmente traen clientes.",
    subtitle:
      "Deja de adivinar de dónde vienen tus clientes. Usa UTMs para conectar cada enlace compartido con el canal, campaña y acción real detrás del clic.",
    intro: [
      "Compartes tus enlaces en todas partes. Bio de Instagram. Newsletter. Podcast. Anuncios de Facebook. Códigos QR en flyers. Hasta en grupos de WhatsApp.",
      "Pero ahí está la pregunta que mantiene despiertos a fundadores, marketers y creators: ¿cuál de todos esos canales realmente está funcionando?",
      'Si tu respuesta honesta es "no sé, miro Google Analytics a veces y espero lo mejor", no estás solo. La mayoría de las personas tratan su propio marketing como una caja negra. Publican, comparten, esperan.',
      "La buena noticia: existe un sistema simple y gratuito que lleva más de una década solucionando exactamente este problema. Se llama tracking con UTMs.",
      'Esta guía te muestra qué son los UTMs, los cinco parámetros que importan, y ejemplos reales para affiliate marketers, coaches, pequeños negocios y agencias. Al final, nunca más vas a preguntarte "¿de dónde vino este cliente?".',
    ],
    author: "AffProf",
    readTime: "6 min",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    ogImage: "/blog/og/tracking-utms-es.png",
    tocHeading: "En este artículo",
    labels: {
      category: "Tracking UTM",
      backToBlog: "Volver al blog",
      updated: "Actualizado",
      comingSoon: "Próximamente",
      readArticle: "Leer artículo",
    },
    sections: [
      {
        id: "que-es-un-utm",
        heading: "¿Qué es un UTM?",
        paragraphs: [
          "Un UTM es una pequeña etiqueta que agregas al final de cualquier URL. Cuando alguien hace clic en ese enlace etiquetado, Google Analytics o cualquier herramienta de analítica registra exactamente de dónde vino.",
          "Aquí el mismo enlace, antes y después de UTMs.",
        ],
        subsections: [
          {
            heading: "Sin UTM",
            paragraphs: [],
            code: "https://tusitio.com/productos",
          },
          {
            heading: "Con UTM",
            paragraphs: [],
            code: "https://tusitio.com/productos?utm_source=instagram&utm_medium=bio&utm_campaign=promo_primavera",
          },
        ],
        paragraphsAfter: [
          'El destino es el mismo. Pero ahora tu analítica sabe: "este visitante vino de Instagram, específicamente del enlace de la bio, durante la campaña de primavera."',
          "Multiplica esto por cada canal que usas, y de repente puedes ver exactamente cuáles te traen clientes reales, no solo clics.",
        ],
      },
      {
        id: "cinco-parametros-utm",
        heading: "Los Cinco Parámetros UTM",
        intro:
          "Hay cinco parámetros que puedes usar. Los primeros tres son los más importantes.",
        list: {
          type: "unordered",
          items: [
            "utm_source: la plataforma o sitio web donde se compartió el enlace. Ejemplos: instagram, newsletter, youtube, podcast, facebook, blog_partner.",
            "utm_medium: el tipo de canal. Ejemplos: social, email, cpc, organic, referral, qr_code.",
            "utm_campaign: la campaña o promoción específica. Ejemplos: lanzamiento_verano, black_friday, serie_bienvenida, afiliados_amazon.",
            "utm_content: para diferenciar enlaces similares dentro de la misma campaña. Ejemplos: boton_header, enlace_footer, cta_imagen, descripcion_video.",
            "utm_term: usado principalmente en búsquedas pagadas para rastrear palabras clave. Ejemplos: gestion_enlaces, generador_codigo_qr.",
          ],
        },
        paragraphs: [
          "No necesitas los cinco cada vez. La mayoría de la gente usa solo source, medium y campaign para el 90% de su tracking.",
        ],
      },
      {
        id: "casos-de-uso",
        heading: "Casos de Uso Reales por Perfil",
        intro:
          "Aquí es donde los UTMs pasan de teoría a dinero real en tu cuenta.",
        subsections: [
          {
            heading: "Para Affiliate Marketers",
            paragraphs: [
              "Promueves el mismo producto de Amazon en YouTube, Instagram y tu blog. Sin UTMs, no tienes idea cuál canal convierte mejor.",
              "Con UTMs, tus tres enlaces se ven así.",
            ],
            code: "amazon.com/dp/B0XXX?tag=tuafiliado-20&utm_source=youtube&utm_medium=video&utm_campaign=review_producto\n\namazon.com/dp/B0XXX?tag=tuafiliado-20&utm_source=instagram&utm_medium=story&utm_campaign=review_producto\n\namazon.com/dp/B0XXX?tag=tuafiliado-20&utm_source=blog&utm_medium=post&utm_campaign=review_producto",
            paragraphsAfter: [
              'Después de 30 días, puedes ver: "Instagram trajo 200 clics pero 1 venta. YouTube trajo 50 clics pero 8 ventas." Ahora sabes dónde enfocarte.',
            ],
          },
          {
            heading: "Para Coaches y Creators",
            paragraphs: [
              "Compartes tu página de reservas en la bio de Instagram, en tu newsletter semanal y en la descripción del podcast. Todos apuntan al mismo enlace de Calendly. Sin UTMs, todas las reservas se ven idénticas en tu dashboard.",
            ],
            code: "calendly.com/tunombre?utm_source=instagram&utm_medium=bio&utm_campaign=q4_2026\n\ncalendly.com/tunombre?utm_source=newsletter&utm_medium=email&utm_campaign=q4_2026\n\ncalendly.com/tunombre?utm_source=podcast&utm_medium=show_notes&utm_campaign=q4_2026",
            paragraphsAfter: [
              "Ahora puedes responder: ¿mi newsletter realmente trae clientes, o estoy escribiendo para nada? Si el 80% de tus reservas vienen de Instagram y solo el 5% del newsletter, sabes dónde invertir tu tiempo.",
            ],
          },
          {
            heading: "Para Pequeños Negocios",
            paragraphs: [
              "Imprimes 5,000 flyers con un código QR. También corres anuncios en Facebook. Y mandas un email mensual a tu lista de clientes.",
              'Sin UTMs, todo este tráfico aparece como "directo" o mezclado en tu analítica. Con UTMs en el enlace de tu QR, el de tu anuncio y el de tu email, finalmente puedes responder: "¿Los $400 que gasté imprimiendo flyers valieron la pena, o debería mover ese presupuesto a anuncios de Facebook?"',
            ],
          },
          {
            heading: "Para Agencias de Marketing",
            paragraphs: [
              "Manejas enlaces para tres clientes en múltiples plataformas. Cada cliente quiere un reporte claro a fin de mes.",
              "Los UTMs te permiten etiquetar cada enlace con el nombre del cliente, el canal y la campaña.",
            ],
            code: "landing_cliente_a.com?utm_source=facebook&utm_medium=cpc&utm_campaign=cliente_a_q4\n\nlanding_cliente_b.com?utm_source=linkedin&utm_medium=organic&utm_campaign=cliente_b_liderazgo",
          },
        ],
        paragraphsAfter: [
          "Cuando llega el día del reporte, filtras por utm_campaign=cliente_a_q4 y tienes el desglose completo de performance en dos clics.",
        ],
      },
      {
        id: "errores-comunes",
        heading: "Errores Comunes Que Matan Tu Tracking",
        intro:
          "Aquí los cuatro errores más comunes que comete la gente con UTMs.",
        list: {
          type: "ordered",
          items: [
            "Mayúsculas y minúsculas inconsistentes. Instagram, instagram e INSTAGRAM son tres sources distintos en Google Analytics. Elige minúsculas y respétalo siempre.",
            "No documentar tus UTMs. En seis meses no vas a recordar si usaste lanzamiento_verano o verano_2026 para esa campaña. Mantén una hoja de cálculo simple con cada UTM que creas.",
            "Usar UTMs en enlaces internos. Si etiquetas enlaces entre páginas de tu propio sitio web, vas a romper las sesiones de Analytics. Los UTMs son solo para tráfico externo.",
            "Olvidar trackear los códigos QR. Un código QR impreso es solo un enlace. Si no le agregas UTMs antes de generar el QR, nunca vas a saber cuántos escaneos realmente recibió.",
          ],
        },
      },
      {
        id: "sin-complicarte",
        heading: "Cómo Hacer Esto Sin Volverte Loco",
        paragraphs: [
          "Construir UTMs manualmente para cada enlace es tedioso. Vas a olvidarte de parámetros. Vas a tener un typo en el nombre de campaña. Vas a perder la hoja de cálculo.",
          "Por eso existen las herramientas de gestión de enlaces. AffProf, por ejemplo, incluye un UTM builder integrado que genera los parámetros automáticamente, guarda tus templates y rastrea cada clic en tiempo real. También obtienes enlaces cortos con tu marca, códigos QR personalizados y alertas cuando un enlace se rompe, para que tu material impreso nunca quede inservible.",
          "Pero la herramienta importa menos que el hábito. Sea lo que uses, la regla es simple: nunca más compartas un enlace de marketing sin UTMs.",
          "Los clientes que no sabías que tenías están a punto de volverse muy obvios.",
        ],
        ctaBox: {
          title: "¿Listo para rastrear cada enlace en un solo lugar?",
          subtitle:
            "AffProf te da enlaces cortos, códigos QR personalizados, analíticas de clics por país y dispositivo, y un UTM builder automático desde un dashboard.",
          buttonText: "Empezar gratis",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Plan gratis sin tarjeta de crédito. Disponible en español e inglés.",
        },
      },
    ],
    relatedHeading: "Artículos relacionados",
    relatedArticles: [
      {
        title:
          "Códigos QR para pequeños negocios: la guía práctica con 7 ideas que dan resultados",
        url: "/es/blog/codigos-qr-pequenos-negocios-ideas-que-funcionan",
      },
      {
        title:
          "Por qué se rompen tus enlaces de afiliado, y cómo detectarlos antes de perder ventas",
        url: "/es/blog/por-que-se-rompen-enlaces-de-afiliado",
      },
      {
        title: "Cómo trackear campañas QR con UTMs",
        url: "/es/blog/trackear-campanas-qr-con-utms",
        comingSoon: true,
      },
    ],
  },
  {
    id: "qr-codes-small-business",
    locale: "en",
    slug: BLOG_SLUGS_BY_ID["qr-codes-small-business"].en,
    title:
      "QR Codes for Small Business: 7 Practical Ideas That Actually Bring Customers",
    description:
      "7 concrete ways to use QR codes in your business to bring more customers, measure what works, and stop guessing. Real examples for restaurants, gyms, retail, and more.",
    subtitle:
      "Use QR codes to connect offline marketing with measurable customer action, from events and receipts to storefronts and delivery packaging.",
    intro: [
      'QR codes went from being "that weird pandemic thing for menus" to a real marketing tool. Phone cameras read them without an app, customers know how to use them by reflex, and unlike a regular flyer, a QR code actually tells you whether it is working.',
      "If you run a small business and you are not using QR codes strategically, you are leaving data and customers on the table. The good news: getting started is cheap and simple.",
      "In this guide you will find 7 concrete ways to use QR codes to bring more customers, measure which campaign is working, and stop guessing. Each idea comes with a real example and how to apply it to your business.",
    ],
    author: "AffProf",
    readTime: "7 min read",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
    ogImage: "/blog/og/qr-codes-small-business-en.png",
    tocHeading: "In this article",
    labels: {
      category: "QR codes",
      backToBlog: "Back to blog",
      updated: "Updated",
      comingSoon: "Coming soon",
      readArticle: "Read article",
    },
    sections: [
      {
        id: "why-qr-codes-work",
        heading: "Why QR Codes Work in 2026",
        intro:
          "Three things changed in the last few years and it is worth understanding them before applying any of these ideas.",
        subsections: [
          {
            heading: "First: cameras read them natively",
            paragraphs: [
              "Five years ago you needed an app to scan a QR code. Today iPhone and Android detect them automatically with the native camera. That removed the biggest friction point.",
            ],
          },
          {
            heading: "Second: customers know what to do",
            paragraphs: [
              'You do not need to explain "scan this with your camera." People see a QR and scan it by reflex, the same way they tap a button.',
            ],
          },
          {
            heading: "Third: QR codes are trackable",
            paragraphs: [
              "A paper flyer costs money but you never know how many people actually read it. A QR code tells you exactly how many scans it got, from what device, at what hour, on what day. That turns physical material into data.",
              "With that out of the way, let us get into the ideas.",
            ],
          },
        ],
      },
      {
        id: "events-trade-shows",
        heading: "1. QR Codes at Events and Trade Shows to Capture Leads",
        intro:
          "If you go to trade shows, networking events, talks, or exhibitions, handing out physical business cards works but has a problem: half of them end up in the hotel trash and you cannot measure anything.",
        paragraphs: [
          "The idea: a large, visible QR code on your booth, banner, or badge that leads to a page with your information, an event-specific offer, or a quick contact form.",
          'Real-world example: A freelance designer attends a small business expo. She puts a QR code on her laptop that says "Scan for a free 30-minute design consultation." The QR leads to a Calendly page. By the end of the event, she knows exactly how many people scanned, how many actually booked, and during what hours scans were highest.',
          "Bonus: if you go to multiple events, you can generate a different QR for each event and compare which one brought you the best results. Usually one or two events a year are the ones that actually pay off, while the rest are expensive distractions.",
        ],
      },
      {
        id: "google-reviews",
        heading: "2. QR Codes on Receipts to Get Google Reviews",
        intro:
          "Google Maps reviews are the single best free marketing tool a local business has. But asking for them in person is awkward and most happy customers simply forget once they leave.",
        paragraphs: [
          'The idea: print a small QR at the bottom of every receipt or check that says "Enjoyed your visit? Leave us a Google review." The QR goes directly to your Google Maps review form.',
          "Real-world example: A coffee shop adds a QR to the printed check. Before, they got a few reviews per month and had to ask manually for every one. After putting the QR on the receipt, reviews started coming in much more frequently without asking. More reviews push your ranking on Google Maps higher, which brings new customers without spending a dollar on ads.",
          "Works for: restaurants, salons, repair shops, any service that hands out a receipt or invoice.",
          "Key insight: most people leave a review within the first few hours of their visit. The QR on the receipt captures that perfect moment when the experience is still fresh.",
        ],
      },
      {
        id: "delivery-packaging",
        heading:
          "3. QR Codes on Delivery Packaging with a Discount for the Next Order",
        intro:
          "Every time you ship a delivery order, you are already paying for packaging. That packaging is free advertising space most businesses waste.",
        paragraphs: [
          'The idea: a sticker or stamp with a QR on the box, bag, or napkin that says "10% off your next order — scan here." The QR leads to your menu or online store with the code already applied.',
          "Real-world example: A local pizza place adds a QR sticker to every delivery box offering a discount on the next pizza. After a few months, the percentage of repeat customers went up noticeably. And because each QR has tracking, they know exactly how many people scan and how many end up redeeming the discount.",
          "Works for: restaurants with delivery, online stores with physical shipments, home cooking, bakeries.",
        ],
      },
      {
        id: "flyers-posters",
        heading:
          "4. QR Codes on Flyers and Posters to Measure What's Actually Working",
        intro:
          "If you spend money on flyers, posters, billboards, or any printed material, until now you were flying blind: you know what you paid but not how many people actually saw it and acted on it.",
        paragraphs: [
          "The idea: every printed material gets a different QR code. Flyers in the north side of town get one QR, flyers in the south get another, the ad in the local paper gets a third. After a month, you know which material drove the most results and where to put the next budget.",
          "Real-world example: A gym distributes 3 versions of flyers in different parts of the city. Each flyer has a different QR leading to the same signup page. By the end of the month, they discover that the area they expected to perform best brought very few scans, while a more distant area brought many more. They focus the next campaign there.",
          "Without QR codes, that information does not exist. It is the difference between marketing based on intuition and marketing based on data.",
        ],
      },
      {
        id: "business-cards",
        heading: "5. QR Codes on Business Cards as a Professional Link-in-Bio",
        intro:
          "Traditional business cards have a limit: you can only fit 4-5 pieces of info. And if you update your Instagram, WhatsApp number, or website, all the cards you handed out become outdated.",
        paragraphs: [
          "The idea: a minimal card with your name, title, and a large QR code that leads to a personal page with all your contact info: phone, email, social media, booking calendar, portfolio. If anything changes, you update the page and every card you have ever handed out keeps working with the new info.",
          "Real-world example: A real estate agent replaces her traditional cards with one that has a QR. The QR leads to a simple page with her WhatsApp, active listings, contact form, and a 30-second intro video. Result: more WhatsApp conversations and fewer cards ending up in the trash.",
          "Works especially well for: independent professionals, consultants, real estate agents, freelancers, coaches.",
        ],
      },
      {
        id: "storefronts-windows",
        heading:
          "6. QR Codes on Storefronts and Windows for Info or Direct WhatsApp",
        intro:
          "A lot of people walk past your store when it is closed. Or they look at it from outside to check if you have what they are looking for, without going in. Today those people just walk away. With a QR code, they do not.",
        paragraphs: [
          "The idea: a visible QR on the door or window that leads to something useful when the store is closed: hours, menu, product catalog, or direct WhatsApp to ask about availability.",
          'Real-world example: A clothing boutique puts a QR on the window that says "Browse the catalog or message us on WhatsApp." The QR alternates depending on the time: during open hours it goes to the store WhatsApp, after hours it goes to the Instagram catalog. Result: they started getting messages from people walking by at 9pm who previously would have just kept walking.',
          "Works for: retail stores, restaurants, gyms, any business with a physical location and set hours.",
        ],
      },
      {
        id: "restaurant-feedback-tips",
        heading:
          "7. QR Codes on Restaurant Tables for Quick Feedback or Digital Tipping",
        intro:
          "Small service details get lost when nobody reports them. And many customers today do not carry cash, which directly hurts staff tips.",
        paragraphs: [
          'The idea, part A — feedback: a small QR on the table that says "Tell us how your experience was." It leads to a simple 3-question form. People who fill it out do so while waiting for the check, not after they leave.',
          "The idea, part B — tipping: a QR that goes to a direct payment page with tip suggestions ($2, $5, $10, custom amount). Connects to your digital payment account. Customers can leave a tip even without cash on hand.",
          "Real-world example: A restaurant implements both QRs on the tables. Before, they got few internal comments per month and digital tips were zero. After: many more feedback responses with real data on what to improve, and a real increase in total tips thanks to the digital option.",
          "Works for: restaurants, cafes, bars, any business where customers sit for a while.",
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes That Ruin Your QR Codes",
        intro:
          "Before you print, avoid these 4 mistakes that show up over and over.",
        subsections: [
          {
            heading: "1. Printing without verifying the link works",
            paragraphs: [
              "Sounds obvious but it happens all the time. You print 5,000 flyers and discover a week later the link had a typo or the page went down. Result: wasted money and a bad first impression for whoever scanned.",
            ],
          },
          {
            heading: "2. Using a generic QR with no branding",
            paragraphs: [
              "A black QR with white squares and no context looks like spam. A QR with your logo in the center and your brand colors looks professional, builds trust, and gets scanned more often.",
            ],
          },
          {
            heading: "3. Not tracking how many people scan",
            paragraphs: [
              "If you are not measuring, you are just printing expensive decorations. Any QR you put on something printed should have basic tracking: how many scans, what hour, what day.",
            ],
          },
          {
            heading: "4. No backup plan if the page fails",
            paragraphs: [
              "What happens if your website goes down right when someone scans your QR at an important event? A backup URL prevents the customer from seeing an error page and walking away.",
            ],
          },
        ],
      },
      {
        id: "affprof",
        heading: "How to Get It Right with AffProf",
        intro:
          'If you are going to use QR codes for your business, doing it with a serious tool is the difference between "pretty decoration" and "marketing that works." AffProf gives you what you need so every QR works in your favor.',
        list: {
          type: "unordered",
          items: [
            "Branded QR codes: add your logo in the center and pick your brand colors. Customers see a professional QR, not a generic one.",
            "Real analytics: know exactly how many scans each QR got, from what device, what country, and what time. Compare campaigns and make decisions based on data.",
            "Automatic monitoring: AffProf checks your links up to 4 times a day. If one breaks, we email you instantly.",
            "Backup URL: if the main page fails, your QR automatically redirects to an alternative you choose. Your printed QR codes never go stale in the real world.",
            "Free plan to get started: up to 10 links free, no credit card, no time limit. Perfect to test before committing.",
          ],
        },
        ctaBox: {
          title: "Create trackable QR codes with AffProf",
          subtitle:
            "Turn offline campaigns into measurable links with branded QR codes, analytics, monitoring, and fallback URLs.",
          buttonText: "Start free",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Free plan available. No credit card required to get started.",
        },
      },
      {
        id: "wrapping-up",
        heading: "Wrapping Up",
        paragraphs: [
          "QR codes are not a passing trend or a tool reserved for big companies. They are one of the cheapest and most effective ways for a small business to measure what is working and bring in more customers from the physical world.",
          "Start with one idea — the one that fits your business best out of the 7. Implement it, track scans for 30 days, and adjust. In 3 months you will know more about what actually works in your business than you did in the last 3 years.",
        ],
      },
    ],
    relatedHeading: "Related articles",
    relatedArticles: [
      {
        title:
          "Why affiliate links break, and how to detect them before they cost you sales",
        url: "/en/blog/why-affiliate-links-break",
      },
      {
        title: "How to set up QR analytics for local campaigns",
        url: "/en/blog/qr-code-analytics-local-campaigns",
        comingSoon: true,
      },
      {
        title: "The best link management tools for small teams",
        url: "/en/blog/link-management-tools-small-teams",
        comingSoon: true,
      },
    ],
  },
  {
    id: "qr-codes-small-business",
    locale: "es",
    slug: BLOG_SLUGS_BY_ID["qr-codes-small-business"].es,
    title:
      "Códigos QR para pequeños negocios: la guía práctica con 7 ideas que dan resultados",
    description:
      "7 formas concretas de usar códigos QR en tu negocio para traer más clientes, medir qué funciona y dejar de adivinar. Ejemplos reales para restaurantes, gimnasios, retail y más.",
    subtitle:
      "Usa códigos QR para conectar tu marketing físico con acciones medibles de clientes, desde eventos y recibos hasta vidrieras y empaques de delivery.",
    intro: [
      'Los códigos QR pasaron de ser "esa cosa rara para escanear menús durante la pandemia" a una herramienta real de marketing. La cámara del celular los lee sin app, los clientes ya saben usarlos, y a diferencia de un flyer común, un QR sí te dice si está funcionando.',
      "Si tienes un pequeño negocio y todavía no estás usando QR de forma estratégica, estás dejando datos y clientes sobre la mesa. La buena noticia: empezar es barato y simple.",
      "En esta guía vas a ver 7 formas concretas de usar códigos QR para traer más clientes, medir qué campaña funciona y dejar de adivinar. Cada idea viene con su ejemplo real y cómo aplicarla en tu negocio.",
    ],
    author: "AffProf",
    readTime: "7 min",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
    ogImage: "/blog/og/codigos-qr-pequenos-negocios-es.png",
    tocHeading: "En este artículo",
    labels: {
      category: "Códigos QR",
      backToBlog: "Volver al blog",
      updated: "Actualizado",
      comingSoon: "Próximamente",
      readArticle: "Leer artículo",
    },
    sections: [
      {
        id: "por-que-funcionan",
        heading: "Por qué los QR funcionan en 2026",
        intro:
          "Tres cosas cambiaron en los últimos años y vale la pena entenderlas antes de aplicar las ideas.",
        subsections: [
          {
            heading: "Primero: la cámara los lee solos",
            paragraphs: [
              "Hace 5 años necesitabas una app para escanear QR. Hoy iPhone y Android los detectan automáticamente con la cámara nativa. Eso eliminó la fricción más grande.",
            ],
          },
          {
            heading: "Segundo: el cliente ya sabe qué hacer",
            paragraphs: [
              'No necesitas explicar "escanea esto con tu cámara". La gente lo ve y lo escanea por reflejo, igual que aprietan un botón.',
            ],
          },
          {
            heading: "Tercero: los QR son trackeables",
            paragraphs: [
              "Un flyer de papel cuesta dinero pero nunca sabes cuántas personas lo leyeron. Un QR sí te dice cuántos escaneos hubo, desde qué dispositivo, en qué hora, qué día. Eso convierte el material físico en data.",
              "Con eso claro, vamos a las ideas.",
            ],
          },
        ],
      },
      {
        id: "eventos-ferias",
        heading: "1. QR en eventos y ferias para capturar contactos",
        intro:
          "Si vas a ferias, eventos de networking, charlas o exhibiciones, llevar tarjetas físicas funciona pero tiene un problema: la mitad termina en la basura del hotel y no puedes medir nada.",
        paragraphs: [
          "La idea: un QR grande visible en tu stand, banner o credencial que lleve a una página con tu información, oferta especial del evento o formulario de contacto rápido.",
          'Ejemplo real: Una freelancer de diseño va a una feria de pequeños negocios. Pone un QR en su laptop que dice "Escanea para 30 min de consultoría gratis". El QR lleva a un Calendly. Al final del evento sabe exactamente cuántas personas escanearon, cuántas reservaron y de qué hora vinieron más escaneos.',
          "Ventaja extra: si vas a múltiples eventos, puedes generar un QR diferente para cada evento y comparar cuál te trajo más resultados. Probablemente uno o dos eventos al año son los que de verdad valen la pena, mientras los demás son distracción cara.",
        ],
      },
      {
        id: "resenas-google",
        heading: "2. QR en facturas y recibos para conseguir reseñas en Google",
        intro:
          "Las reseñas en Google Maps son el mejor marketing gratis que existe para un negocio local. Pero pedirlas a mano es incómodo y la mayoría de clientes felices simplemente se olvidan.",
        paragraphs: [
          'La idea: imprime un pequeño QR al final de cada factura, recibo o ticket que diga "¿Te gustó tu visita? Déjanos una reseña en Google". El QR lleva directo al formulario de reseña de tu ficha en Google Maps.',
          "Ejemplo real: Un café pone el QR en la cuenta. Antes recibía pocas reseñas al mes y todas requerían pedirlas a mano. Después de poner el QR, las reseñas empezaron a llegar mucho más seguido sin tener que pedirlas. Más reseñas suben el ranking en Google Maps, y eso trae más clientes nuevos sin gastar un peso en publicidad.",
          "Funciona para: restaurantes, peluquerías, talleres, cualquier servicio que entregue factura o recibo físico.",
          "Dato clave: la mayoría de las personas dejan reseña dentro de las primeras horas de la visita. El QR en el recibo captura ese momento perfecto cuando todavía recuerdan la experiencia.",
        ],
      },
      {
        id: "empaques-delivery",
        heading:
          "3. QR en empaques de delivery con descuento para próxima compra",
        intro:
          "Cada vez que mandas un pedido a domicilio, estás pagando empaque de todos modos. Ese empaque es espacio publicitario gratuito que la mayoría de negocios desperdicia.",
        paragraphs: [
          'La idea: una pegatina o stamp con un QR en la caja, bolsa o servilleta que diga "10% de descuento en tu próxima orden — escanea aquí". El QR lleva a tu menú o tienda online con el código aplicado.',
          "Ejemplo real: Una pizzería local agrega un QR adhesivo a cada caja con descuento para la siguiente pizza. Después de unos meses, el porcentaje de clientes recurrentes subió notablemente. Y como cada QR tiene tracking, saben cuántas personas escanean y cuántas terminan redimiendo el descuento.",
          "Funciona para: restaurantes con delivery, tiendas online con envíos físicos, comida casera, repostería.",
        ],
      },
      {
        id: "flyers-posters",
        heading:
          "4. QR en flyers y posters físicos para medir qué campaña funciona",
        intro:
          "Si gastas dinero en flyers, posters, vallas o impresos, hasta ahora estabas a ciegas: sabes cuánto pagaste pero no cuántas personas vieron y reaccionaron.",
        paragraphs: [
          "La idea: cada material impreso lleva un QR distinto. Volantes en la zona norte llevan un QR, los de la zona sur otro, los del flyer en el periódico local otro distinto. Al cabo de un mes sabes cuál material trajo más resultados y dónde gastar el próximo presupuesto.",
          "Ejemplo real: Un gimnasio reparte 3 versiones de flyers en zonas distintas de la ciudad. Cada flyer tiene un QR diferente que lleva a la misma página de inscripción. Al final del mes descubren que la zona donde pensaban que iba a funcionar mejor trajo muy pocos escaneos, mientras una zona más lejana trajo muchos más. La próxima campaña la enfocan ahí.",
          "Sin QR, esa información no existe. Es la diferencia entre marketing basado en intuición y marketing basado en data.",
        ],
      },
      {
        id: "business-cards",
        heading: "5. QR en business cards como link-in-bio profesional",
        intro:
          "Las tarjetas de presentación tradicionales tienen un problema: solo caben 4-5 datos. Y si actualizas tu Instagram, número de WhatsApp o sitio web, las tarjetas viejas quedan obsoletas.",
        paragraphs: [
          "La idea: una tarjeta minimalista con tu nombre, profesión y un QR grande que lleva a una página personal con todos tus contactos: teléfono, email, redes sociales, agenda de citas, portafolio. Si cambias algo, actualizas la página y todas las tarjetas que repartiste siguen funcionando con la información nueva.",
          "Ejemplo real: Una agente inmobiliaria reemplaza sus tarjetas tradicionales por una con QR. El QR lleva a una página simple con su WhatsApp, listings activos, formulario de contacto y video de presentación de 30 segundos. Resultado: más conversaciones de WhatsApp y menos tarjetas que terminan en la basura.",
          "Funciona especialmente bien para: profesionales independientes, consultores, agentes inmobiliarios, freelancers, coaches.",
        ],
      },
      {
        id: "escaparates-vidrieras",
        heading:
          "6. QR en escaparates y vidrieras con información o WhatsApp directo",
        intro:
          "Mucha gente pasa frente a tu local cuando está cerrado. O lo mira de afuera para ver si tienen lo que buscan, sin entrar. Hoy esas personas se van. Con un QR, no.",
        paragraphs: [
          "La idea: un QR visible en la puerta o vidriera que lleve a algo útil cuando el local está cerrado: horarios, menú, catálogo de productos o WhatsApp directo para preguntar disponibilidad.",
          'Ejemplo real: Una boutique de ropa pone un QR en la vidriera que dice "Mira el catálogo o pregunta por WhatsApp". El QR alterna según la hora: en horario de atención lleva al WhatsApp de la tienda, fuera de horario lleva al catálogo de Instagram. Resultado: empezaron a recibir mensajes de personas que pasaban a las 9pm y antes simplemente seguían de largo.',
          "Funciona para: tiendas de retail, restaurantes, gimnasios, cualquier negocio con local físico que tenga horarios.",
        ],
      },
      {
        id: "feedback-propinas",
        heading:
          "7. QR en mesas de restaurante para feedback rápido o propinas digitales",
        intro:
          "Los pequeños detalles de servicio se pierden si nadie los reporta. Y muchos clientes hoy no llevan efectivo, lo que afecta directo las propinas del personal.",
        paragraphs: [
          'La idea, parte A — feedback: un pequeño QR en la mesa que diga "Cuéntanos cómo estuvo tu experiencia". Lleva a un formulario simple de 3 preguntas. La gente que lo llena lo hace mientras espera la cuenta, no después.',
          "La idea, parte B — propinas: un QR que lleve a una página de pago directa con sugerencias de propina ($2, $5, $10, otro monto). Conecta con tu cuenta de pagos digital. El cliente puede dejar propina aunque no tenga efectivo.",
          "Ejemplo real: Un restaurante implementa los dos QR en la mesa. Antes recibía pocos comentarios internos al mes y las propinas digitales eran cero. Después: muchos más feedbacks con datos reales de qué mejorar, y un aumento real en propinas totales gracias a la opción digital.",
          "Funciona para: restaurantes, cafés, bares, cualquier negocio donde el cliente está sentado un rato.",
        ],
      },
      {
        id: "errores-comunes",
        heading: "Errores comunes que arruinan tus QR codes",
        intro:
          "Antes de imprimir, evita estos 4 errores que se ven una y otra vez.",
        subsections: [
          {
            heading: "1. Imprimir sin verificar que el link funciona",
            paragraphs: [
              "Suena obvio pero pasa todo el tiempo. Imprimes 5,000 flyers y descubres una semana después que el link tenía un typo o la página se cayó. Resultado: dinero quemado y mala impresión a quien escaneó.",
            ],
          },
          {
            heading: "2. Usar un QR genérico sin tu marca",
            paragraphs: [
              "Un QR negro con cuadritos blancos sin contexto se ve como spam. Un QR con tu logo en el centro y los colores de tu marca se ve profesional, genera confianza y la gente lo escanea más.",
            ],
          },
          {
            heading: "3. No medir cuántos lo escanean",
            paragraphs: [
              "Si no estás midiendo, estás haciendo decoración cara. Cualquier QR que pongas en algo impreso debería tener tracking básico: cuántos escaneos, qué hora, qué día.",
            ],
          },
          {
            heading: "4. No tener plan B si la página falla",
            paragraphs: [
              "¿Qué pasa si el sitio web se cae justo cuando alguien escanea tu QR en un evento importante? Una alternativa evita que el cliente vea una página de error y se vaya.",
            ],
          },
        ],
      },
      {
        id: "affprof",
        heading: "Cómo hacerlo bien con AffProf",
        intro:
          'Si vas a usar QR para tu negocio, hacerlo con una herramienta seria marca la diferencia entre "decoración bonita" y "marketing que funciona". AffProf te da lo que necesitas para que cada QR trabaje a tu favor.',
        list: {
          type: "unordered",
          items: [
            "QR con tu marca: agrega tu logo en el centro y elige los colores de tu marca. Tus clientes ven un QR profesional, no uno genérico.",
            "Analíticas reales: sabes exactamente cuántos escaneos tuvo cada QR, desde qué dispositivo, qué país y qué hora. Compara campañas y decide con datos.",
            "Monitoreo automático: AffProf revisa tus enlaces hasta 4 veces al día. Si alguno se rompe, te avisamos al instante por email.",
            "URL de respaldo: si la página principal falla, tu QR redirige automáticamente a una alternativa que tú elijas. Tus QR físicos nunca quedan rotos en el mundo real.",
            "Plan gratis para empezar: hasta 10 enlaces gratis, sin tarjeta de crédito, sin límite de tiempo. Perfecto para probar antes de comprometerte.",
          ],
        },
        ctaBox: {
          title: "Crea códigos QR medibles con AffProf",
          subtitle:
            "Convierte campañas físicas en enlaces medibles con QR de marca, analítica, monitoreo y URLs de respaldo.",
          buttonText: "Empezar gratis",
          buttonUrl: SITE_URLS.register,
          secondaryText:
            "Plan gratuito disponible. No necesitas tarjeta de crédito para empezar.",
        },
      },
      {
        id: "conclusion",
        heading: "Conclusión",
        paragraphs: [
          "Los QR no son una moda pasajera ni una herramienta exclusiva de empresas grandes. Son una de las formas más baratas y efectivas para que un pequeño negocio mida qué está funcionando y traiga más clientes desde el mundo físico.",
          "Empieza con una sola idea, la que más te aplique de las 7. Implementa, mide los escaneos durante 30 días y ajusta. En 3 meses vas a saber más sobre qué funciona en tu negocio que en los últimos 3 años.",
        ],
      },
    ],
    relatedHeading: "Artículos relacionados",
    relatedArticles: [
      {
        title:
          "Por qué se rompen tus enlaces de afiliado, y cómo detectarlos antes de perder ventas",
        url: "/es/blog/por-que-se-rompen-enlaces-de-afiliado",
      },
      {
        title: "Cómo medir campañas locales con códigos QR",
        url: "/es/blog/analitica-codigos-qr-campanas-locales",
        comingSoon: true,
      },
      {
        title:
          "Las mejores herramientas de gestión de enlaces para equipos pequeños",
        url: "/es/blog/herramientas-gestion-enlaces-equipos-pequenos",
        comingSoon: true,
      },
    ],
  },
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
        title:
          "QR Codes for Small Business: 7 Practical Ideas That Actually Bring Customers",
        url: "/en/blog/qr-codes-small-business-ideas-that-work",
      },
      {
        title: "How to set up QR analytics for local campaigns",
        url: "/en/blog/qr-code-analytics-local-campaigns",
        comingSoon: true,
      },
      {
        title: "The best link management tools for small teams",
        url: "/en/blog/link-management-tools-small-teams",
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
        title:
          "Códigos QR para pequeños negocios: la guía práctica con 7 ideas que dan resultados",
        url: "/es/blog/codigos-qr-pequenos-negocios-ideas-que-funcionan",
      },
      {
        title: "Cómo medir campañas locales con códigos QR",
        url: "/es/blog/analitica-codigos-qr-campanas-locales",
        comingSoon: true,
      },
      {
        title:
          "Las mejores herramientas de gestión de enlaces para equipos pequeños",
        url: "/es/blog/herramientas-gestion-enlaces-equipos-pequenos",
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

export function getBlogPost(
  locale: Locale,
  slug: string,
): BlogPost | undefined {
  return BLOG_POSTS.find(
    (post) => post.locale === locale && post.slug === slug,
  );
}

export function getBlogPostById(
  id: string,
  locale: Locale,
): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id && post.locale === locale);
}

export function getBlogPath(post: Pick<BlogPost, "locale" | "slug">): string {
  return `/${post.locale}/blog/${post.slug}`;
}
