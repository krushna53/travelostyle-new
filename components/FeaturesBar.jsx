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
    <section id="about" className="bg-[#fafafa] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[85.2vw]">
        <div
          className="grid grid-cols-1 lg:grid-cols-4"
          style={{ border: "3px dashed #2C3078" }}
        >
          {features.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col gap-3 px-6 py-8 text-center
                ${i !== features.length - 1 ? " " : ""}`}
            >
              <h3 className="text-[15px] font-semibold text-[#2C3078] lg:text-[1vw]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-6 text-[#2C3078] lg:text-[0.85vw]">
                {item.desc}
              </p>

              {/* star separator only on desktop between columns */}
              {i !== features.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 bg-[#fafafa] px-1 lg:flex"
                  aria-hidden
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C10.2868 12.9463 11.0537 13.7132 12 24C12.9463 13.7132 13.7132 12.9463 24 12C13.7132 11.0537 12.9463 10.2868 12 0C11.0537 10.2868 10.2868 11.0537 0 12Z" fill="#2C3078"/>
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
