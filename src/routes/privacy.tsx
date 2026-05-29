import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  SiteHeader,
  SiteFooter,
  IVORY,
  PAGE_BG,
  ROSE,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Octo Manus" },
      { name: "description", content: "Privacy Policy of Octo Manus." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});

interface PolicyText {
  title: string;
  subtitle: string;
  updated: string;
  sections: { title: string; body: string }[];
}

const translations: Record<"en" | "es" | "it", PolicyText> = {
  en: {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your personal information.",
    updated: "Last Updated: May 29, 2026",
    sections: [
      {
        title: "1. Introduction",
        body: "At Octo Manus, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or contact us using our online forms.",
      },
      {
        title: "2. Data We Collect",
        body: "We may collect personal information that you voluntarily provide to us when you fill out our contact and enquiry forms. This includes: your name, email address, phone number, company name, industry, budget, project timeline, and any project description or files that you choose to attach. We also automatically collect certain technical information when you browse our site, such as your IP address, browser type, and page access patterns via cookies.",
      },
      {
        title: "3. How We Use Your Data",
        body: "We use the collected data to process and respond to your enquiries, schedule strategy and consulting calls, evaluate how AI and automation can benefit your operations, and continuously improve our website experience and services.",
      },
      {
        title: "4. Data Retention",
        body: "We retain your personal data only for as long as is necessary to fulfill the purposes outlined in this policy, manage our relationship with you, or comply with applicable legal, accounting, or regulatory requirements.",
      },
      {
        title: "5. Data Protection",
        body: "We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, loss, or destruction.",
      },
      {
        title: "6. Sharing with Third Parties",
        body: "We do not sell, rent, or trade your personal data. We only share information with trusted third-party service providers (such as email delivery systems or website hosting) strictly necessary to run our website and business.",
      },
      {
        title: "7. Your Rights",
        body: "Under the GDPR and other applicable privacy regulations, you have the right to access, correct, update, or request the deletion of your personal data. To exercise any of these rights, please contact us at any time at info@octomanus.com.",
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo recopilamos, utilizamos y protegemos tu información personal.",
    updated: "Última actualización: 29 de mayo de 2026",
    sections: [
      {
        title: "1. Introducción",
        body: "En Octo Manus nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información personal cuando visitas nuestro sitio web o te comunicas con nosotros a través de nuestros formularios.",
      },
      {
        title: "2. Datos que Recopilamos",
        body: "Recopilamos la información personal que nos facilitas voluntariamente al rellenar los formularios de contacto. Esto incluye: tu nombre, correo electrónico, número de teléfono, nombre de la empresa, sector, presupuesto, plazos del proyecto y cualquier descripción o archivo adjunto que decidas compartir. También recopilamos automáticamente datos técnicos de navegación mediante cookies (como tu dirección IP, tipo de navegador y páginas visitadas).",
      },
      {
        title: "3. Cómo Utilizamos tus Datos",
        body: "Utilizamos los datos recopilados para responder a tus consultas, programar llamadas de estrategia y consultoría, evaluar cómo la IA y la automatización pueden beneficiar a tu negocio, y mejorar continuamente la experiencia de nuestro sitio web.",
      },
      {
        title: "4. Retención de Datos",
        body: "Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con los fines detallados en esta política, gestionar nuestra relación profesional contigo o cumplir con las obligaciones legales aplicables.",
      },
      {
        title: "5. Protección de Datos",
        body: "Implementamos medidas de seguridad técnicas y organizativas estándar del sector para proteger tu información personal frente a accesos no autorizados, alteraciones, divulgación, pérdida o destrucción.",
      },
      {
        title: "6. Compartir con Terceros",
        body: "No vendemos, alquilamos ni comercializamos tus datos personales. Solo los compartimos con proveedores de servicios de confianza (como plataformas de correo electrónico o alojamiento web) estrictamente necesarios para el funcionamiento de nuestra actividad.",
      },
      {
        title: "7. Tus Derechos",
        body: "Bajo el RGPD y otras normativas de privacidad vigentes, tienes derecho a acceder, rectificar, actualizar o solicitar la eliminación de tus datos personales. Para ejercer estos derechos, ponte en contacto con nosotros en info@octomanus.com.",
      },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    subtitle: "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
    updated: "Ultimo aggiornamento: 29 maggio 2026",
    sections: [
      {
        title: "1. Introduzione",
        body: "In Octo Manus ci impegniamo a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e tuteliamo le tue informazioni personali quando visiti il nostro sito o ci contatti tramite i nostri moduli.",
      },
      {
        title: "2. Dati che Raccogliamo",
        body: "Raccogliamo le informazioni personali fornite volontariamente tramite i moduli di contatto. Questo include: nome, indirizzo email, numero di telefono, nome dell'azienda, settore, budget, tempistiche del progetto e qualsiasi descrizione o allegato che decidi di inviarci. Raccogliamo inoltre automaticamente dati tecnici di navigazione tramite cookie (es. indirizzo IP, tipo di browser e pagine visitate).",
      },
      {
        title: "3. Come Utilizziamo i Dati",
        body: "Utilizziamo i dati raccolti per elaborare e rispondere alle tue richieste, programmare le chiamate strategiche di consulenza, valutare come l'IA e l'automazione possano migliorare i tuoi flussi di lavoro, e ottimizzare il nostro sito web.",
      },
      {
        title: "4. Conservazione dei Dati",
        body: "Conserviamo i tuoi dati personali solo per il tempo strettamente necessario a soddisfare gli scopi descritti in questa informativa, gestire la relazione con te o per adempiere a requisiti legali, contabili o normativi.",
      },
      {
        title: "5. Protezione dei Dati",
        body: "Adottiamo misure di sicurezza tecniche e organizzative conformi agli standard di settore per proteggere le tue informazioni da accessi non autorizzati, divulgazioni, alterazioni, perdite o distruzioni accidentali.",
      },
      {
        title: "6. Condivisione con Terze Parti",
        body: "Non vendiamo, affittiamo o commercializziamo i tuoi dati personali. Condividiamo i dati solo con fornitori di servizi di fiducia (es. sistemi di posta elettronica o hosting) strettamente necessari per erogare i nostri servizi.",
      },
      {
        title: "7. I Tuoi Diritti",
        body: "Ai sensi del GDPR e di altre normative locali sulla privacy, hai il diritto di accedere, correggere, aggiornare o richiedere la cancellazione dei tuoi dati personali. Per esercitare questi diritti, scrivici in qualsiasi momento a info@octomanus.com.",
      },
    ],
  },
};

function PrivacyPage() {
  const { lang } = useLanguage();
  const content = translations[lang] || translations.en;

  const stars = useMemo(
    () => makeStars(120, 24, { top: [-5, 110], left: [-5, 105] }),
    []
  );
  const starsDeep = useMemo(
    () => makeStars(50, 68, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 0.85),
    []
  );

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      <section className="relative overflow-hidden pb-12 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={stars} />
          <StarField stars={starsDeep} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-7">
          <h1
            className="metallic-rose text-4xl leading-[1.1] md:text-5xl lg:text-6xl text-center mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {content.title}
          </h1>
          <p
            className="text-center text-base md:text-lg mb-4"
            style={{ color: IVORY, opacity: 0.78 }}
          >
            {content.subtitle}
          </p>
          <p
            className="text-center text-xs italic mb-14"
            style={{ color: IVORY, opacity: 0.45 }}
          >
            {content.updated}
          </p>

          <div
            className="rounded-2xl p-8 md:p-12 mb-16"
            style={{
              backgroundColor: "#08131F",
              border: "1px solid rgba(233,181,166,0.18)",
              boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
            }}
          >
            <div className="flex flex-col gap-8">
              {content.sections.map((section) => (
                <div key={section.title}>
                  <h2
                    className="text-lg md:text-xl font-semibold mb-3"
                    style={{ color: ROSE, fontFamily: "var(--font-body)" }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: IVORY, opacity: 0.8 }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
