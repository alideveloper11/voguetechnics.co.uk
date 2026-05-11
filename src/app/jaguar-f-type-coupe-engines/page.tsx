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
    question: "How much does a Jaguar F-Type Coupe engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on whether the engine is the 3.0-litre supercharged V6 or the 5.0-litre supercharged V8 and the extent of internal wear identified during strip-down. Contact us for an accurate, itemised quote based on your engine code and symptoms.",
  },
  {
    question: "What are the most common engine problems on the Jaguar F-Type Coupe?",
    answer:
      "On V6 variants, supercharger bearing wear and timing chain tensioner wear can be common at higher mileage. On V8 variants, supercharger wear, timing chain stretch and cooling system stress are key areas. Accurate diagnosis first is essential.",
  },
  {
    question: "Do you carry out supercharger rebuilds as well as engine rebuilds?",
    answer:
      "Yes. Supercharger rebuilds and replacements are a core part of our F-Type Coupe work, across both V6 and V8 variants, with boost verification after installation.",
  },
  {
    question: "Do you provide a written warranty on all engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery for vehicles and engines, so distance from  is not a barrier.",
  },
];

export default function JaguarFTypeCoupeEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar F-Type Coupe engine specialists in "
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
              { name: "Jaguar F-Type Coupe Engines", href: "/jaguar-f-type-coupe-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar F‑Type Coupe Engine
              </span>{" "}
                Specialist Engine Repairs, Supercharger Rebuilds & Replacements Across the UK
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
                The Jaguar F-Type Coupe is a genuine performance machine. Built around supercharged V6 and V8 petrol engines, it delivers an
                exceptional driving experience   but these are high-output engines and when something goes wrong, precision matters.
              </p>
              <p>
                At Vogue Technics in , we carry out Jaguar F-Type Coupe engine rebuilds, supercharger rebuilds and replacements, targeted
                repairs, timing chain replacements, and reconditioned engine sourcing across the full F-Type Coupe range   with transparent pricing,
                written warranty, and UK-wide support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Our Jaguar F-Type Coupe engine services</h2>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900">Engine rebuild</span>: complete strip-down and rebuild to Jaguar tolerances for the V6 or
                  V8 engine code.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Engine repair</span>: diagnostic-first repairs when a full rebuild is not required.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Engine replacement</span>: verified reconditioned engine sourcing and correct fitting.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Timing chain replacement</span>: complete system replacement for lasting reliability.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Supercharger repair/replacement</span>: rebuilds and replacements with boost output
                  verification post-install.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">UK-wide collection and delivery</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                If you are not local to , we can arrange UK-wide collection and delivery. Your F-Type Coupe receives the same specialist process
                and returns with clear documentation and written warranty terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Reconditioned & Used Units</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Tested engines supplied with documentation and warranty cover from our  workshop.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Same‑Day Diagnostics ()</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Accurate diagnosis first   then clear options for repair, rebuild, or replacement.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Supply Only or Supply & Fit</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                UK-wide delivery for supply-only, or complete supply and fit at our  workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">Jaguar F‑Type Coupe Engine</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need help with your Jaguar F‑Type Coupe engine?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our  specialists for same‑day diagnostics, a tested engine supply, or a fast‑track replacement slot.
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

