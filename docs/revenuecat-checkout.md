# RevenueCat web checkout

The pricing page starts a server-validated RevenueCat Web Purchase Link. The
browser only submits the stable plan IDs `annual` and `monthly`; package IDs and
the production purchase link remain server-side environment variables.

## RevenueCat dashboard setup

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
   The buyer can either open the Redemption Link on their own device or share
   a dedicated HTTPS `/abo-aktivieren` URL with the intended learner through
   the platform share sheet. The learner opens that normal, tappable web link
   and sees a recipient-only page with one primary action into Dayova; the
   buyer's ownership choice is not repeated. Do not share or copy the custom
   `rc-…://` scheme directly because messaging apps may render it as plain
   text. Browsers without a share sheet copy the same HTTPS activation URL
   instead.
5. Set the cancel/back destination to
   `https://dayova.com/kasse/abgebrochen` or `https://dayova.com/preise`.
6. Configure the Customer Portal in RevenueCat so subscribers can manage and
   cancel their web subscription.
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

The post-purchase page makes this ownership choice explicit: the buyer can
activate the subscription for their own Dayova account or send the Redemption
Link to the intended learner. The learner receives a dedicated activation page
that removes the ownership question and offers only the forward action into the
app plus a store-download fallback. Both actions use the same 60-minute link.
Never persist it, expose it to analytics, or send it to an unintended recipient.
The analytics page-view helper removes redemption and checkout-ownership query
parameters before reporting either the page path or page location.

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
