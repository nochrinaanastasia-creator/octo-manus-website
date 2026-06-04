import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FloatingCta, CookieBar } from "@/components/site-chrome";
import type { Lang } from "@/i18n";
import { translations } from "@/i18n";

import appCss from "../styles.css?url";

type RootSearch = { lang?: Lang };

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  validateSearch: (search: Record<string, unknown>): RootSearch => {
    const l = search.lang as string;
    return {
      lang: (l === "en" || l === "es" || l === "it") ? l : "en",
    };
  },
  head: ({ search }) => {
    const lang = search?.lang || "en";
    const t = translations[lang];
    
    // Check if we have SEO translations, otherwise fallback
    const seo = t.seo || translations.en.seo;

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // Fallback title — each page route overrides this
        { title: seo?.title || "Octo Manus — AI Consulting for Business Professionals" },
        {
          name: "description",
          content: seo?.description || "Octo Manus is an AI consulting studio helping small and medium businesses adopt AI, automate workflows, and deploy intelligent agents — no coding required.",
        },
        { name: "author", content: "Octo Manus" },
        { name: "robots", content: "index, follow" },
        {
          name: "keywords",
          content: seo?.keywords || "AI consulting, AI advisory, business automation, AI agents, workflow automation, logistics AI, customer support AI, operations AI, SMB AI, no-code AI",
        },
        { name: "theme-color", content: "#01060F" },
        // Open Graph
        { property: "og:site_name", content: "Octo Manus" },
        { property: "og:title", content: seo?.title || "Octo Manus — AI Consulting for Business Professionals" },
        {
          property: "og:description",
          content: seo?.description || "AI consulting studio helping SMBs adopt AI, automate workflows, and build intelligent agents — without needing a single line of code.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://octomanus.com/?lang=${lang}` },
        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@OctoManus" },
        { name: "twitter:title", content: seo?.title || "Octo Manus — AI Consulting for Business Professionals" },
        {
          name: "twitter:description",
          content: seo?.description || "AI consulting studio helping SMBs adopt AI, automate workflows, and build intelligent agents — without needing a single line of code.",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "canonical", href: `https://octomanus.com/?lang=${lang}` },
        { rel: "alternate", hrefLang: "en", href: "https://octomanus.com/?lang=en" },
        { rel: "alternate", hrefLang: "es", href: "https://octomanus.com/?lang=es" },
        { rel: "alternate", hrefLang: "it", href: "https://octomanus.com/?lang=it" },
        { rel: "alternate", hrefLang: "x-default", href: "https://octomanus.com/?lang=en" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KWSP0VZ936" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Default to denied
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });

              gtag('js', new Date());
              gtag('config', 'G-KWSP0VZ936');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
        <FloatingCta />
        <CookieBar />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
