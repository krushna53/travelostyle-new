# Google Places Autocomplete Setup — "Full Address" field

The lead traveler's "Full Address" field in the booking form
(`components/BookingModal.jsx` → `AddressInput`) shows address suggestions
as you type, using the Google Maps JavaScript API's Places library. It's
optional — without a key, the field just behaves as a plain text input, no
errors, no broken UI.

## 1. Create a Google Cloud project (skip if you already have one)
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Top left project dropdown → **New Project** → name it (e.g. "TravelOStyle").

## 2. Enable billing
Google Maps Platform requires a billing account, even though it has a
recurring monthly free credit that covers typical small-site usage.
1. **Billing** in the left sidebar → link or create a billing account.

## 3. Enable the required APIs
1. **APIs & Services → Library**.
2. Search for and enable **Maps JavaScript API**.
3. Search for and enable **Places API**.

## 4. Create the API key
1. **APIs & Services → Credentials → + Create Credentials → API key**.
2. A key is generated immediately — click it to configure restrictions
   (don't skip this step, an unrestricted key can be used by anyone who
   sees it in your page source).

## 5. Restrict the key
On the key's edit page:
1. **Application restrictions** → **Websites** → add your domains, e.g.:
   - `https://travelostyle.com/*`
   - `https://*.netlify.app/*` (covers preview/branch deploys)
   - `http://localhost:3000/*` (for local dev)
2. **API restrictions** → **Restrict key** → select only **Maps JavaScript
   API** and **Places API**.
3. Save.

## 6. Add it to the app
In `.env.local` (and in Netlify's environment variables for deploys):
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
```
This is a `NEXT_PUBLIC_` variable because it's used client-side — that's
expected and safe as long as it's restricted to your domains per step 5
(the website restriction, not secrecy, is what protects it).

Restart `npm run dev` (or redeploy on Netlify) after adding it. No code
changes are needed — `AddressInput` picks it up automatically.

## 7. Test it
Open the booking form, get to the "Lead Traveler Contact" section, and
start typing in "Full Address" — you should see a dropdown of address
suggestions. Selecting one fills in the full formatted address.

## Notes
- Google's free monthly credit is generous for a small marketing site's
  booking volume, but keep an eye on **Billing → Reports** once live.
- The same key works for both sandbox/preview and production — restriction
  is by domain (step 5), not by "test" vs "live" mode like Stripe.
