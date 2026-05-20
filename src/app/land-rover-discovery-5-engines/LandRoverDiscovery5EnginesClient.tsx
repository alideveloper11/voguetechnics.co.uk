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

type LandRoverDiscovery5EnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Ingenium engine head gasket failure is a fault we see regularly. Coolant disappearing without visible leaks, white smoke on start-up, a persistent sweet smell from the engine bay, or an engine that keeps running hotter than it should   these are the signals. Continued driving with a compromised head gasket destroys the engine rapidly. We replace Discovery 5 head gaskets using OEM-grade components, machining the head surface where necessary to ensure a clean, permanent seal.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The 3.0 TDV6 fitted to earlier Discovery 5 models carries a well-documented susceptibility to timing chain wear   particularly when oil change intervals have been extended. The characteristic rattle on cold start is the warning sign. We replace the complete timing chain system   chain, tensioners, guides, and sprockets together   as a full kit.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger failure is a risk across turbocharged Ingenium and TDV6 engines, particularly when oil quality or change frequency has been neglected. Sluggish power delivery, excessive smoke, or an audible whine are common symptoms. We source quality replacement turbos for all Discovery 5 configurations and fit them to manufacturer specifications, running full post-installation testing before handover.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Discovery 5 variants incorporate a timing belt, and this component gives no warning before failure   it simply snaps, and the resulting valve damage is instantaneous. We carry timing belt kits for applicable configurations and recommend replacement at or before the manufacturer's stipulated intervals, especially where service history is incomplete.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When a Discovery 5 engine has accumulated significant mileage or suffered wear across multiple components, a full rebuild frequently makes more financial sense than any alternative. We strip the engine entirely, inspect every component against factory tolerances, replace everything that falls short, and rebuild to manufacturer specifications   backed by a written warranty.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every Discovery 5 engine fault demands a full rebuild. Our diagnostic process is thorough and precise   we identify exactly what is wrong before recommending any course of action. Oil leaks, bearing wear, EGR faults, injector problems, sensor failures, valve damage   we handle every level of repair with accuracy and complete honesty.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major components have failed or repair is impractical, a quality replacement engine is the sensible path forward. We supply and fit reconditioned and low-mileage used Discovery 5 engines sourced from trusted UK suppliers, inspected and tested thoroughly before installation.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Considering a powertrain change on your Discovery 5   whether upgrading from the four-cylinder Ingenium to the 3.0 Si6 petrol, or exploring a different configuration entirely? Our engine swap service manages mounts, ancillaries, wiring integration, ECU mapping, and full post-swap diagnostics.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Our engine health check covers compression testing, oil analysis, full diagnostic scanning across all systems, and a thorough visual inspection of the engine bay and ancillaries. You receive a written report with plain-English findings and honest recommendations.",
  },
];

const faqs = [
  {
    question: "How much does Land Rover Discovery 5 engine repair cost in the UK?",
    answer:
      "Repair costs vary depending on the fault and engine variant. A targeted repair such as a head gasket replacement typically starts from around £1,200–£2,500. A full rebuild on the 3.0 TDV6 or Ingenium unit starts from approximately £2,500–£4,500. Contact us for a precise, itemised quote specific to your vehicle and fault.",
  },
  {
    question: "What are the most common Land Rover Discovery 5 engine problems?",
    answer:
      "The most frequent issues include Ingenium head gasket failure, timing chain wear on the 3.0 TDV6, turbocharger failure across diesel variants, EGR system faults, and oil leaks from ageing seals on higher-mileage engines.",
  },
  {
    question: "What does the Discovery 5 engine management light mean?",
    answer:
      "An illuminated engine management light can indicate anything from a minor sensor fault through to a significant mechanical issue. We strongly recommend booking a diagnostic check without delay   continuing to drive risks escalating an existing problem into a far more serious and expensive one.",
  },
  {
    question: "Is it worth rebuilding a Discovery 5 engine?",
    answer:
      "In the vast majority of cases, yes   particularly when the vehicle is otherwise in sound condition. A quality rebuild is significantly more cost-effective than sourcing a replacement Discovery 5 at current prices, and it comes with a written warranty.",
  },
  {
    question: "Do you supply reconditioned Discovery 5 engines for sale in the UK?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used Discovery 5 engines for all variants   Sd4, Si4, TDV6, and Si6. Contact us directly for current availability and pricing.",
  },
  {
    question: "How long does Discovery 5 engine repair or replacement take?",
    answer:
      "Targeted repairs and engine replacements are typically completed within 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We confirm your exact timeline when you book and we honour it.",
  },
  {
    question: "Can you collect my Discovery 5 engine if I'm not near ?",
    answer:
      "Absolutely. We operate a UK-wide collection and delivery service. Distance is not an obstacle   we manage the logistics and return your engine fully tested and ready to fit, wherever you are in the UK.",
  },
];

export default function LandRoverDiscovery5EnginesClient({ engineCodes }: LandRoverDiscovery5EnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Discovery 5 engine specialist in "
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Land Rover Engines", href: "/land-rover-engines" },
              { name: "Land Rover Discovery 5 Engines", href: "/land-rover-discovery-5-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Discovery 5
              </span>{" "}
              Engine Repair, Rebuild & Replacement   Specialists in 
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
              Why Discovery 5 Owners Choose Vogue Technics Over Everyone Else
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Land Rover Exclusivity   No Distractions, No Compromises</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Every technician in our  workshop is trained exclusively on Land Rover and Range Rover platforms. When your Discovery 5 comes through our doors, the people working on it have handled this exact engine, this exact fault, and this exact platform many times before.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Over 25 Years of Trusted Engine Work Across the UK</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Our reputation has come entirely from the quality of our work and the honesty of our approach. When we fix a Discovery 5 engine, it stays fixed.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Itemised Quotes Before Any Work Begins</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Before we touch your vehicle, you receive a full itemised quote covering every element of the job   parts, labour, and timescale. No surprises on collection day.
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
              Our Complete Land Rover Discovery 5 Engine Repair & Service Range
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We cover every engine service the Discovery 5 requires   from a single targeted repair through to a full ground-up rebuild or complete engine replacement.
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
              UK-Wide Engine Collection, Delivery & Local Service From 
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                A Discovery 5 off the road is genuinely disruptive. We work efficiently without compromising standards, and we've built our service infrastructure to reach owners anywhere in the United Kingdom.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">UK-Wide Engine Collection & Delivery</h3>
                  <p className="mt-3">
                    Remove your engine, dispatch it to our  workshop, and we return it rebuilt, repaired, or replaced, fully tested and ready to install. We can also connect you with approved local installers if you need fitting arranged closer to home.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Written Warranty on Every Engine Job</h3>
                  <p className="mt-3">
                    Every rebuild, replacement, and major engine repair completed at Vogue Technics is covered by a written warranty. We stand behind our work completely.
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
              What Discovery 5 Owners Say About Vogue Technics
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My Discovery 5 Sd4 Ingenium had an engine management light that three different garages couldn\'t diagnose correctly. Vogue Technics found the root cause within a day, explained everything clearly, and had it running properly within the week. Genuinely refreshing to deal with people who actually know the vehicle."',
                by: "  James F., Hertfordshire",
              },
              {
                quote:
                  '"Sent my 3.0 TDV6 down from Manchester after a timing chain failure. It came back rebuilt to an exceptional standard, packaged securely, and arrived ahead of the date I\'d been given. Couldn\'t have asked for more."',
                by: "  David R., Manchester",
              },
              {
                quote:
                  '"I was quoted between £7,000 and £9,500 by three different garages for a Discovery 5 engine replacement. Vogue Technics completed the same job professionally, with a full warranty, for considerably less. I genuinely wish I had contacted them first."',
                by: "  Natalie W., Surrey",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Discovery 5</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Get Your Land Rover Discovery 5 Engine Sorted   Contact Vogue Technics Today
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

