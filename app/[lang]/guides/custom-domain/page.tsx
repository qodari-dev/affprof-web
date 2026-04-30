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
  getGuidesDictionary,
  hasLocale,
  locales,
  type Locale,
} from "../../dictionaries";

const BASE_URL = "https://affprof.com";
const BILLING_URL = "https://app.affprof.com/billing";

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

  const c = (await getGuidesDictionary(lang as Locale)).customDomain;
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
    openGraph: {
      type: "article",
      url,
      siteName: "AffProf",
      title: c.meta.title,
      description: c.meta.description,
      images: [
        {
          url: `${BASE_URL}/og-image-v2.png`,
          width: 1200,
          height: 630,
          alt: "AffProf — Affiliate Link Management",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [`${BASE_URL}/og-image-v2.png`],
    },
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
  const c = (await getGuidesDictionary(lang as Locale)).customDomain;
  const g = c.text;

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
            {g.s001}
          </P>

          <Callout label={c.noteLabel}>
            {g.s002}
            <ExtLink href={BILLING_URL}>
              {g.s003}
            </ExtLink>
            {g.s004}
          </Callout>

          <Hr />

          <H2>{g.s005}</H2>
          <P>
            {g.s006}
            <Code>affprof.com/go/yourname/your-slug</Code>
            {g.s007}
            <Code>links.yourbrand.com/your-slug</Code>
            {g.s008}
          </P>
          <Bullets>
            <li>
              <Strong>{g.s009}</Strong>
              {g.s010}
            </li>
            <li>
              <Strong>{g.s011}</Strong>
              {g.s012}
            </li>
            <li>
              <Strong>{g.s013}</Strong>
              {g.s014}
            </li>
          </Bullets>
          <P>
            {g.s015}
            <Strong>
              {g.s016}
            </Strong>
            {g.s017}
            <Code>affprof.com/go/...</Code>
            {g.s018}
          </P>

          <Hr />

          <H2>{g.s019}</H2>
          <P>{g.s020}</P>
          <NumberedList>
            <li className="leading-relaxed pl-1">
              <Strong>{g.s021}</Strong>
              {g.s022}
            </li>
            <li className="leading-relaxed pl-1">
              <Strong>{g.s023}</Strong>
              {g.s024}
            </li>
            <li className="leading-relaxed pl-1">
              <Strong>{g.s025}</Strong>
              {g.s026}
              <Code>go</Code>, <Code>links</Code>, <Code>l</Code>{g.s027}<Code>to</Code>
              {g.s028}
              <Code>go.tumarca.com</Code>
              {g.s029}
              <Code>links.tumarca.com</Code>
            </li>
          </NumberedList>

          <Callout label={g.s030}>
            {g.s031}
            <Code>tumarca.com</Code>
            {g.s032}
          </Callout>

          <Hr />

          <H2>{g.s033}</H2>
          <P>
            {g.s034}
            <Strong>{g.s035}</Strong>:
          </P>

          <Screenshot
            src="/custom-domain/custom-domain-step1.png"
            alt={g.s036}
          />

          <P>
            {g.s037}
            <Strong>{g.s038}</Strong>
            {g.s039}
            <Code>go.tumarca.com</Code>
            {g.s040}
            <Strong>{g.s041}</Strong>.
          </P>
          <P>
            {g.s042}
          </P>

          <Hr />

          <H2>{g.s043}</H2>
          <P>
            {g.s044}
          </P>

          <Screenshot
            src="/custom-domain/custom-domain-step2.png"
            alt={g.s045}
          />

          <P>{g.s046}</P>

          <H3>{g.s047}</H3>
          <P>
            {g.s048}
          </P>
          <Table
            rows={[
              { label: "Type", value: "TXT" },
              {
                label: "Name",
                value: (
                  <>
                    <Code>_affprof.go.yourbrand.com</Code>{" "}
                    {g.s049}
                  </>
                ),
              },
              {
                label: "Value",
                value: (
                  <>
                    <Code>affprof-verify=...</Code>{" "}
                    {g.s050}
                  </>
                ),
              },
              {
                label: "TTL",
                value: g.s051,
              },
            ]}
          />

          <H3>{g.s052}</H3>
          <P>
            {g.s053}
          </P>
          <Table
            rows={[
              { label: "Type", value: "CNAME" },
              {
                label: "Name",
                value: (
                  <>
                    <Code>go.yourbrand.com</Code>{" "}
                    {g.s054}
                  </>
                ),
              },
              {
                label: "Value",
                value: <Code>cname.affprof.com</Code>,
              },
              {
                label: "TTL",
                value: g.s055,
              },
              {
                label: "Proxy",
                value: g.s056,
              },
            ]}
          />

          <Callout label={g.s057}>
            {g.s058}
          </Callout>

          <H3>{g.s059}</H3>
          <P>
            {g.s060}
          </P>
          <Bullets>
            <li>
              <Strong>Cloudflare</Strong>
              {g.s061}
            </li>
            <li>
              <Strong>Namecheap</Strong>
              {g.s062}
            </li>
            <li>
              <Strong>GoDaddy</Strong>
              {g.s063}
            </li>
            <li>
              <Strong>{g.s064}</Strong>
              {g.s065}
            </li>
          </Bullets>
          <P>
            {g.s066}
          </P>

          <Hr />

          <H2>{g.s067}</H2>
          <P>
            {g.s068}
            <Strong>{g.s069}</Strong>
            {g.s070}
          </P>
          <P>
            {g.s071}
            <Strong>{g.s072}</Strong>
            {g.s073}
          </P>
          <P>{g.s074}</P>

          <Screenshot
            src="/custom-domain/custom-domain-step3.png"
            alt={g.s075}
          />

          <P>
            {g.s076}
            <Strong>{g.s077}</Strong>
            {g.s078}
            <Strong>{g.s079}</Strong>
            {g.s080}
          </P>
          <P>
            <Strong>
              {g.s081}
            </Strong>{" "}
            {g.s082}
            <Code>affprof.com/go/...</Code>
            {g.s083}
          </P>

          <Hr />

          <H2>{g.s084}</H2>

          <H4>
            {g.s085}
          </H4>
          <Bullets>
            <li>
              {g.s086}
            </li>
            <li>
              {g.s087}
              <Code>cname.affprof.com</Code>
              {g.s088}
            </li>
            <li>
              {g.s089}
            </li>
            <li>
              {g.s090}
              <ExtLink href="https://dnschecker.org">dnschecker.org</ExtLink>
              {g.s091}
            </li>
          </Bullets>

          <H4>
            {g.s092}
          </H4>
          <Bullets>
            <li>
              {g.s093}
            </li>
            <li>
              {g.s094}
            </li>
            <li>
              {g.s095}
              <a
                href={`mailto:${SITE_URLS.supportEmail}`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {SITE_URLS.supportEmail}
              </a>
              {g.s096}
            </li>
          </Bullets>

          <H4>
            {g.s097}
          </H4>
          <Bullets>
            <li>
              {g.s098}
              <Strong>{g.s099}</Strong>
              {g.s100}
            </li>
          </Bullets>

          <Hr />

          <H2>{g.s101}</H2>
          <Bullets>
            <li>
              <Strong>
                {g.s102}
              </Strong>
              {g.s103}
            </li>
            <li>
              <Strong>{g.s104}</Strong>
              {g.s105}
              <Code>tumarca.com</Code>
              {g.s106}
            </li>
            <li>
              {g.s107}
              <Strong>{g.s108}</Strong>
              {g.s109}
              <Code>go.brand-a.com</Code>
              {g.s110}
              <Code>go.brand-b.com</Code>
              {g.s111}
            </li>
          </Bullets>

          <Hr />

          <H2>{g.s112}</H2>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/import-links`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.s113}
              </Link>
              {g.s114}
            </li>
            <li>
              {g.s115}
              <Link
                href={`/${lang}/guides/getting-started`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.s116}
              </Link>
              {g.s117}
            </li>
          </Bullets>
          <P className="mt-6">
            {g.s118}
            <a
              href={`mailto:${SITE_URLS.supportEmail}`}
              className="font-medium text-primary-light underline-offset-2 hover:underline"
            >
              {SITE_URLS.supportEmail}
            </a>
            {g.s119}
          </P>
        </article>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
