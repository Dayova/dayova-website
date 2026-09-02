const baseUrl = new URL(process.env.SEO_BASE_URL ?? "http://localhost:3000");
const canonicalOrigin = "https://dayova.com";

const errors = [];
const warnings = [];

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getAttributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)=["']([^"']*)["']/gu)].map((match) => [
      match[1].toLowerCase(),
      decodeHtml(match[2]),
    ]),
  );
}

function getMeta(html, attribute, value) {
  for (const match of html.matchAll(/<meta\b[^>]*>/giu)) {
    const attributes = getAttributes(match[0]);
    if (attributes[attribute] === value) return attributes.content ?? "";
  }
  return "";
}

function getLink(html, rel) {
  for (const match of html.matchAll(/<link\b[^>]*>/giu)) {
    const attributes = getAttributes(match[0]);
    if (attributes.rel === rel) return attributes.href ?? "";
  }
  return "";
}

function getText(html, tag) {
  const matches = [
    ...html.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "giu")),
  ];
  return matches.map((match) =>
    decodeHtml(match[1].replace(/<[^>]+>/gu, " ").replace(/\s+/gu, " ").trim()),
  );
}

function expectedCanonical(pathname) {
  return `${canonicalOrigin}${pathname === "/" ? "" : pathname}`;
}

const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap konnte nicht geladen werden: HTTP ${sitemapResponse.status}`);
}

const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gu)]
  .map((match) => decodeHtml(match[1]))
  .filter((url) => url.startsWith(canonicalOrigin));

if (sitemapUrls.length === 0) errors.push("Die Sitemap enthält keine Dayova-URLs.");
if (/oaklyn/iu.test(sitemapXml)) errors.push("Die Sitemap enthält noch OAKLYN.");

const seenTitles = new Map();
const seenDescriptions = new Map();

for (const sitemapUrl of sitemapUrls) {
  const pathname = new URL(sitemapUrl).pathname;
  const response = await fetch(new URL(pathname, baseUrl), { redirect: "follow" });
  const label = pathname;

  if (!response.ok) {
    errors.push(`${label}: HTTP ${response.status}`);
    continue;
  }

  const html = await response.text();
  const titles = getText(html, "title");
  const descriptions = getMeta(html, "name", "description");
  const canonical = getLink(html, "canonical");
  const headings = getText(html, "h1");
  const robots = getMeta(html, "name", "robots").toLowerCase();
  const ogTitle = getMeta(html, "property", "og:title");
  const ogDescription = getMeta(html, "property", "og:description");
  const ogImage = getMeta(html, "property", "og:image");
  const language = getAttributes(html.match(/<html\b[^>]*>/iu)?.[0] ?? "").lang;
  const jsonLdScripts = [
    ...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/giu),
  ];

  if (titles.length !== 1 || !titles[0]) errors.push(`${label}: eindeutiger Title fehlt.`);
  if (!descriptions) errors.push(`${label}: Meta-Description fehlt.`);
  if (canonical !== expectedCanonical(pathname)) {
    errors.push(`${label}: Canonical ist „${canonical || "nicht gesetzt"}“.`);
  }
  if (headings.length !== 1) errors.push(`${label}: ${headings.length} H1-Überschriften gefunden.`);
  if (robots.includes("noindex")) errors.push(`${label}: Sitemap-URL ist auf noindex gesetzt.`);
  if (!ogTitle || !ogDescription || !ogImage) errors.push(`${label}: Open-Graph-Daten sind unvollständig.`);
  if (language !== "de") warnings.push(`${label}: HTML-Sprache ist nicht „de“.`);
  if (/oaklyn/iu.test(html)) errors.push(`${label}: OAKLYN ist noch im HTML enthalten.`);
  if (jsonLdScripts.length === 0) warnings.push(`${label}: keine strukturierten Daten gefunden.`);

  for (const script of jsonLdScripts) {
    try {
      JSON.parse(script[1]);
    } catch {
      errors.push(`${label}: ungültiges JSON-LD gefunden.`);
    }
  }

  const title = titles[0] ?? "";
  if (title.length > 65) warnings.push(`${label}: Title ist mit ${title.length} Zeichen lang.`);
  if (descriptions.length > 170) {
    warnings.push(`${label}: Meta-Description ist mit ${descriptions.length} Zeichen lang.`);
  }

  if (seenTitles.has(title)) errors.push(`${label}: doppelter Title mit ${seenTitles.get(title)}.`);
  if (seenDescriptions.has(descriptions)) {
    errors.push(`${label}: doppelte Meta-Description mit ${seenDescriptions.get(descriptions)}.`);
  }
  seenTitles.set(title, label);
  seenDescriptions.set(descriptions, label);
}

console.log(
  `SEO-Audit: ${sitemapUrls.length} indexierbare Seiten, ${errors.length} Fehler, ${warnings.length} Hinweise.`,
);

for (const error of errors) console.error(`FEHLER: ${error}`);
for (const warning of warnings) console.warn(`HINWEIS: ${warning}`);

if (errors.length > 0) process.exitCode = 1;
