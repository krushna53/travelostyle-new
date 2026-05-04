"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollSilder() {
  const images = [
    "/Rectangle1.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png",
    "/Rectangle1.png",
    "/Rectangle2.png",
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 0.3;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        ref={scrollRef}
        className="overflow-x-auto bg-[#2c3078] p-2 custom-scroll whitespace-nowrap"
      >
        <div className="flex items-center w-max">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex items-center relative mx-1">
              <div className="w-[24.55vw] h-[16.41vw] rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image src={src} alt="travel" fill className="object-cover" />
              </div>

              {index !== images.length * 2 - 1 && (
                <div className="absolute right-[-35px] z-10">
                  <Image src="/Vector.png" alt="star" width={60} height={60} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
