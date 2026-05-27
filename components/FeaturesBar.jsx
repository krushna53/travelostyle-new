import Image from "next/image";
import DashedBorderFrame from "./DashedBorderFrame";

const features = [
  {
    title: "Destination Knowledge",
    desc: "We guide you toward destinations that truly fit your season, pace, budget, and purpose of travel.",
  },
  {
    title: "Operational Care",
    desc: "Good travel is felt in the absence of friction. We think ahead, organize clearly and communicate openly.",
  },
  {
    title: "Quick Responses",
    desc: "When something matters to you, it matters to us. You can always reach out to us for anything.",
  },
  {
    title: "On‑Ground Support",
    desc: "If plans shift, you won't be left to figure it out alone. We're ready to assist wherever you need us.",
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-[#fafafa] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left">
      <div className="mx-auto max-w-[85.2vw]">
        <DashedBorderFrame
          borderColor="#2C3078"
          borderWidth={3}
          horizontalDash={18}
          verticalDash={20}
          dashGap={14}
          className="flex flex-col lg:flex-row py-10"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-1 flex-col items-center justify-center gap-3 px-6 md:py-16 text-center"
            >
              {/* TITLE */}
              <h3 className="text-[16px] font-semibold text-[#2C3078] lg:text-[1vw]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="max-w-[260px] text-[13px] leading-6 text-[#2C3078] lg:text-[0.85vw]">
                {item.desc}
              </p>

              {/* SEPARATOR */}
              {i !== features.length - 1 && (
                <>
                  {/* MOBILE (vertical) */}
                  <div className="flex justify-center py-5 lg:hidden">
                    <Image
                      src="/Vector_blue.svg"
                      alt="separator"
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* DESKTOP (horizontal center between columns) */}
                  <div className="pointer-events-none absolute top-1/2 right-0 hidden translate-x-1/2 -translate-y-1/2 lg:block">
                    <Image
                      src="/Vector_blue.svg"
                      alt="separator"
                      width={20}
                      height={20}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </DashedBorderFrame>
      </div>
    </section>
  );
}