'use client';

import { useEffect, useState } from 'react';
import { AD_SLOTS, isAdConfigured, type AdSlotId } from '@/config/ads';
import { CONSENT_CHANGE_EVENT, readConsent } from '@/lib/consent';
import type { Dictionary } from '@/i18n/dictionaries';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface Props {
  slot: AdSlotId;
  dict: Dictionary;
  className?: string;
}

/**
 * Renders nothing unless: the slot is enabled, real publisher AND ad unit IDs
 * are configured, and the user accepted advertising cookies. It stays inert
 * until you paste your own IDs, so the shipped project is safe to deploy and
 * review before AdSense is approved.
 */
export default function AdSlot({ slot, dict, className = '' }: Props) {
  const config = AD_SLOTS[slot];
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const update = () => setConsented(readConsent() === 'accepted');
    update();
    window.addEventListener(CONSENT_CHANGE_EVENT, update);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, update);
  }, []);

  const shouldRender = config.enabled && consented && isAdConfigured(config);

  useEffect(() => {
    if (!shouldRender) return;

    if (!document.getElementById('adsense-script')) {
      const script = document.createElement('script');
      script.id = 'adsense-script';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.clientId)}`;
      document.head.appendChild(script);
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense may refuse to initialise (e.g. ad blocker); ads stay hidden. */
    }
  }, [shouldRender, config.clientId]);

  if (!shouldRender) return null;

  return (
    <aside className={`my-6 overflow-hidden rounded-2xl border border-dashed border-ink-300 bg-ink-50 p-3 text-center dark:border-ink-700 dark:bg-ink-900 ${className}`} aria-label={dict.ads.sponsored}>
      <span className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-ink-400">
        {dict.ads.sponsored}
      </span>
      <ins
        className="adsbygoogle block min-h-[90px]"
        style={{ display: 'block' }}
        data-ad-client={config.clientId}
        data-ad-slot={config.slotId}
        data-ad-format={config.format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
