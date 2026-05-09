"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CelebrityPrincessCruises from "./Cruise/CelebrityPrincessCruises";
import DisneyCruiseLine from "./Cruise/DisneyCruiseLine";
import EuropeanRiverCruise from "./Cruise/EuropeanRiverCruise";
import HollandAmerica from "./Cruise/HollandAmerica";
import Mediterranean from "./Cruise/Mediterranean";
import RoyalCaribbean from "./Cruise/RoyalCaribbean";

const filters = [
  "Royal Caribbean",
  "Disney Cruise Line",
  "Celebrity & Princess Cruises",
  "Holland America & Virgin Voyages",
  "European River Cruise",
  "Mediterranean & Barges",
];

const MODAL_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-iRyvd470V8eXmni3neMj8kQGUDHFsVu8udr0DDo94rUDwCDb-R1MsQbXL9h_epm5Ng/exec";

export default function CruiseJourneys() {
  const [active, setActive] = useState(0);
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const cruiseData = [
    { name: "Royal Caribbean", component: <RoyalCaribbean onGetDetails={openModal} /> },
    { name: "Disney Cruise Line", component: <DisneyCruiseLine onGetDetails={openModal} /> },
    {
      name: "Celebrity & Princess Cruises",
      component: <CelebrityPrincessCruises onGetDetails={openModal} />,
    },
    { name: "Holland America & Virgin Voyages", component: <HollandAmerica onGetDetails={openModal} /> },
    { name: "European River Cruise", component: <EuropeanRiverCruise onGetDetails={openModal} /> },
    { name: "Mediterranean & Barges", component: <Mediterranean onGetDetails={openModal} /> },
  ];

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

    return () => {
      window.removeEventListener("openInquiry", handleOpenInquiry);
    };
  }, []);

  // Auto-clear submitStatus after a short delay so the toast disappears
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
      duration: selectedCruise?.nights ?? "",
      image: selectedCruise?.image ?? "",
      source: "modal",
    };

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await fetch(MODAL_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      // With `no-cors` the response is opaque and status cannot be relied on.
      // The Apps Script endpoint has already processed the request when reachable.
    } catch (error) {
      // Network or runtime error occurred. Log for diagnostics but proceed
      // to close the modal so the user isn't shown a false negative when
      // the backend actually stored the submission.
      // Keep developer console info for debugging.
      // eslint-disable-next-line no-console
      console.error("Modal submit error:", error);
    } finally {
      // Reset form, clear counts, close modal and show success message.
      try {
        event.currentTarget.reset();
      } catch (e) {
        // ignore
      }
      setAdults(0);
      setChildren(0);
      setIsSubmitting(false);
      closeModal();
      setSubmitStatus("Thank you. Your modal inquiry has been sent.");
    }
  }

  return (
    <section id="cruise-journeys" className="bg-[#f7f8fc] px-4 py-14 md:px-10 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left">
      <div className="mx-auto max-w-[85.2vw]">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-wide text-[#1c2c5b]">
          CRUISE JOURNEYS
        </h2>

        <div className="mb-6 hidden flex-wrap justify-between sm:flex">
          {filters.map((item, index) => (
            <Button
              key={item}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-full border px-3 py-2 my-2 tracking-wider transition ${
                active === index
                  ? "border-[#1c2c5b] bg-[#1c2c5b] text-white font-medium"
                  : "border-gray-300 bg-white text-[#1c2c5b] font-light"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="mb-5 sm:hidden">
          <label className="mb-3 block text-[16px] font-semibold text-[#1c2c5b]">
            Select Cruise Type
          </label>
          <div className="relative">
            <select
              value={active}
              onChange={(event) => setActive(Number(event.target.value))}
              className="appearance-none w-full rounded-sm border border-[#6b5bc4] bg-white px-4 py-3 pr-10 text-[14px] font-medium text-[#1c2c5b] outline-none"
            >
              {filters.map((item, index) => (
                <option key={item} value={index}>
                  {item}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-[#3b1c8e]">
              ▼
            </span>
          </div>
        </div>

        <div className="mb-10">
          <div className="h-px bg-[#c7d2fe]" />
        </div>

        <div className="hidden sm:block transition-all duration-300">
          {cruiseData[active].component}
        </div>

        <div className="sm:hidden">
          <div className="transition-all duration-300">
            {cruiseData[active].component}
          </div>
        </div>
      </div>

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
            onClick={(event) => event.stopPropagation()}
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
                    className="relative w-full overflow-hidden rounded-sm sm:shrink-0"
                    style={{ width: 122, height: 88 }}
                  >
                    {selectedCruise?.image ? (
                      <Image
                        src={selectedCruise.image}
                        alt={selectedCruise.title ?? "Cruise image"}
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
                        {formatCruiseTitle(selectedCruise?.title ?? "")}
                      </span>
                    </p>
                    <p className="text-[13px] sm:text-[15px]">
                      <span className="font-semibold">Duration:</span>{" "}
                      <span className="font-normal text-[#4d4a7e]">
                        {selectedCruise?.nights}
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
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-">
                  <Field name="firstName" label="First Name*" placeholder="Your First Name" />
                  <Field name="lastName" label="Last Name*" placeholder="Your Last Name" />
                  <Field name="title" label="Title*" placeholder="Select Your Title" select />
                  <Field name="phone" label="Number/ WhatsApp" placeholder="+1773 983 8067" />

                  <div className="sm:col-span-2">
                    <Field name="email" label="Email*" placeholder="Enter Your Email ID" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-7">
                  <p className="mb-3 text-[15px] text-[#3a219a] sm:text-[16px]">
                    No.of Guests*
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
                    className="min-h-33 w-full rounded-lg border-2 border-[#4b2aa3] bg-white px-3 py-3 text-[13px] leading-6 text-[#6d68a5] outline-none placeholder:text-[#b4afd8] sm:min-h-30.5 sm:px-4 sm:py-3.5"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
                  <label className="flex items-start gap-3 text-[12px] leading-5 text-[#5c5a88] sm:max-w-77.5 sm:text-[13px]">
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
                    <span className="sm:hidden">{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
                    <span className="hidden sm:inline">{isSubmitting ? "Sending..." : "Get Details"}</span>
                  </Button>
                </div>
                {submitStatus ? (
                  <p className="mt-4 text-[13px] font-medium text-[#3a219a]">
                    {submitStatus}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Submission toast */}
      {submitStatus ? (
        <div
          role="status"
          className={`fixed right-6 top-6 z-50 transform rounded-md px-4 py-2 text-sm font-medium shadow-lg transition-opacity duration-200 ${
            submitStatus.toLowerCase().includes("unable")
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {submitStatus}
        </div>
      ) : null}
    </section>
  );
}

function Field({ name, label, placeholder, select = false }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[15px] font- text-[#3a219a] sm:text-[16px]">
        {label}
      </span>

      <div className="relative">
        {select ? (
          <>
            <select name={name} className="w-full appearance-none border-0 border-b-2 border-[#4b2aa3] bg-transparent pr-7 text-[13px] text-[#a29acc] outline-none sm:text-[14px]">
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
      <span className="min-w-13.5 text-[13px] sm:min-w-14.5 sm:text-[14px]">
        {label}
      </span>
      <button
        type="button"
        onClick={onDecrement}
        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        -
      </button>
      <span className="min-w-2.5 text-center text-[13px] sm:text-[14px]">
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

function formatCruiseTitle(title) {
  if (!title) return "";
  return `${title.charAt(0)}${title.slice(1).toLowerCase()}`;
}
