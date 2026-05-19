"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, Wrench, Activity, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import ServiceGallery from "@/components/common/ServiceGallery";
import PartnerLogos from "@/components/common/PartnerLogos";
import NationwideSupportSection from "@/components/common/NationwideSupportSection";

export default function EngineRepairPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Specialist engine repair"
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
              { name: "Engine Repair", href: "/services/engine-repair" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight italic"
            >
              Specialist Engine Repair{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
              <RegSearch />
            </div>


            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
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
                Book a Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <ServiceGallery
        title="Engine Repair Work"
        subtitle="A look at some of the engine repair jobs carried out at our workshop."
        images={[
          { src: "/engine_repair/engine_repair%201.png", alt: "Engine repair 1" },
          { src: "/engine_repair/engine_repair%202.png", alt: "Engine repair 2" },
          { src: "/engine_repair/engine_repair%203.png", alt: "Engine repair 3" },
          { src: "/engine_repair/engine_repair%204.png", alt: "Engine repair 4" },
        ]}
      />

      {/* Common problems */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Common Engine Problems <span className="text-primary">We Resolve</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              If your engine is showing any of the following, it needs specialist attention   not a wait-and-see approach.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-10 shadow-sm">
            <p className="text-slate-600 leading-relaxed font-medium text-sm">
              Warning lights with oil pressure or boost fault codes, engine misfires, oil leaks, overheating, timing chain noise, white smoke from head gasket failure, and engine seizure — these are faults we diagnose and repair every week across the most technically demanding prestige platforms.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-sm mt-4">
              The longer any of these are left, the more expensive the repair becomes. A specialist diagnostic is always the most cost-effective first step.
            </p>
            <div className="pt-8">
              <Link
                href="/services/engine-health-check"
                className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase"
              >
                Book a Same-Day Engine Diagnostic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationwideSupportSection />

      {/* Services list */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Our <span className="text-primary">Engine Repair</span> Services
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                We cover the full range of engine repair work   from targeted oil leak fixes to full engine overhauls   all carried
                out to OEM specification with parts and labour backed by our standard warranty.
              </p>
              <p>
                Engine Repair   targeted fault diagnosis and repair covering all engine systems. Engine Rebuild   full strip,
                inspect, and rebuild to OEM specification for engines with significant internal wear. Engine Replacement   supply
                and fit of tested reconditioned or low-mileage units where repair is uneconomical. Engine Overhaul   comprehensive
                mechanical restoration where multiple systems require attention together. Engine Reconditioning   component-level
                restoration and reassembly to manufacturer specification. Major Engine Repair   cylinder head work, bottom-end
                repairs, and complex multi-system faults.
              </p>
              <p>Every job begins with an accurate diagnostic. Every quote is written and agreed before work starts.</p>
              <div className="pt-2">
                <Link href="/services" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                  Explore All Engine Repair Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Core standards</p>
              <div className="space-y-4">
                {[
                  "Written quote agreed before work starts",
                  "OEM / OEM-specification parts",
                  "Six-month warranty on every repair",
                  "Platform specialists across five brands",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary p-2 rounded-xl">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-slate-700 font-semibold text-sm">{t}</span>
                  </div>
                ))}
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
              Engine Repair <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Range Rover Engine Repair",
                text: [
                  "Range Rover engine repair requires platform-specific knowledge that a general garage simply does not carry. We work across the full Range Rover range   Vogue, Sport, Velar, and Evoque   covering TDV6, SDV6, TDV8, SDV8, and Ingenium 2.0 diesel and petrol engines.",
                  "Common faults we resolve include TDV6 oil contamination from EGR cooler failure, SDV6 overheating linked to water pump deterioration, Evoque engine misfires and oil leaks, and Range Rover Sport engine seized situations where repair versus replacement needs honest assessment.",
                  "Range Rover engine repair cost varies by platform and fault severity. We always provide a clear written quote following a full diagnostic   at a price that reflects independent specialist expertise, not main dealer margins.",
                ],
                href: "/range-rover-engines",
                cta: "Explore Range Rover Engine Repair",
              },
              {
                title: "Land Rover Engine Repair",
                text: [
                  "From the Freelander and Discovery 3 through to the Discovery Sport and current Defender, Land Rover engines develop specific fault patterns that experienced specialists recognise immediately. We carry out Land Rover engine repairs across the full model range, including Land Rover Discovery engine repair, Defender engine work, and Freelander fault resolution.",
                  "Discovery engine repair cost depends entirely on the fault   a cooling system repair on a Discovery 4 TDV6 is a very different job to a cylinder head rebuild on a Discovery 3 2.7 diesel. We assess every vehicle honestly and advise on the most cost-effective outcome rather than the most expensive one.",
                  "As Jaguar and Land Rover specialist engine repair providers, we cover both brands with the same depth of platform knowledge and the same standard of workmanship.",
                ],
                href: "/land-rover-engines",
                cta: "Explore Land Rover Engine Repair",
              },
              {
                title: "Jaguar Engine Repair",
                text: [
                  "Jaguar and Land Rover share engineering architecture, which means our expertise transfers directly across the full Jaguar range. We carry out Jaguar engine repair across the XE, XF, XJ, F-Pace, E-Pace, X-Type, and S-Type   covering 2.0 Ingenium diesel and petrol, 2.7 V6 diesel, 3.0 V6, and V8 platforms.",
                  "Common Jaguar engine faults we resolve include XF 2.7 TDV6 oil cooler and head gasket failure, XE Ingenium oil leaks and cooling faults, and F-Pace engine misfires linked to EGR and turbo-related contamination.",
                  "Jaguar engine repair near me is a search we see constantly   and for customers across , London, and beyond, we offer same-day diagnostics and UK-wide collection for those further afield.",
                ],
                href: "/jaguar-engines",
                cta: "Explore Jaguar Engine Repair",
              },
              {
                title: "Audi Engine Repair",
                text: [
                  "Audi engines are refined and capable   but they carry known fault patterns that require a specialist approach. We carry out Audi engine repair across the A3, A4, A5, A6, Q5, Q7, S4, and RS range, covering TDI diesel and TFSI petrol platforms.",
                  "Audi engine faults we diagnose and resolve regularly include 2.0 TFSI oil consumption and piston ring wear, 2.0 TDI timing chain faults, Audi A6 engine repair for cooling system and EGR-related failures, Audi engine oil leak repair from cam covers and oil cooler gaskets, and Audi engine misfire diagnosis covering injector and compression-related faults.",
                  "Audi engine seized repair is a situation we assess carefully   in some cases a targeted repair is viable, in others a rebuild or replacement is the honest recommendation. Audi engine rebuild cost is always provided in a written quote following a proper diagnostic inspection.",
                ],
                href: "/audi-engines",
                cta: "Explore Audi Engine Repair",
              },
              {
                title: "BMW Engine Repair",
                text: [
                  "BMW engines demand specialist knowledge when they develop faults   and a generic code reader at a general garage is rarely enough to get to the actual cause. We carry out BMW engine repair across the 1, 2, 3, 4, 5, and 7 Series, X3, X5, and X6, covering N47, B47, N57, N54, N55, N20, and B58 platforms.",
                  "BMW engine faults we resolve include BMW N54 engine repair for misfire, injector, and boost-related faults, BMW engine oil leak repair from valve covers, oil filter housings and rear main seals, BMW engine misfire diagnosis across petrol and diesel platforms, BMW 3 Series engine repair covering the full range of N and B-series units, and BMW engine seized repair assessment where oil starvation has caused internal damage.",
                  "BMW engine diagnostics at Vogue Technics go beyond fault codes   we carry out a full mechanical assessment alongside the electronic diagnostic to find the actual cause, not just the reported symptom. BMW engine rebuild cost is quoted in full before any work begins.",
                ],
                href: "/bmw-engines",
                cta: "Explore BMW Engine Repair",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm line-clamp-4">{item.text[0]}</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    {item.cta} <ArrowRight className="w-4 h-4" />
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
              Why Choose <span className="text-primary">Vogue Technics</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Specialists, Not Generalists", text: "Every technician works exclusively on prestige and performance vehicles. Platform-specific experience is the difference between a repair that holds and one that returns." },
              { icon: <Gauge className="w-5 h-5" />, title: "Accurate Diagnostics First", text: "We never quote based on symptoms alone. A proper diagnostic, mechanical and electronic, underpins every job." },
              { icon: <Wrench className="w-5 h-5" />, title: "OEM and OEM-Specification Parts", text: "No budget alternatives, no pattern parts. Every repair is carried out to the standard your vehicle was built to." },
              { icon: <Activity className="w-5 h-5" />, title: "Written Quotes, No Surprises", text: "The figure you agree is the figure you pay. Nothing is added without your approval." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty", text: "All engine repair work is backed by a minimum six-month warranty on parts and labour." },
              { icon: <Wrench className="w-5 h-5" />, title: "UK-Wide Collection", text: "Based in , we collect and deliver across the UK on all major engine work." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">{item.icon}</div>
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
                "Step 1   Contact Us with your vehicle details and symptoms. We respond promptly with honest initial advice.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange UK-wide collection.",
                "Step 3   Full Diagnostic and Written Quote   mechanical and electronic assessment, followed by a clear itemised quote.",
                "Step 4   Repair to OEM Specification   carried out by specialists using quality parts, with updates throughout.",
                "Step 5   Quality Check and Return   full post-repair inspection and road test before handover.",
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
                Start Your Engine Repair Enquiry Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers to common questions about specialist engine repairs."
        items={[
          {
            question: "How much does engine repair cost?",
            answer:
              "It depends entirely on the fault and the platform. A gasket repair and a cylinder head rebuild are very different jobs. We always quote after a proper diagnostic   contact us for a no-obligation estimate.",
          },
          {
            question: "Repair, rebuild, or replace   which is right?",
            answer:
              "We assess every engine honestly and recommend the most cost-effective outcome for your vehicle. We will never push a replacement if a repair will resolve the problem properly.",
          },
          {
            question: "Do you offer a warranty on engine repairs?",
            answer:
              "Yes   a minimum six-month warranty on all parts and labour, confirmed in writing at handover.",
          },
          {
            question: "Can you collect my vehicle?",
            answer:
              "Yes. UK-wide collection and delivery is available on all engine repair work from our  base.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight italic leading-tight">
            Let&apos;s Get Your <span className="text-slate-950">Engine Sorted</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Whatever your vehicle, whatever the fault   do not leave it and do not settle for a garage that does not specialise in
            your platform.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
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
            Vogue Technics | Engine Repair Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover • Jaguar
            • Audi • BMW
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}


