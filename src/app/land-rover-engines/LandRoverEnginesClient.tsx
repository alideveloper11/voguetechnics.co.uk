"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone, Clock, Wrench, Award, Star, Activity, ArrowRight, AlertTriangle, Settings } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import ReviewsSection from "@/components/common/ReviewsSection";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";

const landRoverModels = [
  { title: "Land Rover Defender Engines", link: "/land-rover-defender-engines" },
  { title: "Land Rover Discovery 3 Engines", link: "/land-rover-discovery-3-engines" },
  { title: "Land Rover Discovery 4 Engines", link: "/land-rover-discovery-4-engines" },
  { title: "Land Rover Discovery 5 Engines", link: "/land-rover-discovery-5-engines" },
  { title: "Land Rover Discovery Sport Engines", link: "/land-rover-discovery-sport-engines" },
  { title: "Land Rover Freelander 2 Engines", link: "/land-rover-freelander-2-engines" },
];

const landRoverEngineSizes = [
  { title: "Land Rover 2.0 Engines", link: "/land-rover-2-0-engines" },
  { title: "Land Rover 2.2 Engines", link: "/land-rover-2-2-engines" },
  { title: "Land Rover 2.7 Engines", link: "/land-rover-2-7-engines" },
  { title: "Land Rover 3.0 Engines", link: "/land-rover-3-0-engines" },
  { title: "Land Rover 4.0 Engines", link: "/land-rover-4-0-engines" },
  { title: "Land Rover 4.4 Engines", link: "/land-rover-4-4-engines" },
  { title: "Land Rover 5.0 Engines", link: "/land-rover-5-0-engines" },
];

const commonLandRoverProblems = [
  "Crankshaft Failure (3.0 SDV6/TDV6)",
  "Oil Pump Bolt Issues",
  "Turbocharger Failures",
  "EGR Valve Malfunctions",
  "Timing Chain Stretch",
  "Suspension Air Compressor Faults",
  "Coolant Leaks (Water Pump)",
  "DPF Blockage (Diesel)",
];

export default function LandRoverEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Land Rover Engine Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Land Rover Engines", href: "/land-rover-engines" }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
            Land Rover Specialist
          </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight uppercase">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500 italic">Land Rover</span> <br />
              Engine Rebuild Specialists
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vogue Technics delivers expert engine reconditioning and seamless replacements for all Land Rover models nationwide.
            </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-8 w-full">
            <RegSearch />
          </motion.div>
        </div>
      </div>
    </section>


      <ReviewsSection 
        title="What Our Customers Say" 
        subtitle="Hear from our satisfied customers who have experienced our professional Land Rover engine services." 
      />

      {/* EXPERIENCE SECTION */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-none tracking-tight uppercase underline decoration-4 underline-offset-[8px] decoration-primary/20">
                Over 2 Decades of <br/><span className="text-primary italic">Land Rover Expertise</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  With more than 20 years of dedicated experience, Vogue Technics has built a reputation as the UK’s leading specialist for Land Rover engine maintenance and rebuilds.
                </p>
                <p>
                  From the rugged Discovery 3 to the iconic Defender and the Discovery Sport, we have the state-of-the-art facility and specialized tools to handle the most complex internal engine failures.
                </p>
                <div className="font-bold text-slate-900 border-l-4 border-primary pl-5 py-4 bg-slate-50 rounded-r-[1.5rem] shadow-sm italic text-sm">
                   "Our team lives and breathes Land Rover engineering. We restore your vehicle to factory performance with absolute precision."
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <div className="bg-slate-900 rounded-[1.5rem] p-6 text-center text-white space-y-2 border-b-4 border-primary transform hover:scale-105 transition-transform duration-500 shadow-xl">
                <div className="text-3xl font-extrabold text-primary">20+</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-slate-400">Years Exp</div>
              </div>
              <div className="bg-primary rounded-[1.5rem] p-6 text-center text-white space-y-2 sm:mt-8 transform hover:scale-105 transition-transform duration-500 shadow-xl">
                <div className="text-3xl font-extrabold italic underline decoration-white/30">UK’s</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-emerald-100">Leader</div>
              </div>
              <div className="bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] p-6 text-center space-y-2 transform hover:scale-105 transition-transform duration-500 shadow-md">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">OEM</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-slate-500">Genuine Parts</div>
              </div>
              <div className="bg-slate-900 rounded-[1.5rem] p-6 text-center text-white space-y-2 sm:mt-8 border-b-4 border-primary transform hover:scale-105 transition-transform duration-500 shadow-xl">
                <div className="text-3xl font-extrabold text-primary">40%</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-slate-400">Off Deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
            <div className="w-full lg:w-2/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase leading-none">Superior Engine <span className="text-primary italic">Rebuild & Replacement</span></h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Land Rover engines are prone to specific faults that require expert intervention — whether it's the notorious crankshaft failure on the 3.0L SDV6 or timing chain stretch on the Ingenium series, we have the fix.
                  </p>
                  <p>
                    Every engine we touch is stripped, cleaned, and reassembled using high-spec components to eliminate inherent factory weaknesses.
                  </p>
                </div>
              </div>

               {/* COMMON PROBLEMS */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter italic"><span className="text-red-500">Known Faults</span> & Failures</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {commonLandRoverProblems.map((problem, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:border-red-200 transition-colors text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                        {problem}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter italic">Expert <span className="text-primary">Supply & Fit</span></h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our supply and fitting service offers nationwide collection and delivery, ensuring your vehicle is handled by specialists from start to finish.
                  </p>
                  <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm">
                     <p className="text-slate-900 font-black text-sm mb-3 italic uppercase">Why Choose Vogue?</p>
                     <ul className="space-y-2 font-bold text-slate-600 uppercase text-xs tracking-widest">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Master Technicians</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> State-of-Art Facility</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Guaranteed Recovery</li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Search */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-slate-900 rounded-[1.5rem] p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
                <h3 className="text-base font-black text-white mb-5 uppercase tracking-widest leading-tight">Find Your Engine Match</h3>
                <form className="space-y-4">
                  <div className="flex flex-col overflow-hidden rounded-xl border-2 border-slate-300 bg-[#eeb318] shadow-inner">
                    <div className="bg-[#0033A0] flex flex-col items-center justify-center py-1.5 shrink-0">
                       <span className="text-white font-black text-[0.6rem] tracking-[0.4em] uppercase">Vogue Technics UK</span>
                    </div>
                    <input
                      type="text"
                      placeholder="ENTER VEHICLE REG NUMBER"
                      className="w-full bg-transparent text-slate-900 font-black text-lg px-2 py-4 focus:outline-none placeholder:text-[10px] placeholder:tracking-normal uppercase tracking-[0.2em] text-center placeholder:text-slate-700/60"
                    />
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-emerald-500 text-white font-black py-3 px-6 rounded-xl shadow-lg transition-all flex justify-center items-center gap-3 uppercase tracking-widest text-sm">
                    <Search className="w-4 h-4" /> INSTANT QUOTE
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-slate-800">
                   <p className="text-slate-500 text-xs mb-3 uppercase tracking-[0.4em] font-black">Call an Expert</p>
                  <a href="tel:01375531355" className="text-white font-black text-xl tracking-tighter hover:text-primary transition-colors flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-primary" /> 01375 531355
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAND ROVER MODELS GRID */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Find your <span className="text-primary">Land Rover</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="text-slate-500 mt-4 text-base font-medium">Durable engines for rugged Defender and Discovery models</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {landRoverModels.map((model, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group h-full"
              >
                <Link href={model.link} className="block h-full">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 hover:bg-white hover:border-primary/30 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col items-center text-center space-y-2.5 relative overflow-hidden h-full group">
                    <div className="w-full aspect-[4/3] bg-white rounded-lg flex items-center justify-center border border-slate-200 group-hover:border-primary/30 transition-all duration-500 shadow-sm group-hover:scale-105">
                      <span className="text-[0.5rem] font-black uppercase tracking-[0.3em] text-slate-300">LR Image Space</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {model.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-bold text-[10px] uppercase tracking-widest">
                      Read more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ENGINE SIZES */}
      <section id="engine-sizes" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden px-4">
        <div className="container mx-auto lg:px-8">

          <div className="mb-8">
            <div className="text-center max-w-4xl mx-auto mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-[4px] underline-offset-[8px]">Land Rover <span className="text-primary italic">Popular Sizes</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
              {landRoverEngineSizes.map((engine, idx) => (
                <Link
                  key={idx}
                  href={engine.link}
                  className="bg-slate-900 border-2 border-slate-800 text-white hover:bg-primary hover:border-primary px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-black transition-all shadow-md flex items-center gap-3 text-sm group hover:-translate-y-2 transform duration-500 uppercase tracking-widest italic"
                >
                  <Activity className="w-4 h-4 text-primary transition-colors animate-pulse" />
                  {engine.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERVICE QUALITY GRID */}
      <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Rebuild */}
            <div className="space-y-5 p-6 bg-white/5 rounded-[1.5rem] border-2 border-white/10 hover:border-primary/50 transition-all duration-700 group relative">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter italic leading-none">Specialist <br/>Engine Rebuild</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Complete teardown and precision rebuild of high-performance Land Rover units. We address common factory flaws to ensure peak reliability.
              </p>
              <ul className="space-y-2 font-black uppercase tracking-[0.2em] text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Specialist Team</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Multi-Point Test</li>
              </ul>
            </div>

            {/* Reconditioned */}
            <div className="space-y-5 p-6 bg-primary rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(25,135,84,0.4)] border-2 border-white relative z-10 transition-transform duration-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-xl">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter italic leading-none text-white underline decoration-white/30 decoration-[3px] underline-offset-4">Premium <br/>Reconditioned</h3>
              <p className="text-emerald-50 text-sm leading-relaxed font-medium">
                Our reconditioned units are restored to near-new condition using OEM parts. A cost-effective way to get your vehicle back to full power.
              </p>
              <ul className="space-y-2 font-black uppercase tracking-[0.2em] text-sm text-emerald-100 border-t border-white/20 pt-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Like-New Build</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> 6 Month Warranty</li>
              </ul>
            </div>

            {/* Used */}
            <div className="space-y-5 p-6 bg-white/5 rounded-[1.5rem] border-2 border-white/10 hover:border-primary/50 transition-all duration-700 group relative">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter italic leading-none">Guaranteed <br/>Used Engines</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We stock low-mileage used engines thoroughly tested by our master technicians. A reliable alternative for a quick replacement.
              </p>
              <ul className="space-y-2 font-black uppercase tracking-[0.2em] text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Low Mileage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Instant Delivery</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* EXTENDED WARRANTY CALLOUT */}
      <section className="pb-24 pt-12 bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border-2 border-primary/40 rounded-[1.5rem] p-6 md:p-10 text-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -ml-40 -mb-40 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest border border-primary/30">
                <Shield className="w-4 h-4" /> Main Dealer Sourced
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic leading-tight">
                Looking for <span className="text-primary italic underline decoration-white/20 underline-offset-4">Extended Coverage?</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
                We also offer <span className="text-white font-bold">up to 24 months warranty</span>, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US BENTO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="w-full lg:w-1/2">
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border-4 border-slate-50 group">
                   <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" alt="LR Workshop" width={800} height={1000} className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-[1rem] border border-white/20 shadow-2xl">
                      <div className="text-white text-base font-black uppercase tracking-tighter italic">Vogue Technics</div>
                   </div>
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-[4px] underline-offset-[8px]">Land Rover <span className="text-primary italic">Experts</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                   <div className="space-y-3 group">
                      <div className="text-primary font-black text-3xl group-hover:scale-110 transition-transform inline-block">01.</div>
                      <h4 className="font-extrabold text-slate-900 text-base uppercase tracking-tighter italic">Engine Specialist</h4>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">Dedicated workshop for heavy-duty Land Rover engine rebuilds.</p>
                   </div>
                   <div className="space-y-3 group">
                      <div className="text-primary font-black text-3xl group-hover:scale-110 transition-transform inline-block">02.</div>
                      <h4 className="font-extrabold text-slate-900 text-base uppercase tracking-tighter italic">Precision Build</h4>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">Fixing inherent factory flaws (crankshaft/oil pump) with superior components.</p>
                   </div>
                   <div className="space-y-3 group">
                      <div className="text-primary font-black text-3xl group-hover:scale-110 transition-transform inline-block">03.</div>
                      <h4 className="font-extrabold text-slate-900 text-base uppercase tracking-tighter italic">Full Warranty</h4>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">We back our craftsmanship with a comprehensive 6-month written warranty.</p>
                   </div>
                   <div className="space-y-3 group">
                      <div className="text-primary font-black text-3xl group-hover:scale-110 transition-transform inline-block">04.</div>
                      <h4 className="font-extrabold text-slate-900 text-base uppercase tracking-tighter italic">Nationwide Reach</h4>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">Engine supply and professional fitting available throughout the UK.</p>
                   </div>
                </div>
                <div className="pt-6">
                   <Link href="/contact-us" className="inline-flex items-center gap-4 text-primary font-black text-base hover:translate-x-6 transition-all uppercase tracking-tighter italic hover:opacity-80">
                      Book Restoration <ArrowRight className="w-6 h-6" />
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-12 md:py-16 bg-slate-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/5 opacity-30 animate-pulse pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-6 relative z-10">
           <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight italic">Revive Your <br/><span className="text-primary underline decoration-white/30 decoration-[4px] underline-offset-[8px]">Land Rover</span></h2>
           <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed max-w-3xl mx-auto">
             Get Back On and Off Road Today. Expert Service Guaranteed!
           </p>
           <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
             <Link href="/contact-us" className="bg-primary hover:bg-emerald-500 text-white font-black py-3 px-7 rounded-xl shadow-lg transition-all transform hover:-translate-y-2 text-sm flex items-center justify-center gap-3 uppercase tracking-[0.2em] w-full md:w-auto">
               <Search className="w-4 h-4" /> Instant Quote
             </Link>
             <a href="tel:01375531355" className="bg-white hover:bg-slate-100 text-slate-950 font-black py-3 px-7 rounded-xl shadow-md transition-all transform hover:-translate-y-2 text-sm flex items-center justify-center gap-3 uppercase tracking-[0.2em] w-full md:w-auto">
               <Phone className="w-4 h-4 text-primary" /> 01375 531355
             </a>
          </div>
        </div>
      </section>

      {/* INFORMATIVE CONTENT SECTION */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative p-6 md:p-8 bg-slate-50 rounded-[1.5rem] border-2 border-slate-100 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Specialist <span className="text-primary italic">Land Rover</span> Engine Rebuilding
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Land Rover engines are renowned for their robust performance and off-road capability, but they require precision engineering to maintain their legendary status. At Vogue Technics, we specialize in comprehensive reconditioning for all Land Rover power units, from the versatile 2.0L Ingenium diesels to the heavy-duty 3.0L SDV6 blocks. Our process involves a complete teardown and inspection, identifying common factory weaknesses like oil pump failures or crankshaft snapping, and replacing them with upgraded components that exceed original specifications.
                  </p>
                </div>

                <div className="space-y-3 pt-5 border-t border-slate-200">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Addressing <span className="text-primary italic">Common Faults</span> with Precision
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    We understand the specific challenges faced by Land Rover owners, including timing chain stretch and turbocharger complications. Our workshop is equipped with specialized diagnostic tools specifically calibrated for Land Rover engine management systems. By using only high-grade OEM parts and implementing reinforced seals and bearings, we ensure that your rebuilt engine isn't just restored it's improved. This attention to detail is why thousands of Land Rover enthusiasts trust us to get their vehicles back on and off the road.
                  </p>
                </div>

                <div className="space-y-3 pt-5 border-t border-slate-200">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    End-to-End <span className="text-primary italic">Supply & Fit</span> Services
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    For those who need a complete solution, our "Supply and Fit" service offers unparalleled convenience. We manage the entire recovery of your vehicle from anywhere in the UK, bringing it to our West Thurrock facility for expert intervention. Our technicians handle everything from the initial diagnostic to the final road testing, ensuring that your vehicle's complex electronics and drivetrain are perfectly synced with the new or reconditioned engine, providing a seamless turn-key experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title={<>Land Rover <span className="text-primary italic">FAQs</span></>}
        items={[
          {
            question: "Do you specialize in Land Rover Ingenium engines?",
            answer: "Yes, we have extensive experience with both petrol and diesel Ingenium engines, specifically addressing timing chain issues and turbo failures which are common in these models."
          },
          {
            question: "How do you fix the 3.0L SDV6 crankshaft issue?",
            answer: "Our reconditioning process for the 3.0L SDV6 includes fitting reinforced main bearings and high-performance oil pumps to significantly reduce the risk of the notorious crankshaft failure."
          },
          {
            question: "Can you recover my Land Rover from an off-road location?",
            answer: "While we specialize in workshop repairs, our recovery network can collect your vehicle from any standard road-accessible location across the UK to bring it to our specialist facility."
          },
          {
            question: "Is the Land Rover warranty valid for off-road use?",
            answer: "Our 6-month warranty covers all standard use of the vehicle. For specific off-road or performance coverage, please speak with our technical team during the consultation."
          }
        ]}
      />

      <PartnerLogos />
    </div>
  );
}
