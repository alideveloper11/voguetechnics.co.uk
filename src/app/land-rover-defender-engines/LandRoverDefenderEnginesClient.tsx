"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import type { EngineCodesEntry } from "@/data/engineCodes";

type LandRoverDefenderEnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "White smoke from the exhaust, coolant disappearing without explanation, or an engine that keeps running hot   these are the warning signs of a failing head gasket. Left unaddressed, a blown head gasket destroys engines quickly and expensively. We replace Defender head gaskets using OEM-grade components, and where necessary, we machine the head to ensure a clean, lasting seal. Act early and save your engine.",
  },
  {
    title: "Timing Chain & Timing Belt Replacement",
    slug: "timing-chain-replacement",
    body:
      "The 2.4 and 2.2 Puma engines are particularly prone to timing chain wear   and when a timing chain lets go, it does so without warning and without mercy. We replace chains, tensioners, guides, and sprockets together as a complete system, not as a piecemeal repair. For Defender variants running a timing belt, we follow   or improve upon   the manufacturer's recommended replacement intervals. A snapped belt means instant, irreversible engine damage. Don't wait.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "A failing turbocharger announces itself through sluggish acceleration, black or blue smoke under load, or a distinct whistle that wasn't there before. We source quality replacement turbos for all Defender engine configurations   TDi, TD5, Puma TDCI, and Ingenium   and fit them to manufacturer specifications, carrying out full post-installation testing before the vehicle leaves our care.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When mileage is high and wear has crept in across multiple components, a full engine rebuild is often the most cost-effective path forward. We strip the engine completely, inspect every part with care, replace everything that's past its best, and reassemble to factory tolerances. The result is an engine that performs as it should   at a fraction of the cost of a replacement vehicle. For many Defender owners, a quality rebuild is the single best investment they make in their vehicle.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every problem demands a full rebuild. Our diagnostic process identifies exactly what's wrong, so you only pay for what's genuinely needed. Oil leaks, bearing wear, injector faults, valve damage, sensor failures   we handle every level of Defender engine repair with precision and honesty.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major components have failed, or when the cost of repair outweighs the benefit, a quality replacement engine is the smarter move. We supply and fit reconditioned and low-mileage used Land Rover Defender engines, sourced from trusted UK suppliers and thoroughly inspected before installation.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Fitting a later Ingenium unit into an earlier Defender? Upgrading from a four-cylinder to an inline-six? Considering a V8 conversion? Our engine swap service covers the complete process   mounts, ancillaries, wiring, ECU mapping, and post-swap diagnostics   handled from start to finish by people who've done it many times before.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "If you're unsure what's wrong with your Defender, or you're considering buying a used example and want to know what you're getting into, our engine health check gives you the full picture. We carry out compression testing, oil analysis, diagnostic scanning, and a thorough visual inspection of the engine bay. You receive a written report with clear, honest findings   no upselling, no unnecessary work recommended.",
  },
];

const faqs = [
  {
    question: "How much does a Land Rover Defender engine rebuild cost in the UK?",
    answer:
      "Costs depend on the engine type and the extent of wear. A 300TDi or TD5 rebuild typically starts from around £1,800–£3,500. Puma and Ingenium rebuilds vary based on parts and labour required. Contact us for a precise, itemised quote for your vehicle.",
  },
  {
    question: "What are the most common Land Rover Defender engine problems?",
    answer:
      "The most frequent issues we see include timing chain wear on Puma engines, head gasket failure across TDi and TD5 generations, turbocharger failure, TD5 injector loom faults, and oil leaks from ageing seals on higher-mileage units.",
  },
  {
    question: "Is it worth rebuilding a Land Rover Defender engine?",
    answer:
      "In the vast majority of cases, yes   particularly for vehicles in otherwise sound condition. A quality rebuild extends the vehicle's life significantly and costs far less than sourcing a replacement Defender at current market prices.",
  },
  {
    question: "Do you cover engine work for classic Defenders as well as the new model?",
    answer:
      "Yes. We work across all Defender generations   from 90s and 110s running 200TDi and 300TDi engines through to the current L663 Defender with Ingenium and P400 units.",
  },
  {
    question: "Do rebuilt engines come with a warranty?",
    answer:
      "Yes. All engine rebuilds, replacements, and major repairs carried out at Vogue Technics include a written warranty. We discuss the full terms clearly at the point of booking.",
  },
  {
    question: "How long does a Defender engine rebuild or replacement take?",
    answer:
      "Engine repairs and replacements typically take 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We give you a confirmed timeline when you book   and we honour it.",
  },
];

export default function LandRoverDefenderEnginesClient({ engineCodes }: LandRoverDefenderEnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Defender engine specialist in "
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Land Rover Engines", href: "/land-rover-engines" },
              { name: "Land Rover Defender Engines", href: "/land-rover-defender-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Defender Engine Specialists
              </span>{" "}
                Rebuilds, Repairs & Replacements Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Defender Owners Choose Vogue Technics</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">We Work on Land Rovers   Nothing Else</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Every technician at Vogue Technics is trained specifically on Land Rover and Range Rover platforms. We don't split our workshop between brands or compromise our expertise across dozens of vehicle types. When your Defender comes in, every person working on it understands the platform deeply   from the classic Series-era architecture right through to the current L663 generation.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">25 Years of Proven Results in </h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Our reputation has been built entirely on word of mouth. Since we established our workshop in , we've rebuilt and replaced thousands of Land Rover Defender engines for customers from  to Edinburgh. When we fix your engine, it stays fixed   and that's what keeps our customers coming back and referring their friends.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Clear Pricing From the Start</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Engine work can feel overwhelming, particularly when you're not sure what you're dealing with. We make it straightforward. You receive a full, itemised quote before any work begins   no vague estimates, no unexpected additions when you come to collect. Just honest pricing from people who respect your vehicle and your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Full Range of Land Rover Defender Engine Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              Whatever the problem with your Land Rover Defender engine   whether it's a suspected head gasket or a full seizure   we have the solution. We cover every Defender variant and every engine type across the model's history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-xs text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              UK-Wide Collection, Delivery & Local Service From 
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                We understand that a Defender off the road is a problem   whether it's your daily driver, your towing vehicle, or your weekend off-roader. We work efficiently without ever cutting corners, and we've built our service to reach Defender owners wherever they are in the UK.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Engine Collection & Delivery Across the UK</h3>
                  <p className="mt-3">
                    You don't need to be local to benefit from Vogue Technics. We operate a UK-wide engine collection and delivery service   remove your engine, send it to us in , and we'll return it rebuilt, replaced, or repaired, fully tested and ready to install. We can also connect you with our approved fitter network if you need it installed locally.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Written Warranty on All Engine Work</h3>
                  <p className="mt-3">
                    Every rebuild, replacement, and major repair completed at Vogue Technics is covered by a written warranty. We stand behind everything we do because we know our standards are right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-[90px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My Defender 110 TD5 had been misdiagnosed at two garages before I found Vogue Technics. They identified the problem immediately, quoted fairly, and had it running properly within the week. Exceptional."',
                by: "  Dan H., Norwich",
              },
              {
                quote:
                  '"Sent my 300TDi up from Devon. Came back rebuilt beautifully, packaged properly, and two days ahead of the estimated date. Couldn\'t be happier."',
                by: "  Rob C., Exeter",
              },
              {
                quote:
                  '"Quoted over £5,500 at a local dealer for an engine replacement. Vogue Technics did it for considerably less, with a warranty included. Professional from start to finish."',
                by: "  Claire W., Leeds",
              },
            ].map((t) => (
              <div
                key={t.by}
                className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-emerald-300/90">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-100/90 leading-relaxed italic">{t.quote}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-300/70">{t.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Defender Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Get Your Land Rover Defender Engine Sorted Today
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

