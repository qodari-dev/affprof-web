import Image from "next/image";
import Link from "next/link";
import FooterLangSwitcher from "./FooterLangSwitcher";
import { SITE_URLS } from "../site-config";

type FooterDict = {
  product: string;
  resources: string;
  legal: string;
  contact: string;
  gettingStarted: string;
  customDomainSetup: string;
  importingLinks: string;
  contactForm: string;
  privacy: string;
  terms: string;
  tagline: string;
  rights: string;
};

type NavDict = {
  features: string;
  pricing: string;
  faq: string;
};

export default function Footer({
  dict,
  nav,
  lang,
}: {
  dict: FooterDict;
  nav: NavDict;
  lang: string;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
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
              {dict.tagline}
            </p>
            <p className="mt-4 text-xs text-text-muted">
              © {currentYear} AffProf. {dict.rights}
            </p>
            <div className="mt-5">
              <FooterLangSwitcher lang={lang} />
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
              {dict.product}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <Link
                  href={`/${lang}#features`}
                  className="transition-colors hover:text-text-primary"
                >
                  {nav.features}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#pricing`}
                  className="transition-colors hover:text-text-primary"
                >
                  {nav.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#faq`}
                  className="transition-colors hover:text-text-primary"
                >
                  {nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
              {dict.resources}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <Link
                  href={`/${lang}/guides/getting-started`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.gettingStarted}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/guides/custom-domain`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.customDomainSetup}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/guides/import-links`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.importingLinks}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
              {dict.legal}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <Link
                  href={`/${lang}/privacy`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/terms`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
              {dict.contact}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.contactForm}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${SITE_URLS.supportEmail}`}
                  className="text-primary-light transition-colors hover:text-white"
                >
                  {SITE_URLS.supportEmail}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
