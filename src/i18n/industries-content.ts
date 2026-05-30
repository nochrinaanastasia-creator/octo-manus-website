/**
 * Translatable industry section content for EN / IT / ES.
 * Icons and section IDs are defined separately in industries.tsx.
 */

export type IndustryPain     = { title: string; desc: string };
export type IndustrySolution = { title: string; desc: string };
export type IndustryInsight  = { hook: string; label: string; sub: string };

export type IndustrySectionContent = {
  badge:     string;
  headline:  string[];
  sub:       string;
  intro:     string;
  pains:     IndustryPain[];
  solutions: IndustrySolution[];
  insight:   IndustryInsight;
  cta:       string;
};

export type IndustriesLang = {
  jumpTitles:          string[];
  jumpSubs:            string[];
  painLabel:           string;
  solutionLabel:       string;
  exploreLabel:        string;
  exploreFourthLabel:  string;
  ctaLabel:            string;
  ctaNoPitch:     string;
  ctaFitLabel:    string;
  ctaFitBody:     string;
  ctaFitH2:       string[];
  sections:       IndustrySectionContent[];
};

export const industriesContent: Record<string, IndustriesLang> = {

  /* ─────────────── ENGLISH ─────────────── */
  en: {
    jumpTitles:    ["Supply Chain", "Retail & E-commerce", "Beauty & Wellness", "Your Industry"],
    jumpSubs: [
      "Forecasting, supplier coordination and operational reporting.",
      "Product content, customer service and inventory intelligence.",
      "Booking automation, client retention and content scheduling.",
      "Operations-heavy but not on the list? Let's talk about what we can build for you.",
    ],
    painLabel:     "The common pressure points",
    solutionLabel: "What we build for you",
    exploreLabel:  "Explore",
    exploreFourthLabel: "Get in touch",
    ctaLabel:      "Book a Strategy Call",
    ctaNoPitch:    "No pitch. Just an honest conversation.",
    ctaFitLabel:   "Don't see your exact fit?",
    ctaFitH2:      ["If your business runs on operations,", "there's an AI use case in it."],
    ctaFitBody:    "Our three core industries are where we work most — but if your business is operations-heavy and drowning in manual work, the conversation is worth having. We'll tell you honestly if we can help.",
    sections: [
      /* ── Supply Chain ── */
      {
        badge:    "Supply Chain · Logistics · Warehousing",
        headline: ["When Operations Depend on Timing,", "Manual Coordination Becomes Risky."],
        sub:      "AI for logistics, warehousing and supply chain teams who run on precision — not promises.",
        intro:    "Your operation runs on information. When that information is fragmented across platforms, inboxes and supplier relationships, the cost shows up in delays, excess stock and decisions made without the full picture. We build AI systems that give your team visibility and response time — not workarounds.",
        pains: [
          { title: "Demand Uncertainty",      desc: "Sales, seasonality, promotions, and market changes make it difficult to predict what stock, capacity, or replenishment will be needed next." },
          { title: "Disconnected Systems & Manual Checks", desc: "ERP, warehouse tools, carrier portals, spreadsheets, and inboxes often do not speak to each other. Teams lose time checking the same shipment, order, or stock movement in multiple places." },
          { title: "Reports Built by Hand",            desc: "Operational reports often require exporting data, cleaning spreadsheets, checking exceptions, and preparing updates manually — which slows down decision-making and increases error risk." },
          { title: "Repetitive Follow-Up",     desc: "Teams spend hours chasing confirmations, ETAs, missing information, shipment updates, and operational approvals that could be automated or pre-structured." },
        ],
        solutions: [
          { title: "Demand Forecasting",              desc: "AI models built on your historical data, seasonal patterns and supplier lead times — so your buying decisions have a real foundation, not a gut feeling." },
          { title: "Operations Data Alignment",   desc: "Workflows that connect and structure data from ERP systems, warehouse files, carrier updates, spreadsheets, and internal tools, so teams work from cleaner and more consistent information." },
          { title: "Automated Reporting",             desc: "Reporting systems that collect, clean, and structure operational data, so your team spends less time building reports manually and more time acting on the results." },
          { title: "Follow-Up Automation",            desc: "Automated workflows that chase confirmations, ETAs, missing details, shipment updates, and approvals — so your team spends less time asking for the same information twice." },
        ],
        insight: {
          hook:  "3–5",
          label: "The average SMB supply chain operation runs across 3–5 disconnected systems.",
          sub:   "The manual coordination between them is where most delays are born — and where we typically find the fastest wins.",
        },
        cta: "Walk us through your current reporting process — that's usually where the most immediate opportunities are.",
      },

      /* ── Retail ── */
      {
        badge:    "Retail · E-commerce · Fashion",
        headline: ["Your Catalogue Grows.", "Your Friday Evening Shouldn't Disappear Into It."],
        sub:      "AI for retailers, e-commerce brands and fashion businesses that need to move fast — without the errors that come with moving fast.",
        intro:    "Speed matters in retail — every day a product isn't live, listed correctly or available to buy is lost margin. The problem isn't your team. It's that a disproportionate share of their time goes into work that doesn't require human judgement. We automate the operational layer so attention goes where it needs to be.",
        pains: [
          { title: "Slow Product Content", desc: "Descriptions, SEO titles, size details, translations, marketplace texts, and product attributes become heavy as the catalogue grows." },
          { title: "Recurring Customer Questions",  desc: "Customers ask the same things about size, availability, delivery, returns, product details, and order status — often through different platforms." },
          { title: "Unaligned Stock Data",         desc: "Website, marketplace, warehouse, and internal stock data may not update cleanly, creating overselling, wrong expectations, or unnecessary manual checks." },
          { title: "Scattered Product Images",       desc: "Product visuals are spread across supplier websites, folders, marketplaces, archives, or chats, making them slow to collect and match." },
        ],
        solutions: [
          { title: "Product Content Automation",         desc: "AI workflows that generate, adapt, translate, and structure product descriptions, SEO titles, size details, marketplace copy, and attributes as your catalogue grows." },
          { title: "Customer Support Assistants",       desc: "AI assistants that answer recurring questions about size, availability, delivery, returns, product details, and order status — with escalation when human support is needed." },
          { title: "Stock Data Alignment",             desc: "Workflows that help keep product availability, warehouse stock, marketplace data, and internal files more consistent, reducing overselling and manual checks." },
          { title: "Image Collection & Matching",   desc: "Systems that collect, organize, and match product visuals from supplier websites, folders, marketplaces, archives, or chats, making catalogue preparation faster." },
        ],
        insight: {
          hook:  "15–25%",
          label: "of operational time in e-commerce teams goes to product content management alone.",
          sub:   "That's before a single customer question is answered or a return is processed.",
        },
        cta: "If your team spends Friday evenings catching up on listings, that's the first thing we'd address.",
      },

      /* ── Beauty ── */
      {
        badge:    "Beauty · Wellness · Service Providers",
        headline: ["Your Clients Come for the Experience.", "Let AI Handle the Rest."],
        sub:      "AI for salons, spas, clinics and wellness businesses that want to grow — without the admin growing alongside them.",
        intro:    "Your business is built around presence — being fully engaged with whoever is in the room. The problem is that the before and after of each appointment create a constant stream of tasks that compete directly with that focus. We build the systems that handle them so you don't have to.",
        pains: [
          { title: "No-Shows Have a Real Cost",       desc: "Empty slots, late cancellations, and forgotten appointments directly reduce revenue — especially when there is no automated reminder, deposit, or waitlist flow." },
          { title: "Slow Replies to Clients",  desc: "Clients often ask about availability, prices, treatments, preparation, aftercare, and policies while the team is busy with appointments, causing delays and lost bookings." },
          { title: "Weak Rebooking Flow", desc: "Many clients leave happy but do not immediately book their next visit. Without smart follow-ups, reminders, or personalized rebooking prompts, repeat revenue is easily lost." },
          { title: "Manual Client Admin", desc: "Client notes, preferences, intake forms, aftercare messages, review requests, and follow-ups are often handled manually — taking time away from client-facing work." },
        ],
        solutions: [
          { title: "Booking & Reminder Automation",   desc: "Automated reminders, confirmations, cancellation flows, and waitlist messages that help reduce empty slots and missed appointments." },
          { title: "Client Response Assistants",      desc: "AI assistants that answer common questions about availability, prices, treatments, preparation, aftercare, policies, and location." },
          { title: "Rebooking & Follow-Up Flows",        desc: "Personalized follow-ups that encourage clients to book their next visit, leave a review, or follow the right aftercare steps." },
          { title: "Client Admin Workflows",              desc: "Systems for intake forms, client notes, preferences, treatment history, aftercare messages, and review requests — organized in one smoother process." },
        ],
        insight: {
          hook:  "8–12h",
          label: "The typical SMB wellness or beauty practice spends 8–12 hours a week on administrative tasks.",
          sub:   "That's a full working day — every week — that could be with clients, on growth, or simply not at the laptop.",
        },
        cta: "Tell us what your team spends the most time on that isn't directly client-facing. That's where we start.",
      },
    ],
  },

  /* ─────────────── ITALIANO ─────────────── */
  it: {
    jumpTitles:    ["Supply Chain", "Retail & E-commerce", "Beauty & Wellness", "Il tuo settore"],
    jumpSubs: [
      "Previsioni, coordinamento fornitori e reportistica operativa.",
      "Contenuti prodotto, servizio clienti e gestione inventario.",
      "Automazione prenotazioni, fidelizzazione clienti e pianificazione contenuti.",
      "Operativamente intenso ma non in elenco? Parliamo di cosa possiamo costruire per te.",
    ],
    painLabel:     "Le sfide operative comuni",
    solutionLabel: "Cosa costruiamo per te",
    exploreLabel:  "Esplora",
    exploreFourthLabel: "Contattaci",
    ctaLabel:      "Prenota una Chiamata Strategica",
    ctaNoPitch:    "Nessuna vendita. Solo una conversazione onesta.",
    ctaFitLabel:   "Non trovi il tuo settore?",
    ctaFitH2:      ["Se la tua azienda vive di operazioni,", "c'è un caso d'uso AI al suo interno."],
    ctaFitBody:    "I nostri tre settori principali sono dove lavoriamo di più — ma se la tua azienda è operativamente intensa e sommersa di lavoro manuale, vale la pena parlarne. Ti diremo onestamente se possiamo aiutarti.",
    sections: [
      /* ── Supply Chain IT ── */
      {
        badge:    "Supply Chain · Logistica · Magazzino",
        headline: ["Quando le operazioni dipendono dai tempi,", "il coordinamento manuale diventa un rischio."],
        sub:      "AI per team logistici e di supply chain che operano con precisione — non con promesse.",
        intro:    "La tua operazione dipende dalle informazioni. Quando questi dati sono frammentati su piattaforme diverse, caselle di posta e relazioni con i fornitori, il costo si vede nei ritardi e nelle decisioni prese senza il quadro completo. Costruiamo sistemi AI che danno al tuo team visibilità e reattività — non soluzioni provvisorie.",
        pains: [
          { title: "La domanda supera le previsioni",    desc: "I cambiamenti stagionali e le fluttuazioni del mercato lasciano gli acquisti in reazione — con posizioni di inventario non desiderate." },
          { title: "I ritardi dei fornitori arrivano tardi", desc: "Quando un'interruzione viene confermata, il cliente si aspetta già la consegna. Questo divario erode la fiducia nei fornitori." },
          { title: "Il reporting consuma ore preziose", desc: "I dati esistono. Sono distribuiti su piattaforme, fogli di calcolo e caselle di posta — assemblarli richiede ore che non ci sono." },
          { title: "Gli errori manuali si moltiplicano", desc: "Ogni reinserimento manuale è un rischio. Nella supply chain, gli errori piccoli non rimangono piccoli." },
        ],
        solutions: [
          { title: "Previsione della Domanda",         desc: "Modelli AI costruiti sui tuoi dati storici, pattern stagionali e lead time dei fornitori — per decisioni di acquisto con una base reale." },
          { title: "Agenti per i Fornitori",           desc: "Sequenze automatizzate che tracciano gli impegni, inseguono gli aggiornamenti e segnalano i ritardi senza gestire manualmente le email." },
          { title: "Reporting Automatizzato",          desc: "Report generati, formattati e consegnati puntualmente — senza recupero manuale dei dati e senza fretta del venerdì pomeriggio." },
          { title: "Sincronizzazione Dati",            desc: "Monitoraggio cross-platform con rilevamento anomalie che segnala le incongruenze prima che degenerino in problemi più grandi." },
        ],
        insight: {
          hook:  "3–5",
          label: "Un'operazione SMB media di supply chain opera su 3–5 sistemi disconnessi.",
          sub:   "Il coordinamento manuale tra questi sistemi è dove nascono la maggior parte dei ritardi — ed è qui che troviamo le vittorie più rapide.",
        },
        cta: "Raccontaci il tuo processo di reporting attuale — è lì che troviamo solitamente le opportunità più immediate.",
      },

      /* ── Retail IT ── */
      {
        badge:    "Retail · E-commerce · Moda",
        headline: ["Il tuo catalogo cresce.", "Il tuo venerdì sera non dovrebbe sparirci dentro."],
        sub:      "AI per retailer, brand e-commerce e moda che devono muoversi velocemente — senza gli errori che accompagnano la velocità.",
        intro:    "Nel retail la velocità conta — ogni giorno in cui un prodotto non è online o non è elencato correttamente è margine perso. Il problema non è il tuo team. È che troppo del loro tempo va in lavoro che non richiede giudizio umano. Automatizziamo lo strato operativo perché l'attenzione vada dove deve.",
        pains: [
          { title: "I contenuti rallentano il lancio",      desc: "Scrivere schede prodotto per centinaia di SKU è lento e soggetto a errori. I ritardi costano ricavi ogni giorno in cui il prodotto non è online." },
          { title: "I picchi di volume sommergono il supporto", desc: "I giorni di lancio e gli eventi di saldo sono quando i clienti hanno più domande. Il tempo di risposta influisce direttamente sulla conversione." },
          { title: "I dati di reso vengono sprecati",      desc: "I pattern di reso — taglie, prodotti, motivi — contengono dati preziosi che quasi nessun team cattura e analizza." },
          { title: "L'inventario si gestisce a istinto",   desc: "Senza previsioni della domanda, profondità d'acquisto e timing dei ribassi sono ipotesi ragionate. Nella moda, sbagliare ha un costo significativo." },
        ],
        solutions: [
          { title: "Contenuti Prodotto su Scala",      desc: "Descrizioni, titoli, metadati SEO e guide taglie scritti con la voce del tuo brand — per tutti gli SKU necessari, con qualità costante." },
          { title: "Agenti Customer Service AI",       desc: "Agenti formati sul brand, attivi 24/7, che gestiscono le richieste, scalano i casi complessi e riducono i tempi di risposta." },
          { title: "Intelligence sui Resi",            desc: "Elaborazione resi strutturata con acquisizione automatica dei dati — che alimenta le decisioni di acquisto, non solo il magazzino." },
          { title: "Previsioni Domanda e Inventario",  desc: "Monitoraggio sell-through e raccomandazioni di riordino basati sui tuoi dati di vendita reali — piani, non sensazioni." },
        ],
        insight: {
          hook:  "15–25%",
          label: "del tempo operativo nei team e-commerce va solo nella gestione dei contenuti prodotto.",
          sub:   "E questo è prima di rispondere a una sola domanda di un cliente o gestire un reso.",
        },
        cta: "Se il tuo team passa i venerdì sera ad aggiornare le schede prodotto, questo è il primo problema che affronteremmo.",
      },

      /* ── Beauty IT ── */
      {
        badge:    "Beauty · Wellness · Servizi",
        headline: ["I tuoi clienti vengono per l'esperienza.", "Lascia che l'AI gestisca il resto."],
        sub:      "AI per saloni, spa, cliniche e business wellness che vogliono crescere — senza che l'amministrazione cresca con loro.",
        intro:    "Il tuo business è costruito sulla presenza — essere completamente presente con chiunque sia in sala. Il problema è che il prima e il dopo di ogni appuntamento creano un flusso costante di attività che compete con questa attenzione. Costruiamo i sistemi che le gestiscono al posto tuo.",
        pains: [
          { title: "I no-show hanno un costo reale",        desc: "Un appuntamento mancato è fatturato perso e una giornata stravolta. Su scala, i tassi di no-show diventano silenziosamente uno dei maggiori costi operativi." },
          { title: "Il follow-up si perde quando sei occupato", desc: "I promemoria di riprenotazione e i check-in post-appuntamento migliorano la fidelizzazione — ma solo se avvengono con costanza. Le settimane intense impediscono che accada." },
          { title: "L'accoglienza è ancora troppo lenta",  desc: "Moduli cartacei, domande ripetute, preferenze non portate avanti. L'esperienza del cliente inizia prima dell'appuntamento — e così la prima impressione." },
          { title: "I contenuti sottraggono tempo ai clienti", desc: "Una presenza social costante conta per l'acquisizione. Crearla bene richiede ore che competono direttamente con le prenotazioni e il riposo." },
        ],
        solutions: [
          { title: "Automazione Prenotazioni e Promemoria", desc: "Messaggi di conferma, promemoria pre-appuntamento e follow-up post-visita che funzionano senza sforzo manuale — riducendo i no-show." },
          { title: "Workflow per la Fidelizzazione",  desc: "Promemoria di riprenotazione personalizzati e touchpoint loyalty calibrati sui pattern reali dei tuoi clienti — non intervalli generici." },
          { title: "Check-in Digitale e Archivio",    desc: "Preferenze, anamnesi e consenso dei clienti acquisiti digitalmente prima dell'appuntamento — ricercabili, coerenti e pronti quando servono." },
          { title: "Pianificazione dei Contenuti",    desc: "Post redatti con il tuo tono e la tua estetica, programmati e pubblicati con regolarità — senza che le serate spariscano nella creazione di contenuti." },
        ],
        insight: {
          hook:  "8–12h",
          label: "Un tipico business SMB di beauty o wellness dedica 8–12 ore settimanali ad attività amministrative.",
          sub:   "È un'intera giornata lavorativa — ogni settimana — che potrebbe essere con i clienti, per la crescita o lontana dallo schermo.",
        },
        cta: "Raccontaci cosa occupa più tempo al tuo team che non è direttamente a contatto con i clienti. Da lì partiamo.",
      },
    ],
  },

  /* ─────────────── ESPAÑOL ─────────────── */
  es: {
    jumpTitles:    ["Supply Chain", "Retail & E-commerce", "Beauty & Wellness", "Tu sector"],
    jumpSubs: [
      "Previsión, coordinación de proveedores e informes operativos.",
      "Contenido de producto, atención al cliente e inteligencia de inventario.",
      "Automatización de citas, fidelización de clientes y planificación de contenido.",
      "¿Con mucha carga operativa pero no en la lista? Hablemos de lo que podemos construir para ti.",
    ],
    painLabel:     "Los puntos de presión habituales",
    solutionLabel: "Lo que construimos para ti",
    exploreLabel:  "Explorar",
    exploreFourthLabel: "Contáctanos",
    ctaLabel:      "Reserva una Llamada Estratégica",
    ctaNoPitch:    "Sin ventas. Solo una conversación honesta.",
    ctaFitLabel:   "¿No encuentras tu sector?",
    ctaFitH2:      ["Si tu negocio vive de las operaciones,", "hay un caso de uso de IA en él."],
    ctaFitBody:    "Nuestros tres sectores principales son donde más trabajamos — pero si tu negocio es operativamente intenso y está inundado de trabajo manual, la conversación vale la pena. Te diremos honestamente si podemos ayudarte.",
    sections: [
      /* ── Supply Chain ES ── */
      {
        badge:    "Supply Chain · Logística · Almacén",
        headline: ["Cuando las operaciones dependen del tiempo,", "la coordinación manual se convierte en un riesgo."],
        sub:      "IA para equipos de logística, almacén y supply chain que operan con precisión — no con promesas.",
        intro:    "Tu operación depende de la información. Cuando esa información está fragmentada en plataformas, bandejas de entrada y relaciones con proveedores, el coste se traduce en retrasos y decisiones sin el panorama completo. Construimos sistemas de IA que dan a tu equipo visibilidad y capacidad de respuesta — no parches.",
        pains: [
          { title: "La demanda supera las previsiones",    desc: "Los cambios estacionales y las fluctuaciones del mercado dejan a los equipos de compras reaccionando — con posiciones de inventario no deseadas." },
          { title: "Los retrasos de proveedores llegan tarde", desc: "Cuando se confirma una interrupción, el cliente ya espera la entrega. Esa brecha es donde se erosiona la confianza." },
          { title: "Los informes consumen horas valiosas", desc: "Los datos existen. Están distribuidos en plataformas, hojas de cálculo y buzones — recopilarlos lleva horas que no existen." },
          { title: "Los errores manuales se multiplican",  desc: "Cada reingreso manual es un riesgo. En la cadena de suministro, los errores pequeños no se quedan pequeños." },
        ],
        solutions: [
          { title: "Previsión de Demanda",                    desc: "Modelos de IA construidos sobre tus datos históricos, patrones estacionales y plazos de entrega — para que tus decisiones de compra tengan una base real." },
          { title: "Agentes de Comunicación con Proveedores", desc: "Secuencias automatizadas que rastrean compromisos, buscan actualizaciones y señalan retrasos sin perseguir manualmente ningún correo." },
          { title: "Informes Automatizados",                  desc: "Informes generados, formateados y entregados puntualmente — sin recopilación manual de datos ni prisas de última hora del viernes." },
          { title: "Sincronización de Datos",                 desc: "Monitorización multiplataforma con detección de anomalías que señala inconsistencias antes de que escalen en algo mayor." },
        ],
        insight: {
          hook:  "3–5",
          label: "Una operación SMB de supply chain típica funciona con 3–5 sistemas desconectados.",
          sub:   "La coordinación manual entre ellos es donde nacen la mayoría de los retrasos — y donde solemos encontrar las mejoras más rápidas.",
        },
        cta: "Cuéntanos tu proceso de reporting actual — ahí es donde solemos encontrar las oportunidades más inmediatas.",
      },

      /* ── Retail ES ── */
      {
        badge:    "Retail · E-commerce · Moda",
        headline: ["Tu catálogo crece.", "Tu viernes por la tarde no debería desaparecer en él."],
        sub:      "IA para retailers, marcas de e-commerce y moda que necesitan moverse rápido — sin los errores que acompañan a esa velocidad.",
        intro:    "En retail, la velocidad lo es todo — cada día que un producto no está en línea o catalogado correctamente es margen perdido. El problema no es tu equipo. Es que una parte desproporcionada de su tiempo va a trabajo que no requiere criterio humano. Automatizamos la capa operativa para que la atención vaya donde realmente importa.",
        pains: [
          { title: "El contenido retrasa los lanzamientos",     desc: "Escribir fichas de producto para cientos de SKUs es lento y propenso a errores. Los retrasos cuestan ingresos cada día que el producto no está en línea." },
          { title: "Los picos de volumen desbordan el servicio", desc: "Los días de lanzamiento y las rebajas son cuando los clientes tienen más preguntas y la paciencia es menor. El tiempo de respuesta afecta directamente a la conversión." },
          { title: "Los datos de devoluciones se desperdician", desc: "Los patrones de devolución — qué tallas, qué productos, qué motivos — contienen inteligencia valiosa que casi ningún equipo captura." },
          { title: "El inventario funciona por intuición",      desc: "Sin previsión de demanda, la profundidad de compra y el timing de los descuentos son suposiciones razonadas. En moda, equivocarse tiene un coste significativo." },
        ],
        solutions: [
          { title: "Contenido de Producto a Escala",    desc: "Descripciones, títulos, metadatos SEO y guías de tallas escritos con la voz de tu marca — para todos los SKUs que necesites, con calidad consistente." },
          { title: "Agentes de Atención al Cliente",    desc: "Agentes formados en tu marca, disponibles 24/7, gestionando consultas, escalando casos complejos y reduciendo tiempos de respuesta." },
          { title: "Inteligencia de Devoluciones",      desc: "Procesamiento estructurado de devoluciones con captura automática de datos — alimentando las decisiones de compra, no solo el almacén." },
          { title: "Previsión de Demanda e Inventario", desc: "Monitorización de sell-through y recomendaciones de reposición basadas en tus datos de ventas reales — con un plan, no con intuición." },
        ],
        insight: {
          hook:  "15–25%",
          label: "del tiempo operativo en equipos de e-commerce va solo a gestión de contenido de producto.",
          sub:   "Y eso es antes de responder una sola consulta de cliente o procesar una devolución.",
        },
        cta: "Si tu equipo pasa los viernes por la tarde actualizando fichas de producto, eso es lo primero que abordaríamos.",
      },

      /* ── Beauty ES ── */
      {
        badge:    "Beauty · Wellness · Servicios",
        headline: ["Tus clientes vienen por la experiencia.", "Deja que la IA gestione el resto."],
        sub:      "IA para salones, spas, clínicas y negocios de wellness que quieren crecer — sin que la administración crezca a la par.",
        intro:    "Tu negocio está construido sobre la presencia — estar completamente disponible para quien esté en la sala. El problema es que el antes y el después de cada cita generan un flujo de tareas que compiten directamente con esa atención. Construimos los sistemas que las gestionan para que tú no tengas que hacerlo.",
        pains: [
          { title: "Las ausencias tienen un coste real",         desc: "Una cita perdida es facturación perdida y un día alterado. A escala, las tasas de ausencia se convierten silenciosamente en uno de tus mayores costes operativos." },
          { title: "El seguimiento se pierde cuando estás ocupado", desc: "Los recordatorios de reserva y los seguimientos post-cita mejoran la fidelización — pero solo si ocurren con constancia. Las semanas intensas hacen que no suceda." },
          { title: "La admisión de clientes sigue siendo lenta", desc: "Formularios en papel, preguntas repetidas, preferencias no registradas. La experiencia del cliente empieza antes de la cita — y también tu primera impresión." },
          { title: "El contenido compite con el tiempo de clientes", desc: "Una presencia constante en redes importa para la captación. Crearla bien requiere horas que compiten directamente con las reservas y el descanso." },
        ],
        solutions: [
          { title: "Automatización de Citas y Recordatorios", desc: "Mensajes de confirmación, recordatorios pre-cita y seguimientos post-visita que funcionan sin esfuerzo manual — reduciendo las ausencias." },
          { title: "Flujos de Fidelización",   desc: "Recordatorios de reserva personalizados y puntos de contacto de fidelización programados según los patrones reales de visita de tus clientes." },
          { title: "Admisión Digital y Registros", desc: "Preferencias, historial y consentimiento de clientes capturados digitalmente antes de la cita — buscables, consistentes y listos cuando los necesitas." },
          { title: "Planificación de Contenido", desc: "Posts redactados con tu tono y estética, programados y publicados de forma consistente — sin que tus tardes desaparezcan en la creación de contenido." },
        ],
        insight: {
          hook:  "8–12h",
          label: "Un negocio SMB típico de beauty o wellness dedica 8–12 horas semanales a tareas administrativas.",
          sub:   "Eso es un día laboral completo — cada semana — que podría estar con clientes, para el crecimiento o simplemente sin pantalla.",
        },
        cta: "Cuéntanos en qué dedica más tiempo tu equipo que no esté directamente relacionado con los clientes. Por ahí empezamos.",
      },
    ],
  },
};
