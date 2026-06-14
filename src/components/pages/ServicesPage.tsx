import { useEffect, useMemo } from "react";
import {
  Phone, BookOpen, LifeBuoy,
  GitBranch, Settings, ShieldCheck,
  Bot, Brain, Rocket,
  Compass, Map, Award,
  Clock, RefreshCw, TrendingUp,
  Users, Star, Database,
  type LucideIcon,
} from "lucide-react";
import {
  SiteHeader, SiteFooter, IVORY, PAGE_BG, ROSE,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

const PAGE_BG_ALT = "#020A14";

function nb(text: string): string {
  return text.replace(
    / (a|an|the|of|for|in|on|at|to|by|from|with|its|as|or|and)\s/g,
    (_, word) => ` ${word}\u00A0`
  );
}

function RoseDivider() {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="h-px flex-1" style={{ background: "rgba(233,181,166,0.18)" }} />
      <span style={{ color: ROSE, fontSize: "18px", opacity: 0.6 }}>✦</span>
      <div className="h-px flex-1" style={{ background: "rgba(233,181,166,0.18)" }} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.22em] mb-6"
      style={{ color: ROSE, fontFamily: "var(--font-body)", fontWeight: 500 }}>
      {children}
    </p>
  );
}

/* ── Types ───────────────────────────────────────────────── */
type Step = {
  number: string;
  icon:   LucideIcon;
  title:  string;
  desc:   string;
  isHighlight?: boolean;
};

type Benefit = {
  icon:   LucideIcon;
  stat?:  string;
  title:  string;
  desc:   string;
};

type ServiceData = {
  id:       string;
  badge:    string;
  headline: string[];
  sub:      string;
  intro:    string;
  steps:    Step[];
  benefits: Benefit[];
};

/* ── Icon maps (static) ──────────────────────────────────── */
const ADVISORY_STEP_ICONS: LucideIcon[] = [Phone, BookOpen, LifeBuoy];
const AUTOMATION_STEP_ICONS: LucideIcon[] = [Phone, GitBranch, Settings, Rocket, ShieldCheck];
const AGENT_STEP_ICONS: LucideIcon[] = [Phone, GitBranch, Bot, Brain, Rocket];

const ADVISORY_BENEFIT_ICONS: LucideIcon[] = [Compass, Map, Award];
const AUTOMATION_BENEFIT_ICONS: LucideIcon[] = [Clock, RefreshCw, TrendingUp];
const AGENT_BENEFIT_ICONS: LucideIcon[] = [Users, Database, Star];

/* ── Horizontal Timeline ─────────────────────────────────── */
function HowWeWork({ steps, howWeWorkLabel }: { steps: Step[]; howWeWorkLabel: string }) {
  const count = steps.length;
  const colClass =
    count <= 3 ? "lg:grid-cols-3" :
    count === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6";

  return (
    <div className="mt-14">
      <SectionLabel>{howWeWorkLabel}</SectionLabel>

      <div className={`relative flex flex-col gap-10 md:grid md:gap-y-12 md:gap-x-4 ${colClass}`}>

        {/* Horizontal connector — desktop only */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          style={{
            top: "3.6rem",
            left: `calc(${100 / count / 2}%)`,
            right: `calc(${100 / count / 2}%)`,
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(233,181,166,0.2) 8%, rgba(233,181,166,0.2) 92%, transparent 100%)",
          }}
        />

        {/* Vertical connector — mobile only */}
        <div
          className="pointer-events-none absolute md:hidden z-0"
          style={{
            top: "2rem",
            bottom: "2rem",
            left: "3rem", /* centered behind 6rem icons (w-24) */
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(233,181,166,0.2) 5%, rgba(233,181,166,0.2) 95%, transparent 100%)",
          }}
        />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative flex flex-row items-center text-left gap-6 px-2 md:flex-col md:items-center md:text-center md:px-1 md:gap-0"
            >
              <div
                className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full flex-shrink-0"
                style={{
                  background: step.isHighlight
                    ? "radial-gradient(circle, rgba(233,181,166,0.22), rgba(233,181,166,0.06))"
                    : "radial-gradient(circle, #01060F, #01060F)", /* Solid background to hide line behind icon */
                  border: step.isHighlight
                    ? "1px solid rgba(233,181,166,0.45)"
                    : "1px solid rgba(233,181,166,0.25)",
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full z-[-1]" 
                  style={{ 
                    background: step.isHighlight 
                      ? "transparent" 
                      : "radial-gradient(circle, rgba(233,181,166,0.12), rgba(233,181,166,0.03))" 
                  }} 
                />
                <Icon
                  className="h-7 w-7 relative z-10"
                  style={{ color: ROSE, opacity: step.isHighlight ? 1 : 0.8 }}
                  strokeWidth={1.5}
                />
                <span
                  className="text-[10px] font-medium tracking-widest mt-2 relative z-10"
                  style={{ color: ROSE, opacity: 0.5 }}
                >
                  {step.number}
                </span>
              </div>

              <div>
                <h4
                  className="metallic-rose mt-0 md:mt-5 text-xl md:text-2xl leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h4>

                <p
                  className="mt-2 text-sm leading-relaxed max-w-[200px]"
                  style={{ color: IVORY, opacity: 0.65 }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Service section ─────────────────────────────────────── */
function ServiceSection({ service, idx, howWeWorkLabel }: { service: ServiceData; idx: number; howWeWorkLabel: string }) {
  const isEven = idx % 2 === 0;
  const bg = isEven ? PAGE_BG : PAGE_BG_ALT;

  return (
    <section
      id={service.id}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: bg }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-7">

        {/* Badge */}
        <div className="mb-10">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
            style={{
              backgroundColor: "rgba(233,181,166,0.1)",
              color: ROSE,
              border: "1px solid rgba(233,181,166,0.22)",
            }}
          >
            {service.badge}
          </span>
        </div>

        {/* Headline + sub */}
        <div className="mb-10 max-w-3xl">
          <h2
            className="metallic-rose text-5xl leading-[1.07] md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.headline.map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="mt-5 text-lg md:text-xl"
            style={{ color: ROSE, fontStyle: "italic", opacity: 0.85 }}
          >
            {service.sub}
          </p>
        </div>

        {/* Intro */}
        <p
          className="max-w-3xl text-base leading-relaxed md:text-lg mb-2"
          style={{ color: IVORY, opacity: 0.85 }}
        >
          {nb(service.intro)}
        </p>

        {/* Timeline */}
        <HowWeWork steps={service.steps} howWeWorkLabel={howWeWorkLabel} />

        {/* Benefits — 3 cols */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {service.benefits.map(({ icon: Icon, stat, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#08131F",
                border: "1px solid rgba(233,181,166,0.18)",
                boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-col">
                  {stat && (
                    <p
                      className="metallic-rose text-[2rem] md:text-[2.5rem] mb-1 leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat}
                    </p>
                  )}
                  <h3
                    className="metallic-rose text-[1.5rem] md:text-3xl leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                </div>
                
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(233,181,166,0.15) 0%, rgba(244,199,185,0.05) 100%)",
                    border: "1px solid rgba(233,181,166,0.25)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: ROSE }} strokeWidth={1.4} />
                </div>
              </div>

              {/* Desc */}
              <p
                className="text-base leading-relaxed"
                style={{ color: IVORY, opacity: 0.72 }}
              >
                {nb(desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export function ServicesPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, []);

  const heroStars = useMemo(
    () => makeStars(150, 41, { top: [-5, 110], left: [-5, 105] }),
    []
  );
  const heroStarsDeep = useMemo(
    () => makeStars(60, 89, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 0.85),
    []
  );

  const sv = t.services;

  /* Build service data from translations */
  const SERVICES: ServiceData[] = [
    {
      id:       "ai-advisory",
      badge:    sv.advisory.badge,
      headline: sv.advisory.headline,
      sub:      sv.advisory.sub,
      intro:    sv.advisory.intro,
      steps: sv.advisory.steps.map((s, i) => ({
        number: String(i + 1).padStart(2, "0"),
        icon:   ADVISORY_STEP_ICONS[i] ?? Phone,
        title:  s.title,
        desc:   s.desc,
        isHighlight: i === sv.advisory.steps.length - 1,
      })),
      benefits: sv.advisory.benefits.map((b, i) => ({
        icon:  ADVISORY_BENEFIT_ICONS[i] ?? Compass,
        title: b.title,
        desc:  b.desc,
      })),
    },
    {
      id:       "automation",
      badge:    sv.automation.badge,
      headline: sv.automation.headline,
      sub:      sv.automation.sub,
      intro:    sv.automation.intro,
      steps: sv.automation.steps.map((s, i) => ({
        number: String(i + 1).padStart(2, "0"),
        icon:   AUTOMATION_STEP_ICONS[i] ?? Phone,
        title:  s.title,
        desc:   s.desc,
        isHighlight: i === sv.automation.steps.length - 1,
      })),
      benefits: sv.automation.benefits.map((b, i) => ({
        icon:  AUTOMATION_BENEFIT_ICONS[i] ?? Clock,
        stat:  b.stat,
        title: b.title,
        desc:  b.desc,
      })),
    },
    {
      id:       "ai-agents",
      badge:    sv.agents.badge,
      headline: sv.agents.headline,
      sub:      sv.agents.sub,
      intro:    sv.agents.intro,
      steps: sv.agents.steps.map((s, i) => ({
        number: String(i + 1).padStart(2, "0"),
        icon:   AGENT_STEP_ICONS[i] ?? Phone,
        title:  s.title,
        desc:   s.desc,
        isHighlight: i === sv.agents.steps.length - 1,
      })),
      benefits: sv.agents.benefits.map((b, i) => ({
        icon:  AGENT_BENEFIT_ICONS[i] ?? Users,
        stat:  b.stat,
        title: b.title,
        desc:  b.desc,
      })),
    },
  ];

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={heroStars} />
          <StarField stars={heroStarsDeep} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-7 text-center">
          <SectionLabel>{sv.heroLabel}</SectionLabel>
          <h1
            className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sv.heroH1[0]}
            <br />
            {sv.heroH1[1]}
          </h1>
          <p
            className="mt-3 text-sm uppercase tracking-[0.18em]"
            style={{ color: ROSE, opacity: 0.65, fontFamily: "var(--font-body)" }}
          >
            {sv.heroSubtitle}
          </p>
          <p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: IVORY, opacity: 0.82 }}
          >
            {nb(sv.heroBody)}
          </p>

          {/* Service jump cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mt-14 text-left">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex flex-col gap-3 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#08131F",
                  border: "1px solid rgba(233,181,166,0.18)",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
                  textDecoration: "none",
                }}
              >
                <h3
                  className="metallic-rose text-3xl leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.badge}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: IVORY, opacity: 0.6 }}>
                  {s.sub}
                </p>
                <p className="text-xs uppercase tracking-wider pt-2" style={{ color: ROSE, opacity: 0.7 }}>
                  {sv.exploreLabel}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 md:px-7">
        <RoseDivider />
      </div>

      {SERVICES.map((service, idx) => (
        <div key={service.id}>
          <ServiceSection service={service} idx={idx} howWeWorkLabel={sv.howWeWork} />
          {idx < SERVICES.length - 1 && (
            <div className="mx-auto max-w-7xl px-5 md:px-7">
              <RoseDivider />
            </div>
          )}
        </div>
      ))}

      <SiteFooter />
    </div>
  );
}
