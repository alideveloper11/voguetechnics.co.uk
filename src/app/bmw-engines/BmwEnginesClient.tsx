"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone, Clock, Wrench, Award, Star, Activity, ArrowRight, AlertTriangle, Truck, Settings } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { motion } from "framer-motion";

const bmwModels = [
  { title: "BMW 1 Series Engines", link: "/bmw-1-series-engines" },
  { title: "BMW 2 Series Engines", link: "/bmw-2-series-engines" },
  { title: "BMW 3 Series Engines", link: "/bmw-3-series-engines" },
  { title: "BMW 4 Series Engines", link: "/bmw-4-series-engines" },
  { title: "BMW 5 Series Engines", link: "/bmw-5-series-engines" },
  { title: "BMW 6 Series Engines", link: "/bmw-6-series-engines" },
  { title: "BMW 7 Series Engines", link: "/bmw-7-series-engines" },
  { title: "BMW X1 Engines", link: "/bmw-x1-engines" },
  { title: "BMW X3 Engines", link: "/bmw-x3-engines" },
  { title: "BMW X5 Engines", link: "/bmw-x5-engines" },
];

const commonProblems = [
  "Overheating issues",
  "Timing chain problems",
  "Oil leaks",
  "Fuel injector malfunctions",
  "Engine misfires",
  "Cooling system failures",
  "Turbocharger faults",
];

export default function BmwEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW Engine Specialist"
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
            BMW Specialist
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight uppercase">
            Superior Used & Reconditioned <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500 italic">
              BMW Engine Rebuild & Replacement
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Vogue Technics focuses on providing expert BMW engine rebuilds and seamless replacements, ensuring your diesel or petrol vehicle runs to peak performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:01375 531355" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 md:px-10 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1">
              <Phone className="w-5 h-5" /> 01375 531355
            </a>
            <Link href="/contact-us" className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg w-full sm:w-auto transform hover:-translate-y-1 flex items-center justify-center">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <PartnerLogos />

      {/* EXPERIENCE SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                Over 2 Decades of Experience in <span className="text-primary italic">Fitting and Servicing BMW Vehicles</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over 20 years of experience to facilitate the BMW owners, we strive to provide the best servicing and fitting facility to the locals of West Thurrock regardless of what model of BMW they drive.
                </p>
                <p>
                  With Substantial investment in state-of-the-art facility and most updated equipment specialized for BMW repairs, Servicing and Fitting of engines, we are the top choice for locals and have gained their trust with our dedication to our craft.
                </p>
                <p className="font-medium text-slate-800 italic border-l-4 border-primary pl-4 py-2 bg-slate-50 rounded-r-2xl">
                   "Our testimonials prove the quality and devotion to our services and our clients. Visit us to have complete peace of mind and great services."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-[2rem] p-10 text-center text-white space-y-2 border-b-4 border-primary transform hover:scale-105 transition-transform">
                <div className="text-5xl font-black text-primary">20+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Years Exp</div>
              </div>
              <div className="bg-primary rounded-[2rem] p-10 text-center text-white space-y-2 sm:mt-10 transform hover:scale-105 transition-transform">
                <div className="text-5xl font-black">UK</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">Nationwide</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 text-center space-y-2 transform hover:scale-105 transition-transform">
                <div className="text-5xl font-black text-slate-900">OEM</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Genuine Parts</div>
              </div>
              <div className="bg-slate-900 rounded-[2rem] p-10 text-center text-white space-y-2 sm:mt-10 border-b-4 border-primary transform hover:scale-105 transition-transform">
                <div className="text-5xl font-black text-primary">40%</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Off Deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-2/3 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tighter uppercase leading-none">Vogue Technics: Expert BMW Engine Rebuild & Fitting</h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>
                    At Vogue Technics, we understand the value of a well-maintained BMW car. That's why we focus on expert BMW engine rebuilds and replacements that meet the highest standards. Our services are designed to keep your BMW running smoothly for years to come.
                  </p>
                  <p>
                    We offer reconditioned BMW engines that undergo a rigorous reconditioning process, including thorough checks and precise rebuilding to provide like-new performance. We specialise in providing high-quality replacement engines for all BMW models including BMW X5 and BMW X6.
                  </p>
                  <p>
                    Whether you need a complete engine overhaul or a specialized replacement, we have you covered with affordable prices and high technical proficiency.
                  </p>
                </div>
              </div>

              {/* COMMON PROBLEMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase italic">Common BMW <span className="text-red-600">Engine Faults</span></h3>
                  <div className="grid grid-cols-1 gap-2">
                    {commonProblems.map((problem, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-100 shadow-sm transition-colors hover:border-red-200">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        {problem}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase italic">UK’s Best <span className="text-primary italic">Replacement Specialists</span></h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our team consists of BMW engine replacement specialists. We have the expertise and tools to replace your engine efficiently. Whether it's a petrol or diesel engine, we handle each replacement with precision and skill.
                  </p>
                  <p className="text-slate-600 leading-relaxed italic border-l-4 border-primary pl-4 py-2">
                    We use only genuine BMW OEM parts for our services. This ensures your engine performs at its best and maintains the integrity of your vehicle.
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Search */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest italic">Find Your BMW Engine</h3>
                <form className="space-y-6">
                  <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#0033A0] flex flex-col items-center justify-center py-2 shrink-0 border-b border-[#0033A0]/50">
                       <span className="text-white font-black text-[0.6rem] tracking-[0.3em] uppercase">United Kingdom</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="ENTER REG" 
                      className="w-full bg-transparent text-slate-900 font-black text-2xl md:text-3xl px-3 py-5 focus:outline-none placeholder:text-slate-600/50 uppercase tracking-[0.25em] text-center"
                    />
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-emerald-500 text-white font-black py-5 px-6 rounded-2xl shadow-[0_10px_30px_rgba(25,135,84,0.3)] transition-all flex justify-center items-center gap-3 transform hover:-translate-y-1">
                    <Search className="w-6 h-6" /> INSTANT QUOTE
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

      {/* BMW MODELS GRID */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
             <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                <Settings className="w-4 h-4 animate-spin-slow" /> Vehicle Select
             </div>
             <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-8 underline-offset-8 decoration-primary/20">Find Your <span className="text-primary italic italic">BMW</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {bmwModels.map((model, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={model.link} className="block h-full">
                  <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 hover:bg-white hover:border-primary hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                    <div className="w-full aspect-square bg-white rounded-2xl flex flex-col items-center justify-center border border-slate-200 group-hover:border-primary/20 transition-colors bg-gradient-to-br from-white to-slate-50">
                       <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-300">Image Space</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight">
                      {model.title}
                    </h3>
                    <div className="flex items-center text-primary font-black text-[0.7rem] uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE OPTIONS GRID */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Reconditioned */}
            <div className="space-y-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight italic">Reconditioned BMW Engines</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Meticulously restored to optimal condition using BMW OEM parts. Each engine undergoes thorough inspection, cleaning, and replacement of all wear components.
              </p>
              <ul className="space-y-3 pt-4 font-bold text-sm uppercase tracking-widest text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Like-New Performance</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Full Professional Build</li>
              </ul>
            </div>

            {/* Used */}
            <div className="space-y-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight italic">Quality Used Engines</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Dependable high-quality used BMW engines thoroughly inspected and tested for performance. cost-effective alternative with confirmed mileage.
              </p>
              <ul className="space-y-3 pt-4 font-bold text-sm uppercase tracking-widest text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Thoroughly Tested</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Low Mileage Options</li>
              </ul>
            </div>

            {/* Rebuild & Replacement */}
            <div className="space-y-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight italic">Supply & Replacement</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Complete engine engine supply and replacement. We ensure timely delivery and professional fitting to get you back on the road quickly.
              </p>
              <ul className="space-y-3 pt-4 font-bold text-sm uppercase tracking-widest text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Nationwide Delivery</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Flawless Installation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="w-full lg:w-1/2">
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
                   <Image src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop" alt="Engine Shop" width={800} height={1000} className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-8 underline-offset-8 decoration-primary/20">Why Choose <span className="text-primary italic">Vogue Technics</span>?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <div className="text-primary font-black text-4xl">01.</div>
                      <h4 className="font-extrabold text-slate-900 text-xl uppercase tracking-tight">20+ Years Expertise</h4>
                      <p className="text-slate-600 leading-relaxed">Dedicated specialist experience in high-performance BMW engine systems.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="text-primary font-black text-4xl">02.</div>
                      <h4 className="font-extrabold text-slate-900 text-xl uppercase tracking-tight">Genuine OEM Parts</h4>
                      <p className="text-slate-600 leading-relaxed">We use only brand-certified parts for all rebuilds and replacements.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="text-primary font-black text-4xl">03.</div>
                      <h4 className="font-extrabold text-slate-900 text-xl uppercase tracking-tight">Competitive Price</h4>
                      <p className="text-slate-600 leading-relaxed">Save up to 40% on engine reconditioning with our low-price guarantee.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="text-primary font-black text-4xl">04.</div>
                      <h4 className="font-extrabold text-slate-900 text-xl uppercase tracking-tight">Full Warranty</h4>
                      <p className="text-slate-600 leading-relaxed">Comprehensive up to 6 months warranty on all engines for full peace of mind.</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-10 relative z-10">
           <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter italic">Book Your BMW <br/><span className="text-slate-950 underline underline-offset-8 decoration-white/30 decoration-[8px]">Engine Service</span> Today!</h2>
           <p className="text-emerald-100 text-xl md:text-2xl font-medium max-w-2xl mx-auto uppercase tracking-widest"> Ready to get your BMW back on the road with superior performance?</p>
           <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
             <Link href="/contact-us" className="bg-slate-900 hover:bg-slate-800 text-white font-black py-6 px-10 md:px-16 rounded-[2.5rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]">
               <Search className="w-8 h-8 text-primary" /> Book Appointment
             </Link>
             <a href="tel:01375531355" className="bg-white text-slate-900 font-black py-6 px-10 md:px-16 rounded-[2.5rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] hover:bg-slate-100">
               <Phone className="w-8 h-8 text-primary" /> 01375 531355
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
