"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Gauge, ShieldCheck, AlertTriangle } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

export default function TimingBeltReplacementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Timing belt replacement specialists"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Timing Belt Replacement", href: "/services/timing-belt-replacement" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight italic"
            >
              Timing Belt Replacement Specialists{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
              <RegSearch />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl mx-auto text-slate-300 leading-relaxed font-medium space-y-6 text-sm md:text-base"
            >
              <p>
                A timing belt does not warn you before it snaps. There is no gradual performance decline, no persistent warning
                light, no sound that builds over weeks until you cannot ignore it. On most engines, a snapped timing belt causes
                immediate and catastrophic internal damage   bent valves, destroyed pistons, a repair bill that dwarfs what the belt
                replacement would have cost.
              </p>
              <p>
                At Vogue Technics, we carry out timing belt and cambelt replacement for Range Rover, Land Rover, Jaguar, Audi, and
                BMW. Every replacement uses OEM or OEM-specification parts, every job is backed by a six-month warranty, and every
                written quote is agreed before work begins. Based in , with UK-wide collection available.
              </p>
              <p>
                If your vehicle is approaching its timing belt service interval   or if you are not sure when it was last changed  
                do not leave it to chance.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="bg-primary text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get a Free Timing Belt Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="bg-white text-slate-950 font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Call Us Today
              </a>
              <Link
                href="/contact-us"
                className="bg-white/15 text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Book a Timing Belt Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Belt vs chain */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Timing Belt or Timing Chain <span className="text-primary">  Does Your Vehicle Have One?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-12">
            <p>
              This is one of the most common questions we receive, and it is an important one   because the answer determines
              whether your vehicle has a component with a finite service life that needs replacing at regular intervals.
            </p>
            <p>
              A timing belt   also called a cambelt   is a rubber reinforced belt that synchronises the crankshaft and camshaft
              rotation. It degrades over time regardless of mileage and has a manufacturer replacement interval based on mileage or
              age. A timing chain performs the same function but is a metal component lubricated by engine oil and is designed to
              last the life of the engine under normal conditions (though it can develop wear and noise on certain platforms).
            </p>
            <p>
              Many modern JLR, Audi, and BMW platforms use timing chains rather than belts. However, several platforms within these
              ranges   particularly older diesel engines   do use a timing belt. We advise on this at the point of enquiry, free of
              charge.
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                Check Whether Your Vehicle Has a Timing Belt or Chain <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Warning Signs Your Timing Belt <span className="text-primary">Needs Attention</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Noisy front end",
                text: "A high-pitched squealing or ticking sound from the front of the engine can indicate a worn belt or a failing tensioner.",
              },
              {
                title: "Visible cracking / fraying",
                text: "Cracking, fraying, or glazing on the belt surface   if visible during service   indicates replacement is overdue.",
              },
              {
                title: "Rough running",
                text: "Misfires, rough running, or difficult starting can sometimes be traced to a belt that has slipped on a worn tensioner.",
              },
              {
                title: "Unknown history",
                text: "If you cannot confirm when the belt was last replaced, treat it as overdue and book an inspection.",
              },
              {
                title: "Tensioners matter",
                text: "A new belt fitted onto a worn tensioner is a false economy. We inspect and replace tensioners and idlers as part of the job.",
              },
              {
                title: "Failure is catastrophic",
                text: "On interference engines, a snapped belt usually causes immediate internal damage. Prevention is always cheaper.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{c.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By vehicle - keep core copy + internal link placeholders */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Timing Belt Replacement <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Range Rover Timing Belt Replacement",
                body:
                  "Current Range Rover engines across TDV6, SDV6, TDV8 and Ingenium platforms use timing chains rather than belts. However, older petrol and diesel variants within the Range Rover range do carry timing belts and these require replacement at the manufacturer interval. If you cannot confirm belt history, a specialist inspection is the correct first step. We confirm belt vs chain for every model at enquiry and quote in writing.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Timing Belt Replacement",
                body:
                  "Land Rover timing belt replacement is most relevant across older Discovery and Freelander platforms   particularly 2.7 TDV6 and TD4 diesel engines. We advise on platform-specific intervals and carry out every cambelt replacement with the full kit, tensioner and idlers, plus water pump where belt-driven, followed by a post-replacement check before return.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Timing Belt Replacement",
                body:
                  "Jaguar timing belt replacement applies most directly to older diesel and petrol platforms. Many current models use timing chains, but older XF/XJ/X-Type variants can carry belts. We advise on correct intervals and carry out every cambelt replacement with the full kit   belt, tensioner, idlers and water pump where applicable.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi Timing Belt Replacement",
                body:
                  "Audi timing belt replacement is critical across the TDI diesel range. The 2.0 TDI in A3/A4/A5/A6/Q5 uses a timing belt   not a chain   and age-based replacement is commonly overlooked. We replace belts with the full kit and water pump where belt-driven, and quote in writing after confirming platform and interval status.",
                href: "/audi-engines",
              },
              {
                title: "BMW Timing Belt Replacement",
                body:
                  "BMW timing belt replacement applies to specific older diesel platforms (notably M47). Many newer BMW engines use chains, including the N47 which has its own timing chain concerns. We confirm belt vs chain for your exact model at enquiry and complete full belt services with tensioners, idlers and water pump assessment.",
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-6">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{item.body}</p>
                <div className="pt-8 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Timing Belt Service <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose + process */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-primary/20 blur-[160px] rounded-full -ml-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
              Why Choose <span className="text-primary">Vogue Technics</span> for Timing Belt Replacement
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Full Kit Replacement as Standard", text: "Belt, tensioner, idlers, and water pump where applicable   we do not fit just the belt." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "OEM and OEM-Specification Parts Only", text: "Timing belts are not a job where budget parts represent a saving   they represent a risk." },
              { icon: <Gauge className="w-5 h-5" />, title: "Platform-Specific Knowledge", text: "Routing, tensioner preload and alignment procedures vary by engine. We do this work on platforms we know." },
              { icon: <Wrench className="w-5 h-5" />, title: "Written Quotes, No Surprises", text: "Full itemised quote agreed before work begins. The figure you confirm is the figure you pay." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty", text: "Every timing belt replacement carries a minimum six-month warranty on parts and labour." },
              { icon: <Wrench className="w-5 h-5" />, title: "UK-Wide Collection", text: "Based in    we collect and deliver across the UK on all timing belt and engine work." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">{item.icon}</div>
                  <div className="space-y-3">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm md:text-base">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
                Our <span className="text-primary">Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1   Contact Us with your vehicle details and service history. We advise on belt or chain, interval status, and next steps.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange UK-wide collection.",
                "Step 3   Inspection and Written Quote   belt condition assessment, tensioner and ancillary inspection, full written quote covering all components.",
                "Step 4   Full Timing Belt Service   belt, tensioner, idler pulleys, and water pump replaced to OEM specification.",
                "Step 5   Timing Check and Road Test   valve timing verified, post-replacement check completed, road test before handover.",
              ].map((text, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers about intervals, belt vs chain, and water pumps."
        items={[
          {
            question: "How often should a timing belt be replaced?",
            answer:
              "Intervals vary by engine and manufacturer   typically between 40,000 and 60,000 miles, or every four to five years, whichever comes first. Age-based replacement is equally important to mileage-based replacement. We advise on your specific interval at the point of enquiry.",
          },
          {
            question: "Does my Range Rover or Land Rover have a timing belt?",
            answer:
              "Most current JLR engines use a timing chain. Older diesel and some petrol variants do carry timing belts. We confirm which system your specific vehicle uses during the initial enquiry   at no charge.",
          },
          {
            question: "What happens if a timing belt breaks?",
            answer:
              "On an interference engine, a snapped timing belt causes the pistons and valves to collide, resulting in severe internal engine damage. Prevention is always significantly less expensive than the repair.",
          },
          {
            question: "Should the water pump be replaced with the timing belt?",
            answer:
              "Yes, in most cases. Where the water pump is driven by the timing belt, replacing it at the same time adds minimal cost compared to the labour saving   and prevents repeat labour if the pump fails later.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic leading-tight">
            Do Not Wait for a Belt <span className="text-slate-950">to Become an Engine</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Replace at the correct interval with the full kit, then drive with peace of mind.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
              className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-4"
            >
              Request a Free Timing Belt Replacement Quote <ArrowRight className="w-6 h-6 text-primary" />
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
            >
              Call Us and Speak to a Specialist
            </a>
            <Link
              href="/contact-us"
              className="bg-white/20 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
            >
              Book a Timing Belt Inspection at Our  Workshop
            </Link>
          </div>

          <div className="mt-16 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Timing Belt Replacement Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover
            • Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <PartnerLogos />
    </main>
  );
}

