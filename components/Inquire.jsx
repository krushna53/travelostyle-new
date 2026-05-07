"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const InquiryModal = ({ isOpen = true, onClose }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-[#ebebf2] rounded-xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold text-[#2B3481] mb-6">
            Inquire With Us
          </h2>

          <button onClick={onClose}>
            <Image src="/cross.svg" alt="close" width={16} height={16} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex gap-4 bg-[#dfe3f5] rounded-lg p-4 mb-8">
            <Image
              src="/trip.jpg"
              alt="trip"
              width={100}
              height={70}
              className="rounded-md object-cover"
            />
            <div className="text-sm text-[#2B3481]">
              <p>
                <b>Trip Name:</b> Bahamas
              </p>
              <p>
                <b>Duration:</b> 3 Nights
              </p>
              <p>
                <b>Price:</b> From $1K per person, double occupancy
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-[#2B3481]">
                First Name*
              </label>
              <input
                className="w-full bg-transparent border-b border-[#2B3481] focus:border-[#1e2a78] outline-none py-2 text-sm"
                placeholder="Your First Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#2B3481]">
                Last Name*
              </label>
              <input
                className="w-full bg-transparent border-b border-[#2B3481] focus:border-[#1e2a78] outline-none py-2 text-sm"
                placeholder="Your Last Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#2B3481]">
                Title*
              </label>
              <select className="w-full bg-transparent border-b border-[#2B3481] focus:border-[#1e2a78] outline-none py-2 text-sm">
                <option>Select your title</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-[#2B3481]">
                Number / WhatsApp
              </label>
              <input
                className="w-full bg-transparent border-b border-[#2B3481] focus:border-[#1e2a78] outline-none py-2 text-sm"
                placeholder="Your Mobile Number"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-[#2B3481]">
                Email ID*
              </label>
              <input
                className="w-full bg-transparent border-b border-[#2B3481] focus:border-[#1e2a78] outline-none py-2 text-sm"
                placeholder="Your Email Name"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="mt-6">
            <p className="text-sm font-medium text-[#2B3481] mb-2">
              No. of Guests
            </p>

            <div className="flex gap-10">
              {/* Adults */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#2B3481]">Adults</span>
                <button
                  onClick={() => setAdults(Math.max(0, adults - 1))}
                  className="w-6 h-6 flex items-center justify-center bg-[#2B3481] text-white rounded"
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-6 h-6 flex items-center justify-center bg-[#2B3481] text-white rounded"
                >
                  +
                </button>
              </div>

              {/* Children */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#2B3481]">Children</span>
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-6 h-6 flex items-center justify-center bg-[#2B3481] text-white rounded"
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="w-6 h-6 flex items-center justify-center bg-[#2B3481] text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-sm font-medium text-[#2B3481]">
              Your Message*
            </label>
            <textarea
              rows={4}
              className="w-full mt-2 border border-[#2B3481] rounded-md p-3 text-sm outline-none"
              placeholder="Do you have questions or considerations that you would like us to know?"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-6">
            <Button className="rounded-full bg-[#2C3078] text-xl py-1 px-3 font-medium text-white">
              Get Details
            </Button>

            <label className="flex items-center gap-2 text-xs text-[#2B3481] max-w-xs">
              <input type="checkbox" />I agree to be contacted by TravelOStyle
              regarding my inquiry.
            </label>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-black"
          >
            Cancel
          </button>

          <button className="px-5 py-2 bg-black text-white text-sm rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
