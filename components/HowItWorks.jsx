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
      className="bg-[#2c3078] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[85.2vw] text-center">
        {/* season's favorite — exact Figma specs */}
        <p
          className="font-taprom text-white"
          style={{
            fontSize: "clamp(28px, 2.5vw, 48px)",
            fontWeight: 400,
            lineHeight: "64px",
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          season&apos;s favorite
        </p>

        <h2 className="mt-1 text-[32px] font-bold text-white sm:text-[2.8vw] leading-tight">
          Take A Journey With Us
        </h2>

        <p className="mx-auto mt-5 max-w-[90vw] text-[14px] leading-7 text-white/80 sm:max-w-[50vw] sm:text-[1vw]">
          Arriving in the perfect place at the perfect moment is a rare kind of
          magic. Share your interest with us, and we&apos;ll curate the complete
          itinerary and pricing, then handle every detail from there.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center gap-4 px-6 py-10 text-center"
              style={{ border: "3px dashed #fafafa" }}
            >
              <span className="text-[40px] font-bold text-white sm:text-[3vw]">
                {step.number}
              </span>
              <h3 className="text-[16px] font-semibold text-white sm:text-[1.1vw]">
                {step.title}
              </h3>
              <p className="text-[13px] leading-6 text-white/75 sm:text-[0.9vw]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
