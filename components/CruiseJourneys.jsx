"use client";

import { Button, Card } from "@heroui/react";
import { useState } from "react";

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

  return (
    <div className="bg-[#f7f8fc] py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-[#1c2c5b] mb-8 tracking-wide">
          CRUISE JOURNEYS
        </h2>
        <div className="flex flex-wrap  gap-3 mb-6">
          {filters.map((item, index) => (
            <Button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 text-sm cursor-pointer border transition-all duration-200 rounded-full ${
                active === index
                  ? "bg-[#1c2c5b] text-white border-[#1c2c5b]"
                  : "bg-white text-[#1c2c5b] border-gray-300 hover:border-[#1c2c5b]"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="relative mb-10">
          <div className="h-[1px] bg-[#c7d2fe]"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cruises.map((item, index) => (
            <Card
              key={index}
              isPressable
              className="group rounded-2xl overflow-hidden bg-[#f3f4f6] border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden m-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-bold text-[#2c3078] tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-[#2c3078] mt-2 leading-snug">
                  {item.nights} <br />
                  {item.route}
                </p>

                {/* Wavy Divider */}
                <div className="my-4">
                  <svg viewBox="0 0 200 10" className="w-full h-3">
                    <path
                      d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 T 150 5 T 160 5 T 170 5 T 180 5 T 190 5 T 200 5"
                      stroke="#2c3078"
                      fill="transparent"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Price */}
                  <div>
                    <p className="text-xs text-gray-500">from</p>
                    <p className="text-[#2c3078] font-bold text-lg">
                      {item.price}
                      <span className="text-xs font-normal">*/person</span>
                    </p>
                    <p className="text-[10px] text-gray-500">
                      double occupancy*
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    size="sm"
                    className="bg-[#2c3078] text-white rounded-full py-1 px-4 text-xs hover:bg-[#1f235f]"
                  >
                    Get Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
