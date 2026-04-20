"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { SITE_URLS } from "../site-config";

type NavDict = {
  features: string;
  pricing: string;
  faq: string;
  login: string;
  getStarted: string;
};

export default function Navbar({ dict, lang }: { dict: NavDict; lang: string }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: dict.features },
    { href: "#pricing", label: dict.pricing },
    { href: "#faq", label: dict.faq },
  ];

  const otherLang = lang === "en" ? "es" : "en";
  const otherLabel = lang === "en" ? "ES" : "EN";

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-bg-dark/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/logo-close.png"
            alt="AffProf"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="block text-base font-semibold tracking-tight text-text-primary">
            AffProf
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`/${otherLang}`}
            className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-text-secondary transition-colors hover:border-primary/40 hover:text-text-primary"
          >
            {otherLabel}
          </Link>
          <a
            href={SITE_URLS.login}
            className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            {dict.login}
          </a>
          <a
            href={SITE_URLS.register}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform transition-colors hover:bg-primary-dark hover:-translate-y-0.5"
          >
            {dict.getStarted}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={`/${otherLang}`}
            className="inline-flex h-10 items-center rounded-full border border-white/10 px-3 text-xs font-semibold tracking-[0.18em] text-text-secondary"
          >
            {otherLabel}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-text-primary transition-colors hover:border-primary/40 hover:bg-white/6"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-white/8 bg-bg-dark/96 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.95)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-3">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-white/8 hover:bg-white/4 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="my-1 h-px bg-white/8" />
                <a
                  href={SITE_URLS.login}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-white/8 hover:bg-white/4 hover:text-text-primary"
                >
                  {dict.login}
                </a>
                <a
                  href={SITE_URLS.register}
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  {dict.getStarted}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
