"use client";

import Image from "next/image";
import Link from "next/link";

const NationwideSupportSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-slate-900 leading-tight tracking-tight">
              Nationwide Support &{" "}
              <span className="text-emerald-600">OEM Parts Excellence</span>
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-[0.95rem]">
              <p>
                Our commitment to engineering excellence extends across the entire South East,
                serving luxury vehicle owners in <strong>London, Essex, Kent</strong>, and beyond
                with our secure nationwide collection and delivery service. We use only{" "}
                <strong className="text-emerald-600">genuine Land Rover OEM parts</strong> and
                uprated heavy-duty components where known design weaknesses exist.
              </p>
              <p>
                Our engine rebuild process involves a complete technical strip-down, high-pressure
                chemical cleaning, and precision honing of cylinder bores to ensure maximum
                longevity and resale value. Every job is backed by a comprehensive warranty —
                from the classic{" "}
                <strong>Range Rover L322 to the modern Discovery 5 and Defender L663</strong>.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/group.svg"
              alt="Engine specialist at work"
              width={420}
              height={470}
              className="w-full max-w-[380px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NationwideSupportSection;
