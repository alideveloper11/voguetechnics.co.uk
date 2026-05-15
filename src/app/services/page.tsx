"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Search, Phone, Wrench, Award, Car, Gauge, Activity, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import ServicesSection from "@/components/common/ServicesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import PartnerLogos from "@/components/common/PartnerLogos";

const allEngineModels = [
  // Range Rover
  { title: "Range Rover Evoque", link: "/range-rover-evoque-engines", brand: "Range Rover" },
  { title: "Range Rover Sport", link: "/range-rover-sport-engines", brand: "Range Rover" },
  { title: "Range Rover Velar", link: "/range-rover-velar-engines", brand: "Range Rover" },
  { title: "Range Rover Vogue", link: "/range-rover-vogue-new-engines", brand: "Range Rover" },
  // Land Rover
  { title: "Land Rover Defender", link: "/land-rover-defender-engines", brand: "Land Rover" },
  { title: "Land Rover Discovery", link: "/land-rover-discovery-5-engines", brand: "Land Rover" },
  { title: "Land Rover Discovery Sport", link: "/land-rover-discovery-sport-engines", brand: "Land Rover" },
  { title: "Land Rover Freelander 2", link: "/land-rover-freelander-2-engines", brand: "Land Rover" },
  // Audi
  { title: "Audi A1", link: "/audi-a1-engines", brand: "Audi" },
  { title: "Audi A3", link: "/audi-a3-engines", brand: "Audi" },
  { title: "Audi A4", link: "/audi-a4-engines", brand: "Audi" },
  { title: "Audi A5", link: "/audi-a5-engines", brand: "Audi" },
  { title: "Audi A6", link: "/audi-a6-engines", brand: "Audi" },
  { title: "Audi Q3", link: "/audi-q3-engines", brand: "Audi" },
  { title: "Audi Q5", link: "/audi-q5-engines", brand: "Audi" },
  { title: "Audi Q7", link: "/audi-q7-engines", brand: "Audi" },
  // BMW
  { title: "BMW 1 Series", link: "/bmw-1-series-engines", brand: "BMW" },
  { title: "BMW 2 Series", link: "/bmw-2-series-engines", brand: "BMW" },
  { title: "BMW 3 Series", link: "/bmw-3-series-engines", brand: "BMW" },
  { title: "BMW 4 Series", link: "/bmw-4-series-engines", brand: "BMW" },
  { title: "BMW 5 Series", link: "/bmw-5-series-engines", brand: "BMW" },
  { title: "BMW X1", link: "/bmw-x1-engines", brand: "BMW" },
  { title: "BMW X3", link: "/bmw-x3-engines", brand: "BMW" },
  { title: "BMW X5", link: "/bmw-x5-engines", brand: "BMW" },
  // Jaguar
  { title: "Jaguar E-Pace", link: "/jaguar-e-pace-engines", brand: "Jaguar" },
  { title: "Jaguar F-Pace", link: "/jaguar-f-pace-engines", brand: "Jaguar" },
  { title: "Jaguar XE", link: "/jaguar-xe-engines", brand: "Jaguar" },
  { title: "Jaguar XF", link: "/jaguar-xf-engines", brand: "Jaguar" },
  { title: "Jaguar XJ", link: "/jaguar-xj-engines", brand: "Jaguar" },
];

export default function ServicesPage() {
  const [activeBrand, setActiveBrand] = useState("All");
  const brands = ["All", "Range Rover", "Land Rover", "Audi", "BMW", "Jaguar"];

  const filteredModels = activeBrand === "All" 
    ? allEngineModels 
    : allEngineModels.filter(m => m.brand === activeBrand);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/car_bgg.jpg"
            alt="Vogue Technics Workshop"
            fill
            className="object-cover filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-bold tracking-widest text-xs mb-8 border border-primary/30 shadow-lg uppercase"
            >
              Elite Engine Solutions
            </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-tight uppercase italic"
          >
            Engine Specialists <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500">
              for Range Rover, Land Rover, Jaguar, Audi &amp; BMW
            </span>
          </motion.h1>
          <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
             <RegSearch />
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="pt-16 pb-0 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">Our <span className="text-primary">Engine Services</span></h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <ServicesSection showTitle={false} sectionClassName="pt-6 pb-16 bg-white relative overflow-hidden" />
      </section>

      {/* Engine Services by Vehicle */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine <span className="text-primary">Services</span> by Vehicle
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight italic mb-2">Range Rover</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-4">
                Specialist engine repair, rebuild, and replacement across the full Range Rover range — Vogue, Sport, Velar, and Evoque. TDV6, SDV6, TDV8, Ingenium 2.0, and 5.0 V8 platforms covered. Common faults include TDV6 oil contamination, Evoque timing chain wear, and Sport head gasket failure.
              </p>
              <div className="pt-4 mt-auto">
                <Link href="/range-rover-engines" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:gap-3 transition-all">
                  Explore Range Rover Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight italic mb-2">Land Rover</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-4">
                Full Land Rover coverage from Freelander and Discovery 3 through to Discovery Sport and Defender. Head gasket failure, timing components, engine reconditioning, and Ingenium timing chain work are all within our regular workload.
              </p>
              <div className="pt-4 mt-auto">
                <Link href="/land-rover-engines" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:gap-3 transition-all">
                  Explore Land Rover Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight italic mb-2">Jaguar</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-4">
                Shared JLR architecture means our expertise covers the full Jaguar range — XE, XF, XJ, F-Pace, E-Pace. Ingenium diesel and petrol, 2.7 V6, 3.0 V6, and V8 platforms. XF turbo faults, S-Type head gasket, and XE timing chain are among the most frequent jobs.
              </p>
              <div className="pt-4 mt-auto">
                <Link href="/jaguar-engines" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:gap-3 transition-all">
                  Explore Jaguar Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight italic mb-2">Audi</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-4">
                TDI diesel and TFSI petrol platforms across A3, A4, A5, A6, Q5, Q7, S4, and RS range. 2.0 TFSI rebuild, 2.0 TDI timing chain, A6 head gasket, and turbo replacement all covered. Every job quoted after a proper diagnostic.
              </p>
              <div className="pt-4 mt-auto">
                <Link href="/audi-engines" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:gap-3 transition-all">
                  Explore Audi Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-1">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight italic mb-2">BMW</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-4">
                Engine repair, rebuild, replacement, and turbo work across 1–7 Series, X3, X5, and X6. N47, N57, N54, N55, N20, and B58 platforms. N47 timing chain failure, N54 turbo diagnosis, and full M-series rebuilds all within our regular workload.
              </p>
              <div className="pt-4 mt-auto">
                <Link href="/bmw-engines" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:gap-3 transition-all">
                  Explore BMW Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ENGINE MODELS MESH GRID */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight leading-tight italic">Choose Your <span className="text-primary">Engine Model</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">We provide specialist services for over 50 specific high-performance models</p>
              
              {/* Brand Filter */}
              <div className="flex flex-wrap justify-center gap-3 pt-6">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeBrand === brand ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
             {filteredModels.map((model, idx) => (
               <motion.div
                 key={model.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.01 }}
               >
                 <Link href={model.link} className="group flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-primary hover:shadow-xl transition-all h-full">
                    <div className="flex flex-col">
                       <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-1">{model.brand}</span>
                       <span className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">{model.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                 </Link>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Common problems & meaning */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/15 blur-[160px] rounded-full -mr-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Common Engine Problems <span className="text-primary">  And What They Mean</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Engine Knocking or Rattling</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    A knock on start-up that fades, or a rattle that persists under load, points to timing chain wear, low oil pressure, or bearing deterioration. Neither should be monitored   both need investigation.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href="/services/engine-health-check" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                      Explore engine diagnostics <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/services/timing-chain-replacement" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                      Timing chain replacement <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Engine Overheating</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Overheating that returns after a cooling system repair, or coolant loss without a visible external leak, frequently indicates a head gasket that is beginning to fail. Early investigation is always less expensive than the repair that follows delayed action.
                  </p>
                  <div className="pt-2">
                    <Link href="/services/head-gasket-replacement" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                      Explore head gasket repair <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Oil Leaks</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Oil leaks range from minor gasket seepage to significant internal seal failure   and the source is not always where the puddle is. We carry out accurate oil leak diagnosis as part of our engine repair service across all five brands.
                  </p>
                  <div className="pt-2">
                    <Link href="/services/engine-repair" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                      Explore engine repair <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic">Loss of Power</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    A gradual or sudden loss of power under acceleration   particularly accompanied by smoke or a boost-related fault code   almost always points to turbo wear or failure.
                  </p>
                  <div className="pt-2">
                    <Link href="/services/turbo-replacement" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                      Explore turbo replacement <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              How It Works <span className="text-primary">— From First Contact to Back on the Road</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                title: "Get in Touch",
                text: "Call us or send your vehicle details and symptoms. We respond promptly with honest initial advice.",
              },
              {
                title: "Drop Off or Collection",
                text: "Bring your vehicle to our workshop or arrange UK-wide collection.",
              },
              {
                title: "Diagnostic & Written Quote",
                text: "Comprehensive assessment followed by a detailed written quote. Nothing proceeds until you confirm.",
              },
              {
                title: "Specialist Repair or Rebuild",
                text: "Work carried out to OEM specification using quality parts. You are kept informed throughout.",
              },
              {
                title: "Quality Check & Road Test",
                text: "Every vehicle goes through a post-repair inspection and road test before return.",
              },
              {
                title: "Handover with Warranty",
                text: "Your vehicle is returned fully tested with all warranty paperwork confirmed in writing.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[1.25rem] p-4 hover:bg-white hover:shadow-lg transition-all duration-500">
                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-black text-sm mb-3 shadow-md flex-shrink-0">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-tight italic mb-1.5 line-clamp-1">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-primary/20 blur-[160px] rounded-full -ml-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight italic">
              Why Choose <span className="text-primary">Vogue Technics</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                title: "Specialists, Not Generalists",
                text: "Exclusively Range Rover, Land Rover, Jaguar, Audi, and BMW — deep platform knowledge on every job.",
              },
              {
                title: "OEM-Specification Parts",
                text: "No budget alternatives. Every job uses components built to the standard your vehicle was manufactured to.",
              },
              {
                title: "Six-Month Warranty",
                text: "Every rebuild, replacement, turbo, head gasket, and timing chain job carries a minimum six-month warranty.",
              },
              {
                title: "Written Quotes — No Surprises",
                text: "The figure you agree is the figure you pay. No additions without your approval.",
              },
              {
                title: "Honest Advice",
                text: "We recommend the most cost-effective solution — no upselling towards options you don't need.",
              },
              {
                title: "UK-Wide Collection & Delivery",
                text: "Based in , we collect and deliver nationwide on all major engine work.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[1.25rem] p-4 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 text-primary p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm line-clamp-1">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-xs line-clamp-3 min-h-[3.75rem]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing guidance */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Repair Cost <span className="text-primary">  What You Need to Know</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                Engine repair cost is one of the most searched questions in this space   and one of the most difficult to answer honestly without first understanding what the engine actually needs.
              </p>
              <p>
                A targeted engine repair addressing a specific fault sits at a very different price point to a full engine rebuild or replacement. Turbo replacement cost varies by platform and unit specification. Head gasket repair cost depends on the extent of cylinder head damage found during inspection. Timing chain replacement cost changes depending on whether tensioners, guides, and associated components require renewal alongside the chain.
              </p>
              <p>
                What we can tell you is that our pricing reflects independent specialist expertise   significantly below main dealer rates for the same quality of work and the same quality of parts. We will always provide a detailed written quote following a proper diagnostic, so the figure you receive is based on what your engine actually needs   not a generalised estimate that shifts when the work begins.
              </p>
              <p className="font-semibold text-slate-800">
                The cost of a proper repair carried out once is always less than the cost of an inadequate repair carried out twice   with additional damage in between.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Request a written quote</p>
              <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-tight mb-4">
                Request a Written Quote <span className="text-primary">  No Obligation</span>
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Send your registration and symptoms and we’ll come back with honest initial advice and the right next step.
              </p>
              <div className="space-y-4">
                <Link href="/contact-us" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-sm">
                  Request a Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:01375531355" className="w-full inline-flex items-center justify-center gap-3 bg-white/10 border border-white/10 text-white font-black px-8 py-5 rounded-2xl hover:bg-white/15 transition-all uppercase tracking-widest text-sm">
                  Call 01375 531355
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA + tagline */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight italic leading-tight">
            Get the Right <span className="text-slate-950">Engine Service</span> for Your Vehicle
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Whatever your vehicle, whatever the fault   do not leave it to a garage that does not specialise in your platform, and do not accept a quote that was not based on a proper diagnostic. At Vogue Technics, we are based in  and offer UK-wide collection on all engine work.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link href="/contact-us" className="bg-slate-950 text-white font-black px-7 py-3 rounded-xl shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-sm md:text-base flex items-center gap-4">
              Request a Free Engine Services Quote <ArrowRight className="w-6 h-6 text-primary" />
            </Link>
            <a href="tel:01375531355" className="bg-white text-slate-950 font-black px-7 py-3 rounded-xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-sm md:text-base border-4 border-slate-950/10">
              Call Us and Speak to a Specialist Today
            </a>
            <Link href="/services/engine-health-check" className="bg-white/20 text-white font-black px-7 py-3 rounded-xl shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-sm md:text-base border border-white/20">
              Book an Engine Inspection at Our  Workshop
            </Link>
          </div>

          <div className="mt-8 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Engine Specialists |  | UK-Wide Collection Available &nbsp; Range Rover • Land Rover • Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <ReviewsSection 
        title="What Our Customers Say" 
        subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." 
      />

      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers to the questions we hear most about diagnostics, repairs, rebuilds and replacements."
        items={[
          {
            question: "How much does engine repair cost for a Range Rover or Land Rover?",
            answer:
              "Engine repair cost varies depending on the fault, the platform, and the parts required. A targeted repair sits at a very different price point to a full rebuild or replacement. We always provide a detailed written quote following a proper diagnostic   contact us for a no-obligation estimate on your specific vehicle.",
          },
          {
            question: "Is it worth repairing a blown head gasket or should I replace the engine?",
            answer:
              "In most cases, a properly executed head gasket repair is absolutely worth doing   provided the cylinder head has not suffered serious warping and the engine has not sustained secondary damage from prolonged overheating. We assess every situation honestly before making a recommendation.",
          },
          {
            question: "How do I know if my timing chain needs replacing?",
            answer:
              "A metallic rattle on cold start that fades as the engine warms is the clearest sign. Timing-related fault codes and rough running are also common indicators. Book an inspection if you are unsure   catching it early is always less expensive.",
          },
          {
            question: "Do you offer a warranty on engine work?",
            answer:
              "Yes. Every major engine repair, rebuild, replacement, turbo replacement, and head gasket job carries a minimum six-month warranty on both parts and labour, confirmed in writing at handover.",
          },
          {
            question: "Can you collect my vehicle if I am not near ?",
            answer:
              "Yes. We offer UK-wide collection and delivery on all engine work   so accessing a genuine specialist is never limited by your location.",
          },
          {
            question: "How long does an engine rebuild or replacement take?",
            answer:
              "Timescales vary by platform and the extent of work required. We provide an honest timeframe at the point of quoting and keep you updated throughout the process.",
          },
          {
            question: "Do you work on both diesel and petrol engines?",
            answer:
              "Yes   we carry out engine work across both diesel and petrol platforms for all five brands we cover: Range Rover, Land Rover, Jaguar, Audi, and BMW.",
          },
        ]}
      />

      <PartnerLogos />
    </main>
  );
}

