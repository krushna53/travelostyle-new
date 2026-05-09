"use client";

import { useState } from "react";
import CruiseCard from "./CruiseCard";
import Image from "next/image";

const cruises = [
  {
    title: "BAHAMAS",
    nights: "3 Nights",
    route: "Round Trip | Port Canaveral, FL",
    price: "$X",
    image: "/Hourse.png",
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
    image: "/eastern.png",
  },
  {
    title: "MEDITERRANEAN",
    nights: "7 Nights",
    route: "Round Trip | Barcelona, Spain",
    price: "$X",
    image: "/Mediterranean.png",
  },
];

export default function CelebrityPrincessCruises({ onGetDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cruises.length) % cruises.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cruises.length);
  };

  return (
    <>
      {/* Mobile: Single card with navigation */}
      <div className="sm:hidden">
        <div
          className="transition-all duration-500 ease-in-out"
          key={currentIndex}
        >
          <CruiseCard
            item={cruises[currentIndex]}
            onGetDetails={onGetDetails}
          />
        </div>

        {/* Navigation buttons below card */}
        <div className="mt-6 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous land journey"
            className="shrink-0"
          >
            <Image
              src="/Arrow_right.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-12 text-[#3b1c8e] transition hover:opacity-70 cursor-pointer rotate-180"
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next land journey"
            className="shrink-0"
          >
            <Image
              src="/Arrow_right.svg"
              alt="Next"
              width={24}
              height={24}
              className="w-12 text-[#3b1c8e] transition hover:opacity-70 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {cruises.map((item, i) => (
          <CruiseCard key={i} item={item} onGetDetails={onGetDetails} />
        ))}
      </div>
    </>
  );
}
