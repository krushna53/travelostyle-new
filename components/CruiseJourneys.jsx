"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
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
      <div className="max-w-[85.2vw] mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-[#1c2c5b] mb-8 tracking-wide">
          CRUISE JOURNEYS
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {filters.map((item, index) => (
            <Button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 text-sm cursor-pointer border rounded-full transition ${
                active === index
                  ? "bg-[#1c2c5b] text-white border-[#1c2c5b]"
                  : "bg-white text-[#1c2c5b] border-gray-300"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="h-[1px] bg-[#c7d2fe]"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cruises.map((item, index) => (
            <div key={index} className="relative w-full aspect-[410/489]">
              {/* Zig-zag background */}
              <div className="absolute inset-0">
                <Image
                  src="/zig-zag-border.png"
                  alt="border"
                  fill
                  className="object-fill"
                />
              </div>

              {/* Card */}
              <div className="relative z-10 p-5 h-full">
                <Card className="w-full h-full rounded-xl bg-white flex flex-col justify-between">
                  <div className="p-3 pb-0">
                    <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover shadow-2xl shadow-black"
                      />
                    </div>
                  </div>

                  <div className="px-5 pt-4 flex-1">
                    <h3 className="text-lg font-extrabold text-[#1c2c5b]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#1c2c5b] mt-2">{item.nights}</p>

                    <p className="text-sm text-[#1c2c5b]">{item.route}</p>

                    <div className="my-4 border-t border-dashed border-[#1c2c5b] opacity-40"></div>
                  </div>

                  <div className="px-5 pb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">from</p>
                      <p className="text-lg font-bold text-[#1c2c5b]">
                        {item.price}
                        <span className="text-sm font-normal"> /person</span>
                      </p>
                      <p className="text-xs text-gray-400">double occupancy*</p>
                    </div>

                    <Button className="bg-[#3b3f8c] text-white px-4 py-2 rounded-full text-sm">
                      Get Details
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
