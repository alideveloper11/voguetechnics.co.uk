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
        <clipPath id="bmw_roundel_clip_6s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_6s)">
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
  { title: "BMW 640D Engines", href: "/bmw-640d-engines" },
  { title: "BMW 640D xDrive Engines", href: "/bmw-640d-xdrive-engines" },
];

const heroParagraphs = [
  "The BMW 6 Series has always occupied a distinctive position in the BMW lineup   a grand tourer that combines genuine performance with long-distance refinement, available across coupé, convertible, and gran coupé body styles and spanning engine options that range from composed straight-six diesels to thunderous twin-turbo V8s. Whether you own an E63, an F12, an F06, or a G32 Gran Turismo, the 6 Series represents a significant investment   and when the engine develops problems, it deserves specialist attention that matches the engineering complexity it was built with.",
  "At Vogue Technics, based in , we carry out BMW 6 Series engine rebuilds, repairs, and replacements across all generations and engine families. The N57 diesel units, the N55 and N63 turbocharged petrols, the high-performance S63 twin-turbo V8 in the M6, and the earlier naturally aspirated engines in the E63 and E64   we know these engines in practical, hands-on terms developed over more than 25 years of dedicated BMW engine work. If your 6 Series is experiencing engine trouble, you have come to the right workshop.",
];

const whyChooseBlocks = [
  {
    title: "Genuine Cross-Generation BMW Engine Expertise",
    text: [
      "The BMW 6 Series is not a single engine family   it is a collection of very different powertrains unified under one model name, each with its own specific failure patterns, rebuild requirements, and service considerations. The N63's notorious hot-V turbo placement creates thermal management challenges that simply do not exist on conventional twin-turbo layouts. The S63 in the M6 is a high-output performance engine that demands rebuild precision far beyond what a standard V8 overhaul requires. The N57 diesel carries timing chain vulnerabilities that are well-documented and consequential. The S85 V10 in the E63 M6 presents rod bearing risks that require a very specific diagnostic and rebuild approach.",
      "We understand these differences at a practical level. That is what genuine BMW engine specialisation looks like   not a single process applied to every engine, but the right approach applied to each specific unit based on what it actually is and how it actually fails.",
    ],
  },
  {
    title: "Over 25 Years of BMW Engine Work From ",
    text: [
      "Vogue Technics has been operating from our  workshop for over a quarter of a century. In that time we have worked on BMW 6 Series engines across every generation   E63 and E64 straight-six and V8 units, F-series N55, N57, N63, and S63 engines, and the newer B-series units in the G32 Gran Turismo. Our customer base across , London, and the wider UK has been built almost entirely through direct referrals from satisfied customers. When we fix your engine, it stays fixed   and word gets around.",
    ],
  },
  {
    title: "Clear, Honest Pricing Before Any Work Begins",
    text: [
      "Engine work on a prestige BMW grand tourer is not a small investment, and we approach every conversation with that in mind. Every quote we provide is fully itemised, clearly explained, and confirmed in writing before any work begins on your vehicle. No estimates that shift unexpectedly. No additions that materialise without prior discussion. You know exactly what the job costs and what it involves before we touch a single component.",
      "Contact us by phone or through our online enquiry form for a fast, no-obligation quote tailored to your specific 6 Series, its engine variant, and the nature of the work required.",
    ],
  },
];

const serviceSections = [
  {
    title: "Our Complete BMW 6 Series Engine Services",
    paragraphs: [
      {
        heading: "Head Gasket Replacement & Blown Head Gasket Repair",
        text: [
          "Head gasket failure across the BMW 6 Series range presents differently depending on the engine in question. On the N57 and N63 units, the combination of turbocharger boost pressure and thermal cycling places the head gasket under sustained stress that increases significantly with mileage. On the naturally aspirated straight-six engines in the E63, the failure is typically more gradual but no less consequential when it arrives.",
          "The warning signs are consistent regardless of engine variant   persistent white or grey exhaust smoke, coolant that disappears without any visible external leak, oil with a milky or contaminated appearance, or an engine temperature that climbs despite the cooling system appearing to function correctly. Any of these symptoms requires prompt investigation.",
          "We carry out BMW 6 Series head gasket replacement using OEM-grade sealing components throughout, with a full cylinder head inspection   surface flatness measurement, crack testing, and structural integrity assessment   carried out before reassembly begins. The job is done correctly and completely, not patched and returned.",
        ],
      },
      {
        heading: "Timing Chain Replacement & Timing Chain Repair",
        text: [
          "The timing chain is a critical concern across several BMW 6 Series engine families   most notably the N57 diesel units fitted to the 630d and 640d across F-series and G32 applications, where the timing chain tensioner failure pattern is well-established and the consequences of ignoring it are severe.",
          "The N55 straight-six petrol units fitted to the 640i also carry documented timing chain tensioner vulnerabilities. A cold-start rattle   one that clears within a few seconds of the engine running   is the most reliable early warning sign across all affected engines. Camshaft timing fault codes, rough cold idle, or misfires on start-up can follow as the condition progresses.",
          "We carry out BMW 6 Series timing chain replacement as a complete system job across all affected engine families   chain, tensioners, guides, and sprockets replaced together as a full kit. We also handle BMW 6 Series timing chain repair where secondary valve train damage has already occurred, restoring correct engine timing and confirming clean operation before the vehicle returns to the road.",
        ],
      },
      {
        heading: "Turbo Replacement & Turbocharger Service",
        text: [
          "Turbocharger work on the BMW 6 Series covers a considerably wider range of scenarios than on a model with a single engine option. The N55's single twin-scroll turbo, the N57's twin-turbo diesel system, the N63's unconventionally positioned hot-V turbos, and the S63's high-performance twin-turbo setup each fail differently, present different symptoms, and require different replacement and testing procedures.",
          "The N63 deserves specific mention. With its turbos mounted inside the engine V rather than on the outside of the block, thermal concentration in the N63 is significant. Oil coking in the turbo feed lines is a well-documented failure mode on higher-mileage and hard-driven examples. When an N63 turbo fails, the inspection scope needs to extend well beyond the turbo unit itself to the oil feed system, the cooling jackets, and the wider thermal management components.",
          "We source and fit quality replacement turbochargers for all BMW 6 Series engine variants, with post-installation testing covering boost pressure, oil feed integrity, and fault-free operation before the vehicle leaves our workshop. We assess the wider system   not just the failed component   because incomplete turbo replacements create repeat failures.",
        ],
      },
      {
        heading: "Engine Rebuild",
        text: [
          "A full BMW 6 Series engine rebuild is the most thorough solution available   and across a range that includes the S85 V10, the S63 twin-turbo V8, and the N63 hot-V, it is work that requires genuine technical breadth alongside the precision that any engine rebuild demands.",
          "We strip the engine completely, measure every internal component against factory tolerances, replace everything outside specification, and reassemble with the care that BMW's engineering demands as standard. For the S85 V10 in the E63 M6   where rod bearing failure is the primary concern on higher-mileage examples   we carry out a full bearing assessment and replacement as part of every rebuild on this engine, because the consequences of missing bearing wear on a V10 are immediate and total.",
          "The result, regardless of which 6 Series engine sits on our bench, is a unit that performs as it should and lasts as it should.",
        ],
      },
      {
        heading: "Engine Repair",
        text: [
          "Not every BMW 6 Series engine problem warrants a full rebuild, and we will never recommend one when it is not genuinely necessary. Our BMW 6 Series engine repair service begins with thorough diagnostic work   electronic fault scanning across all relevant systems, compression testing, oil analysis, and systematic physical inspection   so that the work carried out is precisely targeted to the actual fault. Oil leaks, bearing wear, VANOS system faults on N-series engines, EGR issues on diesel variants, valve damage, sensor failures   we identify the root cause and address it properly.",
        ],
      },
      {
        heading: "Engine Replacement & Engine Swap",
        text: [
          "When internal damage makes repair uneconomical, or when multiple systems have failed simultaneously, a quality replacement engine is the correct decision. We supply and fit reconditioned and low-mileage used BMW 6 Series engines across all variants, sourced from verified suppliers and tested before installation.",
          "Our BMW 6 Series engine swap service manages the entire process   removal of the failed engine, full installation of the replacement unit, all ancillary connections, ECU calibration where the replacement differs from the original, and comprehensive post-installation diagnostic testing before the vehicle is returned to the road.",
        ],
      },
      {
        heading: "Timing Belt Replacement",
        text: [
          "Certain BMW 6 Series variants   particularly those from earlier production years in the E63 and E64 range   incorporate timing belt components within the valve train. Unlike a timing chain, a belt gives very little warning before failure. When it snaps, the engine damage is immediate and typically total. We carry timing belt kits for all applicable 6 Series engine configurations and strongly recommend replacement at or ahead of BMW's specified service intervals on any vehicle with an uncertain service history.",
        ],
      },
      {
        heading: "Engine Health Check & Diagnostic",
        text: [
          "Not sure what is actually wrong with your 6 Series? Or considering buying a used example   particularly a high-mileage N63 or S63 variant   and wanting an honest independent assessment of the engine's true condition before committing? Our BMW 6 Series engine health check covers full compression testing, oil condition and contamination analysis, comprehensive electronic diagnostic scanning across all engine and turbo-related fault codes, and a detailed visual inspection of the engine bay and all accessible components.",
          "You receive a written report with clear findings and honest recommendations. No manufactured urgency, no upselling, no vague language. Just the information you need to make a properly informed decision.",
        ],
      },
    ],
  },
  {
    title: "UK-Wide Service, Fast Turnaround, From Our  Workshop",
    paragraphs: [
      {
        heading: "Engine Collection & Return   Nationwide Coverage",
        text: [
          "Not within reach of our  workshop? That is not a problem. We operate a fully managed engine collection and delivery service covering the whole of the United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced   fully tested and ready to install. We also work with a trusted network of approved fitting partners across the UK for customers who need the engine installed locally.",
        ],
      },
      {
        heading: "Honest Turnaround Times   Confirmed at Booking",
        text: [
          "Most BMW 6 Series engine rebuilds are completed within 5–10 working days from parts confirmation. Repairs and replacements are frequently completed more quickly. We confirm your specific timeframe at the point of booking and communicate clearly if anything changes   which is rarely.",
        ],
      },
      {
        heading: "Written Warranty on Every Engine Job",
        text: [
          "Every engine rebuild, repair, and replacement that leaves Vogue Technics carries a written warranty. We provide it because our work warrants it   and because every BMW 6 Series owner who trusts us with their engine deserves to drive away with complete confidence in what has been done.",
        ],
      },
    ],
  },
];

const faqs = [
  {
    question: "How much does a BMW 6 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary significantly depending on the engine variant and the extent of wear or damage. We provide this service to you at a rate 40% lower than the main dealer. The S85 V10 rebuild in the E63 M6 is priced on application given the unique nature of the work involved. Contact us for a fully itemised, bespoke quote based on your specific vehicle.",
  },
  {
    question: "What are the most common BMW 6 Series engine problems?",
    answer:
      "Issues vary by engine. The N57 diesel is known for timing chain tensioner failure. The N63 petrol V8 is documented for excessive oil consumption, thermal management issues, and hot-V turbo failures. The S85 V10 in the E63 M6 presents rod bearing failure risks on higher-mileage examples. The N55 straight-six carries timing chain tensioner vulnerabilities. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is it worth rebuilding a BMW 6 Series engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. The 6 Series is expensive to replace at an equivalent level of quality and performance. A properly executed engine rebuild extends the vehicle's usable life significantly and represents far better value than replacement.",
  },
  {
    question: "Do you provide a warranty on rebuilt engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are explained and agreed before any work commences.",
  },
  {
    question: "Can you handle both petrol and diesel 6 Series engines?",
    answer:
      "Yes. We work across the full BMW 6 Series engine range   N52, N55, N57, N62, N63, S63, S85, M57, B47, B57, and B58   covering petrol, diesel, naturally aspirated, turbocharged, and high-performance M variants across E63, E64, F06, F12, F13, and G32 chassis generations.",
  },
  {
    question: "Can you supply and fit, or just supply the engine?",
    answer:
      "Both options are available. We offer complete supply and fit at our  workshop. For customers elsewhere in the UK, we arrange fitting through our network of approved installers.",
  },
  {
    question: "How long does a BMW 6 Series engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes between 5–10 working days depending on the engine variant and scope of work. Your confirmed timeframe is agreed at the point of booking.",
  },
];

export default function Bmw6SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 6 Series Engine Specialists"
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
              { name: "BMW 6 Series", href: "/bmw-6-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 6 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 6 Series Engine Rebuild
              </span>{" "}
                Expert Reconditioning, Repair &amp; Replacement Across the UK
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
              Why BMW 6 Series Owners Choose Vogue Technics
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
            Frequently Asked Questions   <span className="text-primary italic">BMW 6 Series Engine Work</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to get your BMW 6 Series back to the standard it deserves?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We are based in , and serve
            BMW owners right across the United Kingdom. The 6 Series is a grand tourer built to exceptional engineering standards   and that is
            exactly the standard we apply when we work on its engine.
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

