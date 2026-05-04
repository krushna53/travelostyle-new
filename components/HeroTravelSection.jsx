"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
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
  const features = [
    {
      title: "Destination Knowledge",
      desc: "We help you understand what suits your season, pace, budget and purpose of travel",
    },
    {
      title: "Operational Care",
      desc: "We help you understand what suits your season, pace, budget and purpose of travel",
    },
    {
      title: "Quick Responses",
      desc: "Good travel is felt in the absence of friction. We think ahead, organize clearly and communicate openly",
    },
    {
      title: "On-ground Support",
      desc: "If plans change, we won’t leave it to you to figure it out alone. We’re in this together.",
    },
  ];

  const steps = [
    {
      no: "1",
      title: "Find a Journey",
      desc: "Browse our listing below to find a trip you'd like to take",
    },
    {
      no: "2",
      title: "Reach Out",
      desc: "Fill our enquiry form to reach out to us for more information",
    },
    {
      no: "3",
      title: "Receive Details",
      desc: "We'll send over the full pricing, itinerary, inclusions and more to help you decide",
    },
    {
      no: "4",
      title: "Book & Go",
      desc: "Confirm your booking, complete the payment schedule, and set sail!",
    },
  ];

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
                <Image src={src} alt="travel" fill className="object-cover" />
              </div>

              {/* ⭐ STAR SEPARATOR */}
              {/* Mobile → only after first image, positioned inside grid to avoid overflow */}
              {/* Desktop → after every except last */}
              {(index === 0 || // mobile case
                index !== 3) && ( // desktop case
                <div className="hidden absolute top-1/2 -right-6 -translate-y-1/2 z-10 sm:block">
                  <Image src="/Vector.png" alt="star" width={40} height={40} />
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
          <Link href="#cruise-journeys">
            <Button
              variant="bordered"
              className="rounded-full border-2 px-5 py-2 text-[#2C3078]"
            >
              View Journeys
            </Button>
          </Link>
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
                <Image src={src} alt="travel" fill className="object-cover" />
              </div>

              {(index === 0 || index !== 3) && (
                <div className="hidden absolute top-1/2 -right-6 -translate-y-1/2 z-10 sm:block">
                  <Image src="/Vector.png" alt="star" width={40} height={40} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9f9f9] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[90vw] rounded-xl border-2 border-dashed border-[#2c3078] px-4 py-8 sm:max-w-[85.2vw] sm:px-6 lg:px-8">
          <div className="sm:hidden">
            <div className="flex flex-col items-center text-center">
              {features.map((item, index) => (
                <div key={index} className="w-full py-5 first:pt-0 last:pb-0">
                  <h3 className="mb-2 text-[18px] font-bold text-indigo-900">
                    {item.title}
                  </h3>
                  <p className="mx-auto max-w-52 text-[12px] leading-5 text-gray-500">
                    {item.desc}
                  </p>
                  {index !== features.length - 1 && (
                    <div className="flex justify-center py-5">
                      <Image
                        src="/Vectorblue.png"
                        alt="star separator"
                        width={14}
                        height={14}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden grid-cols-1 gap-8 text-center md:grid md:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center px-4"
              >
                <h3 className="mb-3 text-[18px] font-bold text-indigo-900 sm:text-[1.05vw]">
                  {item.title}
                </h3>
                <p className="max-w-68 text-sm leading-relaxed text-gray-500 sm:max-w-[15vw] sm:text-[0.8vw]">
                  {item.desc}
                </p>
                {index !== features.length - 1 && (
                  <div className="hidden absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:block">
                    <Image
                      src="/Vectorblue.png"
                      alt="star separator"
                      width={15}
                      height={15}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#282c6e] py-16 text-white sm:py-20">
        <div className="mx-auto flex w-full max-w-[90vw] flex-col items-center px-4 text-center sm:max-w-[85.2vw] sm:px-4">
          <p className="mb-2 text-[18px] opacity-80 font-taprom sm:text-[2.4vw]">
            season’s favorite
          </p>
          <h2 className="mb-4 text-[34px] font-semibold md:text-[3.2vw]">
            Take A Journey With Us
          </h2>
          <p className="mx-auto mb-10 max-w-[20rem] text-[13px] leading-6 opacity-80 sm:max-w-[52.5vw] sm:text-[1.05vw] md:text-base">
            Arriving in the perfect place at the perfect moment is a rare kind
            of magic. Share your interest with us, and we’ll curate the
            complete itinerary and pricing, then handle every detail from
            there.
          </p>

          <div className="sm:hidden w-full max-w-[20rem]">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4 text-left">
                <div className="flex flex-col items-center pt-1">
                  <Image
                    src="/Vector.png"
                    alt="timeline star"
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                  {index !== steps.length - 1 && (
                    <div className="mt-2 h-14 w-px bg-white/70" />
                  )}
                </div>

                <div className="pb-8 last:pb-0">
                  <h3 className="text-[20px] font-semibold leading-none">
                    {item.no}
                  </h3>
                  <h4 className="mt-1 text-[14px] font-medium leading-5">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-5 text-white/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-dashed border-white p-6 text-center"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.no}</h3>
                <h4 className="mb-2 font-medium">{item.title}</h4>
                <p className="text-xs leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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