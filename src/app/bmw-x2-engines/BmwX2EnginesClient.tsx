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
        <clipPath id="bmw_roundel_clip_x2">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_x2)">
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
  { title: "BMW X2 sDrive 18d Engines", href: "/bmw-x2-sdrive18d-engines" },
  { title: "BMW X2 sDrive 20d Engines", href: "/bmw-x2-sdrive20d-engines" },
  { title: "BMW X2 xDrive 18d Engines", href: "/bmw-x2-xdrive18d-engines" },
  { title: "BMW X2 xDrive 20d Engines", href: "/bmw-x2-xdrive20d-engines" },
  { title: "BMW X2 xDrive 25d Engines", href: "/bmw-x2-xdrive25d-engines" },
  { title: "BMW X2 sDrive 18i Engines", href: "/bmw-x2-sdrive18i-engines" },
  { title: "BMW X2 xDrive 25e Engines", href: "/bmw-x2-xdrive25e-engines" },
];

const faqs = [
  {
    question: "How much does a BMW X2 engine rebuild cost in the UK?",
    answer:
      "Costs depend on the engine family and the extent of wear or damage found during our initial inspection. We provide this service at a rate 40% lower than the main dealer. A full rebuild on a B47 diesel typically starts from around £1,800–£3,500. Petrol variant rebuilds are priced based on the specific unit and condition. Contact us for a fully itemised, bespoke quote.",
  },
  {
    question: "What are the most common BMW X2 engine problems?",
    answer:
      "The most frequently reported issues on the X2 include B47 timing chain tensioner wear on diesel variants, B38 three-cylinder head gasket failure on petrol variants, turbocharger wear across both diesel and petrol turbocharged units, and EGR system faults on higher-mileage diesel examples. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is it worth rebuilding a BMW X2 engine?",
    answer:
      "In most cases, yes — particularly when the vehicle is otherwise in sound condition. A properly executed rebuild extends the X2's working life considerably and represents far better value than replacing the vehicle at this level of the market.",
  },
  {
    question: "Do you cover the BMW X2 F39 generation?",
    answer:
      "Yes. The F39 is the only X2 generation produced to date. We work across the full F39 range, covering B47, B38, B48, and applicable B46 engine families across diesel, petrol, and PHEV configurations.",
  },
  {
    question: "Do you provide a warranty on rebuilt and reconditioned BMW X2 engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are explained and agreed before any work begins.",
  },
  {
    question: "Can you supply and fit, or just supply the engine?",
    answer:
      "Both. We offer complete supply and fit at our workshop. For customers elsewhere in the UK, we arrange fitting through our approved installer network. We also offer a fully managed engine collection and return service.",
  },
  {
    question: "How long does a BMW X2 engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the engine and scope of work. Your confirmed timeframe is agreed at the point of booking.",
  },
  {
    question: "Do you service the BMW X2 xDrive25e plug-in hybrid?",
    answer:
      "Yes. We carry out engine work on the B38 three-cylinder petrol unit in the xDrive25e PHEV variant. Contact us to discuss your specific requirements.",
  },
];

export default function BmwX2EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW X2 Engine Specialists"
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
              { name: "BMW X2", href: "/bmw-x2-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW X2 Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW X2 Engine Rebuild
              </span>{" "}
              Expert Reconditioning, Repair &amp; Replacement Across the UK
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

      {/* FIND YOUR BMW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why BMW X2 Owners Choose <span className="text-primary italic">Vogue Technics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "BMW X2 Engine Specialists Across the Full F39 Range",
                  text: [
                    "B47, B38, B48 — we know the X2's engine families, their specific failure modes, and what each one requires to be rebuilt correctly.",
                  ],
                },
                {
                  title: "Over 25 Years of BMW Engine Work",
                  text: [
                    "Our reputation has been built entirely through the quality of our work and the referrals it generates — not through marketing.",
                  ],
                },
                {
                  title: "Honest Pricing, No Surprises",
                  text: [
                    "Fully itemised written quotes before any work begins — no additions without warning, no estimates that quietly grow.",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW X2 Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW X2 vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for B47 and B38 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for B47D20 and applicable petrol units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable X2 variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all X2 diesel and petrol variants — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild covering pistons, bearings, seals, and gaskets — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all X2 variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
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
                title: "Fast UK-Wide Service From Our Workshop",
                paragraphs: [
                  "Not local to our workshop? We operate a fully managed engine collection and delivery service covering the whole of the United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced — fully tested and ready to install.",
                  "Most BMW X2 engine rebuilds are completed within 5–10 working days. We confirm your specific timeframe at booking. Every engine job carries a written warranty.",
                ],
              },
              {
                title: "Ready to get your BMW X2 back on the road properly?",
                paragraphs: [
                  "Call Vogue Technics today or complete our online enquiry form for a fast, no-obligation quote. We serve BMW X2 owners right across the United Kingdom — your X2 deserves specialist attention, and that is exactly what we provide.",
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
                    <a
                      href="tel:01375531355"
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" /> 01375 531355
                    </a>
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
            Frequently Asked Questions{" "}
            <span className="text-primary italic">BMW X2 Engine Work</span>
          </>
        }
        items={faqs}
      />

      <PartnerLogos />
    </div>
  );
}
