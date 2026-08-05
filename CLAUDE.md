# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install deps
npm run dev      # start dev server (Next.js + Turbopack), http://localhost:3000
npm run build    # production build (Turbopack)
npm run start    # run the production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

To lint a single file: `npx eslint path/to/file.jsx`.

## Environment variables

Set these in `.env.local` for local dev, and in the hosting provider's environment settings for
deploys (this project is set up to deploy to Netlify, using Next.js on Netlify's Next runtime —
`app/api/*` routes become serverless functions automatically, no extra Netlify config needed).

```
SMTP_HOST / SMTP_PORT / SMTP_EMAIL / SMTP_PASSWORD / EMAIL_TO   # nodemailer (Office365 SMTP)
NEXT_PUBLIC_SCRIPT_URL          # Google Apps Script endpoint, also used for inquiry submissions
STRIPE_SECRET_KEY               # server-side only, never expose
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

See `STRIPE_SETUP.md` for the full Stripe configuration walkthrough (enabling ACH, webhooks, going live).

## Architecture

This is a single-page marketing/booking site built with Next.js App Router. `app/page.tsx` renders
one component, `HeroTravelSection`, which composes the entire page by importing and stacking all
the section components in order (`Navbar`, hero, `FeaturesBar`, `CruiseJourneys`, `LandJourneys`,
`WhereTravelStyle`, `HowItWorks`, `ValuesSection`, `Fqa`, `CollaborateSection`, `TravelFom`,
`FooterSection`). Individual sections live in `components/` as client components (`"use client"`)
since most of them carry local UI state (carousels, modals, forms). There's no routing beyond the
single page — everything is anchor-scrolled sections.

Styling is Tailwind v4 (via `@tailwindcss/postcss`), configured in `tailwind.config.js` with a
custom `Nohemi` sans font (self-hosted under `public/Nohemi-Font/`) and a `Taprom` display font
loaded from Google Fonts in `app/layout.tsx`. `@heroui/react` supplies some primitives (`Button`,
etc.) layered under Tailwind classes.

### Journey data + booking flow

`components/LandJourneys.jsx` holds a hardcoded `journeys` array (title, description, image path,
duration, date, location, price, optional `destinationsList`/`bookingsOpen`) — this is the source
of truth for what cards render; there is no CMS or database backing it. Each card exposes two
actions:

- **Get Details** → opens `JourneyDetailsModal` (defined inline in the same file), a simple inquiry
  form that posts to both `NEXT_PUBLIC_SCRIPT_URL` (Google Apps Script/Sheet, `no-cors`) and
  `app/api/contact/route.js` (nodemailer email to `EMAIL_TO`).
- **Book Now** → opens `components/BookingModal.jsx`, an 8-step booking form (traveler counts →
  per-traveler passport/client details → flights/meals → visa/insurance → emergency contacts →
  notes/declaration+terms → review → Stripe payment). Key behaviors to know before touching it:
  - Traveler detail cards are regenerated to match adult/child counts inside the `setCounts`
    updater itself (see `resizeTravelers`), not in a `useEffect` — this project's eslint config
    enforces the `react-hooks/set-state-in-effect` rule, so avoid calling `setState` synchronously
    inside `useEffect` bodies; derive values instead (see `effectivePayMode` for the same pattern).
  - "Pay Deposit Now" is only offered when the parsed departure date is >90 days out
    (`isDepositEligible`/`parseJourneyDate`); date strings from the journey data can be single
    dates ("16 Nov 2026") or ranges ("Jun-Nov 2026"), and the range regex must be checked *before*
    falling back to `new Date(str)` — native Date parsing of hyphenated ranges is unreliable and
    will silently pick the wrong month otherwise.
  - Stripe's Payment Element (Card + ACH) is loaded via the `https://js.stripe.com/v3/` script tag
    at runtime (not the `@stripe/stripe-js` npm package), mounted against a PaymentIntent created
    by `app/api/create-payment-intent/route.js`.
  - On advancing from the Review step, `submitBookingRequest()` fires (once, guarded by a ref) a
    POST to `app/api/create-booking/route.js`, which builds a PDF via `lib/generateBookingPdf.js`
    (pdfkit) and emails it as an attachment to both `EMAIL_TO` and the lead traveler.
  - `pdfkit`/`fontkit` must stay listed in `next.config.ts`'s `serverExternalPackages` — Turbopack's
    bundler otherwise fails on fontkit's compiled output (`applyDecoratedDescriptor` export
    mismatch with newer `@swc/helpers`). If bundling pdfkit ever gets removed from that list, this
    build error will resurface.
- `components/TermsModal.jsx` is static Terms & Conditions content (sourced from the business's
  T&Cs doc), linked from the Declaration step's checkbox.

There is currently no database — booking submissions only exist as the generated PDF/email, they
are not persisted anywhere. A Firestore + Firebase Storage integration for persisting bookings is
planned but not yet implemented.
