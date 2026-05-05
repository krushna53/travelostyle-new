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
import FeaturesBar from "./FeaturesBar";
import HowItWorks from "./HowItWorks";

const images = [
  "/Rectangle1.png",
  "/Rectangle2.png",
  "/Rectangle3.png",
  "/Rectangle4.png",
];

export default function HeroTravelSection() {
  const duplicated = [...images, ...images]; // important for infinite loop

  return (
    <div>
      <Navbar />

      {/* 🔥 TOP STRIP (LEFT SCROLL) */}
      <div className="overflow-hidden bg-[#2c3078] p-2">
        <div className="flex w-max animate-scroll-left gap-2">
          {duplicated.map((src, index) => (
            <div key={index} className="relative shrink-0 w-[48vw] sm:w-[24vw]">
              <div className="relative h-[52vw] sm:h-[16.41vw] rounded-lg overflow-hidden">
                <Image src={src} alt="travel" fill className="object-cover" />
              </div>

              {/* star */}
              {(
                <div className="absolute top-1/2 -right-6 md:-right-6 sm:-right-5 -translate-y-1/2 z-10">
                  <Image src="/Vector.png" alt="star" width={40} height={40} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TEXT */}
      <section className="px-4 py-10 text-center sm:py-15">
        <h1
          className="font-taprom text-[#2C3078]"
          style={{
            fontSize: "clamp(34px, 2.9vw, 56px)",
            fontWeight: 400,
            lineHeight: "64px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Making travel feel the way it is supposed to
        </h1>
        <p
          className="mx-auto mt-4 max-w-[92vw] sm:max-w-[50vw]"
          style={{
            fontFamily: "Nohemi, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(16px, 1.09vw, 21px)",
            lineHeight: "40px",
            letterSpacing: "0.05em",
            textAlign: "center",
            color: "#2C3078",
          }}
        >
          Travel is full of options. TravelOStyle makes sense of them — for
          your budget, your time, your preferences and your idea of an
          exceptional trip.
        </p>
        <div className="mt-4">
          <Link href="#cruise-journeys">
            <Button className="rounded-full border-2 px-5 py-2 text-[#2C3078]">
              View Journeys
            </Button>
          </Link>
        </div>
      </section>

      {/* 🔥 BOTTOM STRIP (RIGHT SCROLL) */}
      <div className="overflow-hidden bg-[#2c3078] p-2">
        <div className="flex w-max animate-scroll-right gap-2">
          {duplicated.map((src, index) => (
            <div key={index} className="relative shrink-0 w-[48vw] sm:w-[24vw]">
              <div className="relative h-[52vw] sm:h-[16.41vw] rounded-lg overflow-hidden">
                <Image src={src} alt="travel" fill className="object-cover" />
              </div>

              {(
                <div className="absolute top-1/2 -right-6 md:-right-6 sm:-right-5 -translate-y-1/2 z-10">
                  <Image src="/Vector.png" alt="star" width={40} height={40} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <FeaturesBar />
      <HowItWorks />

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