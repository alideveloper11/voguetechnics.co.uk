"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";

const jaguarModels = [
  {
    title: "Jaguar E-Pace Engines",
    link: "/jaguar-e-pace-engines",
    description:
      "The E-Pace uses the 2.0 Ingenium petrol and diesel engines. Diesel models can be susceptible to oil dilution from DPF regeneration, with timing chain wear a known concern at higher mileage. We provide E-Pace diagnostics, timing chain replacement and full rebuilds with deep Ingenium knowledge.",
  },
  {
    title: "Jaguar F-Pace Engines",
    link: "/jaguar-f-pace-engines",
    description:
      "The F-Pace is Jaguar’s best-selling model with Ingenium four-cylinder and V6 petrol/diesel engines. Turbo faults, coolant failures and oil consumption are common, with the 3.0 V6 diesel also seeing timing and oil pressure issues as mileage rises. We repair, rebuild and supply reconditioned engines across all variants.",
  },
  {
    title: "Jaguar F-Type Coupe Engines",
    link: "/jaguar-f-type-coupe-engines",
    description:
      "The F-Type is Jaguar’s performance flagship with supercharged V6 and V8 petrol engines that demand precision. Common concerns include crankshaft bearing wear, supercharger faults and oil pressure issues on higher-mileage cars. We rebuild F-Type engines to OEM specification with bench testing before return.",
  },
  {
    title: "Jaguar XE Engines",
    link: "/jaguar-xe-engines",
    description:
      "The XE shares the 2.0 Ingenium diesel with other models. Oil dilution, timing chain wear and turbo faults are frequent issues on the diesel variants. These are manageable when caught early, but can escalate when ignored. We diagnose properly and rebuild/repair with root-cause focus.",
  },
  {
    title: "Jaguar XF Engines",
    link: "/jaguar-xf-engines",
    description:
      "The XF is one of the models we work on most. 2.0 Ingenium diesel owners often report timing chain concerns, oil dilution and turbo issues. Earlier 2.7 and 3.0 V6 diesels have their own timing vulnerabilities, while 5.0 V8 variants need specialist knowledge. UK-wide collection available.",
  },
  {
    title: "Jaguar XF Sportbrake Engines",
    link: "/jaguar-xf-sportbrake-engines",
    description:
      "The XF Sportbrake shares its engine family with the XF saloon and the same Ingenium-related diesel patterns, plus timing chain concerns. Sportbrake models often cover higher mileages, making timely specialist attention important. We rebuild, repair and supply reconditioned replacements.",
  },
  {
    title: "Jaguar XJ Engines",
    link: "/jaguar-xj-engines",
    description:
      "The XJ has used a broad range of V6 and V8 petrol and diesel engines. Higher-mileage engines can develop oil pressure faults, bearing wear and timing-related issues that require specialist diagnosis. We maintain and rebuild XJ engines to a standard befitting a flagship saloon.",
  },
  {
    title: "Jaguar XK Engines",
    link: "/jaguar-xk-engines",
    description:
      "The XK grand tourer is powered by the AJ-V8. Generally robust, but can develop oil consumption, valve timing irregularities and cooling system faults as mileage accumulates. Rebuilding an AJ-V8 correctly requires understanding of its tolerances and characteristics — we do it properly, not quickly.",
  },
  {
    title: "Jaguar XK8 Engines",
    link: "/jaguar-xk8-engines",
    description:
      "The XK8 reintroduced the V8 to Jaguar and its AJ-V8 has well-known vulnerabilities. Timing chain tensioner failure can be catastrophic if not addressed promptly, alongside oil leaks, cooling system degradation and wear. We carry out timing chain work, rebuilds and targeted repairs with AJ-V8 expertise.",
  },
  {
    title: "Jaguar XKR Engines",
    link: "/jaguar-xkr-engines",
    description:
      "The XKR adds a supercharger to the AJ-V8, increasing complexity and reward. Supercharger faults, oil system issues and crankshaft bearing wear are common on higher-mileage cars. Rebuilding a supercharged V8 demands precision and the right equipment — we deliver that level of detail.",
  },
  {
    title: "Jaguar XKR-S Engines",
    link: "/jaguar-xkr-s-engines",
    description:
      "The XKR-S uses an uprated supercharged V8 with higher stresses and tighter tolerances. Engine work demands the highest precision — the consequences of improper repair are significant. We carry out XKR-S diagnostics, rebuilds and repairs using OEM-spec components and true specialist knowledge.",
  },
];

const trustIndicators = [
  "Written Warranty",
  "UK-Wide Collection",
  "25+ Years Experience",
  "OEM Quality Parts",
  "Fast Turnaround",
  "Jaguar Specialists Only",
];

const keyStats = [
  { label: "Years of Jaguar Engine Expertise", value: "25+" },
  { label: "Jaguar Engines Rebuilt & Repaired", value: "10,000+" },
  { label: "Jaguar Dedicated", value: "100%" },
  { label: "Collection & Delivery", value: "UK-Wide" },
];

const jaguarReviews = [
  {
    quote:
      "My Jaguar XF had been flagging up timing chain warnings for a while and two local garages told me it would be a huge job. Vogue Technics were upfront from the very first call — they explained exactly what was involved, gave me a fair quote, and turned the car around in under two weeks. The XF is running better than it has in years. Absolutely first class service.",
    name: "Andrew K.",
    vehicle: "Jaguar XF 2.0 Ingenium Diesel — Birmingham",
  },
  {
    quote:
      "The turbocharger on my F-Pace went without much warning — one day it was fine, the next it was producing clouds of smoke and had no power at all. I called Vogue Technics and they arranged collection from my home in Yorkshire. The diagnostic report they sent over was thorough and completely clear. The replacement and associated engine work was carried out to a really high standard and the car has been faultless since. I would not take my Jaguar anywhere else.",
    name: "Sarah L.",
    vehicle: "Jaguar F-Pace 3.0 V6 Diesel — Yorkshire",
  },
  {
    quote:
      "I was facing a near £10,000 bill from my Jaguar dealer for an engine replacement on my XE. Vogue Technics offered me a fully reconditioned engine with a written warranty for significantly less. The whole process was smooth and professional — they kept me updated throughout and the car was ready ahead of schedule. Genuinely impressed with the quality of the work and the honesty of the people involved.",
    name: "Marcus T.",
    vehicle: "Jaguar XE 2.0 Diesel — Surrey",
  },
];

const modernJaguarServices = [
  "Jaguar Ingenium 2.0 diesel and petrol engine rebuild — F-Pace, XF, XE, E-Pace",
  "AJ133 5.0 supercharged V8 supply and rebuild — F-Type SVR, F-Pace SVR",
  "AJ126 3.0 supercharged V6 engine replacement — XF, XJ, F-Pace",
  "Jaguar 3.0 V6 diesel engine supply and fit — all model years",
  "4.2 litre V8 supercharged engine rebuild — XF, XJ, XK variants",
  "Remanufactured Jaguar engines supplied with warranty — UK-wide delivery available",
];

const classicJaguarServices = [
  "E-Type 3.8 and 4.2 litre straight-six engine rebuild and supply",
  "XJ6 4.0 litre AJ6 and AJ16 engine rebuild — all series",
  "XJS V12 engine supply — 5.3 and 6.0 litre variants",
  "XK8 and XKR 4.0 and 4.2 litre V8 engine rebuild service",
  "S-Type 3.0 V6 and 4.2 V8 engine supply and fit",
  "X-Type 2.5 and 3.0 V6 engine replacement and rebuild",
];

const faultList = [
  "Jaguar engine system fault — Ingenium management system diagnosis",
  "Check engine light and engine warning light — all model years resolved",
  "Failsafe engine mode — S-Type, XJ8, XK8 specialist diagnosis",
  "Jaguar Ingenium engine reliability issues — targeted rebuild and repair",
  "5.0 V8 supercharged engine problems — timing chain and supercharger faults",
  "Low battery — please start engine — electrical and charging system faults",
  "Classic V12 engine rebuild — XJS and E-Type specialist service",
];

const faqs = [
  {
    question: "How much does a Jaguar engine rebuild cost?",
    answer:
      "The cost depends on engine type, extent of damage, and the components required. A rebuild on a 2.0 Ingenium diesel typically starts from around £3,000 and can rise to £5,500+ for severely damaged units. V6 and V8 rebuilds carry higher costs due to complexity. We provide a detailed, itemised quote before any work begins.",
  },
  {
    question: "How long does a Jaguar engine rebuild take?",
    answer:
      "Most rebuilds are completed within 5 to 10 working days from receipt of the vehicle or engine. More complex jobs or those requiring additional machining can take longer. We provide a clear timeline at the outset and keep you updated throughout.",
  },
  {
    question: "Do you offer a warranty on Jaguar engine rebuilds?",
    answer:
      "Yes. Engine rebuilds, repairs and reconditioned engines completed at Vogue Technics are covered by a written warranty as standard. Terms are agreed clearly before any work begins.",
  },
  {
    question: "Can you collect my Jaguar from anywhere in the UK?",
    answer:
      "Yes. We offer a fully managed UK-wide collection and delivery service for vehicles and engines, so distance from Grays is not a barrier to accessing our specialist work.",
  },
  {
    question: "What are the signs my Jaguar timing chain needs replacing?",
    answer:
      "A common early sign is a rattling noise on cold start. You may also see timing-related fault codes, rough idle, or a loss of power. On Ingenium diesel engines in particular, timing chain wear should be treated as urgent.",
  },
  {
    question: "Is a reconditioned Jaguar engine as reliable as a new one?",
    answer:
      "When built correctly to OEM specification using quality components and properly tested, a reconditioned engine can be an excellent long-term solution. We build engines in-house, test them, and supply them with written warranty terms agreed up-front.",
  },
  {
    question: "What are the most common Jaguar engine problems?",
    answer:
      "Common faults include timing chain wear (particularly on some diesel variants), oil dilution concerns on certain Ingenium diesels, turbocharger failure on higher-mileage cars, cooling system issues that can contribute to head gasket problems, and wear-related oil pressure or bearing issues on older engines.",
  },
  {
    question: "Should I repair or replace my Jaguar engine?",
    answer:
      "It depends on the extent of damage and the overall engine condition. In many cases a rebuild is the better investment; in others, a verified reconditioned replacement is more practical. We present both options clearly after diagnosis.",
  },
  {
    question: "Do you carry out diagnostics before recommending engine work?",
    answer:
      "Always. We use specialist diagnostic equipment plus physical inspection and testing. You receive clear findings before any major work is authorised.",
  },
  {
    question: "How do I book my Jaguar in with Vogue Technics?",
    answer:
      "Call us to speak with a specialist or request a quote online. If you are not local to Grays, we can discuss UK-wide collection options at the same time.",
  },
];

export default function JaguarEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar engine specialists in Grays"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Jaguar Engines", href: "/jaguar-engines" }]} />
          
          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar Engine Rebuild Specialists
              </span>{" "}
              | Grays, Essex | UK-Wide Service
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-7 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base space-y-4"
            >
              <p>
                Your Jaguar was engineered to perform. When that performance starts to fade — when the warning lights appear, the engine note changes, or the power simply is not what it was — you need specialists who understand these machines at a fundamental level.
              </p>
              <p>
                At Vogue Technics, Jaguar engines are our sole focus. With over 25 years of dedicated experience, our team carries out Jaguar engine rebuilds, repairs, and replacements to the highest standard, backed by a written warranty and supported by a UK-wide collection and delivery service.
              </p>
              <p>
                We do not take a generalist approach. Every technician in our Grays, Essex workshop has spent their career working exclusively on Jaguar powertrains — from classic AJ6 and V8 units through to the modern Ingenium engine family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {trustIndicators.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-wide text-slate-200"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {keyStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-5"
                >
                  <div className="text-3xl font-black text-white tracking-tight">{s.value}</div>
                  <div className="mt-2 text-xs font-semibold text-slate-300 leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              What Our Jaguar Customers Say
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Reviews from real Jaguar owners who trusted Vogue Technics when their vehicle needed specialist attention.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {jaguarReviews.map((r) => (
                <div
                  key={r.name}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-amber-500 font-black tracking-wide">★★★★★</div>
                  <p className="mt-4 text-slate-700 leading-relaxed italic">“{r.quote}”</p>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-sm font-medium text-slate-600">{r.vehicle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Comprehensive Jaguar Engine Services
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Whether your Jaguar requires a full engine rebuild, a targeted repair, or a fresh reconditioned unit, every service at Vogue Technics
              is delivered with the same precision and commitment to quality. We handle the full spectrum of Jaguar engine work — and we do it
              exclusively, which means our knowledge runs deep.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">Engine Rebuilds</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  A full Jaguar engine rebuild is the definitive solution for engines that have suffered significant internal damage, excessive
                  wear, or catastrophic failure. We strip the engine completely, clean and measure components against OEM tolerances, machine where
                  required, and rebuild using quality parts. Every rebuilt engine is bench-tested and covered by written warranty.
                </p>
                <Link
                  href="/services/engine-rebuild"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">Engine Repairs</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Not every Jaguar engine problem demands a full rebuild. We diagnose the root cause and carry out precise repairs using OEM-quality
                  components. Common repairs include oil pressure faults, coolant system failures, crankshaft bearing wear, valve train damage, and
                  turbo-related issues.
                </p>
                <Link
                  href="/services/engine-repair"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Engine Replacements</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  When damage is beyond economical repair, replacement is the practical route forward. We source engines carefully (new and quality
                  reconditioned), inspect them before installation, and fit them with the same attention to detail we bring to every job. We advise
                  honestly on rebuild vs replacement based on your vehicle.
                </p>
                <Link
                  href="/services/engine-replacement"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-slate-800 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Timing Chain Replacement</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Timing chain problems are among the most serious and common issues affecting modern Jaguar diesel engines — particularly the 2.0
                  Ingenium unit. Cold-start rattle is an early warning that should not be ignored. We carry out timing chain replacements as
                  standalone procedures and as part of wider rebuilds using OEM or OEM-equivalent components.
                </p>
                <Link
                  href="/services/timing-chain-replacement"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-slate-800 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">Head Gasket Repairs</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Head gasket failure is rarely straightforward. We do not just fit a gasket and hope — we diagnose the cause, crack-test and
                  surface-check the cylinder head, machine where necessary, and ensure the cooling system is fully healthy before reassembly.
                </p>
                <Link
                  href="/services/head-gasket-replacement"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">Turbocharger Replacement</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Turbo failure can cause significant collateral damage if oil contamination is not addressed. We assess the full extent of damage,
                  address the oil supply system, and install the correct replacement turbo into a clean and healthy engine — for reduced power, smoke,
                  or whining noises under load.
                </p>
                <Link
                  href="/services/turbo-replacement"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Engine Health Checks</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Whether you are buying a used Jaguar or want reassurance, our health check gives an honest picture of your engine&apos;s condition. We
                  examine oil and coolant quality, compression, timing system condition, and stored fault codes — then provide a written report you
                  can rely on.
                </p>
                <Link
                  href="/services/engine-health-check"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-slate-800 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
                <h3 className="text-xl font-bold text-slate-900">Engine Swaps &amp; Conversions</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Engine swaps and conversions are complex projects that demand proper planning and precision execution. Whether you want a more
                  powerful variant, a different fuel type, or an alternative unit after irreparable failure, we advise on compatibility, source the
                  right components, and carry out the work to a reliability and safety-first standard.
                </p>
                <Link
                  href="/services/engine-swap"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-black text-xs uppercase tracking-[0.18em] hover:bg-slate-800 transition-colors"
                >
                  Explore More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Jaguar Engine Supply — Reconditioned & Used Units Across All Models & Variants
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              We stock and supply Jaguar engines across every model and engine family. Every unit — reconditioned or used — is fully tested, properly documented, and dispatched with warranty cover from our Grays workshop.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Modern Jaguar Engines — Ingenium, AJ133, AJ126 & V8 Supply and Rebuild
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  The modern Jaguar engine range spans several distinct families — each with its own specific characteristics, known failure points, and rebuild requirements. Our team carries genuine, hands-on knowledge of every current and recent Jaguar engine code.
                </p>
                <ul className="mt-5 space-y-2 text-slate-700">
                  {modernJaguarServices.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Classic Jaguar Engines — XK, XJ6, XJS & E-Type Supply and Rebuild
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  The classic Jaguar engine range carries a heritage that enthusiasts continue to value deeply. From the XK straight-six through to the V12 — these are engines that reward proper specialist rebuilding with decades of continued reliable service.
                </p>
                <ul className="mt-5 space-y-2 text-slate-700">
                  {classicJaguarServices.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Jaguar Engine Supply Only or Complete Supply and Fit</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Whether you need a complete supply and fit at our Grays workshop or a rebuilt unit delivered directly to your chosen garage — we accommodate both. Our Jaguar engine supply and fit service covers every stage from initial sourcing through to installation, calibration, and road testing — all under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Jaguar Engine Problems, Diagnostics & Specialist Repair
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Jaguar engine problems range from simple warning light faults through to serious internal failures — and accurate diagnosis before committing to any repair or replacement is always the right first step.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Common Jaguar Engine Problems — All Models Diagnosed & Resolved</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Our team diagnoses and resolves Jaguar engine faults regularly across the full model range. On Ingenium diesel units, the most frequently encountered issues include EGR valve failure, DPF-related management faults, timing chain wear, and oil leaks. On AJ133 and AJ126 V8 and V6 units, supercharger seal wear, timing chain stretch, and oil consumption are the most common presenting faults.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Classic Jaguar engines develop predictable issues — head gasket failure on XJ6 units, Nikasil bore problems on early XK8 V8 engines, and oil seal degradation on V12 units — all of which our team resolves with the correct specialist approach.
              </p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {faultList.map((f) => (
                  <div key={f} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-800 font-medium">
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Same-Day Jaguar Engine Diagnostics — Grays, UK</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Our same-day Jaguar engine diagnostics service uses specialist equipment and genuine hands-on knowledge of Jaguar engine management systems — across both modern and classic model lines — to identify faults accurately and efficiently. We read fault codes, assess live engine data, and deliver a clear written assessment before recommending any course of action.
                  <br />
                  <br />
                  No assumptions. No pressure. No unnecessary upselling. Just accurate diagnosis and honest options.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Emergency Jaguar Engine Replacement — Fast-Track Response Available
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Jaguar off the road unexpectedly? We offer emergency Jaguar engine replacement with fast-track fitting slots at our Grays workshop. Same-day diagnostics, priority engine sourcing, and urgent installation options mean your vehicle is not waiting weeks for a resolution while you arrange alternatives elsewhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Your Jaguar — Engine Services by Model
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Every Jaguar model carries its own engineering story, its own common failure patterns, and its own demands when it comes to engine work.
              Our dedicated model pages give you the specific detail relevant to your vehicle — and our specialists have the hands-on experience with
              every one of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {jaguarModels.map((model, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group h-full"
              >
                <Link href={model.link} className="block h-full">
                  <div className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-5 hover:bg-white hover:border-primary/30 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col space-y-4 relative overflow-hidden h-full">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-primary transition-colors tracking-tight leading-snug">
                        {model.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                        {model.description}
                      </p>
                    </div>
                    <div className="mt-auto inline-flex items-center justify-center rounded-2xl bg-primary/10 px-5 py-2 text-primary font-black text-[0.7rem] uppercase tracking-[0.18em] group-hover:bg-primary group-hover:text-white transition-all">
                      Explore More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection title={<>Frequently Asked Questions — <span className="text-primary italic">Jaguar Engine</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to resolve your Jaguar engine problem?
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Contact our specialists in Grays today. Whether you need same-day diagnostics, a fully reconditioned Ingenium diesel, a rebuilt AJ133 V8, a classic XJ6 engine rebuild, or an emergency fitting slot — we&apos;re here with fast responses, straight answers, and a service that genuinely reflects the quality Jaguar ownership demands.
              <br />
              Jaguar has always built engines with character, precision, and ambition. At Vogue Technics, every rebuild we carry out honours exactly that standard.
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
