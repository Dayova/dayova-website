import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Dayova – Dein persönlicher Lernbegleiter",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
