"use client";

import { useState } from "react";

const items = [
  {
    q: "What happens when a link breaks?",
    a: "AffProf detects it automatically and sends you an email alert with the broken link details and a link to your dashboard to fix it. Pro users also get automatic fallback redirects to a backup URL.",
  },
  {
    q: "What is a short link?",
    a: "Instead of sharing a long ugly affiliate URL, AffProf gives you a clean short link like affprof.com/go/blueyeti (or yourdomain.com/go/blueyeti on Pro). Every click on that short link is tracked before redirecting to the original affiliate URL.",
  },
  {
    q: "Can I use my own domain for short links?",
    a: "Yes, on the Pro plan you can connect your own domain so your short links look like go.yourbrand.com/productname.",
  },
  {
    q: "How does QR branding work?",
    a: "On the Pro plan you can add your logo to the center of every QR code. Perfect for YouTube thumbnails, Instagram stories, and printed materials.",
  },
  {
    q: "What platforms does AffProf support?",
    a: "Any affiliate platform — Amazon Associates, ShareASale, Impact, CJ Affiliate, Rakuten, ClickBank, and any custom URL.",
  },
  {
    q: "Can I import my existing links?",
    a: "Yes, on Pro you can upload a CSV file with all your existing links and import them in bulk.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes, Pro comes with a 14-day free trial. No credit card required to start.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-border-subtle">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Everything you need to know about AffProf.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-border-subtle bg-bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-dark/40 transition-colors"
                  aria-expanded={open}
                >
                  <span className="text-sm sm:text-base font-medium text-text-primary">
                    {item.q}
                  </span>
                  <svg
                    className={`shrink-0 text-text-secondary transition-transform ${open ? "rotate-180" : ""}`}
                    width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
