"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

const journeys = [
  {
    id: 1,
    title: "Jamaica",
    image:
      "/jamaica.jpg",
    description:
      "Jamaica — the land of reggae, rum, and radiant beaches offers one of the Caribbean's most vibrant and welcoming experiences.",
    duration: "4 Days | 3 Nights",
    location: "Montego Bay & Ocho Rios",
    date: "May-Dec 2026",
    price: "$5000",
  },
  {
    id: 2,
    title: "Punta Cana",
    image:
      "/punta.jpg",
    description:
      "Punta Cana — the jewel of the Dominican Republic — is home to some of the Caribbean's most breathtaking white-sand beaches.",
    duration: "4 Days | 3 Nights",
    location: "Dominican Republic",
    date: "May-Dec 2026",
    price: "$5000",
  },
];

export default function LandJourneys() {
  function openJourneyModal(journey) {
    window.dispatchEvent(
      new CustomEvent("openInquiry", {
        detail: {
          title: journey.title,
          nights: journey.duration,
          image: journey.image,
          source: "land",
        },
      }),
    );
  }

  return (
    <section
      id="land-journeys"
      className="bg-[#f2f2f2] py-14 px-4 sm:py-20 sm:px-6 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left"
    >
      <div className="mx-auto max-w-[85.2vw]">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <div className="mb-4 text-[#2B3481]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B3481] uppercase">
            Land Journeys
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {journeys.map((journey, index) => (
            <div key={index} className="relative group">
              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col relative"
                style={{
                  maskImage:
                    "radial-gradient(circle at left 220px, transparent 15px, black 16px), radial-gradient(circle at right 220px, transparent 15px, black 16px)",
                  WebkitMaskImage:
                    "radial-gradient(circle at left 220px, transparent 15px, black 16px), radial-gradient(circle at right 220px, transparent 15px, black 16px)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <div className="px-3 py-3">
                  <Image
                    src={journey.image}
                    alt="travel"
                    width={340}
                    height={100}
                    className="w-full h-45 object-cover rounded-lg"
                  />
                </div>
                <div className="px-6 mt-4">
                  {/* Wavy line divider */}
                  <div className=" w-full">
                    <Image
                      src="/Lineborder.png"
                      alt=""
                      width={260}
                      height={10}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-5 pt-2 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2B3481] mb-3">
                    {journey.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {journey.description}
                  </p>

                  <div className="space-y-1 text-xs font-bold text-[#2B3481] mb-4">
                    <p>{journey.duration}</p>
                    <p>{journey.location}</p>
                  </div>

                  <div className="">
                    <span className="border border-[#2B3481] text-[#2B3481] text-[10px] font-bold px-2 py-1 rounded">
                      {journey.date}
                    </span>
                  </div>

                  {/* Wavy line divider */}
                  <div className="my-4 w-full">
                    <Image
                      src="/Lineborder.png"
                      alt=""
                      width={260}
                      height={10}
                      className="w-full"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">
                        from
                      </p>
                      <p className="text-lg font-bold text-[#2B3481]">
                        {journey.price}
                        <span className="text-xs font-normal text-slate-400">
                          */person
                        </span>
                      </p>
                      <p className="text-[9px] text-slate-400 italic">
                        double occupancy*
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() => openJourneyModal(journey)}
                      className="rounded-full bg-[#2C3078] text-xl py-1 px-3 font-medium text-white"
                      size="md"
                    >
                      Get Details
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-2 flex gap-1 justify-center overflow-hidden translate-y-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-[#f2f2f2] rounded-full shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
