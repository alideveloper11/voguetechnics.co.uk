import type { PrecisionEngineSectionData } from "@/components/common/PrecisionEngineSection";

export type RangeRoverEngineSizePageData = {
  slug: string;
  engineSize: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  applications: string[];
  commonIssues: string[];
  serviceHighlights: string[];
  precision: PrecisionEngineSectionData;
  faqs: Array<{ question: string; answer: string }>;
};

function buildRangeRoverPrecision(title: string, engineSize: string): PrecisionEngineSectionData {
  return {
    heading: `Precision Engine Rebuilds & Repairs for ${title}`,
    eyebrow: `Specialist ${engineSize} Range Rover engine process - VOGUE TECHNICS.`,
    intro: `Every ${engineSize} Range Rover engine job follows a measured process: confirm the engine code, inspect the known failure points, quote clearly, then rebuild or replace using quality-matched components and warranty-backed workmanship.`,
    steps: [
      `We start with ${engineSize} Range Rover-specific diagnostics, checking fault codes, oil and coolant condition, timing behaviour and the symptoms that matter for this engine family.`,
      `You receive an itemised quote for the exact ${engineSize} repair route - targeted repair, rebuild, used engine, or reconditioned replacement - before work starts.`,
      `The engine is stripped, measured and rebuilt or replaced using OEM or quality-matched parts chosen for the ${engineSize} Range Rover platform.`,
      `Before handover, we road-test, pressure-check and verify the repair, then issue written warranty terms for the completed ${engineSize} engine work.`,
    ],
    imageAlt: `${title} rebuild process`,
  };
}

const rangeRoverEngineSizePages: Record<string, RangeRoverEngineSizePageData> = {
  "range-rover-2": {
    slug: "range-rover-2",
    engineSize: "2.0",
    title: "Range Rover 2.0 Engines",
    metaTitle: "Range Rover 2.0 Engines - Rebuild, Repair & Replacement",
    metaDescription:
      "Range Rover 2.0 engine specialists. Vogue Technics supply, rebuild, repair and replace 2.0 Range Rover engines with UK-wide support and written warranty.",
    intro:
      "Range Rover 2.0 engines are efficient, high-output units used across modern Range Rover platforms. They need accurate diagnosis, correct timing work, and careful checks around oil, cooling, turbo and emissions systems before any repair decision is made.",
    applications: ["Evoque 2.0 diesel and petrol", "Velar 2.0 Ingenium variants", "Sport 2.0 applications", "Hybrid and newer platform derivatives"],
    commonIssues: ["Timing chain noise or stretch", "Turbocharger wear and boost faults", "EGR/DPF related diesel issues", "Oil dilution, coolant loss or overheating", "Sensor and fuel-system faults"],
    serviceHighlights: ["Used and reconditioned 2.0 engines", "Timing chain and turbo replacement", "Engine rebuilds to measured tolerances", "Supply-only or full supply and fit", "UK-wide collection and delivery"],
    precision: buildRangeRoverPrecision("Range Rover 2.0 Engines", "2.0"),
    faqs: [
      {
        question: "Do you supply Range Rover 2.0 engines?",
        answer: "Yes. We supply used and reconditioned 2.0 Range Rover engines, and we can also provide full supply-and-fit at our workshop.",
      },
      {
        question: "Can a Range Rover 2.0 engine be rebuilt?",
        answer: "In many cases, yes. If the block and major castings are viable, a measured rebuild can restore reliability at a sensible cost.",
      },
      {
        question: "Do you cover Ingenium diesel and petrol engines?",
        answer: "Yes. We work on both diesel and petrol 2.0 Ingenium variants and confirm the exact engine code before quoting.",
      },
    ],
  },
  "range-rover-3": {
    slug: "range-rover-3",
    engineSize: "3.0",
    title: "Range Rover 3.0 Engines",
    metaTitle: "Range Rover 3.0 Engines - TDV6, SDV6, Petrol Repair & Replacement",
    metaDescription:
      "Range Rover 3.0 engine specialists for rebuilds, repairs, replacement engines and supply-and-fit services across the UK.",
    intro:
      "The 3.0 Range Rover engine family covers popular diesel and petrol variants across Sport, Vogue, Velar and Discovery platforms. These engines reward proper maintenance, but timing, crank, turbo and cooling faults need specialist assessment before costs escalate.",
    applications: ["Range Rover Sport 3.0 TDV6/SDV6", "Range Rover Vogue 3.0 diesel", "Velar 3.0 petrol and diesel", "Discovery 3.0 variants"],
    commonIssues: ["Timing chain wear", "Turbo and actuator faults", "Crankshaft or bottom-end wear", "Coolant leaks and overheating", "Injector and fuel-system faults"],
    serviceHighlights: ["3.0 engine rebuild and replacement", "Used and reconditioned units", "Timing chain replacement", "Turbo and fuel-system diagnosis", "Written warranty on major work"],
    precision: buildRangeRoverPrecision("Range Rover 3.0 Engines", "3.0"),
    faqs: [
      {
        question: "How much does a Range Rover 3.0 engine replacement cost?",
        answer: "Pricing depends on the exact engine code, condition, and whether you choose a used or reconditioned unit. We provide an itemised quote after confirming the vehicle details.",
      },
      {
        question: "Do you rebuild Range Rover 3.0 diesel engines?",
        answer: "Yes. We rebuild 3.0 diesel engines where the core is suitable, replacing worn components and checking the known failure areas properly.",
      },
      {
        question: "Can you collect my vehicle?",
        answer: "Yes. UK-wide collection and delivery can be arranged for engine rebuild, replacement and major repair work.",
      },
    ],
  },
  "range-rover-4.4": {
    slug: "range-rover-4.4",
    engineSize: "4.4",
    title: "Range Rover 4.4 Engines",
    metaTitle: "Range Rover 4.4 Engines - TDV8 & V8 Rebuilds and Replacement",
    metaDescription:
      "Range Rover 4.4 engine specialists. Vogue Technics handle 4.4 TDV8 and V8 rebuilds, repairs, replacements and supply-and-fit work.",
    intro:
      "Range Rover 4.4 engines are strong but complex V8 units. Whether diesel TDV8 or petrol V8, the correct repair depends on careful inspection of timing, cooling, oil pressure, turbo systems and internal wear before committing to a rebuild or replacement.",
    applications: ["Range Rover Vogue 4.4 TDV8", "Range Rover Sport 4.4 variants", "L322 and L405 applications", "V8 petrol and diesel platforms"],
    commonIssues: ["Timing chain and guide wear", "Turbocharger failure on TDV8 units", "Oil leaks and pressure concerns", "Cooling system faults", "High-mileage internal wear"],
    serviceHighlights: ["4.4 TDV8 rebuilds", "Used and reconditioned V8 engines", "Turbo replacement and oil-feed checks", "Supply-only and supply-and-fit", "Transparent written quotes"],
    precision: buildRangeRoverPrecision("Range Rover 4.4 Engines", "4.4"),
    faqs: [
      {
        question: "Do you work on Range Rover 4.4 TDV8 engines?",
        answer: "Yes. We repair, rebuild and replace Range Rover 4.4 TDV8 engines and confirm compatibility before supply or fitting.",
      },
      {
        question: "Is a 4.4 V8 rebuild better than replacement?",
        answer: "It depends on the damage. A rebuild is often best when the core is viable; replacement can be better when internal damage is extensive.",
      },
      {
        question: "Do rebuilt 4.4 engines come with warranty?",
        answer: "Yes. Major rebuilds and replacement engines are supplied with written warranty terms agreed before work begins.",
      },
    ],
  },
  "range-rover-5": {
    slug: "range-rover-5",
    engineSize: "5.0",
    title: "Range Rover 5.0 Engines",
    metaTitle: "Range Rover 5.0 Engines - Supercharged V8 Repair & Rebuild",
    metaDescription:
      "Range Rover 5.0 engine specialists for AJ133 supercharged V8 rebuilds, repairs, replacement engines and supply-and-fit services.",
    intro:
      "Range Rover 5.0 engines deliver serious performance, especially in supercharged V8 form. They require precise diagnosis and build discipline around timing chains, cooling, oiling, supercharger components and internal wear.",
    applications: ["Range Rover Sport 5.0 V8", "Range Rover Sport SVR AJ133", "Vogue 5.0 petrol applications", "Supercharged V8 models"],
    commonIssues: ["Timing chain rattle or guide wear", "Supercharger bearing and cooling issues", "Oil consumption or leaks", "Head gasket and overheating faults", "Carbon build-up and fuelling issues"],
    serviceHighlights: ["5.0 V8 rebuilds and repairs", "AJ133 supercharged engine support", "Timing chain and supercharger checks", "Replacement engines supplied and fitted", "Warranty-backed workmanship"],
    precision: buildRangeRoverPrecision("Range Rover 5.0 Engines", "5.0"),
    faqs: [
      {
        question: "Do you rebuild Range Rover 5.0 supercharged engines?",
        answer: "Yes. We rebuild and repair AJ133 5.0 V8 engines, including supercharged Range Rover Sport and SVR applications.",
      },
      {
        question: "What are common Range Rover 5.0 engine problems?",
        answer: "Common issues include timing chain noise, cooling faults, oil leaks, supercharger wear and high-mileage internal wear.",
      },
      {
        question: "Can you supply a replacement 5.0 V8 engine?",
        answer: "Yes. We can supply used or reconditioned 5.0 V8 engines, or provide complete supply-and-fit at our workshop.",
      },
    ],
  },
};

export default rangeRoverEngineSizePages;
