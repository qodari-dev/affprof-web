import Image from "next/image";
import Link from "next/link";
import FooterLangSwitcher from "./FooterLangSwitcher";
import TrackedLink from "./TrackedLink";
import { SITE_URLS } from "../site-config";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.5 8.2V6.6c0-.8.2-1.2 1.4-1.2h1.5V2.6c-.7-.1-1.6-.2-2.6-.2-2.7 0-4.5 1.6-4.5 4.7v1.1h-3v3.2h3v8.2h4.2v-8.2h2.8l.4-3.2h-3.2Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
    >
      <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.1" cy="6.9" fill="currentColor" r="1" stroke="none" />
    </svg>
  );
}

function XSocialIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
      viewBox="0 0 24 24"
    >
      <path d="m5 4 14 16" />
      <path d="M19 4 5 20" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: SITE_URLS.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: SITE_URLS.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: "X",
    href: SITE_URLS.social.x,
    icon: XSocialIcon,
  },
] as const;

type FooterDict = {
  product: string;
  resources: string;
  legal: string;
  contact: string;
  blog: string;
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
  blog: string;
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
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <TrackedLink
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`AffProf on ${name}`}
                  eventParams={{
                    location: "footer_social",
                    cta: name.toLowerCase(),
                    lang,
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon className="h-4 w-4" />
                </TrackedLink>
              ))}
            </div>
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
                  href={`/${lang}/blog`}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.blog}
                </Link>
              </li>
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
                <TrackedLink
                  href={`/${lang}/contact`}
                  eventParams={{
                    location: "footer_contact",
                    cta: "contact_form",
                    lang,
                  }}
                  className="transition-colors hover:text-text-primary"
                >
                  {dict.contactForm}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={`mailto:${SITE_URLS.supportEmail}`}
                  eventParams={{
                    location: "footer_contact",
                    cta: "support_email",
                    lang,
                  }}
                  className="text-primary-light transition-colors hover:text-white"
                >
                  {SITE_URLS.supportEmail}
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
