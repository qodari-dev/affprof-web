"use client";

import { useState } from "react";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

type Feature = { label: string; included: boolean };

const freeFeatures: Feature[] = [
  { included: true, label: "2 products" },
  { included: true, label: "10 links total" },
  { included: true, label: "Short link generation" },
  { included: true, label: "QR code generation (no branding)" },
  { included: true, label: "Basic click count" },
  { included: true, label: "Link monitoring once per day" },
  { included: true, label: "Email alerts for broken links" },
  { included: true, label: "Dashboard" },
  { included: false, label: "Custom domain" },
  { included: false, label: "QR branding" },
  { included: false, label: "Fallback links" },
  { included: false, label: "Bulk CSV import" },
  { included: false, label: "Full click analytics" },
];

const proFeatures: Feature[] = [
  { included: true, label: "Unlimited products" },
  { included: true, label: "Unlimited links" },
  { included: true, label: "Short link generation" },
  { included: true, label: "QR with your logo/branding" },
  { included: true, label: "Custom domain for short links" },
  { included: true, label: "Full click analytics (country, device, referrer, QR vs link)" },
  { included: true, label: "Link monitoring 4x per day" },
  { included: true, label: "Fallback links (auto-redirect on broken)" },
  { included: true, label: "Bulk import via CSV" },
  { included: true, label: "UTM parameter generation" },
  { included: true, label: "Priority email support" },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const proPrice = yearly ? "$6.58" : "$9";
  const proSuffix = yearly ? "/mo, billed yearly" : "/month";

  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center rounded-full border border-border-subtle bg-bg-card p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !yearly ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                yearly ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Yearly
              <span className={`text-xs px-1.5 py-0.5 rounded ${yearly ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                2 months free
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* FREE */}
          <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Free</h3>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg-dark border border-border-subtle text-text-secondary">
                Get Started
              </span>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">$0</span>
              <span className="text-text-secondary">/month</span>
            </div>
            <p className="mt-2 text-sm text-text-muted">Forever free. No credit card.</p>

            <ul className="mt-8 space-y-3 flex-1">
              {freeFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  {f.included ? (
                    <Check className="text-primary shrink-0 mt-0.5" />
                  ) : (
                    <Cross className="text-text-muted shrink-0 mt-0.5" />
                  )}
                  <span className={f.included ? "text-text-primary" : "text-text-muted line-through"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.affprof.com/register"
              className="mt-8 inline-flex items-center justify-center rounded-lg border border-border-subtle hover:border-primary/40 hover:bg-bg-dark text-text-primary text-sm font-medium px-4 py-3 transition-colors"
            >
              Start for Free
            </a>
          </div>

          {/* PRO */}
          <div className="relative rounded-2xl border-2 border-primary bg-bg-card p-8 flex flex-col shadow-[0_0_0_1px_rgba(34,197,94,0.1),0_20px_40px_-20px_rgba(34,197,94,0.25)]">
            <div className="absolute -top-3 left-8">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                Most Popular
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Pro</h3>
              {yearly && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Save 27%
                </span>
              )}
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{proPrice}</span>
              <span className="text-text-secondary">{proSuffix}</span>
            </div>
            <p className="mt-2 text-sm text-text-muted">
              {yearly ? "$79/year — save 27%" : "Or $79/year ($6.58/mo, save 27%)"}
            </p>

            <ul className="mt-8 space-y-3 flex-1">
              {proFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  <Check className="text-primary shrink-0 mt-0.5" />
                  <span className="text-text-primary">{f.label}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.affprof.com/register?plan=pro"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-3 transition-colors"
            >
              Start Pro — 14 days free
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          No credit card required for free plan. Cancel anytime. 14-day free trial on Pro.
        </p>
      </div>
    </section>
  );
}
