import type { Locale } from '@/config/site';

/**
 * Professional, original articles for the [YourBrandName] site.
 *
 * Kept in this file (not in i18n/dictionaries.ts) so the article content
 * can grow without touching the shared dictionary, and so it never
 * conflicts with the editor files that are being deployed in parallel.
 * Every article is written in full in both languages: the English text
 * is a complete article in its own right, not a summary of the Arabic.
 * No brand name, domain or AdSense ID is invented here; where a name
 * is needed the existing [YourBrandName] placeholder is used.
 */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleFaqItem {
  q: string;
  a: string;
}

export interface ArticleContent {
  title: string;
  excerpt: string;
  readingMinutes: number;
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  ctaTitle: string;
  ctaText: string;
}

export interface ArticleImage {
  src: string;
  altAr: string;
  altEn: string;
  creditAr: string;
  creditEn: string;
}

export interface Article {
  slug: string;
  image: ArticleImage;
  ar: ArticleContent;
  en: ArticleContent;
}

export function getArticleContent(article: Article, locale: Locale): ArticleContent {
  return locale === 'ar' ? article.ar : article.en;
}

export function articlePath(article: Article, locale: Locale): string {
  return locale === 'ar' ? `/articles/${article.slug}` : `/en/articles/${article.slug}`;
}

export const ARTICLES: Article[] = [
  {
    slug: 'remove-watermark-without-losing-quality',
    image: {
      src: '/images/articles/remove-watermark-without-losing-quality.jpg',
      altAr: 'مساحة عمل احترافية لتحرير الفيديو فيها شاشات ولوحة مفاتيح وميكروفونات في استوديو',
      altEn: 'Professional video editing workspace with monitors, keyboard and microphones in a studio',
      creditAr: 'الصورة: Amar Preciado عبر Pexels',
      creditEn: 'Photo by Amar Preciado on Pexels',
    },
    ar: {
      title: 'كيف تزيل العلامة المائية من الفيديو دون فقدان الجودة',
      excerpt:
        'إزالة العلامة المائية تعني إعادة ترميز الفيديو، وإعادة الترميز تعني دائماً بعض الفقدان. هذا الدليل يشرح كيف تحافظ على أكبر قدر ممكن من الجودة: من اختيار النسخة الأصلية، إلى تحديد المنطقة بدقة، إلى إعدادات التصدير الصحيحة.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'لماذا تفقد الفيديوهات جودتها أصلاً؟',
          paragraphs: [
            'الفيديو الرقمي ليس صورة واحدة كبيرة، بل هو سلسلة من الإطارات المضغوطة بطريقة ذكية. عند ضغط الفيديو، يتخلص برنامج الترميز من التفاصيل التي يظن أن عينك لن تلاحظها، ويحتفظ بالمعلومات التي تشكل الصورة. لذلك فإن كل مرة تعيد فيها ترميز الفيديو، تخسر جزءاً صغيراً من التفاصيل، حتى لو استخدمت إعدادات جيدة. هذا الفقدان التراكمي هو السبب في أن الفيديو الذي تم تحميله وتنزيله عدة مرات يبدو باهتاً ومليئاً بالمربعات الصغيرة.',
            'إزالة العلامة المائية تزيد الأمر تعقيداً، لأن المرشح لا يكتفي بإعادة الترميز، بل يغيّر البكسلات نفسها في منطقة العلامة. فهو يستبدل العلامة ببكسلات مخمّنة من المناطق المجاورة، ثم يعيد ترميز الإطار كاملاً. إذا كانت المنطقة كبيرة أو التفاصيل خلفها معقدة، يصبح التخمين أصعب وتظهر آثار واضحة. لهذا السبب فإن فهم هذه العملية قبل أن تبدأ هو أهم خطوة للحفاظ على الجودة، وليس اختيار زر واحد في الأداة.',
          ],
        },
        {
          heading: 'ابدأ من أفضل نسخة متاحة لديك',
          paragraphs: [
            'القاعدة الأولى بسيطة: ابدأ من أعلى جودة تملكها. إذا كان لديك الفيديو الأصلي من الكاميرا أو من برنامج المونتاج قبل أن يضيف أحد علامة مائية، فاستخدمه. أما إذا كان لديك فقط نسخة مضغوطة تم تحميلها من الإنترنت، فاعمل بها، لكن توقع نتيجة أقل. كل ضغطة سابقة تترك أثرها في الملف، وكل مرة تعيد فيها الترميز تضيف طبقة جديدة من الفقدان فوق الطبقات السابقة.',
            'قبل أن ترفع الفيديو، تحقق من حجمه ودقته ومدته. ملف بدقة 1080p وحجم معقول يعطي المرشح تفاصيل كافية للعمل بها، بينما ملف صغير بدقة 360p لا يملك تفاصيل كافية أصلاً، فتبدو أي إزالة فيه واضحة مهما أحسنت التحديد. وإذا كان الفيديو طويلاً جداً، فكّر في قص الجزء الذي تحتاجه فعلاً قبل المعالجة، لأن ذلك يقلل وقت المعالجة والذاكرة المطلوبة، ويقلل احتمال حدوث خطأ في منتصف العمل.',
          ],
        },
        {
          heading: 'حدّد العلامة بدقة: لا أكثر ولا أقل',
          paragraphs: [
            'أكبر خطأ يرتكبه معظم الناس هو رسم مستطيل أكبر بكثير من العلامة نفسها، بحجة أن ذلك يضمن إزالتها بالكامل. في الحقيقة، كل بكسل إضافي داخل المستطيل هو بكسل سيتم استبداله بتخمين، أي أنك تمحو تفاصيل حقيقية من الفيديو دون أي فائدة. المستطيل المثالي يحيط بالعلامة بإحكام، مع هامش صغير جداً لا يتجاوز بضعة بكسلات، حتى لا تترك حواف العلامة ظاهرة ولا تمحو أكثر مما يجب.',
            'خذ وقتك في هذه الخطوة، وشغّل الفيديو وكبّره على الشاشة قبل أن تحدد المنطقة. العلامات الثابتة تظهر في نفس المكان طوال الفيديو، لكنها قد تبدو أصغر أو أكبر حسب الإطار الذي تتوقف عنده، لذلك شاهد عدة لحظات مختلفة قبل أن ترسم. وإذا كانت العلامة تتحرك أو تختفي وتظهر، فحدد المنطقة التي تغطيها في معظم الوقت، ولا تحاول تغطية كل موضع ممكن في مستطيل واحد ضخم، لأن ذلك يفسد الصورة أكثر مما يصلحها.',
          ],
        },
        {
          heading: 'إعدادات التصدير التي تحافظ على الجودة',
          paragraphs: [
            'عندما تعيد ترميز الفيديو، يحدد معدل البت جودة النتيجة أكثر من أي إعداد آخر. معدل بت منخفض يجعل الفيديو صغيراً، لكنه يضغط التفاصيل بقسوة ويجعل آثار الإزالة واضحة. لذلك اختر إعداد جودة متوازن: دقة الفيديو الأصلية نفسها، ومعدل بت قريب من المصدر، وتنسيق حديث مثل H.264 الذي يوازن بين الجودة والحجم بشكل جيد. لا ترفع الدقة عن الأصل، فذلك لا يضيف تفاصيل جديدة، بل يكبّر الملف فقط.',
            'الصوت أيضاً يستحق الانتباه. في معظم الحالات يكون من الأفضل نسخ مسار الصوت كما هو دون إعادة ترميزه، لأن الصوت لا يتأثر بالعلامة المائية أصلاً. إعادة ترميز الصوت دون داع تضيف فقداناً جديداً في مكان لا حاجة له. وإذا كان برنامجك يسمح بذلك، اختر خيار النسخ المباشر للصوت، واترك معدل الإطارات كما هو، لأن تغيير معدل الإطارات قد يجعل الحركة تبدو غير طبيعية دون أن يحسّن الصورة.',
          ],
        },
        {
          heading: 'راجع النتيجة إطاراً بإطار قبل المشاركة',
          paragraphs: [
            'بعد أن تنتهي المعالجة، لا تشارك الفيديو مباشرة. افتح النتيجة في مشغّل فيديو، وشاهدها من البداية إلى النهاية، ثم توقف عند الإطارات التي كانت فيها العلامة واضحة، وافحص المنطقة التي تمت معالجتها عن قرب. ابحث عن وميض خفيف على الحواف، أو بقعة ضبابية تتحرك مع المشهد، أو تفاصيل مفقودة في الخلفية. هذه العلامات الصغيرة هي التي تفرّق بين نتيجة احترافية ونتيجة تبدو معدّلة.',
            'إذا لاحظت مشكلة، فلا تعيد معالجة الفيديو الناتج مرة أخرى، بل ارجع إلى الملف الأصلي وعدّل المستطيل قليلاً ثم أعد المعالجة من جديد. إعادة معالجة ملف تمت معالجته سابقاً تعني ترميزاً ثانياً فوق الأول، وتضاعف الفقدان. احتفظ دائماً بالنسخة الأصلية في مكان آمن، واعتبر كل معالجة تجربة يمكنك تكرارها، لا خطوة لا رجعة فيها.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يمكن إزالة العلامة المائية دون أي فقدان في الجودة؟',
          a: 'لا، ليس بشكل كامل. إزالة العلامة تتطلب إعادة ترميز الفيديو، وإعادة الترميز تعني دائماً بعض الفقدان. لكن باتباع الخطوات في هذا المقال، يمكنك أن تجعل الفقدان صغيراً جداً بحيث لا يلاحظه معظم المشاهدين.',
        },
        {
          q: 'هل رفع دقة الفيديو بعد الإزالة يحسّن النتيجة؟',
          a: 'لا. رفع الدقة لا يعيد التفاصيل التي فقدت أثناء الضغط، بل يكبّر الصورة الموجودة فقط. الأفضل هو الحفاظ على دقة الفيديو الأصلية أثناء المعالجة والتصدير.',
        },
        {
          q: 'ما أفضل تنسيق للتصدير بعد إزالة العلامة؟',
          a: 'للمشاركة العامة، يعد MP4 مع ترميز H.264 خياراً آمناً ومتوافقاً مع معظم الأجهزة والمنصات. احتفظ بدقة الفيديو الأصلية ومعدل بت قريب من المصدر، وانسخ مسار الصوت دون إعادة ترميزه.',
        },
      ],
      ctaTitle: 'جرّب الإزالة على فيديوك الآن',
      ctaText: 'ارفع الفيديو، حدّد العلامة المائية بدقة، وابدأ المعالجة مباشرة في متصفحك دون رفع الملف إلى أي خادم.',
    },
    en: {
      title: 'How to Remove a Watermark from a Video Without Losing Quality',
      excerpt:
        'Removing a watermark means re-encoding the video, and re-encoding always costs some quality. This guide shows how to keep that loss as small as possible: from starting with the best source, to drawing a precise rectangle, to choosing the right export settings.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'Why videos lose quality in the first place',
          paragraphs: [
            'Digital video is not one big picture. It is a series of frames compressed in a clever way. When a video is compressed, the encoder discards details it believes your eye will not notice and keeps the information that forms the picture. Every time you re-encode a video, you lose a small part of those details, even with good settings. That cumulative loss is why a video that has been downloaded and re-uploaded several times looks dull and full of small blocky artefacts.',
            'Removing a watermark makes this harder, because the filter does more than re-encode. It changes the pixels in the watermark area itself, replacing the mark with pixels guessed from the surrounding area, and then re-encodes the whole frame. If the area is large or the detail behind it is complex, the guess becomes harder and the traces become visible. Understanding this process before you start is the most important step for preserving quality, not choosing a single button in the tool.',
          ],
        },
        {
          heading: 'Start with the best copy you have',
          paragraphs: [
            'The first rule is simple: start with the highest quality copy you own. If you have the original video from the camera or from your editing software before anyone added a watermark, use it. If you only have a compressed copy downloaded from the internet, work with it, but expect a weaker result. Every earlier compression leaves its mark on the file, and every re-encode adds another layer of loss on top of the previous ones.',
            'Before you upload the video, check its size, resolution and duration. A 1080p file of reasonable size gives the filter enough detail to work with, while a small 360p file has little detail to begin with, so any removal looks obvious no matter how well you draw the rectangle. If the video is very long, consider trimming the part you actually need before processing, because that reduces processing time and memory use and lowers the chance of an error in the middle of the job.',
          ],
        },
        {
          heading: 'Draw the rectangle precisely: no more, no less',
          paragraphs: [
            'The biggest mistake most people make is drawing a rectangle much larger than the watermark itself, on the grounds that it guarantees the mark is fully covered. In reality, every extra pixel inside the rectangle is a pixel that will be replaced by a guess, which means you are erasing real detail from the video for no benefit. The ideal rectangle hugs the watermark closely, with only a very small margin of a few pixels, so you do not leave the edges of the mark visible and do not erase more than you must.',
            'Take your time with this step, and play the video enlarged on screen before you draw. Fixed watermarks stay in the same place throughout the video, but they may look smaller or larger depending on the frame you stop at, so watch several different moments before you draw. If the mark moves, appears and disappears, cover the area where it spends most of its time, and do not try to cover every possible position with one huge rectangle, because that damages the picture more than it repairs it.',
          ],
        },
        {
          heading: 'Export settings that preserve quality',
          paragraphs: [
            'When you re-encode a video, the bitrate determines the result more than any other setting. A low bitrate makes the file small, but it compresses detail harshly and makes the traces of the removal obvious. Choose a balanced quality setting instead: the same resolution as the original, a bitrate close to the source, and a modern format such as H.264, which balances quality and file size well. Do not raise the resolution above the original, because that adds no new detail; it only makes the file bigger.',
            'Audio deserves attention too. In most cases it is best to copy the audio track as it is, without re-encoding it, because the audio is not affected by the watermark at all. Re-encoding the audio for no reason adds new loss where none is needed. If your software allows it, choose direct audio copy, and leave the frame rate as it is, because changing the frame rate can make motion look unnatural without improving the picture.',
          ],
        },
        {
          heading: 'Review the result frame by frame before sharing',
          paragraphs: [
            'After processing finishes, do not share the video straight away. Open the result in a video player, watch it from start to finish, then stop at the frames where the watermark was clearest and inspect the processed area closely. Look for a faint flicker on the edges, a blurry patch that moves with the scene, or missing detail in the background. These small signs are what separate a professional-looking result from one that looks edited.',
            'If you notice a problem, do not process the already processed video again. Go back to the original file, adjust the rectangle slightly, and run the process again from scratch. Processing a file that has already been processed means a second encode on top of the first, and doubles the loss. Always keep the original copy in a safe place, and treat every run as an experiment you can repeat, not as a step you cannot undo.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can a watermark be removed with no quality loss at all?',
          a: 'Not completely. Removing a watermark requires re-encoding the video, and re-encoding always costs some quality. By following the steps in this article, you can make that loss so small that most viewers will not notice it.',
        },
        {
          q: 'Does upscaling the video after removal improve the result?',
          a: 'No. Upscaling does not restore detail lost during compression; it only enlarges the picture you already have. It is better to keep the original resolution during processing and export.',
        },
        {
          q: 'What is the best export format after removing a watermark?',
          a: 'For general sharing, MP4 with H.264 encoding is a safe choice that works on most devices and platforms. Keep the original resolution and a bitrate close to the source, and copy the audio track without re-encoding it.',
        },
      ],
      ctaTitle: 'Try the removal on your video now',
      ctaText: 'Upload your video, mark the watermark precisely, and start processing directly in your browser, without uploading the file to any server.',
    },
  },
  {
    slug: 'what-is-delogo-filter',
    image: {
      src: '/images/articles/what-is-delogo-filter.jpg',
      altAr: 'طاقم تصوير يشغّل كاميرا سينمائية احترافية في موقع تصوير',
      altEn: 'Film crew operating a professional cinema camera on a film set',
      creditAr: 'الصورة: Cemrecan Yurtman عبر Pexels',
      creditEn: 'Photo by Cemrecan Yurtman on Pexels',
    },
    ar: {
      title: 'ما هو مرشح delogo وكيف يعمل؟',
      excerpt:
        'مرشح delogo هو الأداة التي تقف خلف معظم عمليات إزالة العلامات المائية الثابتة في الفيديو. هذا المقال يشرح ببساطة ما الذي يفعله المرشح، وكيف يخمّن البكسلات المفقودة، ومتى يعمل بشكل ممتاز، ومتى تظهر حدوده بوضوح.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'فكرة بسيطة لحل مشكلة صعبة',
          paragraphs: [
            'عندما تظهر علامة مائية على الفيديو، فإنها تغطي جزءاً من الصورة الأصلية، وهذا الجزء مفقود فعلاً من الملف. لا يوجد زر سحري يستطيع استرجاع بكسلات لم تُحفظ أصلاً. لذلك فإن أي أداة إزالة لا تستعيد الصورة الحقيقية، بل تحاول تخمين ما كان موجوداً تحت العلامة من خلال ما حولها. هذه هي الفكرة الأساسية التي يعمل عليها مرشح delogo، وهو مرشح معروف في برنامج المعالجة ffmpeg.',
            'بدلاً من أن يترك فراغاً أسود مكان العلامة، يأخذ delogo البكسلات المحيطة بها ويستخدمها لملء المنطقة بطريقة تبدو طبيعية. تخيّل أن شخصاً ما غطى جزءاً صغيراً من لوحة فنية بإصبعه، وأردت أن ترسم ما تحت الإصبع بالنظر إلى الألوان والخطوط حوله. هذا بالضبط ما يفعله المرشح، لكنه يفعله بسرعة كبيرة، إطاراً بعد إطار، لعشرات الإطارات في كل ثانية.',
          ],
        },
        {
          heading: 'كيف يبني المرشح الصورة من جديد؟',
          paragraphs: [
            'يعمل delogo في عدة خطوات متتابعة. أولاً، يحدد المستطيل الذي يحتوي العلامة المائية، وهو المستطيل الذي ترسمه أنت في الأداة. ثم يفحص البكسلات الموجودة حول حواف هذا المستطيل، ويبحث عن الأنماط المتكررة فيها، مثل لون السماء أو لون الجدار أو اتجاه خط في الخلفية. بعد ذلك يمدد هذه الأنماط إلى داخل المستطيل، بحيث تتلاقى الخطوط والألوان بطريقة مقنعة للعين.',
            'لجعل النتيجة أكثر سلاسة، لا يرسم المرشح حدوداً حادة بين المنطقة المعالجة وباقي الإطار، بل يمزج الحواف تدريجياً، حتى لا يظهر خط واضح حول المستطيل. كما أنه يأخذ في الاعتبار الإطارات السابقة واللاحقة، لأن الخلفية قد تتحرك قليلاً من إطار إلى آخر، والتخمين الذي يعمل في إطار واحد قد لا يعمل في الإطار التالي. هذا المزج الزمني هو ما يجعل النتيجة تبدو كفيديو حقيقي، لا كصورة ثابتة تم لصقها فوق الفيديو.',
          ],
        },
        {
          heading: 'متى يعمل delogo بشكل ممتاز؟',
          paragraphs: [
            'يعمل المرشح بأفضل شكل عندما تكون العلامة صغيرة، وثابتة في مكان واحد، وخلفها خلفية بسيطة ومتجانسة. فكر في شعار صغير في زاوية الفيديو، وخلفه سماء زرقاء أو جدار أبيض أو منطقة ضبابية. في هذه الحالات تكون البكسلات المحيطة متشابهة، فيصبح التخمين سهلاً، وتكاد النتيجة تكون غير مرئية للمشاهد العادي.',
            'كما يعمل بشكل جيد عندما تكون حركة الكاميرا بطيئة أو ثابتة، لأن الخلفية لا تتغير بسرعة، فيستطيع المرشح أن يعتمد على معلومات من إطارات كثيرة. وإذا كان الفيديو عالي الجودة أصلاً، فإن التفاصيل الكثيرة حول العلامة تساعد المرشح على بناء تخمين أدق. باختصار، كلما كان المشهد خلف العلامة أبسط وأكثر استقراراً، كانت النتيجة أنظف.',
          ],
        },
        {
          heading: 'متى تظهر حدود المرشح؟',
          paragraphs: [
            'تظهر حدود delogo بوضوح عندما تكون الخلفية معقدة، مثل وجه شخص أو نص متحرك أو مشهد مزدحم بالتفاصيل الدقيقة. في هذه الحالات لا يوجد نمط بسيط يمكن تمديده إلى داخل المستطيل، فيبدو التخمين ضبابياً أو مشوهاً، وقد تلاحظ بقعة ناعمة تتحرك مع المشهد. كما تظهر الحدود عندما تكون العلامة كبيرة جداً، لأن منطقة التخمين تصبح واسعة، وكلما كبرت المنطقة قلّت دقة التخمين.',
            'كذلك فإن العلامات المتحركة أو الوامضة تشكل تحدياً أكبر، لأن موضع العلامة يتغير باستمرار، والمرشح مصمم أساساً للعلامات الثابتة. إذا حاولت تغطية علامة متحركة بمستطيل ثابت، فستجد أن المستطيل يغطي مناطق لا تحتاج إلى معالجة في بعض الإطارات، ويترك أجزاء من العلامة ظاهرة في إطارات أخرى. في هذه الحالات يكون الحل الأفضل هو قص الجزء الذي تظهر فيه العلامة، أو قبول نتيجة أقل من مثالية.',
          ],
        },
        {
          heading: 'كيف تستخدم delogo بطريقة صحيحة؟',
          paragraphs: [
            'القاعدة العملية هي أن تحدد العلامة بأصغر مستطيل ممكن، وأن تختار نطاقاً زمنياً محدداً إذا كانت العلامة تظهر فقط في جزء من الفيديو. فتطبيق المرشح على الفيديو كاملاً عندما تكون العلامة موجودة في الدقيقة الأولى فقط يعني معالجة غير ضرورية لباقي الفيديو، وهذا يضيف فقداناً في الجودة دون أي فائدة. حدد البداية والنهاية بدقة، وستحصل على نتيجة أنظف ووقت معالجة أقصر.',
            'أخيراً، تذكّر أن delogo أداة تقنية لها حدود فيزيائية، وليست سحراً. النتيجة الجيدة تعتمد على جودة الفيديو الأصلي، وحجم العلامة، وبساطة الخلفية خلفها، ودقة المستطيل الذي ترسمه. جرّب على مقطع قصير أولاً، وراجع النتيجة إطاراً بإطار، ثم عدّل المستطيل والنطاق الزمني قبل أن تعالج الفيديو الكامل. هذه التجربة القصيرة توفر عليك وقتاً طويلاً وتجنبك خيبة أمل في النهاية.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يستعيد delogo الصورة الأصلية تحت العلامة؟',
          a: 'لا. الصورة الأصلية تحت العلامة مفقودة من الملف، ولا يمكن لأي مرشح استرجاعها. ما يفعله delogo هو تخمين البكسلات المفقودة من المناطق المجاورة، بحيث تبدو النتيجة طبيعية للعين.',
        },
        {
          q: 'هل يعمل delogo مع العلامات المتحركة؟',
          a: 'هو مصمم أساساً للعلامات الثابتة في مكان واحد. العلامات المتحركة أو الوامضة أصعب بكثير، وقد تحتاج إلى قص الجزء الذي تظهر فيه أو قبول نتيجة أقل دقة.',
        },
        {
          q: 'لماذا تظهر بقعة ضبابية بعد الإزالة أحياناً؟',
          a: 'لأن المرشح يخمّن البكسلات من المناطق المجاورة، فإذا كانت الخلفية معقدة أو مليئة بالتفاصيل، يصبح التخمين أقل دقة وتظهر بقعة ناعمة. تصغير المستطيل واختيار مقطع بخلفية أبسط يحسّنان النتيجة عادة.',
        },
      ],
      ctaTitle: 'جرّب مرشح delogo على فيديوك',
      ctaText: 'ارفع الفيديو، حدّد العلامة الثابتة، وشاهد كيف يملأ المرشح المنطقة من البكسلات المحيطة بها.',
    },
    en: {
      title: 'What Is the Delogo Filter and How Does It Work?',
      excerpt:
        'The delogo filter powers most fixed-watermark removal in video. This article explains in plain language what the filter does, how it guesses the missing pixels, when it works brilliantly, and when its limits become obvious.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'A simple idea for a hard problem',
          paragraphs: [
            'When a watermark appears on a video, it covers part of the original picture, and that part is genuinely missing from the file. There is no magic button that can bring back pixels that were never saved. Any removal tool therefore does not restore the true picture; it tries to guess what was underneath the mark from what surrounds it. That is the core idea behind the delogo filter, a well-known filter in the ffmpeg processing software.',
            'Instead of leaving a black hole where the mark was, delogo takes the pixels around it and uses them to fill the area in a way that looks natural. Imagine someone covering a small part of a painting with a finger, and you want to paint what is underneath by looking at the colours and lines around it. That is exactly what the filter does, but it does it very quickly, frame after frame, for dozens of frames every second.',
          ],
        },
        {
          heading: 'How the filter rebuilds the picture',
          paragraphs: [
            'Delogo works in several steps. First, it takes the rectangle that contains the watermark, the rectangle you draw in the tool. Then it examines the pixels around the edges of that rectangle, looking for repeated patterns in them, such as the colour of the sky, the colour of a wall, or the direction of a line in the background. After that, it extends those patterns into the rectangle, so the lines and colours meet in a way that looks convincing to the eye.',
            'To make the result smoother, the filter does not draw a sharp border between the processed area and the rest of the frame. It blends the edges gradually, so no clear line appears around the rectangle. It also takes previous and following frames into account, because the background may move slightly from one frame to the next, and a guess that works in one frame may not work in the next. This blending over time is what makes the result look like a real video, not a still picture pasted over the video.',
          ],
        },
        {
          heading: 'When does delogo work brilliantly?',
          paragraphs: [
            'The filter works best when the watermark is small, fixed in one place, and sits over a simple, uniform background. Think of a small logo in the corner of a video, with a blue sky, a white wall, or a blurry area behind it. In these cases the surrounding pixels are similar to each other, so the guess is easy, and the result is almost invisible to an ordinary viewer.',
            'It also works well when the camera moves slowly or stays still, because the background does not change quickly, so the filter can rely on information from many frames. If the video is high quality to begin with, the rich detail around the mark helps the filter build a more accurate guess. In short, the simpler and more stable the scene behind the mark, the cleaner the result.',
          ],
        },
        {
          heading: 'When do the limits show?',
          paragraphs: [
            'The limits of delogo become clear when the background is complex, such as a human face, moving text, or a scene crowded with fine detail. In these cases there is no simple pattern to extend into the rectangle, so the guess looks blurry or distorted, and you may notice a soft patch moving with the scene. The limits also show when the mark is very large, because the area to guess becomes wide, and the wider the area, the less accurate the guess.',
            'Moving or blinking watermarks are a bigger challenge too, because the position of the mark keeps changing, while the filter is designed mainly for fixed marks. If you try to cover a moving mark with a fixed rectangle, you will find that the rectangle covers areas that need no processing in some frames and leaves parts of the mark visible in others. In these cases the best solution is to trim the part where the mark appears, or to accept a less than perfect result.',
          ],
        },
        {
          heading: 'How to use delogo correctly',
          paragraphs: [
            'The practical rule is to mark the watermark with the smallest rectangle possible, and to choose a specific time range if the mark only appears in part of the video. Applying the filter to the whole video when the mark is only in the first minute means unnecessary processing for the rest of the video, which adds quality loss with no benefit. Set the start and end precisely, and you will get a cleaner result and a shorter processing time.',
            'Finally, remember that delogo is a technical tool with physical limits, not magic. A good result depends on the quality of the original video, the size of the mark, the simplicity of the background behind it, and the accuracy of the rectangle you draw. Try it first on a short clip, review the result frame by frame, then adjust the rectangle and the time range before you process the full video. That short experiment saves you a long time and spares you disappointment at the end.',
          ],
        },
      ],
      faq: [
        {
          q: 'Does delogo restore the original picture under the watermark?',
          a: 'No. The original picture under the watermark is missing from the file, and no filter can bring it back. What delogo does is guess the missing pixels from the surrounding area, so the result looks natural to the eye.',
        },
        {
          q: 'Does delogo work with moving watermarks?',
          a: 'It is designed mainly for watermarks fixed in one place. Moving or blinking watermarks are much harder, and may need you to trim the part where they appear or accept a less precise result.',
        },
        {
          q: 'Why does a blurry patch sometimes appear after removal?',
          a: 'Because the filter guesses pixels from the surrounding area, a complex or detail-rich background makes the guess less accurate and a soft patch appears. Making the rectangle smaller and choosing a clip with a simpler background usually improves the result.',
        },
      ],
      ctaTitle: 'Try the delogo filter on your video',
      ctaText: 'Upload your video, mark the fixed watermark, and watch the filter fill the area from the pixels around it.',
    },
  },
  {
    slug: 'best-video-formats-settings-before-watermark-removal',
    image: {
      src: '/images/articles/best-video-formats-settings-before-watermark-removal.jpg',
      altAr: 'لقطة مقربة لكاميرا سينمائية احترافية تظهر إعدادات التحكم فيها',
      altEn: 'Close-up of a professional cinema camera showing its control settings',
      creditAr: 'الصورة: Uday Veeru عبر Pexels',
      creditEn: 'Photo by Uday Veeru on Pexels',
    },
    ar: {
      title: 'أفضل صيغ الفيديو وإعدادات التصدير قبل إزالة العلامة المائية',
      excerpt:
        'الصيغة والدقة ومعدل البت ومعدل الإطارات ليست تفاصيل تقنية جانبية، بل هي التي تحدد ما إذا كانت إزالة العلامة ستبدو نظيفة أم واضحة. هذا المقال يشرح أفضل الإعدادات قبل المعالجة، وكيف تصدّر فيديوك بطريقة تحافظ على جودته.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'لماذا تهم الإعدادات قبل أن تبدأ؟',
          paragraphs: [
            'كثير من الناس يركزون على زر الإزالة نفسه، وينسون أن الفيديو الذي يدخل إلى الأداة يحدد جودة الفيديو الذي يخرج منها. فإذا كان الملف الأصلي مضغوطاً بشدة أو بدقة منخفضة أو بمعدل بت ضعيف، فإن الأداة تعمل بمعلومات قليلة، ولا يمكن لأي مرشح أن يخترع تفاصيل غير موجودة. أما إذا كان الملف الأصلي غنياً بالتفاصيل، فإن المرشح يجد ما يكفي من البكسلات المجاورة ليبني تخميناً مقنعاً.',
            'لهذا السبب، فإن أفضل وقت لتحسين النتيجة هو قبل المعالجة، وليس بعدها. اختر النسخة الأفضل من الفيديو، وتأكد من أن صيغتها مدعومة، وأن دقتها مناسبة، وأن حجمها ضمن الحد المسموح. هذه الخطوات البسيطة تستغرق دقائق معدودة، لكنها تصنع فرقاً واضحاً في النتيجة النهائية، خاصة عندما تكون العلامة في منطقة مليئة بالتفاصيل.',
          ],
        },
        {
          heading: 'الصيغ المدعومة: MP4 وMOV وWEBM',
          paragraphs: [
            'تدعم الأداة ثلاثة تنسيقات شائعة: MP4 وMOV وWEBM، وذلك لسبب عملي. فهذه التنسيقات الثلاثة تغطي معظم الفيديوهات التي ينتجها الهاتف والكاميرا وبرامج المونتاج، وهي تنسيقات يفهمها المتصفح مباشرة دون برامج إضافية. أما التنسيقات القديمة أو النادرة، فقد تحتاج إلى تحويل قبل الرفع، لأن المتصفح قد لا يستطيع تشغيلها أصلاً.',
            'من بين هذه التنسيقات، يعد MP4 الخيار الأكثر أماناً لمعظم المستخدمين، لأنه متوافق مع كل الأجهزة والمنصات تقريباً، وحجمه معقول مقارنة بجودته. أما MOV فيأتي غالباً من أجهزة آبل، وقد يكون حجمه أكبر، لكنه يحمل جودة ممتازة إذا كان مصدره الكاميرا الأصلية. وWEBM خيار جيد للويب، لكنه أقل شيوعاً في الكاميرات. القاعدة هي: استخدم الصيغة الأصلية للفيديو إن أمكن، ولا تحوّل من صيغة إلى أخرى دون داع، لأن كل تحويل هو إعادة ترميز جديدة وفقدان جديد.',
          ],
        },
        {
          heading: 'الدقة: احتفظ بالأصلية، ولا ترفعها ولا تخفضها',
          paragraphs: [
            'الدقة هي عدد البكسلات في كل إطار، وهي تحدد كمية التفاصيل المتاحة للمرشح. فإذا كان الفيديو بدقة 1080p، فإن كل إطار يحتوي على أكثر من مليوني بكسل، وهذا يعطي المرشح معلومات كثيرة للعمل بها. أما إذا خفضت الدقة إلى 720p قبل المعالجة، فإنك تمحو ثلث التفاصيل تقريباً قبل أن تبدأ، وتصبح الإزالة أصعب وأوضح.',
            'في المقابل، رفع الدقة عن الأصل لا يضيف أي تفاصيل جديدة. فإذا كان الفيديو الأصلي بدقة 720p، ورفعته إلى 1080p، فإن البرنامج يكبّر البكسلات الموجودة فقط، ولا يخلق تفاصيل لم تكن موجودة. النتيجة هي ملف أكبر حجماً بنفس الجودة تقريباً، ووقت معالجة أطول دون فائدة. لذلك احتفظ بدقة الفيديو الأصلية تماماً، واترك مهمة الحفاظ على الجودة لإعدادات معدل البت والترميز.',
          ],
        },
        {
          heading: 'معدل البت ومعدل الإطارات: التوازن الصحيح',
          paragraphs: [
            'معدل البت هو كمية البيانات المخصصة لكل ثانية من الفيديو، وهو العامل الأهم في جودة الصورة بعد الدقة. فمعدل بت منخفض يعني ضغطاً قاسياً وتفاصيل مفقودة ومربعات ظاهرة في الصورة، بينما معدل بت مرتفع يعني تفاصيل أكثر وحجم ملف أكبر. عند التصدير، اختر معدل بت قريباً من معدل بت الفيديو الأصلي، ولا تخفضه كثيراً بحجة تصغير الملف، لأن ذلك يجعل آثار الإزالة أوضح بكثير.',
            'أما معدل الإطارات، فهو عدد الصور في كل ثانية، وعادة ما يكون 24 أو 30 أو 60 إطاراً في الثانية. احتفظ بمعدل الإطارات الأصلي كما هو، لأن تغييره قد يجعل الحركة تبدو متقطعة أو غير طبيعية، دون أن يحسّن جودة الصورة. وإذا كان الفيديو بمعدل 60 إطاراً في الثانية، فتوقع أن تكون المعالجة أبطأ، لأن عدد الإطارات التي يجب معالجتها ضعف عددها في فيديو بمعدل 30 إطاراً. في هذه الحالة، قد يكون من الأفضل قص المقطع إلى الجزء الذي تحتاجه فقط.',
          ],
        },
        {
          heading: 'قائمة تحقق سريعة قبل أن ترفع الفيديو',
          paragraphs: [
            'قبل أن ترفع الفيديو، تأكد من ثلاث نقاط: أولاً، أن الصيغة مدعومة، وأن الملف ليس تالفاً ويعمل في مشغّل الفيديو على جهازك. ثانياً، أن حجم الملف أقل من 150 ميجابايت، وهو الحد الأقصى للأداة، وأن المدة معقولة، لأن الملفات الطويلة جداً تستهلك ذاكرة كبيرة وقد تفشل على الهاتف. ثالثاً، أن لديك نسخة احتياطية من الملف الأصلي في مكان آمن، حتى إذا حدث خطأ أثناء المعالجة.',
            'إذا كان الملف كبيراً جداً، فكّر في قصه إلى الجزء الذي تظهر فيه العلامة فقط، أو في تصدير نسخة أقصر من برنامج المونتاج قبل الرفع. وإذا كان الملف بصيغة غير مدعومة، حوّله إلى MP4 باستخدام برنامج موثوق، واختر إعداد جودة عالية أثناء التحويل، حتى لا تخسر الكثير من التفاصيل قبل أن تبدأ. هذه الخطوات التحضيرية القصيرة هي الفرق بين نتيجة نظيفة ونتيجة مخيبة.',
          ],
        },
      ],
      faq: [
        {
          q: 'ما أفضل صيغة لرفع الفيديو إلى الأداة؟',
          a: 'استخدم الصيغة الأصلية للفيديو إن أمكن، ويفضل MP4 لتوافقه الواسع. لا تحوّل من صيغة إلى أخرى دون داع، لأن كل تحويل يعني إعادة ترميز وفقداناً إضافياً في الجودة.',
        },
        {
          q: 'هل يجب أن أرفع دقة الفيديو قبل الإزالة؟',
          a: 'لا. رفع الدقة لا يضيف تفاصيل جديدة، بل يكبّر البكسلات الموجودة فقط. احتفظ بدقة الفيديو الأصلية، وركّز على معدل بت مناسب وإعدادات تصدير جيدة.',
        },
        {
          q: 'لماذا يفشل رفع بعض الملفات الكبيرة؟',
          a: 'لأن المعالجة تتم داخل المتصفح، والذاكرة المتاحة محدودة، خاصة على الهاتف. الحد الأقصى هو 150 ميجابايت، والملفات الأكبر من 100 ميجابايت تحتاج إلى تأكيد صريح. جرّب مقطعاً أقصر أو ملفاً أصغر إذا واجهت مشكلة.',
        },
      ],
      ctaTitle: 'جهّز فيديوك وابدأ الإزالة',
      ctaText: 'تأكد من الصيغة والدقة والحجم، ثم ارفع الفيديو وحدّد العلامة وابدأ المعالجة في متصفحك.',
    },
    en: {
      title: 'The Best Video Formats, Resolution and Export Settings Before Watermark Removal',
      excerpt:
        'Format, resolution, bitrate and frame rate are not minor technical details. They decide whether watermark removal looks clean or obvious. This article explains the best settings before processing, and how to export your video in a way that preserves its quality.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'Why settings matter before you start',
          paragraphs: [
            'Many people focus on the removal button itself and forget that the video that goes into the tool decides the quality of the video that comes out. If the original file is heavily compressed, low resolution, or low bitrate, the tool works with little information, and no filter can invent detail that is not there. If the original file is rich in detail, the filter has enough neighbouring pixels to build a convincing guess.',
            'That is why the best time to improve the result is before processing, not after it. Choose the best version of the video, make sure its format is supported, its resolution is suitable, and its size is within the allowed limit. These simple steps take only a few minutes, but they make a clear difference in the final result, especially when the watermark sits in a detail-rich area.',
          ],
        },
        {
          heading: 'Supported formats: MP4, MOV and WEBM',
          paragraphs: [
            'The tool supports three common formats: MP4, MOV and WEBM, for a practical reason. These three formats cover most videos produced by phones, cameras and editing software, and browsers understand them directly without extra software. Older or rare formats may need converting before upload, because the browser may not be able to play them at all.',
            'Of these formats, MP4 is the safest choice for most users, because it works on almost every device and platform, and its size is reasonable for its quality. MOV usually comes from Apple devices, and it may be larger, but it carries excellent quality when it comes from the original camera. WEBM is a good choice for the web, but it is less common in cameras. The rule is: use the original format of the video when you can, and do not convert from one format to another without a reason, because every conversion is a new encode and a new loss.',
          ],
        },
        {
          heading: 'Resolution: keep the original, do not raise or lower it',
          paragraphs: [
            'Resolution is the number of pixels in each frame, and it decides how much detail is available to the filter. A 1080p video has more than two million pixels in every frame, which gives the filter a lot of information to work with. If you lower the resolution to 720p before processing, you erase roughly a third of the detail before you start, and the removal becomes harder and more obvious.',
            'Raising the resolution above the original, on the other hand, adds no new detail. If the original video is 720p and you upscale it to 1080p, the software only enlarges the pixels that are already there; it does not create detail that was not there. The result is a bigger file with almost the same quality, and a longer processing time with no benefit. Keep the original resolution exactly, and leave the job of preserving quality to the bitrate and encoding settings.',
          ],
        },
        {
          heading: 'Bitrate and frame rate: the right balance',
          paragraphs: [
            'Bitrate is the amount of data allocated to each second of video, and it is the most important factor in picture quality after resolution. A low bitrate means harsh compression, lost detail and visible blocks in the picture, while a high bitrate means more detail and a bigger file. When you export, choose a bitrate close to the bitrate of the original video, and do not lower it much just to make the file smaller, because that makes the traces of the removal much more obvious.',
            'Frame rate is the number of pictures per second, usually 24, 30 or 60 frames per second. Keep the original frame rate as it is, because changing it can make motion look choppy or unnatural without improving picture quality. If the video is 60 frames per second, expect processing to be slower, because there are twice as many frames to process as in a 30-frame-per-second video. In that case, it may be better to trim the clip to the part you actually need.',
          ],
        },
        {
          heading: 'A quick checklist before you upload',
          paragraphs: [
            'Before you upload the video, check three things. First, that the format is supported, and that the file is not damaged and plays in a video player on your device. Second, that the file size is below 150 MB, which is the limit of the tool, and that the duration is reasonable, because very long files use a lot of memory and may fail on a phone. Third, that you have a backup copy of the original file in a safe place, in case something goes wrong during processing.',
            'If the file is very large, consider trimming it to the part where the watermark appears, or exporting a shorter version from your editing software before upload. If the file is in an unsupported format, convert it to MP4 using trusted software, and choose a high quality setting during the conversion, so you do not lose much detail before you start. These short preparation steps are the difference between a clean result and a disappointing one.',
          ],
        },
      ],
      faq: [
        {
          q: 'What is the best format for uploading a video to the tool?',
          a: 'Use the original format of the video when you can, preferably MP4 for its wide compatibility. Do not convert from one format to another without a reason, because every conversion means re-encoding and extra quality loss.',
        },
        {
          q: 'Should I upscale the video before removal?',
          a: 'No. Upscaling adds no new detail; it only enlarges the pixels that are already there. Keep the original resolution, and focus on a suitable bitrate and good export settings.',
        },
        {
          q: 'Why do some large files fail to upload?',
          a: 'Because processing happens inside the browser, and the available memory is limited, especially on a phone. The maximum is 150 MB, and files over 100 MB need explicit confirmation. Try a shorter clip or a smaller file if you run into a problem.',
        },
      ],
      ctaTitle: 'Prepare your video and start the removal',
      ctaText: 'Check the format, resolution and size, then upload the video, mark the watermark and start processing in your browser.',
    },
  },
  {
    slug: 'common-mistakes-removing-watermarks',
    image: {
      src: '/images/articles/common-mistakes-removing-watermarks.jpg',
      altAr: 'محرر فيديو يعمل على شاشتين لتصحيح ألوان الفيديو',
      altEn: 'A video editor working on dual monitors for color correction',
      creditAr: 'الصورة: Ron Lach عبر Pexels',
      creditEn: 'Photo by Ron Lach on Pexels',
    },
    ar: {
      title: 'أخطاء شائعة عند إزالة العلامات المائية وكيف تتجنبها',
      excerpt:
        'معظم نتائج الإزالة السيئة لا تأتي من الأداة نفسها، بل من أخطاء بسيطة يرتكبها المستخدم قبل المعالجة وأثناءها. هذا المقال يجمع أكثر الأخطاء شيوعاً، من المستطيل الكبير إلى معالجة الفيديو المعالج، ويشرح كيف تتجنبها — مع تذكير مهم بأن تستخدم الأداة فقط مع المحتوى الذي تملكه أو لديك إذن واضح لتعديله.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'الخطأ الأول: مستطيل أكبر بكثير من العلامة',
          paragraphs: [
            'أكثر خطأ شيوعاً هو رسم مستطيل ضخم يغطي مساحة كبيرة حول العلامة، بحجة ضمان إزالتها بالكامل. النتيجة تكون عكسية تماماً: كل بكسل داخل المستطيل يتم استبداله بتخمين، فتمحو تفاصيل حقيقية من الفيديو دون داع، وتظهر بقعة ضبابية كبيرة وواضحة في المشهد. المستطيل الكبير لا يجعل الإزالة أفضل، بل يجعلها أوضح.',
            'الحل بسيط: حدّد العلامة بإحكام، مع هامش صغير جداً لا يتجاوز بضعة بكسلات. كبّر الفيديو على الشاشة قبل أن ترسم، وشاهد عدة إطارات مختلفة، لأن العلامة قد تبدو أكبر أو أصغر حسب الإطار. وإذا كنت غير متأكد من الحواف، فابدأ بمستطيل ضيق ثم وسّعه قليلاً في المحاولة الثانية، بدلاً من أن تبدأ بمستطيل واسع وتندم عليه.',
          ],
        },
        {
          heading: 'الخطأ الثاني: معالجة فيديو تمت معالجته من قبل',
          paragraphs: [
            'عندما لا تعجبك النتيجة الأولى، قد يغريك أن تعيد معالجة الفيديو الناتج مرة أخرى، على أمل أن تتحسن النتيجة. في الحقيقة، هذا يضاعف المشكلة. فالفيديو الناتج تم ترميزه مرة واحدة بالفعل، وإعادة معالجته تعني ترميزاً ثانياً فوق الأول، وفقداناً جديداً في الجودة، وآثاراً أكثر وضوحاً حول المنطقة المعالجة.',
            'القاعدة الصحيحة هي أن تعود دائماً إلى الملف الأصلي. احتفظ بالنسخة الأصلية في مكان آمن قبل أي معالجة، وإذا أردت تعديل المستطيل أو النطاق الزمني، فابدأ من الأصل من جديد. هذه العادة وحدها تحسّن نتائجك بشكل كبير، لأنها تمنع تراكم الفقدان من محاولة إلى أخرى، وتتيح لك تجربة إعدادات مختلفة دون أن تخسر جودة الفيديو الأصلي.',
          ],
        },
        {
          heading: 'الخطأ الثالث: تطبيق الإزالة على الفيديو كاملاً دون داع',
          paragraphs: [
            'إذا كانت العلامة تظهر فقط في أول دقيقة من فيديو مدته عشر دقائق، فإن تطبيق المرشح على الفيديو كاملاً يعني معالجة تسع دقائق لا تحتاج إلى أي معالجة. هذا يضيف فقداناً في الجودة ووقتاً طويلاً في المعالجة دون أي فائدة، وقد يسبب أخطاء في أجزاء من الفيديو لم تكن فيها أي مشكلة أصلاً.',
            'استخدم النطاق الزمني بذكاء: حدد بداية ونهاية الجزء الذي تظهر فيه العلامة فقط، واترك باقي الفيديو كما هو. وإذا كانت العلامة تظهر وتختفي في أوقات مختلفة، فقسّم العمل إلى مقاطع قصيرة، وعالج كل مقطع على حدة من الملف الأصلي. هذه الطريقة أبطأ في التحضير، لكنها أسرع في المعالجة وأنظف في النتيجة.',
          ],
        },
        {
          heading: 'الخطأ الرابع: تجاهل جودة المصدر وحجم الملف',
          paragraphs: [
            'يشتكي بعض المستخدمين من نتيجة ضبابية، بينما المشكلة الحقيقية هي أن الفيديو الأصلي كان ضبابياً أصلاً. فإذا كان الفيديو بدقة منخفضة أو مضغوطاً بشدة قبل الرفع، فإن الأداة تعمل بمعلومات قليلة، ولا يمكنها اختراع تفاصيل غير موجودة. كما أن الملفات الكبيرة جداً قد تفشل في المعالجة داخل المتصفح، خاصة على الهاتف، بسبب محدودية الذاكرة.',
            'قبل أن تلوم الأداة، تحقق من المصدر: هل الفيديو يعمل بشكل جيد في مشغّل الفيديو؟ هل دقته مناسبة؟ هل حجمه أقل من الحد الأقصى؟ إذا كان الجواب لا، فابدأ من نسخة أفضل، أو قص المقطع إلى الجزء الذي تحتاجه. وإذا كان الملف كبيراً جداً، فجرّب على جهاز حاسوب بدل الهاتف، وأغلق التطبيقات الأخرى أثناء المعالجة لتوفير الذاكرة.',
          ],
        },
        {
          heading: 'الخطأ الأهم: استخدام الأداة مع محتوى لا تملكه',
          paragraphs: [
            'هذا ليس خطأ تقنياً، بل خطأ قانوني وأخلاقي، وهو الأهم في هذا المقال. العلامة المائية توضع عادة لحماية حقوق صاحب المحتوى، وإزالتها من فيديو لا تملكه أو لا تملك إذناً واضحاً لتعديله قد تنتهك حقوق الملكية وشروط استخدام المنصة التي حصلت منها على الفيديو. استخدام الأداة مع محتوى الآخرين دون إذن قد يعرضك لمشاكل قانونية، وقد يؤدي إلى حذف حسابك أو محتواك.',
            'القاعدة واضحة وبسيطة: استخدم الأداة فقط مع المحتوى الذي تملكه، أو الذي لديك إذن واضح وكتابي من صاحبه لتعديله وإزالة علامته. إذا كنت تعمل لحساب عميل، فاطلب منه تأكيداً كتابياً بأن الفيديو ملكه أو أنه مخوّل لتعديله. وإذا كنت غير متأكد من حقوق فيديو ما، فلا تعالجه. الأداة صممت لمساعدتك على تنظيف فيديوهاتك الخاصة، وليس لإزالة حقوق الآخرين.',
          ],
        },
      ],
      faq: [
        {
          q: 'لماذا تظهر بقعة ضبابية كبيرة بعد الإزالة؟',
          a: 'غالباً لأن المستطيل كان أكبر بكثير من العلامة، فتم استبدال تفاصيل كثيرة بتخمين. جرّب مستطيلاً أضيق يحيط بالعلامة بإحكام، وابدأ من الملف الأصلي وليس من الفيديو المعالج.',
        },
        {
          q: 'هل يمكنني معالجة نفس الفيديو عدة مرات لتحسين النتيجة؟',
          a: 'يمكنك تكرار المحاولة، لكن ابدأ في كل مرة من الملف الأصلي، ولا تعالج الفيديو الناتج من محاولة سابقة. إعادة معالجة ملف معالج تضاعف فقدان الجودة.',
        },
        {
          q: 'هل يجوز إزالة العلامة من أي فيديو أجده على الإنترنت؟',
          a: 'لا. استخدم الأداة فقط مع المحتوى الذي تملكه أو لديك إذن واضح لتعديله. إزالة علامة من محتوى الآخرين دون إذن قد تنتهك حقوق الملكية وشروط استخدام المنصة.',
        },
      ],
      ctaTitle: 'عالج فيديوك بالطريقة الصحيحة',
      ctaText: 'تجنّب هذه الأخطاء، وابدأ من الملف الأصلي، وحدّد العلامة بدقة، ثم ابدأ المعالجة في متصفحك.',
    },
    en: {
      title: 'Common Mistakes When Removing Watermarks — and How to Avoid Them',
      excerpt:
        'Most bad removal results do not come from the tool itself, but from simple mistakes users make before and during processing. This article collects the most common mistakes — from oversized rectangles to re-processing an already processed video — and explains how to avoid them, with an important reminder to use the tool only on content you own or have permission to modify.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'Mistake 1: a rectangle far bigger than the mark',
          paragraphs: [
            'The most common mistake is drawing a huge rectangle that covers a large area around the watermark, on the grounds that it guarantees the mark is fully removed. The result is the opposite: every pixel inside the rectangle is replaced by a guess, so you erase real detail from the video for no reason, and a large blurry patch appears clearly in the scene. A bigger rectangle does not make the removal better; it makes it more obvious.',
            'The fix is simple: hug the mark closely, with only a very small margin of a few pixels. Enlarge the video on screen before you draw, and watch several different frames, because the mark may look bigger or smaller depending on the frame. If you are unsure about the edges, start with a tight rectangle and widen it slightly on the second try, instead of starting wide and regretting it.',
          ],
        },
        {
          heading: 'Mistake 2: processing a video that was already processed',
          paragraphs: [
            'When you do not like the first result, it is tempting to process the output video again, hoping the result will improve. In reality, this doubles the problem. The output video has already been encoded once, and processing it again means a second encode on top of the first, new quality loss, and more visible traces around the processed area.',
            'The correct rule is to always go back to the original file. Keep the original copy in a safe place before any processing, and if you want to adjust the rectangle or the time range, start again from the original. This single habit improves your results a lot, because it prevents loss from accumulating from one attempt to the next, and lets you try different settings without losing the quality of the original video.',
          ],
        },
        {
          heading: 'Mistake 3: applying removal to the whole video for no reason',
          paragraphs: [
            'If the watermark only appears in the first minute of a ten-minute video, applying the filter to the whole video means processing nine minutes that need no processing at all. That adds quality loss and a long processing time with no benefit, and it may cause errors in parts of the video that had no problem to begin with.',
            'Use the time range wisely: set the start and end of the part where the mark appears, and leave the rest of the video as it is. If the mark appears and disappears at different times, split the work into short clips, and process each clip separately from the original file. This method is slower to prepare, but faster to process and cleaner in the result.',
          ],
        },
        {
          heading: 'Mistake 4: ignoring source quality and file size',
          paragraphs: [
            'Some users complain about a blurry result, while the real problem is that the original video was blurry to begin with. If the video is low resolution or heavily compressed before upload, the tool works with little information, and it cannot invent detail that is not there. Very large files may also fail to process inside the browser, especially on a phone, because memory is limited.',
            'Before you blame the tool, check the source: does the video play well in a video player? Is its resolution suitable? Is its size below the maximum? If the answer is no, start from a better copy, or trim the clip to the part you need. If the file is very large, try a computer instead of a phone, and close other apps during processing to free up memory.',
          ],
        },
        {
          heading: 'The most important mistake: using the tool on content you do not own',
          paragraphs: [
            'This is not a technical mistake; it is a legal and ethical one, and it is the most important in this article. A watermark is usually placed to protect the rights of the content owner, and removing it from a video you do not own, or do not have clear permission to modify, may violate copyright and the terms of use of the platform where you got the video. Using the tool on other people’s content without permission may expose you to legal problems, and may lead to your account or content being removed.',
            'The rule is clear and simple: use the tool only on content you own, or that you have clear written permission from its owner to modify and remove the mark from. If you are working for a client, ask them for written confirmation that the video is theirs or that they are authorised to modify it. If you are not sure about the rights to a video, do not process it. The tool was built to help you clean up your own videos, not to remove other people’s rights.',
          ],
        },
      ],
      faq: [
        {
          q: 'Why does a large blurry patch appear after removal?',
          a: 'Usually because the rectangle was much bigger than the mark, so a lot of detail was replaced by guesses. Try a tighter rectangle that hugs the mark closely, and start from the original file, not from the processed video.',
        },
        {
          q: 'Can I process the same video several times to improve the result?',
          a: 'You can repeat the attempt, but start each time from the original file, and do not process the output of a previous attempt. Re-processing a processed file doubles the quality loss.',
        },
        {
          q: 'Is it allowed to remove the watermark from any video I find online?',
          a: 'No. Use the tool only on content you own or have clear permission to modify. Removing a mark from other people’s content without permission may violate copyright and the terms of the platform.',
        },
      ],
      ctaTitle: 'Process your video the right way',
      ctaText: 'Avoid these mistakes, start from the original file, mark the watermark precisely, then start processing in your browser.',
    },
  },
  {
    slug: 'watermark-removal-vs-cropping-and-blur',
    image: {
      src: '/images/articles/watermark-removal-vs-cropping-and-blur.jpg',
      altAr: 'لقطة مقربة لواجهة برنامج مونتاج تعرض خطاً زمنياً للفيديو',
      altEn: 'Close-up of a video editing software interface showing a timeline',
      creditAr: 'الصورة: Alex Fu عبر Pexels',
      creditEn: 'Photo by Alex Fu on Pexels',
    },
    ar: {
      title: 'إزالة العلامة المائية أم قصّها أم تمويهها؟ متى تختار كل طريقة',
      excerpt:
        'الإزالة بالملء ليست الطريقة الوحيدة للتعامل مع علامة مائية؛ أحياناً يكون القصّ أنظف، وأحياناً يكون التمويه أسرع. هذا المقال يقارن بين الطرق الثلاث بصراحة، ويساعدك على اختيار الطريقة الصحيحة لفيديوك قبل أن تبدأ.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'ثلاث طرق، وهدف واحد',
          paragraphs: [
            'عندما تواجه علامة مائية في فيديو تملكه، يكون أمامك ثلاث طرق للتخلص منها: إزالتها بالملء، أي إعادة بناء البكسلات تحتها؛ أو تمويهها، أي تغطيتها ببقعة ضبابية؛ أو قصّها، أي إزالة الجزء من الإطار الذي توجد فيه نهائياً. كل طريقة تغيّر الفيديو بطريقة مختلفة، واختيار الطريقة الخاطئة يكلفك جودة أو تأطيراً أو مظهراً احترافياً.',
            'كثير من الناس يختارون أول طريقة يسمعون عنها دون مقارنة، ثم يتفاجأون بالنتيجة. فمن يموّه علامة في فيديو سينشره علناً يكتشف أن التمويه نفسه يلفت النظر أكثر من العلامة. ومن يقصّ علامة في منتصف الإطار يخسر جزءاً مهماً من الصورة. لذلك فإن دقائق قليلة من المقارنة قبل أن تبدأ توفر عليك ساعات من إعادة العمل.',
          ],
        },
        {
          heading: 'الإزالة بالملء: الأنظف في معظم الحالات',
          paragraphs: [
            'الإزالة بالملء، وهي ما يفعله مرشح delogo، تعيد بناء البكسلات تحت العلامة من المناطق المجاورة لها، فتختفي العلامة ويبقى الإطار كاملاً بأبعاده الأصلية. هذه هي الطريقة الوحيدة من الثلاث التي تحافظ على تكوين الصورة كما هو، دون أن تقصّ شيئاً أو تترك بقعة واضحة.',
            'تعمل هذه الطريقة بأفضل شكل عندما تكون العلامة صغيرة وثابتة، وخلفها خلفية بسيطة ومتجانسة. في هذه الحالة تكون النتيجة شبه غير مرئية. أما ثمنها فهو إعادة ترميز الفيديو، وبعض الفقدان في الجودة، واحتمال ظهور بقعة ناعمة إذا كانت الخلفية معقدة. كما أنها تحتاج إلى تحديد دقيق: مستطيل صغير يحيط بالعلامة بإحكام، لا مستطيل ضخم يمحو تفاصيل بريئة.',
          ],
        },
        {
          heading: 'القصّ: الأسرع والأنظف عندما تكون العلامة على الحافة',
          paragraphs: [
            'إذا كانت العلامة في زاوية أو على حافة يمكنك الاستغناء عنها، فإن القصّ هو الخيار الأنظف والأسرع. فأنت لا تخمّن أي بكسلات ولا تترك أي بقعة؛ بل تزيل الجزء الذي فيه العلامة نهائياً، وتبقى جودة الجزء المتبقي من الصورة كما هي، باستثناء إعادة الترميز المعتادة.',
            'لكن للقصّ ثمن واضح: تفقد جزءاً من الصورة نهائياً، وتتغير أبعاد الفيديو. فإذا كانت العلامة فوق شريط سفلي فيه ترجمة أو نص مهم، أو فوق وجه شخص في طرف الإطار، فإن القصّ يدمر التكوين. لذلك تحقق من التأطير أولاً: شغّل الفيديو وتخيّل الإطار بعد القصّ، وإذا بقي كل شيء مهم داخل الصورة، فالقصّ هو الحل.',
          ],
        },
        {
          heading: 'التمويه: حل سريع بثمن واضح',
          paragraphs: [
            'التمويه أو التعتيم يغطي المنطقة ببقعة ضبابية أو بكسلات كبيرة تخفي العلامة عن العين. ميزته أنه سريع جداً، ويعمل حتى مع العلامات المتحركة، لأن البقعة الضبابية يمكن أن تتبع العلامة أو تغطي منطقة واسعة دون أن يهم ما خلفها. وهو الحل الوحيد العملي عندما يكون الهدف إخفاء معلومة حساسة بسرعة.',
            'أما عيبه فهو أنه واضح. فالبقعة الضبابية نفسها تلفت النظر، ويبدو واضحاً لكل مشاهد أن الفيديو معدل. لذلك لا يناسب التمويه فيديو تريد نشره بشكل احترافي، بل يناسب المسودات والفيديوهات الداخلية، أو الحالات التي يكون فيها إخفاء المعلومة هو الهدف نفسه، مثل رقم هاتف أو لوحة سيارة ظهرت بالخطأ في المشهد.',
          ],
        },
        {
          heading: 'كيف تختار في ثلاثين ثانية؟',
          paragraphs: [
            'اسأل نفسك ثلاثة أسئلة. أولاً: أين العلامة؟ إذا كانت على حافة يمكنك الاستغناء عنها، فقصّها. ثانياً: هل العلامة صغيرة وثابتة والخلفية بسيطة؟ إذا كان الجواب نعم، فأزلها بالملء. ثالثاً: هل تحتاج إلى إخفاء شيء بسرعة دون أن يهم مظهر الفيديو؟ إذا كان الجواب نعم، فموّهها.',
            'وإذا كان الفيديو سينشر علناً وكانت الجودة مهمة، فتجنّب التمويه تماماً، واختر بين الإزالة والقصّ. ويمكنك أحياناً الجمع بين طريقتين: قصّ جزء صغير من الحافة لتقليل حجم العلامة، ثم إزالة الباقي بالملء، فيعطي ذلك نتيجة أنظف من كل طريقة وحدها. وفي كل الحالات، جرّب على مقطع قصير أولاً، واحتفظ بالملف الأصلي، وقارن النتيجة بنفسك قبل أن تعالج الفيديو كاملاً.',
          ],
        },
      ],
      faq: [
        {
          q: 'أي طريقة تحافظ على جودة الفيديو أكثر؟',
          a: 'القصّ يحافظ على جودة الجزء المتبقي من الصورة لأنه لا يخمّن أي بكسلات، لكنه يفقد جزءاً من الإطار. أما الإزالة فتحافظ على الإطار كاملاً، لكنها تعيد ترميز الفيديو وتخمّن البكسلات تحت العلامة. لا توجد طريقة بلا ثمن، والاختيار الصحيح يعتمد على موضع العلامة وأهمية الجزء المحيط بها.',
        },
        {
          q: 'هل يمكن الجمع بين طريقتين؟',
          a: 'نعم، أحياناً. فقصّ جزء صغير من الحافة لتقليل حجم العلامة ثم إزالة الباقي بالملء قد يعطي نتيجة أنظف من كل طريقة وحدها. جرّب على مقطع قصير أولاً وقارن النتيجة قبل أن تعالج الفيديو كاملاً.',
        },
        {
          q: 'متى يكون التمويه هو الخيار الصحيح؟',
          a: 'عندما يكون الهدف إخفاء معلومة حساسة بسرعة — مثل رقم هاتف أو لوحة سيارة ظهرت بالخطأ — وليس تجميل الفيديو. في هذه الحالة يكون وضوح التمويه ميزة وليس عيباً، لأنه يوضح أن المعلومة أُخفيت عمداً.',
        },
      ],
      ctaTitle: 'جرّب الإزالة بالملء على فيديوك',
      ctaText: 'ارفع الفيديو، حدّد العلامة بدقة، وقارن النتيجة بنفسك — أو جرّب الفيديو التجريبي أولاً دون رفع أي ملف.',
    },
    en: {
      title: 'Remove, Crop, or Blur a Watermark? When to Choose Each Method',
      excerpt:
        'Fill removal is not the only way to deal with a watermark; sometimes cropping is cleaner, and sometimes blurring is faster. This article compares the three methods honestly and helps you pick the right one for your video before you start.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'Three methods, one goal',
          paragraphs: [
            'When you face a watermark in a video you own, you have three ways to get rid of it: remove it by filling, which rebuilds the pixels underneath it; blur it, which covers it with a hazy patch; or crop it, which removes the part of the frame it sits in for good. Each method changes the video in a different way, and choosing the wrong one costs you quality, framing, or a professional look.',
            'Many people pick the first method they hear about without comparing, then get surprised by the result. Someone who blurs a mark in a video they plan to publish discovers that the blur itself draws more attention than the mark did. Someone who crops a mark in the middle of the frame loses an important part of the picture. A few minutes of comparison before you start saves hours of redoing the work.',
          ],
        },
        {
          heading: 'Fill removal: the cleanest in most cases',
          paragraphs: [
            'Fill removal, which is what the delogo filter does, rebuilds the pixels under the watermark from the surrounding area, so the mark disappears and the frame keeps its original dimensions. It is the only one of the three that preserves the composition of the picture as it is, without cutting anything away or leaving an obvious patch.',
            'This method works best when the mark is small and fixed, with a simple, uniform background behind it. In that case the result is almost invisible. Its cost is re-encoding the video, some quality loss, and the chance of a soft patch if the background is complex. It also needs precise marking: a small rectangle that hugs the mark closely, not a huge rectangle that erases innocent detail.',
          ],
        },
        {
          heading: 'Cropping: the fastest and cleanest when the mark is on an edge',
          paragraphs: [
            'If the mark sits in a corner or on an edge you can live without, cropping is the cleanest and fastest choice. You guess no pixels and leave no patch; you simply remove the part that contains the mark, and the quality of the remaining picture stays as it is, apart from the usual re-encode.',
            'But cropping has an obvious cost: you lose part of the picture for good, and the video dimensions change. If the mark sits over a lower-third with subtitles or important text, or over a person’s face at the edge of the frame, cropping destroys the composition. So check the framing first: play the video and imagine the frame after the crop, and if everything important stays inside the picture, cropping is the answer.',
          ],
        },
        {
          heading: 'Blurring: a fast fix with an obvious price',
          paragraphs: [
            'Blurring or pixelating covers the area with a hazy patch or large pixels that hide the mark from the eye. Its advantage is speed, and it even works on moving marks, because the blurry patch can follow the mark or cover a wide area no matter what is behind it. It is the only practical option when the goal is to hide sensitive information quickly.',
            'Its drawback is that it is obvious. The blurry patch itself draws the eye, and every viewer can see the video was edited. So blurring does not suit a video you want to publish professionally; it suits drafts and internal videos, or cases where hiding the information is the goal itself, such as a phone number or a car plate that appeared in the scene by mistake.',
          ],
        },
        {
          heading: 'How to decide in thirty seconds',
          paragraphs: [
            'Ask yourself three questions. First: where is the mark? If it is on an edge you can give up, crop it. Second: is the mark small and fixed, with a simple background? If yes, remove it by filling. Third: do you need to hide something quickly without caring how the video looks? If yes, blur it.',
            'And if the video will be published and quality matters, avoid blurring entirely, and choose between removal and cropping. You can sometimes combine two methods: trim a small part of the edge to shrink the mark, then remove the rest by filling, which gives a cleaner result than either method alone. In all cases, try a short clip first, keep the original file, and compare the result yourself before you process the whole video.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which method preserves video quality best?',
          a: 'Cropping preserves the quality of the remaining picture because it guesses no pixels, but it loses part of the frame. Removal keeps the whole frame, but it re-encodes the video and guesses the pixels under the mark. No method is free; the right choice depends on where the mark sits and how important the area around it is.',
        },
        {
          q: 'Can I combine two methods?',
          a: 'Yes, sometimes. Trimming a small part of the edge to shrink the mark and then removing the rest by filling can give a cleaner result than either method alone. Try it on a short clip first and compare before you process the whole video.',
        },
        {
          q: 'When is blurring the right choice?',
          a: 'When the goal is to hide sensitive information quickly — such as a phone number or a car plate that appeared by mistake — rather than to beautify the video. In that case the visibility of the blur is a feature, not a flaw, because it shows the information was hidden on purpose.',
        },
      ],
      ctaTitle: 'Try fill removal on your video',
      ctaText: 'Upload your video, mark the watermark precisely, and compare the result yourself — or try the sample video first without uploading any file.',
    },
  },
  {
    slug: 'remove-watermark-from-your-own-videos',
    image: {
      src: '/images/articles/remove-watermark-from-your-own-videos.jpg',
      altAr: 'رجل يصوّر مدونة فيديو بالكاميرا في المنزل',
      altEn: 'Man recording a vlog indoors using a mirrorless camera on a tripod',
      creditAr: 'الصورة: Anna Shvets عبر Pexels',
      creditEn: 'Photo by Anna Shvets on Pexels',
    },
    ar: {
      title: 'كيف تزيل العلامة المائية من فيديوهاتك بالطريقة الصحيحة',
      excerpt:
        'إزالة العلامة من فيديوهاتك الخاصة حق مشروع، لكن الخط الفاصل بين فيديوك وفيديو الآخرين أدق مما يظن كثيرون. هذا المقال يشرح متى تملك الحق في الإزالة، ومتى تحتاج إلى إذن، وكيف تحمي نفسك قبل المعالجة.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'القاعدة الذهبية: فيديوك فقط',
          paragraphs: [
            'هذه الأداة صممت لتنظيف فيديوهاتك الخاصة، وليس فيديوهات الآخرين. فالعلامة المائية توضع عادة لحماية حقوق صاحب المحتوى، وإزالتها من فيديو لا تملكه أو لا تملك إذناً واضحاً لتعديله قد تنتهك حقوق الملكية وشروط استخدام المنصة التي حصلت منها على الفيديو.',
            'العواقب ليست نظرية. فقد يؤدي استخدام محتوى الآخرين دون إذن إلى حذف الفيديو، أو إنذار لحسابك على المنصة، أو مطالبة قانونية من صاحب الحقوق. لذلك فإن أول سؤال قبل أي معالجة ليس تقنياً، بل قانوني: هل هذا الفيديو ملكي، أو هل لدي إذن واضح لتعديله؟ إذا كان الجواب لا، فتوقف قبل أن تبدأ.',
          ],
        },
        {
          heading: 'متى تملك الحق في الإزالة؟',
          paragraphs: [
            'تملك الحق في الإزالة عندما يكون الفيديو من تصويرك أو إنتاجك، أو عندما دفعت مقابله وامتلكت حقوقه، أو عندما تعمل لحساب عميل يملك الفيديو وخوّلك كتابياً لتعديله. كما تملك الحق عندما يكون الفيديو في الملكية العامة، أو مرخّصاً برخصة تسمح بالتعديل، مثل بعض رخص المشاع الإبداعي.',
            'ومن الحالات الشائعة أيضاً فيديوهاتك القديمة التي تحمل علامة برنامج تجريبي استخدمته في المونتاج. فإذا كان المحتوى من تصويرك أو إنتاجك، فإن إزالة علامة البرنامج التجريبي منه أمر طبيعي، لأن العلامة ليست حقاً لشخص آخر، بل قيد من قيود نسخة تجريبية استخدمتها لإنتاج عملك الخاص.',
          ],
        },
        {
          heading: 'متى تحتاج إلى إذن؟',
          paragraphs: [
            'تحتاج إلى إذن عندما يكون الفيديو لشخص آخر، حتى لو كان متاحاً للمشاهدة مجاناً على الإنترنت. فالمشاهدة المجانية ليست إذناً بالتعديل. ومن ذلك مقاطع يوتيوب وتيك توك التي صورها آخرون، ونسخ المعاينة المائية من مواقع الصور والفيديو المدفوعة، فهذه النسخ تحمل علامة عمداً لإجبارك على شراء الترخيص، وإزالتها دون شراء هي سرقة لحق البائع.',
            'كذلك تحتاج إلى إذن عندما تعمل كمحرر على لقطات عميل دون أن يخوّلك صراحة بتعديلها، أو عندما يكون الفيديو مقتطعاً من فيلم أو برنامج تلفزيوني. ففي كل هذه الحالات يكون لشخص آخر حق في المحتوى، وإزالة علامته دون موافقته تعرّضك للمساءلة حتى لو لم تقصد أي ضرر.',
          ],
        },
        {
          heading: 'قائمة تحقق سريعة قبل المعالجة',
          paragraphs: [
            'قبل أن ترفع أي فيديو، أجب عن خمسة أسئلة: هل صورت هذا الفيديو أو أنتجته بنفسي؟ هل لدي إذن كتابي من صاحبه إن لم يكن لي؟ هل يسمح ترخيص الفيديو بالتعديل؟ هل لدي الملف الأصلي وليس نسخة مسروقة من الإنترنت؟ وهل سأحتفظ بالملف الأصلي في مكان آمن قبل المعالجة؟',
            'إذا كان جواب أي سؤال منها لا، فلا تعالج الفيديو. وإذا كنت تعمل لحساب عميل، فاطلب منه تأكيداً كتابياً — رسالة بريد إلكتروني تكفي — بأن الفيديو ملكه أو أنه مخوّل لتعديله. هذه الرسالة تحميك إذا سألك أحد لاحقاً عن مصدر الفيديو، وتثبت أنك تصرفت بحسن نية.',
          ],
        },
        {
          heading: 'ماذا تفعل إذا لم يكن الفيديو لك؟',
          paragraphs: [
            'إذا لم يكن الفيديو لك، فالطريق الصحيح هو أن تطلب من صاحبه نسخة نظيفة أو إذناً كتابياً بالتعديل. فكثير من صناع المحتوى يرسلون النسخة الأصلية دون علامة عندما يعرفون أنك ستستخدمها لهدف مشروع، مثل ترجمة أو مراجعة أو تعاون.',
            'أما إذا كان الفيديو من موقع مدفوع، فاشترِ الترخيص واحصل على النسخة النظيفة، فهي أرخص بكثير من أي مشكلة قانونية. وإذا كان الفيديو فيديوك على يوتيوب، فحمّل نسختك الأصلية من استوديو يوتيوب بدلاً من معالجة نسخة عليها علامة. وتجنّب تماماً مواقع "إزالة العلامة" المشبوهة التي تطلب تسجيل الدخول أو تحتفظ بملفاتك، فهي تعرّض خصوصيتك وحساباتك للخطر.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل إزالة العلامة من فيديو اشتريته قانونية؟',
          a: 'إذا اشتريت ترخيصاً يسمح بالتعديل، فنعم. لكن بعض التراخيص تسمح بالاستخدام دون تعديل، لذلك اقرأ شروط الترخيص قبل الإزالة، وتأكد من أن النسخة التي تشتريها هي النسخة النظيفة المخصصة للاستخدام المرخص.',
        },
        {
          q: 'ماذا عن فيديوهاتي القديمة التي عليها علامة برنامج تجريبي؟',
          a: 'إذا كان الفيديو من تصويرك أو ملكك، فإزالة علامة البرنامج التجريبي منه أمر طبيعي. احتفظ بالملف الأصلي وعالج نسخة منه، ولا تعيد معالجة الفيديو الناتج مرة أخرى.',
        },
        {
          q: 'هل يمكن أن يُحذف فيديوي من يوتيوب بعد إزالة العلامة؟',
          a: 'إذا كان الفيديو ملكك بالكامل فلا مشكلة. أما إذا كان المحتوى لشخص آخر، فقد يبلّغ صاحب الحقوق عن الفيديو، ويؤدي ذلك إلى إنذار أو حذف، حتى لو أزلت العلامة.',
        },
      ],
      ctaTitle: 'عالج فيديوهاتك الخاصة بثقة',
      ctaText: 'ارفع فيديوك الذي تملكه، حدّد العلامة، وابدأ المعالجة في متصفحك — دون رفع الملف إلى أي خادم.',
    },
    en: {
      title: 'How to Remove a Watermark from Your Own Videos the Right Way',
      excerpt:
        'Removing a watermark from your own videos is a legitimate right, but the line between your video and someone else’s video is thinner than many people think. This article explains when you have the right to remove a mark, when you need permission, and how to protect yourself before processing.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'The golden rule: your video only',
          paragraphs: [
            'This tool was built to clean up your own videos, not other people’s videos. A watermark is usually placed to protect the rights of the content owner, and removing it from a video you do not own, or do not have clear permission to modify, may violate copyright and the terms of use of the platform where you got the video.',
            'The consequences are not theoretical. Using other people’s content without permission may lead to the video being taken down, a strike on your platform account, or a legal claim from the rights owner. So the first question before any processing is not technical, but legal: is this video mine, or do I have clear permission to modify it? If the answer is no, stop before you start.',
          ],
        },
        {
          heading: 'When do you have the right to remove a mark?',
          paragraphs: [
            'You have the right to remove a mark when the video is something you filmed or produced, when you paid for it and own its rights, or when you work for a client who owns the video and authorised you in writing to modify it. You also have the right when the video is in the public domain, or licensed under a licence that allows modification, such as some Creative Commons licences.',
            'Another common case is your old videos that carry the watermark of a trial editing program. If the content is something you filmed or produced, removing the trial software’s mark from it is natural, because the mark is not someone else’s right; it is a limitation of a trial version you used to produce your own work.',
          ],
        },
        {
          heading: 'When do you need permission?',
          paragraphs: [
            'You need permission when the video belongs to someone else, even if it is free to watch online. Free viewing is not permission to modify. That includes YouTube and TikTok clips filmed by others, and watermarked preview copies from paid stock photo and video sites: those copies carry a mark on purpose to make you buy the licence, and removing it without buying is taking the seller’s right.',
            'You also need permission when you work as an editor on a client’s footage without being explicitly authorised to modify it, or when the video is cut from a film or a television programme. In all these cases someone else has a right in the content, and removing their mark without their agreement exposes you to trouble even if you meant no harm.',
          ],
        },
        {
          heading: 'A quick checklist before processing',
          paragraphs: [
            'Before you upload any video, answer five questions: did I film or produce this video myself? Do I have written permission from its owner if it is not mine? Does the video’s licence allow modification? Do I have the original file, not a copy taken from the internet? And will I keep the original file safe before processing?',
            'If the answer to any of these is no, do not process the video. If you work for a client, ask them for written confirmation — an email is enough — that the video is theirs or that they are authorised to modify it. That message protects you if someone later asks about the source of the video, and it proves you acted in good faith.',
          ],
        },
        {
          heading: 'What to do if the video is not yours',
          paragraphs: [
            'If the video is not yours, the right way is to ask its owner for a clean copy or written permission to modify it. Many creators send the original version without a mark when they know you will use it for a legitimate purpose, such as translation, review, or collaboration.',
            'If the video comes from a paid site, buy the licence and get the clean copy; it is far cheaper than any legal problem. If it is your own video on YouTube, download your original from YouTube Studio instead of processing a marked copy. And stay away from shady “watermark remover” sites that ask you to sign in or keep your files; they put your privacy and your accounts at risk.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is it legal to remove a watermark from a video I bought?',
          a: 'Yes, if you bought a licence that allows modification. But some licences allow use without modification, so read the licence terms before removing anything, and make sure the copy you buy is the clean copy meant for licensed use.',
        },
        {
          q: 'What about my old videos with a trial software watermark?',
          a: 'If the video is something you filmed or own, removing the trial software’s mark from it is natural. Keep the original file and process a copy of it, and do not re-process the resulting video again.',
        },
        {
          q: 'Can YouTube delete my video after I remove the watermark?',
          a: 'If the video is entirely yours, there is no problem. But if the content belongs to someone else, the rights owner may report the video, which can lead to a strike or a takedown, even if you removed the mark.',
        },
      ],
      ctaTitle: 'Process your own videos with confidence',
      ctaText: 'Upload a video you own, mark the watermark, and start processing in your browser — without uploading the file to any server.',
    },
  },
  {
    slug: 'remove-watermark-on-your-phone',
    image: {
      src: '/images/articles/remove-watermark-on-your-phone.jpg',
      altAr: 'امرأة تضبط هاتفاً ذكياً على حامل ثلاثي مع حاسوب محمول لإعداد تصوير فيديو',
      altEn: 'Woman adjusting a smartphone on a tripod with a laptop setup for video recording',
      creditAr: 'الصورة: Mizuno K عبر Pexels',
      creditEn: 'Photo by Mizuno K on Pexels',
    },
    ar: {
      title: 'إزالة العلامة المائية من الهاتف: دليل عملي خطوة بخطوة',
      excerpt:
        'لا تحتاج إلى حاسوب أو تطبيق لإزالة علامة مائية من فيديو؛ متصفح هاتفك يكفي. هذا الدليل يشرح الخطوات على الهاتف، وحدود الذاكرة التي يجب أن تعرفها، وحيلاً صغيرة تجعل النتيجة أنظف.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'نعم، يعمل من متصفح الهاتف مباشرة',
          paragraphs: [
            'لا تحتاج إلى تثبيت أي تطبيق لإزالة علامة مائية من فيديو على هاتفك. فالأداة تعمل داخل متصفح الهاتف — كروم أو سفاري — باستخدام تقنية WebAssembly، والفيديو يبقى على هاتفك طوال الوقت ولا يُرفع إلى أي خادم.',
            'كل ما تحتاجه هو اتصال بالإنترنت في البداية، لأن ملفات محرك المعالجة تُحمَّل من الإنترنت عند أول استخدام. أما الفيديو نفسه فلا يغادر جهازك أبداً، وهذا مهم على الهاتف خصوصاً، لأن كثيراً من تطبيقات إزالة العلامات ترفع فيديوك إلى خوادمها وتحتفظ به.',
          ],
        },
        {
          heading: 'جهّز المقطع قبل أن تبدأ',
          paragraphs: [
            'أهم خطوة على الهاتف هي تقصير المقطع قبل المعالجة. فإذا كانت العلامة تظهر في أول دقيقة من فيديو مدته عشر دقائق، فقصّ المقطع إلى الدقيقة المطلوبة من معرض هاتفك أو من تطبيق مونتاج مجاني قبل الرفع. هذا يقلل حجم الملف ووقت المعالجة والذاكرة المطلوبة بشكل كبير.',
            'وتأكد أيضاً من أن حجم الملف أقل من 150 ميجابايت، ويفضل أن يكون أقل من 100 ميجابايت على الهاتف، لأن الملفات الأكبر من ذلك تحتاج إلى تأكيد صريح وقد تكون بطيئة. وأغلق التطبيقات الأخرى أثناء المعالجة، وتأكد من أن بطارية هاتفك مشحونة، لأن المعالجة تستهلك طاقة وذاكرة.',
          ],
        },
        {
          heading: 'الخطوات على الهاتف',
          paragraphs: [
            'افتح الموقع من متصفح هاتفك، واضغط "اختيار ملف" ثم اختر الفيديو من معرض الصور أو من ملفات الهاتف. بعد تحميل الفيديو، شغّله وكبّره بملء الشاشة لتعثر على العلامة المائية بدقة، ثم اضغط "تحديد العلامة" وارسم المستطيل بإصبعك حول العلامة. كبّر الفيديو أولاً حتى تستطيع الرسم بدقة، فالإصبع أقل دقة من الفأرة.',
            'بعد تحديد المنطقة، اضبط نطاق الوقت إذا كانت العلامة تظهر في جزء محدد فقط من الفيديو، ثم اضغط "بدء المعالجة" وانتظر شريط التقدم. لا تغلق المتصفح ولا تقفل شاشة الهاتف أثناء المعالجة، وعندما تنتهي، اضغط "تنزيل الفيديو" وسيُحفظ ملف MP4 الناتج في مجلد التنزيلات على هاتفك.',
          ],
        },
        {
          heading: 'حدود الهاتف التي يجب أن تعرفها',
          paragraphs: [
            'ذاكرة الهاتف محدودة مقارنة بالحاسوب، لذلك قد تفشل معالجة الملفات الطويلة أو عالية الدقة أو الكبيرة جداً، أو تستغرق وقتاً طويلاً جداً. فإذا فشلت المعالجة، فالسبب غالباً هو نفاد الذاكرة، وليس خطأ في الفيديو نفسه.',
            'كما أن بعض المتصفحات على الهاتف تعمل بالوضع المتوافق أحادي الخيط، فيكون أبطأ من الحاسوب. لذلك إذا كان الفيديو طويلاً أو بدقة 4K، فالأفضل قص المقطع المطلوب أولاً، أو استخدام الحاسوب للمعالجة. ولا تقفل شاشة الهاتف أثناء المعالجة، لأن المتصفح قد يوقف المهمة عند قفل الشاشة.',
          ],
        },
        {
          heading: 'حيل صغيرة لنتيجة أنظف من الهاتف',
          paragraphs: [
            'ارسم المستطيل وأنت مكبّر الفيديو بملء الشاشة، فذلك يعوّض عن دقة الإصبع المحدودة، ويتيح لك إحاطة العلامة بإحكام دون أن تمحو تفاصيل زائدة. وإذا كانت العلامة صغيرة جداً، فجرّب على نسخة قصيرة أولاً قبل معالجة الفيديو كاملاً.',
            'واستخدم النطاق الزمني دائماً على الهاتف، فهو يختصر وقت المعالجة بشكل كبير. وراجع النتيجة على الهاتف قبل مشاركتها، واحتفظ بالفيديو الأصلي في معرض الصور، وعالج نسخة منه. فإذا لم تعجبك النتيجة، ارجع إلى الأصل وعدّل المستطيل قليلاً ثم أعد المحاولة، ولا تعالج الفيديو الناتج مرة أخرى.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل أحتاج إلى تثبيت تطبيق؟',
          a: 'لا. الأداة تعمل في متصفح الهاتف مباشرة، ولا تحتاج إلى أي تطبيق أو حساب. افتح الموقع وابدأ المعالجة فوراً.',
        },
        {
          q: 'لماذا تفشل المعالجة على الهاتف أحياناً؟',
          a: 'غالباً بسبب نفاد الذاكرة: الملف كبير أو طويل أو عالي الدقة. جرّب مقطعاً أقصر أو ملفاً أصغر، وأغلق التطبيقات الأخرى، أو استخدم الحاسوب.',
        },
        {
          q: 'هل يمكنني معالجة فيديو 4K من الهاتف؟',
          a: 'تقنياً نعم إذا كان حجمه أقل من الحد الأقصى، لكنه بطيء جداً وقد يفشل بسبب الذاكرة. الأفضل قص المقطع المطلوب أولاً أو استخدام الحاسوب.',
        },
      ],
      ctaTitle: 'جرّب من هاتفك الآن',
      ctaText: 'افتح الموقع من هاتفك، ارفع المقطع، وحدّد العلامة بإصبعك — دون تثبيت أي تطبيق.',
    },
    en: {
      title: 'Removing a Watermark on Your Phone: A Practical Step-by-Step Guide',
      excerpt:
        'You do not need a computer or an app to remove a watermark from a video; your phone browser is enough. This guide walks through the steps on a phone, the memory limits you should know, and small tricks that make the result cleaner.',
      readingMinutes: 6,
      sections: [
        {
          heading: 'Yes, it works straight from the phone browser',
          paragraphs: [
            'You do not need to install any app to remove a watermark from a video on your phone. The tool runs inside the phone browser — Chrome or Safari — using WebAssembly, and the video stays on your phone the whole time; it is never uploaded to any server.',
            'All you need is an internet connection at the start, because the processing engine files load from the internet on first use. The video itself never leaves your device, which matters on a phone especially, because many watermark-removal apps upload your video to their servers and keep it.',
          ],
        },
        {
          heading: 'Prepare the clip before you start',
          paragraphs: [
            'The most important step on a phone is to shorten the clip before processing. If the watermark appears in the first minute of a ten-minute video, trim the clip to that minute from your phone gallery or a free editing app before uploading. That cuts the file size, the processing time, and the memory needed by a large amount.',
            'Also make sure the file is below 150 MB, and preferably below 100 MB on a phone, because larger files need explicit confirmation and may be slow. Close other apps while processing, and make sure your phone battery is charged, because processing uses power and memory.',
          ],
        },
        {
          heading: 'The steps on a phone',
          paragraphs: [
            'Open the site from your phone browser, tap "Choose a file", and pick the video from your photo gallery or phone files. After the video loads, play it and enlarge it to fullscreen to find the watermark precisely, then tap "Select watermark" and draw the rectangle with your finger around the mark. Enlarge the video first so you can draw accurately, because a finger is less precise than a mouse.',
            'After marking the area, set the time range if the mark only appears in part of the video, then press "Start processing" and wait for the progress bar. Do not close the browser or lock the phone screen during processing. When it finishes, tap "Download video" and the resulting MP4 will be saved to the downloads folder on your phone.',
          ],
        },
        {
          heading: 'Phone limits you should know',
          paragraphs: [
            'Phone memory is limited compared to a computer, so processing very long, high-resolution, or very large files may fail, or take a very long time. If processing fails, the cause is usually running out of memory, not a problem with the video itself.',
            'Some phone browsers also run in single-thread compatibility mode, which is slower than a computer. So if the video is long or in 4K, it is better to trim the needed part first, or use a computer for the processing. And do not lock the phone screen during processing, because the browser may stop the job when the screen locks.',
          ],
        },
        {
          heading: 'Small tricks for a cleaner result from a phone',
          paragraphs: [
            'Draw the rectangle while the video is enlarged to fullscreen. That compensates for the limited precision of a finger, and lets you hug the mark closely without erasing extra detail. If the mark is very small, try a short copy first before you process the whole video.',
            'Always use the time range on a phone, because it shortens the processing time a lot. Review the result on your phone before sharing it, keep the original video in your gallery, and process a copy of it. If you do not like the result, go back to the original, adjust the rectangle slightly, and try again — and do not process the resulting video a second time.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need to install an app?',
          a: 'No. The tool works directly in the phone browser, with no app or account needed. Open the site and start processing right away.',
        },
        {
          q: 'Why does processing sometimes fail on a phone?',
          a: 'Usually because memory ran out: the file is large, long, or high resolution. Try a shorter clip or a smaller file, close other apps, or use a computer.',
        },
        {
          q: 'Can I process a 4K video from my phone?',
          a: 'Technically yes, if its size is below the maximum, but it is very slow and may fail because of memory. It is better to trim the needed part first or use a computer.',
        },
      ],
      ctaTitle: 'Try it from your phone now',
      ctaText: 'Open the site from your phone, upload the clip, and mark the watermark with your finger — without installing any app.',
    },
  },
  {
    slug: 'remove-tiktok-watermark',
    image: {
      src: '/images/articles/tiktok-watermark-removal.jpg',
      altAr: 'هاتف ذكي يعرض شعار تطبيق تيك توك',
      altEn: 'Smartphone displaying the TikTok app logo',
      creditAr: 'الصورة: Geri Tech عبر Pexels',
      creditEn: 'Photo by Geri Tech on Pexels',
    },
    ar: {
      title: 'كيف تزيل العلامة المائية من فيديو تيك توك؟',
      excerpt:
        'تيك توك يضيف علامة مائية متحركة تحمل الشعار واسم المستخدم، وتتنقل بين زوايا الفيديو — وهذا يجعل إزالتها أصعب من العلامة الثابتة. هذا المقال يشرح الطريقة الصحيحة لفيديوهاتك الخاصة، ومتى تكون الإزالة ممكنة ومتى لا تكون.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'كيف تبدو علامة تيك توك ولماذا تتحرك؟',
          paragraphs: [
            'عندما تحمّل فيديو من تيك توك، يضيف التطبيق علامة مائية تحمل شعار تيك توك واسم المستخدم، وتتنقل هذه العلامة بين زوايا الفيديو كل بضع ثوانٍ. فهي لا تبقى في مكان واحد، بل تقفز من الزاوية اليمنى العليا إلى اليسرى السفلى وهكذا طوال الفيديو.',
            'هذا التحرك مقصود. فهو يحمي صاحب الفيديو، ويصعّب إزالة العلامة، ويضمن ظهور اسم المستخدم في كل مكان ينتشر فيه الفيديو. لذلك فإن إزالة علامة تيك توك أصعب بكثير من إزالة علامة ثابتة في زاوية واحدة، وأي شرح يعدك بإزالة مثالية بضغطة واحدة يبالغ في الوعد.',
          ],
        },
        {
          heading: 'أفضل حل: ابدأ من الفيديو الأصلي قبل الرفع',
          paragraphs: [
            'أنظف حل على الإطلاق هو ألا تحتاج إلى الإزالة أصلاً. فإذا كان الفيديو فيديوك، فاحتفظ بالملف الأصلي الذي صورته قبل رفعه إلى تيك توك. هذا الملف لا يحمل أي علامة، وهو بجودة أعلى من النسخة التي يعيد تيك توك ضغطها عند التحميل.',
            'وهذه عادة تستحق أن تكتسبها: احتفظ دائماً بالنسخة الأصلية من كل فيديو تنشره، في مجلد منظم على جهازك أو على قرص احتياطي. فالنسخة الأصلية هي الحل لكل مشاكل العلامات المائية لاحقاً، سواء على تيك توك أو يوتيوب أو أي منصة أخرى.',
          ],
        },
        {
          heading: 'إزالة العلامة المتحركة: ما الذي يعمل فعلاً؟',
          paragraphs: [
            'إذا لم يكن لديك إلا نسخة تيك توك المحملة، فاعلم أن الإزالة ستكون جزئية. فمرشح delogo يعمل على مستطيل ثابت، بينما العلامة تتحرك. لذلك فإن الحل العملي هو رسم مستطيل يغطي المنطقة التي تقضي فيها العلامة معظم وقتها، أو معالجة مقاطع قصيرة تكون فيها العلامة في موضع واحد.',
            'والبديل الأنظف غالباً هو القصّ: إذا كانت العلامة تظهر على الحواف فقط، فقصّ شريطاً ضيقاً من الحافة التي تظهر فيها أكثر. هذا يفقدك جزءاً صغيراً من الصورة، لكنه يزيل العلامة نهائياً دون بقعة ضبابية. جرّب على مقطع قصير أولاً، وراجع النتيجة، وتوقع نتيجة مقبولة لا مثالية.',
          ],
        },
        {
          heading: 'احذر أدوات تنزيل تيك توك المشبوهة',
          paragraphs: [
            'تنتشر على الإنترنت مواقع وتطبيقات تعدك بتنزيل فيديوهات تيك توك دون علامة مائية، وكثير منها خطير. فبعضها يطلب تسجيل الدخول بحساب تيك توك الخاص بك، وبعضها يثبّت تطبيقات مشبوهة، وبعضها يحتفظ بالفيديوهات التي تنزلها على خوادمه.',
            'لا تدخل كلمة مرور تيك توك في أي موقع خارجي أبداً، ولا تثبّت تطبيقاً من مصدر غير موثوق. وإذا كنت تحتاج إلى نسخة من فيديوك الخاص، فحمّلها من التطبيق نفسه عبر زر المشاركة، ثم عالجها بأداة تعمل في متصفحك دون رفع الملف إلى خادم.',
          ],
        },
        {
          heading: 'خطوات عملية لفيديوك الخاص',
          paragraphs: [
            'أولاً، استخدم الملف الأصلي إن كان لديك. ثانياً، إذا لم يكن لديك إلا نسخة تيك توك، فحمّلها من التطبيق عبر زر المشاركة ثم "حفظ الفيديو". ثالثاً، شاهد الفيديو وحدد الزوايا التي تقضي فيها العلامة معظم وقتها. رابعاً، ارسم مستطيلاً يغطي مواضعها الرئيسية، أو قصّ الحافة التي تظهر فيها أكثر.',
            'خامساً، عالج مقطعاً قصيراً أولاً وراجع النتيجة إطاراً بإطار قبل معالجة الفيديو كاملاً. سادساً، لا تعيد معالجة الفيديو الناتج مرة أخرى، بل ارجع إلى نسخة تيك توك الأصلية في كل محاولة. وتذكّر دائماً: هذه الخطوات لفيديوهاتك الخاصة فقط، وليس لفيديوهات الآخرين.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يمكن إزالة علامة تيك توك نهائياً؟',
          a: 'إزالة كاملة ونظيفة صعبة، لأن العلامة تتحرك بين الزوايا. أفضل نتيجة تأتي من الفيديو الأصلي قبل رفعه إلى تيك توك، أو بقص الحواف التي تظهر فيها العلامة.',
        },
        {
          q: 'هل تنزيل فيديوهات الآخرين من تيك توك وإزالة علامتها مسموح؟',
          a: 'لا. هذه فيديوهات الآخرين، وإزالة علامتها دون إذن تنتهك حقوقهم وشروط تيك توك. استخدم الأداة مع فيديوهاتك فقط.',
        },
        {
          q: 'لماذا تتحرك العلامة أصلاً؟',
          a: 'لحماية صاحب الفيديو ولتصعيب إزالتها، ولتظهر اسم المستخدم في كل مكان ينتشر فيه الفيديو.',
        },
      ],
      ctaTitle: 'نظّف فيديو تيك توك الخاص بك',
      ctaText: 'ارفع نسختك الأصلية أو نسخة تيك توك الخاصة بك، وحدّد موضع العلامة، وابدأ المعالجة في متصفحك.',
    },
    en: {
      title: 'How to Remove the Watermark from a TikTok Video',
      excerpt:
        'TikTok adds a moving watermark with its logo and your username, and it jumps between the corners of the video — which makes removing it harder than a fixed mark. This article explains the right approach for your own videos, and when removal is possible and when it is not.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'What the TikTok watermark looks like, and why it moves',
          paragraphs: [
            'When you download a video from TikTok, the app adds a watermark with the TikTok logo and the username, and this mark jumps between the corners of the video every few seconds. It does not stay in one place; it hops from the top-right corner to the bottom-left and so on throughout the video.',
            'That movement is deliberate. It protects the video owner, makes the mark harder to remove, and keeps the username visible wherever the video spreads. That is why removing a TikTok watermark is much harder than removing a fixed mark in one corner, and any guide that promises a perfect removal with one click is exaggerating.',
          ],
        },
        {
          heading: 'The best fix: start from the original video before upload',
          paragraphs: [
            'The cleanest fix of all is not to need removal at all. If the video is yours, keep the original file you filmed before uploading it to TikTok. That file carries no mark, and its quality is higher than the copy TikTok re-compresses when you download it.',
            'This is a habit worth building: always keep the original version of every video you publish, in an organised folder on your device or on a backup drive. The original is the answer to every watermark problem later, on TikTok, YouTube, or any other platform.',
          ],
        },
        {
          heading: 'Removing a moving mark: what actually works?',
          paragraphs: [
            'If you only have the TikTok copy, know that the removal will be partial. The delogo filter works on a fixed rectangle, while the mark moves. So the practical fix is to draw a rectangle that covers the area where the mark spends most of its time, or to process short segments where the mark sits in one place.',
            'The cleaner alternative is often cropping: if the mark only appears on the edges, trim a narrow strip from the edge where it appears most. That loses a small part of the picture, but it removes the mark for good, with no blurry patch. Try a short clip first, review the result, and expect an acceptable result, not a perfect one.',
          ],
        },
        {
          heading: 'Beware of shady TikTok downloader tools',
          paragraphs: [
            'Many websites and apps on the internet promise to download TikTok videos without a watermark, and many of them are dangerous. Some ask you to sign in with your TikTok account, some install suspicious apps, and some keep the videos you download on their servers.',
            'Never enter your TikTok password on any external site, and never install an app from an untrusted source. If you need a copy of your own video, download it from the app itself through the share button, then process it with a tool that works in your browser without uploading the file to a server.',
          ],
        },
        {
          heading: 'Practical steps for your own video',
          paragraphs: [
            'First, use the original file if you have it. Second, if you only have the TikTok copy, download it from the app through the share button and "Save video". Third, watch the video and note the corners where the mark spends most of its time. Fourth, draw a rectangle that covers its main positions, or crop the edge where it appears most.',
            'Fifth, process a short clip first and review the result frame by frame before you process the whole video. Sixth, do not re-process the resulting video; go back to the TikTok copy for every attempt. And always remember: these steps are for your own videos only, not for other people’s videos.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can a TikTok watermark be removed completely?',
          a: 'A fully clean removal is hard, because the mark moves between the corners. The best result comes from the original video before it was uploaded to TikTok, or from cropping the edges where the mark appears.',
        },
        {
          q: 'Is it allowed to download other people’s TikTok videos and remove their mark?',
          a: 'No. Those are other people’s videos, and removing their mark without permission violates their rights and TikTok’s terms. Use the tool only on your own videos.',
        },
        {
          q: 'Why does the mark move at all?',
          a: 'To protect the video owner, to make removal harder, and to keep the username visible wherever the video spreads.',
        },
      ],
      ctaTitle: 'Clean up your own TikTok video',
      ctaText: 'Upload your original copy or your own TikTok copy, mark where the watermark sits, and start processing in your browser.',
    },
  },
  {
    slug: 'remove-youtube-watermark-logo',
    image: {
      src: '/images/articles/youtube-watermark-removal.jpg',
      altAr: 'شعار يوتيوب على شاشة حاسوب محمول في مكان مظلم',
      altEn: 'YouTube logo displayed on a laptop screen in a dark setting',
      creditAr: 'الصورة: Zulfugar Karimov عبر Pexels',
      creditEn: 'Photo by Zulfugar Karimov on Pexels',
    },
    ar: {
      title: 'العلامة المائية في فيديوهات يوتيوب: ما هي وكيف تزيلها من فيديوهاتك؟',
      excerpt:
        'ليست كل "علامة يوتيوب" علامة حقيقية في الفيديو؛ بعضها زر اشتراك يضاف من الإعدادات، وبعضها شعار حرقه صانع الفيديو في المقطع نفسه. هذا المقال يفرّق بين الأنواع الثلاثة، ويشرح الحل الصحيح لكل نوع.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'ثلاثة أنواع من العلامات يخلط بينها الناس',
          paragraphs: [
            'عندما يبحث الناس عن "إزالة علامة يوتيوب"، فإنهم يقصدون غالباً واحداً من ثلاثة أشياء مختلفة. الأول هو زر الاشتراك الذي يظهر في زاوية الفيديو، وهو ما يسمى "العلامة المائية للقناة" في إعدادات يوتيوب. والثاني هو شعار حرقه صانع الفيديو في المقطع نفسه أثناء المونتاج. والثالث هو شعار يوتيوب الذي يظهر على مقاطع شورتس المحملة.',
            'كل نوع من هذه الأنواع له حل مختلف تماماً، وخلطها ببعضها هو سبب معظم الإحباط. فزر الاشتراك يُزال من الإعدادات في ثوانٍ، بينما الشعار المحروق يحتاج إلى أداة إزالة، وشعار شورتس المتحرك أصعب من الاثنين. لذلك حدد أولاً أي نوع تواجهه قبل أن تبحث عن حل.',
          ],
        },
        {
          heading: 'علامة القناة: أزلها من الإعدادات لا من الفيديو',
          paragraphs: [
            'زر الاشتراك الذي يظهر في زاوية فيديوهاتك ليس جزءاً من الفيديو نفسه، بل طبقة يضيفها يوتيوب فوق المشغل، وتتحكم فيها من استوديو يوتيوب: التخصيص، ثم العلامة التجارية، ثم إزالة العلامة المائية. وبهذه الخطوة يختفي الزر من كل فيديوهاتك فوراً، دون إعادة رفع أو إعادة ترميز أو أي فقدان في الجودة.',
            'هذا هو الحل الصحيح الوحيد لعلامة القناة، ولا تحتاج معه إلى أي أداة إزالة. فإذا كان ما يزعجك هو زر الاشتراك في فيديوهاتك، فلا تعالج الفيديو أصلاً؛ بل أزل العلامة من الإعدادات، وستختفي من كل مكان في الحال.',
          ],
        },
        {
          heading: 'الشعار المحروق في الفيديو: الحل بالملء أو القصّ',
          paragraphs: [
            'أما إذا كان الشعار محروقاً في الفيديو نفسه — مثل شعار قديم أضفته في المونتاج إلى كل فيديوهاتك — فإن الحل يكون بأداة إزالة. فإذا كان الشعار صغيراً وثابتاً وخلفه خلفية بسيطة، فإن مرشح delogo يزيله بنتيجة نظيفة. وإذا كان على الحافة، فقد يكون القصّ أنظف وأسرع.',
            'لكن الحل الأنظف من الإزالة نفسها هو إعادة التصدير: إذا كان لديك مشروع المونتاج الأصلي، فأعد تصدير الفيديو دون الشعار، وستحصل على نسخة نظيفة بجودة كاملة دون أي تخمين للبكسلات. لذلك احتفظ دائماً بملفات مشاريع المونتاج، واعتبر الإزالة خطة بديلة لا خطة أولى.',
          ],
        },
        {
          heading: 'فيديوهات شورتس المحملة: علامة متحركة',
          paragraphs: [
            'مقاطع يوتيوب شورتس المحملة تحمل شعار يوتيوب الذي يتحرك في الفيديو، مثل علامة تيك توك تماماً. وهذا يجعل إزالته صعبة، لأن مرشح الإزالة يعمل على مستطيل ثابت بينما العلامة تتحرك. لذلك فإن أفضل حل هو استخدام الملف الأصلي قبل رفعه إلى يوتيوب.',
            'وإذا لم يكن لديك إلا نسخة شورتس المحملة، فجرّب القصّ إذا كانت العلامة على الحواف، أو ارسم مستطيلاً يغطي مواضعها الرئيسية وتقبل نتيجة مقبولة لا مثالية. وتذكّر أن هذه الخطوات لفيديوهاتك الخاصة فقط، وليس لمقاطع الآخرين.',
          ],
        },
        {
          heading: 'قاعدة ذهبية: الملف الأصلي دائماً أفضل',
          paragraphs: [
            'في كل أنواع العلامات، يبقى الملف الأصلي هو الحل الأفضل. فإعادة التصدير من مشروع المونتاج دون الشعار تعطيك فيديو نظيفاً بجودة كاملة، بينما الإزالة مهما أحسنتها تعني إعادة ترميز وتخميناً للبكسلات. لذلك اجعل الاحتفاظ بالملفات الأصلية ومشاريع المونتاج عادة ثابتة في عملك.',
            'وإذا اضطررت إلى الإزالة، فابدأ من أفضل نسخة متاحة، وحدّد العلامة بمستطيل ضيق، وعالج مقطعاً قصيراً أولاً، وراجع النتيجة إطاراً بإطار. ولا تعيد معالجة الفيديو الناتج مرة أخرى، بل ارجع إلى الملف الأصلي في كل محاولة.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يضيف يوتيوب علامة مائية إلى الفيديوهات؟',
          a: 'لا، يوتيوب لا يحرق علامة في الفيديو نفسه. ما يظهر عادة هو زر اشتراك من إعدادات القناة، أو شعار أضافه صانع الفيديو بنفسه، أو شعار شورتس على المقاطع المحملة.',
        },
        {
          q: 'كيف أزيل زر الاشتراك من فيديوهاتي؟',
          a: 'من استوديو يوتيوب: التخصيص، ثم العلامة التجارية، ثم إزالة العلامة المائية. يختفي الزر من كل فيديوهاتك فوراً دون إعادة رفع.',
        },
        {
          q: 'هل يمكن إزالة شعار يوتيوب من شورتس الآخرين؟',
          a: 'لا، هذه فيديوهات الآخرين. استخدم الأداة مع فيديوهاتك فقط، ويفضل أن تبدأ من الملف الأصلي قبل رفعه.',
        },
      ],
      ctaTitle: 'ابدأ من ملفك الأصلي',
      ctaText: 'إذا كان الفيديو لك، فأعد تصديره دون الشعار إن أمكن، أو ارفع نسختك وحدّد العلامة وابدأ المعالجة في متصفحك.',
    },
    en: {
      title: 'The YouTube Video Watermark: What It Is and How to Remove It from Your Videos',
      excerpt:
        'Not every "YouTube watermark" is a real mark in the video; some of it is a subscribe button added from the settings, and some of it is a logo the creator burned into the clip itself. This article separates the three kinds and explains the right fix for each one.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'Three kinds of marks people mix up',
          paragraphs: [
            'When people search for "remove YouTube watermark", they usually mean one of three different things. The first is the subscribe button that appears in the corner of the video, which YouTube calls the "channel watermark" in its settings. The second is a logo the video creator burned into the clip itself during editing. The third is the YouTube logo that appears on downloaded Shorts clips.',
            'Each of these has a completely different fix, and mixing them up is the cause of most frustration. The subscribe button is removed from the settings in seconds, while a burned-in logo needs a removal tool, and the moving Shorts logo is harder than both. So work out first which kind you are facing before you look for a fix.',
          ],
        },
        {
          heading: 'Channel watermark: remove it from the settings, not from the video',
          paragraphs: [
            'The subscribe button that appears in the corner of your videos is not part of the video itself; it is a layer YouTube adds over the player, and you control it from YouTube Studio: Customization, then Branding, then remove the watermark. With that step the button disappears from all your videos at once, with no re-upload, no re-encode, and no quality loss.',
            'That is the only correct fix for a channel watermark, and you need no removal tool for it. If the subscribe button in your videos is what bothers you, do not process the video at all; remove the mark from the settings, and it will vanish everywhere at once.',
          ],
        },
        {
          heading: 'A logo burned into the video: fix it by filling or cropping',
          paragraphs: [
            'If the logo is burned into the video itself — such as an old logo you added in editing to all your videos — the fix is a removal tool. If the logo is small and fixed, with a simple background behind it, the delogo filter removes it with a clean result. If it sits on an edge, cropping may be cleaner and faster.',
            'But the cleanest fix of all is to re-export: if you still have the original editing project, export the video again without the logo, and you get a clean copy at full quality, with no pixel guessing. So always keep your editing project files, and treat removal as a backup plan, not the first plan.',
          ],
        },
        {
          heading: 'Downloaded Shorts clips: a moving mark',
          paragraphs: [
            'Downloaded YouTube Shorts clips carry a YouTube logo that moves around the video, exactly like the TikTok mark. That makes removing it hard, because the removal filter works on a fixed rectangle while the mark moves. So the best fix is to use the original file before it was uploaded to YouTube.',
            'If you only have the downloaded Shorts copy, try cropping if the mark sits on the edges, or draw a rectangle that covers its main positions and accept an acceptable result rather than a perfect one. And remember that these steps are for your own videos only, not for other people’s clips.',
          ],
        },
        {
          heading: 'Golden rule: the original file is always better',
          paragraphs: [
            'For every kind of mark, the original file stays the best fix. Re-exporting from the editing project without the logo gives you a clean video at full quality, while removal, however well done, means re-encoding and guessing pixels. So make keeping original files and editing projects a fixed habit in your work.',
            'And if you do have to remove a mark, start from the best copy you have, mark it with a tight rectangle, process a short clip first, and review the result frame by frame. Do not re-process the resulting video again; go back to the original file for every attempt.',
          ],
        },
      ],
      faq: [
        {
          q: 'Does YouTube add a watermark to videos?',
          a: 'No, YouTube does not burn a mark into the video itself. What usually appears is a subscribe button from the channel settings, a logo the creator added themselves, or the Shorts logo on downloaded clips.',
        },
        {
          q: 'How do I remove the subscribe button from my videos?',
          a: 'From YouTube Studio: Customization, then Branding, then remove the watermark. The button disappears from all your videos at once, with no re-upload needed.',
        },
        {
          q: 'Can I remove the YouTube logo from other people’s Shorts?',
          a: 'No, those are other people’s videos. Use the tool only on your own videos, and preferably start from the original file before upload.',
        },
      ],
      ctaTitle: 'Start from your original file',
      ctaText: 'If the video is yours, re-export it without the logo when you can, or upload your copy, mark the watermark, and start processing in your browser.',
    },
  },
  {
    slug: 'remove-capcut-watermark',
    image: {
      src: '/images/articles/capcut-watermark-removal.jpg',
      altAr: 'أيقونات تطبيقات على شاشة هاتف ذكي عن قرب',
      altEn: 'Close-up of app icons on a smartphone home screen',
      creditAr: 'الصورة: Brett Jordan عبر Pexels',
      creditEn: 'Photo by Brett Jordan on Pexels',
    },
    ar: {
      title: 'كيف تزيل العلامة المائية من فيديو كاب كات؟',
      excerpt:
        'كاب كات يضيف في الغالب مقطعاً ختامياً أسود بشعاره، وليس علامة محروقة في الفيديو نفسه — وحذف هذا المقطع أسهل وأنظف من أي إزالة. هذا المقال يشرح الفرق، ومتى تحتاج إلى أداة إزالة فعلاً.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'ما العلامة التي يضيفها كاب كات فعلاً؟',
          paragraphs: [
            'عندما تصدّر فيديو من النسخة المجانية من كاب كات، يضيف التطبيق عادة مقطعاً ختامياً أسود قصيراً يحمل شعار كاب كات في نهاية الفيديو. هذه ليست علامة مائية محروقة فوق المشاهد، بل مقطع إضافي في نهاية الخط الزمني يمكن حذفه.',
            'وهناك حالة ثانية: بعض القوالب والمؤثرات الجاهزة في كاب كات تضيف شعاراً أو علامة داخل المشاهد نفسها. هذه هي الحالة التي تحتاج فيها إلى أداة إزالة فعلاً، لأن العلامة جزء من الصورة وليست مقطعاً منفصلاً. لذلك حدد أولاً أي نوع تواجهه قبل أن تبحث عن حل.',
          ],
        },
        {
          heading: 'الحل الأول والأنظف: احذف مقطع الخاتمة',
          paragraphs: [
            'قبل أن تفكر في أي أداة إزالة، افتح مشروعك في كاب كات وانتقل إلى نهاية الخط الزمني. ستجد هناك مقطعاً أسود قصيراً يحمل شعار كاب كات؛ حدده واحذفه، ثم صدّر الفيديو من جديد. هذه الخطوة مجانية، وتستغرق ثوانٍ، ولا تؤثر على جودة الفيديو إطلاقاً، لأنك لم تعالج الصورة بل حذفت مقطعاً زائداً.',
            'وتحقق أيضاً من إعدادات التصدير قبل أن تضغط زر التصدير، ففي بعض الإصدارات يظهر خيار لتصدير الفيديو دون علامة. وإذا كنت تستخدم قوالب جاهزة، فابحث داخل القالب عن أي مقطع أو طبقة تحمل شعاراً، واحذفها من الخط الزمني قبل التصدير.',
          ],
        },
        {
          heading: 'متى تحتاج إلى أداة إزالة؟',
          paragraphs: [
            'تحتاج إلى أداة إزالة عندما تكون العلامة محروقة في الفيديو نفسه، مثل شعار قالب أو ملصق يظهر فوق المشاهد طوال الفيديو. في هذه الحالة لا يوجد مقطع لحذفه، لأن العلامة جزء من كل إطار.',
            'وهنا تعمل الإزالة بالملء إذا كان الشعار صغيراً وثابتاً وخلفه خلفية بسيطة. أما إذا كان الشعار يتحرك أو كان كبيراً أو فوق خلفية معقدة، فقد يكون القصّ أنظف إذا كان على الحافة، أو قد تحتاج إلى قبول نتيجة مقبولة لا مثالية. وفي كل الحالات، اعمل على نسختك الخاصة فقط، وصدّر بأعلى جودة ممكنة قبل الإزالة.',
          ],
        },
        {
          heading: 'خطوات الإزالة لفيديوك الخاص',
          paragraphs: [
            'أولاً، صدّر الفيديو من كاب كات بأعلى جودة متاحة، لأن النسخة عالية الجودة تعطي نتيجة إزالة أنظف. ثانياً، ارفع ملف MP4 إلى الأداة في متصفحك — لا يُرفع الفيديو إلى أي خادم. ثالثاً، شغّل الفيديو وكبّره لتعثر على العلامة، وارسم أصغر مستطيل يحيط بها بإحكام.',
            'رابعاً، حدد نطاق الوقت إذا كانت العلامة تظهر في جزء محدد فقط من الفيديو، فهذا يختصر وقت المعالجة. خامساً، اضغط "بدء المعالجة" وانتظر، ثم راجع النتيجة إطاراً بإطار قبل مشاركتها. وإذا لم تعجبك النتيجة، ارجع إلى الملف المصدّر من كاب كات وعدّل المستطيل قليلاً ثم أعد المحاولة.',
          ],
        },
        {
          heading: 'أخطاء شائعة مع فيديوهات كاب كات',
          paragraphs: [
            'أول خطأ هو معالجة الفيديو كاملاً بينما العلامة تظهر في ثوانٍ معدودة فقط؛ استخدم النطاق الزمني دائماً. والخطأ الثاني هو إعادة معالجة الفيديو الناتج من محاولة سابقة بدلاً من الرجوع إلى الملف المصدّر من كاب كات، وهذا يضاعف فقدان الجودة.',
            'والخطأ الثالث هو التصدير بجودة منخفضة قبل الإزالة بحجة تصغير الملف؛ فالنسخة المنخفضة الجودة تعطي نتيجة إزالة أسوأ، لأن المرشح يعمل بمعلومات أقل. صدّر بأعلى جودة، وعالج نسخة من الملف المصدّر، واحتفظ بالأصل في مكان آمن.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يضيف كاب كات علامة مائية إلى الفيديو؟',
          a: 'في النسخة المجانية يضيف عادة مقطعاً ختامياً أسود بشعار كاب كات في نهاية الفيديو، وليس علامة محروقة فوق المشاهد. احذف هذا المقطع من الخط الزمني قبل التصدير.',
        },
        {
          q: 'هل حذف مقطع الخاتمة مجاني؟',
          a: 'نعم، حذف المقطع الختامي مجاني ولا يؤثر على جودة الفيديو، وهو أنظف من أي طريقة إزالة لاحقة.',
        },
        {
          q: 'ماذا لو كانت العلامة داخل المشاهد نفسها؟',
          a: 'إذا كانت العلامة محروقة في الفيديو — مثل شعار قالب — فاستخدم أداة إزالة على نسختك الخاصة، مع مستطيل ضيق وخلفية بسيطة قدر الإمكان.',
        },
      ],
      ctaTitle: 'نظّف فيديو كاب كات الخاص بك',
      ctaText: 'صدّر الفيديو بأعلى جودة، ارفعه هنا، وحدّد العلامة وابدأ المعالجة في متصفحك.',
    },
    en: {
      title: 'How to Remove the Watermark from a CapCut Video',
      excerpt:
        'CapCut usually adds a short black ending clip with its logo, not a mark burned into the video itself — and deleting that clip is easier and cleaner than any removal. This article explains the difference, and when you actually need a removal tool.',
      readingMinutes: 5,
      sections: [
        {
          heading: 'What mark does CapCut actually add?',
          paragraphs: [
            'When you export a video from the free version of CapCut, the app usually adds a short black ending clip with the CapCut logo at the end of the video. That is not a watermark burned over the scenes; it is an extra clip at the end of the timeline that can be deleted.',
            'There is a second case: some ready-made templates and effects in CapCut add a logo or a mark inside the scenes themselves. That is the case where you actually need a removal tool, because the mark is part of the picture, not a separate clip. So work out first which kind you are facing before you look for a fix.',
          ],
        },
        {
          heading: 'The first and cleanest fix: delete the ending clip',
          paragraphs: [
            'Before you think about any removal tool, open your project in CapCut and go to the end of the timeline. You will find a short black clip with the CapCut logo there; select it and delete it, then export the video again. That step is free, takes seconds, and does not affect the video quality at all, because you did not process the picture — you removed an extra clip.',
            'Also check the export settings before you press export, because some versions offer an option to export the video without a mark. And if you use ready-made templates, look inside the template for any clip or layer that carries a logo, and delete it from the timeline before exporting.',
          ],
        },
        {
          heading: 'When do you actually need a removal tool?',
          paragraphs: [
            'You need a removal tool when the mark is burned into the video itself, such as a template logo or a sticker that appears over the scenes throughout the video. In that case there is no clip to delete, because the mark is part of every frame.',
            'Here fill removal works if the logo is small and fixed, with a simple background behind it. If the logo moves, or is large, or sits over a complex background, cropping may be cleaner when it sits on an edge, or you may need to accept an acceptable result rather than a perfect one. In all cases, work only on your own copy, and export at the highest quality possible before removal.',
          ],
        },
        {
          heading: 'Removal steps for your own video',
          paragraphs: [
            'First, export the video from CapCut at the highest quality available, because a high-quality copy gives a cleaner removal result. Second, upload the MP4 file to the tool in your browser — the video is never uploaded to any server. Third, play the video and enlarge it to find the mark, and draw the smallest rectangle that hugs it closely.',
            'Fourth, set the time range if the mark only appears in part of the video; that shortens the processing time. Fifth, press "Start processing" and wait, then review the result frame by frame before sharing it. If you do not like the result, go back to the file exported from CapCut, adjust the rectangle slightly, and try again.',
          ],
        },
        {
          heading: 'Common mistakes with CapCut videos',
          paragraphs: [
            'The first mistake is processing the whole video when the mark only appears for a few seconds; always use the time range. The second mistake is re-processing the resulting video from a previous attempt instead of going back to the file exported from CapCut, which doubles the quality loss.',
            'The third mistake is exporting at low quality before removal to make the file smaller; a low-quality copy gives a worse removal result, because the filter works with less information. Export at the highest quality, process a copy of the exported file, and keep the original safe.',
          ],
        },
      ],
      faq: [
        {
          q: 'Does CapCut add a watermark to the video?',
          a: 'The free version usually adds a short black ending clip with the CapCut logo at the end of the video, not a mark burned over the scenes. Delete that clip from the timeline before exporting.',
        },
        {
          q: 'Is deleting the ending clip free?',
          a: 'Yes, deleting the ending clip is free and does not affect the video quality, and it is cleaner than any removal method afterwards.',
        },
        {
          q: 'What if the mark is inside the scenes themselves?',
          a: 'If the mark is burned into the video — such as a template logo — use a removal tool on your own copy, with a tight rectangle and as simple a background as possible.',
        },
      ],
      ctaTitle: 'Clean up your own CapCut video',
      ctaText: 'Export the video at the highest quality, upload it here, mark the watermark, and start processing in your browser.',
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

