import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cookie Policy | TravelOStyle",
  description: "TravelOStyle Cookie Policy — how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <header className="bg-[#2C3078] text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="TravelOStyle"
              width={220}
              height={42}
              className="h-auto w-44"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/80 hover:text-white transition underline underline-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-[#1a1a2e]">
        <h1 className="text-3xl font-bold text-[#2C3078] mb-2">
          TravelOStyle: Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: April 16, 2026</p>

        <p className="text-gray-700 mb-10 leading-relaxed">
          This Cookie Policy explains how TravelOStyle (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) uses cookies and similar technologies to recognize you when you visit
          our website at www.travelostyle.com (&ldquo;Website&rdquo;). It explains what these
          technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            1. What are Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you
            visit a website. Cookies are widely used by website owners in order to make their
            websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cookies set by the website owner (in this case, TravelOStyle) are called
            &ldquo;first-party cookies.&rdquo; Cookies set by parties other than the website owner
            are called &ldquo;third-party cookies.&rdquo; Third-party cookies enable third-party
            features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these third-party cookies can
            recognize your computer both when it visits the website in question and also when it
            visits certain other websites.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            2. Why Do We Use Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use first-party and third-party cookies for several reasons. Some cookies are
            required for technical reasons in order for our Website to operate, and we refer to
            these as &ldquo;essential&rdquo; or &ldquo;strictly necessary&rdquo; cookies. Other
            cookies also enable us to track and target the interests of our users to enhance the
            experience on our Website. Third parties serve cookies through our Website for
            advertising, analytics, and other purposes. This is described in more detail below.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            3. Types of Cookies We Use
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The specific types of first and third-party cookies served through our Website and the
            purposes they perform are described below:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#2C3078] mb-2">
                3.1. Essential Website Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                These cookies are strictly necessary to provide you with services available through
                our Website and to use some of its features, such as access to secure areas. Without
                these cookies, services like shopping carts or e-billing cannot be provided.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#2C3078] mb-2">
                3.2. Performance and Functionality Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                These cookies are used to enhance the performance and functionality of our Website
                but are non-essential to their use. However, without these cookies, certain
                functionality (like videos) may become unavailable.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#2C3078] mb-2">
                3.3. Analytics and Customization Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                These cookies collect information that is used either in aggregate form to help us
                understand how our Website is being used or how effective our marketing campaigns
                are, or to help us customize our Website for you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#2C3078] mb-2">
                3.4. Advertising Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                These cookies are used to make advertising messages more relevant to you. They
                perform functions like preventing the same ad from continuously reappearing, ensuring
                that ads are properly displayed for advertisers, and in some cases selecting
                advertisements that are based on your interests.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#2C3078] mb-2">
                3.5. Social Networking Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                These cookies are used to enable you to share pages and content that you find
                interesting on our Website through third-party social networking and other websites.
                These cookies may also be used for advertising purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            4. How Can I Control Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your
            cookie preferences by setting your preferences within your web browser.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.1. Browser Controls</h3>
              <p className="text-gray-700 leading-relaxed">
                You can set or amend your web browser controls to accept or refuse cookies. If you
                choose to reject cookies, you may still use our Website, though your access to some
                functionality and areas of our Website may be restricted. As the means by which you
                can refuse cookies through your web browser controls vary from browser-to-browser,
                you should visit your browser&apos;s help menu for more information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.2. Disabling Most Advertising</h3>
              <p className="text-gray-700 leading-relaxed">
                Most advertising networks offer you a way to opt out of interest-based advertising.
                If you would like to find out more information, please visit{" "}
                <span className="text-[#39a6de]">www.aboutads.info/choices/</span> or{" "}
                <span className="text-[#39a6de]">www.youronlinechoices.com</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            5. Changes to Our Cookie Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time in order to reflect, for example,
            changes to the cookies we use or for other operational, legal, or regulatory reasons.
            Please therefore re-visit this Cookie Policy regularly to stay informed about our use
            of cookies and related technologies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-5">
            6. Where Can I Get Further Information?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our use of cookies or other technologies, please email
            us at{" "}
            <a href="mailto:info@travelostyle.com" className="text-[#39a6de] hover:underline">
              info@travelostyle.com
            </a>.
          </p>
        </section>

        {/* Also see */}
        <div className="bg-blue-50 border border-[#39a6de]/30 rounded-xl p-5 mt-6">
          <p className="text-sm text-gray-700">
            For our full legal terms including Privacy Policy, Booking Terms, and Disclaimer, please
            see our{" "}
            <Link href="/terms-and-conditions" className="text-[#39a6de] font-medium hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>

        {/* Contact Banner */}
        <div className="bg-[#2C3078] text-white rounded-xl p-6 mt-10 text-center">
          <p className="font-semibold text-lg mb-1">TravelOStyle — Journey Beyond</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-white/80 mt-2">
            <a href="mailto:info@travelostyle.com" className="hover:text-white transition">
              info@travelostyle.com
            </a>
            <span>Ph: 773-503-9742</span>
            <a href="https://www.travelostyle.com" className="hover:text-white transition">
              www.travelostyle.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C3078] text-white/70 text-center text-xs py-5 mt-10">
        &copy; TravelOStyle 2026 | Designed by Eunola Design House
      </footer>
    </div>
  );
}
