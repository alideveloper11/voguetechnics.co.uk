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
      "Head gasket failure is one of the most damaging faults a Range Rover Sport can develop   and one of the most frequently misdiagnosed. White exhaust smoke, unexplained coolant loss, and engines running hotter than usual are all warning signs that shouldn't be ignored. Our specialists carry out full head gasket replacements using quality-matched components, including a complete head skim and cylinder pressure test to confirm the repair is structurally sound before your vehicle leaves our workshop.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "Timing chain wear is a well-documented issue on several Range Rover Sport engine variants, particularly the 2.7 TDV6 and 3.0 SDV6 diesels. A rattling noise on cold start is often the first sign   and by that point, the wear is already significant. We carry out full timing chain replacements covering the complete kit: chain, tensioners, guides, sprockets, and all associated seals. This is not a job to delay. A failed timing chain can destroy an otherwise healthy engine in seconds.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger failure on Range Rover Sport diesel engines is more common than it should be, typically caused by oil starvation, neglected service intervals, or extended cold-start driving. Symptoms include a loss of power, excessive smoke from the exhaust, and a high-pitched whining noise under load. We supply and fit OEM-matched turbo units, carry out full oil feed and return line inspection as part of every replacement, and run post-installation boost pressure testing to confirm correct operation before handover.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When your Range Rover Sport engine has suffered internal wear but the block remains structurally viable, a full rebuild is frequently the best long-term investment you can make. We strip the engine completely, measure all critical tolerances, replace worn bearings, piston rings, seals, and gaskets, then reassemble and test to manufacturer specification. A correctly rebuilt Sport engine doesn't just run   it runs as well as it did when it left the factory. And it costs considerably less than a full engine replacement.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every engine fault demands a rebuild or replacement. Our engine repair service covers the complete spectrum of Range Rover Sport engine problems   oil leaks, coolant loss, misfires, rough running, injector failure, EGR faults, sensor issues, and general mechanical wear. We always diagnose accurately before we quote, using professional diagnostic equipment alongside hands-on mechanical assessment. You'll never be sold a repair your engine doesn't actually need.",
  },
  {
    title: "Engine Replacement   Used & Reconditioned Options",
    slug: "engine-replacement",
    body:
      "When repair or rebuild isn't the right answer, we make the replacement process as straightforward as possible. We offer both used Range Rover Sport engines for budget-conscious owners and fully reconditioned engines for those prioritising longevity. Supply-only or complete supply and fit   the choice is yours. Every engine comes with a written warranty and a clear, itemised quote before any work begins.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Need to change your Sport's engine type, upgrade to a higher-specification unit, or swap from diesel to petrol due to clean air zone requirements? Our engine swap service covers full drivetrain compatibility checks, wiring loom adaptation, ECU configuration, and comprehensive road testing after completion. We've carried out complex engine swaps across multiple Range Rover Sport generations, and we know exactly what's involved in making them work properly.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Range Rover Sport petrol variants use a timing belt rather than a chain   and a snapped belt causes exactly the same catastrophic engine damage. We carry out complete timing belt replacements including water pump inspection, tensioner assessment, and all associated seal changes. If your Sport is due a timing belt service, don't put it off.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Not sure what's wrong with your Range Rover Sport? Start here. Our comprehensive engine health check uses the latest OBD diagnostic equipment alongside physical compression testing and oil analysis to build a complete picture of your engine's condition. You receive a clear, jargon-free written report with our honest recommendation   whether that's a minor repair, a full rebuild, or confirmation that your engine is in better shape than you feared.",
  },
];

const faqs = [
  {
    question: "What engines are available in the Range Rover Sport?",
    answer:
      "The Range Rover Sport has been offered with a wide range of engines across its two generations. These include the 2.7 TDV6 and 3.6 TDV8 diesels, the 4.2 and 5.0 supercharged V8 petrols, the 3.0 SDV6 and Si6, and the more recent 2.0 Ingenium diesel and petrol units. Our team will confirm the correct engine variant for your specific model and year when you enquire.",
  },
  {
    question: "How much does a Range Rover Sport engine rebuild cost?",
    answer:
      "Rebuild costs depend on the engine variant and the extent of internal wear. At Vogue Technics, we provide a full strip and assess before quoting, so you receive an accurate price based on your specific engine's condition   not a generic estimate. Contact us with your registration for an honest starting point.",
  },
  {
    question: "What is the most common Range Rover Sport engine problem?",
    answer:
      "Timing chain wear on diesel variants, turbocharger failure, head gasket issues, and EGR faults are among the most frequently reported problems. The exact failure pattern varies by engine generation and service history. Our health check service identifies all of these accurately before any repair decisions are made.",
  },
  {
    question: "How long does a Range Rover Sport engine replacement take?",
    answer:
      "Most engine replacements are completed within three to five working days, depending on parts availability and the complexity of the specific fitment. We always provide a realistic timeframe when you book in   and we keep you updated throughout the job.",
  },
  {
    question: "Do you offer Range Rover Sport engine supply and fit in ?",
    answer:
      "Yes. Our  workshop offers a complete supply and fit service for all Range Rover Sport engine variants. We also offer supply-only with UK-wide delivery for customers fitting elsewhere.",
  },
  {
    question: "What warranty comes with a reconditioned Range Rover Sport engine?",
    answer:
      "All reconditioned engines supplied and fitted by Vogue Technics come with a minimum 6-month warranty as standard. Extended cover is available   ask our team for full details when you get in touch.",
  },
  {
    question: "Is it better to rebuild or replace a Range Rover Sport engine?",
    answer:
      "It depends entirely on the condition of your existing engine block and the nature of the fault. In many cases, a full rebuild is the more cost-effective and longer-lasting solution. We always assess your engine honestly before recommending a path   our goal is the right outcome for your vehicle and your budget, not the most expensive option.",
  },
];

export default function RangeRoverSportEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Sport engine specialist in "
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
              { name: "Range Rover Sport Engines", href: "/range-rover-sport-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Sport Engines
              </span>{" "}
              – Expert Rebuild, Repair & Replacement in , UK
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
              Complete Range Rover Sport Engine Services in 
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer every engine service your Range Rover Sport could ever need, all under one roof, all carried out by our own specialist team. No subcontracting, no passing jobs between garages, no vague timelines. Just honest, expert work from people who know this engine family inside out.
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
              Used & Reconditioned Range Rover Sport Engines for Sale   All Variants
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                Beyond our workshop services, we supply Range Rover Sport engines to customers across the UK. Our stock covers every major engine variant across both Sport generations, and we source rapidly for specific units we don&apos;t hold immediately.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Range Rover Sport 2.7 TDV6 & 3.6 TDV8 Engines</h3>
                  <p className="mt-3">
                    The first-generation Sport engines   particularly the 2.7 TDV6   remain in high demand as affordable, capable units. We supply tested used and fully reconditioned 2.7 and 3.6 engines with compression test results, mileage documentation, and minimum 6-month warranty cover included as standard.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Range Rover Sport 3.0 SDV6 & 5.0 Supercharged Engines</h3>
                  <p className="mt-3">
                    The 3.0 SDV6 diesel and 5.0 supercharged V8 petrol are the two most requested second-generation Sport engines. Both are exceptional when properly maintained   and both respond extremely well to a full professional rebuild. We hold regular stock of both variants in used and reconditioned condition, with fast UK-wide delivery available.
                  </p>
                </div>
              </div>
              <p className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <span className="font-bold text-slate-900">Fast UK Delivery & Local Fitting in </span>
                <br />
                Every engine we supply is packaged securely and dispatched with full technical documentation. For customers across , Thurrock, Basildon, Dartford, and the surrounding  area, we offer a complete supply and fit service at our workshop   handled entirely by our own specialist team from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Range Rover Sport Owners Choose Vogue Technics
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">25 Years of Range Rover Engine Experience</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  A quarter century working exclusively on Range Rover and Land Rover engines means faster diagnosis, fewer return visits, and work that holds up over time.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Transparent Pricing — No Surprises</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Every job starts with a clear, itemised quote before we touch your vehicle. No hidden labour charges, no unexpected parts invoices.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Minimum 6-Month Warranty</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Every reconditioned engine carries a minimum 6-month warranty as standard. Extended options available. We stand behind every engine we build.
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"Vogue Technics rebuilt my Sport\'s 3.0 SDV6 after a catastrophic oil system failure. Every other garage I called quoted for a full replacement. These guys rebuilt it properly for significantly less and it\'s been faultless for 18 months."',
                by: "  Andrew F., ",
              },
              {
                quote:
                  '"The engine health check alone was worth it. They found a timing chain issue that was weeks away from causing serious damage. Fixed quickly, priced fairly, and explained everything clearly throughout."',
                by: "  Natalie W., Thurrock",
              },
              {
                quote:
                  '"I ordered a reconditioned 5.0 supercharged engine for supply only   needed it shipped to my garage in Birmingham. Arrived on time, perfectly packaged, with full documentation. Exactly as described."',
                by: "  Dean M., Birmingham",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Sport Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to get your Range Rover Sport back to its best?
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today or enter your registration above for a fast, no-obligation quote. Our specialist team in  is ready to help   with 25 years of focused expertise, honest pricing, and engine work you can genuinely rely on.
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

