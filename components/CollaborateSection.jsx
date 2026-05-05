import Image from "next/image";

export default function CollaborateSection() {
  return (
    <section id="collaborate" className="w-full">
      {/* Single unified layout — gradient & text position adapt via CSS */}
      <div className="relative min-h-125 md:h-[clamp(320px,28vw,480px)]">

        {/* Background image */}
        <Image
          src="/collebrate.png"
          alt="Collaborate with TravelOStyle"
          fill
          className="object-cover object-center"
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
        <div
          className="absolute inset-0 hidden md:block"
        />

        {/* Text — top on mobile, vertically centered on desktop */}
        <div className="absolute inset-0 flex items-start pt-8 md:items-center md:pt-0">
          <div className="mx-auto w-full max-w-[85.2vw] px-6 md:px-12">
            <div className="max-w-xs md:max-w-md">

              <h2
                className="font-taprom leading-snug text-white md:text-[#2C3078]"
                style={{ fontSize: "clamp(26px, 2.4vw, 40px)" }}
              >
                Interested in collaborating <br className="hidden md:block" />
                with TravelOStyle?
              </h2>

              <p className="mt-4 text-[14px] leading-relaxed text-white/90 md:text-[#2C3078]/80 md:text-[1vw]">
                We&apos;re always looking to collaborate with ground operators,
                accommodation partners, and experience providers across all
                regions we operate in. If you work in a destination we should
                know, we&apos;d like to hear from you.
              </p>

              <a
                href="mailto:info@travelostyle.com"
                className="mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold
                           bg-white text-[#2a0c6f]
                           md:bg-[#2C3078] md:text-white md:font-normal"
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
