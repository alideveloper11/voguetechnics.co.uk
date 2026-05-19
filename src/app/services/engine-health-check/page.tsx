"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, Wrench, Activity, FileText, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import ServiceGallery from "@/components/common/ServiceGallery";
import PartnerLogos from "@/components/common/PartnerLogos";
import NationwideSupportSection from "@/components/common/NationwideSupportSection";

export default function EngineHealthCheckPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Engine health check specialists"
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
              { name: "Engine Health Check", href: "/services/engine-health-check" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight italic"
            >
              Engine Health Check Specialists{" "}
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
                href="/contact-us"
                className="bg-white/15 text-white font-black px-6 py-3 rounded-2xl shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Get a Written Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <ServiceGallery
        title="Engine Health Check Work"
        subtitle="A look at some of the engine health checks and diagnostics carried out at our workshop."
        images={[
          { src: "/engine_repair/engine_repair%201.png", alt: "Engine health check 1" },
          { src: "/engine_repair/engine_repair%202.png", alt: "Engine health check 2" },
          { src: "/engine_repair/engine_repair%203.png", alt: "Engine health check 3" },
          { src: "/engine_repair/engine_repair%204.png", alt: "Engine health check 4" },
        ]}
      />

      {/* What it covers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              What Our Engine Health Check <span className="text-primary">Covers</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              This is not a basic OBD2 scan from a generic code reader. Our engine health check is a comprehensive assessment
              covering both the electronic systems and the mechanical condition of your engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Gauge className="w-6 h-6" />, title: "Full diagnostic scanning", text: "OBD2 diagnostic scanning and fault code reading across all engine-related systems." },
              { icon: <Activity className="w-6 h-6" />, title: "Warning light investigation", text: "Engine warning light investigation and root cause assessment." },
              { icon: <Wrench className="w-6 h-6" />, title: "Oil & cooling checks", text: "Oil condition and consumption check, plus cooling system inspection including thermostat, water pump, and coolant condition." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Turbo & timing assessment", text: "Turbo health inspection and timing chain or timing belt condition assessment." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Compression where appropriate", text: "Engine compression test where symptoms indicate internal wear." },
              { icon: <FileText className="w-6 h-6" />, title: "Written report", text: "A full written report detailing findings, fault codes, and recommended actions." },
            ].map((c) => (
              <div key={c.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6">{c.icon}</div>
                <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{c.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/contact-us" className="inline-flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm">
              Book Your Engine Health Check Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* When should you book */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              When Should You Book <span className="text-primary">an Engine Health Check?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 text-slate-600 leading-relaxed font-medium text-sm bg-white border border-slate-100 rounded-[3rem] p-8 md:p-10 shadow-sm">
            <p>
              A health check is essential when a warning light has appeared, when you're buying a used prestige vehicle and want confidence before committing, or when your engine has started consuming more oil, running roughly, or making noises that weren't there before.
            </p>
            <p>
              It's also the right step before a high-mileage service interval — giving you clarity on the engine's actual condition before work begins.
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                Speak to a Specialist About Your Engine Concern <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* By vehicle (condensed) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Health Check <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Range Rover Engine Health Check",
                body:
                  "The Range Rover's engine complexity makes a thorough health check more valuable than on almost any other vehicle. Hidden faults on TDV6, SDV6, TDV8, and Ingenium platforms can develop quietly and expensively   and a generic diagnostic tool will not reach the depth of data these systems hold. Our check covers full fault code reading across all JLR-specific diagnostic channels, oil leak checks, overheating history, timing chain assessment on Ingenium platforms, V8 health assessment, misfire investigation, and turbo inspection. You receive a written report covering everything found.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Engine Health Check",
                body:
                  "Land Rover engines across the Discovery, Defender, and Freelander range carry well-documented fault patterns that only show clearly under a proper specialist diagnostic. We cover Discovery scans, Defender checks, Freelander inspection including timing belt assessment where applicable, diesel health checks covering EGR/DPF/turbo, overheating checks, engine noise inspection, and compression testing where symptoms indicate internal wear. A specialist pre-purchase check can prevent expensive mistakes.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Engine Health Check",
                body:
                  "Jaguar's shared JLR engineering means our diagnostic capability covers the full Jaguar range with the same depth as Land Rover and Range Rover. We carry out health checks across the XE, XF, XJ, F-Pace, and E-Pace, covering Ingenium, V6 diesel, V6 petrol and V8 platforms. A written specialist report before purchase is worth considerably more than the cost of the check itself.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi Engine Health Check",
                body:
                  "Audi engines carry fault patterns that vary considerably between TDI diesel and TFSI petrol platforms   and understanding early signs requires diagnostic depth. Our checks cover full diagnostics, oil consumption data, timing condition on affected platforms, turbo health and boost verification, compression testing where oil consumption or misfire symptoms are present, and cooling system condition.",
                href: "/audi-engines",
              },
              {
                title: "BMW Engine Health Check",
                body:
                  "BMW engine diagnostics require platform-specific knowledge beyond fault code reading. We scan and interpret patterns on N54/N52/B58 petrol and N47/N57 diesel platforms, investigate warning lights, cooling system condition, turbo health, compression where needed, and engine noise inspection for chain/bearing-related issues. A BMW pre-purchase engine check is one of the most valuable investments you can make.",
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm line-clamp-4">{item.body}</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Health Check <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Book Now <ArrowRight className="w-4 h-4" />
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
              Why Choose <span className="text-primary">Vogue Technics</span> for Your Engine Health Check
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Specialist Diagnostic Equipment", text: "We use professional JLR, BMW, and Audi-specific diagnostic tools that read beyond generic OBD2 level." },
              { title: "Written Report on Every Check", text: "You receive a clear written report covering findings, fault codes, and recommended actions." },
              { title: "Honest Findings, No Upselling", text: "If your engine is in good health, we tell you that. If a fault is developing, we explain it clearly." },
              { title: "Platform-Specific Knowledge", text: "Every technician carries out health checks on platforms they know in depth." },
              { title: "UK-Wide Collection Available", text: "Based in , we collect and deliver across the UK on health checks and follow-up work." },
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
                "Step 1   Book Your Check   call us or complete our online form with your vehicle details and any symptoms you have noticed.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange collection anywhere in the UK.",
                "Step 3   Full Engine Health Assessment   diagnostic scan, mechanical inspection, compression and cooling system checks carried out by a platform specialist.",
                "Step 4   Written Report   you receive a full written report covering all findings, fault codes, and clearly explained recommendations.",
                "Step 5   Next Steps on Your Terms   if a repair is needed, we quote separately. No pressure, no obligation.",
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
                Book Your Engine Health Check Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers about health checks, reporting, and next steps."
        items={[
          {
            question: "How long does an engine health check take?",
            answer:
              "A full engine health check typically takes two to three hours depending on the platform and any symptoms that require deeper investigation.",
          },
          {
            question: "Is this the same as a basic diagnostic scan?",
            answer:
              "No. Our health check goes considerably further than a fault code read   it includes mechanical inspection, compression testing where appropriate, cooling and turbo assessment, and a written report.",
          },
          {
            question: "What if a fault is found during the check?",
            answer:
              "We explain the finding clearly and provide a separate written quote for any repair recommended. There is no obligation to proceed with us, though most customers do.",
          },
          {
            question: "Do you carry out pre-purchase engine checks?",
            answer:
              "Yes   pre-purchase engine checks are one of our most requested services across all five vehicle brands we cover.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight italic leading-tight">
            Know Your Engine. <span className="text-slate-950">Book Today.</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Do not wait for a warning light to tell you something is wrong. An engine health check from Vogue Technics gives you the
            full picture   clearly, honestly, and in writing.
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
              href="/contact-us"
              className="bg-white/20 text-white font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs border border-white/20"
            >
              Book Inspection
            </Link>
          </div>

          <div className="mt-8 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Engine Health Check Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover •
            Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <NationwideSupportSection />
      <PartnerLogos />
    </main>
  );
}


