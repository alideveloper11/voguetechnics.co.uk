import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import ReviewsSection from "@/components/common/ReviewsSection";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import RegNumberInput from "@/components/common/RegNumberInput";

type ModelPageContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: Array<{ title: string; paragraphs: string[] }>;
  testimonials?: Array<{ quote: string; by: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

type EngineSizeSpec = {
  slug: string;
  display: string;
  exampleEngines: string;
  typicalApplications: string;
  complexityNote: string;
  priceGuide: string;
};

const audiEngineSizeSpecs: EngineSizeSpec[] = [
  {
    slug: "audi-1-0-engines",
    display: "Audi 1.0 Engines",
    exampleEngines: "1.0 TFSI",
    typicalApplications: "A1 and compact Audi/VW Group platforms",
    complexityNote: "Modern small-displacement turbo engines depend on correct timing, oil quality, and precise diagnostics.",
    priceGuide: "£1,600–£2,800 (variant and damage dependent)",
  },
  {
    slug: "audi-1-2-engines",
    display: "Audi 1.2 Engines",
    exampleEngines: "1.2 TFSI",
    typicalApplications: "compact Audi/VW Group platforms",
    complexityNote: "Small TFSI engines are sensitive to timing and lubrication issues   correct assessment prevents repeat faults.",
    priceGuide: "£1,600–£2,900",
  },
  {
    slug: "audi-1-4-engines",
    display: "Audi 1.4 Engines",
    exampleEngines: "1.4 TFSI",
    typicalApplications: "A1, A3 and similar platforms",
    complexityNote: "Common failures are best solved by diagnosis-led repair rather than guesswork.",
    priceGuide: "£1,700–£3,200",
  },
  {
    slug: "audi-1-5-engines",
    display: "Audi 1.5 Engines",
    exampleEngines: "1.5 TFSI",
    typicalApplications: "newer compact/mid-size Audi platforms",
    complexityNote: "Efficient, high-output engines benefit from correct timing and cooling system integrity checks.",
    priceGuide: "£1,800–£3,400",
  },
  {
    slug: "audi-1-6-engines",
    display: "Audi 1.6 Engines",
    exampleEngines: "1.6 TDI",
    typicalApplications: "A1/A3-era diesel variants and fleet use",
    complexityNote: "Diesel issues often involve EGR/boost and fuel delivery   accurate diagnostics keep repairs targeted.",
    priceGuide: "£1,800–£3,600",
  },
  {
    slug: "audi-1-8-engines",
    display: "Audi 1.8 Engines",
    exampleEngines: "1.8T / 1.8 TFSI",
    typicalApplications: "older performance and mid-range Audi platforms",
    complexityNote: "Known oil and turbo-related wear patterns need proper inspection to avoid repeat failure.",
    priceGuide: "£1,800–£3,800",
  },
  {
    slug: "audi-2-0-engines",
    display: "Audi 2.0 Engines",
    exampleEngines: "2.0 TDI, 2.0 TFSI",
    typicalApplications: "A3, A4, A5, Q3, Q5 and many other platforms",
    complexityNote: "The most common Audi displacement   faults vary by code, so diagnosis is everything.",
    priceGuide: "£1,900–£4,200",
  },
  {
    slug: "audi-2-5-engines",
    display: "Audi 2.5 Engines",
    exampleEngines: "2.5 TFSI (5-cylinder)",
    typicalApplications: "TT RS / RS models and performance platforms",
    complexityNote: "High-performance builds demand precision measurement, correct parts, and proven procedures.",
    priceGuide: "£3,500–£7,500",
  },
  {
    slug: "audi-2-7-engines",
    display: "Audi 2.7 Engines",
    exampleEngines: "2.7 TDI / 2.7 V6 variants",
    typicalApplications: "older A6-era platforms and V6 applications",
    complexityNote: "V6 layouts increase labour complexity   replacing worn systems as a set prevents comeback jobs.",
    priceGuide: "£2,200–£4,800",
  },
  {
    slug: "audi-2-8-engines",
    display: "Audi 2.8 Engines",
    exampleEngines: "2.8 V6",
    typicalApplications: "older V6 petrol Audi platforms",
    complexityNote: "Age-related seal wear, cooling issues and timing concerns should be assessed as a complete system.",
    priceGuide: "£2,200–£4,900",
  },
  {
    slug: "audi-2-9-engines",
    display: "Audi 2.9 Engines",
    exampleEngines: "2.9 TFSI (V6 twin-turbo variants)",
    typicalApplications: "modern S/RS applications",
    complexityNote: "Twin-turbo systems require careful oil supply checks and calibrated post-repair validation.",
    priceGuide: "£3,000–£6,500",
  },
  {
    slug: "audi-3-0-engines",
    display: "Audi 3.0 Engines",
    exampleEngines: "3.0 TDI, 3.0 TFSI",
    typicalApplications: "A6, A7, Q7, performance V6 platforms",
    complexityNote: "Timing systems and oil/cooling integrity are critical   failures can escalate fast without early action.",
    priceGuide: "£2,400–£6,500",
  },
  {
    slug: "audi-3-2-engines",
    display: "Audi 3.2 Engines",
    exampleEngines: "3.2 V6",
    typicalApplications: "older performance and premium platforms",
    complexityNote: "Chain/timing behaviour and age-related wear need platform-aware diagnosis and proper parts.",
    priceGuide: "£2,600–£5,800",
  },
  {
    slug: "audi-4-0-engines",
    display: "Audi 4.0 Engines",
    exampleEngines: "4.0 TFSI (V8 twin-turbo variants)",
    typicalApplications: "S/RS and high-performance luxury platforms",
    complexityNote: "High heat loads mean cooling and oiling systems must be verified alongside the core repair.",
    priceGuide: "£4,000–£10,000+",
  },
  {
    slug: "audi-4-1-engines",
    display: "Audi 4.1 Engines",
    exampleEngines: "4.1 TDI / V8 diesel variants",
    typicalApplications: "high-torque luxury platforms",
    complexityNote: "Complex V8 diesel systems need correct diagnostics to avoid replacing the wrong parts.",
    priceGuide: "£3,800–£9,500",
  },
  {
    slug: "audi-4-2-engines",
    display: "Audi 4.2 Engines",
    exampleEngines: "4.2 V8 (FSI variants)",
    typicalApplications: "A8, RS models and premium V8 platforms",
    complexityNote: "V8 rebuild work is all about measurement, machining where needed, and correct reassembly tolerances.",
    priceGuide: "£4,500–£12,000+",
  },
  {
    slug: "audi-5-0-engines",
    display: "Audi 5.0 Engines",
    exampleEngines: "5.0 V10-era variants (platform dependent)",
    typicalApplications: "specialist performance platforms",
    complexityNote: "Low-volume engines require careful parts sourcing and specialist build discipline.",
    priceGuide: "£6,000–£14,000+",
  },
  {
    slug: "audi-5-2-engines",
    display: "Audi 5.2 Engines",
    exampleEngines: "5.2 FSI V10",
    typicalApplications: "Audi R8 V10 and related platforms",
    complexityNote: "High-revving V10s demand precision machining, strict tolerances, and thorough post-build testing.",
    priceGuide: "£7,000–£16,000+",
  },
  {
    slug: "audi-6-0-engines",
    display: "Audi 6.0 Engines",
    exampleEngines: "6.0 W12 variants",
    typicalApplications: "A8 W12 and flagship platforms",
    complexityNote: "W12 engines are complex and labour intensive   only worth doing properly with full-system checks.",
    priceGuide: "£8,000–£20,000+",
  },
  {
    slug: "audi-6-3-engines",
    display: "Audi 6.3 Engines",
    exampleEngines: "6.3 W12-era displacement class (platform dependent)",
    typicalApplications: "flagship/luxury applications (variant dependent)",
    complexityNote: "High-complexity builds require specialist diagnostics, careful strip-down documentation and correct assembly processes.",
    priceGuide: "£8,500–£22,000+",
  },
];

function buildAudiEngineSizeContent(spec: EngineSizeSpec): ModelPageContent {
  const metaTitle = `${spec.display}   Rebuild, Repair & Replacement | Vogue Technics ()`;
  const metaDescription =
    `${spec.display} specialists . Expert diagnostics, rebuilds, repairs and replacement engines for ${spec.exampleEngines}. UK-wide collection/delivery and written warranty available.`;

  return {
    metaTitle,
    metaDescription,
    h1: `${spec.display}   Engine Rebuild, Repair & Replacement Specialists in `,
    intro: [
      `${spec.display} cover a wide range of Audi platforms and generations   and the correct fix depends on accurate diagnosis, not guesswork.`,
      `At Vogue Technics in , we provide specialist engine rebuild, repair and replacement services for ${spec.display.toLowerCase()} across the UK. We work on ${spec.exampleEngines} configurations commonly found in ${spec.typicalApplications}, with clear, itemised quotes and written warranty on major work.`,
    ],
    sections: [
      {
        title: `Why ${spec.display} Owners Choose Vogue Technics`,
        paragraphs: [
          `Engine work is only as good as the diagnosis that leads it. We build an accurate picture first   fault-code scanning, compression testing where appropriate, oil/coolant condition checks, and inspection of known failure points   then recommend the most sensible route.`,
          spec.complexityNote,
          "Every quote we issue is itemised and confirmed before work begins. If anything unexpected is found during strip-down, you’re contacted before any extra work is authorised.",
        ],
      },
      {
        title: `Common Issues We Solve on ${spec.display}`,
        paragraphs: [
          `The same engine size can behave very differently depending on engine code and platform. We regularly resolve timing-related faults, oil/coolant leaks, turbo-related issues (where applicable), cylinder head sealing problems, and wear-related compression issues.`,
          "Where a targeted repair is the right choice, we keep it targeted. Where a rebuild is the only route to long-term reliability, we rebuild to correct tolerances using quality components and validated procedures.",
        ],
      },
      {
        title: `Rebuild, Repair or Replacement   What’s Right for Your Engine?`,
        paragraphs: [
          "If the base engine is structurally sound, a rebuild can be the most cost-effective long-term solution. If failure is catastrophic or damage is extensive, a verified replacement engine may be more practical.",
          "We offer supply-and-fit at our  workshop, plus UK-wide collection and return. Typical turnaround for many repairs is 3–7 working days; full rebuilds usually take 5–10 working days depending on parts and internal condition.",
        ],
      },
    ],
    faqs: [
      {
        question: `How much does a ${spec.display} rebuild cost in the UK?`,
        answer: `Pricing depends on the exact engine code and internal findings. As a guide, ${spec.priceGuide}. We’ll provide a detailed, no-obligation quote once we know the vehicle details and fault symptoms.`,
      },
      {
        question: `Do you work on all variants within ${spec.display}?`,
        answer:
          "Yes   where the engine size spans multiple codes, we identify the exact engine code and platform first, then apply the correct procedure for that configuration.",
      },
      {
        question: "Is it better to rebuild or replace the engine?",
        answer:
          "It depends on damage level and budget. A rebuild is ideal when the core is viable and you want long-term reliability. Replacement makes sense when damage is severe or a verified unit provides better overall value.",
      },
      {
        question: "Do you offer UK-wide collection and delivery?",
        answer:
          "Yes. If you’re not local to , we can arrange collection/return and support fitting through approved installers where appropriate.",
      },
      {
        question: "Is major engine work covered by warranty?",
        answer:
          "Yes. Engine rebuilds, replacements and major repairs are supplied with a written warranty. Terms are agreed clearly before work begins.",
      },
    ],
  };
}

const audiEngineSizeContent: Record<string, ModelPageContent> = Object.fromEntries(
  audiEngineSizeSpecs.map((s) => [s.slug, buildAudiEngineSizeContent(s)]),
);

const audiModelContent: Record<string, ModelPageContent> = {
  ...audiEngineSizeContent,
  "audi-a1-engines": {
    metaTitle: "Audi A1 Engine Rebuild   Expert Engine Services Across the UK",
    metaDescription:
      "Audi A1 engine rebuild, repair and replacement specialists . Vogue Technics provide diagnostics, timing chain/belt work, turbo replacement and warranty-backed engine services UK-wide.",
    h1: "Audi A1 Engine Rebuild   Expert Engine Services Across the UK",
    intro: [
      "If your Audi A1 has started burning oil, losing power, or throwing up warning lights you can't ignore, you're in the right place. At Vogue Technics, based in , we specialise in precision engine work for Audi vehicles   and the A1 is one we know inside out.",
      "Whether you're dealing with a blown head gasket, a worn timing chain, or an engine that's simply given up, we deliver honest assessments, quality workmanship, and long-lasting results. Backed by over 25 years of hands-on experience, we're the Audi A1 engine specialists UK drivers trust when it matters most.",
    ],
    sections: [
      {
        title: "Why Vogue Technics Is the Right Choice for Your Audi A1 Engine",
        paragraphs: [
          "The Audi A1 is a brilliantly engineered small car   but like any precision machine, its engine demands specialist attention when things go wrong. A general garage simply won't cut it.",
        ],
      },
      {
        title: "Audi-Focused Expertise, Not a Jack of All Trades",
        paragraphs: [
          "Every technician at Vogue Technics works specifically on Audi and Volkswagen Group engines. From the 1.0 TFSI three-cylinder to the 1.4 TFSI and 1.6 TDI, we understand the engineering behind each variant   the known failure points, the correct tolerances, and the right parts to use. You won't find guesswork here.",
        ],
      },
      {
        title: "25 Years of Engine Rebuilds, Repairs and Replacements",
        paragraphs: [
          "We've been rebuilding engines since before most online \"specialists\" existed. Our reputation across  and the wider UK has been earned through consistent, quality-first work   not marketing promises. When we hand your Audi A1 back to you, it's built to last.",
        ],
      },
      {
        title: "Clear Quotes, No Hidden Costs",
        paragraphs: [
          "Engine trouble is stressful enough. We make the process straightforward with upfront, itemised quotes   so you know exactly what you're paying for before any work begins. Call us or submit an online enquiry for a fast, no-obligation quote today.",
        ],
      },
      {
        title: "Audi A1 Engine Services   Everything Your Engine Needs Under One Roof",
        paragraphs: [
          "We offer the complete range of Audi A1 engine services, from targeted repairs through to full rebuilds and replacements. Whatever your A1 needs, we have the solution.",
        ],
      },
      {
        title: "Audi A1 Head Gasket Replacement UK",
        paragraphs: [
          "White smoke from the exhaust, a rising temperature gauge, or coolant disappearing without explanation   these are the classic signs of a failing head gasket. On the Audi A1, particularly the 1.4 TFSI models, head gasket failure is a known issue that gets significantly worse if left unaddressed.",
          "We replace Audi A1 head gaskets using OEM-grade components, with full pressure testing carried out after installation. Catch it early and you'll save your engine. Leave it too long and you risk a complete rebuild.",
        ],
      },
      {
        title: "Audi A1 Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "The 1.0 TFSI engine found in later Audi A1 models has a documented history of timing chain problems in the UK market   stretched chains, worn tensioners, and guides that fail prematurely. A timing chain failure can destroy your engine in seconds.",
          "We replace timing chains as a complete system   chain, tensioners, guides, and sprockets   never as a partial fix. For earlier A1 models equipped with a timing belt, we also carry out Audi A1 cambelt changes at manufacturer-recommended intervals, using quality belt kits that include the water pump where applicable.",
        ],
      },
      {
        title: "Audi A1 Turbo Replacement UK",
        paragraphs: [
          "Losing power under acceleration? Hearing an unusual whine or whistle from the engine bay? These are tell-tale signs of turbocharger failure. The 1.4 TFSI and 1.2 TFSI engines in the Audi A1 are turbocharged units, and the turbo works hard   especially on urban and motorway driving.",
          "We source quality replacement turbos for all Audi A1 engine variants, fitting them to manufacturer specifications with full post-installation testing. No shortcuts, no remanufactured units of questionable origin.",
        ],
      },
      {
        title: "Audi A1 Engine Rebuild, Repair & Replacement",
        paragraphs: [
          "Sometimes a targeted repair is all you need. Other times, a full rebuild or replacement is the smarter investment. Here's how we approach each:",
          "Engine Repair   Our diagnostics team pinpoints the exact fault so you only pay for what's genuinely needed. Oil leaks, bearing wear, valve damage, sensor faults   we handle every level of Audi A1 engine repair.",
          "Engine Rebuild   A full Audi A1 engine rebuild involves stripping the engine completely, inspecting and measuring every component, replacing worn parts to factory tolerances, and reassembling to a standard that's as close to new as mechanically possible. It's the most cost-effective long-term solution for high-mileage A1 engines.",
          "Engine Replacement & Engine Swap   Where replacement makes more sense, we supply and fit quality reconditioned Audi A1 engines sourced from trusted UK suppliers. All units are tested before installation. We also carry out Audi A1 engine swaps   including fitting later engine variants into earlier models   with full remapping and post-swap diagnostics included.",
        ],
      },
      {
        title: "Audi A1 Engine Health Check & Fault Diagnosis UK",
        paragraphs: [
          "Not sure what's wrong? Don't guess. Our Audi A1 engine health check covers compression testing, oil condition analysis, full diagnostic scanning, and a detailed visual inspection of all engine components. You'll receive an honest written report with clear recommendations   no upselling, no unnecessary work suggested.",
          "This service is also ideal if you're considering buying a used Audi A1 and want independent assurance before you commit.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Engine Collection and Delivery",
        paragraphs: [
          "We know that being without your car   especially if it's your daily driver   is a real inconvenience. We work efficiently without ever cutting corners.",
        ],
      },
      {
        title: "Realistic Turnaround Times You Can Rely On",
        paragraphs: [
          "Most Audi A1 engine repairs are completed within 2–5 working days. Full rebuilds typically take 5–10 working days depending on parts availability. We give you an honest timeframe at the point of booking   and we meet it.",
        ],
      },
      {
        title: "Engine Collection and Delivery Across the UK",
        paragraphs: [
          "Can't get to our workshop in ? No problem. We offer a fully managed engine collection and delivery service across the whole of the UK. Ship your unit to us and we'll return it fully rebuilt, tested, and ready to fit   or arrange installation through our approved fitter network near you.",
        ],
      },
      {
        title: "Warranty on Every Engine Job",
        paragraphs: [
          "Every engine rebuild, replacement, and major repair at Vogue Technics comes with a written warranty. We stand behind our work completely   because we know it's done right the first time.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Had my 1.4 TFSI rebuilt after a timing chain failure. Vogue Technics were upfront about costs, kept me updated throughout, and the engine runs absolutely perfectly. Wouldn’t go anywhere else.",
        by: "  Daniel F., London",
      },
      {
        quote:
          "Quoted £3,800 by a main dealer for an engine replacement. Vogue Technics did a full rebuild for significantly less and gave me a 12-month warranty. Outstanding service.",
        by: "  Sarah K., Birmingham",
      },
      {
        quote:
          "Sent my A1 engine up from Bristol. It came back ahead of schedule, well packaged, and starts first time every time. Brilliant.",
        by: "  Tom W., Bristol",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A1 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on engine variant and internal wear. As a guide, a full rebuild on a 1.4 TFSI often starts around £1,800–£3,200. Contact us for an accurate quote based on your vehicle and symptoms.",
      },
      {
        question: "What are the most common Audi A1 engine problems?",
        answer:
          "Common issues include timing chain wear on 1.0 TFSI models, head gasket failure on 1.4 TFSI variants, turbocharger failure, and oil consumption problems. Early diagnosis is the most cost-effective route.",
      },
      {
        question: "Is an Audi A1 engine rebuild worth it?",
        answer:
          "In most cases, yes   especially if the rest of the vehicle is in good condition. A quality rebuild is usually far cheaper than replacing the car and comes with warranty cover.",
      },
      {
        question: "Do you offer Audi A1 engine replacement as well as rebuild?",
        answer:
          "Yes. We offer supply and fit of reconditioned and verified used Audi A1 engines, plus engine swaps where required.",
      },
      {
        question: "How long does an Audi A1 engine rebuild take?",
        answer:
          "Most rebuilds are completed within 5–10 working days depending on parts and the extent of work required.",
      },
      {
        question: "Do you cover the whole of the UK?",
        answer:
          "Yes. We’re based in , but serve Audi owners UK-wide through collection and delivery and installer support.",
      },
    ],
  },
  "audi-a1-sportback-engines": {
    metaTitle: "Audi A1 Sportback Engine Rebuild   Specialist Engine Services Across the UK",
    metaDescription:
      "Audi A1 Sportback engine rebuild, repair and replacement specialists . Timing chain/belt, turbo and warranty-backed engine services with UK-wide collection and delivery.",
    h1: "Audi A1 Sportback Engine Rebuild   Specialist Engine Services Across the UK",
    intro: [
      "If your Audi A1 Sportback has started letting you down   whether that's a sudden loss of power, an ominous rattling from the engine bay, or a dashboard full of warning lights   you need a specialist, not a generalist.",
      "At Vogue Technics, based in , we live and breathe Audi engines. The A1 Sportback, across every generation and engine variant, is a vehicle we know thoroughly   from the peppy 1.0 TFSI three-cylinder through to the 1.4 TFSI and the 1.6 TDI.",
      "With over 25 years of hands-on engine experience and a team that works exclusively on Volkswagen Group vehicles, we're the name UK drivers turn to when their Audi A1 Sportback needs serious attention. No guesswork. No unnecessary upselling. Just honest, expert engine work   done right the first time.",
    ],
    sections: [
      {
        title: "Why Audi A1 Sportback Owners Choose Vogue Technics",
        paragraphs: [
          "The A1 Sportback might be compact, but its engine is far from simple. These are precision-engineered units with tight tolerances, turbocharging systems, and timing mechanisms that demand genuine expertise when something goes wrong.",
          "A local garage that \"does all makes\" simply isn't equipped to handle them properly.",
        ],
      },
      {
        title: "Audi-Specific Knowledge, Built Over 25 Years",
        paragraphs: [
          "Every technician at Vogue Technics is trained specifically on Audi and Volkswagen Group engines. We understand the known failure points on the EA111 and EA211 engine families, the timing chain vulnerabilities on the 1.0 TFSI, and the turbo wear patterns common to the 1.4 TFSI   because we've dealt with them hundreds of times.",
          "That experience makes a real difference to the quality of your repair and the longevity of the result.",
        ],
      },
      {
        title: "Transparent Pricing From the Start",
        paragraphs: [
          "Engine trouble is already stressful. The last thing you need is a vague estimate that balloons once work begins.",
          "At Vogue Technics, we provide clear, itemised quotes before any work starts   so you know exactly what you're paying for and why. No hidden charges, no surprises on collection day.",
        ],
      },
      {
        title: "A Reputation Built on Results, Not Advertising",
        paragraphs: [
          "Our customer base across  and the wider UK has grown almost entirely through word of mouth. When an Audi A1 Sportback leaves our workshop, the owner goes away satisfied   and tells other Audi drivers about us.",
          "That's the kind of reputation that takes 25 years to build, and we're proud of every bit of it.",
        ],
      },
      {
        title: "Complete Audi A1 Sportback Engine Services   Every Problem, One Specialist",
        paragraphs: [
          "We offer the full range of Audi A1 Sportback engine services under one roof. Whether you need a targeted repair or a complete engine overhaul, we have the expertise, the tooling, and the parts to get you back on the road.",
        ],
      },
      {
        title: "Audi A1 Sportback Head Gasket Replacement UK",
        paragraphs: [
          "Coolant disappearing without explanation, white smoke trailing from your exhaust, or your temperature gauge creeping into the red   these are the warning signs of a failing head gasket, and on the A1 Sportback's 1.4 TFSI engine, it's a fault we see regularly.",
          "We carry out Audi A1 head gasket replacements using OEM-grade components, with full pressure and leak-down testing completed after every job.",
          "Act on the early signs and you can save your engine entirely. Ignore them and the damage escalates quickly   and expensively.",
        ],
      },
      {
        title: "Audi A1 Sportback Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "The 1.0 TFSI engine fitted to the second-generation A1 Sportback has a well-documented history of timing chain problems in the UK. Stretched chains, failing tensioners, and worn guides are common   and when a timing chain lets go, the internal damage can be catastrophic and instantaneous.",
          "We replace timing chains as a complete system every time   chain, tensioners, guides, and sprockets together   never as a piecemeal fix that leaves the underlying problem half-solved.",
          "For earlier A1 Sportback models running a timing belt rather than a chain, we carry out full Audi A1 cambelt replacements at the correct intervals, always using quality kits that include the water pump where applicable.",
        ],
      },
      {
        title: "Audi A1 Sportback Turbo Replacement UK",
        paragraphs: [
          "Sluggish acceleration, a faint whistling under load, or blue smoke on startup   any of these symptoms points toward turbocharger trouble.",
          "We source quality replacement turbos for all Audi A1 Sportback engine variants and fit them to manufacturer specifications, with thorough post-installation testing carried out before the car leaves our workshop.",
          "We don't fit cheap, unverified units   your engine deserves better than that.",
        ],
      },
      {
        title: "Audi A1 Sportback Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Not every engine fault requires the same solution. We assess each vehicle individually and recommend the most appropriate   and cost-effective   course of action.",
          "Audi A1 Sportback Engine Repair   Our diagnostic team uses the latest equipment to identify the precise root cause of your engine fault. From oil leaks and worn bearings to valve damage and sensor failures, we carry out targeted Audi A1 engine repairs so you only pay for what's genuinely needed.",
          "Audi A1 Sportback Engine Rebuild   We strip the unit completely, measure and inspect every internal component, replace everything that falls outside tolerance, and reassemble to factory specification. The result is mechanically equivalent to a fresh engine   at a fraction of the cost of a new one. All reconditioned Audi A1 engines leave our workshop bench-tested and ready to perform.",
          "Audi A1 Sportback Engine Replacement   Where replacement makes more practical sense, we supply and fit quality used and reconditioned Audi A1 Sportback engines sourced from verified UK suppliers. Every unit is inspected and tested before installation   we don't fit blind.",
          "Audi A1 Sportback Engine Swap   Looking to fit a later, more efficient engine variant into an earlier A1 Sportback shell? Our engine swap service covers mounts, ancillaries, ECU remapping, and full post-swap diagnostics   carried out properly from start to finish.",
        ],
      },
      {
        title: "UK-Wide Collection, Delivery & Fast Turnaround Times",
        paragraphs: [
          "We understand that life doesn't stop just because your Audi A1 Sportback has. We work efficiently and communicate clearly throughout every job   because your time matters.",
        ],
      },
      {
        title: "Engine Collection & Delivery Across the UK",
        paragraphs: [
          "Not local to ? That's no obstacle. We offer a fully managed engine collection and delivery service covering the entire United Kingdom.",
          "Send your unit to us and we'll return it rebuilt, tested, and ready to fit   or we'll connect you with one of our approved fitting partners near you.",
        ],
      },
      {
        title: "Realistic Turnaround Times   and We Stick to Them",
        paragraphs: [
          "Most targeted engine repairs on the A1 Sportback are completed within 2–5 working days. Full engine rebuilds typically take 5–10 working days, depending on parts availability and the extent of internal wear.",
          "We give you an honest timeframe at the point of booking   not an optimistic one designed to win your business.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Every engine rebuild, replacement, and major repair carried out at Vogue Technics is backed by a written warranty. We stand behind our work completely   because we know the standard it's built to.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "My 1.0 TFSI had a timing chain failure at 68,000 miles. Vogue Technics diagnosed it immediately, explained everything clearly, and had the car back to me within the week. Runs like new. Genuinely impressed.",
        by: "  Natalie B., London",
      },
      {
        quote:
          "Three garages told me the engine was done. Vogue Technics rebuilt it for a fraction of what a replacement would have cost and gave me a warranty on top. Wish I'd gone to them first.",
        by: "  Marcus T., Sheffield",
      },
      {
        quote:
          "I'm based in Leeds and sent my A1 Sportback engine down. Communication was excellent throughout, it came back ahead of schedule, and the car pulls better than it ever did. Outstanding.",
        by: "  Rachel O., Leeds",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A1 Sportback engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear. As a general guide, a full rebuild on a 1.4 TFSI or 1.0 TFSI typically starts from around £1,800–£3,000. Contact us directly for an accurate, no-obligation quote tailored to your specific vehicle.",
      },
      {
        question: "What are common engine problems on the Audi A1 Sportback?",
        answer:
          "The most frequently reported issues include timing chain wear on 1.0 TFSI models, head gasket failure on 1.4 TFSI variants, turbocharger deterioration on higher-mileage cars, and oil consumption faults across multiple engine codes. Early diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Is it worth rebuilding an Audi A1 Sportback engine?",
        answer:
          "In most cases, absolutely   particularly when the rest of the car is in solid condition. A quality rebuild gives you a mechanically fresh engine with a warranty behind it, at considerably less than the cost of replacing the car.",
      },
      {
        question: "Do you carry out Audi A1 Sportback engine health checks?",
        answer:
          "Yes. Our Audi A1 engine inspection service covers compression testing, oil condition analysis, full diagnostic scanning, and a detailed visual assessment of all engine components. You'll receive a written report with honest, straightforward recommendations   no upselling and no unnecessary work suggested.",
      },
      {
        question: "How long does an engine replacement take?",
        answer:
          "A straightforward engine replacement is typically completed within 3–5 working days. A full rebuild takes 5–10 working days. We confirm your exact timeframe at booking and update you throughout the process.",
      },
      {
        question: "Do you serve the whole UK?",
        answer:
          "Yes. We're based in , but we serve Audi A1 Sportback owners across the entire United Kingdom through our collection and delivery service and our approved installer network.",
      },
    ],
  },
  "audi-a2-engines": {
    metaTitle: "Audi A2 Engine Rebuild, Repair & Replacement   Specialist Service Across the UK",
    metaDescription:
      "Audi A2 engine rebuild, repair and replacement specialists . Accurate diagnostics, timing/cooling repairs, rebuilds and verified replacements with UK-wide collection and written warranty.",
    h1: "Audi A2 Engine Rebuild, Repair & Replacement   Specialist Service Across the UK",
    intro: [
      "The Audi A2 is a genuinely unique car   lightweight, efficient, and engineered differently to almost anything else in its class. Owners tend to keep them for a long time, which means when the engine develops a serious fault, fixing it properly is usually the smartest choice.",
      "At Vogue Technics in , we provide specialist engine rebuild, repair and replacement services for Audi A2 owners across the UK. Whether you need targeted engine repair, timing-related work, or a full rebuild, we diagnose accurately and deliver work that lasts   backed by written warranty.",
    ],
    sections: [
      {
        title: "Why Audi A2 Owners Choose Vogue Technics",
        paragraphs: [
          "The A2’s engineering is distinctive, and the right diagnosis matters. We assess the engine properly before recommending any work   fault code scanning, mechanical checks, and inspection of known wear points   so you pay for what the car actually needs.",
          "We provide clear, itemised quotes up-front and communicate honestly throughout the job. No vague estimates and no surprise costs at collection.",
          "Major engine work is backed by a written warranty, because we’re confident in the standard we deliver.",
        ],
      },
      {
        title: "Our Audi A2 Engine Services",
        paragraphs: [
          "We offer a complete range of engine services for the Audi A2, from contained repairs to full rebuilds and verified replacement engines.",
        ],
      },
      {
        title: "Head Gasket & Cooling System Repairs",
        paragraphs: [
          "Coolant loss, overheating, white exhaust smoke, or milky residue under the oil cap are warning signs you shouldn’t ignore. We replace head gaskets using OEM-quality components and pressure test the cooling system to confirm the repair is complete   not just temporary.",
        ],
      },
      {
        title: "Timing & Belt/Chain Related Work",
        paragraphs: [
          "Timing-related issues are never a “wait and see” problem. We inspect and replace timing components correctly for the specific engine configuration, using full kits where required to prevent repeat failure.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Health Check",
        paragraphs: [
          "If internal wear is advanced, a full rebuild provides the best long-term solution   strip-down, inspection, replacement of worn components, and reassembly to correct tolerances.",
          "Where a rebuild isn’t sensible, we can supply and fit verified replacement engines (or supply-only), backed by written warranty. We also offer engine health checks with clear, practical recommendations.",
        ],
      },
      {
        title: "UK-Wide Collection & Fast Turnaround",
        paragraphs: [
          "Not local to ? We offer UK-wide collection and return and can help with fitting support where needed. We confirm realistic turnaround times at booking and keep you updated throughout the job.",
        ],
      },
      {
        title: "Ready to get your Audi A2 engine sorted properly?",
        paragraphs: [
          "Call Vogue Technics today or use our online enquiry form for a fast, no-obligation quote. We’re based in  and serve Audi A2 owners across the whole of the UK with precise diagnostics, honest pricing and engine work built to last.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A2 engine rebuild cost in the UK?",
        answer:
          "Costs depend on engine variant and internal condition. Contact us with your engine details and symptoms for a detailed, no-obligation quote.",
      },
      {
        question: "Do you offer engine replacement as well as rebuild?",
        answer:
          "Yes. We can supply and fit verified replacement engines, or supply-only if you have your own fitting arrangement, with written warranty paperwork.",
      },
      {
        question: "Do you provide UK-wide collection and return?",
        answer:
          "Yes. We serve customers nationwide via collection and return, plus fitting support where appropriate.",
      },
      {
        question: "Is major engine work covered by warranty?",
        answer:
          "Yes. Rebuilds, replacements and major repairs include a written warranty with terms agreed clearly before work begins.",
      },
    ],
  },
  "audi-a3-engines": {
    metaTitle: "Audi A3 Engine Rebuild   Specialist Engine Services for Every A3 Variant Across the UK",
    metaDescription:
      "Audi A3 engine rebuild, repair and replacement specialists . Timing chain/belt, turbo and warranty-backed services for all A3 variants with UK-wide collection and delivery.",
    h1: "Audi A3 Engine Rebuild   Specialist Engine Services for Every A3 Variant Across the UK",
    intro: [
      "When your Audi A3 starts showing signs of serious engine trouble   whether that's a persistent misfire, a rattling timing chain, an overheating problem you can't shake, or simply an engine that's run its course   the worst thing you can do is hand it to someone who isn't genuinely familiar with it.",
      "At Vogue Technics, based in , we specialise in Audi and Volkswagen Group engines. The A3, across every body style and generation   Sportback, Saloon, Convertible, and Limousine   is a vehicle we work on every single week.",
      "From the 1.6 TDI and 2.0 TDI diesel variants through to the 1.8 TFSI and 2.0 TFSI petrol engines, we understand exactly how these units are built, where they fail, and what it takes to bring them back to the standard Audi intended. With over 25 years of hands-on experience behind us, we're the Audi A3 engine specialists that UK drivers rely on when the stakes are high.",
    ],
    sections: [
      {
        title: "Why Audi A3 Owners Trust Vogue Technics With Their Engine",
        paragraphs: [
          "The Audi A3 is a premium vehicle, and its engine reflects that   precise engineering, tight tolerances, and complex systems that simply don't respond well to guesswork or generic garage treatment. You need someone who has worked on these engines hundreds of times before. That's exactly what we offer.",
        ],
      },
      {
        title: "Genuine Audi and VW Group Expertise   Nothing Else",
        paragraphs: [
          "Every technician at Vogue Technics works exclusively on Audi and Volkswagen Group platforms. We know the timing chain weaknesses specific to the 1.8 TFSI, the head gasket vulnerabilities on the 2.0 TDI, and the turbo failure patterns that appear on higher-mileage A3 variants   because we've diagnosed and resolved them more times than we can count.",
          "That depth of model-specific knowledge directly translates into better outcomes for your vehicle.",
        ],
      },
      {
        title: "25 Years of Engine Work   Reputation Built on Results",
        paragraphs: [
          "Since we opened our doors in , our customer base has grown almost entirely through recommendation. Audi A3 owners across London,  and the wider UK find us because another Audi driver sent them our way.",
          "When your engine leaves our workshop rebuilt or repaired, it's built to last   and our customers know it.",
        ],
      },
      {
        title: "Straight Talking, Upfront Pricing",
        paragraphs: [
          "We give every customer a clear, itemised quote before any work begins. No vague ballpark figures designed to get you through the door, no additional charges that appear without warning.",
          "You know what the job costs, why it costs that, and exactly what we're doing   before we pick up a single tool.",
        ],
      },
      {
        title: "Full Audi A3 Engine Services   Every Fault, Every Variant, One Specialist Workshop",
        paragraphs: [
          "We cover the complete range of Audi A3 engine services at our  workshop. Whether your A3 needs a focused repair or a ground-up engine rebuild, we have the expertise, equipment, and genuine parts knowledge to do it properly.",
        ],
      },
      {
        title: "Audi A3 Head Gasket Replacement UK",
        paragraphs: [
          "The 2.0 TDI engine fitted across multiple generations of the Audi A3 has a known history of head gasket issues   particularly on vehicles that have experienced overheating or been run low on coolant. White exhaust smoke, a sweet smell from the engine bay, or coolant levels that keep dropping without visible leaks are all signs you shouldn't ignore.",
          "We carry out full Audi A3 head gasket replacements using OEM-grade gaskets and components, with pressure testing and leak-down checks completed after every job.",
          "Addressing a head gasket failure early keeps the repair manageable. Leave it, and you risk warping the cylinder head   which turns a repair into something considerably more serious.",
        ],
      },
      {
        title: "Audi A3 Timing Chain & Timing Belt Replacement UK",
        paragraphs: [
          "The 1.8 TFSI engine in the Audi A3   particularly the EA888 Gen 1 and Gen 2 variants   is well known for timing chain stretch and tensioner failure. The symptoms start subtly: a faint rattling on cold start, a slight hesitation on acceleration. By the time the chain jumps or snaps, the internal damage can be extensive and immediate.",
          "We replace Audi A3 timing chains as a complete system   chain, tensioners, guides, and camshaft sprockets   every single time. We never replace just the chain and leave worn tensioners in place.",
          "For earlier A3 models and certain diesel variants that use a cambelt rather than a chain, we carry out full Audi A3 timing belt replacements using quality belt kits, always including the water pump and idler pulleys where the manufacturer specifies.",
        ],
      },
      {
        title: "Audi A3 Turbo Replacement UK",
        paragraphs: [
          "Turbocharger problems are among the most common issues we see on the Audi A3, particularly on the 2.0 TDI and 1.8 TFSI engines. A loss of power under load, blue or black smoke, or an audible whine from the engine bay all suggest the turbo is on its way out.",
          "We source quality replacement turbos for all Audi A3 engine variants   not cheap, unverified units of uncertain origin   and fit them to manufacturer specifications.",
          "Every installation is followed by post-fit testing to confirm correct boost pressure, oil feed, and seal integrity before the car goes anywhere near the road.",
        ],
      },
      {
        title: "Audi A3 Engine Rebuild, Repair, Replacement & Swap UK",
        paragraphs: [
          "Different problems call for different solutions. We assess each A3 individually and recommend the most appropriate course of action   not the most profitable one.",
          "Audi A3 Engine Repair   Our diagnostic team uses current dealer-level equipment to identify the precise root cause of your fault. Misfires, oil leaks, bearing noise, sensor failures, valve damage   we handle every level of Audi A3 engine repair and only recommend work that's genuinely necessary.",
          "Audi A3 Engine Rebuild   A full Audi A3 engine rebuild involves a complete strip-down, detailed inspection and measurement of every internal component, replacement of anything outside factory tolerance, and full reassembly to OEM specification. For high-mileage A3 engines or those with significant internal wear, a rebuild is almost always more cost-effective than a replacement   and gives you a mechanically fresh unit with a warranty behind it.",
          "Audi A3 Engine Replacement   Where a replacement makes more practical sense, we supply and fit quality used and reconditioned Audi A3 engines sourced from verified UK suppliers. Every unit is inspected and tested prior to installation   we never fit an engine blind.",
          "Audi A3 Engine Swap   Fitting a later engine variant, upgrading from a diesel to a petrol unit, or carrying out an engine change on an A3 Convertible or Sportback? Our full engine swap service covers mountings, ancillaries, ECU remapping, and thorough post-swap diagnostics   handled completely in-house.",
        ],
      },
      {
        title: "UK-Wide Service, Fast Turnarounds & Full Warranty Cover",
        paragraphs: [
          "We know how disruptive it is to be without your car   especially when the A3 is your daily transport. We work efficiently, communicate clearly, and never sacrifice quality for speed.",
        ],
      },
      {
        title: "Audi A3 Engine Collection & Delivery Across the UK",
        paragraphs: [
          "Not within reach of ? No problem at all. We operate a fully managed engine collection and delivery service covering the entire UK.",
          "Send your unit to us and we'll return it rebuilt, bench-tested, and ready to fit   or connect you with one of our approved installation partners closer to home.",
        ],
      },
      {
        title: "Turnaround Times We Actually Stick To",
        paragraphs: [
          "Most targeted engine repairs on the Audi A3 are completed within 2–5 working days. Full rebuilds typically take 5–10 working days depending on parts and the extent of internal wear.",
          "We give you a realistic timeframe when you book and keep you updated throughout   because you deserve to know where things stand.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Every engine rebuild, repair, and replacement carried out at Vogue Technics is backed by a written warranty. We stand behind our work completely   because the standard we build to gives us every reason to.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Had a timing chain failure on my 1.8 TFSI at 74,000 miles. Vogue Technics diagnosed it same day, explained everything clearly, and had it back to me within a week running perfectly. Exceptional service.",
        by: "  Andrew C., London",
      },
      {
        quote:
          "My 2.0 TDI had a blown head gasket. Two local garages quoted me over £1,400. Vogue Technics did it properly, for less, with a warranty. I won't go anywhere else for Audi work now.",
        by: "  Lisa M., Chelmsford",
      },
      {
        quote:
          "Sent my A3 Saloon engine up from Cardiff for a full rebuild. Communication was brilliant from start to finish, it came back ahead of schedule, and the car pulls like it did when it was new. Outstanding.",
        by: "  Gareth H., Cardiff",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A3 engine rebuild cost in the UK?",
        answer:
          "The cost depends on your specific engine variant and the extent of internal wear. As a general guide, a full rebuild on a 2.0 TDI or 1.8 TFSI typically starts from around £1,900–£3,400. Contact us for an accurate, no-obligation quote based on your exact vehicle and fault.",
      },
      {
        question: "What are common Audi A3 engine problems?",
        answer:
          "The most frequently reported issues include timing chain stretch on 1.8 TFSI models, head gasket failure on 2.0 TDI variants, turbocharger deterioration on higher-mileage cars, and engine misfires related to injector or ignition coil faults. Early diagnosis is always the most cost-effective route.",
      },
      {
        question: "Is a full Audi A3 engine rebuild worth the cost?",
        answer:
          "In most cases, yes   particularly when the rest of the vehicle is in sound condition. A properly executed rebuild gives you a mechanically fresh engine with a warranty, at considerably less than the cost of sourcing a replacement vehicle at this level.",
      },
      {
        question: "Do you carry out Audi A3 pre-sale engine inspections?",
        answer:
          "Yes. Our Audi A3 engine diagnostic check service covers full compression testing, oil condition analysis, dealer-level diagnostic scanning, and a thorough visual inspection. You'll receive an honest written report   ideal before purchasing a used A3 or preparing your own vehicle for sale.",
      },
      {
        question: "Do you work on all Audi A3 body styles?",
        answer:
          "Absolutely. We work on the Audi A3 Hatchback, Sportback, Saloon, Limousine, and Convertible across all generations and engine codes.",
      },
      {
        question: "Do you cover the whole of the UK?",
        answer:
          "Yes. We're based in , but we serve Audi A3 owners across the entire United Kingdom through our collection and delivery service and our nationwide approved installer network.",
      },
    ],
  },
  "audi-a4-engines": {
    metaTitle: "Audi A4 Engine Rebuild   Complete Engine Services for Every A4 Variant Across the UK",
    metaDescription:
      "Audi A4 engine rebuild, repair and replacement specialists . Timing chain/belt, turbo and warranty-backed services for Saloon, Avant, Allroad and Cabriolet with UK-wide support.",
    h1: "Audi A4 Engine Rebuild   Complete Engine Services for Every A4 Variant Across the UK",
    intro: [
      "There's a particular kind of dread that comes with an Audi A4 that won't start properly, rattles on cold mornings, or suddenly loses power on the motorway. You know something serious is wrong   and you know that getting it wrong from here could cost you significantly more than getting it right.",
      "At Vogue Technics, based in , we work on Audi and Volkswagen Group engines every single day. The A4, across every generation and body style   Saloon, Avant, Allroad, and Cabriolet   is a vehicle we understand at a level most workshops simply don't reach.",
      "Whether your A4 is running a 2.0 TDI, a 2.0 TFSI, a 1.8 TFSI, or any other engine variant across the B6, B7, B8, or B9 generation, we have the tooling, the technical knowledge, and the 25 years of hands-on experience to diagnose it accurately and fix it properly. No guesswork. No unnecessary work. Just honest, specialist engine care   done right the first time.",
    ],
    sections: [
      {
        title: "Why Audi A4 Owners Across the UK Choose Vogue Technics",
        paragraphs: [
          "The Audi A4 is a sophisticated piece of German engineering. Its engines are precise, complex, and remarkably capable   but they demand an equally precise approach when something goes wrong.",
          "Taking your A4 to a general repair shop is a gamble that rarely pays off. Taking it to us is a different conversation entirely.",
        ],
      },
      {
        title: "Audi and VW Group Specialists   That's All We Do",
        paragraphs: [
          "Every member of our technical team at Vogue Technics works exclusively on Audi and Volkswagen Group platforms. We know the B8 timing chain rattle that affects the 2.0 TFSI intimately.",
          "We've replaced more 2.0 TDI turbos than most garages have seen. We understand the head gasket vulnerabilities specific to the TFSI engine family and the cambelt intervals that the 2.0 TDI absolutely cannot afford to miss.",
          "That depth of model-specific knowledge is what separates a proper repair from an expensive temporary fix.",
        ],
      },
      {
        title: "Over 25 Years of Engine Work Behind Every Job",
        paragraphs: [
          "Vogue Technics has been rebuilding, repairing, and replacing Audi engines since before the B7 A4 even existed. Our reputation across , and the wider UK has grown steadily through word of mouth.",
        ],
      },
      {
        title: "Clear, Itemised Quotes   Before Any Work Begins",
        paragraphs: [
          "Every customer receives a detailed, itemised quote before we touch their vehicle   covering exactly what needs doing, what parts are required, and what the total cost will be. No ambiguous estimates. No figures that shift once the job is underway.",
        ],
      },
      {
        title: "Audi A4 Engine Services   Every Fault Diagnosed and Fixed Under One Roof",
        paragraphs: [
          "We offer a complete range of Audi A4 engine services at our  workshop, covering everything from targeted single-component repairs through to full ground-up engine rebuilds.",
        ],
      },
      {
        title: "Audi A4 Head Gasket Replacement UK",
        paragraphs: [
          "The 2.0 TFSI engine fitted across the B7 and B8 Audi A4 has a documented history of head gasket failure   a fault that tends to develop gradually before becoming seriously damaging if left unaddressed. Coolant loss without visible leaks, white smoke from the exhaust on startup, or an engine that runs hotter than it should are all warning signs that deserve immediate attention.",
          "We carry out full Audi A4 head gasket replacements using OEM-grade gaskets and sealing components, with thorough pressure and leak-down testing completed after every installation.",
        ],
      },
      {
        title: "Audi A4 Timing Chain & Timing Belt Replacement UK",
        paragraphs: [
          "The B8 generation Audi A4, particularly those fitted with the 2.0 TFSI engine, is well known for developing a timing chain rattle on cold starts   a symptom of a stretched chain and failing tensioners that worsens progressively with mileage.",
          "A timing chain that jumps or snaps causes immediate and often irreparable internal engine damage. We replace Audi A4 timing chains as a complete system every time   chain, tensioners, guides, and sprockets together.",
          "For A4 variants running a cambelt rather than a chain   including the 2.0 TDI across multiple generations   we carry out full Audi A4 cambelt replacements using quality belt kits that include the water pump and idler pulleys where applicable.",
        ],
      },
      {
        title: "Audi A4 Turbo Replacement UK",
        paragraphs: [
          "Turbocharger failure on the Audi A4 2.0 TDI is something we see with regularity. Reduced acceleration, excessive smoke, oil consumption, or an audible whine under load are all indicators that your turbo needs professional attention.",
          "We source quality replacement turbos for all Audi A4 engine variants and fit them to manufacturer specifications. Post-installation testing confirms correct boost delivery, oil feed integrity, and seal performance before your A4 goes anywhere near public roads.",
        ],
      },
      {
        title: "Audi A4 Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Not every fault requires the same solution. We assess each Audi A4 individually and recommend the most appropriate course of action based on the fault, the mileage, and what makes the most financial sense for the owner   not for us.",
          "Audi A4 Engine Repair   We diagnose the precise root cause of your engine management fault, misfire, oil leak, or mechanical noise and carry out targeted repairs   and we only recommend work that's genuinely necessary.",
          "Audi A4 Engine Rebuild   We strip the engine completely, measure every internal component against factory specification, replace everything that falls outside tolerance, and reassemble to OEM standard. The result is a mechanically fresh engine with a warranty, delivered at a fraction of the cost of a factory replacement unit.",
          "Audi A4 Engine Replacement   We supply and fit quality used and reconditioned Audi A4 engines sourced from verified UK suppliers. Every unit is inspected and tested before installation   we never fit an engine without knowing what condition it's .",
          "Audi A4 Engine Swap & Conversion   Mountings, ancillaries, ECU remapping, and full post-swap diagnostics are handled in-house at our  workshop.",
        ],
      },
      {
        title: "Fast UK-Wide Service, Honest Turnarounds & Full Written Warranty",
        paragraphs: [
          "Targeted engine repairs on the Audi A4 are typically completed within 2–5 working days. Full engine rebuilds take 5–10 working days depending on parts availability and the extent of internal wear discovered during strip-down.",
          "We operate a fully managed engine collection and delivery service across the UK and provide written warranty on major engine work.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "My B8 A4 Avant had the classic 2.0 TFSI timing chain rattle. Vogue Technics diagnosed it immediately, replaced the full chain kit, and had it back to me within the week. Not a whisper from the engine since. Brilliant work.",
        by: "  Jonathan R., London",
      },
      {
        quote:
          "Two main dealers quoted me over £4,500 for an engine replacement on my 2.0 TDI. Vogue Technics did a full rebuild for considerably less and gave me a written warranty. I wish I'd found them sooner.",
        by: "  Claire H., Norwich",
      },
      {
        quote:
          "I'm based in Glasgow and sent my A4 Allroad engine down after a turbo failure caused further damage. Communication throughout was excellent, the turnaround was faster than expected, and the engine runs better than it ever did. Genuinely outstanding.",
        by: "  Fraser M., Glasgow",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A4 engine rebuild cost in the UK?",
        answer:
          "Costs vary based on engine variant and the extent of internal wear found during strip-down. As a general guide, a full rebuild on a 2.0 TDI or 2.0 TFSI typically starts from around £2,000–£3,800. Contact us directly for an accurate, no-obligation quote tailored to your specific vehicle, engine code, and fault.",
      },
      {
        question: "What are common Audi A4 engine problems?",
        answer:
          "The most frequently reported issues include timing chain stretch and rattle on B8 2.0 TFSI models, head gasket failure on TFSI variants, turbocharger deterioration on 2.0 TDI engines, cambelt-related failures where service history is unclear, and engine management faults across multiple generations.",
      },
      {
        question: "Is an Audi A4 engine rebuild worth it in the UK?",
        answer:
          "In the vast majority of cases, yes   particularly for vehicles in otherwise sound condition. A professionally executed rebuild gives you a mechanically fresh engine with a warranty behind it, at significantly less than the cost of a replacement vehicle at this level.",
      },
      {
        question: "Do you carry out Audi A4 engine inspections?",
        answer:
          "Yes. Our Audi A4 engine health check service covers full compression testing, oil condition analysis, dealer-level diagnostic scanning, and a detailed visual inspection of accessible engine components. You'll receive a written report with clear, honest recommendations.",
      },
      {
        question: "How long does an Audi A4 engine rebuild take?",
        answer:
          "Most full rebuilds are completed within 5–10 working days. Targeted repairs are typically faster at 2–5 working days. We confirm your exact timeframe at the point of booking and keep you updated throughout.",
      },
      {
        question: "Do you cover the whole of the UK?",
        answer:
          "Absolutely. We're based in , but we serve Audi A4 owners right across the United Kingdom through our engine collection and delivery service and our nationwide network of approved fitting partners.",
      },
    ],
  },
  "audi-a4-allroad-engines": {
    metaTitle: "Audi A4 Allroad Engine Repairs, Rebuilds & Replacements   Expert Service in ",
    metaDescription:
      "Audi A4 Allroad engine specialists . Diagnostics, repairs, rebuilds and replacements for 2.0 TFSI and 2.0 TDI variants with UK-wide support and written warranty.",
    h1: "Audi A4 Allroad Engine Repairs, Rebuilds & Replacements   Expert Service in ",
    intro: [
      "The Audi A4 Allroad is a genuinely accomplished machine   refined, capable, and built to last. But even the most well-engineered cars develop engine problems over time, and when they do, where you take it matters enormously. A generic garage with no Audi experience can turn a manageable fault into a catastrophic one.",
      "At Vogue Technics, based in , we've spent over 25 years working on premium European engines. The Audi A4 Allroad's 2.0 TFSI petrol and 2.0 TDI diesel units are engines we know thoroughly   their common failure points, their rebuild requirements, and exactly what it takes to restore them properly. Whether you need a cambelt replacement, a blown head gasket sorted, or a complete engine rebuild, we deliver work that holds up.",
    ],
    sections: [
      {
        title: "Why Audi A4 Allroad Owners Trust Vogue Technics",
        paragraphs: [
          "There's no shortage of garages in the UK claiming to handle Audi engines. The difference at Vogue Technics is depth of experience and a genuine focus on premium engine work   not a one-size-fits-all approach.",
          "We've been working on premium European engines since before most modern diagnostic tools existed. That kind of hands-on experience matters when you're dealing with an Audi A4 Allroad   a vehicle whose 2.0 TFSI and 2.0 TDI engines have well-documented fault patterns that only emerge with real-world familiarity.",
          "We never recommend work without understanding the problem first. Every Audi A4 Allroad that comes through our doors in  gets a thorough diagnostic assessment before we quote or touch anything.",
          "Engine work on a premium vehicle can feel financially daunting. We eliminate that anxiety with itemised, upfront quotes before any work begins. No vague ballpark figures, no bill that's doubled by the time you collect.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "The 2.0 TFSI engine in the Audi A4 Allroad has a well-known susceptibility to head gasket failure, particularly on higher-mileage examples. Coolant loss, white exhaust smoke, overheating, or a sweet smell from the engine bay are all warning signs you shouldn't ignore.",
          "We replace head gaskets using OEM-specification components, machine the cylinder head surface where necessary, and carry out a full cooling system inspection as part of the process. Addressing it promptly protects the rest of the engine from far more expensive damage.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain rattle on a cold start is one of the most frequently reported complaints from Audi A4 B8 owners, and it's a fault that worsens quickly if left unaddressed.",
          "A stretched or failed timing chain can cause immediate, severe internal damage. We replace the complete timing chain assembly   chain, tensioners, guides, and sprockets   as a full kit. Replacing only the chain whilst leaving worn tensioners in place is a shortcut we simply don't take.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "The 2.0 TDI engine fitted to the A4 Allroad relies heavily on its turbocharger for performance and fuel efficiency. Turbo failure typically presents as reduced power, excessive black or blue smoke, or an unusual whistling or grinding noise under load.",
          "We source quality replacement turbos for all A4 Allroad variants, fit them to manufacturer specification, and carry out full post-installation testing before the vehicle leaves our workshop.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When your Audi A4 Allroad engine has accumulated significant mileage or sustained internal wear, a full rebuild is frequently the most sensible long-term investment.",
          "We completely strip the engine, clean and measure every component, replace all worn parts   rings, bearings, seals, gaskets   and reassemble to factory tolerances. A properly rebuilt engine performs like new and costs a fraction of sourcing a replacement vehicle at this level.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Many Audi A4 Allroad engine faults don't require a full rebuild   they require accurate diagnosis and targeted repair. Oil leaks, valve cover gasket failures, engine management warning lights, sensor faults, bearing issues   our team identifies the root cause precisely and carries out the repair correctly.",
          "You pay for what's needed, nothing more.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "Where an engine has suffered catastrophic failure   a seized block, serious oil starvation damage, or multiple simultaneous failures   replacement is often the most cost-effective route.",
          "We supply and fit quality reconditioned or verified low-mileage used engines for the Audi A4 Allroad, sourced from trusted suppliers and individually tested before installation. Supply-only is available for customers with their own fitting arrangement.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Considering a different engine variant in your A4 Allroad shell, or upgrading to a higher-specification unit? Our engine swap service manages the entire process   compatibility checks, mount adaptation, ECU remapping considerations, ancillary connections, and full post-swap diagnostics.",
          "It's a complex job done properly, with no corners cut.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "The 2.0 TDI engines fitted across the A4 Allroad range use a timing belt rather than a chain   and replacement at the correct interval is absolutely non-negotiable. A snapped cambelt destroys the engine instantly, with no warning.",
          "We carry full cambelt kits for all applicable A4 Allroad configurations and recommend replacement at   or ideally slightly before   Audi's specified intervals, particularly if the vehicle's service history is incomplete.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Buying a used Audi A4 Allroad and want to know exactly what you're getting? Or concerned about something you've noticed on your current car? Our engine health check covers compression testing, oil analysis, full diagnostic scanning, visual inspection of all ancillary components, and a check of the timing system condition.",
          "You'll receive a written report with clear, honest findings   no pressure, no upselling, just the facts.",
        ],
      },
      {
        title: "Fast UK-Wide Service & Engine Delivery From ",
        paragraphs: [
          "We understand that being without your Audi A4 Allroad   whether it's your daily commuter or your weekend escape   is genuinely disruptive. We work efficiently, communicate clearly, and deliver within the timeframes we agree.",
          "Not within reach of our  workshop? We offer a managed engine collection and return service covering the whole of the UK. Send us your unit, we carry out the rebuild, repair, or replacement, test everything thoroughly, and return it ready to fit   or we can connect you with our approved installer network for fitting closer to home.",
        ],
      },
      {
        title: "Written Warranty on All Engine Work",
        paragraphs: [
          "Every rebuild, replacement, and major repair at Vogue Technics is backed by a written warranty. We're confident enough in the quality of our work to put it in writing. Ask us for full terms when you enquire.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics sorted a blown head gasket on my Audi A4 Allroad 2.0 TFSI. Diagnosis was spot-on, price was fair, and the car has been completely solid since. First-class service.",
        by: "  Stephen A., ",
      },
      {
        quote:
          "Had a timing chain rattle developing on my A4. Vogue Technics replaced the full kit and gave me a clear explanation of what they'd found. Honest, professional, and reasonably priced. Wouldn't go anywhere else.",
        by: "  Claire F., Kent",
      },
      {
        quote:
          "Sent my engine down from Newcastle for a full rebuild. Came back beautifully done, well packaged, and within the timeframe they quoted. Really impressive operation.",
        by: "  Tom W., Newcastle",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A4 Allroad engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the engine variant and the extent of internal wear. A full rebuild on a 2.0 TDI or 2.0 TFSI typically starts from around £1,800–£3,500. Contact Vogue Technics for a detailed, no-obligation quote based on your specific vehicle and fault.",
      },
      {
        question: "What are common engine problems on the A4 Allroad?",
        answer:
          "The 2.0 TFSI is particularly susceptible to head gasket failure and timing chain wear. The 2.0 TDI is known for turbocharger issues and cambelt-related failures on vehicles with incomplete service histories. Early diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Do you supply engines supply-only?",
        answer:
          "Yes. Supply-only of reconditioned and verified used engines is available with written warranty paperwork.",
      },
      {
        question: "How long does a replacement take?",
        answer:
          "A straightforward replacement is typically 3–5 working days. Rebuilds are usually 5–10 working days depending on scope and parts.",
      },
      {
        question: "Do you work on both the TFSI petrol and TDI diesel versions of the A4 Allroad?",
        answer:
          "Yes. We carry out engine work across all Audi A4 Allroad engine variants   including the 2.0 TFSI petrol and the 2.0 TDI diesel in all its output configurations. If you're unsure which engine your vehicle has, our team can identify it from your registration number.",
      },
      {
        question: "Is there a warranty on Audi A4 Allroad engine work at Vogue Technics?",
        answer:
          "Yes. Every engine rebuild, replacement, and major repair we carry out comes with a written warranty. Full terms are confirmed at the point of booking.",
      },
    ],
  },
  "audi-a5-engines": {
    metaTitle: "Audi A5 Engine Rebuild, Repair & Replacement   Trusted Specialists in ",
    metaDescription:
      "Audi A5 engine rebuild, repair and replacement specialists . Timing chain/belt, turbo and warranty-backed services for Coupe, Sportback and Cabriolet variants with UK-wide support.",
    h1: "Audi A5 Engine Rebuild, Repair & Replacement   Trusted Specialists in ",
    intro: [
      "The Audi A5 is a car that earns genuine loyalty. Whether you drive the Coupe, Sportback, Cabriolet, or Convertible, it delivers a blend of style, performance, and everyday usability that's hard to match at the price.",
      "So when the engine starts causing problems   oil consumption creeping up, a timing chain rattle on cold start, a turbo losing boost   the last thing you want is a garage that treats it like any other job.",
      "At Vogue Technics, based in , we specialise in premium engine work across all Audi A5 variants and generations. From the B8's well-documented TFSI issues to the 3.0 TDI timing chain problems on higher-mileage examples, we've worked through every known fault pattern this engine family produces.",
    ],
    sections: [
      {
        title: "Why Audi A5 Owners Choose Vogue Technics",
        paragraphs: [
          "There's no shortage of garages willing to quote on an Audi engine job. The difference is whether they truly understand what they're working on   or whether they're learning on your car.",
          "We've been working on performance and premium engines for over 25 years. The Audi A5's engine family spans the 1.8 TFSI, 2.0 TFSI, 2.7 TDI, 3.0 TDI, and the high-performance RS5 4.2 V8   each with its own characteristics and fault patterns. We know them all.",
          "We never quote blind. Every Audi A5 that arrives at our  workshop receives a thorough diagnostic assessment before we recommend a single penny of work. Compression testing, oil analysis, fault code scanning, timing system inspection   we build a complete picture first.",
          "Every quote we issue is itemised, upfront, and fixed unless something unexpected emerges during the work   in which case we call you immediately.",
        ],
      },
      {
        title: "Our Full Range of Audi A5 Engine Services",
        paragraphs: [
          "We cover every level of engine work for the Audi A5 across all body styles and generations. Whatever fault you're facing, we have the expertise and the equipment to resolve it correctly.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure is one of the more serious   and unfortunately not uncommon   issues on the Audi A5 2.0 TFSI engine. Overheating, white exhaust smoke, coolant disappearing without an obvious external leak, or a sweet smell from the engine bay are all warning signs that shouldn't be ignored.",
          "We replace head gaskets using OEM-specification components, machine the cylinder head surface where required, and carry out a full cooling system pressure test once the work is complete.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "On the B8-generation A5, timing chain wear   particularly on the 2.0 TFSI   is one of the most frequently reported faults. A rattling noise during cold starts is the classic early warning.",
          "We replace the complete timing chain assembly   chain, tensioners, guides, and sprockets   as a full kit. Replacing just the chain and leaving worn tensioners in place is a false economy.",
          "The 3.0 TDI fitted to higher-specification A5 models has its own timing chain vulnerabilities at higher mileages. We carry kits for all applicable A5 engine variants and recommend proactive replacement where wear is detected.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Turbocharger failure on the Audi A5   particularly the 2.0 TDI and 3.0 TDI variants   typically presents as reduced power output, excessive smoke on acceleration, or an audible whine or surge under load.",
          "We source quality replacement turbos for all A5 engine configurations, fit them to manufacturer specification, and carry out thorough post-installation testing before the vehicle leaves our workshop.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "A full engine rebuild is the definitive solution for an Audi A5 with high mileage, significant internal wear, or oil consumption that's become unmanageable.",
          "We completely strip the engine, clean and measure every component, replace all worn parts, and reassemble to factory tolerances. The result is an engine that performs like new, backed by our written warranty.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Not every A5 engine problem demands a full rebuild. Excessive oil consumption on the 2.0 TFSI is frequently resolved through targeted piston ring replacement rather than a complete overhaul.",
          "Oil leaks from valve cover gaskets, cam chain tensioner seals, or the rear main seal are common and addressable without major dismantling. Our diagnostics identify precisely what's needed   and you pay only for that.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When an A5 engine has suffered catastrophic failure   a seized block, spun bearings, or damage beyond cost-effective repair   replacement is the practical solution.",
          "We supply and fit quality reconditioned or verified low-mileage used engines for the Audi A5, sourced from trusted suppliers and individually tested before installation. Supply-only is also available. All supplied engines come with a written warranty.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Considering a different engine variant in your A5   upgrading from a 1.8 TFSI to a 2.0, or fitting a higher-output TDI into your Sportback or Cabriolet? Our engine swap service handles the full process   compatibility verification, ECU considerations, mount adaptation, ancillary connections, and comprehensive post-swap diagnostics.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Several Audi A5 variants   including the 2.7 TDI and certain 3.0 TDI configurations   use a timing belt rather than a chain. A snapped cambelt destroys the engine instantaneously.",
          "We carry full cambelt kits for all applicable A5 engine variants and strongly recommend replacement at or before Audi's specified intervals   particularly if service history is incomplete or unknown.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Thinking of buying a used Audi A5 and want to know exactly what you're taking on? Our pre-purchase and general engine health check covers compression testing, oil analysis, fault code scanning, timing system assessment, and a thorough visual inspection of ancillaries.",
          "You'll receive a written report with clear findings   honest recommendations, no upselling, no pressure.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Engine Service From ",
        paragraphs: [
          "Not within reach of our  workshop? We offer a fully managed engine collection and return service covering the entire UK.",
          "Most Audi A5 engine repairs are completed within 3–7 working days. Full rebuilds typically take 5–10 working days depending on the specific parts required. We confirm your timeframe at booking and we stick to it.",
          "Every engine rebuild, replacement, and major repair carried out at Vogue Technics comes with a written warranty.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Had a serious oil consumption issue on my Audi A5 2.0 TFSI Sportback. Vogue Technics diagnosed it accurately, carried out a targeted repair rather than pushing for a full rebuild, and the car has been completely solid since. Refreshingly honest.",
        by: "  Marcus D., ",
      },
      {
        quote:
          "Timing chain went on my B8 A5 Coupe at 74,000 miles. Vogue Technics replaced the full kit, explained everything clearly, and came in well under what a main dealer quoted. Excellent work.",
        by: "  Joanne K., Surrey",
      },
      {
        quote:
          "Sent my A5 Cabriolet engine down from Edinburgh for a full rebuild. It came back perfectly, well packaged, ahead of schedule, and has been running flawlessly for eight months. Genuinely impressive.",
        by: "  Alistair M., Edinburgh",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A5 engine rebuild cost in the UK?",
        answer:
          "The cost depends on the engine variant and the extent of internal wear. A full rebuild on a 2.0 TFSI or 2.0 TDI typically starts from around £1,800–£3,200. The 3.0 TDI and RS5 4.2 V8 will cost more due to complexity and parts. Contact Vogue Technics for a detailed, no-obligation quote based on your specific vehicle.",
      },
      {
        question: "What are common engine problems on the Audi A5?",
        answer:
          "The 2.0 TFSI is particularly prone to oil consumption, timing chain wear, and head gasket failure on B8 examples. The 2.0 TDI and 3.0 TDI are susceptible to turbocharger failure and timing chain issues at higher mileages. The 2.7 TDI has known cambelt-related vulnerabilities. Early diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Do you work on all A5 body styles?",
        answer:
          "Yes. We carry out engine work across all A5 variants   Coupe, Sportback, Cabriolet, and Convertible   and across multiple generations. All engine variants are covered, from the 1.8 TFSI through to the RS5.",
      },
      {
        question: "Can you supply and fit the engine?",
        answer:
          "Absolutely. We offer a complete supply and fit service at our  workshop. For customers elsewhere in the UK, we can arrange fitting through our approved installer network.",
      },
      {
        question: "Do you provide written warranty?",
        answer:
          "Yes. Every rebuild, replacement, and major repair at Vogue Technics comes with a written warranty. Terms are confirmed clearly at the point of booking.",
      },
    ],
  },
  "audi-a5-convertible-engines": {
    metaTitle: "Audi A5 Convertible Engine Rebuild, Repair & Replacement   Expert Service in ",
    metaDescription:
      "Audi A5 Convertible (Cabriolet) engine specialists . Repairs, rebuilds, replacements, timing chain/belt and turbo work with UK-wide support and written warranty.",
    h1: "Audi A5 Convertible Engine Rebuild, Repair & Replacement   Expert Service in ",
    intro: [
      "The Audi A5 Cabriolet is a genuinely special car. Open-top motoring with Audi's trademark refinement, a beautifully finished interior, and an engine range that delivers real driving pleasure   it's a vehicle people become attached to. Which is exactly why, when the engine develops a serious fault, the instinct is to fix it properly rather than walk away.",
      "At Vogue Technics, based in , we carry out expert engine work on the Audi A5 Convertible across all variants and generations. The 2.0 TFSI, 2.0 TDI, 2.7 TDI, and 3.0 TDI engines fitted to the A5 Cabriolet each have well-documented fault patterns   and we've worked through every single one of them over more than 25 years in the business. Whether you need a full engine rebuild, a targeted repair, a cambelt replacement, or a complete engine swap, we deliver work that holds up long after the car leaves our workshop.",
    ],
    sections: [
      {
        title: "Why Audi A5 Convertible Owners Choose Vogue Technics",
        paragraphs: [
          "Choosing the right specialist for an open-top Audi isn't just about finding someone who can do the job. It's about finding someone who genuinely understands the engine, communicates honestly, and stands behind what they deliver.",
          "We've been working on premium European engines for over a quarter of a century. That breadth of experience matters enormously when you're dealing with the A5 Cabriolet's engine family   a range that covers everything from the high-revving 2.0 TFSI petrol to the torque-rich 3.0 TDI diesel.",
          "We never recommend work without first understanding the full picture. Every Audi A5 Convertible that comes into our  workshop receives a comprehensive diagnostic assessment before we suggest a single pound of expenditure.",
          "Engine work on a premium convertible is a meaningful financial commitment. We respect that by providing fully itemised, upfront quotes before any work begins.",
        ],
      },
      {
        title: "Our Audi A5 Convertible Engine Services",
        paragraphs: [
          "We cover every level of engine work for the Audi A5 Cabriolet across all engine variants and model generations. Here is a full breakdown of what we offer:",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure on the Audi A5 2.0 TFSI is one of the more frequently encountered   and more consequential   faults on this engine family.",
          "We replace head gaskets using OEM-specification components, surface the cylinder head where necessary, and carry out a full cooling system pressure test as part of the process. Catching and resolving this fault early prevents far more extensive damage.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain wear on the B8-generation A5 2.0 TFSI is a well-established and widely reported fault. A metallic rattle during cold starts is the characteristic early warning sign.",
          "We replace the complete timing chain assembly as a full kit   chain, tensioners, guides, and sprockets   every time. We don't offer half-measures.",
          "For higher-mileage A5 Cabriolets fitted with the 3.0 TDI, timing chain wear is also a known concern. We carry full replacement kits for all applicable variants.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Turbocharger faults on the A5 Convertible   particularly across the TDI diesel range   typically present as a noticeable reduction in power, black or blue smoke under acceleration, or an unusual whistling, surging, or grinding noise when the turbo spools under load.",
          "We source quality replacement turbos, fit them to manufacturer specification, and carry out comprehensive post-installation testing before the vehicle is returned.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "A full engine rebuild is the definitive long-term solution for an Audi A5 Convertible engine that has accumulated serious mileage, developed significant internal wear, or suffered from sustained oil consumption that targeted repairs haven't resolved.",
          "We completely strip the engine, clean and measure every internal component, replace all worn parts, and reassemble to factory tolerances. Every rebuilt engine is tested before fitting or despatch and is backed by written warranty.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Many Audi A5 Convertible engine faults are entirely resolvable without a complete rebuild. Excessive oil consumption on the 2.0 TFSI is frequently addressed through targeted piston ring replacement rather than a full overhaul.",
          "Oil leaks from valve cover gaskets, cam chain tensioner seals, and the rear main seal are common and fixable without major dismantling. Engine management warning lights and sensor failures are diagnosed precisely so you pay only for what the car actually needs.",
        ],
      },
      {
        title: "Engine Replacement",
       paragraphs: [
          "When an A5 Cabriolet engine has suffered catastrophic damage   a seized block, spun bearings, serious oil starvation   replacement is often the most practical and cost-effective route forward.",
          "We supply and fit quality reconditioned or verified low-mileage used engines for all A5 Convertible variants, individually tested before installation and sourced from suppliers we trust. Supply-only is also available. All supplied engines carry a written warranty.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Thinking about upgrading the engine specification in your A5 Cabriolet   perhaps fitting a higher-output variant or switching between petrol and diesel? Our engine swap service manages compatibility, ECU considerations, mount adaptation, ancillaries, and full post-swap diagnostics.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Several Audi A5 Cabriolet engine variants   including the 2.7 TDI and certain 3.0 TDI configurations   use a timing belt rather than a timing chain. This is non-negotiable maintenance. A snapped cambelt destroys the engine immediately.",
          "We carry full cambelt kits and strongly recommend replacement at   or ideally slightly before   Audi's specified intervals, particularly if service history is incomplete.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering buying a used Audi A5 Cabriolet and want an independent, professional assessment? Our engine health check covers compression testing, oil condition analysis, diagnostic scanning, timing system assessment, turbo inspection where applicable, and a visual check of ancillaries.",
          "You'll receive a clear written report with honest findings and straightforward recommendations   no upselling, no pressure.",
        ],
      },
      {
        title: "Fast UK-Wide Service & Engine Delivery From ",
        paragraphs: [
          "Not within driving distance of our  workshop? We offer a fully managed engine collection and return service covering the entire UK.",
          "Most Audi A5 Convertible engine repairs are completed within 3–7 working days. Full rebuilds typically take 5–10 working days depending on parts and scope. We confirm your timeframe at booking   and we keep to it.",
          "Every engine rebuild, replacement, and major repair at Vogue Technics is backed by a written warranty.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "The 2.0 TFSI in my A5 Cabriolet developed serious oil consumption at around 70,000 miles. Vogue Technics diagnosed it accurately, carried out a targeted rebuild, and the car has used no measurable oil in the six months since. Brilliant service.",
        by: "  Rachel B., ",
      },
      {
        quote:
          "Had a timing chain fault develop on my B8 A5 Convertible. Vogue Technics replaced the full kit, kept me updated throughout, and delivered it back on time. Their pricing was also considerably better than the main dealer quote I received.",
        by: "  Nathan C., Kent",
      },
      {
        quote:
          "Sent my Cabriolet engine down from Cardiff for a full rebuild. It came back immaculately prepared, perfectly packaged, and ahead of the timeframe I was given. The car drives beautifully. Highly recommended.",
        by: "  Gareth P., Cardiff",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A5 Convertible engine rebuild cost in the UK?",
        answer:
          "The cost depends on the engine variant and the extent of internal wear. A full rebuild on a 2.0 TFSI or 2.0 TDI typically starts from around £1,800–£3,200. The 2.7 TDI and 3.0 TDI variants will vary in cost depending on parts availability and the scope of work required. Contact Vogue Technics for a detailed, no-obligation quote specific to your vehicle.",
      },
      {
        question: "What are common A5 Cabriolet engine problems?",
        answer:
          "The 2.0 TFSI is particularly susceptible to timing chain wear, oil consumption, and head gasket failure on B8 examples. The 2.0 TDI and 3.0 TDI are known for turbocharger faults and timing-related issues at higher mileages. The 2.7 TDI has well-documented cambelt vulnerabilities. Early, accurate diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Do you work on petrol and diesel variants?",
        answer:
          "Yes. We work across all A5 Convertible petrol and diesel engines across B8/B9 generations.",
      },
      {
        question: "Do you offer UK-wide collection and return?",
        answer:
          "Yes. UK-wide collection/delivery is available if you’re not local to .",
      },
      {
        question: "Do you provide written warranty?",
        answer:
          "Yes. Major engine work is warranty-backed with written terms agreed before work begins.",
      },
    ],
  },
  "audi-a6-engines": {
    metaTitle: "Audi A6 Engine Rebuild, Repair & Replacement   Trusted Specialists in ",
    metaDescription:
      "Audi A6 engine specialists . Diagnostics, repairs, rebuilds and replacements for Saloon, Avant and Allroad across generations with UK-wide support and written warranty.",
    h1: "Audi A6 Engine Rebuild, Repair & Replacement   Trusted Specialists in ",
    intro: [
      "The Audi A6 is one of the most capable executive cars on the road. Whether you drive the Saloon, the Avant estate, or the go-anywhere Allroad, it's a vehicle built to cover serious miles in genuine comfort   and most owners plan to keep it running for a long time.",
      "So when the engine develops a fault that a local garage can't properly diagnose, or a main dealer quotes a figure that makes your eyes water, the right specialist makes all the difference.",
      "At Vogue Technics, based in , we've been working on premium European engines for over 25 years. The Audi A6's engine family spans the 2.0 TDI, 3.0 TDI, 2.0 TFSI, 3.0 TFSI, and biturbo configurations across the C6, C7, and C8 generations   and it's a platform we know thoroughly.",
    ],
    sections: [
      {
        title: "Why Audi A6 Owners Trust Vogue Technics",
        paragraphs: [
          "Finding a specialist who genuinely understands the Audi A6 engine   rather than simply being willing to attempt the work   is what separates a lasting repair from one that brings you back with the same fault three months later.",
        ],
      },
      {
        title: "Deep Knowledge of Every A6 Engine Generation",
        paragraphs: [
          "We work across modern A6 generations and engine variants. The C7's well-documented timing chain rattle on the 3.0 TDI is something we've resolved repeatedly. The 2.0 TDI's cambelt vulnerabilities, the 3.0 TFSI's carbon build-up tendencies, and the biturbo diesel's turbocharger sensitivities aren't theoretical to us   they're jobs we carry out.",
        ],
      },
      {
        title: "Accurate Diagnostics, Targeted Recommendations",
        paragraphs: [
          "We carry out a full diagnostic assessment before recommending any work   compression testing, oil analysis, fault code scanning, and timing system inspection where appropriate.",
          "That means your quote is accurate, your repair is targeted, and you don't pay for work the car doesn't need.",
        ],
      },
      {
        title: "Our Audi A6 Engine Services",
        paragraphs: [
          "Head gasket replacement, timing chain replacement, timing belt (cambelt) replacement on belt-driven variants, turbo replacement, engine repairs, full rebuilds, verified replacements, engine swaps, and engine health checks   all delivered with diagnostic-first accuracy and OEM-quality parts.",
        ],
      },
      {
        title: "UK-Wide Engine Service & Written Warranty",
        paragraphs: [
          "Not local to ? We offer UK-wide collection and return, and can support fitting through trusted installers where helpful.",
          "Major engine work is supplied with a written warranty, with terms agreed clearly before work begins.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A6 engine rebuild cost in the UK?",
        answer:
          "Costs vary by engine variant and internal wear. A 2.0 TDI rebuild often starts around £1,800–£3,000, while 3.0 TDI/TFSI engines cost more due to complexity. Contact us for a quote.",
      },
      {
        question: "What are common engine problems on the Audi A6?",
        answer:
          "Common issues include timing chain rattle on some 3.0 TDI engines, cambelt risks on belt-driven variants, turbo problems on diesels, and carbon build-up/oil consumption on certain petrol engines.",
      },
      {
        question: "Do you work on A6 Saloon, Avant and Allroad?",
        answer:
          "Yes. We work across all A6 body styles and multiple generations.",
      },
      {
        question: "Do you offer UK-wide collection and delivery?",
        answer:
          "Yes. UK-wide collection/delivery and installer support is available.",
      },
      {
        question: "Do you provide written warranty?",
        answer:
          "Yes. Major engine work is covered by written warranty terms agreed up-front.",
      },
    ],
  },
  "audi-a6-allroad-engines": {
    metaTitle: "Audi A6 Allroad Engine Rebuild, Repair & Replacement   Specialists in ",
    metaDescription:
      "Audi A6 Allroad engine specialists . Repairs, rebuilds and replacements for 3.0 TDI, 2.0 TDI and other variants with UK-wide support and written warranty.",
    h1: "Audi A6 Allroad Engine Rebuild, Repair & Replacement   Specialists in ",
    intro: [
      "The Audi A6 Allroad occupies a unique space in the premium car market. It combines the practicality of a large estate with genuine off-road capability, quattro all-wheel drive, and a ride quality that long-distance drivers genuinely appreciate.",
      "Owners tend to cover serious mileage in these cars   and they tend to keep them. Which means that when the engine develops a significant fault, the instinct is almost always to fix it properly rather than replace the vehicle.",
      "At Vogue Technics, based in , we carry out expert engine work on the Audi A6 Allroad across all generations and engine variants. The 3.0 TDI CRTD, 3.0 TDI CLAA, 2.0 TDI, and 3.0 TFSI units fitted to the C6, C7, and C8 Allroad each have well-documented fault patterns   and we've worked through every one of them over more than 25 years in the business.",
    ],
    sections: [
      {
        title: "Why Audi A6 Allroad Owners Choose Vogue Technics",
        paragraphs: [
          "The A6 Allroad isn't a standard saloon. Its more demanding use profile   heavier loads, varied terrain, longer journeys   means the engine works harder and the consequences of poor repair work are felt sooner.",
          "Every Allroad we take on receives a proper diagnostic assessment before we recommend or quote for any work. That accuracy is what makes our repairs last and our pricing fair.",
          "Every quote is itemised and confirmed upfront, and major engine work is backed by written warranty.",
        ],
      },
      {
        title: "Our Audi A6 Allroad Engine Services",
        paragraphs: [
          "Head gasket replacement, timing chain replacement, timing belt (cambelt) replacement on belt-driven variants, turbo replacement, engine rebuild, engine repair, engine replacement, engine swap, and engine health checks   delivered with diagnostic-first accuracy.",
        ],
      },
      {
        title: "UK-Wide Collection & Fast Turnaround",
        paragraphs: [
          "We offer UK-wide engine collection and return and can connect you with approved installers where helpful. We confirm realistic turnaround times at booking and keep you updated throughout.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A6 Allroad engine rebuild cost in the UK?",
        answer:
          "Costs vary by engine variant and internal wear. A 2.0 TDI rebuild often starts around £1,800–£3,000; 3.0 TDI/TFSI engines can cost more. Contact us for a detailed quote.",
      },
      {
        question: "What are common A6 Allroad engine problems?",
        answer:
          "Common issues include timing chain wear on some 3.0 TDI engines, head gasket faults at higher mileage, turbo wear, and cambelt risks on belt-driven variants with incomplete service history.",
      },
      {
        question: "Do you work on all Allroad generations?",
        answer:
          "Yes. We work across multiple generations and the full range of Allroad engine variants.",
      },
      {
        question: "Do you offer UK-wide collection and delivery?",
        answer:
          "Yes. UK-wide collection/delivery is available.",
      },
      {
        question: "Do you provide written warranty?",
        answer:
          "Yes. Major engine work is warranty-backed with written terms agreed up-front.",
      },
    ],
  },
  "audi-a6-avant-engines": {
    metaTitle: "Audi A6 Avant Engine Rebuild, Repair & Replacement   Expert Service in ",
    metaDescription:
      "Audi A6 Avant engine rebuild, repair and replacement specialists . We work across C6/C7/C8 and 2.0 TDI, 3.0 TDI, 2.0 TFSI and 3.0 TFSI variants with thorough diagnostics, honest pricing and written warranty.",
    h1: "Audi A6 Avant Engine Rebuild, Repair & Replacement   Expert Service in ",
    intro: [
      "The Audi A6 Avant is a car built around real life. It carries families, covers motorway miles, tows trailers, and does it all with the kind of refinement that makes high-mileage ownership genuinely enjoyable. Avant owners tend to accumulate serious mileage   and they tend to keep their cars. So when the engine develops a significant fault, the calculation almost always comes out in favour of fixing it properly rather than starting again.",
      "At Vogue Technics, based in , we carry out expert engine work on the Audi A6 Avant across all generations and engine variants. The 2.0 TDI, 3.0 TDI, 2.0 TFSI, and 3.0 TFSI engines fitted to the C6, C7, and C8 Avant each have well-documented fault patterns   and we've worked through every one of them over more than 25 years in the business. Whether your Avant needs a full engine rebuild, a targeted repair, a timing chain replacement, or a complete engine swap, we deliver work that lasts.",
    ],
    sections: [
      {
        title: "Why Audi A6 Avant Owners Trust Vogue Technics",
        paragraphs: [
          "Choosing the right specialist for an Audi A6 Avant engine job isn't just about finding someone who'll take the booking. It's about finding someone whose diagnosis is accurate, whose work holds up, and who communicates honestly throughout the entire process.",
        ],
      },
      {
        title: "Hands-On Experience Across Every A6 Avant Generation",
        paragraphs: [
          "We've worked on C6, C7, and C8 A6 Avants for over 25 years   across every engine variant and every known fault pattern this platform produces. The C7 Avant's timing chain rattle on the 3.0 TDI is something we resolve regularly. The 2.0 TDI's cambelt vulnerabilities, the CLAB engine's known wear characteristics at higher mileages, the 3.0 TFSI's oil consumption tendencies   none of these are theoretical faults to us. They're jobs we carry out week in, week out, with the precision that comes from genuine repetition on the same platforms.",
        ],
      },
      {
        title: "Thorough Diagnosis Before Any Recommendation",
        paragraphs: [
          "We carry out a comprehensive diagnostic assessment on every Audi A6 Avant before we recommend or quote for any work. Compression testing, oil analysis, full fault code scanning, timing system inspection   we establish a complete and accurate picture of the engine's condition before any decision is made. That process is what makes our quotes reliable and our repairs targeted. You pay for what your car actually needs, not what a garage assumes it might need.",
        ],
      },
      {
        title: "Upfront Quotes, Fixed Pricing, No Exceptions",
        paragraphs: [
          "Avant owners covering high mileage deserve honest, professional pricing   not inflated figures because of the Audi badge, and not underquotes designed to secure the booking only to escalate later. Every quote we issue is fully itemised and confirmed before work begins. If something unexpected comes to light during the job, we contact you before proceeding. Simple, professional, and exactly what premium engine work should look like.",
        ],
      },
      {
        title: "Our Audi A6 Avant Engine Services",
        paragraphs: [
          "We offer a complete range of engine services for the Audi A6 Avant across all body variants and generations. Whatever the fault   from a persistent oil leak to a catastrophic internal failure   we have the expertise and the equipment to address it properly.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure on the Audi A6 Avant 3.0 TDI is a fault we encounter regularly, particularly on higher-mileage C6 and C7 examples where cooling system maintenance hasn't been consistent. Coolant disappearing without a visible external leak, white exhaust smoke on cold starts, recurring overheating, or a milky residue under the oil filler cap are the tell-tale signs. We replace head gaskets using OEM-specification components, machine the cylinder head where required, and carry out a full cooling system pressure test before signing the job off. Addressing this fault correctly and completely is what protects the block and surrounding components from far more expensive consequential damage.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain rattle on the C7-generation A6 Avant 3.0 TDI is one of the most widely reported and urgently searched faults on this platform. The metallic rattle during cold starts is the characteristic early warning   and it demands prompt action. A failed or overstretched timing chain causes catastrophic internal damage almost instantaneously once it lets go. We replace the complete timing chain assembly as a full kit every time   chain, tensioners, guides, and sprockets together. Replacing a chain whilst leaving worn tensioners in place is a false economy that simply recreates the same problem. We don't offer that option.",
          "The CLAB engine code, widely fitted across C7 A6 Avant variants, has its own specific timing system characteristics. We carry full replacement kits for all applicable A6 Avant engine configurations.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Turbocharger faults on the A6 Avant   most commonly across the TDI diesel range   typically present as a progressive loss of power under load, excessive smoke on acceleration, or an audible whine or surge from the turbo when it spools under pressure. We source quality replacement turbos for all A6 Avant engine variants, fit them to manufacturer specification, and inspect the oil feed and return lines as a standard part of every turbo replacement. Blocked or restricted oil supply is frequently the underlying cause of turbo failure   replacing the turbo without addressing it is a mistake that leads straight back to the same fault.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "A complete engine rebuild is the right long-term solution for an A6 Avant engine that has covered serious mileage, developed significant internal wear, or suffered from oil consumption that targeted repairs haven't permanently resolved. We strip the engine completely, clean and measure every internal component, replace all worn parts   pistons, rings, bearings, seals, and gaskets   and reassemble to factory tolerances. Every rebuilt engine is tested before fitting or despatch. The result is an engine that performs as it should, backed by our written warranty, at a cost that makes clear financial sense on a vehicle as practical and capable as the A6 Avant.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Many A6 Avant engine faults are entirely resolvable without a full rebuild   and accurate diagnosis is what determines which category you're dealing with. Oil leaks from valve cover gaskets, timing cover seals, and the rear main seal are common on higher-mileage Avants and perfectly manageable without major dismantling. Engine management warning lights, EGR faults, sensor failures, fuelling issues   our diagnostic process identifies the root cause precisely so the repair is targeted, the quote is fair, and the outcome is lasting. You pay for what's needed, and we explain every step clearly.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When an A6 Avant engine has suffered catastrophic failure   a seized block, spun bearings, or damage that makes rebuild impractical within a sensible budget   replacement is the practical solution. We supply and fit quality reconditioned or verified low-mileage used engines for all A6 Avant variants, individually tested before installation and sourced from suppliers we've worked with for years. Supply-only is available for customers with their own fitting arrangement. All supplied engines carry a written warranty as standard.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Looking to fit a different engine variant into your A6 Avant   upgrading to a higher-output TDI, or addressing a generation compatibility issue? Our engine swap service manages the complete process: compatibility assessment, ECU and software considerations, mount and ancillary adaptation, and comprehensive post-swap diagnostics. It's a technically demanding job that demands genuine Audi platform knowledge. We bring both the knowledge and the precision.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "The 2.0 TDI fitted to a significant proportion of Audi A6 Avants   particularly across C6 and C7 generations   uses a timing belt rather than a chain. Cambelt replacement at the correct service interval is non-negotiable. A snapped timing belt destroys the engine immediately, bending valves and causing severe internal damage without any prior warning. We carry full cambelt kits for all applicable A6 Avant configurations and recommend replacement at or before Audi's specified intervals. Where service history is incomplete or the vehicle's maintenance background is uncertain, we recommend replacement regardless of recorded mileage.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering buying a used Audi A6 Avant and want an independent, professional assessment of the engine's actual condition before you commit? Or has something on your current car caught your attention   a subtle noise, a slight change in how it pulls under load, an intermittent warning light? Our engine health check covers full compression testing across all cylinders, oil condition and contamination analysis, comprehensive diagnostic fault code scanning, timing system condition assessment, turbocharger inspection where applicable, and a thorough visual review of all ancillary engine components. You receive a clear written report with honest findings and practical recommendations   no pressure, no upselling.",
        ],
      },
      {
        title: "Fast UK-Wide Engine Service & Delivery From ",
        paragraphs: [
          "A6 Avant owners depend on their cars   for family life, for business, for daily commuting. Being without it, even temporarily, is a real disruption. We work with purpose, communicate clearly, and deliver within the timeframes we agree.",
          "Not close enough to bring your vehicle or engine unit to our  workshop? We offer a fully managed engine collection and return service covering the entire UK. Send your unit to us, we carry out the rebuild, repair, or replacement, test it comprehensively, and return it ready to fit. For customers who prefer fitting closer to home, we can connect you with our nationwide approved installer network.",
          "Most Audi A6 Avant engine repairs are completed within 3–7 working days. Full rebuilds typically take 5–10 working days depending on the engine variant and specific parts required. We confirm your turnaround at the point of booking   and we keep to it. If anything changes during the job, you hear from us immediately, not on collection day.",
          "Every engine rebuild, replacement, and major repair at Vogue Technics comes with a written warranty. We put it in writing because we're confident in what we deliver. Full warranty terms are confirmed and explained clearly at the point of booking   no ambiguity, no small print.",
        ],
      },
      {
        title: "Ready to get your Audi A6 Avant engine sorted by people who genuinely know it?",
        paragraphs: [
          "Call Vogue Technics today or use our online enquiry form for a fast, no-obligation quote. We're based in , and serve Audi A6 Avant owners right across the United Kingdom. Precise diagnostics, honest pricing, and engine work built to last   that's 25 years of doing this properly.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "My C7 A6 Avant 3.0 TDI developed the timing chain rattle at around 87,000 miles. Vogue Technics replaced the complete assembly, explained the fault in plain terms, and delivered the car back on time and well under the main dealer quote I'd received. Outstanding.",
        by: "  Richard B., ",
      },
      {
        quote:
          "Had persistent coolant loss on my A6 Avant 2.0 TDI. Vogue Technics diagnosed the head gasket fault accurately, repaired it properly, and the car has been completely reliable for over a year since. Honest, professional, and very fair on price.",
        by: "  Sarah M., Hertfordshire",
      },
      {
        quote:
          "Sent my Avant engine down from Bristol for a full rebuild after a serious oil consumption issue. It came back immaculately prepared, packaged properly, and arrived ahead of schedule. The car is transformed. Couldn't recommend them more highly.",
        by: "  Oliver T., Bristol",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A6 Avant engine rebuild cost in the UK?",
        answer:
          "The cost varies depending on the engine variant and the extent of internal wear. A full rebuild on a 2.0 TDI typically starts from around £1,800–£3,000. The 3.0 TDI variants   including the CLAB and CRTD engine codes   cost more due to increased complexity and parts requirements. The 3.0 TFSI carries the highest rebuild cost within the Avant range. Contact Vogue Technics for a detailed, no-obligation quote based on your specific vehicle and fault.",
      },
      {
        question: "What are the most common engine problems on the Audi A6 Avant?",
        answer:
          "On the C7 generation, timing chain rattle on the 3.0 TDI is the most urgent and widely reported fault. Head gasket failure is also encountered on higher-mileage 3.0 TDI examples. The 2.0 TDI is susceptible to cambelt-related failures and turbocharger wear. Oil leaks from various seals and gaskets are common across all variants at higher mileages. Early diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Is it worth rebuilding an Audi A6 Avant engine?",
        answer:
          "In the vast majority of cases, yes   particularly on a well-maintained Avant where the rest of the car is in good condition. A quality rebuild restores performance to factory standard at a fraction of the cost of replacing the vehicle. Given that well-kept A6 Avants hold their practical value strongly, rebuilding is almost always the financially sensible decision.",
      },
      {
        question: "Do you work on all Audi A6 Avant generations?",
        answer:
          "Yes. We carry out engine work across the C6, C7, and C8 A6 Avant, covering all engine variants including the 2.0 TDI, 3.0 TDI CLAB, 3.0 TDI CRTD, 2.0 TFSI, and 3.0 TFSI configurations.",
      },
      {
        question: "Can you supply and fit the engine?",
        answer:
          "Absolutely. We offer a complete supply and fit service at our  workshop. For customers located elsewhere in the UK, we can arrange fitting through our approved installer network.",
      },
      {
        question: "How long does an Audi A6 Avant engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the engine variant and parts required. We confirm your exact timeframe at booking and provide clear updates throughout the job.",
      },
      {
        question: "Do you offer a pre-purchase engine inspection for used A6 Avants?",
        answer:
          "Yes. Our engine health check service is available for anyone considering purchasing a used Audi A6 Avant who wants an independent assessment before committing. You'll receive a written report with clear, honest findings. Contact us to arrange an appointment at our  workshop.",
      },
      {
        question: "Is there a warranty on A6 Avant engine work at Vogue Technics?",
        answer:
          "Yes. Every rebuild, replacement, and major repair comes with a written warranty. Terms are confirmed clearly at the point of booking   no ambiguity, no small print surprises.",
      },
    ],
  },
  "audi-a7-sportback-engines": {
    metaTitle: "Audi A7 Sportback Engine Rebuild, Repair & Replacement   Specialists in ",
    metaDescription:
      "Audi A7 Sportback engine rebuild, repair and replacement specialists . We cover C7/C8 across 3.0 TDI, 3.0 TFSI, biturbo diesel and RS7 4.0 TFSI with diagnostic-led work, transparent pricing and written warranty.",
    h1: "Audi A7 Sportback Engine Rebuild, Repair & Replacement   Specialists in ",
    intro: [
      "The Audi A7 Sportback is a genuinely distinctive car. It sits at the intersection of executive saloon and grand tourer   elegant enough to turn heads, practical enough to justify daily use, and engineered to a standard that makes ownership genuinely rewarding. Owners of the A7 Sportback don't take their vehicles to just any garage. They look for people who understand what the car is, what the engine demands, and what proper work actually looks like.",
      "At Vogue Technics, based in , we carry out expert engine work on the Audi A7 Sportback across both C7 and C8 generations. The 3.0 TDI, 3.0 TFSI, biturbo diesel, and 4.0 TFSI RS7 units each have their own fault patterns and rebuild requirements   and we've worked through all of them over more than 25 years in the business. Whether your A7 needs a complete engine rebuild, a targeted repair, a timing chain replacement, or a full engine swap, we deliver work that's done properly from start to finish.",
    ],
    sections: [
      {
        title: "Why Audi A7 Sportback Owners Choose Vogue Technics",
        paragraphs: [
          "The A7 Sportback is a premium vehicle, and its engine work should be handled by people who treat it accordingly. Not every specialist has the depth of knowledge this engine family requires   and on a car at this level, the consequences of average work are felt immediately.",
        ],
      },
      {
        title: "Deep Expertise Across All A7 Sportback Engine Variants",
        paragraphs: [
          "We work across the full A7 Sportback engine range   the 3.0 TDI in its various states of tune, the supercharged 3.0 TFSI, the biturbo diesel units fitted to higher-specification C7 models, and the 4.0 TFSI twin-turbo V8 in the RS7. Each carries its own known fault patterns. The 3.0 TFSI's timing chain noise on C7 models, the biturbo diesel's turbocharger sensitivities, the head gasket vulnerabilities on higher-mileage TDI variants   these are faults we encounter regularly and resolve with the precision that comes from genuine, repeated hands-on experience. Not theory. Actual work, on actual cars.",
        ],
      },
      {
        title: "Precise Diagnostics Before Any Work Begins",
        paragraphs: [
          "Every Audi A7 Sportback that comes to our  workshop receives a comprehensive diagnostic assessment before we recommend or quote for a single item of work. Compression testing across all cylinders, oil condition analysis, complete fault code scanning, timing system inspection, and turbocharger assessment   we build an accurate picture of the engine's actual condition first. That accuracy is what makes our quotes reliable and our repairs targeted. You never pay for work your car doesn't need.",
        ],
      },
      {
        title: "Honest, Itemised Pricing Throughout",
        paragraphs: [
          "The A7 Sportback is a significant vehicle, and the people who own them deserve pricing that reflects that honestly. Every quote we issue is fully itemised and confirmed upfront. If something unexpected comes to light during the job, we contact you immediately before proceeding   the decision is always yours. No inflated bills on collection day, no vague ballpark figures over the phone, and no pressure to authorise additional work during the job.",
        ],
      },
      {
        title: "Our Audi A7 Sportback Engine Services",
        paragraphs: [
          "We cover every level of engine work for the Audi A7 Sportback across all variants, engine codes, and model generations. Here is a complete breakdown of what we offer:",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure on the Audi A7 Sportback   particularly on higher-mileage 3.0 TDI examples that have run hot or experienced cooling system issues   is a fault that demands prompt, thorough attention. White exhaust smoke on cold starts, unexplained coolant loss, persistent overheating, or a milky residue beneath the oil filler cap are the clear warning signs. We replace head gaskets using OEM-specification components, machine the cylinder head surface where required, and carry out a full cooling system pressure test as part of every job. Addressing this fault correctly the first time protects the block, valves, and surrounding components from the far more costly consequential damage that follows if it's ignored or half-repaired.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain noise on the C7-generation A7 Sportback 3.0 TFSI is one of the most consistently reported faults on this platform. The characteristic metallic rattle on cold start   often most pronounced in colder months   is the early warning that should prompt immediate action. A worn or stretched timing chain causes severe internal damage almost instantaneously once it fails. We replace the complete timing chain assembly as a full kit on every job   chain, tensioners, guides, and sprockets together. Replacing the chain alone whilst leaving worn tensioners in place is a shortcut that simply reproduces the same fault. That's not something we do.",
          "For the biturbo diesel variants, the timing system has its own specific characteristics and wear profile at higher mileages. We carry full replacement kits for all A7 Sportback engine configurations.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "The A7 Sportback's forced induction systems   whether the single turbo on standard TDI variants or the twin-turbo arrangement on biturbo diesel and RS7 models   are integral to the performance and character that makes this car what it is. Turbo faults typically present as a progressive loss of power under load, excessive smoke on acceleration, or an audible whine or surge that becomes more pronounced over time. We source quality replacement turbos for all A7 Sportback engine variants, fit them to manufacturer specification, and inspect the oil feed and return lines as a standard part of every turbo replacement. Restricted oil supply is a common underlying cause of turbo failure   replacing the turbo without addressing it guarantees a repeat fault.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "A full engine rebuild is the definitive solution for an Audi A7 Sportback engine that has accumulated serious mileage, developed significant internal wear, or suffered from oil consumption that targeted repairs haven't permanently resolved. We strip the engine completely, clean and measure every internal component, replace all worn parts   pistons, rings, bearings, seals, and gaskets   and reassemble to factory tolerances. Every rebuilt engine is tested before fitting or despatch. On a car with the A7 Sportback's residual values and ownership appeal, a quality rebuild is almost always the financially and practically sensible decision over replacement.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Not every A7 Sportback engine fault demands a complete rebuild. Many are resolved through precise, targeted repair once the root cause has been accurately identified. Oil leaks from valve cover gaskets, timing cover seals, and rear main seals are common on higher-mileage A7s and entirely manageable without major dismantling. Engine management faults, EGR issues, sensor failures, fuel system faults   our diagnostic process identifies the root cause with precision. You pay for what's needed, and we explain our findings clearly at every stage so you can make an informed decision.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When an A7 Sportback engine has suffered catastrophic internal damage   a seized block, spun bearings, or failure beyond cost-effective repair   replacement is the practical route forward. We supply and fit quality reconditioned or verified low-mileage used engines for all A7 Sportback variants, individually tested before installation and sourced from suppliers we trust. Supply-only is also available for customers with their own fitting arrangement. All supplied engines carry a written warranty as standard.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Considering a different engine specification in your A7 Sportback   upgrading to a higher-output variant, or addressing a generation compatibility requirement? Our engine swap service manages the entire process: compatibility assessment, ECU and software considerations, mount and ancillary adaptation, and comprehensive post-swap diagnostics. It demands genuine Audi platform knowledge and systematic precision throughout. We bring both.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Certain Audi A7 Sportback engine variants use a timing belt rather than a chain   and cambelt replacement at the correct service interval is non-negotiable maintenance. A snapped timing belt destroys the engine instantaneously, bending valves and causing severe internal damage without any prior warning. We carry full cambelt kits for all applicable A7 Sportback configurations and recommend replacement at or before the manufacturer's specified intervals. Where a vehicle's service history is incomplete or its maintenance background is uncertain, we recommend replacement regardless of the recorded mileage.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering purchasing a used Audi A7 Sportback and want a professional, independent assessment of the engine before you commit to the purchase? Or has something on your current car caught your attention   a subtle noise under load, an intermittent warning light, a slight change in how the engine responds? Our engine health check covers full compression testing across all cylinders, oil condition and contamination analysis, comprehensive diagnostic fault code scanning, timing system condition assessment, turbocharger inspection, and a thorough visual review of all ancillary engine components. You receive a clear written report with honest findings and practical recommendations   no upselling, no pressure, no ambiguity.",
        ],
      },
      {
        title: "Fast UK-Wide Service & Engine Collection From ",
        paragraphs: [
          "Losing the use of an Audi A7 Sportback   whether it's your primary vehicle or a car you've invested in significantly   is a disruption that deserves a swift, professional response. We work efficiently, communicate proactively, and deliver within the timeframes we commit to.",
          "Not within reach of our  workshop? We offer a fully managed engine collection and return service covering the entire UK. Send your unit to us, we carry out the rebuild, repair, or replacement, test it thoroughly, and return it ready to fit. For customers who prefer fitting closer to home, we can connect you with our nationwide approved installer network.",
          "Most Audi A7 Sportback engine repairs are completed within 3–7 working days. Full rebuilds typically take between 5 and 10 working days depending on the engine variant and parts required. We confirm your turnaround at booking   and we keep to it. If anything changes during the job, you hear from us straight away.",
          "Every rebuild, replacement, and major repair at Vogue Technics is backed by a written warranty. We put it in writing because we're fully confident in what we deliver. Full warranty terms are confirmed and explained clearly at the point of booking   no small print, no ambiguity.",
        ],
      },
      {
        title: "Ready to get your Audi A7 Sportback engine sorted by people who genuinely understand it?",
        paragraphs: [
          "Call Vogue Technics today or submit an enquiry through our online form for a fast, no-obligation quote. We're based in , and serve Audi A7 Sportback owners right across the United Kingdom. Precise diagnostics, honest pricing, and engine work that genuinely lasts   built on 25 years of doing this properly.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "My C7 A7 Sportback 3.0 TFSI developed timing chain noise at around 78,000 miles. Vogue Technics replaced the complete assembly, explained the fault clearly, and returned the car on time and significantly under the main dealer estimate. Exceptional service.",
        by: "  Jonathan P., ",
      },
      {
        quote:
          "Had a turbocharger failure on my A7 biturbo diesel. Vogue Technics diagnosed the root cause accurately   a restricted oil feed line   replaced the turbo properly, and the car has been completely fault-free since. Proper specialists.",
        by: "  Victoria H., Surrey",
      },
      {
        quote:
          "Sent my A7 Sportback engine down from Newcastle for a full rebuild after a serious oil consumption issue. It came back immaculately prepared, well packaged, and ahead of the agreed timeframe. The car drives as it did when new. Outstanding work.",
        by: "  Michael G., Newcastle",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A7 Sportback engine rebuild cost in the UK?",
        answer:
          "The cost depends on the engine variant and the extent of internal wear. A full rebuild on a 3.0 TDI typically starts from around £2,000–£3,500. The 3.0 TFSI and biturbo diesel variants cost more due to increased complexity and specific parts requirements. The RS7 4.0 TFSI twin-turbo V8 carries the highest rebuild cost within the A7 range. Contact Vogue Technics for a detailed, no-obligation quote based on your specific vehicle and fault.",
      },
      {
        question: "What are the most common engine problems on the Audi A7 Sportback?",
        answer:
          "On the C7 generation, timing chain noise on the 3.0 TFSI is the most widely reported fault. Turbocharger wear is common across the TDI and biturbo diesel variants at higher mileages. Head gasket failure is encountered on higher-mileage 3.0 TDI examples. The biturbo diesel units are particularly sensitive to oil feed restrictions affecting turbo longevity. Early, accurate diagnosis is always the most cost-effective approach.",
      },
      {
        question: "Is it worth rebuilding an Audi A7 Sportback engine?",
        answer:
          "In the vast majority of cases, yes   particularly on a well-maintained C7 or C8 example where the rest of the car is in sound condition. The A7 Sportback holds its value and ownership appeal strongly, and a quality rebuild restores engine performance to factory standard at a fraction of the replacement cost.",
      },
      {
        question: "Do you work on RS7 engines as well as standard A7 variants?",
        answer:
          "Yes. We carry out engine work across the full A7 Sportback range   including the RS7's 4.0 TFSI twin-turbo V8   across both C7 and C8 generations.",
      },
      {
        question: "Can you supply and fit the engine?",
        answer:
          "Absolutely. We offer a complete supply and fit service at our  workshop. For customers located elsewhere in the UK, we can arrange fitting through our approved installer network.",
      },
      {
        question: "How long does an Audi A7 Sportback engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the engine variant and parts required. We confirm your exact timeframe at booking and provide clear updates throughout the job.",
      },
      {
        question: "Do you offer a pre-purchase engine inspection for used A7 Sportbacks?",
        answer:
          "Yes. Our engine health check service is available for anyone considering purchasing a used Audi A7 Sportback who wants an independent professional assessment before committing.",
      },
      {
        question: "Is there a warranty on Audi A7 Sportback engine work at Vogue Technics?",
        answer:
          "Yes. Every rebuild, replacement, and major repair comes with a written warranty. Terms are confirmed clearly and completely at the point of booking   no ambiguity, no small print.",
      },
    ],
  },
  "audi-a8-engines": {
    metaTitle: "Audi A8 Engine Rebuild   Expert Repairs, Replacements & Rebuilds Across the UK",
    metaDescription:
      "Audi A8 engine rebuild, repair and replacement specialists . Expert diagnostics and warranty-backed work across 3.0 TDI, 4.2 V8 and W12 variants with UK-wide collection and delivery.",
    h1: "Audi A8 Engine Rebuild   Expert Repairs, Replacements & Rebuilds Across the UK",
    intro: [
      "If your Audi A8 is showing signs of engine trouble, you're in the right hands. At Vogue Technics, based in , we specialise in premium European engines   and the Audi A8 is a vehicle we know inside out. Whether you're dealing with a failing turbo, a worn timing chain, or you need a full engine rebuild, we deliver precision workmanship backed by over 25 years of hands-on experience.",
      "The Audi A8 is one of the finest luxury saloons ever built   but its engineering complexity demands a specialist, not a generalist. That's exactly what we are.",
    ],
    sections: [
      {
        title: "Why Audi A8 Owners Across the UK Trust Vogue Technics",
        paragraphs: [
          "Not every garage is equipped to work on a vehicle as sophisticated as the Audi A8. From the 3.0 TDI diesel to the legendary 4.2 V8 and W12 variants, each engine carries its own demands   and getting it wrong is expensive.",
        ],
      },
      {
        title: "Specialists With Over 25 Years of Engine Experience",
        paragraphs: [
          "Every technician at Vogue Technics has been trained specifically on premium European engines. We don't switch between budget hatchbacks and flagship luxury saloons   our focus is premium, and our results reflect that. When you bring your Audi A8 to us, you're getting specialists who have seen every fault, every failure, and every fix these engines require.",
        ],
      },
      {
        title: "Transparent Pricing With No Hidden Costs",
        paragraphs: [
          "Engine work on a luxury vehicle can feel financially overwhelming. We eliminate that anxiety with clear, itemised quotes provided upfront. No vague estimates. No unpleasant surprises when you come to collect. Just honest pricing from people who respect your vehicle and your budget.",
        ],
      },
      {
        title: "Warranty-Backed Work You Can Rely On",
        paragraphs: [
          "Every engine rebuild, replacement, and major repair carried out at Vogue Technics comes with a written warranty. We stand behind our workmanship   because we do it right the first time.",
        ],
      },
      {
        title: "Our Audi A8 Engine Services   Everything Under One Roof",
        paragraphs: [
          "We offer a complete range of engine services for Audi A8 owners across the UK. Whatever your engine problem, we have the solution.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "White smoke from the exhaust, unexplained coolant loss, or persistent overheating   these are the classic warning signs of a failing head gasket on the Audi A8 4.2 V8. Left unaddressed, a blown head gasket will destroy an otherwise healthy engine. Our technicians carry out Audi A8 head gasket replacement using OEM-grade components, restoring a proper seal and long-term reliability. If you're searching for Audi A8 head gasket replacement in the UK, act quickly   early intervention saves engines.",
        ],
      },
      {
        title: "Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "The Audi A8's timing components are critical   and when they fail, the consequences are catastrophic. A stretched or snapped timing chain can cause irreparable internal damage within seconds. We replace timing chains, tensioners, guides, and sprockets as a complete kit   never as a half-measure. For belt-driven variants, we carry full cambelt kits and recommend replacement at or before the manufacturer's specified interval. Whether you need Audi A8 timing chain replacement or an Audi A8 cambelt kit fitted in the UK, we cover it all properly.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Loss of power, black or blue smoke, or a distinctive whistle under acceleration are all indicators of turbocharger failure. The Audi A8 3.0 TDI turbocharger is a common fault point, particularly on higher-mileage vehicles. We source quality replacement turbos for all Audi A8 variants, fit them to manufacturer specifications, and carry out full post-installation testing before the vehicle leaves our workshop.",
        ],
      },
      {
        title: "Engine Rebuild, Repair & Replacement",
        paragraphs: [
          "Sometimes a targeted repair is all that's needed. Other times, a full rebuild or replacement is the smarter investment. We assess each engine individually and recommend only what's genuinely necessary.",
          "Audi A8 engine rebuild   Full strip-down, component inspection, replacement of worn parts, and reassembly to factory tolerances. The result is essentially a fresh engine at a fraction of replacement cost.",
          "Audi A8 engine repair   From oil leaks and bearing replacements to valve repairs and sensor faults, we resolve issues at their root cause.",
          "Audi A8 engine replacement   We supply and fit quality reconditioned or low-mileage used engines, sourced from trusted suppliers and tested before installation.",
          "Audi A8 engine swap   Upgrading variants or fitting a newer engine into your existing shell? Our swap service covers mounts, mapping, ancillaries, and full post-swap diagnostics.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Unsure what's wrong   or considering buying a used Audi A8 and want peace of mind first? Our Audi A8 engine health check includes compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection. You'll receive a written report with honest recommendations. No upselling. No guesswork. Just clarity.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Service From ",
        paragraphs: [
          "We understand that being without your Audi A8   especially if it's your primary vehicle   is genuinely disruptive. Our workshop in  operates with efficiency and precision to get you back on the road as quickly as possible.",
          "Can't make it to us? No problem. We offer a collection and delivery service covering the whole of the United Kingdom. Send us your engine, and we'll return it fully rebuilt, tested, and ready to fit   or we can coordinate installation through our approved fitter network nationwide.",
          "Most engine rebuilds are completed within 5–10 working days. Repairs and replacements are often faster. We give you an accurate timeframe at the point of booking   and we honour it.",
        ],
      },
      {
        title: "Ready to get your Audi A8 back to its best?",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and proudly serve Audi A8 owners across the whole of the United Kingdom. Don't trust your A8 to just anyone   trust the specialists.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics rebuilt the 3.0 TDI in my A8. Communication was excellent throughout, the price was fair, and the engine runs better than it has in years. Couldn't recommend them more highly.",
        by: "  David K., London",
      },
      {
        quote:
          "I was quoted over £7,000 elsewhere for an engine replacement. Vogue Technics came in significantly under that and provided a warranty too. Real professionals who know what they're doing.",
        by: "  Sandra L., Birmingham",
      },
      {
        quote:
          "Sent my A8 engine up from Bristol. It came back ahead of schedule, beautifully rebuilt, and packaged with care. Five stars without hesitation.",
        by: "  Mark W., Bristol",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A8 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the engine variant and the extent of wear. A 3.0 TDI rebuild typically starts from around £2,000–£3,500, while a 4.2 V8 or W12 rebuild will be higher due to complexity. Contact us for a bespoke quote tailored to your specific vehicle.",
      },
      {
        question: "What are the most common engine problems on the Audi A8?",
        answer:
          "The most frequently reported issues include timing chain wear on the 3.0 TDI, turbocharger failure, head gasket failure on the 4.2 V8, and oil leaks. Early diagnosis prevents expensive escalation.",
      },
      {
        question: "Is it worth rebuilding an Audi A8 engine?",
        answer:
          "In most cases, absolutely   particularly when the rest of the vehicle is in good condition. A quality rebuild extends the vehicle's life considerably and costs far less than sourcing a replacement car at this level.",
      },
      {
        question: "Do you offer a warranty on rebuilt Audi A8 engines?",
        answer:
          "Yes. All rebuilt and replacement engines come with a written warranty. Terms are discussed clearly at the point of booking.",
      },
      {
        question: "Can you supply and fit the engine?",
        answer:
          "Yes. We offer full supply and fit at our  workshop, and can also arrange installation through our approved network of fitters across the UK.",
      },
    ],
  },
  "audi-q2-engines": {
    metaTitle: "Audi Q2 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    metaDescription:
      "Audi Q2 engine rebuild, repair and replacement specialists . We cover 1.0 TFSI, 1.5 TFSI and 2.0 TDI variants with diagnostic-led work, transparent pricing and written warranty UK-wide.",
    h1: "Audi Q2 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    intro: [
      "Your Audi Q2 is a precision-engineered machine   compact, capable, and built to perform. When its engine starts letting you down, you need more than a general garage with a diagnostic tool and a hopeful attitude. You need specialists who understand exactly what's under the bonnet and how to fix it properly.",
      "At Vogue Technics, based in , we bring over 25 years of hands-on engine experience to every Audi Q2 that comes through our doors. From a straightforward Audi Q2 head gasket repair to a complete engine rebuild or swap, we handle it all   with the expertise, transparency, and warranty-backed workmanship that Audi owners deserve.",
    ],
    sections: [
      {
        title: "Why Audi Q2 Owners Choose Vogue Technics",
        paragraphs: [
          "The Audi Q2 sits on Volkswagen Group's MQB platform and shares its engine family with some of the most technically demanding units in the segment. The 1.0 TFSI, 1.5 TFSI, and 2.0 TDI variants each carry their own known failure patterns   and treating them with anything less than specialist knowledge is a costly mistake.",
        ],
      },
      {
        title: "25 Years of Premium European Engine Experience",
        paragraphs: [
          "We've been rebuilding, repairing, and replacing engines for over a quarter of a century. That experience isn't just a number on a webpage   it's the reason our customers in , across , and throughout the UK keep coming back and recommending us to other Audi owners.",
        ],
      },
      {
        title: "Honest Quotes, No Nasty Surprises",
        paragraphs: [
          "Engine repairs on a premium compact SUV can feel financially daunting. At Vogue Technics, we remove that uncertainty completely. Every job starts with a clear, itemised quote   no vague estimates, no charges that appear from nowhere on collection day.",
        ],
      },
      {
        title: "Written Warranty on Every Job",
        paragraphs: [
          "Whether we're carrying out an Audi Q2 engine rebuild in the UK or replacing a turbocharger, every significant repair and rebuild leaves our workshop with a written warranty. We stand behind our workmanship   because we do it right.",
        ],
      },
      {
        title: "Our Full Range of Audi Q2 Engine Services",
        paragraphs: [
          "We cover every engine service your Audi Q2 could need, from targeted single-component repairs to complete rebuilds and replacements. Here's what we offer.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "A failing head gasket on the Audi Q2 rarely announces itself quietly. White exhaust smoke, coolant disappearing without explanation, or the engine running hot are the signs you shouldn't ignore. Left unaddressed, a blown head gasket will turn a manageable repair into a destroyed engine. Our technicians carry out Audi Q2 head gasket repair using OEM-grade components, restoring a proper seal and ensuring long-term reliability. The sooner you act, the less it costs   contact us at the first warning sign.",
        ],
      },
      {
        title: "Timing Chain & Cambelt Replacement",
        paragraphs: [
          "Timing components are among the most critical   and most unforgiving   parts of any engine. The Q2's 1.0 TFSI is particularly known for timing chain tensioner issues, and a stretched or failed chain can cause catastrophic internal damage in a matter of seconds. We replace Audi Q2 timing chains as a complete kit   chain, tensioner, guides, and sprockets   never as a piecemeal fix.",
          "For cambelt-equipped variants, we carry full kit replacements and strongly recommend adhering to manufacturer service intervals. If you're unsure of your Q2's service history, book an Audi Q2 cambelt inspection with us today   it's cheap insurance against an expensive failure.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Sluggish acceleration, unusual smoke at startup, or a faint whining noise building under load   these are the telltale signs of a turbocharger on its way out. Audi Q2 turbo replacement is a job that demands precision fitting and thorough post-installation testing, not just a part swap. We source quality replacement turbos for all Q2 engine variants, fit them to manufacturer specifications, and run full tests before the vehicle leaves our workshop. No shortcuts. No guesswork.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Not every engine problem looks the same   and not every solution should either. We assess your Q2 individually and recommend only what the situation genuinely requires.",
          "Audi Q2 engine rebuild   Complete strip-down, inspection of every component, replacement of worn or damaged parts, and reassembly to factory tolerances. The result is effectively a fresh engine at a fraction of new-unit cost.",
          "Audi Q2 engine repair   Targeted diagnosis and repair of specific faults   oil leaks, bearing wear, sensor failures, valve damage   so you pay only for what's actually needed.",
          "Audi Q2 engine replacement   When multiple components have failed or repair costs outweigh value, we supply and fit quality reconditioned or low-mileage used engines, fully tested before installation.",
          "Audi Q2 engine swap   Changing engine variants or upgrading to a different configuration? Our swap service covers the complete process   mounts, ancillaries, remapping, and post-swap diagnostics   handled properly from start to finish.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Not sure what's wrong with your Q2   or thinking of buying a used one and want certainty before you commit? Our Audi Q2 engine check covers compression testing, oil condition analysis, full electronic diagnostic scanning, and a thorough visual inspection of all engine components. You'll receive a written report with clear, honest findings. No upselling. No alarming you unnecessarily. Just the facts, plainly stated.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Service From Our Workshop in ",
        paragraphs: [
          "We know how disruptive it is to be without your car   particularly when the Audi Q2 is your daily driver. Our workshop operates with genuine efficiency, because we respect your time as much as we respect your vehicle.",
          "Not local to ? That's no barrier. We offer a full engine collection and delivery service covering the entire United Kingdom. Send us your unit, and we'll return it rebuilt, tested, and ready to fit   or we can coordinate installation through our trusted network of approved fitters nationwide.",
          "Most Audi Q2 engine rebuilds are completed within 5–10 working days. Targeted repairs and replacements are frequently faster. We give you an accurate completion estimate when you book   and we stick to it, keeping you updated throughout.",
        ],
      },
      {
        title: "Ready to get your Audi Q2 running as it should?",
        paragraphs: [
          "Call Vogue Technics today or fill in our online enquiry form for a fast, no-obligation quote. We're based in , and serve Audi Q2 owners right across the United Kingdom. Don't hand your Q2 to just anyone   trust the specialists who know it properly.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics rebuilt the 1.5 TFSI in my Q2 after a timing chain failure. From the first call to collection, everything was handled professionally. The engine feels completely transformed. Worth every penny.",
        by: "  Tom H., London",
      },
      {
        quote:
          "I had three quotes for an engine replacement on my Q2. Vogue Technics came in well under the others and offered a warranty on top. Genuine specialists   you can tell immediately.",
        by: "  Rachel B., Leeds",
      },
      {
        quote:
          "Sent my engine down from Newcastle. It came back ahead of schedule, well packaged, and running perfectly. Couldn't ask for better service from a team that clearly knows what they're doing.",
        by: "  Craig M., Newcastle",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi Q2 engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear. A 1.0 TFSI or 1.5 TFSI rebuild typically starts from around £1,800–£3,200. A 2.0 TDI rebuild may be higher depending on component condition. Contact us for a bespoke quote based on your specific vehicle and engine code.",
      },
      {
        question: "What are the most common engine problems on the Audi Q2?",
        answer:
          "The most frequently reported issues include timing chain tensioner failure on the 1.0 TFSI, turbocharger wear, head gasket failure, and oil leaks at higher mileages. Early diagnosis consistently prevents minor issues from escalating into major repairs.",
      },
      {
        question: "Is it worth rebuilding an Audi Q2 engine?",
        answer:
          "In most cases, yes   especially when the rest of the vehicle is in sound condition. A quality rebuild restores performance and reliability at a significantly lower cost than sourcing a replacement vehicle.",
      },
      {
        question: "Do you provide a warranty on Audi Q2 engine work?",
        answer:
          "Yes. Every rebuild, replacement, and major repair comes with a written warranty. We discuss the terms clearly at the point of booking   no small print surprises.",
      },
      {
        question: "Can you supply and fit the engine?",
        answer:
          "Absolutely. We offer full supply and fit at our  workshop. We can also coordinate fitting through our approved installer network for customers elsewhere in the UK.",
      },
      {
        question: "How long does an Audi Q2 engine replacement take?",
        answer:
          "A straightforward replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on parts availability and the extent of work required. We confirm your exact timeframe at booking.",
      },
    ],
  },
  "audi-q3-engines": {
    metaTitle: "Audi Q3 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    metaDescription:
      "Audi Q3 engine rebuild, repair and replacement specialists . We cover 8U and F3 generations across 1.0/1.4 TFSI and 2.0 TDI variants with accurate diagnosis, transparent pricing and written warranty.",
    h1: "Audi Q3 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    intro: [
      "The Audi Q3 is a genuinely accomplished compact SUV   refined, practical, and engineered to a standard that most rivals simply don't match. But when the engine develops a problem, that same engineering sophistication means you can't afford to hand it to someone who'll guess their way through it.",
      "At Vogue Technics, based in , we specialise in premium European engines and bring over 25 years of hands-on experience to every Audi Q3 that comes through our workshop. Whether you need a targeted Audi Q3 head gasket replacement, a full Audi Q3 engine rebuild, or a reconditioned engine fitted and ready to go, we deliver the quality, honesty, and warranty-backed workmanship that Q3 owners across the UK have come to rely on.",
    ],
    sections: [
      {
        title: "Why Audi Q3 Owners Across the UK Trust Vogue Technics",
        paragraphs: [
          "The Audi Q3 spans two distinct generations   the original 8U platform and the newer F3   and covers a wide range of engine variants, from the 1.0 and 1.4 TFSI petrol units through to the 2.0 TDI diesel. Each engine family carries its own characteristic failure points, and misdiagnosing or mishandling any of them leads to expensive consequences. That's precisely why specialist knowledge matters here.",
        ],
      },
      {
        title: "25 Years of Hands-On Engine Expertise",
        paragraphs: [
          "Every technician at Vogue Technics has been trained and developed specifically on premium European engines. We've been rebuilding, repairing, and replacing Audi engines for over a quarter of a century   and that depth of experience shows in every job we complete. Our reputation in  and across the wider UK has been built entirely through the quality of our work and the honesty of our service.",
        ],
      },
      {
        title: "Clear, Itemised Quotes With Zero Hidden Charges",
        paragraphs: [
          "Engine work feels financially uncertain at the best of times   especially on a premium vehicle. We remove that uncertainty entirely. Before we begin any work, you receive a clear, itemised quote covering every element of the job. No vague ballpark figures. No additional charges appearing on collection day. Just straightforward pricing from people who respect your vehicle and your budget equally.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Every Audi Q3 engine rebuild, replacement, and major repair carried out at our  workshop leaves with a written warranty. We stand behind our workmanship without hesitation   because we know the standard to which every job is completed.",
        ],
      },
      {
        title: "Our Complete Audi Q3 Engine Services",
        paragraphs: [
          "From single-component repairs to full rebuilds and engine replacements, we cover every engine service need your Audi Q3 could present. Here is exactly what we offer.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "A deteriorating head gasket on the Audi Q3 rarely stays subtle for long. Milky oil, persistent overheating, unexplained coolant loss, or white smoke from the exhaust are all signals that something is seriously wrong. Audi Q3 head gasket replacement carried out promptly saves the engine   left too long, it destroys it. Our technicians replace head gaskets using OEM-grade components and restore a proper, lasting seal. If you're seeing any of these warning signs, contact us today rather than waiting to see how it develops.",
        ],
      },
      {
        title: "Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "Timing components are unforgiving   they give little warning and cause maximum damage when they fail. The 1.4 TFSI engine used across earlier Q3 models is particularly known for timing chain tensioner wear, while certain variants run a cambelt that demands strict adherence to replacement intervals. We carry out Audi Q3 timing chain replacement as a complete kit   chain, tensioner, guides, and sprockets replaced together, not individually.",
          "For Audi Q3 timing belt change requirements, we carry full manufacturer-approved kits and recommend booking before the scheduled interval, particularly if the service history is unclear. Half-measures on timing components are never worth the risk.",
        ],
      },
      {
        title: "Turbocharger Replacement",
        paragraphs: [
          "A failing turbo on the Audi Q3 typically makes itself known through noticeable power loss, blue or black smoke under load, or a growing whine that builds with engine speed. Audi Q3 turbocharger replacement is a precision job   it's not simply a matter of unbolting one unit and bolting on another. Oil feed lines, seals, and post-installation run-in procedures all matter. We source quality replacement turbos for all Q3 engine variants, fit them precisely to manufacturer specifications, and test thoroughly before the vehicle leaves our workshop.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Every engine situation is different, and we always recommend only what your specific Q3 genuinely needs   nothing more.",
          "Audi Q3 engine rebuild   Full strip-down, thorough inspection of every internal component, replacement of all worn or damaged parts, and reassembly to factory tolerances. The outcome is effectively a refreshed engine delivering the performance and reliability of a new unit, at a fraction of the replacement cost.",
          "Audi Q3 engine repair   Targeted diagnosis and repair of specific faults   oil leaks, worn bearings, valve damage, sensor failures   carried out precisely so you only pay for what's actually needed.",
          "Audi Q3 reconditioned engine   When multiple components have failed or the cost of repair outweighs the return, we supply and fit quality reconditioned or carefully sourced low-mileage engines. Every unit is tested before installation.",
          "Audi Q3 engine swap   Changing engine variants, upgrading configurations, or fitting a newer-specification unit into an earlier shell? Our full swap service covers mounts, ancillaries, remapping, and comprehensive post-swap diagnostics   handled completely and correctly.",
        ],
      },
      {
        title: "Engine Diagnostic & Health Check",
        paragraphs: [
          "Unsure what's actually wrong with your Q3   or considering purchasing a used example and wanting certainty before you commit? Our Audi Q3 engine diagnostic service covers full electronic scanning, compression testing, oil condition and contamination analysis, and a thorough visual inspection of all engine components and associated systems. You'll receive a written report with clear, plain-English findings and honest recommendations. No upselling. No unnecessary alarm. Just the information you need to make the right decision.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Service From ",
        paragraphs: [
          "We understand that being without your Audi Q3   particularly if it's your primary vehicle   creates real disruption to daily life. Our workshop is structured to work efficiently without ever compromising on quality, so you're back on the road as quickly as the job genuinely allows.",
          "Not based near ? That's no obstacle at all. We operate a full engine collection and return service covering every corner of the United Kingdom. Send us your unit and we'll return it rebuilt, fully tested, and ready to install   or we can coordinate fitting through our nationwide network of approved installers if you'd prefer the engine fitted closer to home.",
          "Most full Audi Q3 engine rebuilds are completed within 5–10 working days. Targeted repairs and straightforward replacements are frequently completed sooner. We confirm your exact timeframe at the point of booking and keep you updated throughout   no chasing required.",
        ],
      },
      {
        title: "Ready to get your Audi Q3 back performing as it should?",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and proudly serve Audi Q3 owners right across the United Kingdom. Don't settle for a generalist when your Q3 deserves a specialist   get in touch today.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics carried out a full rebuild on the 2.0 TDI in my Q3. From the initial call right through to collection, everything was handled with complete professionalism. The engine runs better now than it ever did. Genuinely outstanding service.",
        by: "  James F., London",
      },
      {
        quote:
          "I received three separate quotes for an engine replacement on my Q3. Vogue Technics came in well below the others, offered a written warranty, and completed the work ahead of schedule. Exactly the kind of specialist you want working on your car.",
        by: "  Sarah K., Manchester",
      },
      {
        quote:
          "Arranged collection from Cardiff and the engine came back beautifully rebuilt and packaged with real care. Everything was explained clearly throughout and the result speaks for itself. Five stars   wouldn't go anywhere else.",
        by: "  Owen T., Cardiff",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi Q3 engine rebuild cost in the UK?",
        answer:
          "Costs vary based on the engine variant and the extent of internal wear. A 1.4 TFSI or 2.0 TDI rebuild typically starts from around £1,800–£3,500. A 2.0 TFSI rebuild may be higher depending on component condition and specification. Contact us directly for a precise, bespoke quote based on your specific engine code and vehicle condition.",
      },
      {
        question: "What are the most common engine faults on the Audi Q3?",
        answer:
          "The most regularly reported issues include timing chain tensioner failure on the 1.4 TFSI, turbocharger wear particularly on higher-mileage diesel variants, head gasket failure, and oil leaks developing at the rear main seal. Early diagnosis consistently prevents manageable problems from escalating into costly ones.",
      },
      {
        question: "Is rebuilding an Audi Q3 engine worth it?",
        answer:
          "In the majority of cases, yes   especially when the vehicle is otherwise in sound condition. A properly executed rebuild restores full performance and reliability at significantly lower cost than sourcing a replacement vehicle at this level of quality.",
      },
      {
        question: "Do you provide a warranty on Audi Q3 engine work?",
        answer:
          "Yes, without exception. Every rebuild, replacement, and major repair comes with a written warranty. We explain all terms clearly at the point of booking   no small print, no ambiguity.",
      },
      {
        question: "Can you supply and fit the engine at your workshop?",
        answer:
          "Absolutely. We offer full supply and fit at our  workshop. For customers located elsewhere in the UK, we coordinate installation through our trusted network of approved fitters nationwide.",
      },
      {
        question: "How long does an Audi Q3 engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full engine rebuild takes 5–10 working days depending on the parts required and the extent of internal work. We confirm your precise timeframe when you book and honour it consistently.",
      },
    ],
  },
  "audi-q5-engines": {
    metaTitle: "Audi Q5 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    metaDescription:
      "Audi Q5 engine rebuild, repair and replacement specialists . Expert engine services across 2.0 TDI, 3.0 TDI, 2.0 TFSI and SQ5 3.0 TFSI with diagnostic-led work, transparent pricing and written warranty.",
    h1: "Audi Q5 Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    intro: [
      "The Q5's engine range — 2.0 TDI, 3.0 TDI, 2.0 TFSI and SQ5 3.0 TFSI — demands specialist knowledge and proper tooling. At Vogue Technics, with 25+ years of hands-on engine expertise, we're the Audi Q5 rebuild specialist that owners across the UK trust.",
    ],
    sections: [
      {
        title: "Why Audi Q5 Owners Choose Vogue Technics as Their Engine Specialist",
        paragraphs: [
          "Choosing the right specialist for your Audi Q5 isn't a decision to take lightly. A poorly executed repair on an engine as complex as the Q5's can cost you significantly more in the long run than getting it right the first time.",
        ],
      },
      {
        title: "Genuine Specialists   Not a General Garage",
        paragraphs: [
          "Every technician at Vogue Technics is trained and experienced specifically on premium European engines. We don't divide our attention between budget city cars and flagship SUVs   our entire focus is on vehicles like yours. The Q5's 2.0 TDI is notorious for specific timing chain and turbo issues. The 3.0 TDI carries its own unique failure patterns. We know every one of them   and more importantly, we know how to fix them properly and permanently.",
        ],
      },
      {
        title: "Over 25 Years Serving UK Drivers From ",
        paragraphs: [
          "Since we opened our doors in , we've rebuilt and replaced thousands of engines for premium vehicle owners right across the UK. Our standing in the industry hasn't been built through advertising   it's been built through word of mouth, repeat customers, and a track record of doing exactly what we say we'll do, to the standard we promise.",
        ],
      },
      {
        title: "Upfront, Itemised Pricing   No Surprises",
        paragraphs: [
          "Audi Q5 engine repair and rebuild work can feel financially daunting before you've even had a quote. We take that anxiety off the table immediately. Every job starts with a clear, itemised quote covering every aspect of the work required. You know what you're paying before we touch the vehicle   and that figure doesn't change when you come to collect.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Whether we carry out a targeted repair or a full Audi Q5 engine rebuild, the work leaves our workshop with a written warranty. We stand behind everything we do   because our standards mean we have nothing to hide.",
        ],
      },
      {
        title: "Our Full Range of Audi Q5 Engine Services",
        paragraphs: [
          "We cover the complete spectrum of engine work for Audi Q5 owners across the UK. Every service is carried out to the same exacting standard   whether it's a single-component repair or a ground-up engine rebuild.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "A blown head gasket on the Audi Q5 announces itself in ways you can't ignore   white exhaust smoke that doesn't clear, coolant disappearing between services, or the engine temperature creeping steadily upward. Audi Q5 head gasket failure left unaddressed doesn't stay contained; it progressively destroys surrounding engine components and turns a manageable repair into a catastrophic one. Our technicians replace Q5 head gaskets using OEM-grade components, restore the seal properly, and ensure the underlying cause is identified and addressed   not just the symptom.",
        ],
      },
      {
        title: "Timing Chain & Cambelt Replacement",
        paragraphs: [
          "Audi Q5 timing chain problems are among the most well-documented issues across the model range   particularly on the 2.0 TDI and earlier 2.0 TFSI variants. A worn tensioner or stretched chain gives minimal warning. When it lets go, the internal damage is immediate and severe. We replace timing chains as a complete assembly   chain, tensioner, guides, and sprockets together   because replacing components piecemeal simply shifts the problem rather than solving it.",
          "For Q5 variants requiring a cambelt, Audi Q5 cambelt replacement should never be deferred beyond the manufacturer's recommended interval. If you're uncertain about your vehicle's service history, book an inspection with us now   it's a fraction of the cost of the damage a snapped belt causes.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Audi Q5 turbo failure is another frequently reported issue, particularly on higher-mileage diesel examples. The warning signs are usually clear   a noticeable loss of power, smoke under load, or an increasingly pronounced whine that builds with engine speed. What's less clear to most owners is that a failing turbo, if left running, can contaminate the entire engine oil system. We source quality replacement turbos for all Q5 engine variants, fit them correctly to manufacturer specifications, flush and inspect oil feeds, and run full post-installation tests before the vehicle goes anywhere.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "The right course of action depends entirely on what your specific engine needs   and we always recommend the most appropriate solution, not the most expensive one.",
          "Audi Q5 engine rebuild   Complete strip-down to bare block, thorough inspection and measurement of every internal component, replacement of all worn or out-of-tolerance parts, and full reassembly to factory specifications.",
          "Audi Q5 engine repair specialist   When the issue is specific and contained, targeted repair is the smarter call. We diagnose precisely, repair exactly what's needed, and ensure the root cause is resolved   not just the visible symptom.",
          "Audi Q5 engine replacement   When repair costs outweigh the return, we supply and fit quality reconditioned or low-mileage engines sourced from trusted suppliers and tested thoroughly before installation.",
          "Audi Q5 engine swap   Upgrading engine variants, switching fuel types, or fitting a newer-specification unit into an existing shell? Our full engine swap service covers mounts, ancillaries, remapping, and comprehensive post-swap diagnostics   handled completely from start to finish.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering buying a used Audi Q5 and want certainty before you commit? Or perhaps your Q5 is running slightly off but you can't identify the cause? Our Audi Q5 engine health check covers full electronic diagnostic scanning, compression testing across all cylinders, oil condition and contamination analysis, and a thorough visual inspection of the entire engine bay. You receive a written report with plain, honest findings and clear recommendations   no upselling, no unnecessary alarm, no vague conclusions.",
        ],
      },
      {
        title: "UK-Wide Service & Fast Turnaround From Our  Workshop",
        paragraphs: [
          "We know that every day without your Audi Q5 has a real cost   whether that's inconvenience, missed commitments, or hire car expenses. Our workshop is structured to work efficiently and precisely, because your time matters as much as the quality of the work itself.",
          "Not local to ? That's no issue at all. We operate a full engine collection and return service covering every part of the United Kingdom. Send us your unit and we'll return it rebuilt, fully tested, and ready to install   or we can arrange fitting through our trusted network of approved installers nationwide, so you never need to travel further than suits you.",
          "Most complete Audi Q5 engine rebuilds are finished within 5–10 working days. Targeted repairs and engine replacements are frequently completed faster. We give you an honest, accurate completion timeframe when you book   and we keep you updated throughout the process without you needing to chase us.",
        ],
      },
      {
        title: "Your Audi Q5 deserves more than a guess and a hope.",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and serve Audi Q5 owners across the entire United Kingdom. Trust the specialists   and get it done right.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics handled a full rebuild on the 3.0 TDI in my Q5. I'd been quoted eye-watering figures elsewhere and was genuinely considering selling the car. They came in well under every other quote, explained everything clearly, and the engine is running better than it has in years. Exceptional.",
        by: "  Michael D., London",
      },
      {
        quote:
          "The timing chain on my Q5 2.0 TDI went without much warning. Vogue Technics diagnosed it quickly, gave me a fair quote the same day, and had it back to me ahead of schedule. Proper specialists   you can tell the difference immediately.",
        by: "  Joanne P., Birmingham",
      },
      {
        quote:
          "Arranged collection from Edinburgh. The engine came back beautifully rebuilt, carefully packaged, and with a full written warranty. Communication throughout was excellent. Five stars without any hesitation.",
        by: "  Alistair M., Edinburgh",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi Q5 engine rebuild cost in the UK?",
        answer:
          "Costs vary depending on the engine variant and the extent of internal wear. A 2.0 TDI rebuild typically starts from around £2,000–£3,800. A 3.0 TDI or 3.0 TFSI rebuild will be higher given the additional complexity. Contact us directly for a precise, bespoke quote based on your specific engine code and vehicle condition.",
      },
      {
        question: "What are the most common engine problems on the Audi Q5?",
        answer:
          "The most frequently reported issues include timing chain tensioner failure on the 2.0 TDI, turbocharger wear on higher-mileage diesel variants, head gasket failure particularly on the 2.0 TFSI, and oil consumption issues across several engine codes. Early professional diagnosis consistently prevents these from becoming far more expensive problems.",
      },
      {
        question: "Is it worth rebuilding an Audi Q5 engine?",
        answer:
          "In the vast majority of cases, yes   especially when the vehicle is otherwise in sound condition. A properly executed rebuild by a genuine specialist restores full performance and long-term reliability at a cost significantly lower than sourcing a quality replacement vehicle at this level.",
      },
      {
        question: "Do you provide a warranty on Audi Q5 engine work?",
        answer:
          "Yes, on every job without exception. All rebuilds, replacements, and major repairs come with a written warranty. We discuss all terms clearly at the point of booking   no small print, no conditions buried in the detail.",
      },
      {
        question: "Can you supply and fit the engine at your workshop?",
        answer:
          "Absolutely. Full supply and fit is available at our  workshop. For customers elsewhere in the UK, we coordinate installation through our approved fitter network.",
      },
      {
        question: "How long does an Audi Q5 engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the specific parts required and the extent of internal work identified. We confirm your exact timeframe at booking and honour it consistently.",
      },
    ],
  },
  "audi-q7-engines": {
    metaTitle: "Audi Q7 Engine Rebuild   Specialist Repairs, Reconditioning & Replacements Across the UK",
    metaDescription:
      "Audi Q7 engine rebuild, repair and replacement specialists . Expert diagnostics and warranty-backed work across 3.0 TDI, 4.2 TDI, 3.0 TFSI and V8 petrol variants with UK-wide collection and delivery.",
    h1: "Audi Q7 Engine Rebuild   Specialist Repairs, Reconditioning & Replacements Across the UK",
    intro: [
      "The Audi Q7 is a substantial machine in every sense   a large-format luxury SUV with engineering complexity to match. Its engine range, spanning the 3.0 TDI, 4.2 TDI, 3.0 TFSI, and the formidable 4.2 FSI and V8 petrol variants, represents some of the most technically demanding powerplants in the premium SUV segment. When one of these engines develops a serious problem, the stakes are high   and handing it to someone without the right experience is a decision most Q7 owners come to regret.",
      "At Vogue Technics, based in , we bring over 25 years of hands-on specialist engine experience to every Audi Q7 that comes through our workshop. From an Audi Q7 head gasket replacement to a full ground-up Audi Q7 engine rebuild, we deliver precision workmanship, honest pricing, and warranty-backed results that Q7 owners across the UK rely on.",
    ],
    sections: [
      {
        title: "Why Audi Q7 Owners Across the UK Trust Vogue Technics",
        paragraphs: [
          "Choosing the right specialist for an engine as complex and valuable as the Q7's isn't something to leave to chance. The difference between a properly executed rebuild and a poorly handled one isn't just performance   it's thousands of pounds and months of your time.",
        ],
      },
      {
        title: "Dedicated Specialists With 25 Years of Premium Engine Experience",
        paragraphs: [
          "Every technician at Vogue Technics has been developed specifically on premium European engines. We don't split our time between budget fleet vehicles and flagship SUVs   our focus is entirely on premium platforms, and the Audi Q7 sits squarely in our area of deepest expertise. The Audi Q7 3.0 TDI timing chain issues, the turbo vulnerabilities on high-mileage diesels, the head gasket sensitivities on the V8 petrol   we know these failure patterns intimately because we've dealt with them hundreds of times.",
          "Our reputation in  and across the wider UK has been earned entirely through the quality and consistency of our work. Not through advertising   through results.",
        ],
      },
      {
        title: "Itemised, Transparent Quotes With Absolutely No Hidden Charges",
        paragraphs: [
          "Audi Q7 engine reconditioning and rebuild work sits at the more significant end of the automotive repair spectrum, and we understand that cost clarity matters enormously before you commit. Every job we undertake begins with a detailed, itemised quote covering every element of the work required. The price we quote is the price you pay   no additions appearing at the end, no vague estimates that expand on collection day.",
        ],
      },
      {
        title: "Written Warranty Covering Every Engine Job We Complete",
        paragraphs: [
          "Whether we carry out a targeted Audi Q7 diesel engine repair or a complete engine rebuild, the work leaves our  workshop with a written warranty. We stand fully behind our workmanship   because our standards give us every reason to.",
        ],
      },
      {
        title: "Our Complete Audi Q7 Engine Services",
        paragraphs: [
          "We provide the full range of engine services for Audi Q7 owners across the United Kingdom. Every service is executed to the same exacting standard, whether it's a single-component repair or a comprehensive engine rebuild from the ground up.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure on the Audi Q7   particularly on the 4.2 FSI and 3.0 TFSI petrol variants   tends to escalate rapidly once it takes hold. The early signs are familiar: persistent overheating, coolant loss that can't be explained by visible leaks, white smoke from the exhaust that doesn't clear after warm-up. Audi Q7 head gasket replacement carried out promptly contains the damage. Left unaddressed, the same failure will work its way through cylinder head, valve seats, and eventually the entire engine. We replace Q7 head gaskets using OEM-grade components, identify and resolve the underlying cause, and restore a seal that lasts. If your Q7 is showing these symptoms right now, contact us today   not next week.",
        ],
      },
      {
        title: "Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "The Audi Q7 3.0 TDI timing chain is one of the most well-documented failure points across the entire model range. Tensioner wear, chain stretch, and guide deterioration are common on higher-mileage examples   and the consequences of ignoring the warning signs are catastrophic. A failed timing chain on a running engine causes immediate, severe internal damage. We replace Q7 timing chains as a complete system   chain, tensioner, guides, and sprockets together   because replacing individual components while leaving worn parts in place simply defers the problem rather than solving it.",
          "For Q7 variants requiring a timing belt, Audi Q7 timing belt replacement should be treated as non-negotiable at or before the manufacturer's recommended interval. If your Q7's service history is incomplete or unclear, book a timing inspection with us before the question answers itself expensively.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Audi Q7 turbo replacement is one of the more frequent requests we handle   particularly from owners of the 3.0 TDI diesel, where turbocharger wear at higher mileages is a well-established pattern. Power loss under load, black or blue smoke, oil contamination, and a building whine under acceleration are the signs to act on. What many owners don't realise is that a deteriorating turbo contaminates the engine's entire oil circuit as it fails   meaning delay doesn't just worsen the turbo problem, it creates secondary engine damage. We source quality replacement turbos for all Q7 engine variants, fit them to manufacturer specifications with proper oil feed inspection, and carry out full post-installation testing before the vehicle leaves our care.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Every Q7 engine situation is assessed individually   and we always recommend the most appropriate course of action, never the most expensive one.",
          "Audi Q7 engine rebuild   Complete strip-down to bare block, precise measurement and inspection of all internal components, replacement of every worn or out-of-tolerance part, and full reassembly to factory specifications. The outcome is an engine that delivers new-unit performance and reliability at a fraction of new-unit cost.",
          "Audi Q7 diesel engine repair   When the fault is specific and contained, targeted repair is the right call. We diagnose precisely, repair exactly what needs addressing, and ensure the root cause is resolved rather than masked.",
          "Audi Q7 engine replacement   When cumulative failure makes repair cost-ineffective, we supply and fit quality reconditioned or carefully sourced low-mileage engines, tested thoroughly before installation and backed by warranty.",
          "Audi Q7 V8 engine swap   Changing engine variants, upgrading from diesel to petrol, or fitting a newer-specification unit into an earlier shell? Our full swap service covers mounts, ancillaries, ECU remapping, and comprehensive post-swap diagnostics   handled completely and correctly from start to finish.",
        ],
      },
      {
        title: "Engine Inspection & Health Check",
        paragraphs: [
          "Considering purchasing a used Audi Q7 and want genuine certainty before committing? Or perhaps your Q7 is running slightly below par and you can't identify the cause? Our Audi Q7 engine inspection covers full electronic diagnostic scanning, compression testing across all cylinders, oil condition and contamination analysis, cooling system integrity checks, and a thorough visual inspection throughout the engine bay. You receive a written report with plain, honest findings   no upselling, no manufactured urgency, no vague conclusions. Just clear information that lets you make the right decision with complete confidence.",
        ],
      },
      {
        title: "Fast Turnaround & Nationwide Service From Our  Workshop",
        paragraphs: [
          "An Audi Q7 off the road is a significant inconvenience   and for many owners, a genuinely costly one. Our workshop operates with real efficiency because we respect both your time and your vehicle equally.",
          "Not located near ? That presents no obstacle at all. We operate a full engine collection and return service covering every region of the United Kingdom. Send us your unit and we'll return it rebuilt, thoroughly tested, and ready for installation   or we can coordinate fitting through our approved network of specialist installers nationwide, so professional fitting is accessible regardless of your location.",
          "Most complete Audi Q7 engine rebuilds are finished within 5–10 working days. Targeted repairs and engine replacements are frequently completed sooner. We give you an honest, realistic timeframe at the point of booking and keep you updated throughout   so you're never left wondering where things stand.",
        ],
      },
      {
        title: "Your Audi Q7 is too good a vehicle to trust to anyone but a genuine specialist.",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and serve Audi Q7 owners right across the United Kingdom. Get in touch   and get it done properly.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics carried out a full rebuild on the 3.0 TDI in my Q7. I'd had quotes from three other specialists   Vogue Technics came in well under all of them, communicated clearly throughout, and delivered the engine ahead of schedule. It's running better now than it has in three years. Genuinely outstanding.",
        by: "  Richard H., London",
      },
      {
        quote:
          "The timing chain on my Q7 went at 94,000 miles. Vogue Technics diagnosed the full extent of the damage honestly, gave me a fair quote the same day, and had everything resolved within a week. Proper specialists   the difference from a general garage is immediately obvious.",
        by: "  Donna W., Leeds",
      },
      {
        quote:
          "Arranged collection from Glasgow. The engine came back beautifully reconditioned, carefully packaged, and with a full written warranty included. Communication was excellent from start to finish. Five stars   wouldn't consider going anywhere else.",
        by: "  Fraser T., Glasgow",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi Q7 engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear identified during inspection. A 3.0 TDI rebuild typically starts from around £2,500–£4,500. A 4.2 TDI or V8 petrol rebuild will be higher given the additional complexity and component costs involved. Contact us directly for a precise, bespoke quote based on your specific engine code and vehicle condition.",
      },
      {
        question: "What are the most common engine problems on the Audi Q7?",
        answer:
          "The most frequently reported issues include timing chain tensioner failure on the 3.0 TDI, turbocharger wear on higher-mileage diesel variants, head gasket failure on the 4.2 FSI and 3.0 TFSI petrol engines, and oil consumption problems across several engine codes. Early professional diagnosis consistently prevents these from escalating into major engine damage.",
      },
      {
        question: "Is it worth rebuilding an Audi Q7 engine?",
        answer:
          "In the vast majority of cases, yes   particularly when the vehicle is otherwise in sound condition. A properly executed rebuild by a genuine specialist fully restores performance and long-term reliability at a cost substantially lower than sourcing a quality replacement vehicle at the Q7's level.",
      },
      {
        question: "Do you provide a warranty on Audi Q7 engine work?",
        answer:
          "Yes, without exception on every job. All rebuilds, replacements, and major repairs come with a written warranty. We discuss all terms clearly and openly at the point of booking   no small print, no buried conditions.",
      },
      {
        question: "Can you supply and fit the engine at your  workshop?",
        answer:
          "Absolutely. Full supply and fit is available at our  workshop. For customers located anywhere else in the UK, we coordinate professional installation through our trusted network of approved fitters nationwide.",
      },
      {
        question: "How long does an Audi Q7 engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the parts required and the extent of internal work identified. We confirm your precise timeframe at booking and honour it consistently throughout the job.",
      },
    ],
  },
  "audi-r8-engines": {
    metaTitle: "Audi R8 Engine Rebuild   High-Performance Engine Specialists Serving the Whole of the UK",
    metaDescription:
      "Audi R8 engine rebuild, repair and replacement specialists . High-performance expertise across 4.2 FSI V8 and 5.2 FSI V10 with precision diagnostics, transparent pricing and written warranty UK-wide.",
    h1: "Audi R8 Engine Rebuild   High-Performance Engine Specialists Serving the Whole of the UK",
    intro: [
      "The Audi R8 is not simply a car. It's a statement   a mid-engined supercar built around one of the most extraordinary naturally aspirated engine lineups ever fitted to a road-going vehicle. The 4.2 FSI V8 and the 5.2 FSI V10 are mechanical masterpieces, and when either develops a serious problem, the response needs to match the car's calibre entirely.",
      "At Vogue Technics, based in , we bring over 25 years of specialist engine experience to every Audi R8 that comes through our workshop. We understand precisely what these high-revving, high-tolerance engines demand   and we deliver the quality of workmanship, the technical precision, and the warranty-backed confidence that genuine supercar ownership requires.",
    ],
    sections: [
      {
        title: "Why Audi R8 Owners Trust Vogue Technics With Their Engine",
        paragraphs: [
          "An Audi R8 engine rebuild is not a job for a general garage. The V8 and V10 variants operate at tolerances and performance levels that demand specialist knowledge, precision tooling, and genuine experience with high-performance naturally aspirated engines. Getting it wrong doesn't just cost money   it compromises a car that deserves far better.",
        ],
      },
      {
        title: "Performance Engine Specialists   Not Generalists",
        paragraphs: [
          "Every technician at Vogue Technics works specifically on premium and performance European engines. We don't split our focus between everyday runabouts and hand-built supercars   the R8's V8 and V10 sit firmly within our area of deepest expertise. The specific bearing wear patterns of the 5.2 FSI under sustained high-rpm use, the timing chain characteristics of the 4.2 FSI, the thermal demands these engines place on every surrounding component   we know all of it from direct, hands-on experience accumulated over more than two decades.",
          "Our reputation has never been built through marketing. It's been built through results   through R8 owners who drove away satisfied and sent others our way without hesitation.",
        ],
      },
      {
        title: "Transparent, Itemised Pricing From the Outset",
        paragraphs: [
          "Audi R8 engine repair at the specialist level carries a significant financial weight   and we respect that completely. Before any work begins, you receive a clear, fully itemised quote covering every element of the job. No estimates that expand unexpectedly. No additional charges materialising at collection. The figure we give you is the figure you pay, and we stand behind it entirely.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job We Complete",
        paragraphs: [
          "Every Audi R8 engine rebuild in the UK and every major repair carried out at our  workshop leaves with a written warranty. We back our workmanship without reservation   because our standards give us every reason to do so.",
        ],
      },
      {
        title: "Our Complete Audi R8 Engine Services",
        paragraphs: [
          "We provide the full range of engine services for Audi R8 owners across the United Kingdom. Every service is executed to the same exacting standard   whether it's a single precision repair or a complete engine rebuild from bare block upward.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Head gasket failure on the Audi R8   whilst less common than on turbocharged platforms   carries significant consequences when it does occur, particularly given the V8 and V10's high-compression architecture. Overheating, coolant contamination in the oil, or persistent temperature instability under hard driving are the warning signs that demand immediate professional attention. Audi R8 head gasket replacement carried out at the right moment saves the engine. Deferred, it creates a cascade of damage through cylinder heads, valve seats, and internal surfaces that transforms a manageable repair into a far more complex and costly one. We use OEM-grade components throughout and address the root cause   not just the visible symptom.",
        ],
      },
      {
        title: "Timing Chain Replacement & Timing Service",
        paragraphs: [
          "The 4.2 FSI V8 carries known timing chain characteristics that become increasingly relevant at higher mileages and on engines that have seen sustained hard use. The Audi R8 timing chain replacement is a job that demands absolute precision   these engines rev to 8,000rpm and beyond, and any compromise in the timing system has immediate and severe consequences. We replace timing chains as complete assemblies   chain, tensioners, guides, and sprockets together   and carry out full Audi R8 timing service checks as part of every major engine job.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Every R8 engine situation is assessed individually   and our recommendation is always driven by what the engine genuinely needs, not by what generates the largest invoice.",
          "Audi R8 engine rebuild   Complete strip-down to bare block, precision measurement and inspection of every internal component including bearings, pistons, cylinder walls, valve seats, and all rotating assemblies. Every worn or out-of-tolerance part is replaced. The engine is reassembled to factory specifications with full documentation throughout.",
          "Audi R8 engine repair specialist   When the fault is contained and specific, targeted repair is the right and most cost-effective course. We diagnose with precision, repair exactly what needs addressing, and ensure everything surrounding the repaired component is assessed for related wear.",
          "Audi R8 engine replacement   When cumulative wear or multiple simultaneous failures make rebuild cost-ineffective, we source and fit quality reconditioned or carefully vetted low-mileage units. Every engine is thoroughly assessed before installation and leaves with warranty coverage in place.",
          "Audi R8 engine swap   Upgrading from the V8 to the V10, fitting a later-specification unit into an earlier Type 42 shell, or pursuing a specific performance configuration? Our full swap service covers mounts, dry-sump system integration, ECU mapping, ancillaries, and comprehensive post-swap diagnostics   handled completely and correctly from the first bolt to the final road test.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering purchasing a used Audi R8 and want genuine certainty before committing to a car at this price point? Or perhaps your R8 is running slightly below its usual standard and you want clarity on why? Our Audi R8 engine health check covers full electronic diagnostic scanning, compression and leak-down testing across all cylinders, oil condition and contamination analysis, dry-sump system inspection, and a thorough visual examination throughout the entire engine bay. You receive a detailed written report with plain, honest findings and clear recommendations   no upselling, no manufactured urgency, no vague conclusions that leave you none the wiser.",
        ],
      },
      {
        title: "UK-Wide Service & Fast Turnaround From Our  Workshop",
        paragraphs: [
          "Every day your Audi R8 sits off the road is a day it isn't being enjoyed as it was built to be. Our workshop in  operates with genuine efficiency and precision   because the car deserves both, and so does your time.",
          "Not located near ? That creates no obstacle whatsoever. We operate a full engine collection and return service covering every part of the UK. Send us your unit and we'll return it rebuilt, fully tested, and prepared for installation   or we can coordinate fitting through our network of approved specialist installers nationwide.",
          "Complete Audi R8 engine rebuilds are typically finished within 7–12 working days. Targeted repairs and engine replacements are frequently completed sooner. We confirm your timeframe at booking, keep you updated throughout, and deliver on the commitment we make.",
        ],
      },
      {
        title: "Your Audi R8 was built to an extraordinary standard. Its engine work should be too.",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and serve Audi R8 owners right across the United Kingdom. Trust the specialists   and give your R8 the rebuild it genuinely deserves.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "I trusted Vogue Technics with the V10 in my R8 after a bearing failure. The level of precision and care they brought to the rebuild was exactly what a car like this deserves. It came back running smoother and harder than I can ever remember. Exceptional work from genuine specialists.",
        by: "  Alexander P., London",
      },
      {
        quote:
          "Was quoted an eye-watering figure by two other workshops for an R8 engine replacement. Vogue Technics came in significantly below both, provided a written warranty, and completed the job ahead of schedule. The whole experience was completely professional from first call to collection.",
        by: "  James W., Surrey",
      },
      {
        quote:
          "Arranged collection from Edinburgh for a full timing chain service and engine health check on my V8 R8. The report they provided was detailed, honest, and genuinely useful. The work itself was flawless. I wouldn't consider taking it anywhere else now.",
        by: "  Callum R., Edinburgh",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi R8 engine rebuild cost in the UK?",
        answer:
          "Costs vary based on engine variant   V8 or V10   and the extent of internal wear identified during strip-down inspection. A 4.2 FSI V8 rebuild typically starts from around £4,500–£7,000. A 5.2 FSI V10 rebuild will be higher given the additional complexity, component costs, and precision requirements involved. Contact us directly for a bespoke, accurate quote based on your specific engine and its condition.",
      },
      {
        question: "What are the most common engine problems on the Audi R8?",
        answer:
          "The most frequently reported issues include main bearing wear on the V10 under sustained high-rpm use, timing chain tensioner wear on the V8 4.2 FSI, oil consumption on higher-mileage examples, and dry-sump system degradation. Early professional diagnosis consistently prevents these from escalating into far more extensive and expensive failures.",
      },
      {
        question: "Is it worth rebuilding an Audi R8 engine?",
        answer:
          "Without question   particularly given the R8's retained values and the cost of sourcing a quality replacement vehicle at this level. A properly executed rebuild by a genuine high-performance engine specialist restores the car's performance character and long-term reliability.",
      },
      {
        question: "Do you provide a warranty on Audi R8 engine work?",
        answer:
          "Yes, on every job without exception. All rebuilds, replacements, and major repairs come with a written warranty. Terms are discussed openly and clearly at the point of booking   no small print designed to limit your protection.",
      },
      {
        question: "Can you supply and fit the engine at your  workshop?",
        answer:
          "Absolutely. Full supply and fit is available at our  workshop. For customers located anywhere else in the UK, we coordinate professional installation through our trusted network of approved performance engine fitters.",
      },
      {
        question: "How long does an Audi R8 engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 4–6 working days. A complete engine rebuild takes 7–12 working days depending on internal findings and parts required. We confirm your precise timeframe at booking and maintain consistent communication throughout.",
      },
    ],
  },
  "audi-r8-spyder-engines": {
    metaTitle: "Audi R8 Spyder Engine Rebuild   Open-Top Supercar Engine Specialists Across the UK",
    metaDescription:
      "Audi R8 Spyder engine rebuild, repair and replacement specialists . High-performance expertise across 4.2 FSI V8 and 5.2 FSI V10 with precision diagnostics, transparent pricing and written warranty UK-wide.",
    h1: "Audi R8 Spyder Engine Rebuild   Open-Top Supercar Engine Specialists Across the UK",
    intro: [
      "There is nothing quite like the Audi R8 Spyder. Drop the roof, open the throttle, and the 4.2 FSI V8 or 5.2 FSI V10 behind you delivers a sound and sensation that very few cars on earth can match. It's a machine built around its engine   and when that engine develops a problem, the response needs to be worthy of the car itself.",
      "At Vogue Technics, based in , we bring over 25 years of specialist high-performance engine experience to every Audi R8 Spyder that comes through our workshop. We understand the unique demands of the Spyder platform and deliver the precision workmanship, honest pricing, and written warranty that R8 Spyder owners across the UK expect and deserve.",
    ],
    sections: [
      {
        title: "Why Audi R8 Spyder Owners Choose Vogue Technics",
        paragraphs: [
          "Handing an Audi R8 Spyder to the wrong workshop is a decision that costs far more than money. The V8 and V10 engines fitted to the Spyder are sophisticated, high-tolerance naturally aspirated units that operate under demanding conditions   and they demand a level of specialist knowledge that simply isn't found in a general garage.",
        ],
      },
      {
        title: "High-Performance Engine Specialists With 25 Years of Real Experience",
        paragraphs: [
          "Every technician at Vogue Technics has been developed specifically on premium and high-performance European engines. The R8 Spyder's 4.2 FSI and 5.2 FSI are engines we know in genuine depth   their specific bearing characteristics, their timing system behaviour under sustained high-rpm use, and their thermal demands in open-top configuration where airflow management differs meaningfully from the closed coupe. That knowledge comes from 25 years of hands-on work, not from reading a workshop manual.",
          "Our standing in  and across the wider UK has been earned entirely through the quality of our work and the honesty of our service. R8 Spyder owners who trust us once invariably return   and send others our way.",
        ],
      },
      {
        title: "Clear, Itemised Pricing With No Unwelcome Additions",
        paragraphs: [
          "Audi R8 Spyder engine fault specialist work at this level carries real financial weight, and we respect that completely. Every job begins with a fully itemised, transparent quote covering every element of the work required. The figure we give you at the outset is the figure you pay at collection   no additions, no revisions, no vague estimates that expand once we've started. You deserve that clarity, and we deliver it without exception.",
        ],
      },
      {
        title: "Written Warranty Backing Every Job We Complete",
        paragraphs: [
          "Whether we carry out a targeted repair or a complete Audi R8 Spyder engine rebuild, the work leaves our  workshop with a written warranty. We stand behind everything we do   because our standards mean we have nothing to qualify or hide.",
        ],
      },
      {
        title: "Our Complete Audi R8 Spyder Engine Services",
        paragraphs: [
          "We provide the full range of engine services for Audi R8 Spyder owners throughout the United Kingdom. Every service is delivered to the same exacting standard   from a single precision repair to a ground-up engine rebuild on the V10.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Audi R8 V10 head gasket repair on the Spyder carries additional complexity compared to the coupe   the open-body structure and different thermal management characteristics of the convertible platform mean heat management around the cylinder heads requires careful attention. The warning signs remain consistent: persistent overheating, coolant contamination, milky deposits in the oil, or temperature instability under hard use. Left unaddressed, a failing head gasket on a high-compression naturally aspirated engine like the 5.2 FSI creates progressive damage through cylinder heads, valve seats, and internal surfaces that escalates rapidly and expensively. We replace R8 Spyder head gaskets using OEM-grade components, identify and resolve the underlying thermal or mechanical cause, and restore a seal built to withstand the engine's considerable operating demands.",
        ],
      },
      {
        title: "Timing Chain & Timing Service",
        paragraphs: [
          "The Audi R8 5.2 FSI timing chain service is one of the most critical maintenance and repair procedures on the entire V10 engine. At the rpm levels the R8 Spyder regularly operates at   8,000rpm and beyond in normal enthusiastic use   any degradation in the timing system creates consequences that are both immediate and severe. Chain stretch, tensioner wear, and guide deterioration on higher-mileage examples are well-documented patterns we've addressed many times.",
          "We replace timing chains as complete systems   chain, tensioners, guides, and sprockets together   because replacing individual components while leaving worn parts in place simply defers the failure rather than preventing it.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Conversion",
        paragraphs: [
          "Every R8 Spyder engine situation is assessed individually   and our recommendation is always driven entirely by what the engine genuinely needs.",
          "Audi R8 Spyder engine rebuild   Complete strip-down to bare block, precision measurement and inspection of every internal component including bearings, pistons, cylinder walls, connecting rods, valve seats, and all rotating assemblies. Every worn or out-of-tolerance component is replaced with OEM-grade parts. The engine is reassembled to factory specifications with full documentation at every stage.",
          "Audi R8 Spyder engine repair   When the fault is specific and contained, targeted repair delivers the best outcome. We diagnose with precision, resolve the root cause rather than the symptom, and ensure everything surrounding the repaired component is assessed for related wear.",
          "Used Audi R8 engine for sale UK   When cumulative wear or multiple simultaneous failures make a rebuild cost-ineffective, we source and fit quality reconditioned or carefully vetted low-mileage replacement units. Every engine is thoroughly assessed before installation and leaves with full warranty documentation.",
          "Audi R8 V8 to V10 engine conversion   Upgrading from the 4.2 FSI V8 to the 5.2 FSI V10 in your Spyder is a transformation that requires absolute precision across mounts, dry-sump system integration, ECU mapping, ancillaries, and post-conversion diagnostics. We handle the complete process   properly, from first assessment to final road test.",
        ],
      },
      {
        title: "Pre-Purchase Inspection & Engine Health Check",
        paragraphs: [
          "Considering buying an Audi R8 Spyder and want genuine certainty before committing at this price point? Or perhaps your existing Spyder is running slightly below its usual exceptional standard and you want to know precisely why? Our Audi R8 pre-purchase engine inspection and health check service covers full electronic diagnostic scanning, compression and leak-down testing across all cylinders, oil condition and contamination analysis, dry-sump system integrity assessment, timing system inspection, and a thorough visual examination throughout the entire engine bay. You receive a detailed written report with clear, plain-English findings and honest recommendations. No upselling. No manufactured urgency. No vague language designed to prompt unnecessary work.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Service From Our  Workshop",
        paragraphs: [
          "An Audi R8 Spyder sitting unused in a workshop is a particular kind of frustration   especially when the weather is right and the roads are calling. We work with genuine efficiency because we understand what this car means to its owner.",
          "Not near ? That creates no obstacle whatsoever. We operate a full engine collection and return service covering every region of the United Kingdom. Send us your unit and we'll return it rebuilt, fully tested to the performance demands of the R8 Spyder, and prepared for installation   or we coordinate fitting through our approved network of specialist performance engine installers nationwide, so professional fitment is accessible regardless of your location.",
          "Honest turnaround times, consistently delivered: complete Audi R8 Spyder engine rebuilds are typically finished within 7–12 working days. Targeted repairs and replacement fitments are frequently completed sooner. We confirm your precise timeframe at booking and maintain consistent communication throughout.",
        ],
      },
      {
        title: "The Audi R8 Spyder deserves engine work that matches its extraordinary character.",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and proudly serve Audi R8 Spyder owners right across the United Kingdom. Don't settle for anything less than genuine specialist expertise   your Spyder has earned it.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics rebuilt the V10 in my R8 Spyder after a bearing issue developed at high mileage. The depth of knowledge they demonstrated from the very first conversation told me immediately these were the right people. The engine came back transformed   smoother, stronger, and running better than it has since new. Absolutely the only place I'd consider for this car.",
        by: "  Sebastian A., London",
      },
      {
        quote:
          "I was quoted figures that made my eyes water by two other specialists for an R8 Spyder engine replacement. Vogue Technics came in significantly below both, explained the entire process clearly, and delivered ahead of schedule with a written warranty included. Real professionals who clearly love what they do.",
        by: "  Timothy H., Surrey",
      },
      {
        quote:
          "Arranged a pre-purchase inspection through Vogue Technics before buying my R8 Spyder. The report they produced was thorough, honest, and gave me complete confidence in the purchase. When I later needed a timing service done, going back to them was an easy decision. Five stars without any reservation.",
        by: "  Daniel F., Bristol",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi R8 Spyder engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear identified during strip-down. A 4.2 FSI V8 rebuild typically starts from around £4,500–£7,000. A 5.2 FSI V10 rebuild will be higher given the additional complexity, component specification, and precision requirements involved. Contact us directly for a bespoke, accurate quote based on your specific engine and its current condition.",
      },
      {
        question: "What are the most common engine problems on the Audi R8 Spyder?",
        answer:
          "The most frequently reported issues include main bearing wear on the V10 under sustained high-rpm use, timing chain tensioner degradation on the V8 4.2 FSI, oil consumption on higher-mileage examples, and dry-sump system wear. The Spyder's open configuration also creates specific thermal management considerations that can accelerate certain failure patterns if not properly addressed.",
      },
      {
        question: "Is rebuilding an Audi R8 Spyder engine worth it?",
        answer:
          "Unquestionably   particularly given the R8 Spyder's strong retained values and the cost of sourcing a quality replacement at this level. A properly executed rebuild by genuine high-performance engine specialists restores the car's character, performance, and long-term reliability.",
      },
      {
        question: "What does an Audi R8 V8 to V10 conversion involve?",
        answer:
          "A proper V8 to V10 conversion in the R8 Spyder covers engine removal and replacement, dry-sump system adaptation, mount modification where required, ECU remapping to V10 specifications, ancillary component integration, and comprehensive post-conversion diagnostics and road testing. We handle the complete process at our  workshop.",
      },
      {
        question: "Do you provide a warranty on Audi R8 Spyder engine work?",
        answer:
          "Yes, on every job without exception. All rebuilds, replacements, conversions, and major repairs come with a written warranty. Terms are discussed openly and clearly at the point of booking   no small print designed to limit your protection.",
      },
      {
        question: "How long does an Audi R8 Spyder engine rebuild take?",
        answer:
          "A complete rebuild typically takes 7–12 working days. Targeted repairs and engine replacements are frequently completed in 4–6 working days. We confirm your precise timeframe at booking and maintain consistent communication throughout.",
      },
    ],
  },
  "audi-tt-engines": {
    metaTitle: "Audi TT Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    metaDescription:
      "Audi TT engine rebuild, repair and replacement specialists . We cover 8N/8J/8S generations across 1.8T, 2.0 TFSI and 2.5 TFSI with diagnostic-led work, transparent pricing and written warranty UK-wide.",
    h1: "Audi TT Engine Rebuild   Specialist Repairs, Replacements & Rebuilds Across the UK",
    intro: [
      "The Audi TT has earned its place as one of the most genuinely iconic sports cars of the modern era. From the original 8N's clean, Bauhaus-inspired debut to the sharper, more focused 8J, and through to the precision-engineered 8S that closed the TT's production run, every generation attracted drivers who genuinely care about their car. When the engine in one of these machines develops a serious problem, that same care demands a specialist response   not a generic garage with a generic approach.",
      "At Vogue Technics, based in , we bring over 25 years of hands-on specialist engine experience to every Audi TT that comes through our workshop. Whether you're dealing with a failing turbo on a 2.0 TFSI, a timing chain issue on an 8J, or you need a complete Audi TT engine rebuild on a TTS or TT RS, we deliver the technical precision, honest pricing, and warranty-backed workmanship that TT owners across the UK rely on.",
    ],
    sections: [
      {
        title: "Why Audi TT Owners Across the UK Trust Vogue Technics",
        paragraphs: [
          "The Audi TT spans three distinct generations and a wide range of engine variants   from the 1.8T of the original 8N through to the 2.5 TFSI five-cylinder in the TT RS. Each generation carries its own specific engine characteristics, known failure patterns, and technical demands. Treating them all the same is a mistake that costs TT owners dearly. We don't make that mistake.",
        ],
      },
      {
        title: "Platform-Specific Knowledge Across All Three TT Generations",
        paragraphs: [
          "Every technician at Vogue Technics has been trained and developed specifically on premium European engines. We understand the generational differences that matter   the 1.8T's known oil sludge sensitivity on 8N models, the 2.0 TFSI timing chain tensioner behaviour on 8J platforms, the turbocharger characteristics of the 8S's EA888 engine under performance driving conditions. That depth of platform-specific knowledge is what separates a genuine specialist from a workshop that's simply willing to attempt the work.",
          "Our reputation in  and across the wider UK has been built entirely through results. TT owners who come to us once come back   and recommend us to others without hesitation.",
        ],
      },
      {
        title: "Honest, Itemised Quotes   No Vague Estimates",
        paragraphs: [
          "Audi TT engine repair costs can feel uncertain before you've had a proper diagnosis and quote. We remove that uncertainty completely. Before any work begins on your TT, you receive a clear, fully itemised quote covering every element of the job. The price we give you is the price you pay   no additions, no revisions, no charges that materialise unexpectedly when you arrive to collect. Just complete transparency from the outset.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Every Audi TT engine rebuild in the UK and every major repair completed at our  workshop carries a written warranty. We stand behind our workmanship fully   because our standards give us every reason to do so without hesitation.",
        ],
      },
      {
        title: "Our Complete Audi TT Engine Services",
        paragraphs: [
          "We cover the full spectrum of engine services for Audi TT owners across the United Kingdom   across all generations, all engine variants, and all performance specifications from standard 1.8T to full TT RS.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Audi TT head gasket replacement is a job we carry out regularly across all three TT generations   but the urgency is the same regardless of which engine is affected. Overheating, white exhaust smoke that lingers after warm-up, coolant loss without a visible external leak, or the unmistakeable signs of oil and coolant mixing all demand immediate professional attention. On a turbocharged engine like the TT's, the consequences of a neglected head gasket failure escalate significantly faster than on a naturally aspirated unit. We replace TT head gaskets using OEM-grade components, identify the root cause driving the failure, and restore a seal built to withstand the engine's operating demands long-term.",
        ],
      },
      {
        title: "Timing Chain & Cambelt Replacement",
        paragraphs: [
          "Understanding whether your specific TT requires a timing chain or a cambelt is the first step   and getting it wrong is not an option either way. The 2.0 TFSI units fitted to 8J and 8S models are well-documented for timing chain tensioner wear, particularly under sustained performance driving. Audi TT timing chain replacement carried out as a complete assembly   chain, tensioner, guides, and sprockets together   is the only approach that genuinely resolves the issue rather than deferring it.",
          "For TT variants requiring a cambelt, Audi TT cambelt replacement should be treated as an absolute deadline, not a guideline. A snapped cambelt on an interference engine means immediate, severe internal damage with no warning and no second chance. If your TT's service history is incomplete or uncertain, book a timing inspection with us before the question answers itself in the worst possible way.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "The 2.0 TFSI and 2.5 TFSI engines fitted across the TT, TTS, and TT RS variants place significant demands on their turbocharging systems   particularly when driven as these cars are designed to be driven. Audi TT turbo replacement becomes necessary when power loss under load, black or blue smoke, oil contamination in the intake system, or a building turbo whine make themselves known. We source quality replacement turbos for all TT engine variants, fit them to manufacturer specifications with proper oil feed and return line inspection, and carry out full post-installation testing under load before the car leaves our care.",
        ],
      },
      {
        title: "Engine Rebuild, Repair, Replacement & Swap",
        paragraphs: [
          "Every TT engine situation is assessed individually   and our recommendation is always the most appropriate course of action for your specific engine, not the most lucrative one for us.",
          "Audi TT engine rebuild   Complete strip-down to bare block, precision inspection and measurement of all internal components, replacement of every worn or out-of-tolerance part, and full reassembly to factory specifications.",
          "Audi TT engine repair   When the fault is specific and contained, targeted precision repair delivers the best outcome. We diagnose the root cause accurately, repair exactly what needs addressing, and verify everything surrounding the repair is in sound condition before the car goes back on the road.",
          "Audi TT engine replacement   When cumulative internal wear or multiple simultaneous failures make rebuild cost-ineffective, we source and fit quality reconditioned or carefully vetted low-mileage replacement engines.",
          "Audi TT engine swap   Upgrading specification, fitting later engines into earlier shells, or pursuing a specific performance configuration? Our full swap service covers mounts, ancillary integration, ECU remapping, and comprehensive post-swap diagnostics   handled completely and correctly.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering purchasing a used Audi TT and want real certainty before committing? Or perhaps your existing TT is running slightly below its usual standard and you want to know precisely why? Our Audi TT engine health check covers full electronic diagnostic scanning across all systems, compression testing, oil condition and contamination analysis, cooling system integrity checks, timing system inspection, and a thorough visual examination throughout the engine bay. You receive a detailed written report with clear, honest findings and actionable recommendations.",
        ],
      },
      {
        title: "Fast Turnaround & UK-Wide Service From Our  Workshop",
        paragraphs: [
          "A TT off the road isn't just an inconvenience   for many owners, it's a genuinely felt absence. Our workshop in  operates with real efficiency and genuine care, because we understand what these cars mean to the people who own them.",
          "Not near ? That's no issue at all. We operate a full engine collection and return service covering every part of the UK. Send us your unit and we'll return it rebuilt, fully tested, and ready for installation   or we can coordinate fitting through our trusted network of approved performance engine installers nationwide, ensuring professional fitment wherever you're located.",
          "Turnaround times that are realistic and consistently honoured: most complete Audi TT engine rebuilds are finished within 5–10 working days. Targeted repairs and engine replacements are frequently completed sooner. We give you an honest, accurate completion timeframe at the point of booking   and we keep you updated throughout the process.",
        ],
      },
      {
        title: "Your Audi TT was built with genuine purpose and passion   its engine work should be no different.",
        paragraphs: [
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in , and proudly serve Audi TT owners right across the United Kingdom. Trust the specialists   and get your TT back to exactly what it should be.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics rebuilt the 2.0 TFSI in my TTS after a timing chain failure. From the initial diagnosis right through to collection, everything was handled with complete professionalism. The engine runs harder and cleaner than it ever did. I wouldn't consider taking it anywhere else now.",
        by: "  Nathan B., London",
      },
      {
        quote:
          "Three quotes for an engine replacement on my TT RS. Vogue Technics came in well under the other two, provided a written warranty, and had the car back to me ahead of the promised date. Genuine specialists   the difference from a general garage is obvious from the first conversation.",
        by: "  Claire M., Manchester",
      },
      {
        quote:
          "Arranged collection from Cardiff for a full engine rebuild on my 3.2 V6 TT. It came back beautifully rebuilt, carefully packaged, and with full documentation. Communication throughout was excellent. Five stars   exactly the kind of specialist these cars deserve.",
        by: "  Rhys T., Cardiff",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi TT engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear found during strip-down. A 1.8T or 2.0 TFSI rebuild typically starts from around £1,800–£3,200. A 3.2 V6 or 2.5 TFSI TT RS rebuild will be higher given the additional complexity and component specification involved. Contact us directly for a precise, bespoke quote based on your specific engine code and vehicle condition.",
      },
      {
        question: "What are the most common engine problems on the Audi TT?",
        answer:
          "The most frequently reported issues include timing chain tensioner failure on 2.0 TFSI variants across 8J and 8S platforms, turbocharger wear particularly under performance driving conditions, head gasket failure on the 1.8T in older 8N models, and oil consumption issues across several engine codes. Early professional diagnosis consistently prevents these from developing into far more expensive failures.",
      },
      {
        question: "Is it worth rebuilding an Audi TT engine?",
        answer:
          "In the vast majority of cases, yes   especially when the rest of the vehicle is in sound condition. A properly executed rebuild restores the TT's driving character and long-term reliability at a cost significantly lower than sourcing a quality replacement vehicle.",
      },
      {
        question: "Do you provide a warranty on Audi TT engine work?",
        answer:
          "Yes, on every job without exception. All rebuilds, replacements, and major repairs come with a written warranty. All terms are discussed clearly and openly at the point of booking   no small print, no conditions buried where you won't find them.",
      },
      {
        question: "Can you supply and fit the engine at your  workshop?",
        answer:
          "Absolutely. Full supply and fit is available at our  workshop. For customers elsewhere in the UK, we coordinate professional installation through our trusted network of approved fitters nationwide.",
      },
      {
        question: "How long does an Audi TT engine replacement take?",
        answer:
          "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the parts required and the extent of internal work identified. We confirm your precise timeframe at booking and honour it consistently throughout the job.",
      },
    ],
  },
  "audi-tt-roadster-engines": {
    metaTitle: "Audi TT Roadster Engines Rebuild   Expert Engine Services Across the UK",
    metaDescription:
      "Audi TT Roadster engine rebuild, repair and replacement specialists . Head gasket, timing chain/belt, turbo and warranty-backed engine services with UK-wide support.",
    h1: "Audi TT Roadster Engines Rebuild   Expert Engine Services Across the UK",
    intro: [
      "If you own an Audi TT Roadster and you're staring down a failing engine, you've found the right people. At Vogue Technics, based in , we specialise in performance and prestige vehicle engines   and the Audi TT Roadster is a car we know inside out.",
      "From a full Audi TT Roadster engines rebuild to a straightforward used engine swap, we bring over 25 years of hands-on experience to every job we take on.",
      "Whether your 1.8T is burning coolant, your MK2's timing chain is rattling, or your 2.0 TFSI has lost all its drive, we diagnose it honestly and fix it properly   no guesswork, no cutting corners.",
    ],
    sections: [
      {
        title: "Why Audi TT Roadster Owners Trust Vogue Technics",
        paragraphs: [
          "The Audi TT Roadster is a driver's car. It deserves more than a generalist garage giving it a cursory look. At Vogue Technics, we don't split our attention across every make and model on the road.",
          "Our technicians are trained on performance engines specifically, and the TT's 1.8T and 2.0 TFSI units are platforms we work on week in, week out.",
        ],
      },
      {
        title: "25 Years of Engine Expertise, Right Here in ",
        paragraphs: [
          "Since we opened our doors, we've rebuilt and replaced thousands of engines for drivers across the United Kingdom. Our reputation hasn't been built on advertising   it's been built on results.",
          "When your engine leaves our workshop, it runs right. That's the standard we hold ourselves to, every single time.",
        ],
      },
      {
        title: "Transparent Quotes, No Nasty Surprises",
        paragraphs: [
          "Engine work on a performance vehicle can feel financially daunting. We get that. That's why every customer receives a clear, itemised quote before a single bolt is touched.",
          "Whether you're asking about Audi TT timing belt service cost, Audi TT 2.0 TFSI turbocharger cost, or a full engine rebuild, you'll know exactly what you're paying   upfront.",
        ],
      },
      {
        title: "Written Warranty on Every Engine Job",
        paragraphs: [
          "Every rebuild, replacement, and major repair we carry out comes with a written warranty.",
          "We stand behind our work because we know it's done correctly.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "The Audi TT 1.8T head gasket blown issue is one of the most common problems we see walk through our doors.",
          "White smoke from the exhaust, coolant disappearing without explanation, or an overheating gauge that won't settle   these are all warning signs.",
          "Our team replaces head gaskets using OEM-grade components, restoring proper compression and sealing the engine correctly for long-term reliability.",
          "Act early and you save your engine. Leave it too long and you risk far more expensive damage.",
        ],
      },
      {
        title: "Timing Chain & Timing Belt Replacement",
        paragraphs: [
          "The Audi TT MK2 timing chain rattle fix is a job we perform regularly. A stretched or worn timing chain doesn't just rattle   it can snap without warning, causing catastrophic internal engine damage in seconds.",
          "We replace the full kit: chain, tensioners, guides, and sprockets   not a half-measure patch.",
          "For variants that use a belt rather than a chain, we also carry out Audi TT timing belt service across all applicable engine configurations.",
          "If you don't know the belt's history, replace it. The cost of the service is nothing compared to the cost of ignoring it.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Losing power on acceleration? Hearing a whine or whistle under load? Noticing excessive smoke from the exhaust? These are classic signs of turbo failure on the 2.0 TFSI.",
          "Audi TT 2.0 TFSI turbocharger cost varies depending on the unit required, but we source quality replacements and fit them to manufacturer specifications   followed by full post-installation testing before the car goes anywhere near the road.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "A full Audi TT Roadster engines rebuild is the right choice when your engine has significant mileage, multiple worn components, or damage that goes beyond a single repair.",
          "We strip the unit completely, inspect every internal component under proper conditions, replace what needs replacing, and reassemble to factory tolerances.",
          "The result is an engine that performs like new   at a fraction of what a factory replacement would cost you.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Not every fault demands a full rebuild. Our diagnostic process identifies the exact root cause of your problem, so you only pay for what's genuinely needed.",
          "Oil leaks, bearing wear, valve issues, sensor faults   we handle all levels of engine repair on the Audi TT Roadster with the same precision and care.",
        ],
      },
      {
        title: "Engine Replacement & Engine Swap",
        paragraphs: [
          "Sometimes a replacement is simply the smarter call. We supply and fit quality reconditioned Audi TT Roadster engines and low-mileage used units sourced from trusted suppliers   every one tested before installation.",
          "If you're looking for a used Audi TT engine for sale in the UK, or considering an engine swap into your Roadster, we manage the complete process including ancillaries, remapping where required, and post-swap diagnostics.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Thinking of buying a used Audi TT Roadster, or unsure what's causing that dashboard warning? Our engine health check covers compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection.",
          "You receive a written report with honest findings   no upselling, no vague answers.",
          "If you're arranging an Audi TT pre-purchase inspection in the UK, this is the service that gives you genuine peace of mind before you hand over your money.",
        ],
      },
      {
        title: "Fast UK-Wide Service & Local Workshop in ",
        paragraphs: [
          "We know being without your Audi TT is frustrating   especially if it's a car you drive with genuine enthusiasm. That's why we work efficiently without ever compromising on quality.",
        ],
      },
      {
        title: "Engine Collection & Delivery Across the UK",
        paragraphs: [
          "Can't get to ? Not a problem. We offer an engine collection and delivery service covering the whole of the UK.",
          "Send us your unit, and we'll return it rebuilt or replaced   fully tested and ready to fit. We also work with a trusted network of approved installers nationwide if you need the fitting handled locally.",
        ],
      },
      {
        title: "Realistic Turnaround Times We Actually Stick To",
        paragraphs: [
          "Most engine rebuilds are completed within 5 to 10 working days. Repairs and replacements are often quicker.",
          "We give you a realistic timeframe when you book your Audi TT Roadster engine change   and we honour it.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics rebuilt my 1.8T after a head gasket failure. Honest pricing, clear communication, and the engine runs better than it did when I bought the car. Wouldn't go anywhere else.",
        by: "  Daniel F., London",
      },
      {
        quote:
          "I was quoted a ridiculous price by a main dealer for a 2.0 TFSI turbo replacement. Vogue Technics did it for far less and gave me a warranty on top. Brilliant service.",
        by: "  Sarah K., Birmingham",
      },
      {
        quote:
          "Sent my engine down from Leeds for a full rebuild. It came back ahead of schedule, well packaged, and the car pulls perfectly now. Five stars without hesitation.",
        by: "  Marcus T., Leeds",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi TT Roadster engine rebuild cost in the UK?",
        answer:
          "Costs depend on engine variant and internal wear. A full rebuild typically starts from around £1,800–£3,500. Contact us for a detailed quote based on your specific TT Roadster.",
      },
      {
        question: "What are the most common Audi TT Roadster engine problems?",
        answer:
          "Common issues include 1.8T head gasket failure, MK2 timing chain wear and rattle, 2.0 TFSI turbo failure, and engine management faults triggered by sensor or emissions issues. Early diagnosis saves money.",
      },
      {
        question: "Is it worth rebuilding an Audi TT Roadster engine?",
        answer:
          "In most cases, yes   especially if the rest of the car is in good condition. A quality rebuild extends the vehicle’s life considerably and costs far less than replacing the car.",
      },
      {
        question: "Do you supply used Audi TT engines for sale in the UK?",
        answer:
          "Yes. We supply quality used and reconditioned TT Roadster engines, tested before dispatch. Supply-only or supply and fit is available, with written warranty documentation.",
      },
      {
        question: "How long does an Audi TT Roadster engine change take?",
        answer:
          "A replacement typically takes 3–5 working days. A full rebuild usually takes 5–10 working days. We confirm timelines at booking and keep you updated.",
      },
      {
        question: "Do you cover the whole of the UK?",
        answer:
          "Yes. Our workshop is in , and we serve TT Roadster owners nationwide via collection/delivery and approved installers.",
      },
    ],
  },
  "audi-a3-convertible-engines": {
    metaTitle: "Audi A3 Convertible Engine Rebuild   Expert Repairs, Replacements & Reconditioning Across the UK",
    metaDescription:
      "Audi A3 Convertible (Cabriolet) engine specialists . Head gasket, timing chain/belt, turbo, rebuild and replacement services with written warranty and UK-wide support.",
    h1: "Audi A3 Convertible Engine Rebuild   Expert Repairs, Replacements & Reconditioning Across the UK",
    intro: [
      "Owning an Audi A3 Convertible is one of life's genuine pleasures   open-top driving combined with Audi's trademark build quality and refinement. But when the engine starts playing up, that pleasure disappears fast.",
      "At Vogue Technics, based in , we specialise in Audi engine work, and the A3 Convertible   also known as the A3 Cabriolet   is a vehicle we know inside out.",
      "Whether you're dealing with timing chain failure, a blown head gasket, turbo trouble, or an engine that's simply worn beyond reasonable repair, we have the expertise, the tooling, and the genuine parts knowledge to sort it   properly.",
      "With over 25 years of hands-on experience and hundreds of satisfied Audi owners served across the UK, Vogue Technics is the specialist you want when your A3 Convertible needs serious engine attention.",
    ],
    sections: [
      {
        title: "Why Audi A3 Convertible Owners Trust Vogue Technics",
        paragraphs: [
          "The Audi A3 Convertible is a premium vehicle that deserves premium engine care. Take it to the wrong garage and you risk misdiagnosis, cheap parts, and a fault that comes back within months.",
        ],
      },
      {
        title: "Audi Specialists With Real-World Experience",
        paragraphs: [
          "Every technician at Vogue Technics works on Audi engines day in, day out. We understand the specific vulnerabilities of the A3 Convertible's 1.8 TFSI, 2.0 TFSI, and 2.0 TDI engine variants   the known failure points, the correct repair procedures, and the parts that genuinely last.",
          "This isn't general garage work. This is specialist knowledge built over decades.",
        ],
      },
      {
        title: "Over 25 Years Serving UK Drivers",
        paragraphs: [
          "Since we opened our doors in , we've built our reputation entirely through the quality of our work. Thousands of engines rebuilt, repaired, and replaced.",
          "Thousands of customers who came back   and who recommended us to friends and family. When we fix your Audi A3 Convertible engine, it stays fixed.",
        ],
      },
      {
        title: "Straight Talking, Transparent Pricing",
        paragraphs: [
          "We know engine work feels daunting, particularly on a convertible where labour access adds complexity. That's exactly why we give you a clear, itemised quote before anything is touched.",
          "No vague estimates. No surprise charges on collection day. Just honest pricing for honest work. Call us or submit an online enquiry to get your quote today.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Coolant disappearing without explanation, white smoke trailing from your exhaust, or your A3 Convertible running hotter than it should   these are the classic warning signs of head gasket failure.",
          "On the 1.8 and 2.0 TFSI engines in particular, head gasket issues are a known vulnerability that worsens quickly if ignored.",
          "We replace head gaskets using OEM-grade components, resurface the head where necessary, pressure-test the cooling system, and reassemble everything to manufacturer tolerances.",
          "We don't just swap the gasket and hope for the best   we address the root cause and make sure it doesn't come back.",
          "A head gasket fault caught early is a straightforward repair. Left too long, coolant enters the combustion chamber, oil becomes contaminated, and what was a repair becomes a full engine rebuild.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "The 2.0 TFSI engine fitted to many Audi A3 Convertibles has a well-documented history of timing chain wear.",
          "A rattling noise on cold start, rough idling, or a sudden loss of power are all warning signs that the timing chain is stretching or failing.",
          "Ignore them, and the chain can snap   causing immediate, catastrophic internal engine damage.",
          "We replace the complete timing chain assembly   chain, tensioners, guides, and sprockets   as a full kit. We never replace individual components and leave worn parts in place.",
          "Both the TFSI petrol and TDI diesel variants of the A3 Convertible have timing chain vulnerabilities at higher mileages. Our technicians know exactly what to look for at each service interval.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Noticeable power loss under acceleration, blue or black smoke from the exhaust, or an unusual whistling sound when you put your foot down   these are the tell-tale signs of turbo wear or failure on the Audi A3 Convertible.",
          "Left unaddressed, a failing turbo pushes oil contamination throughout the entire engine.",
          "We source quality replacement turbos for all A3 Convertible engine variants and fit them precisely to manufacturer specifications.",
          "Every turbo replacement includes full post-installation testing   boost pressure verification, oil feed integrity checks, and a road test confirmation before your vehicle leaves our workshop.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When internal wear has progressed beyond targeted repair   or when the engine has suffered serious damage   a full Audi A3 Convertible engine rebuild is often the most cost-effective long-term solution available to you.",
          "We strip the engine completely, inspect every internal component, replace all worn or damaged parts including bearings, pistons, piston rings, seals, and gaskets, and reassemble the entire unit to factory tolerances.",
          "The result performs like a new engine at a fraction of new engine cost.",
          "If the rest of your vehicle is in good condition, a rebuild almost always makes more financial sense than buying a replacement car. We'll give you an honest assessment upfront.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Not every engine problem requires a full rebuild. Many faults on the Audi A3 Convertible   oil leaks, bearing wear, valve damage, sensor failures, and more   can be resolved efficiently through targeted, diagnostic-led repair at a considerably lower cost.",
          "Our technicians use advanced diagnostic equipment to identify the exact root cause of your engine fault. You pay only for what's genuinely needed   no unnecessary work added to inflate your bill.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When multiple components have failed simultaneously, or when the engine has sustained damage beyond economic repair, replacement is often the smarter, more cost-effective decision.",
          "We supply and fit quality reconditioned and low-mileage used engines for the Audi A3 Convertible, sourced from trusted, vetted suppliers and thoroughly tested before installation.",
          "We also offer supply-only options for customers fitting the engine themselves or through their own garage   delivered anywhere in the UK.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Looking to change engine variants, upgrade your specification, or fit a newer engine into your existing A3 Convertible shell? A proper engine swap is a complex undertaking   but done correctly, it completely transforms the vehicle.",
          "Our engine swap service covers everything   engine removal, new unit preparation, mounts and ancillary fitment, ECU mapping, and thorough post-swap diagnostics.",
          "We test comprehensively before your car leaves our workshop. Nothing is left to chance.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Certain Audi A3 Convertible engine variants use a rubber timing belt rather than a metal chain.",
          "Unlike a chain, a belt gives almost no warning before it fails   and when it goes, the engine destruction is instant and total.",
          "We carry timing belt kits for all applicable A3 Convertible engine configurations and replace them to manufacturer-specified intervals.",
          "If you're unsure of your vehicle's service history, we strongly recommend replacing the belt regardless of its apparent condition.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Not sure what's wrong with your A3 Convertible   or considering buying a used one and want genuine peace of mind? Our engine health check gives you a complete, honest picture of the engine's condition with no upselling and no vague reassurances.",
          "Our health check covers full compression testing, oil condition analysis, diagnostic scanning, cooling system integrity checks, and a thorough visual inspection.",
          "You receive a written report with clear, honest findings and straightforward recommendations.",
        ],
      },
      {
        title: "Fast UK-Wide Service Based in ",
        paragraphs: [
          "We know that being without your Audi A3 Convertible is an inconvenience   and an expense if it's your regular car. We work efficiently and without cutting corners, because both things matter.",
          "We collect engines from anywhere in the UK, complete the rebuild or repair, and return your unit fully tested, properly packaged, and ready to install.",
          "Most rebuilds are completed within 5–10 working days. Repairs and replacements are often faster. We give you a confirmed timeframe at the point of booking   and we deliver on it.",
          "Every rebuild, replacement, and major repair carried out at Vogue Technics is backed by a written warranty.",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Vogue Technics sorted the timing chain on my A3 Convertible 2.0 TFSI. Diagnosed it fast, explained everything clearly, and the car has been perfect ever since. Genuinely brilliant service.",
        by: "  Claire B., London",
      },
      {
        quote:
          "I was quoted an eye-watering amount elsewhere for an engine replacement on my A3 Cabriolet. Vogue Technics came in far more reasonably, gave me a warranty, and finished ahead of the timeframe they quoted. Couldn't ask for more.",
        by: "  James W., Birmingham",
      },
      {
        quote:
          "Sent my engine down from Edinburgh. Came back rebuilt to an exceptional standard, packaged carefully, and right on schedule. These are the people to call for Audi engine work in the UK.",
        by: "  Fiona M., Edinburgh",
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A3 Convertible engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and internal wear. Contact us for a bespoke, itemised quote based on your engine code and symptoms.",
      },
      {
        question: "What are the most common engine problems on the Audi A3 Convertible?",
        answer:
          "Common issues include timing chain stretch/failure on 2.0 TFSI, turbo wear, head gasket faults on TFSI engines, and oil leaks from ageing seals and gaskets. Early diagnosis prevents escalation.",
      },
      {
        question: "Is it worth rebuilding an Audi A3 Convertible engine?",
        answer:
          "In most cases, yes   especially when the rest of the vehicle is in good condition. A quality rebuild extends the car’s life and costs far less than replacing it.",
      },
      {
        question: "Do you supply used or reconditioned Audi A3 Convertible engines?",
        answer:
          "Yes. We supply both reconditioned and low-mileage used engines on a supply-only or supply-and-fit basis, with UK-wide delivery available.",
      },
      {
        question: "How long does an Audi A3 Convertible engine rebuild take?",
        answer:
          "Most rebuilds are completed within 5–10 working days. We confirm your timeframe at booking and keep you updated.",
      },
      {
        question: "Do you cover the whole UK?",
        answer:
          "Yes. We serve Audi owners nationwide via collection/delivery and approved installer support.",
      },
    ],
  },
  "audi-a3-limousine-engines": {
    metaTitle: "Audi A3 Limousine Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    metaDescription:
      "Audi A3 Limousine (Saloon) engine specialists . Head gasket, timing chain/belt, turbo, rebuild and replacement services with written warranty and UK-wide support.",
    h1: "Audi A3 Limousine Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    intro: [
      "The Audi A3 Limousine   known in many markets as the A3 Saloon   is a refined, practical, and genuinely rewarding car to own. But when the engine develops a serious fault, that enjoyment stops immediately.",
      "At Vogue Technics, based in , we specialise in Audi engine work across the full A3 range, and the Limousine variant is a vehicle our technicians know comprehensively   every engine code, every known fault, every correct repair procedure.",
      "Whether you're facing timing chain failure on the 1.8 TFSI, turbo trouble on the 2.0 TDI, a blown head gasket, or an engine that has simply reached the end of its serviceable life, we deliver the right solution at a fair, transparent price.",
      "With over 25 years of hands-on experience and a track record built entirely on quality workmanship, Vogue Technics is the specialist Audi A3 Limousine owners across the UK trust when the engine matters most.",
    ],
    sections: [
      {
        title: "Why Audi A3 Limousine Owners Choose Vogue Technics",
        paragraphs: [
          "The A3 Limousine deserves specialist attention   not a generalist garage that treats every engine the same way.",
          "The 1.8 TFSI, 2.0 TFSI, and 2.0 TDI units fitted to this vehicle each carry their own specific vulnerabilities, and getting the diagnosis wrong from the start costs you time, money, and unnecessary stress.",
        ],
      },
      {
        title: "Dedicated Audi Engine Specialists",
        paragraphs: [
          "At Vogue Technics, Audi engines are our focus. Every member of our technical team carries deep, model-specific knowledge of the A3 Limousine's engine range   from common timing chain stretch on the TFSI units to turbocharger wear patterns on the 2.0 TDI.",
          "We carry the correct tooling, quality components, and diagnostic capability to identify faults accurately and resolve them properly the first time.",
        ],
      },
      {
        title: "25 Years of Proven Engine Work Across the UK",
        paragraphs: [
          "We've been rebuilding, repairing, and replacing engines for Audi owners across the United Kingdom for over two and a half decades.",
          "Our reputation has never come from advertising   it has come entirely from the quality of work we deliver and the customers who return to us and recommend us without hesitation.",
        ],
      },
      {
        title: "Clear Pricing, No Unwelcome Surprises",
        paragraphs: [
          "Engine repairs on a premium saloon can feel financially daunting. We remove that anxiety by providing a detailed, itemised quote before any work begins.",
          "You know precisely what you're paying for and exactly why. No vague estimates, no revised figures on collection day.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "If your Audi A3 Limousine is losing coolant without obvious explanation, producing white smoke from the exhaust, or overheating more readily than it should, head gasket failure is a serious possibility.",
          "We replace head gaskets using OEM-grade components, inspect and resurface the cylinder head where necessary, pressure-test the entire cooling system post-repair, and reassemble to manufacturer tolerances.",
          "Caught early, a head gasket fault is a manageable, cost-effective repair. Left too long, coolant contaminates the oil and a repair becomes a full engine rebuild.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain wear is one of the most serious and most common faults across the Audi A3 Limousine engine range.",
          "A cold-start rattle, rough running, or unexpected power loss are warning signs that demand immediate attention. A snapped timing chain causes instant, severe internal engine damage.",
          "We replace the full timing chain assembly   chain, tensioners, guides, and sprockets   as a complete kit without exception.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Reduced power under load, black or blue exhaust smoke, or an unusual whistling or grinding noise when accelerating are indicators of turbocharger wear or failure on the A3 Limousine.",
          "We source quality replacement turbos for all A3 Limousine engine variants and install them to manufacturer specifications. Every turbo replacement includes full post-installation testing and a road-test confirmation.",
          "A failing turbo doesn't just affect performance   it pushes contaminated oil throughout the engine. Early intervention is always the more economical choice.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When internal engine wear has progressed beyond the point where targeted repairs are viable, a full Audi A3 Limousine engine rebuild restores performance, reliability, and longevity without the cost of a new engine.",
          "We strip the engine to bare block, inspect every internal component, replace worn parts, and reassemble to factory tolerances. The finished engine performs to new specification at a fraction of new engine cost.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Many engine faults don't require a full rebuild. Targeted, diagnostic-led repair resolves issues like oil leaks, valve damage, sensor failures and more efficiently and at considerably lower cost.",
          "We identify the precise root cause before work begins. You pay only for what is genuinely needed.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When an engine has sustained damage across multiple components simultaneously, or when the cost of repair exceeds the value of the work, replacement becomes the most sensible option.",
          "We supply and fit quality reconditioned and low-mileage used engines, sourced from vetted suppliers and inspected thoroughly before installation. Supply-only is also available with delivery anywhere in the UK.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "Whether you're changing engine variants, upgrading your specification, or transplanting a newer unit into your existing A3 Limousine shell, our engine swap service covers the complete process   removal, donor preparation, ancillary fitment, ECU mapping where required, and full post-swap diagnostics.",
          "We test thoroughly before sign-off. Nothing leaves our workshop until we are satisfied it is right.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Certain A3 Limousine configurations use a rubber timing belt rather than a chain. A belt provides almost no warning before it fails   and when it does, engine damage is immediate.",
          "We carry timing belt kits for all applicable configurations and replace them strictly to manufacturer-specified intervals. If service history is uncertain, we recommend replacement regardless of apparent condition.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Unsure what's wrong   or considering purchasing a used A3 Limousine? Our comprehensive engine health check provides compression testing, oil analysis, full diagnostic scanning, cooling system integrity testing, and a thorough visual inspection.",
          "You receive a clear written report with specific findings and straightforward recommendations.",
        ],
      },
      {
        title: "Fast UK-Wide Service From Our Workshop in ",
        paragraphs: [
          "We collect engines from anywhere across the United Kingdom, carry out all work at our  facility, and return your unit fully tested, professionally packaged, and ready to install.",
          "Most full rebuilds are completed within 5–10 working days. Targeted repairs and replacements are typically faster. Every job is backed by a written warranty.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A3 Limousine engine rebuild cost in the UK?",
        answer:
          "Costs depend on the engine variant and the extent of internal wear found on strip-down. Contact us for a bespoke, fully itemised quote for your engine code and symptoms.",
      },
      {
        question: "What are common engine faults on the Audi A3 Limousine?",
        answer:
          "Common faults include timing chain stretch/failure on TFSI engines, turbo wear on 2.0 TDI, head gasket issues on some variants, and oil leaks from ageing seals and gaskets.",
      },
      {
        question: "Is it worth rebuilding an A3 Saloon/Limousine engine?",
        answer:
          "In most cases, yes   particularly when the rest of the vehicle is in good condition. A quality rebuild extends the car’s life at far less than replacement vehicle costs.",
      },
      {
        question: "Do you supply used or reconditioned engines?",
        answer:
          "Yes. We supply verified used and reconditioned engines supply-only or supply-and-fit, with UK-wide delivery available.",
      },
      {
        question: "How long does a rebuild take?",
        answer:
          "Most full rebuilds are completed within 5–10 working days. We confirm timelines at booking and provide updates throughout.",
      },
      {
        question: "Do you cover the whole UK?",
        answer:
          "Yes. We serve customers nationwide via collection/delivery and approved installer support.",
      },
    ],
  },
  "audi-a3-sportback-engines": {
    metaTitle: "Audi A3 Sportback Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    metaDescription:
      "Audi A3 Sportback engine specialists . Head gasket, timing chain/belt, turbo, rebuild and replacement services with written warranty and UK-wide support.",
    h1: "Audi A3 Sportback Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    intro: [
      "The Audi A3 Sportback is one of the most popular and practical choices on British roads   versatile, refined, and genuinely enjoyable to drive.",
      "But when the engine develops a serious fault, everything about owning one becomes stressful and expensive.",
      "At Vogue Technics, based in , we specialise in Audi engine work across the complete A3 range, and the Sportback is a body variant we service constantly   across all engine codes, all known fault patterns, and all levels of repair complexity.",
      "With over 25 years of hands-on Audi engine expertise and a reputation built entirely on consistent quality, Vogue Technics is the specialist UK Audi A3 Sportback owners turn to when the stakes are high.",
    ],
    sections: [
      {
        title: "Why Audi A3 Sportback Owners Across the UK Trust Vogue Technics",
        paragraphs: [
          "Choosing the right specialist for engine work is arguably the most important decision you make when your Audi develops a serious fault.",
          "Every technician at Vogue Technics works on Audi engines as their core discipline. We understand the specific failure characteristics of the A3 Sportback's 1.8 TFSI, 2.0 TFSI, and 2.0 TDI engine variants   the timing chain vulnerabilities, the turbo wear patterns, the head gasket tendencies   and we approach every job with that specific knowledge applied directly.",
          "We provide a fully itemised, transparent quote before any work begins. No revised figures mid-job, no unexplained additions on collection day.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Persistent coolant loss without a visible external leak, white smoke trailing from the exhaust on start-up, or your A3 Sportback running noticeably hotter than normal are symptoms of head gasket failure.",
          "We replace the head gasket using OEM-grade components, inspect and resurface the cylinder head surface where necessary, pressure-test the cooling system thoroughly post-repair, and reassemble everything to manufacturer tolerances.",
          "A head gasket fault identified early is a contained, cost-effective repair. Allowed to progress, coolant enters the combustion chamber, oil becomes contaminated, and internal components begin to suffer.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Across the A3 Sportback engine range, timing chain wear is one of the most serious and commonly encountered faults   particularly on the 1.8 TFSI and 2.0 TFSI units.",
          "A cold-start rattle that clears after a few seconds, an erratic idle, or unexpected power loss are warning signs that need immediate investigation.",
          "We replace the complete timing chain kit   chain, tensioners, guides, and sprockets   as a full assembly without compromise. Replacing the chain alone while leaving worn tensioners in place is not something we do.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Reduced power when you accelerate, black or blue exhaust smoke under load, or an audible whistling or grinding noise are indicators of turbocharger wear or failure on the A3 Sportback.",
          "We source quality replacement turbos for all A3 Sportback engine variants and fit them to manufacturer specifications with precision, followed by comprehensive post-installation testing and a full road test.",
          "A deteriorating turbo can push contaminated oil into the engine system. Early intervention costs significantly less.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When internal wear has accumulated beyond the point where targeted repairs offer a lasting solution   or when the engine has sustained serious damage   a full Audi A3 Sportback engine rebuild delivers the most durable and cost-effective outcome available.",
          "We strip the engine completely, inspect every internal part, replace worn or damaged elements, and reassemble the unit to factory tolerances using quality components throughout.",
          "The finished engine performs to new specification at a fraction of the cost of a replacement vehicle.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Not every engine problem requires a full rebuild. Many faults   oil leaks from aged seals, EGR valve failures, valve damage, sensor faults, and more   respond well to targeted, diagnostic-led repair at considerably lower cost.",
          "We diagnose first, recommend second. You pay for what is genuinely needed and nothing beyond that.",
        ],
      },
      {
        title: "Engine Replacement",
        paragraphs: [
          "When multiple components have failed simultaneously, or when the accumulated cost of repairs exceeds what the work is economically worth, replacement becomes the most sensible path forward.",
          "We supply and fit quality reconditioned engines and low-mileage used engines for the Audi A3 Sportback, sourced from vetted suppliers and inspected thoroughly in-house before installation. Supply-only is also available with UK-wide delivery.",
        ],
      },
      {
        title: "Engine Swap",
        paragraphs: [
          "A proper engine swap is a complex and detail-intensive job   one that delivers transformative results when executed correctly.",
          "Our engine swap service covers engine extraction, donor unit preparation, mount and ancillary fitment, ECU mapping where required, and comprehensive post-swap diagnostics before the vehicle is released.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Certain engine configurations use a rubber timing belt. A timing belt gives almost no advance warning before it fails, and when it snaps, engine damage is immediate and total.",
          "We carry timing belt kits for all applicable configurations and replace them in strict accordance with manufacturer intervals. If service history is uncertain, we recommend replacement regardless of visible condition.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Considering purchasing a used Sportback, or unsure what's wrong with your current engine? Our engine health check covers compression testing, oil analysis, diagnostic scanning, cooling system integrity testing, and a comprehensive visual inspection.",
          "You receive a clear written report with specific findings and straightforward recommendations.",
        ],
      },
      {
        title: "UK-Wide Engine Service Based From ",
        paragraphs: [
          "We collect engines from anywhere in the United Kingdom, carry out all work at our  facility, and return your rebuilt or replacement unit fully tested, securely packaged, and ready to install.",
          "Most full rebuilds are completed within 5–10 working days. Targeted repairs and replacements are typically faster. Every job is backed by written warranty.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A3 Sportback engine rebuild cost in the UK?",
        answer:
          "Costs vary by engine variant and internal wear found on strip-down. Contact us for an itemised quote based on your engine code and symptoms.",
      },
      {
        question: "What are the most common engine problems on the A3 Sportback?",
        answer:
          "Common issues include timing chain stretch on 1.8/2.0 TFSI, turbo wear on 2.0 TDI, head gasket faults on some variants, oil leaks from ageing seals, and EGR-related issues on TDI engines.",
      },
      {
        question: "Is it worth rebuilding an A3 Sportback engine?",
        answer:
          "In most cases, yes   especially when the rest of the vehicle is in good condition. A rebuild restores reliability and performance at a sensible cost versus replacement.",
      },
      {
        question: "Do you supply used or reconditioned engines?",
        answer:
          "Yes. Supply-only or supply-and-fit options are available with UK-wide delivery and written warranty documentation.",
      },
      {
        question: "How long does a rebuild take?",
        answer:
          "Most rebuilds are completed within 5–10 working days depending on the scope and parts required.",
      },
      {
        question: "Do you cover the whole UK?",
        answer:
          "Yes. UK-wide collection/delivery and installer support is available.",
      },
    ],
  },
  "audi-a4-avant-engines": {
    metaTitle: "Audi A4 Avant Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    metaDescription:
      "Audi A4 Avant engine specialists . Head gasket, timing chain/belt, turbo, rebuild and replacement services for 2.0 TDI and 2.0 TFSI variants with written warranty and UK-wide support.",
    h1: "Audi A4 Avant Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    intro: [
      "The Audi A4 Avant is a practical, capable, and genuinely well-built estate   one that earns real loyalty from its owners.",
      "When the engine develops a serious fault, however, that loyalty gets tested fast. Repair bills mount, the car sits unused, and the decision of what to do next feels overwhelming.",
      "At Vogue Technics, based in , we remove that uncertainty entirely. We specialise in Audi engine work across the full A4 range, and the Avant variant   with its 2.0 TDI and 2.0 TFSI engine configurations   is a vehicle we work on consistently throughout the year.",
      "Whether your timing chain has stretched beyond safe limits, your turbocharger has failed, your head gasket has given way, or your engine has accumulated damage that goes deeper than a targeted repair can address   we have the right solution.",
    ],
    sections: [
      {
        title: "Why Audi A4 Avant Owners Choose Vogue Technics",
        paragraphs: [
          "Entrusting your Audi A4 Avant to the right specialist is the single most important decision you make when engine trouble strikes.",
          "Every technician at Vogue Technics focuses specifically on Audi engines. We understand the known fault characteristics of the A4 Avant's 2.0 TDI and 2.0 TFSI units in genuine depth   the timing chain tensioner vulnerabilities, the turbo failure patterns, the head gasket tendencies, the PCV valve and oil consumption issues that develop on higher-mileage TFSI units.",
          "We provide a detailed, itemised quote before a single component is touched and back major engine work with a written warranty.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Coolant loss with no visible external source, white exhaust smoke, or your A4 Avant running warmer than it normally should are symptoms of head gasket failure.",
          "We replace the head gasket using OEM-grade components, inspect and resurface the cylinder head where necessary, pressure-test the cooling system thoroughly following reassembly, and return the engine to manufacturer tolerances.",
          "Identified early, a head gasket failure is a contained and cost-effective repair. Left to develop, it becomes a rebuild or replacement bill.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain tensioner failure is one of the most serious and frequently reported faults on the A4 Avant, particularly across the 2.0 TFSI and 2.0 TDI engine variants.",
          "We replace the complete timing chain assembly as a full kit   chain, tensioners, guides, and sprockets together   without exception.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Turbocharger problems are among the most common faults on the A4 Avant 2.0 TDI, and the TFSI units are not without their own turbo wear issues.",
          "We source quality replacement turbos and fit them to manufacturer specifications with full attention to oil feed lines and mounting integrity, followed by comprehensive post-installation testing and a road test.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When internal wear has progressed to the point where targeted repairs no longer provide a reliable long-term outcome, a full engine rebuild delivers the most durable solution.",
          "We strip the engine to individual components, inspect every part, replace worn elements, and reassemble to factory tolerances using quality components throughout.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "Many A4 Avant engine faults do not require a full rebuild. Oil leaks, PCV valve failures, carbon build-up on TFSI intake valves, water pump failures and sensor faults can be resolved with targeted, diagnostic-led repair work.",
          "We diagnose precisely first so you pay only for what is genuinely necessary.",
        ],
      },
      {
        title: "Engine Replacement & Engine Swap",
        paragraphs: [
          "When damage is extensive or repair is no longer economically justified, we supply and fit quality reconditioned engines and low-mileage used engines, inspected in-house before installation.",
          "For engine swaps, we manage compatibility, ancillaries, ECU considerations, and full post-swap diagnostics before sign-off.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Some A4 Avant variants use a timing belt. A belt gives almost no warning before it fails, and when it does, engine destruction is instant.",
          "We replace timing belts strictly to manufacturer-specified intervals and recommend replacement where service history is uncertain.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Our engine health check includes compression testing, oil condition and contamination analysis, diagnostic scanning, cooling system pressure testing, and a thorough visual inspection.",
          "You receive a written report with clear findings and recommendations you can trust.",
        ],
      },
      {
        title: "UK-Wide Engine Service, Based in ",
        paragraphs: [
          "We collect engines from anywhere in the UK, carry out all work at our  facility, and return your rebuilt or replacement unit fully tested and professionally packaged.",
          "We confirm turnaround times at booking and honour them. All major engine work is backed by written warranty.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A4 Avant engine rebuild cost in the UK?",
        answer:
          "Costs depend on engine variant (2.0 TDI or 2.0 TFSI) and the extent of internal wear or damage. Contact us for a bespoke, fully itemised quote based on your engine code and symptoms.",
      },
      {
        question: "What are common Audi A4 Avant engine faults?",
        answer:
          "Common issues include timing chain tensioner failure on some variants, turbo wear on 2.0 TDI, head gasket faults on 2.0 TFSI, PCV-related oil consumption on TFSI engines, coolant leaks, and carbon build-up on direct injection engines.",
      },
      {
        question: "Is it worth rebuilding an Audi A4 Avant engine?",
        answer:
          "In most cases, yes   particularly when the rest of the vehicle is in good condition. A quality rebuild restores performance and reliability at far less than replacement vehicle costs.",
      },
      {
        question: "Do you supply reconditioned or used engines?",
        answer:
          "Yes. We supply verified used and reconditioned engines supply-only or supply-and-fit, with UK-wide delivery and written warranty paperwork.",
      },
      {
        question: "How long does a rebuild take?",
        answer:
          "Most full rebuilds are completed within 5–10 working days depending on scope and parts. We confirm timelines at booking and keep you updated.",
      },
      {
        question: "Do you cover the whole UK?",
        answer:
          "Yes. UK-wide collection/delivery and approved installer support is available.",
      },
    ],
  },
  "audi-a5-sportback-engines": {
    metaTitle: "Audi A5 Sportback Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    metaDescription:
      "Audi A5 Sportback engine specialists . Head gasket, timing chain/belt, turbo, rebuild and replacement services for 2.0 TDI and 2.0 TFSI variants with written warranty and UK-wide support.",
    h1: "Audi A5 Sportback Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
    intro: [
      "The Audi A5 Sportback is a genuinely accomplished car   sleek, sophisticated, and rewarding to drive.",
      "When the engine develops a serious fault, the car sits unused, the repair decision looms, and the cost of getting it wrong feels significant.",
      "At Vogue Technics, based in , we specialise in Audi engine work across the full A5 range, and the Sportback is a body variant we work on consistently   across the 2.0 TDI and 2.0 TFSI engine families and across the full spectrum of faults these engines are known to develop.",
      "With over 25 years of hands-on Audi engine expertise and a workshop reputation built entirely on consistent quality, Vogue Technics is the specialist UK Audi A5 Sportback owners turn to when the engine needs serious attention.",
    ],
    sections: [
      {
        title: "Why Audi A5 Sportback Owners Choose Vogue Technics",
        paragraphs: [
          "The A5 Sportback is a premium vehicle. It deserves specialist attention from people who understand it specifically   not a generalist workshop that applies the same broad approach regardless of what is on the ramp.",
          "Every technician at Vogue Technics works on Audi engines as their primary focus. We understand the specific failure characteristics of the A5 Sportback's engine range in genuine depth   timing chain tensioner vulnerabilities on the 2.0 TFSI, turbocharger bearing wear patterns on the 2.0 TDI, oil consumption tendencies on TFSI units, and coolant flange integrity concerns on certain variants.",
          "We provide fully transparent, itemised quotes before work begins. No revisions mid-job. No additions on collection day.",
        ],
      },
      {
        title: "Head Gasket Replacement",
        paragraphs: [
          "Unexplained coolant loss, white smoke from the exhaust on start-up, or your A5 Sportback running warmer than it normally should are symptoms of head gasket failure.",
          "We replace the head gasket using OEM-grade components, inspect the cylinder head surface, resurface where necessary, pressure-test the cooling system post-repair, and reassemble to manufacturer tolerances.",
          "Early intervention keeps the repair manageable. Delayed action multiplies the cost.",
        ],
      },
      {
        title: "Timing Chain Replacement",
        paragraphs: [
          "Timing chain wear is one of the most serious and consistently reported faults across the A5 Sportback engine range, particularly on the 2.0 TFSI units.",
          "We replace the full timing chain assembly   chain, tensioners, guides, and sprockets   as a complete kit, without shortcuts.",
        ],
      },
      {
        title: "Turbo Replacement",
        paragraphs: [
          "Power loss under load, black or blue exhaust smoke, or an audible whistling/grinding noise from the engine bay can indicate turbocharger wear or failure.",
          "We source quality replacement turbos for all A5 Sportback engine variants, install them to manufacturer specifications, inspect oil feeds/returns, and carry out comprehensive post-installation testing before handover.",
        ],
      },
      {
        title: "Engine Rebuild",
        paragraphs: [
          "When internal wear has progressed beyond the point where targeted repairs offer a reliable long-term outcome, a full engine rebuild is the most durable and economically sound solution available.",
          "We strip the engine to bare block, inspect internal components methodically, replace worn parts, and reassemble to factory tolerances using quality components throughout.",
        ],
      },
      {
        title: "Engine Repair",
        paragraphs: [
          "A significant proportion of faults do not require a full rebuild. Oil leaks, cooling system issues, sensor faults, EGR/cooler problems on diesels, and other contained issues respond well to targeted, diagnostic-led repair.",
          "We diagnose precisely first so you pay only for what's genuinely needed.",
        ],
      },
      {
        title: "Engine Replacement & Engine Swap",
        paragraphs: [
          "When damage is extensive or repair is no longer economical, we supply and fit quality reconditioned engines and low-mileage used engines, inspected in-house before installation.",
          "For engine swaps, we manage compatibility, ancillaries, ECU mapping where required, and post-swap diagnostics so the vehicle is returned correctly and reliably.",
        ],
      },
      {
        title: "Timing Belt Replacement",
        paragraphs: [
          "Some variants use a timing belt. A belt provides almost no advance warning before failure, and when it snaps, engine destruction is immediate.",
          "We replace timing belts strictly to manufacturer-specified intervals and recommend replacement where service history is uncertain.",
        ],
      },
      {
        title: "Engine Health Check",
        paragraphs: [
          "Our engine health check includes compression testing, oil analysis, diagnostic scanning, cooling system integrity testing, and a thorough visual inspection.",
          "You receive a clear written report with honest findings and practical recommendations.",
        ],
      },
      {
        title: "UK-Wide Engine Service From ",
        paragraphs: [
          "We operate UK-wide collection and return and can coordinate fitting through approved installers if you prefer local fitting.",
          "Most full engine rebuilds are completed within 5–10 working days. Repairs and replacements are often faster. Every major job is backed by written warranty.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an Audi A5 Sportback engine rebuild cost in the UK?",
        answer:
          "Costs vary by engine variant and the extent of internal wear/damage. A full rebuild typically starts from around £1,800–£3,800. Contact us for a bespoke quote based on your engine code and symptoms.",
      },
      {
        question: "What are common engine faults on the Audi A5 Sportback?",
        answer:
          "Common issues include timing chain wear on 2.0 TFSI variants, turbo issues on 2.0 TDI, head gasket faults on some petrol variants, oil consumption concerns, and EGR/coolant related problems depending on engine code.",
      },
      {
        question: "Is it worth rebuilding an A5 Sportback engine?",
        answer:
          "In most cases, yes   especially when the rest of the vehicle is in good condition. A quality rebuild restores reliability and performance at a sensible cost versus replacement vehicle costs.",
      },
      {
        question: "Do you supply used or reconditioned engines?",
        answer:
          "Yes. We supply verified used and reconditioned engines supply-only or supply-and-fit, with UK-wide delivery and written warranty paperwork.",
      },
      {
        question: "How long does a rebuild take?",
        answer:
          "Most full rebuilds are completed within 5–10 working days depending on scope and parts availability.",
      },
      {
        question: "Do you cover the whole UK?",
        answer:
          "Yes. UK-wide collection/delivery and installer support is available.",
      },
    ],
  },
};

function getAudiModelContent(slug: string): ModelPageContent | null {
  return audiModelContent[slug] ?? null;
}

// Ancillary part pages linked from /ancillaries — keep in sync with src/app/ancillaries/page.tsx
const ancillaryPartSlugs = new Set([
  "alternator", "crankshaft-pulley", "cylinder-heads", "exhaust-manifold",
  "inlet-manifold", "oil-pump", "power-steering-pump", "starter-motor",
  "torque-converter", "turbo", "water-pump", "flywheel",
  "timing-belt", "supercharger", "gearboxes", "diesel-injector",
  "egr-valve", "high-pressure-fuel-pump", "dpf-filter", "rear-diff",
  "catalytic-converter", "head-gasket", "timing-chain", "nox-sensor",
  "transmission",
]);

// Generic "-engines" pages linked from elsewhere on the site that don't have
// hardcoded content in audiModelContent (e.g. BMW X2 trims,
// Land Rover engine-size variants) — keep in sync with the linking pages.
const additionalEngineSlugs = new Set([
  "bmw-x2-sdrive18d-engines",
  "bmw-x2-sdrive20d-engines",
  "bmw-x2-xdrive18d-engines",
  "bmw-x2-xdrive20d-engines",
  "bmw-x2-xdrive25d-engines",
  "bmw-x2-sdrive18i-engines",
  "bmw-x2-xdrive25e-engines",
  "bmw-525i-engines",
  "land-rover-2-0-engines",
  "land-rover-2-2-engines",
  "land-rover-2-7-engines",
  "land-rover-3-0-engines",
  "land-rover-4-0-engines",
  "land-rover-4-4-engines",
  "land-rover-5-0-engines",
]);

function isDefinedSlug(slug: string): boolean {
  return (
    slug in audiModelContent ||
    ancillaryPartSlugs.has(slug) ||
    additionalEngineSlugs.has(slug)
  );
}

// Utility to format slug into title ("audi-a1-engines" -> "Audi A1 Engines")
function formatTitle(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (!isDefinedSlug(slug)) {
    return { title: "Page Not Found | Vogue Technics" };
  }

  const formattedTitle = formatTitle(slug);

  const audiOverride = getAudiModelContent(slug);
  if (audiOverride) {
    return {
      title: audiOverride.metaTitle,
      description: audiOverride.metaDescription,
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: audiOverride.metaTitle,
        description: audiOverride.metaDescription,
        url: `https://www.voguetechnics.co.uk/${slug}`,
      },
    };
  }
  
  // Pattern: [Model Name] engine for sale | reconditioned & used | Vogue Technics
  return {
    title: `${formattedTitle} engine for sale | reconditioned & used | Vogue Technics`,
    description: `Buy top quality reconditioned & used engines for your ${formattedTitle}, lowest online rates, fitting or UK wide delivery offered, years of experience, get engine quotes today.`,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} engine for sale | Vogue Technics`,
      description: `Buy top quality reconditioned & used engines for your ${formattedTitle}. Lowest online rates.`,
      url: `https://www.voguetechnics.co.uk/${slug}`,
    }
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Only render pages we actually have content for — everything else 404s.
  if (!slug || slug.length > 80 || !isDefinedSlug(slug)) {
    notFound();
  }

  const formattedTitle = formatTitle(slug);
  const isPart = !slug.includes("engines");
  const extractedPartName = isPart ? formattedTitle : slug.split('-').slice(-1)[0] === 'engines' ? formatTitle(slug.split('-').slice(-2, -1)[0]) : 'Part';

  const audiOverride = getAudiModelContent(slug);
  if (audiOverride) {
    return (
      <div className="bg-white min-h-screen">
        <div className="bg-slate-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#146c43]/20">
            <Image
              src="/images/car_bgg.webp"
              alt={audiOverride.h1}
              fill
              className="object-cover opacity-65 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
          </div>
          <div className="container mx-auto relative z-10 max-w-4xl text-center">
            <Breadcrumbs items={[{ name: "Audi Engines", href: "/audi-engines" }, { name: audiOverride.h1, href: `/${slug}` }]} />
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              {audiOverride.h1}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:01375 531355"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" /> Call: 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-slate-50/60 border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8 pt-10 pb-16 max-w-7xl">
            <div className="space-y-10">
              {(() => {
                const keyBenefits = audiOverride.sections.slice(0, 4);
                const mainSections = audiOverride.sections.slice(4);
                const icons = [CheckCircle2, Shield, Search, CheckCircle2];

                return (
                  <>
                    {keyBenefits.length > 0 ? (
                      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
                        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-[70px]" />
                        <div className="flex items-end justify-between gap-6 flex-wrap">
                          <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black tracking-[0.2em] uppercase text-primary">
                              Built for Audi owners
                            </div>
                            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                              What makes Vogue Technics different
                            </h2>
                          </div>
                          <Link
                            href="/get-quote"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm hover:border-primary/30 transition-colors"
                          >
                            Get a quote
                          </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {keyBenefits.map((s, idx) => {
                            const Icon = icons[idx] ?? CheckCircle2;
                            return (
                              <div
                                key={s.title}
                                className="group rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-4 shadow-sm hover:border-primary/30 transition-colors"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-2 text-primary shadow-sm shrink-0">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                                      {s.title}
                                    </h3>
                                    <div className="mt-2 space-y-1.5 text-slate-700 leading-relaxed text-xs line-clamp-4">
                                      {s.paragraphs.map((p) => (
                                        <p key={p}>{p}</p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    ) : null}

                    {mainSections.length > 0 && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-extrabold text-slate-900 px-1">Our Engine Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {mainSections.map((s) => (
                            <div
                              key={s.title}
                              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-primary/30 transition-colors"
                            >
                              <h3 className="text-sm font-bold text-slate-900 tracking-tight">{s.title}</h3>
                              <div className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-4">
                                {s.paragraphs.map((p) => (
                                  <p key={p}>{p}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}

              {audiOverride.testimonials && audiOverride.testimonials.length > 0 ? (
                <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    What Our Customers Say
                  </h2>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiOverride.testimonials.map((t) => (
                      <div key={t.by} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-amber-500 font-black tracking-wide">★★★★★</div>
                        <p className="mt-4 text-slate-700 leading-relaxed italic">“{t.quote}”</p>
                        <div className="mt-5 border-t border-slate-100 pt-5 text-sm font-bold text-slate-900">{t.by}</div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <FAQSection
                title={
                  <>
                    Frequently Asked Questions   <span className="text-primary italic">{audiOverride.h1}</span>
                  </>
                }
                items={audiOverride.faqs}
              />
            </div>
          </div>
        </div>

        <PartnerLogos />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#146c43]/20">
          <Image
            src="/images/car_bgg.webp"
            alt={formattedTitle}
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <Breadcrumbs items={[{ name: formattedTitle, href: `/${slug}` }]} />
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
            Specialist Supply & Fit
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {formattedTitle}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            We provide fully tested, high-performance <strong className="text-white font-semibold">{formattedTitle}</strong>. Benefit from our 20+ years of industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:01375 531355" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" /> Let&apos;s Talk: 01375 531355
            </a>
            <Link href="/contact-us" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Description */}
          <div className="w-full lg:w-2/3 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Premium Quality <span className="text-primary">{formattedTitle}</span>
            </h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                When you are looking for reliable <strong>{formattedTitle}</strong>, Vogue Technics is your ultimate destination. We specialise in offering low-mileage, thoroughly inspected engines and parts to get your vehicle running smoothly again.
              </p>
              <p>
                Our rigorous testing procedures ensure that every component we supply meets or exceeds OEM specifications. Our in-house engine shop is equipped with the latest diagnostic tools, enabling us to provide top-tier supply and fit services for {formattedTitle}.
              </p>
              <p>
                Whether you opt for a used replacement or a fully reconditioned unit, our seasoned mechanics execute precise fittings to guarantee peak performance and longevity. Explore our massive stock and take advantage of our industry-leading warranty for complete peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Thoroughly Tested</h4>
                  <p className="text-sm text-slate-600">Every unit undergoes strict quality control and compression testing before dispatch.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:border-primary/30 transition-colors">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Extended Warranty</h4>
                  <p className="text-sm text-slate-600">Complete peace of mind with our comprehensive warranty covering all parts and labor.</p>
                </div>
              </div>
            </div>

            {/* EXTENDED WARRANTY CALLOUT */}
            <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl border-2 border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-xs">
                  <Shield className="w-5 h-5 animate-pulse" /> Premium Dealer Protection
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Looking for <span className="text-primary italic">extended coverage?</span></h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  We also offer <strong className="text-white">up to 24 months warranty</strong>, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Reg Search Form */}
          <div className="w-full lg:w-1/3 sticky top-32">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-10 -mt-10 rounded-full pointer-events-none"></div>
               <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Find Your {extractedPartName}</h3>
               
               <form className="space-y-4 relative z-10">
                 <div>
                   <label className="text-sm font-semibold text-slate-300 mb-2 block">Enter Vehicle Registration</label>
                   <div className="flex overflow-hidden rounded-xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transition-transform focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-slate-900 mt-1">
                     <div className="bg-[#0033A0] flex flex-col items-center justify-center px-2 py-2 w-14 shrink-0 border-r border-[#0033A0]/50 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.2)]">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-auto mb-1 rounded-sm shadow-sm">
                         <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                         <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                         <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                         <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                         <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                         <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                       </svg>
                       <span className="text-[#FACC15] font-bold text-[10px] tracking-widest leading-none">UK</span>
                     </div>
                     <RegNumberInput />
                   </div>
                 </div>
                 
                 <div className="pt-2">
                   <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(25,135,84,0.3)] transition-all flex justify-center items-center gap-2 transform hover:-translate-y-1">
                     <Search className="w-5 h-5" /> Get Exact Quote
                   </button>
                 </div>
               </form>
               
               <p className="text-slate-400 text-sm text-center mt-6 relative z-10">
                 Or speak to our experts instantly: <br/> <a href="tel:01375531355" className="text-white font-bold hover:text-primary transition-colors mt-2 inline-block text-xl tracking-wider">01375 531355</a>
               </p>
            </div>
          </div>
          
        </div>
      </div>

      <ReviewsSection
        title="What Our Customers Say" 
        subtitle={`Hear from our satisfied customers who have experienced our professional ${formattedTitle.toLowerCase()} services.`}
      />
      <PartnerLogos />
    </div>
  );
}
