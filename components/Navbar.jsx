"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-3 left-1/2 z-50 hidden w-full max-w-[85.95vw] -translate-x-1/2 md:flex md:justify-center">
        <div className="flex h-[6vw] w-full items-center justify-between rounded-lg border-2 border-white/80 bg-[#2c3078]/55 px-14 text-white shadow-lg backdrop-blur-lg">
          <div className="flex gap-6 ">
            <span className="text-[1.05vw]">About</span>
            <span className="text-[1.05vw]">Journeys</span>
            <span className="text-[1.05vw]">How it works</span>
          </div>
          <Image src="/TravelOstyle.png" alt="Travel O Style" width={299} height={57} priority />
          <div className="flex items-center gap-6 text-sm">
            <span className="text-[1.05vw]">FAQ</span>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-[1.05vw]">
              Plan Your Journey
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 left-1/2 z-50 flex w-[min(92vw,420px)] -translate-x-1/2 justify-center md:hidden">
        <div className="flex w-full flex-col items-center rounded-xl border border-white/70 bg-[#2c3078]/80 px-4 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-lg">
          <Image
            src="/TravelOstyle.png"
            alt="Travel O Style"
            width={220}
            height={42}
            className="h-auto w-45"
            priority
          />
          <span className="mt-1 text-[13px] font-semibold uppercase tracking-[0.08em]">
            Menu
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
