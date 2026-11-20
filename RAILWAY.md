# النشر على Railway (العربية)

هذا المجلد جاهز للرفع على Railway. يحتوي على الكود المصدري + مجلد `out/` مبني + ملفات إعداد Railway.

## طريقة الرفع بالـ CLI (أسهل)

```bash
# 1) ثبّت Railway CLI مرة واحدة
npm install -g @railway/cli

# 2) سجّل الدخول (يفتح المتصفح)
railway login

# 3) ادخل مجلد المشروع
cd C:\Users\Abdau\Desktop\YourBrandName-Railway

# 4) أنشئ مشروع جديد (أو اختر مشروع موجود)
railway init

# 5) ارفع المجلد
railway up
```

بعدها افتح الرابط اللي هيطلعلك في لوحة Railway. قسم **Settings → Networking → Generate Domain** لو مفيش دومين.

## طريقة الرفع من GitHub

1. ارفع محتويات المجلد إلى مستودع GitHub جديد.
2. Railway Dashboard → **New Project → Deploy from GitHub repo** واختار المستودع.
3. Railway هيقرأ `railway.json` تلقائيًا:
   - Build: `npm ci && npm run build`
   - Start: `npm start`
   - Health check: `/`

## ملاحظات مهمة

- Railway بيوفّر متغير `PORT` تلقائيًا والسيرفر بيستخدمه. متحتاجش تحطه بنفسك.
- `server.js` سيرفر Node بدون أي حزم إضافية بيقدّم ملفات `out/`، وبيحوّل `/en` إلى `en.html` و`/how-it-works` إلى `how-it-works.html`.
- ملفات `public/_headers` و`_redirects` special بتاعة Cloudflare؛ Railway مش بيستخدمها. الإعلانات شغّالة لأننا أزلنا COEP أصلًا، فمفيش حاجة لترويسات.
- **قبل النشر النهائي** بدّل العناصر النائبة في `config/site.ts` و`config/ads.ts` (الاسم، الدومين، البريد، معرّف AdSense، ومعرّفات الوحدات) ثم اعمل `npm run build` تاني.

## أوامر فحص محلية

```bash
npm ci
npm test
npm run typecheck
npm run build
npm start        # http://localhost:3000
```
