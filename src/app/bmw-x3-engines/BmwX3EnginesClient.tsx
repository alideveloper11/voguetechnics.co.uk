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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW X3 Engine Rebuild
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
                    "The X3 has been produced across three chassis generations   E83, F25, and G01   with engines spanning the N47D20, N57D30, B47D20, B57D30, N20, N55, and B48 families. Each has specific failure modes and rebuild requirements. Our technicians work across all of them   consistently, not occasionally.",
                  ],
                },
                {
                  title: "Over 25 Years of BMW Engine Work From ",
                  text: [
                    "Vogue Technics has been operating for over two decades, building a reputation entirely through the quality of our work. BMW X3 owners come to us from across the country because genuine specialist knowledge of this range   particularly the N57 inline-six   is harder to find than most owners realise.",
                  ],
                },
                {
                  title: "Transparent Quotes, No Hidden Costs",
                  text: [
                    "Every job at Vogue Technics begins with a clear, itemised quote before any work is authorised. No vague estimates, no costs that appear later in the process   you know exactly what the job involves and what it costs before we start.",
                  ],
                },
              ].map((block) => (
                <div key={block.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-900 mb-4">{block.title}</h3>
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
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW X3 Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW X3 vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N47, N57, B47, and B57 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N47D20, N57D30, B47, and B57 units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable X3 variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all X3 diesel and petrol variants — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild for N47, N57, B47, and B57 units — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all X3 variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
              { title: "Engine Health Check", body: "Professional diagnostics covering fault codes, oil condition, coolant, and belt/chain inspection — full written report provided.", href: "/services/engine-health-check" },
            ].map((s) => (
              <div key={s.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">{s.body}</p>
                </div>
                <div className="pt-4">
                  <Link href={s.href} className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors">
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK-WIDE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "UK-Wide BMW X3 Engine Service From Our Workshop",
                paragraphs: [
                  "We collect and return engines across the whole of the UK — send your unit to us and it comes back rebuilt, repaired, or replaced, fully tested and ready to install.",
                  "Most X3 engine rebuilds are completed within 5–10 working days. Every job carries a written warranty.",
                ],
              },
              {
                title: "Ready to get your BMW X3 back on the road?",
                paragraphs: [
                  "Contact Vogue Technics for a fast, no-obligation quote. We serve BMW X3 owners right across the United Kingdom.",
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
                      href="/get-quote"
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

