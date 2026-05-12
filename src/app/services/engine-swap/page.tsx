"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Gauge, RefreshCw, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

export default function EngineSwapPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Engine swap specialists"
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
              { name: "Engine Swap", href: "/services/engine-swap" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight italic"
            >
              Engine Swap Specialists{" "}
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
                Sometimes a repair is not the answer. Sometimes the engine is beyond economic repair, the right replacement unit is
                difficult to source, or the vehicle deserves something better than what came out of the factory. That is when an
                engine swap becomes the most sensible conversation to have.
              </p>
              <p>
                At Vogue Technics, we carry out engine swaps and engine conversions for Range Rover, Land Rover, Jaguar, Audi, and
                BMW. Based in  with UK-wide collection available, we handle everything from a like-for-like engine change
                to a full performance conversion   with the technical knowledge to advise you properly and the workshop capability
                to carry it out to a high standard.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="bg-primary text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Discuss Your Engine Swap <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white text-slate-950 font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:01375531355"
                className="bg-white/15 text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* When does it make sense */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              When Does an Engine Swap <span className="text-primary">Make Sense?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-12">
            <p>
              An engine swap is not always the first option   but in the right circumstances, it is absolutely the right one. There
              are several situations where a swap makes more sense than a repair or standard replacement.
            </p>
            <p>
              If your engine has seized, suffered catastrophic internal damage, or failed in a way that makes rebuild uneconomical,
              a swap gives the vehicle a fresh start with a known, tested unit. If you own a classic Range Rover, a Defender, or an
              older Discovery and want to improve reliability or performance beyond what the original engine can offer, a conversion
              opens up options that a standard replacement cannot. And if you are working with a platform where sourced replacement
              units of decent provenance are scarce, a compatible swap is often the most practical and cost-effective route forward.
            </p>
            <p>
              The key is getting the right advice before committing to anything. Engine swaps vary enormously in complexity, cost,
              and what they involve   and the first conversation should always be an honest one about whether a swap is genuinely the
              right decision for your specific vehicle.
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                Speak to a Specialist Before You Decide   No Obligation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Swap Cost <span className="text-primary">  What Should You Expect to Pay?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                Engine swap cost is the question we are asked most frequently, and the honest answer is that it varies significantly
                depending on the vehicle, the donor engine, and the complexity of the conversion.
              </p>
              <p>
                A straightforward like-for-like engine change   where a tested replacement unit of the same specification is fitted
                in place of a failed original   sits at one end of the cost scale. A full engine conversion involving a different
                donor engine, modified engine mounts, revised ancillary systems, and mapping work sits at the other.
              </p>
              <p>
                What we can tell you is that every engine swap quote from Vogue Technics is written, itemised, and agreed before any
                work begins. There are no surprises at collection and no additions without your approval. If you have been quoted
                elsewhere and the figure does not feel right, come to us for a second opinion   we are straightforward about what
                things cost and why.
              </p>
            </div>
            <div className="bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Request a quote</p>
              <h3 className="text-xl font-extrabold uppercase tracking-tight italic mb-4">
                Request a Written Engine Swap Quote Today
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base mb-8">
                Tell us your vehicle, your objective, and any symptoms or history   we’ll advise honestly on feasibility and cost.
              </p>
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Request a Written Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* By vehicle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Engine Swap <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Range Rover Engine Swap",
                text: [
                  "The Range Rover has one of the most active engine swap communities of any prestige 4x4   and for good reason. Whether it is a P38 that needs a more reliable and cost-effective alternative to the original BMW V8, a classic Range Rover being restored and upgraded, an L322 with a failed engine where a quality swap makes more financial sense than a rebuild, or a Range Rover Sport owner exploring performance options beyond the standard configuration   the swap conversation comes up regularly on this platform.",
                  "We carry out Range Rover engine swaps across the Classic, P38, L322, L405, Sport, and Evoque. We advise on compatible swap options for each platform, manage the ancillary system changes the conversion requires, and carry out the installation to a standard that reflects what this vehicle deserves.",
                  "Range Rover engine swap cost depends on the platform and the chosen donor engine. We provide full written quotes following an initial consultation on your specific vehicle and objectives.",
                ],
                href: "/range-rover-engines",
                cta: "Explore Range Rover Engine Swap Options",
              },
              {
                title: "Land Rover Engine Swap",
                text: [
                  "The Defender, the Discovery, and the Series Land Rovers are arguably the most swap-friendly vehicles in the JLR family. The Defender engine swap market in particular is well established   with owners upgrading from the original 300 TDI or TD5 to more modern and capable units, or exploring LS swap options for maximum performance and reliability in demanding off-road use.",
                  "We carry out Land Rover Defender engine swaps, Discovery engine swaps including Discovery 2 and LR4 platforms, and Series 2 and Series 3 engine conversions for classic vehicles being rebuilt or upgraded. Land Rover LS swap work is something we advise on carefully   it requires specific knowledge of mounting, ancillary routing, and mapping   and we have the experience to guide you through the options honestly.",
                  "Land Rover engine swap cost varies by model and conversion type. Contact us to discuss your specific vehicle and what you are trying to achieve.",
                ],
                href: "/land-rover-engines",
                cta: "Explore Land Rover Engine Swap Options",
              },
              {
                title: "Jaguar Engine Swap",
                text: [
                  "Jaguar engine swaps cover a range of scenarios   from owners of older XJ and S-Type models looking for a reliable and cost-effective engine change, through to enthusiasts exploring Jaguar LS swap options or a V8 conversion on a platform that warrants it.",
                  "We carry out Jaguar engine swaps and conversions across the XF, XJ, S-Type, and X-Type, advising on compatible units, swap feasibility, and what the conversion realistically involves in terms of cost and timescale. Jaguar engine replacement cost as part of a swap is always quoted in full before work begins.",
                ],
                href: "/jaguar-engines",
                cta: "Explore Jaguar Engine Swap Options",
              },
              {
                title: "Audi Engine Swap",
                text: [
                  "Audi engine swaps range from practical like-for-like changes on failed A4 and A6 units through to RS and V8 engine conversions for performance-focused builds. We also carry out Audi diesel to petrol engine swaps for owners who want to move away from a problematic TDI platform to a more suitable alternative.",
                  "We work across the Audi A3, A4, A5, A6, S4, and R8 range on engine swap and conversion work, advising on compatible options, the ancillary changes required, and realistic cost expectations. Audi engine swap cost is always provided in a written quote following an initial assessment.",
                ],
                href: "/audi-engines",
                cta: "Explore Audi Engine Swap Options",
              },
              {
                title: "BMW Engine Swap",
                text: [
                  "BMW engine swaps are some of the most technically involved jobs we carry out   and some of the most rewarding. From a BMW 3 Series engine swap where a failed N47 diesel is being replaced with a more reliable alternative, through to an M engine conversion or an S54 swap into a platform that did not originally receive it, the work requires genuine expertise and proper planning.",
                  "We carry out BMW engine swaps and performance conversions across the 3 Series, 5 Series, X3, X5, and M-series platforms. BMW diesel to petrol swaps are an area of growing demand, particularly among owners of N47-equipped models. BMW engine swap cost is quoted in full following a consultation on your vehicle and the conversion you have in mind.",
                ],
                href: "/bmw-engines",
                cta: "Explore BMW Engine Swap Options",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-6">{item.title}</h3>
                <div className="space-y-5 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  {item.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
                <div className="pt-8 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    {item.cta} <ArrowRight className="w-4 h-4" />
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

      {/* Why choose */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-primary/20 blur-[160px] rounded-full -ml-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
              Why Choose <span className="text-primary">Vogue Technics</span> for Your Engine Swap
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Honest Advice Before Anything Else", text: "An engine swap is a significant decision. We will always tell you whether it is the right one for your vehicle before we talk about cost or timescales." },
              { icon: <Gauge className="w-5 h-5" />, title: "Technical Knowledge Across All Five Platforms", text: "Mounting points, ancillary systems, ECU compatibility, and emissions compliance all need to be considered. We know where the complications lie." },
              { icon: <Wrench className="w-5 h-5" />, title: "Written Quotes, No Surprises", text: "Every engine swap is quoted in full before work begins. The figure you agree is the figure you pay." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty as Standard", text: "All engine swap work carries a minimum six-month warranty covering parts and labour." },
              { icon: <RefreshCw className="w-5 h-5" />, title: "UK-Wide Collection Available", text: "Based in , we collect and deliver UK-wide on all engine swap and major conversion work." },
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
            >
              Start Your Engine Swap Enquiry Today <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/10 text-white font-black px-10 py-5 rounded-2xl hover:bg-white/15 transition-all uppercase tracking-widest text-xs md:text-sm"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers about engine swaps, conversions, and compliance."
        items={[
          {
            question: "How much does an engine swap cost in the UK?",
            answer:
              "Engine swap cost varies by vehicle and conversion type. A like-for-like engine change is considerably less involved than a full performance conversion. We provide written, itemised quotes following an initial consultation.",
          },
          {
            question: "Is an engine swap legal in the UK?",
            answer:
              "Yes, provided the conversion is carried out correctly, the vehicle passes an MOT, and any emissions requirements are met. We advise on compliance as part of every engine swap consultation.",
          },
          {
            question: "How long does an engine swap take?",
            answer:
              "Timescales vary by platform and conversion complexity. A straightforward engine change can be completed in a few days. A full conversion with ancillary modifications takes longer. We give you an honest timeframe at the point of quoting.",
          },
          {
            question: "Do you offer UK-wide collection for engine swap work?",
            answer:
              "Yes. We collect and deliver UK-wide on all engine swap jobs from our  base.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic leading-tight">
            Ready to Discuss <span className="text-slate-950">Your Engine Swap</span>?
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Whether you know exactly what you want or you are still weighing up the options, the right first step is a conversation
            with a specialist who will give you honest advice without any pressure.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
              className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-4"
            >
              Request a Free Engine Swap Consultation <ArrowRight className="w-6 h-6 text-primary" />
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
            >
              Call Us and Speak to a Specialist Today
            </a>
            <Link
              href="/contact-us"
              className="bg-white/20 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
            >
              Get a Written Quote   No Obligation
            </Link>
          </div>

          <div className="mt-16 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Engine Swap Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover • Jaguar •
            Audi • BMW
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <PartnerLogos />
    </main>
  );
}

