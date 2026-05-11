import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 120d Engine Rebuild   Diesel Engine Specialists in , Serving BMW Owners Across the UK",
  description:
    "BMW 120d engine rebuild, repair and replacement in  with UK-wide support. Vogue Technics   diesel specialists for N47/B47 platforms with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-120d-engines" },
};

export default function Bmw120dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 120d Engines", href: "/bmw-120d-engines" },
      ]}
      badgeText="BMW 120d Specialists (UK)"
      h1Accent="BMW 120d Engine Rebuild"
      h1Rest="  Diesel Engine Specialists in , Serving BMW Owners Across the UK"
      heroIntroParagraphs={[
        "The BMW 120d has always been one of the more serious choices in the 1 Series range   a proper diesel with genuine performance credentials and the ability to cover extraordinary mileage when it's maintained correctly. But when the engine develops a problem, whether that's a timing chain failure, a blown head gasket, or progressive internal wear that's crept up over the years, you need a specialist who understands these engines at a level that goes well beyond basic diagnostics.",
        "At Vogue Technics, based in , we carry out BMW 120d engine rebuilds, repairs, and replacements across every generation of the model   from the E87 and F20 through to the F40 with its B47 diesel and 48V mild hybrid system. We know the N47's rear-mounted timing chain design, we understand the MHEV electrical considerations on the latest F40 variants, and we approach every job with the technical depth these engines genuinely demand.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 120d Engine",
          paragraphs: [
            "The 120d has been sold across multiple generations, each with different engine codes and different failure characteristics. What works as a diagnostic approach on an N47 D20 C doesn't necessarily apply to a B47 D20 A   and the F40's mild hybrid integration adds a layer of complexity that most general workshops simply aren't equipped to handle confidently. We are.",
            "BMW 120d Diesel Engine Specialists With Over 25 Years of Experience",
            "At Vogue Technics, premium European diesel engines represent the core of what our workshop does every single day. Our technicians work across the full 120d engine family   N47, B47, and B57   and understand each unit's specific characteristics, documented failure patterns, and correct repair procedures at a component level. Over 25 years, our reputation in  and across the UK has been built entirely through the quality of the work we return to customers. When we rebuild your engine, it leaves our workshop better than it arrived.",
            "Transparent Pricing From a BMW 120d Engine Repair Specialist",
            "Engine work on a premium diesel already carries a degree of financial anxiety   particularly if you've had a previous bad experience with a garage that delivered surprises on collection day. We operate differently. Every customer receives a clear, itemised quote before we start anything. If something unexpected comes to light during the job, we contact you before we act. No vague estimates, no inflated invoices, no excuses.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 120d back where it belongs?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in  and serve BMW owners right across the United Kingdom. The 120d is a serious diesel   it deserves a specialist who treats it that way.",
      }}
    />
  );
}

