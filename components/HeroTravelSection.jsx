"use client";
import { useEffect, useRef } from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import CruiseJourneys from "./CruiseJourneys";
import TravelForm from "./TravelFom";
import LandJourneys from "./LandJourneys";
import WhereTravelStyle from "./WhereTravelStyle";
import ValuesSection from "./ValuesSection";
import FaqData from "./Fqa";
import CollaborateSection from "./CollaborateSection";
import BottomSection from "./BottomSection";
import ScrollSilder from "./ScrollSilder";
import InquiryModal from "./Inquire";

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

export default function HeroTravelSection() {
  const images = [
    "/Rectangle1.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png",
    "/Rectangle1.png",
    "/Rectangle2.png",
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 0.5;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <ScrollSilder />

      <section className="py-15 px-4 text-center">
        <h1 className="text-[39.4px] font-taprom text-indigo-900 text-[#2C3078]">
          Making travel feel the way it is supposed to
        </h1>
        <p className="mt-4 max-w-[43.2vw] mx-auto text-[1.05vw] text-[#2C3078]">
          Travel is full of options. TravelOStyle makes sense of them - for your
          budget, your time, your preferences and your idea of an exceptional
          trip.
        </p>
        <div className="mt-2">
          <Button
            onClick={() => {
              document.getElementById("Journeys")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            variant="bordered"
            className="
           border-2
           text-[1.05vw] 
         w-[9.65vw]
         h-[1.95vw]
           rounded-full"
          >
            View Journeys
          </Button>
        </div>
      </section>
      <ScrollSilder />
      <div className="bg-[#f9f9f9] py-10 md:py-16">
        <div className="max-w-[85vw] mx-auto border-2 border-dashed border-[#2c3078] py-6 md:py-8 px-4 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-6 md:gap-8 relative">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative px-4 flex flex-col items-center"
              >
                <h3 className="text-indigo-900 font-bold text-sm sm:text-base md:text-lg mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[90%] md:max-w-[15vw]">
                  {item.desc}
                </p>
                {index !== features.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-15px] -translate-y-1/2 z-10">
                    <Image
                      src="/Vectorblue.png"
                      alt="separator"
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

      <section
        id="seasonfavorite"
        className="bg-[#282c6e] h-[39.1vw] text-center text-white py-20 flex flex-col justify-center items-center"
      >
        <p className="text-[2.4vw] opacity-80 mb-2 font-taprom">
          season’s favorite
        </p>
        <h2 className="text-3xl md:text-[3.2vw] font-semibold mb-4">
          Take A Journey With Us
        </h2>
        <p className="max-w-[52.5vw] mx-auto text-[1.05vw] md:text-base opacity-80 mb-10">
          Arriving in the perfect place at the perfect moment is a rare kind of
          magic. Share your interest with us, and we’ll curate the complete
          itinerary and pricing , then handle every detail from there
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl ">
          {steps.map((item, index) => (
            <div
              key={index}
              className="border border-dashed border-white rounded-xl p-6 text-center [border-width:2px] [border-spacing:40px"
            >
              <h3 className="text-lg font-semibold mb-2">{item.no}</h3>
              <h4 className="font-medium mb-2">{item.title}</h4>
              <p className="text-xs opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CruiseJourneys />
      <LandJourneys />
      <TravelForm />
      <WhereTravelStyle />
      <ValuesSection />
      <FaqData />
      <CollaborateSection />
      {/* <InquiryModal /> */}
      <div className="p-6 flex gap-4"></div>
      <BottomSection />
    </div>
  );
}
