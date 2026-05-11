import { Metadata } from "next";
import BmwEngineModelPageClient from "@/components/bmw/BmwEngineModelPageClient";

export const metadata: Metadata = {
  title: "BMW 330d Engine Rebuild   Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 330d engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-330d-engines" },
};

export default function Bmw330dEnginesPage() {
  return (
    <BmwEngineModelPageClient
      breadcrumbs={[
        { name: "BMW Engines", href: "/bmw-engines" },
        { name: "BMW 3 Series", href: "/bmw-3-series-engines" },
        { name: "BMW 330d Engines", href: "/bmw-330d-engines" },
      ]}
      badgeText="BMW 330d Specialists (UK)"
      h1Accent="BMW 330d Engine Rebuild"
      h1Rest="  Expert Reconditioning, Repair & Replacement Across the UK"
      heroIntroParagraphs={[
        "If your BMW 330d has started letting you down   whether it's losing power, smoking under load, or simply refusing to start   you're in the right hands. At Vogue Technics, based in , we specialise in precision BMW engine work, and the 330d is one we know inside out. From a full BMW 330d engine rebuild to timing chain repairs, turbo replacements, and head gasket work, we deliver the kind of quality that keeps your car on the road for years to come   backed by over 25 years of hands-on experience.",
      ]}
      sections={[
        {
          title: "Why Vogue Technics Is the Right Choice for Your BMW 330d Engine",
          paragraphs: [
            "The 330d is a finely engineered machine. Its diesel powerplant   whether the N47, N57, or B57   demands specialist knowledge, not a general garage guessing their way through it. At Vogue Technics, BMW engines are our focus, not a sideline.",
            "Specialists Who Know the 330d Inside Out",
            "Every technician on our floor understands the specific failure patterns of the 330d's engine family. The N47's notorious timing chain wear, the N57's EGR tendencies, the head gasket vulnerabilities that creep up on higher-mileage cars   we've seen it all, diagnosed it all, and fixed it all. You won't be paying for someone's learning curve.",
            "Over 25 Years of Engine Expertise, Based in ",
            "Since we started, we've rebuilt and reconditioned thousands of engines for BMW owners right across the UK. Our reputation has grown entirely through word of mouth   because when we rebuild your engine, it performs the way it should. Drivers come to us from London, the Midlands, the North, and beyond, because they know the standard of work they'll get.",
            "Transparent Quotes   No Hidden Costs",
            "Engine work on a premium vehicle like the 330d can feel financially daunting. We get that. That's why every quote we provide is clear, itemised, and honest   no vague ballpark figures, no unexpected extras when you come to collect. Call us or fill in our online enquiry form and we'll get back to you with a straightforward price based on exactly what your engine needs.",
          ],
        },
        {
          title: "Our BMW 330d Engine Services   Everything Under One Roof",
          paragraphs: [
            "We offer a complete range of engine services for the BMW 330d, covering every common failure and every level of repair. Whatever your car needs, we have the tools, the parts, and the expertise to deliver it properly.",
            "BMW 330d Engine Rebuild",
            "A full BMW 330d engine rebuild is the gold-standard solution for high-mileage or significantly worn engines. We strip the unit completely, measure and inspect every component, replace anything that falls outside tolerance, and reassemble to factory specifications. The result is an engine that performs like new   at a fraction of the cost of a brand-new unit. If your 330d has covered well over 100,000 miles and you want it to run for another 100,000, a proper rebuild is the most cost-effective path forward.",
            "BMW 330d Engine Repair & Diagnostics",
            "Not every problem requires a full rebuild   and we won't recommend one unless it's genuinely needed. Our diagnostic process identifies the exact root cause of the issue, so you only pay for what's actually required. Oil leaks, bearing wear, sensor faults, valve damage   we handle all levels of BMW 330d engine repair with the same precision and care.",
            "BMW 330d Timing Chain Replacement & Repair",
            "Timing chain failure is one of the most well-documented issues on the N47-powered 330d. A worn or stretched chain doesn't always announce itself loudly   by the time it snaps, the damage is catastrophic. If you've noticed a rattling noise on cold start, or your car has covered significant mileage without a timing chain service, don't wait. We replace the full kit   chain, tensioners, guides, and sprockets   not just the chain itself. That's the only way to do it properly.",
            "BMW 330d Turbo Replacement & Repair",
            "Loss of power, a distinct whistle under acceleration, or excessive black smoke from the exhaust are all signs your turbocharger may be on its way out. We source quality replacement turbos for all 330d variants and fit them to manufacturer specifications, followed by full post-installation testing. If a repair is viable rather than a full replacement, we'll tell you   and price it accordingly.",
            "BMW 330d Head Gasket Replacement",
            "A blown head gasket on a 330d is serious, but it's far from a death sentence for the engine   if it's caught and dealt with promptly. White smoke from the exhaust, coolant disappearing without a visible leak, or the engine running hotter than usual are the warning signs. We replace head gaskets using OEM-grade components with the accuracy this job demands. Cut corners here and you'll be back within months. We don't cut corners.",
            "BMW 330d Engine Replacement & Engine Swap",
            "Sometimes replacement makes more sense than repair   particularly when multiple systems have failed or the cost of rebuilding outweighs the vehicle's value. We supply and fit quality reconditioned and low-mileage used BMW 330d engines sourced from trusted UK suppliers, each tested before installation. If you're considering a BMW 330d engine swap   fitting a newer or higher-spec unit into your existing car   we handle the full process, including mapping, mounts, ancillaries, and post-swap diagnostics.",
            "BMW 330d Engine Health Check",
            "Buying a used 330d and want to know what you're actually getting? Or perhaps you've noticed something's not quite right but can't put your finger on it? Our BMW 330d engine health check covers compression testing, full diagnostic scanning, oil analysis, and a thorough visual inspection. You'll receive an honest written report with clear recommendations   no upselling, no unnecessary alarm.",
          ],
        },
        {
          title: "UK-Wide Service, Fast Turnaround, and a Warranty You Can Rely On",
          paragraphs: [
            "We know how disruptive it is to be without your car   particularly if your 330d is your daily driver. That's why we work efficiently without compromising on quality.",
            "Engine Collection & Delivery Across the UK",
            "Based in  but serving the whole country. If travelling to  isn't practical, we offer a straightforward engine collection and delivery service. Send us your unit and we'll return it fully rebuilt, tested, and ready to fit   or we can connect you with our network of trusted approved fitters nationwide.",
            "Realistic Turnaround Times We Actually Stick To",
            "Most BMW 330d engine rebuilds are completed within 5–10 working days. Repairs and replacements are often faster. We give you a genuine timeframe at the point of booking   and we honour it.",
            "Written Warranty on All Engine Work",
            "Every rebuild, replacement, and major repair carried out at Vogue Technics comes with a written warranty. We stand behind every job because we know the standard to which it's been done.",
          ],
        },
      ]}
      faqs={{
        title: (
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 330d Engine Rebuild &amp; Repair</span>
          </>
        ),
        items: [
          {
            question: "How much does a BMW 330d engine rebuild cost in the UK?",
            answer:
              "Rebuild costs vary depending on engine variant and the extent of wear found during inspection. We provide this service to you at a rate 40% lower than the main dealer. Contact us for an accurate, no-obligation quote based on your specific vehicle and mileage.",
          },
          {
            question: "Is it worth rebuilding a BMW 330d engine?",
            answer:
              "In most cases, absolutely   especially if the rest of the car is in good condition. A quality rebuild extends the vehicle's life considerably and costs significantly less than sourcing a replacement car at this level.",
          },
          {
            question: "What are the most common BMW 330d engine problems?",
            answer:
              "The most frequently seen issues are timing chain wear on N47 engines, turbocharger failure, head gasket failure, and EGR-related problems on N57 units. Early diagnosis is always the most cost-effective approach.",
          },
          {
            question: "Do you offer a warranty on rebuilt BMW 330d engines?",
            answer:
              "Yes   all rebuilt and replacement engines supplied or fitted by Vogue Technics come with a written warranty. Full terms are confirmed clearly at the point of booking.",
          },
          {
            question: "Can you fit the engine as well as supply it?",
            answer:
              "Yes. We offer full supply and fit at our  workshop, and can also arrange installation through our approved fitter network if you're based elsewhere in the UK.",
          },
        ],
      }}
      finalCta={{
        heading: "Ready to get your BMW 330d back to its best?",
        paragraph:
          "Call Vogue Technics today or submit your details through our online enquiry form for a fast, honest, no-obligation quote. We're based in , and work with BMW 330d owners right across the United Kingdom. Don't settle for a general garage   trust the specialists who know your engine.",
      }}
    />
  );
}

