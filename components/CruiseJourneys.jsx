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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cruises.map((item, index) => (
            <div key={index} className="relative h-[38vw] w-[55vh] ">
              <div className=" h-full w-full">
                <Image src="/zig-zag-border.png" alt="star" fill />
              </div>
              <div className="absolute h-full w-full top-0 left-0 p-5">
                <Card
                  key={index}
                  className="max-w-[390px] h-[467px] mx-auto border border-[#d6dcff] rounded-xl bg-white flex flex-col justify-between hover:shadow-md transition"
                >
                  <div className="p-3 pb-0">
                    <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-5 pt-4 flex-1">
                    <h3 className="text-xl font-extrabold text-[#1c2c5b] tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#1c2c5b] mt-3 font-medium">
                      {item.nights}
                    </p>

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

                    <Button className="bg-[#3b3f8c] text-white px-5 py-2 rounded-full">
                      Get Details
                    </Button>
                  </div>
                </Card>
              </div>
              {/* <div
                style={{
                  backgroundImage: "url('/zig-zag-border.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                className="w-[450px] h-[350px]"
              >
                <div className=" rounded-[16px] p-3">
                  <div className="rounded-[14px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
