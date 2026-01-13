// script.js

// ===================== HELPERS =====================
function $(id){ return document.getElementById(id); }
function getLang(){ return document.documentElement.lang || "en"; }

// ===================== DICTIONARY (EN/AR) =====================
const dictionary = {
  en: {
    nav_home: "Home",
    nav_paths: "Paths",
    nav_try: "Try AI",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Get Started",

    hero_badge: "Practical learning • Real projects",
    hero_title: 'Learn AI <span class="grad">Practically</span>',
    hero_sub: "Choose a goal, follow a clear path, and build a real project you can show.",
    hero_cta: "Start Free",
    hero_secondary: "Try a mini AI demo",

    stat_lessons: "Bite-size lessons",
    stat_paths: "Learning paths",
    stat_weeks: "Weeks per project",

    hero_card_title: "What you’ll build",
    mini1_title: "Email Assistant",
    mini1_sub: "Write + summarize professionally",
    mini2_title: "Data Insights",
    mini2_sub: "Turn numbers into decisions",
    mini3_title: "Content Engine",
    mini3_sub: "Plan + create content faster",
    hero_card_cta: "Build your first project",
    hero_card_note: "No prior AI experience needed.",

    trusted_title: "Trusted by builders using",

    features_title: "Why PracticalAI?",
    features_sub: "Simple steps, clear outcomes, and minimal confusion.",
    f1_title: "Fast to start",
    f1_sub: "Short lessons + guided templates.",
    f2_title: "Clear path",
    f2_sub: "You always know the next step.",
    f3_title: "Real projects",
    f3_sub: "Build something you can show.",

    paths_title: "Build your learning path",
    paths_sub: "Choose your goal, then customize the plan. Price and project update instantly.",
    live: "Live preview",
    choose_goal: "Choose a goal",
    goal_work: "AI for Work",
    goal_data: "AI for Data",
    goal_content: "AI for Content",
    goal_career: "AI for Career",
    goal_sales: "AI for Sales",
    goal_study: "AI for Study",
    level: "Level",
    pace: "Pace (hours/week)",
    duration: "Duration",
    style: "Learning style",
    hrs_week: "hrs/week",
    per_month: "per month",
    week: "week",
    weeks: "weeks",
    lvl_beginner: "Beginner",
    lvl_intermediate: "Intermediate",
    lvl_advanced: "Advanced",
    style_templates: "Templates",
    style_hands: "Hands-on",
    style_guided: "Guided",
    build_btn: "Build my path",
    builder_note: "This is a demo interaction — your selections update the path instantly.",
    kpi_project: "Project",
    kpi_outcome: "Outcome",
    kpi_time: "Est. time",
    copy_plan: "Copy plan",

    try_title: "Try a mini AI demo",
    try_sub: "Pick a use-case, enter a topic, and generate a structured prompt.",
    usecase: "Use-case",
    topic: "Topic",
    topic_hint: "Tip: be specific for better results.",
    generate: "Generate",
    output: "Generated prompt",
    copy: "Copy",
    uc_email: "Professional Email",
    uc_summary: "Summarize Text",
    uc_plan: "Study Plan",
    uc_linkedin: "LinkedIn Post",

    faq_title: "FAQ",
    faq_sub: "Quick answers before you start.",
    q1: "Do I need AI experience?",
    a1: "No. We start from practical basics and guide you step by step.",
    q2: "Is this for work or study?",
    a2: "Both. Pick your goal and the plan adapts to your pace and style.",
    q3: "What do I get at the end?",
    a3: "A real mini-project + reusable prompt templates and a clear workflow.",

    reg_title: "Start building today",
    reg_sub: "Leave your email and we’ll send you a quick starter kit + the first mini project.",
    reg_p1: "Beginner-friendly steps",
    reg_p2: "Real project templates",
    reg_p3: "Prompt packs + workflows",
    reg_note_title: "Tip:",
    reg_note: "Use a real goal (job, study, content) to get the best plan.",
    reg_name: "Name",
    reg_email: "Email",
    reg_goal: "Goal",

    // ✅ زر الفورم
    reg_btn: "SUBMIT",

    reg_msg_ok: "✅ Sent! (Demo) We’ll contact you soon.",
    reg_msg_need: "❌ Please enter a valid email.",

    footer_sub: "Learn AI practically by building real projects.",
    rights: "All rights reserved.",

    toast_built: "✅ Path updated!",
    toast_cta: "CTA:",
    toast_copied: "✅ Copied to clipboard!",
    toast_copy_fail: "❌ Copy failed. Try again."
  },

  ar: {
    nav_home: "الرئيسية",
    nav_paths: "المسارات",
    nav_try: "جرّب الذكاء",
    nav_faq: "الأسئلة",
    nav_contact: "تواصل",
    nav_cta: "ابدأ الآن",

    hero_badge: "تعلّم عملي • مشاريع حقيقية",
    hero_title: 'تعلّم الذكاء الاصطناعي <span class="grad">بشكل عملي</span>',
    hero_sub: "اختر هدفك، واتبع مسار واضح، وابدأ مشروع حقيقي تقدر تعرضه.",
    hero_cta: "ابدأ مجانًا",
    hero_secondary: "جرّب ديمو صغير",

    stat_lessons: "دروس قصيرة",
    stat_paths: "مسارات تعلّم",
    stat_weeks: "أسابيع لكل مشروع",

    hero_card_title: "هتعمل إيه؟",
    mini1_title: "مساعد الإيميلات",
    mini1_sub: "كتابة وتلخيص بشكل احترافي",
    mini2_title: "تحليلات البيانات",
    mini2_sub: "حوّل الأرقام لقرارات",
    mini3_title: "محرك المحتوى",
    mini3_sub: "خطّط واكتب أسرع",
    hero_card_cta: "ابدأ أول مشروع",
    hero_card_note: "مش محتاج خبرة مسبقة.",

    trusted_title: "مستخدم من خلال أدوات مثل",

    features_title: "ليه PracticalAI؟",
    features_sub: "خطوات بسيطة ونتائج واضحة بدون تعقيد.",
    f1_title: "بداية سريعة",
    f1_sub: "دروس قصيرة + قوالب جاهزة.",
    f2_title: "مسار واضح",
    f2_sub: "هتعرف دايمًا الخطوة الجاية.",
    f3_title: "مشاريع حقيقية",
    f3_sub: "اعمل حاجة تقدر تعرضها.",

    paths_title: "ابني مسار التعلّم بتاعك",
    paths_sub: "اختر الهدف وخصص الخطة. السعر والمشروع بيتغيروا فورًا.",
    live: "تحديث مباشر",
    choose_goal: "اختار هدفك",
    goal_work: "للشغل",
    goal_data: "للبيانات",
    goal_content: "للمحتوى",
    goal_career: "للكارير",
    goal_sales: "للمبيعات",
    goal_study: "للدراسة",
    level: "المستوى",
    pace: "الوتيرة (ساعات/أسبوع)",
    duration: "المدة",
    style: "طريقة التعلّم",
    hrs_week: "ساعات/أسبوع",
    per_month: "شهريًا",
    week: "أسبوع",
    weeks: "أسابيع",
    lvl_beginner: "مبتدئ",
    lvl_intermediate: "متوسط",
    lvl_advanced: "متقدم",
    style_templates: "قوالب",
    style_hands: "عملي",
    style_guided: "موجّه",
    build_btn: "ابني الخطة",
    builder_note: "دي ديمو — اختياراتك بتحدّث الخطة فورًا.",
    kpi_project: "المشروع",
    kpi_outcome: "النتيجة",
    kpi_time: "الوقت المتوقع",
    copy_plan: "نسخ الخطة",

    try_title: "جرّب ديمو بسيط",
    try_sub: "اختار استخدام، اكتب موضوع، وهنطلع Prompt منظم.",
    usecase: "الاستخدام",
    topic: "الموضوع",
    topic_hint: "نصيحة: كل ما تكون محدد النتيجة أحسن.",
    generate: "توليد",
    output: "Prompt الناتج",
    copy: "نسخ",
    uc_email: "إيميل احترافي",
    uc_summary: "تلخيص نص",
    uc_plan: "خطة مذاكرة",
    uc_linkedin: "بوست لينكدإن",

    faq_title: "أسئلة شائعة",
    faq_sub: "إجابات سريعة قبل ما تبدأ.",
    q1: "هل لازم أكون فاهم AI؟",
    a1: "لا. هنبدأ من الأساسيات العملية ونمشي خطوة خطوة.",
    q2: "ده للشغل ولا للدراسة؟",
    a2: "الاتنين. اختار هدفك والخطة هتتكيّف مع وقتك وطريقتك.",
    q3: "هستفيد إيه في الآخر؟",
    a3: "مشروع صغير حقيقي + قوالب Prompts قابلة لإعادة الاستخدام.",

    reg_title: "ابدأ النهارده",
    reg_sub: "سيب إيميلك وهنبعتلك Starter Kit سريع + أول مشروع صغير.",
    reg_p1: "خطوات سهلة للمبتدئين",
    reg_p2: "قوالب مشاريع جاهزة",
    reg_p3: "حزم Prompts و Workflows",
    reg_note_title: "نصيحة:",
    reg_note: "اختار هدف حقيقي (شغل/دراسة/محتوى) عشان تطلع أفضل خطة.",
    reg_name: "الاسم",
    reg_email: "الإيميل",
    reg_goal: "الهدف",

    // ✅ زر الفورم بالعربي (لو عايزه بالإنجليزي حتى في العربي قولّي)
    reg_btn: "إرسال",

    reg_msg_ok: "✅ تم الإرسال! (Demo) هنرجعلك قريب.",
    reg_msg_need: "❌ من فضلك اكتب إيميل صحيح.",

    footer_sub: "اتعلم AI عمليًا عن طريق مشاريع حقيقية.",
    rights: "جميع الحقوق محفوظة.",

    toast_built: "✅ تم تحديث الخطة!",
    toast_cta: "زر البدء:",
    toast_copied: "✅ تم النسخ!",
    toast_copy_fail: "❌ فشل النسخ. جرّب تاني."
  }
};

function t(key){
  const lang = getLang();
  return (dictionary[lang] && dictionary[lang][key]) ? dictionary[lang][key] : key;
}

// ===================== PATH DATA =====================
const pathData = {
  work: {
    en: {
      title:"AI for Work", desc:"Automate emails, summaries and daily tasks.", basePrice:19, cta:"Start Work Path",
      project:{ beginner:"Smart Email Assistant", intermediate:"Meeting Notes Automator", advanced:"Personal Workflow System" },
      outcome:{ beginner:"Save 3–5 hours/week", intermediate:"Reduce busywork by 30%", advanced:"Build repeatable AI workflows" },
      steps:{
        templates:["Define use-cases","Use templates & checklists","Ship your mini assistant"],
        hands:["Collect real examples","Test prompts hands-on","Integrate into your routine"],
        guided:["Follow guided lessons","Build step-by-step","Deliver final project"]
      }
    },
    ar: {
      title:"للشغل", desc:"أتمتة الإيميلات والتلخيص والمهام اليومية.", basePrice:19, cta:"ابدأ مسار الشغل",
      project:{ beginner:"مساعد إيميلات ذكي", intermediate:"تلخيص اجتماعات تلقائي", advanced:"نظام شغل شخصي بالـ AI" },
      outcome:{ beginner:"توفير 3–5 ساعات أسبوعيًا", intermediate:"تقليل المهام الروتينية 30%", advanced:"عمل Workflows قابلة للتكرار" },
      steps:{
        templates:["تحديد الاستخدامات","قوالب وقوائم جاهزة","تسليم مساعد بسيط"],
        hands:["جمع أمثلة حقيقية","تجربة Prompts عمليًا","تطبيقها في روتينك"],
        guided:["دروس موجّهة","بناء خطوة بخطوة","تسليم المشروع النهائي"]
      }
    }
  },

  data: {
    en: {
      title:"AI for Data", desc:"Analyze data and generate insights faster.", basePrice:21, cta:"Start Data Path",
      project:{ beginner:"Insights Report Template", intermediate:"Auto KPI Summary Bot", advanced:"Insight-to-Action Dashboard" },
      outcome:{ beginner:"Explain trends clearly", intermediate:"Faster reporting cycles", advanced:"Decisions backed by insights" },
      steps:{
        templates:["Pick metrics","Use analysis templates","Write insight story"],
        hands:["Explore dataset","Ask smart questions","Validate insights"],
        guided:["Guided EDA","Build insights","Present results"]
      }
    },
    ar: {
      title:"للبيانات", desc:"تحليل البيانات وتوليد Insights أسرع.", basePrice:21, cta:"ابدأ مسار البيانات",
      project:{ beginner:"قالب تقرير Insights", intermediate:"بوت تلخيص KPIs", advanced:"Dashboard يدعم القرار" },
      outcome:{ beginner:"شرح الترند بوضوح", intermediate:"تسريع التقارير", advanced:"قرارات مبنية على بيانات" },
      steps:{
        templates:["اختيار المقاييس","قوالب تحليل جاهزة","كتابة قصة البيانات"],
        hands:["استكشاف الداتا","أسئلة ذكية","تأكيد الاستنتاجات"],
        guided:["EDA موجّه","بناء Insights","عرض النتائج"]
      }
    }
  },

  content: {
    en: {
      title:"AI for Content", desc:"Create content faster without losing quality.", basePrice:18, cta:"Start Content Path",
      project:{ beginner:"14-Day Content Plan", intermediate:"Content Repurposing System", advanced:"Multi-Channel Content Engine" },
      outcome:{ beginner:"Consistent posting", intermediate:"More output with less time", advanced:"Scalable content workflow" },
      steps:{
        templates:["Pick niche","Use post templates","Publish weekly"],
        hands:["Write drafts","Refine tone","Track performance"],
        guided:["Guided prompts","Weekly review","Improve & repeat"]
      }
    },
    ar: {
      title:"للمحتوى", desc:"توليد محتوى أسرع بجودة أحسن.", basePrice:18, cta:"ابدأ مسار المحتوى",
      project:{ beginner:"خطة محتوى 14 يوم", intermediate:"نظام إعادة تدوير المحتوى", advanced:"محرك محتوى متعدد القنوات" },
      outcome:{ beginner:"نشر منتظم", intermediate:"محتوى أكتر بوقت أقل", advanced:"Workflow قابل للتوسع" },
      steps:{
        templates:["اختيار النيتش","قوالب منشورات","نشر أسبوعيًا"],
        hands:["كتابة مسودات","تحسين الأسلوب","متابعة الأداء"],
        guided:["Prompts موجّهة","مراجعة أسبوعية","تحسين وتكرار"]
      }
    }
  },

  career: {
    en: {
      title:"AI for Career", desc:"Upgrade your CV, interviews and job search with AI.", basePrice:20, cta:"Start Career Path",
      project:{ beginner:"ATS-Friendly CV", intermediate:"Interview Q&A Pack", advanced:"Job Search Automation Kit" },
      outcome:{ beginner:"Clear CV & LinkedIn", intermediate:"Better interview answers", advanced:"Faster job applications" },
      steps:{
        templates:["Pick target roles","Optimize CV","Draft cover letter"],
        hands:["Rewrite bullets","Practice questions","Track applications"],
        guided:["Guided rewrite","Mock interview","Iterate & improve"]
      }
    },
    ar: {
      title:"للكارير", desc:"تطوير السيرة والمقابلات والبحث عن وظيفة بالـ AI.", basePrice:20, cta:"ابدأ مسار الكارير",
      project:{ beginner:"CV مناسب لـ ATS", intermediate:"باك أسئلة مقابلات", advanced:"أتمتة التقديمات" },
      outcome:{ beginner:"CV و LinkedIn أقوى", intermediate:"إجابات مقابلات أحسن", advanced:"تقديمات أسرع" },
      steps:{
        templates:["تحديد الوظيفة المستهدفة","تحسين الـ CV","خطاب تقديم"],
        hands:["إعادة صياغة البنود","تدريب مقابلات","متابعة التقديمات"],
        guided:["تعديل موجّه","مقابلة تجريبية","تحسين متكرر"]
      }
    }
  },

  sales: {
    en: {
      title:"AI for Sales", desc:"Write outreach messages and handle objections better.", basePrice:22, cta:"Start Sales Path",
      project:{ beginner:"Cold Email Pack", intermediate:"Objection Handling Scripts", advanced:"Sales Enablement Library" },
      outcome:{ beginner:"Better outreach replies", intermediate:"Higher conversion", advanced:"Repeatable sales system" },
      steps:{
        templates:["Define ICP","Write sequences","Send & iterate"],
        hands:["Test messages","Track responses","Improve scripts"],
        guided:["Guided sequences","Review weekly","Optimize funnel"]
      }
    },
    ar: {
      title:"للمبيعات", desc:"كتابة رسائل بيع والتعامل مع الاعتراضات بشكل أفضل.", basePrice:22, cta:"ابدأ مسار المبيعات",
      project:{ beginner:"باك رسائل بيع", intermediate:"سكريبتات اعتراضات", advanced:"مكتبة مبيعات كاملة" },
      outcome:{ beginner:"ردود أفضل", intermediate:"تحويل أعلى", advanced:"نظام بيع قابل للتكرار" },
      steps:{
        templates:["تحديد العميل المثالي","كتابة تسلسل رسائل","إرسال وتحسين"],
        hands:["اختبار الرسائل","متابعة النتائج","تحسين السكريبت"],
        guided:["تسلسلات موجّهة","مراجعة أسبوعية","تحسين الفانل"]
      }
    }
  },

  study: {
    en: {
      title:"AI for Study", desc:"Study smarter with summaries, quizzes and plans.", basePrice:17, cta:"Start Study Path",
      project:{ beginner:"Smart Study Plan", intermediate:"Quiz Generator Pack", advanced:"Personal Study System" },
      outcome:{ beginner:"More focus", intermediate:"Faster understanding", advanced:"Long-term learning system" },
      steps:{
        templates:["Pick subjects","Plan schedule","Review weekly"],
        hands:["Summarize lessons","Generate quizzes","Track weak points"],
        guided:["Guided planning","Weekly review","Improve strategy"]
      }
    },
    ar: {
      title:"للدراسة", desc:"مذاكرة أذكى بالتلخيص والكويزات والخطط.", basePrice:17, cta:"ابدأ مسار الدراسة",
      project:{ beginner:"خطة مذاكرة ذكية", intermediate:"باك توليد كويزات", advanced:"نظام مذاكرة شخصي" },
      outcome:{ beginner:"تركيز أعلى", intermediate:"فهم أسرع", advanced:"نظام تعلّم طويل المدى" },
      steps:{
        templates:["تحديد المواد","جدول مذاكرة","مراجعة أسبوعية"],
        hands:["تلخيص الدروس","توليد كويز","تحديد نقاط الضعف"],
        guided:["تخطيط موجّه","مراجعة أسبوعية","تحسين الاستراتيجية"]
      }
    }
  }
};

// ===================== PROMPT TEMPLATES =====================
const promptTemplates = {
  en: {
    email: (topic) => `You are a professional assistant.
Write a concise email about: "${topic}"
Constraints:
- Friendly and professional tone
- 120–180 words
- Clear subject line
Output: Subject + Email body.`,
    summary: (topic) => `You are an expert summarizer.
Summarize: "${topic}"
Output:
- 5 key points
- 1 short conclusion
- Action items (if any)`,
    plan: (topic) => `You are a tutor.
Create a 7-day study plan for: "${topic}"
Include:
- Daily goal
- 2 resources
- Practice task each day`,
    linkedin: (topic) => `You are a LinkedIn ghostwriter.
Write a short post about: "${topic}"
- Hook first line
- Short story/example
- 3 takeaways
- End with a question`
  },
  ar: {
    email: (topic) => `أنت مساعد احترافي.
اكتب إيميل مختصر عن: "${topic}"
الشروط:
- أسلوب ودّي واحترافي
- 120–180 كلمة
- عنوان واضح
المخرجات: العنوان + نص الإيميل.`,
    summary: (topic) => `أنت خبير تلخيص.
لخّص: "${topic}"
المخرجات:
- 5 نقاط أساسية
- خاتمة قصيرة
- خطوات تنفيذية (إن وجدت)`,
    plan: (topic) => `أنت مدرس.
اعمل خطة مذاكرة 7 أيام لـ: "${topic}"
تتضمن:
- هدف يومي
- مصدرين
- مهمة تدريب يومية`,
    linkedin: (topic) => `أنت كاتب محتوى للينكدإن.
اكتب بوست قصير عن: "${topic}"
- Hook في أول سطر
- مثال/قصة قصيرة
- 3 نقاط
- سؤال في النهاية`
  }
};

// ===================== APP STATE =====================
let state = { goal:"work", level:"beginner", pace:6, weeks:2, style:"templates" };
let toastTimer = null;

// ===================== UI FUNCTIONS =====================
function setThemeIcon(theme){
  $("themeToggle").textContent = theme === "light" ? "☀️" : "🌙";
}

function applyLanguage(lang){
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  $("langToggle").textContent = isAr ? "AR" : "EN";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dictionary[lang] && dictionary[lang][key]) el.innerHTML = dictionary[lang][key];
  });

  const topicInput = $("topicInput");
  if(topicInput){
    topicInput.placeholder = isAr ? "مثال: التقديم لوظيفة محلل بيانات" : "e.g., apply for a data analyst role";
  }
}

function showToast(msg){
  const toast = $("toast");
  toast.textContent = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.textContent = "", 2200);
}

function refreshPath(animate=false){
  const lang = getLang();
  const d = pathData[state.goal][lang];
  const box = $("resultBox");

  if(animate){
    box.style.opacity = "0";
    box.style.transform = "translateY(8px)";
  }

  setTimeout(() => {
    $("pathTitle").textContent = d.title;
    $("pathDesc").textContent = d.desc;
    $("pathProject").textContent = d.project[state.level];
    $("pathOutcome").textContent = d.outcome[state.level];
    $("paceValue").textContent = state.pace;
    $("timeValue").textContent = state.pace;

    const base = d.basePrice;
    const levelFactor = state.level === "beginner" ? 0 : state.level === "intermediate" ? 6 : 12;
    const paceFactor = Math.max(0, state.pace - 6) * 1.5;
    const weeksFactor = state.weeks === 1 ? -2 : state.weeks === 4 ? 6 : 0;
    const price = Math.round(base + levelFactor + paceFactor + weeksFactor);
    $("priceTag").textContent = `$${price}`;

    const steps = d.steps[state.style];
    $("s1").textContent = steps[0];
    $("s2").textContent = steps[1];
    $("s3").textContent = steps[2];
    $("ctaBtn").textContent = d.cta;

    if(animate){
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  }, animate ? 160 : 0);
}

function buildPlanText(){
  const lang = getLang();
  const d = pathData[state.goal][lang];
  const weeksLabel = state.weeks === 1 ? t("week") : t("weeks");
  return [
    `PracticalAI Plan`,
    `Goal: ${d.title}`,
    `Level: ${t("lvl_"+state.level)}`,
    `Pace: ${state.pace} hrs/week`,
    `Duration: ${state.weeks} ${weeksLabel}`,
    `Style: ${t("style_"+state.style)}`,
    `Project: ${d.project[state.level]}`,
    `Outcome: ${d.outcome[state.level]}`,
    `Steps:`,
    `1) ${d.steps[state.style][0]}`,
    `2) ${d.steps[state.style][1]}`,
    `3) ${d.steps[state.style][2]}`
  ].join("\n");
}

function refreshPrompt(animate=false){
  const lang = getLang();
  const isAr = lang === "ar";
  const topic = ($("topicInput").value || "").trim() || (isAr ? "اكتب موضوعك هنا" : "Type your topic here");
  const uc = $("usecaseSelect").value;
  const prompt = promptTemplates[lang][uc](topic);
  const box = $("promptBox");

  if(animate){
    box.style.opacity = "0.2";
    setTimeout(()=>{ box.textContent = prompt; box.style.opacity="1"; }, 120);
  }else{
    box.textContent = prompt;
  }
}

// ===================== NAV / MENU =====================
function closeMobileMenu(){
  const navGroup = $("navGroup");
  const btn = $("menuBtn");
  navGroup.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}
function toggleMobileMenu(){
  const navGroup = $("navGroup");
  const btn = $("menuBtn");
  const isOpen = navGroup.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
}

// ===================== FEATURES IMAGE SWITCH =====================
function initFeaturesImageSwitch(){
  const img = document.getElementById("featuresImg");
  if(!img) return;

  const images = [
    "assets/slide1.jpg",
    "assets/slide2.jpg",
    "assets/slide3.jpg"
  ];

  let index = 0;

  // تأكيد أول صورة + ستايل حركة
  img.src = images[0];
  img.style.opacity = "1";

  setInterval(() => {
    index = (index + 1) % images.length;

    // اختفاء ناعم
    img.style.opacity = "0";
    img.style.transform = "scale(0.97)";

    setTimeout(() => {
      img.src = images[index];

      // ظهور ناعم
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, 280);

  }, 3000);
}

// ===================== INIT =====================
document.addEventListener("DOMContentLoaded", () => {
  // Theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  setThemeIcon(savedTheme);

  // Language
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  // ✅ Features slider init (مرة واحدة)
  initFeaturesImageSwitch();

  // Mobile menu
  $("menuBtn").addEventListener("click", toggleMobileMenu);
  document.querySelectorAll(".nav-link").forEach(a => {
    a.addEventListener("click", () => closeMobileMenu());
  });
  document.addEventListener("click", (e) => {
    const nav = document.querySelector(".navbar");
    if(!nav.contains(e.target)) closeMobileMenu();
  });

  // CTA scroll
  const scrollToInteractive = () => document.querySelector("#interactive").scrollIntoView({behavior:"smooth"});
  $("nav-cta").addEventListener("click", () => { closeMobileMenu(); scrollToInteractive(); });
  $("hero-cta").addEventListener("click", scrollToInteractive);
  $("hero-card-cta").addEventListener("click", scrollToInteractive);

  // Theme toggle
  $("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setThemeIcon(next);
  });

  // Language toggle
  $("langToggle").addEventListener("click", () => {
    const current = getLang();
    const next = current === "en" ? "ar" : "en";
    localStorage.setItem("lang", next);
    applyLanguage(next);
    refreshPath();
    refreshPrompt();
  });

  // Builder controls
  $("paceRange").value = state.pace;
  $("paceValue").textContent = state.pace;

  $("paceRange").addEventListener("input", () => {
    state.pace = Number($("paceRange").value);
    refreshPath();
  });

  $("levelSelect").addEventListener("change", () => { state.level = $("levelSelect").value; refreshPath(); });
  $("weeksSelect").addEventListener("change", () => { state.weeks = Number($("weeksSelect").value); refreshPath(); });
  $("styleSelect").addEventListener("change", () => { state.style = $("styleSelect").value; refreshPath(); });

  document.querySelectorAll(".goal").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".goal").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.goal = btn.dataset.goal;
      refreshPath(true);
    });
  });

  $("buildBtn").addEventListener("click", () => {
    showToast(t("toast_built"));
    $("resultBox").scrollIntoView({behavior:"smooth", block:"center"});
  });

  $("ctaBtn").addEventListener("click", () => showToast(t("toast_cta")+" "+$("ctaBtn").textContent));

  $("copyPlanBtn").addEventListener("click", async () => {
    try{ await navigator.clipboard.writeText(buildPlanText()); showToast(t("toast_copied")); }
    catch{ showToast(t("toast_copy_fail")); }
  });

  // Playground
  $("genBtn").addEventListener("click", () => refreshPrompt(true));
  $("copyPromptBtn").addEventListener("click", async () => {
    try{ await navigator.clipboard.writeText($("promptBox").textContent); showToast(t("toast_copied")); }
    catch{ showToast(t("toast_copy_fail")); }
  });

  // FAQ
  document.querySelectorAll(".faq-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = panel.classList.contains("open");
      document.querySelectorAll(".faq-panel").forEach(p => p.classList.remove("open"));
      if(!isOpen) panel.classList.add("open");
    });
  });

  // Register (demo) ✅ (بدون DOMContentLoaded جوه)
  const regForm = $("regForm");
  if(regForm){
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = ($("regEmail").value || "").trim();
      const msg = $("regMsg");

      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      msg.textContent = ok ? t("reg_msg_ok") : t("reg_msg_need");

      if(ok){
        setTimeout(() => {
          regForm.reset();
          msg.textContent = "";
        }, 1200);
      }
    });
  }

  // Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("show"); });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // First render
  refreshPath();
  refreshPrompt();
});
