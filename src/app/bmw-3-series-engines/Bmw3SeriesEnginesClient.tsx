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
        <clipPath id="bmw_roundel_clip_3s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_3s)">
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
  { title: "BMW 316D Engines", href: "/bmw-316d-engines" },
  { title: "BMW 316i Engines", href: "/bmw-316i-engines" },
  { title: "BMW 318D Engines", href: "/bmw-318d-engines" },
  { title: "BMW 318D xDrive Engines", href: "/bmw-318d-xdrive-engines" },
  { title: "BMW 320D Engines", href: "/bmw-320d-engines" },
  { title: "BMW 320D xDrive Engines", href: "/bmw-320d-xdrive-engines" },
  { title: "BMW 320i Engines", href: "/bmw-320i-engines" },
  { title: "BMW 325D Engines", href: "/bmw-325d-engines" },
  { title: "BMW 330D Engines", href: "/bmw-330d-engines" },
  { title: "BMW 330xd Engines", href: "/bmw-330xd-engines" },
  { title: "BMW 335D xDrive Engines", href: "/bmw-335d-xdrive-engines" },
];

const faqs = [
  {
    question: "How much does a BMW 3 Series engine rebuild cost in the UK?",
    answer:
      "Rebuild costs vary depending on the engine family, the specific variant, and the extent of internal wear identified during strip-down. We provide this service to you at a rate 40% lower than the main dealer. N47 timing chain jobs carry additional labour due to the rear-mounted chain location. Contact us for a tailored quote based on your specific model, engine code, and mileage.",
  },
  {
    question: "What are the most common engine problems on the BMW 3 Series?",
    answer:
      "The most frequently encountered issues across the 3 Series range include N47 timing chain failure, turbocharger wear on both diesel and petrol variants, head gasket failure   particularly following overheating events   EGR valve faults on diesel models, and oil leaks from various seals and gaskets as mileage accumulates. The N47 timing chain remains the single most significant and widely reported issue on diesel 3 Series models from the E90 and early F30 generations.",
  },
  {
    question: "Is a BMW 3 Series engine rebuild worth the investment?",
    answer:
      "In most cases, absolutely   particularly when the vehicle is otherwise in sound condition. A quality rebuild restores the engine to near-new performance levels, eliminates multiple outstanding issues in a single process, and extends the car's useful life considerably. The cost of a quality rebuild is a fraction of what a replacement vehicle at this level would cost.",
  },
  {
    question: "Do you provide a written warranty on rebuilt and replacement engines?",
    answer:
      "Yes, without exception. Every rebuilt and replacement engine supplied and fitted by Vogue Technics comes with a written warranty. The terms are explained clearly and in full before any work begins   no ambiguity, no conditions buried in small print.",
  },
  {
    question: "Can you supply and fit, or supply the engine only?",
    answer:
      "Both options are available. We carry out full supply and fit at our  workshop. We also supply engines to customers working with their own installer, and we can connect you with approved fitting partners in your area if local installation is the more practical option for you.",
  },
  {
    question: "How long does a BMW 3 Series engine replacement take?",
    answer:
      "A straightforward engine replacement typically takes 3–5 working days. A full engine rebuild takes 5–10 working days depending on parts availability and the extent of work required during the rebuild process. We confirm your specific timeframe at the point of booking and provide updates throughout.",
  },
  {
    question: "Do you work on all BMW 3 Series generations?",
    answer:
      "Yes. We work across all major 3 Series generations sold in the UK   E46, E90, F30, and G20   and across all significant engine variants including N47, B47, N55, B58, N20, and B48. If your engine code isn't listed here, contact us directly and we'll confirm availability and pricing.",
  },
];

export default function Bmw3SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 3 Series Engine Specialists"
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
              { name: "BMW 3 Series", href: "/bmw-3-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 3 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 3 Series Engine Rebuild
              </span>{" "}
                Expert Repairs, Reconditioning &amp; Replacements Across the UK
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
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 3 Series Owners Across the UK Choose Vogue Technics
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Choosing the right specialist for your BMW 3 Series engine is one of the most consequential decisions you&apos;ll make as an owner. The
              wrong workshop can turn a manageable problem into a catastrophic one. Here is why our customers trust us consistently, and why that
              trust is well placed.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know the BMW 3 Series Engine Families in Genuine Depth",
                  text: "The 3 Series has been powered by a wide range of engines across its generations   the N47 and B47 diesel families, the N20 and B48 four-cylinder petrols, and the N55 and B58 inline-six petrol units, each with their own architecture, their own known vulnerabilities, and their own correct repair procedures. The N47 diesel in particular   infamous for its rear-mounted timing chain   has been one of the most discussed and most mishandled engines in the UK independent workshop sector. We've rebuilt more of them than most garages have seen, and we understand precisely what it takes to resolve N47 timing chain failure properly and permanently.",
                },
                {
                  title: "Over 25 Years of Specialist BMW Engine Experience",
                  text: "Our workshop in  has been carrying out BMW 3 Series engine rebuilds, repairs, and replacements since the E46 was the current model. That's a span of experience that covers every significant generation of the 3 Series   E46, E90, F30, and G20   and every major powertrain variant sold in the UK market. Our reputation has never been built on advertising spend. It's been built on results that hold up, prices that are honest, and a team that communicates clearly throughout every job.",
                },
                {
                  title: "Transparent Pricing and Honest Recommendations",
                  text: "Engine work on a premium vehicle like the BMW 3 Series carries a financial weight that's hard to ignore. We take that seriously. Every customer receives a clear, itemised quote before any work begins   no vague estimates, no exploratory charges, no revision of costs mid-job without prior discussion. If our diagnostic process turns up something unexpected, we tell you before we act on it. Always.",
                },
              ].map((item) => (
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
                      <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">{item.text}</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {findYourBmwCards.map((m) => (
              <Link key={m.title} href={m.href} className="group block h-full">
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
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our BMW 3 Series Engine Services
              </h2>
              <p className="mt-5 text-slate-700 leading-relaxed">
                From a precise targeted repair to a complete BMW 3 Series engine rebuild, every service we carry out is approached with the same
                level of technical rigour and professional care. Each service below deserves its own attention   and that&apos;s exactly what we give it.
              </p>
            </div>

            {[
              {
                title: "Head Gasket Replacement",
                body: [
                  "Head gasket failure on the BMW 3 Series is a problem that demands immediate action. The symptoms are familiar to anyone who has encountered them   white or bluish exhaust smoke that lingers longer than it should, coolant levels that drop without any visible external leak, or an engine temperature gauge that creeps higher than normal under ordinary driving conditions. These are not symptoms to monitor cautiously over a few more weeks. They are symptoms to act on today.",
                  "Left unaddressed, a failing head gasket allows combustion gases into the cooling system and coolant into the combustion chambers. The cylinder head warps. The damage compounds. What began as a head gasket replacement becomes a cylinder head skim, or worse, a full engine rebuild.",
                  "We carry out BMW 3 Series head gasket replacement using OEM-grade sealing components, with a full cooling system inspection and pressure test completed as part of every job. The engine does not return to service until we are satisfied the repair is complete and the seal is holding correctly under operating pressure.",
                ],
                href: "/services/head-gasket-replacement",
              },
              {
                title: "Timing Chain Replacement",
                body: [
                  "If there is a single engine issue that defines the BMW 3 Series ownership experience for hundreds of thousands of UK drivers, it is N47 timing chain failure. The N47D20 diesel engine   fitted across a wide range of E90 and F30 3 Series models   positions its timing chain at the rear of the engine, driven directly off the crankshaft. It is an engineering decision that makes replacement significantly more labour-intensive than a front-mounted chain, and it is a design that has proven genuinely susceptible to accelerated wear.",
                  "The cold-start rattle is the warning most owners notice first. A brief metallic clatter that disappears after a few seconds of running. Many dismiss it. By the time it becomes persistent, the chain has typically stretched well beyond safe limits. When it snaps   and on a neglected N47, it will snap   the internal damage is catastrophic and the engine is rarely economically salvageable.",
                  "We carry out complete BMW 3 Series timing chain replacement as a full system job: chain, tensioners, guides, and sprockets all replaced together. Replacing the chain alone while leaving worn guides and tensioners in place is a compromise we will not make, because it leads directly back to the same failure within a fraction of the original mileage. If your 3 Series diesel is showing any timing chain symptoms, contact us before the situation deteriorates further.",
                ],
                href: "/services/timing-chain-replacement",
              },
              {
                title: "Timing Belt Replacement",
                body: [
                  "Certain BMW 3 Series petrol variants   particularly earlier N20-engined models   use a timing belt rather than a chain as part of their valvetrain system. A timing belt offers no warning before it fails. There is no rattle, no gradual deterioration in performance, no amber warning light. It simply breaks, and the engine destruction that follows is instant   bent valves, damaged pistons, and in most cases an engine that cannot be saved at a cost that makes sense.",
                  "We carry out BMW 3 Series timing belt replacement using manufacturer-specified belt kits and recommend replacement at or before the stated service interval without exception. If you&apos;ve purchased a used 3 Series petrol and cannot confirm when the belt was last changed, this is not something to defer. Book an inspection with us and we&apos;ll assess its condition and advise you honestly.",
                ],
                href: "/services/timing-belt-replacement",
              },
              {
                title: "Turbo Replacement",
                body: [
                  "The turbocharged engines across the BMW 3 Series range   both diesel and petrol   rely on the turbocharger to deliver the performance and efficiency these cars are known for. When the turbo begins to fail, the signs are gradual at first and then increasingly difficult to ignore. Reduced power under load, an increase in exhaust smoke, oil consumption that&apos;s crept upward over recent months, or an audible whine or whistle under acceleration   any of these warrant immediate investigation.",
                  "Continuing to drive on a failing turbo risks oil contamination throughout the engine, which significantly increases the scope and cost of the repair. We carry out BMW 3 Series turbo replacement using quality units matched to your specific engine variant, with every installation followed by post-fitting testing under operating conditions to confirm correct boost pressure and oil supply before the vehicle is handed back.",
                ],
                href: "/services/turbo-replacement",
              },
              {
                title: "Engine Rebuild",
                body: [
                  "A full BMW 3 Series engine rebuild is the definitive solution for a unit that has accumulated widespread internal wear   typically on higher-mileage engines where pistons, bearings, cylinder walls, and the cylinder head all show signs of degradation that go beyond what targeted repairs can address economically.",
                  "Rather than spending money sequentially on individual faults in an engine that is fundamentally tired, a thorough rebuild addresses everything in a single, comprehensive process. We strip the engine completely, assess every internal component individually against manufacturer tolerances, replace all worn or damaged parts with quality components, and reassemble to factory specifications. The rebuilt engine is tested before refitting.",
                  "The result is a unit that performs and behaves like a fresh engine   because functionally, it is one. At a cost that is a fraction of sourcing a new engine or replacing the vehicle.",
                ],
                href: "/services/engine-rebuild",
              },
              {
                title: "Engine Repair",
                body: [
                  "Not every BMW 3 Series engine problem requires a full rebuild, and recommending one when it isn't warranted is not something we do. Our diagnostic approach is methodical and honest   we identify the actual root cause of the fault before any repair work begins, so you pay only for what genuinely needs attention.",
                  "Engine repairs we carry out regularly on the BMW 3 Series include EGR valve work, oil leak rectification from various seals and gaskets, injector seal failures, bearing replacements, valve train repairs, sensor and management system faults, and cylinder head work following overheating events. Whatever the fault, our approach is consistent: find the cause precisely, fix it properly, and ensure it doesn't return.",
                ],
                href: "/services/engine-repair",
              },
              {
                title: "Engine Replacement",
                body: [
                  "When multiple internal components have failed simultaneously, or when the cumulative cost of a rebuild exceeds what makes financial sense for the vehicle, a BMW 3 Series engine replacement is often the most practical and cost-effective route forward.",
                  "We supply and fit quality reconditioned BMW 3 Series engines and carefully selected low-mileage used engines sourced from trusted UK suppliers across all major engine variants   N47, B47, N55, B58, N20, and B48. Every unit is inspected and bench-tested before installation. We explain the cost difference between a reconditioned and a used unit honestly, give you our genuine recommendation based on your vehicle&apos;s condition and your budget, and let you make the decision with complete information.",
                ],
                href: "/services/engine-replacement",
              },
              {
                title: "Engine Swap",
                body: [
                  "Whether you're fitting a lower-mileage engine variant into your existing 3 Series bodyshell, upgrading from a diesel to a petrol powertrain, or undertaking a more ambitious performance conversion, a BMW 3 Series engine swap is a technically complex job that demands careful execution at every stage.",
                  "Our engine swap service covers the complete process from start to finish   sourcing the right donor unit, managing all mounting configurations, ancillary connections, and wiring integration, post-swap ECU calibration, and full diagnostic testing before handover. We don't hand a vehicle back until every system is communicating correctly and the engine is performing exactly as it should under real driving conditions.",
                ],
                href: "/services/engine-swap",
              },
              {
                title: "Engine Health Check",
                body: [
                  "Perhaps your 3 Series is running slightly differently but there's no obvious fault you can point to. Or perhaps you're considering buying a used BMW 3 Series and want a professional, impartial assessment of the engine's condition before you commit to the purchase. Either scenario is exactly what our BMW 3 Series engine health check is designed for.",
                  "The check covers full diagnostic scanning for stored and pending fault codes, compression testing across all cylinders, oil condition and contamination analysis, coolant system inspection, and a thorough visual assessment of all accessible engine components. At the end, you receive a clear written report with our honest findings and practical recommendations. No alarmism, no upselling, no vague concerns designed to generate unnecessary work. Just a straightforward professional assessment you can rely on entirely.",
                ],
                href: "/services/engine-health-check",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm"
              >
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">{s.title}</h3>
                <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 70)}>{p}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-extrabold text-xs tracking-[0.14em] hover:bg-primary/90 transition-colors"
                  >
                    Explore More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK-WIDE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nationwide BMW 3 Series Engine Service From 
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Our workshop is based in , but the service we provide reaches BMW 3 Series owners right across the United Kingdom. Distance
              is not a barrier   we&apos;ve made it straightforward for customers from Scotland to Cornwall to access the same quality of work that our
              local customers receive.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Engine Collection &amp; Delivery Across the UK</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  We offer a fully managed engine collection and delivery service covering the whole of Great Britain. If your 3 Series can&apos;t make
                  it to    or if the engine has already failed and the car isn&apos;t driveable   we collect your old unit, carry out the rebuild or
                  replacement at our workshop, and return the finished engine fully tested, properly packaged, and ready to fit. We can also connect
                  you with approved installation partners nationwide if you need the fitting handled locally.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Realistic Turnaround Times   Confirmed and Kept</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Most BMW 3 Series engine rebuilds are completed within 5–10 working days. Targeted repairs and engine replacements are often
                  completed faster. We give you a genuine, considered timeframe at the point of booking   not an optimistic figure designed to secure
                  your business   and we consistently deliver on it. You&apos;ll receive updates throughout the process so you&apos;re never left wondering
                  where your engine is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 3 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to get your BMW 3 Series back on the road   properly handled?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Ready to get your BMW 3 Series back on the road   properly rebuilt, honestly priced, and backed by a written warranty? Call Vogue
            Technics today or complete our online enquiry form for a fast, no-obligation quote. We&apos;re based in , and we serve BMW 3
            Series owners right across the United Kingdom.
            <br />
            Twenty-five years of BMW engine expertise. One workshop. Every 3 Series engine, handled properly.
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

