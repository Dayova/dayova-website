const baseUrl = new URL(process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3101");
const includeDashboard = process.env.SMOKE_INCLUDE_DASHBOARD !== "false";

const dashboardHeaders = {
  "x-dayova-user-id": "teacher-mueller",
  "x-dayova-role": "school_admin",
  "x-dayova-school-id": "school-dayova-demo",
  "x-dayova-display-name": "Frau Müller",
};

const publicEntryPaths = [
  "/",
  "/blog",
  "/datenschutz",
  "/downloads",
  "/eltern",
  "/impressum",
  "/kasse?plan=annual",
  "/kasse?plan=monthly",
  "/kasse/abgebrochen",
  "/kasse/erfolgreich",
  "/nutzungsbedingungen",
  "/preise",
  "/schulen",
  "/ueber-uns",
  "/robots.txt",
  "/sitemap.xml",
];

const dashboardEntryPaths = [
  "/lehrkraefte",
  "/lehrkraefte/analysen",
  "/lehrkraefte/assistent?gruppe=8a-mathematik",
  "/lehrkraefte/benachrichtigungen",
  "/lehrkraefte/hausaufgaben",
  "/lehrkraefte/klassen",
  "/lehrkraefte/klassenbuch",
  "/lehrkraefte/noten",
  "/lehrkraefte/planung",
  "/lehrkraefte/profil",
  "/lehrkraefte/schulverwaltung",
  "/lehrkraefte/stundenplan",
  "/lehrkraefte/tests",
  "/lehrkraefte/unterrichtsgruppen",
];

const entryPaths = [
  ...publicEntryPaths,
  ...(includeDashboard ? dashboardEntryPaths : []),
];

const failures = [];
const visitedPages = new Set();
const visitedAssets = new Set();
const queuedPages = new Set(entryPaths);
const pageQueue = [...entryPaths];

function reportFailure(target, message) {
  failures.push(`${target}: ${message}`);
}

function normalizeInternalHref(href, currentUrl) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }

  try {
    const url = new URL(href, currentUrl);
    const isInternal =
      url.origin === baseUrl.origin ||
      url.hostname === "dayova.com" ||
      url.hostname.endsWith(".dayova.com");

    const isAsset = /\.(?:avif|css|gif|ico|jpe?g|js|pdf|png|svg|webp|woff2?)$/iu.test(
      url.pathname,
    );

    if (
      !isInternal ||
      isAsset ||
      url.pathname.startsWith("/_next/") ||
      url.pathname.startsWith("/api/")
    ) {
      return null;
    }

    return `${url.pathname}${url.search}`;
  } catch {
    return null;
  }
}

function collectPageLinks(html, currentUrl) {
  for (const match of html.matchAll(/\shref=["']([^"']+)["']/giu)) {
    const path = normalizeInternalHref(match[1], currentUrl);
    if (path && !queuedPages.has(path)) {
      queuedPages.add(path);
      pageQueue.push(path);
    }
  }
}

function collectImageSources(html, currentUrl) {
  for (const match of html.matchAll(/<img\b[^>]*\ssrc=["']([^"']+)["']/giu)) {
    try {
      const url = new URL(match[1].replaceAll("&amp;", "&"), currentUrl);
      if (url.origin === baseUrl.origin) {
        visitedAssets.add(url.href);
      }
    } catch {
      reportFailure(currentUrl, `ungültige Bild-URL ${match[1]}`);
    }
  }
}

async function fetchPage(path) {
  const url = new URL(path, baseUrl);
  const response = await fetch(url, { redirect: "follow" });
  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.text();

  if (!response.ok) {
    reportFailure(path, `HTTP ${response.status}`);
    return;
  }

  if (url.pathname.endsWith(".xml") || url.pathname.endsWith(".txt")) {
    return;
  }

  if (!contentType.includes("text/html")) {
    reportFailure(path, `unerwarteter Content-Type ${contentType || "ohne Angabe"}`);
    return;
  }

  const errorMarkers = [
    "Application error",
    "Internal Server Error",
  ];
  const marker = errorMarkers.find((value) => body.includes(value));
  if (marker) {
    reportFailure(path, `Fehlerseite enthält „${marker}“`);
  }

  collectPageLinks(body, response.url);
  collectImageSources(body, response.url);
}

async function addSitemapPages() {
  const sitemapUrl = new URL("/sitemap.xml", baseUrl);
  const response = await fetch(sitemapUrl);
  const xml = await response.text();

  if (!response.ok) {
    reportFailure("/sitemap.xml", `HTTP ${response.status}`);
    return;
  }

  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/giu)) {
    const url = new URL(match[1]);
    const path = `${url.pathname}${url.search}`;
    if (!queuedPages.has(path)) {
      queuedPages.add(path);
      pageQueue.push(path);
    }
  }
}

async function checkPages() {
  await addSitemapPages();

  while (pageQueue.length > 0) {
    const path = pageQueue.shift();
    if (!path || visitedPages.has(path)) continue;
    visitedPages.add(path);
    await fetchPage(path);

    if (visitedPages.size > 500) {
      reportFailure("Crawler", "mehr als 500 interne Seiten entdeckt");
      break;
    }
  }
}

async function checkAssets() {
  for (const assetUrl of visitedAssets) {
    const response = await fetch(assetUrl);
    if (!response.ok) {
      reportFailure(new URL(assetUrl).pathname, `Bild liefert HTTP ${response.status}`);
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.startsWith("image/")) {
      reportFailure(new URL(assetUrl).pathname, `Bild liefert ${contentType || "keinen Content-Type"}`);
    }
  }
}

async function expectApi(path, expectedStatus, options = {}) {
  const response = await fetch(new URL(path, baseUrl), options);
  const body = await response.text();

  if (response.status !== expectedStatus) {
    reportFailure(path, `API HTTP ${response.status}, erwartet ${expectedStatus}`);
    return;
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    reportFailure(path, `API liefert ${contentType || "keinen Content-Type"}`);
    return;
  }

  try {
    JSON.parse(body);
  } catch {
    reportFailure(path, "API liefert kein gültiges JSON");
  }
}

async function checkApis() {
  await expectApi("/api/auth/me", 401);

  const authenticatedRequests = [
    "/api/auth/me",
    "/api/teachers/teacher-mueller/teaching-groups",
    "/api/teaching-groups/8a-mathematik",
    "/api/teaching-groups/8a-mathematik/students",
    "/api/teaching-groups/8a-mathematik/summary",
    "/api/teaching-groups/8a-mathematik/lesson-recommendations/latest",
  ];

  for (const path of authenticatedRequests) {
    await expectApi(path, 200, { headers: dashboardHeaders });
  }

  await expectApi(
    "/api/teaching-groups/8a-mathematik/lesson-recommendations/generate",
    201,
    {
      method: "POST",
      headers: { ...dashboardHeaders, "content-type": "application/json" },
      body: JSON.stringify({ targetDate: "2026-08-17T08:00:00.000Z" }),
    },
  );
}

await checkPages();
await checkAssets();
if (includeDashboard) await checkApis();

if (failures.length > 0) {
  console.error(`Smoke-Test fehlgeschlagen (${failures.length} Fehler):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Smoke-Test erfolgreich: ${visitedPages.size} Seiten, ${visitedAssets.size} Bilder und ${includeDashboard ? 8 : 0} API-Abläufe geprüft.`,
  );
}
