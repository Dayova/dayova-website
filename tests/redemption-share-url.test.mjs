import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(
  new URL("../src/lib/redemption-share-url.ts", import.meta.url),
  "utf8",
);
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString("base64")}`;
const { getShareableRedemptionUrl } = await import(moduleUrl);

const redeemUrl =
  "rc-27a39b9faa://redeem_web_purchase?redemption_token=test-token";

test("shares a dedicated HTTPS recipient page so messaging apps create a tappable link", () => {
  const currentPageUrl =
    "https://staging.dayova.com/kasse/erfolgreich?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token";

  const shareUrl = getShareableRedemptionUrl({ currentPageUrl, redeemUrl });

  assert.equal(
    shareUrl,
    "https://staging.dayova.com/abo-aktivieren?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token",
  );
  assert.match(shareUrl, /^https:\/\//);
});

test("refuses a success page that does not contain the validated redemption link", () => {
  const currentPageUrl =
    "https://staging.dayova.com/kasse/erfolgreich?redeem_url=rc-other%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dwrong-token";

  assert.equal(
    getShareableRedemptionUrl({ currentPageUrl, redeemUrl }),
    null,
  );
});

test("refuses non-HTTPS public pages", () => {
  const currentPageUrl =
    "http://staging.dayova.com/kasse/erfolgreich?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token";

  assert.equal(
    getShareableRedemptionUrl({ currentPageUrl, redeemUrl }),
    null,
  );
});

test("allows localhost HTTP for browser-level development checks", () => {
  const currentPageUrl =
    "http://localhost:3010/kasse/erfolgreich?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token";

  assert.equal(
    getShareableRedemptionUrl({ currentPageUrl, redeemUrl }),
    "http://localhost:3010/abo-aktivieren?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token",
  );
});

test("removes unrelated checkout identifiers from the shared page URL", () => {
  const currentPageUrl =
    "https://staging.dayova.com/kasse/erfolgreich?app_user_id=%24RCAnonymousID%3Abuyer&redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token#complete";

  assert.equal(
    getShareableRedemptionUrl({ currentPageUrl, redeemUrl }),
    "https://staging.dayova.com/abo-aktivieren?redeem_url=rc-27a39b9faa%3A%2F%2Fredeem_web_purchase%3Fredemption_token%3Dtest-token",
  );
});
