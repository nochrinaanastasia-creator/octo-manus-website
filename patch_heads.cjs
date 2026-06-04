const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = ['index.tsx', 'about.tsx', 'services.tsx', 'industries.tsx', 'contact.tsx', 'privacy.tsx'];

files.forEach(file => {
  const filePath = path.join(routesDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // ensure import
  if (!content.includes('import { translations } from "@/i18n"')) {
    content = content.replace('import { useLanguage } from "@/contexts/LanguageContext";', 'import { useLanguage } from "@/contexts/LanguageContext";\nimport { translations } from "@/i18n";');
  }

  // key for seo object
  let seoKey = file.replace('.tsx', '');
  if (seoKey === 'index') seoKey = 'home';

  // regex to match the old head: () => ({ meta: [...] })
  const headRegex = /head:\s*\(\)\s*=>\s*\(\{\s*meta:\s*\[[\s\S]*?\](?:,\s*)?\}\),/;
  
  const newHead = `head: ({ search }) => {
    const lang = (search as any)?.lang || "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    const seo = t.seo.${seoKey};
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.desc },
        { name: "keywords", content: seo.keys },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.desc },
        { property: "og:url", content: \`https://octomanus.com/\${seoKey === 'home' ? '' : seoKey}?lang=\${lang}\` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.desc },
      ],
    };
  },`;

  if (headRegex.test(content)) {
    content = content.replace(headRegex, newHead);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated head in ${file}`);
  } else {
    console.log(`Could not find head in ${file}`);
  }
});
