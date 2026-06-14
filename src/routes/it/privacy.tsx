import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "../../components/pages/PrivacyPage";
import { translations } from "@/i18n";

export const Route = createFileRoute("/it/privacy")({
  component: PrivacyPage,
  head: () => {
    const lang = "it";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.privacy;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.desc },
        { name: "keywords", content: seo.keys },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.desc },
        { property: "og:url", content: `https://octomanus.com/privacy?lang=${lang}` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },
});
