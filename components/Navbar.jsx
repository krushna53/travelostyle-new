"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FacebookIcon, InstagramIcon } from "./FooterSection";

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
              href="#land-journeys"
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

      <div className="fixed bottom-3 z-50 flex w-full px-0 md:px-3 justify-center md:hidden">
        <div
          onClick={toggleMenu}
          className="cursor-pointerw-full flex flex-col w-full items-center rounded-none md:rounded-xl border-2 md:border border-[#FAFAFA] md:border-white/70 bg-[#2c3078]/80 px-4 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-lg transition hover:opacity-90"
        >
          <Image
            src="/logo.svg"
            alt="Travel O Style"
            width={420}
            height={200}
            className="h-auto w-45"
            priority
          />
          <span className="mt-1 text-[13px] font-medium uppercase underline tracking-[0.08em]">
            Menu
          </span>
        </div>
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
              className="w-full bg-[#2c3078] text-white px-6 py-8 shadow-2xl animate-menu-slide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/TravelOstyle.png"
                  alt="Travel O Style"
                  width={220}
                  height={42}
                  className="h-auto w-4/5"
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
              <nav className="space-y-4 mb-8 flex flex-col items-start">
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
                  className="mb-10 block w-fit rounded-full bg-white px-3 py-1 font-medium text-[#2c3078] transition hover:opacity-90"
                >
                  Plan Your Journey
                </Link>
              </nav>

              {/* Social Icons */}
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

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
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
