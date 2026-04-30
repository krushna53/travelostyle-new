import Image from "next/image";

export default function CollaborateSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center px-8 md:px-16 py-12">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl text-indigo-900 leading-snug font-taprom">
              Interested in collaborating <br />
              with TravelOStyle?
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base font-sans leading-relaxed">
              We're always looking to collaborate with ground operators,
              accommodation partners, and experience providers across all
              regions we operate in. If you work in a destination we should
              know, we'd like to hear from you.
            </p>

            <button className="mt-6 flex items-center gap-2 bg-indigo-900 text-white text-sm px-5 py-2 rounded-full font-sans">
              Write To Us
              <span className="bg-pink-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                P
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <Image
            src="/collebrate.png" // apni image path daalo
            alt="collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
