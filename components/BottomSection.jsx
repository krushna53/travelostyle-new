import Image from "next/image";
import React from "react";

export default function BottomSection() {
  const images = [
    "/Rectangle1.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png",
    "/Hourse.png",
    "/Rectangle2.png",
  ];
  return (
    <div>
      {/* <div className="absolute top-20 left-30 h-[6vw] w-[85.95vw] flex justify-center z-50"> */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[85.95vw] z-50">
        <div className="flex items-center justify-between h-[6vw] w-[85.95vw] px-6 border border-2 border rounded-md border-white/80 bg-[#2c3078]/55 backdrop-blur-lg shadow-lg text-white">
          <div className="flex gap-6 ">
            <span
              onClick={() => {
                document.getElementById("seasonfavorite")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-[1.05vw] cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => {
                document.getElementById("ouroriginstory")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-[1.05vw] cursor-pointer"
            >
              Journeys
            </span>
            <span
              onClick={() => {
                document.getElementById("faq")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-[1.05vw] cursor-pointer"
            >
              How it works
            </span>
          </div>
          <Image src="/TravelOstyle.png" alt="star" width={299} height={57} />
          <div className="flex items-center gap-6 text-sm">
            <span
              onClick={() => {
                document.getElementById("faq")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-[1.05vw] cursor-pointer"
            >
              FAQ
            </span>
            <button
              onClick={() => {
                document
                  .getElementById("build-your-own-Journey")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="bg-white text-black px-4 py-1.5 rounded-full text-[1.05vw cursor-pointer"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
