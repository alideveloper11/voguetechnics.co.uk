"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_roundel_clip_2s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_2s)">
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
  { title: "BMW 218D Engines", href: "/bmw-218d-engines" },
  { title: "BMW 220D Engines", href: "/bmw-220d-engines" },
];

const faqs = [
  {
    question: "How much does a BMW 2 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on your engine variant and the extent of internal wear. We provide this service to you at a rate 40% lower than the main dealer. Contact us for a bespoke quote tailored to your specific model and mileage.",
  },
  {
    question: "What are the most common engine problems on the BMW 2 Series?",
    answer:
      "The most frequently reported issues include timing chain wear on the N47 diesel, turbo failure, head gasket failure, and rear main seal oil leaks. Early diagnosis is always the most cost-effective approach   the longer a fault is left, the more it typically costs to resolve.",
  },
  {
    question: "Is it worth rebuilding a BMW 2 Series engine?",
    answer:
      "In most cases, yes   particularly when the rest of the vehicle is in good condition. A quality rebuild extends the car's usable life significantly and costs far less than sourcing a like-for-like replacement vehicle at this level.",
  },
  {
    question: "Do you provide a warranty on rebuilt or replacement engines?",
    answer:
      "Yes. All rebuilt and replacement engines supplied and fitted by Vogue Technics come with a written warranty. Warranty terms are explained clearly before any work begins, with no ambiguity.",
  },
  {
    question: "Can you supply and fit, or just supply the engine?",
    answer:
      "Both. We offer full supply and fit at our  workshop. We also offer supply-only for customers working with their own installer, and we can connect you with approved fitters in your area if needed.",
  },
  {
    question: "How long does a BMW 2 Series engine replacement take?",
    answer:
      "A straightforward replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the specific parts required. We&apos;ll confirm your exact timeframe at the point of booking.",
  },
];

export default function Bmw2SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 2 Series Engine Specialists"
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
              { name: "BMW 2 Series", href: "/bmw-2-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 2 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 2 Series Engine Rebuild
              </span>{" "}
                Expert Reconditioning, Repairs &amp; Replacements in the UK
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

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Vogue Technics Is the Right Choice for Your BMW 2 Series Engine
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Choosing the right specialist for your BMW 2 Series is not a decision to take lightly. These are precision-engineered machines, and
              cutting corners on engine work will cost you far more in the long run. Here&apos;s what sets us apart.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "25 Years of BMW Engine Expertise",
                  text: "Our technicians have spent decades working specifically on BMW engines. The B47, B48, and N47 units found across the 2 Series range each come with their own known weaknesses   and we know how to address every one of them correctly.",
                },
                {
                  title: "Transparent Quotes, No Hidden Costs",
                  text: "Whether you need a BMW 2 Series reconditioned engine, a timing chain replacement, or a full rebuild, we give you a clear, itemised quote before any work begins. No vague estimates. No surprise charges when you come to collect.",
                },
                {
                  title: "Written Warranty on All Engine Work",
                  text: "Every engine rebuild, replacement, and major repair carried out at Vogue Technics comes with a written warranty. We stand behind our workmanship completely.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW 2 Series Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW 2 Series vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N47 and B47 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N47 and B47 units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable 2 Series petrol variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all 2 Series variants — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild covering pistons, bearings, seals, and gaskets — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all 2 Series variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              BMW 2 Series Engine Reconditioning   Serving All of the UK from 
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              We understand that being without your BMW   especially if it&apos;s your daily driver   is a genuine inconvenience. That&apos;s why we work
              efficiently without ever compromising on the quality of the work leaving our workshop.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Collection &amp; Delivery Across the UK</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Can&apos;t get to our workshop? Not a problem. We offer an engine collection and delivery service covering the whole
                  of the United Kingdom. Send us your old unit, and we&apos;ll return your rebuilt or replacement engine fully tested and ready to fit.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Turnaround Times We Actually Stick To</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Most BMW 2 Series engine rebuilds are completed within 5–10 working days. We give you a realistic timeframe at the point of booking   and we honour it.
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
            Frequently Asked Questions   <span className="text-primary italic">BMW 2 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Ready to get your BMW 2 Series back on the road?
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

