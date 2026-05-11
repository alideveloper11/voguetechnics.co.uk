import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 118d Engine Rebuild   Diesel Engine Specialists Serving  & the Whole of the UK",
  description:
    "BMW 118d engine rebuild, repair and replacement in  with UK-wide support. Vogue Technics   BMW diesel specialists for N47/B47 engines with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-118d-engines" },
};

export default function Bmw118dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 118d Engines", href: "/bmw-118d-engines" },
      ]}
      badgeText="BMW 118d Specialists (UK)"
      h1Accent="BMW 118d Engine Rebuild"
      h1Rest="  Diesel Engine Specialists Serving  & the Whole of the UK"
      heroIntroParagraphs={[
        "The BMW 118d is a genuinely capable diesel   refined, efficient, and built to cover serious mileage when it's looked after properly. But when something goes wrong with the engine, the cost and complexity of getting it right can catch owners completely off guard. At Vogue Technics, based in , we handle BMW 118d engine rebuilds, repairs, and replacements every single week. We know the N47 and B47 diesel engines in detail   their strengths, their known failure points, and exactly what it takes to fix them properly and make them last.",
        "If your 118d is smoking, losing power, rattling at startup, or has simply stopped running, you've found the right workshop.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 118d Engine",
          paragraphs: [
            "The 118d's diesel engines   particularly the N47 series   have a reputation in the trade that most owners only discover once something has already gone wrong. Timing chain failures, EGR issues, swirl flap problems, and turbo wear are all well-documented on these units. Fixing them properly requires specific knowledge, specific tooling, and genuine experience with the platform. A general garage simply isn't equipped for this work.",
            "BMW 118d Diesel Specialists With Over 25 Years of Experience",
            "At Vogue Technics, premium European diesel engines are our daily work   not an occasional job we take on between other things. Our technicians understand the differences between the N47 D20 C and B47 D20 A at a component level, and that depth of knowledge directly affects the quality and longevity of every repair we carry out. We've been doing this for over 25 years, and our track record in  and across the UK speaks for itself.",
            "BMW 118d Engine Repair Specialist   Honest Quotes, No Surprises",
            "We know that engine trouble on a premium diesel can feel financially daunting. That's precisely why we operate on complete transparency. You'll receive a clear, itemised quote before we touch anything   no vague estimates, no inflated invoices waiting for you on collection day. Call us, or use our online enquiry form, and we'll come back to you promptly with a straight answer.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 118d back on the road properly?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in  and serve BMW owners right across the United Kingdom. Don't settle for guesswork on a diesel this capable   trust the specialists who know it properly.",
      }}
    />
  );
}

