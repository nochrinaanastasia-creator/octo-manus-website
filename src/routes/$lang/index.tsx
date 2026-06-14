import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import hero from "@/assets/octopus-hero.png";
import { Compass, Workflow, Layers } from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  IVORY,
  PAGE_BG,
  ROSE,
  ctaButtonStyle,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage, getLocalizedPath } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

// No constellation color override — using brand ROSE from default

/** Bind short prepositions/articles to the next word to prevent orphaned breaks */
function nb(text: string): string {
  return text.replace(
    / (a|an|the|of|for|in|on|at|to|by|from|with|its|as|or|and)\s/g,
    (_, word) => ` ${word}\u00A0`
  );
}

export const Route = createFileRoute("/$lang/")({
  component: Index,
  head: ({ params }) => {
    const lang = (params as any)?.lang || "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.home;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.desc },
        { name: "keywords", content: seo.keys },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.desc },
        { property: "og:url", content: `https://octomanus.com/${lang}/` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },
});


const SERVICE_ICONS = [Compass, Workflow, Layers];


function Index() {
  const { t, lang } = useLanguage();

  // Hero stars — slightly less dense main field
  const heroStars = useMemo(
    () => makeStars(250, 11, { top: [-10, 115], left: [-10, 110] }),
    []
  );
  const heroStarsDeep = useMemo(
    () => makeStars(120, 77, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 1.05),
    []
  );
  // Specific constellation anchor points between text and octopus
  const heroStarsConstellation = useMemo(
    () => makeStars(12, 55, { top: [30, 70], left: [35, 65] }, [1.5, 3.0], 1.3),
    []
  );
  // Right-side fill — concentrated stars where octopus doesn't reach
  const heroStarsRight = useMemo(
    () => makeStars(85, 42, { top: [-5, 108], left: [68, 108] }, [0.8, 2.6], 1.1),
    []
  );
  // Bright accent dots — the glowing constellation anchors on the right
  const heroStarsBright = useMemo(
    () => makeStars(22, 88, { top: [8, 92], left: [72, 105] }, [1.5, 3.2], 1.45),
    []
  );


  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden">
        {/* Full-section galaxy starfield */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={heroStars} />
          <StarField stars={heroStarsDeep} />
          {/* Middle constellations */}
          <StarField stars={heroStarsConstellation} />
          {/* Right-side constellation fill — dense stars where the gap is */}
          <StarField stars={heroStarsRight} />
          <StarField stars={heroStarsBright} />
        </div>

        {/* Octopus — moved closer to text, fully visible */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden lg:block"
          style={{ left: "20%" }}
          aria-hidden
        >
          <img
            src={hero}
            alt="Constellation octopus"
            className="h-full w-full object-contain object-left"
            style={{
              filter: "drop-shadow(0 0 24px rgba(233,181,166,0.15))",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center px-5 pb-28 pt-14 md:px-6 md:pt-18 lg:grid-cols-12 lg:pl-3">

          {/* Mobile hero image (bg) */}
          <div className="pointer-events-none absolute inset-0 z-0 lg:hidden" aria-hidden>
            <img
              src={hero}
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-45"
              style={{ filter: "blur(0.5px) brightness(1.1)", transform: "scale(1.15)" }}
            />
          </div>

          {/* ── Text column ── */}
          <div className="relative z-20 max-w-xl lg:col-span-6 lg:-ml-4">
            <h1
              className="metallic-rose text-[clamp(2.5rem,10vw,3.5rem)] leading-[1.05] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.home.heroH1.map((line, i) => (
                <span key={i} style={{ display: "block" }}>{line}</span>
              ))}
            </h1>
            <p
              className="mt-6 text-lg italic metallic-rose md:text-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.home.heroSubtitle.map((line, i) => (
                <span key={i} style={{ display: "block" }}>{line}</span>
              ))}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to={getLocalizedPath(lang, "contact")}
                className="rounded-md px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                style={ctaButtonStyle}
                onClick={() => {
                  if (typeof window !== "undefined" && localStorage.getItem("octo-cookie-consent") === "accepted" && (window as any).gtag) {
                    (window as any).gtag("event", "book_strategy_call_click");
                  }
                }}
              >
                {t.cta.bookCall}
              </Link>
              <Link
                to={getLocalizedPath(lang, "services")}
                className="rounded-md border px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base font-medium transition-colors hover:bg-primary/10"
                style={{ borderColor: "rgba(233,181,166,0.45)", color: ROSE }}
              >
                {t.cta.exploreServices}
              </Link>
            </div>
            <p
              className="mt-8 max-w-lg text-base leading-relaxed md:text-lg"
              style={{ color: IVORY, opacity: 0.85 }}
            >
              {nb(t.home.heroBody)}
            </p>
          </div>

          {/* Spacer column — keeps text left-aligned on lg */}
          <div className="hidden lg:col-span-6 lg:block" />
        </div>
      </section>

      {/* Rose divider — same style as About / Industries pages */}
      <div className="mx-auto max-w-7xl px-5 md:px-7">
        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1" style={{ background: "rgba(233,181,166,0.18)" }} />
          <span style={{ color: ROSE, fontSize: "18px", opacity: 0.6 }}>✦</span>
          <div className="h-px flex-1" style={{ background: "rgba(233,181,166,0.18)" }} />
        </div>
      </div>

      {/* ══ Services ══ */}
      <section className="mx-auto max-w-7xl px-5 pt-6 pb-20 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.home.services.map(({ title, desc }, idx) => {
            const Icon = SERVICE_ICONS[idx];
            const SERVICE_HREFS = ["/services#ai-advisory", "/services#automation", "/services#ai-agents"];
            return (
              <a
                key={title}
                href={SERVICE_HREFS[idx]}
                className="group rounded-2xl p-7 md:p-10 text-left transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  backgroundColor: "#08131F",
                  border: "1px solid rgba(233,181,166,0.18)",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3
                    className="metallic-rose text-[1.5rem] leading-tight md:text-3xl text-left"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <Icon className="h-10 w-10 text-primary shrink-0" strokeWidth={1.2} />
                </div>
                <div className="mt-4 h-px w-10 bg-primary/50" />
                <p className="mt-5 text-base leading-relaxed" style={{ color: IVORY, opacity: 0.8 }}>
                  {nb(desc)}
                </p>
                <p
                  className="mt-6 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: ROSE }}
                >
                  {t.cta.explore}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
