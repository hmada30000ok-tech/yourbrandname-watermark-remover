import { CONSENT_STORAGE_KEY } from '@/config/app';

export type ConsentChoice = 'accepted' | 'rejected';

export const CONSENT_CHANGE_EVENT = 'yourbrandname:consent-change';
export const OPEN_CONSENT_EVENT = 'yourbrandname:open-consent';

export function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* storage may be unavailable (private mode) — continue without persisting */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
  }
}

export function openCookieSettings(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
  }
}
