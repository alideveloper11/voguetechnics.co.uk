"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import { Service } from "@/data/servicesData";

interface ServiceDetailClientProps {
  service: Service;
  relatedServices: Service[];
}

export default function ServiceDetailClient({ service, relatedServices }: ServiceDetailClientProps) {
  return (
    <main className="pt-20">
      {/* Service Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt={service.title}
            fill
            className="object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs items={[
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
              {service.icon} Specialist Care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight uppercase leading-none italic">
              {service.title} <span className="text-primary italic">Detail</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium mb-10">
              {service.shortDescription}
            </p>
            <div className="flex justify-start w-full">
              <RegSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Content Column */}
            <div className="w-full lg:w-2/3 space-y-16">
               {/* 5-6 Detailed Technical Paragraphs */}
               <div className="space-y-10">
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                   The <span className="text-primary italic">Expert Approach</span> to {service.title}
                 </h2>
                 <div className="w-24 h-1.5 bg-primary rounded-full mb-10"></div>
                 
                 <div className="grid grid-cols-1 gap-8">
                    {service.detailedParagraphs.map((para, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-8 rounded-[2rem] ${idx % 2 === 0 ? 'bg-slate-50 border border-slate-100' : 'bg-white border border-slate-50 shadow-sm'}`}
                      >
                         <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            {para}
                         </p>
                      </motion.div>
                    ))}
                 </div>
               </div>

               {/* Features Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                 {service.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-primary/50 transition-all shadow-xl group">
                      <div className="bg-primary/20 p-2 text-primary shadow-sm rounded-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                         <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-tight">{feature}</h4>
                        <p className="text-xs text-slate-400 leading-tight">Precision guaranteed for your {service.title.toLowerCase()}.</p>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">The Vogue Technics Advantage</h3>
                      <p className="text-emerald-50 text-base font-medium max-w-md">Our master technicians use only premium parts and specialized equipment to ensure your engine is rebuilt to factory standards.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                       <span className="bg-white/20 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest border border-white/20 backdrop-blur-md">20+ Years Exp</span>
                       <span className="bg-white/20 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest border border-white/20 backdrop-blur-md">Warranty Incl</span>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
               </div>
            </div>

            {/* Right Sidebar Form Column */}
            <div className="w-full lg:w-1/3 sticky top-32">
               <div className="bg-white border border-slate-100 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                 <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic leading-tight">Get a Quote for <br/><span className="text-primary italic">{service.title}</span></h3>
                 
                 <div className="space-y-6">
                    <RegSearch />

                    <div className="space-y-4 pt-4">
                       <a href="tel:01375531355" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-8 rounded-2xl shadow-xl transition-all flex justify-center items-center gap-4 uppercase tracking-[0.2em] text-sm group">
                          <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" /> 01375 531355
                       </a>
                       <p className="text-slate-400 text-[0.6rem] text-center font-bold uppercase tracking-widest">Available Mon—Sat: 8am — 6pm</p>
                    </div>
                 </div>

                 <div className="mt-10 pt-10 border-t border-slate-100 space-y-4">
                    <p className="text-slate-900 text-[0.6rem] font-black uppercase tracking-[0.3em] mb-6">Expert Engine Solutions:</p>
                    <div className="flex flex-col gap-3">
                       {relatedServices.map(s => (
                         <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                            <span className="text-slate-500 font-bold text-[0.7rem] uppercase tracking-tight group-hover:text-primary transition-colors">{s.title}</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                         </Link>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section (Pre-FAQ) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                 <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
                   Why <span className="text-primary italic">Trust</span> Vogue Technics?
                 </h3>
                 <div className="w-24 h-1.5 bg-primary rounded-full mx-auto"></div>
                 <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">Our commitment to 5-star engine excellence</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {service.preFaqParagraphs.map((para, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                    >
                       <div className="w-12 h-12 bg-slate-900 text-primary rounded-2xl mb-6 flex items-center justify-center font-black text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                          {idx + 1}
                       </div>
                       <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                          {para}
                       </p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <FAQSection 
        title={<>{service.title} <span className="text-primary italic">FAQs</span></>}
        items={service.faqs}
      />

      <ReviewsSection 
        subtitle={`Hear from our satisfied customers who have experienced our professional ${service.title.toLowerCase()} services.`}
      />
      <PartnerLogos />
    </main>
  );
}
