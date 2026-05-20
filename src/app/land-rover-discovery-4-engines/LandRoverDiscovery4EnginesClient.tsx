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

type LandRoverDiscovery4EnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on the Discovery 4 3.0 TDV6 is one of the most common serious faults we see in our  workshop. Coolant contaminating the oil, persistent overheating, white exhaust smoke, or a sweet smell from the engine bay are all signals that demand immediate attention. We replace Discovery 4 head gaskets using OEM-grade components, machining the head surface where necessary to guarantee a clean, durable seal. Early action saves the engine   and saves you a significantly larger bill.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The 3.0 TDV6's timing chain system is a known weak point, particularly on vehicles where oil change intervals have been stretched or where the engine has accumulated significant mileage. The tell-tale rattle on cold start is the warning   and it's a warning that should never be ignored. We replace the complete timing chain kit as a system: chain, tensioners, guides, and sprockets together. We don't take shortcuts.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "The Discovery 4 TDV6 runs a twin-turbo system, and turbocharger failure is a frequent consequence of oil starvation, neglected servicing, or simply high mileage. Sluggish acceleration, excessive smoke under load, or an unfamiliar whistling noise are the symptoms to watch for. We source quality replacement turbos for all Discovery 4 engine variants and fit them to manufacturer specifications, carrying out full post-installation testing before the vehicle leaves our care.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Discovery 4 engine configurations incorporate a timing belt as part of their valve train. A belt gives no warning when it's approaching failure   it simply snaps, and the engine is destroyed in the same instant. We carry timing belts and complete replacement kits for all applicable Discovery 4 variants and recommend replacement at or before the manufacturer's specified intervals.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When a Discovery 4 engine has accumulated high mileage or suffered wear across multiple components, a full rebuild is frequently the most cost-effective decision an owner can make. We strip the engine completely, inspect every component individually, replace everything that falls outside tolerance, and rebuild to factory specifications. The result is an engine that performs as it was designed to   with a written warranty and at a fraction of the cost of sourcing a replacement vehicle.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every Discovery 4 engine problem demands a full rebuild. Our diagnostic team identifies precisely what's wrong, so you pay only for what genuinely needs doing. Oil leaks, bearing wear, EGR faults, injector problems, valve damage, sensor failures   we handle every level of engine repair with accuracy and complete honesty.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major faults have occurred simultaneously, or when the cost of repair exceeds the practical benefit, a quality replacement engine is the right call. We supply and fit reconditioned and low-mileage used Land Rover Discovery 4 engines sourced exclusively from trusted UK suppliers. Every engine we supply is thoroughly inspected and tested before installation.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Considering a powertrain upgrade on your Discovery 4   whether that's moving from the 2.7 TDV6 to the more capable 3.0 SDV6, or exploring a more significant conversion? Our engine swap service covers mounts, ancillaries, wiring integration, ECU mapping, and post-swap diagnostics. Done properly, by specialists who have carried out these conversions multiple times before.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Unsure what's wrong with your Discovery 4? Considering buying a used example and want a clear picture of the engine's condition before you commit? Our engine health check covers compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection of the engine bay. You receive a written report with honest findings and clear recommendations.",
  },
];

const faqs = [
  {
    question: "How much does a Land Rover Discovery 4 engine rebuild cost in the UK?",
    answer:
      "A full rebuild on the 3.0 TDV6 typically starts from around £2,200–£4,000 depending on the extent of wear and parts required. The 5.0 V8 petrol rebuild costs more due to its complexity. Contact us for a precise, itemised quote based on your specific vehicle and fault.",
  },
  {
    question: "Why do Discovery 4 engines fail?",
    answer:
      "The most common causes we see are neglected oil change intervals leading to timing chain wear and turbo oil starvation, EGR cooler failure causing coolant loss, head gasket failure on the TDV6, and oil cooler blockages that accelerate internal wear. Regular servicing with the correct specification oil is the single most effective prevention.",
  },
  {
    question: "Is it worth rebuilding a Discovery 4 engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. A quality rebuild at Vogue Technics is significantly cheaper than sourcing a replacement Discovery 4 at current market prices, and comes with a written warranty that a used vehicle purchase never will.",
  },
  {
    question: "Do you supply reconditioned Discovery 4 engines for sale in the UK?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used Discovery 4 engines for all variants   2.7 TDV6, 3.0 TDV6, SDV6, and 5.0 V8 petrol. Contact us for current availability and pricing.",
  },
  {
    question: "How much does a Discovery 4 engine replacement cost?",
    answer:
      "Engine replacement costs vary depending on whether you choose a reconditioned unit, a low-mileage used engine, or a full rebuild of your existing unit. Contact us directly for a clear, no-obligation quote tailored to your vehicle.",
  },
  {
    question: "How long does a Discovery 4 engine rebuild or replacement take?",
    answer:
      "Engine repairs and straightforward replacements typically take 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We confirm your exact timeline at the point of booking and we honour it without exception.",
  },
  {
    question: "Can you collect my engine if I'm based outside ?",
    answer:
      "Absolutely. We collect engines from across the entire UK. Distance is not a barrier to accessing our specialist service   we handle the logistics and return your engine fully tested and ready to fit.",
  },
];

export default function LandRoverDiscovery4EnginesClient({ engineCodes }: LandRoverDiscovery4EnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Discovery 4 engine specialist in "
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
              { name: "Land Rover Discovery 4 Engines", href: "/land-rover-discovery-4-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Discovery 4 Engine Specialists
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Discovery 4 Owners Choose Vogue Technics</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Exclusive Land Rover and Range Rover Focus</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Every technician at Vogue Technics works solely on Land Rover and Range Rover vehicles. When your Discovery 4 arrives at our  workshop, every person who touches it has worked on this exact platform hundreds of times. That depth of experience shows in the quality of the finished job.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">25 Years Building a Reputation Worth Having</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Our reputation has grown entirely through results   not marketing. We've rebuilt and replaced hundreds of Discovery 4 engines for owners across the UK. Customers return to us because the work holds. They refer their friends because they trust us completely.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Transparent Pricing   Quoted Before We Touch Anything</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Before any work begins at Vogue Technics, you receive a full itemised quote covering every element of the job. No vague estimates, no revised figures on collection day, no uncomfortable conversations about costs that weren't discussed upfront.
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
              Complete Engine Rebuild, Repair, Replacement & Swap Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              Beyond the most common faults, we handle every level of Discovery 4 engine work   from a targeted repair through to a complete engine replacement or conversion.
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
                A Discovery 4 off the road disrupts daily life. We work efficiently and without compromising quality, and we've structured our service to reach Discovery 4 owners anywhere in the United Kingdom.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Engine Collection & Delivery Across the UK</h3>
                  <p className="mt-3">
                    We operate a UK-wide engine collection and delivery service   remove your engine, send it to our  workshop, and we return it rebuilt, repaired, or replaced, fully tested and ready to install. We can also connect you with our network of approved local fitters.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Written Warranty on Every Engine Job</h3>
                  <p className="mt-3">
                    Every engine rebuild, replacement, and major repair completed at Vogue Technics is backed by a written warranty. We stand fully behind our work   because our standards mean we can do so with complete confidence.
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
                  '"My Discovery 4 3.0 TDV6 had been looked at by two different garages before I contacted Vogue Technics. They diagnosed the real problem correctly within hours, gave me a transparent quote, and returned the vehicle in better condition than I\'d hoped for. Outstanding."',
                by: "  Michael T., Cambridge",
              },
              {
                quote:
                  '"Sent my Discovery 4 engine down from Newcastle after a timing chain failure. It came back rebuilt to an exceptional standard, properly packaged, and arrived two days ahead of the estimated date. Brilliant service from start to finish."',
                by: "  Graham S., Newcastle",
              },
              {
                quote:
                  '"I was facing quotes of £6,500 to £8,000 for a Discovery 4 engine replacement from main dealers and independent garages locally. Vogue Technics completed the job professionally, with a warranty included, for considerably less. I wish I\'d called them first."',
                by: "  Rachel P., Oxford",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Discovery 4 Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Book Your Land Rover Discovery 4 Engine Work Today
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

