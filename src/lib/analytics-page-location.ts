const privateSearchParams = [
  "app_user_id",
  "redeem_url",
  "redemption_token",
] as const;

export function getSafeAnalyticsPageLocation(currentUrl: string) {
  let url: URL;

  try {
    url = new URL(currentUrl);
  } catch {
    return null;
  }

  for (const key of privateSearchParams) {
    url.searchParams.delete(key);
  }

  url.hash = "";

  return {
    pageLocation: url.toString(),
    pagePath: `${url.pathname}${url.search}`,
  };
}
