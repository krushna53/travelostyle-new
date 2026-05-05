import Image from "next/image";

export default function ValuesSection() {
  const features = [
    {
      title: "Honesty is our default",
      desc: "We tell you what's included, what isn't, and where the trade-offs are — early and clearly.",
      icon: "/trusthonesty1.png",
    },
    {
      title: "Respect isn't a premium add-on",
      desc: "Every traveler gets the same quality of attention no matter the budget. We don't sort people by what they spend.",
      icon: "/equal .png",
    },
    {
      title: "Calm under pressure",
      desc: "Travel is occasionally unpredictable. Our confidence comes from experience, not optimism. When plans shift, we simply find the best available alternative.",
      icon: "/Layer.png",
    },
    {
      title: "The journey gives something back",
      desc: "We design travel that restores, reconnects, and shows people what's possible.",
      icon: "/happytrip.png",
    },
  ];

  return (
    <section
      id="values-section"
      className="bg-[#2d3475] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[85.2vw] border-2 border-dashed border-white/85 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid grid-cols-2 gap-8 text-center text-white md:grid-cols-4 md:gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-start gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={52}
                  height={52}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold leading-snug sm:text-[0.95rem]">
                {item.title}
              </h3>
              <p className="mx-auto max-w-48 text-[11px] leading-5 text-white/80 sm:max-w-55 sm:text-[0.8rem] sm:leading-6">
                {item.desc}
              </p>

              {i !== features.length - 1 && (
                <span className="absolute right-[-1.4rem] top-1/2 hidden -translate-y-1/2 md:block text-white/60">
                  <Image
                    src="/smallstar.png"
                    alt="separator"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
