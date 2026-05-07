import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 320d Engine Rebuild — Specialist Reconditioning, Repairs & Replacements Across the UK",
  description:
    "BMW 320d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — M47/N47/B47 diesel specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-320d-engines" },
};

export default function Bmw320dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 3 Series", href: "/bmw-3-series-engines" },
        { name: "BMW 320d Engines", href: "/bmw-320d-engines" },
      ]}
      badgeText="BMW 320d Specialists (UK)"
      h1Accent="BMW 320d Engine Rebuild"
      h1Rest="— Specialist Reconditioning, Repairs & Replacements Across the UK"
      heroIntroParagraphs={[
        "Few diesel engines have been as widely used, as thoroughly tested by real-world mileage, and as thoroughly documented for known failure patterns as the BMW 320d powerplant. From the M47 units fitted to early E46 models right through to the B47 diesel family in current F30 and G20 variants, the 320d has powered millions of miles of UK driving — and our workshop in Grays, Essex has been on the receiving end of these engines in every conceivable state of health for over 25 years.",
        "Whether your N47 has finally succumbed to the rear-mounted timing chain issue that has affected so many E90 owners across the UK, your B47's turbo actuator has given up, or your F30's EGR cooler has caused problems that have snowballed into something more serious — we know exactly what we're dealing with before we even open the bonnet. That depth of familiarity with the 320d's engine families is what makes the difference between a repair that lasts and one that brings the car back within six months.",
        "At Vogue Technics, based in Grays, Essex, we carry out specialist BMW 320d engine rebuild work for owners right across the United Kingdom. This is what we do, it's what we've always done, and it's what we do better than a general garage ever could.",
      ]}
      sections={[
        {
          title: "Why BMW 320d Owners Across the UK Choose Vogue Technics",
          paragraphs: [
            "The BMW 320d deserves more than a workshop that treats it like any other diesel. These are precision-engineered engines with specific failure modes and specific correct repair methodologies — and the difference between getting it right and getting it nearly right is measured in thousands of miles and hundreds of pounds. Here is what sets us apart.",
            "Genuine Multi-Generation 320d Engine Expertise",
            "The BMW 320d has been powered by three distinct diesel engine generations across its production history — the M47, the N47, and the B47 — each fitted across multiple chassis platforms including the E46, E90, E91, E92, F30, F31, and G20. Every one of these engine families has its own known vulnerabilities. The M47's swirl flap failures. The N47's catastrophic rear-mounted timing chain. The B47's turbo VGT actuator faults and EGR cooler deterioration. We know every single one of these failure patterns in practical, hands-on detail — because we've been resolving them since the E46 was the current model.",
            "That breadth of genuine cross-generational knowledge is not something you find in most workshops. It's something that only comes from 25 years of consistently working on these specific engines.",
            "Honest Assessment, Clear Pricing, No Surprises",
            "One of the most common frustrations we hear from 320d owners who have dealt with other workshops is the experience of receiving a quote that bears little resemblance to the final invoice. We work differently. Every job at Vogue Technics begins with a thorough, methodical diagnostic assessment followed by a clear, itemised quote that explains precisely what needs to be done, what parts are required, and what the total cost will be. If something unexpected is discovered mid-job, we contact you before taking any further action. The figure we quote at the start is the figure on the invoice at the end.",
            "Written Warranty on Every Job That Leaves Our Workshop",
            "Whether the work is a targeted single-component repair or a full BMW 320d engine rebuild, every job leaves Vogue Technics backed by a written warranty. We stand behind our workmanship completely — because we know the standard to which it has been carried out.",
          ],
        },
        {
          title: "Our BMW 320d Engine Services",
          paragraphs: [
            "The BMW 320d engine has a well-established set of known failure points, and every service we offer is built around resolving those failures properly — not temporarily. Each service section below reflects how we actually approach that work.",
            "Head Gasket Replacement",
            "Head gasket failure on the BMW 320d tends to build gradually before it becomes impossible to ignore. The early indicators are easy to miss — a very slight white haze from the exhaust on cold mornings that clears quickly, coolant that needs topping up slightly more often than it should, or a temperature gauge that sits marginally higher than normal under motorway running. These subtle signs are the engine telling you something is wrong long before the more dramatic symptoms arrive.",
            "When those dramatic symptoms do arrive — persistent white or grey exhaust smoke, coolant that disappears without any visible external leak, or an engine that overheats under load — the head gasket has usually been failing for some time. And on an aluminium-headed diesel like the 320d, the cylinder head warps from sustained heat exposure faster than most owners expect, which is why prompt action at the first signs is always the financially sensible response.",
            "We carry out BMW 320d head gasket replacement using OEM-grade sealing components across all engine variants — M47, N47, and B47 — with a complete cooling system inspection and pressure test completed as standard on every job. The engine does not return to service until the repair has been confirmed sound under operating conditions.",
            "Timing Chain Replacement",
            "The N47 timing chain situation is, without question, the single most serious and most widely discussed engine issue in the entire BMW 320d ownership experience. The N47D20 engine — which powered the 320d throughout the E90, E91, and early F30 generations — positions its timing chain at the rear of the engine block, driven directly from the crankshaft. The location alone makes replacement far more labour-intensive than a conventional front-mounted chain. Combined with a design that has proven genuinely susceptible to accelerated wear, the result has been catastrophic engine failures for a significant number of UK 320d owners.",
            "The cold-start rattle is the warning. A brief metallic clatter on startup that settles after a few seconds — so brief and so easily rationalised away that thousands of owners have ignored it for months. By the time it becomes persistent, the chain has typically stretched well beyond any safe limit. When it snaps, the damage is immediate and severe. Bent valves, damaged pistons, a destroyed engine — all from a fault that was announcing itself quietly for months before it became terminal.",
            "On B47-engined 320d models, the BMW 320d B47 timing chain presents a different but equally important set of considerations — different tensioner architecture, different wear patterns, different replacement methodology. We carry out complete timing chain replacement across all 320d engine variants as a full system job: chain, tensioners, guides, and sprockets replaced together. Replacing the chain alone is not a complete job. We don't do incomplete jobs.",
            "Timing Belt Replacement",
            "Certain BMW 320d variants — particularly those from the E46 M47 generation and some specific auxiliary drive configurations on later models — incorporate timing belts within their drivetrain systems. A timing belt failure is unlike a timing chain failure in one critical respect: there is no warning. No rattle, no gradual change in performance, no amber light on the dashboard. The belt simply breaks, and on an interference engine the consequences are instantaneous and catastrophic.",
            "We carry out BMW 320d timing belt replacement using manufacturer-specified belt and tensioner kits, and we recommend replacement at or before the manufacturer's stated interval without exception. If you've acquired a used 320d and have any doubt about when the belt was last changed, contact us before putting further miles on the car. The cost of a belt replacement is a fraction of the cost of an engine replacement.",
            "Turbo Replacement",
            "The turbocharger on the BMW 320d is central to everything the engine does well — the performance, the efficiency, the refinement under load. On N47 variants, turbo wear tends to be gradual and cumulative. On B47-engined models, the VGT turbo actuator is the more commonly reported failure point — a fault that can manifest as reduced power, erratic boost behaviour, or a turbo that appears to work intermittently before failing altogether.",
            "The symptoms of turbo deterioration across all 320d variants include reduced performance under load, increased exhaust smoke, oil consumption that has quietly increased over time, and audible changes to the engine note under acceleration. None of these improve without intervention. Continuing to drive on a failing turbo risks oil contamination spreading through the intake system — work that adds significantly to the scope and cost of the eventual repair.",
            "We carry out BMW 320d turbo replacement using quality sourced units matched to your specific engine code and generation, with full post-installation testing under operating conditions before the vehicle returns to service.",
            "Engine Rebuild",
            "A complete BMW 320d engine rebuild is the right answer when internal wear has reached the point where individual targeted repairs no longer represent good value — either because too many components have degraded simultaneously, or because the engine has suffered acute damage from a timing chain failure, overheating event, or oil starvation incident.",
            "Our rebuild process is comprehensive and uncompromising: complete engine strip-down, individual assessment of every internal component against manufacturer tolerances, replacement of all worn or damaged parts using quality components, and full reassembly to factory specifications. The engine is tested before refitting. What returns to your vehicle is functionally a fresh engine — one that behaves like new because the work carried out has genuinely made it so — at a cost that represents real value against the alternatives.",
            "Engine Repair",
            "When a full rebuild is not warranted, we will say so clearly and carry out only the work that is genuinely required. Our diagnostic process on the BMW 320d is methodical and precise — we identify the actual root cause of the problem before any repair work begins, ensuring the job cost reflects only what the engine genuinely needs.",
            "BMW 320d engine repairs we carry out regularly include EGR valve and cooler replacement across N47 and B47 variants, injector seal work on F30 N47D20C units, oil leak rectification from crankshaft and camshaft seals, bearing replacements, swirl flap rectification on M47 engines, DPF-related diagnostic and repair work, and a range of engine management and sensor system repairs across all generations. The approach is always the same — find the real cause, fix it to a standard that lasts, return the vehicle with full confidence behind the work.",
            "Engine Replacement",
            "When the cumulative cost of a rebuild exceeds what makes practical financial sense for the vehicle, or when multiple major components have failed simultaneously, a BMW 320d engine replacement is frequently the most sensible and cost-effective route forward.",
            "We supply and fit quality reconditioned BMW 320d engines and carefully selected low-mileage used units sourced from trusted UK suppliers, covering all major engine codes across every generation — M47D20, N47D20A, N47D20B, N47D20C, B47D20A, and B47D20B. Every unit is inspected and bench-tested before installation. We explain the real-world difference between a reconditioned and a used engine clearly and honestly, give you our genuine recommendation based on your vehicle's condition and your circumstances, and let you make the informed decision.",
            "Engine Swap",
            "Whether you're fitting a newer B47D20A into an older F30 shell, replacing a high-mileage N47 with a lower-mileage example of the same code, or undertaking a more ambitious conversion, a BMW 320d engine swap requires careful technical execution across every stage of the process.",
            "Our engine swap service covers the complete scope — sourcing the right donor unit, managing platform-specific mount and ancillary configurations across E46, E90, F30, and G20 chassis, wiring and sensor integration, post-swap ECU calibration, and full diagnostic testing before handover. The vehicle doesn't leave our workshop until every system is functioning correctly and the engine is performing exactly as it should under real driving conditions.",
            "Engine Health Check",
            "Not entirely sure what's wrong with your 320d — or considering purchasing a used example and wanting a professional assessment of the engine's actual condition before you commit? Our BMW 320d engine health check gives you the clarity to make an informed decision, whatever generation or engine variant is fitted.",
            "The check covers full diagnostic scanning for stored and pending fault codes across all engine management systems, compression testing across all cylinders, oil condition and contamination analysis, cooling system inspection, EGR system assessment on applicable variants, timing chain condition evaluation where applicable, and a thorough visual inspection of all accessible engine components. You receive a written report with our honest findings and specific practical recommendations. No alarmism, no work suggested beyond what is genuinely warranted. Just a professional, experience-backed assessment from technicians who know every generation of the 320d engine in genuine depth.",
          ],
        },
        {
          title: "Nationwide BMW 320d Service From Our Workshop in Grays, Essex",
          paragraphs: [
            "Our workshop is rooted in Grays, Essex, but the service we provide reaches BMW 320d owners across the whole of the United Kingdom. We've built our infrastructure specifically so that geography is never a barrier to accessing specialist-quality engine work.",
            "Engine Collection & Delivery Across the UK",
            "We offer a fully managed engine collection and delivery service covering the whole of Great Britain. If your 320d can't make it to Grays — or if the engine has already failed and the vehicle is off the road — we collect your old unit, carry out the rebuild or replacement at our workshop, and return the finished engine fully tested, correctly packaged, and ready to fit. We can also connect you with approved installation partners nationwide if local fitting is the more practical arrangement.",
            "Turnaround Times That Are Genuine and Consistently Delivered",
            "Most BMW 320d engine rebuilds are completed within 5–10 working days. Targeted repairs and engine replacements are often completed sooner depending on parts availability and the scope of work involved. We give you a genuine timeframe at the point of booking — not an optimistic figure designed to win the job — and we deliver on it with regular updates throughout so you are never left uncertain.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 320d Engine Rebuild &amp; Repair</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 320d engine rebuild cost in the UK?",
            answer:
              "Rebuild costs vary depending on the engine generation — M47, N47, or B47 — and the extent of internal wear identified during strip-down. We provide this service to you at a rate 40% lower than the main dealer. N47 timing chain rebuilds carry additional labour costs due to the rear-mounted chain architecture. Contact us directly for a tailored quote based on your specific engine code, chassis generation, and mileage.",
          },
          {
            question: "What is the most common engine problem on the BMW 320d?",
            answer:
              "The most serious and most widely reported issue is N47 timing chain failure on E90, E91, and early F30 models. The rear-mounted chain design is inherently prone to accelerated wear, and when it fails the internal damage is catastrophic. On B47-engined F30 and G20 models, VGT turbo actuator faults and EGR cooler deterioration are the most frequently encountered issues. On older M47-engined E46 models, swirl flap failures and injector problems are the primary concerns.",
          },
          {
            question: "Is a BMW 320d engine rebuild worth the investment?",
            answer:
              "In most cases, absolutely — particularly when the vehicle is otherwise in good mechanical condition. A quality rebuild restores the engine to near-new performance levels across whichever generation you're running, and extends the car's useful life considerably at a cost that compares very favourably with sourcing a replacement vehicle.",
          },
          {
            question: "Do you provide a written warranty on rebuilt and replacement engines?",
            answer:
              "Yes, without exception. Every rebuilt and replacement engine supplied and fitted by Vogue Technics comes with a written warranty. The terms are explained in full before any work begins — clearly, without ambiguity, and without conditions that only emerge after the job is complete.",
          },
          {
            question: "Do you work on all BMW 320d generations — E46, E90, F30, and G20?",
            answer:
              "Yes. We work across every significant 320d generation sold in the UK market and across all engine codes — M47D20, N47D20A, N47D20B, N47D20C, B47D20A, and B47D20B. If your specific engine code isn't listed, contact us directly and we'll confirm availability and provide a quote.",
          },
          {
            question: "Can you supply and fit, or supply the engine only?",
            answer:
              "Both options are fully available. We carry out complete supply and fit at our Grays, Essex workshop. We also supply engines to customers working with their own installer, and we can connect you with approved fitting partners in your area if local installation is the more convenient arrangement for you.",
          },
          {
            question: "How long does a BMW 320d engine replacement take?",
            answer:
              "A straightforward engine replacement typically takes 3–5 working days. A complete engine rebuild takes 5–10 working days depending on parts availability and the extent of work required during the rebuild. We confirm your specific timeframe at the point of booking and provide regular updates throughout.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 320d back on the road — properly rebuilt, honestly priced?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in Grays, Essex, and we serve BMW 320d owners right across the United Kingdom. Every generation of the 320d engine. Every failure pattern resolved correctly. Twenty-five years of proof.",
      }}
    />
  );
}

