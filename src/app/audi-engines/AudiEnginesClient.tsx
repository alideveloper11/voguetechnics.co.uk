"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone, Clock, Wrench, Award, Star, Activity, ArrowRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import ReviewsSection from "@/components/common/ReviewsSection";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";

const audiModels = [
  { title: "Audi A1 Engines", link: "/audi-a1-engines" },
  { title: "Audi A1 Sportback Engines", link: "/audi-a1-sportback-engines" },
  { title: "Audi A3 Engines", link: "/audi-a3-engines" },
  { title: "Audi A3 Convertible Engines", link: "/audi-a3-convertible-engines" },
  { title: "Audi A3 Limousine Engines", link: "/audi-a3-limousine-engines" },
  { title: "Audi A3 Sportback Engines", link: "/audi-a3-sportback-engines" },
  { title: "Audi A4 Engines", link: "/audi-a4-engines" },
  { title: "Audi A4 Allroad Engines", link: "/audi-a4-allroad-engines" },
  { title: "Audi A4 Avant Engines", link: "/audi-a4-avant-engines" },
  { title: "Audi A5 Engines", link: "/audi-a5-engines" },
  { title: "Audi A5 Convertible Engines", link: "/audi-a5-convertible-engines" },
  { title: "Audi A5 Sportback Engines", link: "/audi-a5-sportback-engines" },
  { title: "Audi A6 Engines", link: "/audi-a6-engines" },
  { title: "Audi A6 Allroad Engines", link: "/audi-a6-allroad-engines" },
  { title: "Audi A6 Avant Engines", link: "/audi-a6-avant-engines" },
  { title: "Audi A7 Sportback Engines", link: "/audi-a7-sportback-engines" },
  { title: "Audi A8 Engines", link: "/audi-a8-engines" },
  { title: "Audi Q2 Engines", link: "/audi-q2-engines" },
  { title: "Audi Q3 Engines", link: "/audi-q3-engines" },
  { title: "Audi Q5 Engines", link: "/audi-q5-engines" },
  { title: "Audi Q7 Engines", link: "/audi-q7-engines" },
  { title: "Audi R8 Engines", link: "/audi-r8-engines" },
  { title: "Audi R8 Spyder Engines", link: "/audi-r8-spyder-engines" },
  { title: "Audi TT Engines", link: "/audi-tt-engines" },
  { title: "Audi TT Roadster Engines", link: "/audi-tt-roadster-engines" },
];

const audiEngineSizes = [
  { title: "Audi 1.0 Engines", link: "/audi-1-0-engines" },
  { title: "Audi 1.2 Engines", link: "/audi-1-2-engines" },
  { title: "Audi 1.4 Engines", link: "/audi-1-4-engines" },
  { title: "Audi 1.5 Engines", link: "/audi-1-5-engines" },
  { title: "Audi 1.6 Engines", link: "/audi-1-6-engines" },
  { title: "Audi 1.8 Engines", link: "/audi-1-8-engines" },
  { title: "Audi 2.0 Engines", link: "/audi-2-0-engines" },
  { title: "Audi 2.5 Engines", link: "/audi-2-5-engines" },
  { title: "Audi 2.7 Engines", link: "/audi-2-7-engines" },
  { title: "Audi 2.8 Engines", link: "/audi-2-8-engines" },
  { title: "Audi 2.9 Engines", link: "/audi-2-9-engines" },
  { title: "Audi 3.0 Engines", link: "/audi-3-0-engines" },
  { title: "Audi 3.2 Engines", link: "/audi-3-2-engines" },
  { title: "Audi 4.0 Engines", link: "/audi-4-0-engines" },
  { title: "Audi 4.1 Engines", link: "/audi-4-1-engines" },
  { title: "Audi 4.2 Engines", link: "/audi-4-2-engines" },
  { title: "Audi 5.0 Engines", link: "/audi-5-0-engines" },
  { title: "Audi 5.2 Engines", link: "/audi-5-2-engines" },
  { title: "Audi 6.0 Engines", link: "/audi-6-0-engines" },
  { title: "Audi 6.3 Engines", link: "/audi-6-3-engines" },
];

export default function AudiEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Audi Engine Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Audi Engines", href: "/audi-engines" }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
              Audi Specialist
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight uppercase">
              Save Money at Reliable Used and Reconditioned <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500 italic text-2xl md:text-4xl lg:text-5xl">
                Audi Replacement Engines
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vogue Technics provides perfect assistance in Audi engine replacements along with offering used and reconditioned Audi engines at affordable prices.
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
        subtitle="Hear from our satisfied customers who have experienced our professional Audi engine services." 
      />

      {/* EXPERIENCE SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase underline underline-offset-[12px] decoration-primary decoration-[6px]">
                Over 2 Decades of Experience in <br/><span className="text-primary italic">Fitting and Servicing Audi Vehicles</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  With over 20 years of experience to facilitate the Audi owners, we strive to provide the best servicing and fitting facility to the locals of West Thurrock regardless of what model of Audi they drive.
                </p>
                <p>
                  With Substantial investment in state-of-the-art facility and most updated equipment specialized for Audi repairs, Servicing and Fitting of engines, we are the top choice for locals and have gained their trust with our dedication to our craft.
                </p>
                <p className="font-medium text-slate-800 italic border-l-4 border-primary pl-4 py-3 bg-slate-50 rounded-r-3xl">
                   "Our testimonials prove the quality and devotion to our services and our clients. Visit us to have complete peace of mind and great services."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-[2rem] p-8 text-center text-white space-y-2 transform hover:scale-105 transition-transform border-b-4 border-primary">
                <div className="text-3xl font-extrabold text-primary">20+</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-400">Years Expert</div>
              </div>
              <div className="bg-primary rounded-[2rem] p-8 text-center text-white space-y-2 transform hover:scale-105 transition-transform sm:mt-10">
                <div className="text-3xl font-extrabold">10k+</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-emerald-100">Engines Fitted</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-center space-y-2 transform hover:scale-105 transition-transform">
                <div className="text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-500">Satisfied</div>
              </div>
              <div className="bg-slate-900 rounded-[2rem] p-8 text-center text-white space-y-2 transform hover:scale-105 transition-transform sm:mt-10 border-b-4 border-primary">
                <div className="text-3xl font-extrabold text-primary">24/7</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIND YOUR AUDI GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase underline underline-offset-8 decoration-primary decoration-4">Find your <span className="text-primary italic italic">Audi</span></h2>
            <p className="text-slate-600 mt-2 font-medium">Explore our extensive range of replacement Audi engines for all major models.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {audiModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
              >
                <Link href={model.link} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10 w-full aspect-[4/3] bg-slate-100 rounded-xl mb-5 flex flex-col items-center justify-center overflow-hidden group-hover:bg-slate-200/50 transition-colors">
                      <span className="text-slate-400 text-[0.6rem] font-bold tracking-[0.2em] uppercase">Audi Image Space</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-snug uppercase tracking-tight">
                        {model.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-primary font-black text-[0.7rem] mt-6 group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* POPULAR ENGINE SIZES */}
          <div id="engine-sizes" className="mt-24 pt-20 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase underline underline-offset-8 decoration-primary decoration-4">Popular <span className="text-primary italic italic">Engine Sizes</span></h2>
              <p className="text-slate-600 mt-2 font-medium">Quick access to the most common Audi engine displacements we stock.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
              {audiEngineSizes.map((engine, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <Link 
                    href={engine.link}
                    className="bg-white border-2 border-slate-100 text-slate-800 hover:text-white hover:bg-primary hover:border-primary px-6 py-4 rounded-2xl font-bold transition-all shadow-sm flex items-center gap-3 text-sm md:text-lg group hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Activity className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    {engine.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CONTENT SECTION - FROM PREVIOUS DATA */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-2/3 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-none tracking-tighter uppercase">Vogue Technics: <span className="text-primary italic">Audi Engine Specialists</span></h2>
                <div className="text-slate-600 text-base leading-relaxed space-y-4">
                  <p>
                    Engine replacement in any Audi vehicle is a complex task requiring high technical proficiency and mechanical understanding. Fortunately, you have the help available as Vogue Technics provides perfect assistance in Audi engine replacements along with offering used and reconditioned Audi engines at affordable prices.
                  </p>
                  <p>
                    Our technicians have years of experience and are highly trained in Audi engine replacements. We have invested in a purpose built workshop that was built to accommodate seamless Audi engine replacements and repairs and use modern and up to date equipment to execute perfect repairs.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 shadow-inner">
                  <p className="text-slate-800 text-lg leading-relaxed italic font-bold">
                    Audi in their engineering department, does not believe in doing things in half measures. They always blend high performance with innovative design and advanced features.
                  </p>
                </div>
              </div>

              {/* REASONS & SAVING */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Key Reasons for <span className="text-primary">Engine Replacements</span></h3>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Engine replacements are often necessary due to a variety of critical factors. The primary reason among them is engine wear and tear over time. Engines endure significant stress leading towards deterioration of key components.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">How to <span className="text-primary">Save 40%</span> on Engines</h3>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Vogue Technics can help you with options that not only promise to save you your hard earned money but lets you do it without compromising on the performance or quality. Save up to 40% on dealer prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Search */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest italic tracking-widest">Instant Quote Search</h3>
                <form className="space-y-6">
                  <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#0033A0] flex flex-col items-center justify-center py-2 shrink-0 border-b border-[#0033A0]/50">
                       <span className="text-white font-black text-[0.6rem] tracking-[0.3em] uppercase">United Kingdom</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="ENTER VEHICLE REG NUMBER" 
                      className="w-full bg-transparent text-slate-900 font-extrabold text-lg md:text-3xl px-2 sm:px-3 py-5 focus:outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm placeholder:tracking-normal uppercase tracking-[0.15em] md:tracking-[0.25em] text-center placeholder:text-slate-600/70"
                    />
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-emerald-500 text-white font-black py-5 px-6 rounded-2xl shadow-lg transition-all flex justify-center items-center gap-3 transform hover:-translate-y-1">
                    <Search className="w-6 h-6" /> GET FREE QUOTE
                  </button>
                </form>
                <div className="mt-10 pt-10 border-t border-slate-800">
                   <p className="text-slate-500 text-xs mb-4 uppercase tracking-[0.3em] font-bold">Expert Support Line</p>
                  <a href="tel:01375531355" className="text-white font-black text-3xl tracking-tighter hover:text-primary transition-colors flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6 text-primary" /> 01375 531355
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINE OPTIONS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none underline decoration-8 underline-offset-8 decoration-primary/20">Premium <span className="text-primary italic italic">Solutions</span></h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium">Choose the high-performance option that fits your budget and specific Audi model.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Used */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-12 space-y-8 shadow-sm hover:shadow-2xl transition-all duration-500 border-b-8 hover:border-b-primary group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Used Audi Engines</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We source low mileage engines from all over the UK. Meticulously inspected and tested for reliability.
              </p>
              <ul className="space-y-4 font-bold text-sm uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Low Mileage Stock
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Quality Inspected
                </li>
              </ul>
            </motion.div>

            {/* Reconditioned */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900 border-2 border-slate-800 rounded-[2.5rem] p-12 space-y-8 shadow-2xl relative z-10 border-b-8 border-b-primary">
              <div className="absolute top-8 right-8 text-primary">
                <Star className="w-10 h-10 fill-primary" />
              </div>
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(25,135,84,0.5)] text-white">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight uppercase italic">Reconditioned Engines</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Refurbished to near new condition where all worn parts are replaced to factory specifications.
              </p>
              <ul className="space-y-4 font-bold text-sm uppercase tracking-widest text-emerald-400">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Near New Performance
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Elite Fitting Service
                </li>
              </ul>
            </motion.div>

            {/* Rebuilt */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-12 space-y-8 shadow-sm hover:shadow-2xl transition-all duration-500 border-b-8 hover:border-b-primary group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Engine Rebuilds</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Tailored solutions for peak performance. Disassembled, inspected, and reassembled with precision.
              </p>
              <ul className="space-y-4 font-bold text-sm uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Precision Build
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Peak Power Stock
                </li>
              </ul>
            </motion.div>
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
            className="bg-white/5 border-2 border-primary/40 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-2XL"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -ml-40 -mb-40 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-primary/30">
                <Shield className="w-5 h-5" /> Main Dealer Sourced
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                Looking for <br className="hidden md:block" /> <span className="text-primary italic underline decoration-white/20 underline-offset-8">Extended Coverage?</span>
              </h3>
              <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                We also offer <span className="text-white font-bold">up to 24 months warranty</span>, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BIG PROMO BANNER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[180px] rounded-full -mr-72 -mt-72 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">Save Up to <br/><span className="text-slate-900 underline decoration-[12px] underline-offset-[16px] decoration-white/30">40%</span></motion.h2>
          <p className="text-2xl md:text-4xl text-emerald-100 max-w-3xl mx-auto font-black mb-16 uppercase tracking-[0.2em]">
            WRITTEN WARRANTY INCLUDED
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-4 bg-slate-900 text-white font-black py-8 px-20 rounded-[3rem] text-2xl shadow-2xl hover:bg-slate-800 transition-all transform hover:scale-110 uppercase tracking-[0.25em]">
             Get Quote Now <ArrowRight className="w-8 h-8 text-primary" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-slate-50">
                   <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" alt="Engine Shop" width={800} height={1000} className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary rounded-full p-10 text-white flex flex-col items-center justify-center text-center shadow-3xl border-8 border-white z-20">
                   <span className="text-5xl font-black">20+</span>
                   <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] leading-tight mt-2">Years <br/>Specialist</span>
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-12">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-8 underline-offset-8 decoration-primary/20">Why choose <br/><span className="text-primary italic italic">Vogue Technics</span>?</h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-8 font-medium">
                  <p>
                    Choose us for unmatched quality and expertise in Audi engines. Our state-of-the-art facility is equipped with the latest technology and purpose-built workshop.
                  </p>
                  <div className="bg-slate-50 p-10 rounded-[3rem] border-2 border-slate-100 font-bold text-slate-900 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                    "Our commitment to using advanced tools ensures that every engine meets the highest standards of performance."
                  </div>
                </div>
                <Link href="/contact-us" className="inline-flex items-center gap-6 text-primary font-black text-3xl hover:translate-x-6 transition-transform uppercase tracking-tighter italic">
                  Let's Get Started <ArrowRight className="w-10 h-10" />
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50 border-t-8 border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">Book an <span className="text-primary">Appointment</span></h2>
          <p className="text-slate-500 text-base md:text-lg font-bold leading-relaxed max-w-3xl mx-auto uppercase tracking-widest">
            Scheduling is simple. Call us directly to speak with our specialists.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
             <Link href="/contact-us" className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-12 rounded-[2rem] shadow-xl transition-all transform hover:-translate-y-2 text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]">
               <Search className="w-8 h-8 text-primary" /> Book Online
             </Link>
             <a href="tel:01375531355" className="bg-primary hover:bg-emerald-500 text-white font-black py-5 px-12 rounded-[2rem] shadow-xl transition-all transform hover:-translate-y-2 text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]">
               <Phone className="w-8 h-8" /> 01375 531355
             </a>
          </div>
        </div>
      </section>

      {/* INFORMATIVE CONTENT SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="relative p-10 md:p-16 bg-slate-50 rounded-[4rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Elite <span className="text-primary italic">Audi</span> Engine Engineering
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Audi is synonymous with technical progress, and their engines are sophisticated units that require specialized knowledge. At Vogue Technics, we provide expert engine reconditioning for the entire Audi range, from the widespread 2.0L TFSI petrol engines to the high-performance V6 and V8 TDI diesels. Our master technicians utilize state-of-the-art diagnostic equipment to interface with Audi's complex electronic control units, ensuring every rebuild is perfectly calibrated.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Solving <span className="text-primary italic">TFSI and TDI</span> Challenges
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    We specialize in correcting well-documented Audi engine issues, such as the excessive oil consumption found in earlier TFSI models and the timing chain stretch common in high-mileage TDI units. Our reconditioning process includes using upgraded piston rings, reinforced timing components, and improved turbo seals that exceed the original manufacturer's specifications. This balanced approach restores not just power, but also the legendary fuel efficiency and smooth delivery Audi is known for.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Comprehensive <span className="text-primary italic">Quattro Integration</span>
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Fitting an engine into an Audi involves more than just mechanical labor; it requires precise integration with the Quattro all-wheel-drive system and S-Tronic transmissions. Our "Supply and Fit" service includes a full system diagnostic and drivetrain calibration. We ensure that your Audi's advanced safety and performance systems are fully functional and perfectly synchronized with the newly fitted engine, restoring the confident handling your vehicle was designed for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title={<>Audi Engine <span className="text-primary italic">FAQs</span></>}
        items={[
          {
            question: "How do you fix the Audi TFSI oil consumption issue?",
            answer: "Our engine rebuilds for TFSI models include fitting redesigned, high-spec piston rings and honing the cylinder walls to eliminate the oil bypass issue common in factory units."
          },
          {
            question: "Do you offer reconditioned engines for Audi S and RS models?",
            answer: "Yes, we have specialized technicians for Audi Performance models, including the S3, RS4, and RS6. These high-performance rebuilds use race-grade bearings and gaskets to handle the additional power."
          },
          {
            question: "Can you supply an engine for an Audi with Quattro AWD?",
            answer: "Absolutely. We stock and fit engines compatible with all Audi drivetrain configurations, including standard front-wheel drive, Quattro AWD, and the latest ultra-technology systems."
          },
          {
            question: "What kind of warranty do I get with an Audi engine?",
            answer: "All our reconditioned Audi engines come with a 6-month / 6,000-mile written warranty as standard, covering both parts and labor when fitted in our workshop."
          }
        ]}
      />

      <PartnerLogos />
    </div>
  );
}
