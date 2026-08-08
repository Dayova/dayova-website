import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  title: {
    default: "Dayova – Dein persönlicher Lernbegleiter",
    template: "%s | Dayova",
  },
  description:
    "Dayova zeigt dir, was als Nächstes zählt, erstellt einen realistischen Lernplan und macht Stärken und Wissenslücken sichtbar.",
  keywords: [
    "Dayova",
    "Lernbegleiter",
    "Lernplan",
    "Lernapp",
    "Schüler",
    "Prüfungsvorbereitung",
  ],
  openGraph: {
    title: "Dayova – Wisse, was als Nächstes zählt.",
    description:
      "Dein persönlicher Lernbegleiter für einen klaren Plan, verständliches Feedback und den nächsten sinnvollen Schritt.",
    url: "https://dayova.com",
    siteName: "Dayova",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayova – Dein persönlicher Lernbegleiter",
    description:
      "Wisse, was als Nächstes zählt. Mit einem Lernplan, der zu deinem Alltag passt.",
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
        <Script id="dayova-theme" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
      </body>
    </html>
  );
}
