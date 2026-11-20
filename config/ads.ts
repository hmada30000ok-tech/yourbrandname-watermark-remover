/**
 * ---------------------------------------------------------------------------
 * PLACEHOLDER: replace ADSENSE_CLIENT_ID with your real AdSense publisher ID
 * (looks like ca-pub-1234567890123456) before enabling any slot.
 * ---------------------------------------------------------------------------
 */
export const ADSENSE_CLIENT_ID = 'ca-pub-4633137837175260';

export type AdSlotId = 'header' | 'sidebar' | 'inContent';

export interface AdSlotConfig {
  enabled: boolean;
  clientId: string;
  slotId: string;
  format: 'auto' | 'horizontal' | 'rectangle' | 'fluid';
  labelKey: 'header' | 'sidebar' | 'content';
}

/**
 * ---------------------------------------------------------------------------
 * TO GO LIVE WITH ADSENSE — two steps:
 *   1. Replace ADSENSE_CLIENT_ID below with your real ca-pub-… ID.
 *   2. Replace each slotId with the ad unit IDs from your AdSense account.
 *
 * Slots are already enabled. Ads still never render until the user accepts
 * advertising cookies (see components/CookieConsent.tsx), and nothing renders
 * while the placeholder client ID is in place.
 * ---------------------------------------------------------------------------
 */
export const AD_SLOTS: Record<AdSlotId, AdSlotConfig> = {
  header: {
    enabled: true,
    clientId: ADSENSE_CLIENT_ID,
    slotId: '7590922154', // header ad unit
    format: 'horizontal',
    labelKey: 'header',
  },
  sidebar: {
    enabled: true,
    clientId: ADSENSE_CLIENT_ID,
    slotId: '9660224282', // sidebar ad unit
    format: 'rectangle',
    labelKey: 'sidebar',
  },
  inContent: {
    enabled: true,
    clientId: ADSENSE_CLIENT_ID,
    slotId: '1895295234', // in-content ad unit
    format: 'fluid',
    labelKey: 'content',
  },
};

/** Placeholder IDs are treated as "not configured". */
export function isAdConfigured(config: AdSlotConfig): boolean {
  const hasRealClient =
    config.clientId.startsWith('ca-pub-') && config.clientId !== 'ca-pub-0000000000000000';
  const hasRealSlot = config.slotId !== '' && !/^0+$/.test(config.slotId);
  return hasRealClient && hasRealSlot;
}
