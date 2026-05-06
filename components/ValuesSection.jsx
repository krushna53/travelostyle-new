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
    <section className="bg-[#2d3475] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <DashedBorderFrame
        borderColor="rgba(255,255,255,0.85)"
        borderWidth={2}
        horizontalDash={18}
        verticalDash={20}
        dashGap={14}
        className="mx-auto max-w-[85.2vw]"
        innerClassName="flex flex-col lg:flex-row items-stretch justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="relative flex w-full flex-col items-center text-center lg:flex-1"
          >
            {/* ICON (fixed height) */}
            <div className="flex h-[120px] items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
                className="h-24 w-24 object-contain"
              />
            </div>

            {/* TITLE (fixed height) */}
            <div className="flex h-[60px] items-center justify-center px-2">
              <h3 className="text-lg font-semibold text-white leading-tight">
                {item.title}
              </h3>
            </div>

            {/* DESC (fixed height) */}
            <div className="flex h-[110px] items-start justify-center px-2">
              <p className="text-xs leading-5 text-white/80 lg:text-[0.8rem] lg:leading-6">
                {item.desc}
              </p>
            </div>

            {/* ⭐ SEPARATOR */}
            {i !== features.length - 1 && (
              <>
                {/* Mobile */}
                <div className="my-6 lg:hidden">
                  <Image
                    src="/smallstar.png"
                    alt="separator"
                    width={20}
                    height={20}
                  />
                </div>

                {/* Desktop */}
                <div className="pointer-events-none absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 lg:block">
                  <Image
                    src="/smallstar.png"
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
    </section>
  );
}