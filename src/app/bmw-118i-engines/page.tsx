import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 118i Engine Rebuild   Petrol Engine Specialists Based in , Serving the Whole of the UK",
  description:
    "BMW 118i engine rebuild, repair and replacement in  with UK-wide support. Vogue Technics   petrol engine specialists for N13/B38 platforms with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-118i-engines" },
};

export default function Bmw118iEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 118i Engines", href: "/bmw-118i-engines" },
      ]}
      badgeText="BMW 118i Specialists (UK)"
      h1Accent="BMW 118i Engine Rebuild"
      h1Rest="  Petrol Engine Specialists Based in , Serving the Whole of the UK"
      heroIntroParagraphs={[
        "The BMW 118i is a petrol-engined car that genuinely rewards proper maintenance   smooth, responsive, and built to cover serious miles when the engine is looked after correctly. But when something goes wrong, the turbocharged petrol units in the 118i range have their own specific failure patterns that a generalist garage won't necessarily recognise until after they've already made things worse.",
        "At Vogue Technics, based in , we carry out BMW 118i engine rebuilds, repairs, and replacements with the technical depth these engines actually require. Whether your car runs the N13 turbocharged petrol from the earlier F20 generation or the three-cylinder B38 from the LCI and F40 models, we know the platform, we know the common failure points, and we know how to fix them so they stay fixed.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 118i Engine",
          paragraphs: [
            "The 118i's petrol engines are more sophisticated than they appear from the outside. The N13's timing chain tensioner weakness, the B38's susceptibility to carbon buildup on the intake valves, and the PCV system issues that affect the later three-cylinder variants   these aren't problems you want a garage learning about on your car. They're problems you want someone who already knows them inside out.",
            "BMW 118i Petrol Engine Specialists With Over 25 Years of Experience",
            "At Vogue Technics, premium European petrol engines are a core part of what we do every day. Our technicians understand the differences between the N13 B16 A and the B38 B15 M0 at a component level   not just the engine codes, but the specific wear patterns, the known service bulletin issues, and the correct repair procedures for each generation. Over 25 years, we've built a reputation in  and across the UK not through advertising, but through engines that genuinely perform after they leave our workshop.",
            "BMW 118i Engine Repair Specialist   Clear Quotes, No Nonsense",
            "Engine trouble on a premium petrol car can feel financially daunting, particularly when you're not sure what you're actually dealing with. We remove that uncertainty immediately. Every customer receives a clear, itemised quote before any work begins   no vague figures, no inflated invoices waiting on collection day. If something unexpected comes to light mid-repair, we call you before we act. That's just how we operate.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 118i running properly again?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in  and proudly serve BMW owners right across the United Kingdom. Your 118i deserves more than a guess   trust the specialists who know exactly what they're doing.",
      }}
    />
  );
}

