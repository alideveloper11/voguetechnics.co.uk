export interface EngineExpertise {
  title: string;
  subtitle: string;
  description: string;
  engineCode: string;
  commonFaults: string[];
  rebuildIncludes: string[];
}

export interface Methodology {
  step: string;
  title: string;
  description: string;
}

export interface Credential {
  type: string;
  title: string;
  description: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  location: string;
  image: string;
  shortBio: string;
  detailedBio: string[];
  quote: string;
  experience: string;
  credentials: string[];
  technicalCredentials: Credential[];
  engineExpertise: EngineExpertise[];
  methodology: Methodology[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const authors: Author[] = [
  {
    name: "Vic",
    slug: "vic",
    role: "Senior Workshop Manager & JLR Engine Specialist",
    location: "Vogue Technics, Grays, Essex",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop", // Senior engineer placeholder
    shortBio: "Senior Workshop Manager with 20+ years expertise, exclusively focused on Jaguar Land Rover engine remanufacturing for the past 15 years.",
    detailedBio: [
      "Vic has spent over two decades working on some of the most technically demanding engines in the automotive industry — and for the past 15 years, his focus has been exclusively on Jaguar Land Rover vehicles.",
      "As Senior Workshop Manager at Vogue Technics in Grays, Essex, he oversees every engine rebuild that leaves the workshop, setting the standard for quality, precision and transparency that the business is known for.",
      "His specialist knowledge covers the full range of JLR engine families — from the 2.0L Ingenium diesel and petrol units through to the high-performance 5.0L AJ133 supercharged engine fitted to the Range Rover SVR. Working on these engines every day gives Vic a level of hands-on familiarity with their tolerances, failure points and assembly requirements that cannot be replicated by a general mechanic."
    ],
    quote: "If you cannot show the customer what you are doing, you should not be doing it.",
    experience: "20+ Years Experience",
    credentials: ["RAC Approved", "NVQ Level 3"],
    technicalCredentials: [
      {
        type: "NVQ Level 3",
        title: "Automotive Engineering",
        description: "Benchmark professional qualification formally assessed against national industry standards for engine rebuild competency."
      },
      {
        type: "RAC Approved",
        title: "Master Technician",
        description: "Only awarded to engineers who meet the highest standard for technical competence. Verification of specialist knowledge."
      },
      {
        type: "IGA / Trading Standards",
        title: "Approved Specialist",
        description: "Independently verified standards for quality, transparency and customer protection across the UK automotive sector."
      }
    ],
    engineExpertise: [
      {
        title: "RR SVR 5.0L Supercharged",
        subtitle: "AJ133 GEN1 (2018–2022) & GEN2 (2022+)",
        engineCode: "AJ133",
        description: "The most complex units producing 508ps, demanding absolute precision at assembly.",
        commonFaults: ["Oil consumption", "Bearing wear", "Supercharger issues"],
        rebuildIncludes: ["Full strip", "Machining", "OEM reassembly", "High-load road test"]
      },
      {
        title: "LR 3.0L TDV6 / SDV6",
        subtitle: "Vogue, Sport, Discovery 4 (2010–2018)",
        engineCode: "306DT",
        description: "Rebuilt hundreds of these across both generations. Masters of the 306DT platform.",
        commonFaults: ["Timing chain stretch", "Turbo failure", "Oil pump wear"],
        rebuildIncludes: ["Timing chain replacement", "Bottom-end inspection", "Turbo assessment"]
      },
      {
        title: "Range Rover 4.4L TDV8",
        subtitle: "Range Rover Vogue & Sport (2010–2018)",
        engineCode: "448DT",
        description: "Complex V8 diesel unit requiring specialist twin-turbo calibration.",
        commonFaults: ["Turbo failure", "Timing chain", "Injector issues", "Oil pump"],
        rebuildIncludes: ["Twin turbo inspection", "Full timing system overhaul", "Pressure testing"]
      },
      {
        title: "LR 2.0L Ingenium",
        subtitle: "Single (177hp) & Twin Turbo (237hp)",
        engineCode: "204DTD / 204DTA",
        description: "Modern platform powering Evoque, Discovery Sport, Velar, and Defender.",
        commonFaults: ["Turbo failure", "Timing issues", "Oil consumption", "EGR problems"],
        rebuildIncludes: ["Latest OEM-spec timing kit", "Turbo diagnostic", "EGR cleaning"]
      },
      {
        title: "Defender 3.0L Inline 6 Diesel",
        subtitle: "Defender 110 & 130, Velar (2019+)",
        engineCode: "DT306",
        description: "AJ20D6 Euro 6 architecture. Specialist knowledge of the new inline 6 setup.",
        commonFaults: ["Oil consumption", "Timing system reliability", "Injector issues"],
        rebuildIncludes: ["EURO 6 compliant rebuild using strictly OEM components"]
      },
      {
        title: "RR 2.0L Petrol Ingenium",
        subtitle: "Standard Petrol & P400e PHEV (398 BHP)",
        engineCode: "PT204 / 204PT",
        description: "Specialist knowledge of RDE2-compliant high-power hybrid variants.",
        commonFaults: ["Hybrid systems integration", "Timing issues", "Turbo diagnostic"],
        rebuildIncludes: ["PHEV powertrain compatibility rebuild", "Standard petrol overhaul"]
      }
    ],
    methodology: [
      {
        step: "/ 01",
        title: "Full Strip Before Quote",
        description: "No engine is quoted without being stripped first. We find the root cause, not just the symptoms."
      },
      {
        step: "/ 02",
        title: "Video Documentation",
        description: "Every significant finding is recorded and sent via WhatsApp. Transparency is non-negotiable."
      },
      {
        step: "/ 03",
        title: "OEM-Spec Components",
        description: "All work uses main-dealer standard parts. We do not accept compromise on critical items."
      },
      {
        step: "/ 04",
        title: "Torque & Tolerance",
        description: "Every fastener is torqued to factory spec. Every clearance is measured precisely."
      },
      {
        step: "/ 05",
        title: "Full Road Testing",
        description: "No vehicle leaves without a proper road test under operating temperatures and load."
      }
    ],
    stats: [
      { label: "JLR Specialist Experience", value: "15 Yrs" },
      { label: "Master Engineering", value: "20+ Yrs" },
      { label: "Transparency Score", value: "100%" }
    ]
  }
];
