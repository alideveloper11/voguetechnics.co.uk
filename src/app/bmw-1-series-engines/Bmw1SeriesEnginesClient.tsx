"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_clip_1s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_clip_1s)">
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

const modelCards = [
  { title: "BMW 114D Engines", href: "/bmw-114d-engines" },
  { title: "BMW 114i Engines", href: "/bmw-114i-engines" },
  { title: "BMW 116D Engines", href: "/bmw-116d-engines" },
  { title: "BMW 116i Engines", href: "/bmw-116i-engines" },
  { title: "BMW 118D Engines", href: "/bmw-118d-engines" },
  { title: "BMW 118D xDrive Engines", href: "/bmw-118d-xdrive-engines" },
  { title: "BMW 118i Engines", href: "/bmw-118i-engines" },
  { title: "BMW 120D Engines", href: "/bmw-120d-engines" },
  { title: "BMW 120D xDrive Engines", href: "/bmw-120d-xdrive-engines" },
  { title: "BMW 120i Engines", href: "/bmw-120i-engines" },
  { title: "BMW 123D Engines", href: "/bmw-123d-engines" },
  { title: "BMW 125D Engines", href: "/bmw-125d-engines" },
];

const reviews = [
  {
    name: "James O., London",
    quote:
      "Vogue Technics rebuilt the N47D20C in my 118d after catastrophic timing chain failure. The diagnosis was spot on, the communication throughout was excellent, and the engine has performed without a single issue since. These are genuine BMW engine specialists   I would not go anywhere else.",
  },
  {
    name: "Laura B., Manchester",
    quote:
      "I received two quotes significantly higher elsewhere for an engine replacement on my 1 Series F20. Vogue Technics were completely transparent from the first call, priced the job fairly, finished ahead of the confirmed timeframe, and provided a full written warranty. Exceptional service from start to finish.",
  },
  {
    name: "Craig M., Glasgow",
    quote:
      "Sent my 118d engine down from Glasgow after the B47 turbo caused internal damage. It came back rebuilt to an outstanding standard, securely packaged, and exactly on the date promised. The car runs better than it has in years. Cannot recommend Vogue Technics highly enough.",
  },
];

const faqs = [
  {
    question: "How much does a BMW 1 Series engine rebuild cost in the UK?",
    answer:
      "Rebuild costs depend on the engine code   N47D20C, N47D20B, B47D20A, B47D20B, or B47D20D   and the extent of internal wear or damage found on strip-down. We provide this service to you at a rate 40% lower than the dealer. Contact us for a bespoke, fully itemised quote specific to your vehicle, engine code, and presenting fault.",
  },
  {
    question: "What are the most common engine faults on the BMW 1 Series F20/F21?",
    answer:
      "The most frequently reported issues include timing chain tensioner failure on the N47 family, turbo actuator failure on the B47D20A, swirl flap collapse on the N47D20C, crankcase ventilation faults on the B47D20D, EGR system failures across both engine families, and glow plug and ECU calibration issues on the B47D20B. Early, accurate diagnosis consistently produces the best financial outcome.",
  },
  {
    question: "Is it worth rebuilding a BMW 1 Series engine?",
    answer:
      "In the majority of cases, yes   particularly when the vehicle is otherwise in sound mechanical and cosmetic condition. A properly executed rebuild extends the life of your 1 Series significantly and costs considerably less than a replacement vehicle at current UK market prices.",
  },
  {
    question: "Do you supply reconditioned or used BMW 1 Series engines?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used engines for the 1 Series F20/F21 on both supply-only and supply-and-fit basis, with nationwide UK delivery available. All units are sourced from vetted suppliers and inspected in-house before despatch.",
  },
  {
    question: "How long does a BMW 1 Series engine rebuild take?",
    answer:
      "Most full rebuilds are completed within 5–10 working days from receipt of the engine. We confirm your exact timeframe at booking and we honour it without exception.",
  },
  {
    question: "Do you cover the whole of the UK?",
    answer:
      "Absolutely. Our workshop is in , but we serve BMW 1 Series owners across the entire United Kingdom through our engine collection, delivery, and approved installer network.",
  },
  {
    question: "Is there a warranty on rebuilt and replacement engines?",
    answer:
      "Yes. Every engine rebuild, replacement, and major repair at Vogue Technics is backed by a written warranty. All terms are communicated clearly at the point of booking   no ambiguity, no small print, no surprises.",
  },
];

export default function Bmw1SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 1 Series Engine Specialists"
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "BMW Engines", href: "/bmw-engines" },
              { name: "BMW 1 Series", href: "/bmw-1-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 1 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 1 Series Engine Rebuild
              </span>{" "}
                Specialist Repairs, Replacements &amp; Reconditioning Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 mb-8 flex w-full flex-col items-center justify-center"
            >
              <RegSearch />
            <HeroTrustLabels className="mt-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 text-slate-700 leading-relaxed">
            <p>
              We specialise in BMW engine work across the full 1 Series range   covering the F20 and F21 generations from 2011 through to 2019,
              across the N47 and B47 engine families. With over 25 years of hands-on specialist engine expertise and a reputation built entirely on consistent
              quality workmanship, Vogue Technics is the BMW 1 Series specialist UK owners turn to when the engine needs serious attention.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 1 Series Owners Across the UK Choose Vogue Technics
            </h2>

            <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
              <p>
                Choosing the right specialist for BMW engine work is the single most consequential decision you make when your 1 Series develops a
                serious fault. A generalist garage without model-specific knowledge, the correct diagnostic equipment, or genuine parts experience
                will frequently misdiagnose the root cause   and produce a repair that returns within months. That costs you more financially and
                puts you back at square one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    BMW Engine Specialists With Deep, Model-Specific Knowledge
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Every technician at Vogue Technics focuses on BMW engines as their core discipline. We understand the specific failure
                    characteristics of the 1 Series F20/F21 engine range in genuine, applied depth. This knowledge accumulates from working on these specific engine codes, in these specific configurations, consistently over more than two
                    decades.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    Over 25 Years of Engine Work   Reputation Built on Results
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    We have been rebuilding, repairing, and replacing BMW engines for customers across the United Kingdom for over 25 years. Our
                    standing nationally has been built through the quality of work we consistently deliver. When we fix your BMW 1 Series engine, the repair holds.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Completely Transparent Pricing Before Any Work Begins
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Engine work on a premium rear-wheel-drive hatchback carries real financial weight. We provide a fully itemised, transparent quote before a single component is touched. Call us directly or submit an online enquiry to receive your no-obligation quote today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIND YOUR BMW (1 SERIES VARIANTS) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Find your <span className="text-primary">BMW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelCards.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <Link href={m.href} className="group block h-full">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW 1 Series Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW 1 Series vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N47 and B47 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N47D20C, N47D20B, B47D20A, B47D20B, and B47D20D — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all 1 Series variants — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild covering pistons, bearings, seals, and gaskets — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all 1 Series variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable 1 Series petrol variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
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

      {/* UK-WIDE SERVICE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8 text-slate-700 leading-relaxed">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              UK-Wide BMW Engine Service From Our Workshop in 
            </h2>
            <p>
              We understand what it means to have your BMW 1 Series off the road   particularly if it is your primary vehicle and every day without
              it carries a real, tangible cost. We work with genuine urgency at every stage, without allowing that urgency to compromise a single
              aspect of the standard we deliver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Engine Collection and Delivery Nationwide</h3>
                <p className="mt-3">
                  Cannot travel to our workshop? We collect engines from anywhere in the United Kingdom, carry out all work at our facility, and return your rebuilt
                  or replacement unit fully tested and ready for installation.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Confirmed Turnaround Times   Delivered Without Exception</h3>
                <p className="mt-3">
                  Most full engine rebuilds are completed within 5–10 working days from the point the engine is received. We give you a confirmed timeframe at booking and we deliver on it.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 md:col-span-2">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Written Warranty on Every Engine Service</h3>
                <p className="mt-3">
                  Every rebuild, replacement, and major repair completed at Vogue Technics is backed by a written warranty. We stand fully behind the quality of our workmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <h2 className="bg-primary text-white text-3xl md:text-5xl font-bold px-6 py-3 rounded-lg shadow-lg tracking-tight uppercase italic">
                What Our BMW 1 Series Customers Say
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">Verified</span>
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="border-t border-slate-50 pt-6">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 1 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Ready to get your BMW 1 Series back on the road performing exactly as it should?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5"
            >
              Book online
            </Link>
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 mr-2 text-primary" /> 01375 531355
            </a>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

