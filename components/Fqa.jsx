"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const FaqData = [
    {
      id: 1,
      question: "What is TravelOStyle?",
      answer:
        "Travel O' Style is a travel planning company that helps people find journeys that genuinely fit their lives. We offer ready-to-book group itineraries, private journey experiences, and a fully personalised tailor-made service — and everything in between.",
    },
    {
      id: 2,
      question: "Where is TravelOStyle based?",
      answer: "We are based in [Location], but we operate globally.",
    },
    {
      id: 3,
      question:
        "What are the benefits of booking with Travel O' Style versus booking independently?",
      answer:
        "Expertise, exclusive access, and 24/7 support during your trip.",
    },
    {
      id: 4,
      question: "Do you work across different budgets?",
      answer:
        "Yes, we tailor experiences ranging from boutique luxury to premium comfort.",
    },
    {
      id: 5,
      question: "How does your booking process work?",
      answer:
        "It starts with a consultation, followed by a custom proposal and final booking.",
    },
    {
      id: 6,
      question: "Can I customize a listed journey?",
      answer:
        "Absolutely. All our itineraries can be adjusted to your preferences.",
    },
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
              Honest answers to the things people wonder most before reaching out.
              If something isn’t here, ask us directly — we’d always rather you ask
              than assume.
            </p>

            <a
              href="mailto:info@travelostyle.com"
              className="inline-block mt-6 rounded-full bg-[#2C3078] px-5 py-2 text-white text-[18px] font-medium h-[39px] text-center"
            >
              Ask Us Anything
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
                    <Minus className="w-5 h-5 text-[#2C3078]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#2C3078]" />
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
              href="mailto:info@travelostyle.com"
              className="inline-block mt-4 rounded-full bg-[#2C3078] px-5 py-2 text-white text-[18px] font-medium h-[39px] text-center"
            >
              Ask Us Anything
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}