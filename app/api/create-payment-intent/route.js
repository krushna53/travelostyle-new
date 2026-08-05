import Stripe from "stripe";

// The Stripe SECRET key must only ever live server-side, as an environment
// variable (STRIPE_SECRET_KEY) — never in client code or chat.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json(
        { error: "Stripe is not configured yet. See STRIPE_SETUP.md." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const amount = Math.round(Number(body.amount));
    const currency = body.currency || "usd";
    const metadata = body.metadata || {};

    if (!amount || amount < 50) {
      return Response.json({ error: "Invalid amount." }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      // Offers Card + US bank account (ACH) automatically, as long as
      // ACH Direct Debit is enabled in the Stripe Dashboard.
      automatic_payment_methods: { enabled: true },
      metadata,
    });

    return Response.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("create-payment-intent error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
