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
        <clipPath id="bmw_roundel_clip_x1">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_x1)">
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
  { title: "BMW X1 sDrive 16d Engines", href: "/bmw-x1-sdrive16d-engines" },
  { title: "BMW X1 sDrive 18d Engines", href: "/bmw-x1-sdrive18d-engines" },
  { title: "BMW X1 sDrive 20d Engines", href: "/bmw-x1-sdrive20d-engines" },
  { title: "BMW X1 xDrive 18d Engines", href: "/bmw-x1-xdrive18d-engines" },
  { title: "BMW X1 xDrive 20d Engines", href: "/bmw-x1-xdrive20d-engines" },
  { title: "BMW X1 xDrive 23d Engines", href: "/bmw-x1-xdrive23d-engines" },
  { title: "BMW X1 xDrive 25d Engines", href: "/bmw-x1-xdrive25d-engines" },
];

const faqs = [
  {
    question: "How much does a BMW X1 engine rebuild cost in the UK?",
    answer:
      "Costs depend on the engine family and the extent of wear or damage. A full rebuild on an N47 or B47 diesel typically starts from around £1,800–£3,500. Petrol variant rebuilds are priced based on the specific unit and condition. Contact us for a fully itemised, bespoke quote based on your specific X1 and its condition.",
  },
  {
    question: "What are the most common BMW X1 engine problems?",
    answer:
      "The most frequently reported issues include N47 timing chain tensioner failure on E84 diesel variants   one of the most documented failures in BMW diesel history   B47 timing chain vulnerabilities on F48 diesel variants, B38 three-cylinder head gasket failure on F48 petrol variants, turbocharger wear across diesel and petrol turbocharged units, and EGR system faults on diesel examples. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is BMW X1 N47 timing chain failure really that serious?",
    answer:
      "Yes   and it deserves treating with urgency. The N47 timing chain tensioner failure has caused catastrophic engine damage on a very significant number of vehicles. A cold-start rattle that clears after a few seconds is the definitive early warning. Do not continue driving an X1 diesel that produces this sound. Book a diagnostic immediately.",
  },
  {
    question: "Is it worth rebuilding a BMW X1 engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition and has a low remaining finance balance or has been purchased outright. A properly executed rebuild extends the X1's working life considerably and represents far better value than replacing the vehicle.",
  },
  {
    question: "Do you provide a warranty on rebuilt and reconditioned BMW X1 engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are explained and agreed before any work begins.",
  },
  {
    question: "Do you cover all three BMW X1 generations?",
    answer:
      "Yes. We work across E84, F48, and U11 X1 generations, covering N47, B47, B38, B48, N20, and applicable N52 engine families across diesel, petrol, and PHEV configurations.",
  },
  {
    question: "Do you offer a BMW X1 engine fitting service?",
    answer:
      "Yes. We offer complete supply and fit at our  workshop. For customers elsewhere in the UK, we arrange fitting through our approved installer network. We also offer a fully managed engine collection and return service.",
  },
  {
    question: "How long does a BMW X1 engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the engine and scope of work. Your confirmed timeframe is agreed at booking.",
  },
];

export default function BmwX1EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW X1 Engine Specialists"
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
              { name: "BMW X1", href: "/bmw-x1-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW X1 Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-primary italic">BMW X1</span> Engine Rebuild   Expert Reconditioning, Repair &amp;
              Replacement Across the UK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
            >
              The BMW X1 has earned its place as one of the most popular premium compact SUVs on UK roads   and for good
              reason. It is practical, refined, well-built, and genuinely enjoyable to drive in a way that few
              competitors in its class match. Whether you own an E84, an F48, or a newer U11 variant, the X1 is a
              vehicle worth looking after properly. And when the engine starts causing problems, it deserves to be
              fixed by people who understand BMW engines at a genuinely technical level   not a generalist garage that
              will attempt anything and specialise in nothing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-base md:text-lg text-slate-200 leading-relaxed mb-10"
            >
              At Vogue Technics, based in , we carry out BMW X1 engine rebuilds, repairs, timing chain
              replacements, turbo replacements, head gasket repairs, and complete engine reconditioning across all
              three X1 generations and all engine families. The N47 diesel&apos;s timing chain vulnerabilities, the B47&apos;s
              continuation of those risks into the F48 generation, the three-cylinder B38&apos;s specific failure patterns,
              the turbocharger wear across both diesel and petrol variants   we understand all of it from over 25 years
              of specialist BMW engine experience. If your X1 needs engine work, you have found the right workshop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
              transition={{ delay: 0.35 }}
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
              {findYourBmwCards.map((card, idx) => (
                <Link
                  key={`${card.href}-${idx}`}
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
                        Read more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
                Why BMW X1 Owners Choose <span className="text-primary italic">Vogue Technics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "BMW Engine Specialists Who Know the X1 Across All Generations",
                  text: [
                    "The BMW X1 has changed significantly across its three generations   and so have the engine families fitted to it. The E84's N47 diesel carries one of the most documented timing chain vulnerabilities in BMW's modern diesel history. The F48's B47 diesel carries forward a related but distinct tensioner failure risk. The F48's B38 three-cylinder petrol presents its own specific head gasket and timing concerns. The B48 four-cylinder petrol units are more robust but not without their own failure patterns at higher mileages.",
                    "Knowing which engine is in your X1   and what that engine specifically does when it begins to fail   is the foundation of diagnosing and fixing it correctly. That knowledge only comes from having worked on these engines repeatedly, across multiple generations, in a workshop that focuses on BMW rather than spreading its attention across every make that comes through the door.",
                    "That is precisely what we do at Vogue Technics.",
                  ],
                },
                {
                  title: "Over 25 Years of BMW Engine Work From ",
                  text: [
                    "We have been working on BMW engines from our  workshop since long before the first X1 was produced. In that time we have built a reputation across  and the wider UK that has been earned entirely through the quality of our work. Our customers come to us through referrals from other BMW owners   because the standard we maintain means the vehicles we work on keep running long after they leave our workshop.",
                  ],
                },
                {
                  title: "Honest Pricing, Clear Communication, No Surprises",
                  text: [
                    "We understand that engine trouble on a family SUV is stressful   and that the cost of repair is often the most pressing concern. We provide fully itemised, clearly explained written quotes before any work begins. Every job is priced transparently and agreed upfront. There are no additions that appear without warning on collection day, and no estimates that quietly become something larger.",
                    "Call us or submit an online enquiry for a fast, no-obligation quote specific to your X1, its generation, its engine, and the work it needs.",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
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
                Our Complete <span className="text-primary italic">BMW X1</span> Engine Services
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Head Gasket Replacement & Head Gasket Repair",
                  paragraphs: [
                    "Head gasket failure on the BMW X1 varies in character depending on the engine in question. On the B38 three-cylinder petrol engine   fitted to F48 sDrive16i and sDrive18i variants   the three-cylinder configuration creates specific thermal stresses that the head gasket is more susceptible to than on four-cylinder equivalents. On diesel variants, sustained high-boost operation under mixed urban and motorway use contributes to head gasket stress over higher mileages.",
                    "The signs are consistent regardless of engine family   white or grey exhaust smoke that clears slowly after a cold start, coolant that needs topping up without any visible external leak, oil that has taken on a contaminated or milky appearance, or an engine temperature that sits higher than it used to. Any of these symptoms on an X1 needs prompt investigation.",
                    "We carry out BMW X1 head gasket replacement using OEM-grade sealing components, with a full cylinder head inspection covering surface flatness measurement, crack testing, and complete structural assessment before any reassembly begins. A head gasket repair done correctly holds. Done inadequately, it creates the same failure on a shorter timeline.",
                  ],
                },
                {
                  title: "Timing Chain Replacement & Timing Chain Repair",
                  paragraphs: [
                    "BMW X1 N47 timing chain replacement is the single most important engine service topic for owners of E84 diesel variants   and it is one of the most well-documented failure patterns in BMW's modern diesel history. The N47D20 engine fitted to the sDrive18d, xDrive18d, xDrive20d, and xDrive23d variants carries a timing chain tensioner failure risk that has resulted in catastrophic engine damage on thousands of vehicles across the UK.",
                    "The tensioner is located at the rear of the engine   which means access for inspection is more complex than on many other diesel units. The cold-start rattle is the most reliable early warning: a brief metallic clatter at start-up that disappears within a few seconds as oil pressure builds. That sound means the chain has stretched beyond reliable tensioner compensation. Continued operation from that point is not safe.",
                    "The F48 generation's B47 diesel carries a related but distinct timing chain tensioner vulnerability   the failure pattern differs from the N47 in some characteristics but shares the same fundamental consequence when the tensioner fails.",
                    "Do not ignore a cold-start rattle on any BMW X1 diesel. The internal damage that follows full timing chain failure on either the N47 or B47 is extensive and expensive.",
                    "We carry out BMW X1 timing chain replacement as a complete system job across all affected engine families   chain, tensioners, guides, and sprockets replaced together as a full kit without exception. We also handle BMW X1 timing chain repair where secondary valve train damage has already occurred alongside the primary failure, restoring correct engine timing before the vehicle returns to the road.",
                  ],
                },
                {
                  title: "Turbo Replacement & Turbocharger Service",
                  paragraphs: [
                    "Turbocharger failure on the BMW X1 presents across both the diesel and petrol turbocharged variants   and the mixed-use driving pattern typical of a family SUV creates a specific turbo wear profile. Short cold journeys, school runs, urban stop-start driving interspersed with motorway runs place particular stress on turbo bearings   particularly when oil is cold and hasn't reached full operating temperature before the engine is worked hard.",
                    "On X1 diesel variants, power that softens progressively, increased exhaust smoke under acceleration, or a whistling noise that appears under boost are the signs to act on. On petrol turbocharged variants   the B48 in particular   similar symptoms present alongside potentially more sudden onset turbo failure at higher mileages.",
                    "We source and fit quality replacement turbochargers for all BMW X1 engine variants   diesel and petrol   with full post-installation testing covering boost pressure, oil feed integrity, and fault-free operation before the vehicle leaves our workshop. We assess the complete oil feed and return system on every turbo job   because a turbo fitted without addressing why the previous unit failed simply repeats the failure.",
                  ],
                },
                {
                  title: "Engine Rebuild",
                  paragraphs: [
                    "A full BMW X1 engine rebuild is the most thorough solution available   and for an X1 that has accumulated significant mileage in mixed family use, it is frequently the most sensible long-term investment the owner can make. We strip the engine completely, measure every internal component against factory tolerances, replace everything outside specification, and reassemble with the care and precision that a quality rebuild requires.",
                    "Whether the engine in question is an N47 diesel on an E84, a B47 on an F48, a B38 three-cylinder petrol, or a B48 four-cylinder unit, the rebuild process is applied specifically to that engine's characteristics   because each family has its own wear profile and its own rebuild considerations.",
                  ],
                },
                {
                  title: "Engine Repair",
                  paragraphs: [
                    "Not every BMW X1 engine problem requires a full rebuild. Our BMW X1 engine repair and engine fault repair service begins with thorough diagnostic work   full electronic fault scanning, compression testing, oil analysis, and systematic physical inspection   so the work carried out is precisely targeted to the actual fault.",
                    "Oil leaks from ageing seals and gaskets, EGR system faults on diesel variants, VANOS system wear on petrol units, injector issues, sensor failures, and cooling system faults all fall within our standard engine repair scope. We identify the root cause and address it   not the most convenient surface symptom.",
                  ],
                },
                {
                  title: "Engine Replacement & Engine Swap",
                  paragraphs: [
                    "When internal damage has progressed beyond economical repair, we supply and fit reconditioned and low-mileage used BMW X1 engines across all generations and engine families   every unit sourced from verified suppliers and assessed before installation. Our BMW X1 engine swap service covers scenarios where a direct like-for-like replacement is not the objective, managing the complete process including ECU calibration, ancillary adaptation, and post-swap diagnostic verification.",
                  ],
                },
                {
                  title: "Timing Belt Replacement",
                  paragraphs: [
                    "Certain BMW X1 configurations   particularly some earlier E84 petrol variants   incorporate timing belt components within the valve train system. A timing belt fails without meaningful warning, and when it does, engine damage is immediate and total. We carry timing belt kits for all applicable X1 engine configurations and recommend replacement at or ahead of BMW's specified service intervals on any vehicle with an incomplete service history.",
                  ],
                },
                {
                  title: "Engine Health Check & Diagnostic",
                  paragraphs: [
                    "Not certain what is wrong with your X1? Or considering buying a used E84 or F48 and wanting an honest assessment of the engine's condition   particularly the timing chain system on diesel variants   before you commit? Our BMW X1 engine health check and engine inspection covers full compression testing across all cylinders, oil condition analysis, comprehensive electronic diagnostic scanning, and a thorough visual inspection including timing system assessment.",
                    "You receive a written report with clear, honest findings. No upselling, no manufactured urgency   just the accurate information you need to make the right decision about your vehicle.",
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
                title: "Fast UK-Wide Service From Our  Workshop",
                paragraphs: [
                  "Engine Collection & Return   Full UK Coverage",
                  "Not local to ? That is not a barrier. We operate a fully managed engine collection and delivery service covering the whole of the United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced   fully tested and ready to install. We also work with a trusted network of approved fitting partners nationwide for customers who need local installation.",
                  "Confirmed Turnaround Times   Realistic and Delivered",
                  "Most BMW X1 engine rebuilds are completed within 5–10 working days from parts confirmation. Repairs and replacements are frequently completed more quickly. We confirm your specific timeframe at booking and communicate clearly if anything changes.",
                  "Written Warranty on Every Job",
                  "Every engine rebuild, repair, and replacement that leaves Vogue Technics carries a written warranty. We stand behind our work because we are confident in the standard it is done to   and we want every X1 owner who trusts us to drive away with complete confidence in what has been done.",
                ],
              },
              {
                title: "Ready to get your BMW X1 back on the road properly?",
                paragraphs: [
                  "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We are based in , and serve BMW owners right across the United Kingdom. Your X1 deserves more than a generalist approach   and that is precisely what we provide.",
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

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW X1 Engine Work</span>
          </>
        }
        items={faqs}
      />

      <PartnerLogos />
    </div>
  );
}

