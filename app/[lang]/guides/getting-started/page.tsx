import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import {
  Bullets,
  Callout,
  ExtLink,
  H2,
  H3,
  Hr,
  P,
  Screenshot,
  Strong,
} from "../../../components/guides/Prose";
import Navbar from "../../../components/Navbar";
import { SITE_URLS } from "../../../site-config";
import {
  getDictionary,
  hasLocale,
  locales,
  type Locale,
} from "../../dictionaries";

const BASE_URL = "https://affprof.com";

type Content = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  outlineTitle: string;
  outline: string[];
  outlineNote: string;
  noteLabel: string;
  whatsNextTitle: string;
  whatsNextEnd: string;
};

const CONTENT: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Getting Started with AffProf — Guide",
      description:
        "A 5-minute walkthrough to set up your AffProf account, create your first tracked link, and start protecting every click.",
    },
    eyebrow: "Guide",
    title: "Getting Started with AffProf",
    intro:
      "A 5-minute walkthrough to set up your account, create your first tracked link, and start protecting every click.",
    outlineTitle: "What you'll do in this guide",
    outline: [
      "Create your free account",
      "Get familiar with your home dashboard",
      "Set up your brand (optional, but recommended)",
      "Create your first product and link",
      "Share your link and watch the analytics roll in",
      "Use quick actions on each link",
      "Understand link health monitoring",
    ],
    outlineNote:
      "You can complete all of this in under 10 minutes. No credit card required.",
    noteLabel: "Note",
    whatsNextTitle: "What's next?",
    whatsNextEnd: "Have questions? Email us anytime at",
  },
  es: {
    meta: {
      title: "Primeros pasos con AffProf — Guía",
      description:
        "Una guía de 5 minutos para crear tu cuenta de AffProf, generar tu primer enlace rastreado y empezar a proteger cada clic.",
    },
    eyebrow: "Guía",
    title: "Primeros pasos con AffProf",
    intro:
      "Una guía de 5 minutos para crear tu cuenta, generar tu primer enlace rastreado y empezar a proteger cada clic.",
    outlineTitle: "Lo que vas a hacer en esta guía",
    outline: [
      "Crear tu cuenta gratuita",
      "Conocer tu dashboard principal",
      "Configurar tu marca (opcional, pero recomendado)",
      "Crear tu primer producto y enlace",
      "Compartir tu enlace y ver llegar las analíticas",
      "Usar las acciones rápidas en cada enlace",
      "Entender el monitoreo de salud de enlaces",
    ],
    outlineNote:
      "Puedes completar todo esto en menos de 10 minutos. Sin tarjeta de crédito.",
    noteLabel: "Nota",
    whatsNextTitle: "¿Qué sigue?",
    whatsNextEnd: "¿Tienes preguntas? Escríbenos cuando quieras a",
  },
};

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

  const c = CONTENT[lang as Locale];
  const url = `${BASE_URL}/${lang}/guides/getting-started`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/guides/getting-started`;
  }
  languages["x-default"] = `${BASE_URL}/en/guides/getting-started`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages },
  };
}

export default async function GettingStartedGuide({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const mainDict = await getDictionary(lang as Locale);
  const c = CONTENT[lang as Locale];
  const isEs = lang === "es";

  return (
    <>
      <Navbar dict={mainDict.nav} lang={lang} />

      <main className="flex-1 py-16 sm:py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">
            {c.eyebrow}
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            {c.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {c.intro}
          </p>

          <Hr />

          <H2>{c.outlineTitle}</H2>
          <ol className="mt-4 space-y-2 text-sm text-text-secondary list-decimal pl-5 marker:text-primary-light marker:font-semibold">
            {c.outline.map((item) => (
              <li key={item} className="leading-relaxed pl-1">
                {item}
              </li>
            ))}
          </ol>
          <P className="mt-5 text-text-muted">{c.outlineNote}</P>

          <Hr />

          <H2>{isEs ? "1. Crea tu cuenta gratuita" : "1. Create your free account"}</H2>
          <P>
            {isEs ? "Ve a " : "Head to "}
            <ExtLink href={SITE_URLS.register}>app.affprof.com/register</ExtLink>
            {isEs
              ? " y regístrate con tu email y una contraseña. No hay verificación por correo que te detenga, ni necesitas información de pago."
              : " and sign up with your email and a password. There's no email verification step holding you back, and no payment information needed."}
          </P>
          <P>
            {isEs
              ? "El plan Free incluye hasta 10 enlaces y 2 productos — suficiente para probar AffProf con una campaña real antes de decidir si quieres subir a Pro."
              : "The Free plan gives you up to 10 links and 2 products — enough to test AffProf with a real campaign before you decide whether to upgrade."}
          </P>

          <Hr />

          <H2>{isEs ? "2. Tu dashboard principal" : "2. Your home dashboard"}</H2>
          <P>
            {isEs
              ? "Después de iniciar sesión, llegas a tu página "
              : "After signing in, you land on your "}
            <Strong>{isEs ? "Inicio" : "Home"}</Strong>
            {isEs
              ? ". Esta es tu vista de un vistazo:"
              : " page. This is your at-a-glance view:"}
          </P>

          <Screenshot src="/getting-started/home.png" alt={isEs ? "Dashboard de inicio de AffProf" : "AffProf home dashboard"} />

          <P>{isEs ? "Tres tarjetas muestran lo esencial:" : "Three cards show the essentials:"}</P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Total de enlaces" : "Total links"}</Strong>
              {isEs
                ? " — cuántos enlaces cortos has creado y cuántos están activos"
                : " — how many short links you've created and how many are active"}
            </li>
            <li>
              <Strong>{isEs ? "Enlaces rotos" : "Broken links"}</Strong>
              {isEs
                ? " — cualquier cosa que necesite tu atención en este momento"
                : " — anything that needs your attention right now"}
            </li>
            <li>
              <Strong>{isEs ? "Clics (últimos 30 días)" : "Clicks (last 30 days)"}</Strong>
              {isEs
                ? " — tráfico total a través de todos tus enlaces"
                : " — total traffic across all your links"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Los botones de acción rápida te dejan saltar directamente a crear un enlace, abrir analíticas o explorar tu lista completa de enlaces."
              : "The quick-action buttons let you jump straight into creating a link, opening analytics, or browsing your full link list."}
          </P>

          <Hr />

          <H2>{isEs ? "3. Configura tu marca (opcional)" : "3. Set up your brand (optional)"}</H2>
          <P>
            {isEs
              ? "Antes de crear enlaces, puedes configurar una "
              : "Before creating links, you can configure a "}
            <Strong>{isEs ? "marca" : "brand"}</Strong>
            {isEs
              ? " — una combinación guardada de logo y colores que AffProf aplica automáticamente a tus códigos QR. Es opcional, pero si planeas compartir códigos QR en cualquier lugar (videos, presentaciones, packaging, eventos en persona), vale los 30 segundos."
              : " — a saved logo and color combination that AffProf applies to your QR codes automatically. This is optional, but if you plan to share QR codes anywhere (videos, presentations, packaging, in-person events), it's worth the 30 seconds."}
          </P>
          <P>
            {isEs ? "Ve a " : "Go to "}
            <Strong>{isEs ? "Configuración → Marcas → Agregar marca" : "Settings → Brands → Add brand"}</Strong>:
          </P>

          <Screenshot src="/getting-started/create-brand.png" alt={isEs ? "Crear una marca en AffProf" : "Creating a brand in AffProf"} />

          <P>{isEs ? "Completa:" : "Fill in:"}</P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Nombre" : "Name"}</Strong>
              {isEs
                ? " — una etiqueta corta como \"Mi YouTube\" o \"Carlos Media\""
                : " — a short label like \"My YouTube\" or \"Carlos Media\""}
            </li>
            <li>
              <Strong>{isEs ? "Logo" : "Logo"}</Strong>
              {isEs
                ? " — JPG, PNG o WEBP hasta 4 MB. Aparece en el centro de tus códigos QR"
                : " — JPG, PNG, or WEBP up to 4 MB. This appears in the center of your QR codes"}
            </li>
            <li>
              <Strong>{isEs ? "Color frontal del QR" : "QR foreground"}</Strong>
              {isEs
                ? " — el color principal del QR. Los colores oscuros se escanean con más fiabilidad"
                : " — the main QR color. Darker colors scan more reliably"}
            </li>
            <li>
              <Strong>{isEs ? "Color de fondo del QR" : "QR background"}</Strong>
              {isEs
                ? " — necesita suficiente contraste con el frontal"
                : " — needs enough contrast against the foreground"}
            </li>
          </Bullets>
          <P>
            {isEs ? "Activa " : "Toggle "}
            <Strong>{isEs ? "\"Marca por defecto\"" : "\"Default brand\""}</Strong>
            {isEs
              ? " si quieres que esta marca aparezca pre-seleccionada cada vez que abras el diálogo de QR."
              : " if you want this brand pre-selected every time you open the QR dialog."}
          </P>

          <Callout label={c.noteLabel}>
            {isEs
              ? "Los códigos QR con marca (logo y colores personalizados) son una función Pro. En el plan Free, tus códigos QR siguen funcionando — solo usan el estilo por defecto de AffProf."
              : "Branded QR codes (with custom logo and colors) are a Pro feature. On the Free plan, your QR codes still work — they just use AffProf's default style."}
          </Callout>

          <Hr />

          <H2>
            {isEs
              ? "4. Crea tu primer producto, luego tu primer enlace"
              : "4. Create your first product, then your first link"}
          </H2>
          <P>
            {isEs ? "En AffProf, cada enlace pertenece a un " : "In AffProf, every link belongs to a "}
            <Strong>{isEs ? "producto" : "product"}</Strong>
            {isEs
              ? ". Un producto representa una marca, blog, canal o campaña que estás promocionando. Esta agrupación es lo que hace que tus analíticas sean significativas — puedes ver qué campañas generan más clics, qué productos tienen enlaces rotos, y así."
              : ". A product represents a brand, blog, channel, or campaign you're promoting. This grouping is what makes your analytics meaningful — you can see which campaigns drive the most clicks, which products have broken links, and so on."}
          </P>

          <H3>{isEs ? "Crea un producto" : "Create a product"}</H3>
          <P>
            {isEs ? "Ve a " : "Go to "}
            <Strong>{isEs ? "Productos → Nuevo producto" : "Products → New product"}</Strong>
            {isEs
              ? " y dale un nombre (p.ej., \"Mi Blog Tech\", \"Canal de YouTube\", \"Programa de Afiliados de Notion\")."
              : " and give it a name (e.g., \"My Tech Blog\", \"YouTube Channel\", \"Notion Affiliate Program\")."}
          </P>

          <H3>{isEs ? "Crea tu primer enlace" : "Create your first link"}</H3>
          <P>
            {isEs ? "Ve a " : "Go to "}
            <Strong>{isEs ? "Enlaces → Nuevo enlace" : "Links → New link"}</Strong>
            {isEs ? " y verás este formulario:" : " and you'll see this form:"}
          </P>

          <Screenshot src="/getting-started/create-link.png" alt={isEs ? "Formulario de creación de enlace" : "Link creation form"} />

          <P>{isEs ? "Repasemos cada sección:" : "Let's walk through each section:"}</P>

          <H3>{isEs ? "Información básica" : "Basic info"}</H3>
          <Bullets>
            <li>
              <Strong>{isEs ? "Producto" : "Product"}</Strong>
              {isEs
                ? ": selecciona el producto que acabas de crear"
                : ": select the product you just created"}
            </li>
            <li>
              <Strong>{isEs ? "URL base" : "Base URL"}</Strong>
              {isEs
                ? ": pega tu URL completa de afiliado — la larga y fea. AffProf detectará automáticamente parámetros UTM existentes si ya los habías agregado"
                : ": paste your full affiliate URL — the long, ugly one. AffProf will detect existing UTM parameters automatically if you've already added them"}
            </li>
            <li>
              <Strong>{isEs ? "Plataforma" : "Platform"}</Strong>
              {isEs
                ? ": a qué red de afiliados pertenece este enlace (Amazon, ShareASale, Impact, Hotmart, etc.). Es solo para tu propia organización"
                : ": which affiliate network this link belongs to (Amazon, ShareASale, Impact, Hotmart, etc.). This is just for your own organization"}
            </li>
            <li>
              <Strong>{isEs ? "Slug" : "Slug"}</Strong>
              {isEs
                ? ": esta es la parte que aparece en tu enlace corto. Escribe el tuyo (p.ej., "
                : ": this is the part that appears in your short link. Type your own (e.g., "}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">airpods-pro-review</code>
              {isEs ? ") o haz clic en " : ") or click "}
              <Strong>{isEs ? "Sugerir" : "Suggest"}</Strong>
              {isEs ? " para auto-generarlo" : " to auto-generate one"}
            </li>
            <li>
              <Strong>{isEs ? "Disponibilidad del enlace" : "Link availability"}</Strong>
              {isEs
                ? ": déjalo activado. Si alguna vez necesitas pausar un enlace sin borrarlo, desactívalo"
                : ": leave on. If you ever need to pause a link without deleting it, toggle this off"}
            </li>
          </Bullets>

          <H3>{isEs ? "Tracking UTM" : "UTM tracking"}</H3>
          <P>
            {isEs
              ? "Agrega parámetros UTM aquí y AffProf construye la URL final de destino automáticamente. El patrón más común:"
              : "Add UTM parameters here and AffProf builds the final destination URL automatically. The most common pattern:"}
          </P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Source" : "Source"}</Strong>
              {isEs
                ? ": dónde se publicará el enlace (instagram, youtube, newsletter)"
                : ": where the link will be posted (instagram, youtube, newsletter)"}
            </li>
            <li>
              <Strong>{isEs ? "Medium" : "Medium"}</Strong>
              {isEs
                ? ": el tipo de ubicación (bio, descripción-de-video, email)"
                : ": the type of placement (bio, video-description, email)"}
            </li>
            <li>
              <Strong>{isEs ? "Campaign" : "Campaign"}</Strong>
              {isEs
                ? ": el nombre de la campaña (lanzamiento-primavera, promo-q4)"
                : ": the campaign name (spring-launch, q4-promo)"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "No necesitas llenar los cinco — Source, Medium y Campaign suelen ser suficiente."
              : "You don't need to fill all five — Source, Medium, and Campaign are usually enough."}
          </P>

          <H3>{isEs ? "Opciones" : "Options"}</H3>
          <Bullets>
            <li>
              <Strong>{isEs ? "Marca del QR" : "QR brand"}</Strong>
              {isEs
                ? ": elige una marca guardada (del paso 3) para estilizar el QR de este enlace"
                : ": pick a saved brand (from step 3) to style this link's QR code"}
            </li>
            <li>
              <Strong>{isEs ? "URL de fallback" : "Fallback URL"}</Strong>
              {isEs
                ? ": si este enlace se rompe o lo desactivas, los visitantes son redirigidos aquí en lugar de ver un error. Recomendamos fuertemente configurarlo — es la diferencia entre perder un clic y recuperarlo"
                : ": if this link breaks or you disable it, visitors get redirected here instead of seeing an error. We strongly recommend setting this — it's the difference between losing a click and recovering it"}
            </li>
          </Bullets>

          <H3>{isEs ? "Organización" : "Organization"}</H3>
          <P>
            {isEs ? "Agrega " : "Add "}
            <Strong>{isEs ? "etiquetas" : "tags"}</Strong>
            {isEs
              ? " para facilitar el filtrado más adelante. Las etiquetas son labels flexibles como "
              : " to make filtering easier later. Tags are flexible labels like "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">amazon</code>,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">tech</code>,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">black-friday</code>,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">youtube</code>.
            {isEs
              ? " Un enlace puede tener múltiples etiquetas, y podrás filtrar las analíticas por ellas."
              : " A link can have multiple tags, and you'll be able to filter analytics by them."}
          </P>
          <P>
            {isEs ? "Haz clic en " : "Click "}
            <Strong>{isEs ? "Crear enlace" : "Create link"}</Strong>
            {isEs ? " y listo." : " and you're done."}
          </P>

          <Hr />

          <H2>
            {isEs
              ? "5. Comparte tu enlace y observa las analíticas"
              : "5. Share your link and watch analytics"}
          </H2>
          <P>
            {isEs
              ? "Tu nuevo enlace está activo y listo para compartir. Lo encontrarás en "
              : "Your new link is now live and ready to share. You'll find it in "}
            <Strong>{isEs ? "Enlaces" : "Links"}</Strong>
            {isEs
              ? " con una fila que muestra la URL corta, el destino, el conteo de clics y el estado."
              : " with a row showing the short URL, the destination, click count, and status."}
          </P>
          <P>
            {isEs
              ? "Haz clic en cualquier enlace para abrir su panel de detalle. Verás dos pestañas:"
              : "Click on any link to open its detail panel. You'll see two tabs:"}
          </P>

          <H3>{isEs ? "Pestaña Overview" : "Overview tab"}</H3>
          <P>
            {isEs
              ? "Muestra todo sobre el enlace en sí — la URL corta (con un botón de copiar de un clic), el destino, producto, plataforma, parámetros UTM, etiquetas, notas y estado actual. Desde aquí puedes desactivar el enlace, lo que lo mantiene en tu cuenta pero detiene la redirección."
              : "Shows everything about the link itself — the short URL (with a one-click copy button), the destination, product, platform, UTM parameters, tags, notes, and current status. You can disable the link from here, which keeps it in your account but stops the redirect."}
          </P>

          <H3>{isEs ? "Pestaña Analíticas" : "Analytics tab"}</H3>

          <Screenshot
            src="/getting-started/analytic-specific-link.png"
            alt={isEs ? "Analíticas de un enlace específico" : "Specific link analytics"}
          />

          <P>
            {isEs
              ? "Esta vista muestra todo sobre el tráfico del enlace:"
              : "This view shows everything about the link's traffic:"}
          </P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Clics totales" : "Total clicks"}</Strong>
              {isEs
                ? ", porcentaje móvil, escaneos QR y países únicos"
                : ", mobile share, QR scans, and unique countries"}
            </li>
            <li>
              <Strong>{isEs ? "Clics en el tiempo" : "Clicks over time"}</Strong>
              {isEs
                ? " — la línea de tiempo completa para que veas cuándo hay picos de tráfico"
                : " — the full timeline so you can see when traffic spikes"}
            </li>
            <li>
              <Strong>{isEs ? "Fuentes" : "Sources"}</Strong>
              {isEs
                ? " — de dónde vienen los visitantes (directo, social, búsqueda, email)"
                : " — where visitors come from (direct, social, search, email)"}
            </li>
            <li>
              <Strong>{isEs ? "Dispositivos" : "Devices"}</Strong>,{" "}
              <Strong>{isEs ? "sistemas operativos" : "operating systems"}</Strong>,{" "}
              <Strong>{isEs ? "navegadores" : "browsers"}</Strong>
              {isEs ? " — el perfil de tu audiencia" : " — your audience profile"}
            </li>
            <li>
              <Strong>{isEs ? "Países" : "Countries"}</Strong>
              {isEs ? " — desglose geográfico" : " — geographic breakdown"}
            </li>
            <li>
              <Strong>{isEs ? "Salud del enlace" : "Link Health"}</Strong>
              {isEs
                ? " — uptime, tiempo de respuesta promedio e historial por chequeo"
                : " — uptime, average response time, and per-check history"}
            </li>
            <li>
              <Strong>{isEs ? "Clics recientes" : "Recent clicks"}</Strong>
              {isEs
                ? " — cada clic individual con timestamp, ubicación, dispositivo y si la redirección fue exitosa"
                : " — every individual click with timestamp, location, device, and whether the redirect succeeded"}
            </li>
            <li>
              <Strong>{isEs ? "Chequeos recientes" : "Recent checks"}</Strong>
              {isEs
                ? " — el log completo de monitoreo con códigos de estado y tiempos de respuesta"
                : " — the full monitoring log with status codes and response times"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Para una vista de más alto nivel a través de todos tus enlaces, usa el "
              : "For a higher-level view across all your links, use the main "}
            <Strong>{isEs ? "Dashboard" : "Dashboard"}</Strong>
            {isEs ? " principal en su lugar." : " instead."}
          </P>

          <Hr />

          <H2>
            {isEs
              ? "6. Acciones rápidas en cada enlace"
              : "6. Quick actions on each link"}
          </H2>
          <P>
            {isEs ? "En tu tabla de " : "In your "}
            <Strong>{isEs ? "Enlaces" : "Links"}</Strong>
            {isEs
              ? ", cada fila tiene un menú de acciones (los tres puntos a la derecha) que te da acceso rápido a las tareas más comunes sin abrir el panel de detalle completo:"
              : " table, every row has an actions menu (the three dots on the right) that gives you fast access to the most common tasks without opening the full detail panel:"}
          </P>

          <Screenshot
            src="/getting-started/link-actions.png"
            alt={isEs ? "Menú de acciones rápidas en cada enlace" : "Quick actions menu on each link"}
          />

          <Bullets>
            <li>
              <Strong>{isEs ? "Ver detalles" : "View details"}</Strong>
              {isEs
                ? " — abre el panel de detalle con las pestañas Overview y Analíticas"
                : " — opens the detail panel with Overview and Analytics tabs"}
            </li>
            <li>
              <Strong>{isEs ? "Copiar URL corta" : "Copy short URL"}</Strong>
              {isEs
                ? " — copia el enlace al portapapeles al instante, listo para pegar donde sea"
                : " — instantly copies the link to your clipboard, ready to paste anywhere"}
            </li>
            <li>
              <Strong>{isEs ? "Abrir URL de destino" : "Open destination URL"}</Strong>
              {isEs
                ? " — abre el destino de afiliado real en una pestaña nueva para verificar que funciona"
                : " — opens the actual affiliate destination in a new tab so you can verify it's working"}
            </li>
            <li>
              <Strong>{isEs ? "Código QR" : "QR Code"}</Strong>
              {isEs
                ? " — abre el modal generador de QR (más sobre esto abajo)"
                : " — opens the QR generator modal (more on this below)"}
            </li>
            <li>
              <Strong>{isEs ? "Verificar enlace" : "Check link"}</Strong>
              {isEs
                ? " — corre un chequeo de salud inmediato en lugar de esperar al siguiente programado. Útil cuando acabas de arreglar algo y quieres confirmar que funciona"
                : " — runs an immediate health check instead of waiting for the next scheduled one. Useful when you've just fixed something and want to confirm it's working"}
            </li>
            <li>
              <Strong>{isEs ? "Desactivar enlace" : "Disable link"}</Strong>
              {isEs
                ? " — pausa la redirección sin borrar el enlace ni perder las analíticas"
                : " — pauses the redirect without deleting the link or losing analytics"}
            </li>
            <li>
              <Strong>{isEs ? "Editar" : "Edit"}</Strong>
              {isEs
                ? " — abre el formulario de creación pre-llenado con la configuración de este enlace"
                : " — opens the create link form pre-filled with this link's settings"}
            </li>
            <li>
              <Strong>{isEs ? "Eliminar" : "Delete"}</Strong>
              {isEs
                ? " — elimina permanentemente el enlace y sus analíticas"
                : " — permanently removes the link and its analytics"}
            </li>
          </Bullets>

          <H3>{isEs ? "Generar códigos QR" : "Generating QR codes"}</H3>
          <P>
            {isEs ? "Cuando haces clic en " : "When you click "}
            <Strong>{isEs ? "Código QR" : "QR Code"}</Strong>
            {isEs
              ? " desde el menú de acciones (o desde el panel de detalle del enlace), obtienes este modal:"
              : " from the actions menu (or from the link detail panel), you get this modal:"}
          </P>

          <Screenshot
            src="/getting-started/link-actions-qr.png"
            alt={isEs ? "Modal de generación de QR" : "QR generation modal"}
          />

          <P>{isEs ? "Puedes:" : "You can:"}</P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Elegir qué marca" : "Choose which brand"}</Strong>
              {isEs
                ? " aplicar para esta descarga específica. El menú desplegable te deja escoger cualquier marca guardada o usar el estilo por defecto de AffProf. Esto significa que un mismo enlace puede descargarse como múltiples variaciones de QR — por ejemplo, una versión a color para Instagram y una en blanco y negro para material impreso"
                : " to apply for this specific download. The dropdown lets you pick any saved brand or use the default AffProf style. This means one link can be downloaded as multiple QR variations — for example, a colored version for Instagram and a black-and-white version for printed materials"}
            </li>
            <li>
              <Strong>{isEs ? "Previsualizar" : "Preview"}</Strong>
              {isEs
                ? " cómo se verá el QR con tu logo y colores antes de descargar"
                : " how the QR will look with your logo and colors before downloading"}
            </li>
            <li>
              <Strong>{isEs ? "Descargar como PNG" : "Download as PNG"}</Strong>
              {isEs
                ? " en un clic, listo para incrustar en videos, presentaciones, packaging o cualquier material físico"
                : " in one click, ready to embed in videos, presentations, packaging, or any physical material"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Los escaneos de QR cuentan como una métrica separada en tus analíticas, así que puedes ver exactamente cuánto de tu tráfico viene de fuentes de QR vs clics regulares."
              : "The QR scans count as a separate metric in your analytics, so you can see exactly how much of your traffic comes from QR-driven sources versus regular clicks."}
          </P>

          <Hr />

          <H2>
            {isEs
              ? "7. Entiende el monitoreo de salud de enlaces"
              : "7. Understand link health monitoring"}
          </H2>
          <P>
            {isEs
              ? "Esto es una de las cosas que hace a AffProf diferente de un acortador genérico. Cada enlace que creas se revisa automáticamente en un horario:"
              : "This is one of the things that makes AffProf different from a generic shortener. Every link you create is automatically checked on a schedule:"}
          </P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Plan Free" : "Free plan"}</Strong>
              {isEs ? ": una vez al día" : ": once per day"}
            </li>
            <li>
              <Strong>{isEs ? "Plan Pro" : "Pro plan"}</Strong>
              {isEs ? ": cada 6 horas (4 veces al día)" : ": every 6 hours (4 times per day)"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Cuando AffProf detecta un enlace roto, dos cosas pasan:"
              : "When AffProf detects a broken link, two things happen:"}
          </P>
          <ol className="mt-4 space-y-2 text-sm text-text-secondary list-decimal pl-5 marker:text-primary-light marker:font-semibold">
            <li className="leading-relaxed pl-1">
              {isEs
                ? "El estado del enlace en tu dashboard cambia de "
                : "The link's status in your dashboard changes from "}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">{isEs ? "Activo" : "Active"}</code>
              {isEs ? " a " : " to "}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">{isEs ? "Roto" : "Broken"}</code>
              {isEs ? ", con una alerta roja arriba" : ", with a red alert at the top"}
            </li>
            <li className="leading-relaxed pl-1">
              {isEs
                ? "Recibes una notificación por correo (puedes desactivarla por enlace o globalmente en Configuración)"
                : "You receive an email notification (you can disable this per-link or globally in Settings)"}
            </li>
          </ol>
          <P>
            {isEs ? "Si has configurado una " : "If you've configured a "}
            <Strong>{isEs ? "URL de fallback" : "fallback URL"}</Strong>
            {isEs
              ? " para ese enlace, los visitantes son redirigidos automáticamente al respaldo. Si no, ven una página de \"enlace no disponible\"."
              : " for that link, visitors are automatically redirected to the backup. If not, they see a \"link unavailable\" page."}
          </P>
          <P>
            {isEs ? "La sección " : "The "}
            <Strong>{isEs ? "Salud del enlace" : "Link Health"}</Strong>
            {isEs
              ? " en la página de analíticas de cada enlace (visible en el paso 5) te muestra el historial completo de chequeos: tiempos de respuesta, códigos de estado y qué chequeos pasaron o fallaron. También puedes disparar un chequeo manual inmediato en cualquier momento desde el menú de acciones (paso 6)."
              : " section on each link's analytics page (visible in step 5) shows you the full check history: response times, status codes, and which checks passed or failed. You can also trigger an immediate manual check anytime from the actions menu (step 6)."}
          </P>

          <Hr />

          <H2>{c.whatsNextTitle}</H2>
          <P>
            {isEs
              ? "Estás configurado. Algunas cosas que explorar mientras creces:"
              : "You're set up. A few things to explore as you grow:"}
          </P>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/custom-domain`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Conecta un dominio propio" : "Connect a custom domain"}
              </Link>
              {isEs ? " para que tus enlaces usen " : " so your links use "}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">links.yourbrand.com</code>
              {isEs ? " en lugar de " : " instead of "}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">affprof.com/go/...</code>
            </li>
            <li>
              <Link
                href={`/${lang}/guides/import-links`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Importa tus enlaces existentes" : "Import your existing links"}
              </Link>
              {isEs
                ? " desde un CSV si ya tienes una librería que migrar"
                : " from a CSV if you already have a library to migrate"}
            </li>
            <li>
              {isEs ? "Sube a " : "Upgrade to "}
              <Strong>{isEs ? "Pro" : "Pro"}</Strong>
              {isEs
                ? " cuando alcances el límite de 10 enlaces o quieras códigos QR con marca, monitoreo más rápido e importación masiva"
                : " when you hit the 10-link limit or want branded QR codes, faster monitoring, and bulk import"}
            </li>
          </Bullets>
          <P className="mt-6">
            {c.whatsNextEnd}{" "}
            <a
              href={`mailto:${SITE_URLS.supportEmail}`}
              className="font-medium text-primary-light underline-offset-2 hover:underline"
            >
              {SITE_URLS.supportEmail}
            </a>
            .
          </P>
        </article>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}

