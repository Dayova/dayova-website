# Website deployments

The website uses Vercel's Git integration. Vercel, rather than a custom GitHub
Actions workflow, owns builds, deployment URLs, and domain assignment.

## Environment mapping

| Git source | Vercel environment | Stable domain | RevenueCat configuration |
| --- | --- | --- | --- |
| Pull-request and feature branches | Preview | Generated commit and branch URLs | Sandbox |
| `staging` | Preview | `staging.dayova.com` | Sandbox |
| `main` | Production | `dayova.com` | Production |

`main` is the only Production Branch. The `staging` branch is long-lived and
must not be deleted after a release. All other branches remain isolated Preview
Deployments.

## Environment variables

The checkout variables are configured in Vercel and must never be committed:

- `REVENUECAT_WEB_PURCHASE_LINK`
- `REVENUECAT_ANNUAL_PACKAGE_ID`
- `REVENUECAT_MONTHLY_PACKAGE_ID`
- `REVENUECAT_REDEMPTION_SCHEME`

Production values are scoped only to Production. Sandbox values are scoped to
Preview, which includes both `staging` and pull-request deployments. A
branch-specific `staging` override may be added if staging later needs a
different sandbox offering, but it must never reference production billing.

Purchase-link tokens, redemption tokens, customer identifiers, and payment
data must not appear in source control, issue trackers, build logs, or
screenshots. A value can be verified by environment, hostname, or fingerprint;
do not paste the value into a verification record.

Changes to Vercel environment variables only affect new deployments. Redeploy
the relevant branch after changing a value.

## Release flow

1. Open a pull request and use its commit-specific Preview URL for review.
2. Merge or apply the approved commit to `staging`.
3. Complete sandbox checkout and app-unlock QA on `staging.dayova.com`.
4. Obtain explicit human release approval.
5. Merge `staging` into `main`.
6. Confirm that the resulting Production deployment is ready and run a
   non-destructive smoke test on `dayova.com`.

Do not bypass `staging` for changes that affect checkout, redemption, account
handoff, or entitlements.

## Staging cutover

The legacy `dayova-website-staging` Vercel project is the rollback target during
the migration. Keep the project, its latest known-good deployment, and its
environment variables intact until the replacement workflow has passed the
complete acceptance checklist.

Before moving `staging.dayova.com` to the main `dayova-website` project:

1. Confirm that the `staging` branch exists in GitHub.
2. Confirm that the main Vercel project is connected to
   `Dayova/dayova-website`, with `main` selected as Production Branch.
3. Confirm that a Git-triggered `staging` Preview Deployment is ready.
4. Confirm that Preview has the sandbox RevenueCat values and Production has
   separately scoped production values.
5. Test the generated staging Preview URL before assigning the stable domain.
6. Record the current legacy staging deployment in the operational change
   record without copying environment values.

Move only `staging.dayova.com`; `dayova.com` and its redirects stay assigned to
the main project's Production environment throughout the staging cutover.

## Rollback

If verification fails after the staging domain is moved:

1. Stop staging verification and do not merge `staging` into `main`.
2. Move `staging.dayova.com` back to the retained
   `dayova-website-staging` project.
3. Confirm that the domain resolves to that project's latest known-good READY
   deployment.
4. Verify the homepage and both checkout plan redirects without exposing their
   destination tokens.
5. Correct the main project's Preview configuration, redeploy `staging`, and
   repeat the cutover checklist before trying again.

If a Production deployment is unhealthy, immediately restore the previous
known-good Production deployment from Vercel, then revert the offending `main`
commit through Git. Never work around a production incident by putting sandbox
billing values on `dayova.com`.

The rollback is considered dry-run verified when both projects are present,
the legacy project has a READY deployment, the staging domain is verified, the
operator can identify the Vercel domain-move action, and no production domain is
included in the planned move.

## Retirement

Retire `dayova-website-staging` only after Preview, staging, production,
checkout, redemption, wrong-account, expired-link, duplicate-claim, sharing,
and app-not-installed checks all pass. Retirement is a separate, explicitly
approved change; it is not part of the initial domain cutover.
