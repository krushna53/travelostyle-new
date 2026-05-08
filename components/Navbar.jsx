"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="fixed bottom-3 left-1/2 z-50 hidden w-full max-w-[85.95vw] -translate-x-1/2 md:flex md:justify-center">
        <div className="flex h-[6vw] w-full items-center justify-between rounded-lg border-2 border-white/80 bg-[#2c3078]/55 px-14 text-white shadow-lg backdrop-blur-lg">
          <div className="flex gap-6 ">
            <Link
              href="#about"
              className="text-[1.05vw] transition hover:opacity-80"
            >
              About
            </Link>
            <Link
              href="#cruise-journeys"
              className="text-[1.05vw] transition hover:opacity-80"
            >
              Journeys
            </Link>
            <Link
              href="#how-it-works"
              className="text-[1.05vw] transition hover:opacity-80"
            >
              How it works
            </Link>
          </div>
          <Image
            src="/logo.svg"
            alt="Travel O Style"
            width={299}
            height={57}
            priority
          />
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#faq"
              className="text-[1.05vw] transition hover:opacity-80"
            >
              FAQ
            </Link>
            <Link
              href="#inquiry-form"
              className="rounded-full bg-white px-4 py-1.5 text-[1.05vw] text-black transition hover:opacity-90"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 left-1/2 z-50 flex w-[min(92vw,420px)] -translate-x-1/2 justify-center md:hidden">
        <button
          onClick={toggleMenu}
          className="cursor-pointerw-full flex flex-col items-center rounded-xl border border-white/70 bg-[#2c3078]/80 px-4 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-lg transition hover:opacity-90"
        >
          <Image
            src="/logo.svg"
            alt="Travel O Style"
            width={220}
            height={42}
            className="h-auto w-45"
            priority
          />
          <span className="mt-1 text-[13px] font-semibold uppercase underline tracking-[0.08em]">
            Menu
          </span>
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden animate-backdrop"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 z-50 flex items-end md:hidden">
            <div
              className="w-full bg-[#2c3078] text-white rounded-t-2xl px-6 py-8 shadow-2xl animate-menu-slide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/TravelOstyle.png"
                  alt="Travel O Style"
                  width={220}
                  height={42}
                  className="h-auto w-40"
                />
                <button
                  onClick={closeMenu}
                  className="text-3xl transition hover:opacity-70"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 mb-8">
                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="block text-lg font-medium transition hover:opacity-80"
                >
                  About
                </Link>
                <Link
                  href="#cruise-journeys"
                  onClick={closeMenu}
                  className="block text-lg font-medium transition hover:opacity-80"
                >
                  Journeys
                </Link>
                <Link
                  href="#how-it-works"
                  onClick={closeMenu}
                  className="block text-lg font-medium transition hover:opacity-80"
                >
                  How it Works
                </Link>
                <Link
                  href="#faq"
                  onClick={closeMenu}
                  className="block text-lg font-medium transition hover:opacity-80"
                >
                  FAQs
                </Link>
                <Link
                  href="#plan-your-journey"
                  onClick={closeMenu}
                  className="mx-auto mb-10 block w-fit rounded-full bg-white px-4 py-3 font-semibold text-[#2c3078] transition hover:opacity-90"
                >
                  Plan Your Journey
                </Link>
              </nav>

              {/* Social Icons */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition hover:opacity-70"
                  aria-label="Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition hover:opacity-70"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="border-t border-white/20 pt-6 space-y-2 text-sm">
                <p className="font-medium">Rohan Shah: +1 773 983 8067</p>
                <p className="font-medium">info@travelostyle.com</p>
                <p className="text-white/60 text-xs mt-4">
                  © TravelOStyle 2026 | Designed by Euroia Design House
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
