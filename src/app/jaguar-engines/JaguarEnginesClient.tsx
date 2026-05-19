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
      "The XK grand tourer is powered by the AJ-V8. Generally robust, but can develop oil consumption, valve timing irregularities and cooling system faults as mileage accumulates. Rebuilding an AJ-V8 correctly requires understanding of its tolerances and characteristics   we do it properly, not quickly.",
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
      "The XKR adds a supercharger to the AJ-V8, increasing complexity and reward. Supercharger faults, oil system issues and crankshaft bearing wear are common on higher-mileage cars. Rebuilding a supercharged V8 demands precision and the right equipment   we deliver that level of detail.",
  },
  {
    title: "Jaguar XKR-S Engines",
    link: "/jaguar-xkr-s-engines",
    description:
      "The XKR-S uses an uprated supercharged V8 with higher stresses and tighter tolerances. Engine work demands the highest precision   the consequences of improper repair are significant. We carry out XKR-S diagnostics, rebuilds and repairs using OEM-spec components and true specialist knowledge.",
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
      "My Jaguar XF had been flagging up timing chain warnings for a while and two local garages told me it would be a huge job. Vogue Technics were upfront from the very first call   they explained exactly what was involved, gave me a fair quote, and turned the car around in under two weeks. The XF is running better than it has in years. Absolutely first class service.",
    name: "Andrew K.",
    vehicle: "Jaguar XF 2.0 Ingenium Diesel   Birmingham",
  },
  {
    quote:
      "The turbocharger on my F-Pace went without much warning   one day it was fine, the next it was producing clouds of smoke and had no power at all. I called Vogue Technics and they arranged collection from my home in Yorkshire. The diagnostic report they sent over was thorough and completely clear. The replacement and associated engine work was carried out to a really high standard and the car has been faultless since. I would not take my Jaguar anywhere else.",
    name: "Sarah L.",
    vehicle: "Jaguar F-Pace 3.0 V6 Diesel   Yorkshire",
  },
  {
    quote:
      "I was facing a near £10,000 bill from my Jaguar dealer for an engine replacement on my XE. Vogue Technics offered me a fully reconditioned engine with a written warranty for significantly less. The whole process was smooth and professional   they kept me updated throughout and the car was ready ahead of schedule. Genuinely impressed with the quality of the work and the honesty of the people involved.",
    name: "Marcus T.",
    vehicle: "Jaguar XE 2.0 Diesel   Surrey",
  },
];

const modernJaguarServices = [
  "Ingenium 2.0 diesel & petrol rebuild — F-Pace, XF, XE, E-Pace",
  "AJ133 5.0 V8 supply & rebuild — F-Type SVR, F-Pace SVR",
  "AJ126 3.0 V6 replacement — XF, XJ, F-Pace",
  "3.0 V6 diesel supply and fit — all model years",
  "4.2 V8 supercharged rebuild — XF, XJ, XK",
  "Remanufactured units with warranty — UK-wide delivery",
];

const classicJaguarServices = [
  "E-Type 3.8 & 4.2 straight-six rebuild and supply",
  "XJ6 AJ6 & AJ16 rebuild — all series",
  "XJS V12 supply — 5.3 and 6.0 litre",
  "XK8 & XKR 4.0 & 4.2 V8 rebuild",
  "S-Type 3.0 V6 & 4.2 V8 supply and fit",
  "X-Type 2.5 & 3.0 V6 replacement and rebuild",
];

const faultList = [
  "Jaguar engine system fault   Ingenium management system diagnosis",
  "Check engine light and engine warning light   all model years resolved",
  "Failsafe engine mode   S-Type, XJ8, XK8 specialist diagnosis",
  "Jaguar Ingenium engine reliability issues   targeted rebuild and repair",
  "5.0 V8 supercharged engine problems   timing chain and supercharger faults",
  "Low battery   please start engine   electrical and charging system faults",
  "Classic V12 engine rebuild   XJS and E-Type specialist service",
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
      "Yes. We offer a fully managed UK-wide collection and delivery service for vehicles and engines, so distance from  is not a barrier to accessing our specialist work.",
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
      "Call us to speak with a specialist or request a quote online. If you are not local to , we can discuss UK-wide collection options at the same time.",
  },
];

export default function JaguarEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar engine specialists in "
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
              |  | UK-Wide Service
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
                  <p className="mt-4 text-slate-700 leading-relaxed italic line-clamp-4">&ldquo;{r.quote}&rdquo;</p>
                  <Link href="/reviews" className="text-primary font-extrabold text-[0.7rem] tracking-widest uppercase flex items-center gap-1 mt-2 hover:translate-x-1 transition-transform">Read more <ArrowRight className="w-3 h-3"/></Link>
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
              is delivered with the same precision and commitment to quality. We handle the full spectrum of Jaguar engine work   and we do it
              exclusively, which means our knowledge runs deep.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Engine Rebuilds", href: "/services/engine-rebuild", body: "Full strip, clean, machine, and rebuild to OEM tolerances — bench-tested and covered by written warranty." },
                { title: "Engine Repairs", href: "/services/engine-repair", body: "Precise repairs for oil pressure faults, bearing wear, cooling failures, and turbo issues — root-cause diagnosis first." },
                { title: "Engine Replacements", href: "/services/engine-replacement", body: "When rebuild isn't economic, we source, inspect, and fit quality replacements — with honest rebuild-vs-replace advice." },
                { title: "Timing Chain Replacement", href: "/services/timing-chain-replacement", body: "Critical on 2.0 Ingenium diesels — standalone or as part of a wider rebuild, using OEM-spec components throughout." },
                { title: "Head Gasket Repairs", href: "/services/head-gasket-replacement", body: "Crack-test, machining where needed, and cooling system confirmed healthy before reassembly — not just a gasket swap." },
                { title: "Turbocharger Replacement", href: "/services/turbo-replacement", body: "Oil system checked, damage fully assessed, and the correct replacement fitted into a clean engine." },
                { title: "Engine Health Checks", href: "/services/engine-health-check", body: "Oil quality, compression, timing condition, and fault codes — written report provided for peace of mind or pre-purchase." },
                { title: "Engine Swaps & Conversions", href: "/services/engine-swap", body: "Complex swaps and conversions planned and executed with precision — compatibility advice, sourcing, and safety-first installation." },
              ].map((s) => (
                <div key={s.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{s.body}</p>
                  </div>
                  <div className="pt-4">
                    <Link href={s.href} className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors">
                      Explore More
                    </Link>
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
              Jaguar Engine Supply   Reconditioned & Used Units Across All Models & Variants
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              We stock and supply Jaguar engines across every model and engine family. Every unit   reconditioned or used   is fully tested, properly documented, and dispatched with warranty cover from our  workshop.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Modern Jaguar Engines   Ingenium, AJ133, AJ126 & V8 Supply and Rebuild
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Ingenium, AJ133, AJ126 and V8 — hands-on knowledge of every current Jaguar engine code.
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
                  Classic Jaguar Engines   XK, XJ6, XJS & E-Type Supply and Rebuild
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  From the XK straight-six to the V12 — specialist rebuilding for every classic Jaguar engine.
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
                Supply only to your garage, or full supply and fit at our workshop — sourcing, installation, and road testing all under one roof.
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
              Jaguar engine problems range from simple warning light faults through to serious internal failures   and accurate diagnosis before committing to any repair or replacement is always the right first step.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Common Jaguar Engine Problems   All Models Diagnosed & Resolved</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Ingenium diesels: EGR faults, timing chain wear, DPF issues, oil leaks. V8/V6 AJ units: supercharger seal wear, timing chain stretch, oil consumption. Classic engines: head gasket failure, Nikasil bore problems, oil seal degradation — all resolved with the correct specialist approach.
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
                <h3 className="text-xl font-bold text-slate-900">Same-Day Jaguar Engine Diagnostics   , UK</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Specialist equipment and hands-on Jaguar knowledge — fault codes read, live data assessed, clear written findings before any recommendation. No assumptions, no upselling.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Emergency Jaguar Engine Replacement   Fast-Track Response Available
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Fast-track fitting slots, priority engine sourcing, and same-day diagnostics — your Jaguar gets back on the road without the long wait.
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
              Find Your Jaguar   Engine Services by Model
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Every Jaguar model carries its own engineering story, its own common failure patterns, and its own demands when it comes to engine work.
              Our dedicated model pages give you the specific detail relevant to your vehicle   and our specialists have the hands-on experience with
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
      <FAQSection title={<>Frequently Asked Questions   <span className="text-primary italic">Jaguar Engine</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to resolve your Jaguar engine problem?
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
