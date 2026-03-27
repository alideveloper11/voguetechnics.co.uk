"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone, Clock, Wrench, Award, Star, Activity, ArrowRight, AlertTriangle, Truck, Settings } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { motion } from "framer-motion";

const jaguarModels = [
  { title: "Jaguar E-Pace Engines", link: "/jaguar-e-pace-engines" },
  { title: "Jaguar F-Pace Engines", link: "/jaguar-f-pace-engines" },
  { title: "Jaguar F-Type Coupe Engines", link: "/jaguar-f-type-coupe-engines" },
  { title: "Jaguar XE Engines", link: "/jaguar-xe-engines" },
  { title: "Jaguar XF Engines", link: "/jaguar-xf-engines" },
  { title: "Jaguar XF Sportbrake Engines", link: "/jaguar-xf-sportbrake-engines" },
  { title: "Jaguar XJ Engines", link: "/jaguar-xj-engines" },
  { title: "Jaguar XK Engines", link: "/jaguar-xk-engines" },
  { title: "Jaguar XK8 Engines", link: "/jaguar-xk8-engines" },
  { title: "Jaguar XKR Engines", link: "/jaguar-xkr-engines" },
  { title: "Jaguar XKR-S Engines", link: "/jaguar-xkr-s-engines" },
];

const jaguarEngineSizes = [
  { title: "Jaguar 2.0 Engines", link: "/jaguar-2-0-engines" },
  { title: "Jaguar 2.2 Engines", link: "/jaguar-2-2-engines" },
  { title: "Jaguar 2.8 Engines", link: "/jaguar-2-8-engines" },
  { title: "Jaguar 3.0 Engines", link: "/jaguar-3-0-engines" },
  { title: "Jaguar 4.2 Engines", link: "/jaguar-4-2-engines" },
  { title: "Jaguar 5.0 Engines", link: "/jaguar-5-0-engines" },
];

const jaguarProblems = [
  "Timing Chain Tensioner Failure",
  "Cooling System Problems",
  "Oil Leaks (Pan/Valve Cover)",
  "Ignition Coil Issues",
  "Turbocharger Failures (Diesel)",
  "Fuel Injector Problems",
  "Electrical Issues (ECU/Sensors)",
  "Head Gasket Failures",
];

export default function JaguarEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar Engine Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
            Jaguar Specialist
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
            Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500 italic">Perfect Jaguar Engine</span> <br />
            for Your Vehicle
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            At Vogue Technics, we offer top-quality reconditioned and used Jaguar engines. Our engines are thoroughly inspected and tested to ensure peak performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:01375 531355" className="bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 md:py-5 md:px-12 rounded-[2rem] shadow-[0_15px_30px_rgba(25,135,84,0.4)] transition-all flex items-center justify-center gap-3 w-full sm:w-auto transform hover:-translate-y-2 uppercase tracking-widest text-lg">
              <Phone className="w-6 h-6" /> 01375 531355
            </a>
            <Link href="/contact-us" className="bg-white hover:bg-slate-50 text-slate-900 font-black py-4 px-8 md:py-5 md:px-12 rounded-[2rem] transition-all shadow-xl w-full sm:w-auto transform hover:-translate-y-2 flex items-center justify-center uppercase tracking-widest text-lg">
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <PartnerLogos />

      {/* EXPERIENCE SECTION */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter uppercase underline decoration-8 underline-offset-[12px] decoration-primary/20">
                Over 2 Decades of <br/><span className="text-primary italic">Jaguar Expertise</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over 20 years of experience to facilitate the Jaguar owners, we strive to provide the best servicing and fitting facility to the locals regardless of what model they drive.
                </p>
                <p>
                  With Substantial investment in state-of-the-art facility and most updated equipment specialized for Jaguar repairs, we are the top choice for engine reconditioning and fitting.
                </p>
                <div className="font-bold text-slate-900 border-l-8 border-primary pl-8 py-6 bg-slate-50 rounded-r-[3rem] shadow-sm italic text-xl">
                   "Our testimonials prove the quality and devotion to our services and our clients. Visit us to have complete peace of mind."
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white space-y-3 border-b-4 border-primary transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="text-6xl font-black text-primary">20+</div>
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-slate-400">Years Exp</div>
              </div>
              <div className="bg-primary rounded-[3rem] p-12 text-center text-white space-y-3 sm:mt-12 transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="text-6xl font-black italic underline decoration-white/30">UK's</div>
                <div className="text-[0.7rem] font-black uppercase tracking-[0.4em] text-emerald-100">Specialist</div>
              </div>
              <div className="bg-slate-50 border-2 border-slate-100 rounded-[3rem] p-12 text-center space-y-3 transform hover:scale-105 transition-transform duration-500 shadow-xl">
                <div className="text-6xl font-black text-slate-900 tracking-tighter">OEM</div>
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-slate-500">Quality Parts</div>
              </div>
              <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white space-y-3 sm:mt-12 border-b-4 border-primary transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="text-6xl font-black text-primary">40%</div>
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-slate-400">Off Deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-2/3 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Jaguar Engine <span className="text-primary italic">Replacement Specialists</span></h2>
                <div className="text-slate-600 text-xl leading-relaxed space-y-6">
                  <p>
                    We are Jaguar Engine Replacement specialists. Our team has extensive experience in replacing Jaguar engines correctly and efficiently. From removal to fitting, we ensure everything is done to the highest standards.
                  </p>
                  <p>
                    Replacing a Jaguar engine is a complex task. It requires skilled professionals and specialized tools. We have both. Our experts ensure that your new engine is fitted perfectly, guaranteed optimal performance and longevity.
                  </p>
                  <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-lg relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                     <p className="font-bold text-slate-800 text-xl leading-relaxed relative z-10 italic">
                        In our garage, we provide a variety of engine components for sale or replacement. We obtain our components from reliable suppliers in order to guarantee performance and reliability.
                     </p>
                  </div>
                </div>
              </div>

              {/* COMMON PROBLEMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-8">
                  <div className="w-16 h-16 bg-red-100 rounded-[1.5rem] flex items-center justify-center text-red-600 shadow-inner">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Common Jaguar <span className="text-red-500">Engine Faults</span></h3>
                  <div className="grid grid-cols-1 gap-3">
                    {jaguarProblems.map((problem, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-700 font-bold bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-red-500" />
                        {problem}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary shadow-inner">
                    <Settings className="w-8 h-8 animate-spin-slow" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">High Performance <span className="text-primary">Parts & Repairs</span></h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    By utilizing authentic Jaguar OEM components, we assure a precise fit and excellent performance. Our skilled mechanics have the expertise to replace any component accurately.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium bg-white p-6 rounded-3xl border border-slate-100">
                    We supply, fit, and deliver Jaguar engines nationwide. Our professional fitting ensures your engine runs smoothly from the moment you turn the key.
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Search */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-slate-900 rounded-[3rem] p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-widest italic">Jaguar Engine Search</h3>
                <form className="space-y-8">
                  <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transform hover:scale-105 transition-all duration-500">
                    <div className="bg-[#0033A0] flex flex-col items-center justify-center py-2 shrink-0 border-b border-[#0033A0]/50">
                       <span className="text-white font-black text-[0.6rem] tracking-[0.4em] uppercase">Vogue Technics UK</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="ENTER REG" 
                      className="w-full bg-transparent text-slate-900 font-black text-2xl md:text-4xl px-3 py-6 focus:outline-none placeholder:text-slate-700/40 uppercase tracking-[0.3em] text-center"
                    />
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-emerald-500 text-white font-black py-6 px-8 rounded-[2rem] shadow-[0_15px_35px_rgba(25,135,84,0.4)] transition-all flex justify-center items-center gap-4 transform hover:-translate-y-2 uppercase tracking-[0.15em] text-lg">
                    <Search className="w-7 h-7" /> INSTANT QUOTE
                  </button>
                </form>
                <div className="mt-12 pt-10 border-t border-slate-800">
                   <p className="text-slate-500 text-xs mb-6 uppercase tracking-[0.4em] font-black">Expert Jaguar Team</p>
                  <a href="tel:01375531355" className="text-white font-black text-3xl md:text-4xl tracking-tighter hover:text-primary transition-colors flex items-center justify-center gap-4">
                    <Phone className="w-8 h-8 text-primary" /> 01375 531355
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JAGUAR MODELS GRID */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4">
             <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-[12px] underline-offset-[16px]">Find your <span className="text-primary italic">Jaguar</span></h2>
             <p className="text-slate-500 mt-8 md:mt-10 text-xl md:text-2xl font-medium tracking-wide uppercase">Elite Replacement Engines for all major Jaguar Models</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {jaguarModels.map((model, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group h-full"
              >
                <Link href={model.link} className="block h-full">
                  <div className="bg-slate-50 border-4 border-slate-100 rounded-[3rem] p-10 hover:bg-white hover:border-primary hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center text-center space-y-8 relative overflow-hidden h-full group">
                    <div className="w-full aspect-square bg-white rounded-[2rem] flex flex-col items-center justify-center border-2 border-slate-200 group-hover:border-primary/20 transition-all duration-700 shadow-inner group-hover:scale-105">
                       <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-slate-300">Jaguar Image</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tighter leading-tight">
                        {model.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-primary font-black text-[0.8rem] uppercase tracking-[0.3em] group-hover:gap-6 transition-all border-b-2 border-transparent hover:border-primary pb-1">
                      Explore <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 md:mt-32 pt-16 md:pt-24 border-t-8 border-slate-100">
            <div className="text-center max-w-4xl mx-auto mb-16 text-center px-4">
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-[10px] underline-offset-[12px]">Popular <span className="text-primary italic">Engine Sizes</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {jaguarEngineSizes.map((engine, idx) => (
                <Link 
                  key={idx}
                  href={engine.link}
                  className="bg-white border-4 border-slate-100 text-slate-950 hover:text-white hover:bg-primary hover:border-primary px-6 py-4 md:px-10 md:py-6 rounded-[2rem] font-black transition-all shadow-xl flex items-center gap-4 text-lg md:text-xl group hover:-translate-y-3 transform duration-500 uppercase tracking-widest italic"
                >
                  <Activity className="w-6 h-6 text-primary group-hover:text-white transition-colors animate-pulse" />
                  {engine.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE QUALITY GRID */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Rebuild */}
            <div className="space-y-8 p-12 bg-white/5 rounded-[4rem] border-2 border-white/10 hover:border-primary/50 transition-all duration-700 group relative">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Complete <br/>Jaguar Rebuild</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Rebuilding involves a complete teardown where all engine parts are inspected, cleaned, and replaced if necessary. It's like giving your engine a second life.
              </p>
              <ul className="space-y-4 font-black uppercase tracking-[0.2em] text-sm text-slate-300 border-t border-white/10 pt-8">
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /> Full Teardown</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /> Multi-Point Inspection</li>
              </ul>
            </div>

            {/* Reconditioned */}
            <div className="space-y-8 p-12 bg-primary rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(25,135,84,0.4)] border-4 border-white lg:transform lg:scale-110 relative z-10 transition-transform duration-700">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-2xl">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none text-white underline decoration-white/30 decoration-[6px] underline-offset-8">Supreme <br/>Reconditioned</h3>
              <p className="text-emerald-50 text-xl leading-relaxed font-medium">
                Restoring to original state. Cleaning, repairing, and replacing worn parts with cost-effective options that provide excellent Jaguar performance.
              </p>
              <ul className="space-y-4 font-black uppercase tracking-[0.2em] text-sm text-emerald-100 border-t border-white/20 pt-8">
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-white" /> Cost-Effective Solution</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-white" /> Like-New Reliability</li>
              </ul>
            </div>

            {/* Used */}
            <div className="space-y-8 p-12 bg-white/5 rounded-[4rem] border-2 border-white/10 hover:border-primary/50 transition-all duration-700 group relative">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Low Mileage <br/>Used Units</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Finding quality used units made easy. Each engine is thoroughly inspected and tested for models including XF, XJ, and F-Pace.
              </p>
              <ul className="space-y-4 font-black uppercase tracking-[0.2em] text-sm text-slate-300 border-t border-white/10 pt-8">
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /> Hand-Picked Stock</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /> Nationwide Delivery</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US BENTO */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-24 items-center">
             <div className="w-full lg:w-1/2">
                <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-slate-50 group">
                   <Image src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop" alt="Jaguar Engine Workshop" width={800} height={1000} className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                   <div className="absolute bottom-12 left-12 p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl">
                      <div className="text-white text-3xl font-black uppercase tracking-tighter italic">Vogue Technics</div>
                   </div>
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-12">
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-[12px] underline-offset-[16px]">Why choose <span className="text-primary italic italic">Us</span>?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                   <div className="space-y-4 group">
                      <div className="text-primary font-black text-5xl group-hover:scale-110 transition-transform inline-block">01.</div>
                      <h4 className="font-extrabold text-slate-900 text-2xl uppercase tracking-tighter italic">20+ Years Expertise</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Seen and fixed all kinds of Jaguar engine problems across two decades.</p>
                   </div>
                   <div className="space-y-4 group">
                      <div className="text-primary font-black text-5xl group-hover:scale-110 transition-transform inline-block">02.</div>
                      <h4 className="font-extrabold text-slate-900 text-2xl uppercase tracking-tighter italic">OEM Guaranteed</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Utilizing authentic Jaguar parts and state-of-the-art diagnostic tools.</p>
                   </div>
                   <div className="space-y-4 group">
                      <div className="text-primary font-black text-5xl group-hover:scale-110 transition-transform inline-block">03.</div>
                      <h4 className="font-extrabold text-slate-900 text-2xl uppercase tracking-tighter italic">6 Months Warranty</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Peace of mind knowing your rebuilt or reconditioned engine is protected.</p>
                   </div>
                   <div className="space-y-4 group">
                      <div className="text-primary font-black text-5xl group-hover:scale-110 transition-transform inline-block">04.</div>
                      <h4 className="font-extrabold text-slate-900 text-2xl uppercase tracking-tighter italic">Unbeatable Price</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Save up to 40% on engine queries and get back on the road affordably.</p>
                   </div>
                </div>
                <div className="pt-10">
                   <Link href="/contact-us" className="inline-flex items-center gap-6 text-primary font-black text-3xl hover:translate-x-12 transition-all uppercase tracking-tighter italic hover:opacity-80">
                      Book Service Now <ArrowRight className="w-12 h-12" />
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-40 bg-slate-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/5 opacity-30 animate-pulse pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-12 md:space-y-16 relative z-10">
           <h2 className="text-4xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none italic">Book Your <br/><span className="text-primary underline decoration-white/30 decoration-[10px] underline-offset-[20px]">Jaguar Appointment</span></h2>
           <p className="text-slate-400 text-xl md:text-3xl font-bold uppercase tracking-widest leading-relaxed">
             Experience Top-Notch Maintenance. Scheduled services today!
           </p>
           <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center pt-6 md:pt-10">
             <Link href="/contact-us" className="bg-primary hover:bg-emerald-500 text-white font-black py-6 px-12 md:py-8 md:px-20 rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(25,135,84,0.6)] transition-all transform hover:-translate-y-4 text-xl md:text-3xl flex items-center justify-center gap-6 uppercase tracking-[0.2em] w-full md:w-auto">
               <Search className="w-8 h-8 md:w-12 md:h-12" /> Book Online
             </Link>
             <a href="tel:01375531355" className="bg-white hover:bg-slate-100 text-slate-950 font-black py-6 px-12 md:py-8 md:px-20 rounded-[3rem] shadow-2xl transition-all transform hover:-translate-y-4 text-xl md:text-3xl flex items-center justify-center gap-6 uppercase tracking-[0.2em] w-full md:w-auto">
               <Phone className="w-8 h-8 md:w-12 md:h-12 text-primary" /> 01375 531355
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
