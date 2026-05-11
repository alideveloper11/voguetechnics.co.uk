"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Gauge, ShieldCheck, RefreshCw, FileText } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

export default function EngineReplacementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Engine replacement specialists"
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
              { name: "Engine Replacement", href: "/services/engine-replacement" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight italic"
            >
              Engine Replacement Specialists{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
              <RegSearch />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl mx-auto text-slate-300 leading-relaxed font-medium space-y-6 text-sm md:text-base"
            >
              <p>
                There comes a point with every engine fault where the repair conversation ends and the replacement conversation
                begins. It might be a seizure following oil starvation, catastrophic internal damage after a head gasket failure
                that ran too long, or simply an engine that has covered enough miles that rebuild is no longer the most economical
                route.
              </p>
              <p>
                At Vogue Technics, we supply and fit replacement engines for Range Rover, Land Rover, Jaguar, Audi, and BMW. We
                source used low-mileage engines, reconditioned units, and remanufactured engines depending on what suits your
                vehicle, your budget, and your long-term plans. Every replacement engine is fitted to OEM specification, every job
                carries a minimum six-month warranty, and every written quote is agreed before work begins. Based in ,
                with UK-wide collection available.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="bg-primary text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get a Free Engine Replacement Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="bg-white text-slate-950 font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Call Us Today
              </a>
              <Link
                href="/contact-us"
                className="bg-white/15 text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Book an Engine Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When replacement makes sense */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              When Is Engine Replacement <span className="text-primary">the Right Decision?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-12">
            <p>
              Not every engine problem requires replacement   but some do, and recognising when replacement is the correct
              recommendation rather than a convenient one is where genuine specialist integrity shows.
            </p>
            <p>
              Engine replacement makes sense when internal damage is extensive enough that rebuild cost exceeds the value a rebuilt
              engine would deliver. A seized engine following severe oil starvation, a block that has cracked due to overheating, or
              pistons and bores worn beyond the point where machining is economical   these are situations where sourcing a quality
              replacement unit is the more sensible financial decision.
            </p>
            <p>
              It also makes sense when a quality low-mileage or reconditioned unit is available at a cost that compares favourably
              to the rebuild work the existing engine requires. Where rebuild is still viable and cost-effective, we will tell you
              that clearly and quote for both.
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                Get an Honest Engine Assessment Before You Decide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What service covers */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              What Our Engine Replacement <span className="text-primary">Service Covers</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Honest advice on replacement vs rebuild for your vehicle",
              "Sourcing used low-mileage, reconditioned, and remanufactured engines",
              "Full inspection of the replacement unit before fitting",
              "Oil system flush and preparation before installation",
              "OEM-specification installation with correct torque and sealing",
              "Post-fit diagnostic scan and road test before return",
              "Minimum six-month warranty on every replacement",
              "UK-wide collection available",
            ].map((t) => (
              <div key={t} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary p-2 rounded-xl flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <p className="text-slate-700 font-semibold text-sm md:text-base leading-relaxed">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By vehicle (condensed) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Replacement <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Range Rover Engine Replacement",
                body:
                  "We carry out Range Rover engine replacement across Vogue, Sport, Velar, and Evoque, covering TDV6/SDV6/TDV8/SDV8/Ingenium 2.0 and the 5.0 supercharged V8. Cost varies by platform and unit type (used low-mileage, reconditioned, or remanufactured). We source units with known mileage and provenance where possible, inspect before fitting, and fit to OEM specification with warranty cover. UK-wide collection available.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Engine Replacement",
                body:
                  "We replace engines across Freelander, Discovery 3/4/5, Discovery Sport, and Defender. Discovery and Defender replacements vary significantly by platform and installation procedure, so we quote in writing after assessment. Warranty is provided on every job as part of our standard six-month cover, and UK-wide collection is available.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Engine Replacement",
                body:
                  "Jaguar replacements benefit from the same JLR sourcing and fitting expertise we apply to Land Rover and Range Rover. We replace engines across XE/XF/XJ/F-Pace/E-Pace covering Ingenium, V6 diesel, V6 petrol and V8. We provide second opinions on main dealer quotes and fit to OEM specification with warranty cover as standard.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi Engine Replacement",
                body:
                  "Audi replacement covers like-for-like swaps on failed 2.0 TDI units through to reconditioned 3.0 TDI V6 replacements on Q7/A6. We source used, reconditioned and low-mileage units depending on availability and budget, and we do not source and fit blind   units are inspected before recommendation.",
                href: "/audi-engines",
              },
              {
                title: "BMW Engine Replacement",
                body:
                  "BMW replacements require platform knowledge similar to rebuilds. We replace engines across 1/2/3/4/5/7 Series and X models covering N47/N57/N54/N55/N20/B58. We prepare the oil system, ensure compatibility across variants, and provide written quotes covering sourcing, fitting and associated work before anything proceeds. UK-wide collection available.",
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-6">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{item.body}</p>
                <div className="pt-8 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Engine Replacement <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
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
              Why Choose <span className="text-primary">Vogue Technics</span> for Engine Replacement
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Honest Sourcing   No Blind Units", text: "We assess provenance, mileage, and condition before recommending a replacement engine." },
              { icon: <Wrench className="w-5 h-5" />, title: "Oil System Preparation on Every Job", text: "We flush and prepare the oil system to prevent premature failure." },
              { icon: <Gauge className="w-5 h-5" />, title: "OEM-Specification Installation", text: "Correct torque settings, sealing, and ancillary connections throughout." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty", text: "Minimum six-month warranty on the unit and installation labour, confirmed in writing." },
              { icon: <FileText className="w-5 h-5" />, title: "Written Quotes, No Surprises", text: "No additions without approval, no work beyond what has been confirmed." },
              { icon: <RefreshCw className="w-5 h-5" />, title: "UK-Wide Collection and Delivery", text: "Based in    collection and delivery across the UK on all engine replacement work." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">{item.icon}</div>
                  <div className="space-y-3">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm md:text-base">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
                Our Engine Replacement <span className="text-primary">Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1   Contact Us with your vehicle details and the fault history. We provide honest advice on replacement versus rebuild.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange UK-wide collection.",
                "Step 3   Assessment and Written Quote   assess the failed engine, identify root cause, source unit options, provide a full written quote.",
                "Step 4   Unit Sourcing and Pre-Fit Inspection   the replacement unit is sourced and inspected before installation begins.",
                "Step 5   Engine Replacement to OEM Specification   installation with oil system preparation, correct torque and sealing throughout.",
                "Step 6   Post-Fit Diagnostic and Road Test   fault code scan, oil pressure verification, road test before handover.",
                "Step 7   Return with Full Warranty Documentation   vehicle returned fully tested with warranty paperwork confirmed in writing.",
              ].map((text, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers about unit types, pricing, and preparation."
        items={[
          {
            question: "How much does engine replacement cost?",
            answer:
              "Engine replacement cost varies by vehicle platform, engine specification, and unit type   used low-mileage, reconditioned, or remanufactured. We always provide a written quote following a proper assessment. Contact us for a no-obligation estimate.",
          },
          {
            question: "What is the difference between a used engine and a reconditioned engine?",
            answer:
              "A used engine is a removed unit of known mileage, tested and inspected before fitting. A reconditioned engine has been stripped, worn components replaced, and reassembled to specification. We advise on which option suits your vehicle’s age, mileage, and intended use.",
          },
          {
            question: "Do you provide a warranty on replacement engines?",
            answer:
              "Yes   every engine replacement carries a minimum six-month warranty on the unit and the installation labour, confirmed in writing at handover.",
          },
          {
            question: "Can you collect my vehicle for engine replacement work?",
            answer:
              "Yes. UK-wide collection and delivery is available from our  base on all engine replacement jobs.",
          },
          {
            question: "Do you address the root cause of the original engine failure?",
            answer:
              "Always. Fitting a replacement engine without understanding and resolving the original failure is a false economy. We identify the cause before recommending a replacement unit.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic leading-tight">
            Ready to <span className="text-slate-950">Move Forward</span>?
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Get an honest assessment, a written quote, and a replacement fitted correctly the first time.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
              className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-4"
            >
              Request a Free Engine Replacement Quote   No Obligation <ArrowRight className="w-6 h-6 text-primary" />
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
            >
              Call Us and Speak to a Specialist Today
            </a>
            <Link
              href="/contact-us"
              className="bg-white/20 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
            >
              Book an Engine Assessment at Our  Workshop
            </Link>
          </div>

          <div className="mt-16 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Engine Replacement Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover •
            Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <PartnerLogos />
    </main>
  );
}

