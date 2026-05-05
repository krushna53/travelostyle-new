import Image from "next/image";

export default function CollaborateSection() {
  return (
    <section id="collaborate" className="w-full">
      <div className="hidden md:flex items-stretch">
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center px-8 md:px-16 py-12">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl text-indigo-900 leading-snug font-taprom">
              Interested in collaborating <br />
              with TravelOStyle?
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base font-sans leading-relaxed">
              We re always looking to collaborate with ground operators,
              accommodation partners, and experience providers across all
              regions we operate in. If you work in a destination we should
              know, we d like to hear from you.
            </p>

            <a
              href="mailto:info@travelostyle.com"
              className="mt-6 inline-flex items-center gap-2 bg-indigo-900 text-white text-sm px-5 py-2 rounded-full font-sans"
            >
              Write To Us
            </a>
          </div>
        </div>

        <div className="relative h-75 w-full md:w-1/2 md:h-auto">
          <Image
            src="/collebrate.png"
            alt="collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative md:hidden">
        <div className="relative min-h-125 overflow-hidden">
          <Image src="/collebrate.png" alt="collaboration" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#2a0c6f]/90 via-[#2a0c6f]/50 to-[#2a0c6f]/20" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="max-w-[70vw] text-[32px] leading-[1.05] font-taprom">
                Interested in collaborating with TravelOStyle?
              </h2>
              <p className="mt-6 max-w-[80vw] text-[15px] leading-7 text-white/95">
                We&apos;re actively building partnerships with DMCs, ground operators,
                accommodation partners, and experience providers across all regions
                we operate in. If you work in a destination we should know, we&apos;d like
                to hear from you.
              </p>
              <a
                href="mailto:info@travelostyle.com"
                className="mt-6 inline-block rounded-full bg-white px-5 py-2 text-[16px] font-semibold text-[#2a0c6f]"
              >
                Ask Us Anything
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
