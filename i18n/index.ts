import type { Locale } from "./config";
import en from "./dictionaries/en";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";

export const dictionaries = { en, es, pt } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
