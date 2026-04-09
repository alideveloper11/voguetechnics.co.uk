import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Activity, 
  Clock, 
  Users, 
  AlertTriangle,
  RotateCcw,
  Video,
  Info,
  BadgeCheck,
  Zap,
  Phone,
  MessageCircle
} from "lucide-react";
import { authors } from "@/data/authorsData";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";
import React from "react";

// THIS IS NOW THE MAIN /VIC ROUTE
export const metadata: Metadata = {
  title: "Vic | Senior Workshop Manager & JLR Engine Specialist | Vogue Technics",
  description: "Senior Technical expert with 20+ years of experience, exclusively focused on Jaguar Land Rover engine remanufacturing for the past 15 years.",
};

export default function VicProfilePage() {
  const author = authors.find((a) => a.slug === "vic");

  if (!author) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.role,
    "worksFor": {
      "@type": "Organization",
      "name": "Vogue Technics"
    },
    "description": author.shortBio,
    "image": author.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Grays",
      "addressRegion": "Essex"
    },
    "knowsAbout": ["Jaguar Land Rover Engines", "AJ133 Supercharged", "306DT TDV6", "Ingenium Diesel", "Engine Remanufacturing"]
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO HEADER */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-slate-900 to-slate-900" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs items={[
            { name: "About Us", href: "/about-us" },
            { name: author.name, href: `/vic` }
          ]} />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center mt-12">
            <div className="relative group shrink-0">
               <div className="w-56 h-56 md:w-80 md:h-80 relative rounded-[3rem] overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(25,135,84,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                 <BadgeCheck className="w-8 h-8 text-primary" />
                 <div>
                    <div className="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest leading-none">Verified</div>
                    <div className="text-sm font-black text-slate-900 uppercase italic">Lead technical expert</div>
                 </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-6 flex-1">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-bold tracking-widest text-[0.7rem] uppercase border border-primary/30 italic">
                  Lead Technical Expert
                 </span>
                 <span className="inline-block py-1 px-4 rounded-full bg-slate-800 text-slate-300 font-bold tracking-widest text-[0.7rem] uppercase border border-slate-700 italic">
                  20+ Years Experience
                 </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                {author.name}
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-bold italic tracking-tight uppercase leading-tight max-w-2xl">
                 Senior Workshop Manager <br className="hidden md:block" /> 
                <span className="text-white">& JLR Engine Specialist</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-primary" /> RAC Approved
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    <Award className="w-4 h-4 text-primary" /> NVQ Level 3
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    <Activity className="w-4 h-4 text-primary" /> Grays, Essex
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <div className="relative -mt-12 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {author.stats.map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:border-primary/50 transition-all transform hover:-translate-y-1">
                <div className="text-5xl font-black text-slate-900 group-hover:text-primary transition-colors italic">{stat.value}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-[0.65rem] mt-2 italic">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BACKGROUND & VIDEO POLICY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="w-full lg:w-3/5 space-y-10">
                 <div className="space-y-4">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Professional <span className="text-primary italic">Background</span></h2>
                    <div className="w-24 h-2 bg-primary rounded-full group-hover:w-32 transition-all" />
                 </div>
                 <div className="space-y-8 text-xl text-slate-700 leading-relaxed font-medium italic">
                    {author.detailedBio.map((para, i) => (
                       <p key={i} className={i === 0 ? "first-letter:text-8xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:leading-none" : ""}>
                          {para}
                       </p>
                    ))}
                 </div>
              </div>
              
              <div className="w-full lg:w-2/5 relative">
                 <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-2xl border-b-[12px] border-primary relative overflow-hidden group h-full flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[80px]" />
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-10 relative">
                       <Video className="w-10 h-10 text-primary animate-pulse" />
                       <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
                    </div>
                    <blockquote className="text-3xl font-black uppercase italic leading-tight mb-8">
                       "{author.quote}"
                    </blockquote>
                    <p className="text-slate-400 text-lg font-bold italic border-l-4 border-primary pl-6">
                       — Vic's WhatsApp Video Transparency Policy
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CORE ENGINE EXPERTISE GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none text-center">Core JLR Engine <br className="md:hidden" /> <span className="text-primary italic">Expertise</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.75rem] max-w-xl mx-auto">Vic specialises in the following JLR engine families, with detailed knowledge of each unit's failure modes.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {author.engineExpertise.map((eng, i) => (
                 <div key={i} className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col group hover:shadow-2xl transition-all hover:border-primary/20 relative overflow-hidden h-full">
                    <div className="absolute top-10 right-10 text-[0.65rem] font-bold text-slate-300 uppercase tracking-widest border border-slate-100 px-4 py-1.5 rounded-full group-hover:border-primary/20 group-hover:text-primary transition-colors">
                       {eng.engineCode}
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl w-fit mb-8 text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                       <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic leading-none mb-3">{eng.title}</h3>
                    <div className="text-primary font-black uppercase italic text-[11px] tracking-tight mb-8 leading-relaxed max-w-[80%]">{eng.subtitle}</div>
                    
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 italic">"{eng.description}"</p>
                    
                    <div className="space-y-6 flex-1">
                       <div className="bg-red-50/40 p-6 rounded-[2.5rem] space-y-4 border border-red-50">
                          <div className="flex items-center gap-2 text-red-600 font-black uppercase italic text-[0.7rem] tracking-widest">
                             <AlertTriangle className="w-4 h-4" /> Common Faults
                          </div>
                          <ul className="grid grid-cols-1 gap-2">
                             {eng.commonFaults.map((fault, fi) => (
                                <li key={fi} className="text-slate-700 text-[13px] font-bold tracking-tight flex items-center gap-3 italic">
                                   <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" /> {fault}
                                </li>
                             ))}
                          </ul>
                       </div>
                       
                       <div className="bg-emerald-50/40 p-6 rounded-[2.5rem] space-y-4 border border-emerald-50">
                          <div className="flex items-center gap-2 text-primary font-black uppercase italic text-[0.7rem] tracking-widest">
                             <RotateCcw className="w-4 h-4" /> Rebuild Includes
                          </div>
                          <ul className="grid grid-cols-1 gap-2">
                             {eng.rebuildIncludes.map((inc, ii) => (
                                <li key={ii} className="text-slate-700 text-[13px] font-bold tracking-tight flex items-start gap-3 italic">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" /> <span>{inc}</span>
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* VIC METHODOLOGY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">The <span className="text-primary italic">"{author.name}" Methodology</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.7rem] max-w-xl mx-auto">"Engine rebuilding is a precision art. Quality is never compromised for speed."</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {author.methodology.map((meth, i) => (
                 <div key={i} className="relative bg-white p-8 rounded-[3rem] border-b-4 border-slate-100 hover:border-primary hover:bg-slate-50 transition-all group overflow-hidden shadow-sm flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="text-5xl font-black text-slate-100 group-hover:text-primary transition-colors mb-6 italic tracking-tighter mix-blend-multiply">{meth.step}</div>
                    <h4 className="text-xl font-black text-slate-900 uppercase italic leading-tight mb-4">{meth.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{meth.description}</p>
                 </div>
              ))}
           </div>
           
           <div className="mt-20 bg-slate-900 p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-3xl" />
              <p className="text-2xl md:text-5xl text-white font-black uppercase italic tracking-tighter leading-tight relative z-10 max-w-4xl mx-auto">
                 "This discipline separates a rebuild that <br className="hidden md:block" /> lasts a <span className="text-primary italic">decade</span> from one that <br className="hidden md:block" /> fails within <span className="text-red-500 italic">two years</span>."
              </p>
           </div>
        </div>
      </section>

      {/* TECH CREDENTIALS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Technical <span className="text-primary italic">Credentials</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {author.technicalCredentials.map((cred, i) => (
                 <div key={i} className="bg-white p-12 rounded-[4rem] border border-slate-100 flex flex-col items-center text-center group shadow-sm hover:shadow-2xl transition-all h-full">
                    <div className="p-4 bg-primary/10 rounded-3xl text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                       <Award className="w-12 h-12" />
                    </div>
                    <div className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Official Certification</div>
                    <h4 className="text-3xl font-black text-slate-900 uppercase italic leading-none mb-1">{cred.type}</h4>
                    <div className="text-primary font-black uppercase italic text-[11px] tracking-tight mb-8">{cred.title}</div>
                    <p className="text-slate-500 text-[13px] font-medium leading-relaxed italic px-2">"{cred.description}"</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="bg-primary p-12 md:p-24 rounded-[5rem] text-white shadow-[0_50px_150px_-30px_rgba(25,135,84,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-80 -mt-80 blur-[130px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl mx-auto space-y-14">
                 <div className="space-y-6">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.9]">
                       Book a Direct <br className="hidden md:block" />Technical <span className="text-slate-900 italic">Consultation</span>
                    </h2>
                    <div className="text-emerald-50 text-xl font-black uppercase tracking-widest italic flex flex-wrap justify-center items-center gap-4">
                       No Pressure <div className="w-2.5 h-2.5 rounded-full bg-slate-900" /> No Upselling <div className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Straight Advice
                    </div>
                 </div>
                 
                 <div className="flex flex-col lg:flex-row gap-6 justify-center">
                    <a href="tel:01375 531355" className="flex items-center justify-center gap-4 bg-white text-primary font-black px-12 py-8 rounded-[2.5rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-2xl transform hover:-translate-y-2 flex-1">
                       <Phone className="w-8 h-8" /> Call Direct
                    </a>
                    <a 
                       href="https://wa.me/441375531355" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center gap-4 bg-emerald-500 text-white font-black px-12 py-8 rounded-[2.5rem] shadow-2xl hover:bg-emerald-400 transition-all uppercase tracking-widest text-2xl transform hover:-translate-y-2 flex-1"
                    >
                       <MessageCircle className="w-8 h-8" /> WhatsApp
                    </a>
                    <Link href="/contact-us" className="flex items-center justify-center gap-4 bg-slate-900 text-white font-black px-12 py-8 rounded-[2.5rem] shadow-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-2xl transform hover:-translate-y-2 flex-1">
                       <Activity className="w-8 h-8" /> Get Quote
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}
