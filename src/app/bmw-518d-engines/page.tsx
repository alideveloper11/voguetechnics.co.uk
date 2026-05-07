import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 518d Engine Rebuild — Specialist Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 518d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW diesel engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-518d-engines" },
};

export default function Bmw518dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 5 Series", href: "/bmw-5-series-engines" },
        { name: "BMW 518d Engines", href: "/bmw-518d-engines" },
      ]}
      badgeText="BMW 518d Specialists (UK)"
      h1Accent="BMW 518d Engine Rebuild"
      h1Rest="— Specialist Reconditioning, Repair & Replacement Across the UK"
      heroIntroParagraphs={[
        "The BMW 518d occupies a specific place in the 5 Series range — the entry-level diesel, chosen by owners who want BMW quality and refinement without the running costs of a larger engine. What many 518d owners discover, sometimes painfully, is that the engine problems this car develops are directly connected to how it's typically used. Short commutes, urban journeys, frequent cold starts — this is the 518d's natural habitat, and it's precisely this usage pattern that creates the specific vulnerabilities that catch owners off guard.",
        "The N47D20C fitted to E60 and F10 518d models carries its timing chain at the rear of the engine — already a known concern across the 5 Series diesel range — but on the 518d specifically, frequent cold starts and short journeys mean the chain assembly never properly warms through between uses, accelerating wear beyond what the mileage alone would suggest. The DPF, similarly, struggles to complete passive regeneration cycles on short urban runs at 143bhp — making the 518d the most DPF-prone variant in the entire 5 Series diesel lineup.",
        "At Vogue Technics, based in Grays, Essex, we understand the 518d's specific challenges in a way that comes from 25 years of working on BMW diesel engines across every generation. Whether you need a full BMW 518d engine rebuild, a quality reconditioned replacement, or targeted repair work, you've found the specialist who genuinely knows this engine.",
      ]}
      sections={[
        {
          title: "Why the BMW 518d Deserves Proper Specialist Attention — and Why Vogue Technics Provides It",
          paragraphs: [
            "We Know the 518d's Engine Codes and Its Failure Patterns Accurately",
            "The BMW 518d has run across three generations — E60/E61, F10/F11, and G30/G31 — with three distinct engine codes: the N47D20C in E60 and F10 variants, the B47D20A in later F10 and early G30 models, and the B47D20B in current G30/G31 518d cars. These are the only correct engine codes for this model. We mention this because some suppliers list six-cylinder diesel codes and even petrol engine codes against the 518d — errors that lead to wrong parts, incorrect rebuilds, and wasted money. Getting the engine code right before any work begins is the first and most fundamental test of whether a workshop actually knows what they're doing.",
            "25 Years of BMW Diesel Engine Expertise, Based in Grays, Essex",
            "Our workshop in Grays has been working on BMW diesel engines for over 25 years — across every 5 Series generation, every engine family, and every common failure pattern this model produces. Our reputation across the UK has been built entirely through the quality of what we deliver. BMW 518d owners travel to us from London, the South East, the Midlands, and further afield because they know they'll receive an honest assessment and work that genuinely holds up.",
            "Transparent, Itemised Pricing — Before Anything Begins",
            "The 518d is an entry-level 5 Series, and owners are often weighing up whether the repair cost makes genuine financial sense. We respect that entirely. Every quote we provide is fully itemised — parts, labour, and any ancillary work — before a single component is removed. No vague estimates, no additions at collection. Call us or submit an online enquiry for a clear, honest figure you can make a real decision around.",
          ],
        },
        {
          title: "Our BMW 518d Engine Services — Every Problem, Done Properly",
          paragraphs: [
            "BMW 518d Engine Rebuild",
            "A full BMW 518d engine rebuild makes the most sense when internal wear has progressed across multiple components — when targeted repairs won't restore the reliability and performance you need from the car long-term. We strip the engine completely — whether it's the N47D20C or B47D20A — measure every internal component against BMW's factory tolerances, replace what falls short, and reassemble with precision.",
            "For F10 518d owners whose cars are now well into six-figure mileage, a quality rebuild frequently adds several more years of reliable daily use at a cost that makes clear financial sense against buying a replacement vehicle.",
            "BMW 518d Engine Repair & Diagnostic",
            "Our BMW 518d engine diagnostic process combines professional electronic scanning with physical inspection of the specific components most prone to failure on this engine — timing chain assembly condition, EGR system integrity, DPF status, injector performance, and turbocharger health. We find the actual root cause before recommending anything. You pay for what the engine genuinely needs — nothing beyond that.",
            "BMW 518d Engine Replacement",
            "When damage is too extensive for a cost-effective rebuild, a quality BMW 518d engine replacement is the sensible next step. We source reconditioned and low-mileage used 518d engines — covering N47D20C, B47D20A, and B47D20B codes across E60, F10, and G30 variants — from trusted UK suppliers. Every unit is inspected before installation, tested after fitting, and backed by a written warranty.",
            "BMW 518d Engine Swap",
            "Whether you're fitting a later B47 unit into an older F10 shell or making any other engine configuration change, we handle the complete BMW 518d engine swap process from start to finish — ECU remapping where required, mount compatibility checks, ancillary integration, and full post-swap diagnostics before the car goes anywhere near a road.",
          ],
        },
        {
          title: "Targeted Repairs — Timing Chain, Turbo, Head Gasket & More",
          paragraphs: [
            "BMW 518d Timing Chain Replacement & Repair",
            "For F10 518d owners running the N47D20C engine, the timing chain is the most critical component to address — and on the 518d specifically, the risk is heightened beyond what the mileage alone indicates. The N47's chain sits at the rear of the engine, making replacement significantly more involved than most owners expect. More importantly, the 518d's typical usage profile — short urban journeys with frequent cold starts — means the chain assembly spends a disproportionate amount of its life operating before the oil has fully circulated and reached working temperature.",
            "The result is that timing chain wear on a 518d can develop at 70,000 miles in conditions where an equivalent 530d driven on longer motorway runs might still be perfectly sound at 120,000. The warning rattle on cold start is the sign — faint initially, disappearing as the engine warms. That disappearing rattle is the most dangerous sign of all, because it gives owners false reassurance until the damage is severe.",
            "We replace the complete timing chain assembly as a full kit — chain, tensioners, guides, and sprockets together. Nothing partial, nothing half-measured.",
            "BMW 518d Turbo Replacement & Turbocharger Repair",
            "The 518d runs a single turbocharger — simpler than the twin-turbo systems on higher-spec 5 Series variants, but no less vulnerable to accelerated wear when oil changes are overdue or when the car has been used predominantly on short journeys where the oil never fully reaches operating temperature.",
            "Symptoms of turbocharger deterioration on the 518d include hesitation under load, a slight whistle at certain engine speeds, gradual power reduction, or smoke on acceleration. We source quality replacement turbochargers for all 518d engine variants and fit them to manufacturer specifications, with full post-installation load testing before the car leaves. Where repair is viable over replacement, we'll give you both options with an honest assessment of likely longevity.",
            "BMW 518d Head Gasket Replacement",
            "Head gasket failure on the 518d tends to develop gradually rather than dramatically — coolant level dropping without an obvious external source, faint white smoke on cold start that clears quickly, or an engine temperature that edges fractionally above its established norm. On higher-mileage N47D20C units that have spent their lives on short urban journeys, this is a failure pattern we see with real regularity.",
            "We replace BMW 518d head gaskets using OEM-grade components, with the precision and care this repair demands. A poorly executed head gasket replacement on a diesel engine will not hold reliably under compression. Ours do — because we carry out the repair to a standard we're prepared to warrant in writing.",
            "BMW 518d Timing Belt Replacement & Engine Health Check",
            "Certain 518d configurations incorporate auxiliary belt-driven systems that require periodic inspection and replacement. A belt failure on a diesel engine produces immediate and severe internal damage with no warning. We carry the appropriate kits for all applicable 518d configurations and carry out replacements strictly within BMW's recommended service intervals.",
            "Not certain what your 518d engine actually needs? Our BMW 518d engine health check covers compression testing across all four cylinders, full electronic diagnostic scanning, DPF status assessment, oil condition analysis, EGR system inspection, and a detailed physical examination of all accessible engine components. You receive a written report with honest, clear findings — recommendations based entirely on what we actually find, written in plain language that makes genuine sense to a car owner.",
          ],
        },
        {
          title: "UK-Wide Coverage, Dependable Turnaround & Warranty-Backed Work",
          paragraphs: [
            "Engine Collection & Delivery Across the UK",
            "Our workshop is in Grays, Essex — but we work regularly with 518d owners from every part of the country. Our UK-wide engine collection and delivery service removes any geographical barrier. Send your unit from anywhere in Britain and we'll return it fully rebuilt and tested, or arrange professional fitting through our network of approved installers nationwide.",
            "Turnaround Times We Commit to and Consistently Honour",
            "A full BMW 518d engine rebuild typically takes between 5 and 10 working days depending on internal condition found during stripdown and parts availability. Targeted repairs and engine replacements are generally completed more quickly. We give you a genuine, realistic timeframe at booking — and we deliver against it every time.",
            "Written Warranty on Every Engine Job",
            "Every rebuild, replacement, and significant repair at Vogue Technics is backed by a written warranty. We stand behind every job completely — because we know precisely the standard to which it has been completed.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 518d Engine Rebuild &amp; Repair</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 518d engine rebuild cost in the UK?",
            answer:
              "Cost depends on the engine code — N47D20C, B47D20A, or B47D20B — and the internal condition found during our initial stripdown. We provide this service to you at a rate 40% lower than the main dealer. Contact Vogue Technics for an accurate, no-obligation quote specific to your generation, engine code, and mileage.",
          },
          {
            question: "Why is the 518d timing chain issue worse than on the 520d?",
            answer:
              "The 518d's lower power output means it's predominantly used on shorter, more urban journeys than higher-spec 5 Series variants. Frequent cold starts combined with short journey distances mean the N47's timing chain assembly repeatedly operates before reaching full working temperature — accelerating wear faster than mileage alone suggests. A 518d with 80,000 miles of urban use can show chain wear equivalent to a 520d at 120,000 miles of mixed driving.",
          },
          {
            question: "What are the most common BMW 518d engine problems?",
            answer:
              "The most frequently seen issues are N47 timing chain failure, DPF blockage from short-trip urban driving, EGR cooler faults, turbocharger wear, and head gasket failure on higher-mileage N47D20C units. The DPF issue is particularly common on the 518d compared to other 5 Series diesels — the lower power output makes passive regeneration harder to complete on typical urban journeys.",
          },
          {
            question: "Do you cover all 518d generations — E60, F10, and G30?",
            answer:
              "Yes — we work across all three generations, all three engine codes (N47D20C, B47D20A, B47D20B), both saloon and estate body styles.",
          },
          {
            question: "Can you supply and fit a replacement engine as well as rebuild my existing one?",
            answer:
              "Both services are available at our Grays, Essex workshop. We can also arrange professional installation through our approved UK fitter network if you're based elsewhere in the country.",
          },
          {
            question: "How long does a BMW 518d engine replacement take?",
            answer:
              "A straightforward replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on internal condition and parts required. We confirm your exact timeframe at booking and hold to it.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 518d running reliably again?",
        paragraph:
          "Call Vogue Technics today or use our online enquiry form for a fast, honest, no-obligation quote. We're based in Grays, Essex, and we work with BMW 518d owners right across the United Kingdom. This is a car worth looking after properly — and we're the team who knows exactly how to do it.",
      }}
    />
  );
}

