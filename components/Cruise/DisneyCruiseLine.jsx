import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
export default function DisneyCruiseLine() {
  const cruises = [
    {
      title: "BAHAMAS",
      nights: "3 Nights",
      route: "Round Trip | Port Canaveral, FL",
      price: "$X",
      image: "/Rectangle3.png",
    },
    {
      title: "WESTERN CARIBBEAN",
      nights: "7 Nights",
      route: "Round Trip | Miami, FL",
      price: "$X",
      image: "/Rectangle4.png",
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
      image: "/Rectangle1.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[87vw] mx-auto">
      {cruises.map((item, index) => (
        <div
          key={index}
          className="w-[20.5vw] min-h-[23.35vw] p-3"
          style={{
            backgroundImage: "url('/zig-zag-border.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Card className="w-full h-full rounded-xl bg-white flex flex-col justify-between">
            <div className="p-3 pb-0">
              <div className="relative h-[10.25vw]  w-[16.75vw] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="px-4 pt-4 flex-1">
              <h3 className="text-base sm:text-lg font-extrabold text-[#2C3078]">
                {item.title}
              </h3>

              <p className="text-sm text-[#2C3078] mt-2">{item.nights}</p>
              <p className="text-sm text-[#2C3078]">{item.route}</p>

              <div className="my-3">
                <Image
                  src="/Lineborder.png"
                  alt="separator"
                  width={250}
                  height={10}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">from</p>
                <p className="text-sm font-bold text-[#2C3078]">
                  {item.price}
                  <span className="text-xs font-normal"> /person</span>
                </p>
                <p className="text-xs text-gray-400">double occupancy*</p>
              </div>

              <Button className="bg-[#2C3078] text-white text-sm px-4 py-2 rounded-full">
                Get Details
              </Button>
            </div>
          </Card>
        </div>
        // </div>
      ))}
    </div>
  );
}
