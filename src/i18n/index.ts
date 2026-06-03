/* ─────────────────────────────────────────────────────────
   Octo Manus — Translations
   Languages: English (en) · Español (es) · Italiano (it)
   ───────────────────────────────────────────────────────── */

export type Lang = "en" | "es" | "it";

export interface Translations {
  nav: {
    about: string;
    services: string;
    industries: string;
    contact: string;
  };
  cta: {
    bookCall: string;
    exploreServices: string;
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    getInTouch: string;
    email: string;
    slogan: string;
    copyright: string;
    aiAdvisory: string;
    workflowAuto: string;
    aiAgents: string;
  };
  home: {
    heroH1: string[];
    heroSubtitle: string;
    heroBody: string;
    services: { title: string; desc: string }[];
    ctaH2: string;
    readyLabel: string;
  };
  about: {
    intro: {
      label: string;
      h1: string[];
      body: string;
      bodyStrong: string;
    };
    history: {
      label: string;
      h2: string[];
      p1: string;
      p1Bold1: string;
      p1Bold2: string;
      p2: string;
      p3: string;
      p4: string;
      founder1Role: string;
      founder1Title: string;
      founder1Desc: string;
      founder2Role: string;
      founder2Title: string;
      founder2Desc: string;
    };
    mission: {
      label: string;
      h2: string[];
      p1: string;
      p2: string;
      p3: string;
      stats: { stat: string; label: string; sub: string }[];
    };
    values: {
      label: string;
      h2: string[];
      intro: string;
      items: { title: string; highlight: string; desc: string }[];
    };
    cta: {
      label: string;
      h2: string[];
      body: string;
    };
  };
  industries: {
    navDropdownTitle: string;
    heroLabel: string;
    heroH1: string[];
    heroBody: string;
    supplyChain: { navLabel: string; shortLabel: string };
    retail: { navLabel: string; shortLabel: string };
    beauty: { navLabel: string; shortLabel: string };
  };
  services: {
    heroLabel: string;
    heroH1: string[];
    heroBody: string;
    exploreLabel: string;
    howWeWork: string;
    advisory: {
      badge: string;
      headline: string[];
      sub: string;
      intro: string;
      steps: { title: string; desc: string }[];
      benefits: { title: string; desc: string }[];
    };
    automation: {
      badge: string;
      headline: string[];
      sub: string;
      intro: string;
      steps: { title: string; desc: string }[];
      benefits: { stat: string; title: string; desc: string }[];
    };
    agents: {
      badge: string;
      headline: string[];
      sub: string;
      intro: string;
      steps: { title: string; desc: string }[];
      benefits: { stat?: string; title: string; desc: string }[];
    };
  };
  contact: {
    heroLabel: string;
    heroH1: string[];
    heroBody: string;
    reassurances: { text: string }[];
    fields: {
      companyName: string;
      companyPlaceholder: string;
      yourName: string;
      namePlaceholder: string;
      emailAddress: string;
      emailPlaceholder: string;
      phoneNumber: string;
      phonePlaceholder: string;
      industry: string;
      industryPlaceholder: string;
      industryOther: string;
      industryOtherPlaceholder: string;
      companySize: string;
      companySizePlaceholder: string;
      servicesLabel: string;
      descriptionLabel: string;
      descriptionPlaceholder: string;
      timelineLabel: string;
      timelinePlaceholder: string;
      budgetLabel: string;
      budgetPlaceholder: string;
      attachLabel: string;
      attachPlaceholder: string;
      attachHint: string;
    };
    industries: string[];
    companySizes: string[];
    services: { id: string; label: string }[];
    timelines: string[];
    budgets: string[];
    privacyText: string;
    privacyLink: string;
    submitLabel: string;
    sendingLabel: string;
    noPitch: string;
    successH1: string;
    successBody: string;
    successSub: string;
  };
}

/* ════════════════════════════════════════════
   ENGLISH
   ════════════════════════════════════════════ */
const en: Translations = {
  nav: {
    about: "About",
    services: "Services",
    industries: "Industries",
    contact: "Contact",
  },
  cta: {
    bookCall: "Book a Strategy Call",
    exploreServices: "Explore Services",
  },
  footer: {
    tagline: "Practical AI consulting for businesses that run on real operations, not theory.",
    company: "Company",
    services: "Services",
    getInTouch: "Get in touch",
    email: "info@octomanus.com",
    slogan: "AI consulting for the way business actually works.",
    copyright: `© ${new Date().getFullYear()} Octo Manus. All rights reserved.`,
    aiAdvisory: "AI Advisory",
    workflowAuto: "Workflow Automation",
    aiAgents: "AI Agents",
  },
  home: {
    heroH1: ["Turn Manual Work Into Intelligent Systems"],
    heroSubtitle: "AI — a Competitive Advantage for Every Business.",
    heroBody:
      "We help small and medium businesses use AI where it actually matters: repetitive admin, operational reporting, customer support, supplier follow-ups, product content, and workflow coordination. We advise, design, and build practical AI systems around your existing operations — without requiring your team to become technical or hire an internal engineering department.",
    services: [
      {
        title: "AI Advisory",
        desc: "Before you spend a single euro on AI tools, you need to know which ones are actually worth it for your business. We run a customised AI masterclass built around your specific operations — then stay with you for 3 months while you apply it.",
      },
      {
        title: "Automation & Workflows",
        desc: "Manual processes, copy-paste workflows, and information scattered across systems — we design intelligent automation that eliminates the friction and gives your team back the hours that matter.",
      },
      {
        title: "AI Agents",
        desc: "AI agents built for your specific workflows — available around the clock, consistent in quality, and designed to handle high-volume repetitive tasks so your team can focus on decisions that require human judgment.",
      },
    ],
    ctaH2: "Ready to stop doing manually\nwhat AI can do for you?",
    readyLabel: "Let's talk",
  },
  about: {
    intro: {
      label: "Our Story",
      h1: ["AI Is Not Magic.", "But the Results?", "Pretty Close."],
      body:
        "Octo Manus was created to help SMEs move from AI curiosity to practical implementation: clear use cases, realistic workflows, and tools your team can actually use.",
      bodyStrong: "",
    },
    history: {
      label: "Our History",
      h2: ["Two Professionals.", "One Frustration.", "A Lot of Spreadsheets."],
      p1: "Octo Manus was founded in Malta by two professionals from different sides of business: product, project management, and operations. What we had in common was simple: we had both seen teams lose hours every week to manual reporting, repeated coordination, disconnected tools, and processes that depended too much on individual effort.",
      p1Bold1: "",
      p1Bold2: "",
      p2: "Malta was the right place for that idea to take shape. As the country invests in AI literacy and makes advanced tools such as ChatGPT Plus and Microsoft 365 Personal Copilot more accessible to residents through national initiatives, one thing becomes clear: access to AI is no longer the hardest part. Knowing how to apply it well inside a real business is.",
      p3: "We also saw the gap between AI demonstrations and real implementation. AI looked impressive in theory, but in many businesses it failed because it was introduced without context, process understanding, or a clear adoption plan.",
      p4: "Octo Manus was created to close that gap — turning AI from a vague opportunity into practical systems that save time, improve consistency, and support the way teams already work.",
      founder1Role: "Co-Founder",
      founder1Title: "Product & Strategy",
      founder1Desc:
        "With a background in product development & strategic planning across fashion, e-commerce, and warehousing operations, we turn complex business needs into structured implementation plans. We define the right AI use cases, set priorities, map the rollout, and make sure ideas move from concept to execution without losing the team along the way.",
      founder2Role: "Co-Founder",
      founder2Title: "Operations & Delivery",
      founder2Desc:
        "Steeped in operations, our delivery-focused co-founder knows exactly where businesses lose time, money, and morale. She brings a practitioner's eye to AI implementation — ensuring every workflow we design is one your team will actually use (and quietly thank us for at 5 p.m. on a Friday).",
    },
    mission: {
      label: "Our Mission",
      h2: ["Make AI Your", "Most Productive", "Team Member."],
      p1: "Our mission is to democratise AI for small and medium businesses — guiding professionals to work hand-in-hand with intelligent systems that take over the repetitive, the time-consuming, and the frankly boring.",
      p2: "Because you didn't start your business to spend three hours formatting a report or chasing a supplier for an update that's already somewhere in your inbox.",
      p3: "You started it to build something. Let's give you back the time to do exactly that.",
      stats: [
        { stat: "80%", label: "of repetitive tasks", sub: "can be automated with the right AI workflows" },
        { stat: "10×", label: "faster processes", sub: "when AI agents handle the manual grunt work" },
        { stat: "0", label: "lines of code needed", sub: "from you — we handle the technical heavy lifting" },
        { stat: "∞", label: "industry curiosity", sub: "we learn your world before we touch your workflows" },
      ],
    },
    values: {
      label: "Our Values",
      h2: ["What We Stand For —", "And What We Won't Budge On."],
      intro:
        "These aren't values we wrote for a slide deck and then forgot about. They're the principles that shape every conversation, every workflow, and every recommendation we make.",
      items: [
        {
          title: "AI Is for Everyone",
          highlight: "No PhD required.",
          desc: "You don't need a computer science degree to benefit from AI. We translate the complexity so you can focus on what you do best — running your business.",
        },
        {
          title: "Collaboration First",
          highlight: "Your people + AI = unstoppable.",
          desc: "We don't replace your team — we extend it. Think of AI as a talented new colleague who never sleeps, never complains about Mondays, and handles the tedious stuff with a smile.",
        },
        {
          title: "Practical Over Hype",
          highlight: "Results, not buzzwords.",
          desc: "We do not recommend AI because it sounds impressive. We recommend it when it solves a real business problem: saving time, reducing manual work, improving consistency, or helping a team make better decisions.",
        },
        {
          title: "Growth Without Friction",
          highlight: "Start small, grow fast.",
          desc: "Our workflows are designed to scale with you. Start with one process, expand across the business. Small wins compound into major competitive advantage.",
        },
        {
          title: "Industry Fluency",
          highlight: "We speak your language.",
          desc: "From logistics to beauty, supply chains to client journeys — we immerse ourselves in your world before recommending a single tool. Context is everything.",
        },
        {
          title: "Long-Term Partnership",
          highlight: "In it for the long run.",
          desc: "We're not in the business of one-and-done implementations. We stay, we iterate, we improve. Because real transformation doesn't happen in a single sprint.",
        },
      ],
    },
    cta: {
      label: "Ready to start?",
      h2: ["Your AI collaborator", "is waiting to be introduced."],
      body: "No pitch, no pressure, no 47-page proposal. Just a conversation about your business and where AI can make an immediate difference.",
    },
  },
  industries: {
    navDropdownTitle: "Select an industry",
    heroLabel: "Industries",
    heroH1: ["The AI That Speaks", "Your Industry's Language."],
    heroBody:
      "Not every business runs the same way. Not every sector has the same pace, the same pressure points, or the same definition of a productive day. That's why our AI solutions are built around your industry — not around a generic use case.",
    supplyChain: {
      navLabel: "Supply Chain",
      shortLabel: "Supply Chain",
    },
    retail: {
      navLabel: "Retail & E-commerce",
      shortLabel: "Retail & E-commerce",
    },
    beauty: {
      navLabel: "Beauty & Wellness",
      shortLabel: "Beauty & Wellness",
    },
  },
  services: {
    heroLabel: "Services",
    heroH1: ["AI That Works the Way", "Your Business Does."],
    heroBody: "Advisory, automation, and AI agents — three services, one goal: less manual work and more output, designed with responsible AI, human oversight, and EU compliance in mind.",
    exploreLabel: "↓ Explore",
    howWeWork: "How we work",
    advisory: {
      badge: "AI Advisory",
      headline: ["Understand AI Before", "You Invest in It."],
      sub: "For teams that need a strategy before they need a tool.",
      intro: "Knowing AI exists isn't the same as knowing how to use it. We run practical training sessions tailored to your business and your team's roles — so when we leave, they know exactly which tools to use, how, and why it matters.",
      steps: [
        { title: "Discovery Call", desc: "We understand your operations, your team, and where AI fits." },
        { title: "Customised Masterclass", desc: "A hands-on session built entirely around your business. No generic slides." },
        { title: "3-Month Support", desc: "Ongoing guidance as you apply AI." },
      ],
      benefits: [
        { title: "Clarity Before You Spend", desc: "Know exactly where AI fits — and where it doesn't. No guesswork, no wasted budget on tools that don't match your business." },
        { title: "A Roadmap Built Around You", desc: "Not a generic framework. A prioritised plan based on your actual operations, team size, and real constraints." },
        { title: "Confidence at Every Step", desc: "Expert guidance before you commit — not a consultant who disappears after the deck is delivered." },
      ],
    },
    automation: {
      badge: "Automation & Workflows",
      headline: ["Less Manual Work.", "More of What Matters."],
      sub: "For operations that run on effort when they should run on systems.",
      intro: "Manual processes are expensive in ways that don't show up in a spreadsheet — time, morale, error rates, delayed decisions. We identify the workflows ready to be automated, build the systems that replace them, and make sure they fit how your team actually works. The goal isn't automation for its own sake. It's more capacity for the work that matters.",
      steps: [
        { title: "Discovery Call", desc: "We find where manual work is costing your operation the most." },
        { title: "Process Mapping", desc: "We document exactly how it's done, by whom, and where things break down." },
        { title: "Build & Integrate", desc: "We select the right tools, build the automations, and connect them to your existing stack." },
        { title: "Test & Launch", desc: "We run every automation against real data, resolve edge cases, and go live only when results are reliable." },
        { title: "20h Free Support", desc: "20 free hours within 2 months to answer questions, refine sessions, and make sure the learning sticks." },
      ],
      benefits: [
        { stat: "8–15h", title: "Recovered Every Week", desc: "Teams typically recover 8–15 hours per week once key manual processes are automated — every week, without anyone managing them." },
        { stat: "99.9%", title: "Accuracy Rate", desc: "Manual data entry fails 1–4% of the time — spiking to 40% under pressure. Automated pipelines don't mistype, skip steps, or forget." },
        { stat: "30–40%", title: "More Output. Same Team", desc: "Companies report a 30–40% productivity gain within the first year — handling more volume without adding headcount or overtime." },
      ],
    },
    agents: {
      badge: "AI Agents",
      headline: ["Some Work Doesn't Need", "to Wait for a Human."],
      sub: "For businesses where response time and consistency are non-negotiable.",
      intro: "An AI agent handles a specific task — customer inquiries, data processing, reporting, supplier follow-ups — without human intervention at every step. We design agents that understand your business context, operate within defined boundaries, and escalate to humans precisely when they should. Consistent, high-quality output at a scale your team couldn't maintain manually.",
      steps: [
        { title: "Discovery Call", desc: "We identify the task, scope, and boundaries." },
        { title: "Data \u0026 Logic Mapping", desc: "The inputs, outputs, and decisions the agent needs to make." },
        { title: "Agent Design", desc: "Boundaries, tone, and escalation — before code." },
        { title: "Training & Testing", desc: "Trained on your data, tested on edge cases." },
        { title: "Deploy & Monitor", desc: "Live, tracked, and ready to retrain." },
      ],
      benefits: [
        { title: "Always Available", desc: "Your agent handles enquiries around the clock — weekends, evenings, and holidays. Consistent quality, every time, without adding headcount." },
        { stat: "80%", title: "Routine Handled", desc: "Agents handle up to 80% of routine interactions, freeing your team for work that requires human judgement." },
        { title: "Consistent at Scale", desc: "Unlike humans, agents don't have off days. Every interaction is handled with the same quality, tone, and accuracy — regardless of volume." },
      ],
    },
  },
  contact: {
    heroLabel: "Contact",
    heroH1: ["Let's Talk About", "Your Business."],
    heroBody: "No pitch, no pressure. Tell us what you're working on and what you'd like to change — we'll come back within 1 business day.",
    reassurances: [
      { text: "Reply within 1 business day" },
      { text: "No sales call unless you want one" },
      { text: "First call is a free assessment" },
    ],
    fields: {
      companyName: "Company name",
      companyPlaceholder: "Your company name",
      yourName: "Your name",
      namePlaceholder: "First and last name",
      emailAddress: "Email address",
      emailPlaceholder: "info@yourcompany.com",
      phoneNumber: "Phone number",
      phonePlaceholder: "+39 000 000 0000",
      industry: "Industry",
      industryPlaceholder: "Select your industry",
      industryOther: "Please specify your industry",
      industryOtherPlaceholder: "Describe your industry",
      companySize: "Company size",
      companySizePlaceholder: "Select company size",
      servicesLabel: "Services interested in",
      descriptionLabel: "Tell us about your challenge",
      descriptionPlaceholder: "Describe what you'd like to automate, improve, or solve. The more context you give us, the more useful our first conversation will be.",
      timelineLabel: "When do you want to start?",
      timelinePlaceholder: "Select timeline",
      budgetLabel: "Budget range (optional)",
      budgetPlaceholder: "Select budget range",
      attachLabel: "Attach a file (optional)",
      attachPlaceholder: "Click to attach a brief, process doc, or screenshot",
      attachHint: "PDF, DOC, PNG, JPG, XLSX or CSV — max 10 MB",
    },
    industries: [
      "Supply Chain, Logistics & Warehousing",
      "Retail, E-commerce & Fashion",
      "Beauty & Wellness",
      "Other",
    ],
    companySizes: [
      "1–10 employees",
      "11–50 employees",
      "51–200 employees",
      "201–500 employees",
      "500+ employees",
    ],
    services: [
      { id: "ai-advisory", label: "AI Advisory" },
      { id: "automation", label: "Automation & Workflows" },
      { id: "ai-agents", label: "AI Agents" },
    ],
    timelines: [
      "As soon as possible",
      "Within 1–3 months",
      "3–6 months from now",
      "Just exploring for now",
    ],
    budgets: [
      "€2,000 – €5,000",
      "€5,000 – €15,000",
      "€15,000 – €50,000",
      "Over €50,000",
      "Prefer to discuss",
    ],
    privacyText: "I agree to the processing of my personal data in accordance with Octo Manus's",
    privacyLink: "Privacy Policy",
    submitLabel: "Send Enquiry",
    sendingLabel: "Sending…",
    noPitch: "No pitch. No sales pressure. Just an honest conversation about your business.",
    successH1: "Message received.",
    successBody: "We'll review your enquiry and come back to you within",
    successSub: "In the meantime, feel free to explore our services or industries pages.",
  },
};

/* ════════════════════════════════════════════
   ESPAÑOL — neutral international Spanish
   Tone: direct, warm, slightly playful
   ════════════════════════════════════════════ */
const es: Translations = {
  nav: {
    about: "Sobre Nosotras",
    services: "Servicios",
    industries: "Sectores",
    contact: "Contacto",
  },
  cta: {
    bookCall: "Reservar una Llamada Estratégica",
    exploreServices: "Ver Servicios",
  },
  footer: {
    tagline: "Sin complicaciones. Sin agobios. Solo IA que trabaja para tu negocio.",
    company: "Empresa",
    services: "Servicios",
    getInTouch: "Contacto",
    email: "info@octomanus.com",
    slogan: "IA que funciona como tú trabajas.",
    copyright: `© ${new Date().getFullYear()} Octo Manus. Todos los derechos reservados.`,
    aiAdvisory: "Asesoría de IA",
    workflowAuto: "Automatización de Procesos",
    aiAgents: "Agentes de IA",
  },
  home: {
    heroH1: ["Adopta la IA.", "Automatiza el Trabajo.", "Construye el Futuro."],
    heroSubtitle: "IA — Una Ventaja Competitiva para Cada Empresa",
    heroBody:
      "Ayudamos a las pequeñas y medianas empresas a convertir la IA en una ventaja competitiva real — sin la complejidad, el agobio ni la necesidad de contratar un equipo de ingenieros. Asesoría estratégica, automatización inteligente y agentes de IA construidos en torno a cómo funciona realmente tu negocio.",
    services: [
      {
        title: "Asesoría de IA",
        desc: "Antes de gastar un solo euro en herramientas de IA, necesitas saber cuáles merecen realmente la pena para tu negocio. Llevamos a cabo una masterclass de IA personalizada y construida en torno a tus operaciones específicas — y nos quedamos contigo 3 meses mientras la aplicas.",
      },
      {
        title: "Automatización de Procesos",
        desc: "Procesos manuales, flujos de trabajo basados en copiar y pegar, información repartida entre sistemas — diseñamos automatización inteligente que elimina la fricción y devuelve a tu equipo las horas que importan.",
      },
      {
        title: "Agentes de IA",
        desc: "Agentes de IA construidos para tus flujos de trabajo específicos — disponibles las 24 horas, consistentes en calidad y diseñados para gestionar las tareas repetitivas de alto volumen para que tu equipo se centre en lo que requiere criterio humano.",
      },
    ],
    ctaH2: "¿Lista para dejar de hacer manualmente\nlo que la IA puede hacer por ti?",
    readyLabel: "Hablemos",
  },
  about: {
    intro: {
      label: "Nuestra Historia",
      h1: ["La IA no es magia.", "¿Pero los resultados?", "Casi."],
      body:
        "Octo Manus nació de una convicción simple: toda profesional — independientemente del sector, el tamaño de su empresa o sus conocimientos técnicos — merece acceso a una IA que trabaje de verdad para ella. No alrededor de ella. No en su lugar.",
      bodyStrong: " Con ella.",
    },
    history: {
      label: "Nuestra Historia",
      h2: ["Dos Profesionales.", "Una Frustración.", "Demasiadas Hojas de Cálculo."],
      p1: "Octo Manus fue cofundada por dos profesionales de mundos muy distintos —",
      p1Bold1: "Gestión de Proyectos y Desarrollo de Producto",
      p1Bold2: "Operaciones",
      p2: "Habían visto lo que la IA podía hacer en demos de Silicon Valley. También la habían visto fracasar estrepitosamente cuando se implantaba en empresas reales sin contexto, sin guía y sin un plan. La brecha entre \"la IA es increíble\" y \"la IA funciona en mi negocio\" era enorme — e innecesaria.",
      p3: "Así nació Octo Manus para cerrar esa brecha. Inspirado en el pulpo — inteligente, adaptable, multibrazo y perfectamente capaz de gestionar ocho cosas a la vez — el estudio tiene la misión de hacer que la adopción de la IA sea práctica, humana e impactante para las pequeñas y medianas empresas.",
      p4: "Sin rodeos. Sin complejidad innecesaria. Solo resultados.",
      founder1Role: "Co-Fundadora",
      founder1Title: "Producto y Estrategia",
      founder1Desc:
        "Con experiencia en Gestión de Proyectos y Desarrollo de Producto, nuestra cofundadora estratégica lleva años convirtiendo requisitos complejos en hojas de ruta que realmente se implementan. Ahora hace lo mismo con la IA — trazando caminos claros desde el caos actual hasta la claridad futura.",
      founder2Role: "Co-Fundadora",
      founder2Title: "Operaciones y Entrega",
      founder2Desc:
        "Experta en operaciones, nuestra cofundadora operativa sabe exactamente dónde las empresas pierden tiempo, dinero y motivación. Aporta una visión práctica a la implementación de la IA — garantizando que cada proceso que diseñamos sea uno que tu equipo usará de verdad (y te agradecerá en silencio a las 5 del viernes).",
    },
    mission: {
      label: "Nuestra Misión",
      h2: ["Convierte la IA en", "Tu Colaborador", "Más Productivo."],
      p1: "Nuestra misión es democratizar la IA para las pequeñas y medianas empresas — guiando a las profesionales a trabajar mano a mano con sistemas inteligentes que se encarguen de lo repetitivo, lo que consume tiempo y, seamos honestas, lo aburrido.",
      p2: "Porque no creaste tu negocio para pasar tres horas formateando un informe o persiguiendo a un proveedor por una actualización que ya está en algún lugar de tu bandeja de entrada.",
      p3: "Lo creaste para construir algo. Recuperemos el tiempo para que puedas hacer exactamente eso.",
      stats: [
        { stat: "80%", label: "de las tareas repetitivas", sub: "pueden automatizarse con los flujos de trabajo de IA correctos" },
        { stat: "10×", label: "procesos más rápidos", sub: "cuando los agentes de IA gestionan el trabajo manual" },
        { stat: "0", label: "líneas de código necesarias", sub: "de tu parte — nosotras nos encargamos del trabajo técnico" },
        { stat: "∞", label: "curiosidad por el sector", sub: "conocemos tu mundo antes de tocar tus procesos" },
      ],
    },
    values: {
      label: "Nuestros Valores",
      h2: ["Lo Que Defendemos —", "Y en Lo Que No Cedemos."],
      intro:
        "Estos no son valores que escribimos para una presentación y luego olvidamos. Son los principios que dan forma a cada conversación, cada proceso y cada recomendación que hacemos.",
      items: [
        {
          title: "La IA es para Todas",
          highlight: "Sin doctorado necesario.",
          desc: "No necesitas un título en informática para beneficiarte de la IA. Traducimos la complejidad para que puedas centrarte en lo que mejor sabes hacer: dirigir tu negocio.",
        },
        {
          title: "La Colaboración es lo Primero",
          highlight: "Tu equipo + IA = imparable.",
          desc: "No reemplazamos a tu equipo — lo ampliamos. Piensa en la IA como una nueva compañera talentosa que nunca duerme, nunca se queja de los lunes y se encarga de las tareas tediosas con una sonrisa.",
        },
        {
          title: "Practicidad Antes que Hype",
          highlight: "Resultados, no palabras de moda.",
          desc: "Nos saltamos el bingo del lenguaje corporativo. Cada solución que recomendamos resuelve un problema real, ahorra horas reales y genera un retorno real — o no la recomendamos.",
        },
        {
          title: "Crecimiento Sin Fricción",
          highlight: "Empieza pequeño, crece rápido.",
          desc: "Nuestros flujos de trabajo están diseñados para escalar contigo. Empieza con un proceso, expándelo por toda la empresa. Las pequeñas victorias se convierten en grandes ventajas competitivas.",
        },
        {
          title: "Dominio del Sector",
          highlight: "Hablamos tu idioma.",
          desc: "Logística o estética, cadenas de suministro o experiencias de cliente — nos sumergimos en tu mundo antes de recomendar una sola herramienta. El contexto lo es todo.",
        },
        {
          title: "Alianza a Largo Plazo",
          highlight: "En esto para el largo plazo.",
          desc: "No somos de las que implementan y desaparecen. Nos quedamos, iteramos, mejoramos. Porque la transformación real no sucede en un solo sprint.",
        },
      ],
    },
    cta: {
      label: "¿Lista para empezar?",
      h2: ["Tu colaborador de IA", "está esperando que lo presentes."],
      body: "Sin discursos, sin presión, sin propuesta de 47 páginas. Solo una conversación sobre tu negocio y dónde la IA puede marcar una diferencia inmediata.",
    },
  },
  industries: {
    navDropdownTitle: "Elige un sector",
    heroLabel: "Sectores",
    heroH1: ["La IA Que Habla", "el Idioma de Tu Sector."],
    heroBody:
      "No todos los negocios funcionan igual. No todos los sectores tienen el mismo ritmo, los mismos puntos de presión o la misma definición de un día productivo. Por eso nuestras soluciones de IA se construyen en torno a tu sector — no en torno a un caso de uso genérico.",
    supplyChain: {
      navLabel: "Cadena de Suministro",
      shortLabel: "Cadena de Suministro",
    },
    retail: {
      navLabel: "Retail & E-commerce",
      shortLabel: "Retail & E-commerce",
    },
    beauty: {
      navLabel: "Belleza y Bienestar",
      shortLabel: "Belleza y Bienestar",
    },
  },
  services: {
    heroLabel: "Servicios",
    heroH1: ["Una IA que Funciona", "Como tu Negocio."],
    heroBody: "Tres servicios enfocados — asesoría, automatización y agentes — cada uno diseñado para ofrecer resultados medibles sin la complejidad que suele venir con la adopción de la IA.",
    exploreLabel: "↓ Explorar",
    howWeWork: "Cómo trabajamos",
    advisory: {
      badge: "Asesoría de IA",
      headline: ["Entiende la IA Antes", "de Invertir en Ella."],
      sub: "Para empresas que quieren avanzar con criterio — no solo con rapidez.",
      intro: "La mayoría de las empresas saben que necesitan hacer algo con la IA. Pocas saben exactamente qué, por dónde empezar o qué marcará realmente la diferencia. La Asesoría de IA combina orientación estratégica con una masterclass práctica construida en torno a tu negocio específico — para que acabes sabiendo exactamente qué puede hacer la IA por ti, cómo empezar y cómo evitar los errores costosos que cometen la mayoría de las empresas.",
      steps: [
        { title: "Llamada de Descubrimiento", desc: "Entendemos tu negocio y tus objetivos." },
        { title: "Masterclass Personalizada", desc: "Sesión práctica construida alrededor de tus operaciones." },
        { title: "Soporte de 3 Meses", desc: "Orientación continua mientras aplicas la IA." },
      ],
      benefits: [
        { title: "Claridad Antes de Gastar", desc: "Sabe exactamente dónde encaja la IA — y dónde no. Sin conjeturas, sin presupuesto desperdiciado en herramientas que no encajan con tu negocio." },
        { title: "Una Hoja de Ruta a Tu Medida", desc: "No es un marco genérico. Es un plan priorizado basado en tus operaciones reales, el tamaño de tu equipo y tus restricciones concretas." },
        { title: "Confianza en Cada Paso", desc: "Orientación experta antes de comprometerte — no un consultor que desaparece después de entregar la presentación." },
      ],
    },
    automation: {
      badge: "Automatización de Procesos",
      headline: ["Las Horas Invertidas en Trabajo Manual", "Cuestan Más de lo que Crees."],
      sub: "Para equipos de operaciones desbordados de tareas que no requieren juicio humano.",
      intro: "Los procesos manuales son costosos de formas que no aparecen en una hoja de cálculo — tiempo, motivación, tasas de error, decisiones retrasadas. Identificamos los flujos de trabajo listos para automatizarse, construimos los sistemas que los reemplazan y nos aseguramos de que encajen con la forma en que tu equipo trabaja realmente. El objetivo no es la automatización por sí misma. Es más capacidad para el trabajo que importa.",
      steps: [
        { title: "Llamada de Descubrimiento", desc: "Encontramos dónde el trabajo manual está costando más a tu operación." },
        { title: "Mapeo de Procesos", desc: "Documentamos exactamente qué se hace, quién lo hace y dónde las cosas fallan." },
        { title: "Construcción e Integración", desc: "Seleccionamos las herramientas adecuadas, construimos las automatizaciones y las conectamos a tu stack actual." },
        { title: "Prueba y Lanzamiento", desc: "Ejecutamos cada automatización con datos reales, resolvemos casos límite y lanzamos solo cuando los resultados son fiables." },
        { title: "20h de Soporte Gratuito", desc: "Veinte horas de soporte incluido en los primeros dos meses — para ajustar lo construido, responder preguntas y asegurarnos de que tu equipo esté completamente seguro." },
      ],
      benefits: [
        { stat: "8–15h", title: "Recuperadas Cada Semana", desc: "Los equipos suelen recuperar entre 8 y 15 horas semanales una vez que se automatizan los procesos manuales clave — cada semana, sin que nadie los gestione." },
        { stat: "~0%", title: "Tasa de Error", desc: "La entrada manual de datos tiene una tasa de error del 1–5%. Las pipelines automatizadas funcionan a efectivamente cero — sin rekeying, sin pasos olvidados." },
        { stat: "10×", title: "Volumen, Mismo Equipo", desc: "Gestiona un volumen operativo 10 veces mayor con el mismo personal. Sin horas extra, sin agotamiento, sin coste adicional." },
      ],
    },
    agents: {
      badge: "Agentes de IA",
      headline: ["Hay Trabajo que No Necesita", "Esperar a una Persona."],
      sub: "Para empresas que quieren resultados consistentes y escalables sin aumentar el equipo.",
      intro: "Un agente de IA gestiona una tarea específica — consultas de clientes, procesamiento de datos, informes, seguimiento de proveedores — sin intervención humana en cada paso. Diseñamos agentes que entienden el contexto de tu negocio, operan dentro de límites definidos y escalan a personas exactamente cuando deben. Resultados consistentes y de alta calidad a una escala que tu equipo no podría mantener manualmente.",
      steps: [
        { title: "Llamada de Descubrimiento", desc: "Identificamos la tarea, el alcance y los límites." },
        { title: "Mapeo de Procesos", desc: "Mapeamos la lógica y los datos que necesita el agente." },
        { title: "Diseño del Agente", desc: "Límites, tono y escalada — antes del código." },
        { title: "Entrenamiento y Pruebas", desc: "Entrenado con tus datos, probado en casos extremos." },
        { title: "Despliegue y Monitorización", desc: "En producción, con seguimiento y listo para reentrenarse." },
      ],
      benefits: [
        { title: "Siempre Disponible", desc: "Tu agente gestiona consultas a cualquier hora — fines de semana, noches y festivos. Calidad consistente, siempre, sin aumentar el equipo." },
        { stat: "80%", title: "Rutinas Gestionadas", desc: "Los agentes gestionan hasta el 80% de las interacciones rutinarias, liberando a tu equipo para el trabajo que requiere juicio humano." },
        { title: "Consistente a Escala", desc: "A diferencia de las personas, los agentes no tienen días malos. Cada interacción se gestiona con la misma calidad, tono y precisión — independientemente del volumen." },
      ],
    },
  },
  contact: {
    heroLabel: "Contacto",
    heroH1: ["Hablemos de", "Tu Negocio."],
    heroBody: "Sin discursos, sin presión. Cuéntanos en qué estás trabajando y qué te gustaría cambiar — te respondemos en 1 día hábil.",
    reassurances: [
      { text: "Respuesta en 1 día hábil" },
      { text: "Sin llamada de ventas salvo que la quieras" },
      { text: "La primera llamada es una evaluación gratuita" },
    ],
    fields: {
      companyName: "Nombre de la empresa",
      companyPlaceholder: "Nombre de tu empresa",
      yourName: "Tu nombre",
      namePlaceholder: "Nombre y apellidos",
      emailAddress: "Correo electrónico",
      emailPlaceholder: "info@tuempresa.com",
      phoneNumber: "Teléfono",
      phonePlaceholder: "+34 000 000 000",
      industry: "Sector",
      industryPlaceholder: "Selecciona tu sector",
      industryOther: "Especifica tu sector",
      industryOtherPlaceholder: "Describe tu sector",
      companySize: "Tamaño de la empresa",
      companySizePlaceholder: "Selecciona el tamaño",
      servicesLabel: "Servicios de interés",
      descriptionLabel: "Cuéntanos tu reto",
      descriptionPlaceholder: "Describe qué te gustaría automatizar, mejorar o resolver. Cuanto más contexto nos des, más útil será nuestra primera conversación.",
      timelineLabel: "¿Cuándo quieres empezar?",
      timelinePlaceholder: "Selecciona el plazo",
      budgetLabel: "Rango de presupuesto (opcional)",
      budgetPlaceholder: "Selecciona un rango",
      attachLabel: "Adjuntar un archivo (opcional)",
      attachPlaceholder: "Haz clic para adjuntar un brief, documento de proceso o captura",
      attachHint: "PDF, DOC, PNG, JPG, XLSX o CSV — máx. 10 MB",
    },
    industries: [
      "Cadena de Suministro, Logística y Almacenamiento",
      "Retail, E-commerce y Moda",
      "Belleza y Bienestar",
      "Otro",
    ],
    companySizes: [
      "1–10 empleados",
      "11–50 empleados",
      "51–200 empleados",
      "201–500 empleados",
      "500+ empleados",
    ],
    services: [
      { id: "ai-advisory", label: "Asesoría de IA" },
      { id: "automation", label: "Automatización de Procesos" },
      { id: "ai-agents", label: "Agentes de IA" },
    ],
    timelines: [
      "Lo antes posible",
      "En 1–3 meses",
      "En 3–6 meses",
      "Solo estoy explorando por ahora",
    ],
    budgets: [
      "€2.000 – €5.000",
      "€5.000 – €15.000",
      "€15.000 – €50.000",
      "Más de €50.000",
      "Prefiero discutirlo",
    ],
    privacyText: "Acepto el tratamiento de mis datos personales de acuerdo con la",
    privacyLink: "Política de Privacidad",
    submitLabel: "Enviar Consulta",
    sendingLabel: "Enviando…",
    noPitch: "Sin discursos. Sin presión de ventas. Solo una conversación honesta sobre tu negocio.",
    successH1: "Mensaje recibido.",
    successBody: "Revisaremos tu consulta y te responderemos en",
    successSub: "Mientras tanto, no dudes en explorar nuestros servicios o páginas de sectores.",
  },
};

/* ════════════════════════════════════════════
   ITALIANO — business Italian, professional & warm
   Tone: confident, slightly playful, authentic
   ════════════════════════════════════════════ */
const it: Translations = {
  nav: {
    about: "Chi Siamo",
    services: "Servizi",
    industries: "Settori",
    contact: "Contatti",
  },
  cta: {
    bookCall: "Prenota una Chiamata Strategica",
    exploreServices: "Scopri i Servizi",
  },
  footer: {
    tagline: "Niente fronzoli. Nessuna complessità. Solo IA che lavora davvero per te.",
    company: "Azienda",
    services: "Servizi",
    getInTouch: "Contattaci",
    email: "info@octomanus.com",
    slogan: "L'IA nel modo in cui il business funziona davvero.",
    copyright: `© ${new Date().getFullYear()} Octo Manus. Tutti i diritti riservati.`,
    aiAdvisory: "Consulenza IA",
    workflowAuto: "Automazione dei Processi",
    aiAgents: "Agenti IA",
  },
  home: {
    heroH1: ["Adotta l'IA.", "Automatizza il Lavoro.", "Costruisci il Futuro."],
    heroSubtitle: "IA — Un Vantaggio Competitivo per Ogni Impresa",
    heroBody:
      "Aiutiamo le piccole e medie imprese a fare dell'IA un reale vantaggio competitivo — senza la complessità, senza lo stress e senza bisogno di assumere un team di ingegneri. Consulenza strategica, automazione intelligente e agenti IA costruiti attorno al modo in cui la tua azienda funziona davvero.",
    services: [
      {
        title: "Consulenza IA",
        desc: "Prima di spendere un solo euro in strumenti di IA, devi sapere quali valgono davvero per la tua azienda. Conduciamo una masterclass di IA personalizzata e costruita attorno alle tue specifiche operazioni — poi restiamo con te per 3 mesi mentre la metti in pratica.",
      },
      {
        title: "Automazione dei Processi",
        desc: "Processi manuali, flussi di lavoro basati su copia-incolla, informazioni sparse tra sistemi — progettiamo un'automazione intelligente che elimina l'attrito e restituisce al tuo team le ore che contano.",
      },
      {
        title: "Agenti IA",
        desc: "Agenti IA costruiti per i tuoi flussi di lavoro specifici — disponibili tutto il giorno, consistenti nella qualità e progettati per gestire le attività ripetitive ad alto volume, così il tuo team può concentrarsi sulle decisioni che richiedono giudizio umano.",
      },
    ],
    ctaH2: "Pronta a smettere di fare manualmente\nquello che l'IA può fare per te?",
    readyLabel: "Parliamoci",
  },
  about: {
    intro: {
      label: "La Nostra Storia",
      h1: ["L'IA non è magia.", "Ma i risultati?", "Quasi."],
      body:
        "Octo Manus è nata da una convinzione semplice: ogni professionista — indipendentemente dal settore, dalle dimensioni dell'azienda o dal background tecnico — merita accesso a un'IA che lavori davvero per lei. Non intorno a lei. Non al posto suo.",
      bodyStrong: " Con lei.",
    },
    history: {
      label: "La Nostra Storia",
      h2: ["Due Professioniste.", "Una Frustrazione.", "Troppi Fogli Excel."],
      p1: "Octo Manus è stata co-fondata da due professioniste provenienti da mondi molto diversi —",
      p1Bold1: "Project Management e Sviluppo Prodotto",
      p1Bold2: "Operazioni",
      p2: "Avevano visto cosa può fare l'IA nelle demo della Silicon Valley. L'avevano anche vista fallire clamorosamente quando veniva calata in aziende reali senza contesto, senza guida e senza un piano. Il divario tra \"l'IA è straordinaria\" e \"l'IA funziona nella mia azienda\" era enorme — e quasi del tutto inutile.",
      p3: "Così hanno costruito Octo Manus per colmare quel divario. Il nome si ispira al polpo — intelligente, adattivo, multi-braccio e perfettamente in grado di gestire otto cose contemporaneamente — con la missione di rendere l'adozione dell'IA pratica, umana e concretamente utile per le piccole e medie imprese.",
      p4: "Nessun giro di parole. Nessuna complessità inutile. Solo risultati.",
      founder1Role: "Co-Fondatrice",
      founder1Title: "Prodotto e Strategia",
      founder1Desc:
        "Con un background in Project Management e Sviluppo Prodotto, la nostra co-fondatrice strategica ha trascorso anni a trasformare requisiti complessi in roadmap che vengono davvero realizzate. Ora fa lo stesso con l'IA — costruendo percorsi chiari dal caos attuale verso la chiarezza futura.",
      founder2Role: "Co-Fondatrice",
      founder2Title: "Operazioni e Delivery",
      founder2Desc:
        "Esperta di operazioni, la nostra co-fondatrice operativa sa esattamente dove le aziende perdono tempo, denaro e motivazione. Porta uno sguardo pratico all'implementazione dell'IA — assicurandosi che ogni flusso di lavoro che progettiamo sia uno che il tuo team userà davvero (e ti ringrazierà in silenzio alle 17 del venerdì).",
    },
    mission: {
      label: "La Nostra Missione",
      h2: ["Fai dell'IA il Tuo", "Collaboratore", "Più Produttivo."],
      p1: "La nostra missione è democratizzare l'IA per le piccole e medie imprese — guidando le professioniste a lavorare fianco a fianco con sistemi intelligenti che si occupano del ripetitivo, del dispendioso in termini di tempo e, diciamocelo, del noioso.",
      p2: "Perché non hai creato la tua azienda per passare tre ore a formattare un report o a inseguire un fornitore per un aggiornamento che è già da qualche parte nella tua casella di posta.",
      p3: "L'hai creata per costruire qualcosa. Riprendiamoci il tempo per farlo davvero.",
      stats: [
        { stat: "80%", label: "delle attività ripetitive", sub: "può essere automatizzato con i giusti flussi di lavoro IA" },
        { stat: "10×", label: "processi più veloci", sub: "quando gli agenti IA gestiscono il lavoro manuale" },
        { stat: "0", label: "righe di codice necessarie", sub: "da parte tua — il lavoro tecnico lo facciamo noi" },
        { stat: "∞", label: "curiosità per il settore", sub: "conosciamo il tuo mondo prima di toccare i tuoi processi" },
      ],
    },
    values: {
      label: "I Nostri Valori",
      h2: ["Ciò in Cui Crediamo —", "E da Cui Non Tradiamo."],
      intro:
        "Non sono valori scritti per una presentazione e poi dimenticati. Sono i principi che guidano ogni conversazione, ogni processo e ogni raccomandazione che facciamo.",
      items: [
        {
          title: "L'IA è per Tutti",
          highlight: "Nessun dottorato richiesto.",
          desc: "Non hai bisogno di una laurea in informatica per trarre vantaggio dall'IA. Noi traduciamo la complessità così tu puoi concentrarti su quello che sai fare meglio: gestire la tua attività.",
        },
        {
          title: "Prima di Tutto, la Collaborazione",
          highlight: "Il tuo team + IA = inarrestabile.",
          desc: "Non sostituiamo il tuo team — lo estendiamo. Pensa all'IA come a una nuova collega di talento che non dorme mai, non si lamenta mai del lunedì e gestisce le cose noiose con il sorriso.",
        },
        {
          title: "Praticità Prima dell'Hype",
          highlight: "Risultati, non buzzword.",
          desc: "Saltiamo il bingo delle parole d'ordine. Ogni soluzione che raccomandiamo risolve un problema reale, fa risparmiare ore reali e genera un ritorno reale — altrimenti non la raccomandiamo.",
        },
        {
          title: "Crescita Senza Attrito",
          highlight: "Inizia in piccolo, cresci in fretta.",
          desc: "I nostri flussi di lavoro sono progettati per crescere con te. Inizia da un processo, espanditi in tutta l'azienda. Le piccole vittorie si trasformano in vantaggi competitivi significativi.",
        },
        {
          title: "Fluenza nel Settore",
          highlight: "Parliamo la tua lingua.",
          desc: "Logistica o benessere, supply chain o customer journey — ci immergiamo nel tuo mondo prima di raccomandare un singolo strumento. Il contesto è tutto.",
        },
        {
          title: "Partnership a Lungo Termine",
          highlight: "Con te sul lungo periodo.",
          desc: "Non siamo del tipo \"implementiamo e sparisci\". Restiamo, iteriamo, miglioriamo. Perché la vera trasformazione non avviene in un unico sprint.",
        },
      ],
    },
    cta: {
      label: "Pronta a iniziare?",
      h2: ["Il tuo collaboratore IA", "sta aspettando di essere presentato."],
      body: "Senza fronzoli, senza pressione, senza proposta da 47 pagine. Solo una conversazione sul tuo business e su dove l'IA può fare subito la differenza.",
    },
  },
  industries: {
    navDropdownTitle: "Scegli un settore",
    heroLabel: "Settori",
    heroH1: ["L'IA Che Parla", "la Lingua del Tuo Settore."],
    heroBody:
      "Non tutte le aziende funzionano allo stesso modo. Non tutti i settori hanno lo stesso ritmo, le stesse pressioni o la stessa definizione di una giornata produttiva. Per questo le nostre soluzioni IA sono costruite attorno al tuo settore — non attorno a un caso d'uso generico.",
    supplyChain: {
      navLabel: "Supply Chain",
      shortLabel: "Supply Chain",
    },
    retail: {
      navLabel: "Retail & E-commerce",
      shortLabel: "Retail & E-commerce",
    },
    beauty: {
      navLabel: "Beauty & Wellness",
      shortLabel: "Beauty & Wellness",
    },
  },
  services: {
    heroLabel: "Servizi",
    heroH1: ["Una IA che Funziona", "Come la Tua Azienda."],
    heroBody: "Tre servizi focalizzati — consulenza, automazione e agenti — ciascuno pensato per offrire risultati misurabili senza la complessità che di solito accompagna l'adozione dell'IA.",
    exploreLabel: "↓ Scopri",
    howWeWork: "Come lavoriamo",
    advisory: {
      badge: "Consulenza IA",
      headline: ["Capire l'IA Prima", "di Investirci."],
      sub: "Per le aziende che vogliono muoversi con criterio — non solo in fretta.",
      intro: "La maggior parte delle aziende sa di dover fare qualcosa con l'IA. Poche sanno esattamente cosa, da dove iniziare o cosa farà davvero la differenza. La Consulenza IA combina una guida strategica con una masterclass pratica costruita attorno alla tua azienda specifica — così alla fine saprai esattamente cosa può fare l'IA per te, come iniziare e come evitare gli errori costosi che commettono la maggior parte delle aziende.",
      steps: [
        { title: "Discovery Call", desc: "Capiamo la tua azienda e i tuoi obiettivi." },
        { title: "Masterclass Personalizzata", desc: "Sessione pratica costruita attorno alle tue operazioni." },
        { title: "Supporto di 3 Mesi", desc: "Guida continua mentre applichi l'IA." },
      ],
      benefits: [
        { title: "Chiarezza Prima di Spendere", desc: "Sapere esattamente dove si adatta l'IA — e dove non si adatta. Nessuna congettura, nessun budget sprecato in strumenti che non corrispondono al tuo business." },
        { title: "Una Roadmap Costruita su Misura", desc: "Non un framework generico. Un piano prioritizzato basato sulle tue operazioni reali, le dimensioni del tuo team e i tuoi vincoli concreti." },
        { title: "Sicurezza ad Ogni Passo", desc: "Guida esperta prima di impegnarti — non un consulente che sparisce dopo aver consegnato la presentazione." },
      ],
    },
    automation: {
      badge: "Automazione dei Processi",
      headline: ["Le Ore Spese nel Lavoro Manuale", "Costano Più di Quanto Pensi."],
      sub: "Per i team operativi sommersi da attività che non richiedono giudizio umano.",
      intro: "I processi manuali sono costosi in modi che non compaiono in un foglio di calcolo — tempo, morale, tassi di errore, decisioni ritardate. Identifichiamo i flussi di lavoro pronti per essere automatizzati, costruiamo i sistemi che li sostituiscono e ci assicuriamo che si adattino a come il tuo team lavora davvero. L'obiettivo non è l'automazione in sé. È più capacità per il lavoro che conta.",
      steps: [
        { title: "Discovery Call", desc: "Troviamo dove il lavoro manuale sta costando di più alla tua operazione." },
        { title: "Mappatura dei Processi", desc: "Documentiamo esattamente cosa si fa, da chi e dove le cose si inceppano." },
        { title: "Costruzione e Integrazione", desc: "Selezioniamo gli strumenti giusti, costruiamo le automazioni e le colleghiamo al tuo stack esistente." },
        { title: "Test e Lancio", desc: "Eseguiamo ogni automazione su dati reali, risolviamo i casi limite e andiamo live solo quando i risultati sono affidabili." },
        { title: "20h di Supporto Gratuito", desc: "Venti ore di supporto incluso nei primi due mesi — per ottimizzare ciò che è stato costruito, rispondere alle domande e assicurarci che il tuo team sia pienamente sicuro." },
      ],
      benefits: [
        { stat: "8–15h", title: "Recuperate Ogni Settimana", desc: "I team recuperano tipicamente 8–15 ore a settimana una volta che i principali processi manuali sono stati automatizzati — ogni settimana, senza che nessuno li gestisca." },
        { stat: "~0%", title: "Tasso di Errore", desc: "L'inserimento manuale dei dati ha un tasso di errore dell'1–5%. Le pipeline automatizzate funzionano a zero — nessuna riscrittura, nessun passaggio dimenticato." },
        { stat: "10×", title: "Volume, Stesso Team", desc: "Gestisci un volume operativo 10 volte maggiore con lo stesso organico. Nessuno straordinario, nessun esaurimento, nessun costo aggiuntivo." },
      ],
    },
    agents: {
      badge: "Agenti IA",
      headline: ["Certo Lavoro Non Ha", "Bisogno di Aspettare una Persona."],
      sub: "Per le aziende che vogliono output consistenti e scalabili senza aumentare l'organico.",
      intro: "Un agente IA gestisce un compito specifico — richieste dei clienti, elaborazione dati, reportistica, follow-up con i fornitori — senza intervento umano ad ogni passaggio. Progettiamo agenti che comprendono il contesto del tuo business, operano entro limiti definiti ed escalano agli esseri umani esattamente quando dovrebbero. Output consistente e di alta qualità a una scala che il tuo team non potrebbe mantenere manualmente.",
      steps: [
        { title: "Discovery Call", desc: "Identifichiamo il compito, l'ambito e i limiti." },
        { title: "Mappatura dei Processi", desc: "Mappiamo la logica e i dati di cui l'agente ha bisogno." },
        { title: "Design dell'Agente", desc: "Limiti, tono ed escalation — prima del codice." },
        { title: "Training e Testing", desc: "Addestrato sui tuoi dati, testato sui casi limite." },
        { title: "Deploy e Monitoraggio", desc: "Attivo, monitorato e pronto per il retraining." },
      ],
      benefits: [
        { title: "Sempre Disponibile", desc: "Il tuo agente gestisce le richieste tutto il giorno — weekend, serate e festivi. Qualità consistente, ogni volta, senza aggiungere personale." },
        { stat: "80%", title: "Routine Gestite", desc: "Gli agenti gestiscono fino all'80% delle interazioni di routine, liberando il tuo team per il lavoro che richiede giudizio umano." },
        { title: "Consistente su Scala", desc: "A differenza degli esseri umani, gli agenti non hanno giorni no. Ogni interazione viene gestita con la stessa qualità, tono e precisione — indipendentemente dal volume." },
      ],
    },
  },
  contact: {
    heroLabel: "Contatti",
    heroH1: ["Parliamo del", "Tuo Business."],
    heroBody: "Nessun discorso, nessuna pressione. Raccontaci su cosa stai lavorando e cosa vorresti cambiare — ti rispondiamo entro 1 giorno lavorativo.",
    reassurances: [
      { text: "Risposta entro 1 giorno lavorativo" },
      { text: "Nessuna chiamata di vendita salvo che tu la voglia" },
      { text: "La prima chiamata è una valutazione gratuita" },
    ],
    fields: {
      companyName: "Nome dell'azienda",
      companyPlaceholder: "Nome della tua azienda",
      yourName: "Il tuo nome",
      namePlaceholder: "Nome e cognome",
      emailAddress: "Indirizzo email",
      emailPlaceholder: "info@tuaazienda.com",
      phoneNumber: "Numero di telefono",
      phonePlaceholder: "+39 000 000 0000",
      industry: "Settore",
      industryPlaceholder: "Seleziona il tuo settore",
      industryOther: "Specifica il tuo settore",
      industryOtherPlaceholder: "Descrivi il tuo settore",
      companySize: "Dimensione aziendale",
      companySizePlaceholder: "Seleziona la dimensione",
      servicesLabel: "Servizi di interesse",
      descriptionLabel: "Raccontaci la tua sfida",
      descriptionPlaceholder: "Descrivi cosa vorresti automatizzare, migliorare o risolvere. Più contesto ci dai, più utile sarà la nostra prima conversazione.",
      timelineLabel: "Quando vuoi iniziare?",
      timelinePlaceholder: "Seleziona la tempistica",
      budgetLabel: "Fascia di budget (opzionale)",
      budgetPlaceholder: "Seleziona una fascia",
      attachLabel: "Allega un file (opzionale)",
      attachPlaceholder: "Clicca per allegare un brief, documento di processo o screenshot",
      attachHint: "PDF, DOC, PNG, JPG, XLSX o CSV — max 10 MB",
    },
    industries: [
      "Supply Chain, Logistica e Magazzino",
      "Retail, E-commerce e Moda",
      "Beauty & Wellness",
      "Altro",
    ],
    companySizes: [
      "1–10 dipendenti",
      "11–50 dipendenti",
      "51–200 dipendenti",
      "201–500 dipendenti",
      "500+ dipendenti",
    ],
    services: [
      { id: "ai-advisory", label: "Consulenza IA" },
      { id: "automation", label: "Automazione dei Processi" },
      { id: "ai-agents", label: "Agenti IA" },
    ],
    timelines: [
      "Il prima possibile",
      "Entro 1–3 mesi",
      "Tra 3–6 mesi",
      "Sto solo esplorando per ora",
    ],
    budgets: [
      "€2.000 – €5.000",
      "€5.000 – €15.000",
      "€15.000 – €50.000",
      "Oltre €50.000",
      "Preferisco discuterne",
    ],
    privacyText: "Acconsento al trattamento dei miei dati personali in conformità con la",
    privacyLink: "Privacy Policy",
    submitLabel: "Invia Richiesta",
    sendingLabel: "Invio in corso…",
    noPitch: "Nessun discorso. Nessuna pressione commerciale. Solo una conversazione onesta sul tuo business.",
    successH1: "Messaggio ricevuto.",
    successBody: "Esamineremo la tua richiesta e ti risponderemo entro",
    successSub: "Nel frattempo, esplora pure le nostre pagine sui servizi o sui settori.",
  },
};

export const translations: Record<Lang, Translations> = { en, es, it };
