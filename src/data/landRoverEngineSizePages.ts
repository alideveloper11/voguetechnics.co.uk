import type { PrecisionEngineSectionData } from "@/components/common/PrecisionEngineSection";
import type { EngineSizeContentBlock } from "@/components/common/EngineSizeContentSection";

export type LandRoverEngineSizePageData = {
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
  contentSections?: EngineSizeContentBlock[];
  faqs: Array<{ question: string; answer: string }>;
};

function buildLandRoverPrecision(title: string, engineSize: string): PrecisionEngineSectionData {
  return {
    heading: `Precision Engine Rebuilds & Repairs for ${title}`,
    eyebrow: `Specialist ${engineSize} Land Rover engine process - VOGUE TECHNICS.`,
    intro: `Every ${engineSize} Land Rover engine job is handled around the exact engine code and platform. We inspect the common failure points first, then recommend the repair, rebuild or replacement route that gives the best long-term result.`,
    steps: [
      `We begin with ${engineSize} Land Rover diagnostics, checking live data, fault history, timing behaviour, oil condition and cooling system integrity.`,
      `You get a clear quote for the correct ${engineSize} route - repair, rebuild, used replacement or reconditioned engine - with no work started without approval.`,
      `The engine is rebuilt or replaced using OEM or quality-matched parts selected for the ${engineSize} Land Rover platform and known weak points.`,
      `Final checks include pressure testing, road testing and diagnostic verification, followed by written warranty terms for the ${engineSize} engine work.`,
    ],
    imageAlt: `${title} rebuild process`,
  };
}

const landRoverEngineSizePages: Record<string, LandRoverEngineSizePageData> = {
  "land-rover-2": {
    slug: "land-rover-2",
    engineSize: "2.0",
    title: "Land Rover 2.0 Engines",
    metaTitle: "Land Rover 2.0 Engines - Rebuild, Repair & Replacement",
    metaDescription:
      "Land Rover 2.0 engine specialists. Vogue Technics supply, rebuild, repair and replace 2.0 Land Rover engines with UK-wide support and written warranty.",
    intro:
      "Land Rover 2.0 engines cover modern Ingenium diesel and petrol applications across Discovery Sport, Freelander-era replacements and newer platforms. Correct diagnosis around timing, turbo, fuel and emissions systems is essential before repair or replacement.",
    applications: ["Discovery Sport 2.0 diesel and petrol", "Freelander 2 replacement options", "Defender newer 2.0 applications", "Ingenium platform derivatives"],
    commonIssues: ["Timing chain noise or stretch", "Turbocharger wear and boost faults", "EGR/DPF related diesel issues", "Oil dilution or coolant loss", "Sensor and fuel-system faults"],
    serviceHighlights: ["Used and reconditioned 2.0 engines", "Timing chain and turbo replacement", "Engine rebuilds to measured tolerances", "Supply-only or full supply and fit", "UK-wide collection and delivery"],
    precision: buildLandRoverPrecision("Land Rover 2.0 Engines", "2.0"),
    contentSections: [
      {
        heading: "Buy Recon & Second Hand Land Rover 2.0 Engines",
        kicker: "Vogue Technics",
        paragraphs: [
          "If you are looking to replace the engine in your Land Rover, there are many intricate details that need to be checked closely to achieve a proper engine replacement. The replacement unit must match the vehicle, engine code, ancillaries and control systems so the completed work is reliable.",
          "Finding the exact replacement engine for your vehicle is specialist work. Vogue Technics can help confirm the correct Land Rover 2.0 engine for your registration, advise whether a used, second hand or reconditioned engine is the right option, and supply or fit the unit with warranty-backed workmanship.",
          "The Land Rover 2.0 engine is a compact and efficient 2.0-litre unit used across modern Land Rover platforms. When matched correctly to the existing vehicle specification, it can be a strong replacement option for Land Rover owners.",
        ],
      },
      {
        heading: "How to Determine the Size of the Engine?",
        paragraphs: [
          "Engine size is determined by the amount of space inside the engine cylinders. This is where the fuel and air mixture is compressed, combusted and ignited to create the energy that moves the vehicle.",
          "In simple terms, the combined volume of all cylinders gives the engine capacity, usually shown in litres. Cylinder count and engine design also affect how the engine delivers power, torque and fuel efficiency.",
          "A common misconception is that bigger is always better. Modern engine technology allows smaller engines, such as the Land Rover 2.0, to deliver improved fuel efficiency while still producing strong power and torque figures when maintained and matched correctly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you supply Land Rover 2.0 engines?",
        answer: "Yes. We supply used and reconditioned 2.0 Land Rover engines and can provide full supply-and-fit at our workshop.",
      },
      {
        question: "Can a Land Rover 2.0 Ingenium engine be rebuilt?",
        answer: "In many cases, yes. We inspect the core first, then recommend rebuild, repair or replacement based on condition.",
      },
      {
        question: "Do you work on diesel and petrol 2.0 engines?",
        answer: "Yes. We work on both diesel and petrol 2.0 Land Rover variants and confirm the exact engine code before quoting.",
      },
    ],
  },
  "land-rover-3": {
    slug: "land-rover-3",
    engineSize: "3.0",
    title: "Land Rover 3.0 Engines",
    metaTitle: "Land Rover 3.0 Engines - TDV6, SDV6 Repair & Replacement",
    metaDescription:
      "Land Rover 3.0 engine specialists for rebuilds, repairs, replacement engines and supply-and-fit services across the UK.",
    intro:
      "The 3.0 Land Rover engine family includes popular TDV6 and SDV6 units used across Discovery and Defender-related platforms. These engines need specialist assessment around timing, crankshaft condition, turbo systems, injectors and cooling before costs escalate.",
    applications: ["Discovery 4 3.0 TDV6/SDV6", "Discovery 5 3.0 variants", "Defender 3.0 applications", "Shared Jaguar Land Rover 3.0 platforms"],
    commonIssues: ["Timing chain wear", "Turbo and actuator faults", "Crankshaft or bottom-end wear", "Coolant leaks and overheating", "Injector and fuel-system faults"],
    serviceHighlights: ["3.0 engine rebuild and replacement", "Used and reconditioned units", "Timing chain replacement", "Turbo and fuel-system diagnosis", "Written warranty on major work"],
    precision: buildLandRoverPrecision("Land Rover 3.0 Engines", "3.0"),
    contentSections: [
      {
        heading: "Buy Recon & Second Hand Land Rover 3.0 Engines",
        kicker: "Vogue Technics",
        paragraphs: [
          "If you are looking to replace the engine in your Land Rover, there are many intricate details that need to be monitored closely to achieve a proper engine replacement. The replacement unit must match the vehicle, engine code, ancillaries and control systems so the completed work is reliable.",
          "Finding the exact replacement engine for your vehicle is specialist work. Vogue Technics can help confirm the correct Land Rover 3.0 engine for your registration, advise whether a used, second hand or reconditioned engine is the right option, and supply or fit the unit with warranty-backed workmanship.",
          "The Land Rover 3.0 engine is a capable and efficient 3.0-litre unit used across popular Land Rover platforms. When matched correctly to the existing vehicle specification, it can be a strong replacement option for Land Rover owners.",
        ],
      },
      {
        heading: "How to Determine the Size of the Engine?",
        paragraphs: [
          "Engine size is determined by the amount of space inside the engine cylinders. This is where the fuel and air mixture is compressed, combusted and ignited to create the energy that moves the vehicle.",
          "In simple terms, the combined volume of all cylinders gives the engine capacity, usually shown in litres. Cylinder count and engine design also affect how the engine delivers power, torque and fuel efficiency.",
          "A common misconception is that bigger is always better. Modern engine technology allows engines to deliver improved fuel efficiency while still producing strong power and torque figures when maintained and matched correctly.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a Land Rover 3.0 engine replacement cost?",
        answer: "Pricing depends on the exact engine code, damage level, and whether you choose a used or reconditioned unit. We provide an itemised quote after confirming the vehicle details.",
      },
      {
        question: "Do you rebuild Land Rover 3.0 diesel engines?",
        answer: "Yes. We rebuild 3.0 diesel engines where the core is suitable, replacing worn components and checking known failure areas properly.",
      },
      {
        question: "Can you collect my vehicle?",
        answer: "Yes. UK-wide collection and delivery can be arranged for engine rebuild, replacement and major repair work.",
      },
    ],
  },
  "land-rover-4.4": {
    slug: "land-rover-4.4",
    engineSize: "4.4",
    title: "Land Rover 4.4 Engines",
    metaTitle: "Land Rover 4.4 Engines - TDV8 & V8 Rebuilds and Replacement",
    metaDescription:
      "Land Rover 4.4 engine specialists. Vogue Technics handle 4.4 TDV8 and V8 rebuilds, repairs, replacements and supply-and-fit work.",
    intro:
      "Land Rover 4.4 engines are complex V8 units that need careful checks around timing, oil pressure, turbocharger condition, cooling system integrity and internal wear before choosing rebuild or replacement.",
    applications: ["Discovery 4.4 applications", "Range Rover shared 4.4 TDV8 platforms", "V8 petrol and diesel units", "Specialist JLR V8 engine swaps"],
    commonIssues: ["Timing chain and guide wear", "Turbocharger failure on TDV8 units", "Oil leaks and pressure concerns", "Cooling system faults", "High-mileage internal wear"],
    serviceHighlights: ["4.4 TDV8 rebuilds", "Used and reconditioned V8 engines", "Turbo replacement and oil-feed checks", "Supply-only and supply-and-fit", "Transparent written quotes"],
    precision: buildLandRoverPrecision("Land Rover 4.4 Engines", "4.4"),
    contentSections: [
      {
        heading: "Buy Recon & Second Hand Land Rover 4.4 Engines",
        kicker: "Vogue Technics",
        paragraphs: [
          "If you are looking to replace the engine in your Land Rover, there are many intricate details that need to be checked closely to achieve a proper engine replacement. The replacement unit must match the vehicle, engine code, ancillaries, turbo setup and control systems so the finished repair is reliable.",
          "Finding the exact replacement engine for your vehicle is specialist work. Vogue Technics can help confirm the correct Land Rover 4.4 engine for your registration, advise whether a used, second hand or reconditioned engine is the right option, and supply or fit the unit with warranty-backed workmanship.",
          "The Land Rover 4.4 engine is a powerful V8 unit used across premium Land Rover and shared JLR platforms. When matched correctly to the existing vehicle specification, it can be a strong replacement option for TDV8 and V8 Land Rover owners.",
        ],
      },
      {
        heading: "How to Determine the Size of the Engine?",
        paragraphs: [
          "Engine size is determined by the amount of space inside the engine cylinders. This is where the fuel and air mixture is compressed, combusted and ignited to create the energy that moves the vehicle.",
          "In simple terms, the combined volume of all cylinders gives the engine capacity, usually shown in litres. Cylinder count, turbocharging and engine design also affect how the engine delivers power, torque and fuel efficiency.",
          "A common misconception is that bigger is always better. Modern engine technology allows engines to deliver improved fuel efficiency while still producing strong power and torque figures when maintained and matched correctly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work on Land Rover 4.4 TDV8 engines?",
        answer: "Yes. We repair, rebuild and replace 4.4 TDV8 engines and confirm compatibility before supply or fitting.",
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
  "land-rover-5": {
    slug: "land-rover-5",
    engineSize: "5.0",
    title: "Land Rover 5.0 Engines",
    metaTitle: "Land Rover 5.0 Engines - V8 Repair, Rebuild & Replacement",
    metaDescription:
      "Land Rover 5.0 engine specialists for V8 rebuilds, repairs, replacement engines and supply-and-fit services.",
    intro:
      "Land Rover 5.0 engines deliver strong V8 performance and require precise diagnosis around timing chains, cooling, oiling, fuel systems and internal wear. We support rebuilds, replacement engines and major repairs with written warranty.",
    applications: ["Discovery and Defender V8 applications", "AJ133 5.0 V8 platforms", "Supercharged and naturally aspirated V8 units", "Specialist JLR performance models"],
    commonIssues: ["Timing chain rattle or guide wear", "Cooling and overheating faults", "Oil consumption or leaks", "Head gasket stress", "Carbon build-up and fuelling issues"],
    serviceHighlights: ["5.0 V8 rebuilds and repairs", "AJ133 engine support", "Timing chain and cooling checks", "Replacement engines supplied and fitted", "Warranty-backed workmanship"],
    precision: buildLandRoverPrecision("Land Rover 5.0 Engines", "5.0"),
    contentSections: [
      {
        heading: "Buy Recon & Second Hand Land Rover 5.0 Engines",
        kicker: "Vogue Technics",
        paragraphs: [
          "If you are looking to replace the engine in your Land Rover, there are many intricate details that need to be checked closely to achieve a proper engine replacement. The replacement unit must match the vehicle, engine code, ancillaries, supercharger equipment where fitted, and control systems so the completed work performs correctly.",
          "Finding the exact replacement engine for your vehicle is specialist work. Vogue Technics can help confirm the correct Land Rover 5.0 engine for your registration, advise whether a used, second hand or reconditioned engine is the right option, and supply or fit the unit with warranty-backed workmanship.",
          "The Land Rover 5.0 engine is a high-performance V8 unit used across powerful Land Rover models, including supercharged applications. When matched correctly to the existing vehicle specification, it can be a strong replacement option for Land Rover owners who need dependable performance.",
        ],
      },
      {
        heading: "How to Determine the Size of the Engine?",
        paragraphs: [
          "Engine size is determined by the amount of space inside the engine cylinders. This is where the fuel and air mixture is compressed, combusted and ignited to create the energy that moves the vehicle.",
          "In simple terms, the combined volume of all cylinders gives the engine capacity, usually shown in litres. Cylinder count, induction type and engine design also affect how the engine delivers power, torque and fuel efficiency.",
          "A common misconception is that bigger is always better. Modern engine technology allows engines to deliver improved fuel efficiency while still producing strong power and torque figures when maintained and matched correctly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you rebuild Land Rover 5.0 V8 engines?",
        answer: "Yes. We rebuild and repair 5.0 V8 engines, including AJ133 applications.",
      },
      {
        question: "What are common Land Rover 5.0 engine problems?",
        answer: "Common issues include timing chain noise, cooling faults, oil leaks, high-mileage wear and fuelling problems.",
      },
      {
        question: "Can you supply a replacement 5.0 V8 engine?",
        answer: "Yes. We can supply used or reconditioned 5.0 V8 engines, or provide complete supply-and-fit at our workshop.",
      },
    ],
  },
};

export default landRoverEngineSizePages;
