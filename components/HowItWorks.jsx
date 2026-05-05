const steps = [
  {
    number: "1",
    title: "Find a Journey",
    desc: "Browse our journeys to find one that inspires you.",
  },
  {
    number: "2",
    title: "Reach Out",
    desc: "Inquire with us for more information and personal guidance.",
  },
  {
    number: "3",
    title: "Receive Details",
    desc: "We'll share the itinerary along with suggested options for informed decision-making.",
  },
  {
    number: "4",
    title: "Book & Go",
    desc: "Confirm your booking with a deposit, follow our payment schedule and set out!",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#2c3078] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[85.2vw] text-center">
        {/* season's favorite — Taprom, exact Figma specs */}
        <p
          className="font-taprom text-white"
          style={{
            fontSize: "clamp(24px, 2.5vw, 48px)",
            fontWeight: 400,
            lineHeight: "1.4",
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          reader&apos;s favorite
        </p>

        <h2
          className="mt-2 font-bold text-white leading-tight"
          style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
        >
          Take A Journey With Us
        </h2>

        <p
          className="mx-auto mt-4 max-w-[90vw] leading-7 text-white/80 sm:max-w-[55vw]"
          style={{ fontSize: "clamp(13px, 1vw, 18px)" }}
        >
          Arriving in the perfect place at the perfect moment is a rare kind of
          magic. Share your interest with us, and we&apos;ll curate the complete
          itinerary and pricing, then handle every detail from there.
        </p>

        {/* Mobile: Vertical timeline | Desktop: Grid */}
        <div className="mt-10">
          {/* Mobile Timeline */}
          <div className="sm:hidden relative px-6">
            {/* Vertical connecting line */}
            <div className="absolute left-[37px] top-5 bottom-24 w-1 bg-gradient-to-b from-white/30 via-white/20 to-white/30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-6 text-left">
                  {/* Star and number */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <span className="text-4xl text-white mb-2">✦</span>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 pt-1">
                    <span
                      className="font-bold text-white text-center"
                      style={{ fontSize: "24px" }}
                    >
                      {step.number}
                    </span>
                    <h3 className="font-semibold text-white text-left" style={{ fontSize: "16px" }}>
                      {step.title}
                    </h3>
                    <p
                      className="mt-1 leading-6 text-white/75 text-left"
                      style={{ fontSize: "13px" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-4 px-6 py-8 text-center"
                style={{ border: "3px dashed #fafafa" }}
              >
                <span
                  className="font-bold text-white"
                  style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-semibold text-white"
                  style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-6 text-white/75"
                  style={{ fontSize: "clamp(12px, 0.9vw, 15px)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
