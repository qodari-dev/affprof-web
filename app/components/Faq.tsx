"use client";

import { useState } from "react";

type FaqDict = {
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
};

export default function Faq({ dict }: { dict: FaqDict }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-border-subtle">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {dict.items.map((item, i) => {
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
