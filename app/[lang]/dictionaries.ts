import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
};

const privacyDictionaries = {
  en: () => import("./dictionaries/privacy.en.json").then((m) => m.default),
  es: () => import("./dictionaries/privacy.es.json").then((m) => m.default),
};

const termsDictionaries = {
  en: () => import("./dictionaries/terms.en.json").then((m) => m.default),
  es: () => import("./dictionaries/terms.es.json").then((m) => m.default),
};

const contactDictionaries = {
  en: () => import("./dictionaries/contact.en.json").then((m) => m.default),
  es: () => import("./dictionaries/contact.es.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getPrivacyDictionary = async (locale: Locale) =>
  privacyDictionaries[locale]();
export const getTermsDictionary = async (locale: Locale) =>
  termsDictionaries[locale]();
export const getContactDictionary = async (locale: Locale) =>
  contactDictionaries[locale]();
