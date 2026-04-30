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
      desc: "Every traveler gets the same quality of attention no matter the budget. We don’t sort people by what they spend.",
      icon: "/equal .png",
    },
    {
      title: "Calm under pressure",
      desc: "Travel is occasionally unpredictable. Our confidence comes from experience, not optimism. When plans shift, we simply find the best available alternative.",
      icon: "/Layer.png",
    },
    {
      title: "The journey gives something back",
      desc: "We design travel that restores, reconnects, and shows people what’s possible.",
      icon: "/happytrip.png",
    },
  ];
  return (
    <section className="bg-[#2d3475] py-8 px-12">
      <div className="border border-dashed border-[#e9e9ee] rounded-xl p-6 text-center [border-width:2px] [border-spacing:40px">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
          {features.map((item, i) => (
            <div key={i} className="space-y-4 relative">
              <div className="ml-[6vw]">
                <Image src={item.icon} alt="star" width={60} height={60} />
              </div>
              <h3 className="font-semibold text-sm leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 leading-5 max-w-[220px] mx-auto">
                {item.desc}
              </p>

              {i !== features.length - 1 && (
                <span className="hidden md:block absolute -right-7 top-1/2 -translate-y-1/2 text-white/60">
                  <Image
                    src={"/smallstar.png"}
                    alt="star"
                    width={20}
                    height={20}
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
