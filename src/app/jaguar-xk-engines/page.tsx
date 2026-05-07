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
    question: "How much does a Jaguar XK engine rebuild cost in the UK?",
    answer:
      "Costs depend on whether your XK is fitted with the 4.2 V8 or the 5.0 V8 and the extent of internal wear found during strip-down. Contact us for an itemised quote based on your engine code and symptoms.",
  },
  {
    question: "What are common Jaguar XK engine issues?",
    answer:
      "Common issues can include timing chain wear, cooling system failures, oil leaks and oil consumption patterns at higher mileage. Accurate diagnosis first is essential before recommending repair, rebuild or replacement.",
  },
  {
    question: "Do you offer UK-wide collection and delivery?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our Grays workshop expertise from anywhere in the country.",
  },
  {
    question: "Do you provide written warranty on engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
];

export default function JaguarXKEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar XK engine specialists in Grays"
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
              { name: "Jaguar XK Engines", href: "/jaguar-xk-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar XK Engine
              </span>{" "}
              — Reconditioned, Rebuilt & Used Supply and Fit Across the UK
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
                The Jaguar XK is a grand tourer built around Jaguar V8 performance — and when engine issues develop, the right specialist approach
                determines whether the fix lasts.
              </p>
              <p>
                Vogue Technics in Grays, Essex supply, rebuild and fit Jaguar XK engines with accurate diagnosis, transparent pricing, and written
                warranty — plus UK-wide collection and delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Reconditioned & Used Supply</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">Engines supplied tested, documented, and covered by warranty terms.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Specialist Diagnostics</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Same‑day diagnostics in Grays to confirm the exact fault and best route.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Supply & Fit Available</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Complete supply and fit service, or UK-wide delivery for supply-only.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions — <span className="text-primary italic">Jaguar XK Engine</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need an XK engine quote or diagnosis?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our Grays workshop team to confirm your exact engine and get a clear quote for supply, rebuild, or replacement.
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

