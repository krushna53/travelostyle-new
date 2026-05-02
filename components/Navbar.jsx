"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed -bottom-2 z-50 flex justify-center w-full">
      <div className="h-[6vw] w-[85.95vw] flex justify-center items-center">
        <div className="flex items-center justify-between h-[6vw] w-[85.95vw] px-14 border-2 border-white/80 bg-[#2c3078]/55 backdrop-blur-lg shadow-lg text-white rounded-lg">
          <div className="flex gap-6 ">
            <span className="text-[1.05vw]">About</span>
            <span className="text-[1.05vw]">Journeys</span>
            <span className="text-[1.05vw]">How it works</span>
          </div>
          <Image src="/TravelOstyle.png" alt="star" width={299} height={57} />
          <div className="flex items-center gap-6 text-sm">
            <span className="text-[1.05vw]">FAQ</span>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-[1.05vw]">
              Plan Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
