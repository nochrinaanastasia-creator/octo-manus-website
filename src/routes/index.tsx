import { createFileRoute, redirect } from "@tanstack/react-router";
import { STORAGE_KEY } from "../contexts/LanguageContext";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // Attempt to read language from localStorage (saved from previous visits)
    let lang = "en";
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "it" || stored === "es" || stored === "en") {
        lang = stored;
      } else if (typeof navigator !== "undefined") {
        const browserLang = (navigator.language || "").toLowerCase();
        if (browserLang.startsWith("it")) lang = "it";
        else if (browserLang.startsWith("es")) lang = "es";
      }
    }
    
    // Redirect to the language-specific route
    throw redirect({
      to: `/${lang}` as any,
    });
  },
  component: () => null, // Never renders because of redirect
});
