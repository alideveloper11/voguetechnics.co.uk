"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Search, Phone, Wrench, Award, Car, Gauge, Activity } from "lucide-react";
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
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-none uppercase italic"
          >
            Our Specialist <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-12"
          >
            From precision head gasket repairs to complete high-performance engine reconditioning. We maintain the highest standards for the UK's most prestigious automotive brands.
          </motion.p>
          <div className="flex justify-center w-full max-w-2xl mx-auto">
             <RegSearch />
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Technical <span className="text-primary">Services</span></h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        <ServicesSection showTitle={false} />
      </section>

      {/* TOP QUALITY SPECIALIST SECTION - AS PER IMAGE */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left: Image with Lift */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image 
                   src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" 
                   alt="Modern Workshop Lift" 
                   width={800} height={1000} 
                   className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-10 left-10 bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                   <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-1">Expert Technicians</h4>
                   <p className="text-primary text-xs font-bold uppercase tracking-widest">State of the art repairs and diagnostics</p>
                </div>
              </div>
            </div>
            {/* Right: Modern Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none italic">
                Top-Quality <span className="text-primary italic italic">Range Rover</span> Engine Repair Specialist
              </h2>
              <div className="space-y-6 text-slate-600 text-base leading-relaxed font-medium">
                <p>
                   With over 20 years of experience facilitating Range Rover owners, we strive to provide the best servicing and fitting facility to the locals of Grays, Essex, regardless of what model of Range Rover they drive. As a trusted Range Rover Engine Specialist and Land Rover Specialist, our workshop is the preferred choice for drivers searching for a Range Rover Engine Specialist near me or a Land Rover Engine Specialist near me for repairs, fitting, or professional diagnostics.
                </p>
                <p>
                   With substantial investment in state-of-the-art facilities and the most updated equipment specialised for Range Rover engine repair, servicing, and fitting of engines, we are the top choice for locals and have gained their trust through dedication to our craft.
                </p>
                <p>
                   Our testimonials prove the quality and devotion we bring to our services and our clients. Visit us for complete peace of mind, expert service, and trusted workmanship backed by true specialists in Range Rover engine works, <Link href="/bmw-engines" className="text-primary underline font-bold">BMW engines</Link> repair and Land Rover engine rebuild services.
                </p>
              </div>
              <div className="pt-4">
                 <Link href="/contact-us" className="inline-flex items-center gap-4 text-primary font-black text-2xl hover:translate-x-4 transition-transform uppercase tracking-tighter italic">
                   Consult Our Techs <ArrowRight className="w-8 h-8" />
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
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">Choose Your <span className="text-primary">Engine Model</span></h2>
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

      {/* SIMPLE STYLE CONTENT SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -mr-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Precision Engineering & <span className="text-primary">Reliability</span></h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                       <p className="text-slate-400 text-base leading-relaxed font-medium">
                          At Vogue Technics, we believe that every engine deserves a second chance at perfection. Our workshop is designed as a sanctuary for high-performance engineering, where decades of experience meet modern diagnostic precision. We don't just fix engines; we restore confidence.
                       </p>
                       <p className="text-slate-400 text-base leading-relaxed font-medium">
                          Our commitment to quality starts with the parts we use. We prioritize OEM-equivalent or superior components for every rebuild, ensuring your vehicle maintains its factory refinement and power delivery for the long haul.
                       </p>
                    </div>
                    <div className="space-y-6">
                       <p className="text-slate-400 text-base leading-relaxed font-medium">
                          From the complex timing chain systems of Audi and BMW to the high-torque diesel blocks of Land Rover and Range Rover, our technicians have encountered every major factory flaw and engineered specific, lasting fixes for each one.
                       </p>
                       <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                          <p className="text-primary font-bold italic mb-4">"Our mission is to save our customers from the exorbitant costs of main dealers without compromising an ounce of quality or technical accuracy."</p>
                          <span className="text-[0.6rem] uppercase tracking-widest font-black text-slate-500">— Vogue Technics Operations Director</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <ReviewsSection 
        title="What Our Customers Say" 
        subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." 
      />

      <FAQSection />

      {/* Call to Action */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">Need an <span className="text-slate-950">Expert Opinion</span>?</h2>
          <p className="text-emerald-100 text-lg mb-16 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Our master technicians are ready to diagnose and resolve your engine issues properly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a href="tel:01375531355" className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-lg md:text-xl flex items-center gap-4 group">
               <Phone className="w-8 h-8 text-primary" /> Call 01375 531355
             </a>
             <a href="/contact-us" className="bg-white text-slate-950 font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-lg md:text-xl border-4 border-slate-950/10">
               Get Free Quote
             </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      <PartnerLogos />
    </main>
  );
}
