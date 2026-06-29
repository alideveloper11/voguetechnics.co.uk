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
    slug: "surrey",
    name: "Surrey",
    description:
      "Surrey engine repair, rebuild and replacement support for Guildford, Woking, Epsom and nearby towns, with collection arranged through our specialist workshop process.",
  },
  {
    slug: "bedfordshire",
    name: "Bedfordshire",
    description:
      "Bedfordshire engine repair, rebuild and replacement support for Bedford, Luton, Dunstable and nearby towns, with collection, supply-and-fit and workshop-backed diagnostics.",
  },
  {
    slug: "cambridgeshire",
    name: "Cambridgeshire",
    description:
      "Cambridgeshire engine repair, rebuild and replacement support for Cambridge, Peterborough, Huntingdon and nearby towns, with collection, supply-and-fit and nationwide engine delivery.",
  },
  {
    slug: "cheshire",
    name: "Cheshire",
    description:
      "Cheshire engine repair, rebuild and replacement support with UK-wide collection, supply-and-fit and warranty-backed specialist engine work for Range Rover, Land Rover, Jaguar and BMW owners.",
  },
  {
    slug: "dorset",
    name: "Dorset",
    description:
      "Dorset engine repair, rebuild and replacement support for Bournemouth, Poole, Dorchester and nearby towns, with collection planning, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "wiltshire",
    name: "Wiltshire",
    description:
      "Wiltshire engine repair, rebuild and replacement support with UK-wide delivery, collection options and workshop-backed specialist support for Range Rover, Land Rover, Jaguar and BMW owners.",
  },
  {
    slug: "greater-manchester",
    name: "Greater Manchester",
    description:
      "Greater Manchester engine repair, rebuild and replacement support for Manchester, Salford, Bolton and nearby towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "rutland",
    name: "Rutland",
    description:
      "Rutland engine repair, rebuild and replacement support for Oakham, Uppingham and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "northamptonshire",
    name: "Northamptonshire",
    description:
      "Northamptonshire engine repair, rebuild and replacement support for Northampton, Kettering, Corby and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    description:
      "West Yorkshire engine repair, rebuild and replacement support for Leeds, Bradford, Wakefield and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "gloucestershire",
    name: "Gloucestershire",
    description:
      "Gloucestershire engine repair, rebuild and replacement support for Gloucester, Cheltenham, Stroud and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "west-midlands",
    name: "West Midlands",
    description:
      "West Midlands engine repair, rebuild and replacement support for Birmingham, Coventry, Wolverhampton and surrounding areas, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "lincolnshire",
    name: "Lincolnshire",
    description:
      "Lincolnshire engine repair, rebuild and replacement support for Lincoln, Grimsby, Scunthorpe and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "east-riding-of-yorkshire",
    name: "East Riding of Yorkshire",
    description:
      "East Riding of Yorkshire engine repair, rebuild and replacement support for Hull, Beverley, Bridlington and surrounding towns, with collection options, supply-and-fit and workshop-backed specialist support.",
  },
  {
    slug: "isle-of-wight",
    name: "Isle of Wight",
    description:
      "Isle of Wight engine repair, rebuild and replacement support with collection options, supply-and-fit and workshop-backed specialist support for Range Rover, Land Rover, Jaguar and BMW owners.",
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
    question: "Which areas do you cover?",
    answer:
      "We support customers across our listed counties and regularly help drivers further afield as well. If your area is not shown in the grid, contact us with your postcode and we will confirm the best route for your job.",
  },
  {
    question: "Do you deliver and fit engines nationwide?",
    answer:
      "Yes. We can support supply-only, supply-and-fit and workshop-based installation routes depending on the engine, the vehicle condition and your location.",
  },
  {
    question: "Can you collect my vehicle?",
    answer:
      "In many cases, yes. Collection, delivery and recovery support can often be arranged for major engine jobs, and we confirm the practical logistics before anything is booked in.",
  },
  {
    question: "Is the warranty valid outside your local area?",
    answer:
      "Yes. Where a warranty is provided, the written coverage applies according to the agreed terms regardless of where you are based.",
  },
  {
    question: "Do you only work on Range Rover and Land Rover engines?",
    answer:
      "No. We also support Jaguar and selected BMW engine work through the same specialist workshop team, using the same diagnosis-first process and written quoting approach.",
  },
  {
    question: "Can I get a quote before booking collection?",
    answer:
      "Yes. Send us the registration, the fault symptoms and your location first and we will advise the right next step before transport or workshop intake is arranged.",
  },
];

export const areasIntro = {
  heading: "Choose Your Area",
  description:
    "Pick your county to see the kind of specialist engine support we provide in that location, including local coverage, collection options and workshop-backed repair, rebuild or replacement routes.",
};

export const areasLandingSections = {
  specialistsSection: {
    title: "Engine Specialists, Not a General Garage",
    eyebrow: "Engine Specialists",
    intro:
      "We do not dabble in engines. Vogue Technics focuses on major engine work for Range Rover, Land Rover, Jaguar and BMW vehicles, and that specialist focus is why customers across our coverage areas trust us with rebuilds, replacements and repair work that many general garages are not equipped to handle properly.",
    supportingTitle: "25+ Years of Specialist Engine Experience",
    supportingParagraphs: [
      "Every job starts with honest diagnosis, clear advice and a written quote before any work begins, whether the answer is a targeted repair, a full rebuild or a complete replacement.",
      "Our workshop approach stays the same wherever the customer is based: accurate assessment, correct parts, transparent pricing and warranty-backed work where applicable.",
    ],
    checklistItems: [
      "Thousands of engines rebuilt, supplied and fitted.",
      "Written quotes before any work begins.",
      "Warranty-backed major work where applicable.",
    ],
  },
  ukWideServiceSection: {
    title: "UK-Wide Service From Our Workshop",
    paragraphs: [
      "Everything we do runs through our dedicated workshop, where diagnostics, machining, engine preparation and fitting are handled under one roof by technicians who work on these platforms every day.",
      "We support customers across our listed coverage areas and throughout the UK with workshop-based installation, supply-only options, collection planning and engine delivery where the job allows it.",
      "Distance is not a reason to compromise on specialist support. The same standards, the same written quoting process and the same attention to detail apply whether you are nearby or further afield.",
    ],
    panelTitle: "Whatever the engine, whatever the fault",
    panelParagraph:
      "Whatever the engine, whatever the fault, whatever the platform, we diagnose it properly and quote it honestly before any work begins.",
  },
  engineRepairCostSection: {
    title: "Engine Repair Cost What You Need to Know",
    paragraphs: [
      "Engine work is a significant decision, and any honest price starts with understanding what the engine actually needs. The final figure depends on the platform, the fault, the extent of the damage and whether the right answer is repair, rebuild or replacement.",
      "A targeted repair sits at a very different price point to a full rebuild or a complete replacement unit. Timing chain, turbocharger and head gasket jobs also vary depending on the components that need replacing alongside the main fault.",
      "What we can tell you is that our pricing reflects specialist independent expertise rather than main-dealer overhead. We provide written quotes based on proper diagnosis, so the figure you receive is based on the vehicle in front of us rather than a vague estimate that changes once work starts.",
      "The most expensive route is usually doing the wrong repair first. We would rather explain the correct job clearly, price it properly and do it once.",
    ],
    quoteTitle: "Request a Written Quote No Obligation",
    quoteText:
      "Send your registration, symptoms and location and we will come back with honest initial advice and the right next step.",
  },
};

export const areasLandingContent = {
  hero: {
    title: "Reconditioned Range Rover Engines & Areas Covered",
    subtitle:
      "Vogue Technics provides specialist Range Rover, Land Rover, Jaguar and BMW engine repair, rebuild, replacement and supply-and-fit support across our coverage areas and throughout the UK, backed by OEM-quality parts, written quotes and warranty-backed workmanship.",
  },
  coverage: {
    label: "Local Coverage",
    heading: "Choose Your Area",
    description:
      "Pick your county to see the kind of specialist engine support we provide in that location. Each area page is written around local coverage, collection options and the workshop-backed repair, rebuild or replacement routes available for that region.",
  },
  reviews: {
    title: "What Customers Say About Our Coverage",
    subtitle:
      "Customers value clear communication, specialist diagnosis and the way we manage major engine work wherever they are based.",
  },
  overview: {
    title: "Specialist Engine Support With Wider UK Reach",
    paragraphs: [
      "Whether you are close to the workshop or further away, the process stays the same: diagnose accurately, explain the right route clearly, quote in writing and carry out the work to the same specialist standard.",
      "Use the area section above to find the county page closest to you, then contact us for advice on engine repair, rebuild, replacement, supply-only or supply-and-fit support.",
    ],
  },
};
