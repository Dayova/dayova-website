import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
    default: "Dayova – Lernplan-App und persönlicher Lernbegleiter",
    template: "%s | Dayova",
  },
  description:
    "Dayova ist dein persönlicher Lernbegleiter: Die App erstellt Lernpläne, erkennt Wissenslücken und zeigt dir den nächsten sinnvollen Lernschritt.",
  authors: [{ name: "Dayova", url: "https://dayova.com" }],
  creator: "Dayova",
  publisher: "Dayova",
  keywords: [
    "Dayova",
    "Lernbegleiter",
    "Lernplan",
    "Lernapp",
    "Schüler",
    "Prüfungsvorbereitung",
  ],
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/favicon-light.png",
    apple: "/favicon-light.png",
  },
  openGraph: {
    title: "Dayova – Lernplan-App und persönlicher Lernbegleiter",
    description:
      "Dayova erstellt Lernpläne, erkennt Wissenslücken und zeigt dir den nächsten sinnvollen Lernschritt.",
    url: "https://dayova.com",
    siteName: "Dayova",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/dayova-hero-phones.png",
        width: 4269,
        height: 2400,
        alt: "Dayova – persönlicher Lernbegleiter mit Lernplan und Wissensanalyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayova – Lernplan-App und persönlicher Lernbegleiter",
    description:
      "Dayova erstellt Lernpläne, erkennt Wissenslücken und zeigt dir den nächsten sinnvollen Lernschritt.",
    images: ["/images/dayova-hero-phones.png"],
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
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem("dayova-theme");
  } catch {}

  const isDark =
    savedTheme === "dark" || (savedTheme !== "light" && systemPrefersDark);

  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
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
        <Script id="dayova-theme" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
      </body>
    </html>
  );
}
