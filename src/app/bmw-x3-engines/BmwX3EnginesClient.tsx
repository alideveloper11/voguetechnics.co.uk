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
        <clipPath id="bmw_roundel_clip_x3">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_x3)">
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
  { title: "BMW X3 xDrive 28d Engines", href: "/bmw-x3-xdrive28d-engines" },
  { title: "BMW X3 xDrive 30d Engines", href: "/bmw-x3-xdrive30d-engines" },
  { title: "BMW X3 xDrive 35d Engines", href: "/bmw-x3-xdrive35d-engines" },
];

const faqs = [
  {
    question: "How much does a BMW X3 engine rebuild cost in the UK?",
    answer:
      "Rebuild costs vary depending on the engine variant and the extent of internal wear identified during strip-down. We provide this service to you at a rate 40% lower than the dealer. Contact us directly for an accurate, itemised quote based on your specific engine and its condition.",
  },
  {
    question: "What are the most common engine problems on the BMW X3?",
    answer:
      "The most frequently encountered issues vary by engine. On N47 units   rear timing chain wear and failure. On N57 units   timing chain tensioner failure, EGR cooler cracking, swirl flap debris, and turbo wastegate actuator wear. On B47 and B57 units   front timing chain wear, EGR fouling, and high-pressure fuel pump degradation. Early diagnosis on all of these significantly reduces the eventual repair cost.",
  },
  {
    question: "Is it worth rebuilding a BMW X3 engine?",
    answer:
      "In the vast majority of cases, yes   particularly where the rest of the vehicle is in sound mechanical condition. A properly executed rebuild restores full performance and reliability at a cost substantially lower than sourcing a replacement vehicle of comparable specification and condition.",
  },
  {
    question: "Do you work on all BMW X3 chassis generations?",
    answer:
      "Yes. We carry out engine work on E83, F25, and G01 chassis X3 models, covering all engine families fitted across those generations   N47, N57, B47, B57, N20, N55, and B48.",
  },
  {
    question: "Do you provide a written warranty on BMW X3 engine work?",
    answer:
      "Yes. Every rebuild, replacement, and major repair completed at Vogue Technics comes with a written warranty. Full terms are agreed clearly before any work begins.",
  },
  {
    question: "Can you supply and fit the engine, or do you only supply?",
    answer:
      "We offer full supply and fit at our  workshop. For customers located elsewhere in the UK, fitting can be arranged through our approved BMW installer network.",
  },
  {
    question: "How long does a BMW X3 engine rebuild take?",
    answer:
      "Four-cylinder rebuilds are typically completed within 5–10 working days. Inline-six N57 and B57 rebuilds may take 7–12 working days depending on the parts required. We confirm your exact timeframe at booking and honour it.",
  },
  {
    question: "Can I arrange engine collection from anywhere in the UK?",
    answer:
      "Absolutely. We collect and return engines across the whole of the United Kingdom. Many of our BMW X3 customers are not local to , and the process is managed smoothly from first contact through to delivery.",
  },
];

export default function BmwX3EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW X3 Engine Specialists"
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
              { name: "BMW X3", href: "/bmw-x3-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW X3 Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-primary italic">BMW X3</span> Engine Rebuild   Specialist Engine Repairs, Rebuilds
              &amp; Replacements Across the UK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
            >
              The BMW X3 has earned its place as one of the most capable and enduring premium SUVs on British roads.
              Whether you own an E83, an F25, or a G01, the X3 is built to cover serious mileage   but even the
              best-engineered diesel eventually reaches a point where the engine needs professional attention. When
              that point arrives, the garage you choose matters enormously.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-base md:text-lg text-slate-200 leading-relaxed mb-10"
            >
              At Vogue Technics, based in , we carry out BMW X3 engine rebuilds, targeted repairs, and
              complete engine replacements across the full X3 range. We work on every engine family fitted to the X3  
              from the four-cylinder N47 and B47 diesel units through to the inline-six N57 and B57 engines fitted to
              the xDrive30d and xDrive35d variants. These are not engines that reward guesswork, and they are not
              engines we approach without the specific knowledge each one demands.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-slate-200 leading-relaxed mb-10"
            >
              With over 25 years of BMW engine experience and a workshop in  that serves owners across the entire
              United Kingdom, we are the specialist choice when your X3 needs more than a general garage can offer.
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Find your BMW</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Why BMW X3 Owners Across the UK Choose <span className="text-primary italic">Vogue Technics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know Every Engine Fitted to the BMW X3",
                  text: [
                    "The X3 has been produced across three chassis generations   E83, F25, and G01   and across that production run it has been fitted with a wide range of engines. The N47D20 four-cylinder diesel with its rear-mounted timing chain. The N57D30 inline-six diesel with its documented timing chain tensioner vulnerabilities, EGR cooler cracking risks, and swirl flap failure patterns. The later B47D20 and B57D30 units with their front-mounted chains and refined but still demanding engineering. The N20, N55, and B48 petrol variants with their own distinct fault characteristics.",
                    "Each of these engines has specific failure modes, specific rebuild requirements, and specific tolerances that must be understood and respected. Our technicians work across all of them   consistently, not occasionally.",
                  ],
                },
                {
                  title: "Over 25 Years of BMW Engine Work From ",
                  text: [
                    "Vogue Technics has been operating from  for over two decades, building a reputation across , London, and the wider UK entirely through the quality of our work and the honesty of our advice. BMW X3 owners come to us from across the country because genuine specialist knowledge of this range   particularly the N57 inline-six   is harder to find than most owners realise until they start looking.",
                  ],
                },
                {
                  title: "Transparent Quotes, No Hidden Costs",
                  text: [
                    "Engine work on a premium BMW SUV is a significant financial commitment, and we treat it as one. Every job at Vogue Technics begins with a clear, itemised quote before any work is authorised   no vague estimates, no costs that appear later in the process. You know exactly what the job involves and what it costs before we start. Contact us by phone or online enquiry for your fast, no-obligation quote.",
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
                Our <span className="text-primary italic">BMW X3</span> Engine Services
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Head Gasket Replacement",
                  paragraphs: [
                    "Head gasket failure on BMW X3 diesel engines   particularly the N47 and N57 units   is more common than many owners expect, and it tends to develop gradually rather than catastrophically. Coolant loss without a visible external leak, white or grey smoke on cold start that clears as the engine warms, or an overheating warning that keeps returning despite coolant top-ups   these are the tell-tale signs that demand immediate professional assessment.",
                    "The N57 inline-six is particularly susceptible to head gasket stress due to its higher thermal loading, and a failed gasket on this engine can allow coolant into the combustion chambers with severe consequences if left unaddressed. We replace head gaskets across all X3 engine variants using OEM-grade components, resurface cylinder heads where required, and pressure-test the cooling system fully before returning the vehicle. Early intervention is always the right decision.",
                  ],
                },
                {
                  title: "Timing Chain Replacement & Repair",
                  paragraphs: [
                    "Timing chain problems affect the BMW X3 diesel range in two distinct ways depending on the engine   and understanding the difference is essential to getting the repair right.",
                    "On the N47D20, the timing chain sits at the rear of the engine block   a design that makes replacement a labour-intensive job requiring genuine familiarity with the engine's architecture. The chain stretches with use and wear, typically producing a cold-start rattle that owners frequently dismiss as normal. It is not. A jumped or snapped N47 timing chain causes immediate and severe internal engine damage.",
                    "On the N57D30 inline-six, the failure mode is different. The timing chain tensioner loses hydraulic pressure before the chain itself becomes critically worn   presenting as subtle symptoms like a slight hesitation at low revs or a timing-related fault code that appears intermittently. By the time the chain rattles audibly on an N57, the problem has already progressed significantly.",
                    "We carry out BMW X3 timing chain replacement on both N47 and N57 engines as complete system jobs   chain, tensioners, guides, and sprockets replaced together. We also carry out timing chain work on B47 and B57 units where required. If your X3 has a cold-start rattle or a timing-related fault code, contact us without delay.",
                  ],
                },
                {
                  title: "Turbo Replacement & Turbocharger Repair",
                  paragraphs: [
                    "Turbocharger problems across the BMW X3 diesel range typically manifest as power loss under acceleration, black or blue smoke under load, a whistling or rattling sound from the engine bay, or sluggish throttle response that has developed gradually rather than suddenly. On the N57 inline-six, wastegate actuator wear is a particularly common cause of inconsistent power delivery   affecting boost control before the turbo fails more completely.",
                    "We source quality replacement turbos for all X3 diesel engine variants   N47, N57, B47, and B57   specified correctly for each application. Every replacement includes correct fitment to manufacturer torque specifications, oil feed and return line inspection and replacement where necessary, and full boost pressure verification post-installation. A turbocharger left to deteriorate risks sending metal debris into the engine oil circuit, compounding the repair significantly   early action is always the right call.",
                  ],
                },
                {
                  title: "Engine Rebuild",
                  paragraphs: [
                    "A BMW X3 engine rebuild is not a uniform process   and any workshop that approaches it as one is already starting from the wrong position. The X3 has been fitted with meaningfully different engines across its three chassis generations, and the rebuild requirements vary significantly between them. An N47D20 four-cylinder rebuild and an N57D30 inline-six rebuild are not the same job in terms of complexity, precision demands, time, or the specific knowledge required to execute either one correctly.",
                    "At Vogue Technics, every BMW X3 engine rebuild begins the same way regardless of variant   with a complete strip-down and a methodical, individual assessment of every internal component under proper workshop conditions. Nothing is assumed to be serviceable based on visual appearance alone. Bearings, piston rings, valve seats, thrust washers, seals, and gaskets are all measured and assessed against BMW's factory tolerances for that specific engine code. Anything that falls outside of those tolerances is replaced   without compromise and without that decision being hidden from you in the final bill.",
                    "The N57 inline-six demands particular respect during the rebuild process. Its six-cylinder architecture, higher output, and more complex internal geometry mean that reassembly to the correct factory specifications requires a level of precision and familiarity that only comes from having worked on these engines consistently over time. We have. The result   regardless of whether the engine is a four-cylinder B47 or a full inline-six N57   is a unit rebuilt to perform and last at the standard the X3 was originally engineered to deliver.",
                  ],
                },
                {
                  title: "Engine Repair",
                  paragraphs: [
                    "Not every BMW X3 engine problem requires a full rebuild, and recommending one when a targeted repair will genuinely resolve the issue is something we simply do not do. Our engine repair service is built around accurate diagnosis first   because the quality of the repair depends entirely on the accuracy of the diagnosis that precedes it.",
                    "We carry out thorough diagnostic work using proper workshop equipment and genuine knowledge of the fault patterns specific to each X3 engine family. The N47's rear timing chain issues present differently to the N57's tensioner-led failure mode. An EGR fault on an N57 inline-six has different root cause characteristics to the same code on a B47 four-cylinder. A turbo wastegate actuator problem on the xDrive30d manifests in ways that a generic BMW diesel diagnosis misses entirely. Getting the diagnosis right is what determines whether the repair resolves the problem permanently   or simply clears the fault code until the underlying issue resurfaces.",
                    "Once we have identified the precise fault, we address it directly and completely. Whether the problem is bearing wear, an oil leak from a deteriorating seal, valve damage, injector seat carbon build-up, a swirl flap fragment causing sensor interference, or an EGR-related fault that has been generating codes for months   we carry out the repair correctly, with components specified for the exact engine being worked on. You pay for what your BMW X3 engine actually requires. Nothing beyond that is recommended, and nothing beyond that is charged.",
                  ],
                },
                {
                  title: "Engine Replacement",
                  paragraphs: [
                    "There are circumstances where engine replacement is the more sensible and cost-effective decision   and we say so clearly when the evidence points that way. When multiple systems have failed simultaneously, when the extent of internal damage from a timing chain failure or turbo disintegration makes a rebuild impractical, or when the overall condition of the engine identified during initial assessment makes replacement more commercially sensible relative to the vehicle's value   replacement is the honest recommendation and the right one.",
                    "We source reconditioned BMW X3 engines from trusted UK suppliers across all engine families   N47, N57, B47, B57, N20, N55, and B48   with verified mileage histories appropriate to the variant being replaced. Every unit undergoes thorough pre-installation testing at our  workshop before anything is fitted to your vehicle. Compression is checked across all cylinders, oil condition is assessed, and the overall integrity of the unit is verified before installation begins. On inline-six N57 and B57 units, we carry out additional assessments given the complexity and value of these engines.",
                    "We do not fit engines we have not verified. Our name goes on every job we complete, and that means every reconditioned unit we install has been assessed to a standard we are confident standing behind   not simply accepted from a supplier and bolted .",
                  ],
                },
                {
                  title: "Engine Health Check",
                  paragraphs: [
                    "The BMW X3 engine health check at Vogue Technics is structured around the specific engines fitted to each chassis generation   which means the assessment you receive is genuinely relevant to your vehicle, not a generic diagnostic process applied uniformly across every BMW that comes through the door.",
                    "For four-cylinder N47 and B47 diesel engines, the health check focuses particularly on timing chain condition, oil feed system integrity, turbocharger response, and EGR system performance   the areas where these engines most commonly develop problems that are well established by the time obvious symptoms appear.",
                    "For inline-six N57 and B57 engines, the assessment goes further. Timing chain tensioner hydraulic pressure behaviour is evaluated alongside chain condition   because on the N57, tensioner failure precedes chain failure and presents with subtler early symptoms. EGR cooler condition is assessed for signs of internal coolant weeping. Swirl flap integrity is checked visually and through inlet manifold pressure response. Oil separator condition is evaluated alongside overall oil consumption behaviour.",
                    "Across all variants, the health check includes compression testing across every cylinder, oil condition and contamination analysis, full electronic diagnostic scanning across all relevant control modules, turbocharger condition and response assessment, and a detailed visual inspection of all accessible engine components, fluid systems, hoses, and ancillaries.",
                    "You receive a written report in plain, direct language at the end of the process. Precise findings. Honest recommendations. A clear account of your engine's actual condition   ranked by urgency, explained without technical evasion, and presented without any upselling agenda. If the engine is in good health, the report will say so. If something is developing beneath the surface   a tensioner showing early signs of pressure drop, an EGR cooler weeping traces of coolant, a turbo with early bearing wear   you will know exactly what it is, what it means for the engine's future reliability, and what addressing it involves. The information you need to make a fully informed decision about your BMW X3, clearly and honestly presented.",
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
                title: "UK-Wide BMW X3 Engine Service From Our  Workshop",
                paragraphs: [
                  "Being without your BMW X3   particularly if it serves as your primary vehicle   is a real and costly disruption. We work efficiently, communicate clearly at every stage, and deliver on the timeframes we commit to.",
                  "Engine Collection & Return Delivery Nationwide",
                  "Cannot reach our  workshop? That is not a barrier. We offer engine collection and return delivery covering the whole of the United Kingdom. Send your unit to us and it comes back rebuilt, repaired, or replaced   fully tested and ready to install. For customers who prefer local fitting, we can connect you with our network of approved BMW installers across the country.",
                  "Written Warranty on Every Engine Job",
                  "Every rebuild, replacement, and major repair completed at Vogue Technics is backed by a written warranty   whether the engine is a four-cylinder N47 or a full inline-six N57. We are confident in the standard of our work, and we want you to have that same confidence before you commit. Warranty terms are explained clearly at the point of booking, without ambiguity or small print.",
                ],
              },
              {
                title: "Ready to get your BMW X3 back on the road   properly rebuilt and properly warranted?",
                paragraphs: [
                  "Call Vogue Technics today or submit an online enquiry for a fast, honest, no-obligation quote. We are based in , and we serve BMW X3 owners right across the United Kingdom. Whatever your engine, whatever the problem   trust the specialists who know the full X3 range inside and out.",
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
                  name: "David R., London",
                  quote:
                    "Vogue Technics rebuilt the N57 in my X3 xDrive30d after a timing chain tensioner failure. The diagnosis was accurate, the communication throughout was excellent, and the engine performs better now than it did before the problem started. Genuinely impressive knowledge of this engine.",
                },
                {
                  name: "Helen T., Birmingham",
                  quote:
                    "I was quoted over £5,000 at a main dealer for an engine replacement. Vogue Technics completed the job for significantly less, with a written warranty and a faster turnaround. Could not be happier with the result.",
                },
                {
                  name: "Andrew M., Glasgow",
                  quote:
                    "Arranged engine collection from Glasgow without any difficulty. It came back beautifully rebuilt, ahead of the promised schedule, and the car has been faultless since. Five stars   without hesitation.",
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
            Frequently Asked Questions   <span className="text-primary italic">BMW X3 Engine Services</span>
          </>
        }
        items={faqs}
      />

      <PartnerLogos />
    </div>
  );
}

