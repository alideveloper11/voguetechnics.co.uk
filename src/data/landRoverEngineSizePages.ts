import type { PrecisionEngineSectionData } from "@/components/common/PrecisionEngineSection";
import type { EngineSizeContentBlock } from "@/components/common/EngineSizeContentSection";
import { ReviewItem } from "@/components/common/ReviewsSection";

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type LandRoverEngineSizePageData = {
  slug: string;
  engineSize: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  customFeatures: Array<{
    title: string;
    description: string;
  }>;
  labels: string[];
  intro: string;
  applications: string[];
  commonIssues: string[];
  serviceHighlights: ServiceHighlight[];
  precision: PrecisionEngineSectionData;
  contentSections?: EngineSizeContentBlock[];
  reviewsData: ReviewItem[];
  faqs: Array<{ question: string; answer: string }>;
};

const landRoverEngineSizePages: Record<string, LandRoverEngineSizePageData> = {
  "land-rover-2": {
    slug: "land-rover-2",
    engineSize: "2.0",
    title: "Land Rover 2.0 Ingenium Engine ",
    metaTitle:
      "Land Rover 2.0 Ingenium Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 2.0 Ingenium engine specialists. Timing chain, turbo faults, rebuilds and reconditioned replacements for Discovery Sport and Defender. UK-wide collection.",
    labels: [
      "Save up to 40% when you enquire online",
      "UK-wide collection and delivery available",
      "Reconditioned, remanufactured and used engines supplied",
      "Written warranty on every engine we fit ",
    ],
    customFeatures: [
      {
        title: "Specialist Ingenium Knowledge",
        description:
          "Our technicians work exclusively on Land Rover 2.0 Ingenium engines, so every diagnosis is backed by real model-specific experience.",
      },
      {
        title: "Warranty-Backed Every Time",
        description:
          "Every engine replacement, rebuild or repair leaves our workshop with a written warranty covering parts and labour.",
      },
      {
        title: "Collection & Delivery Nationwide",
        description:
          "We collect and deliver vehicles and engines across the UK, making the process simple wherever you're based.",
      },
    ],
    intro:
      "The Land Rover 2.0 Ingenium engine is fitted across the Discovery Sport, Defender and Freelander successor platforms in both diesel and petrol form. A modern, turbocharged four-cylinder unit, it is efficient and capable but vulnerable to timing chain stretch, turbocharger wear and oil dilution on diesel variants used frequently on short journeys. Vogue Technics carry out Land Rover 2.0 Ingenium engine rebuilds, repairs and replacements with accurate platform-specific diagnosis, written quotes and warranty-backed workmanship.",
    applications: [
      "Discovery Sport 2.0 Ingenium Engine Rebuilds",
      "Defender 2.0 Ingenium Engine Replacement",
      "Freelander 2 Ingenium Conversion Engines",
      "Land Rover 2.0 Petrol & Diesel Specialists",
    ],
    commonIssues: [
      "Timing chain rattle developing on cold start-up",
      "Turbocharger actuator faults causing boost loss",
      "Oil dilution from frequent short diesel journeys",
      "Coolant loss or overheating with no visible leak",
      "EGR valve failure affecting diesel runnings",
      "DPF blockage triggering engine management warnings",
    ],
    serviceHighlights: [
      {
        title: "Engine Rebuild Services",
        description:
          "Full strip-down and rebuild of your existing 2.0 Ingenium engine using new or reconditioned internal components.",
      },
      {
        title: "Reconditioned Engine Supply",
        description:
          "Fully reconditioned Land Rover 2.0 engines supplied and fitted, ideal for high-mileage vehicles needing a reliable replacement.",
      },
      {
        title: "Freelander 2 Engine Conversion",
        description:
          "Ingenium conversion work for Freelander 2 owners seeking a more modern, reliable engine solution.",
      },
      {
        title: "Timing Chain Replacement",
        description:
          "Diagnosis and replacement of worn timing chains, tensioners and guides on Ingenium petrol and diesel engines.",
      },
      {
        title: "Turbocharger Replacement",
        description:
          "Turbo diagnosis and replacement for boost loss, actuator faults and underperformance across Ingenium units.",
      },
      {
        title: "Engine Health Checks",
        description:
          "A thorough inspection of your Land Rover's 2.0 engine to identify developing faults before they cause a breakdown.",
      },
    ],
    precision: {
      heading: "How We Diagnose, Rebuild And Replace Your 2.0 Ingenium Engine",
      eyebrow: "Dedicated Land Rover Engine Specialists",
      intro:
        "From the moment your vehicle arrives, we follow a structured process using live-data diagnostics to identify the real cause of the fault before recommending any work.",
      steps: [
        "We inspect the vehicle and run live-data diagnostics to confirm whether the fault is the timing chain, turbo, EGR, DPF or another component.",
        "We verify the exact Ingenium variant fitted to your Land Rover before quoting.",
        "Based on the diagnosis, we carry out a targeted repair, full rebuild, or supply a reconditioned replacement engine.",
        "Every engine is tested under load before your vehicle is returned, with a written warranty covering the completed work.",
      ],
      imageAlt: "Land Rover engine diagnostics and rebuild process",
    },
    contentSections: [
      {
        heading: "Understanding Your Land Rover 2.0 Engine Replacement Options",
        kicker: "Vogue Technics",
        paragraphs: [
          "When a Land Rover 2.0 Ingenium engine develops a fault, a rebuild, reconditioned unit or full replacement can all be viable routes forward, depending on what's actually failed.",
          "A rebuild suits engines with isolated component failure, such as a damaged timing chain or worn turbo. A reconditioned or exchange engine is often the faster choice where wear is more widespread. We assess your D150, D165, D180 or D200 unit and recommend the option that balances cost, reliability and turnaround time.",
        ],
      },
      {
        heading: "Freelander 2 Ingenium Conversion: A Specialist Service",
        kicker: "Supply & Fit",
        paragraphs: [
          "Owners of older Freelander 2 models facing costly original engine repairs increasingly ask whether a modern Ingenium engine can be fitted as a more reliable long-term replacement.",
          "We carry out Freelander 2 Ingenium conversion work, replacing the original engine with a 2.0 Ingenium unit to improve reliability and reduce ongoing running costs. This is a specialist service requiring careful compatibility assessment, and we talk through the practicalities with every customer before quoting.",
        ],
      },
    ],
    reviewsData: [
      {
        id: 1,
        name: "Ian F.",
        rating: 5,
        text: "My Discovery Sport's timing chain started rattling on cold starts and I feared the worst. The team diagnosed it quickly, quoted fairly, and had the car back to me within a week.",
        date: "1 week ago", // You can customize the relative date text as needed
      },
      {
        id: 2,
        name: "Rachel N.",
        rating: 5,
        text: "Needed a reconditioned engine for my Defender after a turbo failure. Communication was excellent throughout and the warranty gave me real peace of mind.",
        date: "2 weeks ago",
      },
      {
        id: 3,
        name: "Tom B.",
        rating: 5,
        text: "Asked about converting my old Freelander 2 to an Ingenium engine and they talked me through the whole process honestly, including what wasn't guaranteed. Really pleased with the result.",
        date: "3 weeks ago",
      },
    ],
    faqs: [
      {
        question:
          "What are the most common Land Rover 2.0 Ingenium engine problems?",
        answer:
          "The most frequent issues include timing chain stretch causing a cold-start rattle, turbocharger actuator faults leading to boost loss, and oil dilution from repeated short diesel journeys. EGR valve failure and DPF blockage are also common on diesel units. We diagnose the exact cause before recommending a repair, rebuild or replacement.",
      },
      {
        question:
          "How much does a Land Rover 2.0 Ingenium engine rebuild cost?",
        answer:
          "Costs vary depending on the extent of damage, the specific engine code (D150, D165, D180 or D200), and whether a full rebuild or targeted repair is needed. We provide a written, itemised quote after inspecting your vehicle, so you know exactly what's included before any work begins.",
      },
      {
        question:
          "Can a Land Rover Discovery Sport 2.0 engine be rebuilt rather than replaced?",
        answer:
          "In many cases, yes. Where damage is isolated to components like the timing chain or turbocharger, a rebuild is often more cost-effective than a full replacement. We assess mileage, fault history and overall engine condition before recommending whether a rebuild or replacement is the better long-term option.",
      },
      {
        question:
          "Do you carry out Land Rover 2.0 Ingenium timing chain replacement?",
        answer:
          "Yes, timing chain replacement is one of our most common Ingenium repairs. We replace the chain, tensioner and guides together to prevent premature failure, addressing the cold-start rattle many Discovery Sport and Defender owners notice at higher mileages.",
      },
      {
        question:
          "Do you offer UK-wide collection for Land Rover 2.0 engine work?",
        answer:
          "Yes, we arrange collection and delivery for customers across the UK, not just locally in Essex. This means you can access specialist Ingenium engine diagnosis, rebuilds and replacements without needing to travel to our workshop in person.",
      },
      {
        question: "Is the Land Rover Defender 2.0 D200 engine reliable?",
        answer:
          "The D200 is generally a strong performer, but like other Ingenium variants it can develop timing chain and turbo-related faults at higher mileages, particularly with frequent short journeys. Regular servicing and early diagnosis of any unusual noises help keep the engine running reliably for longer.",
      },
    ],
  },
  "land-rover-3": {
    slug: "land-rover-3",
    engineSize: "3.0",
    title: "Land Rover 3.0 Engine",
    metaTitle:
      "Land Rover 3.0 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 3.0 engine specialists. Timing chain, turbo faults, rebuilds and reconditioned replacements. UK-wide collection and delivery available.",
    labels: [
      "Save up to 40% when you enquire online",
      "UK-wide collection and delivery available",
      "Reconditioned, rebuilt and used engines supplied",
      "Written warranty on every engine we fit",
    ],
    customFeatures: [
      {
        title: "Trusted Land Rover 3.0 Specialists",
        description:
          "Our technicians focus specifically on Land Rover 3.0 engines, giving every customer an accurate, experience-led diagnosis.",
      },
      {
        title: "Warranty-Backed Every Time",
        description:
          "Every engine rebuild, replacement or repair we carry out is covered by a written warranty on parts and labour.",
      },
      {
        title: "UK-Wide Collection & Delivery",
        description:
          "We collect and deliver vehicles and engines across the country, so distance is never a barrier to getting your Land Rover fixed properly.",
      },
    ],
    intro:
      "The Land Rover 3.0 engine is a high-performance unit found across various premium models. While powerful and capable, it requires specialized care for issues like timing chain wear, turbo failures, and cooling system concerns. Vogue Technics provides professional Land Rover 3.0 engine rebuilds, repairs, and replacements with precise diagnostics, transparent written quotes, and warranty-backed workmanship.",
    applications: [
      "Land Rover 3.0 Engine Rebuild Service",
      "Land Rover 3.0 Reconditioned Engine Supply",
      "Land Rover 3.0 Engine Replacement Near You",
      "Land Rover 3.0 Specialist Diagnostics",
    ],
    commonIssues: [
      "Reduced power or performance under load",
      "Unusual noises from the engine at start-up",
      "Warning lights linked to engine management faults",
      "Increased oil consumption or visible oil leaks",
      "Coolant loss or overheating during normal driving",
      "Rough running or difficulty starting from cold",
    ],
    serviceHighlights: [
      {
        title: "Engine Rebuild Services",
        description:
          "Full strip-down and rebuild of your existing Land Rover 3.0 engine using quality-matched internal components.",
      },
      {
        title: "Reconditioned Engine Supply",
        description:
          "Fully reconditioned Land Rover 3.0 engines supplied and fitted, ideal for vehicles needing a dependable replacement.",
      },
      {
        title: "Timing Chain Replacement",
        description:
          "Diagnosis and replacement of worn timing chains, tensioners and guides on Land Rover 3.0 engines.",
      },
      {
        title: "Turbocharger Replacement",
        description:
          "Turbo diagnosis and replacement for boost loss, reduced performance and turbo-related faults.",
      },
      {
        title: "Head Gasket Replacement",
        description:
          "Head gasket diagnosis and replacement for engines showing coolant loss or overheating.",
      },
      {
        title: "Engine Health Checks",
        description:
          "A thorough inspection of your Land Rover's 3.0 engine to catch developing faults before they cause a breakdown.",
      },
    ],
    precision: {
      heading:
        "How We Diagnose, Rebuild And Replace Your Land Rover 3.0 Engine",
      eyebrow: "Dedicated Land Rover Engine Specialists",
      intro:
        "From the moment your vehicle arrives, we follow a structured process to identify the real cause of the fault before recommending any repair, rebuild or replacement.",
      steps: [
        "We inspect the vehicle and run full diagnostics to identify the source of the fault.",
        "We assess the extent of the damage and confirm which components are affected.",
        "Based on the diagnosis, we carry out a targeted repair, full rebuild, or supply a reconditioned replacement engine.",
        "Every engine is tested before your vehicle is returned, with a written warranty covering the completed work.",
      ],
      imageAlt: "Land Rover 3.0 engine diagnostics and rebuild process",
    },
    contentSections: [
      {
        heading: "How Much Does A Land Rover 3.0 Engine Rebuild Cost?",
        kicker: "Vogue Technics",
        paragraphs: [
          "The cost of a Land Rover 3.0 engine rebuild depends on the extent of the fault, the parts required, and whether a full rebuild or targeted repair is the right fix.",
          "Straightforward repairs are naturally more cost-effective than a complete rebuild, so an accurate diagnosis matters before any price is confirmed. We inspect your vehicle first and provide a written, itemised quote, giving you a clear cost picture before agreeing to any work.",
        ],
      },
      {
        heading: "Choosing Between A Reconditioned Or Rebuilt Engine",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 3.0 engine develops a serious fault, owners are usually weighing up a rebuild of the existing engine against a reconditioned replacement unit.",
          "A rebuild can be the right choice where damage is contained and existing components remain reusable. A reconditioned engine is often the faster, more predictable route where wear is more extensive. We talk you through both options honestly, based on what your engine actually needs rather than a one-size-fits-all recommendation.",
        ],
      },
    ],
    reviewsData: [
      {
        id: 1,
        name: "Steven K.",
        rating: 5,
        text: "My Land Rover started losing power and I assumed the worst. The team diagnosed the fault quickly, gave me an honest quote, and had the vehicle back to me within the week.",
        date: "1 week ago",
      },
      {
        id: 2,
        name: "Louise M.",
        rating: 5,
        text: "Needed a reconditioned engine after mine failed unexpectedly. Communication was excellent throughout and the written warranty gave me real confidence in the work.",
        date: "2 weeks ago",
      },
      {
        id: 3,
        name: "Graham D.",
        rating: 5,
        text: "Compared a few quotes for an engine rebuild and this team was by far the most transparent about what was actually needed. Really pleased with the result.",
        date: "3 weeks ago",
      },
    ],
    faqs: [
      {
        question:
          "How much does a Land Rover 3.0 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the extent of damage and whether a full rebuild or targeted repair is required. We provide a written, itemised quote after inspecting your vehicle, so you know exactly what's included and what the work will cost before anything begins.",
      },
      {
        question:
          "Where can I buy a reconditioned Land Rover 3.0 engine in the UK?",
        answer:
          "We supply reconditioned Land Rover 3.0 engines directly from our workshop in Grays, Essex, with UK-wide delivery available. Every engine is inspected and tested before fitting, and comes with a written warranty for your peace of mind.",
      },
      {
        question:
          "What is the best place for Land Rover 3.0 engine replacement?",
        answer:
          "The best choice is a specialist with genuine experience on Land Rover 3.0 engines, transparent pricing, and a written warranty on completed work. We focus specifically on this engine range and support customers across Essex, London and the wider UK.",
      },
      {
        question:
          "How much does a full Land Rover 3.0 engine replacement cost?",
        answer:
          "Replacement cost depends on whether you choose a reconditioned or used engine, and the labour involved in fitting it. We assess your vehicle and provide a clear, itemised quote before any work is agreed, so there are no surprises later.",
      },
      {
        question: "Do you offer Land Rover 3.0 engine replacement near me?",
        answer:
          "Yes, we support customers locally in Essex and across the UK through our collection and delivery service. Wherever you're based, you can access the same specialist diagnosis, itemised quote and warranty-backed engine work.",
      },
      {
        question:
          "Is it worth repairing a Land Rover 3.0 engine rather than replacing it?",
        answer:
          "Often, yes, particularly where the fault is isolated to a specific component rather than widespread wear. We assess your engine's condition and fault history before recommending whether a repair, rebuild or full replacement offers the better long-term value.",
      },
    ],
  },
  "land-rover-4.4": {
    slug: "land-rover-4.4",
    engineSize: "4.4",
    title: "Land Rover 4.4 Engine ",
    metaTitle:
      "Land Rover 4.4 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 4.4 engine specialists. Timing chain, turbo faults, rebuilds and reconditioned replacements. UK-wide collection and delivery available.",
    labels: [
      "Save up to 40% when you enquire online",
      "UK-wide collection and delivery available",
      "Reconditioned, rebuilt and used engines supplied",
      "Written warranty on every engine we fit",
    ],
    customFeatures: [
      {
        title: "Trusted Land Rover 4.4 Specialists",
        description:
          "Our technicians focus specifically on Land Rover 4.4 engines, giving every customer an accurate, experience-led diagnosis.",
      },
      {
        title: "Warranty-Backed Every Time",
        description:
          "Every engine rebuild, replacement or repair we carry out is covered by a written warranty on parts and labour.",
      },
      {
        title: "UK-Wide Collection & Delivery",
        description:
          "We collect and deliver vehicles and engines across the country, so distance is never a barrier to getting your Land Rover fixed properly.",
      },
    ],
    intro:
      "The Land Rover 4.4 engine is a high-performance unit found across various premium models. While powerful and capable, it requires specialized care for issues like timing chain wear, turbo failures, and cooling system concerns. Vogue Technics provides professional Land Rover 4.4 engine rebuilds, repairs, and replacements with precise diagnostics, transparent written quotes, and warranty-backed workmanship.",
    applications: [
      "Land Rover 4.4 Engine Rebuild Service",
      "Land Rover 4.4 Reconditioned Engine Supply",
      "Land Rover 4.4 Engine Replacement Near You",
      "Land Rover 4.4 Specialist Diagnostics",
    ],
    commonIssues: [
      "Reduced power or performance under load",
      "Unusual noises from the engine at start-up",
      "Warning lights linked to engine management faults",
      "Increased oil consumption or visible oil leaks",
      "Coolant loss or overheating during normal driving",
      "Rough running or difficulty starting from cold",
    ],
    serviceHighlights: [
      {
        title: "Engine Rebuild Services",
        description:
          "Full strip-down and rebuild of your existing Land Rover 4.4 engine using quality-matched internal components.",
      },
      {
        title: "Reconditioned Engine Supply",
        description:
          "Fully reconditioned Land Rover 4.4 engines supplied and fitted, ideal for vehicles needing a dependable replacement.",
      },
      {
        title: "Timing Chain Replacement",
        description:
          "Diagnosis and replacement of worn timing chains, tensioners and guides on Land Rover 4.4 engines.",
      },
      {
        title: "Turbocharger Replacement",
        description:
          "Turbo diagnosis and replacement for boost loss, reduced performance and turbo-related faults.",
      },
      {
        title: "Head Gasket Replacement",
        description:
          "Head gasket diagnosis and replacement for engines showing coolant loss or overheating.",
      },
      {
        title: "Engine Health Checks",
        description:
          "A thorough inspection of your Land Rover's 4.4 engine to catch developing faults before they cause a breakdown.",
      },
    ],
    precision: {
      heading:
        "How We Diagnose, Rebuild And Replace Your Land Rover 4.4 Engine",
      eyebrow: "Dedicated Land Rover Engine Specialists",
      intro:
        "From the moment your vehicle arrives, we follow a structured process to identify the real cause of the fault before recommending any repair, rebuild or replacement.",
      steps: [
        "We inspect the vehicle and run full diagnostics to identify the source of the fault.",
        "We assess the extent of the damage and confirm which components are affected.",
        "Based on the diagnosis, we carry out a targeted repair, full rebuild, or supply a reconditioned replacement engine.",
        "Every engine is tested before your vehicle is returned, with a written warranty covering the completed work.",
      ],
      imageAlt: "Land Rover 4.4 engine diagnostics and rebuild process",
    },
    contentSections: [
      {
        heading: "How Much Does A Land Rover 4.4 Engine Rebuild Cost?",
        kicker: "Vogue Technics",
        paragraphs: [
          "The cost of a Land Rover 4.4 engine rebuild depends on the extent of the fault, the parts required, and whether a full rebuild or targeted repair is the right fix.",
          "Straightforward repairs are naturally more cost-effective than a complete rebuild, so an accurate diagnosis matters before any price is confirmed. We inspect your vehicle first and provide a written, itemised quote, giving you a clear cost picture before agreeing to any work.",
        ],
      },
      {
        heading: "Choosing Between A Reconditioned Or Rebuilt Engine",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 4.4 engine develops a serious fault, owners are usually weighing up a rebuild of the existing engine against a reconditioned replacement unit.",
          "A rebuild can be the right choice where damage is contained and existing components remain reusable. A reconditioned engine is often the faster, more predictable route where wear is more extensive. We talk you through both options honestly, based on what your engine actually needs rather than a one-size-fits-all recommendation.",
        ],
      },
    ],
    reviewsData: [
      {
        id: 1,
        name: "Paul R.",
        rating: 5,
        text: "My Land Rover started losing power on motorway drives and I feared the worst. The team diagnosed the fault quickly, gave me an honest quote, and had the vehicle back within the week.",
        date: "1 week ago",
      },
      {
        id: 2,
        name: "Emma T.",
        rating: 5,
        text: "Needed a reconditioned engine after mine failed unexpectedly. Communication was excellent throughout and the written warranty gave me real confidence in the work.",
        date: "2 weeks ago",
      },
      {
        id: 3,
        name: "Nathan H.",
        rating: 5,
        text: "Compared a few quotes for an engine rebuild and this team was by far the most transparent about what was actually needed. Really pleased with the result.",
        date: "3 weeks ago",
      },
    ],
    faqs: [
      {
        question:
          "How much does a Land Rover 4.4 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the extent of damage and whether a full rebuild or targeted repair is required. We provide a written, itemised quote after inspecting your vehicle, so you know exactly what's included and what the work will cost before anything begins.",
      },
      {
        question:
          "Where can I buy a reconditioned Land Rover 4.4 engine in the UK?",
        answer:
          "We supply reconditioned Land Rover 4.4 engines directly from our workshop in Grays, Essex, with UK-wide delivery available. Every engine is inspected and tested before fitting, and comes with a written warranty for your peace of mind.",
      },
      {
        question:
          "What is the best place for Land Rover 4.4 engine replacement?",
        answer:
          "The best choice is a specialist with genuine experience on Land Rover 4.4 engines, transparent pricing, and a written warranty on completed work. We focus specifically on this engine range and support customers across Essex, London and the wider UK.",
      },
      {
        question:
          "How much does a full Land Rover 4.4 engine replacement cost?",
        answer:
          "Replacement cost depends on whether you choose a reconditioned or used engine, and the labour involved in fitting it. We assess your vehicle and provide a clear, itemised quote before any work is agreed, so there are no surprises later.",
      },
      {
        question: "Do you offer Land Rover 4.4 engine replacement near me?",
        answer:
          "Yes, we support customers locally in Essex and across the UK through our collection and delivery service. Wherever you're based, you can access the same specialist diagnosis, itemised quote and warranty-backed engine work.",
      },
      {
        question:
          "Is it worth repairing a Land Rover 4.4 engine rather than replacing it?",
        answer:
          "Often, yes, particularly where the fault is isolated to a specific component rather than widespread wear. We assess your engine's condition and fault history before recommending whether a repair, rebuild or full replacement offers the better long-term value.",
      },
    ],
  },
  "land-rover-5": {
    slug: "land-rover-5",
    engineSize: "5.0",
    title: "Land Rover 5.0 Engine ",
    metaTitle:
      "Land Rover 5.0 Engine Reconditioning, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 5.0 engine specialists. Timing chain, turbo faults, reconditioning and replacements. UK-wide collection and delivery available.",
    labels: [
      "Save up to 40% when you enquire online",
      "UK-wide collection and delivery available",
      "Reconditioned, rebuilt and used engines supplied",
      "Written warranty on every engine we fit",
    ],
    customFeatures: [
      {
        title: "Dedicated 5.0 Reconditioning Team",
        description:
          "Our technicians specialise in Land Rover 5.0 engine reconditioning, giving every customer an accurate, experience-led diagnosis.",
      },
      {
        title: "Warranty-Backed Every Time",
        description:
          "Every reconditioned, rebuilt or replaced engine we supply is covered by a written warranty on parts and labour.",
      },
      {
        title: "UK-Wide Collection & Delivery",
        description:
          "We collect and deliver vehicles and engines nationwide, so distance is never a barrier to reconditioning done properly.",
      },
    ],
    intro:
      "The Land Rover 5.0 engine is a high-performance unit found across various premium models. While powerful and capable, it requires specialized care for issues like timing chain wear, turbo failures, and cooling system concerns. Vogue Technics provides professional Land Rover 5.0 engine reconditioning, repairs, and replacements with precise diagnostics, transparent written quotes, and warranty-backed workmanship.",
    applications: [
      "Land Rover 5.0 Engine Reconditioning Service",
      "Land Rover 5.0 Reconditioned Engine Supply",
      "Land Rover 5.0 Engine Replacement Near You",
      "Land Rover 5.0 Specialist Diagnostics",
    ],
    commonIssues: [
      "Reduced power or performance under load",
      "Unusual noises from the engine at start-up",
      "Warning lights linked to engine management faults",
      "Increased oil consumption or visible oil leaks",
      "Coolant loss or overheating during normal driving",
      "Rough running or difficulty starting from cold",
    ],
    serviceHighlights: [
      {
        title: "Engine Reconditioning Services",
        description:
          "Full strip-down, inspection and rebuild of your Land Rover 5.0 engine to restore reliable performance.",
      },
      {
        title: "Reconditioned Engine Supply",
        description:
          "Fully reconditioned Land Rover 5.0 engines supplied and fitted, ideal for vehicles needing a dependable replacement.",
      },
      {
        title: "Timing Chain Replacement",
        description:
          "Diagnosis and replacement of worn timing chains, tensioners and guides on Land Rover 5.0 engines.",
      },
      {
        title: "Turbocharger Replacement",
        description:
          "Turbo diagnosis and replacement for boost loss, reduced performance and turbo-related faults.",
      },
      {
        title: "Head Gasket Replacement",
        description:
          "Head gasket diagnosis and replacement for engines showing coolant loss or overheating.",
      },
      {
        title: "Engine Health Checks",
        description:
          "A thorough inspection of your Land Rover's 5.0 engine to catch developing faults before they cause a breakdown.",
      },
    ],
    precision: {
      heading: "How We Recondition Your Land Rover 5.0 Engine Step By Step",
      eyebrow: "Dedicated Land Rover Engine Specialists",
      intro:
        "From the moment your vehicle arrives, we follow a structured reconditioning process to identify the real cause of the fault before any work begins.",
      steps: [
        "We inspect the vehicle and run full diagnostics to identify the source of the fault.",
        "We strip the engine down and assess every major component against safe working tolerances.",
        "Worn components are replaced and the engine is rebuilt using quality-matched parts.",
        "Every reconditioned engine is tested before your vehicle is returned, with a written warranty covering the work.",
      ],
      imageAlt: "Land Rover 5.0 engine diagnostics and reconditioning process",
    },
    contentSections: [
      {
        heading: "What Does Land Rover 5.0 Engine Reconditioning Involve?",
        kicker: "Vogue Technics",
        paragraphs: [
          "Reconditioning a Land Rover 5.0 engine means stripping it down fully, inspecting every major component, and replacing anything worn beyond safe tolerances before rebuilding to correct specification.",
          "This differs from a simple repair, which typically addresses one isolated fault. Reconditioning is a more thorough process, aimed at restoring the engine closer to original working condition rather than patching a single issue. We assess your engine fully before confirming whether reconditioning or a targeted repair is the right approach.",
        ],
      },
      {
        heading: "Reconditioned Versus Replacement: Making The Right Choice",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 5.0 engine develops a serious fault, owners are usually weighing up reconditioning the existing engine against sourcing a replacement unit.",
          "Reconditioning can be the more cost-effective route where the original engine block remains sound and reusable. A replacement engine is often the faster option where damage is more extensive. We talk you through both options honestly, based on what your engine actually needs rather than a one-size-fits-all recommendation.",
        ],
      },
    ],
    reviewsData: [
      {
        id: 1,
        name: "Simon W.",
        rating: 5,
        text: "My Land Rover's engine started running rough and losing power. The team recommended reconditioning rather than a full replacement, saving me money without compromising reliability.",
        date: "1 week ago",
      },
      {
        id: 2,
        name: "Victoria L.",
        rating: 5,
        text: "Needed a reconditioned 5.0 engine after mine failed unexpectedly. Communication was excellent throughout and the written warranty gave me real confidence in the work.",
        date: "2 weeks ago",
      },
      {
        id: 3,
        name: "Joseph M.",
        rating: 5,
        text: "Compared a few reconditioning quotes and this team was by far the most transparent about what was actually being done to the engine. Really pleased with the result.",
        date: "3 weeks ago",
      },
    ],
    faqs: [
      {
        question:
          "How much does a Land Rover 5.0 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the extent of damage and whether a full reconditioning process or a targeted repair is required. We provide a written, itemised quote after inspecting your vehicle, so you know exactly what's included and what the work will cost before anything begins.",
      },
      {
        question:
          "Where can I buy a reconditioned Land Rover 5.0 engine in the UK?",
        answer:
          "We supply reconditioned Land Rover 5.0 engines directly from our workshop in Grays, Essex, with UK-wide delivery available. Every engine is inspected and tested before fitting, and comes with a written warranty for your peace of mind.",
      },
      {
        question:
          "What is the best place for Land Rover 5.0 engine replacement?",
        answer:
          "The best choice is a specialist with genuine reconditioning experience on Land Rover 5.0 engines, transparent pricing, and a written warranty on completed work. We focus specifically on this engine range and support customers across Essex, London and the wider UK.",
      },
      {
        question:
          "How much does a full Land Rover 5.0 engine replacement cost?",
        answer:
          "Replacement cost depends on whether you choose a reconditioned or used engine, and the labour involved in fitting it. We assess your vehicle and provide a clear, itemised quote before any work is agreed, so there are no surprises later.",
      },
      {
        question: "Do you offer Land Rover 5.0 engine reconditioning near me?",
        answer:
          "Yes, we support customers locally in Essex and across the UK through our collection and delivery service. Wherever you're based, you can access the same specialist diagnosis, itemised quote and warranty-backed reconditioning work.",
      },
      {
        question:
          "Is reconditioning a better option than a full engine replacement?",
        answer:
          "Often, yes, particularly where the engine block remains sound and only specific components have worn out. Reconditioning typically costs less than a full replacement while still restoring reliable performance. We assess your engine's condition before recommending which option offers the better long-term value.",
      },
    ],
  },
};

export default landRoverEngineSizePages;
