"use client";

import Image from "next/image";
import Link from "next/link";
import { nationwideSupportData } from "@/data/nationwideSupportData";

interface NationwideSupportSectionProps {
  slug?: string;
}

const NationwideSupportSection = ({ slug }: NationwideSupportSectionProps) => {
  const data = (slug && nationwideSupportData[slug]) ? nationwideSupportData[slug] : nationwideSupportData.default;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-slate-900 leading-tight tracking-tight">
              {data.headingMain}{" "}
              <span className="text-emerald-600">{data.headingHighlight}</span>
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-[0.95rem]">
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
            </div>

            <div className="pt-2">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-sm"
              >
                {data.buttonText}
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
