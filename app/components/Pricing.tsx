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

type PricingDict = {
  title: string;
  subtitle: string;
  monthly: string;
  yearly: string;
  yearlyBadge: string;
  free: {
    name: string;
    badge: string;
    price: string;
    suffix: string;
    desc: string;
    cta: string;
    features: Feature[];
  };
  pro: {
    name: string;
    badge: string;
    priceMonthly: string;
    suffixMonthly: string;
    priceYearly: string;
    suffixYearly: string;
    descMonthly: string;
    descYearly: string;
    save: string;
    cta: string;
    features: Feature[];
  };
  note: string;
};

export default function Pricing({ dict }: { dict: PricingDict }) {
  const [yearly, setYearly] = useState(false);

  const proPrice = yearly ? dict.pro.priceYearly : dict.pro.priceMonthly;
  const proSuffix = yearly ? dict.pro.suffixYearly : dict.pro.suffixMonthly;

  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            {dict.subtitle}
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
              {dict.monthly}
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                yearly ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {dict.yearly}
              <span className={`text-xs px-1.5 py-0.5 rounded ${yearly ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {dict.yearlyBadge}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* FREE */}
          <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{dict.free.name}</h3>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg-dark border border-border-subtle text-text-secondary">
                {dict.free.badge}
              </span>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{dict.free.price}</span>
              <span className="text-text-secondary">{dict.free.suffix}</span>
            </div>
            <p className="mt-2 text-sm text-text-muted">{dict.free.desc}</p>

            <ul className="mt-8 space-y-3 flex-1">
              {dict.free.features.map((f) => (
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
              {dict.free.cta}
            </a>
          </div>

          {/* PRO */}
          <div className="relative rounded-2xl border-2 border-primary bg-bg-card p-8 flex flex-col shadow-[0_0_0_1px_rgba(34,197,94,0.1),0_20px_40px_-20px_rgba(34,197,94,0.25)]">
            <div className="absolute -top-3 left-8">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                {dict.pro.badge}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{dict.pro.name}</h3>
              {yearly && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {dict.pro.save}
                </span>
              )}
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{proPrice}</span>
              <span className="text-text-secondary">{proSuffix}</span>
            </div>
            <p className="mt-2 text-sm text-text-muted">
              {yearly ? dict.pro.descYearly : dict.pro.descMonthly}
            </p>

            <ul className="mt-8 space-y-3 flex-1">
              {dict.pro.features.map((f) => (
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
              {dict.pro.cta}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          {dict.note}
        </p>
      </div>
    </section>
  );
}
