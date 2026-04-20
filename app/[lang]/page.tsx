import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "../components/Faq";
import {
  HeroCheckIcon,
  IconTile,
  marketingIcons,
  type MarketingIconKey,
} from "../components/icons";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import { SITE_URLS } from "../site-config";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

type MarketingCard = {
  title: string;
  desc: string;
  icon: MarketingIconKey;
};

function HeroMockup({
  dict,
  labels,
}: {
  dict: {
    allLinks: string;
    title: string;
    newLink: string;
    headerProduct: string;
    headerShortUrl: string;
    headerClicks: string;
    headerStatus: string;
    active: string;
    broken: string;
  };
  labels: {
    workspace: string;
    monitoring: string;
    tracking: string;
    brandedLinks: string;
    fallbackReady: string;
    health: string;
    sourceLabel: string;
  };
}) {
  const rows = [
    {
      name: "Blue Yeti Microphone",
      url: "go.affprof.com/blueyeti",
      status: "active",
      clicks: "1,284",
    },
    {
      name: "Sony WH-1000XM5",
      url: "go.affprof.com/sony-xm5",
      status: "active",
      clicks: "892",
    },
    {
      name: "Logitech MX Master 3S",
      url: "go.affprof.com/mx-master",
      status: "broken",
      clicks: "341",
    },
    {
      name: "LG UltraFine 5K Display",
      url: "go.affprof.com/lg-5k",
      status: "active",
      clicks: "612",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div
        aria-hidden
        className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 right-6 h-36 w-36 rounded-full bg-white/8 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_45px_120px_-50px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-1.5 border-b border-white/8 bg-black/20 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-error/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-success/70" />
          <div className="ml-4 text-xs font-medium text-text-muted">
            {labels.workspace}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {labels.monitoring}
              </div>
              <div className="mt-2 text-xl font-semibold">{labels.health}</div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {labels.tracking}
              </div>
              <div className="mt-2 text-xl font-semibold">
                {labels.sourceLabel}
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary-light">
                {labels.brandedLinks}
              </div>
              <div className="mt-2 text-xl font-semibold">
                {labels.fallbackReady}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-text-secondary">{dict.allLinks}</div>
              <div className="text-2xl font-semibold tracking-tight">
                {dict.title}
              </div>
            </div>
            <div className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white sm:inline-flex">
              {dict.newLink}
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl border border-white/8">
            <div className="hidden grid-cols-12 border-b border-white/8 bg-black/20 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted sm:grid">
              <div className="col-span-5">{dict.headerProduct}</div>
              <div className="col-span-4">{dict.headerShortUrl}</div>
              <div className="col-span-2">{dict.headerClicks}</div>
              <div className="col-span-1 text-right">{dict.headerStatus}</div>
            </div>

            {rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-1 gap-2 border-b border-white/8 px-4 py-4 text-sm last:border-b-0 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-5">
                  <div className="font-medium text-text-primary">
                    {row.name}
                  </div>
                </div>
                <div className="font-mono text-xs text-text-secondary sm:col-span-4">
                  {row.url}
                </div>
                <div className="text-text-secondary sm:col-span-2">
                  {row.clicks}
                </div>
                <div className="sm:col-span-1 sm:text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold ${
                      row.status === "active"
                        ? "bg-success/10 text-success"
                        : "bg-error/10 text-error"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        row.status === "active" ? "bg-success" : "bg-error"
                      }`}
                    />
                    {row.status === "active" ? dict.active : dict.broken}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const currentYear = new Date().getFullYear();
  const stepLabel = lang === "es" ? "Paso" : "Step";
  const problemCards = dict.problems.cards as MarketingCard[];
  const featureCards = dict.features.cards as MarketingCard[];
  const workflowSteps = dict.howItWorks.steps as MarketingCard[];

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_50%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-light">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {dict.hero.badge}
              </span>

              <h1 className="mx-auto mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[5rem] lg:leading-[0.98]">
                {dict.hero.titlePart1}{" "}
                <span className="bg-[linear-gradient(135deg,#9AE6B4_0%,#22C55E_45%,#16A34A_100%)] bg-clip-text text-transparent">
                  {dict.hero.titleHighlight}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary sm:text-xl">
                {dict.hero.subtitle}
              </p>

              <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
                {dict.hero.points.map((point: string) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-7 sm:text-[15px]"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <HeroCheckIcon />
                    </span>
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={SITE_URLS.register}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-transform transition-colors hover:bg-primary-dark hover:-translate-y-0.5"
                >
                  {dict.hero.ctaPrimary}
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/4 px-6 py-3.5 text-base font-semibold text-text-primary transition-colors hover:border-primary/35 hover:bg-white/8"
                >
                  {dict.hero.ctaSecondary}
                </a>
              </div>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {dict.hero.microNote}
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-text-muted">
                {dict.hero.socialProof}
              </p>
            </div>

            <div className="mt-14 sm:mt-16">
              <HeroMockup dict={dict.mockup} labels={dict.heroMockup} />
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {dict.proof.items.map((item: string) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-white/8 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                Problem
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {dict.problems.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {dict.problems.subtitle}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {problemCards.map((card) => {
                const Icon = marketingIcons[card.icon];

                return (
                  <div
                    key={card.title}
                    className="flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/20"
                  >
                    <IconTile icon={Icon} tone="danger" />
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-white/8 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">
                  Product
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {dict.features.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  {dict.features.subtitle}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                  {dict.features.audience.items.map((item: string) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-text-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((card) => {
                const Icon = marketingIcons[card.icon];

                return (
                  <div
                    key={card.title}
                    className="flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/25"
                  >
                    <IconTile icon={Icon} />
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                Workflow
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {dict.howItWorks.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {dict.howItWorks.subtitle}
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {workflowSteps.map((step, index: number) => {
                const Icon = marketingIcons[step.icon];

                return (
                  <div
                    key={step.title}
                    className="rounded-[28px] border border-white/8 bg-white/[0.03] p-7"
                  >
                    <div className="flex items-center gap-4">
                      <IconTile icon={Icon} />
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                        {stepLabel} {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Pricing dict={dict.pricing} />

        <Faq dict={dict.faq} />

        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-[linear-gradient(135deg,#1A7F3C_0%,#22C55E_35%,#0B0F14_100%)] px-8 py-12 shadow-[0_45px_120px_-50px_rgba(34,197,94,0.7)] sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.28),transparent_45%)]"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {dict.cta.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/88">
                    {dict.cta.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={SITE_URLS.register}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-primary-dark transition-colors hover:bg-white/92"
                  >
                    {dict.cta.button}
                  </a>
                  <a
                    href={SITE_URLS.login}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/12 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-black/20"
                  >
                    {dict.nav.login}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-close.png"
                  alt="AffProf"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
                <span className="block text-base font-semibold tracking-tight">
                  AffProf
                </span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary">
                {dict.footer.tagline}
              </p>
              <a
                href={`mailto:${SITE_URLS.supportEmail}`}
                className="mt-4 inline-flex text-sm font-medium text-primary-light transition-colors hover:text-white"
              >
                {SITE_URLS.supportEmail}
              </a>
              <p className="mt-4 text-xs text-text-muted">
                © {currentYear} AffProf. {dict.footer.rights}
              </p>
            </div>

            <div className="lg:pl-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
                {dict.footer.product}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li>
                  <a
                    href="#features"
                    className="transition-colors hover:text-text-primary"
                  >
                    {dict.nav.features}
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="transition-colors hover:text-text-primary"
                  >
                    {dict.nav.pricing}
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="transition-colors hover:text-text-primary"
                  >
                    {dict.nav.faq}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:pl-2">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
                {dict.footer.legal}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li>
                  <Link
                    href={`/${lang}/privacy`}
                    className="transition-colors hover:text-text-primary"
                  >
                    {dict.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/terms`}
                    className="transition-colors hover:text-text-primary"
                  >
                    {dict.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
