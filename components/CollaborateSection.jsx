import Image from "next/image";

export default function CollaborateSection() {
  return (
    <section id="collaborate" className="w-full">
      {/* Single unified layout — gradient & text position adapt via CSS */}
      <div className="relative h-[620px]">
        {/* Background image */}
        <Image
          src="/collebrate.png"
          alt="Collaborate with TravelOStyle"
          fill
          className="
          object-cover 
          object-[75%_100%]
          md:object-center
          mt-40
          md:mt-0
          "
          priority
        />

        {/* Mobile gradient: dark→transparent top to bottom */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, #2a0c6f 0%, rgba(42,12,111,0.85) 40%, rgba(42,12,111,0.35) 65%, transparent 100%)",
          }}
        />

        {/* Desktop gradient: solid light left → transparent right */}
        <div className="absolute inset-0 hidden md:block" />

        {/* Text — top on mobile, vertically centered on desktop */}
        <div className="absolute inset-0 flex items-start pt-8 md:items-center md:pt-0">
          <div className="mx-auto w-full md:max-w-[85.2vw] px-6 md:px-12">
            <div className="max-w-xs md:max-w-md">
              <h2
                className="font-taprom leading-snug text-white md:text-[#2C3078] text-[40px] md:text-[56px] md:text-nowrap"
              >
                Interested in collaborating <br className="hidden md:block" />
                with TravelOStyle?
              </h2>

              <p className="mt-6 mb-12 text-lg font-light leading-relaxed text-white/90 md:text-[#2C3078]/80">
                We&apos;re always looking to collaborate with ground operators,
                accommodation partners, and experience providers across all
                regions we operate in. If you work in a destination we should
                know, we&apos;d like to hear from you.
              </p>

              <a
                href="mailto:info@travelostyle.com"
                className="rounded-full bg-[#2C3078] text-xl py-2 px-3 font-medium text-white"
              >
                Write To Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
