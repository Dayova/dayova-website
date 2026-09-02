import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsConsent } from "@/components/analytics-consent";
import "./tokens.css";
import "./globals.css";
import "./typography.css";

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dayova.com"),
  applicationName: "Dayova",
  title: {
    default: "Lernplan-App für Schüler – Einfach loslernen | Dayova",
    template: "%s | Dayova",
  },
  description:
    "Dayova macht aus Prüfungen, freien Zeiten und deinem Wissen einen Lernplan. Öffne die App und sieh, was heute dran ist.",
  authors: [{ name: "Dayova", url: "https://dayova.com" }],
  creator: "Dayova",
  publisher: "Dayova",
  category: "education",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "512x512",
    },
    apple: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "512x512",
    },
  },
  openGraph: {
    title: "Lernplan-App für Schüler – Einfach loslernen | Dayova",
    description:
      "Dayova teilt deinen Prüfungsstoff in Lernschritte und zeigt dir, was heute dran ist.",
    url: "https://dayova.com",
    siteName: "Dayova",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/dayova-hero-app-light.png",
        width: 1800,
        height: 1200,
        alt: "Dayova – persönlicher Lernbegleiter mit Lernplan und Wissensanalyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lernplan-App für Schüler – Einfach loslernen | Dayova",
    description:
      "Dayova teilt deinen Prüfungsstoff in Lernschritte und zeigt dir, was heute dran ist.",
    images: ["/images/dayova-hero-app-light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const themeInitializer = `
(() => {
  const root = document.documentElement;
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
  root.dataset.themeSource = "system";
})();
`;

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "G-039JN6DY6L";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={poppins.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        {children}
        <AnalyticsConsent measurementId={googleAnalyticsId} />
        <VercelAnalytics />
        <SpeedInsights />
        <Script id="dayova-theme" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
      </body>
    </html>
  );
}
