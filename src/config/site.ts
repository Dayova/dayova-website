export const siteConfig = {
  name: "Dayova",
  url: "https://dayova.com",
  description:
    "Die Lern-App, die Prüfungsstoff in machbare Lernschritte teilt und zeigt, was heute dran ist.",
  launch: {
    date: "2026-08-17T00:00:00+02:00",
    displayDate: "17. August 2026",
  },
  links: {
    instagram: "https://www.instagram.com/dayova.de/",
    appStore:
      process.env.NEXT_PUBLIC_APP_STORE_URL ||
      "https://apps.apple.com/app/id6768416097",
    googlePlay:
      process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
      "https://play.google.com/store/apps/details?id=com.dayova",
    linkedin: "https://www.linkedin.com/company/109756945/",
    discord:
      process.env.NEXT_PUBLIC_DISCORD_URL ||
      "https://discord.com/channels/1086939783374315530/1507048041666838759",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://www.facebook.com/61559712444806/",
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

  return isLive ? "download" : "follow";
}
