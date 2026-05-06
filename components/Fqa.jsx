import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
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
      answer: "Expertise, exclusive access, and 24/7 support during your trip.",
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
    <div id="faq" className="bg-[#F9F7F4] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20" style={{ backgroundImage: "url('/background.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'auto', backgroundPosition: '0 0' }}>
      <div className="grid w-full max-w-[85.2vw] mx-auto grid-cols-1 gap-10 px-0 md:grid-cols-2 md:gap-12 md:px-20">
        <div>
          <span className="text-[20px] text-[#2C3078] font-taprom sm:text-[3vw]">FAQs</span>
          <br />
          <span className="text-[34px] font-bold text-[#2C3078] sm:text-[40px]">
            Questions Worth <br /> Asking
          </span>
          <br />
          <br />
          <p className="max-w-sm text-[15px] leading-relaxed text-[#2C3078] sm:text-lg">
            Honest answers to the things people wonder most before reaching out.
            If something isn t here, ask us directly —we d always rather you ask
            than assume.
          </p>
          <br />
          <a
            href="mailto:info@travelostyle.com"
            className="inline-block rounded-full bg-[#2D316B] px-8 py-3 font-medium text-white transition-all hover:bg-opacity-90"
          >
            Ask Us Anything
          </a>
        </div>

        <div className="divide-y divide-gray-300 border-t border-gray-300">
          {FaqData.map((faq) => (
            <div key={faq.id} className="py-4">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center text-left py-2 group"
              >
                <span
                  className={`font-medium transition-colors text-[#2C3078] ${openId === faq.id ? "text-[#2D316B]" : "text-[#2D316B]"}`}
                >
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <Minus className="w-5 h-5 text-[#2D316B] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#2C3078] shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[#2C3078] leading-relaxed pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-b border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
