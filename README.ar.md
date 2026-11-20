# [YourBrandName]

> [English](./README.md) · العربية

أداة **ثابتة تعمل بالكامل داخل المتصفح** لإزالة العلامة المائية أو الشعار الثابت من مقاطع الفيديو التي تملكها. تتم المعالجة داخل متصفحك باستخدام `ffmpeg.wasm` داخل عامل Web Worker مخصص. **لا رفع ملفات، لا معالجة على خادم، لا تخزين للملفات.**

استخدم الأداة فقط مع المحتوى الذي تملكه أو لديك حقوق قانونية واضحة لتعديله.

---

## 1. محتويات المشروع

```
YourBrandName/
├── app/
│   ├── globals.css
│   ├── robots.ts / sitemap.ts      # يُنشآن robots.txt و sitemap.xml أثناء البناء
│   ├── (ar)/                       # تخطيط عربي: <html lang="ar" dir="rtl">
│   │   ├── layout.tsx
│   │   ├── page.tsx                # /
│   │   ├── how-it-works/page.tsx   # /how-it-works
│   │   ├── terms/page.tsx          # /terms
│   │   ├── privacy/page.tsx        # /privacy
│   │   ├── contact/page.tsx        # /contact
│   │   └── about/page.tsx          # /about
│   └── (en)/en/                    # تخطيط إنجليزي: <html lang="en" dir="ltr">
│       ├── layout.tsx
│       ├── page.tsx                # /en
│       └── ...                     # /en/how-it-works، /en/terms، إلخ
├── components/
│   ├── AdSlot.tsx                  # مساحات إعلانية مشروطة بالموافقة
│   ├── CookieConsent.tsx
│   ├── EditorDynamic.tsx           # next/dynamic مع ssr:false
│   ├── Header.tsx / Footer.tsx / SiteLayout.tsx / LanguageSwitcher.tsx
│   ├── editor/
│   │   ├── Editor.tsx              # إدارة الحالة والعامل وعناوين الكائنات
│   │   ├── WatermarkSelector.tsx   # رسم وتغيير حجم وتحريك المستطيل
│   │   ├── TimeRange.tsx
│   │   └── useElementSize.ts
│   ├── pages/                      # مكوّن لكل صفحة مشترك بين اللغتين
│   └── ui/Icons.tsx
├── config/
│   ├── site.ts                     # ⚠ الاسم والنطاق والبريد (عناصر نائبة)
│   ├── app.ts                      # الحد الأقصى للحجم والصيغ وعناوين النواة
│   └── ads.ts                      # ⚠ معرّف AdSense ومفاتيح تفعيل المساحات
├── i18n/dictionaries.ts            # ar (المرجع) + en (مطابق للنوع)
├── lib/
│   ├── coordinates.ts / validation.ts / routes.ts / metadata.ts / consent.ts
│   └── ffmpeg/buildArgs.ts + messages.ts
├── workers/ffmpeg.worker.ts
├── public/_headers                 # بدون COEP عمدًا عشان AdSense يشتغل
├── public/_redirects
├── tests/                          # اختبارات Vitest
├── next.config.mjs                 # output: 'export'
└── package.json                    # إصدارات مثبّتة
```

## 2. العناصر النائبة قبل النشر

هذه هي العناصر النائبة الوحيدة في المشروع:

| الثابت | الملف | استبدله بـ |
| --- | --- | --- |
| `SITE_NAME` | `config/site.ts` | اسم علامتك التجارية (`[YourBrandName]` حاليًا) |
| `SITE_URL` | `config/site.ts` | نطاقك الحقيقي (يغذّي canonical و hreflang و sitemap و robots و Open Graph) |
| `CONTACT_EMAIL` | `config/site.ts` | بريدك للتواصل |
| `ADSENSE_CLIENT_ID` ومعرّفات الوحدات | `config/ads.ts` | معرّف `ca-pub-…` ومعرّفات المساحات |

جميع المساحات الإعلانية **مفعّلة**، ولا تظهر إلا بعد ضبط معرّف حقيقي **وموافقة المستخدم على الإعلانات**. لا توجد نسخة مميزة أو ميزة "إزالة الإعلانات" مقابل دفع.

## 3. التشغيل محليًا

المتطلبات: Node.js **18.17 أو أحدث** (يُنصح بـ 20 LTS) و npm.

```bash
npm install
npm run dev
```

افتح <http://localhost:3000> للعربية (الافتراضية) و <http://localhost:3000/en> للإنجليزية.

أوامر مفيدة:

```bash
npm test          # اختبارات: تحويل الإحداثيات وبناء أوامر ffmpeg
npm run typecheck # فحص الأنواع
npm run lint      # فحص ESLint
npm run build     # تصدير ثابت إلى out/
```

## 4. البناء

```bash
npm run build
```

يُكتب الموقع الثابت كاملًا في **`out/`**. لا يوجد خادم Node ولا مسارات API ولا عرض ديناميكي.

## 5. النشر على Cloudflare Pages

1. ارفع هذا المجلد إلى مستودع Git.
2. لوحة Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. إعدادات البناء:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `out`
   - إصدار Node: `20` عبر المتغير `NODE_VERSION=20`
4. انشر.

يُنسخ الملف `public/_headers` إلى `out/` ويطبّقه Cloudflare Pages، وهو **بقصد** لا يضيف ترويسات COOP/COEP. سبب ذلك أن `Cross-Origin-Embedder-Policy: require-corp` تمنع سكربتات AdSense وإطارات الإعلانات ومحتواها؛ لأن Google لا ترسل ترويسة CORP المطلوبة. بدون هذه الترويسات الإعلانات تُحمّل بشكل طبيعي، وتستخدم الأداة النواة أحادية الخيط (لا يوجد `SharedArrayBuffer`). هذا هو الخيار المناسب لموقع ثابت مدعوم بالإعلانات.

### تشغيل Google AdSense

1. احصل على موافقة AdSense وأنشئ ثلاث وحدات إعلانية (أعلى الصفحة، شريط جانبي، داخل المحتوى).
2. في `config/ads.ts` استبدل `ADSENSE_CLIENT_ID` بمعرّف `ca-pub-…` الخاص بك، واستبدل كل `slotId` بمعرّف الوحدة الحقيقي. مفاتيح `enabled` مفعّلة بالفعل.
3. أعد البناء (`npm run build`) وانشر. مكوّن `AdSlot` يحمّل السكربت الرسمي `adsbygoogle.js` مع `crossorigin="anonymous"` **بعد موافقة الزائر على الإعلانات فقط**؛ ورفض الإعلانات يمنع أي طلب لشبكة إعلانية.
4. تحقق من النطاق الحي: بعد الموافقة يجب أن تمتلئ عناصر `ins.adsbygoogle`. امتلاء الإعلانات قد يستغرق دقائق على نطاق جديد.

تُحمّل نواة ffmpeg عند بدء المعالجة من CDN بإصدار مثبّت (`@ffmpeg/core-mt@0.12.10` أو `@ffmpeg/core@0.12.10`) عبر `toBlobURL`. الطلب يعمل بـ CORS، وتُنفَّذ النواة من عنوان blob **نفس المنشأ**. ملفات النواة لا تُضمَّن في حزمة JavaScript الأولى.

## 6. آلية المعالجة

1. يُتحقَّق من الملف المُسحوب عبر MIME **والامتداد**، وكذلك الحد الأقصى 150 ميجابايت (`config/app.ts`). الملفات الأكبر من 100 ميجابايت تتطلب تأكيدًا صريحًا.
2. يُخزَّن المستطيل المرسوم على المعاينة بـ **بكسلات الفيديو الأصلية** باستخدام تحويل يراعي `object-fit: contain`.
3. عند الضغط على "بدء المعالجة" يُنشأ عامل Web Worker مخصص. يحمّل النواة المثبّتة، يكتب الملف في نظام ملفات ffmpeg الافتراضي، ثم ينفّذ **مصفوفة وسائط**:
   ```
   -i input.mp4
   -vf "delogo=x=…:y=…:w=…:h=…:enable='between(t,START,END)':show=0"
   -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p
   -c:a copy -movflags +faststart output.mp4
   ```
4. يعتمد شريط التقدم على `ffmpeg.on('progress')` بدون أي استقصاء دوري.
5. يتحوّل الملف الناتج إلى عنوان كائن محلي للتنزيل، ثم يُلغى. الإلغاء يوقف العامل ويعيد ضبط الحالة.

## 7. القيود المعروفة

- **العلامات الثابتة فقط.** يستكمل مرشح `delogo` البكسلات من المنطقة المحيطة؛ العلامات المتحركة أو الوامضة أو العريضة جدًا أو تلك فوق تفاصيل دقيقة تترك أثرًا مرئيًا. لا يمكن استعادة تفاصيل كانت مخفية أصلًا.
- الذاكرة محدودة في المتصفح. قد تفشل المقاطع الطويلة أو عالية الدقة، خصوصًا على الهواتف؛ جرّب مقطعًا أقصر أو ملفًا أصغر. تعرض الواجهة هذا الاقتراح عند أخطاء الذاكرة.
- فكّ الملف وإعادة ترميزه كاملًا عملية كثيفة للمعالج. وبما أن ترويسة COEP مُزالة عمدًا عشان الإعلانات تشتغل، المعالجة تستخدم النواة أحادية الخيط فبتكون أبطأ من النسخة متعددة الخيوط.
- الناتج دائمًا **MP4 / H.264 / yuv420p**، ويُنقل الصوت بدون إعادة ترميز عندما يكون ذلك ممكنًا.
- الصيغ المدعومة MP4 وMOV وWEBM حتى **150 ميجابايت** (قابلة للتعديل في `config/app.ts`).
- يجب أن يدعم المتصفح WebAssembly و Web Workers. في هذا الإعداد المدعوم بالإعلانات تُستخدم النواة أحادية الخيط في كل المتصفحات.
- لا حسابات، لا تخزين سحابي، لا ميزات خادمية، لا خطة دفع لإزالة الإعلانات.

## 8. ملاحظة قانونية

يجب أن يملك المستخدمون المحتوى الذي يعالجونه أو أن يكون لديهم حقوق قانونية للقيام بذلك. تُقدَّم الخدمة **كما هي** دون أي ضمان. راجع صفحتي شروط الاستخدام وسياسة الخصوصية (متاحتان بالعربية والإنجليزية).
