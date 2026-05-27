"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState, useRef } from "react";

const INQUIRY_SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL;

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "destination",
  "month",
  "flexibility",
  "message",
];

const FIELD_LABELS = {
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Number/WhatsApp",
  email: "Email",
  destination: "Interested Destination",
  duration: "Duration",
  month: "Month of Travel",
  flexibility: "Flexibility",
  message: "Your Message",
};

export default function TravelForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    destination: "",
    duration: "",
    month: "",
    flexibility: "",
    message: "",
    agree: false,
  });

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [agreeError, setAgreeError] = useState("");

  const fieldRefs = useRef({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
    if (name === "agree" && checked) setAgreeError("");
  };

  const validate = () => {
    const errors = {};
    for (const field of REQUIRED_FIELDS) {
      if (!formData[field] || !String(formData[field]).trim()) {
        errors[field] = `${FIELD_LABELS[field]} is required.`;
      }
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errors = validate();
    const hasFieldErrors = Object.keys(errors).length > 0;
    const missingAgree = !formData.agree;
  
    if (hasFieldErrors || missingAgree) {
      setFieldErrors(errors);
  
      if (missingAgree) {
        setAgreeError("Please agree to be contacted.");
      }
  
      // Focus first error
      if (hasFieldErrors) {
        const firstErrorField = REQUIRED_FIELDS.find((f) => errors[f]);
        const el = fieldRefs.current[firstErrorField];
  
        if (el) el.focus();
      } else if (missingAgree) {
        const agreeEl = fieldRefs.current["agree"];
  
        if (agreeEl) agreeEl.focus();
      }
  
      return;
    }
  
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
  
    try {
      // Google Sheet / webhook request
      const guests = `${adults} Adult${adults !== 1 ? "s" : ""}${children > 0 ? ", " + children + " Child" + (children !== 1 ? "ren" : "") : ""}`;

      await fetch(INQUIRY_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          guests,
          source: "inquiry-form",
        }),
      });

      // Email API request
      const emailResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          guests,
          source: "inquiry-form",
        }),
      });
  
      if (!emailResponse.ok) {
        throw new Error("Email sending failed");
      }
  
      setSubmitStatus({
        type: "success",
        message: "Your inquiry has been sent successfully!",
      });
  
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        destination: "",
        duration: "",
        month: "",
        flexibility: "",
        message: "",
        agree: false,
      });
      setAdults(0);
      setChildren(0);
  
      setFieldErrors({});
      setAgreeError("");
  
    } catch (error) {
      console.error(error);
  
      setSubmitStatus({
        type: "error",
        message: "Unable to submit your inquiry right now. Please try again.",
      });
  
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `w-full border-0 border-b-[1.6px] bg-transparent pl-2 pb-1.5 text-[14px] text-[#7b84c9] outline-none font-light ${
      fieldErrors[name] ? "border-red-500" : "border-[#2d3494] focus:border-[#1e2a78]"
    }`;

  return (
    <div id="inquiry-form" className="bg-[#ebebf2] px-4 py-12 sm:px-8 sm:py-16">
      <div className="relative w-full md:max-w-[85.2vw] mx-auto">
        <div
          className="hidden md:block absolute top-0 left-0 h-1.5 w-full bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='6'><path d='M0 3 Q5 0 10 3 T20 3' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />
        <div
          className="hidden md:block absolute bottom-0 left-0 h-1.5 w-full bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='6'><path d='M0 3 Q5 6 10 3 T20 3' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />
        <div
          className="hidden md:block absolute top-0 left-0 h-full w-1.5 bg-repeat-y"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='20'><path d='M3 0 Q0 5 3 10 T3 20' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />
        <div
          className="hidden md:block absolute top-0 right-0 h-full w-1.5 bg-repeat-y"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='20'><path d='M3 0 Q6 5 3 10 T3 20' fill='none' stroke='%232B3481' stroke-width='1'/></svg>")`,
          }}
        />

        <div className="absolute inset-0 rounded-xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="rounded-xl bg-[#ebebf2] px-2 py-4 md:px-10">
          <div className="mb-10">
            <span className="text-[22px] font-taprom text-[#2C3078] sm:text-[2.4vw]">
              tailor-made
            </span>
            <h1 className="text-[30px] font-semibold text-indigo-900 sm:text-[3.2vw]">
              Build Your Own Journey
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[14px] text-[#33377c] sm:text-[1.05vw] font-light">
              <span>Anywhere</span>
              <Image src="/Vectorblue.png" alt="star separator" width={15} height={15} className="object-contain" />
              <span>Any Duration</span>
              <Image src="/Vectorblue.png" alt="star separator" width={15} height={15} className="object-contain" />
              <span>Any Group Size</span>
              <Image src="/Vectorblue.png" alt="star separator" width={15} height={15} className="object-contain" />
              <span>Any Season</span>
              <Image src="/Vectorblue.png" alt="star separator" width={15} height={15} className="object-contain" />
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
              { label: "First Name", name: "firstName", placeholder: "Your First Name", required: true },
              { label: "Last Name", name: "lastName", placeholder: "Your Last Name", required: true },
              { label: "Number/WhatsApp", name: "phone", placeholder: "Your Phone Number", required: false },
              { label: "Email", name: "email", placeholder: "Your Email", required: true },
              { label: "Interested Destination", name: "destination", placeholder: "Where would you like to go?", required: true },
              { label: "Duration", name: "duration", placeholder: "How many days?", required: false },
              { label: "Month of Travel", name: "month", placeholder: "Which month?", required: true },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="pl-2 font-normal text-[18px] leading-8 tracking-wider text-[#2C3078]">
                  {field.label}{field.required ? "*" : ""}
                </label>
                <input
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  ref={(el) => { fieldRefs.current[field.name] = el; }}
                  className={inputClass(field.name)}
                  placeholder={field.placeholder}
                />
                {fieldErrors[field.name] && (
                  <span className="pl-2 text-[12px] text-red-500">{fieldErrors[field.name]}</span>
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
                  ref={(el) => { fieldRefs.current["flexibility"] = el; }}
                  className={`w-full cursor-pointer appearance-none border-0 border-b-[1.6px] bg-transparent pl-2 pb-1.5 pr-6 text-[14px] text-[#7b84c9] outline-none font-light ${fieldErrors.flexibility ? "border-red-500" : "border-[#2d3494]"}`}
                >
                  <option value="">Select</option>
                  <option>+/-30 days</option>
                  <option>Exact Match</option>
                  <option>Open to Possibility</option>
                </select>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[#2d3494] text-sm pointer-events-none">▾</span>
              </div>
              {fieldErrors.flexibility && (
                <span className="pl-2 text-[12px] text-red-500">{fieldErrors.flexibility}</span>
              )}
            </div>
          </div>

          {/* No. of Guests — adults/children counter */}
          <div className="mt-8">
            <label className="pl-2 font-normal text-[18px] leading-8 tracking-wider text-[#2C3078]">
              No. of Guests
            </label>
            <div className="mt-3 flex flex-wrap items-center gap-8 text-[14px] text-[#2C3078] font-light">
              {[
                { label: "Adults", value: adults, setter: setAdults },
                { label: "Children", value: children, setter: setChildren },
              ].map(({ label, value, setter }) => (
                <div key={label} className="flex items-center gap-3">
                  <span style={{ minWidth: 64 }}>{label}</span>
                  <button
                    type="button"
                    onClick={() => setter(Math.max(0, value - 1))}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[3px] bg-[#2C3078] text-[18px] leading-none text-white"
                  >
                    -
                  </button>
                  <span className="w-5 text-center text-[14px]">{value}</span>
                  <button
                    type="button"
                    onClick={() => setter(value + 1)}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[3px] bg-[#2C3078] text-[18px] leading-none text-white"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <label className="pl-2 text-[13px] text-[#2d3494]">Your Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              ref={(el) => { fieldRefs.current["message"] = el; }}
              rows={5}
              placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
              className={`mt-2 w-full rounded-lg border bg-white p-4 pl-5 text-[13px] text-[#7b84c9] outline-none font-light ${
                fieldErrors.message ? "border-red-500" : "border-[#2d3494]"
              }`}
            />
            {fieldErrors.message && (
              <span className="pl-2 text-[12px] text-red-500">{fieldErrors.message}</span>
            )}
          </div>

          {/* Checkbox */}
          <div className="mt-10 flex flex-col gap-2">
            <div className="flex items-start md:items-center gap-3">
              <label
                htmlFor="agree"
                className="relative mt-0.5 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 border-[#2C3078]"
                style={{ backgroundColor: formData.agree ? "#2C3078" : "transparent" }}
              >
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  ref={(el) => { fieldRefs.current["agree"] = el; }}
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
            {agreeError && (
              <span className="pl-1 text-[12px] text-red-500">{agreeError}</span>
            )}
          </div>

          {/* Submit row */}
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#2C3078] text-lg py-1 px-3 font-medium text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
              {submitStatus.message && (
                <span
                  className={`text-[13px] font-medium ${
                    submitStatus.type === "error" ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {submitStatus.message}
                </span>
              )}
            </div>
            <span className="w-full text-[#2C3078] sm:w-[36vw] font-light">
              TravelOStyle typically responds within 48 hours. Your details are
              never shared with third parties.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
