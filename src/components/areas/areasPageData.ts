export type CoverageArea = {
  slug: string;
  name: string;
  description: string;
};

export const coverageAreas: CoverageArea[] = [
  {
    slug: "essex",
    name: "Essex",
    description:
      "Essex engine repair, rebuild and replacement support for Grays, Thurrock, Basildon, Brentwood and Chelmsford, with collection arranged where the job needs it.",
  },
  {
    slug: "kent",
    name: "Kent",
    description:
      "Kent coverage for Dartford, Gravesend, Maidstone and Sevenoaks customers who need a specialist engine workshop rather than a general garage.",
  },
  {
    slug: "london",
    name: "London",
    description:
      "South and East London engine support with collection and return delivery planned around access, timing and the vehicle's condition.",
  },
  {
    slug: "hertfordshire",
    name: "Hertfordshire",
    description:
      "Hertfordshire engine repair and rebuild support for Watford, St Albans and Hertford, with straightforward workshop collection options.",
  },
  {
    slug: "suffolk",
    name: "Suffolk",
    description:
      "Suffolk engine support for Ipswich and Bury St Edmunds drivers looking for accurate diagnostics, rebuild advice and collection planning.",
  },
  {
    slug: "norfolk",
    name: "Norfolk",
    description:
      "Norfolk coverage for Norwich, Great Yarmouth and nearby towns, with the same specialist engine process used for every location.",
  },
  {
    slug: "berkshire",
    name: "Berkshire",
    description:
      "Berkshire engine work for Reading, Slough and Windsor customers who need repair, rebuild or replacement support from a specialist.",
  },
  {
    slug: "oxfordshire",
    name: "Oxfordshire",
    description:
      "Oxfordshire coverage for Oxford and Banbury area customers needing specialist engine diagnosis, collection and written quotes.",
  },
  {
    slug: "east-sussex",
    name: "East Sussex",
    description:
      "East Sussex engine support for Brighton, Hastings and Lewes drivers looking for workshop-led repair and replacement advice.",
  },
  {
    slug: "west-sussex",
    name: "West Sussex",
    description:
      "West Sussex coverage for Worthing, Crawley and Chichester customers who need practical engine repair and collection support.",
  },
];

export const areaFaqs = [
  {
    question: "Do you provide collection across all the areas you list?",
    answer:
      "Yes. We can arrange collection and delivery for customers across the areas we cover, with UK-wide support available for the right job.",
  },
  {
    question: "Can I get a quote before booking collection?",
    answer:
      "Yes. Send us your registration number and location and we will advise the next step before anything is booked in.",
  },
  {
    question: "Do you only work with local customers?",
    answer:
      "No. The area pages are there to show where we regularly work, but our workshop also supports customers from further afield.",
  },
  {
    question: "Can you handle engine rebuilds and replacements for my area?",
    answer:
      "Yes. The same specialist engine rebuild, repair, replacement and fitting services are available regardless of location.",
  },
];

export const areasIntro = {
  heading: "Choose Your Area",
  description:
    "Select a county or area to see the kind of support we provide in that location. Dedicated detail pages can sit on top of this structure later.",
};

export const areasLandingSections = {
  specialistsSection: {
    title: "The Specialists Behind Every Job",
    eyebrow: "Engine Specialists",
    intro:
      "There is a meaningful difference between a garage that has worked on a platform a handful of times and a specialist team that has rebuilt dozens of them.",
    supportingTitle: "25 Years of Prestige Engine Experience",
    supportingParagraphs: [
      "Owners travel from across the UK because genuine specialist knowledge of these platforms is rarer than most people expect until they start looking for it.",
      "Every job is approached with the same discipline: accurate assessment, correct parts, written quotes, and warranty-backed work where applicable.",
    ],
    checklistItems: [
      "OEM or OEM-specification parts throughout.",
      "Written quotes before any work begins.",
      "Six-month warranty on major jobs.",
    ],
  },
  ukWideServiceSection: {
    title: "UK-Wide Service From Our Workshop",
    paragraphs: [
      "Being based in the workshop puts us within straightforward reach of London, the Home Counties, Kent, and the wider South East. But a significant proportion of our customers are not local, and that is not a barrier.",
      "We offer engine collection and return delivery covering the whole of the United Kingdom. Your engine comes to us, the work is carried out to the same standard regardless of your location, and it comes back fully tested and covered by our written warranty.",
      "Distance is not a reason to compromise on the quality of specialist support you use.",
    ],
    panelTitle: "Whatever the engine, whatever the fault",
    panelParagraph:
      "Whatever the engine, whatever the fault, whatever the platform, do not leave it to a garage that works from general experience and hope for the best result. We bring dedicated engine experience to every job that comes through our doors.",
  },
  engineRepairCostSection: {
    title: "Engine Repair Cost What You Need to Know",
    paragraphs: [
      "Engine repair cost is one of the most searched questions in this space, and one of the most difficult to answer honestly without first understanding what the engine actually needs.",
      "A targeted engine repair addressing a specific fault sits at a very different price point to a full engine rebuild or replacement. Turbo replacement cost varies by platform and unit specification. Head gasket repair cost depends on the extent of cylinder head damage found during inspection. Timing chain replacement cost changes depending on whether tensioners, guides, and associated components require renewal alongside the chain.",
      "What we can tell you is that our pricing reflects independent specialist expertise, significantly below main dealer rates for the same quality of work and the same quality of parts. We will always provide a detailed written quote following a proper diagnostic, so the figure you receive is based on what your engine actually needs, not a generalised estimate that shifts when the work begins.",
      "The cost of a proper repair carried out once is always less than the cost of an inadequate repair carried out twice, with additional damage in between.",
    ],
    quoteTitle: "Request a Written Quote No Obligation",
    quoteText:
      "Send your registration and symptoms and we’ll come back with honest initial advice and the right next step.",
  },
};

export const areasLandingContent = {
  hero: {
    title: "Areas Covered",
    subtitle:
      "Explore the locations we regularly serve for specialist engine repair, rebuilds, replacements, diagnostics and collection support across the UK.",
  },
  coverage: {
    label: "Local Coverage",
    heading: "Choose Your Area",
    description:
      "Select a county or area to see the kind of support we provide in that location. Each location page is written for the specific area so the content stays relevant, search-friendly and useful for customers looking for collection, repair or replacement support.",
  },
  reviews: {
    title: "What Customers Say About Our Coverage",
    subtitle:
      "Customers value clear communication, collection support and straight answers wherever they are based.",
  },
  overview: {
    title: "Specialist engine support with wider UK reach",
    paragraphs: [
      "Whether you are local to the workshop or further away, the process stays the same. We diagnose accurately, quote clearly and arrange collection where it makes sense for the job.",
      "Use the areas section above to understand where we operate most often, then contact us for an engine repair, rebuild or replacement quote.",
    ],
  },
};
