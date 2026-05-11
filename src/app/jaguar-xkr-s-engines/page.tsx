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
    question: "How much does a Jaguar XKR-S engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on the extent of internal wear identified during strip-down of the 5.0 supercharged AJ133 engine. Contact us for an accurate, itemised quote based on your symptoms and engine condition.",
  },
  {
    question: "What are the most common Jaguar XKR-S engine problems?",
    answer:
      "Common issues include supercharger wear, timing chain stretch and tensioner wear under high-output use, cooling system stress, and oil consumption on higher-mileage engines. Early diagnosis reduces the overall repair scope.",
  },
  {
    question: "Do you work on both XKR-S Coupe and Convertible?",
    answer:
      "Yes. We work on both body styles and tailor the diagnostic and repair approach to the exact vehicle and usage history.",
  },
  {
    question: "Do you offer UK-wide collection and delivery?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
  {
    question: "Do you provide written warranty on engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
];

export default function JaguarXKRSPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/car_bgg.jpg" alt="Jaguar XKR-S engine specialists in " fill className="object-cover opacity-30 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Jaguar Engines", href: "/jaguar-engines" }, { name: "Jaguar XKR-S Engines", href: "/jaguar-xkr-s-engines" }]} />
          <div className="max-w-5xl pt-8">
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">Jaguar XKR-S Engine</span>{" "}
                5.0 Supercharged V8 Supply, Rebuild & Fit Across the UK
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-7">
              <RegSearch className="max-w-3xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mt-7 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base space-y-4">
              <p>
                The Jaguar XKR‑S is the most extreme, most driver‑focused XK ever produced. Built between 2011 and 2014, it combined sharper chassis tuning with a 5.0 litre supercharged V8 producing 550HP   elevating it firmly into supercar territory.
              </p>
              <p>
                At Vogue Technics in , UK, we supply, rebuild, and fit Jaguar XKR‑S engines   combining genuine AJ133SC supercharged V8 expertise, fully tested reconditioned units, emergency response capability, and a transparent supply and fit process that reflects the standard of the vehicle we are working on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Reconditioned & Used AJ133SC Units</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Every unit is fully tested, documented, and dispatched with warranty cover from our  workshop.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Same‑Day Diagnostics ()</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Specialist equipment + hands‑on AJ133SC knowledge. No guesswork, no upsell   just accurate diagnosis and honest options.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Emergency Replacement Slots</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Fast‑track fitting slots available for unexpected failures, plus UK‑wide delivery for supply-only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={<>Frequently Asked Questions   <span className="text-primary italic">Jaguar XKR‑S Engine</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Ready to resolve your Jaguar XKR‑S engine problem?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Contact our specialists in  today for same‑day diagnostics, a fully reconditioned AJ133SC unit, or fast‑track replacement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01375531355" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
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

