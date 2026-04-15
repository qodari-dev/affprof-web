import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

/* ---------- Icons (inline, no external libs) ---------- */

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
function IconBarChart() {
  return <IconChart />;
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

/* ---------- Data ---------- */

const problems = [
  {
    icon: <IconBrokenLink />,
    title: "You don't know when a link breaks",
    desc: "Affiliate links go down silently. By the time you notice, you've lost weeks of commissions.",
  },
  {
    icon: <IconChart />,
    title: "You have no idea which links convert",
    desc: "You're posting links everywhere but can't tell which platform, video or post drives the most clicks.",
  },
  {
    icon: <IconChaos />,
    title: "Your links are scattered everywhere",
    desc: "Spreadsheets, Notion docs, browser bookmarks — no single place to manage all your affiliate links.",
  },
];

const features = [
  {
    icon: <IconFolders />,
    title: "Organize by product",
    desc: "Group all your affiliate links under products. Add tags to filter and find any link instantly.",
  },
  {
    icon: <IconShield />,
    title: "Automatic broken link monitoring",
    desc: "AffProf checks your links automatically. Get email alerts the moment a link goes down — before you lose a single commission.",
  },
  {
    icon: <IconLink />,
    title: "Branded short links",
    desc: "Turn long ugly affiliate URLs into clean short links. Use your own custom domain (Pro) so every link reinforces your brand.",
  },
  {
    icon: <IconQr />,
    title: "QR codes with your branding",
    desc: "Every link gets a QR code automatically. Add your logo to QR codes (Pro) for a professional look on videos, thumbnails, and printed materials.",
  },
  {
    icon: <IconBarChart />,
    title: "Know exactly where your clicks come from",
    desc: "See clicks by country, device, browser, and referrer source. Know which platform drives the most traffic to your affiliate links.",
  },
  {
    icon: <IconRedirect />,
    title: "Fallback links (Pro)",
    desc: "When a link breaks, automatically redirect traffic to a backup URL instead of a dead page. Never lose a click again.",
  },
  {
    icon: <IconUpload />,
    title: "Import links in bulk",
    desc: "Already have hundreds of links? Upload a CSV file and import everything at once. No manual entry needed.",
  },
  {
    icon: <IconTag />,
    title: "UTM tag generation",
    desc: "Automatically add UTM parameters to your short links for better tracking in Google Analytics and other platforms.",
  },
];

const steps = [
  {
    icon: <IconPlus />,
    title: "Add your products and links",
    desc: "Create a product (e.g. Blue Yeti Mic) and add all its affiliate links from Amazon, ShareASale, etc.",
  },
  {
    icon: <IconWand />,
    title: "AffProf does the work",
    desc: "We generate your short link and QR code, then monitor every link automatically every day.",
  },
  {
    icon: <IconBell />,
    title: "Get alerts, track clicks, earn more",
    desc: "Receive instant email alerts when links break and see which ones drive the most traffic.",
  },
];

/* ---------- Hero Mockup ---------- */

function HeroMockup() {
  const rows = [
    { name: "Blue Yeti Microphone", url: "amzn.to/3xY2k9p", status: "active", clicks: "1,284" },
    { name: "Sony WH-1000XM5", url: "amzn.to/4aBc2d1", status: "active", clicks: "892" },
    { name: "Logitech MX Master 3S", url: "shrsl.com/mx3s", status: "broken", clicks: "341" },
    { name: "LG UltraFine 5K Display", url: "amzn.to/3k1lMnP", status: "active", clicks: "612" },
    { name: "Elgato Stream Deck", url: "imp.i384432.net/sd", status: "active", clicks: "455" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Green glow */}
      <div aria-hidden className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-40" />
      <div className="relative rounded-2xl border border-border-subtle bg-bg-card shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-subtle bg-bg-dark/60">
          <span className="w-3 h-3 rounded-full bg-error/60" />
          <span className="w-3 h-3 rounded-full bg-warning/60" />
          <span className="w-3 h-3 rounded-full bg-success/60" />
          <div className="ml-4 text-xs text-text-muted font-mono">app.affprof.com/links</div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-sm text-text-secondary">All links</div>
              <div className="text-2xl font-semibold">Your affiliate links</div>
            </div>
            <div className="hidden sm:inline-flex items-center rounded-lg bg-primary text-white text-xs font-medium px-3 py-2">
              + New link
            </div>
          </div>
          <div className="rounded-xl border border-border-subtle overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 text-xs font-medium text-text-muted uppercase tracking-wider bg-bg-dark/40 px-4 py-2.5 border-b border-border-subtle">
              <div className="col-span-5">Product</div>
              <div className="col-span-4">Short URL</div>
              <div className="col-span-2">Clicks</div>
              <div className="col-span-1 text-right">Status</div>
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
                      r.status === "active"
                        ? "bg-success/10 text-success"
                        : "bg-error/10 text-error"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        r.status === "active" ? "bg-success" : "bg-error"
                      }`}
                    />
                    {r.status === "active" ? "Active" : "Broken"}
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 -top-24 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Affiliate Link Management, Simplified
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Protect Every Dollar You Earn With{" "}
                <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                  Affiliate Links
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
                Organize your affiliate links, detect broken ones before you lose commissions, generate short links with QR codes, and track every click — all in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.affprof.com/register"
                  className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-medium px-6 py-3 transition-colors w-full sm:w-auto"
                >
                  Start for Free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-border-subtle hover:border-primary/40 bg-bg-card hover:bg-bg-card/70 text-text-primary text-base font-medium px-6 py-3 transition-colors w-full sm:w-auto"
                >
                  See How It Works
                </a>
              </div>
              <p className="mt-5 text-sm text-text-muted">
                No credit card required · Free plan available · Setup in 2 minutes
              </p>
            </div>

            <div className="mt-16 sm:mt-20">
              <HeroMockup />
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 sm:py-28 border-t border-border-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sound familiar?</h2>
              <p className="mt-4 text-text-secondary text-lg">
                The hidden costs of managing affiliate links the old way.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-error/10 text-error">
                    {p.icon}
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Everything you need to manage affiliate links like a pro
              </h2>
              <p className="mt-4 text-text-secondary text-lg">
                Built specifically for content creators and affiliate marketers.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    {f.icon}
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Up and running in minutes
              </h2>
              <p className="mt-4 text-text-secondary text-lg">
                Three steps from scattered links to a system that earns for you.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3 relative">
              {steps.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                      {s.icon}
                    </div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Step {i + 1}
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
        <Pricing />

        {/* FAQ */}
        <Faq />

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
                  Stop losing commissions to broken links
                </h2>
                <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
                  Join AffProf free today. No credit card required. Setup in 2 minutes.
                </p>
                <div className="mt-8">
                  <a
                    href="https://app.affprof.com/register"
                    className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-white/90 text-primary-dark text-base font-semibold px-6 py-3 transition-colors shadow-lg"
                  >
                    Get Started for Free
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
              <p className="mt-4 text-sm text-text-muted">
                © 2025 AffProf. All rights reserved.
              </p>
              <p className="mt-2 text-sm text-text-secondary">hello@affprof.com</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">Product</div>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li><a href="#features" className="hover:text-text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-text-primary transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">Legal</div>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li><Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">Built for creators and affiliate marketers.</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
              >
                <IconTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
