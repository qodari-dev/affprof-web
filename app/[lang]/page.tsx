import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

/* ---------- Icons (inline SVG, no external libs) ---------- */

function IconBrokenLink() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7a5 5 0 0 1 0-10h2" />
      <path d="M15 7h2a5 5 0 0 1 4.54 7" />
      <line x1="8" y1="12" x2="12" y2="12" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}
function IconChaos() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H3z" />
      <path d="M3 7V5a2 2 0 0 1 2-2h3l2 2h8a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function IconFolders() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M2 10V4a2 2 0 0 1 2-2h3l2 2h5" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11.17 5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07L12.83 19" />
    </svg>
  );
}
function IconQr() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
function IconRedirect() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 14 20 9 15 4" />
      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </svg>
  );
}
function IconUpload() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
function IconTag() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}
function IconPlus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
function IconWand() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2" /><path d="M15 10V8" /><path d="M12.5 5.5H10.5" /><path d="M19.5 5.5H17.5" />
      <path d="M3 21l9-9" /><path d="M12.5 12.5l8.5 8.5" />
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const problemIcons = [<IconBrokenLink key="bl" />, <IconChart key="ch" />, <IconChaos key="ca" />];
const featureIcons = [
  <IconFolders key="fo" />, <IconShield key="sh" />, <IconLink key="li" />, <IconQr key="qr" />,
  <IconChart key="bc" />, <IconRedirect key="re" />, <IconUpload key="up" />, <IconTag key="ta" />,
];
const stepIcons = [<IconPlus key="pl" />, <IconWand key="wa" />, <IconBell key="be" />];

/* ---------- Hero Mockup ---------- */

function HeroMockup({ dict }: { dict: { allLinks: string; title: string; newLink: string; headerProduct: string; headerShortUrl: string; headerClicks: string; headerStatus: string; active: string; broken: string } }) {
  const rows = [
    { name: "Blue Yeti Microphone", url: "amzn.to/3xY2k9p", status: "active", clicks: "1,284" },
    { name: "Sony WH-1000XM5", url: "amzn.to/4aBc2d1", status: "active", clicks: "892" },
    { name: "Logitech MX Master 3S", url: "shrsl.com/mx3s", status: "broken", clicks: "341" },
    { name: "LG UltraFine 5K Display", url: "amzn.to/3k1lMnP", status: "active", clicks: "612" },
    { name: "Elgato Stream Deck", url: "imp.i384432.net/sd", status: "active", clicks: "455" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div aria-hidden className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-40" />
      <div className="relative rounded-2xl border border-border-subtle bg-bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-subtle bg-bg-dark/60">
          <span className="w-3 h-3 rounded-full bg-error/60" />
          <span className="w-3 h-3 rounded-full bg-warning/60" />
          <span className="w-3 h-3 rounded-full bg-success/60" />
          <div className="ml-4 text-xs text-text-muted font-mono">app.affprof.com/links</div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-sm text-text-secondary">{dict.allLinks}</div>
              <div className="text-2xl font-semibold">{dict.title}</div>
            </div>
            <div className="hidden sm:inline-flex items-center rounded-lg bg-primary text-white text-xs font-medium px-3 py-2">
              {dict.newLink}
            </div>
          </div>
          <div className="rounded-xl border border-border-subtle overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 text-xs font-medium text-text-muted uppercase tracking-wider bg-bg-dark/40 px-4 py-2.5 border-b border-border-subtle">
              <div className="col-span-5">{dict.headerProduct}</div>
              <div className="col-span-4">{dict.headerShortUrl}</div>
              <div className="col-span-2">{dict.headerClicks}</div>
              <div className="col-span-1 text-right">{dict.headerStatus}</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 px-4 py-3.5 border-b border-border-subtle last:border-b-0 items-center text-sm"
              >
                <div className="sm:col-span-5 font-medium text-text-primary">{r.name}</div>
                <div className="sm:col-span-4 font-mono text-xs text-text-secondary truncate">{r.url}</div>
                <div className="sm:col-span-2 text-text-secondary">{r.clicks}</div>
                <div className="sm:col-span-1 sm:text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${
                      r.status === "active" ? "bg-success/10 text-success" : "bg-error/10 text-error"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${r.status === "active" ? "bg-success" : "bg-error"}`} />
                    {r.status === "active" ? dict.active : dict.broken}
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

/* ---------- Page ---------- */

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const stepLabel = lang === "es" ? "Paso" : "Step";

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />

      <main className="flex-1 pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 -top-24 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {dict.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {dict.hero.titlePart1}{" "}
                <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                  {dict.hero.titleHighlight}
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
                {dict.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.affprof.com/register"
                  className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-medium px-6 py-3 transition-colors w-full sm:w-auto"
                >
                  {dict.hero.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-border-subtle hover:border-primary/40 bg-bg-card hover:bg-bg-card/70 text-text-primary text-base font-medium px-6 py-3 transition-colors w-full sm:w-auto"
                >
                  {dict.hero.ctaSecondary}
                </a>
              </div>
              <p className="mt-5 text-sm text-text-muted">
                {dict.hero.socialProof}
              </p>
            </div>

            <div className="mt-16 sm:mt-20">
              <HeroMockup dict={dict.mockup} />
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-20 sm:py-28 border-t border-border-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{dict.problems.title}</h2>
              <p className="mt-4 text-text-secondary text-lg">{dict.problems.subtitle}</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {dict.problems.cards.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-error/10 text-error">
                    {problemIcons[i]}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 sm:py-28 border-t border-border-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{dict.features.title}</h2>
              <p className="mt-4 text-text-secondary text-lg">{dict.features.subtitle}</p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {dict.features.cards.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    {featureIcons[i]}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 sm:py-28 border-t border-border-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{dict.howItWorks.title}</h2>
              <p className="mt-4 text-text-secondary text-lg">{dict.howItWorks.subtitle}</p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3 relative">
              {dict.howItWorks.steps.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                      {stepIcons[i]}
                    </div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {stepLabel} {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <Pricing dict={dict.pricing} />

        {/* FAQ */}
        <Faq dict={dict.faq} />

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28 border-t border-border-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
              style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
            >
              <div aria-hidden className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {dict.cta.title}
                </h2>
                <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
                  {dict.cta.subtitle}
                </p>
                <div className="mt-8">
                  <a
                    href="https://app.affprof.com/register"
                    className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-white/90 text-primary-dark text-base font-semibold px-6 py-3 transition-colors shadow-lg"
                  >
                    {dict.cta.button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border-subtle py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo-close.png"
                  alt="AffProf"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                <span className="text-base font-semibold tracking-tight">AffProf</span>
              </div>
              <p className="mt-4 text-sm text-text-muted">{dict.footer.copyright}</p>
              <p className="mt-2 text-sm text-text-secondary">hello@affprof.com</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">{dict.footer.product}</div>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li><a href="#features" className="hover:text-text-primary transition-colors">{dict.nav.features}</a></li>
                <li><a href="#pricing" className="hover:text-text-primary transition-colors">{dict.nav.pricing}</a></li>
                <li><a href="#faq" className="hover:text-text-primary transition-colors">{dict.nav.faq}</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">{dict.footer.legal}</div>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li><Link href={`/${lang}/privacy`} className="hover:text-text-primary transition-colors">{dict.footer.privacy}</Link></li>
                <li><Link href={`/${lang}/terms`} className="hover:text-text-primary transition-colors">{dict.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">{dict.footer.tagline}</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors">
                <IconTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors">
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
