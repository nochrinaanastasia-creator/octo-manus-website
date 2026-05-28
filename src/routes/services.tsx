import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import {
  Phone, BookOpen, LifeBuoy,
  GitBranch, Settings, Layers, CheckCircle2, ShieldCheck,
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

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — AI Advisory, Workflow Automation & AI Agents | Octo Manus" },
      {
        name: "description",
        content:
          "Octo Manus offers AI Advisory with a customised masterclass, workflow automation for SMBs, and bespoke AI agents. Practical AI adoption — no coding required.",
      },
      {
        name: "keywords",
        content:
          "AI advisory SMB, AI masterclass business, AI strategy consulting, workflow automation small business, process automation, AI agents for business, intelligent agents, AI roadmap, operations automation, AI adoption consulting, no-code AI solutions",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Services — AI Advisory, Automation & AI Agents | Octo Manus" },
      {
        property: "og:description",
        content:
          "AI Advisory with masterclass, workflow automation, and custom AI agents — built for how your business actually operates.",
      },
      { property: "og:url", content: "https://octomanus.com/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

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
  stat?:  string;   // optional — only shown when defined
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

/* ── Service content ─────────────────────────────────────── */
const SERVICES: ServiceData[] = [
  {
    id:       "ai-advisory",
    badge:    "AI Advisory",
    headline: ["Understand AI Before", "You Invest in It."],
    sub:      "For businesses that want to move deliberately — not just quickly.",
    intro:
      "Most businesses know they need to do something with AI. Few know exactly what, where to start, or what will actually make a difference. AI Advisory combines strategic guidance with a hands-on masterclass built around your specific business — so you finish knowing precisely what AI can do for you, how to start, and how to avoid the costly mistakes most companies make.",
    steps: [
      {
        number: "01",
        icon:   Phone,
        title:  "Discovery Call",
        desc:   "We understand your business and goals.",
      },
      {
        number: "02",
        icon:   BookOpen,
        title:  "Customised Masterclass",
        desc:   "Hands-on session built around your operations.",
      },
      {
        number: "03",
        icon:   LifeBuoy,
        title:  "3-Month Support",
        desc:   "Ongoing guidance as you apply AI.",
        isHighlight: true,
      },
    ],
    benefits: [
      {
        icon:  Compass,
        title: "Clarity Before You Spend",
        desc:  "Know exactly where AI fits — and where it doesn't. No guesswork, no wasted budget on tools that don't match your business.",
      },
      {
        icon:  Map,
        title: "A Roadmap Built Around You",
        desc:  "Not a generic framework. A prioritised plan based on your actual operations, team size, and real constraints.",
      },
      {
        icon:  Award,
        title: "Confidence at Every Step",
        desc:  "Expert guidance before you commit — not a consultant who disappears after the deck is delivered.",
      },
    ],
  },

  {
    id:       "automation",
    badge:    "Automation & Workflows",
    headline: ["The Hours Spent on Manual Work", "Are Costing More Than You Think."],
    sub:      "For operations teams drowning in tasks that don't require human judgement.",
    intro:
      "Manual processes are expensive in ways that don't show up in a spreadsheet — time, morale, error rates, delayed decisions. We identify the workflows ready to be automated, build the systems that replace them, and make sure they fit how your team actually works. The goal isn't automation for its own sake. It's more capacity for the work that matters.",
    steps: [
      {
        number: "01",
        icon:   Phone,
        title:  "Discovery Call",
        desc:   "We identify where manual work costs most.",
      },
      {
        number: "02",
        icon:   GitBranch,
        title:  "Process Mapping",
        desc:   "Document what's done and where errors occur.",
      },
      {
        number: "03",
        icon:   Settings,
        title:  "Tool Selection",
        desc:   "Right automation tools for your stack.",
      },
      {
        number: "04",
        icon:   Layers,
        title:  "Build & Integrate",
        desc:   "Build, connect, and test with real data.",
      },
      {
        number: "05",
        icon:   CheckCircle2,
        title:  "Test & Optimise",
        desc:   "Refine until results beat the manual process.",
      },
      {
        number: "06",
        icon:   ShieldCheck,
        title:  "2-Month Support",
        desc:   "Guidance as your team settles in.",
        isHighlight: true,
      },
    ],
    benefits: [
      {
        icon:  Clock,
        stat:  "8–15h",
        title: "Recovered Every Week",
        desc:  "Teams typically recover 8–15 hours per week once key manual processes are automated — every week, without anyone managing them.",
      },
      {
        icon:  RefreshCw,
        stat:  "~0%",
        title: "Error Rate",
        desc:  "Manual data entry carries a 1–5% error rate. Automated pipelines run at effectively zero — no rekeying, no forgotten steps.",
      },
      {
        icon:  TrendingUp,
        stat:  "10×",
        title: "Volume, Same Team",
        desc:  "Handle 10× the operational volume with the same headcount. No overtime, no burnout, no additional cost.",
      },
    ],
  },

  {
    id:       "ai-agents",
    badge:    "AI Agents",
    headline: ["Some Work Doesn't Need", "to Wait for a Human."],
    sub:      "For businesses that want consistent, scalable output without scaling headcount.",
    intro:
      "An AI agent handles a specific task — customer inquiries, data processing, reporting, supplier follow-ups — without human intervention at every step. We design agents that understand your business context, operate within defined boundaries, and escalate to humans precisely when they should. Consistent, high-quality output at a scale your team couldn't maintain manually.",
    steps: [
      {
        number: "01",
        icon:   Phone,
        title:  "Discovery Call",
        desc:   "We identify the task, scope, and boundaries.",
      },
      {
        number: "02",
        icon:   GitBranch,
        title:  "Process Mapping",
        desc:   "Map the logic and data the agent needs.",
      },
      {
        number: "03",
        icon:   Bot,
        title:  "Agent Design",
        desc:   "Boundaries, tone, and escalation — before code.",
      },
      {
        number: "04",
        icon:   Brain,
        title:  "Training & Testing",
        desc:   "Trained on your data, tested on edge cases.",
      },
      {
        number: "05",
        icon:   Rocket,
        title:  "Deploy & Monitor",
        desc:   "Live, tracked, and ready to retrain.",
        isHighlight: true,
      },
    ],
    benefits: [
      {
        icon:  Users,
        // no stat
        title: "Always Available",
        desc:  "Your agent handles enquiries around the clock — weekends, evenings, and holidays. Consistent quality, every time, without adding headcount.",
      },
      {
        icon:  Database,
        stat:  "80%",
        title: "Routine Handled",
        desc:  "Agents handle up to 80% of routine interactions, freeing your team for work that requires human judgement.",
      },
      {
        icon:  Star,
        // no stat
        title: "Consistent at Scale",
        desc:  "Unlike humans, agents don’t have off days. Every interaction is handled with the same quality, tone, and accuracy — regardless of volume.",
      },
    ],
  },
];

/* ── Horizontal Timeline ─────────────────────────────────── */
function HowWeWork({ steps }: { steps: Step[] }) {
  const count = steps.length;
  const colClass =
    count <= 3 ? "lg:grid-cols-3" :
    count === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6";

  return (
    <div className="mt-14">
      <SectionLabel>How we work</SectionLabel>

      <div className={`relative grid grid-cols-2 gap-y-12 gap-x-4 ${colClass}`}>

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

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center px-1"
            >
              <div
                className="relative z-10 flex h-[6.5rem] w-[6.5rem] flex-col items-center justify-center rounded-full flex-shrink-0"
                style={{
                  background: step.isHighlight
                    ? "radial-gradient(circle, rgba(233,181,166,0.22), rgba(233,181,166,0.06))"
                    : "radial-gradient(circle, rgba(233,181,166,0.12), rgba(233,181,166,0.03))",
                  border: step.isHighlight
                    ? "1px solid rgba(233,181,166,0.45)"
                    : "1px solid rgba(233,181,166,0.25)",
                }}
              >
                <Icon
                  className="h-7 w-7"
                  style={{ color: ROSE, opacity: step.isHighlight ? 1 : 0.8 }}
                  strokeWidth={1.5}
                />
                <span
                  className="text-[10px] font-medium tracking-widest mt-2"
                  style={{ color: ROSE, opacity: 0.5 }}
                >
                  {step.number}
                </span>
              </div>

              <h4
                className="metallic-rose mt-5 text-2xl leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h4>

              <p
                className="mt-2 text-sm leading-relaxed max-w-[180px]"
                style={{ color: IVORY, opacity: 0.65 }}
              >
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Service section ─────────────────────────────────────── */
function ServiceSection({ service, idx }: { service: ServiceData; idx: number }) {
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
        <HowWeWork steps={service.steps} />

        {/* Benefits — 3 cols */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {service.benefits.map(({ icon: Icon, stat, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#08131F",
                border: "1px solid rgba(233,181,166,0.18)",
                boxShadow: "0 4px 28px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                style={{
                  background: "linear-gradient(135deg, rgba(233,181,166,0.15) 0%, rgba(244,199,185,0.05) 100%)",
                  border: "1px solid rgba(233,181,166,0.25)",
                }}
              >
                <Icon className="h-6 w-6" style={{ color: ROSE }} strokeWidth={1.4} />
              </div>

              {/* Stat — only render when defined */}
              {stat && (
                <p
                  className="metallic-rose text-5xl mb-2 leading-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat}
                </p>
              )}

              {/* Title */}
              <h3
                className="metallic-rose text-3xl mb-4 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>

              {/* Desc — larger font, slightly shorter content */}
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
function ServicesPage() {
  const { t } = useLanguage();

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
          <SectionLabel>Services</SectionLabel>
          <h1
            className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AI That Works the Way
            <br />
            Your Business Does.
          </h1>
          <p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: IVORY, opacity: 0.82 }}
          >
            {nb("Three focused services — advisory, automation, and agents — each built to deliver measurable results without the complexity that usually comes with AI adoption.")}
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
                  ↓ Explore
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
          <ServiceSection service={service} idx={idx} />
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
