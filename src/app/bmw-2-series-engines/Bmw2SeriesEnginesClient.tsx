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
      "The most frequently reported issues include timing chain wear on the N47 diesel, turbo failure, head gasket failure, and rear main seal oil leaks. Early diagnosis is always the most cost-effective approach — the longer a fault is left, the more it typically costs to resolve.",
  },
  {
    question: "Is it worth rebuilding a BMW 2 Series engine?",
    answer:
      "In most cases, yes — particularly when the rest of the vehicle is in good condition. A quality rebuild extends the car's usable life significantly and costs far less than sourcing a like-for-like replacement vehicle at this level.",
  },
  {
    question: "Do you provide a warranty on rebuilt or replacement engines?",
    answer:
      "Yes. All rebuilt and replacement engines supplied and fitted by Vogue Technics come with a written warranty. Warranty terms are explained clearly before any work begins, with no ambiguity.",
  },
  {
    question: "Can you supply and fit, or just supply the engine?",
    answer:
      "Both. We offer full supply and fit at our Grays, Essex workshop. We also offer supply-only for customers working with their own installer, and we can connect you with approved fitters in your area if needed.",
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
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
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
              — Expert Reconditioning, Repairs &amp; Replacements in the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="flex justify-center mt-6 mb-8 w-full"
            >
              <RegSearch />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-base md:text-lg text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              If your BMW 2 Series has started showing signs of engine trouble — whether that&apos;s unusual smoke, a rattling timing chain, loss of
              power, or a blown head gasket — you&apos;re in the right hands. At Vogue Technics, based in Grays, Essex, we deliver specialist BMW 2
              Series engine rebuild services to drivers across the United Kingdom. With over 25 years of hands-on experience and a workshop built
              around precision engineering, we don&apos;t just fix engines — we restore them properly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="text-base md:text-lg text-slate-200/90 max-w-4xl mx-auto leading-relaxed"
            >
              From a straightforward BMW 2 Series engine repair to a complete engine swap, every job we take on is handled with the same level of
              care and technical accuracy.
            </motion.p>
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
                  text: "Our technicians have spent decades working specifically on BMW engines. The B47, B48, and N47 units found across the 2 Series range each come with their own known weaknesses — and we know how to address every one of them correctly. This isn&apos;t general garage work. This is specialist knowledge built over a quarter of a century.",
                },
                {
                  title: "Transparent Quotes, No Hidden Costs",
                  text: "Whether you need a BMW 2 Series reconditioned engine, a timing chain replacement, or a full rebuild, we give you a clear, itemised quote before any work begins. No vague estimates. No surprise charges when you come to collect. Just honest pricing from a team that respects your time and your budget.",
                },
                {
                  title: "Written Warranty on All Engine Work",
                  text: "Every engine rebuild, replacement, and major repair carried out at Vogue Technics comes with a written warranty. We stand behind our workmanship completely — because we know it&apos;s done right the first time.",
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
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our BMW 2 Series Engine Services
              </h2>
              <p className="mt-5 text-slate-700 leading-relaxed">
                We cover the full range of BMW 2 Series engine work, from targeted repairs to complete rebuilds and replacements. Whatever your
                engine needs, we have the experience and the equipment to handle it properly.
              </p>
            </div>

            {[
              {
                title: "Head Gasket Replacement",
                body: [
                  "A blown head gasket is one of the most urgent engine issues a BMW 2 Series owner can face. White smoke from the exhaust, coolant loss, or a persistently overheating temperature gauge are all warning signs that should never be ignored. Left unaddressed, a failing head gasket will cause severe internal engine damage within a very short time.",
                  "At Vogue Technics, we carry out BMW 2 Series head gasket replacement using OEM-grade components, ensuring a proper, lasting seal that holds under the operating pressures these engines demand. Every replacement is followed by a thorough post-repair inspection before your vehicle leaves our workshop. The sooner it&apos;s caught, the less collateral damage — so if you&apos;re seeing any of the warning signs, call us today.",
                ],
                href: "/services/head-gasket-replacement",
              },
              {
                title: "Timing Chain Replacement",
                body: [
                  "The timing chain on many BMW 2 Series engines — particularly the N47 diesel — is a well-documented weak point that has caught out thousands of owners across the UK. Rattling on cold starts, rough idling, or a sudden illumination of warning lights can all indicate timing chain wear that&apos;s already progressing.",
                  "We carry out complete BMW 2 Series timing chain replacement as a full kit job — chain, tensioners, guides, and sprockets all replaced together. We never take a half-measure approach on timing chain work, because replacing only one component while leaving worn parts behind is a false economy that leads to repeat failures. Get it done properly the first time.",
                ],
                href: "/services/timing-chain-replacement",
              },
              {
                title: "Timing Belt Replacement",
                body: [
                  "Certain BMW 2 Series variants run a timing belt rather than a chain. The consequences of a snapped timing belt are immediate and catastrophic — bent valves, damaged pistons, and in most cases, a write-off engine. There is no warning before it goes.",
                  "We strongly recommend BMW 2 Series timing belt replacement at or before the manufacturer&apos;s specified interval — and earlier still if you&apos;ve purchased a used 2 Series with an uncertain service history. We carry belts and full replacement kits for all applicable 2 Series engine configurations. It&apos;s a small cost now against a potentially devastating one later.",
                ],
                href: "/services/timing-belt-replacement",
              },
              {
                title: "Turbo Replacement",
                body: [
                  "Loss of power, thick blue or black smoke from the exhaust, or a persistent high-pitched whine under acceleration are all classic indicators of turbo failure on the BMW 2 Series. Ignoring the signs and continuing to drive risks further damage to the engine itself.",
                  "Our team carries out BMW 2 Series turbo replacement using quality sourced units matched to your specific engine variant. Every turbo is fitted to manufacturer specifications, and we conduct full post-installation testing before the vehicle leaves our workshop. Whether your turbo has failed outright or is showing early signs of wear, we&apos;ll assess it honestly and recommend the right course of action.",
                ],
                href: "/services/turbo-replacement",
              },
              {
                title: "Engine Rebuild",
                body: [
                  "For high-mileage BMW 2 Series engines showing widespread internal wear, a full engine rebuild is often the most cost-effective long-term solution — and the one that delivers the best result. Rather than chasing individual faults on an engine that&apos;s fundamentally tired, a proper rebuild gives you essentially a fresh unit without the cost of sourcing a brand-new one.",
                  "At Vogue Technics, our BMW 2 Series engine rebuild process involves a complete strip-down, a thorough inspection of every internal component, replacement of all worn or damaged parts, and full reassembly to factory tolerances. The engine is then tested before refitting. It&apos;s a comprehensive process carried out by technicians who know these engines inside out — and the results speak for themselves.",
                ],
                href: "/services/engine-rebuild",
              },
              {
                title: "Engine Repair",
                body: [
                  "Not every engine problem requires a full rebuild, and we&apos;d never recommend one if a targeted repair is genuinely all that&apos;s needed. Our diagnostic process is thorough and precise — we identify the root cause of the problem accurately before any work begins, so you only pay for what your engine actually requires.",
                  "BMW 2 Series engine repair work we regularly carry out includes oil leak rectification, bearing replacements, valve repairs, sensor faults, and cylinder head work. Whether the issue is straightforward or complex, our technicians approach every repair with the same standard of care. Honest diagnostics, honest pricing, and work that lasts.",
                ],
                href: "/services/engine-repair",
              },
              {
                title: "Engine Replacement",
                body: [
                  "Sometimes a full BMW 2 Series engine replacement is the most practical route — particularly when multiple internal components have failed simultaneously, or when the cost of rebuilding exceeds the value of the work. In these cases, fitting a quality reconditioned or low-mileage used engine is the smarter call.",
                  "We supply and fit reconditioned engines and quality used BMW 2 Series engines sourced from trusted UK suppliers. Every unit is inspected and bench-tested before installation. We&apos;ll talk you through your options clearly, explain the cost difference between each route, and recommend what genuinely makes sense for your vehicle and your budget — not what earns us the most margin.",
                ],
                href: "/services/engine-replacement",
              },
              {
                title: "Engine Swap",
                body: [
                  "Whether you&apos;re upgrading to a more powerful engine variant, switching from diesel to petrol, or fitting a newer unit into an earlier 2 Series shell, an engine swap is a significant undertaking that needs to be managed by people who know what they&apos;re doing.",
                  "Our BMW 2 Series engine swap service covers the complete process — from sourcing the right donor engine through to mounts, ancillary connections, ECU mapping, and full post-swap diagnostics. We don&apos;t hand a car back until everything is functioning correctly and the engine management system is properly calibrated. If you&apos;re considering a swap and want an honest conversation about feasibility and cost, give us a call.",
                ],
                href: "/services/engine-swap",
              },
              {
                title: "Engine Health Check",
                body: [
                  "Not sure what&apos;s wrong with your BMW 2 Series — or simply want peace of mind before buying a used one? Our BMW 2 Series engine health check is a comprehensive inspection covering compression testing, oil analysis, full diagnostic scanning, and a detailed visual assessment of all accessible engine components.",
                  "At the end of the check, you&apos;ll receive a clear written report with our honest findings and recommendations. No upselling. No inflated concerns designed to push you towards unnecessary work. Just a straight, professional assessment of exactly where your engine stands — so you can make an informed decision about what, if anything, needs to be done.",
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
                    <p key={p.slice(0, 60)}>{p}</p>
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
              BMW 2 Series Engine Reconditioning — Serving All of the UK from Grays, Essex
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              We understand that being without your BMW — especially if it&apos;s your daily driver — is a genuine inconvenience. That&apos;s why we work
              efficiently without ever compromising on the quality of the work leaving our workshop.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Collection &amp; Delivery Across the UK</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Can&apos;t get to our workshop in Grays, Essex? Not a problem. We offer an engine collection and delivery service covering the whole
                  of the United Kingdom. Send us your old unit, and we&apos;ll return your rebuilt or replacement engine fully tested and ready to fit.
                  We can also arrange installation through our trusted network of approved fitters nationwide — so wherever you are in Britain, we
                  have a solution for you.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Turnaround Times We Actually Stick To</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Most BMW 2 Series engine rebuilds are completed within 5–10 working days. Repairs and replacements are often faster depending on
                  parts availability. We give you a realistic timeframe at the point of booking — and we honour it.
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
            Frequently Asked Questions — <span className="text-primary italic">BMW 2 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to get your BMW 2 Series back on the road?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We&apos;re based in Grays, Essex, and serve
            BMW owners right across the United Kingdom.
            <br />
            Don&apos;t trust your 2 Series to just anyone — trust the specialists.
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

