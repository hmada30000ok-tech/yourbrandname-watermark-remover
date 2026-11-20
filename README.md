# [YourBrandName]

> English · [العربية](./README.ar.md)

A **static, 100% client-side** tool that removes a fixed-position watermark or logo from videos you own. Video processing runs in your browser with `ffmpeg.wasm` inside a dedicated Web Worker. **No uploads, no server-side processing, no file storage.**

Use it only for content you own or have clear legal rights to modify.

---

## 1. What is inside

```
YourBrandName/
├── app/
│   ├── globals.css
│   ├── robots.ts                 # generated /robots.txt
│   ├── sitemap.ts                # generated /sitemap.xml
│   ├── (ar)/                     # Arabic root layout: <html lang="ar" dir="rtl">
│   │   ├── layout.tsx
│   │   ├── page.tsx              # /
│   │   ├── how-it-works/page.tsx # /how-it-works
│   │   ├── terms/page.tsx        # /terms
│   │   ├── privacy/page.tsx      # /privacy
│   │   ├── contact/page.tsx      # /contact
│   │   └── about/page.tsx        # /about
│   └── (en)/en/                  # English root layout: <html lang="en" dir="ltr">
│       ├── layout.tsx
│       ├── page.tsx              # /en
│       └── ...                   # /en/how-it-works, /en/terms, etc.
├── components/
│   ├── AdSlot.tsx                # consent-gated AdSense placeholders
│   ├── CookieConsent.tsx
│   ├── EditorDynamic.tsx         # next/dynamic, ssr:false
│   ├── Header.tsx / Footer.tsx / SiteLayout.tsx / LanguageSwitcher.tsx
│   ├── editor/
│   │   ├── Editor.tsx            # orchestration, worker lifecycle, object URLs
│   │   ├── WatermarkSelector.tsx # draw / resize / move rectangle
│   │   ├── TimeRange.tsx
│   │   └── useElementSize.ts
│   ├── pages/                    # one component per page, shared by both locales
│   └── ui/Icons.tsx
├── config/
│   ├── site.ts                   # ⚠ brand, domain, email (placeholders)
│   ├── app.ts                    # max size, accepted formats, pinned core URLs
│   └── ads.ts                    # ⚠ AdSense client ID + per-slot enable flags
├── i18n/dictionaries.ts          # ar (source of truth) + en (type-checked)
├── lib/
│   ├── coordinates.ts            # scaling, clamping, object-fit mapping
│   ├── validation.ts
│   ├── routes.ts / metadata.ts / consent.ts
│   └── ffmpeg/
│       ├── buildArgs.ts          # argument ARRAY builder
│       └── messages.ts
├── workers/ffmpeg.worker.ts      # FFmpeg class, progress, cancel, core loading
├── public/_headers               # intentionally no COEP, so AdSense can load
├── public/_redirects
├── tests/                        # Vitest unit tests
├── next.config.mjs               # output: 'export'
├── tailwind.config.ts
└── package.json                  # pinned versions
```

## 2. Placeholders to replace before publishing

These are the only placeholders in the project:

| Constant | File | Replace with |
| --- | --- | --- |
| `SITE_NAME` | `config/site.ts` | your brand name (currently `[YourBrandName]`) |
| `SITE_URL` | `config/site.ts` | `https://your-real-domain.com` (feeds canonical, hreflang, sitemap, robots, Open Graph) |
| `CONTACT_EMAIL` | `config/site.ts` | your contact address |
| `ADSENSE_CLIENT_ID` and ad unit IDs | `config/ads.ts` | your `ca-pub-…` ID and slot IDs |

All ad slots are **enabled** and stay invisible until a real client ID is configured *and* the user accepts advertising cookies. There is no premium or "remove ads" feature.

## 3. Local setup

Requirements: Node.js **18.17+** (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> for Arabic (default) and <http://localhost:3000/en> for English.

Useful scripts:

```bash
npm test          # Vitest: coordinate scaling + ffmpeg argument builder
npm run typecheck # tsc --noEmit
npm run lint      # next lint
npm run build     # static export into out/
```

## 4. Build

```bash
npm run build
```

The fully static site is written to **`out/`**. There is no Node server, no API route and no dynamic rendering.

## 5. Deploy to Cloudflare Pages

1. Push this folder to a Git repository.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: `20` (environment variable `NODE_VERSION=20`)
4. Deploy.

`public/_headers` is copied into `out/` by the static export. It deliberately does **not** set COOP/COEP: `Cross-Origin-Embedder-Policy: require-corp` would block AdSense scripts, ad iframes and creatives because Google does not send the required CORP header. Without those headers ads load normally, and ffmpeg uses the single-thread core (no `SharedArrayBuffer`). This is the right trade-off for an ad-supported static site.

### Enable Google AdSense

1. Get approved for AdSense and create three ad units (header, sidebar, in-content).
2. In `config/ads.ts`, replace `ADSENSE_CLIENT_ID` with your `ca-pub-…` ID and replace each `slotId` with your real ad unit IDs. The `enabled` flags are already `true`.
3. Rebuild (`npm run build`) and deploy. `AdSlot` injects the official `adsbygoogle.js` script with `crossorigin="anonymous"` **only after** the visitor accepts advertising cookies — rejecting ads prevents any ad network request.
4. Verify on the live domain: after accepting cookies, `ins.adsbygoogle` elements should be filled. Ad filling can take a few minutes on a fresh domain.

ffmpeg cores are fetched at processing time from a pinned CDN (`@ffmpeg/core-mt@0.12.10` / `@ffmpeg/core@0.12.10`) using `toBlobURL`. The fetch is CORS-enabled and the core is executed from a **same-origin blob URL**, so it works under this hosting setup. Core files are never bundled into the initial JavaScript.

## 6. How processing works

1. The dropped `File` is validated by MIME **and** extension and against the 150 MB limit (`config/app.ts`). Files over 100 MB require an explicit acknowledgement.
2. The rectangle drawn on the preview is stored in **intrinsic video pixels** using `object-fit: contain` aware mapping.
3. On "Start processing", a dedicated Web Worker is created. It lazily loads the pinned core, writes the input into the ffmpeg virtual filesystem, and runs an **argument array**:
   ```
   -i input.mp4
   -vf "delogo=x=…:y=…:w=…:h=…:enable='between(t,START,END)':show=0"
   -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p
   -c:a copy -movflags +faststart output.mp4
   ```
4. `ffmpeg.on('progress')` drives the progress bar — no polling.
5. The output blob becomes a local object URL for download, then is revoked. Cancel terminates the worker and resets state.

## 7. Known limitations

- **Static watermarks only.** `delogo` interpolates from surrounding pixels; moving, blinking, very wide marks, or marks over fine detail leave visible traces. Nothing can reconstruct detail that was hidden behind the mark.
- Memory is limited in the browser. Long or high-resolution videos can fail, especially on phones; use a shorter clip or smaller file. The UI suggests this for memory errors.
- The whole file is decoded and re-encoded, which is CPU-heavy. Because COEP is omitted so ads can load, processing uses the single-thread core and is slower than the multithreaded build.
- Output is always **MP4 / H.264 / yuv420p**; audio is stream-copied when possible.
- Format support is MP4, MOV and WEBM up to **150 MB** (configurable in `config/app.ts`).
- Browsers must support WebAssembly and Web Workers. The single-thread core is used everywhere in this ad-supported configuration.
- No account, no cloud storage, no server-side features, no payment/remove-ads plan.

## 8. Legal

Users must own or have legal rights to the content they process. The service is provided **as-is**, without warranty of any kind. See the Terms of Use and Privacy Policy pages (available in Arabic and English).
