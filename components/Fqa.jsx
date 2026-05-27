"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const FaqData = [
    {
      id: 1,
      question: "What exactly is Travel O' Style?",
      answer:
        "Travel O' Style is a travel planning company that helps people find journeys that genuinely fit their lives. We offer ready-to-book group itineraries, private journey experiences, and a fully personalised tailor-made service — and everything in between.",
    },
    {
      id: 2,
      question: "Which destinations do you offer?",
      answer: "TravelOStyle operates globally. We design journeys across Europe, North Africa, East Africa, South Asia, Southeast Asia, East Asia, the U.S.A., and Oceania (Australia & New Zealand). For enquiries, reach our lead travel advisor, Rohan Shah, at info@travelostyle.com or +1 773 503 9742.",
    },
    {
      id: 3,
      question:
        "What are the benefits of booking with Travel O' Style versus booking independently?",
      answer:
        "When you book independently, you’re responsible for every detail — and for fixing things when they go wrong. With Travel O’ Style, we design the journey, vet every operator and property, manage all logistics, and stay available before, during, and after your trip.You get full transparency on inclusions and exclusions, honest guidance on whether a journey is right for you, and 24/7 on‑ground support. A journey with us comes with the confidence that your experience will be exactly as promised.",
    },
    {
      id: 4,
      question: "Do you work across different budgets?",
      answer:
        "Yes, we do! Travel O' Style works across a wide range of budgets. We curate mid-range journeys to full luxury private experiences. Our team is equally committed to designing the best trip within a set budget as we are to designing something completely unrestricted. The goal is to ensure that you feel your money was well spent. We don't believe in ranking travelers by what they spend and we will not oversell what your budget can't deliver.",
    },
    {
      id: 5,
      question: "How does your booking process work?",
      answer:"Start by finding a journey that interests you from the trips listed on this page or by telling us what you're looking for. You can submit an inquiry or reach out directly. A TravelOStyle advisor will reach out within 48hrs. Once you’re happy, we confirm the booking, outline the payment schedule clearly, and take care of everything from there. No ambiguity, no hidden or small print surprises.",
    },
    {
      id: 6,
      question: "Can I customize a listed journey?",
      answer:
        "Most of our journeys are designed to be shaped around you. Want to add a day, change the accommodation, adjust the pace, or swap an experience? Tell your TravelOStyle advisor and we'll work through it. Our listed itineraries can also be used as thoughtful starting points. For more extensive changes, a Tailor‑Made journey may be the better fit - and it begins with a simple conversation.",
    },
    {
      id:7,
      question: "I'm a DMC or ground operator — how do we work together?",
      answer:
      "TravelOStyle is actively building partnerships with DMCs, ground operators, accommodation partners, and experience providers across all regions we operate in. We're interested in working with operators who share our values around transparency, quality, and genuine care for travellers. If you work in a destination we should know —  reach out directly at info@travelostyle.com with the subject line DMC Partnership. We'll respond promptly."
    }
  ];

  return (
    <section
      id="faq"
      className="bg-[#F9F7F4] bg-[url('/background.jpg')] bg-cover bg-top px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[85.2vw] grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SECTION */}
        <div className="flex flex-col">
          <p className="text-[#2C3078] text-xl sm:text-[2.5vw] font-taprom">
            FAQs
          </p>

          <h2 className="text-[#2C3078] text-3xl sm:text-[40px] font-bold mt-2 leading-tight">
            Questions Worth <br /> Asking
          </h2>

          {/* Desktop only */}
          <div className="hidden md:block">
            <p className="mt-6 max-w-md text-[#2C3078] text-[15px] leading-relaxed">
             Honest answers to the things people wonder most before reaching out. If something isn&apos;t here, ask us directly — we&apos;d always rather you ask than assume.
            </p>

            <a
              href="#inquiry-form"
              className="inline-block mt-6 rounded-full bg-[#2C3078] px-5 py-2 text-white text-[18px] font-medium h-[39px] text-center"
            >
              Ask Me Anything
            </a>
          </div>
        </div>

        {/* RIGHT SECTION (FAQ LIST) */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {FaqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-4">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span className="text-[#2C3078] font-normal text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="w-5 h-5 shrink-0 text-[#2C3078]" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 text-[#2C3078]" />
                  )}
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#2C3078] font-light text-sm leading-relaxed pb-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile only bottom content */}
          <div className="md:hidden pt-6">
            <p className="text-[#2C3078] text-[15px] leading-relaxed font-light">
              Honest answers to the things people wonder most before reaching out.
              If something isn’t here, ask us directly — we’d always rather you ask
              than assume.
            </p>

            <a
              href="#inquiry-form"
              className="inline-block mt-4 rounded-full bg-[#2C3078] px-5 py-2 text-white text-[18px] font-medium h-[39px] text-center"
            >
              Ask Me Anything
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}