"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, Wrench, Zap, Activity, Cloud } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import ServiceGallery from "@/components/common/ServiceGallery";
import PartnerLogos from "@/components/common/PartnerLogos";
import NationwideSupportSection from "@/components/common/NationwideSupportSection";

export default function TurboReplacementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Turbo replacement specialists"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Turbo Replacement", href: "/services/turbo-replacement" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight italic"
            >
              Turbo Replacement Specialists{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
              <RegSearch />
            </div>


            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/get-quote"
                className="bg-primary text-white font-black px-6 py-3 rounded-2xl shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center bg-white text-slate-950 font-black px-6 py-3 rounded-2xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Call Us Today
              </a>
              <Link
                href="/services/engine-health-check"
                className="bg-white/15 text-white font-black px-6 py-3 rounded-2xl shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Book a Turbo Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <ServiceGallery
        title="Turbo Replacement Work"
        subtitle="A look at some of the turbo replacement jobs carried out at our workshop."
        images={[
          { src: "/turbo_replacement/turbo_replacement%201.png", alt: "Turbo replacement 1" },
          { src: "/turbo_replacement/turbo_replacement%202.png", alt: "Turbo replacement 2" },
          { src: "/turbo_replacement/turbo_replacement%203.png", alt: "Turbo replacement 3" },
        ]}
      />

      {/* Signs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Is Your Turbo Failing? <span className="text-primary">Recognise These Signs</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              Catching turbo failure early is the difference between a straightforward replacement and an engine repair bill that
              nobody wanted. These are the warning signs that should never be ignored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Loss of Power</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    A noticeable loss of power   particularly under acceleration or when pulling uphill   is one of the first signs
                    a turbo is losing efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Smoke Under Load</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    Black or grey smoke from the exhaust under load points to turbo seal failure or over-fuelling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Whistling / Whining</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    A whistling or whining noise that appears under boost is almost always a bearing on its way out.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">
                    Fault Codes / Limp Mode
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    Excessive oil consumption between services, a boost-related fault code that keeps returning, and a check engine
                    light accompanied by limp mode are clear signals that a turbo inspection is overdue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight italic">
                  Don’t wait until it becomes an engine repair.
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                  The longer a failing turbo runs, the greater the risk of oil contamination spreading into the engine. Acting now
                  is always less expensive than acting later.
                </p>
              </div>
              <Link
                href="/services/engine-health-check"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Book a Same-Day Turbo Diagnostic <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationwideSupportSection />

      {/* Service */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Our <span className="text-primary">Turbo Replacement</span> Service
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                We carry out turbo replacement across all five vehicle brands using OEM turbos, OEM-specification remanufactured
                units, and quality alternatives where appropriate   always with honest advice on which option suits your vehicle,
                its age, and its mileage.
              </p>
              <p>
                Every turbo replacement includes a full inspection of the oil feed and return lines, the intercooler system, and
                the intake pipework before the new unit is fitted. A new turbo fitted onto a contaminated oil system will not last
                  which is why this inspection is standard on every job, not an optional extra.
              </p>
              <p>
                All turbo replacement work is backed by a minimum six-month warranty, with a written quote confirmed before work
                begins.
              </p>
            </div>
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Start here</p>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-4">
                Quote first. Repair second.
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-8">
                We confirm the cause, inspect the oil system, then provide a written quote before any work begins.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
                >
                  Request a Written Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/engine-health-check"
                  className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xs md:text-sm"
                >
                  Book an Inspection <ArrowRight className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By vehicle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Turbo Replacement <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Range Rover Turbo Replacement",
                text: "Range Rover turbo problems vary by platform, and understanding which fault you are actually dealing with requires genuine platform knowledge. We carry out Range Rover turbo replacement across the Vogue, Sport, Velar, and Evoque   covering the TDV6 3.0, TDV8 4.4, SDV6, SDV8, and Ingenium 2.0 diesel platforms. Common faults include TDV6 turbo oil seal failure causing excessive consumption, variable geometry actuator faults triggering limp mode, and Evoque Ingenium boost pressure faults linked to turbo wear. Range Rover turbo replacement cost depends on the platform and unit specification   we provide clear written quotes at a price well below main dealer rates.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Turbo Replacement",
                text: "Land Rover turbo replacement covers a wide range of platforms and fault types. We work across the Discovery Sport, Discovery 3, Discovery 4, Freelander 2, and Defender   with specific knowledge of the turbo-related faults common to each. Discovery Sport turbo replacement is one of the most frequent jobs we carry out on current Land Rover models. The Ingenium 2.0 diesel develops boost pressure faults and actuator failure from higher mileage, and Discovery Sport turbo replacement cost is a question we answer honestly with a written quote   not a figure inflated by franchise overheads. The Discovery 4 TDV6 twin turbo arrangement and the Freelander 2 TD4 turbo are both platforms we cover regularly. Land Rover turbo replacement cost is always confirmed in writing before any work begins.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Turbo Replacement",
                text: "Jaguar's shared JLR engineering means our turbo expertise covers the full Jaguar range directly. We carry out Jaguar turbo replacement across the XE, XF, XJ, F-Pace, E-Pace, S-Type, and X-Type   covering 2.0 Ingenium, 2.7 V6 diesel, and 3.0 V6 platforms. Jaguar XF turbo replacement cost and Jaguar XE turbo replacement cost are among our most common enquiries. The XF 2.7 diesel twin turbo develops oil contamination faults that require both units to be assessed together. The XE Ingenium develops boost faults and seal failure typically between 60,000 and 100,000 miles. Jaguar turbo replacement near me is a search that brings customers to us from across , London, and the wider UK   with same-day diagnostics available and UK-wide collection for those further away.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi Turbo Replacement",
                text: "Audi turbo failure symptoms are often gradual   increased oil consumption, intermittent boost loss, and occasional fault codes that seem minor until they are not. We carry out Audi turbo replacement across the A3, A4, A5, A6, S3, and RS range, covering the 1.8T, 2.0 TFSI petrol, and TDI diesel platforms. Audi 2.0 TFSI turbo replacement is one of the most common jobs we carry out on petrol Audis   often preceded by a period of oil burning that owners attribute to normal consumption. Audi A6 turbocharger repair, Audi turbo oil leak diagnosis, and Audi RS turbo replacement for performance variants are all within our regular workload. Audi turbo cost varies by platform and unit. We always provide a full written quote following a proper diagnostic inspection.",
                href: "/audi-engines",
              },
              {
                title: "BMW Turbo Replacement",
                text: "BMW turbocharged engines are rewarding when running correctly and problematic when not. We carry out BMW turbo replacement across the 1, 2, 3, 4, 5, and 7 Series, X3, X5, and X6   covering N47, N57, N54, N55, N20, and B58 platforms. BMW N54 turbo replacement is one of our most requested petrol turbo jobs   wastegate rattle, boost pressure fault codes, and seal failure are all common on this twin-turbocharged platform. BMW turbo boost problems on diesel platforms   particularly the N47 and N57   are often linked to variable geometry actuator faults that we diagnose accurately before recommending replacement. BMW turbo cost UK is always confirmed in a written quote before work begins, with pricing that reflects independent specialist expertise.",
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm line-clamp-4">{item.text}</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Turbo Replacement <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/get-quote" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose + process */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-primary/20 blur-[160px] rounded-full -ml-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
              Why Choose <span className="text-primary">Vogue Technics</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Platform Specialists, Not Generalists",
                text: "Every technician in our workshop has hands-on experience with the specific platforms we cover. That means the person replacing your turbo has done it before   on the same engine, with the same fault pattern   and knows exactly what to look for.",
              },
              {
                title: "Oil System Inspection on Every Job",
                text: "We inspect oil feed lines, return lines, and engine oil condition before every turbo is fitted. This step prevents premature failure and is standard practice on every replacement we carry out.",
              },
              {
                title: "OEM and OEM-Specification Parts",
                text: "No budget turbos on prestige vehicles. Every replacement uses OEM or OEM-specification remanufactured units   the same quality standard your vehicle was built to.",
              },
              {
                title: "Written Quotes, No Surprises",
                text: "The figure you agree is the figure you pay. Nothing is added without your explicit approval.",
              },
              {
                title: "Six-Month Warranty",
                text: "Every turbo replacement carries a minimum six-month warranty on parts and labour, confirmed in writing.",
              },
              {
                title: "UK-Wide Collection",
                text: "Based in    we collect and deliver across the UK on all turbo and engine work.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm">{item.title}</h3>
                    <p className="text-slate-300 font-medium text-sm line-clamp-3">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
                Our <span className="text-primary">Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1   Contact Us with your symptoms and vehicle details. Honest advice from the first call.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange UK-wide collection.",
                "Step 3   Diagnostic and Written Quote   full turbo and oil system inspection, followed by a clear itemised quote.",
                "Step 4   Turbo Replacement   carried out to OEM specification with quality parts throughout.",
                "Step 5   Post-Fit Check and Road Test   boost pressure verified, fault codes cleared, road tested before return.",
              ].map((text, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500">
                  <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-base mb-3 shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-200 font-medium text-sm line-clamp-3">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Start Your Turbo Replacement Enquiry Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers to the questions we hear most about turbo inspection and replacement."
        items={[
          {
            question: "How much does turbo replacement cost?",
            answer:
              "It varies by platform and unit specification. We provide a written quote after a proper diagnostic   contact us for a no-obligation estimate on your specific vehicle.",
          },
          {
            question: "Can a turbo be repaired rather than replaced?",
            answer:
              "In some cases yes   if damage is limited to the cartridge or bearing assembly. We assess every turbo individually and advise honestly on repair versus replacement.",
          },
          {
            question: "How long does turbo replacement take?",
            answer:
              "Single turbo replacements typically take one to two days. Twin turbo jobs take longer. We confirm timescales at the point of quoting.",
          },
          {
            question: "Do you offer a warranty?",
            answer:
              "Yes   minimum six-month warranty on all turbo replacement work, covering parts and labour.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight italic leading-tight">
            Ready to Sort <span className="text-slate-950">Your Turbo</span>?
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Do not wait until a failing turbo becomes an engine repair.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/get-quote"
              className="bg-slate-950 text-white font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs"
            >
              Request Quote
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs border-4 border-slate-950/10"
            >
              Call Us
            </a>
            <Link
              href="/services/engine-health-check"
              className="bg-white/20 text-white font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs border border-white/20"
            >
              Book Inspection
            </Link>
          </div>

          <div className="mt-8 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Turbo Replacement Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover •
            Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}


