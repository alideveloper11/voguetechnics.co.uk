import { services } from "@/data/servicesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Search, ChevronRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import React from 'react';
import { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    
    return {
      title: `${service.title} | Specialist Engine Repair | Vogue Technics`,
      description: service.shortDescription,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Content Column */}
            <div className="w-full lg:w-2/3 space-y-12">
               <div className="space-y-6">
                 <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight italic">The Importance of Correct <span className="text-primary italic">{service.title}</span></h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   {service.longDescription}
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {service.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all shadow-sm">
                      <div className="bg-white p-2 text-primary shadow-sm rounded-lg flex-shrink-0">
                         <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{feature}</h4>
                        <p className="text-sm text-slate-600 leading-tight">Professional standards met with every {service.title.toLowerCase()} we perform.</p>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group border-b-4 border-primary">
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-extrabold uppercase tracking-tight italic">Why trust Vogue Technics?</h3>
                      <p className="text-slate-400 max-w-md">Our master technicians use only premium parts and specialized equipment to ensure your engine is rebuilt to factory standards.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                       <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">20+ Years Exp</span>
                       <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Warranty Incl</span>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
               </div>
            </div>

            {/* Right Sidebar Form Column */}
            <div className="w-full lg:w-1/3 sticky top-32">
               <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                 <h3 className="text-2xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight italic leading-tight">Get a Quote for <br/><span className="text-primary italic">{service.title}</span></h3>
                 
                 <form className="space-y-4">
                   <div className="flex overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transition-transform focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-white mb-6">
                      <div className="bg-[#0033A0] flex flex-col items-center justify-center px-2 py-2 w-14 shrink-0 border-r border-[#0033A0]/50 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-auto mb-1 rounded-sm shadow-sm">
                          <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                        </svg>
                        <span className="text-[#FACC15] font-bold text-[10px] tracking-widest leading-none">UK</span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="ENTER REG" 
                        className="w-full bg-transparent text-slate-800 font-bold text-xl px-4 py-3 focus:outline-none placeholder:text-slate-600 uppercase tracking-widest"
                      />
                   </div>

                   <div className="space-y-4">
                      <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all flex justify-center items-center gap-2 transform hover:-translate-y-1 uppercase tracking-widest text-sm">
                        <Search className="w-5 h-5" /> Get Instant Quote
                      </button>
                      <a href="tel:01375 531355" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all flex justify-center items-center gap-2 uppercase tracking-widest text-sm">
                         <Phone className="w-5 h-5 text-primary" /> Call 01375 531355
                      </a>
                   </div>
                 </form>

                 <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Other Related Services:</p>
                    <div className="flex flex-col gap-2">
                       {services.filter(s => s.slug !== slug).slice(0, 3).map(s => (
                         <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group">
                            <span className="text-slate-600 font-bold text-xs uppercase tracking-tight group-hover:text-primary transition-colors">{s.title}</span>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                         </Link>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}
