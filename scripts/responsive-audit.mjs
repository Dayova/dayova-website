import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const baseUrl = new URL(process.env.RESPONSIVE_BASE_URL ?? "http://127.0.0.1:3101");
const chromeCandidates = [
  process.env.CHROME_BIN,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chromePath) {
  throw new Error(
    "Chrome/Chromium wurde nicht gefunden. Setze CHROME_BIN auf den Browser-Pfad.",
  );
}

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
  { name: "mobile-small", width: 360, height: 800 },
];

const additionalPublicPaths = [
  "/datenschutz",
  "/downloads",
  "/impressum",
  "/nutzungsbedingungen",
  "/kasse?plan=annual",
  "/kasse?plan=monthly",
  "/kasse/abgebrochen",
  "/kasse/erfolgreich",
];

const failures = [];

function fail(path, viewport, message) {
  failures.push(`${path} (${viewport.name}, ${viewport.width}px): ${message}`);
}

class CdpConnection {
  constructor(socket) {
    this.socket = socket;
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = this.pending.get(message.id);
        if (!request) return;
        this.pending.delete(message.id);
        if (message.error) request.reject(new Error(message.error.message));
        else request.resolve(message.result);
        return;
      }

      const listeners = this.listeners.get(message.method) ?? [];
      for (const listener of listeners) {
        if (!listener.sessionId || listener.sessionId === message.sessionId) {
          listener.resolve(message.params);
          clearTimeout(listener.timeout);
          this.listeners.set(
            message.method,
            listeners.filter((candidate) => candidate !== listener),
          );
        }
      }
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }

  once(method, sessionId, timeoutMs = 30_000) {
    return new Promise((resolve, reject) => {
      const listener = { resolve, reject, sessionId, timeout: null };
      listener.timeout = setTimeout(() => {
        const listeners = this.listeners.get(method) ?? [];
        this.listeners.set(
          method,
          listeners.filter((candidate) => candidate !== listener),
        );
        reject(new Error(`Zeitüberschreitung bei ${method}`));
      }, timeoutMs);
      this.listeners.set(method, [...(this.listeners.get(method) ?? []), listener]);
    });
  }

  close() {
    this.socket.close();
  }
}

async function launchChrome(profileDirectory) {
  const browser = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-extensions",
      "--disable-sync",
      "--hide-scrollbars",
      "--no-first-run",
      "--remote-debugging-port=0",
      `--user-data-dir=${profileDirectory}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  const websocketUrl = await new Promise((resolve, reject) => {
    let stderr = "";
    const timeout = setTimeout(() => reject(new Error("Chrome-Start dauerte zu lange.")), 15_000);

    browser.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/u);
      if (!match) return;
      clearTimeout(timeout);
      resolve(match[1]);
    });
    browser.once("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Chrome wurde vorzeitig beendet (Code ${code}).\n${stderr}`));
    });
  });

  return { browser, websocketUrl };
}

async function connectCdp(websocketUrl) {
  const socket = new WebSocket(websocketUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  return new CdpConnection(socket);
}

async function getPublicPaths() {
  const response = await fetch(new URL("/sitemap.xml", baseUrl));
  if (!response.ok) throw new Error(`Sitemap liefert HTTP ${response.status}.`);
  const xml = await response.text();
  const sitemapPaths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => {
    const url = new URL(match[1]);
    return `${url.pathname}${url.search}`;
  });
  return [...new Set([...sitemapPaths, ...additionalPublicPaths])];
}

const measurementExpression = `
  (async () => {
    await Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);
    await Promise.race([
      Promise.all([...document.images].map((image) => image.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          }))),
      new Promise((resolve) => setTimeout(resolve, 4000)),
    ]);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const root = document.documentElement;
    const body = document.body;
    const isVisible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const label = (element) =>
      (element.textContent || element.getAttribute('aria-label') || element.tagName)
        .trim()
        .replace(/\\s+/g, ' ')
        .slice(0, 90);

    const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(isVisible);
    const headingOverflow = headings
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return element.scrollWidth > element.clientWidth + 2 || rect.left < -2 || rect.right > innerWidth + 2;
      })
      .map(label);
    const brokenImages = [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.getAttribute('src'));
    const mobileControls = innerWidth <= 390
      ? [...document.querySelectorAll('button,input,select,textarea,a[class*="button"]')]
          .filter(isVisible)
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            if (element.matches('input[type="checkbox"],input[type="radio"]')) {
              const labelRect = element.closest('label')?.getBoundingClientRect();
              if (labelRect && labelRect.width >= 36 && labelRect.height >= 36) return false;
            }
            return rect.width < 36 || rect.height < 36;
          })
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return label(element) + ' (' + Math.round(rect.width) + '×' + Math.round(rect.height) + ')';
          })
      : [];
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const footerOverlap = main && footer
      ? Math.max(0, Math.round(main.getBoundingClientRect().bottom - footer.getBoundingClientRect().top))
      : 0;

    return {
      title: document.title,
      viewportWidth: innerWidth,
      horizontalOverflow: Math.max(root.scrollWidth, body?.scrollWidth ?? 0) - innerWidth,
      headingOverflow,
      brokenImages,
      mobileControls,
      footerOverlap,
    };
  })()
`;

async function runAudit() {
  const paths = await getPublicPaths();
  const profileDirectory = await mkdtemp(join(tmpdir(), "dayova-responsive-"));
  let browserProcess;
  let cdp;

  try {
    const launched = await launchChrome(profileDirectory);
    browserProcess = launched.browser;
    cdp = await connectCdp(launched.websocketUrl);
    const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
    await cdp.send("Page.enable", {}, sessionId);
    await cdp.send("Runtime.enable", {}, sessionId);

    for (const viewport of viewports) {
      await cdp.send(
        "Emulation.setDeviceMetricsOverride",
        {
          width: viewport.width,
          height: viewport.height,
          deviceScaleFactor: 1,
          mobile: viewport.width <= 390,
          screenWidth: viewport.width,
          screenHeight: viewport.height,
        },
        sessionId,
      );

      for (const path of paths) {
        const url = new URL(path, baseUrl).href;
        let navigationError = null;

        for (let attempt = 1; attempt <= 2; attempt += 1) {
          const loaded = cdp.once("Page.loadEventFired", sessionId);
          const navigation = await cdp.send("Page.navigate", { url }, sessionId);
          if (navigation.errorText) {
            await loaded.catch(() => {});
            navigationError = new Error(navigation.errorText);
          } else {
            try {
              await loaded;
              navigationError = null;
              break;
            } catch (error) {
              navigationError = error;
            }
          }

          if (attempt < 2) {
            await cdp.send("Page.stopLoading", {}, sessionId).catch(() => {});
          }
        }

        if (navigationError) {
          fail(path, viewport, `Navigation fehlgeschlagen: ${navigationError.message}`);
          continue;
        }

        const evaluation = await cdp.send(
          "Runtime.evaluate",
          {
            expression: measurementExpression,
            awaitPromise: true,
            returnByValue: true,
          },
          sessionId,
        );
        if (evaluation.exceptionDetails) {
          fail(path, viewport, "Layout-Messung konnte nicht ausgeführt werden.");
          continue;
        }

        const result = evaluation.result.value;
        if (Math.abs(result.viewportWidth - viewport.width) > 1) {
          fail(path, viewport, `Viewport ist ${result.viewportWidth}px breit.`);
        }
        if (result.horizontalOverflow > 2) {
          fail(path, viewport, `${Math.round(result.horizontalOverflow)}px horizontaler Überlauf.`);
        }
        if (result.headingOverflow.length > 0) {
          fail(path, viewport, `Überschrift läuft über: ${result.headingOverflow.join(" | ")}`);
        }
        if (result.brokenImages.length > 0) {
          fail(path, viewport, `Kaputte Bilder: ${result.brokenImages.join(", ")}`);
        }
        if (result.mobileControls.length > 0) {
          fail(path, viewport, `Zu kleine Bedienelemente: ${result.mobileControls.join(" | ")}`);
        }
        if (result.footerOverlap > 2) {
          fail(path, viewport, `Inhalt überlappt den Footer um ${result.footerOverlap}px.`);
        }
      }
    }

    const checks = paths.length * viewports.length;
    if (failures.length > 0) {
      console.error(`Responsive-Audit fehlgeschlagen (${failures.length} Fehler):`);
      for (const failure of failures) console.error(`- ${failure}`);
      process.exitCode = 1;
    } else {
      console.log(
        `Responsive-Audit erfolgreich: ${paths.length} Seiten in ${viewports.length} Viewports (${checks} Layout-Prüfungen), 0 Fehler.`,
      );
    }
  } finally {
    cdp?.close();
    browserProcess?.kill("SIGTERM");
    await rm(profileDirectory, { recursive: true, force: true });
  }
}

await runAudit();
