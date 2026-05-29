import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/octo-manus-logo.png";
import { useLanguage, LANG_LABELS } from "@/contexts/LanguageContext";

export const IVORY = "#F5EFE7";
export const HEADER_BG = "#030812";
export const PAGE_BG = "#01060F";
export const ROSE = "#E9B5A6";

export const ctaButtonStyle = {
  backgroundImage: "var(--gradient-cta)",
} as const;

export function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`rounded-md px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 ${className}`}
      style={ctaButtonStyle}
    >
      {children}
    </button>
  );
}

/** Sticky bottom-right floating CTA — hides on /industries only after reaching #lets-talk */
export function FloatingCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [atLetsTalk, setAtLetsTalk] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndustries = pathname === "/industries";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
      if (isIndustries) {
        const el = document.getElementById("lets-talk");
        if (el) {
          const rect = el.getBoundingClientRect();
          setAtLetsTalk(rect.top <= window.innerHeight * 0.6);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isIndustries]);

  if (isIndustries && atLetsTalk) return null;

  return (
    <Link
      to="/contact"
      aria-label="Book a strategy call"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-2xl transition-all duration-500"
      style={{
        backgroundImage: "var(--gradient-cta)",
        boxShadow: "0 8px 32px rgba(233,181,166,0.25), 0 2px 8px rgba(0,0,0,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Phone className="h-3.5 w-3.5" strokeWidth={2} />
      {t.cta.bookCall}
    </Link>
  );
}

/** GDPR cookie consent bar — dismissible, persists in localStorage */
export function CookieBar() {
  const STORAGE_KEY = "octo-cookie-consent";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Slight delay so it doesn’t flash on first render
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShow(false);
  }
  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-5 py-4 md:px-7"
      style={{
        backgroundColor: "#08131F",
        borderTop: "1px solid rgba(233,181,166,0.18)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.5)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed" style={{ color: IVORY, opacity: 0.78 }}>
          We use cookies to understand how you use our site and to improve your experience.
          By continuing to use this site, you agree to our use of cookies.
          {" "}
          <Link
            to="/privacy"
            className="underline underline-offset-2 transition-opacity hover:opacity-100"
            style={{ color: ROSE, opacity: 0.85 }}
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-white/5"
            style={{ borderColor: "rgba(233,181,166,0.25)", color: IVORY, opacity: 0.65 }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  // Active page detection
  const { location } = useRouterState();
  const path = location.pathname;
  const isAbout = path === "/about";
  const isHome = path === "/";
  const isIndustries = path.startsWith("/industries");

  const isServices = path.startsWith("/services");

  const serviceLinks = [
    { label: t.footer.aiAdvisory, hash: "ai-advisory" },
    { label: t.footer.workflowAuto, hash: "automation" },
    { label: t.footer.aiAgents, hash: "ai-agents" },
  ];

  const industryLinks = [
    { label: t.industries.supplyChain.navLabel, hash: "supply-chain" },
    { label: t.industries.retail.navLabel, hash: "retail" },
    { label: t.industries.beauty.navLabel, hash: "beauty" },
  ];

  const navBase =
    "relative text-sm tracking-wide transition-colors rounded-lg px-3 py-1.5";

  function navStyle(active: boolean) {
    return {
      color: active ? ROSE : IVORY,
      fontFamily: "var(--font-body)",
      backgroundColor: active ? "rgba(233,181,166,0.13)" : "transparent",
      border: active ? "1px solid rgba(233,181,166,0.28)" : "1px solid transparent",
    };
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: `${HEADER_BG}EE`,
        borderBottom: "1px solid rgba(233,181,166,0.12)",
      }}
    >
      {/* Logo hard-left (pl-2), nav+globe hard-right (pr-5) */}
      <div className="flex items-center justify-between py-1 px-5 md:px-7">

        {/* ── Logo ── */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Octo Manus"
            className="h-14 w-auto md:h-[140px] lg:h-[170px]"
            style={{ imageRendering: "auto" }}
            loading="eager"
          />
        </Link>

        {/* ── Nav pill + Globe + Mobile toggle ── */}
        <div className="flex items-center gap-3">

          {/* Desktop nav pill */}
          <nav
            className="hidden items-center gap-6 rounded-2xl px-5 py-2.5 md:flex"
            style={{
              backgroundColor: "#08131F",
              border: "1px solid rgba(233,181,166,0.18)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            <Link to="/about" className={navBase} style={navStyle(isAbout)}>
              {t.nav.about}
            </Link>

            {/* Services — click goes to /services, hover shows dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`${navBase} flex items-center gap-1.5`}
                style={navStyle(isServices)}
              >
                {t.nav.services}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200"
                  style={{
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

              {servicesOpen && (
                <div
                  className="absolute right-0 top-full z-50 pt-3"
                  style={{ minWidth: "240px" }}
                >
                  <div
                    className="overflow-hidden rounded-xl shadow-2xl"
                    style={{
                      backgroundColor: "#08131F",
                      border: "1px solid rgba(233,181,166,0.25)",
                    }}
                  >
                    {serviceLinks.map((item, idx) => (
                      <a
                        key={item.hash}
                        href={`/services#${item.hash}`}
                        className="block px-5 py-3 text-sm transition-colors hover:bg-white/5"
                        style={{
                          color: IVORY,
                          fontFamily: "var(--font-body)",
                          borderBottom:
                            idx < serviceLinks.length - 1
                              ? "1px solid rgba(233,181,166,0.08)"
                              : "none",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries — click goes to /industries, hover shows dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <Link
                to="/industries"
                className={`${navBase} flex items-center gap-1.5`}
                style={navStyle(isIndustries)}
              >
                {t.nav.industries}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200"
                  style={{
                    transform: industriesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

              {industriesOpen && (
                <div
                  className="absolute right-0 top-full z-50 pt-3"
                  style={{ minWidth: "240px" }}
                >
                  <div
                    className="overflow-hidden rounded-xl shadow-2xl"
                    style={{
                      backgroundColor: "#08131F",
                      border: "1px solid rgba(233,181,166,0.25)",
                    }}
                  >
                    {industryLinks.map((item, idx) => (
                      <a
                        key={item.hash}
                        href={`/industries#${item.hash}`}
                        className="block px-5 py-3 text-sm transition-colors hover:bg-white/5"
                        style={{
                          color: IVORY,
                          fontFamily: "var(--font-body)",
                          borderBottom: "1px solid rgba(233,181,166,0.08)",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                    {/* 4th entry — Your Industry */}
                    <a
                      href="/industries#lets-talk"
                      className="block px-5 py-3 text-sm transition-colors hover:bg-white/5"
                      style={{
                        color: ROSE,
                        fontFamily: "var(--font-body)",
                        opacity: 0.9,
                        borderTop: "1px solid rgba(233,181,166,0.18)",
                      }}
                    >
                      {lang === "it" ? "Il tuo settore" : lang === "es" ? "Tu sector" : "Your Industry"}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={navBase} style={navStyle(path === "/contact")}>
              {t.nav.contact}
            </Link>
          </nav>

          {/* Language globe */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl transition-colors hover:bg-white/5"
              style={{
                backgroundColor: "#08131F",
                border: "1px solid rgba(233,181,166,0.18)",
                color: IVORY,
              }}
              aria-label="Change language"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe className="h-4 w-4" />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 z-20 mt-2 min-w-[148px] overflow-hidden rounded-xl shadow-xl"
                style={{
                  backgroundColor: "#08131F",
                  border: "1px solid rgba(233,181,166,0.25)",
                }}
              >
                {LANG_LABELS.map((l) => (
                  <li key={l.code}>
                    <button
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5"
                      style={{ color: lang === l.code ? ROSE : IVORY }}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl transition-colors hover:bg-white/5 md:hidden"
            style={{
              backgroundColor: "#08131F",
              border: "1px solid rgba(233,181,166,0.18)",
              color: IVORY,
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: HEADER_BG,
            borderTop: "1px solid rgba(233,181,166,0.12)",
          }}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm tracking-wide transition-colors"
              style={{
                color: isAbout ? ROSE : IVORY,
                backgroundColor: isAbout ? "rgba(233,181,166,0.1)" : "transparent",
              }}
            >
              {t.nav.about}
            </Link>

            <div>
              <div className="flex items-center">
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-l-lg px-4 py-3 text-sm tracking-wide"
                  style={{
                    color: isServices ? ROSE : IVORY,
                    backgroundColor: isServices ? "rgba(233,181,166,0.1)" : "transparent",
                  }}
                >
                  {t.nav.services}
                </Link>
                <button
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className="rounded-r-lg px-3 py-3 transition-colors hover:bg-white/5"
                  style={{ color: IVORY }}
                  aria-label="Expand services list"
                >
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-200"
                    style={{
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {serviceLinks.map((item) => (
                    <a
                      key={item.hash}
                      href={`/services#${item.hash}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                      style={{ color: IVORY, opacity: 0.75 }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center">
                <Link
                  to="/industries"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-l-lg px-4 py-3 text-sm tracking-wide"
                  style={{
                    color: isIndustries ? ROSE : IVORY,
                    backgroundColor: isIndustries ? "rgba(233,181,166,0.1)" : "transparent",
                  }}
                >
                  {t.nav.industries}
                </Link>
                <button
                  onClick={() => setMobileIndustriesOpen((o) => !o)}
                  className="rounded-r-lg px-3 py-3 transition-colors hover:bg-white/5"
                  style={{ color: IVORY }}
                  aria-label="Expand industry list"
                >
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-200"
                    style={{
                      transform: mobileIndustriesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
              </div>
              {mobileIndustriesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {industryLinks.map((item) => (
                    <a
                      key={item.hash}
                      href={`/industries#${item.hash}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileIndustriesOpen(false);
                      }}
                      className="rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                      style={{ color: IVORY, opacity: 0.75 }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm tracking-wide transition-colors hover:bg-white/5"
              style={{ color: IVORY }}
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, to: "/about" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.industries, to: "/industries" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer
      style={{
        backgroundColor: HEADER_BG,
        borderTop: "1px solid rgba(233,181,166,0.12)",
      }}
    >
      {/* Same hard-left / hard-right padding as header */}
      <div className="py-14 px-5 md:py-18 md:px-7">

        {/* Brand LEFT — columns RIGHT */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-0">

          {/* ── Brand (left, narrow) ── */}
          <div className="lg:max-w-[280px]">
            <img
              src={logo}
              alt="Octo Manus"
              className="h-14 w-auto md:h-[110px]"
              style={{ imageRendering: "auto" }}
              loading="lazy"
            />
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: IVORY, opacity: 0.75 }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* ── Three columns (right) ── */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            {/* Company */}
            <div>
              <h4
                className="metallic-rose text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.footer.company}
              </h4>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: IVORY }}>
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="opacity-65 transition-opacity hover:opacity-100"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="metallic-rose text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.footer.services}
              </h4>
              <ul
                className="mt-4 space-y-3 text-sm"
                style={{ color: IVORY, opacity: 0.65 }}
              >
                <li>
                  <a href="/services#ai-advisory" className="transition-opacity hover:opacity-100">{t.footer.aiAdvisory}</a>
                </li>
                <li>
                  <a href="/services#automation" className="transition-opacity hover:opacity-100">{t.footer.workflowAuto}</a>
                </li>
                <li>
                  <a href="/services#ai-agents" className="transition-opacity hover:opacity-100">{t.footer.aiAgents}</a>
                </li>
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4
                className="metallic-rose text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.footer.getInTouch}
              </h4>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: IVORY }}>
                <li className="opacity-65">{t.footer.email}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col gap-2 border-t pt-6 text-xs md:flex-row md:items-center md:justify-between"
          style={{
            borderColor: "rgba(233,181,166,0.12)",
            color: IVORY,
            opacity: 0.38,
          }}
        >
          <p>{t.footer.copyright}</p>
          <p>{t.footer.slogan}</p>
        </div>
      </div>
    </footer>
  );
}