"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import type { EngineCodesEntry } from "@/data/engineCodes";

type RangeRoverSportSVREnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on the 5.0 V8 supercharged engine is more serious than on naturally aspirated units   the combination of high compression and forced induction puts significant stress on the gasket over time. Symptoms include overheating, white exhaust smoke, and coolant loss. We replace head gaskets using OEM-specification components and resurface cylinder heads where necessary, restoring a proper seal and protecting the rest of the engine from consequential damage.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The AJ133's timing chain system is robust, but not indestructible   particularly on higher-mileage SVRs or those that have suffered from irregular oil changes. A rattling noise on cold start is usually the first warning sign. We replace the full timing chain kit   chains, tensioners, guides, and sprockets   as a complete assembly. Fitting only a chain and leaving worn tensioners behind is a false economy we refuse to offer.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "While the Sport SVR uses a supercharger rather than a turbocharger, ancillary forced induction components and associated systems can still develop faults. Where turbo-related issues arise on hybrid SVR configurations or associated cooling systems, we diagnose accurately and fit quality replacement components to manufacturer specification, with full post-installation testing before the vehicle leaves our workshop.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "A full engine rebuild is the definitive solution for a high-mileage or heavily worn SVR engine. We completely disassemble the AJ133 unit, clean and inspect every component, replace all worn or damaged parts   including bearings, rings, seals, and gaskets   and reassemble the engine to factory tolerances. The result is a unit that performs like new, at a fraction of the cost of sourcing a factory replacement. Every rebuilt engine is tested before fitting or despatch.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every SVR engine problem demands a full rebuild. Sometimes it's an oil leak from a valve cover gasket, a failing sensor, a worn bearing, or a fuelling issue. Our diagnostic process identifies the exact fault so you pay only for what's actually needed. We carry out all levels of engine repair on the 5.0 V8 SVR unit   from minor fixes to significant internal work.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When the engine has suffered catastrophic failure   a spun bearing, a seized block, or serious internal damage   replacement is often the most cost-effective route. We supply and fit quality reconditioned or low-mileage used AJ133 engines for the Range Rover Sport SVR, each sourced from verified suppliers and tested before installation. Supply-only is also available for customers fitting elsewhere.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Looking to fit a later SVR engine variant into an earlier Sport shell, or upgrading the specification of your build? Our engine swap service handles the entire process   engine mapping, mount adaptation, ancillary connections, wiring loom compatibility, and full post-swap diagnostics. We do it properly, with no shortcuts.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Range Rover Sport variants in the wider L494 family use timing belts rather than chains. If your SVR-adjacent model falls into this category, or if you're unsure of your vehicle's service history, we recommend replacement at   or before   the manufacturer's specified interval. A snapped belt destroys an engine within milliseconds. We carry kits for all applicable configurations.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Considering buying a used Range Rover Sport SVR, or just want peace of mind on your current vehicle? Our engine health check covers compression testing across all cylinders, oil analysis, full diagnostic scanning, supercharger inspection, and a thorough visual assessment. You'll receive a written report with clear findings and honest recommendations   no pressure, no upselling.",
  },
];

const faqs = [
  {
    question: "How much does a Range Rover Sport SVR engine rebuild cost in the UK?",
    answer:
      "A full rebuild on the 5.0-litre AJ133 supercharged V8 typically starts from around £3,500–£6,000 depending on the extent of wear and parts required. Contact Vogue Technics for a detailed, no-obligation quote based on your specific vehicle and fault.",
  },
  {
    question: "What are the most common engine problems on the Range Rover Sport SVR?",
    answer:
      "The most frequently reported issues include supercharger bearing failure, timing chain wear, excessive oil consumption, carbon build-up on intake valves, and coolant-related head gasket stress. Early diagnosis is always the most cost-effective approach.",
  },
  {
    question: "Is it worth rebuilding a Range Rover Sport SVR engine?",
    answer:
      "In most cases, absolutely. The SVR is an expensive vehicle to replace, and a quality engine rebuild restores performance to factory level at a fraction of the cost. If the rest of the car is sound, rebuilding the engine makes strong financial sense.",
  },
  {
    question: "Do you supply the AJ133 engine for the SVR separately?",
    answer:
      "Yes. We offer supply-only of reconditioned and low-mileage used AJ133 units for customers who have their own fitting arrangement. All supplied engines are tested and come with a written warranty.",
  },
  {
    question: "Can you fit the engine as well as supply it?",
    answer:
      "Absolutely. We offer a complete supply and fit service at our  workshop. We can also connect you with our approved installer network if you're based elsewhere in the UK.",
  },
  {
    question: "How long does a Range Rover Sport SVR engine rebuild take?",
    answer:
      "Most rebuilds are completed within 5–10 working days. The exact timeframe depends on the parts required and the extent of the work needed. We'll confirm your turnaround at the point of booking and keep you updated throughout.",
  },
  {
    question: "What engine does the Range Rover Sport SVR use?",
    answer:
      "The Range Rover Sport SVR uses the AJ133 5.0-litre supercharged V8 petrol engine, producing 575bhp in its most recent state of tune. Earlier SVR models produced 550bhp from the same engine family. It is a direct-injection, supercharged unit with a cast aluminium block and heads.",
  },
  {
    question: "Do you offer a warranty on SVR engine work?",
    answer:
      "Yes. All engine rebuilds, replacements, and major repairs carried out at Vogue Technics come with a written warranty. Full terms are discussed and confirmed at the time of booking.",
  },
];

export default function RangeRoverSportSVREnginesClient({ engineCodes }: RangeRoverSportSVREnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Sport SVR engine specialist in "
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Range Rover Engines", href: "/range-rover-engines" },
              { name: "Range Rover Sport SVR", href: "/range-rover-sport-svr-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Sport SVR
              </span>{" "}
              Engine Rebuild & Replacement   Specialists in 
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            <HeroTrustLabels className="mt-4" />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Vogue Technics Is the Right Choice for Your Range Rover Sport SVR Engine
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">SVR-Specific Expertise</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  The AJ133 has known failure points — supercharger wear, timing chain stretch, oil consumption, intake carbon build-up. We've seen every one, repeatedly, and know exactly how to fix them.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">25 Years of Engine Experience</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  More Land Rover and Range Rover engines rebuilt than most garages will see in a lifetime. Our reputation across the UK has been earned one satisfied customer at a time.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">Upfront Quotes, Honest Advice</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Clear, itemised quote before work begins — no vague estimates, no bill that doubles on collection. If repair is more sensible than rebuild, we'll say so.
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Range Rover Sport SVR Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              From a full AJ133 engine rebuild to a targeted repair, we cover every level of engine work for the Range Rover Sport SVR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors"
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
              Fast UK-Wide Service From Our  Workshop
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                We know that being without a vehicle like the SVR   whether it's your daily driver or weekend car   is genuinely frustrating. We work efficiently without ever compromising on the standard of work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">UK-Wide Collection & Delivery</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Can't get to us? We collect, rebuild, and return your engine fully tested — or arrange fitting through our approved fitter network nationwide.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">Fast, Realistic Turnaround</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    SVR rebuilds completed within 5–10 working days. Repairs and replacements often quicker. We give a confirmed timeframe and honour it.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">Written Warranty on Every Job</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Every rebuild, replacement, and major repair comes with a written warranty. Ask for full terms when you enquire.
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              What SVR Owners Say About Vogue Technics
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My 2018 SVR developed a serious oil consumption issue at 68,000 miles. Vogue Technics carried out a full engine rebuild   the car now pulls harder than it did when I bought it. Outstanding work and very fair pricing."',
                by: "  Daniel H., ",
              },
              {
                quote:
                  '"Was quoted over £11,000 by a main dealer for an engine replacement on my SVR. Vogue Technics supplied and fitted a fully reconditioned AJ133 for significantly less, with a warranty included. Couldn\'t be happier."',
                by: "  Michelle T., Leeds",
              },
              {
                quote:
                  '"Sent my engine down from Glasgow after a timing chain failure. It came back rebuilt, tested, and perfectly packaged within the timeframe promised. Absolute professionals   the only people I\'d trust with a V8 supercharged engine."',
                by: "  Ross M., Glasgow",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Sport SVR Engine</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to get your Range Rover Sport SVR back to full power?
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today or submit your details through our online enquiry form for a fast, no-obligation quote. We're based in , and serve Range Rover Sport SVR owners across the entire United Kingdom. Don't leave a 575bhp supercharged V8 in the hands of a general garage   bring it to the specialists.
            </p>
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

