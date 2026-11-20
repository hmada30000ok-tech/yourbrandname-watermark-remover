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
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

