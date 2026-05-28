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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (l: Lang) => setLangState(l);

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
