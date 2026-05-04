"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const journeys = [
  {
    id: 1,
    title: "Jamaica",
    image:
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?q=80&w=600",
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
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
    description:
      "Punta Cana — the jewel of the Dominican Republic — is home to some of the Caribbean's most breathtaking white-sand beaches.",
    duration: "4 Days | 3 Nights",
    location: "Dominican Republic",
    date: "May-Dec 2026",
    price: "$5000",
  },
];

export default function LandJourneys() {
  return (
    <section id="land-journeys" className="bg-[#f2f2f2] py-20 px-6 min-h-screen flex flex-col items-center max-w-[85.2vw] mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="mb-4 text-[#2B3481]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#2B3481] tracking-[0.2em] uppercase">
          Land Journeys
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[85.2vw] w-full">
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
              <Image
                src={"/imagestravel1.jpg"}
                alt="travel"
                width={340}
                height={200}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="px-6 py-2">
                <div
                  className="w-full h-0.5 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #2B3481 1px, transparent 1px)",
                    backgroundSize: "8px 1px",
                  }}
                ></div>
              </div>
              <div className="px-8 pb-8 pt-2 flex flex-col grow">
                <h3 className="text-2xl font-bold text-[#2B3481] mb-3">
                  {journey.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {journey.description}
                </p>

                <div className="space-y-1 text-xs font-bold text-[#2B3481] mb-4">
                  <p>{journey.duration}</p>
                  <p>{journey.location}</p>
                </div>

                <div className="mb-8">
                  <span className="border border-[#2B3481] text-[#2B3481] text-[10px] font-bold px-2 py-1 rounded">
                    {journey.date}
                  </span>
                </div>

                <div className="w-full h-px bg-slate-200 mb-6"></div>

                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">from</p>
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

                  <Link href="#inquiry-form">
                    <Button
                      className="bg-[#2B3481] text-white rounded-full px-6 font-bold"
                      size="md"
                    >
                      Get Details
                    </Button>
                  </Link>
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
    </section>
  );
}

