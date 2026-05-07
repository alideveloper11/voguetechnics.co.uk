import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 320d xDrive Engine Rebuild — Specialist Repairs, Reconditioning & Replacements Across the UK",
  description:
    "BMW 320d xDrive engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — xDrive diesel specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-320d-xdrive-engines" },
};

export default function Bmw320dXdriveEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 3 Series", href: "/bmw-3-series-engines" },
        { name: "BMW 320d xDrive Engines", href: "/bmw-320d-xdrive-engines" },
      ]}
      badgeText="BMW 320d xDrive Specialists (UK)"
      h1Accent="BMW 320d xDrive Engine Rebuild"
      h1Rest="— Specialist Repairs, Reconditioning & Replacements Across the UK"
      heroIntroParagraphs={[
        "The BMW 320d xDrive occupies a genuinely compelling position in the 3 Series range — the economy and refinement of the 320d diesel combined with the traction and confidence of all-wheel drive. It's a combination that works extremely well on British roads. But that same xDrive system introduces a layer of mechanical and thermal complexity that standard rear-wheel drive 320d variants simply don't carry — and when the engine develops a serious problem, that complexity matters enormously in terms of how the repair is approached and executed.",
        "The N47 diesel engines fitted to earlier E91 and F30 xDrive models carry the rear-mounted timing chain vulnerability that has affected thousands of UK 320d owners — but the additional drivetrain load that the xDrive system places on the engine throughout its working life accelerates wear in specific ways that a non-specialist workshop won't anticipate. On F30 and F31 xDrive models with the B47 engine family, the picture shifts — VGT turbo wastegate failures, water pump deterioration under the heightened cooling demands of AWD operation, and intake manifold gasket failure accelerated by the thermal cycling patterns unique to xDrive diesel use.",
        "At Vogue Technics, based in Grays, Essex, we carry out specialist BMW 320d xDrive engine rebuild work for owners right across the United Kingdom. With over 25 years of hands-on BMW diesel engine experience across every significant xDrive platform — E91, E92, F30, F31, and G20 — we bring the kind of technical depth to every job that simply cannot be replicated by a general workshop.",
      ]}
      sections={[
        {
          title: "Why BMW 320d xDrive Owners Choose Vogue Technics",
          paragraphs: [
            "Selecting the right specialist for a BMW 320d xDrive engine job is considerably more consequential than it might initially appear. The xDrive system introduces technical considerations that standard 320d repairs simply do not involve — and a workshop that fails to account for those considerations delivers a result that eventually reflects that oversight, whether immediately or over the following months.",
            "Deep Technical Knowledge of Every 320d xDrive Engine Variant",
            "The BMW 320d xDrive has been powered by five engine codes across its production history — the N47D20B and N47D20C in earlier xDrive variants, the B47D20A and B47D20B in F30, F31, and G20 xDrive models, and the N57D30 in certain EfficientDynamics xDrive configurations. Each carries its own specific failure profile. Each xDrive platform — E91, F30, F31, G20 — introduces its own mount configurations, cooling system demands, and ECU management requirements that must be correctly addressed during any rebuild or replacement.",
            "Post-rebuild ECU calibration on a 320d xDrive must specifically account for the xDrive torque split management system. Oil pressure monitoring on N47D20C xDrive units requires particular attention — the additional load cycling of AWD operation creates pressure fluctuation patterns that standard RWD diagnostics won't fully capture. We address all of this as standard practice. It's not an added extra. It's simply how we work.",
            "25 Years of BMW Diesel Engine Work From Grays, Essex",
            "Our workshop in Grays has been handling BMW engine rebuilds, repairs, and replacements continuously for over a quarter of a century. The 320d xDrive has featured in our regular workload across multiple generations, and our practical knowledge of the diesel engine families fitted to this car — in AWD configuration specifically — is both extensive and deeply grounded in real workshop experience. Our reputation has been built entirely through consistent results, honest communication, and pricing that doesn't change between the quote and the invoice.",
            "Clear, Itemised Quotes With No Hidden Additions",
            "We understand that BMW 320d xDrive engine work carries a significant financial weight — particularly when the job involves the N47 timing chain system with its rear-mounted architecture and the substantial labour requirement that comes with it. We remove the financial uncertainty with a clear, itemised quote before any work begins. If something unexpected comes to light during the job, we contact you before proceeding. The figure we give you at the start is the figure on your invoice at the end, without exception.",
          ],
        },
        {
          title: "Our BMW 320d xDrive Engine Services",
          paragraphs: [
            "Every service we carry out for the BMW 320d xDrive is approached with the same level of technical precision and professional care. xDrive-specific considerations are built into every job as standard — not treated as an afterthought once the standard repair is complete.",
            "Head Gasket Replacement",
            "Head gasket failure on the BMW 320d xDrive tends to develop in a way that's easy to rationalise away in the early stages. A slight white haze from the exhaust on cold mornings. Coolant that needs topping up marginally more frequently than it once did. A temperature gauge that climbs a fraction higher than it used to under sustained motorway driving. These are the early signals — and on an xDrive diesel, where the engine consistently runs under higher thermal load than a standard RWD 320d, those early signals arrive sooner and progress more quickly.",
            "By the time the symptoms become unmistakable — persistent white exhaust smoke, coolant that disappears without any visible external source, an engine that overheats under load — the head gasket has typically been compromised for some time. On the aluminium cylinder head fitted across 320d xDrive variants, sustained thermal stress warps the head faster than most owners anticipate, turning what would have been a head gasket replacement into a considerably more involved job.",
            "We carry out BMW 320d xDrive head gasket replacement using OEM-grade sealing components across all engine variants — N47D20B, N47D20C, B47D20A, and B47D20B — with a complete cooling system inspection and pressure test completed as part of every single job. The vehicle does not leave our workshop until the repair has been confirmed sound under real operating conditions.",
            "Timing Chain Replacement",
            "N47 timing chain failure is the most serious and most consequential engine issue across the BMW 320d range — and on xDrive variants, the additional drivetrain load that the AWD system places on the engine throughout its working life gives this already well-documented problem an additional dimension of urgency.",
            "The N47D20 engine positions its timing chain at the rear of the block, driven from the crankshaft — a location that makes replacement genuinely labour-intensive and that has proven susceptible to accelerated wear, particularly on vehicles where oil service intervals have been extended or where urban stop-start driving has been the primary use pattern. On N47D20C xDrive units specifically, the EGR cooler failure and injector seal deterioration that commonly accompany chain wear mean that a timing chain job frequently requires concurrent attention to other components — and a thorough pre-rebuild diagnostic is essential.",
            "The cold-start rattle is the warning sign. A brief metallic clatter that settles within seconds as oil pressure reaches the timing system. Many 320d xDrive owners hear this sound for months without acting on it. By the time it becomes constant and persistent, the chain has usually stretched well beyond any safe operational limit. When it snaps, the resulting engine damage is catastrophic and the cost escalates dramatically.",
            "We carry out complete BMW 320d xDrive timing chain replacement as a full system job — chain, tensioners, guides, and sprockets all replaced together, without compromise. Replacing the chain alone while leaving worn tensioners and guides in position is a false economy that returns the vehicle to the same failure within a fraction of the original interval. We carry out the complete job, every time.",
            "Timing Belt Replacement",
            "Certain BMW 320d xDrive configurations — particularly earlier variants and specific auxiliary drive systems — incorporate timing belts within their drivetrain architecture. A timing belt failure is categorically different from a timing chain failure in one critical respect: there is no warning. The belt simply breaks, and on an interference engine the valve-to-piston damage that follows is both immediate and typically terminal without a comprehensive rebuild.",
            "We carry out BMW 320d xDrive timing belt replacement using manufacturer-specified belt and tensioner kits and recommend replacement at or before the stated service interval in every case. If you've acquired a used 320d xDrive and cannot confirm the belt's service history with any confidence, contact us before adding further mileage. The cost of a belt replacement is genuinely modest against the cost of the alternative.",
            "Turbo Replacement",
            "On F30 and F31 xDrive models fitted with the B47D20A, the VGT turbo wastegate is one of the most commonly reported failure points — and the additional thermal demands that the xDrive system places on the engine's cooling infrastructure compound the turbo wear picture compared to standard RWD B47 applications. The symptoms tend to build progressively: reduced urgency under load, increased exhaust smoke, oil consumption that has quietly increased over recent months, or an audible change in the engine note under acceleration.",
            "The risk of ignoring turbo deterioration on the 320d xDrive is not simply continued degraded performance — it's the oil contamination that a failing turbo introduces into the intake system, which expands the scope and cost of the remedial work required substantially. We carry out BMW 320d xDrive turbo replacement using quality sourced units matched precisely to your engine code and xDrive configuration, with full post-installation testing under load before the vehicle returns to service.",
            "Engine Rebuild",
            "A full BMW 320d xDrive engine rebuild is the correct solution when internal wear across multiple components has progressed beyond what targeted repairs can address economically — or when an acute failure event such as a snapped timing chain or severe overheating has caused damage that goes beyond the scope of component-level repair.",
            "Our rebuild process covers complete engine strip-down, individual assessment of every internal component against manufacturer tolerances, replacement of all worn or damaged parts, and full reassembly to factory specifications. For xDrive variants, post-rebuild ECU calibration accounting for the xDrive torque management system is carried out as a standard part of the process — not an optional addition. The rebuilt engine is thoroughly tested before refitting. What returns to your car is an engine that performs like a fresh unit and integrates correctly with the xDrive drivetrain system from the first mile.",
            "Engine Repair",
            "When a full rebuild is not the appropriate answer, we will say so clearly and carry out only the work that is genuinely required. Our diagnostic process on the BMW 320d xDrive is methodical and thorough — we identify the actual root cause of the fault before any repair work begins, ensuring the cost of the job reflects only what the engine genuinely needs.",
            "Engine repairs we carry out regularly on the 320d xDrive include EGR valve and cooler replacement on N47D20C and B47D20A units, injector seal rectification, oil leak work from crankshaft and camshaft seals, water pump replacement on B47D20A xDrive models — where cooling system demands under AWD operation make this a higher-priority item than on standard variants — oil pressure sensor faults, intake manifold gasket failures, and a range of engine management and emissions system repairs. Whatever the fault, the approach is identical: diagnose accurately, fix it to a standard that holds, return the vehicle with full confidence behind the work.",
            "Engine Replacement",
            "When the cumulative cost of a rebuild exceeds what makes practical sense for the vehicle's value and your circumstances, or when multiple major components have failed simultaneously, a BMW 320d xDrive engine replacement is frequently the most sensible and cost-effective path forward.",
            "We supply and fit quality reconditioned BMW 320d xDrive engines and carefully selected low-mileage used units sourced from trusted UK suppliers, covering all relevant engine codes — N47D20B, N47D20C, B47D20A, B47D20B, and N57D30 — across E91, F30, F31, and G20 xDrive configurations. Every unit is inspected and bench-tested before installation. We explain the practical difference between a reconditioned and a used engine clearly, give you our honest recommendation, and let you make the decision with complete information available.",
            "Engine Swap",
            "Whether you're fitting a lower-mileage B47D20A into an earlier F30 xDrive shell, upgrading to a higher-specification engine variant, or undertaking a more involved conversion, a BMW 320d xDrive engine swap is a technically demanding job that requires careful management across every stage of the process.",
            "Our engine swap service covers the complete scope — sourcing the right donor unit, managing F30, F31, and G20 xDrive mount and ancillary configurations, wiring and sensor integration, post-swap ECU calibration including xDrive torque distribution mapping, and full diagnostic testing before handover. The vehicle does not leave our workshop until every system is operating correctly and the engine is performing exactly as it should under real driving conditions with the xDrive system fully active.",
            "Engine Health Check",
            "Perhaps your 320d xDrive is behaving slightly differently but there's no specific fault you can pinpoint. Or you're considering purchasing a used xDrive model and want a professional, impartial assessment of the engine's true condition before committing to the purchase. Either situation is exactly what our BMW 320d xDrive engine health check is designed to address.",
            "The check covers full diagnostic scanning across all engine management systems — including xDrive-specific fault codes — compression testing across all cylinders, oil condition and contamination analysis, cooling system and water pump inspection, EGR system assessment on applicable variants, timing chain condition evaluation, and a thorough visual inspection of all accessible engine and drivetrain components. You receive a written report with our honest findings and specific practical recommendations. No alarmism, no work suggested beyond what is genuinely warranted. Just a professional assessment from technicians who know these engines and this drivetrain configuration in real, practical depth.",
          ],
        },
        {
          title: "Nationwide BMW 320d xDrive Engine Service From Grays, Essex",
          paragraphs: [
            "Our workshop is based in Grays, Essex, but we serve BMW 320d xDrive owners right across the United Kingdom. We've built our collection and delivery infrastructure specifically so that geography is never a reason to accept a less qualified workshop for a job this technically specific.",
            "Engine Collection & Delivery Across the UK",
            "We offer a fully managed engine collection and delivery service covering the whole of Great Britain. If your 320d xDrive can't reach us in Grays — or if the engine has already failed and the car is off the road — we collect the old unit, carry out the rebuild or replacement at our workshop, and return the finished engine fully tested, correctly packaged, and ready to fit. We can also connect you with approved installation partners nationwide if local fitting is the more practical arrangement for your circumstances.",
            "Turnaround Times That Are Genuine and Consistently Delivered",
            "Most BMW 320d xDrive engine rebuilds are completed within 5–10 working days. Targeted repairs and engine replacements are often completed sooner. We give you a genuine, considered timeframe at the point of booking — not an optimistic figure designed to secure the job — and we deliver on it consistently with regular updates throughout so you always know exactly where your engine stands.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions —{" "}
            <span className="text-primary italic">BMW 320d xDrive Engine Rebuild &amp; Repair</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 320d xDrive engine rebuild cost in the UK?",
            answer:
              "Rebuild costs vary depending on the engine variant — N47 or B47 — and the extent of internal wear identified during strip-down. We provide this service to you at a rate 40% lower than the main dealer. N47 timing chain jobs carry additional labour costs due to the rear-mounted chain architecture, and xDrive-specific ECU calibration is included as standard within the rebuild process. Contact us directly for a tailored quote based on your specific engine code, chassis generation, and mileage.",
          },
          {
            question: "What are the most common engine problems on the BMW 320d xDrive?",
            answer:
              "The most serious and most frequently encountered issues include N47 timing chain failure on E91 and F30 xDrive models, VGT turbo wastegate failure and water pump deterioration on F30/F31 B47D20A xDrive variants, EGR cooler failure on N47D20C units, and head gasket failure — accelerated by the additional thermal load the xDrive system places on the engine. N47 timing chain issues on xDrive models should be treated with particular urgency given the additional drivetrain stresses involved.",
          },
          {
            question: "Does the xDrive system require specific attention during an engine rebuild?",
            answer:
              "Absolutely — and this is where a genuine specialist makes a measurable difference. Post-rebuild ECU calibration must account for the xDrive torque split management system. Oil pressure monitoring on N47D20C xDrive units requires specific attention. Water pump and cooling system reinforcement is more critical on B47D20A xDrive variants than on standard RWD applications. All of these considerations are built into our process as standard — not charged as extras.",
          },
          {
            question: "Do you provide a written warranty on rebuilt and replacement engines?",
            answer:
              "Yes, without exception. Every rebuilt and replacement engine supplied and fitted by Vogue Technics comes with a written warranty. The terms are explained fully and clearly before any work begins — no ambiguity, no conditions that surface only after the job is complete.",
          },
          {
            question: "Can you supply and fit, or supply the engine only?",
            answer:
              "Both options are fully available. We carry out complete supply and fit at our Grays, Essex workshop. We also supply engines to customers using their own installer, and we can connect you with approved fitting partners in your area if local installation is the more practical arrangement.",
          },
          {
            question: "How long does a BMW 320d xDrive engine replacement take?",
            answer:
              "A straightforward replacement typically takes 3–5 working days. A complete rebuild takes 5–10 working days depending on parts availability and the scope of work identified during strip-down. We confirm your specific timeframe at booking and provide regular updates throughout the entire process.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 320d xDrive back on the road — rebuilt correctly for the AWD platform?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in Grays, Essex, and serve BMW 320d xDrive owners right across the United Kingdom. The xDrive system demands a specialist who understands it completely. That's exactly what we are.",
      }}
    />
  );
}

