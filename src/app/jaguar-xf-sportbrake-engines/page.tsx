"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

const faqs = [
  {
    question: "How much does a Jaguar XF Sportbrake engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on engine variant and the extent of internal wear found during strip-down. Contact us for an accurate, itemised quote based on your engine code and symptoms.",
  },
  {
    question: "What are the most common engine problems on the Jaguar XF Sportbrake?",
    answer:
      "Common issues include timing chain wear on certain diesel variants, head gasket stress and cooling system issues, turbocharger deterioration, and EGR-related faults. Higher-mileage Sportbrake models can be more susceptible due to typical usage patterns.",
  },
  {
    question: "Do you provide a written warranty on engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our Grays workshop expertise from anywhere in the country.",
  },
];

export default function JaguarXFSportbrakeEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar XF Sportbrake engine specialists in Grays"
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
              { name: "Jaguar XF Sportbrake Engines", href: "/jaguar-xf-sportbrake-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar XF Sportbrake Engine
              </span>{" "}
              — Supply, Repair, Rebuild & Fit Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-7 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base space-y-4"
            >
              <p>
                The Jaguar XF Sportbrake is a practical, high-mileage-friendly estate — but that also means engines often see heavier use over time.
                When faults develop, specialist diagnosis and the correct repair route matters.
              </p>
              <p>
                At Vogue Technics in Grays, Essex, we specialise in Jaguar XF Sportbrake engine rebuilds, targeted repairs and complete replacements
                across the full range — including Ingenium and V6 variants — with transparent pricing and written warranty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Tested Engine Supply</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">Reconditioned or used units supplied with documentation and warranty.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Diagnostics Before Decisions</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Same‑day diagnostics available in Grays to pinpoint the exact fault.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Supply & Fit Available</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Complete supply and fit service, plus UK-wide delivery for supply-only.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions — <span className="text-primary italic">Jaguar XF Sportbrake Engine</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need an XF Sportbrake engine solution?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our Grays workshop for diagnostics, supply-only, or a complete supply and fit booking.
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

