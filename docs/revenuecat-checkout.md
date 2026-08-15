# RevenueCat web checkout

The pricing page starts a server-validated RevenueCat Web Purchase Link. The
browser only submits the stable plan IDs `annual` and `monthly`; package IDs and
the production purchase link remain server-side environment variables.

## RevenueCat dashboard setup

The production dashboard is configured with RevenueCat Billing, the Dayova
Stripe account, EUR as the default currency, mandatory terms consent, yearly
renewal emails, and Redemption Links for production and sandbox. The active
offering maps the RevenueCat Billing products to the standard package IDs
`$rc_monthly` and `$rc_annual`.

1. Configure RevenueCat Web Billing and connect the payment gateway required by
   RevenueCat Billing.
2. Create monthly and annual packages for the entitlement used by the Dayova
   mobile apps.
3. Create a **production** Web Purchase Link that permits anonymous purchases
   and enable Redemption Links. Anonymous checkout is required until the
   marketing website has a real learner login and also supports the approved
   parent-payer flow.
4. Set the success redirect to
   `https://dayova.com/kasse/erfolgreich`. RevenueCat appends `redeem_url` for an
   anonymous purchase; the success page presents that secure link to the buyer.
5. Set the cancel/back destination to
   `https://dayova.com/kasse/abgebrochen` or `https://dayova.com/preise`.
6. RevenueCat includes the subscription-management link in its transactional
   purchase and receipt emails. Keep the Dayova support address configured as a
   second cancellation route.
7. Verify that the iOS and Android apps use the same RevenueCat project,
   entitlement and app-user identity, and support Redemption Links.
8. Copy the generated RevenueCat custom URL scheme from the web billing config
   into `REVENUECAT_REDEMPTION_SCHEME`. The success page only accepts redemption
   URLs that match this exact scheme.

## Environment variables

```text
REVENUECAT_WEB_PURCHASE_LINK=https://pay.rev.cat/production-token
REVENUECAT_ANNUAL_PACKAGE_ID=annual-package-id
REVENUECAT_MONTHLY_PACKAGE_ID=monthly-package-id
REVENUECAT_REDEMPTION_SCHEME=rc-your-config-id
```

Never deploy a sandbox purchase link as the production value. The route rejects
non-HTTPS and non-`pay.rev.cat` purchase links.

## Account and entitlement boundary

The current website has no production learner authentication. It therefore does
not accept a browser-provided RevenueCat App User ID, because that could assign
a purchase to the wrong account. Instead, RevenueCat issues a short-lived
Redemption Link after payment. The learner opens it on the device and associates
the entitlement with the authenticated Dayova app account.

Once a shared learner login exists on the website, checkout can use an
identified Web Purchase Link generated from the server-authenticated Dayova user
ID. Do not add an `app_user_id` query parameter controlled by the browser.

## Webhooks

RevenueCat remains the entitlement source for this first integration. A webhook
consumer should only be added together with the shared app backend and a durable
event store. It must verify the configured authorization header, use the
RevenueCat event ID as an idempotency key, tolerate retries and out-of-order
events, and record auditable entitlement transitions. A handler that merely
acknowledges events would lose billing state and is intentionally not included.

## Commercial rules

- Monthly: EUR 14.99 billed monthly.
- Annual: EUR 155.88 billed annually, displayed as EUR 12.99 per month.
- Pricing version: `pricing_2026_08_03`.
- The 14-day app trial requires no payment details and does not automatically
  convert into a paid subscription.
