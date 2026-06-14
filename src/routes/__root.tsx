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
  head: ({ params }) => {
    const lang = (params as any)?.lang || "en";
    const t = translations[lang as keyof typeof translations] || translations.en;
    
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
        { property: "og:url", content: `https://octomanus.com/${lang}` },
        { property: "og:image", content: "https://octomanus.com/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: lang === "it" ? "it_IT" : lang === "es" ? "es_ES" : "en_US" },
        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@OctoManus" },
        { name: "twitter:title", content: seo?.title || "Octo Manus — AI Consulting for Business Professionals" },
        {
          name: "twitter:description",
          content: seo?.description || "AI consulting studio helping SMBs adopt AI, automate workflows, and build intelligent agents — without needing a single line of code.",
        },
        { name: "twitter:image", content: "https://octomanus.com/og-image.jpg" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "canonical", href: `https://octomanus.com/${lang}` },
        { rel: "alternate", hrefLang: "en", href: "https://octomanus.com/en" },
        { rel: "alternate", hrefLang: "es", href: "https://octomanus.com/es" },
        { rel: "alternate", hrefLang: "it", href: "https://octomanus.com/it" },
        { rel: "alternate", hrefLang: "x-default", href: "https://octomanus.com/en" },
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
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* JSON-LD — tells Google about the local business and service area */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Octo Manus",
              url: "https://octomanus.com",
              logo: "https://octomanus.com/logo-square.jpg",
              sameAs: ["https://www.linkedin.com/company/octomanus"],
              description:
                "Practical AI consulting for small and medium businesses. AI Advisory, Workflow Automation and AI Agents.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@octomanus.com",
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "MT",
                addressLocality: "Valletta"
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 48.0,
                  longitude: 9.0
                },
                geoRadius: "3000000",
                description: "Europe"
              }
            }),
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
