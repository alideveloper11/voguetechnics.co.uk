import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 525d Engine Rebuild — Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 525d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-525d-engines" },
};

export default function Bmw525dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 5 Series", href: "/bmw-5-series-engines" },
        { name: "BMW 525d Engines", href: "/bmw-525d-engines" },
      ]}
      badgeText="BMW 525d Specialists (UK)"
      h1Accent="BMW 525d Engine Rebuild"
      h1Rest="— Expert Reconditioning, Repair & Replacement Across the UK"
      heroIntroParagraphs={[
        "If your BMW 525d has started letting you down — whether it's losing power, burning oil, overheating, or worse — you're in the right place. At Vogue Technics, based in Grays, Essex, we specialise in BMW engine work with over 25 years of hands-on experience. From a full BMW 525d engine rebuild to timing chain repairs, turbo replacements, and head gasket work, we handle it all under one roof — with the expertise, tooling, and genuine parts knowledge that most general garages simply don't have.",
        "The BMW 525d is a refined, capable machine. When it runs well, it's one of the best diesel saloons on the road. When the engine starts failing, the costs can feel overwhelming. We're here to change that — with honest pricing, quality workmanship, and a written warranty on every job we do.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 525d Engine",
          paragraphs: [
            "Specialists Who Know the 525d Inside Out",
            "We don't split our attention between dozens of different makes and models. BMW engines — particularly the M57 and N47 diesel units found in the 525d — are what we know best. The timing chain vulnerabilities, the biturbo configuration quirks, the head gasket failure patterns — we've seen and solved them all, hundreds of times over.",
            "Over 25 Years of Engine Expertise in Grays, Essex",
            "Since day one, Vogue Technics has built its reputation on doing engine work properly. No shortcuts. No temporary fixes. Our workshop in Grays serves customers across Essex and the wider UK, and a significant portion of our work comes through referrals — because when we rebuild or repair an engine, it stays sorted.",
            "Transparent Quotes, No Hidden Costs",
            "Engine repairs can feel financially daunting. We get that. That's why every quote we provide is clear, itemised, and agreed upfront. You'll know exactly what you're paying for before any work begins. Call us or submit an enquiry online for a fast, no-obligation quote on your BMW 525d.",
          ],
        },
        {
          title: "Our BMW 525d Engine Services",
          paragraphs: [
            "Head Gasket Replacement",
            "White smoke from the exhaust, coolant disappearing without explanation, or your temperature gauge creeping into the red — these are classic signs of a blown head gasket on the BMW 525d. Left unaddressed, a failing head gasket will destroy an otherwise healthy engine very quickly.",
            "Our technicians replace BMW 525d head gaskets using OEM-grade components, with a full inspection of the cylinder head for warping or cracking before reassembly. Getting this right the first time matters — and that's exactly what we deliver.",
            "Timing Chain Replacement & Biturbo Timing Chain Repair",
            "The timing chain is arguably the most critical — and most discussed — weakness on the BMW 525d. The N47 engine in particular is notorious for timing chain stretch and tensioner failure, often occurring at mileages that feel far too early. When the chain goes, the damage is immediate and extensive.",
            "We carry out complete BMW 525d timing chain replacement as a full kit — chain, tensioners, guides, and sprockets — not just the chain itself. We also handle BMW 525d biturbo timing chain work on twin-turbo variants, ensuring both the mechanical and ancillary components are correctly set up post-replacement.",
            "Don't ignore the rattling. If you hear a cold-start rattle on your 525d, book a diagnostic with us today.",
            "Turbo Replacement & Twin Turbo Service",
            "Power loss under acceleration, excessive black or blue smoke, or a high-pitched whine from the engine bay — turbo failure is a common issue on the BMW 525d, particularly on higher-mileage examples running the twin-turbo setup.",
            "We source and fit quality replacement turbos for all BMW 525d variants, including full BMW 525d twin turbo replacement on biturbo models. Every turbo installation is followed by post-fit testing to confirm boost pressure, oil feed integrity, and correct operation before the car leaves our workshop.",
            "Engine Rebuild",
            "A full BMW 525d engine rebuild is often the smartest long-term investment — especially when the engine has accumulated significant mileage or has suffered internal damage. We strip the engine completely, measure and inspect every component, replace worn or damaged parts, and reassemble to factory tolerances.",
            "The result is an engine that performs like new, at a fraction of the cost of buying a replacement vehicle.",
            "Engine Repair",
            "Not every problem calls for a full rebuild. Our BMW 525d engine repair service starts with precise diagnostics — identifying exactly what's failed and why — so you only pay for what's genuinely needed. Oil leaks, bearing wear, valve damage, sensor faults — we fix the actual issue, not just the symptoms.",
            "Engine Replacement & Engine Swap",
            "Sometimes, the most practical solution is a quality replacement unit. We supply and fit reconditioned and low-mileage used BMW 525d engines, sourced from trusted suppliers and tested before installation. Our BMW 525d engine swap service covers the complete process — from removal of the old unit through to post-installation diagnostics and road testing.",
            "Engine Health Check & Diagnostic",
            "Not sure what's wrong? Or considering buying a used BMW 525d and want peace of mind first? Our BMW 525d engine health check includes compression testing, oil condition analysis, full diagnostic scanning, and a visual inspection of all major components. You'll receive a straightforward written report — honest findings, no upselling.",
          ],
        },
        {
          title: "Fast UK-Wide Service From Our Grays, Essex Workshop",
          paragraphs: [
            "Engine Collection & Delivery Across the UK",
            "Can't make it to us in Grays? Not a problem. We offer a fully managed engine collection and delivery service covering the whole of the United Kingdom. Send us your unit, and we'll return it rebuilt, repaired, or replaced — fully tested and ready to fit. We also work with a network of trusted approved installers nationwide if you need the engine fitted locally.",
            "Realistic Turnaround Times — And We Stick to Them",
            "Most BMW 525d engine rebuilds are completed within 5–10 working days. Repairs and replacements are often faster. We'll confirm your timeframe at the point of booking — and we don't move the goalposts.",
            "Written Warranty on Every Job",
            "Every engine rebuild, repair, and replacement at Vogue Technics comes with a written warranty. We stand behind everything we do because we know the standard of work that leaves our workshop.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 525d Engine Work</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 525d engine rebuild cost in the UK?",
            answer:
              "Costs vary depending on engine condition and the extent of work required. We provide this service to you at a rate 40% lower than the main dealer. Contact us for an accurate, bespoke quote based on your specific vehicle and mileage.",
          },
          {
            question: "What are the most common BMW 525d engine problems?",
            answer:
              "The most frequently reported issues include timing chain failure (particularly on the N47 engine), turbo wear or failure on twin-turbo variants, head gasket failure, and oil leaks. Early diagnosis is key to preventing minor issues from becoming major ones.",
          },
          {
            question: "Is it worth rebuilding a BMW 525d engine?",
            answer:
              "In most cases, absolutely — especially if the rest of the vehicle is in good condition. A professionally rebuilt engine significantly extends the car's usable life and is far more cost-effective than replacing the vehicle.",
          },
          {
            question: "Do you offer a warranty on rebuilt and reconditioned engines?",
            answer:
              "Yes. All rebuilt and replacement engines supplied or fitted by Vogue Technics come with a written warranty. Full terms are discussed clearly before any work commences.",
          },
          {
            question: "Can you supply and fit the engine, or just supply it?",
            answer:
              "Both. We offer full supply and fit at our Grays, Essex workshop. If you're located elsewhere in the UK, we can arrange fitting through our approved installer network.",
          },
          {
            question: "How long does a BMW 525d engine replacement take?",
            answer:
              "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on parts availability and the extent of work required.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 525d back on the road properly?",
        paragraph:
          "Call Vogue Technics today or fill in our online enquiry form for a fast, no-obligation quote. We're based in Grays, Essex, and serve BMW owners across the whole of the United Kingdom. Don't trust your 525d to a general garage — trust the specialists who know it best.",
      }}
    />
  );
}

