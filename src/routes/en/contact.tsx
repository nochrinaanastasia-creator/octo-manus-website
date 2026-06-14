import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../../components/pages/ContactPage";
import { translations } from "@/i18n";

export const Route = createFileRoute("/en/contact")({
  component: ContactPage,
  head: () => {
    const lang = "en";
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
        { property: "og:url", content: "https://octomanus.com/en/contact" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },
});
