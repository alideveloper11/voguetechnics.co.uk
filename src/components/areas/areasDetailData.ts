export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaDetail = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  whyChooseHeading: string;
  whyChoosePoints: Array<{ title: string; description: string }>;
  localCoverageHeading: string;
  localCoverageParagraphs: string[];
  localPlaces: string[];
  vehicleCoverage: string[];
  processHeading: string;
  processSteps: Array<{ title: string; description: string }>;
  ctaHeading: string;
  ctaText: string;
  faqs: AreaFaq[];
  relatedSlugs: string[];
  specialistsSection: {
    title: string;
    eyebrow: string;
    intro: string;
    supportingTitle: string;
    supportingParagraphs: string[];
    checklistItems: string[];
  };
  ukWideServiceSection: {
    title: string;
    paragraphs: string[];
    panelTitle: string;
    panelParagraph: string;
  };
  engineRepairCostSection: {
    title: string;
    paragraphs: string[];
    quoteTitle: string;
    quoteText: string;
  };
};

const sharedVehicleCoverage = [
  "Range Rover and Land Rover engines",
  "Jaguar engines",
  "Audi engines",
  "BMW engines",
  "Timing chain and timing belt work",
  "Engine rebuild and replacement projects",
];

function buildAreaDetail({
  slug,
  name,
  localPlaces,
  collectionNote,
  relatedSlugs,
}: {
  slug: string;
  name: string;
  localPlaces: string[];
  collectionNote: string;
  relatedSlugs: string[];
}): AreaDetail {
  const locationList = localPlaces.join(", ");

  return {
    slug,
    name,
    metaTitle: `${name} Engine Repair, Rebuild and Collection Support | Vogue Technics`,
    metaDescription: `Specialist engine repair, rebuild and replacement support in ${name}. Collection available from ${locationList} with clear quotes and UK-wide workshop support.`,
    heroSubtitle: `Specialist engine repair, rebuild and replacement support in ${name}, with collection arranged where it makes sense for the job and clear communication from first enquiry to completion.`,
    overviewHeading: `${name} engine support built around the job, not the postcode`,
    overviewParagraphs: [
      `We regularly help customers across ${name} with diagnosis-led engine repair, rebuild and replacement work. The process stays simple: confirm the fault, explain the options, then agree the next step before any work starts.`,
      `If you are based in ${locationList}, we can usually arrange the right collection and return path for the vehicle and keep the quote process straightforward from the start.`,
    ],
    whyChooseHeading: `Why ${name} drivers choose Vogue Technics`,
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We start with the fault, not the headline repair, so you only move forward on the route that actually fits the vehicle.",
      },
      {
        title: "Collection when required",
        description:
          "If the job needs it, we can arrange collection and delivery support instead of asking you to manage the logistics alone.",
      },
      {
        title: "Clear quotes before work",
        description:
          "Every job is quoted clearly, with extra work only authorised after we have spoken to you.",
      },
      {
        title: "Workshop-backed repairs",
        description:
          "Major engine work is handled by the same specialist workshop team that supports our main engine services.",
      },
    ],
    localCoverageHeading: `Where we regularly work in ${name}`,
    localCoverageParagraphs: [
      `Our coverage in ${name} is built around the towns and routes where we are asked to help most often.`,
      collectionNote,
    ],
    localPlaces,
    vehicleCoverage: sharedVehicleCoverage,
    processHeading: `How collection and support works in ${name}`,
    processSteps: [
      {
        title: "Send the registration",
        description:
          "We use the vehicle details and symptoms to confirm what the engine needs before anything is booked in.",
      },
      {
        title: "Get a clear plan",
        description:
          "You receive a straight answer on repair, rebuild or replacement so the decision is based on facts.",
      },
      {
        title: "Arrange collection",
        description:
          "If the vehicle needs to come to us, we agree a collection path that suits the job and your location.",
      },
      {
        title: "Complete and return",
        description:
          "Once the work is signed off, we get the vehicle or engine returned with the next steps explained clearly.",
      },
    ],
    ctaHeading: `Need engine help in ${name}?`,
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle.",
    faqs: [
      {
        question: `Do you collect vehicles from ${name}?`,
        answer:
          "Yes. Collection can be arranged where the job and location make sense for it, and we will confirm the logistics before anything is booked.",
      },
      {
        question: `Can I get a quote before collection?`,
        answer:
          "Yes. Send us the vehicle registration and location first and we will give you the best next step before collection is arranged.",
      },
      {
        question: `Do you only work with customers in ${name}?`,
        answer:
          "No. The area page shows where we regularly work, but we also support customers further afield through our workshop and collection process.",
      },
      {
        question: `Can you handle rebuilds and replacements for my area?`,
        answer:
          "Yes. The same engine repair, rebuild and replacement services are available regardless of the area, subject to the job and vehicle condition.",
      },
    ],
    relatedSlugs,
    specialistsSection: {
      title: `The Specialists Behind Every Job in ${name}`,
      eyebrow: `${name} Engine Specialists`,
      intro: `There is a meaningful difference between a garage that has worked across ${name} a handful of times and a specialist team that has rebuilt dozens of engines for customers from ${locationList}.`,
      supportingTitle: `${name} Workshop Experience`,
      supportingParagraphs: [
        `Customers from ${name} come to us because specialist engine knowledge is applied from the first call, not after the first failed repair.`,
        `Every job is approached with the same discipline: accurate assessment, correct parts, clear quotes, and warranty-backed work where it applies.`,
      ],
      checklistItems: [
        `OEM or OEM-specification parts for ${name} jobs.`,
        `Written quotes before any work begins.`,
        `Warranty-backed major work and rebuilds.`,
      ],
    },
    ukWideServiceSection: {
      title: `UK-Wide Service From Our Workshop for ${name} Customers`,
      paragraphs: [
        `Being based in the workshop puts us within straightforward reach of ${localPlaces[0]} and the wider ${name} area, but many of our customers are not local and that is not a barrier.`,
        `We offer engine collection and return delivery covering the whole of the United Kingdom. Your engine comes to us, the work is carried out to the same standard regardless of your location, and it comes back fully tested and covered by our written warranty.`,
        `Distance is not a reason to compromise on the quality of specialist support you use in ${name}.`,
      ],
      panelTitle: `Whatever the engine, whatever the fault in ${name}`,
      panelParagraph: `Whatever the engine, whatever the fault, whatever the platform, do not leave it to a garage that works from general experience and hope for the best result. We bring dedicated engine experience to every job that comes through our doors from ${name}.`,
    },
    engineRepairCostSection: {
      title: `Engine Repair Cost in ${name} What You Need to Know`,
      paragraphs: [
        `Engine repair cost is one of the most searched questions we hear from ${name} customers, and one of the most difficult to answer honestly without first understanding what the engine actually needs.`,
        `A targeted engine repair addressing a specific fault sits at a very different price point to a full engine rebuild or replacement. Turbo replacement cost varies by platform and unit specification. Head gasket repair cost depends on the extent of cylinder head damage found during inspection. Timing chain replacement cost changes depending on whether tensioners, guides, and associated components require renewal alongside the chain.`,
        `What we can tell you is that our pricing reflects independent specialist expertise, significantly below main dealer rates for the same quality of work and the same quality of parts. We will always provide a detailed written quote following a proper diagnostic, so the figure you receive is based on what your engine actually needs, not a generalised estimate that shifts when the work begins.`,
        `The cost of a proper repair carried out once is always less than the cost of an inadequate repair carried out twice, with additional damage in between.`,
      ],
      quoteTitle: `Request a Written Quote for ${name}`,
      quoteText: `Send your registration and symptoms from ${name} and we will come back with honest initial advice and the right next step.`,
    },
  };
}

export const areaDetails: AreaDetail[] = [
  {
    slug: "essex",
    name: "Essex",
    metaTitle: "Reconditioned Range Rover Engines Essex | Vogue Technics",
    metaDescription:
      "Reconditioned Range Rover engines in Essex & supplied UK-wide by Vogue Technics. Range Rover, Land Rover & Jaguar specialists. Warranty-backed. Free quote.",
    heroSubtitle:
      "Vogue Technics is a dedicated Range Rover, Land Rover, Jaguar and BMW engine specialist based in Grays, Essex, providing engine repair, rebuild and replacement support with honest diagnosis, written quotes, genuine OEM-grade parts and warranty-backed workmanship.",
    overviewHeading: "Why Essex drivers choose Vogue Technics",
    overviewParagraphs: [
      "Customers across Essex come to us when they need more than a general garage approach. We deal with the fault properly, explain the repair path clearly and keep the process straightforward from first enquiry to final handover.",
      "From Grays, Thurrock, Basildon, Brentwood and Chelmsford to the wider county, we support engine rebuild, replacement and repair work with the same specialist standards, honest pricing and written warranty.",
    ],
    whyChooseHeading: "Why Essex drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We diagnose the actual engine fault before recommending repair, rebuild or replacement, so you are not paying for guesswork.",
      },
      {
        title: "Workshop-based expertise",
        description:
          "All major engine work is handled through our dedicated Grays workshop by technicians who work on these engines every day.",
      },
      {
        title: "Written quotes and honest pricing",
        description:
          "Every Essex job is quoted clearly in writing, with no hidden extras and no vague pricing after the work has started.",
      },
      {
        title: "Warranty-backed workmanship",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty for added confidence long after collection.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Essex",
    localCoverageParagraphs: [
      "Essex is our home county, and much of our local work comes from customers who need specialist engine support without the cost or uncertainty of main-dealer or general-garage routes.",
      "From our Grays workshop, we provide local collection, recovery planning, supply-and-fit support and workshop-led engine repair for customers across Essex and the surrounding road network.",
    ],
    localPlaces: ["Grays", "Thurrock", "Basildon", "Brentwood", "Chelmsford"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Essex",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine issue and your Essex location so we can assess the likely fault and the right support route.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better option and provide clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or drop-off route from your part of Essex.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Essex?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which parts of Essex do you cover?",
        answer:
          "We are based in Grays and regularly support customers across Thurrock, Basildon, Brentwood, Chelmsford and the wider Essex area. If you are outside those towns, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you collect vehicles from Essex?",
        answer:
          "Yes. On many rebuild and replacement jobs we can arrange collection or recovery support, depending on the vehicle condition and location. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Can you supply an engine without fitting it?",
        answer:
          "Yes. Where appropriate, we can supply a rebuilt, reconditioned or suitable replacement engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you only work on Range Rover and Land Rover engines?",
        answer:
          "Range Rover, Land Rover, Jaguar, Defender and SVR are core specialisms, and we also carry out BMW engine work through the same specialist workshop team.",
      },
      {
        question: "How long does an engine rebuild or replacement take?",
        answer:
          "Many rebuilds are completed in around ten working days, depending on engine type, parts availability and the condition of surrounding components. Once inspected, we will give you a realistic timeframe.",
      },
      {
        question: "Is the warranty valid outside Essex?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
    ],
    relatedSlugs: ["kent", "london", "hertfordshire", "east-sussex"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Essex Engine Specialists",
      intro:
        "We do not dabble in engines. From our fully equipped Grays workshop, our team works on Range Rover, Land Rover, Jaguar, Defender, SVR and BMW engines every day, supporting owners across Essex with rebuilds, replacements and reconditioned engine solutions that many general garages are not equipped to handle.",
      supportingTitle: "25+ Years of Specialist Engine Experience",
      supportingParagraphs: [
        "Whether you need a rebuild, a full replacement or a supplied engine for fitting, every Essex job starts with honest diagnosis, clear advice and a written quote before any work begins.",
        "Our focus is specialist engine work, carried out in-house with the same level of care, testing and communication whether you are local to Grays or coming to us from elsewhere in Essex.",
      ],
      checklistItems: [
        "Thousands of engines rebuilt, supplied and fitted.",
        "Warranty-backed engine work confirmed in writing.",
        "Up to 40% saving compared with main-dealer pricing on the right job.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Essex Customers",
      paragraphs: [
        "While we are proud to serve Essex directly from our Grays workshop, our process is built to support both local and wider enquiries without compromising standards.",
        "We offer in-house supply-and-fit, collection and recovery support for major rebuild and replacement jobs, and UK-wide delivery on suitable engine supply work where customers want to use their own installer.",
        "Whether you are based in Thurrock or elsewhere in the country, the job is handled with the same specialist diagnosis, written quote, workshop testing and warranty-backed finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Essex",
      panelParagraph:
        "We diagnose the problem properly and quote it honestly before any work begins. That applies whether the answer is a targeted repair, a full rebuild or a complete engine replacement from our Essex workshop.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Essex What You Need to Know",
      paragraphs: [
        "Engine work is a significant decision, and the true cost depends on the model, engine variant, extent of damage, and whether the right solution is a repair, rebuild or full replacement.",
        "A rebuilt or reconditioned engine is often far more cost-effective than a main-dealer replacement because you are paying for specialist labour, correct parts and workshop testing rather than dealer overhead.",
        "What you will not get from us is a vague estimate that changes once the vehicle is stripped. Every Essex job is diagnosed first, then quoted in writing with parts and labour explained clearly before you commit.",
        "Cheap engine solutions that cut corners on parts, machining or testing often cost more in the long run. We would rather do the work once, properly, and back it with a written warranty.",
      ],
      quoteTitle: "Request a Written Quote for Essex",
      quoteText:
        "Send your registration, symptoms and Essex location and we will come back with honest initial advice and the right next step for your vehicle.",
    },
  },
  {
    slug: "kent",
    name: "Kent",
    metaTitle: "Reconditioned Range Rover Engines Kent | Vogue Technics",
    metaDescription:
      "Reconditioned Range Rover engines for Kent, supplied & fitted by Vogue Technics — just across the Dartford Crossing. Land Rover & Jaguar specialists. Free quote.",
    heroSubtitle:
      "Vogue Technics is a dedicated Range Rover, Land Rover, Jaguar and BMW engine specialist just across the Dartford Crossing from Kent, providing engine repair, rebuild and replacement support with fast local collection, genuine OEM-grade parts, written warranty and honest pricing.",
    overviewHeading: "Why Kent drivers choose Vogue Technics",
    overviewParagraphs: [
      "Kent owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process straightforward from first enquiry to final handover.",
      "From Dartford, Gravesend, Maidstone, Sevenoaks and Ashford to the wider county, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Kent drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Close to Kent, built for major engine work",
        description:
          "Our Grays workshop is just across the Dartford Crossing, making collection, transport and communication straightforward for Kent customers.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Kent job is quoted clearly in writing before work begins, with no vague pricing and no hidden extras.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Kent",
    localCoverageParagraphs: [
      "Kent is one of our strongest nearby coverage areas, with regular enquiries from drivers who want specialist engine support without main-dealer costs or general-garage guesswork.",
      "From our Grays workshop just over the Dartford Crossing, we provide collection planning, supply-and-fit support and workshop-led engine repair for customers across Kent and the surrounding motorway network.",
    ],
    localPlaces: ["Dartford", "Gravesend", "Maidstone", "Sevenoaks", "Ashford"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Kent",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Kent location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or drop-off route from your part of Kent.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Kent?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Do you cover all of Kent?",
        answer:
          "Yes. We regularly support customers across Kent, including Dartford, Gravesend, Maidstone, Sevenoaks, Ashford and surrounding areas. If you are further afield in the county, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you collect vehicles from Kent?",
        answer:
          "Yes. On many rebuild and replacement jobs we can arrange collection or recovery support, and Kent collections are often straightforward because our workshop is just over the Dartford Crossing. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Can you supply an engine without fitting it?",
        answer:
          "Yes. Where appropriate, we can supply a rebuilt, reconditioned or suitable replacement engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you only work on Range Rover and Land Rover engines?",
        answer:
          "Range Rover, Land Rover, Jaguar, Defender and SVR are core specialisms, and we also carry out BMW engine work through the same specialist workshop team.",
      },
      {
        question: "How long does an engine rebuild or replacement take?",
        answer:
          "Many rebuilds are completed in around ten working days, depending on engine type, parts availability and the condition of surrounding components. Once inspected, we will give you a realistic timeframe.",
      },
      {
        question: "Is the warranty valid outside Kent?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
    ],
    relatedSlugs: ["essex", "london", "east-sussex", "west-sussex"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Kent Engine Specialists",
      intro:
        "We do not dabble in engines. For Kent owners, we are closer than many expect: our Grays workshop sits just across the Dartford Crossing, making collection and support quick and straightforward. From there, our team rebuilds, replaces and supplies Range Rover, Land Rover, Jaguar, Defender, SVR and BMW engines every day, handling jobs that many general garages are not equipped to take on properly.",
      supportingTitle: "25+ Years of Specialist Engine Experience",
      supportingParagraphs: [
        "Whether you need a rebuild, a full replacement or a supplied engine for fitting, every Kent job starts with honest diagnosis, clear advice and a written quote before any work begins.",
        "Our focus is specialist engine work, carried out in-house with the same level of care, testing and communication whether you are in Dartford, Maidstone, Canterbury or elsewhere in Kent.",
      ],
      checklistItems: [
        "Thousands of engines rebuilt, supplied and fitted.",
        "Warranty-backed engine work confirmed in writing.",
        "Up to 40% saving compared with main-dealer pricing on the right job.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Kent Customers",
      paragraphs: [
        "While Kent is right on our doorstep via the Dartford Crossing, our process is built to support both local and wider enquiries without compromising standards.",
        "We offer in-house supply-and-fit, collection and recovery support for major rebuild and replacement jobs, and UK-wide delivery on suitable engine supply work where customers want to use their own installer.",
        "Whether you are based in Dartford, Maidstone or elsewhere in the country, the job is handled with the same specialist diagnosis, written quote, workshop testing and warranty-backed finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Kent",
      panelParagraph:
        "We diagnose the problem properly and quote it honestly before any work begins. That applies whether the answer is a targeted repair, a full rebuild or a complete engine replacement from our workshop.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Kent What You Need to Know",
      paragraphs: [
        "Engine work is a significant decision, and the true cost depends on the model, engine variant, extent of damage, and whether the right solution is a repair, rebuild or full replacement.",
        "A rebuilt or reconditioned engine is often far more cost-effective than a main-dealer replacement because you are paying for specialist labour, correct parts and workshop testing rather than dealer overhead.",
        "What you will not get from us is a vague estimate that changes once the vehicle is stripped. Every Kent job is diagnosed first, then quoted in writing with parts and labour explained clearly before you commit.",
        "Cheap engine solutions that cut corners on parts, machining or testing often cost more in the long run. We would rather do the work once, properly, and back it with a written warranty.",
      ],
      quoteTitle: "Request a Written Quote for Kent",
      quoteText:
        "Send your registration, symptoms and Kent location and we will come back with honest initial advice and the right next step for your vehicle.",
    },
  },
  {
    slug: "surrey",
    name: "Surrey",
    metaTitle: "Reconditioned Range Rover Engines Surrey | Vogue Technics",
    metaDescription:
      "Reconditioned Range Rover engines for Surrey, supplied & fitted by Vogue Technics. Range Rover, Land Rover & Jaguar specialists. Warranty-backed. Free quote",
    heroSubtitle:
      "Vogue Technics is a dedicated Range Rover, Land Rover, Jaguar and BMW engine specialist serving Surrey from our fully equipped Grays workshop, providing engine repair, rebuild and replacement support with county-wide collection, genuine OEM-grade parts, written warranty and honest pricing.",
    overviewHeading: "Why Surrey drivers choose Vogue Technics",
    overviewParagraphs: [
      "Surrey owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Guildford, Woking, Epsom, Reigate and Weybridge to the wider county, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Surrey drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Built for prestige engine work",
        description:
          "Surrey has a high concentration of Range Rover and Land Rover vehicles, and our workshop is set up specifically for the kind of major engine work those platforms require.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Surrey job is quoted clearly in writing before work begins, with no vague pricing and no hidden extras.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Surrey",
    localCoverageParagraphs: [
      "Surrey is one of the strongest prestige 4x4 and luxury vehicle counties in our coverage area, with regular enquiries from owners who need specialist engine support rather than a general repair route.",
      "From our Grays workshop, we provide collection planning, supply-and-fit support and workshop-led engine repair for customers across Surrey and the wider Home Counties network.",
    ],
    localPlaces: ["Guildford", "Woking", "Epsom", "Reigate", "Weybridge"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Surrey",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Surrey location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or drop-off route from your part of Surrey.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Surrey?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Do you cover all of Surrey?",
        answer:
          "Yes. We regularly support customers across Surrey, including Guildford, Woking, Epsom, Staines, Camberley, Reigate, Cobham, Weybridge and Esher. If you are just outside the county, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you collect vehicles from Surrey?",
        answer:
          "Yes. On many rebuild and replacement jobs we can arrange collection or recovery support, depending on the vehicle condition and location. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Can you supply an engine without fitting it?",
        answer:
          "Yes. Where appropriate, we can supply a rebuilt, reconditioned or suitable replacement engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you only work on Range Rover and Land Rover engines?",
        answer:
          "Range Rover, Land Rover, Jaguar, Defender and SVR are core specialisms, and we also carry out BMW engine work through the same specialist workshop team.",
      },
      {
        question: "How long does an engine rebuild or replacement take?",
        answer:
          "Many rebuilds are completed in around ten working days, depending on engine type, parts availability and the condition of surrounding components. Once inspected, we will give you a realistic timeframe.",
      },
      {
        question: "Is the warranty valid outside Surrey?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
    ],
    relatedSlugs: ["berkshire", "london", "kent", "west-sussex"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Surrey Engine Specialists",
      intro:
        "We do not dabble in engines. Surrey is one of the UK's true Range Rover and Land Rover heartlands, and those vehicles deserve a genuine specialist rather than a general garage approach. From our Grays workshop, our team rebuilds, replaces and supplies Range Rover, Land Rover, Jaguar, Defender, SVR and BMW engines every day, handling jobs that many garages are not equipped to take on properly.",
      supportingTitle: "25+ Years of Specialist Engine Experience",
      supportingParagraphs: [
        "Whether you need a rebuild, a full replacement or a supplied engine for fitting, every Surrey job starts with honest diagnosis, clear advice and a written quote before any work begins.",
        "Our focus is specialist engine work, carried out in-house with the same level of care, testing and communication whether you are in Guildford, Woking, Reigate or elsewhere in Surrey.",
      ],
      checklistItems: [
        "Thousands of engines rebuilt, supplied and fitted.",
        "Warranty-backed engine work confirmed in writing.",
        "Up to 40% saving compared with main-dealer pricing on the right job.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Surrey Customers",
      paragraphs: [
        "While we serve Surrey directly from our Grays workshop, our process is built to support both local and wider enquiries without compromising standards.",
        "We offer in-house supply-and-fit, collection and recovery support for major rebuild and replacement jobs, and UK-wide delivery on suitable engine supply work where customers want to use their own installer.",
        "Whether you are based in Guildford, Woking or elsewhere in the country, the job is handled with the same specialist diagnosis, written quote, workshop testing and warranty-backed finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Surrey",
      panelParagraph:
        "We diagnose the problem properly and quote it honestly before any work begins. That applies whether the answer is a targeted repair, a full rebuild or a complete engine replacement from our workshop.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Surrey What You Need to Know",
      paragraphs: [
        "Engine work is a significant decision, and the true cost depends on the model, engine variant, extent of damage, and whether the right solution is a repair, rebuild or full replacement.",
        "A rebuilt or reconditioned engine is often far more cost-effective than a main-dealer replacement because you are paying for specialist labour, correct parts and workshop testing rather than dealer overhead.",
        "What you will not get from us is a vague estimate that changes once the vehicle is stripped. Every Surrey job is diagnosed first, then quoted in writing with parts and labour explained clearly before you commit.",
        "Cheap engine solutions that cut corners on parts, machining or testing often cost more in the long run. We would rather do the work once, properly, and back it with a written warranty.",
      ],
      quoteTitle: "Request a Written Quote for Surrey",
      quoteText:
        "Send your registration, symptoms and Surrey location and we will come back with honest initial advice and the right next step for your vehicle.",
    },
  },
  {
    slug: "bedfordshire",
    name: "Bedfordshire",
    metaTitle: "Reconditioned Range Rover Engines Bedfordshire | Vogue Technics",
    metaDescription:
      "Reconditioned, used & rebuilt Range Rover engines supplied and fitted across Bedfordshire. OEM parts, warranty-backed work, fair pricing. Get a free quote.",
    heroSubtitle:
      "From Bedford to Luton, Dunstable to Biggleswade, Vogue Technics provides Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild and replacement support for Bedfordshire drivers, backed by genuine OEM-grade parts, clear written quotes and warranty-backed workmanship.",
    overviewHeading: "Why Bedfordshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Bedfordshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Bedford, Luton, Dunstable, Leighton Buzzard and Biggleswade to the wider county, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Bedfordshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Specialists, not generalists",
        description:
          "Our workshop focuses on major engine work for Range Rover, Land Rover, Jaguar and BMW platforms, with the tooling and experience these jobs genuinely require.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Bedfordshire job is quoted clearly in writing before work begins, with no vague pricing and no hidden extras.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Bedfordshire",
    localCoverageParagraphs: [
      "Bedfordshire is a strong coverage area for us, with regular enquiries from owners who need specialist engine support rather than dealer-level pricing or general-garage guesswork.",
      "We support customers across Bedfordshire with collection planning, supply-and-fit options and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Bedford", "Luton", "Dunstable", "Leighton Buzzard", "Biggleswade"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Bedfordshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Bedfordshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or transport route from your part of Bedfordshire.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Bedfordshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover in Bedfordshire?",
        answer:
          "We regularly support customers across Bedfordshire, including Bedford, Luton, Dunstable, Leighton Buzzard, Biggleswade, Sandy, Flitwick, Ampthill, Houghton Regis and Kempston. If your town is not listed, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We support Bedfordshire directly, but we also offer UK-wide supply, collection and delivery options. Depending on the job, we can supply the engine for fitting elsewhere or manage the work through our workshop process.",
      },
      {
        question: "Do you collect my car if I cannot get to the workshop?",
        answer:
          "Yes. Collection and delivery can be arranged for Bedfordshire customers and beyond, and recovery support is available where the vehicle is off the road. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Is the warranty valid wherever I am based?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
      {
        question: "Can I buy an engine without fitting?",
        answer:
          "Yes. Where appropriate, we can supply a tested used, rebuilt or reconditioned engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you only work on Range Rovers?",
        answer:
          "No. We also specialise in Land Rover, Jaguar and BMW engine work, including major repairs, rebuilds and replacements handled through the same specialist workshop team.",
      },
    ],
    relatedSlugs: ["hertfordshire", "oxfordshire", "essex", "surrey"],
    specialistsSection: {
      title: "Specialists, Not Generalists",
      eyebrow: "Bedfordshire Engine Specialists",
      intro:
        "You only get one engine, so it deserves a workshop that does little else. Vogue Technics focuses on major engine work for Range Rover, Land Rover, Jaguar and BMW platforms, and that specialism is exactly why Bedfordshire owners trust us with jobs that many general garages are not equipped to handle properly.",
      supportingTitle: "By the Numbers",
      supportingParagraphs: [
        "Every technician works with the same specialist mindset: diagnose accurately, repair correctly, test thoroughly and explain the job clearly before the vehicle goes back out.",
        "We use genuine OEM or quality-matched parts as standard, road-test completed jobs before handover and back major engine work with a clear written warranty.",
      ],
      checklistItems: [
        "25 years of dedicated JLR engine experience.",
        "Thousands of engines supplied, rebuilt and fitted.",
        "Up to 40% less than main-dealer pricing on the right job.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Bedfordshire Customers",
      paragraphs: [
        "Bedfordshire is a key area for our supply, fitting and collection work, but distance is never a reason to settle for second best.",
        "We offer in-house supply-and-fit, collection and delivery support for major rebuild and replacement jobs, and nationwide engine supply where customers want to use their own installer.",
        "Wherever you are, the work is managed by one specialist team with the same diagnosis, the same parts standards and the same warranty-backed finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Bedfordshire",
      panelParagraph:
        "Talk to a specialist and get an honest, no-obligation quote before any work begins. Whether the answer is a targeted repair, a full rebuild or a complete replacement, we will explain the route clearly and price it properly.",
    },
    engineRepairCostSection: {
      title: "Range Rover Engine Cost in Bedfordshire Straight Answers",
      paragraphs: [
        "What you pay depends on the model, engine variant and whether the job is a targeted repair, a full rebuild or a complete replacement. The condition of related components such as the turbo, oil pump and cooling system can also affect the final figure.",
        "That is why we diagnose first and quote second. A quality rebuilt or reconditioned engine, fitted by specialists, can often cost significantly less than a dealer replacement while still restoring the vehicle to the standard it should be at.",
        "If you are comparing used, second hand and reconditioned engine options, we would rather show you where you can save sensibly than where corners get cut. A cheap fix that fails twice is no saving at all.",
        "Every quote is fully itemised, covering parts and labour, and confirmed in writing before any work begins. No vague estimates, no mid-job surprises and no hidden fees.",
      ],
      quoteTitle: "Know the cost before you commit",
      quoteText:
        "Request a fully itemised written quote for your Bedfordshire engine job, free of charge and with no obligation.",
    },
  },
  {
    slug: "cambridgeshire",
    name: "Cambridgeshire",
    metaTitle: "Reconditioned Range Rover Engines Cambridgeshire | Vogue Technics",
    metaDescription:
      "Reconditioned Range Rover engines in Cambridgeshire, supplied and fitted with OEM parts, fixed pricing and a warranty. Over 20 years' expertise. Free quote today.",
    heroSubtitle:
      "Vogue Technics supplies, repairs and fits Range Rover, Land Rover, Jaguar and BMW engines for Cambridgeshire drivers and customers across the UK, backed by OEM-grade parts, fixed written quotes and warranty-backed workmanship.",
    overviewHeading: "Why Cambridgeshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Cambridgeshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Cambridge and Peterborough to Huntingdon, Ely and Wisbech, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Cambridgeshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "One focus, every engine, done properly",
        description:
          "Our workshop works on major engine jobs for Range Rover, Land Rover, Jaguar and BMW platforms every day, which is why difficult faults are diagnosed accurately and fixed properly.",
      },
      {
        title: "Written quotes and fixed pricing",
        description:
          "Every Cambridgeshire job is priced clearly in writing before work begins, with no vague estimates and no hidden extras once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Cambridgeshire",
    localCoverageParagraphs: [
      "Cambridgeshire is a strong regional coverage area for us, with regular enquiries from owners who want specialist engine support rather than main-dealer pricing or general-garage guesswork.",
      "We support customers across Cambridgeshire with collection planning, supply-and-fit options and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Cambridge", "Peterborough", "Huntingdon", "Ely", "Wisbech"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Cambridgeshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Cambridgeshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or transport route from your part of Cambridgeshire.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Cambridgeshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We regularly support customers across Cambridgeshire, including Cambridge, Peterborough, Huntingdon, Ely and Wisbech, as well as other surrounding towns. If your area is not listed, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We support Cambridgeshire directly, but we also offer UK-wide supply, collection and delivery options. Depending on the job, we can supply the engine for fitting elsewhere or manage the work through our workshop process.",
      },
      {
        question: "Do you collect my car?",
        answer:
          "Yes. If you cannot get the vehicle to us, we can arrange collection or recovery support and return the vehicle once the work is complete. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Is the warranty valid anywhere in the UK?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
      {
        question: "Will using an independent specialist affect my warranty?",
        answer:
          "No. Major engine work carried out with OEM-grade or quality-matched parts to the correct standards does not depend on using a main dealer, and we document the work clearly throughout the process.",
      },
      {
        question: "Can you source a replacement engine if mine is beyond repair?",
        answer:
          "Yes. Where appropriate, we can supply a tested used, rebuilt or reconditioned replacement engine, with delivery arranged or full fitting handled through the same specialist workshop team.",
      },
    ],
    relatedSlugs: ["bedfordshire", "norfolk", "suffolk", "hertfordshire"],
    specialistsSection: {
      title: "One focus. Every engine. Done properly.",
      eyebrow: "Cambridgeshire Engine Specialists",
      intro:
        "When your Range Rover, Land Rover or BMW engine fails, you do not need a general garage. You need a specialist who works on these platforms every day. Vogue Technics has built its name around major engine work alone, which is why Cambridgeshire owners trust us with rebuilds, replacements and difficult faults that other workshops often struggle to diagnose properly.",
      supportingTitle: "Trusted for over two decades",
      supportingParagraphs: [
        "For more than 20 years, our work has centred on major engine jobs: rebuilding TDV6, SDV8, Ingenium and supercharged V8 units, resolving timing chain failures and correcting turbo faults with the right diagnosis first.",
        "The result is straightforward: honest advice, genuine OEM-grade or quality-matched parts, fixed pricing agreed in writing and an engine that is tested properly before it leaves the workshop.",
      ],
      checklistItems: [
        "20+ years of specialist engine experience.",
        "Thousands of engines rebuilt, repaired and replaced.",
        "Minimum 6-month written warranty on major engine work where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Cambridgeshire Customers",
      paragraphs: [
        "Our workshop is in Essex, but our reach is not limited by postcode. We support Cambridgeshire directly and can also arrange collection, delivery and fitting routes for customers across the country.",
        "Whether you need full supply-and-fit, a delivered replacement engine or collection because the vehicle is off the road, the job stays under the control of one specialist team from first diagnosis to final handover.",
        "Distance does not change the standard of work, the quality of parts or the way the vehicle or engine is checked before it comes back to you.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Cambridgeshire",
      panelParagraph:
        "Tell us what is wrong and we will tell you straight. One specialist team, one honest answer and one fair written price before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Cambridgeshire What You Need to Know",
      paragraphs: [
        "Engine costs vary, and any specialist who quotes a firm figure before seeing the car is not giving you the full picture. The price depends on the engine variant and condition, whether the right fix is a targeted repair, a rebuild or a full replacement, and whether you need supply-only or full supply-and-fit.",
        "That is why every job starts with a proper diagnostic. Once we understand the engine and the fault, we provide a fully itemised written quote covering all parts and labour with no mid-job surprises.",
        "A quality rebuilt, reconditioned or tested used engine can often save a substantial amount against a main-dealer replacement route, while still giving you the parts quality, specialist installation and written warranty the job demands.",
        "The price we quote is the price you pay. No vague estimates, no hidden extras and no pressure to approve work the engine does not genuinely need.",
      ],
      quoteTitle: "Want to know where you stand?",
      quoteText:
        "Send us your registration or describe the fault and we will come back with an honest assessment and a written quote for your Cambridgeshire engine job.",
    },
  },
  {
    slug: "cheshire",
    name: "Cheshire",
    metaTitle: "Reconditioned Range Rover Engines Cheshire | Vogue Technics",
    metaDescription:
      "Reconditioned, rebuilt & used Range Rover engines in Cheshire & UK-wide. 20+ yrs JLR specialists, OEM parts, 6-month warranty, supply & fit. Free quote.",
    heroSubtitle:
      "From our specialist JLR workshop, Vogue Technics supplies, fits and delivers Range Rover, Land Rover, Jaguar and BMW engines to Cheshire and across the UK, backed by OEM-specification parts, written quotes and warranty-backed workmanship at a fraction of main-dealer pricing.",
    overviewHeading: "Why Cheshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Cheshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "Whether you need supply only, full supply-and-fit or collection because the vehicle is off the road, the same specialist workshop team manages the job from start to finish with written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Cheshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Engine specialists, not a general garage",
        description:
          "Our workshop works on Jaguar Land Rover and BMW engines every day, including TDV6, SDV8, Ingenium diesel, supercharged V8 and key BMW diesel platforms.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Cheshire job is quoted clearly in writing before work begins, with no vague estimates and no hidden extras once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle or engine is returned.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Cheshire",
    localCoverageParagraphs: [
      "Cheshire is part of our wider national coverage for owners who want specialist engine support rather than accepting a local general-garage route or main-dealer pricing.",
      "We support Cheshire customers through collection, delivery, supply-and-fit and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Chester", "Warrington", "Crewe", "Macclesfield", "Wilmslow"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Cheshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Cheshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or engine delivery",
        description:
          "If the vehicle needs to come to us, we arrange collection or recovery support. If you only need an engine, we confirm the right delivery route.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Cheshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support Cheshire and the rest of mainland UK through collection, delivery, supply-and-fit and workshop-based engine work. If your county is not listed in the main area pages, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can supply engines across the UK, arrange delivery to your own mechanic, or manage full supply-and-fit through our workshop process depending on what the job requires.",
      },
      {
        question: "Do you collect my car?",
        answer:
          "Yes. UK-wide collection and delivery is available, and recovery support can be arranged if the vehicle is off the road. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Is the warranty valid anywhere in the UK?",
        answer:
          "Yes. Our written warranty applies regardless of where you are based. The exact coverage depends on the engine and service provided, and it is confirmed clearly before handover.",
      },
      {
        question: "Can I buy an engine without fitting?",
        answer:
          "Yes. Where appropriate, we can supply a used, rebuilt or reconditioned engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you work on Land Rover, Jaguar and BMW too?",
        answer:
          "Yes. As well as Range Rover, we specialise in Land Rover, Jaguar and BMW engine work, including major repairs, rebuilds and replacements handled through the same specialist workshop team.",
      },
    ],
    relatedSlugs: ["london", "essex", "surrey", "kent"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Cheshire Engine Specialists",
      intro:
        "When a Range Rover, Land Rover or BMW engine fails, the next decision matters. Vogue Technics works on Jaguar Land Rover and BMW engines every day, and that depth of focus is what separates a genuine engine specialist from a general repair shop. Whether the answer is a clean reconditioned unit, a precision rebuild or a targeted repair, Cheshire customers get the same honest diagnosis, written quote and warranty-backed process before any work begins.",
      supportingTitle: "20+ Years of Experience",
      supportingParagraphs: [
        "Our workshop is built around the platforms we know in depth: TDV6, SDV8, Ingenium diesel, supercharged AJ133 V8 and key BMW diesel engines that demand specialist handling rather than generic repair methods.",
        "That focus means faults are identified properly, parts are matched correctly and every completed engine or vehicle is tested before it goes back out.",
      ],
      checklistItems: [
        "20+ years specialising in JLR and BMW engines.",
        "5,000+ engines supplied and serviced.",
        "6-month written warranty on reconditioned and rebuilt engines where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Cheshire Customers",
      paragraphs: [
        "Every engine we supply, rebuild and fit is prepared in our dedicated Grays workshop, where the specialist tooling, diagnostics and machining capability for JLR and BMW engines are all under one roof.",
        "That focused setup is why we can serve Cheshire and the rest of the country to a consistent standard without relying on a franchised network or passing jobs into unsuitable hands.",
        "Whether you need supply only, collection and return delivery or full workshop fitting, the job is managed by one specialist team with the same standards, the same parts quality and the same written warranty.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Cheshire",
      panelParagraph:
        "Talk to a specialist and get an honest written quote before any work begins. No jargon, no hidden costs and no pressure to approve the wrong route for your vehicle.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Cheshire What You Need to Know",
      paragraphs: [
        "Engine work is rarely one-price-fits-all, and any specialist promising a firm figure before seeing the vehicle is not giving you the full picture. The real cost depends on the engine variant, the fault itself, whether related components such as the timing chain, turbo or oil pump also need attention, and whether the right answer is repair, rebuild or replacement.",
        "What stays constant is how we quote: diagnose first, then provide a fully itemised written quote covering parts and labour before work begins. The price we quote is the price you pay.",
        "A rebuilt or reconditioned engine, fitted to the correct standard and backed by warranty, can often save a substantial amount against a main-dealer replacement route while still delivering the reliability you need.",
        "If you are comparing used, rebuilt and reconditioned engine options, we would rather show you the lowest honest price for an engine that lasts than push a cheap fix that fails twice and costs more in the long run.",
      ],
      quoteTitle: "Want the real number?",
      quoteText:
        "Request a written, itemised quote for your Cheshire engine job and know exactly where you stand before any work begins.",
    },
  },
  (() => {
    const area = buildAreaDetail({
      slug: "dorset",
      name: "Dorset",
      localPlaces: ["Bournemouth", "Poole", "Dorchester", "Weymouth", "Blandford Forum"],
      collectionNote:
        "Dorset customers use us when they need specialist engine support with a clear plan for collection, workshop repair, rebuild or replacement.",
      relatedSlugs: ["west-sussex", "berkshire", "surrey", "kent"],
    });

    return {
      ...area,
      metaTitle: "Range Rover Engines Dorset | Vogue Technics",
      metaDescription:
        "Reconditioned, used & rebuilt Range Rover engines supplied and fitted across Dorset. OEM parts, warranty-backed work, fair pricing. Get a free quote today.",
    };
  })(),
  {
    slug: "wiltshire",
    name: "Wiltshire",
    metaTitle: "Reconditioned Range Rover Engines Wiltshire | Areas We Cover – Vogue Technics",
    metaDescription:
      "Vogue Technics supplies and fits reconditioned Range Rover, Land Rover & BMW engines across Wiltshire and the UK. 20+ years' experience, OEM parts, warranty-backed work. Get a free quote",
    heroSubtitle:
      "Vogue Technics supplies and fits reconditioned, used and rebuilt Range Rover, Land Rover and BMW engines for customers across Wiltshire and the wider UK, backed by 20+ years of specialist experience, genuine parts and a written warranty on every job.",
    overviewHeading: "Why Wiltshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Wiltshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "Whether you need a used engine, a rebuilt unit, a targeted repair or full supply-and-fit, the same specialist workshop team manages the job from start to finish with written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Wiltshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "One focus: major engine work",
        description:
          "Our workshop is built around engine work for Range Rover, Land Rover, Jaguar and BMW platforms, not general servicing with engine work treated as a sideline.",
      },
      {
        title: "Written quotes and honest pricing",
        description:
          "Every Wiltshire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence whether the engine is fitted by us or supplied to your chosen installer under the agreed terms.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Wiltshire",
    localCoverageParagraphs: [
      "Wiltshire is part of our wider UK coverage for customers who want specialist engine support without relying on a local general-garage route or paying main-dealer pricing.",
      "We support Wiltshire customers through delivery, collection options and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Swindon", "Salisbury", "Chippenham", "Trowbridge", "Marlborough"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Wiltshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Wiltshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or delivery",
        description:
          "If the vehicle needs to come to us, we confirm collection options. If you only need an engine, we arrange the right delivery route for your location.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Wiltshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas does Vogue Technics cover?",
        answer:
          "We support Wiltshire and the rest of the UK through delivery, collection options and workshop-based engine work. If your county is not listed in the main area pages, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you deliver and fit engines outside the South East?",
        answer:
          "Yes. We can supply engines across the UK, arrange delivery to your own garage, or manage collection and fitting through our specialist workshop process depending on what the job requires.",
      },
      {
        question: "Do you collect my car if I am not nearby?",
        answer:
          "In many cases, yes. We can arrange collection and return depending on the vehicle location and the size of the job. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Is the warranty valid if I am outside Essex?",
        answer:
          "Yes. Our written warranty applies UK-wide, subject to the agreed fitting and service terms, and the exact coverage is confirmed clearly before handover.",
      },
      {
        question: "Can I buy just the engine and have my own garage fit it?",
        answer:
          "Yes. Where appropriate, we can supply used and reconditioned engines for fitting by your own garage, with test documentation and warranty terms provided in writing.",
      },
      {
        question: "Are cheap Range Rover engines actually good value?",
        answer:
          "Only if they are tested properly and supplied with sensible warranty terms. We are honest about when a used engine is the right budget route and equally honest when it is likely to cost more in the long run.",
      },
    ],
    relatedSlugs: ["dorset", "berkshire", "oxfordshire", "surrey"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Wiltshire Engine Specialists",
      intro:
        "For over 20 years, Vogue Technics has built its reputation on doing one thing properly: engine work. We are specialist Range Rover, Land Rover and BMW engine technicians, not a general garage that also happens to do engines, and that focus shows in every engine that leaves the workshop.",
      supportingTitle: "20+ Years' Experience",
      supportingParagraphs: [
        "Whether you are searching for specialist help from Wiltshire or calling from elsewhere in the country, you get the same dealer-level diagnosis, the same OEM and quality-uprated parts, and the same honest pricing approach we have applied for two decades.",
        "As an IGA member workshop, we keep the process transparent: jobs are explained in plain English, quoted clearly in writing and tested properly before the engine or vehicle goes back on the road.",
      ],
      checklistItems: [
        "20+ years of specialist engine experience.",
        "Every engine warranty-backed in writing where applicable.",
        "OEM and quality-uprated parts used as standard.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Wiltshire Customers",
      paragraphs: [
        "Every engine we supply, whether it is going to Wiltshire or anywhere else in the UK, is prepared, tested and signed off at our own fully equipped workshop before it goes anywhere near a customer's vehicle.",
        "That single-workshop approach is how we keep quality consistent regardless of postcode: one team, one set of standards and one workshop doing the work properly rather than outsourcing it to whoever is cheapest.",
        "It also means that when you call with a question, you are speaking to the people who actually handled the engine rather than a third party or a call centre reading from a script.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Wiltshire",
      panelParagraph:
        "We have probably already fixed one like it. Speak to a specialist for honest advice, a clear written quote and the right route for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Wiltshire What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs vary depending on the vehicle, the engine variant, the extent of the fault, and whether the right answer is a repair, a rebuild or a full replacement.",
        "The biggest factors are the engine code, parts availability, the labour needed to access and fit the engine, and whether related components such as the turbo, timing chain or sensors also need attention at the same time.",
        "One of the most common questions we hear is why a reconditioned engine from a specialist often costs less than a main-dealer quote for the same job. The honest answer is overheads: we work to the right standards with OEM-grade parts, but without franchise pricing layered on top.",
        "Every quote is confirmed in writing before work begins, with no hidden extras added after the vehicle is already on the ramp. If the job turns out to need more than first diagnosed, we call you first rather than simply doing the work and billing you afterwards.",
      ],
      quoteTitle: "Want an exact figure rather than a rough guide?",
      quoteText:
        "Request a written quote for your Wiltshire engine job and we will come back with honest initial advice and clear pricing before any work begins.",
    },
  },
  {
    slug: "greater-manchester",
    name: "Greater Manchester",
    metaTitle: "Engine Replacement in Greater Manchester | Vogue Technics",
    metaDescription:
      "Vogue Technics provides expert engine rebuilds and replacements across Greater Manchester, backed by warranty and honest, transparent pricing.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support for Greater Manchester drivers, delivering dealer-level expertise at a fair price.",
    overviewHeading: "Why Greater Manchester drivers choose Vogue Technics",
    overviewParagraphs: [
      "Greater Manchester owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Manchester and Salford to Bolton, Bury, Stockport and Trafford, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Greater Manchester drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Built for prestige engine work",
        description:
          "Our technicians focus on major engine work for Range Rover, Land Rover, Jaguar and BMW vehicles, using the right methods and quality-matched parts for these platforms.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every Greater Manchester job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Greater Manchester",
    localCoverageParagraphs: [
      "Greater Manchester is part of our wider UK coverage for owners who want specialist engine support rather than accepting a local general-garage route or excessive dealer pricing.",
      "We support customers across Greater Manchester with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Manchester", "Salford", "Bolton", "Bury", "Stockport"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Greater Manchester",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Greater Manchester location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Greater Manchester?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers throughout Greater Manchester, including Manchester, Salford, Bolton, Bury, Rochdale, Oldham, Stockport, Tameside, Trafford and Wigan, as well as customers from other parts of the UK.",
      },
      {
        question: "Do you provide engine delivery and fitting services?",
        answer:
          "Yes. We offer engine delivery, fitting and supply-and-fit routes where appropriate. The most suitable option depends on the job, your location and whether the vehicle needs workshop-based repair or replacement.",
      },
      {
        question: "Can you supply used or reconditioned engines?",
        answer:
          "Yes. We can offer used, second-hand and fully reconditioned engine options subject to availability and suitability for the vehicle and job.",
      },
      {
        question: "Do you collect vehicles?",
        answer:
          "Collection, recovery and transport options may be available depending on your location and the condition of the vehicle. Contact us with the details and we will confirm the best route.",
      },
      {
        question: "Is the warranty valid outside Greater Manchester?",
        answer:
          "Yes. Where a warranty is provided, the coverage terms apply regardless of customer location. Full written details are always confirmed before work begins or the engine is supplied.",
      },
      {
        question: "Are you a Range Rover engine specialist?",
        answer:
          "Yes. We focus on diagnosing, repairing, rebuilding and replacing engines for Range Rover, Land Rover, Jaguar and BMW vehicles through one specialist workshop team.",
      },
    ],
    relatedSlugs: ["cheshire", "london", "essex", "kent"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Greater Manchester Engine Specialists",
      intro:
        "At Vogue Technics, we understand that engine failure is one of the most stressful and expensive problems a vehicle owner can face. For more than 25 years, our team has specialised in diagnosing, repairing, rebuilding and replacing engines for Range Rover, Land Rover, Jaguar and BMW vehicles, providing a practical alternative to main-dealer pricing without compromising on quality.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Our reputation has been built on technical expertise, genuine and OEM-quality parts, transparent advice and a workshop process designed specifically for major engine work on prestige platforms.",
        "Whether you are looking for a reconditioned engine, professional diagnostics or a full replacement package, every job is completed with precision and backed by a team that understands these vehicles inside and out.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines repaired, rebuilt and supplied.",
        "Warranty protection available on major engine work.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Greater Manchester Customers",
      paragraphs: [
        "While many customers come to us from across Greater Manchester, our support extends much further. We regularly assist vehicle owners throughout the UK with engine supply, engine fitting, collection arrangements and specialist repair services.",
        "Whether you need supply-only, delivery to your chosen garage or full workshop-based installation by our technicians, we can tailor a practical route around your requirements.",
        "Recovery, transport and vehicle collection options may also be available depending on location, which helps customers access specialist support even when the vehicle is not drivable.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Greater Manchester",
      panelParagraph:
        "Expert diagnosis, transparent pricing and specialist workmanship. Speak to our team and we will explain the most sensible route for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Greater Manchester What You Need to Know",
      paragraphs: [
        "One of the most common questions we receive is how much engine repair or replacement will cost. The answer depends on the fault, the engine model, the overall condition of the vehicle and whether repair, rebuild or replacement represents the best long-term option.",
        "For many customers, choosing a rebuilt or reconditioned engine offers a significant saving compared with purchasing a brand-new engine through a main dealer, while still maintaining the reliability expected when the work is carried out to the correct standard.",
        "The cost of a replacement project can vary depending on labour requirements, component availability and whether additional repairs are needed at the same time. Cheaper engine options may look attractive initially, but quality, warranty protection and installation standards matter far more over the long term.",
        "We provide clear written quotations with no hidden surprises, so customers can make decisions based on transparency, technical expertise and the real value of the work being carried out.",
      ],
      quoteTitle: "Request a written quote",
      quoteText:
        "Receive a detailed assessment, clear pricing and expert recommendations for your Greater Manchester engine job before any work begins.",
    },
  },
  {
    slug: "rutland",
    name: "Rutland",
    metaTitle: "Reconditioned Range Rover Engines Rutland | Areas Covered | Vogue Technics",
    metaDescription:
      "Reconditioned Range Rover Engines Rutland supplied, fitted, repaired and rebuilt by Vogue Technics. Nationwide coverage, 25+ years' experience, warranty-backed engine solutions and specialist Range Rover engine services.",
    heroSubtitle:
      "Vogue Technics supplies, repairs, rebuilds and replaces Range Rover, Land Rover, Jaguar and BMW engines for customers throughout Rutland and surrounding areas, backed by 25+ years of experience, OEM-quality components and warranty-backed workmanship.",
    overviewHeading: "Why Rutland drivers choose Vogue Technics",
    overviewParagraphs: [
      "Rutland owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "Whether you need a targeted repair, a rebuilt unit, a replacement engine or full supply-and-fit support, the same specialist workshop team manages the job from start to finish with written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Rutland drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Premium engine specialists",
        description:
          "We focus on Range Rover, Land Rover, Jaguar and BMW engines, giving Rutland customers access to specialist support rather than a generic repair route.",
      },
      {
        title: "Written quotes and honest pricing",
        description:
          "Every Rutland job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Rutland",
    localCoverageParagraphs: [
      "Rutland is part of our wider regional and national coverage for customers who want specialist engine support without relying on a local general-garage route or excessive main-dealer pricing.",
      "We support customers across Rutland with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Oakham", "Uppingham", "Ketton", "Cottesmore", "Greetham"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Rutland",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Rutland location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Rutland?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers throughout Rutland and surrounding regions, while also offering nationwide services for engine supply, rebuilds and replacement projects. If your location is not listed, contact our team and we will confirm the best route for your job.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We regularly provide engine delivery, installation and specialist support for customers across the UK. The most suitable route depends on the location, the vehicle and the work required.",
      },
      {
        question: "Can you collect my vehicle?",
        answer:
          "In many cases, yes. We can discuss collection, recovery or transport arrangements depending on your location and the condition of the vehicle, then recommend the most practical option.",
      },
      {
        question: "Is the warranty valid outside Rutland?",
        answer:
          "Yes. Warranty coverage applies according to the written terms supplied with your engine repair, rebuild or replacement service, regardless of where you are located within the UK.",
      },
      {
        question: "Do you supply used and reconditioned engines?",
        answer:
          "Yes. We offer used, rebuilt and reconditioned engine options as well as complete installation packages, with suitability assessed against your vehicle and budget.",
      },
      {
        question: "Do you work on Land Rover and Jaguar engines?",
        answer:
          "Yes. Alongside Range Rover models, we provide specialist support for Land Rover, Jaguar and selected BMW engines requiring expert diagnostics, repair or replacement.",
      },
    ],
    relatedSlugs: ["cambridgeshire", "bedfordshire", "hertfordshire", "greater-manchester"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Rutland Engine Specialists",
      intro:
        "When searching for specialist engine support in Rutland, vehicle owners need more than just a supplier. They need experienced technicians who understand the engineering behind every repair, rebuild and replacement. At Vogue Technics, we focus exclusively on premium vehicle engine solutions, providing trusted support for Range Rover, Land Rover, Jaguar and BMW owners across Rutland and beyond.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Our workshop combines over two decades of hands-on expertise with advanced diagnostic equipment, manufacturer-approved repair procedures and high-quality OEM or genuine parts.",
        "Whether you require a complete engine rebuild, a replacement unit, a targeted repair or a fully warranted engine installation, every project is completed to exacting standards with long-term reliability in mind.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines supplied and fitted.",
        "OEM and genuine parts used wherever possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Rutland Customers",
      paragraphs: [
        "Although our workshop serves customers throughout Rutland, our reach extends far beyond local boundaries. We regularly assist vehicle owners from across the UK with engine diagnostics, rebuilds, replacement engines and specialist installations.",
        "Whether you require supply-only, nationwide engine delivery, vehicle collection or a complete supply-and-fit package, our experienced team can coordinate the process from quotation through to completion.",
        "We work with trusted transport partners and keep communication clear at every stage, helping make major engine work more straightforward for customers who are not local to the workshop.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Rutland",
      panelParagraph:
        "Speak directly with specialist technicians and receive honest advice, transparent pricing and a tailored solution for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Rutland What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs depend on the vehicle model, engine type, extent of damage, parts required and labour involved. Minor repairs may only need targeted component replacement, while more significant faults can make a rebuild or replacement engine the more economical long-term solution.",
        "In many cases, choosing a rebuilt or reconditioned engine can save a substantial amount compared with purchasing a brand-new engine through a main dealer, particularly when the unit is prepared and installed to the correct standards.",
        "We also offer cost-conscious options where appropriate, including carefully inspected used and reconditioned engines, but every recommendation is based on reliability, value and suitability for your vehicle rather than maximising the invoice.",
        "Our quotations clearly outline parts, labour and any additional requirements before work begins. There are no hidden charges, unexpected extras or unnecessary repairs, just straightforward advice from experienced specialists committed to long-term value.",
      ],
      quoteTitle: "Request a written quote",
      quoteText:
        "Receive a transparent, itemised quotation from experienced engine specialists before any work is carried out on your Rutland vehicle.",
    },
  },
  {
    slug: "northamptonshire",
    name: "Northamptonshire",
    metaTitle: "Reconditioned Range Rover Engines Northamptonshire | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for Reconditioned Range Rover Engines Northamptonshire? Vogue Technics provides expert engine repair, rebuild, replacement and supply & fit services across Northamptonshire and surrounding areas. Trusted specialists with 25+ years' experience, warranties and OEM-quality workmanship.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support for customers across Northamptonshire, backed by 25+ years of experience and manufacturer-level expertise.",
    overviewHeading: "Why Northamptonshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Northamptonshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Northampton and Kettering to Corby, Wellingborough, Daventry and Towcester, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Northamptonshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Manufacturer-level engine expertise",
        description:
          "Our technicians have extensive experience across Range Rover, Land Rover, Jaguar and BMW engines, including timing chain failures, turbocharger issues, head gasket faults and complete engine failures.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every Northamptonshire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Northamptonshire",
    localCoverageParagraphs: [
      "Northamptonshire is part of our wider regional and national coverage for customers who want specialist engine support without relying on a local general-garage route or excessive main-dealer pricing.",
      "We support customers across Northamptonshire with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Northampton", "Kettering", "Corby", "Wellingborough", "Daventry"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Northamptonshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Northamptonshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Northamptonshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We provide specialist engine services throughout Northamptonshire and surrounding regions. Customers regularly come to us from neighbouring counties because of our specialist expertise and competitive pricing.",
      },
      {
        question: "Do you offer nationwide engine delivery and fitting?",
        answer:
          "Yes. Depending on the service required, we can arrange engine delivery, supply-and-fit packages and logistical support for customers located outside our immediate area.",
      },
      {
        question: "Can you collect my vehicle?",
        answer:
          "In many cases, yes. We can discuss vehicle recovery and transportation options during your initial enquiry, particularly for non-running vehicles or major engine failures.",
      },
      {
        question: "Is the warranty valid outside Northamptonshire?",
        answer:
          "Yes. Warranty coverage applies regardless of where you live, subject to the written terms and conditions supplied with your engine or repair work.",
      },
      {
        question: "What types of engines do you specialise in?",
        answer:
          "We specialise in BMW, Land Rover, Jaguar and Range Rover engines, including repairs, rebuilds, replacements and supply-and-fit services.",
      },
      {
        question: "Do you provide used and reconditioned engines?",
        answer:
          "Yes. We offer used replacement units and professionally reconditioned engines depending on customer requirements, availability and vehicle suitability.",
      },
    ],
    relatedSlugs: ["rutland", "bedfordshire", "hertfordshire", "cambridgeshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Northamptonshire Engine Specialists",
      intro:
        "When you need specialist engine work in Northamptonshire, you need a workshop that understands every aspect of modern Land Rover and BMW engineering. At Vogue Technics, we focus on engine repair, engine rebuilds, engine replacements and complete supply-and-fit solutions for Range Rover, Land Rover, Jaguar and BMW vehicles.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Every engine project is completed using genuine or OEM-quality components, manufacturer-approved processes and rigorous quality-control procedures designed for reliable, long-term results.",
        "Whether you require a complete engine rebuild, a replacement unit or a targeted engine repair, our focus remains the same: dependable workmanship, honest advice and a fair price.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines repaired and supplied.",
        "Specialist BMW, Range Rover and Land Rover expertise.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Northamptonshire Customers",
      paragraphs: [
        "Although our workshop serves Northamptonshire extensively, our support extends far beyond local boundaries. We regularly assist customers throughout the wider region with collection arrangements, engine delivery services and complete supply-and-fit solutions.",
        "Whether you require a used engine, a second-hand replacement, a rebuilt unit or a fully reconditioned engine, our experienced team can guide you through the most suitable option for your vehicle and budget.",
        "We can also arrange vehicle recovery where required and work with trusted logistics partners to help keep the process smooth from enquiry through to completion.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Northamptonshire",
      panelParagraph:
        "Speak directly with experienced specialists and discover the most cost-effective solution for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Northamptonshire What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs vary significantly depending on the vehicle model, engine type, extent of damage and parts required. A straightforward repair may cost far less than a complete replacement, while a professionally reconditioned engine can often provide a more economical alternative to a brand-new dealer unit.",
        "Before any work begins, we provide a detailed assessment and written quotation outlining the recommended repairs, expected costs and the practical options available.",
        "Many customers comparing used engines, supply-only options and complete supply-and-fit packages find that a specialist route offers greater value and peace of mind than purchasing an unknown engine privately.",
        "Our quotations include clear explanations of labour, parts and warranty coverage, so there are no unexpected surprises once the job is underway.",
      ],
      quoteTitle: "Request your free written quote",
      quoteText:
        "Get a transparent assessment, a detailed pricing breakdown and an expert recommendation for your Northamptonshire engine job before any work is carried out.",
    },
  },
  {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    metaTitle: "Reconditioned Range Rover Engines West Yorkshire | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for reconditioned Range Rover engines in West Yorkshire? Vogue Technics provides expert engine repair, rebuild, replacement and supply-and-fit services across West Yorkshire and surrounding areas, backed by 25+ years of experience, warranties and specialist expertise.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support for customers across West Yorkshire, backed by 25+ years of experience, manufacturer-level expertise and warranty-backed workmanship.",
    overviewHeading: "Why West Yorkshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "West Yorkshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Leeds and Bradford to Wakefield, Huddersfield, Halifax and Pontefract, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why West Yorkshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Built for complex premium engine work",
        description:
          "Our team focuses on complex diagnostics, repairs, rebuilds and replacements for Range Rover, Land Rover, Jaguar and BMW vehicles rather than treating engine work as a sideline.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every West Yorkshire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in West Yorkshire",
    localCoverageParagraphs: [
      "West Yorkshire is part of our wider UK coverage for owners who want specialist engine support instead of relying on a local general-garage route or expensive dealer pricing.",
      "We support customers across West Yorkshire with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Leeds", "Bradford", "Wakefield", "Huddersfield", "Halifax"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in West Yorkshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your West Yorkshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in West Yorkshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We serve customers throughout West Yorkshire, including Leeds, Bradford, Wakefield, Huddersfield, Halifax and surrounding towns. We also support customers from neighbouring counties and across the wider UK.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. Depending on the service required, we can provide nationwide engine supply options and discuss fitting arrangements. Contact our team with your location and vehicle details and we will confirm the best route.",
      },
      {
        question: "Can you collect my vehicle?",
        answer:
          "In many cases, collection and recovery solutions can be arranged depending on your location, vehicle condition and the scope of work required.",
      },
      {
        question: "Is my warranty valid outside West Yorkshire?",
        answer:
          "Yes. Warranty coverage applies according to the written terms provided with your repair, rebuild or replacement service, regardless of where you are based.",
      },
      {
        question: "What if my county is not listed?",
        answer:
          "If your location is not shown on the site, contact our team directly. We regularly assist customers from beyond our primary coverage areas and may still be able to help.",
      },
      {
        question: "Do you offer reconditioned and used engines?",
        answer:
          "Yes. We provide rebuilt, reconditioned and selected used engine options, with suitability assessed against the vehicle, the fault and your budget.",
      },
    ],
    relatedSlugs: ["greater-manchester", "cheshire", "rutland", "northamptonshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "West Yorkshire Engine Specialists",
      intro:
        "When your vehicle develops a serious engine fault, choosing the right specialist matters. At Vogue Technics, we focus exclusively on complex engine diagnostics, repairs, rebuilds and replacements for premium vehicle brands, delivering dependable solutions designed for long-term reliability.",
      supportingTitle: "25+ Years of Experience",
      supportingParagraphs: [
        "Our reputation has been built through specialist knowledge, honest advice and exceptional workmanship. We use genuine and OEM-quality components wherever possible and follow manufacturer-approved procedures so every repair meets high technical standards.",
        "From used and reconditioned engine supply to complete rebuild projects, every job receives the same level of attention and care whether the customer is private, trade or fleet-based.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines supplied and fitted.",
        "Warranty-backed repairs and rebuilds where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for West Yorkshire Customers",
      paragraphs: [
        "Although many customers come from West Yorkshire, our reputation extends far beyond the region. We support motorists, independent garages and trade customers throughout the UK with specialist engine supply, repair, rebuild and replacement services.",
        "Collection and delivery options can often be arranged, and our experienced team provides practical guidance throughout the process so customers understand the route that best suits the vehicle and their budget.",
        "Whether you need Land Rover, Jaguar, BMW or Range Rover engine support, we provide the same specialist standards from initial enquiry through to completion.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in West Yorkshire",
      panelParagraph:
        "Get expert advice from experienced engine specialists before any work begins. We will explain the most economical and technically appropriate route for your vehicle.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in West Yorkshire What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs vary considerably depending on the make, model and extent of the damage. Factors such as engine type, mileage, component availability and labour requirements all influence the final price.",
        "In many situations, a professionally reconditioned or rebuilt engine represents significantly better value than a brand-new dealer-supplied unit, allowing owners to restore reliability while avoiding the highest manufacturer replacement costs.",
        "Before any work begins, we carry out detailed diagnostics and provide a written quotation outlining the recommended solution. Whether you require a cost-conscious used engine route, a premium rebuild package or a specialist replacement engine, we explain the options and associated costs clearly.",
        "Customers comparing unknown private used engines with workshop-prepared rebuilt or reconditioned units often find that the professional route offers stronger long-term value, better traceability and clearer warranty support.",
      ],
      quoteTitle: "Request a quote",
      quoteText:
        "Receive a detailed, no-obligation quotation with clear pricing, expert recommendations and no hidden surprises for your West Yorkshire engine job.",
    },
  },
  {
    slug: "gloucestershire",
    name: "Gloucestershire",
    metaTitle: "Reconditioned Range Rover Engines Gloucestershire | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for Reconditioned Range Rover Engines Gloucestershire? Vogue Technics provides expert engine repair, rebuild, replacement, supply and fit services with 25+ years of experience, warranty-backed workmanship, and coverage across Gloucestershire and surrounding areas",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover and BMW engine repair, rebuild, replacement and supply-and-fit support throughout Gloucestershire, backed by 25+ years of experience, genuine or OEM-quality parts and warranty-backed workmanship.",
    overviewHeading: "Why Gloucestershire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Gloucestershire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Gloucester and Cheltenham to Stroud, Cirencester, Tewkesbury and the wider Cotswolds, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Gloucestershire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Specialist support for complex failures",
        description:
          "Our workshop handles timing chain issues, crankshaft damage, oil starvation, overheating, head gasket failures and complete engine rebuilds across Range Rover, Land Rover, Jaguar and BMW platforms.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every Gloucestershire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Gloucestershire",
    localCoverageParagraphs: [
      "Gloucestershire is part of our wider regional and UK coverage for customers who want specialist engine support without relying on a local general-garage route or excessive dealer pricing.",
      "We support customers across Gloucestershire with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Gloucester", "Cheltenham", "Stroud", "Cirencester", "Tewkesbury"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Gloucestershire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Gloucestershire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Gloucestershire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We serve customers throughout Gloucestershire, including Gloucester, Cheltenham, Stroud, Cirencester, Tewkesbury, the Cotswolds and surrounding locations. We also assist customers from neighbouring counties and across the UK.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can arrange nationwide engine supply, delivery and installation support depending on the service required. Contact us with your location and vehicle details and we will confirm the best route.",
      },
      {
        question: "Do you collect vehicles for major engine work?",
        answer:
          "In many cases, yes. We can discuss vehicle recovery, transportation and collection options when significant engine repairs or replacement work is required.",
      },
      {
        question: "Is the warranty valid outside Gloucestershire?",
        answer:
          "Yes. Warranty coverage applies according to the written terms provided with your repair, rebuild or replacement service regardless of where you are located within the UK.",
      },
      {
        question: "What vehicles do you specialise in?",
        answer:
          "Our workshop specialises in BMW, Land Rover, Jaguar and Range Rover vehicles. We are experienced in diagnosing and repairing complex engine faults affecting both modern and older models.",
      },
      {
        question: "What's the difference between reconditioned, rebuilt and used engines?",
        answer:
          "Reconditioned engines undergo extensive refurbishment and testing. Rebuilt engines usually involve replacement of worn internal components. Used engines are sourced from donor vehicles and can offer a lower-cost option depending on availability and condition.",
      },
    ],
    relatedSlugs: ["wiltshire", "oxfordshire", "berkshire", "west-yorkshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Gloucestershire Engine Specialists",
      intro:
        "At Vogue Technics, we understand that engine problems are stressful, expensive and disruptive. That is why we have built our reputation on providing honest advice, expert diagnostics and dependable workmanship for customers throughout Gloucestershire and across the UK.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Whether you require a targeted engine repair, a complete replacement or a fully rebuilt engine installation, our experienced technicians deliver solutions designed for long-term reliability using genuine or OEM-quality components.",
        "With thousands of successful repairs completed, Vogue Technics continues to be the trusted choice for owners seeking specialist engine expertise and exceptional value compared with main-dealer routes.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines repaired and supplied.",
        "Genuine and OEM-quality parts used wherever possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Gloucestershire Customers",
      paragraphs: [
        "Although our workshop serves Gloucestershire extensively, our customer base extends far beyond the county. We regularly assist vehicle owners throughout the UK who require specialist engine expertise that can be difficult to find locally.",
        "We can arrange vehicle collection, transportation support and nationwide delivery options for replacement engines where required, helping make major engine work more convenient for customers outside our immediate area.",
        "Whether you need a used engine, a complete rebuild or professional fitting services, we aim to make the process straightforward from initial diagnosis through to final testing.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Gloucestershire",
      panelParagraph:
        "Speak directly with an experienced specialist and discover the most cost-effective solution for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Gloucestershire What You Need to Know",
      paragraphs: [
        "The cost of engine repair or replacement can vary significantly depending on the vehicle model, the extent of damage and the most suitable repair strategy. Engine type, labour requirements, component availability and whether repair, rebuild or replacement is the most economical route all affect the final figure.",
        "Many customers comparing rebuilt or reconditioned engines are surprised to find that a professionally prepared unit can offer substantial savings compared with a brand-new main-dealer replacement while still delivering strong reliability and performance.",
        "We can also discuss lower-cost routes such as selected used engines where appropriate, but every recommendation is based on the vehicle condition, your budget and the long-term value of the repair rather than simply the lowest headline price.",
        "If you need a replacement engine or a complete repair package, we provide detailed written quotations with no hidden charges and no unexpected surprises once the work is underway.",
      ],
      quoteTitle: "Get my quote",
      quoteText:
        "Receive a clear, itemised quotation from experienced specialists before any work begins on your Gloucestershire engine job.",
    },
  },
  {
    slug: "west-midlands",
    name: "West Midlands",
    metaTitle: "Reconditioned Range Rover Engines West Midlands | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for Reconditioned Range Rover Engines West Midlands? Vogue Technics provides specialist Range Rover, Land Rover and BMW engine repair, rebuild, replacement and supply-and-fit services across the West Midlands and surrounding regions. Trusted experts with 25+ years' experience.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support for customers across the West Midlands, backed by dealer-level expertise, genuine-quality parts and warranty-backed workmanship.",
    overviewHeading: "Why West Midlands drivers choose Vogue Technics",
    overviewParagraphs: [
      "West Midlands owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Birmingham and Coventry to Wolverhampton, Dudley, Walsall and Solihull, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why West Midlands drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Premium engine expertise",
        description:
          "Our team specialises in complex engine work for Range Rover, Land Rover, Jaguar and BMW vehicles, including head gasket failures, timing chain faults and complete rebuilds.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every West Midlands job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in the West Midlands",
    localCoverageParagraphs: [
      "The West Midlands is part of our wider regional and UK coverage for customers who want specialist engine support without relying on local general-garage routes or excessive dealer pricing.",
      "We support customers across the West Midlands with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Birmingham", "Coventry", "Wolverhampton", "Dudley", "Solihull"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in the West Midlands",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your West Midlands location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in the West Midlands?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers throughout Birmingham, Coventry, Wolverhampton, Dudley, Walsall, Sandwell, Solihull, Staffordshire, Warwickshire, Worcestershire and surrounding regions. We also assist customers from further afield who require specialist engine services.",
      },
      {
        question: "Do you provide nationwide engine supply and fitting?",
        answer:
          "Yes. Our team regularly handles supply-only, supply-and-fit and fitting support for customers across the UK. Contact us with your location and vehicle requirements and we will confirm the best route.",
      },
      {
        question: "Can you collect my vehicle?",
        answer:
          "In many cases, yes. Depending on your location and the condition of the vehicle, we can discuss recovery, transportation or collection options to help minimise inconvenience.",
      },
      {
        question: "Is your warranty valid outside the West Midlands?",
        answer:
          "Yes. Warranty coverage applies according to the written terms supplied with your repair, rebuild or replacement work, regardless of where within the UK you are based.",
      },
      {
        question: "What if my county is not listed?",
        answer:
          "If your area does not currently have a dedicated page, contact us directly. Our coverage extends beyond the listed regions, and we may still be able to assist.",
      },
      {
        question: "Do you offer reconditioned and used engines?",
        answer:
          "Yes. We supply rebuilt, reconditioned and quality-tested used engine options depending on availability, suitability and your vehicle requirements.",
      },
    ],
    relatedSlugs: ["gloucestershire", "northamptonshire", "greater-manchester", "rutland"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "West Midlands Engine Specialists",
      intro:
        "At Vogue Technics, we understand that a major engine fault can be one of the most stressful and costly issues a vehicle owner faces. That is why we have dedicated more than two decades to specialist engine solutions for Range Rover, Land Rover, Jaguar and BMW vehicles, helping customers access dealer-level expertise without dealer-level pricing.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Whether you require a reconditioned engine, a complete replacement, or specialist diagnosis and repair, our experienced technicians deliver dependable results that prioritise quality, reliability and long-term performance.",
        "Every engine build, repair and replacement is completed using genuine or OEM-quality components and backed by written warranty protection, giving customers confidence in the route they choose.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines supplied and rebuilt.",
        "Genuine and OEM parts used throughout where possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for West Midlands Customers",
      paragraphs: [
        "Although our workshop is strategically placed to support customers throughout the West Midlands, our reputation extends far beyond the local area. We regularly assist motorists requiring used, rebuilt and replacement engines from across the UK.",
        "Vehicle collection, transportation and delivery options can often be arranged where required, making it easier to access specialist expertise without travelling long distances on a failing engine.",
        "Whether you need a complete rebuild, a replacement unit or technical guidance, we provide a seamless service from first enquiry through to final handover.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in the West Midlands",
      panelParagraph:
        "Expert diagnosis, repair, rebuild and replacement solutions from trusted specialists. Speak to our team and we will explain the most suitable route for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in the West Midlands What You Need to Know",
      paragraphs: [
        "The cost of engine repairs varies depending on the type of vehicle, the extent of internal damage, parts availability and whether repair, rebuild or replacement represents the most economical option.",
        "Many customers initially enquire about second-hand or used engines because they are concerned about repair costs, but a professionally rebuilt or reconditioned engine often offers significantly greater reliability and long-term value.",
        "At Vogue Technics, transparency is central to our approach. We provide detailed written quotations outlining recommended work, expected costs and available options before any repairs begin, with no hidden charges and no unnecessary upselling.",
        "Compared with main-dealer pricing, our specialist workshop frequently delivers substantial savings while maintaining the standards expected from genuine Range Rover, Land Rover, Jaguar and BMW engine specialists.",
      ],
      quoteTitle: "Request my quote",
      quoteText:
        "Receive a detailed, transparent assessment from a specialist technician before any work is carried out on your West Midlands engine job.",
    },
  },
  {
    slug: "lincolnshire",
    name: "Lincolnshire",
    metaTitle: "Engine Replacement in Lincolnshire | Vogue Technics",
    metaDescription:
      "Need an engine rebuild or replacement in Lincolnshire? Vogue Technics offers expert fitting, warranty-backed work, and fast local service.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover and BMW engine solutions for customers across Lincolnshire, backed by nationwide support, collection options, OEM-quality parts and warranty-backed workmanship.",
    overviewHeading: "Why Lincolnshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Lincolnshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Lincoln and Grimsby to Scunthorpe, Boston, Grantham and Spalding, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Lincolnshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Trusted independent engine specialists",
        description:
          "We focus on engine repair, rebuild and replacement work for Range Rover, Land Rover, Jaguar and BMW vehicles rather than generic garage servicing.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every Lincolnshire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Lincolnshire",
    localCoverageParagraphs: [
      "Lincolnshire is part of our wider UK coverage for customers who want specialist engine support rather than relying on local general-garage routes or high dealer pricing.",
      "We support customers across Lincolnshire with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Lincoln", "Grimsby", "Scunthorpe", "Boston", "Grantham"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Lincolnshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Lincolnshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Lincolnshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers across Lincolnshire and throughout the UK. Many clients choose our workshop specifically because of our specialist expertise in Range Rover, Land Rover and BMW engine work.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can arrange nationwide engine delivery and discuss fitting options depending on your location and requirements, including supply-only and supply-and-fit routes where suitable.",
      },
      {
        question: "Do you collect vehicles?",
        answer:
          "Yes. Collection and recovery options may be available depending on the vehicle condition and location. Contact our team and we will confirm the most practical transport solution.",
      },
      {
        question: "Is my warranty valid if I live outside your workshop area?",
        answer:
          "Yes. Warranty coverage applies according to the written terms provided with your engine repair, rebuild or replacement and is not restricted to local customers.",
      },
      {
        question: "Do you offer used and reconditioned engines?",
        answer:
          "Yes. We supply used, rebuilt and reconditioned engine options subject to availability, vehicle suitability and the route that best fits your budget and long-term needs.",
      },
      {
        question: "Can I buy a replacement engine without fitting?",
        answer:
          "Yes. We can discuss supply-only options subject to stock availability and application suitability if you already have fitting arranged elsewhere.",
      },
    ],
    relatedSlugs: ["rutland", "northamptonshire", "west-yorkshire", "cambridgeshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Lincolnshire Engine Specialists",
      intro:
        "When you are searching for specialist engine support in Lincolnshire, you need more than just a supplier. You need a proven engine specialist with the knowledge, facilities and experience to deliver long-term reliability. At Vogue Technics, we focus on engine repair, rebuild and replacement work for Range Rover, Land Rover, Jaguar and BMW vehicles.",
      supportingTitle: "25+ Years of Experience",
      supportingParagraphs: [
        "Every project is approached with dealer-level diagnostics, transparent advice and precision workmanship using genuine or OEM-quality components wherever possible.",
        "Our reputation has been built on trust, technical expertise and consistently delivering results that can save customers substantial amounts compared with main-dealer pricing.",
      ],
      checklistItems: [
        "Established specialist workshop since 2004.",
        "Thousands of engines supplied, repaired and rebuilt.",
        "IGA member and recognised industry approvals where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Lincolnshire Customers",
      paragraphs: [
        "Although many customers search for specialist help in Lincolnshire, our support extends far beyond a single county. We regularly assist drivers across the UK through workshop-based repairs, engine delivery services and collection options.",
        "Whether you require supply-and-fit support, a replacement engine delivered to your preferred installer or complete workshop installation, our team can arrange a practical route that suits the vehicle and the job.",
        "Recovery assistance, transport planning and expert technical advice help ensure that distance never becomes a barrier to receiving the right specialist engine support.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Lincolnshire",
      panelParagraph:
        "Get expert advice from experienced specialists today. We will explain the available options clearly and help you choose the most practical route before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Lincolnshire What You Need to Know",
      paragraphs: [
        "One of the most common questions we receive concerns the cost of engine repairs and replacements. The final price depends on the vehicle model, engine type, extent of damage, parts availability and whether repair, rebuild or replacement is the most economical route.",
        "For many customers, rebuilt or reconditioned engine options offer significant savings compared with purchasing a brand-new engine through a main dealer, while still restoring reliability and long-term value.",
        "Carefully inspected used engines can also provide a suitable solution where appropriate, but every recommendation we make is based on technical suitability, reliability and the most practical outcome for your vehicle.",
        "We provide written quotations before work begins and explain every recommendation clearly. There are no hidden charges, no unnecessary upselling and no unexpected surprises once the vehicle is already in the workshop.",
      ],
      quoteTitle: "Request your quote today",
      quoteText:
        "Receive a detailed assessment and transparent pricing before any work starts on your Lincolnshire engine job.",
    },
  },
  {
    slug: "east-riding-of-yorkshire",
    name: "East Riding of Yorkshire",
    metaTitle: "East Riding of Yorkshire Engine Repair, Rebuild and Collection Support | Vogue Technics",
    metaDescription:
      "Specialist engine repair, rebuild and replacement support for East Riding of Yorkshire drivers, with collection options, written quotes, warranty-backed work and UK-wide support from our specialist workshop.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover and BMW engine repair, rebuild, replacement and supply-and-fit support across East Riding of Yorkshire, backed by 25+ years of experience, manufacturer-level expertise and comprehensive warranty protection.",
    overviewHeading: "Why East Riding of Yorkshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "East Riding of Yorkshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Hull and Beverley to Bridlington, Goole, Driffield and the wider region, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why East Riding of Yorkshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Trusted premium engine specialists",
        description:
          "We focus on major engine work for Range Rover, Land Rover and BMW vehicles, giving customers access to specialist expertise rather than a general-garage route.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every East Riding of Yorkshire job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in East Riding of Yorkshire",
    localCoverageParagraphs: [
      "East Riding of Yorkshire is part of our wider UK coverage for customers who want specialist engine support instead of relying on local general-garage routes or excessive dealer pricing.",
      "We support customers across East Riding of Yorkshire with collection options, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Hull", "Beverley", "Bridlington", "Goole", "Driffield"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in East Riding of Yorkshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your East Riding of Yorkshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection or transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in East Riding of Yorkshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers throughout East Riding of Yorkshire and many surrounding regions. Our workshop regularly assists vehicle owners from both local and wider UK locations seeking specialist engine services.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can arrange nationwide engine supply, delivery and fitting services depending on the project requirements and vehicle location.",
      },
      {
        question: "Do you collect vehicles?",
        answer:
          "Collection and transportation options may be available for customers experiencing major engine failures or non-running vehicles. Contact our team and we will discuss the available arrangements.",
      },
      {
        question: "Is my warranty valid outside East Riding of Yorkshire?",
        answer:
          "Yes. Warranty terms apply regardless of where you are located, subject to the specific conditions provided with your engine or repair package.",
      },
      {
        question: "Do you offer reconditioned and used engines?",
        answer:
          "Yes. We provide rebuilt, reconditioned and quality-tested used engine options depending on vehicle suitability, budget and availability.",
      },
      {
        question: "Are you a Range Rover engine specialist?",
        answer:
          "Yes. Vogue Technics is a specialist in diagnosing, repairing, rebuilding and replacing engines for Range Rover, Land Rover and BMW vehicles.",
      },
    ],
    relatedSlugs: ["west-yorkshire", "lincolnshire", "greater-manchester", "cheshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "East Riding of Yorkshire Engine Specialists",
      intro:
        "At Vogue Technics, we understand that engine failure can be one of the most stressful and expensive vehicle problems to face. That is why we have built our reputation on delivering dependable, cost-effective engine solutions for Range Rover, Land Rover and BMW owners throughout East Riding of Yorkshire and the wider region.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "Whether you require a targeted engine repair, a complete replacement or a fully rebuilt engine package, our experienced technicians provide the expertise needed to restore performance and reliability using genuine or OEM-quality components where required.",
        "Every engine is thoroughly inspected, rebuilt where necessary and tested to exacting standards before installation or handover, giving customers a reliable alternative to high main-dealer pricing.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines supplied and installed.",
        "Comprehensive warranty protection where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for East Riding of Yorkshire Customers",
      paragraphs: [
        "Although many of our customers are based in East Riding of Yorkshire, our specialist services extend much further. We offer nationwide engine supply-and-fit routes, vehicle collection options, workshop-based installations and assistance with transport arrangements where required.",
        "Whether you need a replacement engine delivered to your preferred location or a complete supply-and-fit package managed through our workshop, our experienced team can guide you through every stage of the process.",
        "Distance does not change the quality of the advice, the standard of the work or the way the job is managed from first enquiry through to final handover.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in East Riding of Yorkshire",
      panelParagraph:
        "Get expert advice from experienced specialists and discover the most suitable repair, rebuild or replacement solution for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in East Riding of Yorkshire What You Need to Know",
      paragraphs: [
        "One of the most common questions we receive concerns the cost of engine repairs and replacements. The final price depends on the vehicle model, engine type, extent of damage, parts required and labour involved.",
        "For many customers, rebuilt or reconditioned engines provide exceptional value compared with purchasing a brand-new engine through a main dealer, restoring reliability while significantly reducing overall costs.",
        "Selected used engines may also provide a suitable option depending on the condition of the vehicle and your budget, but we explain each route honestly so you can weigh cost against long-term value and reliability.",
        "There are no hidden fees, unexpected charges or unnecessary upselling. We believe customers deserve transparent pricing and accurate information before any work begins.",
      ],
      quoteTitle: "Request your quote",
      quoteText:
        "Receive a detailed quotation outlining recommended repairs, parts, labour and warranty coverage before making a decision on your East Riding of Yorkshire engine job.",
    },
  },
  {
    slug: "isle-of-wight",
    name: "Isle of Wight",
    metaTitle: "Reconditioned Range Rover Engines Isle of Wight | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for Reconditioned Range Rover Engines Isle of Wight? Vogue Technics provides engine repair, rebuild, replacement, supply and fit services with 25+ years' experience, warranty-backed workmanship and coverage across the region.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover and BMW engine diagnostics, repair, rebuild, replacement and supply-and-fit support for customers across the Isle of Wight, backed by dealer-level expertise, OEM-quality parts and warranty-backed workmanship.",
    overviewHeading: "Why Isle of Wight drivers choose Vogue Technics",
    overviewParagraphs: [
      "Isle of Wight owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "Whether you need supply-only engines, a targeted repair, a rebuilt unit or full supply-and-fit support, the same specialist workshop team manages the job from start to finish with written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Isle of Wight drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Premium engine specialists",
        description:
          "We work extensively on Range Rover, Land Rover, Jaguar and BMW powertrains, using the right methods and quality-matched parts for complex engine jobs.",
      },
      {
        title: "Written quotes and honest pricing",
        description:
          "Every Isle of Wight job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in the Isle of Wight region",
    localCoverageParagraphs: [
      "The Isle of Wight is part of our wider South Coast and UK coverage for customers who want specialist engine support rather than relying on local general-garage routes or expensive dealer pricing.",
      "We support customers across the Isle of Wight through collection options, transport planning, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Newport", "Ryde", "Cowes", "Sandown", "Shanklin"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in the Isle of Wight",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Isle of Wight location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange collection or fitting route",
        description:
          "If the vehicle needs to come to us, we confirm collection and transport options. If supply-only or supply-and-fit is more suitable, we explain that clearly.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in the Isle of Wight?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We assist customers throughout the Isle of Wight and surrounding regions, while also supporting motorists from further afield who require specialist engine services for Range Rover, Land Rover, Jaguar and BMW vehicles.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. Depending on the project, we can discuss delivery, installation and logistics options. We regularly support customers outside the immediate local area.",
      },
      {
        question: "Do you collect vehicles?",
        answer:
          "Collection and transportation options may be available depending on your location and the nature of the fault. Contact us with the vehicle details and postcode and we will confirm the practical options.",
      },
      {
        question: "Is the warranty valid outside your local area?",
        answer:
          "Yes. Warranty terms apply according to the specific product or service supplied, and the full details are provided in writing before work is authorised.",
      },
      {
        question: "Do you offer Range Rover engine fitting in the Isle of Wight?",
        answer:
          "Yes. We can provide professional fitting support where appropriate, ensuring engines are installed, tested and checked thoroughly before handover.",
      },
      {
        question: "Can I buy a replacement engine without fitting?",
        answer:
          "Yes. We can discuss supply-only replacement engine options subject to availability, vehicle requirements and application suitability.",
      },
    ],
    relatedSlugs: ["dorset", "wiltshire", "west-sussex", "east-sussex"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Isle of Wight Engine Specialists",
      intro:
        "At Vogue Technics, we specialise exclusively in premium vehicle engine solutions, helping owners avoid the excessive costs often associated with main dealerships. Whether you require engine repair, a complete rebuild or a fully warranted replacement engine, our team combines over two decades of hands-on expertise with advanced diagnostics and manufacturer-level procedures.",
      supportingTitle: "25+ Years of Experience",
      supportingParagraphs: [
        "We work extensively on Range Rover, Land Rover, Jaguar and BMW powertrains, using genuine or OEM-quality components wherever possible and approaching every project with precision, transparency and attention to detail.",
        "Our reputation has been built on honest advice, quality workmanship and customer satisfaction, making us a trusted choice for motorists seeking dependable engine solutions across the region.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines supplied and installed.",
        "Genuine and OEM components used wherever possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Isle of Wight Customers",
      paragraphs: [
        "Vogue Technics supports customers far beyond the local workshop area. We regularly assist motorists requiring specialist engine supply-and-fit, nationwide engine delivery and replacement services.",
        "Depending on your location and requirements, we can discuss vehicle collection, transportation arrangements and practical solutions designed to minimise inconvenience.",
        "Whether you are searching for a used engine, complete replacement services or expert diagnostics for a complex engine fault, we aim to make specialist expertise accessible regardless of where you are located.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in the Isle of Wight",
      panelParagraph:
        "Get expert guidance from experienced specialists and discover the most cost-effective solution for your vehicle before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in the Isle of Wight What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs vary considerably depending on the vehicle model, engine type, extent of damage and the parts required. Minor repairs may involve replacing specific components, while severe failures can require a complete engine rebuild or replacement.",
        "Many customers initially consider main-dealer options only to discover that the costs can be disproportionately high compared with the value of the vehicle. Rebuilt, reconditioned or carefully selected used engine options can often provide a more economical route while still delivering dependable long-term performance.",
        "Factors affecting cost include the vehicle make and model, engine specification, labour requirements, parts availability, repair versus replacement suitability and whether additional components have also been affected by the failure.",
        "We provide transparent quotations with clear explanations of recommended work. Whether you are considering a used engine, a cost-conscious replacement or a fully reconditioned unit, we explain the advantages and limitations of each option before any work begins.",
      ],
      quoteTitle: "Get my quote",
      quoteText:
        "Receive a clear, itemised quotation with no hidden charges and expert advice tailored to your Isle of Wight engine job.",
    },
  },
  {
    slug: "london",
    name: "London",
    metaTitle: "Reconditioned Range Rover Engines Greater London | Vogue",
    metaDescription:
      "Reconditioned Range Rover engines in Greater London & UK-wide. Specialist supply, fit, repair & rebuild. OEM parts, 6-month warranty. Free quote today.",
    heroSubtitle:
      "From our specialist workshop on the Essex-London border, Vogue Technics supplies, fits, repairs and rebuilds Range Rover, Land Rover and BMW engines across Greater London and the whole of the UK, delivering dealer-level engine work without the dealer-level bill.",
    overviewHeading: "Why Greater London drivers choose Vogue Technics",
    overviewParagraphs: [
      "London owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From South London and East London to Barking, Romford and Croydon, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Greater London drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Border-location workshop access",
        description:
          "Being based on the Essex-London border gives London drivers direct access to a specialist engine workshop without committing to main-dealer pricing.",
      },
      {
        title: "Written quotes and video-backed clarity",
        description:
          "Every London job is quoted clearly in writing, and we explain faults properly before work begins so you can approve the right route with confidence.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Greater London",
    localCoverageParagraphs: [
      "Greater London is one of our busiest coverage areas, with regular enquiries from owners who need specialist engine support rather than dealer pricing or general-garage guesswork.",
      "From our workshop just off the M25 on the Essex-London border, we provide collection planning, supply-and-fit support and workshop-led engine repair for customers across the capital.",
    ],
    localPlaces: ["South London", "East London", "Barking", "Romford", "Croydon"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Greater London",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your London location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or drop-off route from your part of Greater London.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Greater London?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We regularly support customers across Greater London and the Home Counties, with collection, delivery and workshop-based engine repair, rebuild and replacement available for the right job. If you are outside London, contact us and we will confirm the best route for your vehicle.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can support Greater London jobs directly through our workshop process, and we also offer UK-wide supply, delivery and fitting routes depending on the job and customer requirements.",
      },
      {
        question: "Do you collect my car?",
        answer:
          "Yes. If the vehicle cannot be driven, or you would rather not bring it in yourself, we can arrange collection or recovery support and confirm the logistics before anything is booked in.",
      },
      {
        question: "Is the warranty valid anywhere in the UK?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
      {
        question: "Can you supply an engine for me to fit elsewhere?",
        answer:
          "Yes. Where appropriate, we can supply a tested used, rebuilt or reconditioned engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "How much can I save versus a main dealer?",
        answer:
          "On the right job, customers can often save significantly compared with a main-dealer replacement route because we focus on the correct repair, rebuild or tested replacement engine rather than defaulting to the most expensive option.",
      },
    ],
    relatedSlugs: ["essex", "kent", "hertfordshire", "berkshire"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Greater London Engine Specialists",
      intro:
        "When a Range Rover or Land Rover engine fails, the decisions made in the next few days matter. Vogue Technics works on Jaguar Land Rover and BMW engines as a specialist workshop focus, not as a sideline, which is why London drivers trust us with rebuilds, replacements and reconditioned engine solutions that many general garages are not equipped to handle properly.",
      supportingTitle: "Over Two Decades of Specialist Engine Experience",
      supportingParagraphs: [
        "The TDV6, SDV8, Ingenium diesel and supercharged V8 platforms are units we strip, machine and rebuild regularly, so faults are diagnosed accurately and major work is handled by people who genuinely know these engines.",
        "Every job is itemised clearly in writing, completed through the same dedicated workshop process and backed by written warranty for added confidence after collection or delivery.",
      ],
      checklistItems: [
        "5,000+ customers served across the UK.",
        "600+ five-star reviews across major platforms.",
        "6-month warranty on reconditioned and rebuilt engines where applicable.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Greater London Customers",
      paragraphs: [
        "Every engine we supply, fit, repair or rebuild passes through one dedicated workshop on the Essex-London border, and that concentration of machining, diagnostics and fitting expertise is what keeps our quality consistent.",
        "We support Greater London directly with collection and workshop intake, and we also provide UK-wide supply, delivery and fitting routes for customers who are further afield.",
        "Distance does not change the standard of work, the quality of parts or the way the job is managed from first diagnosis to final handover.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Greater London",
      panelParagraph:
        "Tell us what your Range Rover, Land Rover or BMW is doing and we will tell you honestly what it needs and what it is likely to cost before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Greater London What You Need to Know",
      paragraphs: [
        "Engine work is rarely one-price-fits-all. The final cost depends on the engine type, the fault itself, whether the right answer is a targeted repair, a rebuilt unit or a full replacement, and whether secondary damage has developed before the vehicle reaches us.",
        "Where we save customers real money is against the main-dealer route. A dealer will often default to a brand-new engine at full list price, whereas we can often support the vehicle with the correct repair path or a tested rebuilt or replacement unit at a substantially lower cost.",
        "You still get OEM-grade or quality-matched parts, specialist installation standards and a written warranty where applicable, but without the overhead that comes with the dealer model.",
        "Every quote is itemised in writing before work begins. No vague estimates, no hidden extras and no mid-job surprises once the vehicle is already in pieces.",
      ],
      quoteTitle: "Know exactly what it will cost in writing",
      quoteText:
        "Request a fully itemised written quote for your Greater London engine job before any work begins, with honest advice and no obligation.",
    },
  },
  {
    slug: "hertfordshire",
    name: "Hertfordshire",
    metaTitle: "Reconditioned Range Rover Engines Hertfordshire",
    metaDescription:
      "Reconditioned Range Rover engines for Hertfordshire, supplied & fitted by Vogue Technics. Range Rover, Land Rover & Jaguar specialists. Warranty-backed quotes.",
    heroSubtitle:
      "Vogue Technics is a dedicated Range Rover, Land Rover, Jaguar and BMW engine specialist serving Hertfordshire from our fully equipped Grays workshop, with rebuilds, replacements and reconditioned engine support backed by genuine OEM-grade parts, written warranty and honest pricing.",
    overviewHeading: "Why Hertfordshire drivers choose Vogue Technics",
    overviewParagraphs: [
      "Hertfordshire owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Watford, St Albans, Hemel Hempstead and Stevenage to the wider county, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Hertfordshire drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Home Counties workshop expertise",
        description:
          "All major engine work is handled through our dedicated Grays workshop by technicians who work on these engines every day.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Hertfordshire job is quoted clearly in writing before work begins, with no vague pricing and no hidden extras.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Hertfordshire",
    localCoverageParagraphs: [
      "Hertfordshire is a key coverage area for us, with regular enquiries from drivers who need specialist engine support without the cost or uncertainty of main-dealer or general-garage routes.",
      "From our Grays workshop, we provide collection planning, supply-and-fit support and workshop-led engine repair for customers across Hertfordshire and the surrounding motorway network.",
    ],
    localPlaces: ["Watford", "St Albans", "Hertford", "Stevenage", "Hemel Hempstead"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Hertfordshire",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Hertfordshire location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or drop-off route from your part of Hertfordshire.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Hertfordshire?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Do you cover all of Hertfordshire?",
        answer:
          "Yes. We regularly support customers across Hertfordshire, including Watford, St Albans, Hemel Hempstead, Stevenage, Hertford and surrounding areas. If you are just outside the county, contact us and we will confirm the best route for your job.",
      },
      {
        question: "Do you collect vehicles from Hertfordshire?",
        answer:
          "Yes. On many rebuild and replacement jobs we can arrange collection or recovery support, depending on the vehicle condition and location. We confirm the logistics before anything is booked in.",
      },
      {
        question: "Can you supply an engine without fitting it?",
        answer:
          "Yes. Where appropriate, we can supply a rebuilt, reconditioned or suitable replacement engine for fitting by your own mechanic, with delivery arranged and warranty terms confirmed in writing.",
      },
      {
        question: "Do you only work on Range Rover and Land Rover engines?",
        answer:
          "Range Rover, Land Rover, Jaguar, Defender and SVR are core specialisms, and we also carry out BMW engine work through the same specialist workshop team.",
      },
      {
        question: "How long does an engine rebuild or replacement take?",
        answer:
          "Many rebuilds are completed in around ten working days, depending on engine type, parts availability and the condition of surrounding components. Once inspected, we will give you a realistic timeframe.",
      },
      {
        question: "Is the warranty valid outside Hertfordshire?",
        answer:
          "Yes. Our warranty is confirmed in writing and applies regardless of where you are based. The exact coverage depends on the engine and service provided.",
      },
    ],
    relatedSlugs: ["london", "essex", "oxfordshire", "berkshire"],
    specialistsSection: {
      title: "Engine Specialists, Not a General Garage",
      eyebrow: "Hertfordshire Engine Specialists",
      intro:
        "We do not dabble in engines. Hertfordshire is prime Range Rover and Land Rover country, with busy commuter and motorway use placing real demand on these platforms. From our Grays workshop, our team rebuilds, replaces and supplies Range Rover, Land Rover, Jaguar, Defender, SVR and BMW engines every day, supporting Hertfordshire owners with jobs that many general garages are not equipped to take on properly.",
      supportingTitle: "25+ Years of Specialist Engine Experience",
      supportingParagraphs: [
        "Whether you need a rebuild, a full replacement or a supplied engine for fitting, every Hertfordshire job starts with honest diagnosis, clear advice and a written quote before any work begins.",
        "Our focus is specialist engine work, carried out in-house with the same level of care, testing and communication whether you are in Watford, St Albans, Stevenage or elsewhere in Hertfordshire.",
      ],
      checklistItems: [
        "Thousands of engines rebuilt, supplied and fitted.",
        "Warranty-backed engine work confirmed in writing.",
        "Up to 40% saving compared with main-dealer pricing on the right job.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Hertfordshire Customers",
      paragraphs: [
        "While we serve Hertfordshire directly from our Grays workshop, our process is built to support both local and wider enquiries without compromising standards.",
        "We offer in-house supply-and-fit, collection and recovery support for major rebuild and replacement jobs, and UK-wide delivery on suitable engine supply work where customers want to use their own installer.",
        "Whether you are based in Watford, Stevenage or elsewhere in the country, the job is handled with the same specialist diagnosis, written quote, workshop testing and warranty-backed finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Hertfordshire",
      panelParagraph:
        "We diagnose the problem properly and quote it honestly before any work begins. That applies whether the answer is a targeted repair, a full rebuild or a complete engine replacement from our workshop.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Hertfordshire What You Need to Know",
      paragraphs: [
        "Engine work is a significant decision, and the true cost depends on the model, engine variant, extent of damage, and whether the right solution is a repair, rebuild or full replacement.",
        "A rebuilt or reconditioned engine is often far more cost-effective than a main-dealer replacement because you are paying for specialist labour, correct parts and workshop testing rather than dealer overhead.",
        "What you will not get from us is a vague estimate that changes once the vehicle is stripped. Every Hertfordshire job is diagnosed first, then quoted in writing with parts and labour explained clearly before you commit.",
        "Cheap engine solutions that cut corners on parts, machining or testing often cost more in the long run. We would rather do the work once, properly, and back it with a written warranty.",
      ],
      quoteTitle: "Request a Written Quote for Hertfordshire",
      quoteText:
        "Send your registration, symptoms and Hertfordshire location and we will come back with honest initial advice and the right next step for your vehicle.",
    },
  },
  buildAreaDetail({
    slug: "suffolk",
    name: "Suffolk",
    localPlaces: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Stowmarket", "Lowestoft"],
    collectionNote:
      "For Suffolk customers, we focus on making specialist engine work practical through clear communication and collection planning.",
    relatedSlugs: ["norfolk", "essex", "east-sussex", "kent"],
  }),
  {
    slug: "norfolk",
    name: "Norfolk",
    metaTitle: "Norfolk Engine Repair, Rebuild and Collection Support | Vogue Technics",
    metaDescription:
      "Specialist engine repair, rebuild and replacement support for Norfolk drivers. Collection available across Norwich, King's Lynn, Great Yarmouth and surrounding towns, with written quotes, warranty-backed work and UK-wide support.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support for drivers across Norfolk, delivering dealer-level expertise without dealer-level pricing.",
    overviewHeading: "Why Norfolk drivers choose Vogue Technics",
    overviewParagraphs: [
      "Norfolk owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Norwich and King's Lynn to Great Yarmouth, Thetford and Dereham, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why Norfolk drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Specialist support across key prestige platforms",
        description:
          "Our technicians work specifically on Range Rover, Land Rover, Jaguar and BMW engines, using the right methods and quality-matched parts for each platform.",
      },
      {
        title: "Written quotes and clear pricing",
        description:
          "Every Norfolk job is quoted clearly in writing before work begins, with no vague pricing and no hidden extras.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in Norfolk",
    localCoverageParagraphs: [
      "Norfolk is a strong coverage area for us, with regular enquiries from owners who need specialist engine support rather than general-garage diagnosis or main-dealer pricing.",
      "We support customers across Norfolk with collection planning, supply-and-fit options and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Norwich", "Great Yarmouth", "King's Lynn", "Thetford", "Dereham"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in Norfolk",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your Norfolk location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or transport route from your part of Norfolk.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in Norfolk?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We regularly support customers throughout Norfolk, including Norwich, King's Lynn, Great Yarmouth, Thetford, Dereham, Cromer, Fakenham and Wymondham, as well as neighbouring counties and wider UK locations.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. We can arrange nationwide engine delivery and support fitting routes depending on the job and location. Contact us with the vehicle details and postcode and we will confirm the best option.",
      },
      {
        question: "Can you collect my vehicle?",
        answer:
          "In many cases, yes. We can arrange collection or recovery support where a vehicle is not roadworthy or where major engine work makes workshop transport the better option.",
      },
      {
        question: "Is my warranty valid outside Norfolk?",
        answer:
          "Yes. Warranty coverage applies regardless of where you are based, subject to the agreed written terms provided with the repair, rebuild or replacement engine.",
      },
      {
        question: "What vehicles do you specialise in?",
        answer:
          "We specialise in Range Rover, Land Rover, Jaguar and BMW vehicles, with extensive experience diagnosing and repairing common engine faults across these manufacturers.",
      },
      {
        question: "What is the difference between a used and reconditioned engine?",
        answer:
          "A used engine is removed from another vehicle and inspected before sale. A reconditioned engine is dismantled, rebuilt and restored using new or refurbished components to meet higher quality standards.",
      },
    ],
    relatedSlugs: ["suffolk", "essex", "hertfordshire", "cambridgeshire"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "Norfolk Engine Specialists",
      intro:
        "At Vogue Technics, we understand that engine problems are stressful, expensive and disruptive. That is why vehicle owners throughout Norfolk trust our specialist team for dependable engine solutions backed by experience, technical expertise and a workshop process built around major engine work rather than general garage repairs.",
      supportingTitle: "25+ Years of Specialist Experience",
      supportingParagraphs: [
        "From targeted Range Rover engine repair work in Norfolk to complete engine replacements and rebuilds, every job is handled by skilled technicians using genuine or OEM-quality components wherever possible.",
        "Our reputation has been built on delivering cost-effective alternatives to main-dealer pricing while maintaining high standards of workmanship across Range Rover, Land Rover, Jaguar and BMW platforms.",
      ],
      checklistItems: [
        "Thousands of engines supplied and installed.",
        "Comprehensive written warranty protection where applicable.",
        "Genuine and OEM-quality components used wherever possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for Norfolk Customers",
      paragraphs: [
        "Although many of our customers come from Norfolk, our specialist services extend far beyond a single county. We regularly assist vehicle owners across the UK with diagnostics, replacement engines, reconditioning and supply-and-fit support.",
        "Our team can arrange engine delivery, vehicle collection and recovery support where required, helping customers access specialist expertise regardless of location.",
        "Whether you need a reconditioned engine, a complete replacement or technical advice before committing to repairs, we keep the process straightforward with clear guidance and transparent pricing from start to finish.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in Norfolk",
      panelParagraph:
        "Get trusted advice from experienced specialists before any work begins. We will explain the likely fault, the practical options and the best route for your vehicle in plain English.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in Norfolk What You Need to Know",
      paragraphs: [
        "Engine repair and replacement costs vary depending on the fault, vehicle model, engine type and the level of work required. Internal engine damage, turbocharger condition, timing component wear and parts availability can all influence the final price.",
        "We believe in transparent quotations with no hidden surprises. In many cases, choosing a rebuilt, reconditioned or quality-checked used engine can offer substantial savings compared with purchasing a brand-new engine through a main dealer.",
        "We explain the difference between used, second hand and professionally rebuilt options clearly, so you can choose the right balance of budget, reliability and long-term value.",
        "For customers seeking a dependable replacement, we can supply tested engines and explain the practical options before installation, with written quotations covering recommended repairs, replacement routes, warranty information and likely turnaround times.",
      ],
      quoteTitle: "Request a written quote",
      quoteText:
        "Receive a detailed quotation outlining recommended repairs, replacement options, warranty information and expected turnaround times for your Norfolk engine job.",
    },
  },
  buildAreaDetail({
    slug: "berkshire",
    name: "Berkshire",
    localPlaces: ["Reading", "Slough", "Windsor", "Maidenhead", "Newbury"],
    collectionNote:
      "Berkshire customers often want a fast answer on whether repair or replacement is the better long-term option.",
    relatedSlugs: ["london", "hertfordshire", "oxfordshire", "west-sussex"],
  }),
  buildAreaDetail({
    slug: "oxfordshire",
    name: "Oxfordshire",
    localPlaces: ["Oxford", "Banbury", "Bicester", "Didcot", "Witney"],
    collectionNote:
      "Oxfordshire coverage works well for customers who need specialist engine support without making assumptions about the fault.",
    relatedSlugs: ["hertfordshire", "berkshire", "norfolk", "west-sussex"],
  }),
  {
    slug: "east-sussex",
    name: "East Sussex",
    metaTitle: "Reconditioned Range Rover Engines East Sussex | Areas Covered | Vogue Technics",
    metaDescription:
      "Looking for Reconditioned Range Rover Engines East Sussex? Vogue Technics provides expert Range Rover, Land Rover and BMW engine repair, rebuild, replacement and supply-and-fit services across East Sussex and surrounding areas. Trusted specialists with 25+ years' experience.",
    heroSubtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support across East Sussex, delivering dealer-level expertise without the dealer-level price tag.",
    overviewHeading: "Why East Sussex drivers choose Vogue Technics",
    overviewParagraphs: [
      "East Sussex owners come to us when they need more than a general garage approach. We diagnose the fault properly, explain the best repair path clearly and keep the process controlled from first enquiry to final handover.",
      "From Brighton and Hove to Eastbourne, Hastings, Bexhill and Lewes, we support engine rebuild, replacement and repair work with specialist workshop standards, written quotes and warranty-backed workmanship.",
    ],
    whyChooseHeading: "Why East Sussex drivers choose Vogue Technics",
    whyChoosePoints: [
      {
        title: "Specialist diagnosis first",
        description:
          "We assess the actual engine fault before recommending repair, rebuild or replacement, so you are making the decision on facts rather than assumptions.",
      },
      {
        title: "Built for complex prestige engine work",
        description:
          "Our workshop specialises in major engine work for Range Rover, Land Rover, Jaguar and BMW vehicles, using the right methods and OEM-quality or quality-matched parts.",
      },
      {
        title: "Written quotes and transparent pricing",
        description:
          "Every East Sussex job is quoted clearly in writing before work begins, with no hidden extras and no vague estimates once the vehicle is in the workshop.",
      },
      {
        title: "Warranty-backed engine work",
        description:
          "Our rebuilds, replacements and supplied units are backed by written warranty, giving you confidence long after the vehicle is collected or the engine is delivered.",
      },
    ],
    localCoverageHeading: "Where we regularly work in East Sussex",
    localCoverageParagraphs: [
      "East Sussex is a regular coverage area for us, with enquiries from owners who want specialist engine support rather than local general-garage diagnosis or main-dealer pricing.",
      "We support customers across East Sussex with collection planning, supply-and-fit packages and workshop-led engine repair, rebuild and replacement work managed by one specialist team from start to finish.",
    ],
    localPlaces: ["Brighton", "Hastings", "Eastbourne", "Lewes", "Bexhill"],
    vehicleCoverage: [
      "Range Rover and Land Rover engines",
      "Jaguar engines",
      "BMW engines",
      "Timing chain and timing belt work",
      "Engine rebuild and replacement projects",
      "Supply-and-fit and workshop-based engine installation",
    ],
    processHeading: "How collection and support works in East Sussex",
    processSteps: [
      {
        title: "Send your registration",
        description:
          "Start with the registration, engine symptoms and your East Sussex location so we can assess the likely fault and the right next step.",
      },
      {
        title: "Get a written plan",
        description:
          "We explain whether repair, rebuild or replacement is the better route and give clear advice before anything is booked in.",
      },
      {
        title: "Arrange workshop intake or collection",
        description:
          "If the vehicle needs to come to us, we confirm the practical collection or transport route from your part of East Sussex.",
      },
      {
        title: "Complete, test and return",
        description:
          "Once the work is finished, the engine or vehicle is tested properly and returned with the next steps and warranty confirmed clearly.",
      },
    ],
    ctaHeading: "Need engine help in East Sussex?",
    ctaText:
      "Use the quote form or call the workshop and we will confirm the right next step for your vehicle without guesswork or hidden costs.",
    faqs: [
      {
        question: "Which areas do you cover?",
        answer:
          "We support customers throughout East Sussex, including Brighton and Hove, Eastbourne, Hastings, Bexhill, Lewes, Uckfield, Crowborough, Hailsham, Newhaven and Seaford, as well as surrounding counties where the right support route is practical.",
      },
      {
        question: "Do you deliver and fit engines nationwide?",
        answer:
          "Yes. Depending on the engine type and service required, we can discuss delivery, supply-only or supply-and-fit options. Contact us with the vehicle details and location and we will confirm the best route.",
      },
      {
        question: "Do you collect vehicles?",
        answer:
          "Collection and recovery options may be available depending on the vehicle condition, workshop scheduling and your location. We will confirm the practical transport options before anything is booked in.",
      },
      {
        question: "Is the warranty valid outside East Sussex?",
        answer:
          "Yes. Where a warranty is provided, the coverage remains valid in accordance with the written terms supplied at the time of the repair, rebuild or engine replacement.",
      },
      {
        question: "Do you offer reconditioned and used engines?",
        answer:
          "Yes. We supply reconditioned engines as well as selected used engine options where appropriate, subject to availability, model requirements and suitability for the job.",
      },
      {
        question: "Can you help if my local garage cannot diagnose the fault?",
        answer:
          "Yes. We regularly help customers whose vehicles have complex or recurring engine issues that general garages have struggled to diagnose properly.",
      },
    ],
    relatedSlugs: ["kent", "suffolk", "west-sussex", "essex"],
    specialistsSection: {
      title: "The Specialists Behind Every Job",
      eyebrow: "East Sussex Engine Specialists",
      intro:
        "At Vogue Technics, we specialise in complex engine work for Range Rover, Land Rover, Jaguar and BMW vehicles. For more than 25 years, we have helped motorists access reliable, cost-effective alternatives to expensive main-dealer repairs without compromising on workmanship or technical standards.",
      supportingTitle: "25 Years of Experience",
      supportingParagraphs: [
        "From reconditioned engines and complete rebuilds to diagnostics, fitting and specialist repair work, every job is completed by experienced technicians using genuine or OEM-quality components wherever possible.",
        "Our reputation has been built on technical expertise, honest advice and long-term reliability, helping customers get back on the road with confidence after major engine problems.",
      ],
      checklistItems: [
        "25+ years of specialist experience.",
        "Thousands of engines repaired and supplied.",
        "Genuine and OEM-quality parts used wherever possible.",
      ],
    },
    ukWideServiceSection: {
      title: "UK-Wide Service From Our Workshop for East Sussex Customers",
      paragraphs: [
        "Although many of our customers are based in East Sussex, we regularly assist vehicle owners from further afield with engine sourcing, workshop fitting, collection arrangements and delivery options where appropriate.",
        "Whether you require a reconditioned engine, a complete replacement or specialist diagnostics, we coordinate the most practical route around your location, the vehicle condition and the work required.",
        "We understand that major engine work is stressful, which is why we keep the process as straightforward as possible through clear communication, transparent quotations and expert guidance throughout.",
      ],
      panelTitle: "Whatever the engine, whatever the fault in East Sussex",
      panelParagraph:
        "Get expert advice from experienced technicians who understand your vehicle. We will explain the practical options clearly before any work begins.",
    },
    engineRepairCostSection: {
      title: "Engine Repair Cost in East Sussex What You Need to Know",
      paragraphs: [
        "The cost of engine repair or replacement depends on the vehicle model, engine type, extent of damage and whether repair, rebuild or replacement represents the most economical solution.",
        "For many owners, choosing a rebuilt or reconditioned engine offers substantial savings compared with purchasing a brand-new engine through a main dealer, while still restoring reliability when rebuilt to the correct standard.",
        "Customers comparing used, second hand and professionally rebuilt engine options often find that a specialist route provides better value without compromising on quality, testing standards or long-term dependability.",
        "We provide transparent quotations outlining labour, parts, testing and fitting requirements so you understand exactly what is included. No hidden charges, no unnecessary upselling and no surprises once the vehicle is already in the workshop.",
      ],
      quoteTitle: "Request a written quote",
      quoteText:
        "Receive a clear, itemised quotation tailored to your vehicle and requirements, with expert recommendations on the best repair, rebuild or replacement route.",
    },
  },
  buildAreaDetail({
    slug: "west-sussex",
    name: "West Sussex",
    localPlaces: ["Worthing", "Crawley", "Chichester", "Horsham", "Bognor Regis"],
    collectionNote:
      "West Sussex coverage is handled through the workshop in the same way as our other southern support areas.",
    relatedSlugs: ["berkshire", "oxfordshire", "east-sussex", "kent"],
  }),
];

export function getAreaBySlug(slug: string) {
  return areaDetails.find((area) => area.slug === slug);
}
