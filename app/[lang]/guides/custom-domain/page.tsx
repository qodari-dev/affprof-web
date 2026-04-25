import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import {
  Bullets,
  Callout,
  Code,
  ExtLink,
  H2,
  H3,
  H4,
  Hr,
  NumberedList,
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
      title: "Connect a custom domain — AffProf",
      description:
        "Set up your own subdomain (like links.yourbrand.com) for AffProf short links in about 5 minutes plus DNS propagation.",
    },
    eyebrow: "Guide",
    title: "Connect a custom domain to AffProf",
    intro:
      "Use your own subdomain (like links.yourbrand.com or go.yourbrand.com) instead of the default affprof.com/go/... for every short link in your account.",
    noteLabel: "Note",
  },
  es: {
    meta: {
      title: "Conectar un dominio propio — AffProf",
      description:
        "Configura tu propio subdominio (como links.tumarca.com) para tus enlaces cortos de AffProf en unos 5 minutos más la propagación DNS.",
    },
    eyebrow: "Guía",
    title: "Conecta un dominio propio a AffProf",
    intro:
      "Usa tu propio subdominio (como links.tumarca.com o go.tumarca.com) en lugar del affprof.com/go/... por defecto para cada enlace corto de tu cuenta.",
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
  const url = `${BASE_URL}/${lang}/guides/custom-domain`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/guides/custom-domain`;
  }
  languages["x-default"] = `${BASE_URL}/en/guides/custom-domain`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages },
  };
}

export default async function CustomDomainGuide({
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
              ? "Esta guía toma unos 5 minutos de trabajo más el tiempo de propagación DNS (normalmente menos de una hora, ocasionalmente hasta 24 horas)."
              : "This guide takes about 5 minutes of work plus DNS propagation time (usually under an hour, occasionally up to 24 hours)."}
          </P>

          <Callout label={c.noteLabel}>
            {isEs ? "Los dominios propios son una función Pro. Puedes " : "Custom domains are a Pro feature. You can "}
            <ExtLink href={BILLING_URL}>
              {isEs ? "subir aquí" : "upgrade here"}
            </ExtLink>
            {isEs ? " cuando quieras." : " anytime."}
          </Callout>

          <Hr />

          <H2>{isEs ? "¿Por qué usar un dominio propio?" : "Why use a custom domain?"}</H2>
          <P>
            {isEs
              ? "Un dominio propio reemplaza "
              : "A custom domain replaces "}
            <Code>affprof.com/go/yourname/your-slug</Code>
            {isEs ? " por algo como " : " with something like "}
            <Code>links.yourbrand.com/your-slug</Code>
            {isEs ? ". Tres razones de por qué importa:" : ". Three reasons it matters:"}
          </P>
          <Bullets>
            <li>
              <Strong>{isEs ? "Consistencia de marca" : "Brand consistency"}</Strong>
              {isEs
                ? " — tu audiencia ve tu dominio, no el nuestro"
                : " — your audience sees your domain, not ours"}
            </li>
            <li>
              <Strong>{isEs ? "Mayor tasa de clics" : "Higher click-through rates"}</Strong>
              {isEs
                ? " — los enlaces cortos con marca propia suelen rendir mejor que los acortadores genéricos porque inspiran confianza"
                : " — branded short links typically perform better than generic shorteners because they look trustworthy"}
            </li>
            <li>
              <Strong>{isEs ? "Portabilidad" : "Portability"}</Strong>
              {isEs
                ? " — tú controlas el dominio, así que tus enlaces siguen siendo tuyos sin importar cualquier cambio futuro de herramienta"
                : " — you control the domain, so your links remain yours regardless of any future tooling change"}
            </li>
          </Bullets>
          <P>
            {isEs ? "Una cosa importante de saber al inicio: " : "One important thing to know upfront: "}
            <Strong>
              {isEs
                ? "una vez que conectas un dominio propio, todos tus enlaces cortos existentes empiezan a resolverse automáticamente desde él"
                : "once you connect a custom domain, all your existing short links automatically start resolving from it"}
            </Strong>
            {isEs ? ". Las URLs viejas " : ". Old "}
            <Code>affprof.com/go/...</Code>
            {isEs
              ? " siguen funcionando también, así que nada se rompe — pero los nuevos clics se rutearán a través de tu nuevo dominio."
              : " URLs continue to work too, so nothing breaks — but new clicks will route through your new domain."}
          </P>

          <Hr />

          <H2>{isEs ? "Antes de empezar" : "Before you start"}</H2>
          <P>{isEs ? "Necesitarás:" : "You'll need:"}</P>
          <NumberedList>
            <li className="leading-relaxed pl-1">
              <Strong>{isEs ? "Un dominio que poseas" : "A domain you own"}</Strong>
              {isEs
                ? " — comprado en cualquier registrador (Namecheap, GoDaddy, Cloudflare, Google Domains, etc.)"
                : " — purchased through any registrar (Namecheap, GoDaddy, Cloudflare, Google Domains, etc.)"}
            </li>
            <li className="leading-relaxed pl-1">
              <Strong>{isEs ? "Acceso a tu configuración DNS" : "Access to your DNS settings"}</Strong>
              {isEs
                ? " — normalmente dentro del panel de control de tu registrador, o en Cloudflare si has delegado el DNS allí"
                : " — usually inside your registrar's control panel, or in Cloudflare if you've delegated DNS there"}
            </li>
            <li className="leading-relaxed pl-1">
              <Strong>{isEs ? "Un subdominio para dedicar a AffProf" : "A subdomain to dedicate to AffProf"}</Strong>
              {isEs ? " — opciones comunes son " : " — common choices are "}
              <Code>go</Code>, <Code>links</Code>, <Code>l</Code>{isEs ? " o " : ", or "}<Code>to</Code>
              {isEs ? ". Así, " : ". So "}
              <Code>go.tumarca.com</Code>
              {isEs ? " o " : " or "}
              <Code>links.tumarca.com</Code>
            </li>
          </NumberedList>

          <Callout label={isEs ? "Solo subdominios" : "Subdomains only"}>
            {isEs
              ? "AffProf aún no soporta dominios raíz (p.ej., "
              : "AffProf doesn't support root domains yet (e.g., "}
            <Code>tumarca.com</Code>
            {isEs
              ? " no funcionará — debe ser un subdominio)."
              : " won't work — it needs to be a subdomain)."}
          </Callout>

          <Hr />

          <H2>{isEs ? "Paso 1: Agrega tu subdominio en AffProf" : "Step 1: Add your subdomain in AffProf"}</H2>
          <P>
            {isEs ? "Ve a " : "Go to "}
            <Strong>{isEs ? "Configuración → Dominio propio" : "Settings → Custom domain"}</Strong>:
          </P>

          <Screenshot
            src="/custom-domain/custom-domain-step1.png"
            alt={isEs ? "Agregar subdominio en AffProf" : "Add subdomain in AffProf"}
          />

          <P>
            {isEs ? "Escribe tu subdominio completo en el campo " : "Type your full subdomain in the "}
            <Strong>{isEs ? "Subdominio" : "Subdomain"}</Strong>
            {isEs ? " (p.ej., " : " field (e.g., "}
            <Code>go.tumarca.com</Code>
            {isEs ? ") y haz clic en " : ") and click "}
            <Strong>{isEs ? "Agregar dominio" : "Add domain"}</Strong>.
          </P>
          <P>
            {isEs
              ? "AffProf lo guardará como \"Pendiente de verificación\" e inmediatamente te mostrará los registros DNS que necesitas configurar."
              : "AffProf will save it as \"Pending verification\" and immediately show you the DNS records you need to configure."}
          </P>

          <Hr />

          <H2>{isEs ? "Paso 2: Configura tus registros DNS" : "Step 2: Configure your DNS records"}</H2>
          <P>
            {isEs
              ? "Después de agregar el subdominio, verás dos registros para añadir a tu DNS:"
              : "After adding the subdomain, you'll see two records to add to your DNS:"}
          </P>

          <Screenshot
            src="/custom-domain/custom-domain-step2.png"
            alt={isEs ? "Registros DNS para configurar" : "DNS records to configure"}
          />

          <P>{isEs ? "Necesitas crear ambos:" : "You need to create both:"}</P>

          <H3>{isEs ? "Registro TXT (para verificación)" : "TXT record (for verification)"}</H3>
          <P>
            {isEs
              ? "Confirma que efectivamente eres dueño del dominio."
              : "Confirms that you actually own the domain."}
          </P>
          <Table
            rows={[
              { label: "Type", value: "TXT" },
              {
                label: "Name",
                value: (
                  <>
                    <Code>_affprof.go.yourbrand.com</Code>{" "}
                    {isEs ? "(mostrado en tu dashboard)" : "(shown in your dashboard)"}
                  </>
                ),
              },
              {
                label: "Value",
                value: (
                  <>
                    <Code>affprof-verify=...</Code>{" "}
                    {isEs
                      ? "(la cadena larga mostrada en tu dashboard)"
                      : "(the long string shown in your dashboard)"}
                  </>
                ),
              },
              {
                label: "TTL",
                value: isEs
                  ? "Por defecto (normalmente 3600, o \"Auto\" en Cloudflare)"
                  : "Default (usually 3600, or \"Auto\" in Cloudflare)",
              },
            ]}
          />

          <H3>{isEs ? "Registro CNAME (para enrutar)" : "CNAME record (for routing)"}</H3>
          <P>
            {isEs
              ? "Le dice a internet que envíe todo el tráfico de tu subdominio a los servidores de AffProf."
              : "Tells the internet to send all traffic for your subdomain to AffProf's servers."}
          </P>
          <Table
            rows={[
              { label: "Type", value: "CNAME" },
              {
                label: "Name",
                value: (
                  <>
                    <Code>go.yourbrand.com</Code>{" "}
                    {isEs ? "(tu subdominio completo)" : "(your full subdomain)"}
                  </>
                ),
              },
              {
                label: "Value",
                value: <Code>cname.affprof.com</Code>,
              },
              {
                label: "TTL",
                value: isEs ? "Por defecto" : "Default",
              },
              {
                label: "Proxy",
                value: isEs
                  ? "Si usas Cloudflare: apaga la nube naranja (DNS only) para la verificación inicial"
                  : "If using Cloudflare: turn the orange cloud OFF (DNS only) for the initial verification",
              },
            ]}
          />

          <Callout label={isEs ? "Tip" : "Tip"}>
            {isEs
              ? "Usa los botones de copiar en el dashboard de AffProf para tomar cada valor exactamente. Un solo error de tipeo (espacio extra, punto faltante) impedirá la verificación."
              : "Use the copy buttons in the AffProf dashboard to grab each value exactly. A single typo (extra space, missing dot) will prevent verification."}
          </Callout>

          <H3>{isEs ? "Cómo agregar estos registros" : "How to add these records"}</H3>
          <P>
            {isEs
              ? "La interfaz exacta depende de tu registrador, pero los pasos son similares en todos:"
              : "The exact UI depends on your registrar, but the steps are similar everywhere:"}
          </P>
          <Bullets>
            <li>
              <Strong>Cloudflare</Strong>
              {isEs
                ? ": Dashboard → tu dominio → DNS → Records → Add record"
                : ": Dashboard → your domain → DNS → Records → Add record"}
            </li>
            <li>
              <Strong>Namecheap</Strong>
              {isEs
                ? ": Dashboard → Domain List → Manage → Advanced DNS → Add New Record"
                : ": Dashboard → Domain List → Manage → Advanced DNS → Add New Record"}
            </li>
            <li>
              <Strong>GoDaddy</Strong>
              {isEs
                ? ": Dashboard → Products → DNS → Add → elige tipo de registro"
                : ": Dashboard → Products → DNS → Add → choose record type"}
            </li>
            <li>
              <Strong>{isEs ? "Google Domains / Squarespace Domains" : "Google Domains / Squarespace Domains"}</Strong>
              {isEs
                ? ": sección DNS → Manage custom records"
                : ": DNS section → Manage custom records"}
            </li>
          </Bullets>
          <P>
            {isEs
              ? "Si no estás seguro de dónde vive tu DNS, busca \"[tu registrador] add CNAME record\" — todos tienen guías paso a paso."
              : "If you're unsure where your DNS lives, search \"[your registrar] add CNAME record\" — they all have step-by-step guides."}
          </P>

          <Hr />

          <H2>{isEs ? "Paso 3: Verifica y activa" : "Step 3: Verify and activate"}</H2>
          <P>
            {isEs
              ? "Una vez guardados ambos registros DNS, vuelve a AffProf y haz clic en el botón "
              : "Once both DNS records are saved, head back to AffProf and click the "}
            <Strong>{isEs ? "Verificar" : "Verify"}</Strong>
            {isEs ? " junto a tu dominio." : " button next to your domain."}
          </P>
          <P>
            {isEs
              ? "Los cambios DNS normalmente se propagan en unos minutos, pero ocasionalmente pueden tomar hasta 24 horas. Si la verificación falla la primera vez, espera 5-10 minutos y haz clic en "
              : "DNS changes usually propagate within a few minutes, but can occasionally take up to 24 hours. If verification fails the first time, wait 5-10 minutes and click "}
            <Strong>{isEs ? "Verificar" : "Verify"}</Strong>
            {isEs ? " de nuevo." : " again."}
          </P>
          <P>{isEs ? "Cuando funciona, verás esto:" : "When it succeeds, you'll see this:"}</P>

          <Screenshot
            src="/custom-domain/custom-domain-step3.png"
            alt={isEs ? "Dominio verificado y activo" : "Domain verified and active"}
          />

          <P>
            {isEs ? "El dominio queda marcado como " : "The domain is now marked as "}
            <Strong>{isEs ? "Verificado" : "Verified"}</Strong>
            {isEs ? " y " : " and "}
            <Strong>{isEs ? "Principal" : "Primary"}</Strong>
            {isEs
              ? ", y AffProf emite automáticamente un certificado SSL para él (HTTPS funciona out of the box, sin configuración extra)."
              : ", and AffProf automatically issues an SSL certificate for it (HTTPS works out of the box, no extra setup)."}
          </P>
          <P>
            <Strong>
              {isEs
                ? "Todos tus enlaces cortos — los nuevos y los existentes — ahora se resuelven a través de tu nuevo dominio."
                : "All your short links — both new and existing — now resolve through your new domain."}
            </Strong>{" "}
            {isEs ? "Tus URLs viejas " : "Your old "}
            <Code>affprof.com/go/...</Code>
            {isEs
              ? " siguen funcionando para los enlaces ya compartidos, así que nada se rompe."
              : " URLs continue to work for any links already shared, so nothing breaks."}
          </P>

          <Hr />

          <H2>{isEs ? "Solución de problemas" : "Troubleshooting"}</H2>

          <H4>
            {isEs
              ? "La verificación falla después de 24 horas"
              : "Verification fails after 24 hours"}
          </H4>
          <Bullets>
            <li>
              {isEs
                ? "Revisa ambos registros en tu panel DNS contra lo que muestra AffProf. El nombre del TXT a menudo necesita el prefijo de underscore exactamente como se muestra"
                : "Double-check both records in your DNS panel against what AffProf shows. The TXT name often needs the underscore prefix exactly as shown"}
            </li>
            <li>
              {isEs ? "Confirma que el valor del CNAME sea exactamente " : "Confirm the CNAME value is exactly "}
              <Code>cname.affprof.com</Code>
              {isEs
                ? " sin puntos al final ni espacios extra"
                : " with no trailing dots or extra spaces"}
            </li>
            <li>
              {isEs
                ? "Si estás en Cloudflare con el proxy de la nube naranja activado, apágalo temporalmente para verificar, y vuelve a activarlo después si quieres"
                : "If you're on Cloudflare with the orange proxy cloud enabled, turn it off temporarily for verification, then re-enable after if you want"}
            </li>
            <li>
              {isEs ? "Usa una herramienta como " : "Use a tool like "}
              <ExtLink href="https://dnschecker.org">dnschecker.org</ExtLink>
              {isEs
                ? " para confirmar que tus registros son visibles globalmente"
                : " to confirm your records are visible globally"}
            </li>
          </Bullets>

          <H4>
            {isEs
              ? "La verificación funciona pero los enlaces no cargan"
              : "Verification works but links don't load"}
          </H4>
          <Bullets>
            <li>
              {isEs
                ? "Espera unos minutos más — el aprovisionamiento SSL puede tomar un momento extra después de la verificación"
                : "Wait a few more minutes — SSL provisioning can take an extra moment after verification"}
            </li>
            <li>
              {isEs
                ? "Intenta abrir tu subdominio en una ventana de incógnito para descartar caché del navegador"
                : "Try opening your subdomain in an incognito window to rule out browser cache"}
            </li>
            <li>
              {isEs ? "Si sigue fallando después de 30 minutos, escríbenos a " : "If still failing after 30 minutes, email us at "}
              <a
                href={`mailto:${SITE_URLS.supportEmail}`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {SITE_URLS.supportEmail}
              </a>
              {isEs ? " con el nombre de tu dominio" : " with your domain name"}
            </li>
          </Bullets>

          <H4>
            {isEs
              ? "Quieres cambiar tu dominio propio más adelante"
              : "You want to change your custom domain later"}
          </H4>
          <Bullets>
            <li>
              {isEs ? "Haz clic en " : "Click "}
              <Strong>{isEs ? "Eliminar" : "Remove"}</Strong>
              {isEs
                ? " en tu dominio actual, luego agrega uno nuevo y repite el proceso. Tus enlaces cortos viejos siguen funcionando en el dominio antiguo solo mientras los registros DNS existan; si eliminas el subdominio por completo en tu registrador, esas URLs dejan de resolverse"
                : " on your current domain, then add a new one and repeat the process. Your old short links continue to work on the old domain only as long as the DNS records exist; if you fully delete the subdomain at your registrar, those URLs stop resolving"}
            </li>
          </Bullets>

          <Hr />

          <H2>{isEs ? "Limitaciones" : "Limitations"}</H2>
          <Bullets>
            <li>
              <Strong>
                {isEs
                  ? "Un dominio propio por cuenta"
                  : "One custom domain per account"}
              </Strong>
              {isEs
                ? " por ahora. Si manejas múltiples marcas y quieres un dominio separado para cada una, eso vendrá en una actualización futura"
                : " for now. If you run multiple brands and want a separate domain for each, that's coming in a future update"}
            </li>
            <li>
              <Strong>{isEs ? "Solo subdominios" : "Subdomains only"}</Strong>
              {isEs ? " — los dominios raíz (" : " — root domains ("}
              <Code>tumarca.com</Code>
              {isEs ? ") aún no son soportados" : ") aren't supported yet"}
            </li>
            <li>
              {isEs
                ? "El dominio propio reemplaza al por defecto para "
                : "The custom domain replaces the default for "}
              <Strong>{isEs ? "todos" : "all"}</Strong>
              {isEs ? " los enlaces de tu cuenta — no puedes usar " : " links in your account — you can't use "}
              <Code>go.brand-a.com</Code>
              {isEs ? " para algunos enlaces y " : " for some links and "}
              <Code>go.brand-b.com</Code>
              {isEs
                ? " para otros dentro de la misma cuenta"
                : " for others within the same account"}
            </li>
          </Bullets>

          <Hr />

          <H2>{isEs ? "¿Qué sigue?" : "What's next?"}</H2>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/import-links`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Importa tus enlaces existentes" : "Import your existing links"}
              </Link>
              {isEs
                ? " desde un CSV — funciona perfectamente con tu nuevo dominio propio"
                : " from a CSV — works seamlessly with your new custom domain"}
            </li>
            <li>
              {isEs ? "Vuelve a " : "Back to "}
              <Link
                href={`/${lang}/guides/getting-started`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {isEs ? "Primeros pasos" : "Getting Started"}
              </Link>
              {isEs ? " si saltaste hasta aquí" : " if you skipped here"}
            </li>
          </Bullets>
          <P className="mt-6">
            {isEs ? "¿Atorado? Escríbenos a " : "Stuck? Email "}
            <a
              href={`mailto:${SITE_URLS.supportEmail}`}
              className="font-medium text-primary-light underline-offset-2 hover:underline"
            >
              {SITE_URLS.supportEmail}
            </a>
            {isEs
              ? " con tu dominio y te ayudamos a verificarlo."
              : " with your domain and we'll help you get it verified."}
          </P>
        </article>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
