import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Target, Lightbulb, Users, Zap, Shield, Globe, TrendingUp, Heart } from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  IVORY,
  PAGE_BG,
  ROSE,
  ctaButtonStyle,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

/** Bind short prepositions/articles to next word to prevent line-break orphaning */
function nb(text: string): string {
  return text.replace(
    / (a|an|the|of|for|in|on|at|to|by|from|with|its|as|or|and)\s/g,
    (_, word) => ` ${word}\u00A0`
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Octo Manus — Founders, Mission & Values | AI Consulting for SMBs" },
      {
        name: "description",
        content:
          "Meet the founders of Octo Manus — an AI consulting studio built by business professionals, for business professionals. We make AI adoption practical, human, and genuinely useful for SMBs.",
      },
      {
        name: "keywords",
        content:
          "about Octo Manus, AI consulting founders, AI for SMB, AI without coding, business AI mission, AI for small business, AI consulting women founded, AI adoption practical, SMB AI consulting Europe, AI consulting Italy, AI consulting Spain",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Octo Manus — Founders, Mission & Values" },
      {
        property: "og:description",
        content:
          "Meet the founders of Octo Manus — AI consulting built by business professionals, for business professionals. No technical background required.",
      },
      { property: "og:url", content: "https://octomanus.com/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Octo Manus — Founders, Mission & Values" },
      {
        name: "twitter:description",
        content:
          "AI consulting built by business professionals for business professionals. Practical AI adoption for SMBs.",
      },
    ],
  }),
});


function RoseDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
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

const VALUE_ICONS = [Zap, Users, Shield, TrendingUp, Globe, Heart];

function AboutPage() {
  const { t } = useLanguage();
  const ta = t.about;
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  // Our Story — 450 stars total: galaxy field + brighter deep layer
  const introStars = useMemo(
    () => makeStars(150, 55, { top: [-5, 110], left: [-5, 105] }),
    []
  );
  const introStarsDeep = useMemo(
    () => makeStars(60, 133, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 0.85),
    []
  );
  // Our History — 200 stars
  const historyStars = useMemo(
    () => makeStars(200, 99, { top: [0, 100], left: [0, 100] }),
    []
  );


  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      {/* ══ Our Story ══ */}
      <section className="relative overflow-hidden pb-10 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={introStars} />
          <StarField stars={introStarsDeep} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-6">
          <SectionLabel>{ta.intro.label}</SectionLabel>
          <h1
            className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {ta.intro.h1.map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p
            className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed md:text-xl"
            style={{ color: IVORY, opacity: 0.85 }}
          >
            {nb(ta.intro.body)}
            <strong style={{ color: ROSE }}>{ta.intro.bodyStrong}</strong>
          </p>
        </div>
      </section>

      {/* ══ Our History ══ */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden>
          <StarField stars={historyStars} />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — story text */}
          <div>
            <SectionLabel>{ta.history.label}</SectionLabel>
            <h2
              className="metallic-rose text-4xl leading-snug md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ta.history.h2.map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="mt-6 md:mt-10 space-y-6 text-base leading-relaxed md:text-lg" style={{ color: IVORY, opacity: 0.85 }}>
              <p>
                {nb(ta.history.p1)}
                {ta.history.p1Bold1 && (
                  <>{" "}<strong style={{ color: ROSE }}>{ta.history.p1Bold1}</strong>{" "}
                  and{" "}
                  <strong style={{ color: ROSE }}>{ta.history.p1Bold2}</strong>{" "}
                  — but arrived at the same wall. The one made of manual processes, copy-pasted reports, and the quiet dread of another status-update meeting.</>
                )}
              </p>

              <div className={`space-y-6 overflow-hidden transition-all duration-500 md:max-h-[2000px] md:opacity-100 md:mt-6 ${isHistoryExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0 m-0"}`}>
                <p>{nb(ta.history.p2)}</p>
                <p>{nb(ta.history.p3)}</p>
                <p style={{ color: ROSE, fontStyle: "italic", opacity: 1 }}>{nb(ta.history.p4)}</p>
              </div>

              <button 
                onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                className="text-[11px] font-semibold uppercase tracking-widest md:hidden mt-2"
                style={{ color: ROSE }}
              >
                {isHistoryExpanded ? "Read less ↑" : "Read more ↓"}
              </button>
            </div>
          </div>

          {/* Right — founder cards */}
          <div className="flex flex-col gap-6 lg:pt-14">
            {/* Founder 1 */}
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{
                backgroundColor: "#08131F",
                border: "1px solid rgba(233,181,166,0.18)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="metallic-rose text-[1.65rem] leading-tight md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                    {ta.history.founder1Title}
                  </h3>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(233,181,166,0.2) 0%, rgba(244,199,185,0.08) 100%)",
                      border: "1px solid rgba(233,181,166,0.3)",
                    }}
                  >
                    <Lightbulb className="h-6 w-6" style={{ color: ROSE }} strokeWidth={1.4} />
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: IVORY, opacity: 0.8 }}>
                  {nb(ta.history.founder1Desc)}
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{
                backgroundColor: "#08131F",
                border: "1px solid rgba(233,181,166,0.18)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="metallic-rose text-[1.65rem] leading-tight md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                    {ta.history.founder2Title}
                  </h3>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(233,181,166,0.2) 0%, rgba(244,199,185,0.08) 100%)",
                      border: "1px solid rgba(233,181,166,0.3)",
                    }}
                  >
                    <Target className="h-6 w-6" style={{ color: ROSE }} strokeWidth={1.4} />
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: IVORY, opacity: 0.8 }}>
                  {nb(ta.history.founder2Desc)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 md:px-6"><RoseDivider /></div>

      {/* ══ Our Mission ══ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div>
              <SectionLabel>{ta.mission.label}</SectionLabel>
              <h2
                className="metallic-rose text-4xl leading-snug md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {ta.mission.h2.map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <div className="mt-10 space-y-5 text-base leading-relaxed md:text-lg" style={{ color: IVORY, opacity: 0.85 }}>
                <p>{ta.mission.p1}</p>
                <p>{ta.mission.p2}</p>
                <p style={{ color: ROSE, fontStyle: "italic" }}>{ta.mission.p3}</p>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-5">
              {ta.mission.stats.map((item) => (
                <div
                  key={item.stat}
                  className="rounded-2xl p-7 text-center"
                  style={{
                    backgroundColor: "#08131F",
                    border: "1px solid rgba(233,181,166,0.18)",
                    boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
                  }}
                >
                  <p className="metallic-rose text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    {item.stat}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ROSE, opacity: 0.85 }}>
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: IVORY, opacity: 0.6 }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 md:px-6"><RoseDivider /></div>

      {/* ══ Our Values ══ */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
        <div className="text-center mb-16">
          <SectionLabel>{ta.values.label}</SectionLabel>
          <h2
            className="metallic-rose text-4xl leading-snug md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {ta.values.h2.map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: IVORY, opacity: 0.75 }}
          >
            {ta.values.intro}
          </p>
        </div>

        {/* Mobile carousel, desktop grid */}
        <div className="relative">
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-5 px-5 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:mx-0 md:px-0 md:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
          {ta.values.items.map(({ title, highlight, desc }, idx) => {
            const Icon = VALUE_ICONS[idx];
            return (
              <div
                key={title}
                className="min-w-[85vw] md:min-w-0 snap-center group rounded-2xl p-7 md:p-9 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#08131F",
                  border: "1px solid rgba(233,181,166,0.18)",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="metallic-rose text-[1.75rem] leading-tight md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                    {title}
                  </h3>
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

                <p className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: ROSE, opacity: 0.65 }}>
                  {highlight}
                </p>

                <div className="h-px w-10 mb-5" style={{ background: "rgba(233,181,166,0.28)" }} />

                <p className="text-base leading-relaxed" style={{ color: IVORY, opacity: 0.78 }}>
                  {desc}
                </p>
                </div>
            );
          })}
          </div>
          
          {/* Subtle swipe hint gradient on mobile right edge */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-[#01060F] to-transparent md:hidden" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}