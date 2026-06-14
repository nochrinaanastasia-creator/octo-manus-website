import { createContext, useContext, useEffect } from "react";
import type { Lang } from "@/i18n";
import { translations } from "@/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

import { useNavigate, useParams, useLocation } from "@tanstack/react-router";

export const STORAGE_KEY = "octo-lang-detected";

/** Detect preferred language from browser locale. Only runs on first visit. */
function detectLangFromBrowser(): Lang {
  if (typeof navigator === "undefined") return "en";
  const browserLang = (navigator.language || "").toLowerCase();
  if (browserLang.startsWith("it")) return "it";
  if (
    browserLang.startsWith("es") ||
    browserLang.startsWith("ca") ||   // Catalan / Spain
    browserLang.startsWith("gl")      // Galician / Spain
  ) return "es";
  return "en";
}


export const ROUTE_MAP: Record<string, Record<Lang, string>> = {
  about: { en: "about", es: "sobre-nosotros", it: "chi-siamo" },
  services: { en: "services", es: "servicios", it: "servizi" },
  industries: { en: "industries", es: "sectores", it: "settori" },
  contact: { en: "contact", es: "contacto", it: "contatti" },
  privacy: { en: "privacy", es: "privacidad", it: "privacy" },
};

export function getLocalizedPath(lang: Lang, baseSlug: string) {
  if (!baseSlug) return `/${lang}`;
  const mapped = ROUTE_MAP[baseSlug];
  if (mapped && mapped[lang]) {
    return `/${lang}/${mapped[lang]}`;
  }
  return `/${lang}/${baseSlug}`;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const params = useParams({ strict: false }) as { lang?: string };
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Lang = (params.lang === "es" || params.lang === "it") ? params.lang : "en";

  // On first visit (no lang param in URL), auto-detect from browser locale.
  // Store in localStorage so we only redirect once — manual switches are respected.
  useEffect(() => {
    if (params.lang) return; // user already has a lang param, don't override
    const alreadyDetected = typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (alreadyDetected) return; // already ran detection before
    const detected = detectLangFromBrowser();
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, detected);
    }
    if (detected !== "en") {
      const parts = location.pathname.split("/").filter(Boolean);
      parts.unshift(detected);
      navigate({ to: "/" + parts.join("/") + location.hash, replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Maps the display label from the switcher to a lang code */
export const LANG_LABELS: { label: string; code: Lang }[] = [
  { label: "English", code: "en" },
  { label: "Español", code: "es" },
  { label: "Italiano", code: "it" },
];
