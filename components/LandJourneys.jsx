"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const journeys = [
  {
    id: 1,
    title: "Spirit of Vietnam & Cambodia",
    shortDescription:
      "Vietnam: Vietnam is a place where emerald landscapes, ancient traditions, and warm hospitality come together in perfect harmony.",
    description:
      "Vietnam: Vietnam is a place where emerald landscapes, ancient traditions, and warm hospitality come together in perfect harmony. From the tranquil waters of Ha Long Bay to the lantern-lit streets of Hoi An and the vibrant energy of Hanoi and Ho Chi Minh City, every region offers its own rhythm and beauty. Rich history, flavorful cuisine, and breathtaking scenery make Vietnam a journey that feels both peaceful and deeply inspiring.  Cambodia: Cambodia is a land shaped by ancient glory and heartfelt warmth. The majestic temples of Angkor rise from the jungle like a living testament to the country's rich past, while its villages, rivers, and bustling markets reveal a culture full of resilience and grace. From sunrise at Angkor Wat to the gentle flow of the Mekong, Cambodia offers a journey filled with history, spirituality, and unforgettable moments.",
    image: "/LandJourney/Varanasi - Ganga Aarti - 1.jpg",
    duration: "12 Nights | 13 Days",
    date: "Nov 2026",
    location: "6 Destinations",
    price: "2499",
  },
  {
    id: 2,
    title: "American Icons - East to West Signature Journey",
    shortDescription:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure.",
    description:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure. From glittering skylines and world-famous attractions to serene national parks and charming small towns, every region offers its own rhythm and personality. Whether you're exploring historic East Coast capitals, the cinematic beauty of the West Coast, or the natural wonders in between, the USA delivers a journey filled with energy, culture, and unforgettable experiences.",
    image: "/LandJourney/USA East & West Coast Image - 1.png",
    duration: "12 Nights | 13 Days",
    date: "Jun-Nov 2026",
    location: "12 Destinations",
    price: "4199",
  },
  {
    id: 3,
    title: "USA - West Coast Wonders",
    shortDescription:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure.",
    description:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure. From glittering skylines and world-famous attractions to serene national parks and charming small towns, every region offers its own rhythm and personality. Whether you're exploring historic East Coast capitals, the cinematic beauty of the West Coast, or the natural wonders in between, the USA delivers a journey filled with energy, culture, and unforgettable experiences.",
    image: "/LandJourney/USA West Coast Image - 1.jpg",
    duration: "6 Nights | 7 Days",
    date: "Jun-Nov 2026",
    location: "5 Destinations",
    price: "2249",
  },
  {
    id: 4,
    title: "USA - East Coast Icons",
    shortDescription:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure.",
    description:
      "The United States is a tapestry of vibrant cities, breathtaking landscapes, and iconic landmarks that define adventure. From glittering skylines and world-famous attractions to serene national parks and charming small towns, every region offers its own rhythm and personality. Whether you're exploring historic East Coast capitals, the cinematic beauty of the West Coast, or the natural wonders in between, the USA delivers a journey filled with energy, culture, and unforgettable experiences.",
    image: "/LandJourney/USA East Coast Image - 1.png",
    duration: "6 Nights | 7 Days",
    date: "Jun-Nov 2026",
    location: "5 Destinations",
    price: "2299",
  },
];

const MODAL_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-iRyvd470V8eXmni3neMj8kQGUDHFsVu8udr0DDo94rUDwCDb-R1MsQbXL9h_epm5Ng/exec";

function JourneyCard({ journey, onOpen }) {
  return (
    <div
      className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col relative"
      style={{
        maskImage:
          "radial-gradient(circle at left 220px, transparent 15px, black 16px), radial-gradient(circle at right 220px, transparent 15px, black 16px)",
        WebkitMaskImage:
          "radial-gradient(circle at left 220px, transparent 15px, black 16px), radial-gradient(circle at right 220px, transparent 15px, black 16px)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <div className="px-4 pt-4 pb-0">
        <Image
          src={journey.image}
          alt="travel"
          width={340}
          height={200}
          className="w-full object-cover rounded-lg"
          style={{ height: 180 }}
        />
      </div>
      <div className="px-6 my-3 mt-5">
        <Image
          src="/zig_zag_line.svg"
          alt=""
          width={260}
          height={10}
          className="w-full"
        />
      </div>
      <div className="px-6 pb-5 pt-2 flex flex-col grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2B3481] mb-3 line-clamp-1">
          {journey.title}
        </h3>
        <p className="text-sm text-[#2B3481] font-light leading-relaxed mb-6 line-clamp-4 relative">
          {journey.shortDescription}
        </p>

        <div className="text-sm text-[#2B3481] mb-4">
          <p>{journey.duration}</p>
          <p>{journey.location}</p>
        </div>

        <div>
          <span className="border border-[#2B3481] text-[#2B3481] text-xs px-2 py-1 rounded">
            {journey.date}
          </span>
        </div>

        <div className="my-4 w-full">
          <Image
            src="/zig_zag_line.svg"
            alt=""
            width={260}
            height={10}
            className="w-full"
          />
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-[10px] text-[#2B3481]">from</p>
            <p className="text-lg font-medium text-[#2B3481]">
              ${journey.price}
              <span className="text-xs font-light text-[#2B3481]">
                */person
              </span>
            </p>
            <p className="text-[9px] text-[#2B3481] italic">
              double occupancy*
            </p>
          </div>

          <Button
            type="button"
            onClick={onOpen}
            className="rounded-full bg-[#2C3078] text-xl pt-1 px-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-[#2C3078]/70"
            size="md"
          >
            Get Details
          </Button>
        </div>
      </div>

      {/* Dotted bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-2 flex gap-1 justify-center overflow-hidden translate-y-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-10 bg-[#f2f2f2] rounded-full shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "prev" ? "Previous land journey" : "Next land journey"
      }
      className=""
    >
      <Image
        src="/Arrow_right.svg"
        className={`w-12 h-12 ${direction === "prev" ? "" : "rotate-180"} hidden sm:block`}
        alt={direction === "prev" ? "Previous" : "Next"}
        width={16}
        height={16}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-move-left-icon lucide-move-left ${direction === "prev" ? "" : "rotate-180"} block sm:hidden`}
      >
        <path d="M6 8L2 12L6 16" />
        <path d="M2 12H22" />
      </svg>
    </button>
  );
}

function JourneyDetailsModal({
  journey,
  onClose,
  adults,
  children,
  isSubmitting,
  submitStatus,
  setAdults,
  setChildren,
  updateCount,
  onSubmit,
}) {
  if (!journey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-0 py-0 sm:px-4 sm:py-6">
      <button
        type="button"
        aria-label="Close modal backdrop"
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="journey-details-title"
        className="relative z-10 flex h-dvh w-full flex-col overflow-hidden bg-white shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:rounded-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between px-4 pb-0 pt-5 sm:px-7 sm:pt-6">
          <h3
            id="journey-details-title"
            className="text-[29px] font-semibold tracking-tight text-[#3a219a] sm:text-[22px] md:text-[34px]"
          >
            Inquire With Us
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-10 w-10 items-center justify-center text-[#3a219a] transition hover:opacity-70 cursor-pointer"
          >
            <span className="relative block h-6 w-6">
              <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rotate-45 rounded bg-current" />
              <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 -rotate-45 rounded bg-current" />
            </span>
          </button>
        </div>

        <div className="overflow-y-auto px-4 pb-5 pt-4 sm:px-7 sm:pb-7 sm:pt-5">
          <div className="rounded-[10px] bg-[#f1f1fb] p-3 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div
                className="relative overflow-hidden rounded-sm shrink-0"
                style={{ width: 122, height: 88 }}
              >
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1.5 text-[#3a219a] sm:py-1">
                <p className="text-[13px] sm:text-[15px]">
                  <span className="font-semibold">Trip Name:</span>{" "}
                  <span className="font-normal text-[#4d4a7e]">
                    {journey.title}
                  </span>
                </p>
                <p className="text-[13px] leading-snug sm:text-[15px]">
                  <span className="font-semibold">Duration:</span>{" "}
                  <span className="npfont-normal text-[#4d4a7e]">
                    {journey.duration}
                  </span>
                </p>
                <p className="text-[13px] leading-snug sm:text-[15px]">
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="npfont-normal text-[#4d4a7e]">
                    {journey.location}
                  </span>
                </p>
                <p className="text-[13px] leading-snug sm:text-[15px]">
                  <span className="font-semibold">Price:</span>{" "}
                  <span className="font-normal text-[#4d4a7e]">
                    ${journey.price}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[10px] bg-[#f1f1fb] p-3 sm:p-4">
            <p className="mb-2 text-[13px] font-semibold text-[#3a219a] sm:text-[15px]">
              Journey Description
            </p>
            <div className="max-h-[22vh] overflow-y-auto pr-2 text-[13px] leading-6 text-[#4d4a7e] sm:max-h-[26vh] sm:text-[14px]">
              {journey.description}
            </div>
          </div>

          <form className="mt-5 sm:mt-8" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8">
              <Field
                name="firstName"
                label="First Name*"
                placeholder="Your First Name"
              />
              <Field
                name="lastName"
                label="Last Name*"
                placeholder="Your Last Name"
              />
              <Field
                name="title"
                label="Title*"
                placeholder="Select Your Title"
                select
              />
              <Field
                name="phone"
                label="Number/ WhatsApp"
                placeholder="+1773 983 8067"
              />
              <div className="sm:col-span-2">
                <Field
                  name="email"
                  label="Email*"
                  placeholder="Enter Your Email ID"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-7">
              <p className="mb-3 text-[15px] text-[#3a219a] sm:text-[16px]">
                No. of Guests*
              </p>
              <div className="flex flex-wrap items-center gap-5 text-[14px] text-[#3a219a] font-light sm:gap-6">
                <Counter
                  label="Adults"
                  value={adults}
                  onDecrement={() => updateCount(setAdults, adults - 1)}
                  onIncrement={() => updateCount(setAdults, adults + 1)}
                />
                <Counter
                  label="Children"
                  value={children}
                  onDecrement={() => updateCount(setChildren, children - 1)}
                  onIncrement={() => updateCount(setChildren, children + 1)}
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-7">
              <label className="mb-3 block text-[15px] text-[#3a219a] sm:text-[16px]">
                Your Message*
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Do you have questions or considerations that you would like us to know?"
                className="w-full rounded-lg border-2 border-[#4b2aa3] bg-white px-3 py-3 text-[13px] leading-6 text-[#6d68a5] outline-none placeholder:text-[#b4afd8] sm:px-4 sm:py-3.5"
              />
            </div>

            <div className="mt-6 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
              <label
                className="flex items-start gap-3 text-[12px] leading-5 text-[#5c5a88] sm:text-[13px]"
                style={{ maxWidth: 310 }}
              >
                <input
                  type="checkbox"
                  className="mt-0.5 h-6 w-6 md:h-8 md:w-8 rounded-sm border-2 border-[#4b2aa3] accent-[#4b2aa3]"
                />
                <span>
                  I agree to be contacted by TravelOStyle regarding my inquiry.
                </span>
              </label>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#2C3078] text-xl py-1 px-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-[#2C3078]/70"
              >
                <span className="sm:hidden">
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </span>
                <span className="hidden sm:inline">
                  {isSubmitting ? "Sending..." : "Get Details"}
                </span>
              </Button>
            </div>
            {submitStatus && (
              <p className="mt-4 text-[13px] font-medium text-[#3a219a]">
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ name, label, placeholder, select = false }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[15px] text-[#3a219a] sm:text-[16px]">
        {label}
      </span>
      <div className="relative">
        {select ? (
          <>
            <select
              name={name}
              className="w-full appearance-none border-0 border-b-2 border-[#4b2aa3] bg-transparent pr-7 text-[13px] text-[#a29acc] outline-none sm:text-[14px]"
            >
              <option value="">{placeholder}</option>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
              <option>Dr</option>
            </select>
            <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[#4b2aa3]">
              ▼
            </span>
          </>
        ) : (
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            className="w-full border-0 border-b-2 border-[#4b2aa3] bg-transparent text-[13px] text-[#a29acc] outline-none placeholder:text-[#a29acc] sm:text-[14px]"
          />
        )}
      </div>
    </label>
  );
}

function Counter({ label, value, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-[13px] sm:text-[14px]" style={{ minWidth: 54 }}>
        {label}
      </span>
      <button
        type="button"
        onClick={onDecrement}
        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        -
      </button>
      <span
        className="text-center text-[13px] sm:text-[14px]"
        style={{ minWidth: 10 }}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        +
      </button>
    </div>
  );
}

export default function LandJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const update = () => setCols(window.innerWidth <= 1750 ? 2 : 3);

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + journeys.length) % journeys.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % journeys.length);

  function openJourneyModal(journey) {
    setSelectedJourney(journey);
  }

  function closeJourneyModal() {
    setSelectedJourney(null);
    setSubmitStatus("");
    setIsSubmitting(false);
    setAdults(0);
    setChildren(0);
  }

  function updateCount(setter, nextValue) {
    setter(Math.max(0, nextValue));
  }

  useEffect(() => {
    if (!submitStatus) return;
    const id = setTimeout(() => setSubmitStatus(""), 5000);
    return () => clearTimeout(id);
  }, [submitStatus]);

  async function handleModalSubmit(event, journey) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Checkbox for "agree" (terms)
    const agreeCheckbox = event.currentTarget.querySelector(
      'input[type="checkbox"]',
    );
    const agree = agreeCheckbox ? agreeCheckbox.checked : false;

    // Compose guests string as "X Adults, Y Children"
    const guests = `${adults || 0} Adults${children > 0 ? ", " + children + " Children" : ""}`;

    // Map journey fields to backend expectations
    const payload = {
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
      title: formData.get("title") || "",
      phone: formData.get("phone") || "",
      email: formData.get("email") || "",
      destination: journey?.title ?? "",
      guests,
      duration: journey?.duration
        ? journey.duration.replace(/\s*\|.*/, "")
        : "", // e.g. "7 Days"
      month: journey?.date ?? "",
      flexibility: "", // No field in UI, leave blank
      message: formData.get("message") || "",
      agree,
      source: "modal",
    };
    setIsSubmitting(true);
    setSubmitStatus("");
    try {
      await fetch(MODAL_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Modal submit error:", error);
    } finally {
      try {
        event.currentTarget.reset();
      } catch (e) {}
      setAdults(0);
      setChildren(0);
      setIsSubmitting(false);
      setSubmitStatus("Thank you. Your inquiry has been sent.");
      closeJourneyModal();
    }
  }

  // 3 visible cards starting from currentIndex, wrapping around
  const visibleJourneys = Array.from(
    { length: cols },
    (_, offset) => journeys[(currentIndex + offset) % journeys.length],
  );

  return (
    <>
      <section
        id="land-journeys"
        className="bg-[#f2f2f2] py-14 px-4 sm:py-20 sm:px-6 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left"
      >
        <div className="mx-auto max-w-[85.2vw]">
          {/* Header */}
          <div className="flex flex-col items-center mb-10 sm:mb-16">
            <h2 className="text-2xl tracking-[5%] sm:text-3xl font-semibold text-[#2B3481] uppercase">
              Land Journeys
            </h2>
          </div>

          {/* Mobile: single card with centered arrows below */}
          <div className="sm:hidden">
            <div
              key={currentIndex}
              className="transition-all duration-500 ease-in-out"
            >
              <JourneyCard
                journey={journeys[currentIndex]}
                onOpen={() => openJourneyModal(journeys[currentIndex])}
              />
            </div>
            <div className="mt-6 flex items-center justify-between sm:justify-center gap-6">
              <NavButton direction="prev" onClick={handlePrev} />

              <NavButton direction="next" onClick={handleNext} />
            </div>
          </div>

          {/* Desktop: arrows flanking the 3-column grid, vertically centered */}
          <div className="hidden sm:grid grid-cols-[100px_1fr_100px] items-center">
            <div className="flex justify-center">
              <NavButton direction="prev" onClick={handlePrev} />
            </div>

            <div
              className={`grid gap-10 ${
                cols === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {visibleJourneys.map((journey, index) => (
                <JourneyCard
                  key={`${currentIndex}-${index}`}
                  journey={journey}
                  onOpen={() => openJourneyModal(journey)}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <NavButton direction="next" onClick={handleNext} />
            </div>
          </div>
        </div>
      </section>

      {selectedJourney ? (
        <JourneyDetailsModal
          journey={selectedJourney}
          onClose={closeJourneyModal}
          adults={adults}
          children={children}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          setAdults={setAdults}
          setChildren={setChildren}
          updateCount={updateCount}
          onSubmit={(event) => handleModalSubmit(event, selectedJourney)}
        />
      ) : null}

      {submitStatus ? (
        <div
          role="status"
          className={`fixed right-6 top-6 z-50 rounded-md px-4 py-2 text-sm font-medium shadow-lg ${
            submitStatus.toLowerCase().includes("unable")
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {submitStatus}
        </div>
      ) : null}
    </>
  );
}
