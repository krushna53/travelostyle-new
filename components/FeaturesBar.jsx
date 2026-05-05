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
    title: "On-ground Support",
    desc: "If plans shift, you won't be left to figure it out alone. We're ready to assist wherever you need us.",
  },
];

export default function FeaturesBar() {
  return (
    <section id="about" className="bg-[#fafafa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[85.2vw]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "3px dashed #2C3078" }}
        >
          {features.map((item, i) => (
            <div key={i} className="relative flex flex-col gap-3 px-6 py-8 text-center">
              <h3 className="text-[15px] font-semibold text-[#2C3078] sm:text-[1vw]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-6 text-[#2C3078] sm:text-[0.85vw]">
                {item.desc}
              </p>

              {i !== features.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-[#2C3078] text-lg font-light lg:flex items-center justify-center"
                  style={{ zIndex: 1 }}
                  aria-hidden
                >
                  +
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
