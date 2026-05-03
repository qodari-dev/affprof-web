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
  getGuidesDictionary,
  hasLocale,
  locales,
  type Locale,
} from "../../dictionaries";

const BASE_URL = SITE_URLS.baseUrl;

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

  const c = (await getGuidesDictionary(lang as Locale)).gettingStarted;
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
          alt: "AffProf — Link Management",
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

export default async function GettingStartedGuide({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const mainDict = await getDictionary(lang as Locale);
  const c = (await getGuidesDictionary(lang as Locale)).gettingStarted;
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

          <H2>{g.createAccountTitle}</H2>
          <P>
            {g.createAccountRegisterPrefix}
            <ExtLink href={SITE_URLS.register}>
              app.affprof.com/register
            </ExtLink>
            {g.createAccountRegisterSuffix}
          </P>
          <P>{g.createAccountFreePlan}</P>

          <Hr />

          <H2>{g.homeDashboardTitle}</H2>
          <P>
            {g.homeDashboardIntroPrefix}
            <Strong>{g.homeDashboardHomeLabel}</Strong>
            {g.homeDashboardIntroSuffix}
          </P>

          <Screenshot
            src="/getting-started/home.png"
            alt={g.homeDashboardAlt}
          />

          <P>{g.homeDashboardCardsIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.homeDashboardTotalLinksLabel}</Strong>
              {g.homeDashboardTotalLinksText}
            </li>
            <li>
              <Strong>{g.homeDashboardBrokenLinksLabel}</Strong>
              {g.homeDashboardBrokenLinksText}
            </li>
            <li>
              <Strong>{g.homeDashboardClicksLabel}</Strong>
              {g.homeDashboardClicksText}
            </li>
          </Bullets>
          <P>{g.homeDashboardQuickActions}</P>

          <Hr />

          <H2>{g.brandSetupTitle}</H2>
          <P>
            {g.brandSetupIntroPrefix}
            <Strong>{g.brandSetupBrandLabel}</Strong>
            {g.brandSetupIntroSuffix}
          </P>
          <P>
            {g.brandSetupPathPrefix}
            <Strong>{g.brandSetupPath}</Strong>:
          </P>

          <Screenshot
            src="/getting-started/create-brand.png"
            alt={g.brandSetupAlt}
            className="max-w-md"
          />

          <P>{g.brandSetupFillIn}</P>
          <Bullets>
            <li>
              <Strong>{g.brandSetupNameLabel}</Strong>
              {g.brandSetupNameText}
            </li>
            <li>
              <Strong>{g.brandSetupLogoLabel}</Strong>
              {g.brandSetupLogoText}
            </li>
            <li>
              <Strong>{g.brandSetupQrForegroundLabel}</Strong>
              {g.brandSetupQrForegroundText}
            </li>
            <li>
              <Strong>{g.brandSetupQrBackgroundLabel}</Strong>
              {g.brandSetupQrBackgroundText}
            </li>
          </Bullets>
          <P>
            {g.brandSetupDefaultBrandPrefix}
            <Strong>{g.brandSetupDefaultBrandLabel}</Strong>
            {g.brandSetupDefaultBrandSuffix}
          </P>

          <Callout label={c.noteLabel}>{g.brandSetupProNote}</Callout>

          <Hr />

          <H2>{g.productLinkTitle}</H2>
          <P>
            {g.productIntroPrefix}
            <Strong>{g.productLabel}</Strong>
            {g.productIntroSuffix}
          </P>

          <H3>{g.createProductTitle}</H3>
          <P>
            {g.createProductPathPrefix}
            <Strong>{g.createProductPath}</Strong>
            {g.createProductPathSuffix}
          </P>

          <H3>{g.createFirstLinkTitle}</H3>
          <P>
            {g.createFirstLinkPathPrefix}
            <Strong>{g.createFirstLinkPath}</Strong>
            {g.createFirstLinkPathSuffix}
          </P>

          <Screenshot
            src="/getting-started/create-link.png"
            alt={g.createLinkAlt}
            className="max-w-md"
          />

          <P>{g.createLinkSectionsIntro}</P>

          <H3>{g.basicInfoTitle}</H3>
          <Bullets>
            <li>
              <Strong>{g.basicInfoProductLabel}</Strong>
              {g.basicInfoProductText}
            </li>
            <li>
              <Strong>{g.basicInfoBaseUrlLabel}</Strong>
              {g.basicInfoBaseUrlText}
            </li>
            <li>
              <Strong>{g.basicInfoPlatformLabel}</Strong>
              {g.basicInfoPlatformText}
            </li>
            <li>
              <Strong>{g.basicInfoSlugLabel}</Strong>
              {g.basicInfoSlugPrefix}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
                airpods-pro-review
              </code>
              {g.basicInfoSlugMiddle}
              <Strong>{g.basicInfoSlugSuggestLabel}</Strong>
              {g.basicInfoSlugSuffix}
            </li>
            <li>
              <Strong>{g.basicInfoAvailabilityLabel}</Strong>
              {g.basicInfoAvailabilityText}
            </li>
          </Bullets>

          <H3>{g.utmTrackingTitle}</H3>
          <P>{g.utmTrackingIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.utmSourceLabel}</Strong>
              {g.utmSourceText}
            </li>
            <li>
              <Strong>{g.utmMediumLabel}</Strong>
              {g.utmMediumText}
            </li>
            <li>
              <Strong>{g.utmCampaignLabel}</Strong>
              {g.utmCampaignText}
            </li>
          </Bullets>
          <P>{g.utmTrackingNote}</P>

          <H3>{g.optionsTitle}</H3>
          <Bullets>
            <li>
              <Strong>{g.optionsQrBrandLabel}</Strong>
              {g.optionsQrBrandText}
            </li>
            <li>
              <Strong>{g.optionsFallbackUrlLabel}</Strong>
              {g.optionsFallbackUrlText}
            </li>
          </Bullets>

          <H3>{g.organizationTitle}</H3>
          <P>
            {g.organizationTagsPrefix}
            <Strong>{g.organizationTagsLabel}</Strong>
            {g.organizationTagsSuffix}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
              amazon
            </code>
            ,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
              tech
            </code>
            ,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
              black-friday
            </code>
            ,{" "}
            <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
              youtube
            </code>
            .{g.organizationTagsAfterExamples}
          </P>
          <P>
            {g.organizationSubmitPrefix}
            <Strong>{g.organizationCreateLinkLabel}</Strong>
            {g.organizationSubmitSuffix}
          </P>

          <Hr />

          <H2>{g.shareAnalyticsTitle}</H2>
          <P>
            {g.shareAnalyticsIntroPrefix}
            <Strong>{g.shareAnalyticsLinksLabel}</Strong>
            {g.shareAnalyticsIntroSuffix}
          </P>
          <P>{g.shareAnalyticsTabsIntro}</P>

          <H3>{g.overviewTabTitle}</H3>
          <P>{g.overviewTabBody}</P>

          <H3>{g.analyticsTabTitle}</H3>

          <Screenshot
            src="/getting-started/analytic-specific-link.png"
            alt={g.analyticsTabAlt}
          />

          <P>{g.analyticsTrafficIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.analyticsTotalClicksLabel}</Strong>
              {g.analyticsTotalClicksText}
            </li>
            <li>
              <Strong>{g.analyticsClicksOverTimeLabel}</Strong>
              {g.analyticsClicksOverTimeText}
            </li>
            <li>
              <Strong>{g.analyticsSourcesLabel}</Strong>
              {g.analyticsSourcesText}
            </li>
            <li>
              <Strong>{g.analyticsDevicesLabel}</Strong>,{" "}
              <Strong>{g.analyticsOperatingSystemsLabel}</Strong>,{" "}
              <Strong>{g.analyticsBrowsersLabel}</Strong>
              {g.analyticsAudienceText}
            </li>
            <li>
              <Strong>{g.analyticsCountriesLabel}</Strong>
              {g.analyticsCountriesText}
            </li>
            <li>
              <Strong>{g.analyticsLinkHealthLabel}</Strong>
              {g.analyticsLinkHealthText}
            </li>
            <li>
              <Strong>{g.analyticsRecentClicksLabel}</Strong>
              {g.analyticsRecentClicksText}
            </li>
            <li>
              <Strong>{g.analyticsRecentChecksLabel}</Strong>
              {g.analyticsRecentChecksText}
            </li>
          </Bullets>
          <P>
            {g.analyticsDashboardPrefix}
            <Strong>{g.analyticsDashboardLabel}</Strong>
            {g.analyticsDashboardSuffix}
          </P>

          <Hr />

          <H2>{g.quickActionsTitle}</H2>
          <P>
            {g.quickActionsIntroPrefix}
            <Strong>{g.quickActionsLinksLabel}</Strong>
            {g.quickActionsIntroSuffix}
          </P>

          <Screenshot
            src="/getting-started/link-actions.png"
            alt={g.quickActionsAlt}
            className="max-w-xs"
          />

          <Bullets>
            <li>
              <Strong>{g.quickActionsViewDetailsLabel}</Strong>
              {g.quickActionsViewDetailsText}
            </li>
            <li>
              <Strong>{g.quickActionsCopyShortUrlLabel}</Strong>
              {g.quickActionsCopyShortUrlText}
            </li>
            <li>
              <Strong>{g.quickActionsOpenDestinationLabel}</Strong>
              {g.quickActionsOpenDestinationText}
            </li>
            <li>
              <Strong>{g.quickActionsQrCodeLabel}</Strong>
              {g.quickActionsQrCodeText}
            </li>
            <li>
              <Strong>{g.quickActionsCheckLinkLabel}</Strong>
              {g.quickActionsCheckLinkText}
            </li>
            <li>
              <Strong>{g.quickActionsDisableLinkLabel}</Strong>
              {g.quickActionsDisableLinkText}
            </li>
            <li>
              <Strong>{g.quickActionsEditLabel}</Strong>
              {g.quickActionsEditText}
            </li>
            <li>
              <Strong>{g.quickActionsDeleteLabel}</Strong>
              {g.quickActionsDeleteText}
            </li>
          </Bullets>

          <H3>{g.qrCodesTitle}</H3>
          <P>
            {g.qrCodesIntroPrefix}
            <Strong>{g.qrCodesQrCodeLabel}</Strong>
            {g.qrCodesIntroSuffix}
          </P>

          <Screenshot
            src="/getting-started/qr-dropdown.png"
            alt={g.qrCodesAlt}
            className="max-w-md"
          />

          <P>{g.qrCodesCapabilitiesIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.qrCodesChooseBrandLabel}</Strong>
              {g.qrCodesChooseBrandText}
            </li>
            <li>
              <Strong>{g.qrCodesPreviewLabel}</Strong>
              {g.qrCodesPreviewText}
            </li>
            <li>
              <Strong>{g.qrCodesDownloadPngLabel}</Strong>
              {g.qrCodesDownloadPngText}
            </li>
          </Bullets>
          <P>{g.qrCodesAnalyticsNote}</P>

          <Hr />

          <H2>{g.healthMonitoringTitle}</H2>
          <P>{g.healthMonitoringIntro}</P>
          <Bullets>
            <li>
              <Strong>{g.healthMonitoringFreePlanLabel}</Strong>
              {g.healthMonitoringFreePlanText}
            </li>
            <li>
              <Strong>{g.healthMonitoringProPlanLabel}</Strong>
              {g.healthMonitoringProPlanText}
            </li>
          </Bullets>
          <P>{g.healthMonitoringBrokenIntro}</P>
          <ol className="mt-4 space-y-2 text-sm text-text-secondary list-decimal pl-5 marker:text-primary-light marker:font-semibold">
            <li className="leading-relaxed pl-1">
              {g.healthMonitoringStatusPrefix}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
                {g.healthMonitoringActiveStatus}
              </code>
              {g.healthMonitoringStatusMiddle}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
                {g.healthMonitoringBrokenStatus}
              </code>
              {g.healthMonitoringStatusSuffix}
            </li>
            <li className="leading-relaxed pl-1">
              {g.healthMonitoringEmailNotification}
            </li>
          </ol>
          <P>
            {g.healthMonitoringFallbackPrefix}
            <Strong>{g.healthMonitoringFallbackLabel}</Strong>
            {g.healthMonitoringFallbackSuffix}
          </P>
          <P>
            {g.healthMonitoringHistoryPrefix}
            <Strong>{g.healthMonitoringLinkHealthLabel}</Strong>
            {g.healthMonitoringHistorySuffix}
          </P>

          <Hr />

          <H2>{c.whatsNextTitle}</H2>
          <P>{g.whatsNextIntro}</P>
          <Bullets>
            <li>
              <Link
                href={`/${lang}/guides/custom-domain`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.whatsNextCustomDomainLink}
              </Link>
              {g.whatsNextCustomDomainPrefix}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
                links.yourbrand.com
              </code>
              {g.whatsNextCustomDomainSuffix}
              <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">
                affprof.com/go/...
              </code>
            </li>
            <li>
              <Link
                href={`/${lang}/guides/import-links`}
                className="text-primary-light underline-offset-2 hover:underline"
              >
                {g.whatsNextImportLinksLink}
              </Link>
              {g.whatsNextImportLinksSuffix}
            </li>
            <li>
              {g.whatsNextUpgradePrefix}
              <Strong>{g.whatsNextProLabel}</Strong>
              {g.whatsNextUpgradeSuffix}
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
