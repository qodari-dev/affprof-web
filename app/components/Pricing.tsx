import { SITE_URLS } from "../site-config";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
  free: {
    name: string;
    badge: string;
    price: string;
    suffix: string;
    desc: string;
    cta: string;
    features: Feature[];
    note: string;
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
    ctaMonthly: string;
    ctaYearly: string;
    features: Feature[];
    note: string;
  };
};

export default function Pricing({ dict }: { dict: PricingDict }) {
  return (
    <section id="pricing" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">
            Pricing
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
          <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-muted">
                  {dict.free.badge}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {dict.free.name}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-4xl font-semibold tracking-tight">
                  {dict.free.price}
                </div>
                <div className="text-sm text-text-secondary">
                  {dict.free.suffix}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-text-secondary">
              {dict.free.desc}
            </p>

            <ul className="mt-8 space-y-3">
              {dict.free.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`flex items-start gap-3 text-sm ${feature.included ? "" : "opacity-55"}`}
                >
                  {feature.included ? (
                    <Check className="mt-0.5 shrink-0 text-primary" />
                  ) : (
                    <Cross className="mt-0.5 shrink-0 text-text-muted" />
                  )}
                  <span className="flex-1">{feature.label}</span>
                  {!feature.included && (
                    <span className="mt-0.5 shrink-0 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-light">
                      Pro
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href={SITE_URLS.register}
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-primary/35 hover:bg-white/6"
            >
              {dict.free.cta}
            </a>
          </div>
          <p className="mb-8 text-center text-sm text-text-muted">
            {dict.free.note}
          </p>

          <div className="relative overflow-hidden rounded-[32px] border border-primary/25 bg-[linear-gradient(145deg,rgba(34,197,94,0.16),rgba(10,15,20,0.9)_40%,rgba(10,15,20,1))] p-8 shadow-[0_45px_120px_-60px_rgba(34,197,94,0.6)] sm:p-10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">
                    {dict.pro.badge}
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                    {dict.pro.name}
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
                  {dict.pro.save}
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    {dict.monthly}
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight">
                      {dict.pro.priceMonthly}
                    </span>
                    <span className="pb-1 text-sm text-text-secondary">
                      {dict.pro.suffixMonthly}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {dict.pro.descMonthly}
                  </p>
                  <a
                    href={SITE_URLS.registerPro}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-white/10"
                  >
                    {dict.pro.ctaMonthly}
                  </a>
                </div>

                <div className="rounded-3xl border border-primary/30 bg-primary/10 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                    {dict.yearly}
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight">
                      {dict.pro.priceYearly}
                    </span>
                    <span className="pb-1 text-sm text-text-secondary">
                      {dict.pro.suffixYearly}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {dict.pro.descYearly}
                  </p>
                  <a
                    href={SITE_URLS.registerProAnnual}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    {dict.pro.ctaYearly}
                  </a>
                </div>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {dict.pro.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm"
                  >
                    <Check className="mt-0.5 shrink-0 text-primary-light" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          {dict.pro.note}
        </p>
      </div>
    </section>
  );
}
