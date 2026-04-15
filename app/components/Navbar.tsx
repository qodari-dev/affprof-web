"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-close.png"
            alt="AffProf"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-text-primary">
            AffProf
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.affprof.com/login"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Log in
          </a>
          <a
            href="https://app.affprof.com/register"
            className="inline-flex items-center rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 transition-colors"
          >
            Get Started Free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border-subtle bg-bg-dark/95 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-border-subtle my-2" />
            <a
              href="https://app.affprof.com/login"
              className="px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
            >
              Log in
            </a>
            <a
              href="https://app.affprof.com/register"
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2.5 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
