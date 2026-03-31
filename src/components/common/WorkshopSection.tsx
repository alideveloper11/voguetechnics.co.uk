"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorkshopSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          
          {/* CONTENT LEFT */}
          <div className="w-full lg:w-1/2 space-y-10 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md border border-emerald-100">
                <MapPin className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Workshop
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-xs border-b-2 border-emerald-100 pb-2 inline-block">Address</h3>
                <p className="text-slate-700 font-semibold text-lg leading-snug">
                  Unit 1D Hedley Ave <br />
                  Grays RM20 4EL <br />
                  United Kingdom
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-xs border-b-2 border-emerald-100 pb-2 inline-block">Contact</h3>
                <div className="space-y-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-400 font-bold uppercase text-[0.65rem] tracking-tight">Phone:</span>
                    <a href="tel:01375531355" className="text-slate-700 font-bold text-lg hover:underline decoration-emerald-500 decoration-2 transition-all">01375 531355</a>
                  </div>
                  <div className="flex flex-col gap-1 pt-2">
                    <span className="text-slate-400 font-bold uppercase text-[0.65rem] tracking-tight">Email:</span>
                    <a href="mailto:sales@voguetechnics.co.uk" className="text-slate-700 font-bold text-lg hover:underline decoration-emerald-500 decoration-2 transition-all lowercase">sales@voguetechnics.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-xs border-b-2 border-emerald-100 pb-2 inline-block">Opening Hours</h3>
              <div className="space-y-2 text-slate-700 font-bold italic text-lg leading-relaxed">
                <p>Monday - Friday: <span className="text-slate-900 font-black tracking-tight">9:00 AM - 6:00 PM</span></p>
                <p>Saturday: <span className="text-slate-900 font-black tracking-tight">7:00 AM - 1:00 PM</span></p>
                <p>Sunday: <span className="text-red-500">Closed</span></p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 px-10 rounded-2xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-1 uppercase tracking-widest group text-sm">
                BOOK YOUR SERVICE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: MAP & CONTACT */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div 
              style={{ rotate: 2 }}
              whileHover={{ rotate: 0 }}
              className="relative w-full max-w-[550px] aspect-[16/11] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transition-all duration-700 bg-white"
            >
              <Image 
                src="/images/workshop_map.png" 
                alt="Vogue Technics Workshop Location" 
                fill 
                className="object-cover" 
              />
              
              {/* GOOGLE MAPS STYLE CARD */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-[2rem] shadow-2xl border border-white/20 max-w-[240px] hidden md:block">
                 <div className="font-black text-slate-900 text-base leading-tight">Vogue Technics</div>
                 <div className="text-[0.65rem] text-slate-500 mt-2 font-bold leading-relaxed uppercase tracking-tight">Unit 1D Hedley Ave, Grays RM20 4EL</div>
                 <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                    <div className="flex text-orange-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <span className="text-[0.65rem] text-slate-400 font-bold">4.9 (159)</span>
                 </div>
                 <div className="mt-4">
                    <a href="https://maps.google.com/?q=Vogue+Technics+RM20+4EL" target="_blank" className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-600 font-black text-[0.65rem] py-2 px-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all uppercase tracking-widest">
                       Directions
                    </a>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
