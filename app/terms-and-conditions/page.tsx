import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms & Conditions | TravelOStyle",
  description: "TravelOStyle Website Legal Suite — Terms & Conditions, Privacy Policy, Disclaimer, and Booking Terms.",
};

export default function TermsAndConditionsPage() {
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
          TravelOStyle: Website Legal Suite
        </h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: April 16, 2026</p>

        <p className="text-gray-700 mb-10 leading-relaxed">
          Welcome to TravelOStyle! This document outlines the comprehensive legal terms governing
          your use of our website (www.travelostyle.com) and the services we provide. By accessing
          or using our website and services, you agree to be bound by these Terms &amp; Conditions,
          Privacy Policy, Disclaimer, and Booking Terms and Conditions. Please read them carefully.
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-6">
            1. Website Terms &amp; Conditions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.1. Acceptance of Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the TravelOStyle website, you acknowledge and agree to comply
                with these Terms &amp; Conditions, as well as all applicable laws and regulations. If
                you do not agree with any part of these terms, you are prohibited from using or
                accessing this site.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.2. Intellectual Property Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos,
                images, audio clips, video clips, data compilations, and software, is the property
                of TravelOStyle or its content suppliers and is protected by international copyright,
                trademark, patent, trade secret, and other intellectual property or proprietary rights
                laws. You may not reproduce, distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store, or transmit any of the material
                on our website without the prior written consent of TravelOStyle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.3. User Conduct</h3>
              <p className="text-gray-700 leading-relaxed">
                You agree to use the website only for lawful purposes and in a way that does not
                infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of
                the website. Prohibited behavior includes harassing or causing distress or
                inconvenience to any other user, transmitting obscene or offensive content, or
                disrupting the normal flow of dialogue within our website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.4. Disclaimers</h3>
              <p className="text-gray-700 leading-relaxed">
                The information provided on this website is for general informational purposes only.
                While we strive to keep the information up-to-date and correct, TravelOStyle makes no
                representations or warranties of any kind, express or implied, about the completeness,
                accuracy, reliability, suitability, or availability with respect to the website or
                the information, products, services, or related graphics contained on the website for
                any purpose.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.5. Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                In no event shall TravelOStyle, its affiliates, or their respective directors,
                employees, or agents be liable for any direct, indirect, incidental, special,
                consequential, or punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from (i) your access to
                or use of or inability to access or use the website; (ii) any conduct or content of
                any third party on the website; (iii) any content obtained from the website; and
                (iv) unauthorized access, use, or alteration of your transmissions or content,
                whether based on warranty, contract, tort (including negligence), or any other legal
                theory, whether or not we have been informed of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">1.6. Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms &amp; Conditions shall be governed and construed in accordance with the
                laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-6">
            2. Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TravelOStyle is committed to protecting the privacy of our website visitors and clients.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website and use our services.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.1. Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you express
                an interest in obtaining information about us or our products and services, when you
                participate in activities on the website, or otherwise when you contact us. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Personal Identifiers:</strong> Name, email address, phone number, postal address.</li>
                <li><strong>Travel Preferences:</strong> Destination interests, travel dates, budget, dietary restrictions, special needs.</li>
                <li><strong>Payment Information:</strong> Credit card details (processed securely by third-party payment processors), bank account details for wire transfers.</li>
                <li><strong>Passport and Visa Information:</strong> For booking international travel.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.2. How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use personal information collected via our website for a variety of business purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To facilitate account creation and logon process.</li>
                <li>To deliver products and services to you.</li>
                <li>To respond to your inquiries and offer support.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To request feedback and contact you about your use of our website.</li>
                <li>To protect our services and website (e.g., fraud monitoring and prevention).</li>
                <li>To enforce our terms, conditions, and policies.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.3. Sharing Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may share your information with third parties only in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> With vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., airlines, hotels, tour operators, payment processors).</li>
                <li><strong>Legal Obligations:</strong> When legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.4. Data Security</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable technical and organizational security measures designed to
                protect the security of any personal information we process. However, despite our
                safeguards and efforts to secure your information, no electronic transmission over
                the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.5. Cookie Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies and similar tracking technologies to access or store
                information. Please see our{" "}
                <Link href="/cookie-policy" className="text-[#39a6de] hover:underline font-medium">
                  Cookie Policy
                </Link>{" "}
                for details on how we use such technologies and how you can control them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">2.6. Your Privacy Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                In some regions (like the EEA and UK), you have certain rights under applicable data
                protection laws. These may include the right (i) to request access and obtain a copy
                of your personal information; (ii) to request rectification or erasure; (iii) to
                restrict the processing of your personal information; and (iv) if applicable, to data
                portability. To exercise these rights, please contact us at{" "}
                <a href="mailto:info@travelostyle.com" className="text-[#39a6de] hover:underline">
                  info@travelostyle.com
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-6">
            3. Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The information provided by TravelOStyle on www.travelostyle.com is for general
            informational purposes only. All information on the site is provided in good faith,
            however, we make no representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability, availability, or completeness
            of any information on the site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Under no circumstance shall we have any liability to you for any loss or damage of any
            kind incurred as a result of the use of the site or reliance on any information provided
            on the site. Your use of the site and your reliance on any information on the site is
            solely at your own risk.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2C3078] border-b border-[#39a6de] pb-2 mb-6">
            4. Booking Terms and Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Booking Terms and Conditions form the basis of your contract with TravelOStyle.
            Please read them carefully as they set out our respective rights and obligations. By
            making a booking with us, you confirm that you have read, understood, and agree to
            these terms.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.1. Booking Process</h3>
              <p className="text-gray-700 leading-relaxed">
                All bookings are subject to availability and confirmation. A booking is considered
                confirmed only upon receipt of the required deposit and our written confirmation.
                We reserve the right to decline any booking at our discretion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.2. Client Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed">
                It is your responsibility to ensure that you have valid passports, visas, permits,
                and vaccination certificates for all countries you intend to visit. TravelOStyle is
                not responsible for any denied boarding or entry due to insufficient documentation.
                You are also responsible for informing us of any medical conditions, allergies, or
                special requirements at the time of booking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">
                4.3. Payment Terms and Schedule <span className="font-normal text-base text-gray-500">(All per person)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To secure your &ldquo;Journey Beyond,&rdquo; the following payment schedule applies to all land and air services:
              </p>

              <h4 className="font-semibold text-[#2C3078] mb-2">A. Deposit Requirements (Land Services)</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">
                A non-refundable deposit is required at the time of booking to confirm your land arrangements:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-[#2C3078] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Tour Cost</th>
                      <th className="text-left px-4 py-3 font-semibold">Deposit Per Person</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-700">Tours under $2,499</td>
                      <td className="px-4 py-3 text-gray-700">$500 non-refundable deposit per person</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">Tours $2,500 to $4,999</td>
                      <td className="px-4 py-3 text-gray-700">$1,000 non-refundable deposit per person</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Tours over $5,000</td>
                      <td className="px-4 py-3 text-gray-700">$1,500 non-refundable deposit per person</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-semibold text-[#2C3078] mb-2">B. Airfare Payments</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full payment is required for all international and domestic flight bookings at the
                time of ticketing to guarantee the fare and schedule.
              </p>

              <h4 className="font-semibold text-[#2C3078] mb-2">C. Final Payment</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>The remaining balance for all services is due 90 days prior to the departure date.</li>
                <li>Failure to receive the final payment by the due date may result in the automatic cancellation of the booking and forfeiture of the deposit.</li>
              </ul>

              <h4 className="font-semibold text-[#2C3078] mb-2">D. Accepted Payment Methods</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>We accept payments via Check, Credit/Debit Card, and Wire/ACH Transfer.</li>
                <li><strong>Credit Card Payments:</strong> Require a signed Credit Card Authorization Form and a copy of a valid government-issued ID.</li>
                <li><strong>Third-Party Payments:</strong> For security reasons, we strictly prohibit payments from third-party checks or credit cards.</li>
                <li><strong>Check Payments:</strong> Booking process will commence only after the check has successfully cleared.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">
                4.4. Cancellation and Refund Policy <span className="font-normal text-base text-gray-500">(All per person — dates prior to departure)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that plans can change. However, as we commit to our global partners in
                advance, the following tiered penalty structure applies to all cancellations:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-[#2C3078] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Days Prior to Departure</th>
                      <th className="text-left px-4 py-3 font-semibold">Cancellation Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-700">91+ Days</td>
                      <td className="px-4 py-3 text-gray-700">Forfeiture of non-refundable deposit only</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">60 – 90 Days</td>
                      <td className="px-4 py-3 text-gray-700">25% of the tour cost</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-700">45 – 59 Days</td>
                      <td className="px-4 py-3 text-gray-700">50% of the tour cost</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">31 – 44 Days</td>
                      <td className="px-4 py-3 text-gray-700">75% of the tour cost</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">30 Days or Less</td>
                      <td className="px-4 py-3 text-gray-700">100% of the tour cost</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.5. Changes and Amendments by Client</h3>
              <p className="text-gray-700 leading-relaxed">
                Any changes to a confirmed booking requested by the client are subject to an
                administration fee (minimum $50 per change) plus any additional costs imposed by
                airlines, hotels, or other suppliers. Changes are subject to availability and
                cannot be guaranteed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.6. Changes and Amendments by TravelOStyle</h3>
              <p className="text-gray-700 leading-relaxed">
                While we endeavor to operate all tours as advertised, we reserve the right to make
                changes to itineraries, hotels, or other arrangements at any time due to unforeseen
                circumstances (e.g., weather, political instability, supplier changes). If a
                significant change occurs, we will notify you as soon as possible and offer
                alternative arrangements or a refund for the affected portion of the trip, where
                applicable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.7. Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                TravelOStyle shall not be liable for any failure or delay in performance under these
                terms due to causes beyond our reasonable control, including but not limited to acts
                of God, war, terrorism, civil unrest, strikes, epidemics, pandemics, natural
                disasters, or government restrictions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.8. Travel Insurance</h3>
              <p className="text-gray-700 leading-relaxed">
                Travel insurance is highly recommended for all bookings. It is the client&apos;s
                responsibility to purchase comprehensive travel insurance that covers cancellation,
                medical emergencies, baggage loss, and other unforeseen events. TravelOStyle is not
                responsible for any costs incurred due to lack of travel insurance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C3078] mb-2">4.9. Complaints and Disputes</h3>
              <p className="text-gray-700 leading-relaxed">
                Any complaints must be brought to the attention of TravelOStyle in writing within
                30 days of the completion of your trip. We will endeavor to resolve any issues
                amicably. These Booking Terms and Conditions shall be governed by and construed in
                accordance with the laws of the State of Illinois.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <div className="bg-[#2C3078] text-white rounded-xl p-6 mt-12 text-center">
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
