"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import type { EngineCodesEntry } from "@/data/engineCodes";

type RangeRoverEvoqueEnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure is a serious and unfortunately common problem on Range Rover Evoque diesel engines, particularly the 2.2 SD4. Symptoms include white smoke from the exhaust, coolant loss with no visible leak, and engine overheating. We carry out full head gasket replacements using quality-matched components, including a full head skim and pressure test to confirm the repair is solid before your car leaves us.",
  },
  {
    title: "Timing Chain & Timing Belt Replacement",
    slug: "timing-chain-replacement",
    body:
      "The Evoque's 2.2 SD4 engine is well known for timing chain stretch   a fault that can cause rattling on startup and, if ignored, catastrophic engine damage. Our timing chain replacement service covers the full kit: chain, tensioners, guides, and all associated seals. For petrol variants fitted with a timing belt, we carry out complete timing belt replacements with water pump inspection included as standard.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger failure on the Evoque   especially diesel models   is more common than it should be, often caused by oil starvation or prolonged cold-start driving. We supply and fit OEM-matched turbo units, carry out full oil feed and return line inspection, and run post-installation boost pressure checks to ensure everything is working exactly as it should.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When your Evoque engine has suffered internal wear but the block remains structurally sound, a full rebuild is often far more cost-effective than a straight replacement. We strip the engine completely, measure all critical tolerances, replace worn bearings, pistons, rings, seals, and gaskets, then reassemble and test to manufacturer specification. A properly rebuilt Evoque engine can give you another 100,000 miles of reliable motoring.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every engine fault requires a rebuild or replacement. Our engine repair service covers oil leaks, coolant leaks, sensor failures, misfires, rough running, and a wide range of mechanical faults. We diagnose accurately before we quote   so you'll never pay for work your engine doesn't need.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "If your Evoque engine is beyond economic repair, we offer both supply-only and full engine supply and fit services. Choose a used engine for a budget-friendly solution, or go for a fully reconditioned unit if longevity is your priority. Either way, you'll receive a written warranty and a clear, honest quote before any work begins.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Looking to upgrade your Evoque's engine, or need to swap from diesel to petrol due to low-emission zone considerations? Our engine swap service covers full compatibility assessment, wiring loom adaptation, ECU configuration, and post-swap road testing. We've carried out complex engine swaps across multiple Evoque generations with consistently strong results.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Not sure what's wrong with your Evoque? Our comprehensive engine health check uses the latest diagnostic equipment to pull fault codes, assess compression across all cylinders, evaluate oil condition, and identify any early signs of mechanical wear. You'll receive a clear written report   no jargon, no pressure, just honest advice.",
  },
];

const faqs = [
  {
    question: "What engine does the Range Rover Evoque have?",
    answer:
      "The Evoque has been offered with several engine options depending on the year. Early models (2011–2015) used a 2.2-litre SD4 diesel and a 2.0-litre Si4 petrol. From 2016, Land Rover introduced the in-house Ingenium 2.0-litre diesel and petrol engines. The second-generation Evoque (2019 onwards) also offers a 1.5-litre three-cylinder mild hybrid and plug-in hybrid variant.",
  },
  {
    question: "How much does a Range Rover Evoque engine replacement cost in the UK?",
    answer:
      "Costs vary depending on the engine type, year, and whether you choose a used or reconditioned unit. At Vogue Technics, we offer some of the most competitive Evoque engine replacement prices in the UK. Contact us with your registration number for a fast, no-obligation quote.",
  },
  {
    question: "What are the most common Range Rover Evoque engine problems?",
    answer:
      "The most frequently reported issues include timing chain wear on 2.2 SD4 diesels, turbocharger failure, head gasket failure, EGR valve faults on Ingenium diesel engines, and oil consumption on higher-mileage petrol units. We diagnose and repair all of these faults at our  workshop.",
  },
  {
    question: "How many cylinders does the Range Rover Evoque engine have?",
    answer:
      "Most Evoque engines are four-cylinder units. The newer 1.5-litre PHEV variant introduced in the second generation uses a three-cylinder configuration. There is no six-cylinder or V8 option available in the Evoque range.",
  },
  {
    question: "Can I buy a Range Rover Evoque engine online and have it delivered?",
    answer:
      "Yes. We offer fast UK-wide delivery on all stock engines. Simply contact us with your vehicle registration and engine specification, and we'll confirm availability, pricing, and an estimated delivery timescale.",
  },
  {
    question: "Do you offer a warranty on Range Rover Evoque engines?",
    answer:
      "Yes. All reconditioned Evoque engines come with a minimum 6-month warranty as standard. Extended warranty options are available   speak to our team when you enquire for full details.",
  },
  {
    question: "Is it worth rebuilding a Range Rover Evoque engine rather than replacing it?",
    answer:
      "In many cases, yes   particularly if the engine block is in good condition and the failure is limited to internal wear components. A full rebuild carried out by a specialist can restore your engine to near-factory performance at a lower cost than a full replacement. We'll always advise you honestly on which option makes the most sense for your specific situation.",
  },
];

export default function RangeRoverEvoqueEnginesClient({ engineCodes }: RangeRoverEvoqueEnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Evoque engine specialist in "
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
              { name: "Range Rover Evoque Engines", href: "/range-rover-evoque-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Evoque Engines
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Used & Reconditioned Range Rover Evoque Engines for Sale   All Years & Variants
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                Whether you're driving a 2012 Evoque with the original 2.2 SD4 diesel or a 2020 model fitted with the newer 2.0 Ingenium unit, we stock and source engines across every generation. Our inventory covers used and fully reconditioned options for every popular Evoque engine variant, so you're never left waiting long.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">2012–2015 Evoque (2.2 SD4 & 2.0 Si4)</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    High-mileage units commonly suffer timing chain wear, turbo failure, and oil consumption. We supply tested used and reconditioned engines with full documentation and warranty.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">2016–2019 Evoque (2.0 Ingenium)</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Ingenium units brought known faults around injector seals and EGR on diesels. We stock fully tested 2016–2019 engines ready to fit or dispatch.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">2020 Evoque (incl. 1.5 PHEV)</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    We supply replacement engines for all second-gen Evoque variants including the plug-in hybrid. Call us before committing to a main dealer quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Range Rover Evoque Engine Services   Everything Under One Roof
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We don't just sell engines. We offer a complete range of specialist Evoque engine services carried out by our in-house team at our fully equipped  workshop. Every job is quoted transparently, carried out properly, and backed by a warranty.
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
              Range Rover Evoque Engine Replacement Cost   Honest Pricing from ' Specialists
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                One of the most common questions we hear is: "How much does a Range Rover Evoque engine replacement cost?" The honest answer is that it depends on the engine variant, the year of your vehicle, and whether you opt for a used or reconditioned unit. What we can tell you is that our prices are consistently lower than main dealer quotes   often significantly so   without any compromise on quality or warranty cover.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Used Range Rover Evoque Engines</h3>
                  <p className="mt-3">
                    Used Evoque engines offer the most affordable entry point for engine replacement. Every used unit we supply has been compression tested, visually inspected, and run-checked before sale. We'll always tell you the mileage, the source vehicle history, and any known issues   because transparency is how we've kept customers coming back for over 25 years.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Fully Reconditioned Range Rover Evoque Engines</h3>
                  <p className="mt-3">
                    A reconditioned Evoque engine is rebuilt to manufacturer tolerances using new internal components. It offers performance and longevity closest to a brand-new engine, at a fraction of the main dealer price. All reconditioned engines supplied by Vogue Technics come with a minimum 6-month warranty, with extended cover available on request.
                  </p>
                </div>
              </div>
              <p className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <span className="font-bold text-slate-900">Fast UK Delivery & Local Fitting in </span>
                <br />
                We offer fast, tracked UK-wide delivery on all engines in stock. For customers in , Thurrock, Basildon, Dartford, and the surrounding  area, we provide a complete supply and fit service at our workshop   no middlemen, no subcontracted fitting, just our own specialist team doing the job correctly from the start.
              </p>
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
                  '"I was quoted over £5,500 by a Land Rover dealership for a new engine. Vogue Technics supplied and fitted a fully reconditioned 2.2 SD4 for less than half that, with a 6-month warranty. The car has been faultless since."',
                by: "  Mark H., Thurrock, ",
              },
              {
                quote:
                  '"They diagnosed a timing chain issue that two other garages had completely missed. Honest, knowledgeable, and reasonably priced. I won\'t take my Evoque anywhere else now."',
                by: "  Priya S., Basildon",
              },
              {
                quote:
                  '"Brilliant from start to finish. Clear quote, kept me updated throughout, and the engine swap was completed ahead of schedule. Highly recommend to any Evoque owner."',
                by: "  Carl W., Dartford",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Evoque Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Don&apos;t let an engine problem keep your Evoque off the road.
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today, or enter your registration above for a fast, no-obligation quote. Our team in  is ready to help   with the expertise, honesty, and competitive pricing your Evoque deserves.
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

