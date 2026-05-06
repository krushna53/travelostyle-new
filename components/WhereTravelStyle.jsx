import Image from "next/image";

export default function WhereTravelStyle() {
  return (
    <div id="where-travel-style" className="bg-[#f4f5f7] py-14 sm:py-20 px-4 sm:px-6 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left">
      <div className="md:text-center max-w-[85.2vw] mx-auto">
        <p className="text-2xl sm:text-4xl font-taprom text-[#2C3078] mb-1 tracking-wide">
          our origin story
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2C3078] mb-8 leading-tight">
          Where TravelOStyle began
        </h1>

        <div className="space-y-5 text-[15px] sm:text-lg text-[#2C3078] leading-7 md:max-w-[55vw] flex flex-col items-center font-light mx-auto">
          <p className="mx-auto max-w-[90vw]">
            We started from a simple observation: travel should be a respite.
            But for most people, planning it is anything but.
          </p>

          <p className="mx-auto max-w-[90vw]">
            We believe every traveller carries a dream of what a journey could
            be. Our role is to bring that dream to life with grace regardless of
            budget or experience level. Every traveler deserves to experience
            the version of a journey that genuinely fits them. Not a compromised
            version.
          </p>

          <p className="mx-auto max-w-[90vw]">
            With 30+ years of combined experience across land, air, and cruise, and across very different travel budgets and expectations – we’ve taken everything we know – about systems, logistics, on-ground operations and high - expectations, to build a travel company that leads with honesty. We’re here to meet you where you are and then expand on what’s possible.
          </p>
        </div>

        <div className="my-15 flex justify-center">
          <Image
            src="/Vector_blue.svg"
            alt="origin story"
            width={600}
            height={400}
            className="w-7 h-7 object-contain"
          />
        </div>

        <p className="text-[15px] sm:text-lg text-[#2C3078] max-w-[90vw] sm:max-w-[35vw] mx-auto leading-6 font-light">
          The full website is launching mid-2026. Until then, our journeys are
          available, our advisors are here, and the conversation can start
          today.
        </p>
      </div>
    </div>
  );
}
