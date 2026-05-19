"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const cruises = [
  {
    title: "Royal Caribbean Cruises",
    description:
      "Royal Caribbean suits travellers who want a lot from a cruise — a wide range of destinations, activities, and price points, all in one place.",
    image: "/CruiseJourneys/Royal_Caribbean.jpg",
    link: "https://royalcaribbean.mytravelsite.com/?agency=10440&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Royal Caribbean Cruises",
  },
  {
    title: "Princess Cruises",
    description:
      "Princess ships are designed to hold your attention between ports as much as at them. Dining that goes beyond the expected, comfortable amenities, and a pace that lets you settle into the voyage.",
    image: "/CruiseJourneys/Princess_Cruise.jpg",
    link: "https://princesscruises.mytravelsite.com/?agency=10440&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Princess Cruises",
  },
  {
    title: "Oceania Cruises",
    description:
      "Oceania's routes are built around depth of destination — more time ashore, more cities, more of the world actually experienced.",
    image: "/CruiseJourneys/Oceania_Cruise.jpg",
    link: "https://oceaniacruises.mytravelsite.com/?agency=10440&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Oceania Cruises",
  },
  {
    title: "Viking Cruises",
    description:
      "Viking is built for travellers who travel with intention. Smaller ships, no casinos, no children — just thoughtfully designed itineraries and knowledgeable guides.",
    image: "/CruiseJourneys/viking_cruise.jpg",
    link: "https://vikingcruises.mytravelsite.com/?agency=10440&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Viking Cruises",
  },
  {
    title: "Virgin Voyages",
    description:
      "Adults only, by design. Virgin Voyages has built something genuinely different — ships with character, service that doesn't follow the usual script, and an atmosphere that feels more like a boutique hotel at sea.",
    image: "/CruiseJourneys/virgin_voyages.jpg",
    link: "https://virginvoyages.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Virgin Voyages",
  },
  {
    title: "Windstar Cruises",
    description:
      "Small ships open up a different world. Windstar docks where the larger lines simply can't — in the heart of the harbour, steps from the old town, close enough to walk.",
    image: "/CruiseJourneys/windstar_voyages.jpg",
    link: "https://windstarcruises.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2A15krevg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Windstar Cruises",
  },
  {
    title: "Celebrity Cruises",
    description:
      "Celebrity sits at the more considered end of the mainstream. The ships are large enough to offer genuine variety, but designed and staffed in a way that doesn't feel busy.",
    image: "/CruiseJourneys/celebrity_cruise.jpg",
    link: "https://celebritycruises.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2Auxqryb%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Celebrity Cruises",
  },
  {
    title: "Carnival Cruises",
    description:
      "Carnival does fun well and without apology. Every ship has its own character — different onboard experiences, different energy.",
    image: "/CruiseJourneys/carnival_cruise.jpg",
    link: "https://carnival.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2A81lwgq%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1MDYzJGozOSRsMCRoMA",
    exploreLabel: "Explore Carnival Cruises",
  },
  {
    title: "Holland America Cruises",
    description:
      "Holland America has been taking travellers to the less-travelled corners of the world for over 150 years. The ships are elegant without being stiff, the itineraries lean toward the cultural and the exploratory.",
    image: "/CruiseJourneys/holland_america.jpg",
    link: "https://hollandamericaline.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2Av27m9n%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Holland America Cruises",
  },
  {
    title: "Avalon Waterways",
    description:
      "River cruising, reconsidered. Avalon has rethought the standard format — more glass, more openness to the landscape passing by, and itineraries built around genuine immersion in the regions they move through.",
    image: "/CruiseJourneys/avalon_waterways.jpg",
    link: "https://avalonwaterways.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2Av27m9n%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Avalon Waterways",
  },
  {
    title: "AMA Waterways",
    description:
      "Small ships, locally sourced food, and a crew that takes the time to know the guests they're looking after. AmaWaterways runs river itineraries across Europe, Asia, and Africa with an attention to detail.",
    image: "/CruiseJourneys/ama_waterways.jpg",
    link: "https://amawaterways.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2Av27m9n%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore AMA Waterways",
  },
  {
    title: "Hurtigruten",
    description:
      "Hurtigruten travels the Norwegian coastline through all seasons, stopping at communities that larger ships never reach. Part expedition, part tradition, entirely unlike anything else.",
    image: "/CruiseJourneys/hurtigruten_voyages.jpg",
    link: "https://hurtigruten.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2Av27m9n%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Hurtigruten Cruises",
  },
  {
    title: "Uniworld Boutique River Cruises",
    description:
      "Arguably the most design-led river cruise line available. Each Uniworld ship is individually styled around the region it sails — no two are the same.",
    image: "/CruiseJourneys/uniworld_boutique.jpg",
    link: "https://uniworld.mytravelsite.com/?agency=10440&advisor=69047&_gl=1%2A8oeuhg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Uniworld Boutique River Cruises",
  },
  {
    title: "Regent Seven Seas",
    description:
      "Flights, excursions, dining, drinks, gratuities — all covered. The ships are small by ocean cruise standards, the itineraries are global, and the overall standard is genuinely luxury.",
    image: "/CruiseJourneys/regent_seven.jpg",
    link: "https://regentsevenseas.mytravelsite.com/?agency=10440&_gl=1%2A8oeuhg%2A_ga%2AMjA1ODY5NzUxMS4xNzY2MDg1NTIx%2A_ga_5YQ883061J%2AczE3NzgyNTUwNDIkbzI5JGcxJHQxNzc4MjU1NDE5JGo1OSRsMCRoMA",
    exploreLabel: "Explore Regent Seven Seas",
  },
];

function CruiseCard({ item }) {
  return (
    <div
      className="relative"
      style={{ aspectRatio: "506/606" }}
    >
      {/* SVG ticket-border card shape (#FAFAFA background + built-in shadow) */}
      <img
        src="/Journey_card_bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "103.95%",
          height: "103.63%",
          left: "0",
          top: 0,
        }}
      />

      {/* Content inset: 35 px sides → 6.92%, 30 px top → 5.93% */}
      <div
        className="absolute inset-0 flex flex-col"
        style={{ padding: "5.93% 6.92%" }}
      >
        {/* Image area */}
        <div className="relative overflow-hidden rounded-sm flex-1">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

          {/* Dark-to-transparent gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.85) 40%, rgba(26,26,26,0.1) 62%, rgba(0,0,0,0) 75%)",
            }}
          />

          {/* Title + description at top */}
          <div className="absolute top-0 inset-x-0 z-10 p-6 pb-0">
            <h3 className="text-white font-semibold text-xl md:text-2xl leading-tight mb-4">
              {item.title}
            </h3>
            <p className="text-white/90 text-sm md:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Explore button + partner notice stacked at bottom */}
          <div className="absolute bottom-0 inset-x-0 z-10 mb-5">
            <div className="px-5 pb-3">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2B3481] text-xs md:text-sm font-medium rounded-full px-5 py-2.5 hover:bg-gray-100 transition-colors"
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
            <div className="bg-[#F2E2DA] px-3 py-2.5 flex items-center gap-2">
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

export default function CruiseJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cols, setCols] = useState(3); // always 3 on server

useEffect(() => {
  const update = () => setCols(window.innerWidth <= 1750 ? 2 : 3);
  update(); // corrects on client after hydration
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + cruises.length) % cruises.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % cruises.length);

  const visibleCruises = Array.from({ length: cols }, (_, offset) =>
    cruises[(currentIndex + offset) % cruises.length]
  );
  
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
          <div className="mt-6 flex items-center justify-between sm:justify-center gap-6">
            <NavButton direction="prev" onClick={handlePrev} />
            <NavButton direction="next" onClick={handleNext} />
          </div>
        </div>

        {/* Desktop: 3-up carousel */}
        <div className="hidden sm:grid grid-cols-[100px_1fr_100px] items-center gap-10">
          <div className="flex justify-center">
            <NavButton direction="prev" onClick={handlePrev} />
          </div>
          <div className={`grid gap-10 ${cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
            {visibleCruises.map((item, index) => (
              <CruiseCard key={`${currentIndex}-${index}`} item={item} />
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
