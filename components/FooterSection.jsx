import Image from "next/image";

const quickLinks = [
  "Journeys",
  "About Us",
  "Build Your Journey",
  "How It Works",
];
const usefulLinks = ["FAQs", "Write To Us", "Terms and Conditions", "Policies"];

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M13.5 9.2h1.8V7h-2.1c-2 0-3.2 1.2-3.2 3.1V12H8v2.2h2v4h2.4v-4h2l.3-2.2h-2.3v-1.5c0-.8.3-1.3 1.1-1.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.8" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[#39a6de] bg-[#2C3078] text-white py-10 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(126,64,230,0.35),transparent_40%),radial-gradient(circle_at_85%_92%,rgba(70,22,150,0.45),transparent_55%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_68%)]" />

      <div className="relative mx-auto max-w-[85.2vw] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="hidden md:flex justify-evenly gap-8 px-0 text-[11px] uppercase tracking-[0.04em] text-white/90 sm:gap-10 sm:px-10 lg:px-28">
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="mb-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/90 transition hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/90 transition hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="text-[12px] normal-case tracking-normal text-white/90">
              Rohan Shah: +1 773 983 8067
            </p>
            <p className="text-[12px] normal-case tracking-normal text-white/90">
              info@travelostyle.com
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-white text-md">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:mt-16 flex flex-col items-center justify-center sm:mt-20">
          <Image
            src="/logo.svg"
            alt="Travel O Style"
            width={560}
            height={104}
            className="h-auto w-[min(660px,88vw)]"
            priority
          />
          <div className="flex sm:hidden flex-col justify-center items-center mt-5">
            <h3 className="mb-2 text- font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4 mb-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/90 transition hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/90 transition hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="text-[12px] normal-case tracking-normal text-white/90">
              Rohan Shah: +1 773 983 8067
            </p>
            <p className="text-[12px] normal-case tracking-normal text-white/90">
              info@travelostyle.com
            </p>
          </div>
          <p className="mt-3 text-center text-[12px] text-white/85 hidden sm:block">
            &copy; TravelOStyle 2026 | Designed by Eunola Design House
          </p>
        </div>
      </div>
    </footer>
  );
}
