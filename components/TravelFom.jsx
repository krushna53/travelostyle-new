"use client";

import { useState } from "react";
import { Button, Checkbox } from "@heroui/react";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-[#ebebf2] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl relative">
        <div className="absolute inset-0 border-[1.5px] border-indigo-400 rounded-xl pointer-events-none" />

        <form
          onSubmit={handleSubmit}
          className="bg-[#ebebf2] rounded-xl px-10 py-12"
        >
          <div className="mb-10">
            <p className="text-sm italic text-indigo-500">tailor-made</p>

            <h1 className="text-4xl font-semibold text-indigo-900">
              Build Your Own Journey
            </h1>

            <div className="flex flex-wrap gap-3 mt-3 text-sm text-[#33377c]">
              <span>Anywhere</span>
              <span className="flex items-center gap-1">✦ Any Duration</span>
              <span className="flex items-center gap-1">✦ Any Group Size</span>
              <span className="flex items-center gap-1">✦ Any Season</span>
              <span className="flex items-center gap-1">✦ All Budgets</span>
            </div>

            <p className="text-sm text-[#33377c] mt-4 max-w-3xl leading-relaxed">
              Tired of one-size-fits-all journeys? Tell us how you want to do
              it. Simply share your idea of travel below and let TravelOStyle
              figure out the rest. We've got your back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
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
                <label className="text-[13px] font-semibold text-[#2d3494]">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b-[1.6px] border-[#2d3494] text-[13px] text-[#7b84c9] pb-2 outline-none focus:border-[#1e2a78]"
                  placeholder="Enter here"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[13px] font-semibold text-[#2d3494]">
                Flexibility*
              </label>

              <div className="relative">
                <select
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleChange}
                  className="appearance-none w-full bg-transparent border-0 border-b-[1.6px] border-[#2d3494] text-[13px] text-[#7b84c9] pb-2 pr-6 outline-none cursor-pointer"
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

          {/* MESSAGE */}
          <div className="mt-12">
            <label className="text-[13px] font-semibold text-[#2d3494]">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full mt-2 bg-white border border-[#2d3494] rounded-lg p-4 text-[13px] text-[#7b84c9] outline-none"
            />
          </div>

          {/* FOOTER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 gap-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">
                I agree to be contacted by TravelOStyle regarding my inquiry
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 gap-6">
            {" "}
            <Button
              type="submit"
              className="bg-[#2c3078] text-white px-8 py-2 rounded-full"
            >
              {" "}
              Submit Inquiry{" "}
            </Button>{" "}
            <span className="text-sm text-gray-600">
              {" "}
              TravelOStyle typically responds within 48 hours. Your details are
              never shared with third parties.{" "}
            </span>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
