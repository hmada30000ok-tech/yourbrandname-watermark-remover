/**
 * ---------------------------------------------------------------------------
 * PLACEHOLDER CONSTANTS — replace these four values before publishing.
 * ---------------------------------------------------------------------------
 * These are the ONLY placeholders in this project (as requested):
 *   1. SITE_NAME        — your brand name
 *   2. SITE_URL         — your production domain
 *   3. CONTACT_EMAIL    — your contact address
 *   4. ADSENSE_CLIENT_ID — found in config/ads.ts
 * ---------------------------------------------------------------------------
 */

/** PLACEHOLDER: replace with your real brand name. */
export const SITE_NAME = '[YourBrandName]';

/** PLACEHOLDER: replace with your real domain (no trailing slash). */
export const SITE_URL = 'https://example.com';

/** PLACEHOLDER: replace with your real contact email. */
export const CONTACT_EMAIL = 'you@example.com';

export type Locale = 'ar' | 'en';

/** Arabic is the default locale. */
export const DEFAULT_LOCALE: Locale = 'ar';

export const LOCALES: readonly Locale[] = ['ar', 'en'] as const;

export function isLocale(value: string): value is Locale {
  return value === 'ar' || value === 'en';
}

/** Human-readable locale names (kept native, as recommended by W3C). */
export const LOCALE_NAMES: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
};
