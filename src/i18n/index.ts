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
    tagline: "No buzzwords. No overwhelm. Just AI that works for your business.",
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
    heroH1: ["Adopt AI.", "Automate Work.", "Build What's Next."],
    heroSubtitle: "AI — A Competitive Advantage for Every Business",
    heroBody:
      "We help small and medium businesses make AI a genuine competitive advantage — without the complexity, the overwhelm, or the need to hire a team of engineers. Strategic advisory, intelligent automation, and AI agents built around the realities of how your business operates.",
    services: [
      {
        title: "AI Advisory",
        desc: "Unsure where AI can make the biggest difference in your business? We map your operations, identify high-value opportunities, and build an AI roadmap your team can actually implement — and stick to.",
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
        "Octo Manus was born from a simple conviction: every business professional — regardless of industry, size, or technical background — deserves access to AI that actually works for them. Not around them. Not instead of them.",
      bodyStrong: " With them.",
    },
    history: {
      label: "Our History",
      h2: ["Two Professionals.", "One Frustration.", "A Lot of Spreadsheets."],
      p1: "Octo Manus was co-founded by two professionals who came from very different worlds —",
      p1Bold1: "Project Management & Product Development",
      p1Bold2: "Operations",
      p2: "They had seen what AI could do in Silicon Valley demos. They had also seen it fail spectacularly when dropped into real businesses without context, guidance, or a plan. The gap between \"AI is amazing\" and \"AI is working in my business\" was huge — and almost entirely unnecessary.",
      p3: "So they built Octo Manus to close that gap. Named for the octopus — intelligent, adaptive, multi-armed, and perfectly capable of handling eight things at once — the studio is on a mission to make AI adoption practical, human, and genuinely impactful for small and medium businesses.",
      p4: "No nonsense. No unnecessary complexity. Just results.",
      founder1Role: "Co-Founder",
      founder1Title: "Product & Strategy",
      founder1Desc:
        "With a background in Project Management and Product Development, our strategy-focused co-founder has spent years turning complex requirements into roadmaps that actually ship. Now she does the same with AI — building clear paths from your current chaos to your future clarity.",
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
          desc: "We skip the buzzword bingo. Every solution we recommend solves a real problem, saves real hours, and delivers a real return — or we don't recommend it.",
        },
        {
          title: "Growth Without Friction",
          highlight: "Start small, grow fast.",
          desc: "Our workflows are designed to scale with you. Start with one process, expand across the business. Small wins compound into major competitive advantage.",
        },
        {
          title: "Industry Fluency",
          highlight: "We speak your language.",
          desc: "Logistics or lashes, supply chains or client journeys — we immerse ourselves in your world before recommending a single tool. Context is everything.",
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
        desc: "¿No tienes claro dónde la IA puede marcar mayor diferencia en tu negocio? Analizamos tus operaciones, identificamos las oportunidades de mayor valor y construimos una hoja de ruta que tu equipo pueda implementar de verdad.",
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
        desc: "Non sai dove l'IA può fare la differenza più grande nella tua azienda? Analizziamo le tue operazioni, identifichiamo le opportunità di maggior valore e costruiamo una roadmap che il tuo team può davvero implementare.",
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
};

export const translations: Record<Lang, Translations> = { en, es, it };
