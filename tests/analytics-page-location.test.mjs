import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(
  new URL("../src/lib/analytics-page-location.ts", import.meta.url),
  "utf8",
);
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString("base64")}`;
const { getSafeAnalyticsPageLocation } = await import(moduleUrl);

test("removes checkout ownership and redemption credentials from analytics", () => {
  assert.deepEqual(
    getSafeAnalyticsPageLocation(
      "https://staging.dayova.com/abo-aktivieren?app_user_id=buyer&redeem_url=rc-secret%3A%2F%2Fredeem%3Fredemption_token%3Dsecret&redemption_token=secret&campaign=family#complete",
    ),
    {
      pageLocation:
        "https://staging.dayova.com/abo-aktivieren?campaign=family",
      pagePath: "/abo-aktivieren?campaign=family",
    },
  );
});

test("keeps ordinary marketing query parameters", () => {
  assert.deepEqual(
    getSafeAnalyticsPageLocation(
      "https://dayova.com/preise?utm_source=discord&plan=annual",
    ),
    {
      pageLocation:
        "https://dayova.com/preise?utm_source=discord&plan=annual",
      pagePath: "/preise?utm_source=discord&plan=annual",
    },
  );
});

test("refuses malformed page locations", () => {
  assert.equal(getSafeAnalyticsPageLocation("not a url"), null);
});
