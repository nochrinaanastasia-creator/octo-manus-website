import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Building2, User, Mail, Phone, Briefcase, Users,
  FileText, Paperclip, Clock, Send, CheckCircle2,
} from "lucide-react";
import {
  SiteHeader, SiteFooter, IVORY, PAGE_BG, ROSE, ctaButtonStyle,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Octo Manus — Book a Strategy Call or Send an Enquiry" },
      {
        name: "description",
        content:
          "Get in touch with Octo Manus. Tell us about your business and the challenges you want to solve with AI. We'll come back to you within 1 business day.",
      },
      {
        name: "keywords",
        content:
          "contact Octo Manus, AI consulting enquiry, book AI strategy call, AI consulting for SMB, AI advisory contact, AI automation enquiry",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact Octo Manus — AI Advisory & Automation" },
      {
        property: "og:description",
        content:
          "Tell us about your business and what you'd like to automate or improve. We'll be in touch within 1 business day.",
      },
      { property: "og:url", content: "https://octomanus.com/contact" },
      { property: "og:type", content: "website" },
    ],
  }),
});

const INDUSTRIES = [
  "Supply Chain, Logistics & Warehousing",
  "Retail, E-commerce & Fashion",
  "Beauty & Wellness",
  "Other",
];

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

const SERVICES = [
  { id: "ai-advisory", label: "AI Advisory" },
  { id: "automation", label: "Automation & Workflows" },
  { id: "ai-agents", label: "AI Agents" },
];

const TIMELINES = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months from now",
  "Just exploring for now",
];

const BUDGETS = [
  "€2,000 – €5,000",
  "€5,000 – €15,000",
  "€15,000 – €50,000",
  "Over €50,000",
  "Prefer to discuss",
];

type FormData = {
  company:      string;
  name:         string;
  email:        string;
  phone:        string;
  industry:     string;
  industryOther: string;
  companySize:  string;
  services:     string[];
  description:  string;
  timeline:     string;
  budget:       string;
  privacy:      boolean;
};

const EMPTY: FormData = {
  company:      "",
  name:         "",
  email:        "",
  phone:        "",
  industry:     "",
  industryOther: "",
  companySize:  "",
  services:     [],
  description:  "",
  timeline:     "",
  budget:       "",
  privacy:      false,
};

/* ── Shared input styles ─────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  backgroundColor: "#08131F",
  border: "1px solid rgba(233,181,166,0.22)",
  borderRadius: "12px",
  color: IVORY,
  fontSize: "17px",
  padding: "13px 18px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "var(--font-body)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: ROSE,
  marginBottom: "10px",
  fontFamily: "var(--font-body)",
};

function Field({
  label, icon: Icon, required, children,
}: { label: string; icon: React.ElementType; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>
        <span className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" />
          {label}{required && <span style={{ color: ROSE }}>*</span>}
        </span>
      </label>
      {children}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */
function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [fileName, setFileName] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string>("");

  const heroStars = useMemo(
    () => makeStars(150, 53, { top: [-5, 110], left: [-5, 105] }),
    []
  );
  const heroStarsDeep = useMemo(
    () => makeStars(60, 89, { top: [0, 100], left: [0, 100] }, [1.2, 3.0], 0.85),
    []
  );

  function set(key: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };
  }

  function toggleService(id: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter((s) => s !== id)
        : [...f.services, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: Connect to email service (Formspree / EmailJS)
    // e.g.: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1400)); // simulate
    setStatus("success");
  }

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === field ? "rgba(233,181,166,0.55)" : "rgba(233,181,166,0.22)",
  });

  if (status === "success") {
    return (
      <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
        <SiteHeader />
        <div className="flex min-h-[80vh] items-center justify-center px-5">
          <div className="text-center max-w-lg">
            <div
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(233,181,166,0.2), rgba(233,181,166,0.05))",
                border: "1px solid rgba(233,181,166,0.35)",
              }}
            >
              <CheckCircle2 className="h-9 w-9" style={{ color: ROSE }} strokeWidth={1.5} />
            </div>
            <h1
              className="metallic-rose text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Message received.
            </h1>
            <p className="text-base leading-relaxed mb-4" style={{ color: IVORY, opacity: 0.82 }}>
              We'll review your enquiry and come back to you within{" "}
              <span style={{ color: ROSE }}>1 business day</span>.
            </p>
            <p className="text-sm italic" style={{ color: IVORY, opacity: 0.5 }}>
              In the meantime, feel free to explore our services or industries pages.
            </p>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: PAGE_BG }}>
      <SiteHeader />

      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden pb-12 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <StarField stars={heroStars} />
          <StarField stars={heroStarsDeep} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-7 text-center">
          <p
            className="text-sm uppercase tracking-[0.22em] mb-5"
            style={{ color: ROSE, fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Contact
          </p>
          <h1
            className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's Talk About
            <br />
            Your Business.
          </h1>
          <p
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: IVORY, opacity: 0.78 }}
          >
            No pitch, no pressure. Tell us what you're working on and what you'd like to change — we'll come back within 1 business day.
          </p>

          {/* Quick reassurances */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {[
              { icon: Clock, text: "Reply within 1 business day" },
              { icon: Users, text: "No sales call unless you want one" },
              { icon: CheckCircle2, text: "First call is a free assessment" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 flex-shrink-0" style={{ color: ROSE, opacity: 0.75 }} strokeWidth={1.5} />
                <span className="text-base" style={{ color: IVORY, opacity: 0.65 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Form ══ */}
      <section className="mx-auto max-w-3xl px-5 py-14 md:px-7 md:py-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>

          {/* ── Company + Name ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Company name" icon={Building2} required>
              <input
                type="text"
                placeholder="Your company name"
                required
                value={form.company}
                onChange={set("company")}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("company")}
              />
            </Field>
            <Field label="Your name" icon={User} required>
              <input
                type="text"
                placeholder="First and last name"
                required
                value={form.name}
                onChange={set("name")}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("name")}
              />
            </Field>
          </div>

          {/* ── Email + Phone ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Email address" icon={Mail} required>
              <input
                type="email"
                placeholder="info@yourcompany.com"
                required
                value={form.email}
                onChange={set("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("email")}
              />
            </Field>
            <Field label="Phone number" icon={Phone}>
              <input
                type="tel"
                placeholder="+39 000 000 0000"
                value={form.phone}
                onChange={set("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("phone")}
              />
            </Field>
          </div>

          {/* ── Industry ── */}
          <Field label="Industry" icon={Briefcase} required>
            <select
              required
              value={form.industry}
              onChange={set("industry")}
              onFocus={() => setFocusedField("industry")}
              onBlur={() => setFocusedField("")}
              style={{
                ...focusStyle("industry"),
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23E9B5A6' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 14px center",
                paddingRight: "42px",
              }}
            >
              <option value="" disabled>Select your industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} style={{ backgroundColor: "#08131F" }}>{ind}</option>
              ))}
            </select>
          </Field>

          {form.industry === "Other" && (
            <Field label="Please specify your industry" icon={Briefcase} required>
              <input
                type="text"
                placeholder="Describe your industry"
                required
                value={form.industryOther}
                onChange={set("industryOther")}
                onFocus={() => setFocusedField("industryOther")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("industryOther")}
              />
            </Field>
          )}

          {/* ── Company size ── */}
          <Field label="Company size" icon={Users}>
            <select
              value={form.companySize}
              onChange={set("companySize")}
              onFocus={() => setFocusedField("companySize")}
              onBlur={() => setFocusedField("")}
              style={{
                ...focusStyle("companySize"),
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23E9B5A6' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 14px center",
                paddingRight: "42px",
              }}
            >
              <option value="" style={{ backgroundColor: "#08131F" }}>Select company size</option>
              {COMPANY_SIZES.map((s) => (
                <option key={s} value={s} style={{ backgroundColor: "#08131F" }}>{s}</option>
              ))}
            </select>
          </Field>

          {/* ── Services (multi-select checkboxes) ── */}
          <div>
            <label style={labelStyle}>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" />
                Services interested in
              </span>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
              {SERVICES.map(({ id, label }) => {
                const checked = form.services.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleService(id)}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-base text-left transition-all duration-200"
                    style={{
                      backgroundColor: checked ? "rgba(233,181,166,0.12)" : "#08131F",
                      border: checked
                        ? "1px solid rgba(233,181,166,0.45)"
                        : "1px solid rgba(233,181,166,0.18)",
                      color: checked ? ROSE : IVORY,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded"
                      style={{
                        backgroundColor: checked ? ROSE : "transparent",
                        border: checked ? "none" : "1px solid rgba(233,181,166,0.35)",
                      }}
                    >
                      {checked && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#01060F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Description ── */}
          <Field label="Tell us about your challenge" icon={FileText} required>
            <textarea
              rows={5}
              placeholder="Describe what you'd like to automate, improve, or solve. The more context you give us, the more useful our first conversation will be."
              required
              value={form.description}
              onChange={set("description")}
              onFocus={() => setFocusedField("description")}
              onBlur={() => setFocusedField("")}
              style={{ ...focusStyle("description"), resize: "vertical", minHeight: "120px" }}
            />
          </Field>

          {/* ── Timeline + Budget ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="When do you want to start?" icon={Clock}>
              <select
                value={form.timeline}
                onChange={set("timeline")}
                onFocus={() => setFocusedField("timeline")}
                onBlur={() => setFocusedField("")}
                style={{
                  ...focusStyle("timeline"),
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23E9B5A6' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: "42px",
                }}
              >
                <option value="" style={{ backgroundColor: "#08131F" }}>Select timeline</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t} style={{ backgroundColor: "#08131F" }}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Budget range (optional)" icon={Briefcase}>
              <select
                value={form.budget}
                onChange={set("budget")}
                onFocus={() => setFocusedField("budget")}
                onBlur={() => setFocusedField("")}
                style={{
                  ...focusStyle("budget"),
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23E9B5A6' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: "42px",
                }}
              >
                <option value="" style={{ backgroundColor: "#08131F" }}>Select budget range</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b} style={{ backgroundColor: "#08131F" }}>{b}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* ── File attachment ── */}
          <div>
            <label style={labelStyle}>
              <span className="flex items-center gap-1.5">
                <Paperclip className="h-3.5 w-3.5" />
                Attach a file (optional)
              </span>
            </label>
            <label
              className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5"
              style={{
                backgroundColor: "#08131F",
                border: "1px dashed rgba(233,181,166,0.25)",
                color: fileName ? ROSE : IVORY,
              }}
            >
              <Paperclip className="h-4 w-4 flex-shrink-0" style={{ color: ROSE, opacity: 0.65 }} />
              <span className="text-base" style={{ opacity: fileName ? 1 : 0.5 }}>
                {fileName || "Click to attach a brief, process doc, or screenshot"}
              </span>
              <input
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt,.xlsx,.csv"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
            </label>
            <p className="mt-1.5 text-xs" style={{ color: IVORY, opacity: 0.38 }}>
              PDF, DOC, PNG, JPG, XLSX or CSV — max 10 MB
            </p>
          </div>

          {/* ── Privacy consent ── */}
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, privacy: !f.privacy }))}
            className="flex items-start gap-3 text-left"
          >
            <span
              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded"
              style={{
                backgroundColor: form.privacy ? ROSE : "transparent",
                border: form.privacy ? "none" : "1px solid rgba(233,181,166,0.35)",
                transition: "all 0.2s",
              }}
            >
              {form.privacy && (
                <svg width="11" height="9" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#01060F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="text-base leading-relaxed" style={{ color: IVORY, opacity: 0.65 }}>
              I agree to the processing of my personal data in accordance with Octo Manus's Privacy Policy.{" "}
              <span style={{ color: ROSE, opacity: 0.85 }}>*</span>
            </span>
          </button>

          {/* ── Submit ── */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting" || !form.privacy}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-lg font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto sm:px-12"
              style={{
                ...ctaButtonStyle,
                opacity: status === "submitting" || !form.privacy ? 0.6 : 1,
              }}
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin">◌</span>
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" strokeWidth={1.8} />
                  Send Enquiry
                </>
              )}
            </button>
            <p className="mt-4 text-sm italic" style={{ color: IVORY, opacity: 0.4 }}>
              No pitch. No sales pressure. Just an honest conversation about your business.
            </p>
          </div>

        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
