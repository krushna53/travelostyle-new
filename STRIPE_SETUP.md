# Stripe Setup — TravelOStyle Booking (Next.js on Netlify)

Your Stripe **secret key must never be pasted into chat or committed to the
repo** — it only ever lives as a server-side environment variable. This app
already has the plumbing in place:

- `app/api/create-payment-intent/route.js` — server route that creates a
  Stripe PaymentIntent using `STRIPE_SECRET_KEY`.
- `components/BookingModal.jsx` — mounts Stripe's Payment Element (Card +
  ACH) in the final step of the booking form, using
  `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.

## 1. Get your Stripe keys
1. Log in to the [Stripe Dashboard](https://dashboard.stripe.com).
2. Keep **Test mode** on while you build/test.
3. Go to **Developers → API keys** and copy the **Publishable key**
   (`pk_test_...`) and **Secret key** (`sk_test_...`).

## 2. Enable ACH bank transfers
In **Settings → Payment methods**, turn on **ACH Direct Debit** (US bank
account). Because the Payment Element uses `automatic_payment_methods`,
Card and ACH both appear automatically — no extra frontend code needed.

## 3. Local environment variables
In `.env.local` (already scaffolded, values left blank on purpose):
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```
Restart `npm run dev` after adding these.

## 4. Netlify environment variables (production)
1. Netlify dashboard → your site → **Site configuration → Environment variables**.
2. Add both:
   - `STRIPE_SECRET_KEY` = your secret key (test or live)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
3. Netlify's Next.js Runtime automatically deploys `app/api/*` routes as
   serverless functions — no extra config needed beyond the env vars.
4. Trigger a redeploy so the new variables take effect.

## 5. Test it
1. `npm install` (pulls in the `stripe` package already added to
   `package.json`), then `npm run dev`.
2. Click **Book Now** on any Land Journeys card and complete the form.
3. At the Payment step, use Stripe's test card `4242 4242 4242 4242`, any
   future expiry, any CVC, any ZIP.
4. For ACH, use the test routing/account numbers from
   [Stripe's ACH testing docs](https://docs.stripe.com/payments/ach-direct-debit/accept-a-payment).
5. Confirm the PaymentIntent shows up in **Stripe Dashboard → Payments**
   (test mode).

## 6. Webhook (required for ACH — already built)
Cards confirm instantly in the browser, so `BookingModal.jsx` sends the
booking email itself right after `confirmPayment()`. ACH resolves to
`"processing"` at that same moment — the money hasn't actually moved yet,
and can still fail days later — so `app/api/stripe-webhook/route.js`
listens for `payment_intent.succeeded` / `payment_intent.payment_failed`
and sends a **separate** "your ACH payment has cleared / failed" follow-up
email to both admin and the lead traveler, using the `leadEmail`/`leadName`
stored in the PaymentIntent's metadata. It intentionally ignores card
events (those are already handled client-side) to avoid double-emailing.

### Sandbox (test mode) setup
1. Stripe Dashboard, with **Test mode** on → **Developers → Webhooks → Add destination**.
2. Endpoint URL: your Netlify preview/staging URL + `/api/stripe-webhook`
   (e.g. `https://your-preview.netlify.app/api/stripe-webhook`).
3. Select events: `payment_intent.succeeded` and `payment_intent.payment_failed`.
4. After creating it, open the endpoint and copy the **Signing secret**
   (`whsec_...`).
5. Add it to `.env.local` **and** Netlify's environment variables (for the
   deploy context the preview URL points at) as `STRIPE_WEBHOOK_SECRET`.
6. Test it: Stripe Dashboard → your webhook → **Send test event**, pick
   `payment_intent.succeeded`, confirm it returns `200` and that you get
   the follow-up email (only fires if the fake event's `payment_method_types`
   includes `us_bank_account` — the Dashboard's test event payload includes
   this by default). You can also trigger a real one end-to-end with the
   ACH test routing/account numbers below.

### Live setup
1. Same steps, but with **Test mode off** and your **production** URL
   (e.g. `https://travelostyle.com/api/stripe-webhook`).
2. This creates a **separate** signing secret from the test one — set it as
   `STRIPE_WEBHOOK_SECRET` in Netlify's *production* environment variables,
   not the same value you used for test mode.
3. Re-deploy so the new variable takes effect.

## 7. Go live
1. Toggle Stripe out of Test mode and grab your **live** keys.
2. Update `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in
   Netlify's environment variables with the live values, then redeploy.
3. Complete Stripe's business verification under **Settings → Business
   settings** — required before accepting live payments.
4. Don't forget the **live** webhook (step 6, "Live setup") — it's separate
   from the test one and easy to miss.

## Notes
- Deposit amounts are calculated automatically from the tour price using
  the tiers from your Terms & Conditions (under $2,499 → $500 deposit;
  $2,500–$4,999 → $1,000; over $5,000 → $1,500), multiplied by the number
  of adult/child travelers.
