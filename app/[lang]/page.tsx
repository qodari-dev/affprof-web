import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import { SITE_URLS } from "../site-config";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

function IconBrokenLink() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7a5 5 0 0 1 0-10h2" />
      <path d="M15 7h2a5 5 0 0 1 4.54 7" />
      <line x1="8" y1="12" x2="12" y2="12" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

function IconChaos() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H3z" />
      <path d="M3 7V5a2 2 0 0 1 2-2h3l2 2h8a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function IconFolders() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M2 10V4a2 2 0 0 1 2-2h3l2 2h5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11.17 5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07L12.83 19" />
    </svg>
  );
}

function IconRedirect() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 14 20 9 15 4" />
      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </svg>
  );
}

function IconQr() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <line x1="14" y1="14" x2="14" y2="14.01" />
      <line x1="18" y1="14" x2="18" y2="18" />
      <line x1="14" y1="18" x2="18" y2="18" />
      <line x1="21" y1="14" x2="21" y2="21" />
      <line x1="14" y1="21" x2="21" y2="21" />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function IconWand() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 10V8" />
      <path d="M12.5 5.5H10.5" />
      <path d="M19.5 5.5H17.5" />
      <path d="M3 21l9-9" />
      <path d="M12.5 12.5l8.5 8.5" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

const problemIcons = [
  <IconBrokenLink key="bl" />,
  <IconChart key="ch" />,
  <IconChaos key="ca" />,
];
const featureIcons = [
  <IconFolders key="fo" />,
  <IconShield key="sh" />,
  <IconLink key="li" />,
  <IconLink key="ld" />,
  <IconQr key="qr" />,
  <IconChart key="bc" />,
  <IconRedirect key="re" />,
  <IconUpload key="up" />,
  <IconTag key="ta" />,
];
const stepIcons = [
  <IconPlus key="pl" />,
  <IconWand key="wa" />,
  <IconBell key="be" />,
];

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
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
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
              {dict.problems.cards.map(
                (card: { title: string; desc: string }, index: number) => (
                  <div
                    key={card.title}
                    className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/20"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-error/12 text-error">
                      {problemIcons[index]}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {card.desc}
                    </p>
                  </div>
                ),
              )}
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
                <div className="grid gap-4 sm:grid-cols-2">
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
              {dict.features.cards.map(
                (card: { title: string; desc: string }, index: number) => (
                  <div
                    key={card.title}
                    className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/25"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      {featureIcons[index]}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {card.desc}
                    </p>
                  </div>
                ),
              )}
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
              {dict.howItWorks.steps.map(
                (step: { title: string; desc: string }, index: number) => (
                  <div
                    key={step.title}
                    className="rounded-[28px] border border-white/8 bg-white/[0.03] p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {stepIcons[index]}
                      </div>
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
                ),
              )}
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
