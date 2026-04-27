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
  getGuidesDictionary,
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

  const c = (await getGuidesDictionary(lang as Locale)).importLinks;
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
  const c = (await getGuidesDictionary(lang as Locale)).importLinks;
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
            {g.guideDuration}
          </P>

          <Callout label={c.noteLabel}>
            {g.proFeaturePrefix}
            <ExtLink href={BILLING_URL}>
              {g.upgradeLinkLabel}
            </ExtLink>
            {g.proFeatureSuffix}
          </Callout>

          <Hr />

          <H2>{g.whatGetsImportedTitle}</H2>
          <P>
            {g.whatGetsImportedIntro}
          </P>
          <Bullets>
            <li>
              {g.importLinksPrefix}
              <Strong>{g.importLinksLabel}</Strong>
              {g.importLinksSuffix}
            </li>
            <li>
              {g.importProductsPrefix}
              <Strong>{g.importProductsLabel}</Strong>
              {g.importProductsSuffix}
            </li>
            <li>
              {g.importTagsPrefix}
              <Strong>{g.importTagsLabel}</Strong>
              {g.importTagsSuffix}
            </li>
          </Bullets>
          <P>
            {g.autoCreateNote}
          </P>

          <Hr />

          <H2>{g.openDialogTitle}</H2>
          <P>
            {g.openDialogPathPrefix}
            <Strong>{g.openDialogLinksLabel}</Strong>
            {g.openDialogClickPrefix}
            <Strong>{g.openDialogImportCsvLabel}</Strong>
            {g.openDialogClickSuffix}
          </P>

          <Screenshot
            src="/import-links/import-link-step1.png"
            alt={g.openDialogAlt}
          />

          <P>
            {g.openDialogBody}
          </P>

          <Hr />

          <H2>
            {g.templateTitle}
          </H2>
          <P>
            {g.templateDownloadPrefix}
            <Strong>{g.templateDownloadLabel}</Strong>
            {g.templateDownloadSuffix}
          </P>
          <P>
            {g.templateFieldsPrefix}
            <Strong>{g.templateFieldsTabLabel}</Strong>
            {g.templateFieldsSuffix}
          </P>

          <Screenshot
            src="/import-links/import-link-step2-fields-example.png"
            alt={g.fieldsReferenceAlt}
          />

          <H3>{g.requiredColumnsTitle}</H3>
          <P>{g.requiredColumnsIntro}</P>
          <Table
            rows={[
              {
                label: "product",
                value: (
                  <>
                    {g.requiredProductDescription}
                    <Code>Blue Yeti Microphone</Code>
                  </>
                ),
              },
              {
                label: "link",
                value: (
                  <>
                    {g.requiredLinkDescription}
                    <Code>https://www.amazon.com/dp/B002VA464S</Code>
                  </>
                ),
              },
              {
                label: "slug",
                value: (
                  <>
                    {g.requiredSlugDescription}
                    <Code>blue-yeti-amazon</Code>
                  </>
                ),
              },
              {
                label: "platform",
                value: (
                  <>
                    {g.requiredPlatformDescription}
                    <Code>amazon</Code>
                  </>
                ),
              },
            ]}
          />

          <H3>{g.optionalColumnsTitle}</H3>
          <P>
            {g.optionalColumnsIntro}
          </P>
          <Table
            rows={[
              {
                label: "fallback_url",
                value: (
                  <>
                    {g.optionalFallbackUrlDescription}
                    <Code>https://yourbrand.com/backup</Code>
                  </>
                ),
              },
              {
                label: "utm_source",
                value: (
                  <>
                    {g.optionalUtmSourceDescription}
                    <Code>instagram</Code>
                  </>
                ),
              },
              {
                label: "utm_medium",
                value: (
                  <>
                    {g.optionalUtmMediumDescription}
                    <Code>bio</Code>
                  </>
                ),
              },
              {
                label: "utm_campaign",
                value: (
                  <>
                    {g.optionalUtmCampaignDescription}
                    <Code>spring-launch</Code>
                  </>
                ),
              },
              {
                label: "utm_content",
                value: (
                  <>
                    {g.optionalUtmContentDescription}
                    <Code>hero-button</Code>
                  </>
                ),
              },
              {
                label: "utm_term",
                value: (
                  <>
                    {g.optionalUtmTermDescription}
                    <Code>creator-tools</Code>
                  </>
                ),
              },
              {
                label: "is_enabled",
                value: (
                  <>
                    {g.optionalActiveDescriptionPrefix}
                    <Code>true/false</Code>, <Code>yes/no</Code>
                    {g.optionalActiveDescriptionMiddle}
                    <Code>1/0</Code>
                  </>
                ),
              },
              {
                label: "notes",
                value: (
                  <>
                    {g.optionalNotesDescription}
                    <Code>Best performer in Instagram bio</Code>
                  </>
                ),
              },
              {
                label: "tags",
                value: (
                  <>
                    {g.optionalTagsDescription}
                    <Code>amazon|tech|review</Code>
                  </>
                ),
              },
            ]}
          />

          <H3>{g.minimumCsvTitle}</H3>
          <P>
            {g.minimumCsvIntro}
          </P>
          <CodeBlock language="csv">{CSV_EXAMPLE}</CodeBlock>
          <P>
            {g.minimumCsvNote}
          </P>

          <Hr />

          <H2>{g.uploadPreviewTitle}</H2>
          <P>
            {g.uploadPreviewIntro}
          </P>

          <Screenshot
            src="/import-links/import-link-step3.png"
            alt={g.uploadPreviewAlt}
          />

          <P>{g.uploadPreviewListIntro}</P>
          <Bullets>
            <li>
              {g.uploadPreviewValidRowsPrefix}
              <Strong>{g.uploadPreviewValidRowsLabel}</Strong>
            </li>
            <li>
              {g.uploadPreviewTableText}
            </li>
            <li>
              {g.uploadPreviewRowNumbersText}
            </li>
          </Bullets>
          <P>
            {g.uploadPreviewReplacePrefix}
            <Strong>{g.uploadPreviewReplaceLabel}</Strong>
            {g.uploadPreviewReplaceSuffix}
          </P>

          <Hr />

          <H2>{g.fixIssuesTitle}</H2>
          <P>
            {g.fixIssuesIntro}
          </P>

          <Screenshot
            src="/import-links/import-link-step4-if-there-are-errors.png"
            alt={g.fixIssuesAlt}
          />

          <P>{g.commonIssuesIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.invalidUrlLabel}</Strong>
              {g.invalidUrlTextPrefix}
              <Code>http://</Code>
              {g.invalidUrlTextMiddle}
              <Code>https://</Code>
            </li>
            <li>
              <Strong>{g.invalidSlugLabel}</Strong>
              {g.invalidSlugTextPrefix}
              <Code>#</Code>
              {g.invalidSlugTextMiddle}
              <Code>&</Code>)
            </li>
            <li>
              <Strong>{g.missingRequiredFieldLabel}</Strong>
              {g.missingRequiredFieldPrefix}
              <Code>product</Code>, <Code>link</Code>, <Code>slug</Code>
              {g.missingRequiredFieldMiddle}
              <Code>platform</Code>
              {g.missingRequiredFieldSuffix}
            </li>
            <li>
              <Strong>{g.slugConflictLabel}</Strong>
              {g.slugConflictText}
            </li>
            <li>
              <Strong>{g.slugTooLongLabel}</Strong>
              {g.slugTooLongText}
            </li>
          </Bullets>

          <P>
            {g.errorHandlingIntro}
          </P>

          <H3>
            {g.importValidRowsTitle}
          </H3>
          <P>
            {g.importValidRowsPrefix}
            <Strong>{g.importValidRowsButtonLabel}</Strong>
            {g.importValidRowsSuffix}
          </P>

          <H3>
            {g.fixEverythingTitle}
          </H3>
          <P>
            {g.fixEverythingPrefix}
            <Strong>{g.fixEverythingReplaceLabel}</Strong>
            {g.fixEverythingSuffix}
          </P>

          <Callout label={g.tipLabel}>
            {g.errorTipBody}
          </Callout>

          <Hr />

          <H2>{g.confirmImportTitle}</H2>
          <P>
            {g.confirmImportPrefix}
            <Strong>{g.confirmImportButtonLabel}</Strong>
            {g.confirmImportSuffix}
          </P>

          <Screenshot
            src="/import-links/import-link-step5.png"
            alt={g.confirmImportAlt}
          />

          <P>
            {g.confirmImportBody}
          </P>

          <Hr />

          <H2>{g.updatesTitle}</H2>
          <P>
            {g.updatesIntroPrefix}
            <Strong>{g.updatesExistingSlugLabel}</Strong>
            {g.updatesIntroSuffix}
          </P>
          <Bullets>
            <li>
              {g.updatesDestinationUrlsText}
            </li>
            <li>
              {g.updatesUtmText}
            </li>
            <li>
              {g.updatesTagsText}
            </li>
            <li>
              {g.updatesNotesFallbackText}
            </li>
          </Bullets>
          <P>
            {g.updatesMatchPrefix}
            <Strong>{g.updatesSlugLabel}</Strong>
            {g.updatesMatchSuffix}
          </P>

          <Hr />

          <H2>{g.cleanImportsTitle}</H2>
          <Bullets>
            <li>
              <Strong>{g.cleanImportsUtf8Label}</Strong>
              {g.cleanImportsUtf8Text}
            </li>
            <li>
              <Strong>{g.cleanImportsQuoteCommasLabel}</Strong>
              {g.cleanImportsQuoteCommasText}
              <Code>&quot;Notion, the all-in-one workspace&quot;</Code>
            </li>
            <li>
              <Strong>{g.cleanImportsNoHeaderPrefixLabel}</Strong>
              {g.cleanImportsNoHeaderPrefixTextPrefix}
              <Code>product,link,slug,...</Code>
              {g.cleanImportsNoHeaderPrefixTextSuffix}
            </li>
            <li>
              <Strong>{g.cleanImportsSmallBatchLabel}</Strong>
              {g.cleanImportsSmallBatchText}
            </li>
            <li>
              <Strong>
                {g.cleanImportsPipeTagsLabel}
              </Strong>
              {g.cleanImportsPipeTagsTextPrefix}
              <Code>|</Code>
              {g.cleanImportsPipeTagsTextMiddle}
              <Code>,</Code>
              {g.cleanImportsPipeTagsTextSuffixPrefix}
              <Code>amazon|tech|review</Code>
              {g.cleanImportsPipeTagsTextSuffixMiddle}
              <Code>amazon,tech,review</Code>
            </li>
          </Bullets>

          <Hr />

          <H2>{g.limitationsTitle}</H2>
          <Bullets>
            <li>
              <Strong>{g.limitationsMaxTagsLabel}</Strong>
              {g.limitationsMaxTagsText}
            </li>
            <li>
              <Strong>
                {g.limitationsUniqueSlugsLabel}
              </Strong>
              {g.limitationsUniqueSlugsText}
            </li>
            <li>
              <Strong>{g.limitationsCsvOnlyLabel}</Strong>
              {g.limitationsCsvOnlyText}
            </li>
          </Bullets>

          <Hr />

          <H2>{g.whatsNextTitle}</H2>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/custom-domain`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.whatsNextCustomDomainLink}
              </Link>
              {g.whatsNextCustomDomainSuffix}
            </li>
            <li>
              {g.whatsNextGettingStartedPrefix}
              <Link
                href={`/${lang}/guides/getting-started`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.whatsNextGettingStartedLink}
              </Link>
              {g.whatsNextGettingStartedSuffix}
            </li>
          </Bullets>
          <P className="mt-6">
            {g.helpEmailPrefix}
            <a
              href={`mailto:${SITE_URLS.supportEmail}`}
              className="font-medium text-primary-light underline-offset-2 hover:underline"
            >
              {SITE_URLS.supportEmail}
            </a>
            {g.helpEmailSuffix}
          </P>
        </article>
      </main>

      <Footer dict={mainDict.footer} nav={mainDict.nav} lang={lang} />
    </>
  );
}
