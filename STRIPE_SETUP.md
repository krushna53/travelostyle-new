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

## 6. (Recommended) Confirm payments with a webhook
Cards confirm instantly; ACH settles over a few business days. To know for
certain when funds have cleared:
1. Add `app/api/stripe-webhook/route.js` that verifies the Stripe
   signature and handles `payment_intent.succeeded` /
   `payment_intent.payment_failed`.
2. In Stripe Dashboard → **Developers → Webhooks**, point an endpoint at
   `https://yoursite.com/api/stripe-webhook`.
3. Add the **Signing secret** to Netlify as `STRIPE_WEBHOOK_SECRET`.
4. On success, send the confirmation email (you already have `nodemailer`
   wired up in `app/api/contact/route.js` — reuse that transporter) and/or
   update your booking records.

## 7. Go live
1. Toggle Stripe out of Test mode and grab your **live** keys.
2. Update `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in
   Netlify's environment variables with the live values, then redeploy.
3. Complete Stripe's business verification under **Settings → Business
   settings** — required before accepting live payments.

## Notes
- Deposit amounts are calculated automatically from the tour price using
  the tiers from your Terms & Conditions (under $2,499 → $500 deposit;
  $2,500–$4,999 → $1,000; over $5,000 → $1,500), multiplied by the number
  of adult/child travelers.
- The **Essence of Japan** card currently references
  `public/LandJourney/Japan-Image.jpg`, which doesn't exist yet — add a
  real photo at that path (or update the `image` field in
  `components/LandJourneys.jsx`) before shipping.
