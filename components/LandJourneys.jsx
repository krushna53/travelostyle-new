"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const journeys = [
  {
    id: 1,
    title: "Jamaica",
    image: "/jamaica.jpg",
    description:
      "Jamaica — the land of reggae, rum, and radiant beaches offers one of the Caribbean's most vibrant and welcoming experiences.",
    duration: "4 Days | 3 Nights",
    location: "Montego Bay & Ocho Rios",
    date: "May-Dec 2026",
    price: "$5000",
  },
  {
    id: 2,
    title: "Punta Cana",
    image: "/punta.jpg",
    description:
      "Punta Cana — the jewel of the Dominican Republic — is home to some of the Caribbean's most breathtaking white-sand beaches.",
    duration: "4 Days | 3 Nights",
    location: "Dominican Republic",
    date: "May-Dec 2026",
    price: "$5000",
  },
  {
    id: 3,
    title: "Punta Cana",
    image: "/punta.jpg",
    description:
      "Punta Cana — the jewel of the Dominican Republic — is home to some of the Caribbean's most breathtaking white-sand beaches.",
    duration: "4 Days | 3 Nights",
    location: "Dominican Republic",
    date: "May-Dec 2026",
    price: "$5000",
  },
];

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
          className="w-full h-[180px] object-cover rounded-lg"
        />
      </div>
      <div className="px-6 my-3 mt-5">
        <Image src="/zig_zag_line.svg" alt="" width={260} height={10} className="w-full" />
      </div>
      <div className="px-6 pb-5 pt-2 flex flex-col grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2B3481] mb-3">
          {journey.title}
        </h3>
        <p className="text-sm text-[#2B3481] font-light leading-relaxed mb-6">
          {journey.description}
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
          <Image src="/zig_zag_line.svg" alt="" width={260} height={10} className="w-full" />
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-[10px] text-[#2B3481]">from</p>
            <p className="text-lg font-medium text-[#2B3481]">
              {journey.price}
              <span className="text-xs font-light text-[#2B3481]">*/person</span>
            </p>
            <p className="text-[9px] text-[#2B3481] italic">double occupancy*</p>
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
          <div key={i} className="w-5 h-10 bg-[#f2f2f2] rounded-full shrink-0" />
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
      aria-label={direction === "prev" ? "Previous land journey" : "Next land journey"}
      className=""
    >
      <Image
        src="/Arrow_right.svg"
        className={`w-12 h-12 ${direction === "prev" ? "" : "rotate-180"}`}
        alt={direction === "prev" ? "Previous" : "Next"}
        width={16}
        height={16}
      />
    </button>
  );
}

export default function LandJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + journeys.length) % journeys.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % journeys.length);

  function openJourneyModal(journey) {
    window.dispatchEvent(
      new CustomEvent("openInquiry", {
        detail: {
          title: journey.title,
          nights: journey.duration,
          image: journey.image,
          source: "land",
        },
      }),
    );
  }

  // 3 visible cards starting from currentIndex, wrapping around
  const visibleJourneys = [0, 1, 2].map(
    (offset) => journeys[(currentIndex + offset) % journeys.length]
  );

  return (
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
          <div key={currentIndex} className="transition-all duration-500 ease-in-out">
            <JourneyCard
              journey={journeys[currentIndex]}
              onOpen={() => openJourneyModal(journeys[currentIndex])}
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <NavButton direction="prev" onClick={handlePrev} />
            <span className="text-xs text-[#2B3481]">
              {currentIndex + 1} / {journeys.length}
            </span>
            <NavButton direction="next" onClick={handleNext} />
          </div>
        </div>

        {/* Desktop: arrows flanking the 3-column grid, vertically centered */}
        <div className="hidden sm:grid grid-cols-[100px_1fr_100px] items-center gap-10">
          <div className="flex justify-center">
            <NavButton direction="prev" onClick={handlePrev} />
          </div>

          <div className="grid grid-cols-3 gap-18">
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
  );
}