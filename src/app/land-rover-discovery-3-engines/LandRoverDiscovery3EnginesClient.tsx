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
      "Head gasket failure is arguably the most common serious fault on the Discovery 3 2.7 TDV6. Coolant mixing with oil, persistent overheating, white exhaust smoke, or a sweet smell from the engine bay are all warning signs that should never be ignored. We replace Discovery 3 head gaskets using OEM-grade components, machining the head surface where required to guarantee a clean, lasting seal. Catching it at the earliest sign saves the engine   delay almost always turns a manageable repair into a catastrophic one.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The 2.7 TDV6's timing chain system is another known weak point, especially on vehicles with higher mileage or inconsistent service history. A stretched chain rattles on start-up and, if left unaddressed, can jump or snap   causing irreversible internal damage in an instant. We replace the full timing chain kit as a complete system: chain, tensioners, guides, and sprockets together. We never replace one component and leave worn parts alongside it. That's a half-measure, and we don't do half-measures.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "The Discovery 3 TDV6 runs a twin-turbo configuration, and both turbos are susceptible to failure   particularly when oil changes have been stretched or the engine has run low on oil. Loss of power, excessive smoke under acceleration, or an unusual whistling noise are the telling signs. We source quality replacement turbos for all Discovery 3 engine variants and fit them to manufacturer specifications, carrying out full post-installation testing before the vehicle leaves our care.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Discovery 3 engine configurations use a timing belt as part of their valve train system. A snapped timing belt causes instant, catastrophic engine damage   there is no warning and no recovery. We carry timing belts and full replacement kits for all applicable Discovery 3 variants and recommend replacement at   or ahead of   the manufacturer's specified intervals, particularly if you are unsure of the vehicle's service history.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When mileage is high and wear has accumulated across multiple components, a full engine rebuild is often the most cost-effective decision a Discovery 3 owner can make. We strip the engine completely, inspect every individual component, replace everything that falls outside tolerance, and reassemble to factory specifications. The result is an engine that performs as it should   at a fraction of the cost of sourcing a replacement vehicle, and with a written warranty included.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every fault demands a full rebuild. Our diagnostic process identifies the root cause precisely   so you only pay for what actually needs doing. Oil leaks, bearing wear, injector faults, EGR issues, valve damage, sensor failures   we handle every level of Discovery 3 engine repair with accuracy and honesty. No unnecessary work, ever.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major faults have occurred simultaneously, or when repair costs outweigh the benefit, a quality replacement engine is often the right call. We supply and fit reconditioned and low-mileage used Discovery 3 engines, sourced exclusively from trusted UK suppliers and thoroughly inspected before installation. Every replacement engine we fit is tested and verified before it goes into your vehicle.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Considering an engine conversion on your Discovery 3   whether that's upgrading to a later TDV6 variant, swapping to the V8 petrol, or exploring an alternative powerplant? Our engine swap service covers the complete process from start to finish: mounts, ancillaries, wiring, ECU mapping, and post-swap diagnostics. Done properly, by people who have carried out these conversions before.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Unsure what's wrong with your Discovery 3? Considering buying a used example and want to know exactly what you're inheriting? Our engine health check covers compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection of the engine bay. You receive a written report with clear, honest findings. No upselling. No unnecessary recommendations. Just the facts about your engine's condition.",
  },
];

const faqs = [
  {
    question: "How much does a Land Rover Discovery 3 engine rebuild cost in the UK?",
    answer:
      "A full rebuild on the 2.7 TDV6 typically starts from around £2,000–£3,800 depending on the extent of wear and parts required. V8 petrol rebuilds vary based on complexity. Contact us for a precise, itemised quote for your specific vehicle and fault.",
  },
  {
    question: "What are the most common engine problems on the Land Rover Discovery 3?",
    answer:
      "The most frequently seen issues in our workshop are head gasket failure on the 2.7 TDV6, timing chain wear, twin-turbo failure, EGR valve problems, oil cooler failure, and oil leaks from ageing seals. Early diagnosis is always significantly cheaper than delayed action.",
  },
  {
    question: "Is it worth rebuilding a Discovery 3 engine?",
    answer:
      "In most cases, absolutely   particularly when the vehicle is otherwise in good condition. A quality rebuild at Vogue Technics significantly extends the vehicle's working life and costs far less than sourcing a replacement Discovery 3 at current used car prices.",
  },
  {
    question: "Do you supply reconditioned Discovery 3 engines for sale?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used Land Rover Discovery 3 engines for all variants, sourced from trusted UK suppliers and inspected before fitting. Contact us for current availability and pricing.",
  },
  {
    question: "What does the Discovery 3 engine system fault warning mean?",
    answer:
      "An engine system fault warning on the Discovery 3 can indicate anything from a sensor issue through to turbo failure or more serious internal problems. We strongly recommend booking a diagnostic check immediately   driving on with this warning active risks causing significantly greater damage.",
  },
  {
    question: "How long does a Discovery 3 engine replacement or rebuild take?",
    answer:
      "Engine repairs and replacements are typically completed within 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We confirm your timeline at the point of booking and we honour it.",
  },
  {
    question: "Can you collect my engine if I'm not near ?",
    answer:
      "Yes. We collect engines from across the UK. You don't need to be local to access our specialist service   we handle the logistics and return your engine fully tested and ready to fit.",
  },
];

export default function LandRoverDiscovery3EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Discovery 3 engine specialist in "
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Land Rover Engines", href: "/land-rover-engines" },
              { name: "Land Rover Discovery 3 Engines", href: "/land-rover-discovery-3-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Discovery 3 Engine Specialists
              </span>{" "}
                Rebuilds, Repairs & Replacements Across the UK
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Discovery 3 Owners Trust Vogue Technics</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Land Rover Exclusivity   Every Single Day</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  We don't divide our attention across makes and models. Every technician at Vogue Technics is trained and experienced specifically on Land Rover and Range Rover platforms. When your Discovery 3 comes into our  workshop, the people working on it have seen your exact problem dozens of times before   and they know precisely how to fix it correctly.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Over 25 Years Serving UK Discovery Owners</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Our track record in  and across the wider UK has been built entirely through results and reputation. We've rebuilt and replaced hundreds of Discovery 3 engines for owners from  to Scotland   and the reason so many of them return to us, and recommend us to others, is straightforward. When we fix an engine, it stays fixed.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Straight-Talking, Itemised Quotes</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-5">
                  Engine trouble is stressful enough without vague estimates and unexpected bills. Before any work begins, we give you a clear, itemised quote covering every element of the job. No surprises on collection day, no add-ons you didn't agree to. Just honest, transparent pricing from people who respect your time and your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Complete Land Rover Discovery 3 Engine Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer the full spectrum of engine services for the Discovery 3   covering all engine variants, all body configurations, and all levels of fault from minor repairs to complete rebuilds and replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-xs text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors"
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
              UK-Wide Service & Local Expertise From 
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                A Discovery 3 off the road is a genuine inconvenience   and for many owners, it's a daily driver that simply cannot sit idle. We work efficiently and without cutting corners, and we've structured our service to reach owners wherever they are in the UK.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Engine Collection & Delivery Across the UK</h3>
                  <p className="mt-3">
                    You don't need to be based near  to benefit from Vogue Technics. We operate a UK-wide engine collection and delivery service   remove your engine, send it to our  workshop, and we'll return it rebuilt, repaired, or replaced, fully tested and ready to install. We can also connect you with our network of approved local fitters if you need installation arranged near you.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Written Warranty on Every Job</h3>
                  <p className="mt-3">
                    Every engine rebuild, replacement, and major repair carried out at Vogue Technics is covered by a written warranty. We stand behind our work completely   because our standards mean we can.
                  </p>
                </div>
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My Discovery 3 TDV6 had been misdiagnosed twice elsewhere. Vogue Technics found the real problem within a day, gave me a fair and transparent quote, and had the vehicle back with me inside a week. Genuinely impressive."',
                by: "  Thomas B., Cambridge",
              },
              {
                quote:
                  '"Sent my 2.7 TDV6 down from Yorkshire after a head gasket failure. It came back rebuilt to a brilliant standard, packaged carefully, and a day earlier than promised. These people know exactly what they\'re doing."',
                by: "  Ian W., Leeds",
              },
              {
                quote:
                  '"Three other garages quoted me between £5,000 and £7,000 for a Discovery 3 engine replacement. Vogue Technics did it properly, with a warranty, for considerably less. Wish I\'d found them first."',
                by: "  Sarah K., Milton Keynes",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Discovery 3 Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Book Your Land Rover Discovery 3 Engine Work Today
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

