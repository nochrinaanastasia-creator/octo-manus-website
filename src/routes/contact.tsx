import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Building2, User, Mail, Phone, Briefcase, Users,
  FileText, Clock, Send, CheckCircle2,
} from "lucide-react";
import {
  SiteHeader, SiteFooter, IVORY, PAGE_BG, ROSE, ctaButtonStyle,
} from "@/components/site-chrome";
import { makeStars, StarField } from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: ({ search }) => {
    const lang = (search as any)?.lang || "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.contact;
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
  const ct = t.contact;

  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
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

  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Web3Forms ─────────────────────────────────────────────────────────
  // 1. Go to https://web3forms.com  (no account creation needed)
  // 2. Enter  info@octomanus.com  and click "Create Access Key"
  // 3. Open info@octomanus.com inbox and copy the access key from the email
  // 4. Replace YOUR_WEB3FORMS_ACCESS_KEY below with that key
  const WEB3FORMS_KEY = "99086939-c669-430a-b46c-97bcfbf8d8f1";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key:     WEB3FORMS_KEY,
          subject:        `New enquiry from ${form.name} — ${form.company}`,
          from_name:      "Octo Manus Website",
          "Company":      form.company,
          "Name":         form.name,
          "Email":        form.email,
          "Phone":        form.phone || "—",
          "Industry":     form.industry === "Other" ? form.industryOther : form.industry,
          "Company size": form.companySize,
          "Services":     form.services.join(", ") || "—",
          "Timeline":     form.timeline,
          "Budget":       form.budget || "—",
          "Message":      form.description,
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (data.success) {
        setStatus("success");
      } else {
        throw new Error(data.message || "Submission failed — please try again.");
      }
    } catch (err) {
      setStatus("idle");
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
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
              {ct.successH1}
            </h1>
            <p className="text-base leading-relaxed mb-4" style={{ color: IVORY, opacity: 0.82 }}>
              {ct.successBody}{" "}
              <span style={{ color: ROSE }}>1 {ct.reassurances[0].text.split(" ").slice(-2).join(" ")}</span>.
            </p>
            <p className="text-sm italic" style={{ color: IVORY, opacity: 0.5 }}>
              {ct.successSub}
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
            {ct.heroLabel}
          </p>
          <h1
            className="metallic-rose text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {ct.heroH1[0]}
            <br />
            {ct.heroH1[1]}
          </h1>
          <p
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: IVORY, opacity: 0.78 }}
          >
            {ct.heroBody}
          </p>

          {/* Quick reassurances */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {ct.reassurances.map(({ text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0" style={{ color: ROSE, opacity: 0.75 }} strokeWidth={1.5} />
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
            <Field label={ct.fields.companyName} icon={Building2} required>
              <input
                type="text"
                placeholder={ct.fields.companyPlaceholder}
                required
                value={form.company}
                onChange={set("company")}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("company")}
              />
            </Field>
            <Field label={ct.fields.yourName} icon={User} required>
              <input
                type="text"
                placeholder={ct.fields.namePlaceholder}
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
            <Field label={ct.fields.emailAddress} icon={Mail} required>
              <input
                type="email"
                placeholder={ct.fields.emailPlaceholder}
                required
                value={form.email}
                onChange={set("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("email")}
              />
            </Field>
            <Field label={ct.fields.phoneNumber} icon={Phone}>
              <input
                type="tel"
                placeholder={ct.fields.phonePlaceholder}
                value={form.phone}
                onChange={set("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
                style={focusStyle("phone")}
              />
            </Field>
          </div>

          {/* ── Industry ── */}
          <Field label={ct.fields.industry} icon={Briefcase} required>
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
              <option value="" disabled>{ct.fields.industryPlaceholder}</option>
              {ct.industries.map((ind) => (
                <option key={ind} value={ind} style={{ backgroundColor: "#08131F" }}>{ind}</option>
              ))}
            </select>
          </Field>

          {form.industry === ct.industries[ct.industries.length - 1] && (
            <Field label={ct.fields.industryOther} icon={Briefcase} required>
              <input
                type="text"
                placeholder={ct.fields.industryOtherPlaceholder}
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
          <Field label={ct.fields.companySize} icon={Users}>
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
              <option value="" style={{ backgroundColor: "#08131F" }}>{ct.fields.companySizePlaceholder}</option>
              {ct.companySizes.map((s) => (
                <option key={s} value={s} style={{ backgroundColor: "#08131F" }}>{s}</option>
              ))}
            </select>
          </Field>

          {/* ── Services (multi-select checkboxes) ── */}
          <div>
            <label style={labelStyle}>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" />
                {ct.fields.servicesLabel}
              </span>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
              {ct.services.map(({ id, label }) => {
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
          <Field label={ct.fields.descriptionLabel} icon={FileText} required>
            <textarea
              rows={5}
              placeholder={ct.fields.descriptionPlaceholder}
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
            <Field label={ct.fields.timelineLabel} icon={Clock}>
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
                <option value="" style={{ backgroundColor: "#08131F" }}>{ct.fields.timelinePlaceholder}</option>
                {ct.timelines.map((tl) => (
                  <option key={tl} value={tl} style={{ backgroundColor: "#08131F" }}>{tl}</option>
                ))}
              </select>
            </Field>
            <Field label={ct.fields.budgetLabel} icon={Briefcase}>
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
                <option value="" style={{ backgroundColor: "#08131F" }}>{ct.fields.budgetPlaceholder}</option>
                {ct.budgets.map((b) => (
                  <option key={b} value={b} style={{ backgroundColor: "#08131F" }}>{b}</option>
                ))}
              </select>
            </Field>
          </div>


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
              {ct.privacyText}{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-opacity hover:opacity-100"
                style={{ color: ROSE, opacity: 0.85 }}
              >
                {ct.privacyLink}
              </a>
              . <span style={{ color: ROSE, opacity: 0.85 }}>*</span>
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
                  {ct.sendingLabel}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" strokeWidth={1.8} />
                  {ct.submitLabel}
                </>
              )}
            </button>
            {submitError && (
              <p className="mt-3 text-sm" style={{ color: "#ff6b6b" }}>
                ⚠ {submitError}
              </p>
            )}
            <p className="mt-4 text-sm italic" style={{ color: IVORY, opacity: 0.4 }}>
              {ct.noPitch}
            </p>
          </div>

        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
