import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 120i Engine Rebuild — Petrol Engine Specialists in Grays, Serving BMW Owners Across the UK",
  description:
    "BMW 120i engine rebuild, repair and replacement in Grays with UK-wide support. Vogue Technics — petrol engine specialists for N13/B48 platforms with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-120i-engines" },
};

export default function Bmw120iEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 120i Engines", href: "/bmw-120i-engines" },
      ]}
      badgeText="BMW 120i Specialists (UK)"
      h1Accent="BMW 120i Engine Rebuild"
      h1Rest="— Petrol Engine Specialists in Grays, Serving BMW Owners Across the UK"
      heroIntroParagraphs={[
        "The BMW 120i has always sat at the more desirable end of the 1 Series petrol range — turbocharged, responsive, and genuinely enjoyable to drive when everything is working as it should. But the engines that power the 120i across its various generations each carry their own documented weaknesses, and when something goes wrong, the difference between a repair done properly and one done quickly becomes very apparent, very fast.",
        "At Vogue Technics, based in Grays, we carry out BMW 120i engine rebuilds, repairs, and replacements with genuine technical depth across all generations — from the N13-engined F20 and F21 models through to the B48-powered LCI and F40 variants. We know these engines. We know what fails on them, why it fails, and exactly what a correct repair involves.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 120i Engine",
          paragraphs: [
            "The 120i's petrol engines are more complex than their smooth power delivery suggests. The N13's high-pressure fuel pump failures and timing chain tensioner weakness, the VANOS solenoid wear that affects variable valve timing across multiple generations, and the direct injection carbon buildup that accumulates on intake valves over time — these are platform-specific issues that a generalist workshop will often misdiagnose or address incompletely. We don't.",
            "BMW 120i Petrol Engine Specialists With Over 25 Years of Experience",
            "At Vogue Technics, premium European petrol engines form a core part of our daily workshop activity. Our technicians understand the N13 B20 A and B20 B at component level — the HPFP design weaknesses, the tensioner failure pattern, and the VANOS behaviour that changes as solenoids age. They equally understand where the B48 generation improved on its predecessor and where it introduced new considerations of its own. That generation-specific knowledge directly affects the quality and longevity of every repair we carry out.",
            "Over 25 years, our reputation in Grays and across the UK has grown entirely through word of mouth — because engines that leave our workshop perform as they should and keep performing.",
            "Transparent Pricing From a BMW 120i Engine Repair Specialist",
            "Engine trouble on a premium petrol car brings enough stress on its own — the last thing you need is a garage that adds financial uncertainty to the situation. At Vogue Technics, every customer receives a clear, itemised quote before a single bolt is touched. We explain exactly what needs doing and why, and if anything unexpected comes to light during the work, we call you before we proceed. No vague estimates, no inflated collection-day invoices, no excuses.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 120i running as it should again?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in Grays and serve BMW owners right across the United Kingdom. The 120i deserves more than a guess and a crossed-finger — trust the specialists who know it properly.",
      }}
    />
  );
}

