import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../../components/pages/AboutPage";
import { translations } from "@/i18n";

export const Route = createFileRoute("/en/about")({
  component: AboutPage,
  head: () => {
    const lang = "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.about;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.desc },
        { name: "keywords", content: seo.keys },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.desc },
        { property: "og:url", content: "https://octomanus.com/en/about" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },
});
