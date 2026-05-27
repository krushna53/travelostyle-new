import Image from "next/image";
import Link from "next/link";
import FooterSection from "../../components/FooterSection";

export const metadata = {
  title: "Terms and Conditions | Travel O' Style",
  description: "Terms and Conditions for Travel O' Style travel services.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using TravelOStyle's services — including browsing our website, submitting an inquiry, or confirming a booking — you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.",
  },
  {
    heading: "2. Our Services",
    body: "TravelOStyle provides travel planning, consultation, and booking services including group itineraries, private journeys, cruise bookings, and tailor-made travel experiences. All services are subject to availability and confirmation. We act as an intermediary between you and third-party suppliers (airlines, hotels, cruise lines, ground operators) and our role is to coordinate and manage those relationships on your behalf.",
  },
  {
    heading: "3. Bookings & Payment",
    body: "A booking is confirmed only upon receipt of a written confirmation from TravelOStyle and payment of the required deposit. The balance of payment is due in accordance with the payment schedule communicated at the time of booking. Prices quoted are subject to change until a booking is formally confirmed. All prices are quoted in USD unless stated otherwise.",
  },
  {
    heading: "4. Cancellations & Refunds",
    body: "Cancellation policies vary depending on the journey type, suppliers involved, and the timing of the cancellation. Specific cancellation terms will be clearly communicated to you prior to booking confirmation. In general, deposits may be non-refundable. We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen cancellations.",
  },
  {
    heading: "5. Changes to Bookings",
    body: "Requests to modify a confirmed booking must be submitted in writing. TravelOStyle will endeavour to accommodate changes where possible; however, changes may be subject to additional fees from suppliers. We cannot guarantee that all modification requests can be fulfilled.",
  },
  {
    heading: "6. Limitation of Liability",
    body: "TravelOStyle acts as an agent for third-party service providers and cannot be held liable for any injury, loss, damage, delay, or inconvenience caused by the acts or omissions of those providers. Our liability in any circumstance is limited to the cost of the services we provided directly. We are not responsible for events beyond our reasonable control, including but not limited to natural disasters, political unrest, or travel advisories.",
  },
  {
    heading: "7. Travel Insurance",
    body: "We strongly recommend that all travellers obtain comprehensive travel insurance prior to departure, covering trip cancellation, medical expenses, evacuation, and personal liability. TravelOStyle is not responsible for costs incurred due to inadequate insurance coverage.",
  },
  {
    heading: "8. Accuracy of Information",
    body: "We make every effort to ensure that information on our website and in our communications is accurate and up-to-date. However, errors may occasionally occur. TravelOStyle reserves the right to correct any inaccuracies and will notify you of any material changes that affect your booking.",
  },
  {
    heading: "9. Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the relevant courts.",
  },
  {
    heading: "10. Contact Us",
    body: "If you have any questions about these Terms and Conditions, please contact us at info@travelostyle.com or speak with your TravelOStyle advisor directly.",
  },
];

export default function TermsAndConditions() {
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
          Terms and Conditions
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

      {/* Content */}
      <main className="mx-auto max-w-[85.2vw] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-12 max-w-3xl text-[15px] leading-7 text-[#2C3078] font-light">
          Please read these Terms and Conditions carefully before using our services. These terms govern
          your relationship with TravelOStyle and outline the rights and responsibilities of both parties.
          These are placeholder terms — the full version will be published prior to the official website launch in mid-2026.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading} className="border-b border-[#2C3078]/15 pb-10 last:border-0">
              <h2 className="mb-3 text-[18px] font-semibold text-[#2C3078] sm:text-[20px]">
                {section.heading}
              </h2>
              <p className="text-[14px] leading-7 text-[#2C3078]/80 font-light sm:text-[15px]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[#ebebf2] p-6 sm:p-8">
          <p className="text-[14px] font-light leading-7 text-[#2C3078]">
            <span className="font-semibold">Questions about these terms?</span> Reach out to your TravelOStyle
            advisor or contact us at{" "}
            <a href="mailto:info@travelostyle.com" className="underline hover:opacity-75">
              info@travelostyle.com
            </a>
            {" "}or call{" "}
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
