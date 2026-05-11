"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Gauge, ShieldCheck, Settings, RefreshCw } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

export default function EngineRebuildPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Engine rebuild specialists"
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
              { name: "Engine Rebuild", href: "/services/engine-rebuild" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight italic"
            >
              Engine Rebuild Specialists{" "}
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
                When an engine has reached the point where a repair is no longer the right answer, the conversation turns to two
                options   rebuild or replace. Both have their place, and the right choice depends on your specific engine, its
                condition, and what you want from the vehicle long term.
              </p>
              <p>
                At Vogue Technics, we carry out full engine rebuilds and engine reconditioning for Range Rover, Land Rover, Jaguar,
                Audi, and BMW. Every rebuild is carried out to OEM specification using quality parts throughout, every job is backed
                by a minimum six-month warranty, and every written quote is agreed before a single component is removed. Based in
                , with UK-wide collection available.
              </p>
              <p>
                If you have been told your engine needs rebuilding   or if you are weighing up whether a rebuild or replacement
                makes more sense   this page will give you the honest information you need to make the right decision.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="bg-primary text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get a Free Engine Rebuild Quote <ArrowRight className="w-5 h-5" />
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

      {/* Rebuild or replace */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Rebuild or Replace <span className="text-primary">  Which Is Right for You?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                This is the question most owners face when an engine fault moves beyond straightforward repair territory, and it
                deserves an honest answer rather than a recommendation shaped by whichever option generates more revenue.
              </p>
              <p>
                A full engine rebuild is often the smarter long-term choice. When your original engine is stripped, inspected, and
                rebuilt to OEM specification by a specialist who knows the platform, you end up with a unit of known history   every
                wear item replaced, every clearance checked, every seal and gasket renewed. The result is an engine that performs as
                it should and carries a warranty to match.
              </p>
              <p>
                Engine replacement makes more sense in cases where the original engine has suffered damage that makes rebuild
                uneconomical, or where a quality replacement unit is available at a cost that compares favourably to the rebuild
                work required. We source quality reconditioned and low-mileage engines for all five brands we cover, and we will
                always advise you honestly on which route represents better value.
              </p>
              <p>
                What we will never do is push you towards the more expensive option without a clear reason. You receive an honest
                assessment, a written quote for both routes where applicable, and the decision is yours.
              </p>
              <div className="pt-2">
                <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                  Speak to a Specialist About Your Engine Options <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Quick guide</p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary p-2 rounded-xl">
                    <Settings className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-black uppercase tracking-tight text-sm">Rebuild</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Best when you want known history and long-term value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary p-2 rounded-xl">
                    <RefreshCw className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-black uppercase tracking-tight text-sm">Replace</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Best when internal damage makes rebuild uneconomical.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
                >
                  Request a Written Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              What Our Engine Rebuild <span className="text-primary">Service Covers</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Complete engine strip and disassembly",
              "Full inspection of all internal components",
              "Replacement of wear items (rings, bearings, seals, gaskets, timing components)",
              "Cylinder head skim and pressure test where required",
              "Block measurement and machining assessment",
              "Full reassembly to OEM specification with correct torque settings throughout",
              "Oil system flush and fill with correct specification oil",
              "Comprehensive post-rebuild run-in and testing procedure",
              "Minimum six-month warranty covering parts and workmanship",
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

          <div className="flex justify-center mt-12">
            <Link href="/contact-us" className="inline-flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm">
              Request a Written Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* By vehicle (condensed but faithful) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Rebuild <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Range Rover Engine Rebuild",
                body:
                  "Range Rover engine rebuilds sit at the premium end of the specialist rebuild market. We rebuild across Vogue, Sport, Velar, and Evoque   covering TDV6, SDV6, TDV8, SDV8, Ingenium 2.0, and the 5.0 supercharged V8. We also quote replacement options alongside rebuild where applicable, sourcing quality reconditioned engines and fitting every unit to OEM specification with full warranty cover. UK-wide collection is available.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Engine Rebuild",
                body:
                  "Land Rover rebuilds cover everything from classic Defender 300 TDI restoration to Discovery 4 TDV6 internal damage following cooling failure. We rebuild across Defender, Discovery 3/4/5, Discovery Sport, and Freelander. We quote rebuild vs replacement honestly and provide written quotes for both routes where applicable. UK-wide collection available.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Engine Rebuild",
                body:
                  "Jaguar rebuilds benefit directly from our JLR expertise. We rebuild across XE, XF, XJ, F-Pace, and E-Pace, covering Ingenium, V6 diesel, V6 petrol and V8 platforms. Rebuild cost is provided following proper assessment, with replacement options quoted when a sourced unit offers better value. UK-wide collection available.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi Engine Rebuild",
                body:
                  "Audi rebuilds require platform-specific tolerance knowledge. We rebuild and recondition across A3/A4/A5/A6/Q5/Q7/S4/RS, including frequent 2.0 TFSI oil-consumption rebuilds. Every rebuild is tested before refitting and backed by six-month warranty as standard.",
                href: "/audi-engines",
              },
              {
                title: "BMW Engine Rebuild",
                body:
                  "BMW rebuilds are among the most technically demanding jobs we carry out   including N54/N57/N47/N55/N20/B58 platforms across 1/2/3/4/5/7 Series and X models. We advise honestly on rebuild vs reconditioning vs replacement options and quote in full following assessment. UK-wide collection available.",
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-6">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{item.body}</p>
                <div className="pt-8 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Engine Rebuild <ArrowRight className="w-4 h-4" />
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
              Why Choose <span className="text-primary">Vogue Technics</span> for Your Engine Rebuild
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Gauge className="w-5 h-5" />, title: "Full Strip and Inspect Before Quoting", text: "We never provide an engine rebuild quote based on symptoms alone. A proper quote requires internal assessment." },
              { icon: <Wrench className="w-5 h-5" />, title: "OEM and OEM-Specification Parts Throughout", text: "Quality pistons, rings, bearings, gaskets, seals and timing components built to OEM specification. No shortcuts." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Platform-Specific Expertise", text: "Each brand has specific tolerances and known wear patterns. Our technicians rebuild engines they know in depth." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty on Every Rebuild", text: "Every rebuild carries a minimum six-month warranty covering parts and workmanship, confirmed in writing." },
              { icon: <RefreshCw className="w-5 h-5" />, title: "Honest Rebuild vs Replace Advice", text: "If replacement represents better value than rebuild, we will say so   and source the right unit accordingly." },
              { icon: <Wrench className="w-5 h-5" />, title: "UK-Wide Collection and Delivery", text: "Based in    we collect and deliver across the UK on all rebuild and replacement work." },
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
                Our Engine Rebuild <span className="text-primary">Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1   Contact Us with your vehicle details, symptoms, and any existing diagnosis. We provide honest initial advice from the first conversation.",
                "Step 2   Drop Off or Collection   bring your vehicle to our  workshop or arrange UK-wide collection.",
                "Step 3   Strip and Inspect   the engine is fully stripped and every component assessed. You receive a written report and quote before any rebuild work begins.",
                "Step 4   Rebuild to OEM Specification   all worn components replaced, all clearances set correctly, full reassembly by platform specialists.",
                "Step 5   Testing and Quality Check   every rebuilt engine is run and tested before being refitted. Post-fit checks confirm correct operation before handover.",
                "Step 6   Return with Warranty Documentation   your vehicle is returned fully tested with all warranty paperwork confirmed in writing.",
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
        subtitle="Clear answers about rebuild costs, timescales, and collection."
        items={[
          {
            question: "How much does an engine rebuild cost?",
            answer:
              "Engine rebuild cost varies significantly by platform and internal condition. We always quote after a proper strip and inspect   contact us for an initial assessment on your specific vehicle.",
          },
          {
            question: "Is an engine rebuild better than replacement?",
            answer:
              "It depends on the engine and its condition. A quality rebuild offers known history; a quality replacement can be more cost-effective where internal damage is extensive. We advise honestly on both options.",
          },
          {
            question: "How long does an engine rebuild take?",
            answer:
              "Timescales vary by platform and the extent of work required. We provide an honest timeframe at the point of quoting and keep you updated throughout.",
          },
          {
            question: "Do you offer a warranty on engine rebuilds?",
            answer:
              "Yes   every engine rebuild carries a minimum six-month warranty on parts and labour, confirmed in writing at handover.",
          },
          {
            question: "Can you collect my vehicle for engine rebuild work?",
            answer:
              "Yes. UK-wide collection and delivery is available on all engine rebuild and reconditioning work from our  base.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic leading-tight">
            Ready to <span className="text-slate-950">Rebuild</span>?
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Get an honest assessment and a written quote, then choose the route that makes the most sense for your vehicle.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
              className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-4"
            >
              Request a Free Engine Rebuild Quote   No Obligation <ArrowRight className="w-6 h-6 text-primary" />
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
            Vogue Technics | Engine Rebuild Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover • Jaguar
            • Audi • BMW
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <PartnerLogos />
    </main>
  );
}

