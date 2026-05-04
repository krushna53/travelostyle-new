"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
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

export default function CruiseJourneys() {
  const [active, setActive] = useState(0);
  const cruiseData = [
    { name: "Royal Caribbean", component: <RoyalCaribbean /> },
    { name: "Disney Cruise Line", component: <DisneyCruiseLine /> },
    {
      name: "Celebrity & Princess Cruises",
      component: <CelebrityPrincessCruises />,
    },
    { name: "Holland America & Virgin Voyages", component: <HollandAmerica /> },
    { name: "European River Cruise", component: <EuropeanRiverCruise /> },
    { name: "Mediterranean & Barges", component: <Mediterranean /> },
  ];

  return (
    <div id="Journeys" className="bg-[#f3f3f3] py-14 px-4 md:px-10 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[1.8vw] font-extrabold text-[#1c2c5b] mb-8 tracking-wide">
          CRUISE JOURNEYS
        </h2>
        <div className="flex flex-wrap  gap-5 mb-6 ">
          {filters.map((item, index) => (
            <Button
              key={index}
              onClick={() => setActive(index)}
              className={`px-7 py-2 text-[1.05vw] cursor-pointer border transition-all duration-200 rounded-full ${
                active === index
                  ? "bg-[#1c2c5b] text-white border-[#2C3078]"
                  : " text-[#1c2c5b] border-[#2C3078] hover:border-[#2C3078]"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="border border-[#2C3078] mb-[2vw]"></div>
        <div className="transition-all duration-300">
          {cruiseData[active].component}
        </div>
      </div>
    </div>
  );
}
