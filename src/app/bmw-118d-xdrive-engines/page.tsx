import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 118d xDrive Engine Rebuild — Four-Wheel-Drive Diesel Specialists in Grays, UK",
  description:
    "BMW 118d xDrive engine rebuild, repair and replacement in Grays with UK-wide support. Vogue Technics — specialists in xDrive diesel platforms with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-118d-xdrive-engines" },
};

export default function Bmw118dXdriveEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 118d xDrive Engines", href: "/bmw-118d-xdrive-engines" },
      ]}
      badgeText="BMW 118d xDrive Specialists (UK)"
      h1Accent="BMW 118d xDrive Engine Rebuild"
      h1Rest="— Four-Wheel-Drive Diesel Specialists in Grays, UK"
      heroIntroParagraphs={[
        "The BMW 118d xDrive is a different proposition to the standard rear-wheel-drive 118d — and that difference matters enormously when the engine needs serious work. The xDrive all-wheel-drive system adds a layer of mechanical complexity that most general garages simply aren't set up to handle properly. At Vogue Technics, based in Grays, we carry out BMW 118d xDrive engine rebuilds, repairs, and replacements with full understanding of how the xDrive drivetrain interacts with the engine and ancillary systems throughout the process.",
        "Whether your 118d xDrive has suffered a timing chain failure, a blown head gasket, turbo wear, or progressive internal damage from high mileage, we have the experience, the tooling, and the specific knowledge to fix it properly and back the work with a written warranty.",
      ]}
      sections={[
        {
          title: "Why Choose Vogue Technics for Your BMW 118d xDrive Engine",
          paragraphs: [
            "Owning an xDrive variant means your engine work needs to be carried out by someone who genuinely understands the platform — not just the engine code, but how the four-wheel-drive system affects removal, installation, ancillary routing, and post-repair calibration. Get that wrong and you'll be back within months with a different problem.",
            "xDrive-Competent BMW Engine Specialists With 25 Years of Experience",
            "At Vogue Technics, we've been working on premium European diesels for over 25 years. The xDrive system on the F20 and F21 118d isn't an obstacle for us — it's something we work around confidently every time. Our technicians understand the N47 and B47 engine families at component level, and they understand how those units sit within the xDrive configuration. That combination of diesel expertise and drivetrain awareness is what separates a proper repair from a temporary fix.",
            "BMW 118d xDrive Engine Repair Specialist — Straight Talking, Fair Pricing",
            "We don't pad quotes or work up invoices with unnecessary labour lines. Every customer gets a clear, itemised breakdown before any work begins — no vague estimates, no unpleasant surprises when you come to collect. If the diagnosis reveals something unexpected mid-job, we call you first. It's a straightforward way of working, and it's why our customers in Grays and across the UK come back to us when they need engine work done again.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 118d xDrive back on the road — properly this time?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in Grays and serve BMW owners right across the United Kingdom. The xDrive system deserves a specialist who actually understands it — and that's exactly what we are.",
      }}
    />
  );
}

