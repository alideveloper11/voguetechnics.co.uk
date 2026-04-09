import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Users, Award, Clock, Star, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";
import ReviewsSection from "@/components/common/ReviewsSection";
import LatestVideos from "@/components/common/LatestVideos";
import { authors } from "@/data/authorsData";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Specialist Engine Rebuilds & Parts | Vogue Technics",
  description: "Learn about Vogue Technics, our 20+ years of expertise in the automobile industry, and our dedication to providing premium reconditioned engines and professional fitting services.",
};

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      {/* PREMIUM HERO HEADER */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2600&auto=format&fit=crop"
            alt="Vogue Technics Engine Workshop"
            fill
            className="object-cover opacity-30 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
          
          <div className="max-w-4xl mt-8">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-bold tracking-widest text-xs mb-6 border border-primary/30 uppercase italic">
              Our Legacy of Excellence
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-none uppercase italic">
              Pioneering <span className="text-primary italic">Engine</span> <br/>
              <span className="text-white underline decoration-primary/30 decoration-[10px] underline-offset-[12px]">Rebuilding Since 2004</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
              Over two decades of precision engineering, restoring thousands of Range Rovers, Land Rovers, and premium European vehicles to factory performance.
            </p>
          </div>
        </div>
      </section>



      {/* MAIN STORY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left Narrative */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                  The UK's Most Trusted <br/>
                  <span className="text-primary italic">Engine Specialist</span>
                </h2>
                <div className="w-20 h-2 bg-primary rounded-full" />
              </div>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Our success story started 20 years ago when we single-mindedly aimed to become the most reliable and trustworthy name in providing Land Rover and Range Rover new, used and remanufactured engines.
                </p>
                <p>
                  We understood that to achieve our aim to become the best we would require a purpose-built state of the art facility that would compliment Land Rover and Range Rover setup. So, we set about to purchase and setup equipment that was especially helpful in fixing and rebuilding the specific brand that we were eyeing from day one.
                </p>
                <p>
                  Today, Vogue Technics has become a landmark for European engine repair. From precision head gasket replacements to complete engine swaps, our master technicians bring unparalleled expertise to every project.
                </p>
              </div>

              {/* Stats Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                 <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm transition-all hover:border-primary/20 hover:bg-white group">
                    <Users className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">10k+</div>
                    <div className="text-slate-500 font-bold uppercase tracking-widest text-[0.65rem] mt-1">Happy Clients Nationwide</div>
                 </div>
                 <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white border-b-4 border-primary shadow-xl group">
                    <Clock className="w-10 h-10 text-primary mb-4 group-hover:rotate-12 transition-transform" />
                    <div className="text-4xl font-black tracking-tighter italic">20+</div>
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-[0.65rem] mt-1">Years of Precision Engineering</div>
                 </div>
              </div>
            </div>

            {/* Right Media Display */}
            <div className="w-full lg:w-2/5 xl:w-1/2 relative">
              <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(25,135,84,0.3)] border-8 border-slate-50 aspect-[4/5] lg:aspect-square group">
                <Image
                  src="/images/expert-mechanicss.webp"
                  alt="Vogue Technics Expert Mechanics"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl">
                   <h3 className="text-white text-3xl font-black uppercase tracking-tighter italic italic">Master <br/>Craftsmanship</h3>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full border-8 border-white shadow-2xl flex flex-col items-center justify-center p-4 text-center text-white rotate-12">
                 <Shield className="w-10 h-10 mb-2" />
                 <span className="text-[0.6rem] font-black uppercase tracking-widest leading-none">Full UK <br/>Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC AUTHOR PROFILE SECTION FOR SEO */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="bg-slate-900 rounded-[4rem] p-8 md:p-16 text-white relative shadow-2xl overflow-hidden group">
              {/* Decor */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                 {/* Author Image */}
                 <div className="w-56 h-56 md:w-80 md:h-80 relative rounded-[3rem] overflow-hidden border-4 border-primary shadow-2xl shrink-0 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <Image
                       src={authors[0].image}
                       alt={authors[0].name}
                       fill
                       className="object-cover"
                    />
                 </div>

                 {/* Author Content */}
                 <div className="flex-1 space-y-8 text-center lg:text-left">
                    <div className="space-y-2">
                       <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-black tracking-widest text-[0.65rem] uppercase italic border border-primary/30">
                          Lead Technical Expert & JLR Specialist
                       </span>
                       <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
                          Meet <span className="text-primary italic">{authors[0].name}</span>
                       </h3>
                    </div>
                    
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium italic">
                       "{authors[0].shortBio}"
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                       <Link 
                          href="/vic"
                          className="group/btn inline-flex items-center gap-3 bg-white text-slate-900 font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-100 transition-all uppercase tracking-widest text-sm transform hover:-translate-y-1"
                       >
                          View Full Profile <Users className="w-5 h-5 text-primary group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                       
                       <div className="flex items-center gap-4 py-2 px-6 bg-slate-800 rounded-full border border-slate-700">
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-300 italic">20+ Years Experience</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CORE VALUES / QUALITY SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6 text-center">
                 <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-inner">
                    <Award className="w-10 h-10" />
                 </div>
                 <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Highest Standards</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   We use only genuine OEM parts or better ensuring that every rebuild exceeds factory specifications for longevity.
                 </p>
              </div>
              <div className="space-y-6 text-center">
                 <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-inner">
                    <Star className="w-10 h-10" />
                 </div>
                 <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Quality Tested</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Every engine undergoes rigorous compression and thermal testing in our state-of-the-art diagnostic bay before release.
                 </p>
              </div>
              <div className="space-y-6 text-center">
                 <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                 </div>
                 <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Peace of Mind</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Our comprehensive 12-month written warranty covers parts and labor, backed by our 20-year reputation.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* NEW DYNAMIC REVIEWS SECTION */}
      <ReviewsSection 
        title="Verified Excellence"
        subtitle="Hear from the thousands of luxury car owners who trust Vogue Technics for their engine restoration."
      />

      {/* LATEST VIDEOS COMPONENT */}
      <LatestVideos />

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden text-center">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-10">
            Trust the <span className="text-slate-900">Engine Experts</span>
          </h2>
          <p className="text-emerald-50 text-xl font-bold uppercase tracking-widest mb-12 max-w-2xl mx-auto">
            Ready to restore your vehicle? Speak to our master technicians today and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="tel:01375 531355" className="bg-white text-primary font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-xl transform hover:-translate-y-2">
               Call 01375 531355
             </a>
             <a href="/contact-us" className="bg-slate-900 text-white font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xl transform hover:-translate-y-2 border-b-4 border-emerald-500">
               Request a Quote
             </a>
          </div>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mb-32 blur-3xl pointer-events-none" />
      </section>

      <PartnerLogos />
    </main>
  );
}
