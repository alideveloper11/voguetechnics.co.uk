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
        <clipPath id="bmw_roundel_clip_x5">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_x5)">
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
  { title: "BMW X5 M50d Engines", href: "/bmw-x5-m50d-engines" },
  { title: "BMW X5 sDrive 25d Engines", href: "/bmw-x5-sdrive25d-engines" },
  { title: "BMW X5 xDrive 25d Engines", href: "/bmw-x5-xdrive25d-engines" },
  { title: "BMW X5 xDrive 30d Engines", href: "/bmw-x5-xdrive30d-engines" },
  { title: "BMW X5 xDrive 35d Engines", href: "/bmw-x5-xdrive35d-engines" },
  { title: "BMW X5 xDrive 40d Engines", href: "/bmw-x5-xdrive40d-engines" },
];

const faqs = [
  {
    question: "How much does a BMW X5 engine rebuild cost in the UK?",
    answer:
      "Rebuild costs vary significantly depending on the engine variant. We provide this service to you at a rate 40% lower than the dealer. The S63B44 V8 rebuild is the most complex and most costly in the X5 range, typically starting from around £4,000–£7,000 depending on the extent of rod bearing and associated damage. Contact us directly for an accurate quote based on your specific engine.",
  },
  {
    question: "What are the most common engine problems on the BMW X5?",
    answer:
      "This depends on the engine fitted. On N57 diesel variants — timing chain tensioner hydraulic failure, EGR cooler cracking, swirl flap failure, and turbo wastegate wear. On N47 diesel variants — rear timing chain failure. On N55 and B58 petrol variants — VANOS wear and timing chain stretch. On the S63B44 V8 — rod bearing failure is the most serious and well-documented fault, requiring immediate attention when any early symptoms appear.",
  },
  {
    question: "What is the S63B44 rod bearing problem on the BMW X5 M?",
    answer:
      "The S63B44 V8 fitted to the X5 M across E70, F15, and G05 generations has a documented tendency to experience rod bearing failure — where the bearing shells that support the connecting rods wear prematurely, leading to oil pressure loss, knocking, and in advanced cases catastrophic engine failure. BMW issued a service action addressing this on some vehicles, but many owners remain at risk. Early diagnosis is critical — if your X5 M shows any reduction in oil pressure or develops a low-frequency knock under load, contact us immediately.",
  },
  {
    question: "Do you work on all BMW X5 chassis generations?",
    answer:
      "Yes. We carry out engine work on E53, E70, F15, and G05 chassis X5 models, covering all engine families fitted across those generations.",
  },
  {
    question: "Is it worth rebuilding a BMW X5 engine?",
    answer:
      "In the vast majority of cases, yes — particularly where the rest of the vehicle is in sound mechanical condition. A properly executed rebuild restores full performance and reliability at a cost substantially lower than sourcing a replacement vehicle of comparable specification.",
  },
  {
    question: "Do you provide a written warranty on BMW X5 engine work?",
    answer:
      "Yes. Every rebuild, replacement, and major repair completed at Vogue Technics comes with a written warranty. Full terms are agreed clearly before any work begins.",
  },
  {
    question: "Can you supply and fit, or do you only supply the engine?",
    answer:
      "We offer full supply and fit at our Grays, Essex workshop. For customers elsewhere in the UK, fitting can be arranged through our approved BMW installer network.",
  },
  {
    question: "How long does a BMW X5 engine rebuild take?",
    answer:
      "Inline-six diesel rebuilds typically take 5–10 working days. V8 S63B44 rebuilds take longer — typically 10–15 working days — given the complexity and the rod bearing work involved. We confirm your exact timeframe at the point of booking and honour it.",
  },
  {
    question: "Can I arrange engine collection from anywhere in the UK?",
    answer:
      "Yes. We collect and return engines across the whole of the United Kingdom. Many of our BMW X5 customers are not local to Grays, and the process is managed smoothly from first contact through to delivery.",
  },
];

export default function BmwX5EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW X5 Engine Specialists"
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
              { name: "BMW X5", href: "/bmw-x5-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW X5 Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-primary italic">BMW X5</span> Engine Rebuild — Specialist Repairs, Reconditioning
              &amp; Replacements Across the Full X5 Range
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
            >
              The BMW X5 has been one of Britain's most capable and most coveted premium SUVs since the E53 arrived at
              the turn of the millennium. Five chassis generations, dozens of engine variants, and an ownership base
              that ranges from high-mileage diesel family cars to low-volume X5 M performance machines — the X5 range
              is as broad as any BMW model line gets. And across all of that breadth, one thing remains constant: when
              the engine develops a serious problem, the workshop you choose determines everything about the outcome.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-base md:text-lg text-slate-200 leading-relaxed mb-10"
            >
              At Vogue Technics, based in Grays, Essex, we carry out BMW X5 engine rebuilds, targeted repairs, and
              complete engine replacements across the full X5 range — from the M57 diesel inline-six in the early E70
              through to the S63B44 V8 twin-turbo in the X5 M. We know the engines fitted to every X5 generation,
              their specific failure modes, and what each one demands in terms of diagnostic precision and rebuild
              quality. Over 25 years of BMW engine experience backs every job we take on, and every job is backed by a
              written warranty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-primary/25"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+441375898109"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-full border border-white/20 backdrop-blur transition-all duration-300"
              >
                <Phone className="w-5 h-5" /> Call Now
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-200"
            >
              {[
                "Over 25 Years BMW Experience",
                "Written, Itemised Quotes",
                "UK-Wide Collection & Return",
                "Written Warranty Included",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reg Search */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <RegSearch />
        </div>
      </section>

      {/* FIND YOUR BMW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Find your BMW</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {findYourBmwCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <BmwRoundelMark />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 leading-snug">{card.title}</div>
                      <div className="mt-3 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                        Read more{" "}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why BMW X5 Owners Across the UK Choose <span className="text-primary italic">Vogue Technics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know Every Engine Fitted to the BMW X5",
                  text: [
                    "The X5 has been fitted with M54, M57, N47, N52, N55, N57, B57, B58, N63, and S63 engines across its production history — inline-sixes, V8s, four-cylinders, naturally aspirated, turbocharged, twin-turbocharged. Each engine family has its own failure patterns, its own rebuild tolerances, and its own diagnostic approach. Our technicians work across all of them — not occasionally, but consistently and specifically.",
                    "The N57D30 timing chain tensioner fails differently to the M57's stretch-led chain wear — and diagnosing one as the other leads to an incomplete repair. The S63B44 rod bearing failure — a documented and serious fault across all S63 generations — requires specific intervention that goes considerably beyond what a standard V8 repair entails. The N55's VANOS system develops wear patterns on higher-mileage X5 units that affect performance in ways that are misdiagnosed as fuel system faults by workshops unfamiliar with the system. These distinctions matter, and we know all of them.",
                  ],
                },
                {
                  title: "25 Years of BMW Engine Work From Grays, Essex",
                  text: [
                    "Vogue Technics has been operating from Grays for over two decades, building a reputation across Essex, London, and the wider UK through consistent quality and honest advice. BMW X5 owners come to us from across the country — because specialist knowledge of the full X5 engine range, including the S63B44 V8 and the N57 inline-six diesel, is harder to find than most owners realise until they start looking seriously.",
                  ],
                },
                {
                  title: "Clear, Itemised Quotes Before Any Work Begins",
                  text: [
                    "Engine work on a premium all-wheel-drive SUV represents a serious financial commitment regardless of which X5 variant you own. Every job at Vogue Technics begins with a clear, itemised quote before any work is authorised — no estimates that expand during the job, no additions on collection day. You know exactly what the work involves and what it costs before we start. Contact us by phone or online enquiry for your fast, no-obligation quote.",
                  ],
                },
              ].map((block) => (
                <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">{block.title}</h3>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    {block.text.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our <span className="text-primary italic">BMW X5</span> Engine Services
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Head Gasket Replacement",
                  paragraphs: [
                    "Head gasket failure presents differently across the X5 engine range depending on which engine is fitted. On the M57 and N57 diesel inline-six variants, it typically develops gradually — unexplained coolant loss, intermittent overheating warnings, white smoke on cold start that clears as the engine warms. On the N55 and B58 petrol units, the pattern is similar but the progression can be faster due to higher cylinder pressures. On the S63B44 V8, head gasket stress is frequently a secondary consequence of rod bearing failure rather than a primary fault in its own right.",
                    "We replace head gaskets across all X5 engine variants using OEM-grade components, resurface cylinder heads where the mating surface requires it, and pressure-test the cooling system completely before the vehicle is returned. The advice holds regardless of which engine your X5 has — early intervention protects the engine, delayed intervention compounds the damage.",
                  ],
                },
                {
                  title: "Timing Chain Replacement & Repair",
                  paragraphs: [
                    "Timing chain problems across the BMW X5 diesel range follow two distinct failure patterns — and the distinction is critical to getting the repair right.",
                    "On M57 units fitted to the E53 and early E70, chain wear is stretch-led — the chain elongates over time and eventually jumps or produces audible rattling. On the N57D30 fitted to the E70, F15, and transition-period G05, the failure mode is tensioner-led — the hydraulic tensioner loses pressure before the chain itself becomes critically worn, producing subtle early symptoms including intermittent timing fault codes and a faint cold-start tick that disappears quickly. The N47D20D fitted to the 25d variants shares the N47 family's rear-mounted chain design — the most demanding replacement in the X5 diesel range, requiring the engine to be dropped or the gearbox removed for correct access.",
                    "We carry out BMW X5 timing chain replacement across all diesel variants as complete system jobs — chain, tensioner, guides, and sprockets replaced together. We supply and fit complete timing chain kits for all applicable X5 engine codes, and we carry out the work correctly for each engine's specific architecture.",
                  ],
                },
                {
                  title: "Turbo Replacement & Turbocharger Repair",
                  paragraphs: [
                    "Turbocharger problems across the BMW X5 diesel range are more varied than on the X3 platform — because the X5 is used more intensively. Towing loads, sustained motorway cruising, and stop-start urban use all contribute to turbocharger wear in different ways, and the X5's higher kerb weight means the turbo works harder for the same road speed than it would in a lighter vehicle.",
                    "On N57 units, wastegate actuator wear is the primary early-stage fault — presenting as inconsistent power delivery before more obvious smoke or boost loss symptoms develop. On M57 units, the variable vane mechanism in the turbo is a more common failure point. On N55 and B58 petrol variants, boost pipe integrity and VANOS-related fuelling interactions affect turbo behaviour in ways that pure turbo diagnosis can miss.",
                    "We source quality replacement turbos for all BMW X5 engine variants — diesel and petrol — specified correctly for the application and output level. Every replacement includes correct fitment, oil feed system inspection, and full boost pressure verification post-installation.",
                  ],
                },
                {
                  title: "Engine Rebuild",
                  paragraphs: [
                    "A BMW X5 engine rebuild is the most technically demanding work we carry out at Vogue Technics — and it is also the work where the gap between a genuine specialist and a generalist workshop shows up most clearly in the final result. The X5 has been fitted with more distinct engine families than almost any other BMW model across its five-generation production history, and the rebuild process differs meaningfully between every one of them. Applying the same approach to an N57D30 inline-six diesel as to an S63B44 V8 twin-turbo is not a neutral decision — it is a mistake that manifests in long-term reliability rather than immediately, which makes it particularly difficult for the owner to connect to the quality of the original rebuild.",
                    "For N57D30 diesel inline-six units — the most common engine we rebuild in the X5 range — the process centres on the timing chain tensioner system, the EGR circuit, and the swirl flap condition in addition to the standard internal component assessment. A higher-mileage N57 in an X5 that has seen sustained motorway use, towing loads, or stop-start urban cycles presents different internal wear patterns than the same engine in a lighter vehicle — and those patterns inform which components are replaced and to what standard.",
                    "For S63B44 V8 units fitted to the X5 M across E70, F15, and G05 generations, the rebuild centres on the rod bearing system. The S63's documented rod bearing failure — where the bearing shells that support the connecting rods wear prematurely under the V8's high oil demand — is the defining fault of this engine and the one that requires the most specific knowledge to address correctly. It is not sufficient to replace the bearing shells and reassemble. The lubrication system architecture that caused the accelerated wear must be understood, assessed, and addressed as part of the rebuild scope, or the same failure will recur.",
                    "Every BMW X5 engine rebuild at Vogue Technics begins with a complete strip-down — every component assessed individually against BMW's factory tolerances for the specific engine code being rebuilt. Anything outside of those tolerances is replaced. The engine is reassembled to factory specifications and tested before going back into the vehicle. What returns to your X5 is not a freshened engine — it is a rebuilt one, with the internal integrity to perform at the level it was originally designed to deliver.",
                  ],
                },
                {
                  title: "Engine Repair",
                  paragraphs: [
                    "Not every BMW X5 engine fault requires a full rebuild — and recommending one when a targeted repair will genuinely resolve the problem is not something we do. Our BMW X5 engine repair service begins where all good engine work begins: with an accurate diagnosis, carried out with proper equipment and genuine knowledge of the specific engine fitted to the vehicle being assessed.",
                    "The fault patterns across the X5 engine range are varied enough that a diagnostic process which does not account for engine-specific failure modes will miss things that matter. An N57D30 timing chain tensioner losing hydraulic pressure looks different on the diagnostic equipment from an M57 chain stretch. An S63B44 rod bearing developing early-stage wear produces a specific oil pressure behaviour under load that is distinct from a general lubrication fault. An N55 VANOS solenoid fault affects fuelling and throttle response in ways that are routinely misidentified as injector problems by workshops unfamiliar with the system.",
                    "We carry out the diagnostic process at the level of specificity the X5 engine range demands — identifying the actual fault in the actual engine, not the most likely fault in the most common BMW diesel or petrol. Once the fault is precisely identified, we address it directly and completely. Bearing replacement, oil leak repair from deteriorating seals, valve damage, sensor faults, EGR system cleaning, swirl flap replacement, VANOS solenoid work — whatever the repair requires, we carry it out correctly with components appropriate to the specific engine code. You pay for what your engine actually needs, and you receive a clear explanation of what that is and why before any work begins.",
                  ],
                },
                {
                  title: "Engine Replacement",
                  paragraphs: [
                    "There are circumstances where engine replacement is the most commercially sensible path forward on a BMW X5 — and we identify them honestly rather than defaulting to it as a convenient recommendation or avoiding it when the evidence genuinely supports it.",
                    "When an S63B44 rod bearing failure has progressed to the point where debris has circulated through the lubrication system and contaminated multiple bearing surfaces, a full rebuild may cost more than a quality reconditioned unit of the same specification. When N57 swirl flap debris has caused widespread combustion chamber scoring across multiple cylinders, replacement may be the more practical choice depending on the vehicle's overall value and the owner's long-term plans for it. When an M57 in a high-mileage E70 has failed across multiple systems simultaneously, the economics of replacement versus rebuild need to be assessed honestly and transparently — which is exactly what we do.",
                    "We source reconditioned BMW X5 engines from trusted UK suppliers across all engine families — M57, N57, B57, N55, B58, S63, and N47 — with verified mileage and service histories appropriate to the specific engine code and application. An S63B44 reconditioned unit requires different sourcing criteria than an N57D30 diesel unit, and we apply those criteria rather than accepting whatever is available at the lowest price point. Every unit undergoes thorough pre-installation testing at our Grays workshop — compression across all cylinders, oil condition analysis, and a full integrity assessment before installation is confirmed. We verify what we install. Our name goes on the work, and that means every reconditioned unit we fit has been assessed to a standard we are confident standing behind.",
                  ],
                },
                {
                  title: "Engine Swap",
                  paragraphs: [
                    "A BMW X5 engine swap is a more complex undertaking than on almost any other vehicle in the BMW range — and the complexity comes from the X5's architecture rather than from the engine itself. The xDrive AWD system, the eight-speed ZF automatic transmission, and the sophisticated electronics of later F15 and G05 models create integration requirements that extend well beyond the engine mounting points and the wiring connector. Every swap on the X5 platform requires the replacement engine to communicate correctly with the transfer case management, the rear differential electronics, the transmission control unit, and the engine control module simultaneously — from the moment of first start, not after a settling-in period.",
                    "Whether you are upgrading from an earlier N57D30 to a later B57D30 for improved refinement and Euro 6 compliance, replacing a damaged S63B44 with a verified lower-mileage unit of the correct generation specification, or fitting a different engine variant into an existing X5 chassis for a specific purpose, every element of the swap must be handled with a complete understanding of how the xDrive platform functions as an integrated whole.",
                    "Our engine swap service covers the complete scope from removal through to comprehensive post-installation diagnostics — mounting hardware, ancillary system connections, cooling circuit adaptation where required, wiring loom integration, ECU configuration appropriate to the replacement unit's variant code, and full diagnostic scanning across all control modules before the vehicle is returned. We do not consider the swap complete until the engine is running correctly, the transmission is shifting properly through the xDrive integration, and no fault codes are present across any relevant module. A swap carried out at that level of thoroughness extends your vehicle's life significantly and restores its performance completely. One carried out without genuine platform knowledge and proper post-installation verification creates integration problems that are difficult to diagnose and expensive to resolve.",
                  ],
                },
                {
                  title: "Engine Health Check",
                  paragraphs: [
                    "The BMW X5 engine health check at Vogue Technics is not a standard diagnostic scan with a written summary attached. It is an inspection structured around the specific engine fitted to your vehicle — which means the assessment covers the fault areas that are genuinely relevant to that engine at that mileage and in that application, rather than running a generic BMW process across the board.",
                    "For N57D30 diesel units, the inspection prioritises timing chain tensioner hydraulic pressure evaluation, EGR cooler integrity assessment, swirl flap condition, oil separator performance, and turbocharger wastegate response — because these are the systems most likely to be developing problems on an N57 in X5 application, where higher vehicle weight and heavier use accelerate the progression of every fault compared to the same engine in a lighter vehicle.",
                    "For N55 and B58 petrol units, the inspection focuses on VANOS system operation, timing chain condition, boost system integrity, and the fuel system behaviour under load — because these are the areas where these engines most commonly develop faults on higher-mileage X5 units.",
                    "For S63B44 V8 units, rod bearing condition assessment is central to the inspection — evaluating oil pressure behaviour under load across the full rev range, assessing bearing noise on cold start and under sustained load, and reviewing oil consumption patterns that may indicate early bearing degradation before catastrophic failure occurs. This is the inspection element that matters most to X5 M owners, and it is the element that generic BMW health checks most frequently overlook or underassess.",
                    "Compression testing is carried out across all cylinders for all engine variants. Oil condition and contamination analysis identifies signs of coolant ingress, abnormal wear metal content, or fuel dilution. Full electronic diagnostic scanning covers all relevant control modules — engine management, transmission, xDrive AWD, and emissions systems — to surface stored and active fault codes including those previously cleared. A detailed visual inspection of all accessible engine components, fluid systems, hoses, and ancillaries completes the process.",
                    "You receive a written report in plain, direct language — precise findings for each system assessed, recommendations ranked by urgency, and an honest account of your engine's actual condition. There is no upselling built into this service and no fault is exaggerated to generate additional work. If the engine is in sound condition, the report says so clearly. If the S63 rod bearings are showing early pressure irregularity, if the N57 tensioner circuit is losing pressure, if the swirl flaps are cracked and debris risk is developing — you will know exactly what each finding means, what the consequence of addressing it now versus later looks like, and what the correct scope of intervention is. Everything you need to make a fully informed decision about your BMW X5, delivered honestly and without agenda.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm"
                >
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">{item.title}</h3>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    {item.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UK-WIDE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "UK-Wide Engine Service Backed by Local Expertise in Grays, Essex",
                paragraphs: [
                  "The BMW X5 range spans five chassis generations and some of the most demanding engines BMW has ever produced. We serve X5 owners right across the United Kingdom from our Grays workshop — not just those within driving distance of Essex.",
                  "Engine Collection & Return Delivery Nationwide",
                  "Cannot travel to Grays? That is not a barrier. We offer engine collection and return delivery covering the whole of the United Kingdom. Send your unit to us and it comes back rebuilt, repaired, or replaced — fully tested and ready to install. For customers who need local fitting, we can connect you with our approved BMW installer network across the country.",
                  "Written Warranty on Every Engine Job",
                  "Every rebuild, replacement, and major repair completed at Vogue Technics is backed by a written warranty — whether the engine is a four-cylinder N47 diesel or an S63B44 V8 twin-turbo. We are confident in the standard of our work, and we want you to share that confidence before you commit. Warranty terms are explained clearly at the point of booking, without ambiguity.",
                ],
              },
              {
                title: "Ready to get your BMW X5 back on the road — properly rebuilt by people who know every engine in the range?",
                paragraphs: [
                  "Call Vogue Technics today or submit an online enquiry for a fast, honest, no-obligation quote. We are based in Grays, Essex, and we serve BMW X5 owners right across the United Kingdom. Whatever chassis, whatever engine, whatever the problem — trust the specialists who know the full X5 range inside and out.",
                ],
                cta: true,
              },
            ].map((block) => (
              <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{block.title}</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {"cta" in block && block.cta ? (
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                    >
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="tel:+441375898109"
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" /> Call Now
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Our <span className="text-primary italic">Customers</span> Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Richard H., London",
                  quote:
                    "Vogue Technics diagnosed the S63B44 rod bearing issue on my X5 M correctly — something two other workshops had missed entirely. The rebuild was carried out to an exceptional standard and the car has been faultless since. Genuine specialists who know this engine specifically.",
                },
                {
                  name: "Karen T., Birmingham",
                  quote:
                    "The N57 timing chain tensioner had been failing in my X5 30d for months before I found Vogue Technics. They caught it before the chain jumped, completed a full timing chain system replacement, and saved me from what would have been a catastrophic rebuild. Cannot recommend highly enough.",
                },
                {
                  name: "Alistair P., Edinburgh",
                  quote:
                    "Arranged engine collection from Edinburgh without any difficulty. The rebuilt M57 came back ahead of schedule, perfectly packaged, and the car drives better now than it has in years. Outstanding knowledge of the full X5 engine range.",
                },
              ].map((r) => (
                <div key={r.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary text-base">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-5">&ldquo;{r.quote}&rdquo;</p>
                  <div className="text-sm font-bold text-slate-900">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW X5 Engine Services</span>
          </>
        }
        items={faqs}
      />

      <PartnerLogos />
    </div>
  );
}

