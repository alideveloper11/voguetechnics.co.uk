import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 116d Engine Rebuild   Specialist Repairs, Replacements & Reconditioning Across the UK",
  description:
    "BMW 116d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialists in N47/B47/B37 diesel engines with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-116d-engines" },
};

export default function Bmw116dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 116d Engines", href: "/bmw-116d-engines" },
      ]}
      badgeText="BMW 116d Specialists (UK)"
      h1Accent="BMW 116d Engine Rebuild"
      h1Rest="  Specialist Repairs, Replacements & Reconditioning Across the UK"
      heroIntroParagraphs={[
        "The BMW 116d is a genuinely accomplished diesel hatchback   efficient, well-engineered, and built with the kind of rear-wheel-drive character that makes the 1 Series genuinely rewarding to drive in everyday conditions. When the engine develops a serious fault, that character becomes entirely irrelevant and the decisions that follow carry real financial and practical weight. At Vogue Technics, based in , we deal with exactly this situation regularly   and we resolve it with the technical precision and honest communication that 25 years of specialist BMW engine work produces.",
        "We work across the full BMW 116d engine range   covering the N47D20A, N47D20C, N47D20B, N47D20T, B47D20A, B47D20B, N47D16U0, and B37D15U0 engine codes across the E87, E81, E82, E88, F20, and F21 generations. Whether you are dealing with the well-documented N47 timing chain tensioner fault, EGR system failure on a B47D20A, swirl flap ingestion damage on an N47D20C, DPF regeneration failure on a B47 variant, or an engine that has sustained damage beyond targeted repair   we have the right solution, the correct technical knowledge for your specific engine code, and the experience to deliver results that last.",
      ]}
      sections={[
        {
          title: "Why BMW 116d Owners Across the UK Choose Vogue Technics",
          paragraphs: [
            "Choosing the right specialist when your BMW 116d engine develops a serious fault is the most important decision in the entire repair process. The wrong choice   a generalist workshop without specific N47 or B47 knowledge, or an online platform that treats every diesel engine as interchangeable   frequently produces a misdiagnosis, an inappropriate repair approach, or a job that returns within months. None of that happens here.",
            "BMW Diesel Engine Specialists With Engine-Code-Level Knowledge",
            "Every technician at Vogue Technics works on BMW diesel engines as their primary discipline. We understand the specific failure characteristics of each engine code in the 116d range in genuine, applied depth. The N47 family's timing chain tensioner vulnerability is not just something we are aware of   it is something we have diagnosed and resolved on hundreds of occasions across every N47 variant. The B47's DPF regeneration sensitivities, the N47D20C's swirl flap failure mode, the injector calibration requirements on F21-specific applications, the chain guide wear patterns on the B37D15U0 three-cylinder   we know each of these faults precisely and we apply the correct solution for the specific engine code every time, without substitution.",
            "25 Years of BMW Engine Work   A Reputation That Speaks for Itself",
            "We have been rebuilding, repairing, and replacing BMW engines for customers across the United Kingdom for over 25 years. Our reputation in  and nationally has never been built through advertising campaigns, marketplace listings, or comparison platforms. It has been built through the consistent quality of work we deliver and the customers who return to us   and who recommend us to other BMW owners without being asked. When we resolve a BMW 116d engine fault, the resolution holds.",
            "Transparent, Itemised Pricing Before Any Work Begins",
            "Engine work on a premium diesel carries genuine financial weight. We remove every element of uncertainty around that by providing a fully itemised, transparent quote before any work commences. You know precisely what the job involves, exactly why each element is included, and what the final figure will be before you commit to proceeding. No revisions mid-job, no additions on collection day, no financial surprises at any stage. Call us directly or submit an online enquiry to receive your no-obligation quote today.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 116d back on the road performing exactly as it should?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We are based in , and we serve BMW 116d owners right across the United Kingdom   across every engine code, every generation, and every type of fault. When your diesel engine needs a genuine specialist, trust the team that has been delivering exactly that for over 25 years.",
      }}
    />
  );
}

