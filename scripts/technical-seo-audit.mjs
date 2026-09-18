// Audit the HTTP responses Google can read without running client JavaScript.
// Run after `npm run build && npm start`, or set SEO_BASE_URL to production.
const base = new URL(process.env.SEO_BASE_URL ?? "http://127.0.0.1:3117");
const canonicalOrigin = "https://dayova.com";
const failures = [];
const pages = new Map();
const links = new Map();
const graph = new Map();
const userAgent = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

function check(condition, message) {
  if (!condition) failures.push(message);
}

function decode(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/gu)].map((match) => [match[1], decode(match[2])]));
}

async function request(path) {
  const response = await fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(20_000),
    headers: { "User-Agent": userAgent },
  });
  const html = await response.text();
  // Exclude JSON-LD and React flight payloads: only real HTML links count.
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/giu, "");
  return { response, markup };
}

async function page(path) {
  if (!pages.has(path)) pages.set(path, request(path));
  return pages.get(path);
}

const { response: sitemapResponse, markup: xml } = await request("/sitemap.xml");
check(sitemapResponse.status === 200, "Sitemap must return HTTP 200.");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => decode(match[1]));
check(urls.length > 0, "Sitemap must not be empty.");
check(new Set(urls).size === urls.length, "Sitemap contains duplicate URLs.");
const { response: robotsResponse, markup: robots } = await request("/robots.txt");
check(robotsResponse.status === 200, "robots.txt must return HTTP 200.");
check(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), "robots.txt must advertise the canonical sitemap.");
// This site's policy is a single wildcard group with prefix-based exclusions.
const disallowed = [...robots.matchAll(/^Disallow:\s*(.+)$/gmu)].map((match) => match[1].trim());

for (const url of urls) {
  const parsed = new URL(url);
  const path = parsed.pathname;
  check(parsed.origin === canonicalOrigin && !parsed.search && !parsed.hash, `${url}: noncanonical sitemap URL.`);
  check(!disallowed.some((prefix) => path.startsWith(prefix)), `${path}: blocked by robots.txt.`);
  const { response, markup } = await page(path);
  check(response.status === 200, `${path}: expected direct HTTP 200, received ${response.status}.`);
  check(!/noindex|none/iu.test(response.headers.get("x-robots-tag") ?? ""), `${path}: blocked by HTTP robots header.`);
  const meta = [...markup.matchAll(/<meta\b[^>]*>/giu)].map((match) => attributes(match[0]));
  check(!meta.some((item) => ["robots", "googlebot"].includes(item.name) && /noindex|none/iu.test(item.content)), `${path}: blocked by robots metadata.`);
  const canonical = [...markup.matchAll(/<link\b[^>]*>/giu)].map((match) => attributes(match[0])).filter((item) => item.rel === "canonical");
  check(canonical.length === 1 && canonical[0].href === url, `${path}: canonical must match the sitemap URL exactly.`);
  check(/<h1[\s>]/iu.test(markup) && /<main[\s>]/iu.test(markup), `${path}: main content missing from server HTML.`);
  const outgoing = new Set();
  for (const match of markup.matchAll(/<a\b[^>]*>/giu)) {
    const { href } = attributes(match[0]);
    if (!href) continue;
    const target = new URL(href, new URL(path, base));
    if (![base.origin, canonicalOrigin].includes(target.origin)) continue;
    const key = `${target.pathname}${target.search}`;
    outgoing.add(target.pathname);
    if (!links.has(key)) links.set(key, []);
    links.get(key).push({ source: path, hash: target.hash });
  }
  graph.set(path, outgoing);
  if (path !== "/") {
    const slash = await request(`${path}/`);
    check(slash.response.status === 308 && new URL(slash.response.headers.get("location"), base).pathname === path, `${path}/: expected a single permanent redirect.`);
  }
}

for (const [target, references] of links) {
  const { response, markup } = await page(target);
  check(response.status === 200, `${target}: internal link must resolve directly, received ${response.status}; linked from ${references[0].source}.`);
  for (const { source, hash } of references) {
    if (!hash) continue;
    const id = decodeURIComponent(hash.slice(1));
    const ids = [...markup.matchAll(/\bid="([^"]*)"/gu)].map((match) => decode(match[1]));
    check(ids.includes(id), `${source}: missing anchor ${target}${hash}.`);
  }
}

const reachable = new Set(["/"]);
const queue = ["/"];
for (let index = 0; index < queue.length; index++) {
  for (const path of graph.get(queue[index]) ?? []) {
    if (!reachable.has(path)) { reachable.add(path); queue.push(path); }
  }
}
for (const url of urls) check(reachable.has(new URL(url).pathname), `${url}: not reachable from the homepage through server-rendered links.`);

const redirects = [
  ["/kontakt", "/support"],
  ["/kontakt-zu-dayova-schuelerfoerderung-fuer-leichteres-lernen", "/support"],
  ["/ueberuns", "/about"],
  ["/ueber-uns", "/about"],
  ["/preise", "/pricing"],
  ["/datenschutz", "/privacy"],
  ["/impressum", "/legal-notice"],
  ["/aktives-abrufen-statt-passives-lesen-warum-fragen-die-beste-lernmethode-sind", "/blog/abrufen-statt-passiv-lesen"],
];
for (const [source, destination] of redirects) {
  for (const suffix of ["", "/", "?utm_source=seo-audit", "/?utm_source=seo-audit"]) {
    const { response } = await request(`${source}${suffix}`);
    const location = new URL(response.headers.get("location") ?? "/", base);
    check(response.status === 308 && location.pathname === destination && !location.hash, `${source}${suffix}: incorrect permanent redirect.`);
    check(location.search === (suffix.includes("?") ? "?utm_source=seo-audit" : ""), `${source}${suffix}: query parameters were not preserved.`);
    const target = await page(destination);
    check(target.response.status === 200, `${source}: redirect target returns ${target.response.status}.`);
  }
}
for (const path of ["/seo-audit-page-that-does-not-exist", "/blog/seo-audit-article-that-does-not-exist", "/author/philipp-schossig", "/Caroudsana/takes/takes/ul"]) {
  const { response } = await request(path);
  check(response.status === 404, `${path}: removed or unknown content must return a real 404.`);
}
for (const path of ["/downloads", "/privacy", "/terms", "/legal-notice", "/checkout", "/checkout/success", "/checkout/canceled", "/app/privacy", "/app/support"]) {
  const { response, markup } = await page(path);
  check(response.status === 200 && /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/iu.test(markup), `${path}: utility page must retain noindex.`);
}
const tracked = await request("/downloads?utm_source=seo-audit");
check(tracked.markup.includes('rel="canonical" href="https://dayova.com/downloads"'), "Campaign query parameters must not change the canonical URL.");
console.log(`Technical SEO: ${urls.length} sitemap pages, ${links.size} internal targets, ${redirects.length * 4} legacy redirect cases, ${failures.length} failures.`);
for (const failure of failures) console.error(`FAIL: ${failure}`);
if (failures.length) process.exitCode = 1;
