"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import CruiseJourneys from "./CruiseJourneys";
import TravelForm from "./TravelFom";
import LandJourneys from "./LandJourneys";
import WhereTravelStyle from "./WhereTravelStyle";
import ValuesSection from "./ValuesSection";
import FaqData from "./Fqa";
import CollaborateSection from "./CollaborateSection";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

const images = [
  "/Rectangle1.png",
  "/Rectangle2.png",
  "/Rectangle3.png",
  "/Rectangle4.png",
  "/Rectangle1.png",
  "/Rectangle2.png",
];

export default function HeroTravelSection() {
  return (
    <div>
      <Navbar />

      {/* IMAGE STRIP */}
      <div className="overflow-hidden bg-[#2c3078] p-2">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {images.slice(0, 4).map((src, index) => (
            <div
              key={index}
              className={`${index > 1 ? "hidden sm:block" : ""} relative`}
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-52">
                <Image
                  src={src}
                  alt="travel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* ⭐ STAR SEPARATOR */}
              {/* Mobile → only after first image, positioned inside grid to avoid overflow */}
              {/* Desktop → after every except last */}
              {(
                (index === 0) || // mobile case
                (index !== 3)    // desktop case
              ) && (
                <div className="hidden absolute top-1/2 -right-6 -translate-y-1/2 z-10 sm:block">
                  <Image
                    src="/Vector.png"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TEXT SECTION */}
      <section className="px-4 py-10 text-center sm:py-15">
        <h1 className="text-[34px] leading-tight font-taprom text-[#2C3078] sm:text-[56px]">
          Making travel feel the way it is supposed to
        </h1>
        <p className="mx-auto mt-4 max-w-full px-2 text-[16px] leading-7 text-[#2C3078] sm:max-w-[43.2vw] sm:px-0 sm:text-[21px]">
          Travel is full of options. TravelOStyle makes sense of them - for your
          budget, your time, your preferences and your idea of an exceptional
          trip.
        </p>
        <div className="mt-4">
          <Button
            variant="bordered"
            className="rounded-full border-2 px-5 py-2 text-[#2C3078]"
          >
            View Journeys
          </Button>
        </div>
      </section>

      {/* SECOND IMAGE STRIP */}
      <div className="overflow-hidden bg-[#2c3078] p-2">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {images.slice(0, 4).map((src, index) => (
            <div
              key={index}
              className={`${index > 1 ? "hidden sm:block" : ""} relative`}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-52">
                <Image
                  src={src}
                  alt="travel"
                  fill
                  className="object-cover"
                />
              </div>

              {(
                (index === 0) ||
                (index !== 3)
              ) && (
                <div className="hidden absolute top-1/2 -right-6 -translate-y-1/2 z-10 sm:block">
                  <Image
                    src="/Vector.png"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <CruiseJourneys />
      <LandJourneys />
      <TravelForm />
      <WhereTravelStyle />
      <ValuesSection />
      <FaqData />
      <CollaborateSection />
      <FooterSection />
    </div>
  );
}