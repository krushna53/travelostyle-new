"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const filters = [
  "Royal Caribbean",
  "Disney Cruise Line",
  "Celebrity & Princess Cruises",
  "Holland America & Virgin Voyages",
  "European River Cruise",
  "Mediterranean & Barges",
];

const cruises = [
  {
    title: "BAHAMAS",
    nights: "3 Nights",
    route: "Round Trip | Port Canaveral, FL",
    price: "$X",
    image: "/ShipPort.png",
  },
  {
    title: "WESTERN CARIBBEAN",
    nights: "7 Nights",
    route: "Round Trip | Miami, FL",
    price: "$X",
    image: "/Island.png",
  },
  {
    title: "EASTERN CARIBBEAN",
    nights: "7 Nights",
    route: "Round Trip | Port Canaveral, FL",
    price: "$X",
    image: "/imagestravel1.jpg",
  },
  {
    title: "MEDITERRANEAN",
    nights: "7 Nights",
    route: "Round Trip | Barcelona, Spain",
    price: "$X",
    image: "/imagestravel1.jpg",
  },
];

export default function CruiseJourneys() {
  const [active, setActive] = useState(0);
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    if (!selectedCruise) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCruise]);

  const openModal = (cruise) => {
    setSelectedCruise(cruise);
    setAdults(0);
    setChildren(0);
  };

  const closeModal = () => setSelectedCruise(null);

  const updateCount = (setter, nextValue) => {
    setter(Math.max(0, nextValue));
  };

  return (
    <>
      <section className="bg-[#f7f8fc] px-4 py-14 md:px-10">
        <div className="mx-auto max-w-[85.2vw]">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-wide text-[#1c2c5b]">
            CRUISE JOURNEYS
          </h2>

          <div className="mb-6 hidden flex-wrap justify-center gap-3 sm:flex">
            {filters.map((item, index) => (
              <Button
                key={item}
                onClick={() => setActive(index)}
                className={`cursor-pointer rounded-full border px-5 py-2 text-sm transition ${
                  active === index
                    ? "border-[#1c2c5b] bg-[#1c2c5b] text-white"
                    : "border-gray-300 bg-white text-[#1c2c5b]"
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
                className="w-full rounded-sm border border-[#6b5bc4] bg-white px-4 py-3 pr-10 text-[14px] font-medium text-[#1c2c5b] outline-none"
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

          <div className="hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {cruises.map((item) => (
              <div
                key={item.title}
                className="relative w-full"
                style={{ aspectRatio: "410 / 489" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src="/zig-zag-border.png"
                    alt="border"
                    fill
                    className="object-fill"
                  />
                </div>

                <div className="relative z-10 h-full p-5">
                  <Card className="flex h-full w-full flex-col justify-between rounded-xl bg-white">
                    <div className="p-3 pb-0">
                      <div className="relative h-45 w-full overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover shadow-2xl shadow-black"
                        />
                      </div>
                    </div>

                    <div className="flex-1 px-5 pt-4">
                      <h3 className="text-lg font-extrabold text-[#1c2c5b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#1c2c5b]">{item.nights}</p>
                      <p className="text-sm text-[#1c2c5b]">{item.route}</p>
                      <div className="my-4 border-t border-dashed border-[#1c2c5b] opacity-40" />
                    </div>

                    <div className="flex items-center justify-between px-5 pb-5">
                      <div>
                        <p className="text-xs text-gray-500">from</p>
                        <p className="text-lg font-bold text-[#1c2c5b]">
                          {item.price}
                          <span className="text-sm font-normal"> /person</span>
                        </p>
                        <p className="text-xs text-gray-400">double occupancy*</p>
                      </div>

                      <Button
                        onClick={() => openModal(item)}
                        className="rounded-full bg-[#3b3f8c] px-4 py-2 text-sm text-white"
                      >
                        Get Details
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden">
            <div className="relative mx-auto w-full max-w-[88vw]" style={{ aspectRatio: "410 / 489" }}>
              <div className="absolute inset-0">
                <Image
                  src="/zig-zag-border.png"
                  alt="border"
                  fill
                  className="object-fill"
                />
              </div>

              <div className="relative z-10 h-full p-4">
                <Card className="flex h-full w-full flex-col justify-between rounded-xl bg-white">
                  <div className="p-3 pb-0">
                    <div className="relative h-45 w-full overflow-hidden rounded-lg">
                      <Image
                        src={cruises[active].image}
                        alt={cruises[active].title}
                        fill
                        className="object-cover shadow-2xl shadow-black"
                      />
                    </div>
                  </div>

                  <div className="flex-1 px-4 pt-4">
                    <h3 className="text-[18px] font-extrabold text-[#1c2c5b]">
                      {cruises[active].title}
                    </h3>
                    <p className="md:mt-6 text-[14px] text-[#1c2c5b]">
                      {cruises[active].nights}
                    </p>
                    <p className="text-[14px] text-[#1c2c5b]">
                      {cruises[active].route}
                    </p>
                    <div className="my-4 border-t border-dashed border-[#1c2c5b] opacity-40" />
                  </div>

                  <div className="flex items-center justify-between px-4 pb-4">
                    <div>
                      <p className="text-[12px] text-gray-500">from</p>
                      <p className="text-[18px] font-bold text-[#1c2c5b]">
                        {cruises[active].price}
                        <span className="text-sm font-normal"> /person</span>
                      </p>
                      <p className="text-[12px] text-gray-400">double occupancy*</p>
                    </div>

                    <Button
                      onClick={() => openModal(cruises[active])}
                      className="rounded-full bg-[#3b3f8c] px-4 py-2 text-sm text-white"
                    >
                      Get Details
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between px-3 text-[28px] text-[#3b1c8e]">
              <button type="button" onClick={() => setActive((active - 1 + cruises.length) % cruises.length)} aria-label="Previous cruise">
                ←
              </button>
              <button type="button" onClick={() => setActive((active + 1) % cruises.length)} aria-label="Next cruise">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedCruise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-0 py-0 sm:px-4 sm:py-6">
          <button
            type="button"
            aria-label="Close modal backdrop"
            className="absolute inset-0 cursor-default"
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
                className="flex h-10 w-10 items-center justify-center text-[#3a219a] transition hover:opacity-70"
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
                    <Image
                      src={selectedCruise.image}
                      alt={selectedCruise.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-1.5 text-[#3a219a] sm:py-1">
                    <p className="text-[13px] sm:text-[15px]">
                      <span className="font-semibold">Trip Name:</span>{" "}
                      <span className="font-normal text-[#4d4a7e]">
                        {formatCruiseTitle(selectedCruise.title)}
                      </span>
                    </p>
                    <p className="text-[13px] sm:text-[15px]">
                      <span className="font-semibold">Duration:</span>{" "}
                      <span className="font-normal text-[#4d4a7e]">
                        {selectedCruise.nights}
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

              <form className="mt-5 sm:mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                  <Field label="First Name*" placeholder="Your First Name" />
                  <Field label="Last Name*" placeholder="Your Last Name" />
                  <Field label="Title*" placeholder="Select Your Title" select />
                  <Field label="Number/ WhatsApp" placeholder="+1773 983 8067" />

                  <div className="sm:col-span-2">
                    <Field label="Email*" placeholder="Enter Your Email ID" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-7">
                  <p className="mb-3 text-[15px] font-semibold text-[#3a219a] sm:text-[16px]">
                    No.of Guests*
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-[14px] text-[#3a219a] sm:gap-6">
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
                  <label className="mb-3 block text-[15px] font-semibold text-[#3a219a] sm:text-[16px]">
                    Your Message*
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Do you have questions or considerations that you would like us to know?"
                    className="min-h-33 w-full rounded-lg border-2 border-[#4b2aa3] bg-white px-3 py-3 text-[13px] leading-6 text-[#6d68a5] outline-none placeholder:text-[#b4afd8] sm:min-h-30.5 sm:px-4 sm:py-3.5"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
                  <label className="flex items-start gap-3 text-[12px] leading-5 text-[#5c5a88] sm:max-w-77.5 sm:text-[13px]">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-5 w-5 rounded-sm border-2 border-[#4b2aa3] accent-[#4b2aa3]"
                    />
                    <span>
                      I agree to be contacted by TravelOStyle regarding my inquiry.
                    </span>
                  </label>

                  <Button className="w-fit rounded-full bg-[#4b1f95] px-5 py-2.5 text-[16px] font-semibold text-white shadow-none sm:px-6 sm:text-[17px]">
                    <span className="sm:hidden">Submit Enquiry</span>
                    <span className="hidden sm:inline">Get Details</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, placeholder, select = false }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[15px] font-semibold text-[#3a219a] sm:text-[16px]">
        {label}
      </span>

      <div className="relative">
        {select ? (
          <>
            <select className="w-full appearance-none border-0 border-b-2 border-[#4b2aa3] bg-transparent pb-2 pr-7 text-[13px] text-[#a29acc] outline-none sm:text-[14px]">
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
            type="text"
            placeholder={placeholder}
            className="w-full border-0 border-b-2 border-[#4b2aa3] bg-transparent pb-2 text-[13px] text-[#a29acc] outline-none placeholder:text-[#a29acc] sm:text-[14px]"
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
        className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        -
      </button>
      <span className="min-w-2.5 text-center text-[13px] sm:text-[14px]">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-[#4b1f95] text-[18px] leading-none text-white"
      >
        +
      </button>
    </div>
  );
}

function formatCruiseTitle(title) {
  return `${title.charAt(0)}${title.slice(1).toLowerCase()}`;
}
