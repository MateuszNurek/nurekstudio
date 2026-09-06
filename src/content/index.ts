/**
 * Content entry point.
 *
 * To add German: create src/content/de/ with the same exports as src/content/en/,
 * then switch `activeLocale` (or resolve it from the route once the site has a
 * locale segment). Components only import from this file.
 */
import * as en from "./en";

export const activeLocale = "en" as const;

const locales = { en } as const;

export const content = locales[activeLocale];
