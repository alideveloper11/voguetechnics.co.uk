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

type LandRoverDiscoverySportEnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on the Discovery Sport 2.0 Td4 and Ingenium diesel is a fault we see consistently. Coolant levels dropping without visible external leaks, white smoke on start-up, a persistent sweet smell, or an engine temperature gauge climbing higher than it should   these are not symptoms to monitor and revisit later. We replace Discovery Sport head gaskets using OEM-grade components, machining the head surface where necessary to guarantee a clean, durable, lasting seal.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The Discovery Sport's Ingenium engine carries a timing chain system that is sensitive to oil quality and service frequency. Stretched chain, worn tensioners, and degraded guides produce the characteristic cold-start rattle. We replace the complete timing chain assembly as a full system   chain, tensioners, guides, and sprockets together.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger failure is a frequent consequence of oil starvation, extended service intervals, or high mileage on Discovery Sport diesel engines. Loss of power, excessive smoke, or an unfamiliar whistling/grinding noise are common signs. We source quality replacement turbos for all variants and fit to manufacturer specifications, with full post-installation testing before handover.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Discovery Sport configurations incorporate a timing belt. A timing belt gives no warning before failure   and when it fails, the engine is destroyed instantaneously. We carry belts and complete replacement kits for applicable variants and strongly recommend inspection/replacement if service history is unclear.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When a Discovery Sport engine has accumulated significant mileage or developed wear across multiple components, a full rebuild is frequently the most sensible and cost-effective decision. We strip the engine completely, inspect every internal component, replace everything outside factory tolerance, and rebuild to manufacturer specifications   backed by a written warranty.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every Discovery Sport engine fault demands a full rebuild. Our diagnostic process is precise   we identify the exact root cause before recommending any course of action. Oil leaks, bearing wear, EGR system faults, injector problems, sensor failures, valve damage   we handle every level of engine repair with accuracy and complete honesty.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major faults have developed simultaneously, or repair is impractical, a quality replacement unit is the right call. We supply and fit reconditioned and low-mileage used Discovery Sport engines sourced from trusted UK suppliers, inspected and tested before installation.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Considering an engine upgrade or conversion on your Discovery Sport? Our engine swap service covers mounts, ancillaries, wiring integration, ECU mapping, and post-swap diagnostics   carried out by specialists who understand what each conversion demands to be done correctly.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Our engine health check provides the honest answer. We carry out compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection of the engine bay. You receive a written report with plain-English findings and genuine recommendations   no upselling, no invented faults.",
  },
];

const faqs = [
  {
    question: "How much does Land Rover Discovery Sport engine repair cost in the UK?",
    answer:
      "Repair costs depend on the specific fault and engine variant. A head gasket replacement typically starts from around £1,000–£2,200. A full Ingenium engine rebuild starts from approximately £2,200–£3,800. Contact us for a precise, itemised quote tailored to your vehicle and the fault you're experiencing.",
  },
  {
    question: "What are the most common Land Rover Discovery Sport engine problems?",
    answer:
      "The most frequently seen faults include Ingenium head gasket failure, timing chain wear, turbocharger failure on diesel variants, EGR system faults, and oil leaks from seals on higher-mileage engines. The 2016 to 2019 Ingenium diesel variants generate the highest volume of engine repair enquiries we receive.",
  },
  {
    question: "What does the Discovery Sport engine warning light mean?",
    answer:
      "An engine warning light can indicate anything from a minor sensor fault through to a significant mechanical issue requiring immediate attention. We strongly recommend booking a diagnostic inspection without delay   continuing to drive risks turning a manageable problem into a serious and expensive one.",
  },
  {
    question: "Is it worth rebuilding a Discovery Sport engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. A quality rebuild costs considerably less than sourcing a replacement Discovery Sport at current market prices, and it comes with a written warranty.",
  },
  {
    question: "Do you supply reconditioned Discovery Sport engines for sale in the UK?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used Discovery Sport engines for all variants   Td4, Ingenium diesel, Ingenium petrol, and PHEV configurations. Contact us for current availability and accurate pricing.",
  },
  {
    question: "How long does Discovery Sport engine repair or replacement take?",
    answer:
      "Targeted repairs and engine replacements are typically completed within 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We confirm your exact timeline at the point of booking and we honour it.",
  },
  {
    question: "Can you collect my engine if I'm not near ?",
    answer:
      "Absolutely. We operate a UK-wide engine collection and delivery service. Wherever you are in the UK, we manage the logistics and return your engine fully tested and ready to fit.",
  },
];

export default function LandRoverDiscoverySportEnginesClient({ engineCodes }: LandRoverDiscoverySportEnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Discovery Sport engine specialist in "
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
              { name: "Land Rover Discovery Sport Engines", href: "/land-rover-discovery-sport-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Discovery Sport
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
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Discovery Sport Owners Trust Vogue Technics</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Exclusive Land Rover and Range Rover Focus</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Every technician at Vogue Technics works solely on Land Rover and Range Rover vehicles. That focused, accumulated experience produces outcomes a generalist garage cannot replicate.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Over 25 Years Building an Unshakeable Reputation</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Our reputation has grown entirely through results. Owners call us because other owners recommended us   and they return because the work holds.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Complete Pricing Transparency From the First Call</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Before any work begins, you receive a full itemised quote covering parts, labour, and a realistic timeline. No uncomfortable surprises on collection day.
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
              Our Complete Land Rover Discovery Sport Engine Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer every engine service the Discovery Sport requires   from targeted repairs to full rebuilds and complete engine replacement.
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

      <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-[90px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              What Our Discovery Sport Customers Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My 2017 Discovery Sport Ingenium diesel had an engine warning light that two local garages couldn\'t diagnose accurately. Vogue Technics identified the problem within hours, explained the issue clearly, and had it resolved within five working days. Absolutely the right people for this vehicle."',
                by: "  Oliver M., Hertfordshire",
              },
              {
                quote:
                  '"Sent my Discovery Sport engine down from Birmingham after a head gasket failure. It came back rebuilt to an excellent standard, well packaged, and arrived a day ahead of schedule. Outstanding service from start to finish."',
                by: "  Karen B., Birmingham",
              },
              {
                quote:
                  '"I was facing quotes of over £5,500 for a Discovery Sport engine replacement from two garages locally. Vogue Technics completed the same job, with a warranty included, for significantly less. Wish I\'d found them first   lesson learned."',
                by: "  Tom W., Kent",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Discovery Sport</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Book Your Discovery Sport Engine Repair Today   No-Obligation Quote
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

