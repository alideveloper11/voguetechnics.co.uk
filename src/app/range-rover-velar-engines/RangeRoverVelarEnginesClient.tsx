"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on a Range Rover Velar is a serious fault that demands immediate attention. Coolant loss with no visible external leak, white exhaust smoke, and an engine running warmer than usual are the telling signs. Left unaddressed, a failing head gasket can cause catastrophic internal engine damage within a remarkably short distance. We carry out full head gasket replacements using quality-matched components, including a complete cylinder head skim and pressure test to confirm integrity before your Velar leaves our workshop.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The Velar's Ingenium diesel engines are known to develop timing chain issues, particularly on higher-mileage examples and vehicles that have experienced irregular oil change intervals. A cold-start rattle is typically the first warning   and it rarely improves on its own. Our timing chain replacement service covers the full assembly: chain, tensioners, guides, and all associated seals replaced in a single visit. Addressing this early is always far less expensive than dealing with the engine damage that follows if you don't.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger problems on Velar diesel engines most commonly result from oil starvation or heat soak following periods of hard use without adequate cool-down time. Power loss, smoke from the exhaust, and a distinctive whining noise under acceleration are the main symptoms. We supply and fit OEM-matched turbo units for all Velar engine variants, carrying out full oil feed and return line inspection as part of every replacement and running post-installation boost pressure tests before handover.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When internal wear has taken hold but your Velar's engine block remains structurally sound, a full rebuild often represents the most cost-effective and longest-lasting solution available. We dismantle the engine completely, inspect every component against manufacturer tolerances, replace worn bearings, piston rings, seals, and gaskets, then reassemble and test thoroughly before reinstallation. A correctly rebuilt Velar engine delivers performance and reliability indistinguishable from a brand-new unit   at a fraction of new-engine cost.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Many Velar engine faults don't require a full rebuild or replacement   they need accurate diagnosis and targeted repair carried out by someone who actually knows this engine family. Our repair service covers oil leaks, coolant leaks, misfires, rough running, injector faults, EGR issues, sensor failures, and a wide range of mechanical problems specific to the Ingenium engine range. We diagnose first, quote second   always.",
  },
  {
    title: "Engine Replacement – Used & Reconditioned Options",
    slug: "engine-replacement",
    body:
      "When replacement is the right decision, we make the process clear and straightforward. We offer both used Range Rover Velar engines for owners managing costs carefully and fully reconditioned Velar engines for those prioritising longevity. Supply-only or complete engine supply and fit   we accommodate both. Every engine comes with written warranty documentation and a fully itemised quote before a single bolt is turned.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Whether you're upgrading your Velar's engine specification, switching fuel types due to clean air zone requirements, or addressing a compatibility issue following a major failure, our engine swap service handles the full process. We carry out drivetrain compatibility assessments, wiring loom adaptation, ECU configuration, and thorough road testing after every swap. Complex jobs are our speciality   not something we improvise.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Range Rover Velar petrol variants use a timing belt configuration, and the consequences of belt failure are every bit as severe as timing chain failure   immediate, expensive, and entirely avoidable with timely maintenance. We carry out complete timing belt replacements including water pump inspection, tensioner condition assessment, and all associated seal changes as standard. If your Velar is approaching its service interval on the timing belt, don't delay.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Unsure what's wrong with your Range Rover Velar   or simply want to know its true engine condition before committing to a purchase or repair? Our engine health check uses professional OBD diagnostic equipment alongside physical compression testing and oil condition analysis to deliver a complete picture. You receive a clear, written report with our honest recommendation   no jargon, no pressure, just the facts your decision should be based on.",
  },
];

const faqs = [
  {
    question: "What engine does the Range Rover Velar have?",
    answer:
      "The Velar is built entirely around Land Rover's Ingenium engine family. Engine options include the 2.0-litre four-cylinder diesel in 180bhp and 240bhp outputs, the 2.0-litre four-cylinder petrol in 250bhp and 300bhp forms, the 3.0-litre six-cylinder diesel SDV6, and the 3.0-litre six-cylinder petrol P380. A plug-in hybrid variant using the 1.5-litre three-cylinder Ingenium unit is also available in more recent models.",
  },
  {
    question: "How much does a Range Rover Velar engine replacement cost in the UK?",
    answer:
      "Replacement costs depend on the specific engine variant, model year, and whether you choose a used or reconditioned unit. At Vogue Technics, our pricing is consistently more competitive than main dealer quotes   often significantly so. Contact us with your registration number for a fast, accurate, no-obligation quote.",
  },
  {
    question: "What are the most common Range Rover Velar engine problems?",
    answer:
      "The most frequently reported issues include timing chain wear on Ingenium diesel variants, turbocharger failure, EGR valve faults, injector seal deterioration, and oil consumption on higher-mileage units. Our engine health check service identifies all of these accurately before any repair decisions are made.",
  },
  {
    question: "How long does a Range Rover Velar engine replacement take?",
    answer:
      "Most engine replacements at our  workshop are completed within three to five working days, subject to parts availability. We provide a realistic timescale when you book in and keep you updated at every stage of the process.",
  },
  {
    question: "Do you offer Range Rover Velar engine supply and fit in ?",
    answer:
      "Yes. Our  workshop provides a complete supply and fit service for all Velar engine variants. We also offer supply-only with fast UK-wide tracked delivery for customers having their engine fitted elsewhere.",
  },
  {
    question: "What warranty comes with a reconditioned Range Rover Velar engine?",
    answer:
      "All reconditioned Velar engines supplied and fitted by Vogue Technics carry a minimum 6-month warranty as standard. Extended warranty options are available   speak to our team when you enquire for full details.",
  },
  {
    question: "Is it worth rebuilding a Range Rover Velar engine rather than replacing it?",
    answer:
      "In many cases, yes   particularly where the engine block is in sound condition and the failure is confined to internal wear components. A full rebuild by a specialist can restore your Velar's engine to near-factory performance at lower cost than a full replacement unit. We always assess honestly and recommend the solution that makes the most sense for your specific engine and budget.",
  },
  {
    question: "Can I buy a Range Rover Velar engine online and have it delivered across the UK?",
    answer:
      "Absolutely. We offer fast, tracked UK-wide delivery on all stock engines, fully packaged with technical documentation and warranty paperwork. Contact us with your registration and engine specification and we'll confirm availability, pricing, and delivery timescales promptly.",
  },
];

export default function RangeRoverVelarEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Velar engine specialist in "
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Range Rover Engines", href: "/range-rover-engines" },
              { name: "Range Rover Velar Engines", href: "/range-rover-velar-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Velar Engines
              </span>{" "}
              – Specialist Supply, Rebuild & Replacement in , UK
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

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Range Rover Velar Engine Services – Everything Your Velar Needs in One Place
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              The Velar deserves more than a generic garage visit. Its Ingenium engine family   covering 2.0-litre diesel and petrol units alongside the more powerful 3.0-litre six-cylinder variants   requires hands-on familiarity that only comes from years of dedicated experience. Our in-house specialist team at  carries out every service listed below with no subcontracting, no shortcuts, and no vague timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Used & Reconditioned Range Rover Velar Engines for Sale – 2.0 & 3.0 Variants
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                The Velar was introduced in 2017 as Land Rover&apos;s most design-forward model, built around the company&apos;s in-house Ingenium engine family from the outset. Understanding the differences between engine variants, model years, and specification levels is essential before sourcing a replacement   and it&apos;s knowledge our team applies every day.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Range Rover Velar 2.0 Engine for Sale – Diesel & Petrol</h3>
                  <p className="mt-3">
                    The 2.0-litre Ingenium engine forms the foundation of the Velar range, available in both diesel (producing 180bhp or 240bhp depending on specification) and petrol form. Both variants are well-engineered units that respond very well to a full professional rebuild, and we hold regular stock of used and reconditioned 2.0 Velar engines with full test documentation and warranty cover included.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Range Rover Velar 3.0 Engine for Sale – Six-Cylinder Power</h3>
                  <p className="mt-3">
                    The 3.0-litre six-cylinder Velar engine   available in both diesel SDV6 and petrol P380 configurations   delivers a significantly different driving experience and carries its own specific service requirements. We source and supply reconditioned 3.0 Velar engines with the same rigorous testing and warranty standards applied to every unit we handle. If you&apos;re running the higher-specification Velar and need a 3.0 replacement, call us directly for availability and pricing.
                  </p>
                </div>
              </div>
              <p className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <span className="font-bold text-slate-900">Range Rover Velar Engine Specs, Capacity & Power   Know Your Options</span>
                <br />
                The Velar engine range covers displacement from 2.0 to 3.0 litres, power outputs from 180bhp to 380bhp, and both four-cylinder and six-cylinder configurations. Getting the right replacement engine means matching not just the displacement but the specific engine code, output specification, and gearbox compatibility for your exact model and year. Our team guides every customer through this process before confirming any order   because a mismatched engine creates problems that are far more expensive to resolve than the original fault.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Velar Owners in  & Across the UK Trust Vogue Technics
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">25 Years of Land Rover & Range Rover Expertise</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  A quarter century focused exclusively on this vehicle family. We've seen every failure mode the Velar can produce — and know exactly how to fix each one.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Transparent Pricing, No Hidden Costs</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Clear, itemised written quote before any work begins. No surprise invoices, no added labour charges, no pressure to approve work you haven't asked for.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Minimum 6-Month Warranty</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Every reconditioned engine carries a minimum 6-month warranty, with extended options on request. Every engine is tested before it leaves our workshop.
                </p>
              </div>
            </div>
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
              What Our Customers Say About Vogue Technics
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"Main dealer quoted me nearly £7,000 for a Velar engine replacement. Vogue Technics supplied and fitted a fully reconditioned 2.0 diesel for considerably less, with a written 6-month warranty. The car has been perfect since the day I collected it."',
                by: "  Caroline H., ",
              },
              {
                quote:
                  '"Brought my Velar in with a timing chain rattle that two garages told me wasn\'t serious. Vogue Technics diagnosed it immediately and fixed it properly. Honest, knowledgeable, and reasonably priced   exactly what you want."',
                by: "  Omar S., Thurrock",
              },
              {
                quote:
                  '"Ordered a reconditioned 3.0 engine for supply only and had it shipped to my garage in Leeds. Arrived on time, packaged professionally, with full documentation and compression test results included. Couldn\'t ask for more."',
                by: "  Paul R., Leeds",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Velar Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Your Range Rover Velar deserves specialist care   not a best guess.
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today or enter your registration above for a fast, no-obligation quote. Our team in  is ready to help with genuine expertise, honest pricing, and engine work that lasts.
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

