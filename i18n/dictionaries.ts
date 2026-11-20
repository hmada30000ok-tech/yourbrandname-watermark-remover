import type { Locale } from '@/config/site';

/**
 * Arabic is the source of truth for the shape. English must satisfy the same
 * type, so a missing translation becomes a compile-time error.
 */
export const ar = {
  meta: {
    home: {
      title: 'إزالة العلامة المائية من الفيديو — محليًا في متصفحك',
      description: 'أداة مجانية لإزالة الشعار أو العلامة المائية الثابتة من مقاطع الفيديو التي تملك حقوقها. تعالج ملفاتك داخل متصفحك دون رفعها إلى أي خادم.',
    },
    howItWorks: {
      title: 'كيف تعمل الأداة | دليل ومقالات',
      description: 'تعرّف على طريقة عمل مرشح delogo، حدوده، وأفضل النصائح للحصول على نتيجة نظيفة عند إزالة العلامة المائية من فيديوهاتك.',
    },
    terms: {
      title: 'شروط الاستخدام',
      description: 'شروط استخدام وحقوق الملكية الخاصة باستخدام أداة إزالة العلامة المائية. اقرأها قبل معالجة أي مقطع.',
    },
    privacy: {
      title: 'سياسة الخصوصية',
      description: 'ملفاتك تُعالج محليًا في متصفحك ولا تُرفع إلى أي خادم. تعرّف على سياسة الكوكيز والإعلانات لدينا.',
    },
    contact: {
      title: 'اتصل بنا',
      description: 'تواصل معنا للاستفسارات أو الإبلاغ عن مشكلة في أداة إزالة العلامة المائية.',
    },
    about: {
      title: 'من نحن',
      description: 'فكرة الأداة، ولماذا بنيناها كتطبيق ثابت يعمل بالكامل داخل المتصفح.',
    },
  },

  common: {
    brandTagline: 'إزالة العلامة المائية داخل متصفحك',
    skipToContent: 'تخطَّ إلى المحتوى الرئيسي',
    languageLabel: 'اللغة',
    free: 'مجاني',
    local: 'معالجة محلية',
    private: 'خاص بلا رفع',
  },

  nav: {
    home: 'الرئيسية',
    howItWorks: 'كيف تعمل',
    about: 'من نحن',
    contact: 'اتصل بنا',
    menu: 'القائمة',
    closeMenu: 'إغلاق القائمة',
  },

  cookie: {
    title: 'إشعار الكوكيز',
    text: 'نستخدم كوكيز تخزين تفضيل اللغة واختيارك للإعلانات. لا نرفع ملفات الفيديو الخاصة بك إلى أي خادم. يمكنك قبول الإعلانات المخصصة أو رفضها.',
    accept: 'قبول الكل',
    reject: 'رفض الإعلانات',
    privacyLink: 'سياسة الخصوصية',
    manage: 'إعدادات الكوكيز',
  },

  ads: {
    sponsored: 'إعلان',
    header: 'مساحة إعلانية — أعلى الصفحة',
    sidebar: 'مساحة إعلانية — الشريط الجانبي',
    content: 'مساحة إعلانية — داخل المحتوى',
  },

  home: {
    eyebrow: 'أداة فيديو تعمل في متصفحك فقط',
    title: 'أزل العلامة المائية الثابتة من فيديوهاتك',
    titleAccent: 'دون رفع ملفاتك إلى الإنترنت',
    subtitle: 'ارسم مستطيلًا حول الشعار أو العلامة المائية، اختر نطاق الوقت، ودع ffmpeg.wasm ينظّف الفيديو داخل متصفحك. مناسب للمقاطع التي تملكها أو التي تملك حقوق معالجتها فقط.',
    cta: 'ابدأ المعالجة',
    ctaSecondary: 'اقرأ كيف تعمل الأداة',
    featuresTitle: 'لماذا تستخدم هذه الأداة؟',
    features: [
      {
        title: 'خصوصية كاملة',
        text: 'الفيديو لا يغادر جهازك. كل المعالجة تحدث داخل متصفحك عبر WebAssembly.',
      },
      {
        title: 'لا حاجة للتسجيل',
        text: 'لا حسابات، لا رفع ملفات، لا انتظار خادم. افتح الصفحة وابدأ مباشرة.',
      },
      {
        title: 'تحكّم دقيق',
        text: 'حدّد موضع العلامة ومقاسها بالبكسل، وطبّق الإزالة داخل نطاق زمني محدد.',
      },
    ],
    howTitle: 'ثلاث خطوات بسيطة',
    howText: 'ارفع الفيديو، ارسم المستطيل حول العلامة، ثم اضغط معالجة. يمكنك معاينة النتيجة وتنزيلها فورًا بصيغة MP4.',
    privacyTitle: 'ملكيتك محفوظة',
    privacyText: 'استخدم الأداة فقط مع المحتوى الذي تملكه أو الذي لديك إذن واضح لتعديله. راجع شروط الاستخدام قبل البدء.',
  },

  editor: {
    cardTitle: 'محرّر إزالة العلامة المائية',
    cardSubtitle: 'تُعالج ملفاتك محليًا في هذا المتصفح. لا يتم رفع أي شيء.',
    drop: {
      title: 'اسحب الفيديو هنا',
      hint: 'أو اضغط لاختيار ملف من جهازك',
      browse: 'اختيار ملف',
      accepted: 'الصيغ المدعومة: MP4 وMOV وWEBM',
      maxSize: 'الحد الأقصى للحجم: 150 ميجابايت',
      change: 'تغيير الفيديو',
      selected: 'الملف المحدد',
      size: 'الحجم',
      remove: 'إزالة الملف',
    },
    validation: {
      unsupported: 'صيغة الملف غير مدعومة. يرجى استخدام MP4 أو MOV أو WEBM.',
      tooLarge: 'حجم الملف أكبر من الحد المسموح (150 ميجابايت). جرّب ملفًا أصغر أو مقطعًا أقصر.',
      empty: 'لم يتم اختيار أي ملف.',
    },
    preview: {
      title: 'حدّد منطقة العلامة المائية',
      hint: 'اسحب على الفيديو لرسم مستطيل، ثم اسحب المقابض لتعديله أو اسحب داخل المستطيل لتحريكه.',
      clear: 'مسح التحديد',
      rectLabel: 'إحداثيات المستطيل (بكسلات الفيديو)',
      x: 'س',
      y: 'ص',
      w: 'العرض',
      h: 'الارتفاع',
      noRect: 'لم تحدد أي منطقة بعد.',
      ready: 'تم تحديد المنطقة',
    },
    time: {
      title: 'النطاق الزمني للتطبيق',
      start: 'البداية (ثانية)',
      end: 'النهاية (ثانية)',
      useCurrent: 'الوقت الحالي',
      duration: 'مدة الفيديو',
      hint: 'اترك القيم كما هي لتطبيق الإزالة على الفيديو كاملًا.',
      invalid: 'تأكد من أن البداية أصغر من النهاية، وأن النهاية لا تتجاوز مدة الفيديو.',
    },
    actions: {
      process: 'بدء المعالجة',
      processing: 'جارٍ المعالجة…',
      cancel: 'إلغاء',
      download: 'تنزيل الفيديو',
      again: 'معالجة فيديو آخر',
      largeTitle: 'ملف كبير الحجم',
      largeText: 'هذا الملف أكبر من 100 ميجابايت. قد تستغرق المعالجة وقتًا طويلًا أو تفشل على الأجهزة المحمولة بسبب محدودية الذاكرة.',
      understand: 'فهمت، متابعة على أي حال',
      progress: 'نسبة الإنجاز',
      logTitle: 'سجل المعالجة',
      emptyLog: 'ستظهر رسائل ffmpeg هنا عند بدء المعالجة.',
    },
    result: {
      title: 'اكتملت المعالجة',
      text: 'تم إنشاء الفيديو. يمكنك تنزيله الآن — الرابط متاح محليًا في متصفحك فقط.',
      note: 'افحص النتيجة قبل مشاركتها. قد تحتاج المناطق المعقدة إلى تعديل المستطيل وإعادة المعالجة.',
    },
    errors: {
      unsupported: 'صيغة غير مدعومة. استخدم MP4 أو MOV أو WEBM.',
      size: 'الملف كبير جدًا. جرّب مقطعًا أقصر أو ملفًا أصغر حجمًا.',
      memory: 'نفذت الذاكرة المتاحة لمحرك ffmpeg. جرّب مقطعًا أقصر أو ملفًا أصغر، وأغلق التطبيقات الأخرى، ويفضّل استخدام حاسوب بدل الهاتف.',
      network: 'تعذّر تحميل ملفات محرك المعالجة. تحقق من اتصالك بالإنترنت ثم أعد المحاولة.',
      job: 'فشلت مهمة المعالجة. تأكد من صحة المستطيل والنطاق الزمني، ثم أعد المحاولة.',
      unknown: 'حدث خطأ غير متوقع. أعد تحميل الصفحة وحاول مرة أخرى.',
      noRect: 'ارسم مستطيلًا حول العلامة المائية قبل بدء المعالجة.',
      invalidTime: 'النطاق الزمني غير صالح. صحّح قيم البداية والنهاية.',
    },
    thread: {
      fast: 'الوضع متعدد الخيوط مُفعّل',
      compat: 'الوضع متوافق (خيط واحد)',
      noticeTitle: 'تم استخدام الوضع المتوافق',
      noticeText: 'متصفحك لا يدعم SharedArrayBuffer، لذا تعمل الأداة بنواة أحادية الخيط. قد تكون المعالجة أبطأ، لكنها تعمل في معظم المتصفحات.',
    },
    localNote: 'محلي بالكامل — فيديو واحد، بلا رفع',
  },

  howItWorks: {
    title: 'كيف تعمل الأداة',
    intro: 'فهم ما يحدث خلف الكواليس يساعدك على اختيار الإعدادات الصحيحة. هذه الصفحة تشرح مرشح delogo، حدوده العملية، وأساليب مجرّبة للحصول على أفضل نتيجة.',
    stepsTitle: 'خطوات الاستخدام',
    steps: [
      { title: 'ارفع مقطعك', text: 'اسحب ملف MP4 أو MOV أو WEBM إلى نافذة الأداة. يظل الملف على جهازك طوال الوقت.' },
      { title: 'ارسم المستطيل', text: 'حدّد أصغر مستطيل يحيط بالعلامة المائية تمامًا. يمكنك تغيير حجمه وتحريكه بالماوس أو اللمس.' },
      { title: 'اختر الوقت', text: 'حدد ثانية البداية والنهاية، أو اترك القيم الافتراضية لتطبيق الإزالة على المقطع كاملًا.' },
      { title: 'نزّل النتيجة', text: 'اضغط معالجة، انتظر شريط التقدم، ثم نزّل ملف MP4 الناتج إلى جهازك.' },
    ],
    contentTitle: 'محتوى تعليمي: ما وراء إزالة العلامة المائية',
    contentIntro: 'ليست كل العلامات المائية متساوية. تشرح الأقسام التالية الآلية التقنية والحالات التي تنجح فيها والقيود التي يجب توقعها.',
    sections: [
      {
        title: 'كيف يعمل مرشح delogo فعليًا',
        paragraphs: [
          'يعتمد مرشح delogo في ffmpeg على فكرة بسيطة: بدلًا من حذف البكسلات داخل المستطيل، يعيد بناءها من المنطقة المحيطة. يقرأ المرشح الألوان على حواف المستطيل ويستقرئها إلى الداخل باستخدام استكمال ثنائي الاتجاه، ثم يدمج النتيجة مع الإطار الأصلي بانتقال ناعم عند الحواف.',
          'لأن الاستكمال يعتمد على ما يوجد حول العلامة، فإن نجاحه مرتبط بمدى تشابه الخلفية. إذا كانت العلامة فوق سماكة زرقاء صافية أو جدار رمادي موحّد، فالمنطقة المُعاد بنائها ستكون مقنعة جدًا. أما إذا كانت فوق تفاصيل كثيفة أو حركة سريعة، فقد تظهر بقعة ناعمة مكانها.',
          'يُطبّق المرشح على إطار بإطار، ويسمح خيار enable بتقييد التأثير إلى نطاق زمني محدد. هذا مفيد عندما تظهر العلامة في أول ثانيتين فقط، أو تختفي في منتصف المقطع؛ فتجنّب تعديل أجزاء لا تحتاج إلى تنظيف يحافظ على جودة الصورة الأصلية.',
        ],
        bullets: [
          'تُقرأ حواف المستطيل لتخمين لون الخلفية داخل المنطقة.',
          'يتم دمج التخمين مع الصورة الأصلية لتقليل الحدود الحادة.',
          'لا يوجد "تعرف على الشعار"؛ المرشح لا يعرف ما الذي يزيله، بل يعيد بناء البكسلات فقط.',
        ],
      },
      {
        title: 'الحالات التي تنجح فيها الطريقة، وحدودها',
        paragraphs: [
          'تنجح الطريقة أكثر مع العلامات الثابتة غير المتحركة، والخلفيات الهادئة أو المتدرجة، والمقاطع القصيرة. كما أن الشعارات الصغيرة الشفافة الموجودة في الزاوية أسهل بكثير من الشريط العريض الذي يمرّ عبر منتصف الصورة.',
          'هناك حدود حقيقية يجب معرفتها. العلامات التي تتحرك أو تومض يصعب تتبعها بمستطيل واحد. والعلامات فوق الوجه أو النص أو حواف الأشياء المتحركة ستترك أثرًا ناعمًا لأن الخوارزمية لا تستطيع تخمين التفاصيل المفقودة بدقة. كذلك فإن الضغط القوي للفيديو الأصلي يجعل الحواف أقل وضوحًا للمرشح.',
          'قد ينتج عن إعادة الترميز بعض التغير الطفيف في الجودة في كل أنحاء الصورة، حتى خارج المستطيل. نستخدم إعدادات معتدلة (preset veryfast و CRF 23) لتحقيق توازن بين سرعة المعالجة وجودة الصورة، وتبقى الصوتية دون إعادة ترميز كلما أمكن ذلك.',
        ],
        bullets: [
          'الأفضل: علامة ثابتة، صغيرة، على خلفية بسيطة.',
          'الأصعب: علامة متحركة، عريضة، أو فوق تفاصيل دقيقة.',
          'لا يمكن للمرشح استعادة تفاصيل حقيقية كانت مخفية خلف العلامة.',
        ],
      },
      {
        title: 'نصائح عملية للحصول على أفضل نتيجة',
        paragraphs: [
          'اجعل المستطيل محكمًا. كل بكسل إضافي داخل التحديد يُستبدل ببيانات مُخمّنة، فكلما كان المستطيل أصغر بدت النتيجة أفضل. اترك هامشًا بسيطًا حول العلامة فقط لتغطية الحواف الشفافة.',
          'قصّ المقطع إلى النطاق الذي يهمك قبل المعالجة. تقليل عدد الإطارات يقلل زمن المعالجة والذاكرة المطلوبة، وهو الفرق بين نجاح المقطع وفشله على الأجهزة المحمولة.',
          'ابدأ من أعلى جودة متاحة لديك. إذا قمت برفع مقطع مضغوط سابقًا، فإن المرشح سيعمل على فقدان البيانات الموجود أصلًا. كما أن فحص النتيجة بإطار تلو الآخر في المشغّل يساعدك على اكتشاف وميض الحواف مبكرًا، حتى تتمكن من تعديل المستطيل وإعادة المعالجة بدل إضاعة الوقت.',
        ],
        bullets: [
          'استخدم أصغر مستطيل يغطي العلامة بالكامل.',
          'عالج نطاقًا زمنيًا قصيرًا عندما يكون ذلك كافيًا.',
          'احتفظ بالنسخة الأصلية دائمًا قبل إعادة الترميز.',
          'راجع النتيجة على أكثر من مشغّل قبل النشر.',
        ],
      },
      {
        title: 'الخصوصية والتعامل مع ملفاتك',
        paragraphs: [
          'التطبيق بأكمله ثابت ولا يحتوي على خادم معالجة. عند اختيار ملف، يقرأه متصفحك مباشرة ويمرره إلى عامل Web Worker يشغّل ffmpeg.wasm. لا يوجد رفع، ولا تخزين سحابي، ولا سجل للملفات لدينا.',
          'بعد تنزيل النتيجة، يتم تحرير عناوين الكائنات المؤقتة من الذاكرة. وإذا أغلقت الصفحة أو ألغيت المعالجة، يُوقف العامل وتُحذف البيانات المؤقتة. الخيار الوحيد المخزّن هو تفضيل اللغة وقرار الكوكيز، وكلاهما محفوظ في متصفحك وحدك.',
        ],
        bullets: [],
      },
    ],
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      { q: 'هل تُرفع مقاطع الفيديو إلى خادم؟', a: 'لا. تتم المعالجة بالكامل داخل متصفحك باستخدام ffmpeg.wasm. لا يوجد أي خادم يستقبل ملفاتك.' },
      { q: 'ما الصيغ المدعومة؟', a: 'تدعم الأداة ملفات MP4 وMOV وWEBM حتى 150 ميجابايت. الناتج دائمًا ملف MP4.' },
      { q: 'هل تختفي العلامة المائية تمامًا في كل الحالات؟', a: 'ليس دائمًا. تعمل الطريقة بشكل أفضل مع العلامات الثابتة على خلفيات بسيطة. العلامات المتحركة أو تلك التي تغطي تفاصيل مهمة قد تترك أثرًا طفيفًا.' },
      { q: 'لماذا المعالجة بطيئة على هاتفي؟', a: 'إزالة العلامة تتطلب إعادة ترميز الفيديو. على الهاتف، الذاكرة محدودة وقد تضطر الأداة لاستخدام النواة الأحادية. جرّب مقطعًا أقصر أو ملفًا أصغر.' },
      { q: 'هل يمكنني استخدام الأداة على محتوى لا أملكه؟', a: 'لا. يجب أن تملك المحتوى أو أن يكون لديك حقوق واضحة لتعديله. راجع شروط الاستخدام.' },
      { q: 'هل الصوت يتأثر؟', a: 'لا تتم إعادة ترميز الصوت في الأحوال العادية؛ يُنسخ كما هو، لذا تبقى جودته كما في الملف الأصلي.' },
    ],
    cta: 'جرّب الأداة الآن',
  },

  terms: {
    title: 'شروط الاستخدام',
    updated: 'آخر تحديث: نوفمبر 2026',
    sections: [
      {
        heading: 'قبول الشروط',
        paragraphs: [
          'باستخدامك لهذا الموقع وأداة إزالة العلامة المائية، فإنك توافق على هذه الشروط. إذا كنت لا توافق عليها، فلا تستخدم الأداة.',
        ],
      },
      {
        heading: 'الملكية والحقوق القانونية',
        paragraphs: [
          'يجب أن تملك المحتوى الذي تعالجه أو أن يكون لديك إذن قانوني واضح من صاحب الحقوق لتعديله وإزالة العلامات المائية منه.',
          'يُمنع استخدام هذه الخدمة لإزالة علامات مائية أو شعارات من محتوى لا تملك حقوقه، أو من مقاطع حصلت عليها دون إذن، أو لأي غرض ينتهك حقوق النشر أو العلامات التجارية أو غيرها من الحقوق.',
          'أنت وحدك مسؤول عن التحقق من حقوقك قبل استخدام الأداة وعن أي استخدام لاحق للملف الناتج.',
        ],
      },
      {
        heading: 'طبيعة الخدمة',
        paragraphs: [
          'تعمل الأداة محليًا في متصفحك ولا نستقبل ملفاتك على أي خادم. قد تظهر إعلانات من شبكات خارجية وفقًا لسياسة الكوكيز.',
        ],
      },
      {
        heading: 'عدم ضمان النتائج',
        paragraphs: [
          'تُقدَّم الخدمة "كما هي" دون أي ضمانات، صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر ضمانات القابلية للتسويق أو الملاءمة لغرض معين.',
          'لا نضمن أن إزالة العلامة ستكون كاملة أو خالية من العيوب، ولا نضمن أن النتيجة ستناسب استخدامك. تعتمد الجودة على طبيعة الفيديو والعلامة والإعدادات التي تختارها.',
        ],
      },
      {
        heading: 'تحديد المسؤولية',
        paragraphs: [
          'إلى أقصى حد يسمح به القانون، لا نكون مسؤولين عن أي أضرار أو خسائر ناتجة عن استخدام الأداة أو عن الملفات الناتجة عنها.',
        ],
      },
      {
        heading: 'التغييرات',
        paragraphs: [
          'نحتفظ بحق تعديل هذه الشروط في أي time. يسري أي تعديل فور نشره على هذه الصفحة.',
        ],
      },
    ],
  },

  privacy: {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: نوفمبر 2026',
    sections: [
      {
        heading: 'ملفاتك تبقى في متصفحك',
        paragraphs: [
          'نحن لا نرفع ملفات الفيديو التي تختارها إلى أي خادم. تتم معالجة الفيديو بالكامل داخل متصفحك باستخدام ffmpeg.wasm، وتُنشأ النتيجة كملف محلي يمكنك تنزيله مباشرة.',
          'لا نحتفظ بنسخة من ملفاتك، ولا نخزّنها، ولا نشاركها مع أي طرف ثالث. عند إغلاق الصفحة أو إلغاء المعالجة تُزال البيانات المؤقتة من الذاكرة.',
        ],
      },
      {
        heading: 'الكوكيز والتفضيلات المحلية',
        paragraphs: [
          'نستخدم localStorage في متصفحك لحفظ تفضيل اللغة وقرارك بقبول أو رفض الإعلانات. هذه البيانات تبقى على جهازك ولا تُرسل إلينا.',
          'إذا رفضت الإعلانات، فلن يتم تحميل نصوص شبكات الإعلانات.',
        ],
      },
      {
        heading: 'الإعلانات وبيانات',
        paragraphs: [
          'قد نعرض إعلانات من شبكات خارجية مثل Google AdSense بعد موافقتك. قد تستخدم هذه الشبكات كوكيز أو معرّفات مشابهة لعرض إعلانات ذات صلة وقياس الأداء، وفقًا لسياساتها الخاصة.',
          'يمكنك تغيير قرارك في أي وقت عبر رابط "إعدادات الكوكيز" في التذييل. لا نتحكم في ممارسات جمع البيانات الخاصة بشبكات الإعلانات، وننصح بمراجعة سياساتها.',
        ],
      },
      {
        heading: 'تحليلات الاستخدام',
        paragraphs: [
          'لا نستخدم حاليًا أي أدوات تحليلات خارجية تتتبّع استخدامك للأداة.',
        ],
      },
      {
        heading: 'اتصل بنا',
        paragraphs: [
          'لأي استفسار متعلق بالخصوصية، راجع صفحة اتصل بنا.',
        ],
      },
    ],
  },

  contact: {
    title: 'اتصل بنا',
    intro: 'لديك سؤال أو اقتراح أو تريد الإبلاغ عن مشكلة؟ تواصل معنا وسنحاول الرد في أقرب وقت.',
    emailLabel: 'البريد الإلكتروني',
    emailHint: 'أرسل لنا رسالة توضّح المشكلة أو الاقتراح. يرجى عدم إرفاق ملفات فيديو كبيرة.',
    topicsTitle: 'ما يمكننا مساعدتك فيه',
    topics: [
      'الإبلاغ عن خطأ في المعالجة أو في إحدى الصفحات',
      'اقتراح تحسينات أو ميزات جديدة',
      'استفسارات حول الخصوصية وحقوق المحتوى',
      'ملاحظات حول الترجمة إلى العربية أو الإنجليزية',
    ],
    note: 'نستخدم العنوان أدناه فقط للرد على رسائلك. لا نحتفظ ببياناتك الشخصية لأغراض أخرى.',
    noFormNote: 'لا يوجد نموذج إرسال في هذه النسخة؛ استخدم تطبيق البريد الخاص بك.',
  },

  about: {
    title: 'من نحن',
    intro: 'أداة بسيطة لهدف واضح: منحك طريقة سريعة وخاصة لتنظيف العلامات المائية من مقاطع الفيديو التي تملك حقوقها.',
    sections: [
      {
        heading: 'لماذا بنيناها',
        paragraphs: [
          'كثير من الأدوات التي تنظّف الفيديو تطلب منك رفع الملف إلى خادم خارجي. هذا يعني انتظارًا، وحدودًا على الحجم، وفقدانًا للسيطرة على ملف قد يكون حساسًا.',
          'قررنا بناء بديل يعمل بالكامل في المتصفح: لا حساب، لا رفع، لا خادم معالجة. تفتح الصفحة، تعالج المقطع، وتنزّل النتيجة، وتبقى الملفات على جهازك.',
        ],
      },
      {
        heading: 'كيف تعمل',
        paragraphs: [
          'نستخدم ffmpeg.masm عبر Web Worker منفصل حتى لا تتجمّد الواجهة أثناء المعالجة. يتم تحميل نواة المعالجة عند بدء العمل فقط، ونستخدم النسخة متعددة الخيوط عندما يدعم المتصفح ذلك، والنسخة الأحادية خيطًا في بقية الحالات.',
          'الموقع بأكمله ملفات ثابتة يمكن استضافتها مجانًا، مما يجعله سريعًا وسهل النشر.',
        ],
      },
    ],
    principlesTitle: 'مبادئنا',
    principles: [
      { title: 'الخصوصية أولًا', text: 'ملفاتك لا تغادر جهازك، نقطة.' },
      { title: 'الاستخدام المشروع', text: 'الأداة مخصصة للمحتوى الذي تملكه أو لديك حق تعديله فقط.' },
      { title: 'الوضوح', text: 'نشرح ما تفعله الأداة وحدودها بدل الوعود المبالغ فيها.' },
    ],
  },

  footer: {
    tagline: 'إزالة العلامة المائية محليًا، بلا رفع ملفات.',
    productTitle: 'المنتج',
    legalTitle: 'قانوني',
    copyright: 'جميع الحقوق محفوظة.',
    localeNote: 'متاح بالعربية والإنجليزية',
    backToTop: 'العودة للأعلى',
  },
};

export type Dictionary = typeof ar;

export const en: Dictionary = {
  meta: {
    home: {
      title: 'Remove Video Watermarks — Right in Your Browser',
      description: 'A free tool to remove a fixed logo or watermark from videos you own. Files are processed locally in your browser and never uploaded to a server.',
    },
    howItWorks: {
      title: 'How It Works | Guides & Articles',
      description: 'Learn how the delogo filter works, what its real limits are, and the best practical tips for cleaning a watermark from your own videos.',
    },
    terms: {
      title: 'Terms of Use',
      description: 'Terms and content-rights rules for using the watermark removal tool. Read them before processing any clip.',
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'Your files are processed locally in your browser and never uploaded. Learn about our cookie and advertising practices.',
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with questions or to report a problem with the watermark removal tool.',
    },
    about: {
      title: 'About Us',
      description: 'The idea behind the tool and why we built it as a fully browser-based static app.',
    },
  },

  common: {
    brandTagline: 'Watermark removal inside your browser',
    skipToContent: 'Skip to main content',
    languageLabel: 'Language',
    free: 'Free',
    local: 'Local processing',
    private: 'Private, no upload',
  },

  nav: {
    home: 'Home',
    howItWorks: 'How It Works',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Close menu',
  },

  cookie: {
    title: 'Cookie notice',
    text: 'We use cookies to remember your language and your advertising choice. Your video files are never uploaded to a server. You may accept or reject personalized ads.',
    accept: 'Accept all',
    reject: 'Reject ads',
    privacyLink: 'Privacy Policy',
    manage: 'Cookie settings',
  },

  ads: {
    sponsored: 'Advertisement',
    header: 'Ad slot — header',
    sidebar: 'Ad slot — sidebar',
    content: 'Ad slot — in content',
  },

  home: {
    eyebrow: 'A video tool that stays in your browser',
    title: 'Remove a fixed watermark from your videos',
    titleAccent: 'without uploading your files',
    subtitle: 'Draw a rectangle over the logo or watermark, pick a time range, and let ffmpeg.wasm clean the video inside your browser. For clips you own or have clear rights to edit.',
    cta: 'Start processing',
    ctaSecondary: 'Read how it works',
    featuresTitle: 'Why use this tool?',
    features: [
      {
        title: 'Complete privacy',
        text: 'Your video never leaves your device. All processing happens in your browser via WebAssembly.',
      },
      {
        title: 'No sign-up',
        text: 'No accounts, no uploads, no server queue. Open the page and get straight to work.',
      },
      {
        title: 'Precise control',
        text: 'Set the watermark position and size in pixels, and apply the cleanup to a chosen time range.',
      },
    ],
    howTitle: 'Three simple steps',
    howText: 'Upload a video, draw the rectangle over the watermark, then press Process. Preview the result and download it as an MP4 right away.',
    privacyTitle: 'Your ownership matters',
    privacyText: 'Only use this tool with content you own or have explicit permission to modify. Review the Terms of Use before you begin.',
  },

  editor: {
    cardTitle: 'Watermark removal editor',
    cardSubtitle: 'Your files are processed locally in this browser. Nothing is uploaded.',
    drop: {
      title: 'Drop your video here',
      hint: 'or press to choose a file from your device',
      browse: 'Choose a file',
      accepted: 'Supported formats: MP4, MOV and WEBM',
      maxSize: 'Maximum size: 150 MB',
      change: 'Change video',
      selected: 'Selected file',
      size: 'Size',
      remove: 'Remove file',
    },
    validation: {
      unsupported: 'Unsupported file format. Please use MP4, MOV or WEBM.',
      tooLarge: 'The file is larger than the allowed limit (150 MB). Try a smaller file or a shorter clip.',
      empty: 'No file was selected.',
    },
    preview: {
      title: 'Mark the watermark area',
      hint: 'Drag on the video to draw a rectangle, then drag the handles to resize it or drag inside it to move it.',
      clear: 'Clear selection',
      rectLabel: 'Rectangle coordinates (video pixels)',
      x: 'X',
      y: 'Y',
      w: 'Width',
      h: 'Height',
      noRect: 'No area selected yet.',
      ready: 'Area selected',
    },
    time: {
      title: 'Time range to apply',
      start: 'Start (seconds)',
      end: 'End (seconds)',
      useCurrent: 'Use current time',
      duration: 'Video duration',
      hint: 'Leave the values as they are to apply the cleanup to the whole video.',
      invalid: 'Make sure the start is before the end, and the end does not exceed the video duration.',
    },
    actions: {
      process: 'Start processing',
      processing: 'Processing…',
      cancel: 'Cancel',
      download: 'Download video',
      again: 'Process another video',
      largeTitle: 'Large file',
      largeText: 'This file is larger than 100 MB. Processing may take a long time or fail on mobile devices because of memory limits.',
      understand: 'I understand, continue anyway',
      progress: 'Progress',
      logTitle: 'Processing log',
      emptyLog: 'ffmpeg messages will appear here once processing starts.',
    },
    result: {
      title: 'Processing complete',
      text: 'Your video is ready. You can download it now — the link only exists locally in your browser.',
      note: 'Inspect the result before sharing it. Complex areas may need a different rectangle and another pass.',
    },
    errors: {
      unsupported: 'Unsupported format. Use MP4, MOV or WEBM.',
      size: 'The file is too large. Try a shorter clip or a smaller file.',
      memory: 'ffmpeg ran out of available memory. Try a shorter clip or a smaller file, close other apps, and preferably use a computer instead of a phone.',
      network: 'Could not load the processing engine files. Check your internet connection and try again.',
      job: 'The processing job failed. Check the rectangle and time range, then try again.',
      unknown: 'An unexpected error occurred. Reload the page and try again.',
      noRect: 'Draw a rectangle over the watermark before starting.',
      invalidTime: 'The time range is invalid. Correct the start and end values.',
    },
    thread: {
      fast: 'Multithreaded mode active',
      compat: 'Compatibility mode (single thread)',
      noticeTitle: 'Using compatibility mode',
      noticeText: 'Your browser does not support SharedArrayBuffer, so the tool uses a single-threaded core. Processing may be slower, but it works in most browsers.',
    },
    localNote: 'Fully local — one video, no upload',
  },

  howItWorks: {
    title: 'How It Works',
    intro: 'Understanding what happens behind the scenes helps you choose the right settings. This page explains the delogo filter, its practical limits, and field-tested ways to get a clean result.',
    stepsTitle: 'How to use it',
    steps: [
      { title: 'Add your clip', text: 'Drag an MP4, MOV or WEBM file onto the tool. The file stays on your device the whole time.' },
      { title: 'Draw the rectangle', text: 'Mark the smallest rectangle that covers the watermark. Resize and move it with mouse or touch.' },
      { title: 'Pick the time', text: 'Set the start and end seconds, or keep the defaults to clean the entire clip.' },
      { title: 'Download the result', text: 'Press Process, watch the progress bar, then download the resulting MP4 to your device.' },
    ],
    contentTitle: 'Educational content: behind watermark removal',
    contentIntro: 'Not all watermarks are equal. The sections below cover the technical mechanism, the cases where it works, and the limits you should expect.',
    sections: [
      {
        title: 'How the delogo filter actually works',
        paragraphs: [
          'FFmpeg’s delogo filter relies on a simple idea: instead of deleting the pixels inside the rectangle, it rebuilds them from the surrounding area. The filter reads the colors along the edges of the rectangle and interpolates them inward using two-dimensional completion, then blends the result with the original frame with a soft transition at the borders.',
          'Because the interpolation depends on what surrounds the mark, success is tied to how uniform that background is. If the watermark sits over clear blue sky or a flat gray wall, the rebuilt area looks very convincing. If it sits over dense detail or fast motion, you may be left with a slightly smooth patch where the mark used to be.',
          'The filter runs frame by frame, and the enable option limits the effect to a chosen time interval. This is useful when the mark only appears in the first two seconds, or disappears halfway through; avoiding areas that need no work preserves the original image quality.',
        ],
        bullets: [
          'Edge pixels are sampled to guess the background color inside the region.',
          'The guess is blended with the original image to avoid hard borders.',
          'There is no “logo recognition”; the filter does not know what it removes, it only rebuilds pixels.',
        ],
      },
      {
        title: 'Where it works well, and where it does not',
        paragraphs: [
          'The method works best with stationary marks, calm or gradient backgrounds, and short clips. A small translucent logo in a corner is far easier than a wide band crossing the center of the frame.',
          'There are real limits. Marks that move or flicker are hard to track with a single rectangle. A mark sitting over a face, text, or moving object edges leaves a smoother patch because the algorithm cannot accurately guess the missing detail. Heavy compression in the source also makes edges less distinct for the filter.',
          'Re-encoding can introduce a small quality change across the whole frame, even outside the rectangle. We use moderate settings (veryfast preset, CRF 23) to balance speed and image quality, and the audio stream is copied without re-encoding whenever possible.',
        ],
        bullets: [
          'Best case: a small, static mark on a simple background.',
          'Hard case: a moving, wide mark, or one covering fine detail.',
          'The filter cannot restore real detail that was hidden behind the mark.',
        ],
      },
      {
        title: 'Practical tips for a better result',
        paragraphs: [
          'Keep the rectangle tight. Every extra pixel inside the selection is replaced with guessed data, so a smaller rectangle almost always looks better. Leave only a tiny margin to cover semi-transparent edges.',
          'Trim the clip to the part you actually need before processing. Fewer frames mean less processing time and less memory, which can be the difference between a successful run and a failed one on a phone.',
          'Start from the highest quality source you have. If you upload an already-compressed clip, the filter works on data that has already lost detail. Stepping through the result frame by frame in a player also helps you spot edge flicker early, so you can adjust the rectangle and re-run instead of wasting time.',
        ],
        bullets: [
          'Use the smallest rectangle that fully covers the mark.',
          'Process a short time range when that is enough.',
          'Always keep the original file before re-encoding.',
          'Check the result in more than one player before publishing.',
        ],
      },
      {
        title: 'Privacy and how your files are handled',
        paragraphs: [
          'The application is entirely static and has no processing server. When you choose a file, your browser reads it and passes it to a Web Worker running ffmpeg.wasm. There is no upload, no cloud storage, and no file log on our side.',
          'After you download the result, temporary object URLs are revoked. If you close the page or cancel processing, the worker is terminated and temporary data is discarded. The only things stored are your language preference and cookie decision, both kept in your own browser.',
        ],
        bullets: [],
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Are my videos uploaded to a server?', a: 'No. Everything runs in your browser with ffmpeg.wasm. No server ever receives your files.' },
      { q: 'Which formats are supported?', a: 'MP4, MOV and WEBM files up to 150 MB. The output is always an MP4 file.' },
      { q: 'Will the watermark always disappear completely?', a: 'Not always. It works best with static marks on simple backgrounds. Moving marks or marks covering important detail may leave a faint trace.' },
      { q: 'Why is processing slow on my phone?', a: 'Removing a mark requires re-encoding video. On a phone, memory is limited and the tool may need the single-threaded core. Try a shorter clip or a smaller file.' },
      { q: 'Can I use the tool on content I do not own?', a: 'No. You must own the content or have clear rights to modify it. See the Terms of Use.' },
      { q: 'Is the audio affected?', a: 'In normal cases the audio is not re-encoded; it is copied as-is, so its quality stays the same as the source.' },
    ],
    cta: 'Try the tool now',
  },

  terms: {
    title: 'Terms of Use',
    updated: 'Last updated: November 2026',
    sections: [
      {
        heading: 'Acceptance of terms',
        paragraphs: [
          'By using this website and the watermark removal tool, you agree to these terms. If you do not agree, do not use the tool.',
        ],
      },
      {
        heading: 'Ownership and legal rights',
        paragraphs: [
          'You must own the content you process or have clear legal permission from the rights holder to modify it and remove watermarks from it.',
          'You must not use this service to remove watermarks or logos from content you do not have rights to, from clips obtained without permission, or for any purpose that infringes copyright, trademark, or other rights.',
          'You are solely responsible for verifying your rights before using the tool and for any later use of the resulting file.',
        ],
      },
      {
        heading: 'Nature of the service',
        paragraphs: [
          'The tool runs locally in your browser and we never receive your files on a server. Third-party advertisements may be displayed according to the cookie policy.',
        ],
      },
      {
        heading: 'No warranty of results',
        paragraphs: [
          'The service is provided “as is”, without warranties of any kind, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.',
          'We do not guarantee that removal will be complete or flawless, or that the result will suit your purpose. Quality depends on the video, the mark, and the settings you choose.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, we are not liable for any damages or losses arising from use of the tool or from files produced by it.',
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'We reserve the right to update these terms at any time. Any change takes effect immediately when published on this page.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: November 2026',
    sections: [
      {
        heading: 'Your files stay in your browser',
        paragraphs: [
          'We do not upload the video files you choose to any server. Processing happens entirely inside your browser using ffmpeg.wasm, and the result is created as a local file you can download directly.',
          'We do not keep copies of your files, store them, or share them with any third party. When you close the page or cancel processing, temporary data is cleared from memory.',
        ],
      },
      {
        heading: 'Cookies and local preferences',
        paragraphs: [
          'We use localStorage in your browser to save your language preference and your decision to accept or reject ads. This data stays on your device and is never sent to us.',
          'If you reject ads, advertising network scripts are not loaded.',
        ],
      },
      {
        heading: 'Advertising data',
        paragraphs: [
          'We may display ads from third-party networks such as Google AdSense after you consent. These networks may use cookies or similar identifiers to serve relevant ads and measure performance, according to their own policies.',
          'You can change your decision at any time via the “Cookie settings” link in the footer. We do not control the data practices of ad networks and encourage you to review their policies.',
        ],
      },
      {
        heading: 'Usage analytics',
        paragraphs: [
          'We currently do not use any external analytics tools that track your use of the tool.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'For any privacy-related question, please visit the Contact page.',
        ],
      },
    ],
  },

  contact: {
    title: 'Contact Us',
    intro: 'Have a question, a suggestion, or a problem to report? Get in touch and we will try to reply as soon as we can.',
    emailLabel: 'Email address',
    emailHint: 'Send us a message describing the issue or suggestion. Please do not attach large video files.',
    topicsTitle: 'What we can help with',
    topics: [
      'Reporting a processing bug or a problem on a page',
      'Suggesting improvements or new features',
      'Questions about privacy and content rights',
      'Feedback on the Arabic or English translation',
    ],
    note: 'The address below is only used to reply to your message. We do not keep your personal data for other purposes.',
    noFormNote: 'There is no contact form in this version; use your email app.',
  },

  about: {
    title: 'About Us',
    intro: 'A simple tool with a clear goal: give you a fast, private way to clean watermarks from videos you have the rights to.',
    sections: [
      {
        heading: 'Why we built it',
        paragraphs: [
          'Many tools that clean video ask you to upload your file to an external server. That means waiting, size limits, and losing control over a file that may be sensitive.',
          'We decided to build an alternative that runs entirely in the browser: no account, no upload, no processing server. You open the page, process the clip, download the result, and the files stay on your device.',
        ],
      },
      {
        heading: 'How it works',
        paragraphs: [
          'We use ffmpeg.wasm inside a dedicated Web Worker so the interface never freezes during processing. The processing core is loaded only when work starts, using the multithreaded build when the browser supports it and a single-threaded build otherwise.',
          'The whole site is static and can be hosted for free, which makes it fast and easy to publish.',
        ],
      },
    ],
    principlesTitle: 'Our principles',
    principles: [
      { title: 'Privacy first', text: 'Your files never leave your device.' },
      { title: 'Lawful use', text: 'The tool is only for content you own or have the right to modify.' },
      { title: 'Clarity', text: 'We explain what the tool does and where it stops, instead of overpromising.' },
    ],
  },

  footer: {
    tagline: 'Local watermark removal, no file uploads.',
    productTitle: 'Product',
    legalTitle: 'Legal',
    copyright: 'All rights reserved.',
    localeNote: 'Available in Arabic and English',
    backToTop: 'Back to top',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
