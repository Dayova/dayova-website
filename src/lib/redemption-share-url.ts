export function getShareableRedemptionUrl({
  currentPageUrl,
  redeemUrl,
}: {
  currentPageUrl: string;
  redeemUrl: string;
}) {
  let pageUrl: URL;

  try {
    pageUrl = new URL(currentPageUrl);
  } catch {
    return null;
  }

  const isLocalDevelopmentUrl =
    pageUrl.protocol === "http:" &&
    (pageUrl.hostname === "localhost" || pageUrl.hostname === "127.0.0.1");

  if (pageUrl.protocol !== "https:" && !isLocalDevelopmentUrl) {
    return null;
  }

  if (pageUrl.searchParams.get("redeem_url") !== redeemUrl) {
    return null;
  }

  pageUrl.pathname = "/abo-aktivieren";
  pageUrl.search = new URLSearchParams({ redeem_url: redeemUrl }).toString();
  pageUrl.hash = "";

  return pageUrl.toString();
}
