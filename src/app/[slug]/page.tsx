import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";

// Utility to format slug into title ("audi-a1-engines" -> "Audi A1 Engines")
function formatTitle(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = formatTitle(slug);
  
  // Pattern: [Model Name] engine for sale | reconditioned & used | Vogue Technics
  return {
    title: `${formattedTitle} engine for sale | reconditioned & used | Vogue Technics`,
    description: `Buy top quality reconditioned & used engines for your ${formattedTitle}, lowest online rates, fitting or UK wide delivery offered, years of experience, get engine quotes today.`,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} engine for sale | Vogue Technics`,
      description: `Buy top quality reconditioned & used engines for your ${formattedTitle}. Lowest online rates.`,
      url: `https://www.voguetechnics.co.uk/${slug}`,
    }
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Protect against weird URLs
  if (!slug || slug.length > 80) {
    notFound();
  }

  const formattedTitle = formatTitle(slug);
  const isPart = !slug.includes("engines");
  const extractedPartName = isPart ? formattedTitle : slug.split('-').slice(-1)[0] === 'engines' ? formatTitle(slug.split('-').slice(-2, -1)[0]) : 'Part';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#146c43]/20">
          <Image
            src="/images/car_bgg.jpg"
            alt={formattedTitle}
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <Breadcrumbs items={[{ name: formattedTitle, href: `/${slug}` }]} />
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
            Specialist Supply & Fit
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {formattedTitle}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            We provide fully tested, high-performance <strong className="text-white font-semibold">{formattedTitle}</strong>. Benefit from our 20+ years of industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:01375 531355" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" /> Let's Talk: 01375 531355
            </a>
            <Link href="/contact-us" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Description */}
          <div className="w-full lg:w-2/3 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Premium Quality <span className="text-primary">{formattedTitle}</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                When you are looking for reliable <strong>{formattedTitle}</strong>, Vogue Technics is your ultimate destination. We specialise in offering low-mileage, thoroughly inspected engines and parts to get your vehicle running smoothly again.
              </p>
              <p>
                Our rigorous testing procedures ensure that every component we supply meets or exceeds OEM specifications. Our in-house engine shop is equipped with the latest diagnostic tools, enabling us to provide top-tier supply and fit services for {formattedTitle}.
              </p>
              <p>
                Whether you opt for a used replacement or a fully reconditioned unit, our seasoned mechanics execute precise fittings to guarantee peak performance and longevity. Explore our massive stock and take advantage of our industry-leading warranty for complete peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Thoroughly Tested</h4>
                  <p className="text-sm text-slate-600">Every unit undergoes strict quality control and compression testing before dispatch.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:border-primary/30 transition-colors">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Extended Warranty</h4>
                  <p className="text-sm text-slate-600">Complete peace of mind with our comprehensive warranty covering all parts and labor.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Reg Search Form */}
          <div className="w-full lg:w-1/3 sticky top-32">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-10 -mt-10 rounded-full pointer-events-none"></div>
               <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Find Your {extractedPartName}</h3>
               
               <form className="space-y-4 relative z-10">
                 <div>
                   <label className="text-sm font-semibold text-slate-300 mb-2 block">Enter Vehicle Registration</label>
                   <div className="flex overflow-hidden rounded-xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transition-transform focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-slate-900 mt-1">
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
                       placeholder="AB12 CDE" 
                       className="w-full bg-transparent text-slate-800 font-bold text-lg px-3 py-3 focus:outline-none placeholder:text-slate-600 uppercase tracking-widest"
                     />
                   </div>
                 </div>
                 
                 <div className="pt-2">
                   <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(25,135,84,0.3)] transition-all flex justify-center items-center gap-2 transform hover:-translate-y-1">
                     <Search className="w-5 h-5" /> Get Exact Quote
                   </button>
                 </div>
               </form>
               
               <p className="text-slate-400 text-sm text-center mt-6 relative z-10">
                 Or speak to our experts instantly: <br/> <a href="tel:01375531355" className="text-white font-bold hover:text-primary transition-colors mt-2 inline-block text-xl tracking-wider">01375 531355</a>
               </p>
            </div>
          </div>
          
        </div>
      </div>
      <PartnerLogos />
    </div>
  );
}
