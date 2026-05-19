"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const NUMBERS_H = 260;
const NUMBERS_W = Math.round((213 / 420) * NUMBERS_H); // 132
const TEXT_PAD_TOP = 27;
const TEXT_PAD_BOTTOM = 27;

const features = [
  {
    title: "Expert Technicians",
    description: "Specialists In All Engines With Years Of Hands-On Experience.",
  },
  {
    title: "Advanced Diagnostics",
    description:
      "State-Of-The-Art Equipment For Accurate Fault Detection And Performance Tuning.",
  },
  {
    title: "Quality & Reliability",
    description:
      "Genuine Parts, Expert Workmanship, And A Commitment To Lasting Performance.",
  },
];

export default function EngineSpecialistsSection() {
  return (
    <section className="relative bg-[#0c0c0c] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vogue.svg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 flex min-h-[680px]">
        {/* ── LEFT: content ── */}
        <div className="w-full px-6 md:px-10 lg:px-14 py-14 flex flex-col justify-center">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-white font-bold text-sm tracking-wide">
              Engine Specialists
            </span>
            <div className="h-px w-14 bg-white/40" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight mb-5">
            Trusted <span className="text-primary">Range Rover</span>
            <br />
            Engine Specialists.
          </h2>

          {/* Paragraph */}
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
            At Vogue Technics, We Combine Expertise, Precision And Advanced
            Diagnostics To Deliver Engine Solutions That Keeps Your Vehicle
            Performing At Its Best.
          </p>

          {/* Feature row: icons SVG + aligned text */}
          <div className="flex items-start gap-4 mb-8">
            <Image
              src="/numbers.svg"
              alt="Feature highlights"
              width={NUMBERS_W}
              height={NUMBERS_H}
              className="flex-shrink-0"
            />
            <div
              className="flex flex-col justify-between"
              style={{
                height: NUMBERS_H,
                paddingTop: TEXT_PAD_TOP,
                paddingBottom: TEXT_PAD_BOTTOM,
              }}
            >
              {features.map((f, i) => (
                <div key={i}>
                  <h4 className="text-white font-black text-[0.65rem] uppercase tracking-[0.15em] mb-0.5">
                    {f.title}
                  </h4>
                  <p className="text-slate-400 text-[0.7rem] leading-snug max-w-[210px]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA bar */}
          <div className="flex items-center gap-4 border border-white/10 rounded-2xl p-4 bg-white/5 max-w-[600px]">
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-slate-300 text-xs flex-1 leading-relaxed">
              We Specialize In Engine Replacement, Repair, Reconditioning, And
              Performance Upgrades For All Models.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-primary text-white font-black px-5 py-2.5 rounded-xl text-xs whitespace-nowrap hover:brightness-110 transition-all uppercase tracking-widest"
            >
              Get A Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
