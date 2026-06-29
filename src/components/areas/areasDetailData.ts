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
  buildAreaDetail({
    slug: "essex",
    name: "Essex",
    localPlaces: ["Grays", "Thurrock", "Basildon", "Brentwood", "Chelmsford"],
    collectionNote:
      "Essex is one of our core coverage areas, with easy access for customers around the A13 and M25 corridor.",
    relatedSlugs: ["kent", "london", "hertfordshire", "east-sussex"],
  }),
  buildAreaDetail({
    slug: "kent",
    name: "Kent",
    localPlaces: ["Dartford", "Gravesend", "Maidstone", "Sevenoaks", "Ashford"],
    collectionNote:
      "Kent customers often use us for engine work that needs specialist workshop handling rather than a general repair.",
    relatedSlugs: ["essex", "london", "east-sussex", "west-sussex"],
  }),
  buildAreaDetail({
    slug: "london",
    name: "London",
    localPlaces: ["South London", "East London", "Barking", "Romford", "Croydon"],
    collectionNote:
      "We can support South and East London jobs with collection arranged around access, timing and vehicle condition.",
    relatedSlugs: ["essex", "kent", "hertfordshire", "berkshire"],
  }),
  buildAreaDetail({
    slug: "hertfordshire",
    name: "Hertfordshire",
    localPlaces: ["Watford", "St Albans", "Hertford", "Stevenage", "Hemel Hempstead"],
    collectionNote:
      "Hertfordshire jobs often benefit from a quick diagnosis call before transport is arranged, which keeps the process efficient.",
    relatedSlugs: ["london", "essex", "oxfordshire", "berkshire"],
  }),
  buildAreaDetail({
    slug: "suffolk",
    name: "Suffolk",
    localPlaces: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Stowmarket", "Lowestoft"],
    collectionNote:
      "For Suffolk customers, we focus on making specialist engine work practical through clear communication and collection planning.",
    relatedSlugs: ["norfolk", "essex", "east-sussex", "kent"],
  }),
  buildAreaDetail({
    slug: "norfolk",
    name: "Norfolk",
    localPlaces: ["Norwich", "Great Yarmouth", "King's Lynn", "Thetford", "Dereham"],
    collectionNote:
      "Norfolk enquiries are handled the same way: diagnosis first, then a clear plan for collection, repair and return.",
    relatedSlugs: ["suffolk", "essex", "hertfordshire", "oxfordshire"],
  }),
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
  buildAreaDetail({
    slug: "east-sussex",
    name: "East Sussex",
    localPlaces: ["Brighton", "Hastings", "Eastbourne", "Lewes", "Bexhill"],
    collectionNote:
      "East Sussex customers can use the same enquiry process for engine repair, rebuild and replacement support.",
    relatedSlugs: ["kent", "suffolk", "west-sussex", "essex"],
  }),
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
