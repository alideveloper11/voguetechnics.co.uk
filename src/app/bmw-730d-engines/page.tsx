import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 730d Engine Rebuild — N57 & B57 Diesel Specialist, Full Reconditioning & Engine Services Across the UK",
  description:
    "BMW 730d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — N57 & B57 diesel specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-730d-engines" },
};

export default function Bmw730dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 7 Series", href: "/bmw-7-series-engines" },
        { name: "BMW 730d Engines", href: "/bmw-730d-engines" },
      ]}
      badgeText="BMW 730d Specialists (UK)"
      h1Accent="BMW 730d Engine Rebuild"
      h1Rest="— N57 & B57 Diesel Specialist, Full Reconditioning & Engine Services Across the UK"
      heroIntroParagraphs={[
        "The BMW 730d is not simply a large diesel saloon. It is a vehicle built to cover serious distances in complete comfort — to absorb motorway miles effortlessly, to deliver refined, effortless performance at sustained cruise speeds, and to do so repeatedly, day after day, often at annual mileages that would concern most other diesel engines. That executive saloon duty cycle — long motorway runs, consistent high-speed operation, sustained boost delivery — places very specific demands on the engine that powers it.",
        "Understanding those demands is the starting point for doing engine work on the 730d correctly.",
        "At Vogue Technics, based in Grays, Essex, we carry out BMW 730d engine rebuilds, repairs, timing chain replacements, turbo replacements, and full engine reconditioning across both major engine generations — the N57D30 family in the F01 and F02 chassis, and the B57D30 family in the G11 and G12 — with the specific technical knowledge that each generation requires. Over 25 years of specialist BMW engine work has given us a depth of understanding that no generalist garage can replicate. If your 730d needs engine attention, you have arrived at the right workshop.",
      ]}
      sections={[
        {
          title: "Why the BMW 730d Deserves More Than a Generalist Approach",
          paragraphs: [
            "Two Engine Generations — Two Distinct Failure Profiles",
            "One of the most important things any 730d owner should understand when seeking engine work is that the N57D30 and the B57D30 are not the same engine with different badging. They share a diesel straight-six format and some broad architectural similarities — but their failure patterns, rebuild requirements, and service considerations differ in ways that matter considerably when your engine is in pieces on a workshop bench.",
            "The N57D30 in the F01 and F02 730d — particularly in twin-turbo N57D30A and triple-turbo N57D30B specifications — carries well-documented timing chain tensioner vulnerabilities, high-pressure fuel pump failure patterns at elevated mileages, EGR cooler failures tied directly to the 730d's executive saloon duty cycle, and turbo shared oil circuit contamination risks that compound quickly when one turbo begins to fail. These are failure patterns we have seen, diagnosed, and resolved on N57D30 units hundreds of times.",
            "The B57D30 in the G11 and G12 730d presents differently. The timing chain system carries related but distinct tensioner vulnerabilities. The engine management integration with the G11/G12 chassis electronics is considerably more complex than on the F01/F02 — which matters significantly during engine replacement and swap work. The cooling system architecture differs from the N57 in ways that affect head gasket failure patterns and thermostat behaviour. Knowing which engine is in front of you — and what that engine specifically does when it fails — is the foundation of doing the work correctly.",
            "25 Years of Specialist BMW Engine Work From Grays, Essex",
            "Vogue Technics has operated from our Grays workshop for over a quarter of a century. In that time we have rebuilt, repaired, and replaced BMW 730d engines across both F-series and G-series generations, in both rear-wheel-drive and xDrive configurations. Our customer base spans Essex, London, and the wider UK — built almost entirely through direct referrals from 730d owners who experienced our work and sent others to us without hesitation.",
            "When we work on your 730d engine, every decision made during that work reflects accumulated experience with this specific engine in this specific application — not a generic diesel rebuild process applied without consideration of what the engine actually is.",
            "Itemised, Written Quotes — Confirmed Before Any Work Begins",
            "Engine work on a BMW 730d is a serious financial commitment, and every owner who contacts us deserves to know precisely what that commitment involves before they make it. We provide fully itemised, clearly explained written quotes before any work begins on your vehicle. No figures that change unexpectedly between booking and collection. No additions that surface without prior discussion and agreement. Complete transparency from first contact to final handover.",
            "Call us directly or submit an online enquiry for a fast, no-obligation quote specific to your 730d, its engine generation, its mileage, and the work it requires.",
          ],
        },
        {
          title: "Our Complete BMW 730d Engine Services",
          paragraphs: [
            "Head Gasket Replacement",
            "Head gasket failure on the BMW 730d follows a pattern that reflects the engine's operating environment rather than appearing randomly. The 730d's sustained high-speed motorway operation places consistent thermal load on the cylinder head and its sealing components — and on higher-mileage examples of the N57D30 in particular, that accumulated thermal cycling eventually takes its toll.",
            "White or grey exhaust smoke that persists beyond a brief cold-start period, coolant that requires topping up without any visible external leak, oil showing signs of contamination, or an engine temperature that trends slightly higher than it once did — these are the warning signs that demand investigation rather than monitoring.",
            "We carry out BMW 730d head gasket replacement using OEM-grade sealing components throughout, preceded by a full cylinder head inspection covering surface flatness measurement, crack testing, and complete structural assessment before reassembly. On an engine that will return to demanding executive saloon service, this job must be done to the correct standard — and that is what we deliver, without exception.",
            "Timing Chain Replacement",
            "BMW 730d N57 timing chain replacement is one of the most consequential services in our entire BMW engine work portfolio — and among the most frequently needed on higher-mileage F01 and F02 examples. The N57D30's timing chain tensioner failure pattern is well-established, but what is less widely understood is how the 730d's specific duty cycle accelerates that failure relative to the same engine in a lighter-duty application.",
            "A 730d covering 30,000 motorway miles per year accumulates timing chain operational hours at consistent high load — the tensioner is working against sustained chain tension at cruise speeds that a city-driven equivalent simply does not experience. The result is tensioner wear that presents at mileages which frequently surprise owners who have only encountered the N57 in mixed-use applications.",
            "The definitive early warning sign is a cold-start rattle — a brief metallic clatter from the engine that clears within a few seconds of running as oil pressure builds. It is the sound of the timing chain going slack momentarily before a weakening tensioner takes up what load it can still manage. At that point, the chain has already stretched beyond the range where tensioner compensation remains reliable.",
            "Do not continue driving a 730d that produces a cold-start rattle. BMW 730d timing chain failure, when it occurs fully, produces catastrophic internal damage within a very short period of continued operation.",
            "We carry out BMW 730d timing chain replacement as a complete system job — chain, tensioners, guides, and sprockets replaced together as a full kit. No component from the old timing system is retained on the basis that it appears serviceable. We also handle BMW 730d timing chain repair where secondary valve train damage has already occurred, restoring correct engine timing and confirming fault-free operation before the vehicle returns to the road.",
            "Turbo Replacement",
            "The turbocharger system on the BMW 730d varies by engine specification — single turbo on base N57D30 variants, twin-turbo biturbo on N57D30A and B57D30 units, and triple turbo on certain N57D30B specifications. Each configuration presents its own diagnostic and replacement considerations, and each demands a technician who understands which symptoms point to which stage of the system.",
            "On biturbo 730d variants — the most common configuration on F01 and G11 examples encountered in the UK — the shared oil feed and return circuit between both turbos means that a failing turbo does not fail in isolation. Oil contamination from a deteriorating turbo bearing circulates through the shared system and reaches the second unit, accelerating its wear simultaneously. Replacing only the presenting failed turbo without assessing the condition of the second unit is an incomplete repair that creates a repeat failure on a compressed timeline.",
            "The 730d's executive saloon duty cycle — sustained high-speed operation with consistent boost demand — places turbo bearing loads that accumulate meaningfully over high annual mileages. Power that softens progressively at specific points in the rev range, exhaust smoke that appears under sustained load, or boost-related fault codes appearing on the G11/G12's more sensitive engine management system are the signs to act on promptly.",
            "We carry out BMW 730d turbo replacement with comprehensive post-installation testing — boost pressure across all active stages, oil feed and return integrity checks, and full fault scanning before the vehicle leaves our workshop. We assess the complete turbo system on every job, not just the component that generated the presenting fault code.",
            "Engine Rebuild",
            "A full BMW 730d engine rebuild is the most thorough and, on a high-mileage executive saloon that has been used consistently and hard, frequently the most cost-effective long-term solution available. Whether the engine in question is an N57D30 from an F01 with 180,000 miles behind it or a B57D30 from a G11 that has suffered turbo oil contamination, the rebuild process starts in the same place — a complete strip down, precision measurement of every internal component, and the replacement of everything that falls outside factory tolerance.",
            "Bearings, rings, seals, gaskets, oil system components, and timing system elements — everything that determines the rebuilt engine's longevity under the demanding conditions the 730d actually operates in — is assessed, documented, and addressed. We do not rebuild engines to a standard that gets them back on the road. We rebuild them to a standard that keeps them on the road.",
            "Engine Repair",
            "Not every BMW 730d engine problem requires a full rebuild, and we will never recommend one when a targeted repair is the genuinely appropriate and more economical solution. Our BMW 730d engine repair service begins with thorough diagnostic work — full electronic fault scanning across all engine management systems, compression testing, oil condition analysis, and systematic physical inspection — so that the work carried out is precisely targeted.",
            "Oil leaks from ageing rear main seals and camshaft cover gaskets are common on higher-mileage N57D30 units. EGR cooler failures and associated cooling system contamination require careful and complete resolution — not just component replacement. VANOS system faults, high-pressure fuel pump deterioration at elevated mileages, injector issues, and sensor failures all fall within our standard engine repair scope. We identify and address the root cause, not the most convenient surface symptom.",
            "Engine Replacement",
            "When internal damage has progressed beyond economical repair, or when a comprehensive assessment confirms that a quality replacement unit is the most practical path forward, we supply and fit reconditioned and low-mileage used BMW 730d engines across both engine generations and all drivetrain configurations. Every replacement engine is sourced from verified, trusted suppliers and assessed for condition and provenance before installation begins.",
            "We manage the complete installation process — removal of the failed unit, full installation of the replacement engine, all ancillary reconnections, and a comprehensive post-installation diagnostic session covering all engine management systems before the vehicle is returned. On G11 and G12 730d variants, the more complex chassis electronics integration is addressed as a standard element of the installation process, not an afterthought.",
            "Engine Swap",
            "Our BMW 730d engine swap service covers scenarios where a direct like-for-like replacement is not the objective — fitting a newer B57D30 variant into an earlier F01 chassis, addressing a situation where the original engine specification is no longer the most appropriate solution, or other bespoke requirements that fall outside a standard replacement. Every engine swap on a 730d involves ECU calibration, ancillary adaptation, cooling system compatibility verification, and post-swap diagnostic confirmation across all connected systems. We carry out this work properly and completely — no shortcuts at any stage of the process.",
            "Timing Belt Replacement",
            "Certain BMW 730d variants — particularly those from earlier E-series generation applications and some F01 configurations — incorporate timing belt components within the valve train system alongside the primary chain. A timing belt fails with far less warning than a chain, and when it does, engine damage is immediate and total. We carry timing belt kits for all applicable 730d engine configurations and recommend replacement at or ahead of BMW's specified service intervals on any vehicle where the complete service history cannot be fully verified.",
            "Engine Health Check & Diagnostic",
            "Not certain what is actually wrong with your 730d? Or considering buying a used F01, F02, G11, or G12 730d and wanting an honest, independent assessment of the engine's true condition — including timing chain system health, turbo system integrity, and oil circuit condition — before you commit? Our BMW 730d engine health check and engine inspection covers full compression testing across all cylinders, oil condition and contamination analysis, comprehensive electronic diagnostic scanning across all engine management and turbo-related fault codes, physical assessment of the timing chain system, and a thorough visual inspection of the engine bay including EGR and cooling system components.",
            "You receive a written report with clear, specific findings and honest recommendations. No manufactured urgency, no upselling, no vague language. The complete, accurate information you need to make a properly informed decision about a vehicle you are either already committed to or considering committing to.",
          ],
        },
        {
          title: "Fast, Reliable UK-Wide Service From Our Grays, Essex Workshop",
          paragraphs: [
            "Engine Collection & Return — Nationwide Coverage",
            "Not within reach of our Grays workshop? That presents no barrier. We operate a fully managed engine collection and delivery service covering the entire United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced — fully tested and ready to install. For customers who need the engine installed locally, we work with a trusted network of approved fitting partners across the UK.",
            "Confirmed Turnaround Times — Agreed and Delivered",
            "Most BMW 730d engine rebuilds are completed within 5–10 working days from parts confirmation. Repairs and replacements are frequently completed more quickly. We confirm your specific timeframe at the point of booking and communicate proactively if anything changes — because a customer chasing their own vehicle for a progress update is a failure of communication we take seriously and avoid.",
            "Written Warranty — On Every Engine Job, Without Exception",
            "Every engine rebuild, repair, and replacement that leaves Vogue Technics carries a written warranty. We provide it because our standard of work warrants it — and because every 730d owner who trusts us with their engine deserves to drive away with complete, justified confidence in what has been done and what it means for the vehicle going forward.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 730d Engine Work</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 730d engine rebuild cost in the UK?",
            answer:
              "Costs vary depending on engine generation — N57D30 or B57D30 — and the extent of internal wear or damage. A full rebuild typically starts from around £2,500–£5,000. Biturbo and triple-turbo variants are towards the higher end of that range due to the additional complexity involved. Contact us for a fully itemised, bespoke quote specific to your vehicle and its condition.",
          },
          {
            question: "What is the difference between the N57D30 and B57D30 in the BMW 730d?",
            answer:
              "The N57D30 powers the F01 and F02 730d (2008–2015) and is available in single, twin, and triple-turbo specifications. The B57D30 powers the G11 and G12 730d (2015–2022) and represents a substantially updated engine family with different management integration, cooling system architecture, and failure patterns. Both require specialist knowledge to rebuild or repair correctly — but they are not interchangeable in terms of the approach required.",
          },
          {
            question: "What are the most common BMW 730d engine problems?",
            answer:
              "On N57D30 variants — timing chain tensioner failure, high-pressure fuel pump deterioration at elevated mileages, EGR cooler failure, biturbo oil circuit contamination, and oil leaks from rear main and camshaft seals. On B57D30 variants — timing chain tensioner issues, cooling system-related head gasket stress, and more complex engine management faults related to the G11/G12 chassis electronics. The 730d's executive saloon duty cycle accelerates certain failure patterns relative to the same engines in lighter-duty applications.",
          },
          {
            question: "Is it worth rebuilding a BMW 730d engine?",
            answer:
              "In most cases, yes — particularly when the vehicle is otherwise in sound condition. The 730d is expensive to replace at an equivalent level of refinement, space, and technology. A properly executed rebuild extends the vehicle's working life considerably and represents far better value than replacement.",
          },
          {
            question: "Do you provide a warranty on rebuilt and reconditioned BMW 730d engines?",
            answer:
              "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are explained clearly and agreed before any work commences.",
          },
          {
            question: "Do you offer a BMW 730d engine fitting service?",
            answer:
              "Yes. We offer complete supply and fit at our Grays, Essex workshop. For customers located elsewhere across the UK, we arrange fitting through our trusted network of approved installers.",
          },
          {
            question: "How long does a BMW 730d engine replacement take?",
            answer:
              "A standard engine replacement typically takes 3–5 working days. A full rebuild takes between 5–10 working days depending on the engine variant and scope of work. Your confirmed timeframe is agreed at booking.",
          },
          {
            question: "Do you work on both F-series and G-series BMW 730d variants?",
            answer:
              "Yes. We cover all 730d applications — F01, F02, G11, and G12 — across N57D30 and B57D30 engine families, in both rear-wheel-drive and xDrive configurations.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 730d back to the standard it was engineered to deliver?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We are based in Grays, Essex, and we serve BMW owners right across the United Kingdom. The 730d deserves engine work from people who genuinely understand it — and that is precisely what we provide.",
      }}
    />
  );
}

