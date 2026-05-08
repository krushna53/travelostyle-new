"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const INQUIRY_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwNOxfBmGHU1nb8Og4EDDhd1IuiXwq6s7PRxRSeVs2hos14vsBPzrnQbcTWo86xcMyRNw/exec";

export default function TravelForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    email: "",
    destination: "",
    guests: "",
    duration: "",
    month: "",
    flexibility: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.firstName || !formData.email) {
      setSubmitStatus("Please provide your name and email.");
      return;
    }

    if (!formData.agree) {
      setSubmitStatus("Please agree to be contacted.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    fetch(INQUIRY_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...formData,
        source: "inquiry-form",
      }),
    })
      .then(() => {
        setSubmitStatus("Your inquiry has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          title: "",
          phone: "",
          email: "",
          destination: "",
          guests: "",
          duration: "",
          month: "",
          flexibility: "",
          message: "",
          agree: false,
        });
      })
      .catch(() => {
        setSubmitStatus("Unable to submit your inquiry right now. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  };

  // Auto-clear submitStatus after 5s
  useEffect(() => {
    if (!submitStatus) return;
    const id = setTimeout(() => setSubmitStatus(""), 5000);
    return () => clearTimeout(id);
  }, [submitStatus]);

  return (
    <div id="inquiry-form" className="bg-[#ebebf2] px-4 py-12 sm:px-8 sm:py-16">
      <div className="relative w-full max-w-[85.2vw] mx-auto">
        <div
          className="absolute top-0 left-0 h-1.5 w-full bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='6'><path d='M0 3 Q5 0 10 3 T20 3' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />

        <div
          className="absolute bottom-0 left-0 h-1.5 w-full bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='6'><path d='M0 3 Q5 6 10 3 T20 3' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />

        <div
          className="absolute top-0 left-0 h-full w-1.5 bg-repeat-y"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='20'><path d='M3 0 Q0 5 3 10 T3 20' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-1.5 bg-repeat-y"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='20'><path d='M3 0 Q6 5 3 10 T3 20' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />

        <div className="absolute inset-0 rounded-xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="rounded-xl bg-[#ebebf2] px-4 py-4 sm:px-10">
          <div className="mb-10">
            <span className="text-[22px] font-taprom text-[#2C3078] sm:text-[2.4vw]">
              tailor-made
            </span>

            <h1 className="text-[30px] font-semibold text-indigo-900 sm:text-[3.2vw]">
              Build Your Own Journey
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[14px] text-[#33377c] sm:text-[1.05vw] font-light">
              <span>Anywhere</span>

              <Image
                src="/Vectorblue.png"
                alt="star separator"
                width={15}
                height={15}
                className="object-contain"
              />
              <span>Any Duration</span>

              <Image
                src="/Vectorblue.png"
                alt="star separator"
                width={15}
                height={15}
                className="object-contain"
              />
              <span>Any Group Size</span>

              <Image
                src="/Vectorblue.png"
                alt="star separator"
                width={15}
                height={15}
                className="object-contain"
              />
              <span>Any Season</span>

              <Image
                src="/Vectorblue.png"
                alt="star separator"
                width={15}
                height={15}
                className="object-contain"
              />
              <span>All Budgets</span>
            </div>

            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#33377c] sm:text-[1.05vw] font-light">
              Tired of one-size-fits-all journeys? Tell us how you want to do
              it. Simply share your idea of travel below and let TravelOStyle
              figure out the rest. We ve got your back.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-10">
            {[
              { label: "First Name", name: "firstName", placeholder: "Your First Name" },
              { label: "Last Name", name: "lastName", placeholder: "Your Last Name" },
              { label: "Title", name: "title", placeholder: "Your Title" },
              { label: "Number/WhatsApp", name: "phone", placeholder: "Your Phone Number" },
              { label: "Email ID", name: "email", placeholder: "Your Email ID" },
              { label: "Interested Destination", name: "destination", placeholder: "Where would you like to go?" },
              { label: "No.of Guests", name: "guests", placeholder: "How many are coming along?" },
              { label: "Duration of Trip", name: "duration", placeholder: "How many days do you want to travel?" },
              { label: "Month of Travel", name: "month", placeholder: "Which Month do you want to go?" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="pl-2 font-normal text-[18px] leading-8 tracking-wider text-[#2C3078]">
                  {field.label}*
                </label>
                {field.name === "title" ? (
                  <div className="relative">
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full cursor-pointer appearance-none border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pl-2 pb-1.5 pr-6 text-[14px] text-[#7b84c9] outline-none font-light"
                    >
                      <option value="">Select Your Title</option>
                      <option>Mr</option>
                      <option>Ms</option>
                      <option>Mrs</option>
                      <option>Dr</option>
                    </select>
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[#2d3494] text-sm pointer-events-none">▾</span>
                  </div>
                ) : (
                  <input
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pl-2 pb-1.5 text-[14px] text-[#7b84c9] outline-none focus:border-[#1e2a78] font-light"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="pl-2 font-normal text-[18px] leading-8 tracking-wider text-[#2C3078]">
                Flexibility*
              </label>

              <div className="relative">
                <select
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleChange}
                  className="w-full cursor-pointer appearance-none border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pl-2 pb-1.5 pr-6 text-[14px] text-[#7b84c9] outline-none font-light"
                >
                  <option value="">Exact Match</option>
                  <option>Flexible ±1 week</option>
                  <option>Flexible ±2 weeks</option>
                  <option>Very Flexible</option>
                </select>

                <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[#2d3494] text-sm pointer-events-none">
                  ▾
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <label className="pl-2 text-[13px] text-[#2d3494]">
              Your Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
              className="mt-2 w-full rounded-lg border border-[#2d3494] bg-white p-4 pl-5 text-[13px] text-[#7b84c9] outline-none font-light"
            />
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-baseline gap-3">
              <label
                className="relative mt-0.5 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 border-[#2C3078]"
                style={{ backgroundColor: formData.agree ? "#2C3078" : "transparent" }}
              >
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="sr-only"
                />
                {formData.agree && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="pointer-events-none">
                    <path d="M1 3.5l3 3L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </label>
              <label htmlFor="agree" className="cursor-pointer text-sm font-light leading-5 text-[#2C3078]">
                I agree to be contacted by TravelOStyle regarding my inquiry.
              </label>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#2C3078] text-lg py-1 px-3 font-medium text-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>{" "}
            <span className="w-full text-[#2C3078] sm:w-[36vw] font-light">
              TravelOStyle typically responds within 48 hours. Your details are
              never shared with third parties.
            </span>{" "}
          </div>
        </form>
      </div>

      {submitStatus ? (
        <div
          role="status"
          className={`fixed right-6 top-6 z-50 transform rounded-md px-4 py-2 text-sm font-medium shadow-lg transition-opacity duration-200 ${
            submitStatus.toLowerCase().includes("unable")
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {submitStatus}
        </div>
      ) : null}

    </div>
  );
}
