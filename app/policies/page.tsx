import Image from "next/image";
import Link from "next/link";
import FooterSection from "../../components/FooterSection";

export const metadata = {
  title: "Policies | Travel O' Style",
  description: "Privacy, Cancellation, and Refund Policies for Travel O' Style.",
};

const policies = [
  {
    id: "privacy",
    title: "Privacy Policy",
    intro:
      "Your privacy matters to us. This policy explains what personal information we collect, how we use it, and how we protect it.",
    items: [
      {
        heading: "What We Collect",
        body: "When you submit an inquiry or book a journey, we collect personal information including your name, contact details, travel preferences, and payment information. We may also collect anonymised browsing data through standard web analytics tools.",
      },
      {
        heading: "How We Use It",
        body: "We use your information solely to fulfil your travel requests, communicate updates about your booking, and provide you with relevant journey recommendations. We do not sell or rent your data to third parties.",
      },
      {
        heading: "Data Sharing",
        body: "Your details are shared only with the suppliers and operators required to fulfil your booking (e.g. hotels, airlines, cruise lines). All partners are required to handle your data in accordance with applicable privacy regulations.",
      },
      {
        heading: "Data Retention",
        body: "We retain your personal data for as long as necessary to manage your booking and comply with legal obligations. You may request deletion of your data at any time by contacting us.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at info@travelostyle.com.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    intro:
      "We understand that plans can change. The following cancellation terms apply to most journeys booked through TravelOStyle. Specific terms for individual journeys will be communicated at the time of booking.",
    items: [
      {
        heading: "General Cancellation Terms",
        body: "Cancellations must be submitted in writing to your TravelOStyle advisor. Verbal cancellations are not accepted. The date of written notice determines the applicable cancellation fee.",
      },
      {
        heading: "Group & Land Itineraries",
        body: "Cancellations made more than 60 days prior to departure: deposit forfeited. 30–60 days prior: 50% of total trip cost. Within 30 days: 100% of total trip cost. Exact terms vary by supplier and destination.",
      },
      {
        heading: "Cruise Bookings",
        body: "Cruise cancellation policies are set by the cruise lines and vary by sailing date, cabin category, and fare type. Your TravelOStyle advisor will provide the specific policy at the time of booking.",
      },
      {
        heading: "Tailor-Made Journeys",
        body: "Cancellation fees for tailor-made journeys depend on the components booked and the policies of the individual suppliers involved. These will be clearly outlined before booking confirmation.",
      },
      {
        heading: "Recommendation",
        body: "We strongly recommend comprehensive travel insurance that includes trip cancellation coverage. This protects your investment against unforeseen circumstances.",
      },
    ],
  },
  {
    id: "refund",
    title: "Refund Policy",
    intro:
      "Refunds, where applicable, are processed in accordance with the cancellation terms agreed at the time of booking.",
    items: [
      {
        heading: "Processing Timelines",
        body: "Once a refund is confirmed, it will be processed within 14–21 business days. The timeline may vary depending on your payment method and banking institution.",
      },
      {
        heading: "Non-Refundable Components",
        body: "Certain components — including but not limited to non-refundable airfares, visa fees, and special event tickets — are non-refundable regardless of when a cancellation is made. These will be clearly identified at the time of booking.",
      },
      {
        heading: "Force Majeure",
        body: "In cases of force majeure (natural disasters, government travel bans, pandemics, etc.), TravelOStyle will work with suppliers on your behalf to secure the best available outcome — whether that is a refund, a credit, or an alternative travel arrangement.",
      },
      {
        heading: "Partial Refunds",
        body: "Where a journey is partially completed or a component is unused due to circumstances within TravelOStyle's control, we will assess each situation individually and work to find a fair resolution.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    intro:
      "Our website uses cookies to improve your browsing experience and analyse site traffic.",
    items: [
      {
        heading: "What Are Cookies",
        body: "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how visitors interact with the content.",
      },
      {
        heading: "How We Use Cookies",
        body: "We use essential cookies required for the site to function, and analytical cookies (via tools such as Google Analytics) to understand visitor behaviour. We do not use advertising cookies.",
      },
      {
        heading: "Managing Cookies",
        body: "You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of certain parts of the website.",
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <header className="bg-[#2C3078] px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-[85.2vw] items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Travel O Style"
              width={200}
              height={38}
              className="h-auto w-[160px] sm:w-[200px]"
              priority
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-[13px] text-white/90 transition hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-[#2C3078] pb-14 pt-10 text-center">
        <p className="font-taprom text-white/70" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>
          legal
        </p>
        <h1
          className="mt-2 font-bold text-white"
          style={{ fontSize: "clamp(28px, 3vw, 52px)" }}
        >
          Policies
        </h1>
        <p className="mt-3 text-white/60 text-sm">
          Last updated: May 2026
        </p>
      </div>

      {/* Wavy divider */}
      <div
        className="h-3 w-full bg-repeat-x bg-[#2C3078]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='12'><path d='M0 6 Q5 12 10 6 T20 6' fill='%23f9f9f9' /></svg>")`,
          backgroundSize: "20px 12px",
        }}
      />

      {/* Jump links */}
      <div className="bg-white border-b border-[#2C3078]/10 px-4 py-4">
        <div className="mx-auto flex max-w-[85.2vw] flex-wrap gap-3">
          {policies.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="rounded-full border border-[#2C3078]/30 px-4 py-1.5 text-[13px] text-[#2C3078] transition hover:bg-[#2C3078] hover:text-white"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[85.2vw] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-14 max-w-3xl text-[15px] leading-7 text-[#2C3078] font-light">
          These policies outline how TravelOStyle handles your data, manages cancellations, processes
          refunds, and uses cookies. Please read each section carefully. These are placeholder policies —
          the full legal versions will be published prior to the official website launch in mid-2026.
        </p>

        <div className="space-y-16">
          {policies.map((policy) => (
            <section key={policy.id} id={policy.id} className="scroll-mt-8">
              {/* Section heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#2C3078]/15" />
                <h2 className="text-[22px] font-bold text-[#2C3078] sm:text-[26px]">
                  {policy.title}
                </h2>
                <div className="h-px flex-1 bg-[#2C3078]/15" />
              </div>

              <p className="mb-8 max-w-3xl text-[14px] leading-7 text-[#2C3078]/70 font-light sm:text-[15px]">
                {policy.intro}
              </p>

              <div className="space-y-7">
                {policy.items.map((item) => (
                  <div key={item.heading} className="border-l-2 border-[#2C3078]/20 pl-5">
                    <h3 className="mb-2 text-[16px] font-semibold text-[#2C3078]">
                      {item.heading}
                    </h3>
                    <p className="text-[14px] leading-7 text-[#2C3078]/75 font-light">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-[#ebebf2] p-6 sm:p-8">
          <p className="text-[14px] font-light leading-7 text-[#2C3078]">
            <span className="font-semibold">Need clarification?</span> Contact your TravelOStyle advisor or
            reach us at{" "}
            <a href="mailto:info@travelostyle.com" className="underline hover:opacity-75">
              info@travelostyle.com
            </a>
            {" "}or{" "}
            <a href="tel:+17735039742" className="underline hover:opacity-75">
              +1 773 503 9742
            </a>
            .
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
