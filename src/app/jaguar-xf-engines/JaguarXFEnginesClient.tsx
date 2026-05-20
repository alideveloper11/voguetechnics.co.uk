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
import type { EngineCodesEntry } from "@/data/engineCodes";

type JaguarXFEnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const faqs = [
  {
    question: "How much does a Jaguar XF engine rebuild cost in the UK?",
    answer:
      "Costs depend on the engine variant and the extent of internal wear found during strip-down. Contact us for an itemised quote based on your exact engine code and symptoms.",
  },
  {
    question: "What are the most common engine problems on the Jaguar XF?",
    answer:
      "Common issues include timing chain wear (varies by engine), EGR and turbo faults on diesels, cooling system problems and oil leaks. Accurate diagnosis is essential because fault patterns differ across XF generations and engine families.",
  },
  {
    question: "Do you work on both X250 and X260 Jaguar XF models?",
    answer:
      "Yes. We work across both XF generations and the full spread of engines fitted to them. We confirm exact specification by registration/VIN and tailor diagnosis accordingly.",
  },
  {
    question: "Do you provide a written warranty on Jaguar XF engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
];

export default function JaguarXFEnginesClient({ engineCodes }: JaguarXFEnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar XF engine specialists in "
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Jaguar Engines", href: "/jaguar-engines" },
              { name: "Jaguar XF Engines", href: "/jaguar-xf-engines" },
            ]}
          />
          <div className="max-w-3xl mx-auto text-center pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-black leading-[1.1] tracking-tight text-white md:text-4xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar XF Engine Rebuild
              </span>{" "}
                Specialist Engine Repairs, Reconditioning & Replacements Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-6 flex justify-center"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Diagnostic-first approach</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We identify the root cause before recommending work.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Repair, rebuild or replace</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                The right option for your engine condition and budget.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Warranty-backed work</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Clear written warranty terms agreed up-front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">Jaguar XF Engines</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Speak to a Jaguar XF engine specialist
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call today to discuss your Jaguar XF symptoms and receive a clear plan   diagnostics, targeted repair, or a full rebuild/replacement option.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
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

