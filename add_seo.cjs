const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add seo to Translations interface
const interfaceTarget = "export interface Translations {\n";
const interfaceReplacement = `export interface Translations {
  seo: {
    home: { title: string; desc: string; keys: string };
    about: { title: string; desc: string; keys: string };
    services: { title: string; desc: string; keys: string };
    industries: { title: string; desc: string; keys: string };
    contact: { title: string; desc: string; keys: string };
    privacy: { title: string; desc: string; keys: string };
  };\n`;
if (content.includes(interfaceTarget) && !content.includes('seo: {')) {
  content = content.replace(interfaceTarget, interfaceReplacement);
}

// 2. Add EN seo
const enSeo = `
  seo: {
    home: {
      title: "Octo Manus — AI Advisory, Automation & AI Agents for SMBs",
      desc: "Octo Manus helps small and medium businesses adopt AI without the technical overwhelm. AI Advisory, workflow automation, and custom AI agents for Supply Chain, Retail, Beauty & Wellness.",
      keys: "AI consulting small business, AI advisory SMB, workflow automation consulting, AI agents for SMB, AI adoption without coding, AI for supply chain, AI for retail, AI for beauty wellness, no-code AI, AI strategy for business, AI consulting Europe, AI consulting Italy, AI consulting Spain"
    },
    about: {
      title: "About Octo Manus — Founders, Mission & Values | AI Consulting for SMBs",
      desc: "Meet the founders of Octo Manus — an AI consulting studio built by business professionals, for business professionals. We make AI adoption practical, human, and genuinely useful for SMBs.",
      keys: "about Octo Manus, AI consulting founders, AI for SMB, AI without coding, business AI mission, AI for small business, AI consulting women founded, AI adoption practical, SMB AI consulting Europe, AI consulting Italy, AI consulting Spain"
    },
    services: {
      title: "AI Consulting Services — Advisory, Workflow Automation & AI Agents",
      desc: "Practical AI services for SMBs. We offer strategic AI Advisory, custom Workflow Automation, and intelligent AI Agents that fit seamlessly into your existing tools.",
      keys: "AI consulting services, AI advisory services, business workflow automation, custom AI agents, AI integration for SMB, no-code automation, ChatGPT for business, logistics AI automation, customer service AI agents, AI solutions for small business"
    },
    industries: {
      title: "AI for Supply Chain, Retail & Beauty Wellness | Octo Manus",
      desc: "Industry-specific AI solutions tailored for Supply Chain & Logistics, Retail & E-commerce, and Beauty & Wellness. Solve real pain points with practical AI automation.",
      keys: "AI for supply chain, logistics automation, AI for retail, ecommerce AI agents, AI for beauty salons, wellness business automation, industry AI solutions, practical AI use cases, SMB industry AI"
    },
    contact: {
      title: "Contact Us — Book a Free AI Strategy Call | Octo Manus",
      desc: "Ready to explore what AI can do for your business? Book a free 30-minute discovery call with Octo Manus and let's map out your automation opportunities.",
      keys: "contact Octo Manus, book AI strategy call, hire AI consultant, AI advisory call, workflow automation consultation, small business AI help"
    },
    privacy: {
      title: "Privacy Policy | Octo Manus",
      desc: "Privacy Policy and data protection details for Octo Manus visitors and clients.",
      keys: "privacy policy, data protection, Octo Manus legal"
    }
  },`;
if (content.includes('export const en: Translations = {') && !content.includes('home: { title: "Octo Manus — AI Advisory')) {
  content = content.replace('export const en: Translations = {', 'export const en: Translations = {' + enSeo);
}

// 3. Add ES seo
const esSeo = `
  seo: {
    home: {
      title: "Octo Manus — Asesoría en IA, Automatización y Agentes de IA para Pymes",
      desc: "Octo Manus ayuda a las pymes a adoptar la IA sin abrumos técnicos. Asesoría en IA, automatización de flujos de trabajo y agentes de IA personalizados para la Cadena de Suministro, Retail y Belleza.",
      keys: "consultoría IA pymes, asesoría IA, automatización de procesos, agentes IA para pymes, adopción IA sin código, IA para cadena de suministro, IA para retail, IA para belleza, estrategia IA para negocios, consultoría IA España"
    },
    about: {
      title: "Sobre Octo Manus — Fundadoras, Misión y Valores | Consultoría en IA",
      desc: "Conoce a las fundadoras de Octo Manus, un estudio de consultoría en IA creado por profesionales de negocios para profesionales de negocios. Hacemos que la IA sea práctica y humana.",
      keys: "sobre Octo Manus, fundadoras consultoría IA, IA para pymes, IA sin programación, misión IA empresarial, consultoría IA fundada por mujeres, IA para pequeños negocios, consultoría IA Europa"
    },
    services: {
      title: "Servicios de Consultoría en IA — Asesoría, Automatización y Agentes",
      desc: "Servicios prácticos de IA para pymes. Ofrecemos Asesoría Estratégica en IA, Automatización de flujos de trabajo y Agentes de IA que se integran con tus herramientas actuales.",
      keys: "servicios consultoría IA, automatización de procesos de negocio, agentes de IA personalizados, integración de IA para pymes, automatización sin código, IA para logística, agentes de servicio al cliente"
    },
    industries: {
      title: "IA para Cadena de Suministro, Retail y Belleza | Octo Manus",
      desc: "Soluciones de IA adaptadas para la Cadena de Suministro y Logística, Retail y E-commerce, y Belleza y Bienestar. Resuelve problemas reales con automatización práctica.",
      keys: "IA para cadena de suministro, automatización logística, IA para retail, agentes IA ecommerce, IA para salones de belleza, automatización bienestar, casos de uso IA prácticos"
    },
    contact: {
      title: "Contacto — Reserva una Llamada de Estrategia de IA Gratuita | Octo Manus",
      desc: "¿Listo para descubrir qué puede hacer la IA por tu negocio? Reserva una llamada de descubrimiento gratuita de 30 minutos con Octo Manus y tracemos tus oportunidades.",
      keys: "contacto Octo Manus, llamada estrategia IA, contratar consultor IA, automatización flujos de trabajo, ayuda IA pequeños negocios"
    },
    privacy: {
      title: "Política de Privacidad | Octo Manus",
      desc: "Política de Privacidad y protección de datos para los visitantes y clientes de Octo Manus.",
      keys: "política de privacidad, protección de datos, legal Octo Manus"
    }
  },`;
if (content.includes('export const es: Translations = {') && !content.includes('home: { title: "Octo Manus — Asesoría en IA')) {
  content = content.replace('export const es: Translations = {', 'export const es: Translations = {' + esSeo);
}

// 4. Add IT seo
const itSeo = `
  seo: {
    home: {
      title: "Octo Manus — Consulenza IA, Automazione e Agenti IA per PMI",
      desc: "Octo Manus aiuta le piccole e medie imprese ad adottare l'IA senza complessità tecniche. Consulenza IA, automazione dei processi e agenti IA per Logistica, Retail e Bellezza.",
      keys: "consulenza IA pmi, consulenza intelligenza artificiale, automazione processi aziendali, agenti IA per pmi, adozione IA senza codice, IA per logistica, IA per retail, IA per centri estetici, strategia IA"
    },
    about: {
      title: "Chi Siamo — Fondatrici, Missione e Valori | Consulenza IA per PMI",
      desc: "Scopri i fondatori di Octo Manus, uno studio di consulenza sull'IA creato da professionisti del business, per professionisti del business. Rendiamo l'IA pratica e umana.",
      keys: "chi siamo Octo Manus, fondatrici consulenza IA, IA per pmi, IA senza codice, missione IA aziendale, consulenza IA donne, adozione pratica IA, consulenza IA Italia"
    },
    services: {
      title: "Servizi di Consulenza IA — Advisory, Automazione e Agenti IA",
      desc: "Servizi di IA pratici per le PMI. Offriamo Consulenza Strategica, Automazione dei Processi e Agenti IA intelligenti che si integrano perfettamente con i tuoi strumenti esistenti.",
      keys: "servizi consulenza IA, automazione flussi di lavoro, agenti IA personalizzati, integrazione IA pmi, automazione no-code, ChatGPT per aziende, automazione IA logistica"
    },
    industries: {
      title: "IA per Logistica, Retail e Bellezza | Octo Manus",
      desc: "Soluzioni IA specifiche per Logistica e Supply Chain, Retail ed E-commerce, Bellezza e Benessere. Risolvi problemi reali con l'automazione pratica.",
      keys: "IA per logistica, automazione supply chain, IA per retail, agenti IA ecommerce, IA per saloni bellezza, automazione benessere, soluzioni IA settore, casi d'uso IA"
    },
    contact: {
      title: "Contatti — Prenota una Chiamata Strategica Gratuita | Octo Manus",
      desc: "Pronto a scoprire cosa può fare l'IA per la tua azienda? Prenota una chiamata conoscitiva gratuita di 30 minuti con Octo Manus per mappare le tue opportunità.",
      keys: "contatti Octo Manus, prenota chiamata IA, assumere consulente IA, consulenza automazione processi, aiuto IA piccole imprese"
    },
    privacy: {
      title: "Informativa sulla Privacy | Octo Manus",
      desc: "Informativa sulla Privacy e dettagli sulla protezione dei dati per i visitatori e clienti di Octo Manus.",
      keys: "privacy policy, protezione dati, legale Octo Manus"
    }
  },`;
if (content.includes('export const it: Translations = {') && !content.includes('home: { title: "Octo Manus — Consulenza IA')) {
  content = content.replace('export const it: Translations = {', 'export const it: Translations = {' + itSeo);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected SEO translations into i18n/index.ts');
