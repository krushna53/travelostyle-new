"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const cruises = [
  {
    title: "Royal Caribbean Cruises",
    description:
      "Royal Caribbean suits travellers who want a lot from a cruise — a wide range of destinations, activities, and price points, all in one place.",
    image: "/CruiseJourneys/Royal_Caribbean.jpg",
    link: "https://www.royalcaribbean.com",
    exploreLabel: "Explore Royal Caribbean Cruises",
  },
  {
    title: "Princess Cruises",
    description:
      "Princess ships are designed to hold your attention between ports as much as at them. Dining that goes beyond the expected, comfortable amenities, and a pace that lets you settle into the voyage.",
    image: "/CruiseJourneys/Princess_Cruise.jpg",
    link: "https://www.princess.com",
    exploreLabel: "Explore Princess Cruises",
  },
  {
    title: "Oceania Cruises",
    description:
      "Oceania's routes are built around depth of destination — more time ashore, more cities, more of the world actually experienced.",
    image: "/CruiseJourneys/Oceania_Cruise.jpg",
    link: "https://www.oceaniacruises.com",
    exploreLabel: "Explore Oceania Cruises",
  },
];

const MODAL_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-iRyvd470V8eXmni3neMj8kQGUDHFsVu8udr0DDo94rUDwCDb-R1MsQbXL9h_epm5Ng/exec";

function CruiseCard({ item }) {
  return (
    <div className="overflow-hidden flex flex-col md:aspect-[435/537] max-h-[537px] max-w-[435px]">
      <Image
        src="/Journey_card_bg.svg"
        alt={item.title}
        fill
        className="object-cover absolute z-50"
      />
      <div className="relative w-full h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/10" />
        <div className="relative z-10 flex flex-col h-full pb-3">
          <div className="p-6 flex-1">
            <h3 className="text-white font-semibold text-xl md:text-2xl leading-32px mb-3">
              {item.title}
            </h3>
            <p className="text-white/90 text-sm md:text-lg leading-relaxed md:pt-5">
              {item.description}
            </p>
          </div>
          <div className="px-5 pb-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#2B3481] text-xs mt-20 md:text-lg md:mt-0 font-medium rounded-full px-5 py-2.5 hover:bg-gray-100 transition-colors"
            >
              {item.exploreLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="bg-[#F2E2DA] px-5 py-2.5 flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2B3481"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-xs md:text-base text-[#2B3481]">
              Opens on a TravelOStyle partner site
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className=""
    >
      <Image
        src="/Arrow_right.svg"
        className={`w-12 h-12 ${direction === "prev" ? "" : "rotate-180"}`}
        alt={direction === "prev" ? "Previous" : "Next"}
        width={48}
        height={48}
      />
    </button>
  );
}

export default function CruiseJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + cruises.length) % cruises.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % cruises.length);

  const visibleCruises = [0, 1, 2].map(
    (offset) => cruises[(currentIndex + offset) % cruises.length],
  );

  function openModal(cruise) {
    setSelectedCruise(cruise);
    setAdults(0);
    setChildren(0);
    setSubmitStatus("");
    setIsSubmitting(false);
  }

  function closeModal() {
    setSelectedCruise(null);
    setSubmitStatus("");
    setIsSubmitting(false);
  }

  function updateCount(setter, nextValue) {
    setter(Math.max(0, nextValue));
  }

  useEffect(() => {
    function handleOpenInquiry(event) {
      openModal(event.detail ?? null);
    }
    window.addEventListener("openInquiry", handleOpenInquiry);
    return () => window.removeEventListener("openInquiry", handleOpenInquiry);
  }, []);

  useEffect(() => {
    if (!submitStatus) return;
    const id = setTimeout(() => setSubmitStatus(""), 5000);
    return () => clearTimeout(id);
  }, [submitStatus]);

  async function handleModalSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
      title: formData.get("title") || "",
      phone: formData.get("phone") || "",
      email: formData.get("email") || "",
      adults,
      children,
      message: formData.get("message") || "",
      tripName: selectedCruise?.title ?? "",
      image: selectedCruise?.image ?? "",
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
      closeModal();
      setSubmitStatus("Thank you. Your inquiry has been sent.");
    }
  }

  return (
    <section
      id="cruise-journeys"
      className="bg-[#f7f8fc] px-4 py-14 md:px-10 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left"
    >
      <div className="mx-auto max-w-[85.2vw]">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[5%] text-[#2C3078] uppercase">
            Cruise Journeys
          </h2>
          <p className="mt-3 text-[#2C3078] text-sm sm:text-[21px] font-normal max-w-4xl text-center leading-relaxed">
            Cruise departure dates, cabin availability, and pricing update
            constantly. Browse sailings directly with our cruise partners.
          </p>
        </div>

        {/* Mobile: single card + nav */}
        <div className="sm:hidden">
          <div
            key={currentIndex}
            className="transition-all duration-500 ease-in-out"
          >
            <CruiseCard item={cruises[currentIndex]} />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <NavButton direction="prev" onClick={handlePrev} />
            <span className="text-xs text-[#2B3481]">
              {currentIndex + 1} / {cruises.length}
            </span>
            <NavButton direction="next" onClick={handleNext} />
          </div>
        </div>

        {/* Desktop: 3-up carousel */}
        <div className="hidden sm:grid grid-cols-[100px_1fr_100px] items-center gap-10">
          <div className="flex justify-center">
            <NavButton direction="prev" onClick={handlePrev} />
          </div>
          <div className="grid grid-cols-3 gap-10">
            {visibleCruises.map((item, index) => (
              <CruiseCard key={`${currentIndex}-${index}`} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <NavButton direction="next" onClick={handleNext} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCruise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-0 py-0 sm:px-4 sm:py-6">
          <button
            type="button"
            aria-label="Close modal backdrop"
            className="absolute inset-0 cursor-pointer"
            onClick={closeModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cruise-inquiry-title"
            className="relative z-10 flex h-dvh w-full flex-col overflow-hidden bg-white shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between px-4 pb-0 pt-5 sm:px-7 sm:pt-6">
              <h3
                id="cruise-inquiry-title"
                className="text-[29px] font-semibold tracking-tight text-[#3a219a] sm:text-[22px] md:text-[34px]"
              >
                Inquire With Us
              </h3>
              <button
                type="button"
                onClick={closeModal}
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
                    {selectedCruise?.image ? (
                      <Image
                        src={selectedCruise.image}
                        alt={selectedCruise.title ?? ""}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white text-[11px] font-semibold uppercase tracking-wide text-[#3a219a]">
                        {selectedCruise?.title ?? "Cruise"}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1.5 text-[#3a219a] sm:py-1">
                    <p className="text-[13px] sm:text-[15px]">
                      <span className="font-semibold">Trip Name:</span>{" "}
                      <span className="font-normal text-[#4d4a7e]">
                        {selectedCruise?.title}
                      </span>
                    </p>
                    <p className="text-[13px] leading-snug sm:text-[15px]">
                      <span className="font-semibold">Price:</span>{" "}
                      <span className="font-normal text-[#4d4a7e]">
                        From X/per person; double occupancy
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <form className="mt-5 sm:mt-8" onSubmit={handleModalSubmit}>
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
                  <label className="flex items-start gap-3 text-[12px] leading-5 text-[#5c5a88] sm:max-w-[310px] sm:text-[13px]">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-6 w-6 md:h-8 md:w-8 rounded-sm border-2 border-[#4b2aa3] accent-[#4b2aa3]"
                    />
                    <span>
                      I agree to be contacted by TravelOStyle regarding my
                      inquiry.
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
      )}

      {submitStatus && (
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
      )}
    </section>
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
      <span className="min-w-[54px] text-[13px] sm:text-[14px]">{label}</span>
      <button
        type="button"
        onClick={onDecrement}
        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        -
      </button>
      <span className="min-w-[10px] text-center text-[13px] sm:text-[14px]">
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
