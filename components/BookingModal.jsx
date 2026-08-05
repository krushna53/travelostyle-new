"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import TermsModal from "./TermsModal";

const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const TOTAL_STEPS = 8;

function depositFor(price) {
  const p = Number(price);
  if (p < 2499) return 500;
  if (p <= 4999) return 1000;
  return 1500;
}

// Journey dates come as free-text strings like "16 Nov 2026", "7 Sep 2026",
// or ranges like "Jun-Nov 2026" / "June to Dec 2026". Parse what we can;
// for a range, use the earliest possible month (day 1) as the conservative
// departure estimate.
function parseJourneyDate(str) {
  if (!str) return null;
  // Check range patterns ("Jun-Nov 2026", "June to Dec 2026") first — native
  // Date parsing of hyphenated month ranges is inconsistent across engines
  // and can silently pick the wrong month, so don't let it run on these.
  const rangeMatch = str.match(/([A-Za-z]+)\s*(?:-|–|to)\s*[A-Za-z]+\s+(\d{4})/);
  if (rangeMatch) {
    const [, month, year] = rangeMatch;
    const rangeDate = new Date(`${month} 1, ${year}`);
    if (!isNaN(rangeDate.getTime())) return rangeDate;
  }
  const direct = new Date(str);
  if (!isNaN(direct.getTime())) return direct;
  return null;
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const DEPOSIT_CUTOFF_DAYS = 90; // matches the Terms & Conditions final-payment window (3 months)

// Deposit is only offered when departure is safely more than 3 months out.
// If we can't confidently parse the date, default to requiring full
// payment rather than risk under-collecting close to departure.
function isDepositEligible(dateStr) {
  const departure = parseJourneyDate(dateStr);
  if (!departure) return false;
  const diffDays = (departure.getTime() - Date.now()) / MS_PER_DAY;
  return diffDays > DEPOSIT_CUTOFF_DAYS;
}

function emptyTraveler(type) {
  return {
    type,
    fullName: "",
    dob: "",
    gender: "Female",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
  };
}

function emptyEmergencyContact() {
  return { name: "", relationship: "", phone: "" };
}

export default function BookingModal({ journey, onClose }) {
  const [step, setStep] = useState(1);
  const [counts, setCounts] = useState({ adults: 1, children: 0, infants: 0 });
  const [travelers, setTravelers] = useState([emptyTraveler("Adult")]);
  const [lead, setLead] = useState({ phone: "", email: "", address1: "", address2: "", city: "", state: "", zip: "" });
  const [flexibleDates, setFlexibleDates] = useState("No");
  const [flights, setFlights] = useState({ departureCity: "", airline: "", cabin: "Economy", frequentFlyer: "" });
  const [meal, setMeal] = useState({ type: "No Preference", allergies: "" });
  const [transfers, setTransfers] = useState({ airport: "Yes", guide: "Yes", language: "" });
  const [visa, setVisa] = useState("Yes");
  const [insurance, setInsurance] = useState("Yes");
  const [emergencyContacts, setEmergencyContacts] = useState([emptyEmergencyContact()]);
  const [notes, setNotes] = useState({ occasion: "", medical: "", other: "" });
  const [declaration, setDeclaration] = useState({ checked: false, date: "", name: "" });
  const [payMode, setPayMode] = useState("deposit");
  const [showTerms, setShowTerms] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  const [paymentReady, setPaymentReady] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const stripeRef = useRef(null);
  const elementsRef = useRef(null);
  const paymentElRef = useRef(null);

  function resizeTravelers(prev, adults, children) {
    const total = adults + children;
    const next = [...prev];
    while (next.length < total) {
      next.push(emptyTraveler(next.length < adults ? "Adult" : "Child"));
    }
    while (next.length > total) {
      next.pop();
    }
    return next.map((t, i) => ({ ...t, type: i < adults ? "Adult" : "Child" }));
  }

  const travelerTotal = counts.adults + counts.children;
  const depositEligible = useMemo(() => isDepositEligible(journey.date), [journey.date]);
  // Only trust "deposit" once the departure date has actually qualified —
  // this avoids ever charging a deposit amount for a trip inside the
  // 90-day window, even if `payMode` state hasn't been touched yet.
  const effectivePayMode = depositEligible ? payMode : "full";

  const amountDue = useMemo(() => {
    const n = Math.max(travelerTotal, 1);
    const per = effectivePayMode === "deposit" ? depositFor(journey.price) : Number(journey.price);
    return per * n;
  }, [effectivePayMode, travelerTotal, journey.price]);

  function updateCount(type, delta) {
    setCounts((prev) => {
      const min = type === "adults" ? 1 : 0;
      const nextVal = Math.max(min, prev[type] + delta);
      const next = { ...prev, [type]: nextVal };
      if (type === "adults" || type === "children") {
        setTravelers((prevTravelers) => resizeTravelers(prevTravelers, next.adults, next.children));
      }
      return next;
    });
  }

  function updateTraveler(index, field, value) {
    setTravelers((prev) => prev.map((t, i) => (i === index ? { ...t, [field]: value } : t)));
  }

  function addEmergencyContact() {
    setEmergencyContacts((prev) => [...prev, emptyEmergencyContact()]);
  }
  function removeEmergencyContact(index) {
    setEmergencyContacts((prev) => prev.filter((_, i) => i !== index));
  }
  function updateEmergencyContact(index, field, value) {
    setEmergencyContacts((prev) => prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  }

  function validateStep() {
    setValidationMsg("");
    if (step === 2) {
      for (const t of travelers) {
        if (!t.fullName.trim() || !t.dob || !t.passportNumber.trim()) {
          setValidationMsg("Please complete Full Name, Date of Birth, and Passport Number for every traveler.");
          return false;
        }
      }
      if (
        !lead.phone.trim() ||
        !lead.email.trim() ||
        !lead.address1.trim() ||
        !lead.city.trim() ||
        !lead.state.trim() ||
        !lead.zip.trim()
      ) {
        setValidationMsg("Please provide the lead traveler's contact number, email, and address (line 1, city, state, zip).");
        return false;
      }
    }
    if (step === 5) {
      for (const c of emergencyContacts) {
        if (!c.phone.trim()) {
          setValidationMsg("Please provide a contact number for every emergency contact.");
          return false;
        }
      }
    }
    if (step === 6) {
      if (!declaration.checked) {
        setValidationMsg("Please confirm the declaration and accept the Terms & Conditions to continue.");
        return false;
      }
    }
    return true;
  }

  function next() {
    if (!validateStep()) return;
    if (step === TOTAL_STEPS) {
      onClose();
      return;
    }
    setStep((s) => s + 1);
  }

  const bookingEmailSentRef = useRef(false);
  async function submitBookingRequest(paymentIntentId, paymentStatus = "Paid") {
    if (bookingEmailSentRef.current) return;
    bookingEmailSentRef.current = true;
    try {
      await fetch("/api/create-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          journey: {
            title: journey.title,
            destinationsList: journey.destinationsList,
            location: journey.location,
            date: journey.date,
            duration: journey.duration,
            price: journey.price,
          },
          counts,
          travelers,
          lead,
          flexibleDates,
          flights,
          meal,
          transfers,
          visa,
          insurance,
          emergencyContacts,
          notes,
          declaration,
          payMode: effectivePayMode,
          amountDue,
          paymentStatus,
          paymentIntentId,
        }),
      });
    } catch (err) {
      // Non-blocking: the booking has already been paid for at this point,
      // so a failed notification shouldn't disrupt the customer's flow —
      // surfaced only in the console for now.
      console.error("Failed to send booking notification:", err);
      bookingEmailSentRef.current = false;
    }
  }
  function back() {
    setValidationMsg("");
    if (step > 1) setStep((s) => s - 1);
  }

  // ---- Stripe payment (step 8) ----
  useEffect(() => {
    if (step !== 8) return;
    let cancelled = false;

    async function loadStripeJs() {
      if (window.Stripe) return window.Stripe;
      await new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="https://js.stripe.com/v3/"]');
        if (existing) {
          existing.addEventListener("load", resolve);
          return;
        }
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/";
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
      return window.Stripe;
    }

    async function init() {
      setPaymentError("");
      setPaymentReady(false);
      try {
        if (!STRIPE_PUBLISHABLE_KEY) {
          throw new Error("Stripe publishable key not configured yet (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY). See STRIPE_SETUP.md.");
        }
        const StripeCtor = await loadStripeJs();
        if (cancelled) return;
        stripeRef.current = StripeCtor(STRIPE_PUBLISHABLE_KEY);

        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Math.round(amountDue * 100),
            currency: "usd",
            metadata: {
              tour: journey.title,
              travelers: String(travelerTotal),
              payMode: effectivePayMode,
              leadEmail: lead.email || "",
              leadName: travelers[0]?.fullName || declaration.name || "",
            },
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.clientSecret) {
          throw new Error(data.error || "Could not initialize payment.");
        }
        if (cancelled) return;
        elementsRef.current = stripeRef.current.elements({ clientSecret: data.clientSecret });
        const paymentElement = elementsRef.current.create("payment");
        paymentElement.mount("#booking-payment-element");
        paymentElRef.current = paymentElement;
        setPaymentReady(true);
      } catch (err) {
        setPaymentError(err.message);
      }
    }
    init();

    return () => {
      cancelled = true;
      if (paymentElRef.current) {
        paymentElRef.current.unmount?.();
        paymentElRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  async function handlePay() {
    if (!stripeRef.current || !elementsRef.current) return;
    setPayLoading(true);
    setPaymentError("");
    const { error, paymentIntent } = await stripeRef.current.confirmPayment({
      elements: elementsRef.current,
      confirmParams: { return_url: window.location.href },
      redirect: "if_required",
    });
    setPayLoading(false);
    if (error) {
      setPaymentError(error.message);
      return;
    }
    // Card payments resolve to "succeeded" immediately. ACH (us_bank_account)
    // resolves to "processing" here — the money hasn't actually cleared yet,
    // it can still fail days later, so don't tell the customer it's "Paid".
    // The /api/stripe-webhook route sends a separate follow-up once Stripe
    // confirms the ACH transfer has actually settled.
    if (paymentIntent?.status === "processing") {
      setPaymentProcessing(true);
      submitBookingRequest(paymentIntent?.id, "Processing (ACH — funds not yet cleared)");
    } else {
      setPaymentSuccess(true);
      submitBookingRequest(paymentIntent?.id, "Paid");
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-0 py-0 sm:px-4 sm:py-6">
        <button type="button" aria-label="Close booking backdrop" className="absolute inset-0 cursor-pointer" onClick={onClose} />
        <div
          role="dialog"
          aria-modal="true"
          className="relative z-10 flex h-dvh w-full flex-col overflow-hidden bg-white shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:h-auto sm:max-h-[92vh] sm:max-w-3xl sm:rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#e5e3f5] px-4 pb-4 pt-5 sm:px-7 sm:pt-6">
            <h3 className="text-lg font-semibold text-[#3a219a] sm:text-2xl">Book: {journey.title}</h3>
            <button type="button" onClick={onClose} aria-label="Close" className="flex h-9 w-9 items-center justify-center text-[#3a219a] hover:opacity-70">
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rotate-45 rounded bg-current" />
                <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 -rotate-45 rounded bg-current" />
              </span>
            </button>
          </div>

          {/* Progress */}
          <div className="flex gap-1.5 px-4 pt-4 sm:px-7">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-[#2C3078]" : "bg-[#e5e3f5]"}`} />
            ))}
          </div>

          <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-6">
            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <StepTitle n={1} title="Number of Travelers" sub="Tell us how many travelers are joining this journey." />
                <div className="flex flex-wrap gap-8">
                  <CounterField label="Adults (12+) *" value={counts.adults} onDec={() => updateCount("adults", -1)} onInc={() => updateCount("adults", 1)} />
                  <CounterField label="Children (2–11)" value={counts.children} onDec={() => updateCount("children", -1)} onInc={() => updateCount("children", 1)} />
                  <CounterField label="Infants (0–2)" value={counts.infants} onDec={() => updateCount("infants", -1)} onInc={() => updateCount("infants", 1)} />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <StepTitle n={2} title="Client & Travel Details" sub="One record per Adult/Child traveler. Passport details are required." />
                <div className="space-y-4">
                  {travelers.map((t, i) => (
                    <div key={i} className="rounded-lg bg-[#f6f5fc] p-4">
                      <p className="mb-3 text-sm font-semibold text-[#3a219a]">
                        Traveler {i + 1} ({t.type})
                      </p>
                      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-[#7772a8]">Client Details</p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <TextInput label="Full Name (as per passport) *" value={t.fullName} onChange={(v) => updateTraveler(i, "fullName", v)} />
                        <TextInput label="Date of Birth *" type="date" value={t.dob} onChange={(v) => updateTraveler(i, "dob", v)} />
                        <SelectInput
                          label="Gender"
                          value={t.gender}
                          onChange={(v) => updateTraveler(i, "gender", v)}
                          options={["Female", "Male", "Non-binary", "Prefer not to say"]}
                        />
                        <TextInput label="Nationality" value={t.nationality} onChange={(v) => updateTraveler(i, "nationality", v)} />
                      </div>
                      <p className="mb-1.5 mt-3 text-[11px] font-bold uppercase tracking-wide text-[#7772a8]">Travel Details</p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <TextInput label="Passport Number *" value={t.passportNumber} onChange={(v) => updateTraveler(i, "passportNumber", v)} />
                        <TextInput label="Passport Expiry Date" type="date" value={t.passportExpiry} onChange={(v) => updateTraveler(i, "passportExpiry", v)} />
                        <TextInput label="Travel Type" value="Escorted" readOnly />
                      </div>
                    </div>
                  ))}
                </div>

                <FieldsetBox title="Lead Traveler Contact" className="mt-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <TextInput label="Contact Number (WhatsApp preferred) *" value={lead.phone} onChange={(v) => setLead((p) => ({ ...p, phone: v }))} />
                    <TextInput label="Email Address *" type="email" value={lead.email} onChange={(v) => setLead((p) => ({ ...p, email: v }))} />
                    <div className="sm:col-span-2">
                      <TextInput label="Address Line 1 *" value={lead.address1} onChange={(v) => setLead((p) => ({ ...p, address1: v }))} />
                    </div>
                    <div className="sm:col-span-2">
                      <TextInput label="Address Line 2" value={lead.address2} onChange={(v) => setLead((p) => ({ ...p, address2: v }))} />
                    </div>
                    <TextInput label="City *" value={lead.city} onChange={(v) => setLead((p) => ({ ...p, city: v }))} />
                    <TextInput label="State *" value={lead.state} onChange={(v) => setLead((p) => ({ ...p, state: v }))} />
                    <TextInput label="Zip Code *" value={lead.zip} onChange={(v) => setLead((p) => ({ ...p, zip: v }))} />
                  </div>
                </FieldsetBox>

                <FieldsetBox title="Trip Travel Details" className="mt-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <TextInput label="Destination(s)" value={journey.destinationsList || journey.location} readOnly />
                    <TextInput label="Date of Departure" value={journey.date} readOnly />
                    <TextInput label="Duration" value={journey.duration} readOnly />
                    <SelectInput label="Flexible Dates" value={flexibleDates} onChange={setFlexibleDates} options={["No", "Yes"]} />
                  </div>
                </FieldsetBox>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <StepTitle n={3} title="Flights & Meal Preferences" />
                <FieldsetBox title="Flights">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <TextInput label="Departure City" value={flights.departureCity} onChange={(v) => setFlights((p) => ({ ...p, departureCity: v }))} />
                    <TextInput label="Preferred Airline" value={flights.airline} onChange={(v) => setFlights((p) => ({ ...p, airline: v }))} />
                    <SelectInput label="Cabin Class" value={flights.cabin} onChange={(v) => setFlights((p) => ({ ...p, cabin: v }))} options={["Economy", "Premium", "Business Class"]} />
                    <TextInput label="Frequent Flyer Details" value={flights.frequentFlyer} onChange={(v) => setFlights((p) => ({ ...p, frequentFlyer: v }))} />
                  </div>
                </FieldsetBox>
                <FieldsetBox title="Meal Preferences" className="mt-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <SelectInput
                      label="Meal Type"
                      value={meal.type}
                      onChange={(v) => setMeal((p) => ({ ...p, type: v }))}
                      options={["No Preference", "Vegetarian", "Vegan", "Gluten-Free", "Kosher", "Halal", "Jain"]}
                    />
                    <TextInput label="Food Allergies / Restrictions" value={meal.allergies} onChange={(v) => setMeal((p) => ({ ...p, allergies: v }))} />
                  </div>
                </FieldsetBox>
                <FieldsetBox title="Transfers & Services" className="mt-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <SelectInput label="Airport Transfers Required" value={transfers.airport} onChange={(v) => setTransfers((p) => ({ ...p, airport: v }))} options={["Yes", "No"]} />
                    <SelectInput label="Guide Required" value={transfers.guide} onChange={(v) => setTransfers((p) => ({ ...p, guide: v }))} options={["Yes", "No"]} />
                    <div className="sm:col-span-2">
                      <TextInput label="Language Preference" value={transfers.language} onChange={(v) => setTransfers((p) => ({ ...p, language: v }))} />
                    </div>
                  </div>
                </FieldsetBox>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <StepTitle n={4} title="Visa & Travel Insurance" />
                <FieldsetBox title="Visa">
                  <RadioRow name="visa" value={visa} onChange={setVisa} />
                  <p className="mt-2 text-xs leading-5 text-[#7772a8]">
                    For Visa: Guests are responsible for obtaining all required visas and travel documents for their trip.
                    TravelOStyle will assist with guidance, but final approval is solely at the discretion of the respective
                    consulates and immigration authorities.
                  </p>
                </FieldsetBox>
                <FieldsetBox title="Travel Insurance" className="mt-4">
                  <RadioRow name="insurance" value={insurance} onChange={setInsurance} />
                  <p className="mt-2 text-xs leading-5 text-[#7772a8]">
                    Travel insurance is highly recommended for all bookings. It is the client&rsquo;s responsibility to
                    purchase comprehensive travel insurance that covers cancellation, medical emergencies, baggage loss, and
                    other unforeseen events. TravelOStyle is not responsible for any costs incurred due to lack of travel
                    insurance.
                  </p>
                </FieldsetBox>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div>
                <StepTitle n={5} title="Emergency Contact" sub="Add one or more emergency contacts." />
                <div className="space-y-3">
                  {emergencyContacts.map((c, i) => (
                    <div key={i} className="relative rounded-lg bg-[#f6f5fc] p-4">
                      {emergencyContacts.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEmergencyContact(i)}
                          className="absolute right-3 top-3 text-xs font-semibold text-red-600"
                        >
                          Remove
                        </button>
                      )}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <TextInput label="Name" value={c.name} onChange={(v) => updateEmergencyContact(i, "name", v)} />
                        <TextInput label="Relationship" value={c.relationship} onChange={(v) => updateEmergencyContact(i, "relationship", v)} />
                        <div className="sm:col-span-2">
                          <TextInput label="Contact Number *" value={c.phone} onChange={(v) => updateEmergencyContact(i, "phone", v)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addEmergencyContact}
                  className="mt-3 w-full rounded-lg border-2 border-dashed border-[#4b2aa3] py-2.5 text-sm font-semibold text-[#3a219a]"
                >
                  + Add Another Contact
                </button>
              </div>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <div>
                <StepTitle n={6} title="Additional Notes & Declaration" />
                <FieldsetBox title="Additional Notes">
                  <div className="space-y-3">
                    <TextInput label="Special Occasions" value={notes.occasion} onChange={(v) => setNotes((p) => ({ ...p, occasion: v }))} />
                    <TextInput label="Medical / Mobility Considerations" value={notes.medical} onChange={(v) => setNotes((p) => ({ ...p, medical: v }))} />
                    <TextAreaInput label="Other Remarks" value={notes.other} onChange={(v) => setNotes((p) => ({ ...p, other: v }))} />
                  </div>
                </FieldsetBox>

                <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#f6f5fc] p-4">
                  <input
                    type="checkbox"
                    checked={declaration.checked}
                    onChange={(e) => setDeclaration((p) => ({ ...p, checked: e.target.checked }))}
                    className="mt-0.5 h-5 w-5 rounded-sm border-2 border-[#4b2aa3] accent-[#4b2aa3]"
                  />
                  <span className="text-[13px] leading-5 text-[#4d4a7e]">
                    I confirm that the above details are accurate and authorize TravelOStyle to use this information for
                    travel planning and bookings. I have read and agree to the{" "}
                    <button type="button" onClick={() => setShowTerms(true)} className="font-semibold text-[#3a219a] underline">
                      Terms and Conditions
                    </button>
                    .
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <TextInput label="Date" type="date" value={declaration.date} onChange={(v) => setDeclaration((p) => ({ ...p, date: v }))} />
                  <TextInput label="Name" value={declaration.name} onChange={(v) => setDeclaration((p) => ({ ...p, name: v }))} />
                </div>
              </div>
            )}

            {/* STEP 7 */}
            {step === 7 && (
              <div>
                <StepTitle n={7} title="Review Your Booking" />
                <div className="overflow-hidden rounded-lg border border-[#e5e3f5]">
                  <div className="relative h-40 w-full">
                    <Image src={journey.image} alt={journey.title} fill className="object-cover" />
                  </div>
                  <div className="space-y-1 p-4 text-[13px]">
                    <p className="mb-1 text-base font-semibold text-[#3a219a]">{journey.title}</p>
                    <ReviewRow label="Destinations" value={journey.destinationsList || journey.location} />
                    <ReviewRow label="Departure" value={journey.date} />
                    <ReviewRow label="Duration" value={journey.duration} />
                    <ReviewRow label="Travelers" value={`${counts.adults} Adult(s), ${counts.children} Child(ren), ${counts.infants} Infant(s)`} />
                    <ReviewRow label="Price per person" value={`$${journey.price}`} />
                  </div>
                </div>

                <p className="mb-2 mt-4 text-sm text-[#7772a8]">
                  {depositEligible
                    ? "Choose how much you’d like to pay now."
                    : "Departure is within 90 days, so full payment is required now."}
                </p>
                <div className="flex gap-2">
                  {depositEligible && (
                    <button
                      type="button"
                      onClick={() => setPayMode("deposit")}
                      className={`flex-1 rounded-lg border-2 border-[#2C3078] py-2 text-sm font-semibold ${effectivePayMode === "deposit" ? "bg-[#2C3078] text-white" : "text-[#2C3078]"}`}
                    >
                      Pay Deposit Now
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setPayMode("full")}
                    className={`flex-1 rounded-lg border-2 border-[#2C3078] py-2 text-sm font-semibold ${effectivePayMode === "full" ? "bg-[#2C3078] text-white" : "text-[#2C3078]"}`}
                  >
                    Pay Full Amount
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-[#2C3078] px-4 py-3 text-white">
                  <span className="text-sm">Amount Due Now</span>
                  <span className="text-xl font-bold">${amountDue.toLocaleString()}</span>
                </div>
              </div>
            )}

            {/* STEP 8 */}
            {step === 8 && (
              <div>
                <StepTitle n={8} title="Secure Payment" sub="Pay by card or US bank transfer (ACH), powered by Stripe." />
                {paymentSuccess ? (
                  <div className="rounded-lg border-2 border-green-600 bg-green-50 p-4 text-sm text-green-800">
                    Payment successful! A confirmation email will be sent to you shortly. Thank you for booking with
                    TravelOStyle.
                  </div>
                ) : paymentProcessing ? (
                  <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-4 text-sm text-amber-800">
                    Your ACH bank transfer has been submitted and is processing — this typically takes a few business
                    days to clear. We&rsquo;ve emailed you a copy of your booking details, and you&rsquo;ll get a
                    separate confirmation once the payment has fully cleared.
                  </div>
                ) : (
                  <>
                    <div id="booking-payment-element" className="min-h-[120px]" />
                    {!paymentReady && !paymentError && (
                      <p className="text-sm text-[#7772a8]">Loading secure payment form…</p>
                    )}
                    {paymentError && (
                      <p className="mt-2 text-sm text-red-600">{paymentError}</p>
                    )}
                  </>
                )}
              </div>
            )}

            {validationMsg && <p className="mt-4 text-sm font-medium text-red-600">{validationMsg}</p>}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#e5e3f5] px-4 py-4 sm:px-7">
            <button
              type="button"
              onClick={back}
              className={`text-sm font-semibold text-[#3a219a] ${step === 1 ? "invisible" : ""}`}
            >
              Back
            </button>
            {step === 8 && !paymentSuccess && !paymentProcessing ? (
              <Button
                type="button"
                onClick={handlePay}
                disabled={!paymentReady || payLoading}
                className="rounded-full bg-[#2C3078] px-6 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-[#2C3078]/60"
              >
                {payLoading ? "Processing…" : "Pay Now"}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={paymentSuccess || paymentProcessing ? onClose : next}
                className="rounded-full bg-[#2C3078] px-6 py-2 font-medium text-white"
              >
                {paymentSuccess || paymentProcessing
                  ? "Close"
                  : step === TOTAL_STEPS
                    ? "Done"
                    : step === 7
                      ? "Proceed to Payment"
                      : "Continue"}
              </Button>
            )}
          </div>
        </div>
      </div>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </>
  );
}

/* ---------- small presentational helpers ---------- */

function StepTitle({ n, title, sub }) {
  return (
    <div className="mb-4">
      <p className="text-base font-bold text-[#3a219a]">
        {n}. {title}
      </p>
      {sub && <p className="text-xs text-[#7772a8]">{sub}</p>}
    </div>
  );
}

function FieldsetBox({ title, children, className = "" }) {
  return (
    <div className={`rounded-lg border-2 border-[#e5e3f5] p-4 ${className}`}>
      <p className="mb-3 text-sm font-bold text-[#3a219a]">{title}</p>
      {children}
    </div>
  );
}

function TextInput({ label, value, onChange, type = "text", readOnly = false }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-[#3a219a]">{label}</span>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={`w-full rounded-md border-2 px-3 py-2 text-sm outline-none ${
          readOnly ? "border-[#e5e3f5] bg-[#f1f1f6] text-[#7772a8]" : "border-[#c9c4ea] bg-white text-[#3a219a]"
        }`}
      />
    </label>
  );
}

// Note: an earlier version of this field used Google Places Autocomplete
// (see GOOGLE_PLACES_SETUP.md). For now the address is plain structured
// fields (Address Line 1/2, City, State, Zip) below — simpler, no API key
// required. Re-introduce the autocomplete component later if needed.

function TextAreaInput({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-[#3a219a]">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full rounded-md border-2 border-[#c9c4ea] bg-white px-3 py-2 text-sm text-[#3a219a] outline-none"
      />
    </label>
  );
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-[#3a219a]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-2 border-[#c9c4ea] bg-white px-3 py-2 text-sm text-[#3a219a] outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function CounterField({ label, value, onInc, onDec }) {
  return (
    <div>
      <span className="mb-2 block text-xs font-semibold text-[#3a219a]">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onDec} className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[#2C3078] font-bold text-[#2C3078]">
          −
        </button>
        <span className="min-w-[20px] text-center font-semibold text-[#3a219a]">{value}</span>
        <button type="button" onClick={onInc} className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[#2C3078] font-bold text-[#2C3078]">
          +
        </button>
      </div>
    </div>
  );
}

function RadioRow({ name, value, onChange }) {
  return (
    <div className="flex gap-6">
      {["Yes", "No"].map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm text-[#3a219a]">
          <input type="radio" name={name} checked={value === opt} onChange={() => onChange(opt)} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-dashed border-[#e5e3f5] py-1.5 last:border-none">
      <span className="text-[#7772a8]">{label}</span>
      <span className="font-medium text-[#3a219a]">{value}</span>
    </div>
  );
}
