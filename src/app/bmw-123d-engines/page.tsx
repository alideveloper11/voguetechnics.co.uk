import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 123d Engine Rebuild   Twin-Turbo Diesel Specialists in , Serving BMW Owners Across the UK",
  description:
    "BMW 123d engine rebuild, repair and replacement in  with UK-wide support. Vogue Technics   twin-turbo diesel specialists with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-123d-engines" },
};

export default function Bmw123dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
        { name: "BMW 123d Engines", href: "/bmw-123d-engines" },
      ]}
      badgeText="BMW 123d Specialists (UK)"
      h1Accent="BMW 123d Engine Rebuild"
      h1Rest="  Twin-Turbo Diesel Specialists in , Serving BMW Owners Across the UK"
      heroIntroParagraphs={[
        "The BMW 123d occupies a genuinely unique position in the 1 Series range. It isn't simply a more powerful version of the 120d   it's a fundamentally different engine proposition. The M47TU2D20 unit that powers it uses a twin-sequential turbocharger setup that delivers 204bhp from a 2.0 litre four-cylinder diesel, making it one of the most technically sophisticated small diesel engines BMW ever produced for the 1 Series. That sophistication is exactly what makes it so rewarding to drive   and exactly what makes it so important to choose the right specialist when something goes wrong.",
        "At Vogue Technics, based in , we carry out BMW 123d engine rebuilds, repairs, and replacements with the specific technical knowledge this engine genuinely demands. We understand the twin-turbo sequential system, the rear-mounted timing chain architecture, the EGR and swirl flap characteristics of the M47 family, and the failure patterns that develop on these engines as mileage climbs. Neither of the main competitors in this space demonstrates any real awareness of what makes the 123d mechanically distinct. We do.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 123d Engine",
          paragraphs: [
            "Most garages that claim to work on BMW diesels are thinking about the N47 or B47   the single-turbo units that power the 118d and 120d. The 123d's twin-sequential turbo system is a different proposition entirely. The primary turbo operates under sustained load at lower RPM, the secondary turbo comes in progressively as demand increases, and the interaction between the two requires a diagnostic approach that accounts for both units and the transition logic between them. Get that wrong at the diagnostic stage and you'll be replacing parts that don't need replacing while missing the actual problem.",
            "BMW 123d Twin-Turbo Diesel Specialists With Over 25 Years of Experience",
            "At Vogue Technics, we've been working on complex premium European diesels for over 25 years. The M47TU2D20's twin-sequential turbo architecture isn't something we had to research when the first 123d came through our workshop   it's something we've built genuine hands-on experience with over time. That depth of knowledge changes the quality of every diagnosis we make and every repair we carry out on this engine.",
            "Our reputation in  and across the UK has been built entirely on the results we deliver   because when we fix your 123d, it stays fixed.",
            "Transparent Pricing From a BMW 123d Engine Repair Specialist",
            "We understand that engine trouble on a car as specific as the 123d raises immediate financial concerns. Replacement parts for the twin-turbo system aren't cheap, and if a garage isn't certain what's actually failed, the cost of guesswork adds up quickly. At Vogue Technics, every customer receives a clear, itemised quote before any work begins. We diagnose accurately first, then quote precisely. No vague figures, no unexpected additions on collection day, no work carried out without your explicit approval.",
          ],
        },
      ]}
      finalCta={{
        heading: "Ready to get your BMW 123d running as it should again?",
        paragraph:
          "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We're based in  and serve BMW owners right across the United Kingdom. The 123d is a genuinely exceptional diesel   it deserves a specialist who genuinely understands it.",
      }}
    />
  );
}

