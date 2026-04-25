import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import {
  Bullets,
  Callout,
  Code,
  CodeBlock,
  ExtLink,
  H2,
  H3,
  Hr,
  P,
  Screenshot,
  Strong,
  Table,
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
const BILLING_URL = "https://app.affprof.com/billing";

const CSV_EXAMPLE = `product,link,slug,platform
Blue Yeti Microphone,https://www.amazon.com/dp/B002VA464S,blue-yeti-amazon,amazon
Kindle Paperwhite,https://www.amazon.com/dp/B0CFPHTMDX,kindle-paperwhite-amazon,amazon
Notion,https://affiliate.notion.so/abc123,notion-affiliate,notion`;

type Content = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  noteLabel: string;
};

const CONTENT: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Import your existing links from CSV — AffProf",
      description:
        "Bulk-import affiliate links into AffProf from a CSV in about 5 minutes. Works whether you have 10 links or 1,000.",
    },
    eyebrow: "Guide",
    title: "Import your existing links from CSV",
    intro:
      "Already have a library of affiliate links in a spreadsheet, another shortener, or a notes app? Import them all into AffProf in one shot — no need to recreate anything by hand.",
    noteLabel: "Note",
  },
  es: {
    meta: {
      title: "Importa tus enlaces existentes desde CSV — AffProf",
      description:
        "Importa tus enlaces de afiliado a AffProf desde un CSV en unos 5 minutos. Funciona tengas 10 enlaces o 1.000.",
    },
    eyebrow: "Guía",
    title: "Importa tus enlaces existentes desde CSV",
    intro:
      "¿Ya tienes una librería de enlaces de afiliado en una hoja de cálculo, otro acortador o una app de notas? Impórtalos todos a AffProf de una vez — sin necesidad de recrear nada a mano.",
    noteLabel: "Nota",
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
  const url = `${BASE_URL}/${lang}/guides/import-links`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/guides/import-links`;
  }
  languages["x-default"] = `${BASE_URL}/en/guides/import-links`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages },
  };
}

export default async function ImportLinksGuide({
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
          <P className="text-lg">{c.intro}</P>
          <P>
            {isEs
              ? "Esta guía toma unos 5 minutos y funciona tengas 10 enlaces o 1.000."
              : "This guide takes about 5 minutes and works whether you have 10 links or 1,000."}
          </P>

          <Callout label={c.noteLabel}>
            {isEs
              ? "La importación masiva por CSV es una función Pro. Puedes "
              : "Bulk CSV import is a Pro feature. You can "}
            <ExtLink href={BILLING_URL}>
              {isEs ? "subir aquí" : "upgrade here"}
            </ExtLink>
            {isEs ? " cuando quieras." : " anytime."}
          </Callout>

          <Hr />

          <H2>{isEs ? "¿Qué se importa?" : "What gets imported"}</H2>
          <P>
            {isEs
              ? "Cuando subes un CSV, AffProf crea:"
              : "When you upload a CSV, AffProf creates:"}
          </P>
          <Bullets>
            <li>
              {isEs ? "Todos tus " : "All your "}
              <Strong>{isEs ? "enlaces" : "links"}</Strong>
              {isEs
                ? " con sus slugs, destinos, parámetros UTM y configuración"
                : " with their slugs, destinations, UTM parameters, and settings"}
            </li>
            <li>
              {isEs ? "Cualquier " : "Any "}
              <Strong>{isEs ? "producto" : "products"}</Strong>
              {isEs
                ? " mencionado en tu CSV que aún no exista en tu cuenta (emparejado por nombre)"
                : " mentioned in your CSV that don't already exist in your account (matched by name)"}
            </li>
            <li>
              {isEs ? "Cualquier " : "Any "}
              <Strong>{isEs ? "etiqueta" : "tags"}</Strong>
              {isEs
                ? " mencionada que aún no exista (emparejada por nombre)"
                : " mentioned that don't already exist (matched by name)"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "No necesitas crear productos ni etiquetas con anticipación — AffProf se encarga de eso automáticamente."
              : "You don't need to create products or tags ahead of time — AffProf handles that automatically."}
          </P>

          <Hr />

          <H2>{isEs ? "Paso 1: Abre el diálogo de importación" : "Step 1: Open the import dialog"}</H2>
          <P>
            {isEs ? "Ve a " : "Go to "}
            <Strong>{isEs ? "Enlaces" : "Links"}</Strong>
            {isEs ? " y haz clic en " : " and click "}
            <Strong>{isEs ? "Importar CSV" : "Import CSV"}</Strong>
            {isEs ? " en la barra superior derecha:" : " in the top-right toolbar:"}
          </P>

          <Screenshot
            src="/import-links/import-link-step1.png"
            alt={isEs ? "Abrir diálogo de importación CSV" : "Open CSV import dialog"}
          />

          <P>
            {isEs
              ? "Puedes arrastrar un archivo CSV directamente al área o hacer clic para buscarlo en tu computadora."
              : "You can either drag a CSV file directly into the dropzone or click to browse for one on your computer."}
          </P>

          <Hr />

          <H2>
            {isEs
              ? "Paso 2: Obtén la plantilla (recomendado)"
              : "Step 2: Get the template (recommended)"}
          </H2>
          <P>
            {isEs ? "Si aún no tienes un CSV listo, haz clic en " : "If you don't already have a CSV ready, click "}
            <Strong>{isEs ? "Descargar plantilla" : "Download template"}</Strong>
            {isEs
              ? ". Viene pre-llenada con filas de ejemplo para que veas exactamente cómo debe verse cada campo."
              : ". It comes pre-filled with example rows so you can see exactly how each field should look."}
          </P>
          <P>
            {isEs ? "También puedes hacer clic en la pestaña " : "You can also click the "}
            <Strong>{isEs ? "Campos y ejemplo" : "Fields & example"}</Strong>
            {isEs
              ? " para ver la referencia completa de cada columna que AffProf acepta:"
              : " tab to see the full reference for every column AffProf accepts:"}
          </P>

          <Screenshot
            src="/import-links/import-link-step2-fields-example.png"
            alt={isEs ? "Referencia de campos y ejemplo" : "Fields and example reference"}
          />

          <H3>{isEs ? "Columnas requeridas" : "Required columns"}</H3>
          <P>{isEs ? "Estas cuatro son obligatorias en cada fila:" : "These four are mandatory for every row:"}</P>
          <Table
            rows={[
              {
                label: "product",
                value: (
                  <>
                    {isEs
                      ? "Nombre del producto. Se crea automáticamente si no existe. Ejemplo: "
                      : "Product name. Created automatically if it doesn't exist. Example: "}
                    <Code>Blue Yeti Microphone</Code>
                  </>
                ),
              },
              {
                label: "link",
                value: (
                  <>
                    {isEs ? "La URL de destino del afiliado. Ejemplo: " : "The destination affiliate URL. Example: "}
                    <Code>https://www.amazon.com/dp/B002VA464S</Code>
                  </>
                ),
              },
              {
                label: "slug",
                value: (
                  <>
                    {isEs
                      ? "El slug del enlace corto (solo minúsculas, números y guiones). Ejemplo: "
                      : "The short link slug (lowercase letters, numbers, and hyphens only). Example: "}
                    <Code>blue-yeti-amazon</Code>
                  </>
                ),
              },
              {
                label: "platform",
                value: (
                  <>
                    {isEs ? "Red de afiliados o marketplace. Ejemplo: " : "Affiliate network or marketplace. Example: "}
                    <Code>amazon</Code>
                  </>
                ),
              },
            ]}
          />

          <H3>{isEs ? "Columnas opcionales" : "Optional columns"}</H3>
          <P>
            {isEs
              ? "Agrega cualquiera de estas para enriquecer tu importación:"
              : "Add any of these to enrich your import:"}
          </P>
          <Table
            rows={[
              {
                label: "fallback_url",
                value: (
                  <>
                    {isEs ? "Destino de respaldo si el enlace se rompe. Ejemplo: " : "Backup destination if the link breaks. Example: "}
                    <Code>https://yourbrand.com/backup</Code>
                  </>
                ),
              },
              {
                label: "utm_source",
                value: (
                  <>
                    {isEs ? "Parámetro UTM source. Ejemplo: " : "UTM source parameter. Example: "}
                    <Code>instagram</Code>
                  </>
                ),
              },
              {
                label: "utm_medium",
                value: (
                  <>
                    {isEs ? "Parámetro UTM medium. Ejemplo: " : "UTM medium parameter. Example: "}
                    <Code>bio</Code>
                  </>
                ),
              },
              {
                label: "utm_campaign",
                value: (
                  <>
                    {isEs ? "Parámetro UTM campaign. Ejemplo: " : "UTM campaign parameter. Example: "}
                    <Code>spring-launch</Code>
                  </>
                ),
              },
              {
                label: "utm_content",
                value: (
                  <>
                    {isEs ? "Parámetro UTM content. Ejemplo: " : "UTM content parameter. Example: "}
                    <Code>hero-button</Code>
                  </>
                ),
              },
              {
                label: "utm_term",
                value: (
                  <>
                    {isEs ? "Parámetro UTM term. Ejemplo: " : "UTM term parameter. Example: "}
                    <Code>creator-tools</Code>
                  </>
                ),
              },
              {
                label: "is_enabled",
                value: (
                  <>
                    {isEs ? "Si el enlace está activo. Acepta " : "Whether the link is active. Accepts "}
                    <Code>true/false</Code>, <Code>yes/no</Code>
                    {isEs ? " o " : ", or "}
                    <Code>1/0</Code>
                  </>
                ),
              },
              {
                label: "notes",
                value: (
                  <>
                    {isEs
                      ? "Nota interna (solo visible para ti). Ejemplo: "
                      : "Internal note (only visible to you). Example: "}
                    <Code>Best performer in Instagram bio</Code>
                  </>
                ),
              },
              {
                label: "tags",
                value: (
                  <>
                    {isEs
                      ? "Nombres de etiquetas separados por pipe. Se crean automáticamente si faltan. Máximo 10 por enlace. Ejemplo: "
                      : "Pipe-separated tag names. Created automatically if missing. Max 10 per link. Example: "}
                    <Code>amazon|tech|review</Code>
                  </>
                ),
              },
            ]}
          />

          <H3>{isEs ? "El CSV mínimo viable" : "The minimum viable CSV"}</H3>
          <P>
            {isEs
              ? "Si solo quieres empezar rápido, este CSV de 4 columnas funciona:"
              : "If you just want to get started fast, this 4-column CSV works:"}
          </P>
          <CodeBlock language="csv">{CSV_EXAMPLE}</CodeBlock>
          <P>
            {isEs
              ? "Siempre puedes editar enlaces individuales después para agregar UTMs, fallbacks, etiquetas y notas."
              : "You can always edit individual links later to add UTMs, fallbacks, tags, and notes."}
          </P>

          <Hr />

          <H2>{isEs ? "Paso 3: Sube y previsualiza" : "Step 3: Upload and preview"}</H2>
          <P>
            {isEs
              ? "Una vez que subes tu archivo, AffProf lo parsea y te muestra una previsualización de lo que encontró:"
              : "Once you upload your file, AffProf parses it and shows a preview of what it found:"}
          </P>

          <Screenshot
            src="/import-links/import-link-step3.png"
            alt={isEs ? "Previsualización de la importación" : "Import preview"}
          />

          <P>{isEs ? "Verás:" : "You'll see:"}</P>
          <Bullets>
            <li>
              {isEs ? "El número total de " : "The total number of "}
              <Strong>{isEs ? "filas válidas listas para importar" : "valid rows ready to import"}</Strong>
            </li>
            <li>
              {isEs
                ? "Una tabla de previsualización mostrando las primeras filas para que revises los datos"
                : "A preview table showing the first rows so you can spot-check the data"}
            </li>
            <li>
              {isEs
                ? "Números de fila que coinciden con tu CSV original (así si hay problemas, los puedes encontrar en tu archivo)"
                : "Row numbers matching the original CSV (so if there are issues, you can find them in your file)"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Si algo se ve mal (una columna se leyó mal, subiste el archivo equivocado), haz clic en "
              : "If something looks wrong (a column got misread, the wrong file was uploaded), click "}
            <Strong>{isEs ? "Reemplazar" : "Replace"}</Strong>
            {isEs ? " para cambiar el archivo antes de importar." : " to swap the file before importing."}
          </P>

          <Hr />

          <H2>{isEs ? "Paso 4: Arregla cualquier problema" : "Step 4: Fix any issues"}</H2>
          <P>
            {isEs
              ? "Si algunas filas no pasan la validación, AffProf te muestra exactamente qué está mal y dónde:"
              : "If some rows don't pass validation, AffProf shows you exactly what's wrong and where:"}
          </P>

          <Screenshot
            src="/import-links/import-link-step4-if-there-are-errors.png"
            alt={isEs ? "Errores de validación en la importación" : "Validation errors in the import"}
          />

          <P>{isEs ? "Problemas comunes que podrías ver:" : "Common issues you might see:"}</P>
          <Bullets>
            <li>
              <Strong>{isEs ? "URL inválida" : "Invalid URL"}</Strong>
              {isEs ? " — debe empezar con " : " — must start with "}
              <Code>http://</Code>
              {isEs ? " o " : " or "}
              <Code>https://</Code>
            </li>
            <li>
              <Strong>{isEs ? "Slug inválido" : "Invalid slug"}</Strong>
              {isEs
                ? " — solo se permiten minúsculas, números y guiones (sin espacios, sin caracteres especiales como "
                : " — only lowercase letters, numbers, and hyphens are allowed (no spaces, no special characters like "}
              <Code>#</Code>
              {isEs ? " o " : " or "}
              <Code>&</Code>)
            </li>
            <li>
              <Strong>{isEs ? "Campo requerido faltante" : "Missing required field"}</Strong>
              {isEs ? " — " : " — "}
              <Code>product</Code>, <Code>link</Code>, <Code>slug</Code>
              {isEs ? " o " : ", or "}
              <Code>platform</Code>
              {isEs ? " está vacío en esa fila" : " is empty in that row"}
            </li>
            <li>
              <Strong>{isEs ? "Slug en conflicto" : "Slug conflict"}</Strong>
              {isEs
                ? " — el slug ya existe en tu cuenta o aparece dos veces en el CSV"
                : " — the slug already exists in your account or appears twice in the CSV"}
            </li>
            <li>
              <Strong>{isEs ? "Slug demasiado largo" : "Slug too long"}</Strong>
              {isEs ? " — máximo 100 caracteres" : " — max 100 characters"}
            </li>
          </Bullets>

          <P>
            {isEs ? "Dos formas de manejar errores:" : "Two ways to handle errors:"}
          </P>

          <H3>
            {isEs
              ? "Opción A: importa las filas válidas ahora, arregla el resto después"
              : "Option A: import the valid rows now, fix the rest later"}
          </H3>
          <P>
            {isEs ? "Haz clic en " : "Click "}
            <Strong>{isEs ? "Importar enlaces" : "Import links"}</Strong>
            {isEs
              ? " — solo se crean las filas válidas. Las filas con errores se omiten, no se pierden. Arréglalas en tu CSV y vuelve a subirlo para agregar las que faltan."
              : " — only the valid rows are created. The error rows are skipped, not lost. Fix them in your CSV and re-upload to add the missing ones."}
          </P>

          <H3>
            {isEs
              ? "Opción B: arregla todo primero"
              : "Option B: fix everything first"}
          </H3>
          <P>
            {isEs ? "Abre tu CSV, corrige las filas mostradas en el panel de problemas, guárdalo y haz clic en " : "Open your CSV, correct the rows shown in the issues panel, save it, and click "}
            <Strong>{isEs ? "Reemplazar" : "Replace"}</Strong>
            {isEs
              ? " para subir la versión corregida. Repite hasta que tengas cero problemas."
              : " to upload the corrected version. Repeat until you have zero issues."}
          </P>

          <Callout label={isEs ? "Tip" : "Tip"}>
            {isEs
              ? "Cada mensaje de error te dice el número exacto de fila y el problema específico, así que arreglarlos en tu hoja de cálculo es rápido."
              : "Each error message tells you the exact row number and the specific problem, so fixing them in your spreadsheet is fast."}
          </Callout>

          <Hr />

          <H2>{isEs ? "Paso 5: Confirma la importación" : "Step 5: Confirm import"}</H2>
          <P>
            {isEs ? "Cuando todas las filas se ven bien, haz clic en " : "When all rows look good, click "}
            <Strong>{isEs ? "Importar enlaces" : "Import links"}</Strong>
            {isEs
              ? ". AffProf procesa el lote completo y te muestra una confirmación:"
              : ". AffProf processes the whole batch and shows you a confirmation:"}
          </P>

          <Screenshot
            src="/import-links/import-link-step5.png"
            alt={isEs ? "Confirmación de importación" : "Import confirmation"}
          />

          <P>
            {isEs
              ? "Verás exactamente cuántos enlaces se crearon o actualizaron. Cierra el diálogo y tus enlaces nuevos aparecen inmediatamente en la tabla de Enlaces, listos para compartir, generar códigos QR y empezar a rastrear."
              : "You'll see exactly how many links were created or updated. Close the dialog and your new links appear immediately in the Links table, ready to share, generate QR codes for, and start tracking."}
          </P>

          <Hr />

          <H2>{isEs ? "Cómo funcionan las actualizaciones" : "How updates work"}</H2>
          <P>
            {isEs ? "Si subes un CSV con un slug que " : "If you upload a CSV with a slug that "}
            <Strong>{isEs ? "ya existe" : "already exists"}</Strong>
            {isEs
              ? " en tu cuenta, AffProf actualiza ese enlace con los nuevos valores del CSV en lugar de crear un duplicado. Esto significa que puedes usar la importación CSV para:"
              : " in your account, AffProf updates that link with the new values from the CSV instead of creating a duplicate. This means you can use CSV import to:"}
          </P>
          <Bullets>
            <li>
              {isEs
                ? "Actualizar URLs de destino en masa a través de muchos enlaces (útil cuando un programa de afiliados migra)"
                : "Bulk-update destination URLs across many links (handy when an affiliate program migrates)"}
            </li>
            <li>
              {isEs
                ? "Agregar parámetros UTM a un lote de enlaces existentes"
                : "Add UTM parameters to a batch of existing links"}
            </li>
            <li>
              {isEs
                ? "Aplicar una etiqueta a muchos enlaces a la vez"
                : "Apply a tag to many links at once"}
            </li>
            <li>
              {isEs
                ? "Actualizar notas o URLs de fallback en masa"
                : "Update notes or fallback URLs in bulk"}
            </li>
          </Bullets>
          <P>
            {isEs ? "El emparejamiento se basa en el " : "The match is based on the "}
            <Strong>{isEs ? "slug" : "slug"}</Strong>
            {isEs ? " — todo lo demás se puede cambiar." : " — anything else can be changed."}
          </P>

          <Hr />

          <H2>{isEs ? "Tips para importaciones limpias" : "Tips for clean imports"}</H2>
          <Bullets>
            <li>
              <Strong>{isEs ? "Mantén tu CSV en UTF-8" : "Keep your CSV in UTF-8"}</Strong>
              {isEs
                ? " — la mayoría de las apps de hojas de cálculo exportan así por defecto. Si ves caracteres raros en nombres de productos con acentos, vuelve a guardarlo como UTF-8"
                : " — most spreadsheet apps export this by default. If you see weird characters in product names with accents, re-save as UTF-8"}
            </li>
            <li>
              <Strong>{isEs ? "Pon entre comillas los campos con comas" : "Quote fields with commas"}</Strong>
              {isEs ? " — si un nombre de producto o nota contiene una coma, envuelve ese campo en comillas dobles: " : " — if a product name or note contains a comma, wrap that field in double quotes: "}
              <Code>&quot;Notion, the all-in-one workspace&quot;</Code>
            </li>
            <li>
              <Strong>{isEs ? "No incluyas un prefijo en la fila de cabecera" : "Don't include a header row prefix"}</Strong>
              {isEs ? " — tu archivo debe empezar directamente con los nombres de las columnas (" : " — your file should start directly with the column names ("}
              <Code>product,link,slug,...</Code>
              {isEs ? "), sin metadata arriba" : "), no metadata above"}
            </li>
            <li>
              <Strong>{isEs ? "Prueba primero con un lote pequeño" : "Test with a small batch first"}</Strong>
              {isEs
                ? " — si vas a importar cientos de enlaces, prueba con 5-10 filas primero para confirmar que todo se mapea correctamente antes de correr la importación completa"
                : " — if you're importing hundreds of links, try 5-10 rows first to confirm everything maps correctly before running the full import"}
            </li>
            <li>
              <Strong>
                {isEs
                  ? "Pipe para etiquetas, no comas"
                  : "Pipe character for tags, not commas"}
              </Strong>
              {isEs ? " — las etiquetas se separan con " : " — tags are separated by "}
              <Code>|</Code>
              {isEs ? ", no con " : ", not by "}
              <Code>,</Code>
              {isEs ? ". Así que " : ". So "}
              <Code>amazon|tech|review</Code>
              {isEs ? ", no " : ", not "}
              <Code>amazon,tech,review</Code>
            </li>
          </Bullets>

          <Hr />

          <H2>{isEs ? "Limitaciones" : "Limitations"}</H2>
          <Bullets>
            <li>
              <Strong>{isEs ? "Máximo 10 etiquetas por enlace" : "Maximum 10 tags per link"}</Strong>
              {isEs
                ? " — las etiquetas extra en el CSV se ignoran"
                : " — extra tags in the CSV are ignored"}
            </li>
            <li>
              <Strong>
                {isEs
                  ? "Los slugs deben ser únicos dentro de tu cuenta"
                  : "Slugs must be unique within your account"}
              </Strong>
              {isEs
                ? " — los duplicados en el CSV o contra enlaces existentes causan errores"
                : " — duplicates in the CSV or against existing links cause errors"}
            </li>
            <li>
              <Strong>{isEs ? "Solo archivos CSV" : "CSV files only"}</Strong>
              {isEs
                ? " — XLSX, ODS u otros formatos de hoja de cálculo deben ser exportados como CSV primero"
                : " — XLSX, ODS, or other spreadsheet formats need to be exported as CSV first"}
            </li>
          </Bullets>

          <Hr />

          <H2>{isEs ? "¿Qué sigue?" : "What's next?"}</H2>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/custom-domain`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Conecta un dominio propio" : "Connect a custom domain"}
              </Link>
              {isEs
                ? " para que todos tus enlaces importados usen tu propio subdominio"
                : " so all your imported links use your own subdomain"}
            </li>
            <li>
              {isEs ? "Vuelve a " : "Back to "}
              <Link
                href={`/${lang}/guides/getting-started`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Primeros pasos" : "Getting Started"}
              </Link>
              {isEs ? " para el recorrido completo" : " for the full walkthrough"}
            </li>
          </Bullets>
          <P className="mt-6">
            {isEs
              ? "¿Necesitas ayuda con un CSV específico que no se importa? Escríbenos a "
              : "Need help with a specific CSV that won't import? Email "}
            <a
              href={`mailto:${SITE_URLS.supportEmail}`}
              className="font-medium text-primary-light underline-offset-2 hover:underline"
            >
              {SITE_URLS.supportEmail}
            </a>
            {isEs
              ? " con tu archivo adjunto y le echamos un vistazo."
              : " with your file attached and we'll take a look."}
          </P>
        </article>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
