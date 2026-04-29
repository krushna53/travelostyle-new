"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import CruiseJourneys from "./CruiseJourneys";
import TravelForm from "./TravelFom";
import LandJourneys from "./LandJourneys";

const images = [
  "/imagestravel1.jpg",
  "/travel2.avif",
  "/imagestravel1.jpg",
  "/travel2.avif",
  "/travel2.avif",
  "/travel2.avif",
];

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
  return (
    <div className="p-4 ">
      <div className="w-[80vw] overflow-x-auto bg-[#2c3078] p-2 custom-scroll">
        <div className="flex items-center">
          {images.map((src, index) => (
            <div key={index} className="flex items-center relative">
              {/* Image Card */}
              <div className="w-74 h-40 rounded-lg overflow-hidden flex-shrink-0 px-1">
                <Image
                  src={src}
                  alt="travel"
                  width={340}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Star between images */}
              {index !== images.length - 1 && (
                <div className="absolute right-[-30px] z-10">
                  <Image
                    src="/star.png"
                    alt="star"
                    width={60}
                    height={60}
                    className="opacity-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#f9f9f9] py-20 px-4 text-center">
        <h1 className="text-3xl  font-semibold italic text-indigo-900 leading-snug font-[cursive]">
          Experience travel the way it was always supposed to feel
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
          TravelOStyle plans thoughtful journeys around real budgets, real
          rhythms, and what matters to you—so the trip starts feeling easy long
          before you leave.
        </p>
        <div className="mt-2">
          <Button
            variant="bordered"
            className="
           border-2
           text-[12px] 
           text-indigo-900 
           p-1
           rounded-full"
          >
            View Journeys
          </Button>
        </div>
      </section>

      <div className="relative">
        <div className="w-[80vw] overflow-x-auto bg-[#2c3078] p-2 custom-scroll">
          <div className="flex items-center">
            {images.map((src, index) => (
              <div key={index} className="flex items-center relative">
                {/* Image Card */}
                <div className="w-74 h-40 rounded-lg overflow-hidden flex-shrink-0 px-1">
                  <Image
                    src={src}
                    alt="travel"
                    width={340}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Star between images */}
                {index !== images.length - 1 && (
                  <div className="absolute right-[-30px] z-10">
                    <Image
                      src="/star.png"
                      alt="star"
                      width={60}
                      height={60}
                      className="opacity-90"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-14 left-0 w-[80vw] flex justify-center z-50">
          <div className="flex items-center justify-between h-[70px] w-[70vw] px-6 border border-2 border rounded-md border-white/80 bg-[#2c3078]/55 backdrop-blur-lg shadow-lg text-white">
            <div className="flex gap-6 text-sm">
              <span>About</span>
              <span>Journeys</span>
              <span>How it works</span>
            </div>

            <div className="text-lg tracking-widest font-light">
              TRAVEL<span className="italic">O</span>STYLE
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span>FAQ</span>
              <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm">
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] py-16 ">
        <div className="max-w-5xl ml-8 border-dashed border-[#2c3078] py-10 [border-width:2px] [border-spacing:40px">
          <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-6 relative">
            {features.map((item, index) => (
              <div key={index} className="relative px-4">
                <h3 className="text-indigo-900 font-semibold text-sm mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>

                {/* Star Separator */}
                {index !== features.length - 1 && (
                  <span
                    className="
                  hidden md:flex
                  items-center
                  justify-center
                  absolute
                 right-0
                top-0
                left-60
                 h-full
               text-indigo-900
    "
                  >
                    ✦
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#282c6e] p-10 text-center text-white max-w-6xl">
        <p className="italic text-sm opacity-80 mb-2">season’s favorite</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Take A Journey With Us
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-80 mb-10">
          Arriving somewhere in its best season is its own kind of magic. Reach
          out for the complete itinerary and pricing, and we’ll take it from
          there.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl ">
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
      <div className="p-6 flex gap-4">
        <Button color="primary">Click Me</Button>

        <Card className="p-4">HeroUI is working 🚀</Card>
      </div>
    </div>
  );
}
