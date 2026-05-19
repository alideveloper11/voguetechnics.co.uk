"use client";

import Image from "next/image";

// SVG displayed height (px) — drives all circle-to-text alignment
const TREE_H = 290;

// Circle centre Y-positions scaled from natural 487px → TREE_H (scale ≈ 0.595)
const CIRCLE_Y = { 1: 19, 2: 99, 3: 179, 4: 271 } as const;

// Each text block ~40px tall (2 lines); centre on its circle with 20px offset
const TEXT_TOP = {
  1: Math.max(0, CIRCLE_Y[1] - 20),
  2: CIRCLE_Y[2] - 20,
  3: CIRCLE_Y[3] - 20,
  4: CIRCLE_Y[4] - 20,
} as const;

const LEFT_STEPS: Record<1 | 3, string> = {
  1: "Every job begins with a thorough specialist diagnostic using OEM-grade equipment. We identify the exact fault before recommending any work — no guesswork, no unnecessary spend.",
  3: "All repairs and rebuilds are carried out to manufacturer specification using genuine OEM or quality-matched parts. Our engineers restore your engine to factory standard, every time.",
};

const RIGHT_STEPS: Record<2 | 4, string> = {
  2: "You receive a fully itemised written quote covering all parts and labour before work starts. No hidden costs, no mid-job surprises — the price we quote is the price you pay.",
  4: "Before handover your engine is road-tested and pressure-checked. Every repair is backed by a minimum six-month warranty, confirmed in writing at collection.",
};

const ALL_STEPS = [
  { num: 1 as const, text: LEFT_STEPS[1] },
  { num: 2 as const, text: RIGHT_STEPS[2] },
  { num: 3 as const, text: LEFT_STEPS[3] },
  { num: 4 as const, text: RIGHT_STEPS[4] },
];

const PrecisionEngineSection = () => {
  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Centred heading */}
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 lg:mb-10 max-w-5xl mx-auto leading-tight">
          Precision Engine Rebuilds &amp; Repairs — Range Rover, Land Rover, Jaguar, Audi &amp; BMW
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start">

          {/* Left column */}
          <div className="w-full lg:w-[58%]">
            <p className="text-base font-bold text-slate-900 mb-4">
              Specialist Engine Rebuilds, Repairs &amp; Replacements — VOGUE TECHNICS.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-[420px] mb-8 text-sm">
              With over 20 years of hands-on experience, Vogue Technics delivers expert engine
              rebuilds, repairs, and replacements for Range Rover, Land Rover, Jaguar, Audi,
              and BMW — using OEM parts, transparent fixed pricing, and a warranty on every job.
            </p>

            {/* Mobile: numbered step list */}
            <div className="flex flex-col gap-5 lg:hidden mb-2">
              {ALL_STEPS.map(({ num, text }) => (
                <div key={num} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {num}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Desktop: tree SVG layout */}
            <div
              className="hidden lg:grid"
              style={{ gridTemplateColumns: "1fr 110px 1fr", height: TREE_H }}
            >
              {/* Left text: steps 1 & 3 */}
              <div className="relative">
                {([1, 3] as const).map((id) => (
                  <p
                    key={id}
                    className="absolute left-0 pr-3 text-sm text-slate-600 leading-relaxed"
                    style={{ top: TEXT_TOP[id] }}
                  >
                    {LEFT_STEPS[id]}
                  </p>
                ))}
              </div>

              {/* Tree SVG */}
              <div className="relative" style={{ height: TREE_H }}>
                <Image
                  src="/tree.svg"
                  alt="4-step process tree"
                  fill
                  className="object-contain object-top"
                />
              </div>

              {/* Right text: steps 2 & 4 */}
              <div className="relative">
                {([2, 4] as const).map((id) => (
                  <p
                    key={id}
                    className="absolute left-0 pl-3 text-sm text-slate-600 leading-relaxed"
                    style={{ top: TEXT_TOP[id] }}
                  >
                    {RIGHT_STEPS[id]}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: car image */}
          <div className="w-full lg:w-[42%] relative flex justify-center lg:justify-end mt-10 lg:mt-0">

            {/* Decorative lines — desktop only */}
            <svg
              className="absolute -top-6 right-0 hidden lg:block pointer-events-none"
              width="130" height="100" viewBox="0 0 130 100" fill="none"
            >
              <line x1="50" y1="0"  x2="130" y2="40" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="20" x2="130" y2="66" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0"  y1="44" x2="130" y2="96" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <svg
              className="absolute bottom-4 right-0 hidden lg:block pointer-events-none"
              width="100" height="80" viewBox="0 0 100 80" fill="none"
            >
              <line x1="100" y1="4"  x2="8"  y2="55" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="100" y1="30" x2="35" y2="80" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <Image
              src="/car.svg"
              alt="Range Rover — aerial view"
              width={240}
              height={300}
              className="w-full max-w-[180px] sm:max-w-[220px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrecisionEngineSection;
