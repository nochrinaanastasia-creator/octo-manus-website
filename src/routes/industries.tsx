import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import {
  BarChart2, AlertCircle, FileText, RefreshCw, Brain, Bot,
  FileBarChart, Zap, Package, MessageCircle, TrendingDown, PenTool,
  Headphones, BarChart3, Calendar, MessageSquare,
  ClipboardList, Camera, Clock, Heart, Layers, Bell, ArrowDown, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  SiteHeader, SiteFooter, IVORY, PAGE_BG, ROSE, ctaButtonStyle,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";
import { industriesContent } from "@/i18n/industries-content";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — AI for Supply Chain, Retail, Fashion & Beauty | Octo Manus" },
      {
        name: "description",
        content:
          "Octo Manus builds AI advisory, workflow automation and AI agents for Supply Chain, Logistics & Warehousing; Retail, E-commerce & Fashion; and Beauty & Wellness businesses.",
      },
      {
        name: "keywords",
        content:
          "AI for supply chain, AI for logistics, AI for warehousing, supply chain automation, logistics AI agents, warehouse AI, AI for retail, AI for e-commerce, AI for fashion, retail automation, e-commerce AI agents, fashion inventory AI, AI for beauty salon, AI for wellness center, AI for spa, beauty booking automation, wellness AI, SMB AI automation",
      },
      { property: "og:title", content: "Industries — AI Built for Your Sector | Octo Manus" },
      {
        property: "og:description",
        content:
          "Industry-specific AI for Supply Chain & Logistics, Retail, E-commerce & Fashion, and Beauty & Wellness. Purpose-built, not generic.",
      },
      { property: "og:url", content: "https://octomanus.ai/industries" },
    ],
  }),
});

/* ── Preposition orphan guard ────────────────────────────── */
function nb(text: string): string {
  return text.replace(
    / (a|an|the|of|for|in|on|at|to|by|from|with|its|as|or|and)\s/g,
    (_, word) => ` ${word}\u00A0`
  );
}

/* ── Section divider (matches About page) ────────────────── */
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
    <p
      className="text-sm uppercase tracking-[0.22em] mb-5"
      style={{ color: ROSE, fontFamily: "var(--font-body)", fontWeight: 500 }}
    >
      {children}
    </p>
  );
}

/* ── Static icon maps (order matches sections[0,1,2]) ─────── */
const PAIN_ICONS: LucideIcon[][] = [
  [BarChart2, AlertCircle, FileText, RefreshCw],     // Supply Chain
  [Package, MessageCircle, TrendingDown, BarChart3], // Retail
  [Calendar, MessageSquare, ClipboardList, Camera],  // Beauty
];
const SOLUTION_ICONS: LucideIcon[][] = [
  [Brain, Bot, FileBarChart, Zap],             // Supply Chain
  [PenTool, Headphones, RefreshCw, BarChart3], // Retail
  [Bell, Heart, Layers, Clock],                // Beauty
];
const SECTION_IDS = ["supply-chain", "retail", "beauty"];

/* ── Jump card (first 3 — links to section anchor) ────────── */
function JumpCard({
  id, title, sub, exploreLabel,
}: { id: string; title: string; sub: string; exploreLabel: string }) {
  return (
    <a
      href={`#${id}`}
      className="group flex flex-col gap-4 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
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
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: IVORY, opacity: 0.6 }}>
        {sub}
      </p>
      <div
        className="flex items-center gap-2 mt-auto pt-2"
        style={{ color: ROSE, opacity: 0.7 }}
      >
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        <span className="text-xs uppercase tracking-wider">{exploreLabel}</span>
      </div>
    </a>
  );
}

/* ── 4th card — links to #lets-talk ───────────────────────── */
function FourthCard({ title, sub, exploreLabel }: { title: string; sub: string; exploreLabel: string }) {
  return (
    <a
      href="#lets-talk"
      className="group flex flex-col gap-4 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "rgba(233,181,166,0.06)",
        border: "1px solid rgba(233,181,166,0.28)",
        boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
        textDecoration: "none",
      }}
    >
      <h3
        className="metallic-rose text-3xl leading-snug"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: IVORY, opacity: 0.6 }}>
        {sub}
      </p>
      <div
        className="flex items-center gap-2 mt-auto pt-2"
        style={{ color: ROSE, opacity: 0.7 }}
      >
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        <span className="text-xs uppercase tracking-wider">{exploreLabel}</span>
      </div>
    </a>
  );
}

/* ── Industry section ─────────────────────────────────────── */
type SectionProps = {
  id:          string;
  idx:         number;
  content:     (typeof industriesContent)["en"]["sections"][number];
  painIcons:   LucideIcon[];
  solIcons:    LucideIcon[];
  painLabel:   string;
  solLabel:    string;
};

function IndustrySection({ id, idx, content, painIcons, solIcons, painLabel, solLabel }: SectionProps) {
  const isEven = idx % 2 === 0;
  const bg = isEven ? PAGE_BG : "#020A14";

  return (
    <section
      id={id}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: bg }}
    >
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${isEven ? "8%" : "92%"} 50%, rgba(233,181,166,0.045) 0%, rgba(1,6,15,0) 70%)`,
        }}
      />

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
            {content.badge}
          </span>
        </div>

        {/* Headline + sub */}
        <div className="mb-16 max-w-3xl">
          <h2
            className="metallic-rose text-5xl leading-[1.07] md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {content.headline.map((line, i, arr) => (
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
            {content.sub}
          </p>
        </div>

        {/* ── 2-col: insight (1) + pain cards (2) ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 mb-20">

          {/* Left — insight callout (fills full left column, balanced vs right) */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-center"
            style={{
              backgroundColor: "rgba(233,181,166,0.055)",
              border: "1px solid rgba(233,181,166,0.18)",
              minHeight: "200px",
            }}
          >
            <p
              className="metallic-rose text-7xl leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {content.insight.hook}
            </p>
            <p
              className="mt-6 text-xl font-medium leading-snug"
              style={{ color: IVORY, opacity: 0.9 }}
            >
              {nb(content.insight.label)}
            </p>
            <p
              className="mt-4 text-base leading-relaxed italic"
              style={{ color: ROSE, opacity: 0.75 }}
            >
              {nb(content.insight.sub)}
            </p>
          </div>

          {/* Right 2/3 — pain point cards (2×2) */}
          <div className="lg:col-span-2">
            <SectionLabel>{painLabel}</SectionLabel>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {content.pains.map(({ title, desc }, j) => {
                const Icon = painIcons[j];
                return (
                  <div
                    key={title}
                    className="rounded-2xl p-7 flex flex-col"
                    style={{
                      backgroundColor: "#08131F",
                      border: "1px solid rgba(233,181,166,0.16)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl mb-4"
                      style={{
                        background: "linear-gradient(135deg, rgba(233,181,166,0.13) 0%, rgba(244,199,185,0.04) 100%)",
                        border: "1px solid rgba(233,181,166,0.2)",
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: ROSE }} strokeWidth={1.4} />
                    </div>
                    <h3
                      className="metallic-rose text-3xl mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed md:text-base"
                      style={{ color: IVORY, opacity: 0.72 }}
                    >
                      {nb(desc)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Solutions — full width, 4 cols ── */}
        <div>
          <SectionLabel>{solLabel}</SectionLabel>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.solutions.map(({ title, desc }, j) => {
              const Icon = solIcons[j];
              return (
                <div
                  key={title}
                  className="rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#08131F",
                    border: "1px solid rgba(233,181,166,0.18)",
                    boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl mb-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(233,181,166,0.15) 0%, rgba(244,199,185,0.05) 100%)",
                      border: "1px solid rgba(233,181,166,0.25)",
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: ROSE }} strokeWidth={1.4} />
                  </div>
                  <h3
                    className="metallic-rose text-3xl mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed md:text-base"
                    style={{ color: IVORY, opacity: 0.75 }}
                  >
                    {nb(desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
function IndustriesPage() {
  const { t, lang } = useLanguage();

  const c = industriesContent[lang] ?? industriesContent.en;

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, []);

  const heroStars = useMemo(
    () => makeStars(150, 37, { top: [-5, 110], left: [-5, 105] }),
    []
  );
  const heroStarsDeep = useMemo(
    () => makeStars(60, 91, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 0.85),
    []
  );

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={heroStars} />
          <StarField stars={heroStarsDeep} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-7">
          <div className="text-center mb-16">
            <SectionLabel>{t.industries.heroLabel}</SectionLabel>
            <h1
              className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.industries.heroH1.map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: IVORY, opacity: 0.82 }}
            >
              {nb(t.industries.heroBody)}
            </p>
          </div>

          {/* 4 jump cards — 3 industries + 1 "your industry" */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTION_IDS.map((id, idx) => (
              <JumpCard
                key={id}
                id={id}
                title={c.jumpTitles[idx]}
                sub={c.jumpSubs[idx]}
                exploreLabel={c.exploreLabel}
              />
            ))}
            <FourthCard
              title={c.jumpTitles[3]}
              sub={c.jumpSubs[3]}
              exploreLabel={c.exploreLabel}
            />
          </div>
        </div>
      </section>

      {/* Divider: hero → first section */}
      <div className="mx-auto max-w-7xl px-5 md:px-7">
        <RoseDivider />
      </div>

      {/* ══ Industry Sections ══ */}
      {c.sections.map((sec, idx) => (
        <div key={SECTION_IDS[idx]}>
          <IndustrySection
            id={SECTION_IDS[idx]}
            idx={idx}
            content={sec}
            painIcons={PAIN_ICONS[idx]}
            solIcons={SOLUTION_ICONS[idx]}
            painLabel={c.painLabel}
            solLabel={c.solutionLabel}
          />
          {idx < c.sections.length - 1 && (
            <div className="mx-auto max-w-7xl px-5 md:px-7">
              <RoseDivider />
            </div>
          )}
        </div>
      ))}

      {/* ══ Let's talk — 4th card anchor ══ */}
      <section
        id="lets-talk"
        className="mx-auto max-w-7xl px-5 py-20 md:px-7 md:py-28"
      >
        <div
          className="relative overflow-hidden rounded-2xl px-10 py-24 text-center"
          style={{
            backgroundColor: "#08131F",
            border: "1px solid rgba(233,181,166,0.18)",
            boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(233,181,166,0.11) 0%, rgba(233,181,166,0.04) 45%, rgba(3,11,20,0) 72%)",
            }}
          />
          <div className="relative">
            <p
              className="text-sm uppercase tracking-[0.22em] mb-5"
              style={{ color: ROSE, opacity: 0.8 }}
            >
              {c.ctaFitLabel}
            </p>
            <h2
              className="metallic-rose text-4xl leading-snug md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.ctaFitH2.map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p
              className="mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: IVORY, opacity: 0.72 }}
            >
              {nb(c.ctaFitBody)}
            </p>
            <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                className="rounded-md px-10 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                style={ctaButtonStyle}
              >
                {c.ctaLabel}
              </button>
              <span className="text-sm italic" style={{ color: IVORY, opacity: 0.45 }}>
                {c.ctaNoPitch}
              </span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
