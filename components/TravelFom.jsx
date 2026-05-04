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
    <div id="inquiry-form" className="min-h-screen bg-[#ebebf2] flex items-center justify-center px-4 py-10 sm:p-8">
      <div className="relative w-full max-w-[85.2vw]">
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

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[14px] text-[#33377c] sm:text-[1.05vw]">
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

            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#33377c] sm:text-[1.05vw]">
              Tired of one-size-fits-all journeys? Tell us how you want to do
              it. Simply share your idea of travel below and let TravelOStyle
              figure out the rest. We ve got your back.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-10">
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "Title", name: "title" },
              { label: "Number/WhatsApp", name: "phone" },
              { label: "Email ID", name: "email" },
              { label: "Interested Destination", name: "destination" },
              { label: "No. of Guests", name: "guests" },
              { label: "Duration of Trip", name: "duration" },
              { label: "Month of Travel", name: "month" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-[#2d3494] sm:text-[13px]">
                  {field.label}
                </label>
                {field.name === "title" ? (
                  <div className="relative">
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full cursor-pointer appearance-none border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pb-2 pr-6 text-[14px] text-[#7b84c9] outline-none sm:text-[0.9vw]"
                    >
                      <option value="">Select</option>
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
                    className="border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pb-2 text-[14px] text-[#7b84c9] outline-none focus:border-[#1e2a78] sm:text-[0.9vw]"
                    placeholder="Enter here"
                  />
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[13px] font-semibold text-[#2d3494] sm:text-[0.9vw]">
                Flexibility*
              </label>

              <div className="relative">
                <select
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleChange}
                  className="w-full cursor-pointer appearance-none border-0 border-b-[1.6px] border-[#2d3494] bg-transparent pb-2 pr-6 text-[14px] text-[#7b84c9] outline-none sm:text-[0.9vw]"
                >
                  <option value="">Select</option>
                  <option>Exact Match</option>
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
            <label className="text-[13px] font-semibold text-[#2d3494] sm:text-[0.9vw]">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-2 w-full rounded-lg border border-[#2d3494] bg-white p-4 text-[13px] text-[#7b84c9] outline-none"
            />
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <span className="text-[13px] text-gray-600 sm:text-[0.9vw]">
                I agree to be contacted by TravelOStyle regarding my inquiry
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2c3078] text-white px-8 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>{" "}
            <span className="w-full text-[13px] text-gray-600 sm:w-[36vw] sm:text-[1.05vw]">
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
