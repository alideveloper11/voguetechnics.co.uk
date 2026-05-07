import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 120d xDrive Engine Rebuild — All-Wheel-Drive Diesel Specialists in Grays, Serving the Whole of the UK",
  description:
    "BMW 120d xDrive engine rebuild, repair and replacement in Grays with UK-wide support. Vogue Technics — xDrive diesel specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-120d-xdrive-engines" },
};

export default function Bmw120dXdriveEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 120d xDrive Engines", href: "/bmw-120d-xdrive-engines" },
      ]}
      badgeText="BMW 120d xDrive Specialists (UK)"
      h1Accent="BMW 120d xDrive Engine Rebuild"
      h1Rest="— All-Wheel-Drive Diesel Specialists in Grays, Serving the Whole of the UK"
      heroIntroParagraphs={[
        "The BMW 120d xDrive is a genuinely capable machine — a performance-oriented diesel with all-wheel-drive grip and the kind of pulling power that makes it a serious everyday car. But when the engine develops a problem, the xDrive configuration changes the nature of the repair significantly. Removing and reinstalling an engine in an xDrive model involves the transfer case, prop shaft disconnection, drivetrain calibration, and chassis-specific mount considerations that simply don't apply to the rear-wheel-drive 120d. Most general garages don't account for any of that — and that's where things go wrong.",
        "At Vogue Technics, based in Grays, we carry out BMW 120d xDrive engine rebuilds, repairs, and replacements with full understanding of what the all-wheel-drive system means for every stage of the job. Whether your car runs the N47 diesel from the earlier F20 generation or the updated B47 from the LCI models, we know these engines and this drivetrain combination in genuine depth.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 120d xDrive Engine",
          paragraphs: [
            "The xDrive 120d isn't just a 120d with different badges. The all-wheel-drive system changes the mechanical landscape around the engine in ways that matter enormously when you're carrying out serious engine work. Getting the engine out cleanly, protecting the transfer case and drivetrain components during the process, and ensuring everything is correctly calibrated and coded on reassembly — these aren't afterthoughts. They're central to doing the job properly.",
            "BMW 120d xDrive Engine Specialist With Over 25 Years of Experience",
            "At Vogue Technics, premium European diesel engines are our daily work — and the xDrive variants are ones we approach with the full respect their complexity demands. Our technicians understand the N47 D20 A, N47 D20 TU, N47 D20 C, and B47 D20 A at component level, and they understand how those engine families sit within the xDrive drivetrain configuration. That combination of diesel expertise and drivetrain awareness is what separates a repair that lasts from one that creates new problems within months.",
            "Over 25 years, our reputation in Grays and across the UK has been built entirely on the quality of the work we return. When your 120d xDrive leaves our workshop, it leaves properly fixed.",
            "Transparent Pricing, Itemised Quotes, No Hidden Costs",
            "Engine work on an xDrive variant carries genuine additional labour over the standard rear-wheel-drive 120d, and we're completely upfront about that from the outset. Every customer receives a clear, itemised quote before we begin — covering both the engine work itself and the drivetrain procedures involved in the xDrive configuration. No vague estimates, no scope creep, no surprises. If anything unexpected comes to light mid-job, we call you before we act on it.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 120d xDrive back on the road — handled properly from start to finish?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in Grays and serve BMW owners right across the United Kingdom. The xDrive system deserves a workshop that genuinely understands it — and that's exactly what we are.",
      }}
    />
  );
}

