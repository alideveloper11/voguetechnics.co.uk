"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface RegSearchProps {
  className?: string;
}

export default function RegSearch({ className = "" }: RegSearchProps) {
  return (
    <div className={`w-full max-w-2xl bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative ${className}`}>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transition-transform focus-within:ring-2 focus-within:ring-white/50 focus-within:ring-offset-2 focus-within:ring-offset-slate-900">
          <div className="bg-[#0033A0] flex flex-col items-center justify-center px-4 py-2 w-20 md:w-24 shrink-0 border-r border-[#0033A0]/50 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-10 md:w-12 h-auto mb-1 rounded-sm shadow-sm">
              <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </svg>
            <span className="text-[#FACC15] font-black text-xs md:text-sm tracking-widest leading-none">UK</span>
          </div>
          <input
            type="text"
            placeholder="ENTER VEHICLE REG NUMBER"
            className="w-full bg-transparent text-slate-900 font-black text-lg md:text-xl px-2 sm:px-4 py-3 sm:py-4 focus:outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base placeholder:tracking-normal uppercase lg:tracking-wider placeholder:text-slate-500"
          />
        </div>
        <button className="bg-primary hover:bg-emerald-600 text-white font-black py-4 px-8 rounded-2xl shadow-[0_10px_30px_rgba(25,135,84,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 whitespace-nowrap uppercase tracking-widest">
          <Search className="w-6 h-6" />
          FIND ENGINE
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        <span className="text-slate-400">Don't have the Reg? </span>
        <Link href="/contact-us" className="text-primary font-bold hover:text-white transition-colors underline underline-offset-4">Find vehicle manually</Link>
      </div>
    </div>
  );
}
