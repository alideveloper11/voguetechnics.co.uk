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
    metaTitle: "Land Rover 2.0 Ingenium Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 2.0 Ingenium engine specialists. Timing chain, turbo faults, rebuilds and reconditioned replacements for Discovery Sport and Defender. UK-wide collection.",
    intro:
      "The Land Rover 2.0 Ingenium engine is fitted across the Discovery Sport, Defender and Freelander successor platforms in both diesel and petrol form. A modern, turbocharged four-cylinder unit, it is efficient and capable but vulnerable to timing chain stretch, turbocharger wear and oil dilution on diesel variants used frequently on short journeys. Vogue Technics carry out Land Rover 2.0 Ingenium engine rebuilds, repairs and replacements with accurate platform-specific diagnosis, written quotes and warranty-backed workmanship.",
    applications: [
      "Land Rover Discovery Sport 2.0 Ingenium diesel (D150, D165, D180, D200) and petrol (P200, P250)",
      "Land Rover Defender 2.0 Ingenium petrol (P300) and diesel (D200)",
      "Land Rover Freelander 2 replacement Ingenium applications",
      "Range Rover Evoque 2.0 Ingenium shared platform variants",
    ],
    commonIssues: [
      "Timing chain stretch and rattle on cold start",
      "Turbocharger wear, actuator failure and boost loss",
      "Oil dilution from short-journey diesel use",
      "Coolant loss and overheating without visible external leak",
      "EGR valve failure and associated diesel running faults",
      "DPF blockage and associated engine management warnings",
    ],
    serviceHighlights: [
      "Land Rover 2.0 Ingenium engine rebuild to OEM tolerances",
      "Reconditioned and used 2.0 replacement engines supplied and fitted",
      "Timing chain, tensioner and guide replacement",
      "Turbocharger diagnosis, removal and replacement",
      "Supply-only or full supply-and-fit at our workshop",
      "UK-wide vehicle collection and delivery",
    ],
    precision: buildLandRoverPrecision("Land Rover 2.0 Ingenium Engines", "2.0"),
    contentSections: [
      {
        heading: "Land Rover 2.0 Ingenium Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Land Rover 2.0 Ingenium engine is a sophisticated, all-aluminium turbocharged unit shared across the Discovery Sport, Defender and several Range Rover derivatives. Both diesel and petrol variants require precise engine code matching when a replacement is needed — the D150, D165, D180, D200, P200, P250 and P300 specifications differ in fuelling, software calibration and ancillary configuration. An incorrect replacement creates reliability problems that can be expensive to resolve.",
          "At Vogue Technics, we confirm the exact Ingenium engine code from your vehicle registration before recommending any repair route. Where a targeted rebuild is viable — addressing timing chain wear, turbo failure or oil system issues — we provide an itemised written quote before stripping begins. Where replacement is the better option, we source a matched unit and handle the full supply-and-fit process with post-installation road testing.",
          "Discovery Sport and Defender owners experiencing timing chain noise, turbo faults, oil dilution or overheating should seek accurate diagnosis before committing to a repair. Many Land Rover 2.0 Ingenium engines are unnecessarily written off or quoted for full replacement when a rebuild at significantly lower cost is entirely viable. We assess honestly and recommend only what the engine actually needs.",
        ],
      },
      {
        heading: "Used & Reconditioned Land Rover 2.0 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 2.0 Ingenium engine has suffered damage beyond economical repair, replacement with a quality-checked used or reconditioned unit is the most practical route. Vogue Technics source replacement engines matched to the correct specification and engine code for your vehicle — ensuring emissions compliance, software compatibility and ancillary configuration are all correct before fitting.",
          "A used Land Rover 2.0 Ingenium engine offers a cost-effective replacement when the original has suffered terminal mechanical failure. A reconditioned unit provides greater long-term confidence, having been stripped, measured and rebuilt to manufacturer tolerances with new timing components, seals and bearings. We advise the appropriate option based on vehicle condition, mileage and intended use.",
          "All replacement engines supplied by Vogue Technics are accompanied by written warranty terms. Post-fit road testing and pressure checks are carried out before the vehicle is returned. UK-wide vehicle collection and delivery is available for all Land Rover 2.0 engine work.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Land Rover 2.0 Ingenium engine problems?",
        answer:
          "The most frequently reported issues on Land Rover 2.0 Ingenium engines are timing chain stretch, turbocharger wear and oil dilution on diesel variants regularly used on short journeys. Overheating without a visible coolant leak can also indicate early head gasket deterioration. Accurate diagnosis before committing to a repair is essential to avoid unnecessary costs.",
      },
      {
        question: "How much does a Land Rover 2.0 Ingenium engine rebuild cost?",
        answer:
          "Rebuild cost depends on the extent of internal wear and which components require replacement. We carry out a full inspection and provide a detailed written quote before any work begins. The agreed figure is what you pay — there are no estimates that change once the engine has been stripped.",
      },
      {
        question: "Can a Land Rover Discovery Sport 2.0 engine be rebuilt rather than replaced?",
        answer:
          "In many cases, yes. If the engine block and cylinder head are structurally sound, a measured rebuild addressing timing components, turbo, bearings and seals can restore full reliability at considerably less cost than replacement. We assess suitability honestly after inspection.",
      },
      {
        question: "Do you carry out Land Rover 2.0 Ingenium timing chain replacement?",
        answer:
          "Yes. Timing chain replacement on the Land Rover 2.0 Ingenium — covering Discovery Sport and Defender applications — is one of our regular jobs. We replace the full chain kit including tensioner and guides, and road-test before handover.",
      },
      {
        question: "Do you offer UK-wide collection for Land Rover 2.0 engine work?",
        answer:
          "Yes. We arrange UK-wide vehicle collection and delivery for all major engine work on Land Rover 2.0 Ingenium engines, including rebuilds, replacements, turbo replacements and timing chain repairs.",
      },
    ],
  },
  "land-rover-3": {
    slug: "land-rover-3",
    engineSize: "3.0",
    title: "Land Rover 3.0 Engines",
    metaTitle: "Land Rover 3.0 TDV6 SDV6 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 3.0 TDV6 and SDV6 engine specialists. Rebuilds, timing chain replacement, turbo faults and reconditioned units for Discovery 4, Discovery 5 and Defender. UK-wide.",
    intro:
      "The Land Rover 3.0 TDV6 and SDV6 engines are widely used across Discovery 4, Discovery 5 and Defender platforms, sharing much of their architecture with the Range Rover 3.0 family. These are strong and capable engines, but timing chain wear, turbocharger faults, crankshaft issues and cooling failures are well-documented across all variants. Vogue Technics carry out Land Rover 3.0 engine rebuilds, repairs and replacements with full diagnostic assessment, itemised written quotes and warranty-backed workmanship on every job.",
    applications: [
      "Land Rover Discovery 4 3.0 TDV6 and SDV6 (L319)",
      "Land Rover Discovery 5 3.0 SDV6 and petrol V6 (L462)",
      "Land Rover Defender 3.0 diesel and petrol (L663)",
      "Land Rover Discovery Sport 3.0 shared platform variants",
      "Jaguar Land Rover shared 3.0 306DT and 306PS platforms",
    ],
    commonIssues: [
      "Timing chain wear, guide failure and rattle on cold start",
      "Turbocharger failure and variable-vane actuator faults",
      "Crankshaft and main bearing wear on high-mileage Discovery units",
      "Coolant loss and overheating linked to head gasket deterioration",
      "Injector and high-pressure fuel-pump wear on diesel variants",
      "EGR valve failure and swirl flap damage on TDV6 engines",
    ],
    serviceHighlights: [
      "Land Rover 3.0 TDV6 and SDV6 engine rebuild to OEM tolerances",
      "Reconditioned and used 3.0 replacement engines supplied and fitted",
      "Timing chain, tensioner and guide kit replacement",
      "Turbocharger diagnosis, removal and replacement",
      "Crankshaft and bottom-end inspection and repair",
      "Written warranty on all major engine work",
    ],
    precision: buildLandRoverPrecision("Land Rover 3.0 TDV6 & SDV6 Engines", "3.0"),
    contentSections: [
      {
        heading: "Land Rover 3.0 TDV6 & SDV6 Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Land Rover 3.0 TDV6 and SDV6 engines — used across Discovery 4, Discovery 5 and Defender — are among the most commonly repaired units at Vogue Technics. Shared JLR architecture means these engines carry the same well-known vulnerabilities as the Range Rover 3.0 family: timing chain stretch is a consistent issue, turbocharger failure becomes increasingly likely as mileage rises, and crankshaft wear on higher-mileage Discovery 4 units is frequently underestimated during initial assessment.",
          "When a Land Rover 3.0 TDV6 or SDV6 develops a fault, choosing the correct repair route requires stripping and measuring before committing to a quote. At Vogue Technics, we do not provide ballpark estimates that shift once the engine is open. We inspect the block, head, timing system and turbo condition, then provide an itemised written quote for the exact work required. If a rebuild is viable and better value, we say so; if replacement is the more practical option, we recommend it.",
          "All Land Rover 3.0 engine work uses OEM or quality-matched components — timing chain kits, turbocharger units, gasket sets and bearing shells selected for the TDV6 or SDV6 variant being repaired. Every job is road-tested and pressure-checked before handover, with written warranty terms confirmed in advance.",
        ],
      },
      {
        heading: "Used & Reconditioned Land Rover 3.0 TDV6 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 3.0 TDV6 or SDV6 engine is beyond economical repair — typically due to crankshaft failure, severe timing chain damage, or cylinder head damage following overheating — replacement with a quality-checked used or reconditioned unit is the most cost-effective route. Vogue Technics source replacement 3.0 engines confirmed to the correct engine code, emissions specification and ancillary configuration for your vehicle.",
          "A used Land Rover 3.0 diesel engine is the most cost-effective replacement option when the original has suffered catastrophic internal damage. A reconditioned 3.0 engine — stripped, measured and rebuilt to manufacturer tolerances with new seals, bearings, timing components and turbo oil feeds — provides greater long-term confidence and is the recommended option for Discovery 4 and Discovery 5 owners who want reliability from the replacement unit.",
          "All replacement engines supplied by Vogue Technics include written warranty terms confirmed before work starts. We handle the full supply-and-fit process at our workshop including post-installation road testing, or supply-only for owners with a preferred installer. UK-wide vehicle collection is available.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Land Rover Discovery 3.0 TDV6 engine problems?",
        answer:
          "The most reported issues on Land Rover 3.0 TDV6 and SDV6 engines are timing chain wear — presenting as a rattle on cold start — turbocharger failure, crankshaft and main bearing wear on high-mileage Discovery 4 units, and coolant loss that can indicate early head gasket failure. EGR valve faults and swirl flap damage are also common on older TDV6 diesel variants.",
      },
      {
        question: "How much does a Land Rover Discovery 3.0 engine rebuild cost?",
        answer:
          "The cost depends on the extent of internal wear found during strip and inspection. We provide a full itemised written quote after assessment — not a ballpark estimate. The figure agreed before work begins is what you pay.",
      },
      {
        question: "Is it worth rebuilding a Land Rover 3.0 TDV6 engine?",
        answer:
          "In many cases yes. If the cylinder block and head are structurally sound, a proper rebuild addressing timing components, turbo, bearings and seals restores full reliability at considerably less cost than engine replacement. We assess suitability honestly before making a recommendation.",
      },
      {
        question: "Do you carry out Land Rover 3.0 TDV6 timing chain replacement?",
        answer:
          "Yes. Timing chain replacement on Land Rover 3.0 TDV6 and SDV6 engines — including Discovery 4 and Discovery 5 — is one of our most common jobs. We replace the full kit including tensioner and guides, check oil feed condition, and road-test before handover.",
      },
      {
        question: "Do you supply reconditioned Land Rover 3.0 TDV6 engines?",
        answer:
          "Yes. We supply both used and reconditioned Land Rover 3.0 TDV6 and SDV6 engines matched to the correct code and specification. Full supply-and-fit is available at our workshop, or supply-only if preferred. UK-wide collection can be arranged.",
      },
    ],
  },
  "land-rover-4.4": {
    slug: "land-rover-4.4",
    engineSize: "4.4",
    title: "Land Rover 4.4 Engines",
    metaTitle: "Land Rover 4.4 TDV8 Engine Rebuild, Repair & Replacement | Vogue Technics",
    metaDescription:
      "Land Rover 4.4 TDV8 engine specialists. Timing chain, twin turbo replacement, full rebuilds and reconditioned units for Discovery 4. Supply and fit available. UK-wide.",
    intro:
      "The Land Rover 4.4 TDV8 is a twin-turbocharged V8 diesel used primarily in the Discovery 4, sharing its core architecture with the Range Rover 4.4 TDV8. It is a powerful and capable engine but carries well-documented timing chain, turbocharger and oil system vulnerabilities that demand specialist diagnosis. Vogue Technics carry out Land Rover 4.4 TDV8 engine rebuilds, repairs and replacements with accurate platform-specific assessment, clear written quotes and warranty-backed workmanship on every job.",
    applications: [
      "Land Rover Discovery 4 4.4 TDV8 (L319)",
      "Range Rover shared 4.4 TDV8 platform (L322, L405, L320)",
      "Land Rover 4.4 V8 petrol variants",
      "Specialist JLR 4.4 V8 engine swap applications",
    ],
    commonIssues: [
      "Timing chain wear, guide failure and associated rattle",
      "Twin turbocharger failure and oil-feed pipe blockage",
      "Oil pressure loss and main bearing wear on high-mileage units",
      "Cooling system leaks, thermostat failure and overheating",
      "EGR system faults and associated running problems",
      "Injector and high-pressure fuel-pump wear",
    ],
    serviceHighlights: [
      "Land Rover 4.4 TDV8 engine rebuild to OEM tolerances",
      "Reconditioned and used 4.4 V8 replacement engines supplied and fitted",
      "Twin turbocharger diagnosis, removal and replacement",
      "Timing chain kit replacement with oil-feed system check",
      "Supply-only or full supply-and-fit at our workshop",
      "Written warranty on all major engine work",
    ],
    precision: buildLandRoverPrecision("Land Rover 4.4 TDV8 Engines", "4.4"),
    contentSections: [
      {
        heading: "Land Rover 4.4 TDV8 Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Land Rover 4.4 TDV8 engine — used in the Discovery 4 and shared with the Range Rover platform — is a complex twin-turbocharged V8 diesel that needs platform-specific knowledge to diagnose and repair correctly. Timing chain failures, turbocharger faults and oil pressure problems are frequently misdiagnosed or incompletely repaired by non-specialist workshops, leading to repeat failures. At Vogue Technics, we work on the 4.4 TDV8 regularly across both Land Rover and Range Rover applications and understand exactly where these engines fail.",
          "When a Discovery 4 4.4 TDV8 develops a fault, the correct repair route depends on a full strip-and-inspect assessment. A timing chain replacement with oil-feed system checks is one of the most common jobs on this engine. Where internal damage is more extensive — bearing wear, cylinder damage or oil starvation — a full measured rebuild is often the most cost-effective long-term solution. We do not quote before inspecting: the figure you receive reflects actual condition, not an estimate.",
          "All Land Rover 4.4 TDV8 engine work at Vogue Technics uses OEM or quality-matched components. Timing chain kits, turbo units and oil-feed lines are chosen specifically for this engine. Every major job is road-tested, oil-pressure checked and system-verified before the vehicle is returned. Written warranty terms are confirmed before work starts.",
        ],
      },
      {
        heading: "Used & Reconditioned Land Rover 4.4 TDV8 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 4.4 TDV8 engine has suffered severe internal damage — from oil starvation, timing failure or catastrophic turbo failure causing secondary damage — replacement with a quality-checked used or reconditioned unit is often the most practical route. Vogue Technics source 4.4 V8 replacement engines confirmed to the correct engine code and specification for your vehicle registration.",
          "A used Land Rover 4.4 TDV8 engine is suitable where the original has suffered terminal mechanical failure and cost is the primary concern. A reconditioned unit provides significantly greater confidence — stripped, measured and rebuilt with new seals, bearings, timing components and turbo oil-feed lines — and is recommended for Discovery 4 owners who want long-term reliability from the replacement unit.",
          "All replacement engines supplied by Vogue Technics include written warranty terms. We manage the full supply-and-fit process including post-installation road testing and oil system checks, or supply-only for owners with a preferred installer. UK-wide vehicle collection is available for all Land Rover 4.4 engine work.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Land Rover Discovery 4 4.4 TDV8 engine problems?",
        answer:
          "The most reported issues on the Land Rover 4.4 TDV8 are timing chain wear and guide failure, twin turbocharger failure linked to oil-feed pipe blockage, oil pressure loss from bearing wear, and cooling system faults. These engines are particularly sensitive to oil service intervals — extended changes accelerate timing chain and turbo wear significantly.",
      },
      {
        question: "How much does a Land Rover 4.4 TDV8 engine rebuild cost?",
        answer:
          "Cost varies depending on which components require replacement during rebuild. We carry out a full strip and inspection before providing a detailed written quote. There are no estimates that change once work has started — the figure agreed is what you pay.",
      },
      {
        question: "Is it worth rebuilding a Land Rover Discovery 4 4.4 TDV8 engine?",
        answer:
          "Often yes. If the cylinder block and heads are structurally sound, a thorough rebuild addressing timing, turbo oil feeds, bearings and seals can restore full reliability at considerably less cost than replacement. Given the cost of quality replacement 4.4 TDV8 units, a rebuild is frequently the better-value option when the core is viable.",
      },
      {
        question: "Do you replace the turbochargers on Land Rover 4.4 TDV8 engines?",
        answer:
          "Yes. Twin turbo replacement on the Land Rover 4.4 TDV8 is a regular job at Vogue Technics. We also check and clear the oil-feed lines to both turbos as part of every replacement — a step that is frequently missed and leads to premature failure of the new units.",
      },
      {
        question: "Do you supply reconditioned Land Rover 4.4 V8 engines?",
        answer:
          "Yes. We supply used and reconditioned Land Rover 4.4 TDV8 engines matched to the correct specification for your vehicle. Full supply-and-fit is available at our workshop, or supply-only if you have your own installer. UK-wide collection can be arranged.",
      },
    ],
  },
  "land-rover-5": {
    slug: "land-rover-5",
    engineSize: "5.0",
    title: "Land Rover 5.0 Engines",
    metaTitle: "Land Rover 5.0 V8 Supercharged Engine Rebuild & Repair | Vogue Technics",
    metaDescription:
      "Land Rover 5.0 AJ133 V8 engine specialists. Rebuilds, timing chain, head gasket and supercharger faults on Defender V8 and Discovery. Reconditioned units supplied. UK-wide.",
    intro:
      "The Land Rover 5.0 AJ133 V8 engine is fitted to the Defender V8 and select high-performance Land Rover derivatives, delivering exceptional output in both naturally aspirated and supercharged form. These engines require specialist knowledge around timing chains, cooling systems, supercharger components and oil management to maintain and repair correctly. Vogue Technics carry out Land Rover 5.0 V8 engine rebuilds, repairs and replacements with full diagnostic assessment, clear written quotes and warranty-backed workmanship.",
    applications: [
      "Land Rover Defender V8 5.0 Supercharged (L663)",
      "Land Rover Discovery V8 5.0 specialist and conversion applications",
      "AJ133 5.0 supercharged and naturally aspirated V8 variants",
      "Jaguar Land Rover shared 5.0 V8 platform derivatives",
    ],
    commonIssues: [
      "Timing chain rattle, stretch and guide wear on cold start",
      "Supercharger bearing wear, nose cone failure and coolant seal deterioration",
      "Head gasket failure linked to overheating or sustained coolant loss",
      "Oil consumption and valve stem seal wear on higher-mileage units",
      "Carbon build-up on intake valves",
      "Coolant pump failure and overheating on performance-driven units",
    ],
    serviceHighlights: [
      "Land Rover 5.0 AJ133 V8 engine rebuild to OEM tolerances",
      "Supercharged and naturally aspirated 5.0 V8 specialist work",
      "Timing chain kit replacement with full system checks",
      "Head gasket replacement with cylinder head pressure testing",
      "Reconditioned and used 5.0 V8 replacement engines supplied and fitted",
      "Written warranty on all major engine work",
    ],
    precision: buildLandRoverPrecision("Land Rover 5.0 AJ133 V8 Engines", "5.0"),
    contentSections: [
      {
        heading: "Land Rover 5.0 V8 Supercharged Engine Rebuild & Replacement Specialists",
        kicker: "Vogue Technics",
        paragraphs: [
          "The Land Rover 5.0 AJ133 V8 is the highest-performance engine in the Land Rover range, found in the Defender V8 and specialist applications. Supercharged variants in particular demand workshop experience specific to this platform — timing chain diagnosis, supercharger assessment and cooling system checks must all be carried out correctly before a repair route is decided. At Vogue Technics, we rebuild and repair AJ133 V8 engines across Land Rover and Range Rover applications with consistent, measured results.",
          "When a Land Rover 5.0 V8 develops a fault, the cause is rarely straightforward. A cold-start rattle can indicate timing chain wear that has been present for some time before becoming audible. Overheating may point to head gasket deterioration, supercharger coolant seal failure, or a failing coolant pump. We carry out a full diagnostic and mechanical inspection before providing any repair quote, so the recommendation reflects what the engine actually needs rather than a worst-case assumption.",
          "All Land Rover 5.0 V8 engine work uses OEM or quality-matched components chosen specifically for the AJ133 platform. Timing chain kits, head gasket sets, supercharger wear items and bearing assemblies are all sourced to the correct specification. Every completed job is road-tested, pressure-checked and verified before handover, with written warranty terms agreed in advance.",
        ],
      },
      {
        heading: "Used & Reconditioned Land Rover 5.0 V8 Engines for Sale",
        kicker: "Supply & Fit",
        paragraphs: [
          "When a Land Rover 5.0 AJ133 V8 engine has suffered damage beyond economical repair — from severe overheating, catastrophic timing failure or advanced internal wear — replacement with a quality-checked used or reconditioned unit is the most practical solution. Vogue Technics source 5.0 V8 replacement engines matched to the correct specification and software variant for your vehicle registration.",
          "A used Land Rover 5.0 V8 engine provides a cost-effective replacement when the original has suffered terminal mechanical failure. A reconditioned AJ133 unit provides greater long-term confidence — stripped, measured and rebuilt to manufacturer tolerances with new timing components, seals, head gaskets and supercharger wear items where required. We advise which option is appropriate based on vehicle condition, usage and budget.",
          "All replacement engines are supplied with written warranty terms and fitted with full post-installation checks. UK-wide vehicle collection and delivery is available for all Land Rover 5.0 V8 engine rebuild and replacement work.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common Land Rover 5.0 V8 engine problems?",
        answer:
          "The most frequently reported issues on Land Rover 5.0 AJ133 V8 engines are timing chain wear presenting as a cold-start rattle, supercharger bearing and coolant seal failure, head gasket deterioration linked to overheating, and oil consumption on higher-mileage units. Carbon build-up on intake valves is also reported on direct-injection variants. Early diagnosis prevents significantly more expensive repairs.",
      },
      {
        question: "How much does a Land Rover 5.0 V8 engine rebuild cost?",
        answer:
          "Cost depends on which components require replacement during rebuild — timing chain kits, head gaskets, bearings, supercharger wear items and seals all vary by condition. We provide a detailed written quote following full strip and inspection before any work proceeds. The agreed figure is what you pay.",
      },
      {
        question: "Can a Land Rover Defender V8 5.0 engine be rebuilt?",
        answer:
          "Yes. The AJ133 5.0 V8 fitted to the Defender V8 can be rebuilt when the block and cylinder heads are structurally sound. A properly executed rebuild addressing timing, oiling, supercharger components and seals restores full performance at considerably less cost than replacement. We assess suitability honestly after a full inspection.",
      },
      {
        question: "Do you carry out Land Rover 5.0 V8 timing chain replacement?",
        answer:
          "Yes. Timing chain replacement on Land Rover 5.0 AJ133 V8 engines is a specialist job we carry out regularly. We replace the full chain kit including tensioners and guides, and road-test the vehicle before handover. Addressing timing chain rattle early is strongly recommended to prevent guide failure and more extensive internal damage.",
      },
      {
        question: "Do you supply reconditioned Land Rover 5.0 V8 engines?",
        answer:
          "Yes. We supply both used and reconditioned Land Rover 5.0 AJ133 V8 engines, including supercharged Defender V8 variants. Full supply-and-fit at our workshop is available, as is supply-only for owners with a preferred installer. UK-wide collection can be arranged.",
      },
    ],
  },
};

export default landRoverEngineSizePages;
