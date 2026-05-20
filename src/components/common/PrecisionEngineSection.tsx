"use client";

import Image from "next/image";

const TREE_H = 290;
const CIRCLE_Y = { 1: 19, 2: 99, 3: 179, 4: 271 } as const;
const TEXT_TOP = {
  1: Math.max(0, CIRCLE_Y[1] - 20),
  2: CIRCLE_Y[2] - 20,
  3: CIRCLE_Y[3] - 20,
  4: CIRCLE_Y[4] - 20,
} as const;

export type PrecisionEngineSectionData = {
  heading: string;
  eyebrow: string;
  intro: string;
  steps: [string, string, string, string];
  imageAlt?: string;
};

interface PrecisionEngineSectionProps {
  data?: PrecisionEngineSectionData;
}

const defaultPrecisionData: PrecisionEngineSectionData = {
  heading: "Precision Engine Rebuilds & Repairs - Range Rover, Land Rover, Jaguar, Audi & BMW",
  eyebrow: "Specialist Engine Rebuilds, Repairs & Replacements - VOGUE TECHNICS.",
  intro:
    "With over 20 years of hands-on experience, Vogue Technics delivers expert engine rebuilds, repairs, and replacements for Range Rover, Land Rover, Jaguar, Audi, and BMW - using OEM parts, transparent fixed pricing, and a warranty on every job.",
  steps: [
    "Every job begins with a thorough specialist diagnostic using OEM-grade equipment. We identify the exact fault before recommending any work - no guesswork, no unnecessary spend.",
    "You receive a fully itemised written quote covering all parts and labour before work starts. No hidden costs, no mid-job surprises - the price we quote is the price you pay.",
    "All repairs and rebuilds are carried out to manufacturer specification using genuine OEM or quality-matched parts. Our engineers restore your engine to factory standard, every time.",
    "Before handover your engine is road-tested and pressure-checked. Every repair is backed by a minimum six-month warranty, confirmed in writing at collection.",
  ],
  imageAlt: "Engine specialist vehicle view",
};

export default function PrecisionEngineSection({ data = defaultPrecisionData }: PrecisionEngineSectionProps) {
  const leftSteps: Record<1 | 3, string> = {
    1: data.steps[0],
    3: data.steps[2],
  };
  const rightSteps: Record<2 | 4, string> = {
    2: data.steps[1],
    4: data.steps[3],
  };
  const allSteps = [
    { num: 1 as const, text: leftSteps[1] },
    { num: 2 as const, text: rightSteps[2] },
    { num: 3 as const, text: leftSteps[3] },
    { num: 4 as const, text: rightSteps[4] },
  ];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 lg:mb-10 max-w-5xl mx-auto leading-tight">
          {data.heading}
        </h2>

        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-[58%]">
            <p className="text-base font-bold text-slate-900 mb-4">{data.eyebrow}</p>
            <p className="text-slate-600 leading-relaxed max-w-[420px] mb-8 text-sm">{data.intro}</p>

            <div className="flex flex-col gap-5 lg:hidden mb-2">
              {allSteps.map(({ num, text }) => (
                <div key={num} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {num}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:grid" style={{ gridTemplateColumns: "1fr 110px 1fr", height: TREE_H }}>
              <div className="relative">
                {([1, 3] as const).map((id) => (
                  <p
                    key={id}
                    className="absolute left-0 pr-3 text-sm text-slate-600 leading-relaxed"
                    style={{ top: TEXT_TOP[id] }}
                  >
                    {leftSteps[id]}
                  </p>
                ))}
              </div>

              <div className="relative" style={{ height: TREE_H }}>
                <Image src="/tree.svg" alt="4-step process tree" fill className="object-contain object-top" />
              </div>

              <div className="relative">
                {([2, 4] as const).map((id) => (
                  <p
                    key={id}
                    className="absolute left-0 pl-3 text-sm text-slate-600 leading-relaxed"
                    style={{ top: TEXT_TOP[id] }}
                  >
                    {rightSteps[id]}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[42%] relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Image
              src="/car.svg"
              alt={data.imageAlt ?? "Engine specialist vehicle view"}
              width={240}
              height={300}
              className="w-full max-w-[180px] sm:max-w-[220px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
