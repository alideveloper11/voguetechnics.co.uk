import { Metadata } from "next";
import ServicesSection from "@/components/common/ServicesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Image from "next/image";
import React from 'react';

export const metadata: Metadata = {
  title: "Specialist Engine Services | Head Gasket, Timing Chain & More | Vogue Technics",
  description: "Vogue Technics offers a full range of expert engine services including head gasket replacement, timing chain repair, turbo solutions, and full engine rebuilds.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Vogue Technics Workshop"
            fill
            className="object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase">
              Professional Engine Care
            </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-none uppercase italic">
            Specialist <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            From precision head gasket repairs to complete engine rebuilds, our specialist facility handles it all with over 20 years of expertise.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection showTitle={false} />

      {/* Trust sections */}
      <ReviewsSection />
      <FAQSection />

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-tight italic">Need an Expert Opinion?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto font-medium">
            Our master technicians are ready to diagnose and resolve your engine issues properly. Contact us for a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a href="tel:01375 531355" className="bg-white text-primary font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-slate-50 transition-all uppercase tracking-widest">
               Call 01375 531355
             </a>
             <a href="/contact-us" className="bg-primary-dark text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition-all uppercase tracking-widest border border-white/20">
               Request Quote Online
             </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
      </section>
    </main>
  );
}
