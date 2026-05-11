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
    question: "What engine is fitted to the Jaguar XK8?",
    answer:
      "The Jaguar XK8 uses the AJ‑V8 all‑aluminium V8 engine family throughout its production run from 1997 to 2006. Earlier models carry the 4.0 litre AJ27 unit, while models from 2003 onwards use the improved 4.2 litre AJ34. Both are naturally aspirated V8 petrol engines   the supercharged XKR variant uses the same blocks in boosted form.",
  },
  {
    question: "What is the Nikasil problem on the Jaguar XK8?",
    answer:
      "Nikasil is a hard, low‑friction cylinder bore coating used on early XK8 4.0 litre engines. In the UK, high‑sulphur fuel caused the coating to degrade   leading to bore wear, compression loss, increased oil consumption, and eventually engine failure. It primarily affects 4.0 litre engines produced before approximately 2001.",
  },
  {
    question: "What is failsafe engine mode on the Jaguar XK8?",
    answer:
      "Failsafe engine mode is a protective ECU response triggered when the system detects a fault that could cause engine damage. It limits power output and can be triggered by a range of faults   from sensors and fuelling issues through to more serious internal problems. Our same‑day diagnostics identifies the specific cause before any repair is recommended.",
  },
  {
    question: "How much does a Jaguar XK8 engine rebuild cost?",
    answer:
      "Rebuild costs vary depending on engine variant (4.0 or 4.2), the extent of internal wear, and which components require replacement or machining. A Nikasil‑affected 4.0 litre rebuild is typically more involved than a standard 4.2 litre rebuild. We provide fully transparent, itemised quotes before any work begins.",
  },
  {
    question: "Do you offer Jaguar XK8 engine supply and fit near me?",
    answer:
      "Our complete supply and fit service is based at our  workshop . For customers further afield, we offer UK‑wide delivery with full technical support. Emergency fitting slots and same‑day diagnostics are available for urgent cases.",
  },
  {
    question: "What engine oil does the Jaguar XK8 take?",
    answer:
      "The XK8 4.0 litre engine typically requires a 10W‑30 or 10W‑40 fully synthetic oil meeting the relevant Jaguar specification. The 4.2 litre engine generally uses a 5W‑30 fully synthetic oil. Always verify against your specific production year and engine number.",
  },
];

export default function JaguarXK8EnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/car_bgg.jpg" alt="Jaguar XK8 engine specialists in " fill className="object-cover opacity-30 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Jaguar Engines", href: "/jaguar-engines" }, { name: "Jaguar XK8 Engines", href: "/jaguar-xk8-engines" }]} />
          <div className="max-w-5xl pt-8">
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">Jaguar XK8 Engine</span>{" "}
                Reconditioned, Rebuilt & Used Supply and Fit Across the UK
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-7">
              <RegSearch className="max-w-3xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mt-7 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base space-y-4">
              <p>
                The Jaguar XK8 arrived in 1996 and immediately established itself as one of the most visually stunning and mechanically accomplished grand tourers of its era. Elegant, powerful, and unmistakably Jaguar   it brought the XK name back to the forefront of British performance motoring and built a loyal following that endures to this day.
              </p>
              <p>
                At its heart sits the AJ‑V8   a sophisticated all‑aluminium V8 available in 4.0 and 4.2 litre forms across the XK8&apos;s production life. When properly maintained and correctly rebuilt, it is a genuinely rewarding engine. When neglected, it develops specific, well‑documented problems that require genuine specialist knowledge to resolve.
              </p>
              <p>
                At Vogue Technics in , UK, we supply, rebuild, and fit Jaguar XK8 engines across all production years and variants   from 1997 through to 2006   covering both coupe and convertible models with honest assessments, quality rebuilds, and a transparent service from our dedicated workshop.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Jaguar XK8 Engine Supply   Reconditioned, Remanufactured & Used Units</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We stock and supply Jaguar XK8 engines across both the 4.0 and 4.2 litre AJ‑V8 variants. Every unit   reconditioned, remanufactured, or used   is fully tested, properly documented, and dispatched with warranty cover from our  workshop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Reconditioned XK8 4.0 Litre V8 Engine   1997 to 2002</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  The 4.0 litre AJ27 V8 is most closely associated with Nikasil bore problems on early production. When rebuilt correctly   with Nikasil addressed and the timing chain, tensioner, oil pump, and water pump attended to   this engine is transformed into a reliable, long‑lasting unit.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Reconditioned XK8 4.2 Litre V8 Engine   2003 to 2006</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  The 4.2 litre AJ34 improved reliability and performance, but it can develop timing chain wear, oil consumption from valve stem seals, and intake manifold degradation on older examples. We rebuild and supply the correct spec   tested and warranted.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">XK8 Engine Supply Only or Complete Supply and Fit</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Whether you need a complete supply and fit at our  workshop or a rebuilt XK8 engine delivered to your door or chosen garage   we accommodate both. Every supply-only order includes full technical support throughout the fitting process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={<>Frequently Asked Questions   <span className="text-primary italic">Jaguar XK8 Engine</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Ready to resolve your Jaguar XK8 engine problem?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Contact our specialists in  today. Whether you need same-day diagnostics, a Nikasil repair, a fully reconditioned 4.0 or 4.2 litre V8, or an emergency fitting slot   we&apos;re here with straight answers and genuine specialist knowledge.
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

