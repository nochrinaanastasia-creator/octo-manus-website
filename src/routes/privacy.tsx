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
import { translations } from "@/i18n";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: ({ search }) => {
    const lang = (search as any)?.lang || "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.privacy;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.desc },
        { name: "keywords", content: seo.keys },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.desc },
        { property: "og:url", content: `https://octomanus.com/${seoKey === 'home' ? '' : seoKey}?lang=${lang}` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },
});

interface PolicyText {
  title: string;
  subtitle: string;
  updated: string;
  sections: { title: string; body: string }[];
}

const privacyTranslations: Record<"en" | "es" | "it", PolicyText> = {
  en: {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your personal data.",
    updated: "Last Updated: June 3, 2026",
    sections: [
      {
        title: "1. Who We Are",
        body: 'For the purposes of this Privacy Policy, "Octo Manus", "we", "us", or "our" refers to the legal entity Octo Manus, reachable at info@octomanus.com. We are the data controller for the personal data we process through this website, unless otherwise stated.',
      },
      {
        title: "2. Personal Data We Collect",
        body: "When you contact us, complete a form, book a call, or send a project enquiry, we may collect: your name, company name, job title or role, email address, phone number, country or location, industry, company size, services you are interested in, project timeline, budget range, and details about your business challenge or project. When you visit our website, we may also collect limited technical information such as IP address, browser type and version, device type, pages visited, time and date of visit, and referral source. This technical information may be collected through cookies, analytics tools, or hosting logs.",
      },
      {
        title: "3. How We Use Personal Data",
        body: "We use personal data to respond to enquiries; assess whether and how we can support your project; prepare proposals, recommendations, or project scopes; book and manage calls or meetings; provide AI advisory, workflow automation, AI agent, or related consulting services; manage client relationships; improve our website and communication; maintain website security; and comply with legal, tax, accounting, or regulatory obligations. We do not sell your personal data.",
      },
      {
        title: "4. Legal Basis for Processing",
        body: "We process personal data only where we have a valid legal basis. Depending on the situation, we may rely on: your consent (where you submit a form or choose to provide information); pre-contractual steps (where you ask us to assess a potential project or respond to a service request); contractual necessity (where processing is required to provide services); legitimate interests (such as responding to business enquiries, improving our services, and managing client relationships); or legal obligation (where we need to retain or process data for tax, accounting, or legal purposes).",
      },
      {
        title: "5. Cookies and Analytics",
        body: "Our website may use cookies or similar technologies to make the website function correctly, improve performance, understand how visitors use the site, and support security operations. If we use analytics, marketing, or non-essential cookies, we will provide information about those tools and request consent where required by applicable law. You can usually control cookies through your browser settings.",
      },
      {
        title: "6. Third-Party Service Providers",
        body: "We may use trusted third-party service providers to operate our website and business, such as website hosting providers, email and communication tools, form or CRM tools, cloud storage providers, analytics providers, scheduling tools, and payment or accounting service providers. These providers may process personal data only where necessary to provide their services to us and under appropriate data protection terms.",
      },
      {
        title: "7. AI Tools and Automation",
        body: "As an AI consulting and automation business, we may use AI tools, automation platforms, or software systems to support internal workflows, project analysis, or service delivery. Where personal data or business information is processed using such tools, we apply appropriate safeguards, access controls, and data minimisation. We do not use confidential client materials to train public AI models unless clearly agreed with the client. For client projects, the specific tools, data flows, and safeguards may be agreed separately in a contract or data processing agreement.",
      },
      {
        title: "8. International Data Transfers",
        body: "Some of our service providers may process or store data outside your country or outside the European Economic Area. Where required, we rely on appropriate safeguards such as adequacy decisions, standard contractual clauses, or other lawful transfer mechanisms.",
      },
      {
        title: "9. Data Retention",
        body: "We keep personal data only for as long as necessary for the purposes described in this Privacy Policy. As a general rule: enquiry data may be kept for up to 24 months after the last communication; client and project data may be kept for the duration of the business relationship and a reasonable period afterwards; accounting, tax, or legal records may be kept for the period required by applicable law; website technical logs may be kept for a limited period for security and operational purposes. We may delete, anonymise, or securely archive data when it is no longer needed.",
      },
      {
        title: "10. How We Protect Personal Data",
        body: "We use reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure. These measures may include restricted access to business systems, password protection and account security, secure storage tools, confidentiality controls, limited access to client files, and careful selection of service providers. No website or online service is completely secure, so please avoid sending highly sensitive information through website forms unless necessary.",
      },
      {
        title: "11. Your Rights",
        body: "Depending on your location and applicable law, you may have the right to: request access to your personal data; request correction of inaccurate or incomplete data; request deletion of your personal data; request restriction of processing; object to processing based on legitimate interests; withdraw consent where processing is based on consent; request data portability; and lodge a complaint with a data protection authority. To exercise your rights, contact us at info@octomanus.com. We may need to verify your identity before responding.",
      },
      {
        title: "12. Marketing Communications",
        body: "We will only send marketing communications where permitted by law. You may unsubscribe from marketing emails at any time by using the unsubscribe link in the email or by contacting us directly. We do not sell your contact details to third parties for marketing purposes.",
      },
      {
        title: "13. Changes to This Privacy Policy",
        body: "We may update this Privacy Policy from time to time to reflect changes in our website, services, tools, or legal obligations. The updated version will be published on this page with a revised Last Updated date.",
      },
      {
        title: "14. Contact Us",
        body: "For questions about this Privacy Policy or how we process personal data, contact us at info@octomanus.com.",
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo recopilamos, utilizamos y protegemos tus datos personales.",
    updated: "Última actualización: 3 de junio de 2026",
    sections: [
      {
        title: "1. Quiénes Somos",
        body: 'A efectos de esta Política de Privacidad, "Octo Manus", "nosotras", "nos" o "nuestro" hace referencia a la entidad legal Octo Manus, contactable en info@octomanus.com. Somos el responsable del tratamiento de los datos personales que procesamos a través de este sitio web, salvo que se indique lo contrario.',
      },
      {
        title: "2. Datos Personales que Recopilamos",
        body: "Cuando nos contactas, completas un formulario, reservas una llamada o envías una consulta de proyecto, podemos recopilar: tu nombre, nombre de la empresa, cargo, dirección de correo electrónico, número de teléfono, país o ubicación, sector, tamaño de la empresa, servicios de interés, plazos del proyecto, rango de presupuesto y detalles sobre tu desafío de negocio. Al visitar nuestro sitio web, también podemos recopilar información técnica limitada como dirección IP, tipo de navegador, dispositivo, páginas visitadas, fecha y hora de la visita, y fuente de referencia, a través de cookies, herramientas de análisis o registros del servidor.",
      },
      {
        title: "3. Cómo Utilizamos los Datos Personales",
        body: "Utilizamos los datos personales para responder a consultas; evaluar cómo podemos apoyar tu proyecto; preparar propuestas y alcances de proyecto; gestionar llamadas y reuniones; prestar servicios de asesoría de IA, automatización de procesos y agentes de IA; gestionar relaciones con clientes; mejorar nuestro sitio web y comunicaciones; mantener la seguridad del sitio; y cumplir con obligaciones legales, fiscales o normativas. No vendemos tus datos personales.",
      },
      {
        title: "4. Base Legal para el Tratamiento",
        body: "Tratamos datos personales únicamente cuando contamos con una base legal válida. Según la situación, podemos ampararnos en: tu consentimiento (cuando completas un formulario o proporcionas información voluntariamente); medidas precontractuales (cuando solicitas una evaluación de proyecto); necesidad contractual (cuando el tratamiento es necesario para prestar los servicios); intereses legítimos (como responder a consultas, mejorar nuestros servicios y gestionar relaciones con clientes); u obligación legal (para conservar o tratar datos con fines fiscales, contables o legales).",
      },
      {
        title: "5. Cookies y Análisis",
        body: "Nuestro sitio web puede utilizar cookies u otras tecnologías similares para garantizar el correcto funcionamiento del sitio, mejorar el rendimiento, entender cómo lo utilizan los visitantes y apoyar operaciones de seguridad. Si utilizamos cookies analíticas, de marketing o no esenciales, facilitaremos información al respecto y solicitaremos el consentimiento cuando lo exija la ley aplicable. Generalmente puedes gestionar las cookies a través de la configuración de tu navegador.",
      },
      {
        title: "6. Proveedores de Servicios Externos",
        body: "Podemos recurrir a proveedores de servicios externos de confianza para operar nuestro sitio web y negocio, tales como proveedores de alojamiento web, herramientas de correo electrónico y comunicación, herramientas de formulario o CRM, almacenamiento en la nube, proveedores de análisis, herramientas de programación de citas y proveedores de servicios de pago o contabilidad. Estos proveedores solo podrán tratar datos personales en la medida necesaria para prestarnos sus servicios y bajo las condiciones de protección de datos adecuadas.",
      },
      {
        title: "7. Herramientas de IA y Automatización",
        body: "Como empresa de consultoría e implementación de IA, podemos utilizar herramientas de IA, plataformas de automatización o sistemas de software para apoyar flujos de trabajo internos, análisis de proyectos o prestación de servicios. Cuando se traten datos personales o información empresarial mediante dichas herramientas, aplicamos las salvaguardas, controles de acceso y minimización de datos adecuados. No utilizamos materiales confidenciales de clientes para entrenar modelos públicos de IA, salvo acuerdo expreso con el cliente.",
      },
      {
        title: "8. Transferencias Internacionales de Datos",
        body: "Algunos de nuestros proveedores de servicios pueden tratar o almacenar datos fuera de tu país o del Espacio Económico Europeo. Cuando sea necesario, nos amparamos en las salvaguardas adecuadas, como decisiones de adecuación, cláusulas contractuales tipo u otros mecanismos de transferencia legítimos.",
      },
      {
        title: "9. Conservación de Datos",
        body: "Conservamos los datos personales únicamente durante el tiempo necesario para los fines descritos en esta Política de Privacidad. Como regla general: los datos de consultas pueden conservarse hasta 24 meses desde la última comunicación; los datos de clientes y proyectos durante la relación comercial y un período razonable posterior; los registros contables, fiscales o legales durante el período exigido por la ley; y los registros técnicos del sitio web durante un período limitado con fines de seguridad.",
      },
      {
        title: "10. Cómo Protegemos los Datos Personales",
        body: "Aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, uso indebido, alteración o divulgación. Estas medidas incluyen el acceso restringido a los sistemas, protección con contraseña, almacenamiento seguro, controles de confidencialidad, acceso limitado a los archivos de clientes y una cuidadosa selección de proveedores.",
      },
      {
        title: "11. Tus Derechos",
        body: "Según tu ubicación y la legislación aplicable, puedes tener derecho a: acceder a tus datos personales; solicitar la corrección de datos inexactos o incompletos; solicitar la eliminación de tus datos; solicitar la limitación del tratamiento; oponerte al tratamiento basado en intereses legítimos; retirar el consentimiento cuando el tratamiento se base en él; solicitar la portabilidad de datos; y presentar una reclamación ante una autoridad de protección de datos. Para ejercer tus derechos, contáctanos en info@octomanus.com.",
      },
      {
        title: "12. Comunicaciones de Marketing",
        body: "Solo enviaremos comunicaciones de marketing cuando lo permita la ley. Puedes darte de baja de los correos de marketing en cualquier momento a través del enlace de cancelación o contactándonos directamente. No vendemos tus datos de contacto a terceros con fines de marketing.",
      },
      {
        title: "13. Cambios en Esta Política de Privacidad",
        body: "Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestro sitio web, servicios, herramientas u obligaciones legales. La versión actualizada se publicará en esta página con una nueva fecha de última actualización.",
      },
      {
        title: "14. Contacto",
        body: "Para cualquier pregunta sobre esta Política de Privacidad o sobre cómo tratamos los datos personales, contáctanos en info@octomanus.com.",
      },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    subtitle: "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
    updated: "Ultimo aggiornamento: 3 giugno 2026",
    sections: [
      {
        title: "1. Chi Siamo",
        body: "Ai fini della presente Informativa sulla Privacy, \"Octo Manus\", \"noi\", \"ci\" o \"nostro\" si riferisce all'entità legale Octo Manus, contattabile all'indirizzo info@octomanus.com. Siamo il titolare del trattamento dei dati personali che elaboriamo attraverso questo sito web, salvo diversa indicazione.",
      },
      {
        title: "2. Dati Personali che Raccogliamo",
        body: "Quando ci contatti, compili un modulo, prenoti una chiamata o invii una richiesta di progetto, potremmo raccogliere: il tuo nome, il nome dell'azienda, il ruolo, l'indirizzo email, il numero di telefono, il paese o la città, il settore, le dimensioni dell'azienda, i servizi di interesse, la tempistica del progetto, il budget e i dettagli sulla tua sfida aziendale. Visitando il nostro sito, raccogliamo anche informazioni tecniche limitate come indirizzo IP, tipo di browser, dispositivo, pagine visitate, data e ora della visita e sorgente di riferimento, tramite cookie, strumenti di analisi o log del server.",
      },
      {
        title: "3. Come Utilizziamo i Dati Personali",
        body: "Utilizziamo i dati personali per rispondere alle richieste; valutare come possiamo supportare il tuo progetto; preparare proposte e scope di progetto; gestire chiamate e riunioni; fornire servizi di consulenza IA, automazione dei processi e agenti IA; gestire le relazioni con i clienti; migliorare il sito web e le comunicazioni; mantenere la sicurezza del sito; e adempiere agli obblighi legali, fiscali o normativi. Non vendiamo i tuoi dati personali.",
      },
      {
        title: "4. Base Giuridica del Trattamento",
        body: "Trattiamo i dati personali solo in presenza di una base giuridica valida. A seconda della situazione, potremmo basarci su: il tuo consenso (quando compili un modulo o fornisci informazioni volontariamente); misure precontrattuali (quando chiedi una valutazione del progetto); necessità contrattuale (quando il trattamento è necessario per erogare i servizi); interessi legittimi (come rispondere alle richieste, migliorare i servizi e gestire le relazioni con i clienti); oppure obbligo legale (per conservare o trattare dati a fini fiscali, contabili o legali).",
      },
      {
        title: "5. Cookie e Analisi",
        body: "Il nostro sito web può utilizzare cookie o tecnologie simili per garantirne il corretto funzionamento, migliorare le prestazioni, capire come i visitatori lo utilizzano e supportare le operazioni di sicurezza. Se utilizziamo cookie analitici, di marketing o non essenziali, forniremo informazioni in merito e richiederemo il consenso ove richiesto dalla legge applicabile. Di solito puoi gestire i cookie tramite le impostazioni del browser.",
      },
      {
        title: "6. Fornitori di Servizi Terzi",
        body: "Potremmo avvalerci di fornitori di servizi terzi affidabili per operare il nostro sito e la nostra attività, quali provider di hosting, strumenti di email e comunicazione, strumenti CRM o di moduli, storage cloud, provider di analisi, strumenti di pianificazione e provider di pagamento o contabilità. Questi provider possono trattare i dati personali solo nella misura necessaria per erogare i loro servizi e nel rispetto di adeguate condizioni di protezione dei dati.",
      },
      {
        title: "7. Strumenti di IA e Automazione",
        body: "In quanto azienda di consulenza e automazione IA, potremmo utilizzare strumenti di intelligenza artificiale, piattaforme di automazione o sistemi software per supportare flussi di lavoro interni, analisi di progetto o erogazione di servizi. Quando vengono trattati dati personali o informazioni aziendali attraverso tali strumenti, applichiamo adeguate misure di sicurezza, controlli di accesso e minimizzazione dei dati. Non utilizziamo materiali riservati dei clienti per addestrare modelli IA pubblici, salvo esplicito accordo con il cliente.",
      },
      {
        title: "8. Trasferimenti Internazionali di Dati",
        body: "Alcuni nostri fornitori di servizi potrebbero trattare o conservare dati al di fuori del tuo paese o dello Spazio Economico Europeo. Ove richiesto, ci avvaliamo di garanzie adeguate come decisioni di adeguatezza, clausole contrattuali standard o altri meccanismi di trasferimento legittimi.",
      },
      {
        title: "9. Conservazione dei Dati",
        body: "Conserviamo i dati personali solo per il tempo necessario agli scopi descritti nella presente Informativa. Come regola generale: i dati delle richieste possono essere conservati fino a 24 mesi dall'ultima comunicazione; i dati di clienti e progetti per la durata del rapporto commerciale e per un periodo ragionevole successivo; i registri contabili, fiscali o legali per il periodo previsto dalla legge; i log tecnici del sito per un periodo limitato a fini di sicurezza.",
      },
      {
        title: "10. Come Proteggiamo i Dati Personali",
        body: "Adottiamo ragionevoli misure tecniche e organizzative per proteggere i dati personali da accessi non autorizzati, perdita, uso improprio, alterazione o divulgazione. Queste misure includono accesso limitato ai sistemi aziendali, protezione con password, archiviazione sicura, controlli di riservatezza, accesso limitato ai file dei clienti e selezione accurata dei fornitori.",
      },
      {
        title: "11. I Tuoi Diritti",
        body: "In base alla tua ubicazione e alla legge applicabile, potresti avere il diritto di: accedere ai tuoi dati personali; richiedere la rettifica di dati inesatti o incompleti; richiedere la cancellazione dei tuoi dati; richiedere la limitazione del trattamento; opporti al trattamento basato su interessi legittimi; revocare il consenso; richiedere la portabilità dei dati; e presentare un reclamo a un'autorità per la protezione dei dati. Per esercitare i tuoi diritti, contattaci a info@octomanus.com.",
      },
      {
        title: "12. Comunicazioni di Marketing",
        body: "Invieremo comunicazioni di marketing solo ove consentito dalla legge. Puoi annullare l'iscrizione alle email di marketing in qualsiasi momento tramite il link di disiscrizione nell'email o contattandoci direttamente. Non vendiamo i tuoi dati di contatto a terzi per finalità di marketing.",
      },
      {
        title: "13. Modifiche alla Presente Informativa",
        body: "Potremmo aggiornare periodicamente la presente Informativa sulla Privacy per riflettere modifiche al nostro sito web, ai servizi, agli strumenti utilizzati o agli obblighi legali. La versione aggiornata sarà pubblicata su questa pagina con una nuova data di aggiornamento.",
      },
      {
        title: "14. Contatti",
        body: "Per domande sulla presente Informativa sulla Privacy o sul modo in cui trattiamo i dati personali, contattaci all'indirizzo info@octomanus.com.",
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

      {/* ── Floating close (✕) — sticks top-right while scrolling ── */}
      <button
        onClick={() => window.history.back()}
        aria-label="Close privacy policy"
        className="fixed top-24 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full text-lg transition-all duration-200 hover:scale-110"
        style={{
          backgroundColor: "rgba(8,19,31,0.92)",
          border: "1px solid rgba(233,181,166,0.35)",
          color: ROSE,
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        ✕
      </button>

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
          {/* ── Back link at the bottom of the text ── */}
          <div className="flex justify-center pb-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(233,181,166,0.08)",
                border: "1px solid rgba(233,181,166,0.28)",
                color: ROSE,
                fontFamily: "var(--font-body)",
              }}
            >
              ← Back
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
