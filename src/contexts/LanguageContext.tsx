import { createContext, useContext, useState } from "react";
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

import { useNavigate, useSearch } from "@tanstack/react-router";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const search = useSearch({ strict: false }) as { lang?: string };
  const navigate = useNavigate();

  const lang: Lang = (search.lang === "es" || search.lang === "it") ? search.lang : "en";

  const setLang = (l: Lang) => {
    navigate({ search: (prev: any) => ({ ...prev, lang: l }), replace: true });
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
