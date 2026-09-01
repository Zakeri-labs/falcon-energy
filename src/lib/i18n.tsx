import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

const dict = {
  en: {
    brand: "Falcon Oilfield Services",
    tagline: "Wireline • Intervention • Reservoir Data",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    cta: {
      consult: "Request Consultation",
      explore: "Explore Services",
      whatsapp: "WhatsApp",
      talk: "Talk to an Expert",
      learn: "Learn more",
    },
    hero: {
      eyebrow: "Oman-based independent oilfield partner",
      title: "Wireline, Intervention & Reservoir Intelligence for Oman",
      sub: "Reliable well-service expertise, advanced technology, and safe field execution.",
      alt: "Falcon field engineers running wireline tools at a wellhead in the Oman desert",
    },
    trust: [
      "20+ Years Experience",
      "100+ Skilled Professionals",
      "11 Operational Units",
      "API Q2 Registered",
      "Oman Field Coverage",
    ],
    services: {
      eyebrow: "Capabilities",
      title: "Engineered well services, delivered with precision",
      sub: "A focused service portfolio built around measurable downhole outcomes.",
      items: [
        {
          title: "Wireline Logging & Formation Evaluation",
          desc: "Open and cased-hole logging suites that quantify porosity, saturation and lithology for confident reservoir decisions.",
        },
        {
          title: "Perforation & Well Intervention",
          desc: "Engineered perforating systems, plug setting and mechanical intervention executed under strict explosive-safety control.",
        },
        {
          title: "Reservoir Monitoring",
          desc: "Production logging, pressure and saturation surveillance to track reservoir behaviour across the field life cycle.",
        },
        {
          title: "Well Integrity Solutions",
          desc: "Casing, cement and corrosion evaluation programmes that protect barrier integrity and extend well life.",
        },
      ],
    },
    about: {
      eyebrow: "Who we are",
      title: "An independent Oman-based specialist for critical well operations",
      body: "Falcon Oilfield Services is an Oman-based independent partner delivering reliable wireline, intervention, and reservoir intelligence solutions for critical well operations. Our engineers combine field-hardened experience with international technology partnerships to deliver dependable data and repeatable results.",
      points: [
        {
          title: "Independent & local",
          desc: "Omani ownership with in-country bases, crews and logistics for rapid mobilisation.",
        },
        {
          title: "Engineering depth",
          desc: "Dedicated petrophysics and intervention engineering support on every scope.",
        },
        {
          title: "Global technology",
          desc: "Partnerships with international tool and software providers for proven systems.",
        },
        {
          title: "Safety first",
          desc: "API Q2 aligned management system with disciplined HSE assurance in the field.",
        },
      ],
      alt: "Falcon engineering team reviewing well log data in a field cabin",
    },
    work: {
      eyebrow: "Proof of capability",
      title: "Where our teams operate",
      sub: "Representative capability highlights. Imagery and figures are placeholders for client-approved content.",
      items: [
        {
          title: "Field Operations",
          desc: "24/7 rig-site and rigless crews mobilised across onshore Oman concessions.",
          tag: "Operations",
        },
        {
          title: "Technical Equipment",
          desc: "Maintained wireline units, tool strings and perforating hardware under full traceability.",
          tag: "Assets",
        },
        {
          title: "Engineering Team",
          desc: "In-house petrophysicists delivering interpretation and reporting turnaround.",
          tag: "People",
        },
        {
          title: "Safety Achievements",
          desc: "Sustained incident-free operating hours with continuous HSE auditing.",
          tag: "HSE",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A disciplined four-stage delivery model",
      steps: [
        {
          title: "Requirement Analysis",
          desc: "Well objectives, data gaps and constraints reviewed with your reservoir and operations teams.",
        },
        {
          title: "Technical Planning",
          desc: "Tool selection, programme design, risk assessment and mobilisation plan issued for approval.",
        },
        {
          title: "Field Execution",
          desc: "Certified crews execute on-site under toolbox-talk discipline and real-time quality control.",
        },
        {
          title: "Data Delivery & Support",
          desc: "Validated datasets, interpretation and post-job review delivered on agreed timelines.",
        },
      ],
    },
    testi: {
      eyebrow: "What partners say",
      title: "Trusted on critical wells",
      sub: "Placeholder testimonials for demonstration. Replace with approved client statements.",
      items: [
        {
          quote:
            "Mobilisation was fast and the logging data quality gave us the confidence to complete on schedule.",
          role: "Operations Manager, Onshore Operator",
        },
        {
          quote:
            "Their intervention planning was thorough and the safety discipline on site was visible from day one.",
          role: "Drilling Superintendent, E&P Company",
        },
        {
          quote:
            "Interpretation turnaround let our reservoir team make decisions within the same operational window.",
          role: "Reservoir Engineer, National Operator",
        },
      ],
      partners: "Partner & client logo placeholders",
    },
    contact: {
      eyebrow: "Start a scope",
      title: "Request a technical consultation",
      sub: "Share your well objectives and our engineering team will respond with a proposed programme and indicative timeline.",
      fields: {
        company: "Company Name",
        person: "Contact Person",
        service: "Service Required",
        location: "Field Location",
        timeline: "Project Timeline",
        message: "Message",
      },
      select: "Select a service",
      submit: "Send Enquiry",
      success: "Thank you — your enquiry has been recorded in this demo.",
      direct: "Prefer to talk directly?",
      email: "info@falconofs.com",
      phone: "+968 22321114",
      address: "18 November Street, Way No. 246, Block 270, Building 486, Muscat, Oman",
      hours: "We work 24 hours a day, 365 days a year",
    },
    footer: {
      slogan: "Reliable well data. Disciplined field execution.",
      navTitle: "Navigate",
      contactTitle: "Contact",
      followTitle: "Follow",
      rights: "All rights reserved. Demo website.",
      alt: "Aerial view of an oil and gas production facility in the Omani desert",
    },
    pages: {
      aboutTitle: "About Falcon",
      aboutSub: "Independent Omani expertise in wireline, intervention and reservoir intelligence.",
      servicesTitle: "Our Services",
      servicesSub: "Focused well-service capabilities engineered for measurable downhole outcomes.",
      contactTitle: "Contact Falcon",
      contactSub: "Our engineering desk responds to technical enquiries within one business day.",
    },
    lang: { label: "Language", en: "English", ar: "العربية" },
  },
  ar: {
    brand: "فالكون لخدمات حقول النفط",
    tagline: "الكابل السلكي • التدخل في الآبار • بيانات المكامن",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "أعمالنا",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا",
    },
    cta: {
      consult: "اطلب استشارة",
      explore: "استكشف الخدمات",
      whatsapp: "واتساب",
      talk: "تحدث إلى خبير",
      learn: "اعرف المزيد",
    },
    hero: {
      eyebrow: "شريك مستقل مقره سلطنة عُمان",
      title: "حلول الكابل السلكي والتدخل وذكاء المكامن لعُمان",
      sub: "خبرة موثوقة وتقنيات متقدمة وتنفيذ ميداني آمن لخدمات الآبار.",
      alt: "مهندسو فالكون يشغلون أدوات الكابل السلكي عند فوهة البئر في صحراء عُمان",
    },
    trust: [
      "أكثر من 20 عامًا من الخبرة",
      "أكثر من 100 متخصص",
      "11 وحدة تشغيلية",
      "مسجلة وفق API Q2",
      "تغطية ميدانية في عُمان",
    ],
    services: {
      eyebrow: "قدراتنا",
      title: "خدمات آبار هندسية تُنفَّذ بدقة",
      sub: "محفظة خدمات مركزة مبنية على نتائج قابلة للقياس في أعماق البئر.",
      items: [
        {
          title: "تسجيل الكابل السلكي وتقييم التكوين",
          desc: "برامج تسجيل للآبار المفتوحة والمغلفة تحدد المسامية والتشبع ونوع الصخور لدعم قرارات المكمن.",
        },
        {
          title: "التثقيب والتدخل في الآبار",
          desc: "أنظمة تثقيب هندسية وتركيب سدادات وتدخل ميكانيكي بضوابط سلامة صارمة للمواد المتفجرة.",
        },
        {
          title: "مراقبة المكامن",
          desc: "تسجيل الإنتاج ومراقبة الضغط والتشبع لتتبع سلوك المكمن خلال دورة حياة الحقل.",
        },
        {
          title: "حلول سلامة الآبار",
          desc: "برامج تقييم التغليف والأسمنت والتآكل لحماية الحواجز وإطالة عمر البئر.",
        },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "متخصص عُماني مستقل لعمليات الآبار الحرجة",
      body: "فالكون لخدمات حقول النفط شريك مستقل مقره سلطنة عُمان يقدم حلولاً موثوقة في الكابل السلكي والتدخل وذكاء المكامن لعمليات الآبار الحرجة. يجمع مهندسونا بين الخبرة الميدانية والشراكات التقنية الدولية لتقديم بيانات موثوقة ونتائج متسقة.",
      points: [
        { title: "استقلالية ومحلية", desc: "ملكية عُمانية مع قواعد وفرق ولوجستيات محلية لتعبئة سريعة." },
        { title: "عمق هندسي", desc: "دعم هندسي متخصص في الفيزياء الصخرية والتدخل لكل نطاق عمل." },
        { title: "تقنيات عالمية", desc: "شراكات مع مزودي أدوات وبرمجيات دوليين لأنظمة مُثبتة." },
        { title: "السلامة أولاً", desc: "نظام إدارة متوافق مع API Q2 وضمان صحة وسلامة منظم ميدانيًا." },
      ],
      alt: "فريق هندسة فالكون يراجع بيانات تسجيل الآبار في كابينة ميدانية",
    },
    work: {
      eyebrow: "إثبات القدرة",
      title: "حيث تعمل فرقنا",
      sub: "أبرز القدرات التمثيلية. الصور والأرقام عناصر بديلة لمحتوى معتمد من العميل.",
      items: [
        { title: "العمليات الميدانية", desc: "فرق عمل على مدار الساعة في مواقع الحفر وبدون حفر في عُمان.", tag: "العمليات" },
        { title: "المعدات الفنية", desc: "وحدات كابل سلكي وسلاسل أدوات ومعدات تثقيب مصانة بتتبع كامل.", tag: "الأصول" },
        { title: "الفريق الهندسي", desc: "متخصصون داخليون في الفيزياء الصخرية للتفسير وسرعة التقارير.", tag: "الكفاءات" },
        { title: "إنجازات السلامة", desc: "ساعات تشغيل متواصلة دون حوادث مع تدقيق مستمر للسلامة.", tag: "السلامة" },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "منهجية تنفيذ من أربع مراحل",
      steps: [
        { title: "تحليل المتطلبات", desc: "مراجعة أهداف البئر وفجوات البيانات والقيود مع فرق المكمن والعمليات." },
        { title: "التخطيط الفني", desc: "اختيار الأدوات وتصميم البرنامج وتقييم المخاطر وخطة التعبئة للاعتماد." },
        { title: "التنفيذ الميداني", desc: "فرق معتمدة تنفذ العمل بضوابط السلامة ومراقبة الجودة الفورية." },
        { title: "تسليم البيانات والدعم", desc: "بيانات مُتحقق منها وتفسير ومراجعة بعد العمل في المواعيد المتفق عليها." },
      ],
    },
    testi: {
      eyebrow: "آراء الشركاء",
      title: "موثوقون في الآبار الحرجة",
      sub: "شهادات توضيحية للعرض. يمكن استبدالها بشهادات معتمدة من العملاء.",
      items: [
        { quote: "كانت التعبئة سريعة وجودة بيانات التسجيل منحتنا الثقة لإكمال العمل في الموعد.", role: "مدير عمليات، مشغل بري" },
        { quote: "تخطيط التدخل كان شاملاً وانضباط السلامة في الموقع واضح من اليوم الأول.", role: "مشرف حفر، شركة استكشاف وإنتاج" },
        { quote: "سرعة التفسير سمحت لفريق المكمن باتخاذ القرارات داخل نفس النافذة التشغيلية.", role: "مهندس مكامن، مشغل وطني" },
      ],
      partners: "شعارات الشركاء والعملاء (عناصر بديلة)",
    },
    contact: {
      eyebrow: "ابدأ نطاق العمل",
      title: "اطلب استشارة فنية",
      sub: "شاركنا أهداف بئرك وسيرد فريقنا الهندسي ببرنامج مقترح وجدول زمني تقديري.",
      fields: {
        company: "اسم الشركة",
        person: "الشخص المسؤول",
        service: "الخدمة المطلوبة",
        location: "موقع الحقل",
        timeline: "الجدول الزمني للمشروع",
        message: "الرسالة",
      },
      select: "اختر خدمة",
      submit: "إرسال الطلب",
      success: "شكرًا لك — تم تسجيل طلبك في هذا العرض التجريبي.",
      direct: "تفضل التواصل المباشر؟",
      email: "info@falconofs.com",
      phone: "+968 22321114",
      address: "18 November Street, Way No. 246, Block 270, Building 486, Muscat, Oman",
      hours: "نعمل 24 ساعة يوميًا، 365 يومًا في السنة",
    },
    footer: {
      slogan: "بيانات آبار موثوقة. تنفيذ ميداني منظم.",
      navTitle: "التنقل",
      contactTitle: "اتصل بنا",
      followTitle: "تابعنا",
      rights: "جميع الحقوق محفوظة. موقع تجريبي.",
      alt: "منظر جوي لمنشأة إنتاج نفط وغاز في الصحراء العُمانية",
    },
    pages: {
      aboutTitle: "عن فالكون",
      aboutSub: "خبرة عُمانية مستقلة في الكابل السلكي والتدخل وذكاء المكامن.",
      servicesTitle: "خدماتنا",
      servicesSub: "قدرات خدمات آبار مركزة مصممة لنتائج قابلة للقياس.",
      contactTitle: "تواصل مع فالكون",
      contactSub: "يرد مكتبنا الهندسي على الاستفسارات الفنية خلال يوم عمل واحد.",
    },
    lang: { label: "اللغة", en: "English", ar: "العربية" },
  },
} as const;

type Dict = typeof dict.en;

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  dir: "ltr" | "rtl";
  isRtl: boolean;
}>({ lang: "en", setLang: () => {}, t: dict.en, dir: "ltr", isRtl: false });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("falcon-lang");
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.classList.toggle("font-arabic", lang === "ar");
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("falcon-lang", l);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dict[lang] as unknown as Dict,
      dir: (lang === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
      isRtl: lang === "ar",
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
