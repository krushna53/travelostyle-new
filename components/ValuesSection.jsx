import Image from "next/image";
import DashedBorderFrame from "./DashedBorderFrame";

export default function ValuesSection() {
  const features = [
    {
      title: "Honesty is our default",
      desc: "We tell you what's included, what isn't, and where the trade-offs are — early and clearly.",
      icon: "/trust_honesty.svg",
    },
    {
      title: "Respect isn't a premium add-on",
      desc: "Every traveler gets the same quality of attention no matter the budget. We don't sort people by what they spend.",
      icon: "/equal.svg",
    },
    {
      title: "Calm under pressure",
      desc: "Travel is occasionally unpredictable. Our confidence comes from experience, not optimism. When plans shift, we simply find the best available alternative.",
      icon: "/calm.svg",
    },
    {
      title: "The journey gives something back",
      desc: "We design travel that restores, reconnects, and shows people what's possible.",
      icon: "/happy_trip.svg",
    },
  ];

  return (
    <section className="bg-[#2d3475] px-4 py-14 sm:px-6 lg:px-28">
      <DashedBorderFrame
        borderColor="rgba(255,255,255,0.85)"
        borderWidth={2}
        horizontalDash={18}
        verticalDash={20}
        dashGap={14}
        className="mx-auto"
        innerClassName="flex flex-col lg:flex-row items-center justify-between py-12"
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-1 flex-col items-center text-center"
          >
            {/* ICON */}
            <Image
              src={item.icon}
              alt={item.title}
              width={160}
              height={160}
              className="mb-6 h-32 w-32 object-contain"
            />

            {/* TITLE */}
            <h3 className="text-white text-[17px] font-semibold leading-tight max-w-[220px]">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-white/80">
              {item.desc}
            </p>

            {/* ⭐ SEPARATOR */}
            {i !== features.length - 1 && (
              <>
                {/* MOBILE */}
                <div className="my-8 lg:hidden">
                  <Image
                    src="/smallstar.png"
                    alt="separator"
                    width={18}
                    height={18}
                  />
                </div>

                {/* DESKTOP → aligned near title */}
                <div className="pointer-events-none absolute hidden lg:block"
                     style={{
                       right: "-22px",
                       top: "45%", // 👈 aligns near title (not center)
                       transform: "translateY(-50%)"
                     }}
                >
                  <Image
                    src="/Vector.svg"
                    alt="separator"
                    width={18}
                    height={18}
                    className="object-contain h-5 w-5"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </DashedBorderFrame>
    </section>
  );
}