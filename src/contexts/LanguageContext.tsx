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
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const pathLang = pathParts.length > 0 ? pathParts[0] : "";
  const lang: Lang = (pathLang === "es" || pathLang === "it") ? pathLang : "en";

  // On first visit (no lang param in URL), auto-detect from browser locale.
  // Store in localStorage so we only redirect once — manual switches are respected.
  useEffect(() => {
    if (pathLang === "en" || pathLang === "es" || pathLang === "it") return; // user already has a lang param, don't override
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

  const setLang = (l: Lang) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
    
    const parts = location.pathname.split("/").filter(Boolean);
    const currentSlug = parts.length > 1 ? parts[1] : "";
    
    let baseSlug = currentSlug;
    if (currentSlug) {
      for (const [key, map] of Object.entries(ROUTE_MAP)) {
        if (Object.values(map).includes(currentSlug)) {
          baseSlug = key;
          break;
        }
      }
    }
    
    const newPath = getLocalizedPath(l, baseSlug) + location.hash;
    navigate({ to: newPath });
  };

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
