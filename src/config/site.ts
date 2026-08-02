export const siteConfig = {
  name: "Dayova",
  url: "https://dayova.com",
  description:
    "Dein Lernbegleiter für einen klaren, persönlichen Weg durch Prüfungen und Aufgaben.",
  launch: {
    date: "2026-08-17T00:00:00+02:00",
    displayDate: "17. August 2026",
  },
  links: {
    instagram: "https://www.instagram.com/dayova/",
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL || null,
    googlePlay: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || null,
    linkedin: "https://www.linkedin.com/company/dayova",
    discord:
      process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/dayova",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/dayova",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@dayova",
    email: "kontakt@dayova.de",
    schoolEmail: "kontakt@dayova.de",
  },
} as const;

export type ConversionMode = "follow" | "download";

export function getConversionMode(date = new Date()): ConversionMode {
  const isLive =
    date.getTime() >= new Date(siteConfig.launch.date).getTime();
  const hasStoreLinks = Boolean(
    siteConfig.links.appStore && siteConfig.links.googlePlay,
  );

  return isLive && hasStoreLinks ? "download" : "follow";
}
