import type { PrecisionEngineSectionData } from "@/components/common/PrecisionEngineSection";
import type { EngineSizeContentBlock } from "@/components/common/EngineSizeContentSection";

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
  contentSections?: EngineSizeContentBlock[];
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
    metaTitle: "Range Rover 2.0 Ingenium Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Range Rover 2.0 Ingenium engine specialists. Timing chain, turbo faults, rebuilds and reconditioned replacements. UK-wide collection. Written warranty included.",
    intro:
      "The Range Rover 2.0 Ingenium engine powers the Evoque, Velar and Sport across both diesel and petrol variants. Compact and high-output, these units are sensitive to timing chain wear, turbocharger faults and oil dilution — all of which need specialist diagnosis before any repair route is decided. Vogue Technics provide Range Rover 2.0 engine rebuilds, repairs and replacements with accurate assessment, clear pricing and written warranty on every major job.",
    applications: [
      "Range Rover Evoque 2.0 Ingenium diesel and petrol (2015 onwards)",
      "Range Rover Velar 2.0 Ingenium D180, D240, P250 and P300",
      "Range Rover Sport 2.0 Ingenium diesel and petrol",
      "Range Rover 2.0 PHEV hybrid platform variants",
    ],
    commonIssues: [
      "Timing chain stretch and rattle on cold start",
      "Turbocharger wear, actuator faults and boost loss",
      "Oil dilution from short-journey diesel use",
      "Coolant loss and overheating without visible external leak",
      "EGR and DPF-related engine management faults",
      "Carbon build-up on intake valves on petrol variants",
    ],
    serviceHighlights: [
      "Range Rover 2.0 Ingenium engine rebuild to OEM tolerances",
      "Reconditioned and used 2.0 replacement engines supplied and fitted",
      "Timing chain, tensioner and guide replacement",
      "Turbo diagnosis, removal and replacement",
      "Supply-only or full supply-and-fit service",
      "UK-wide vehicle collection and delivery",
    ],
    precision: buildRangeRoverPrecision("Range Rover 2.0 Ingenium Engines", "2.0"),
    contentSections: [
      {
        heading: "Range Rover 2.0 Ingenium Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Range Rover 2.0 Ingenium engine is a sophisticated, turbocharged four-cylinder unit shared across the Evoque, Velar and Sport. Both diesel (D180, D240) and petrol (P250, P300) variants require careful matching when a replacement is needed — engine code, software calibration, ancillary configuration and emissions equipment must all align for a reliable outcome.",
          "At Vogue Technics, we confirm the exact engine code from your vehicle's registration before recommending a repair route. Whether a targeted rebuild is the most cost-effective option or a quality-checked reconditioned replacement is the better path, you receive an itemised written quote before any work begins. No estimates that shift when the engine is stripped — the figure you agree is the figure you pay.",
          "For Range Rover 2.0 Ingenium owners experiencing timing chain noise, turbo faults, oil dilution or overheating, an accurate diagnosis is the essential first step. Many of these engines are misquoted for full replacement when a rebuild at a fraction of the cost is entirely viable. We assess honestly and recommend only what the engine genuinely needs.",
        ],
      },
      {
        heading: "Used & Reconditioned Range Rover 2.0 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Range Rover 2.0 Ingenium engine is beyond economic repair, replacement with a quality-checked used or reconditioned unit is often the most cost-effective solution. Vogue Technics source replacement engines matched to your vehicle specification — correct engine code, emissions standard and ancillary configuration — and handle the full supply-and-fit process at our workshop.",
          "A used Range Rover 2.0 engine offers a cost-effective solution when the original engine has suffered terminal damage. A reconditioned unit provides greater long-term confidence, having been stripped, measured and rebuilt to manufacturer tolerances. We advise which option suits your vehicle, mileage and budget after inspecting the original engine condition.",
          "All replacement engines supplied by Vogue Technics are accompanied by written warranty terms. We also carry out post-fit road testing and pressure checks to confirm the installation is correct before the vehicle is returned.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Range Rover 2.0 Ingenium engine problems?",
        answer:
          "The most frequently reported issues on Range Rover 2.0 Ingenium engines are timing chain stretch, turbocharger wear and oil dilution on diesel variants used on short journeys. Overheating without a visible coolant leak can also indicate early head gasket deterioration. An accurate diagnosis is essential before committing to any repair.",
      },
      {
        question: "How much does a Range Rover 2.0 Ingenium engine rebuild cost?",
        answer:
          "The cost of rebuilding a Range Rover 2.0 Ingenium engine depends on the extent of internal wear and which components require replacement. We provide a detailed written quote following a full strip and inspection — there are no ballpark estimates that change once work has started.",
      },
      {
        question: "Can a Range Rover 2.0 Ingenium engine be rebuilt rather than replaced?",
        answer:
          "In many cases, yes. If the engine block and cylinder head are structurally sound, a measured rebuild addressing worn bearings, timing components and seals can restore reliability at significantly less cost than full replacement. We assess suitability honestly before recommending a route.",
      },
      {
        question: "Do you supply reconditioned Range Rover 2.0 engines?",
        answer:
          "Yes. We supply both used and reconditioned 2.0 Ingenium replacement engines matched to the correct code and specification for your vehicle. Full supply-and-fit at our workshop is available, or supply-only if you have your own preferred installer.",
      },
      {
        question: "Do you offer UK-wide collection for Range Rover 2.0 engine work?",
        answer:
          "Yes. We arrange UK-wide vehicle collection and delivery for all major engine work, including rebuilds, replacements and turbo or timing chain repairs on Range Rover 2.0 Ingenium engines.",
      },
    ],
  },
  "range-rover-3": {
    slug: "range-rover-3",
    engineSize: "3.0",
    title: "Range Rover 3.0 Engines",
    metaTitle: "Range Rover 3.0 TDV6 SDV6 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Range Rover 3.0 TDV6 and SDV6 engine specialists. Rebuilds, timing chain replacement, turbo faults and reconditioned units across Sport, Vogue and Velar. UK-wide.",
    intro:
      "The Range Rover 3.0 engine family — covering TDV6, SDV6 and petrol 3.0 variants — is one of the most widely used powertrains across Range Rover Sport, Vogue, Velar and Discovery platforms. These are capable engines, but timing chain wear, turbocharger faults, crankshaft issues and cooling system failures are well-documented and require specialist diagnosis before the repair cost escalates. Vogue Technics carry out Range Rover 3.0 engine rebuilds, repairs and replacements with full diagnostic assessment, written quotes and warranty-backed workmanship.",
    applications: [
      "Range Rover Sport 3.0 TDV6 and SDV6 (L320, L494)",
      "Range Rover Vogue 3.0 TDV6 and SDV6 (L322, L405)",
      "Range Rover Velar 3.0 petrol and diesel",
      "Land Rover Discovery 3.0 TDV6 and SDV6",
      "Range Rover 3.0 petrol supercharged variants",
    ],
    commonIssues: [
      "Timing chain wear, rattle and guide failure",
      "Turbocharger failure and actuator faults",
      "Crankshaft and main bearing wear on high-mileage units",
      "Coolant loss and overheating linked to head gasket deterioration",
      "Injector and high-pressure fuel-pump faults on diesel variants",
      "EGR valve failure and associated running problems",
    ],
    serviceHighlights: [
      "Range Rover 3.0 TDV6 and SDV6 engine rebuild",
      "Reconditioned and used 3.0 replacement engines supplied and fitted",
      "Timing chain, tensioner and guide kit replacement",
      "Turbocharger diagnosis, removal and replacement",
      "Crankshaft and bottom-end inspection and repair",
      "Written warranty on all major engine work",
    ],
    precision: buildRangeRoverPrecision("Range Rover 3.0 TDV6 & SDV6 Engines", "3.0"),
    contentSections: [
      {
        heading: "Range Rover 3.0 TDV6 & SDV6 Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Range Rover 3.0 TDV6 and SDV6 engines are among the most commonly serviced units at Vogue Technics. Used across the Sport, Vogue, Velar and Discovery, the 3.0 diesel is a strong performer but carries well-known vulnerabilities around timing chains, turbochargers and bottom-end wear that worsen significantly when maintenance intervals are stretched or faults are left to progress.",
          "When a Range Rover 3.0 engine develops a problem, the repair route — targeted fix, rebuild or replacement — depends entirely on what the inspection reveals. At Vogue Technics, we strip, measure and assess the engine before committing to a quote. This means the figure you receive reflects the actual condition of your engine, not a worst-case estimate. If a rebuild is viable, we recommend it; if replacement is the better value, we say so clearly.",
          "All Range Rover 3.0 engine work at Vogue Technics uses OEM or quality-matched components. Timing chain kits, turbocharger units, gasket sets and bearing shells are chosen specifically for the TDV6 or SDV6 variant being repaired. Every major job is road-tested and pressure-checked before handover, with written warranty terms confirmed in writing.",
        ],
      },
      {
        heading: "Used & Reconditioned Range Rover 3.0 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Range Rover 3.0 TDV6 or SDV6 engine is beyond economical repair — typically due to crankshaft damage, severe timing failure or cylinder head damage following overheating — replacement with a matched used or reconditioned unit is the most cost-effective route. Vogue Technics source replacement 3.0 engines confirmed to the correct engine code, emissions specification and ancillary configuration for your vehicle.",
          "A used Range Rover 3.0 diesel engine is suitable when the original has suffered catastrophic internal damage and cost is the primary concern. A reconditioned 3.0 engine provides greater assurance — rebuilt to measured tolerances with new seals, bearings and timing components — and is the recommended option for owners who want long-term confidence in the replacement unit.",
          "Whether you need supply-only or full supply-and-fit at our workshop, we manage the process from engine sourcing through to post-fit road testing. All replacement engines are accompanied by written warranty terms before work begins.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Range Rover 3.0 TDV6 engine problems?",
        answer:
          "The most frequently reported issues on Range Rover 3.0 TDV6 and SDV6 engines include timing chain wear (often presenting as a rattle on cold start), turbocharger failure, crankshaft and main bearing wear on higher-mileage units, and coolant loss that can indicate head gasket deterioration. Early diagnosis is essential — these faults worsen quickly if left.",
      },
      {
        question: "How much does a Range Rover 3.0 engine rebuild cost?",
        answer:
          "The cost of rebuilding a Range Rover 3.0 TDV6 or SDV6 engine depends on the extent of internal wear found during inspection. We provide a detailed itemised quote following a full strip and assessment — the figure you agree before work starts is the figure you pay.",
      },
      {
        question: "Is it worth rebuilding a Range Rover 3.0 diesel engine?",
        answer:
          "In many cases, yes. If the cylinder block and head are structurally sound, a proper rebuild addressing timing components, bearings, seals and any worn ancillaries can restore full reliability at considerably less cost than engine replacement. We assess suitability honestly before making a recommendation.",
      },
      {
        question: "Do you supply reconditioned Range Rover 3.0 TDV6 engines?",
        answer:
          "Yes. We supply used and reconditioned Range Rover 3.0 TDV6 and SDV6 engines matched to the correct code and specification. Supply-and-fit at our workshop is available, or supply-only if preferred.",
      },
      {
        question: "Do you carry out Range Rover 3.0 timing chain replacement?",
        answer:
          "Yes. Timing chain replacement on Range Rover 3.0 TDV6 and SDV6 engines is one of our most common jobs. We replace the full kit — chain, tensioner, guides and associated seals — to manufacturer specification, and road-test before handover.",
      },
    ],
  },
  "range-rover-4.4": {
    slug: "range-rover-4.4",
    engineSize: "4.4",
    title: "Range Rover 4.4 Engines",
    metaTitle: "Range Rover 4.4 TDV8 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Range Rover 4.4 TDV8 engine specialists. Timing chain, turbo replacement, full rebuilds and reconditioned units. Supply and fit available. UK-wide collection.",
    intro:
      "The Range Rover 4.4 TDV8 is a complex twin-turbocharged V8 diesel used across the Vogue L322, L405 and Sport L320. It delivers strong performance but carries well-documented timing chain, turbocharger and oil system vulnerabilities that require specialist knowledge to diagnose and repair correctly. Vogue Technics carry out Range Rover 4.4 TDV8 engine rebuilds, repairs and replacements with full diagnostic assessment, transparent pricing and written warranty on every major job.",
    applications: [
      "Range Rover Vogue 4.4 TDV8 (L322 and L405)",
      "Range Rover Sport 4.4 TDV8 (L320)",
      "Range Rover 4.4 V8 petrol variants",
      "Discovery 4 4.4 TDV8",
    ],
    commonIssues: [
      "Timing chain wear, guide failure and associated rattle",
      "Twin turbocharger failure and oil-feed blockage",
      "Oil pressure loss and main bearing wear",
      "Cooling system leaks and thermostat faults",
      "EGR and emissions system faults on high-mileage units",
      "Injector and high-pressure fuel-pump wear",
    ],
    serviceHighlights: [
      "Range Rover 4.4 TDV8 engine rebuild to OEM tolerances",
      "Reconditioned and used 4.4 V8 replacement engines",
      "Twin turbocharger diagnosis, removal and replacement",
      "Timing chain kit replacement with oil-feed check",
      "Supply-only or full supply-and-fit service",
      "Written warranty on all major engine work",
    ],
    precision: buildRangeRoverPrecision("Range Rover 4.4 TDV8 Engines", "4.4"),
    contentSections: [
      {
        heading: "Range Rover 4.4 TDV8 Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Range Rover 4.4 TDV8 is a sophisticated twin-turbocharged V8 diesel that demands accurate, platform-specific diagnosis. Timing chain failures, turbocharger issues and oil pressure problems on these engines are frequently misdiagnosed by non-specialist workshops, leading to incomplete repairs and repeat failures. At Vogue Technics, we work on the 4.4 TDV8 regularly and understand exactly where these engines fail and what a correct repair requires.",
          "When a Range Rover 4.4 TDV8 needs engine work, the repair route depends entirely on what inspection reveals. A timing chain replacement with oil-feed system checks is one of the most common jobs on this engine. Where internal damage is more extensive, a full measured rebuild — addressing bearings, seals, timing, turbo oil feeds and ancillary components — is often the most cost-effective long-term solution. We quote clearly after assessment, not before.",
          "All 4.4 TDV8 engine work at Vogue Technics uses OEM or quality-matched components selected specifically for this engine. Every major rebuild or replacement is followed by road testing, pressure checks and oil system verification before the vehicle is returned. Written warranty terms are confirmed before work starts.",
        ],
      },
      {
        heading: "Used & Reconditioned Range Rover 4.4 TDV8 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Range Rover 4.4 TDV8 engine has suffered severe internal damage — from oil starvation, timing failure or catastrophic turbo failure — replacement with a quality-checked used or reconditioned unit is often the most practical solution. Vogue Technics source 4.4 V8 replacement engines confirmed to the correct specification and engine code for your vehicle registration.",
          "A used Range Rover 4.4 TDV8 engine is suitable where cost is the primary concern and the original failure was mechanical rather than systemic. A reconditioned unit offers greater confidence — stripped, measured and rebuilt to manufacturer tolerances with new seals, bearings, timing components and turbo oil-feed lines — and is recommended for owners who want long-term reliability from the replacement.",
          "All replacement engines are supplied with written warranty terms. Vogue Technics manage the full supply-and-fit process at our workshop, including post-installation road testing and system checks, or we can supply the engine only for fitting by your preferred installer.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Range Rover 4.4 TDV8 engine problems?",
        answer:
          "The most reported issues on Range Rover 4.4 TDV8 engines are timing chain wear and guide failure, twin turbocharger failure linked to oil-feed blockage, oil pressure loss from bearing wear, and cooling system faults. These engines are sensitive to oil service intervals — extended changes accelerate timing chain and turbo wear significantly.",
      },
      {
        question: "How much does a Range Rover 4.4 TDV8 engine rebuild cost?",
        answer:
          "The cost varies depending on which components require replacement during the rebuild. We carry out a full strip and inspection before providing an itemised written quote. There are no estimates that change once work has begun — the agreed figure is what you pay.",
      },
      {
        question: "Is it worth rebuilding a Range Rover 4.4 TDV8 engine?",
        answer:
          "Often yes. If the cylinder block and heads are structurally sound, a thorough rebuild addressing timing, turbo oil feeds, bearings and seals can restore full reliability. Given the cost of a quality replacement engine, a rebuild is frequently the better-value option when the core is viable.",
      },
      {
        question: "Do you replace the turbochargers on Range Rover 4.4 TDV8 engines?",
        answer:
          "Yes. Twin turbo replacement on the Range Rover 4.4 TDV8 is a regular job at Vogue Technics. We also check and clear the oil-feed lines to the turbos as part of every replacement — a step that is frequently missed and leads to premature failure of the new units.",
      },
      {
        question: "Do you supply reconditioned Range Rover 4.4 V8 engines?",
        answer:
          "Yes. We supply used and reconditioned Range Rover 4.4 TDV8 and V8 petrol engines matched to your vehicle specification. Full supply-and-fit is available at our workshop, or supply-only if you have your own installer.",
      },
    ],
  },
  "range-rover-5": {
    slug: "range-rover-5",
    engineSize: "5.0",
    title: "Range Rover 5.0 Engines",
    metaTitle: "Range Rover 5.0 Supercharged V8 Engine Rebuild & Repair | Vogue Technics",
    metaDescription:
      "Range Rover 5.0 AJ133 supercharged V8 engine specialists. Rebuilds, timing chain, head gasket, SVR and Sport repairs. Reconditioned units supplied. UK-wide collection.",
    intro:
      "The Range Rover 5.0 AJ133 supercharged V8 powers the Sport SVR, Sport 5.0 V8 and Vogue flagship models. It is a high-performance engine that delivers exceptional output but requires specialist knowledge around timing chains, cooling, oil system management and supercharger components to maintain correctly and repair properly. Vogue Technics carry out Range Rover 5.0 V8 engine rebuilds, repairs and replacements with full diagnostic assessment, clear written pricing and warranty-backed workmanship on every job.",
    applications: [
      "Range Rover Sport 5.0 V8 Supercharged (L494)",
      "Range Rover Sport SVR 5.0 AJ133 (L494)",
      "Range Rover Vogue 5.0 V8 Supercharged (L405)",
      "Range Rover Sport 5.0 V8 (L320)",
      "Jaguar F-Type and XJ 5.0 AJ133 supercharged variants",
    ],
    commonIssues: [
      "Timing chain rattle, stretch and guide wear on cold start",
      "Supercharger bearing wear, coolant leak and nose cone failure",
      "Head gasket failure linked to overheating or coolant loss",
      "Oil consumption and valve stem seal deterioration",
      "Carbon build-up on direct-injection petrol variants",
      "Coolant pump failure and overheating on high-mileage units",
    ],
    serviceHighlights: [
      "Range Rover 5.0 AJ133 V8 engine rebuild to OEM tolerances",
      "Supercharged and naturally aspirated 5.0 V8 specialist work",
      "Timing chain kit replacement with full system checks",
      "Head gasket replacement with cylinder head pressure testing",
      "Reconditioned and used 5.0 V8 replacement engines supplied and fitted",
      "Written warranty on all major engine work",
    ],
    precision: buildRangeRoverPrecision("Range Rover 5.0 AJ133 Supercharged V8 Engines", "5.0"),
    contentSections: [
      {
        heading: "Range Rover 5.0 Supercharged V8 Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Range Rover 5.0 AJ133 supercharged V8 is one of the most performance-focused engines fitted to a production Range Rover. Found in the Sport SVR, Sport 5.0 V8 and Vogue flagship, it is capable of generating very high output but demands precise maintenance and specialist diagnosis when faults develop. Timing chain wear, supercharger issues and head gasket failure are the most common reasons Range Rover 5.0 owners contact Vogue Technics.",
          "A Range Rover 5.0 V8 engine rebuild is a complex job that requires workshop experience specific to the AJ133 platform. At Vogue Technics, we have rebuilt and repaired these engines across Sport, SVR and Vogue applications. Whether the issue is a timing chain rattle on cold start, overheating linked to a head gasket fault, or higher-mileage internal wear, we carry out a full inspection before committing to a quote — so the repair recommended is the one the engine genuinely needs.",
          "All Range Rover 5.0 engine work uses OEM or quality-matched components. Timing chain kits, head gasket sets, supercharger seals and bearing assemblies are selected specifically for the AJ133 V8. Every completed job is road-tested, pressure-checked and verified before handover. Written warranty terms are confirmed in advance.",
        ],
      },
      {
        heading: "Used & Reconditioned Range Rover 5.0 V8 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Range Rover 5.0 AJ133 engine has suffered damage beyond economical repair — typically from severe overheating, catastrophic timing failure or advanced internal wear — replacement with a quality-checked used or reconditioned unit is the most practical route. Vogue Technics source 5.0 V8 replacement engines matched to the correct specification and software variant for your registration.",
          "A used Range Rover 5.0 V8 engine offers cost-effective replacement when the original has suffered irreparable damage. A reconditioned AJ133 unit provides greater long-term confidence — stripped, inspected and rebuilt to manufacturer tolerances with new timing components, seals, head gaskets and supercharger wear items where required. We advise which option is appropriate based on your vehicle's condition and intended use.",
          "All replacement engines are supplied with written warranty terms and fitted with full post-installation checks at our workshop. UK-wide vehicle collection and delivery is available for Range Rover 5.0 engine replacement and rebuild work.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Range Rover 5.0 V8 engine problems?",
        answer:
          "The most frequently reported issues on Range Rover 5.0 AJ133 engines are timing chain wear (presenting as a rattle on cold start), supercharger bearing and coolant seal failure, head gasket deterioration linked to overheating, and oil consumption on higher-mileage units. Carbon build-up on intake valves is also common on direct-injection variants. Early diagnosis prevents significantly more expensive repairs.",
      },
      {
        question: "How much does a Range Rover 5.0 supercharged V8 engine rebuild cost?",
        answer:
          "The cost of rebuilding a Range Rover 5.0 AJ133 V8 depends on which components require replacement during the rebuild — timing chain kits, head gaskets, bearings, supercharger wear items and seals all vary by condition. We provide a detailed written quote following full strip and inspection, before any work proceeds.",
      },
      {
        question: "Can a Range Rover 5.0 SVR engine be rebuilt?",
        answer:
          "Yes. The AJ133 engine fitted to the Range Rover Sport SVR can be rebuilt when the block and cylinder heads are structurally sound. A properly executed rebuild addressing timing, oiling, supercharger components and seals restores full performance at a fraction of replacement cost. We assess suitability honestly after inspection.",
      },
      {
        question: "Do you carry out Range Rover 5.0 timing chain replacement?",
        answer:
          "Yes. Timing chain replacement on Range Rover 5.0 AJ133 engines is a specialist job we carry out regularly. We replace the full kit — chains, tensioners, guides and associated seals — and road-test the vehicle before handover. It is strongly recommended to address timing chain rattle early, before guide failure causes further internal damage.",
      },
      {
        question: "Do you supply reconditioned Range Rover 5.0 V8 engines?",
        answer:
          "Yes. We supply both used and reconditioned Range Rover 5.0 AJ133 V8 engines, including supercharged variants fitted to the Sport SVR and Vogue. Supply-and-fit at our workshop is available, as is supply-only for owners with a preferred installer. UK-wide collection can be arranged.",
      },
    ],
  },
};

export default rangeRoverEngineSizePages;
