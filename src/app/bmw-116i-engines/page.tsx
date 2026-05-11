import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 116i Engine Rebuild   Expert Repairs, Rebuilds & Replacements in , UK",
  description:
    "BMW 116i engine rebuild, repair and replacement in  with UK-wide support. Vogue Technics   BMW engine specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-116i-engines" },
};

export default function Bmw116iEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 116i Engines", href: "/bmw-116i-engines" },
      ]}
      badgeText="BMW 116i Specialists (UK)"
      h1Accent="BMW 116i Engine Rebuild"
      h1Rest="  Expert Repairs, Rebuilds & Replacements in , UK"
      heroIntroParagraphs={[
        "If your BMW 116i is losing power, burning oil, or has completely given up   you're in the right place. At Vogue Technics, based in , we specialise in BMW engine work, and the 116i is one we know inside out. Whether you need a full BMW 116i engine rebuild, a reconditioned unit, or a targeted repair, our technicians deliver results that last   backed by over 25 years of hands-on experience serving drivers across the UK.",
        "Don't gamble with a generic garage. Trust the specialists.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 116i Engine",
          paragraphs: [
            "The BMW 116i is a precision-engineered machine, and it deserves precision-engineered care. From the N13 timing chain issues in early F20 models to turbo wear on the B38-powered LCI variants, each generation of the 116i carries its own set of known vulnerabilities. We've worked through all of them   hundreds of times.",
            "BMW 116i Engine Specialists, Not Generalists",
            "We don't split our attention between dozens of makes and models. Our workshop in  focuses specifically on premium European engines, and BMW's 116i range sits firmly in our wheelhouse. Every technician on our team understands the chassis differences between the E87, F20, F21, and F40   and that knowledge directly affects the quality of your repair.",
            "25 Years of Engine Experience Behind Every Job",
            "Since we opened our doors, we've rebuilt and repaired thousands of engines for BMW owners across the UK. Our reputation hasn't been built on marketing   it's been built on engines that run properly after they leave our workshop. When we hand your car back, we expect it to stay fixed.",
            "Transparent Quotes, No Hidden Costs",
            "Engine work on a BMW can feel intimidating, particularly when you're not sure what you're dealing with. We give every customer a clear, itemised quote before any work begins. No vague estimates. No surprise invoices on collection day. Call us or fill in our enquiry form and we'll get back to you promptly.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 116i back where it belongs   on the road?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in  and proudly serve BMW owners across the whole of the United Kingdom. Don't trust your 116i to just anyone   trust the specialists who know it properly.",
      }}
    />
  );
}

