"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_roundel_clip_7s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_7s)">
        <rect x="4" y="4" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="32" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="4" width="28" height="28" fill="#f8fafc" />
        <rect x="4" y="32" width="28" height="28" fill="#f8fafc" />
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0b0f19" strokeWidth="6" opacity="0.65" />
      <text
        x="32"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontWeight="900"
        fill="#f8fafc"
        fontFamily="ui-sans-serif, system-ui"
      >
        BMW
      </text>
    </svg>
  );
}

const findYourBmwCards = [
  { title: "BMW 730D Engines", href: "/bmw-730d-engines" },
  { title: "BMW 730d xDrive Engines", href: "/bmw-730d-xdrive-engines" },
  { title: "BMW 740D Engines", href: "/bmw-740d-engines" },
  { title: "BMW 740D xDrive Engines", href: "/bmw-740d-xdrive-engines" },
  { title: "BMW 740d, Ld xDrive Engines", href: "/bmw-740d-ld-xdrive-engines" },
  { title: "BMW 750D xDrive Engines", href: "/bmw-750d-xdrive-engines" },
];

const heroParagraphs = [
  "The BMW 7 Series has always represented the pinnacle of what BMW does   a full-size luxury saloon engineered to the highest standards the brand produces, carrying engine technology that frequently previews what eventually filters down to the rest of the range. From the silken naturally aspirated V8s of the E38 generation to the twin-turbo V8s and inline-six units of the F01 and G11, the 7 Series engine lineup has always been ambitious, complex, and genuinely impressive in operation.",
  "It is also, when things go wrong, genuinely demanding to work on correctly.",
  "At Vogue Technics, based in , BMW 7 Series engine rebuilds, repairs, and replacements are work we approach with the depth of expertise that BMW's flagship demands. The N63 twin-turbo V8's thermal management challenges, the N57 diesel's timing chain vulnerabilities, the B58 straight-six's oil system sensitivities, the earlier M62 and N62 naturally aspirated V8 units   we understand these engines in practical, hands-on terms developed over more than 25 years of dedicated BMW engine work. If your 7 Series is experiencing engine trouble, you have found the right workshop.",
];

const whyChooseBlocks = [
  {
    title: "Flagship BMW Engines Require Flagship-Level Expertise",
    text: [
      "The BMW 7 Series is not a vehicle where a generalist approach to engine work produces consistently good results. The N63 V8's unconventional hot-V turbocharger placement   with both turbos mounted inside the engine V rather than on the outside of the block   creates a thermal concentration that demands specific understanding of how heat moves through this engine under load. The N57 diesel's timing chain tensioner failure pattern, well-documented across BMW's diesel lineup, carries particular consequences in a 7 Series application where the engine is frequently run at sustained highway speeds for extended periods. The naturally aspirated N62 and M62 V8 units in earlier 7 Series generations present their own specific wear patterns and rebuild considerations.",
      "None of these engines responds well to being treated as a generic rebuild job. Each requires the approach that comes from having worked on it repeatedly, understood its failure patterns from direct experience, and developed the discipline to address those patterns correctly during every rebuild or repair. That is precisely what we bring to every BMW 7 Series engine job.",
    ],
  },
  {
    title: "Over 25 Years of BMW Engine Work From ",
    text: [
      "Vogue Technics has operated from our  workshop for over a quarter of a century. In that time we have worked on BMW 7 Series engines across multiple generations   E38, E65, F01, F02, and G11   covering naturally aspirated and turbocharged petrol units, diesel variants, and the high-performance M and Alpina engines that represent the very top of the 7 Series range.",
      "Our customer base across , London, and the wider UK is built almost entirely on referrals from owners who experienced our work directly and recommended us without hesitation. When we work on your 7 Series engine, the result reflects twenty-five years of accumulated knowledge applied specifically to your vehicle and its engine family.",
    ],
  },
  {
    title: "Fully Transparent Pricing   Agreed in Writing Before Any Work Starts",
    text: [
      "Engine work on a BMW 7 Series flagship is a significant financial commitment, and we treat every enquiry with the seriousness and respect that warrants. Every quote we produce is fully itemised, clearly explained in plain language, and confirmed in writing before a single component is touched. No estimates that change between booking and collection. No additions that appear without prior agreement.",
      "You know exactly what the work costs and exactly what it involves from the moment you commit. Contact us by phone or through our online enquiry form for a fast, no-obligation quote specific to your 7 Series generation, engine variant, and the nature of the work required.",
    ],
  },
];

const serviceSections = [
  {
    title: "Our Complete BMW 7 Series Engine Services",
    paragraphs: [
      {
        heading: "Head Gasket Replacement",
        text: [
          "Head gasket failure across the BMW 7 Series engine range presents differently depending on which generation and engine variant you own. On the N63 twin-turbo V8   where thermal concentration inside the engine V is inherently higher than on conventionally turbocharged engines   head gasket stress under sustained load is a genuine and documented concern. On the N57 diesel variants, sustained high-speed operation at consistent boost places cumulative thermal stress on the head gasket that manifests over time at higher mileages.",
          "The warning signs are consistent regardless of engine family. White or grey exhaust smoke that persists beyond a normal cold-start period, coolant that requires topping up without any identifiable external leak, oil that has developed a milky or contaminated appearance, or an engine temperature that trends higher than it historically has   any of these symptoms requires prompt investigation on a 7 Series engine.",
          "We carry out BMW 7 Series head gasket replacement using OEM-grade sealing components throughout, with a full cylinder head inspection covering surface flatness measurement, crack testing, and complete structural integrity assessment before any reassembly begins. A head gasket repair done to the correct standard lasts. Done inadequately, it creates the same problem at a shorter interval   and we have no interest in seeing your vehicle back for the same reason twice.",
        ],
      },
      {
        heading: "Timing Chain Replacement",
        text: [
          "Timing chain concerns affect the BMW 7 Series across multiple engine families   most acutely the N57 diesel units in the 730d and 740d variants, but also the N63 petrol V8 and certain earlier generation units where chain and tensioner wear becomes a significant factor at elevated mileages.",
          "On the N57 in a 7 Series application, the sustained high-speed motorway operation that characterises a great deal of 7 Series use means the timing chain system accumulates operational hours at consistent load   translating to tensioner wear that can present earlier in calendar terms than mileage alone would suggest. The failure progression follows the same pattern seen across all N57 applications   a cold-start rattle that clears within a few seconds is the definitive early warning, followed by camshaft timing fault codes and rough cold idle as the condition develops further.",
          "Do not continue driving a 7 Series diesel that produces a cold-start rattle. The consequences of N57 timing chain failure are severe, rapid, and expensive.",
          "We carry out BMW 7 Series timing chain replacement as a complete system job   chain, tensioners, guides, and sprockets replaced together, without exception. Replacing only the chain while leaving worn tensioners and guides in place is a false economy that produces a repeat failure on a compressed timeline.",
        ],
      },
      {
        heading: "Timing Chain Repair",
        text: [
          "Where BMW 7 Series timing chain failure has already occurred or secondary valve train damage has developed alongside primary chain wear, our timing chain repair service addresses the full scope of damage rather than the presenting fault alone.",
          "We carry out a comprehensive assessment of all timing-related components following chain failure   checking for bent valves, damaged guides, sprocket wear, and any secondary damage to the cylinder head caused by incorrect valve timing operation. Every affected component is identified, documented, and replaced before the engine is reassembled and valve timing is confirmed to factory specification. The vehicle does not leave our workshop until the timing system is operating correctly and cleanly across all relevant fault code channels.",
        ],
      },
      {
        heading: "Turbo Replacement",
        text: [
          "Turbocharger work on the BMW 7 Series covers a wider range of scenarios than on most vehicles, reflecting the breadth of engine options across its generations. The N63 twin-turbo V8 in the 750i and 750Li presents the most specific challenges   with both turbos mounted inside the engine V, oil feed contamination from a failing turbo does not remain contained within a single unit. It circulates through the shared oil system and reaches the second turbo, the main oil circuit, and potentially the wider engine before the failure is even diagnosed.",
          "The N57 diesel's twin-turbo system in 730d and 740d applications carries the shared oil circuit contamination risk common to all biturbo setups, with the additional consideration that 7 Series diesel examples typically carry higher mileages than equivalent 5 Series applications given the vehicle's primary role as long-distance executive transport.",
          "We source and fit quality replacement turbochargers for all BMW 7 Series engine variants, with full post-installation testing covering boost pressure, oil feed integrity, and fault-free operation across all turbo stages. We assess the complete turbo system on every job   addressing only the presenting failure without examining what that failure has done to the wider system is incomplete work, and incomplete work is not something we deliver.",
        ],
      },
      {
        heading: "Engine Rebuild",
        text: [
          "A full BMW 7 Series engine rebuild is the most comprehensive solution available   and for a flagship saloon that has accumulated significant mileage in demanding conditions, it is frequently the most cost-effective long-term investment the owner can make.",
          "We strip the engine completely   whether that is an N63 twin-turbo V8, an N57 diesel, a B58 straight-six, an N62 naturally aspirated V8, or an M62 from an earlier generation   measure every internal component against factory tolerances using precision equipment, identify and replace everything outside specification, and reassemble with the precision that a BMW flagship demands as a minimum standard.",
          "Bearings, rings, seals, gaskets, oil system components   everything that influences long-term reliability and performance under the conditions a 7 Series engine actually operates in is assessed, addressed, and either replaced or confirmed as serviceable with documented measurement data behind that decision. The result is a 7 Series that drives as it should   with the refinement, the quietness, and the effortless performance delivery that defines this car at its best.",
        ],
      },
      {
        heading: "Engine Repair",
        text: [
          "Not every BMW 7 Series engine problem requires a full rebuild, and we will never recommend one when a more targeted repair is the genuinely appropriate solution. Our BMW 7 Series engine repair service begins with thorough diagnostic work   comprehensive electronic fault scanning across all engine management systems, compression testing, oil condition analysis, and systematic physical inspection   so that the work carried out addresses the actual fault with precision and economy.",
          "Oil leaks from ageing seals and gaskets, bearing wear on higher-mileage units, VANOS system faults on N-series petrol engines, EGR system issues on diesel variants, valve train faults, injector concerns, and sensor failures all fall within our standard engine repair scope. We identify the root cause and address it directly   not the most visible symptom on the surface.",
        ],
      },
      {
        heading: "Engine Replacement",
        text: [
          "When internal damage has progressed beyond economical repair, or when a comprehensive assessment confirms that a quality replacement unit represents the most practical and cost-effective path forward, we supply and fit reconditioned and low-mileage used BMW 7 Series engines across all variants and generations. Every replacement engine is sourced from verified, trusted suppliers and assessed for condition and provenance before installation begins.",
          "We carry out the full installation process   removal of the failed unit, complete installation of the replacement engine, all ancillary reconnections including cooling, fuel, electrical, and exhaust systems, and a comprehensive post-installation diagnostic session covering all engine management systems before the vehicle returns to the road. You do not collect your 7 Series until we are satisfied that every system connected to the engine is operating correctly.",
        ],
      },
      {
        heading: "Engine Swap",
        text: [
          "Our BMW 7 Series engine swap service covers scenarios where a direct like-for-like replacement is not the objective   whether that involves fitting a newer engine variant into an earlier chassis, moving to a different fuel type, or addressing a situation where the original engine family is no longer the most appropriate solution for the vehicle's intended use.",
          "Every engine swap on a BMW 7 Series involves considerations that go well beyond the mechanical installation itself. ECU calibration to match the replacement engine's management requirements, drivetrain integration where the replacement unit differs from the original in output or configuration, ancillary mounting adaptations, and post-swap diagnostic verification across all connected systems are all addressed as standard elements of our swap service   not optional additions. We carry out engine swaps properly, from start to finish, with no shortcuts at any stage.",
        ],
      },
      {
        heading: "Timing Belt Replacement",
        text: [
          "Certain BMW 7 Series variants   particularly those from earlier production generations in the E38 and E65 ranges   incorporate timing belt components within the valve train system. A timing belt provides considerably less advance warning before failure than a chain. When it fails, engine damage is immediate and typically total, with valve-to-piston contact occurring before the engine can be shut down safely.",
          "We carry timing belt kits for all applicable 7 Series engine configurations. We strongly recommend replacement at or ahead of BMW's specified service intervals on every applicable vehicle   and we would always advise erring on the earlier side on any vehicle where the complete service history cannot be verified with certainty. The cost of a timing belt replacement is a fraction of the cost of the engine damage that follows a belt failure.",
        ],
      },
      {
        heading: "Engine Health Check",
        text: [
          "Not entirely certain what is wrong with your 7 Series? Or considering purchasing a used example   particularly a higher-mileage N63 or N57 variant   and wanting an honest, independent assessment of the engine's true condition before committing to the purchase? Our BMW 7 Series engine health check provides a complete picture of the engine's current state across every measurable parameter.",
          "The service covers full compression testing across all cylinders, oil condition and contamination analysis, comprehensive electronic diagnostic scanning across all engine management and turbo-related fault codes, a detailed physical inspection of the timing chain system and all accessible valve train components, turbocharger assessment where applicable, and a thorough visual inspection of the engine bay including cooling system, oil system, and all associated ancillaries.",
          "You receive a written report with clear, honest findings and straightforward recommendations. No manufactured urgency, no upselling towards services the vehicle does not need, no deliberately vague language designed to generate additional work. Just the accurate, complete information you need to make a properly informed decision about one of the most sophisticated saloons BMW has ever produced.",
        ],
      },
    ],
  },
  {
    title: "Fast, Reliable UK-Wide Service From Our  Workshop",
    paragraphs: [
      {
        heading: "Engine Collection & Return   Full UK Coverage",
        text: [
          "Not within practical reach of our  workshop? That presents no obstacle whatsoever. We operate a fully managed engine collection and delivery service covering the entire United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced   fully tested, correctly configured, and ready to install. For customers who need the finished engine installed locally, we work with a trusted network of approved fitting partners across the UK whose standard of work we are confident .",
        ],
      },
      {
        heading: "Confirmed Turnaround Times   Agreed at Booking and Delivered",
        text: [
          "Most BMW 7 Series engine rebuilds are completed within 5–10 working days from parts confirmation. Repairs and replacements are frequently completed more quickly, depending on the scope of work and parts availability. We confirm your specific timeframe at the point of booking and communicate proactively if anything changes   because leaving a customer to chase progress on their own vehicle is not how we operate.",
        ],
      },
      {
        heading: "Written Warranty on Every Job   Without Exception",
        text: [
          "Every engine rebuild, repair, and replacement that leaves Vogue Technics carries a written warranty. We provide it because our standard of work warrants it without qualification   and because every 7 Series owner who trusts us with their flagship engine deserves to drive away with complete and fully justified confidence in what has been done and what it means for the vehicle going forward.",
        ],
      },
    ],
  },
];

const faqs = [
  {
    question: "How much does a BMW 7 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary considerably depending on engine variant and the extent of wear or damage. A straight-six diesel rebuild typically starts from around £2,500–£4,500. N63 and N57 twin-turbo rebuilds start from around £3,500–£6,500 due to the complexity involved. Earlier naturally aspirated V8 rebuilds are priced on application based on the specific unit and its condition. Contact us for a fully itemised, bespoke quote specific to your vehicle.",
  },
  {
    question: "What are the most common BMW 7 Series engine problems?",
    answer:
      "Issues vary by engine family. The N63 twin-turbo V8 is documented for oil consumption, hot-V thermal management challenges, and turbo failures. The N57 diesel carries well-established timing chain tensioner failure risks that are particularly relevant in 7 Series high-mileage motorway applications. The N62 naturally aspirated V8 presents valve stem seal wear and oil leak patterns at higher mileages. The B58 straight-six can develop oil system and timing-related issues over accumulated mileage. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is it worth rebuilding a BMW 7 Series engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. The 7 Series is extremely expensive to replace at an equivalent level of specification, refinement, and technology. A properly executed engine rebuild extends the vehicle's working life considerably and represents far better value than replacement at this level of the market.",
  },
  {
    question: "Do you provide a warranty on rebuilt and reconditioned engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are clearly explained and agreed before any work commences   no ambiguity, no small print.",
  },
  {
    question: "Can you handle both petrol and diesel 7 Series engines?",
    answer:
      "Yes. We work across the full BMW 7 Series engine range   M62, N62, N63, B58, N57, B57, and applicable M and Alpina variants   covering naturally aspirated, turbocharged, and twin-turbo engines across E38, E65, F01, F02, and G11 chassis generations.",
  },
  {
    question: "Do you offer supply and fit, or just engine supply?",
    answer:
      "Both options are available. We offer complete supply and fit at our  workshop. For customers located across the rest of the UK, we arrange fitting through our trusted approved installer network.",
  },
  {
    question: "How long does a BMW 7 Series engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes between 5–10 working days depending on the engine variant and scope of work involved. Your confirmed timeframe is agreed clearly at the point of booking.",
  },
];

export default function Bmw7SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 7 Series Engine Specialists"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "BMW Engines", href: "/bmw-engines" },
              { name: "BMW 7 Series", href: "/bmw-7-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 7 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 7 Series Engine Rebuild
              </span>{" "}
                Flagship Specialist, Full Reconditioning &amp; Engine Services Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="flex justify-center mt-6 mb-8 w-full"
            >
              <RegSearch />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 7 Series Owners Choose Vogue Technics
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChooseBlocks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed text-sm md:text-base">
                        {item.text.map((t) => (
                          <p key={t.slice(0, 60)}>{t}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIND YOUR BMW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Find your <span className="text-primary">BMW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {findYourBmwCards.map((m) => (
              <Link key={`${m.title}-${m.href}`} href={m.href} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center mb-5">
                    <div className="rounded-full bg-slate-50 border border-slate-200 p-3 group-hover:border-primary/40 transition-colors">
                      <BmwRoundelMark />
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 text-center group-hover:text-primary transition-colors">
                    {m.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-center text-primary font-extrabold text-[0.7rem] tracking-widest uppercase group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-20 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -ml-64 -mb-64 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto space-y-10">
            {serviceSections.map((block) => (
              <div
                key={block.title}
                className="rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{block.title}</h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-primary/80"></div>

                <div className="mt-8 space-y-8">
                  {block.paragraphs.map((p) => (
                    <div key={p.heading} className="space-y-4">
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight">
                        <span className="inline-block mr-3 align-middle h-2.5 w-2.5 rounded-full bg-primary/80" />
                        {p.heading}
                      </h3>
                      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                        {p.text.map((t) => (
                          <p key={t.slice(0, 70)}>{t}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 7 Series Engine Work</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to get your BMW 7 Series back to the standard its engineering deserves?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We are based in , and we serve BMW owners right across the United Kingdom. The 7 Series is BMW&apos;s flagship   and it deserves the
            full attention of a workshop that understands precisely what that means.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
            <Link
              href="/contact-us"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
            >
              Book online
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-900 font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] hover:bg-slate-100"
            >
              <Phone className="w-6 h-6 text-primary" /> 01375 531355
            </a>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

