"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import { getEngineCodesEntry } from "@/data/engineCodes";

const engineCodes = getEngineCodesEntry("jaguar-f-pace-engines");

const faqs = [
  {
    question: "How much does a Jaguar F-Pace engine rebuild cost in the UK?",
    answer:
      "Costs depend on the engine variant and the extent of internal wear found during strip-down. We typically deliver this work at significantly below main dealer pricing. Contact us for an itemised quote for your specific engine code.",
  },
  {
    question: "What are the most common engine problems on the Jaguar F-Pace?",
    answer:
      "On Ingenium 2.0 diesel engines, timing chain tensioner wear, EGR/DPF faults and turbo-related issues are common. On TDV6 and supercharged petrol engines, timing, cooling and forced-induction related faults can appear at higher mileage. Diagnosis first is key.",
  },
  {
    question: "Do you cover all Jaguar F-Pace engine variants?",
    answer:
      "Yes. We work across the full F-Pace range including Ingenium petrol/diesel, V6 diesel, supercharged V6 petrol and the 5.0 supercharged V8 variants. We confirm exact engine code by registration/VIN.",
  },
  {
    question: "Do you provide a written warranty?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by a written warranty with clear terms agreed before any work begins.",
  },
  {
    question: "How long does a rebuild take?",
    answer:
      "Ingenium rebuilds typically take 7–10 working days. Larger V6/V8 jobs can take longer depending on parts and machining requirements. We confirm timelines at booking and keep you updated.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
];

export default function JaguarFPaceEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/car_bgg.jpg" alt="Jaguar F-Pace engine specialists in " fill className="object-cover opacity-30 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Jaguar Engines", href: "/jaguar-engines" }, { name: "Jaguar F-Pace Engines", href: "/jaguar-f-pace-engines" }]} />
          <div className="max-w-3xl mx-auto text-center pt-8">
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-black leading-[1.1] tracking-tight text-white md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">Jaguar F-Pace Engine</span>{" "}
                Supply, Rebuild & Fit by Specialist Engineers in 
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 flex justify-center">
              <RegSearch className="max-w-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Our Jaguar F-Pace engine services</h2>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900">Engine rebuild</span>: complete strip-down, measured inspection and rebuild to the correct
                  tolerances for your engine code.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Engine repair</span>: diagnostic-first repairs where a rebuild is not required.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Engine replacement</span>: verified reconditioned engines sourced, inspected and fitted
                  correctly when replacement is the practical route.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Timing chain replacement</span>: complete system replacement for lasting reliability.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Turbo replacement</span>: correct-spec turbo plus oil feed checks and post-install
                  verification to protect the engine.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">UK-wide service available</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Not local to ? We offer UK-wide collection and delivery. Your engine or vehicle can be brought to our  workshop for the
                same specialist process and returned with clear documentation and warranty terms.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-slate-800 font-black tracking-wide">★★★★★</div>
                <p className="mt-3 text-slate-700 leading-relaxed italic">
                  “The turbocharger on my F-Pace went without much warning… Vogue Technics arranged collection from Yorkshire, the diagnostic report was
                  clear, and the work has been faultless since.”
                </p>
                <div className="mt-4 text-sm font-bold text-slate-900">Sarah L.   Jaguar F-Pace 3.0 V6 Diesel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Reconditioned engines</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Fully stripped, inspected and rebuilt to OEM specification   tested before dispatch.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Used engines (verified)</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Compression tested, documented and warranted   supply-only or supply & fit.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Emergency fitting slots</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Same‑day diagnostics + priority sourcing available for urgent failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={<>Frequently Asked Questions   <span className="text-primary italic">Jaguar F‑Pace Engine</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need help with your F‑Pace engine?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our  team for a fast, no‑obligation quote   supply‑only or supply & fit, with warranty cover.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01375531355" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
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

