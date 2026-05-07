"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Search, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PartnerLogos from "@/components/common/PartnerLogos";
import WorkshopSection from "@/components/common/WorkshopSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const features = [
    { text: "Over 20 years of specialist engine experience.", icon: <Star className="w-5 h-5 text-accent" /> },
    { text: "Honest diagnostics every time.", icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
    { text: "OEM and quality uprated parts as standard.", icon: <Wrench className="w-5 h-5 text-accent" /> },
    { text: "Warranty-backed repairs.", icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
    { text: "Transparent, fixed pricing before work begins.", icon: <Clock className="w-5 h-5 text-accent" /> },
    { text: "A real alternative to the main dealer.", icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
  ];

  const engineServices = [
    {
      title: "Head Gasket Replacement",
      slug: "head-gasket-replacement",
      body: (
        <>
          A blown head gasket is one of the most serious engine faults a vehicle can develop, and one of the most commonly misdiagnosed. We carry out thorough cylinder head inspections, pressure testing, and full head gasket replacement using quality gasket kits suited to your specific engine. Caught early, the repair is straightforward. Left too long, it can cost considerably more.
        </>
      ),
    },
    {
      title: "Timing Chain Replacement",
      slug: "timing-chain-replacement",
      body: (
        <>
          Timing chain wear is a known issue across several Range Rover and Land Rover engine variants, particularly the TDV6 and SDV6. Rattling on cold start, rough idle, or timing-related fault codes are warning signs that shouldn't be ignored. We replace timing chains, tensioners, and guides to factory specification, restoring engine timing integrity and preventing the kind of catastrophic failure that a neglected chain can cause.
        </>
      ),
    },
    {
      title: "Turbo Replacement",
      slug: "turbo-replacement",
      body: (
        <>
          A failing turbocharger will rob your engine of performance, increase fuel consumption, and — if left unaddressed — can cause serious secondary damage. We diagnose turbo faults accurately before recommending replacement, fitting quality turbos that are matched correctly to your engine variant. Our turbo replacement service covers both supply and fitting, with proper run-in procedures carried out before the vehicle is returned.
        </>
      ),
    },
    {
      title: "Engine Rebuild",
      slug: "engine-rebuild",
      body: (
        <>
          A full engine rebuild is the right solution when internal wear, damage, or failure has reached a point where a simple repair won't suffice. We strip the engine completely, inspect every component, machine what can be salvaged, replace what can't, and reassemble to manufacturer tolerances. This is precision work, and it's where our experience really shows.
        </>
      ),
    },
    {
      title: "Engine Repair",
      slug: "engine-repair",
      body: (
        <>
          Not every engine problem requires a full rebuild. Many faults — oil consumption issues, internal leaks, bearing noise, loss of compression in specific cylinders — can be resolved with targeted engine repairs that cost significantly less than a full rebuild while delivering excellent results. We assess your engine honestly and recommend only what's genuinely needed.
        </>
      ),
    },
    {
      title: "Engine Replacement",
      slug: "engine-replacement",
      body: (
        <>
          When an engine is beyond economical repair, replacement is often the most cost-effective path forward. We source low-mileage, quality-checked replacement engines and handle the full swap, including all associated ancillaries, fluid changes, and post-fitment testing.
        </>
      ),
    },
    {
      title: "Engine Swap",
      slug: "engine-swap",
      body: (
        <>
          Whether you're looking to upgrade to a more powerful unit, replace a failed engine with an improved variant, or convert between engine types, our engine swap service covers the planning, sourcing, and fitment in full. We'll advise you on compatibility, parts requirements, and realistic costs before any work begins.
        </>
      ),
    },
    {
      title: "Timing Belt Replacement",
      slug: "timing-belt-replacement",
      body: (
        <>
          Some engine variants across our specialist brands still use a timing belt rather than a chain, and missed replacement intervals can have devastating consequences. We replace timing belts, tensioners, and water pumps as a complete service, ensuring the job is done once and done right.
        </>
      ),
    },
    {
      title: "Engine Health Check",
      slug: "engine-health-check",
      body: (
        <>
          If you're buying a used Range Rover, Land Rover, Jaguar, Audi, or BMW, or if your current vehicle is developing symptoms you can't quite pin down, our engine health check gives you a clear, honest assessment of where things stand. We use specialist diagnostic equipment alongside physical inspection to give you an accurate picture of engine condition.
        </>
      ),
    },
  ];

  const brandSpecialisms = [
    {
      title: "Range Rover Engines",
      href: "/range-rover-engines",
      body: (
        <>
          The Range Rover family demands a level of engine expertise that most general workshops simply don't have. From the Range Rover Vogue to the Sport, the Evoque, and the Velar, we work across the full model range. Whether it's a TDV6 with timing chain concerns, an SDV8 with oil consumption problems, or a supercharged V8 that needs a full rebuild, we have the knowledge and equipment to deal with it properly.
        </>
      ),
    },
    {
      title: "Land Rover Engines",
      href: "/land-rover-engines",
      body: (
        <>
          Land Rovers are capable, hard-working machines, but they're not without their engine vulnerabilities. The Discovery, Defender, and Freelander all have their known weak points, and we've seen every variation of them. Whether your Defender's diesel has done serious mileage and needs an overhaul, or your Discovery has developed a classic TDV6 fault, we approach every Land Rover job with the same methodical care.
        </>
      ),
    },
    {
      title: "Jaguar Engines",
      href: "/jaguar-engines",
      body: (
        <>
          Jaguar shares much of its engine architecture with Land Rover and Range Rover, which means our expertise transfers directly. We work on the XF, XE, F-Pace, XJ, and F-Type, covering the 3.0 TDV6 diesel, the 2.0 Ingenium petrol and diesel units, and the 5.0 V8 supercharged engine. If your Jaguar has developed engine problems, we can help without the main dealer waiting time and pricing.
        </>
      ),
    },
    {
      title: "Audi Engines",
      href: "/audi-engines",
      body: (
        <>
          Audi engines are well-engineered but not without their common fault patterns — timing chain issues on the 2.0 TFSI, high-pressure fuel pump failures, and oil consumption problems on various units are among the faults we see regularly. We work across the A3, A4, A5, A6, Q5, Q7, RS4, and more, covering both petrol and diesel variants.
        </>
      ),
    },
    {
      title: "BMW Engines",
      href: "/bmw-engines",
      body: (
        <>
          From the N47 diesel with its notorious timing chain issues to the N57, B47, and N20 units, BMW engines require specialist knowledge to work on correctly. We cover the 1 Series, 3 Series, 5 Series, X3, X5, and more, including M-variant engines. If your BMW has an engine problem that deserves proper attention rather than a quick fix, we're the right workshop.
        </>
      ),
    },
  ];

  const whyChooseBullets = [
    "Over 20 years of specialist engine experience. We've spent more than two decades working specifically on the engine types we offer, not dabbling in bodywork one day and exhausts the next. That focus gives us a level of depth and consistency you won't find at a general garage.",
    "Honest diagnostics every time. We won't recommend a full engine rebuild when a targeted repair will solve the problem. Our diagnostic process is thorough because we'd rather spend time getting the assessment right than have you spend money on work that isn't needed.",
    "OEM and quality uprated parts as standard. We don't cut corners on components. Where OEM parts are the right choice, that's what we fit. Where a quality uprated part offers better longevity, we'll discuss the options with you before making any decisions.",
    "Warranty-backed repairs. Every engine repair and rebuild we carry out is covered by a warranty. We stand behind our workmanship because we're confident in it.",
    "Transparent, fixed pricing before work begins. You'll receive a full, itemised quote before we start. No mid-job surprises, no add-ons you didn't agree to.",
    "A real alternative to the main dealer. We offer main dealer levels of expertise and diagnostics at independent workshop pricing. For customers who've seen main dealer quotes on their Range Rover or Land Rover engine, the difference can be substantial.",
  ];

  const processSteps = [
    {
      title: "Step 1 — Diagnose",
      body: (
        <>
          Everything starts with a proper assessment. You bring your vehicle in, or we discuss the symptoms over the phone, and we carry out a thorough diagnostic inspection using specialist equipment. We won't guess, and we won't start recommending work until we know exactly what we're dealing with.
        </>
      ),
    },
    {
      title: "Step 2 — Quote",
      body: (
        <>
          Once we have a clear picture of what your engine needs, we provide a full written quote. Every element of the work is itemised, parts costs are included, and the labour time is explained. You make an informed decision with complete clarity — there's no pressure and no ambiguity.
        </>
      ),
    },
    {
      title: "Step 3 — Repair",
      body: (
        <>
          With your approval, work begins. Our technicians carry out every job to manufacturer specifications using quality parts. We keep you updated throughout, particularly on longer jobs such as full engine rebuilds, so you're never left wondering what's happening with your vehicle.
        </>
      ),
    },
    {
      title: "Step 4 — Test & Return",
      body: (
        <>
          Before your vehicle leaves our workshop, the engine is fully tested. We check for leaks, run the engine through its operating ranges, and carry out any final adjustments needed. Only when we're satisfied that the work meets our standards does your vehicle go back to you, along with your warranty documentation and a full record of the work carried out.
        </>
      ),
    },
  ];

  const faqs = [
    {
      question: "How much does a Range Rover engine rebuild cost?",
      answer:
        "The cost of a Range Rover engine rebuild varies depending on the engine variant, the extent of the damage, and the parts required. A partial rebuild addressing the top end will cost considerably less than a full strip-down and bottom-end rebuild. We provide a full, itemised quote after our initial diagnostic assessment, so you know exactly what you're paying for before any work begins. Call us to discuss your specific situation and we'll give you an honest ballpark figure to work from.",
    },
    {
      question: "How long does an engine rebuild take?",
      answer:
        "A full engine rebuild typically takes between five and ten working days, depending on the complexity of the job and parts availability. Some specialist engine variants require parts that need to be ordered in advance, which can affect timescales. We'll give you a realistic time estimate as part of your initial quote and keep you updated throughout the process.",
    },
    {
      question: "Do you offer a warranty on engine repairs and rebuilds?",
      answer:
        "Yes. All engine work carried out at Vogue Technics is covered by a warranty. The warranty period and terms depend on the nature of the work — we'll confirm the specifics in writing as part of your quote. We stand behind the quality of our workmanship.",
    },
    {
      question: "Do I need to use a main dealer for my Range Rover engine, or will an independent specialist void my warranty?",
      answer:
        "Using an independent specialist does not automatically void your manufacturer warranty, provided the work is carried out to the correct standard using appropriate parts — which is exactly what we do. Once your vehicle is outside its manufacturer warranty period, there's no obligation to use a main dealer at all, and the cost savings of using a quality independent specialist like Vogue Technics can be very significant.",
    },
    {
      question: "Can you source a replacement engine if mine is beyond repair?",
      answer:
        "Yes. If your engine assessment indicates that repair isn't economically viable, we can source a low-mileage, quality-checked replacement engine for your specific vehicle variant. We handle the full supply and fitment process, including all ancillaries and post-fitment testing.",
    },
    {
      question: "Do you only work on vehicles in Grays, or do customers travel to you from further afield?",
      answer:
        "We're based in Grays, Essex, and our local customers come from across Thurrock, Dartford, Basildon, Romford, and East London. However, we also regularly work on vehicles brought to us from further across the UK. When customers need a genuine specialist for their Range Rover or Land Rover engine, they're often willing to travel — and we're well set up to accommodate that.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Dynamic Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Vogue Technics
              </span>{" "}
              — Range Rover & Land Rover Engine Specialists <br />
              in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Grays, Essex
              </span>
            </h1>
          </motion.div>

          {/* Registration Search Box (Glassmorphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl glass-dark p-6 md:p-8 rounded-3xl shadow-2xl relative"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex overflow-hidden rounded-xl border-2 border-slate-300 bg-[#eeb318] shadow-inner transition-transform focus-within:ring-2 focus-within:ring-white/50 focus-within:ring-offset-2 focus-within:ring-offset-slate-900">
                <div className="bg-[#0033A0] flex flex-col items-center justify-center px-3 py-2 w-16 md:w-20 shrink-0 border-r border-[#0033A0]/50 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.2)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 md:w-10 h-auto mb-1 rounded-sm shadow-sm">
                    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </svg>
                  <span className="text-[#FACC15] font-bold text-xs md:text-sm tracking-widest leading-none">UK</span>
                </div>
                <input
                  type="text"
                  placeholder="ENTER VEHICLE REG NUMBER"
                  className="w-full bg-transparent text-slate-800 font-bold text-xl md:text-2xl px-2 sm:px-4 py-3 focus:outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base placeholder:tracking-normal uppercase tracking-widest placeholder:text-slate-500"
                />
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap">
                <Search className="w-5 h-5" />
                FIND ENGINE
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-slate-400">
              Don't have the Reg? <Link href="/contact-us" className="text-primary hover:text-white transition-colors">Find vehicle manually</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center max-w-2xl mx-auto mt-8"
          >
            <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed font-semibold">
              Essex's Most Trusted Independent Engine Rebuild, Repair & Replacement Specialists
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              When your Range Rover or Land Rover engine starts giving trouble, you need more than a general garage. You need specialists who know these engines inside out — their common failure points, their engineering quirks, and exactly what it takes to get them running properly again. That's what Vogue Technics has been delivering for over two decades from our workshop in Grays, Essex.
            </p>
          </motion.div>
        </div>
      </section>

      <ReviewsSection
        title="What Our Customers Say"
        subtitle="Hear from our satisfied customers who have experienced our professional engine services."
      />



      {/* WHY CHOOSE US & CONTENT SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-[340px] sm:h-[380px] md:h-[420px] lg:h-[520px]">
                  <Image
                    src="/images/range-rover.webp"
                    alt="Range Rover"
                    fill
                    className="object-cover object-[50%_25%]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                    <div className="text-white font-bold text-2xl mb-2">Expert Technicians</div>
                    <div className="text-slate-300 text-sm">State of the art repairs and diagnostics</div>
                  </div>
                </div>
              </motion.div>

              {/* Fill leftover space on desktop with gallery images */}
              <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/3g.webp"
                    alt="Workshop diagnostics and inspection"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/4g.webp"
                    alt="Range Rover workshop bay"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/5g.webp"
                    alt="Premium engine components"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/7g.webp"
                    alt="Reconditioned engine bay"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/8g.webp"
                    alt="Specialist tools in use"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[180px]">
                  <Image
                    src="/images/gallery/9g.webp"
                    alt="Range Rover service center"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 100vw"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Why Vogue Technics?
              </h2>

              <div className="space-y-4 text-slate-600 text-[1.05rem] leading-relaxed">

                <p>
                  Vogue Technics has been one of Essex's most respected independent engine specialists since we first opened our doors in Grays. We didn't set out to be everything to everyone. From day one, our focus has been singular — engine work, done properly, on the vehicles that demand proper expertise. That focus is what's built our reputation, and it's what keeps customers returning and referring us to friends and family across Thurrock, Dartford, Romford, Basildon, and beyond.
                </p>
                <p>
                  Range Rovers and Land Rovers are at the core of what we do. The TDV6, SDV8, SDV6, Ingenium diesel, and supercharged V8 are engines we know like the backs of our hands. We've rebuilt them from the bottom end up, replaced cylinder heads, tackled timing chain failures, and resolved turbo problems that other workshops couldn't diagnose. That depth of hands-on experience simply cannot be replicated — it comes from years of working on nothing else.
                </p>
                <p>
                  Being an IGA member means we're held to a professional standard that protects you as a customer. Every job is quoted transparently before work begins. Every repair is explained in plain English. And every engine that leaves our workshop is tested, signed off, and covered by a warranty. There are no hidden surprises on your invoice and no vague explanations when you call to ask how your vehicle is getting on.
                </p>
                <p>
                  Customers drive to us from across South Essex and East London not because we're the closest option, but because they've learned — or been told by someone they trust — that Vogue Technics is the right option. We're the independent specialist that gives you main dealer knowledge without the main dealer price tag.
                </p>
              </div>
              
              <div className="pt-6 space-y-4">
                {features.map((feature, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors shadow-sm"
                  >
                    <div className="bg-white p-2 text-primary shadow-sm rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-slate-800">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ENGINE SERVICES */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-slate-600 text-[1.05rem] leading-relaxed">
              We cover the full spectrum of engine work, from a routine engine health check through to a complete engine rebuild or replacement. Every service is carried out by experienced technicians who understand the specific demands of the engines we work on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  <div className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.body}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE BRANDS */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vehicle Brands We Specialise In</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {(() => {
            // Slider behaviour: snap scrolling + arrows/dots + auto-advance.
            // No dependency: keeps things lightweight but still premium.
            const total = brandSpecialisms.length;
            const trackRef = useRef<HTMLDivElement | null>(null);
            const [active, setActive] = useState(0);
            const [isPaused, setIsPaused] = useState(false);

            const scrollToIndex = (index: number) => {
              const el = trackRef.current;
              if (!el) return;
              const clamped = ((index % total) + total) % total;
              const child = el.children.item(clamped) as HTMLElement | null;
              if (!child) return;
              // Important: avoid `scrollIntoView()` because it can scroll the *page* vertically
              // (e.g. when auto-advancing while user is elsewhere). We only want horizontal movement.
              el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
              setActive(clamped);
            };

            // Track which card is most visible, so dots stay in sync when user swipes.
            useEffect(() => {
              const el = trackRef.current;
              if (!el) return;

              const handler = () => {
                const children = Array.from(el.children) as HTMLElement[];
                if (children.length === 0) return;
                const left = el.scrollLeft;
                let bestIdx = 0;
                let bestDist = Number.POSITIVE_INFINITY;
                for (let i = 0; i < children.length; i++) {
                  const dist = Math.abs(children[i].offsetLeft - left);
                  if (dist < bestDist) {
                    bestDist = dist;
                    bestIdx = i;
                  }
                }
                setActive(bestIdx);
              };

              el.addEventListener("scroll", handler, { passive: true });
              handler();
              return () => el.removeEventListener("scroll", handler);
            }, [total]);

            // Auto-advance (pause on hover/focus)
            useEffect(() => {
              if (isPaused || total <= 1) return;
              const id = window.setInterval(() => {
                scrollToIndex(active + 1);
              }, 4500);
              return () => window.clearInterval(id);
            }, [active, isPaused, total]);

            const dots = useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);

            return (
              <div
                className="relative overflow-x-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocusCapture={() => setIsPaused(true)}
                onBlurCapture={() => setIsPaused(false)}
              >
                <div className="pointer-events-none absolute -top-16 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

                {/* Track */}
                <div
                  ref={trackRef}
                  className={[
                    "flex gap-6 overflow-x-auto pb-4 px-1 sm:px-2",
                    "snap-x snap-mandatory scroll-smooth",
                    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  ].join(" ")}
                  aria-label="Vehicle brands slider"
                >
                  {brandSpecialisms.map((brand, idx) => (
                    <motion.div
                      key={brand.href}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.03 }}
                      className={[
                        "snap-start shrink-0",
                        "w-[88%] sm:w-[75%] md:w-[48%] lg:w-[42%] xl:w-[36%]",
                        "bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm",
                        "hover:shadow-xl hover:border-primary/40 transition-all",
                        "flex flex-col justify-between",
                      ].join(" ")}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          <Link href={brand.href} className="hover:text-primary transition-colors">
                            {brand.title}
                          </Link>
                        </h3>
                        <div className="text-slate-600 leading-relaxed">{brand.body}</div>
                      </div>

                      <div className="pt-6">
                        <Link
                          href={brand.href}
                          className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
                        >
                          Explore More
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Controls */}
                <div className="mt-3 flex items-center justify-end">
                  <div className="flex items-center gap-2" aria-label="Slider dots">
                    {dots.map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => scrollToIndex(i)}
                        className={[
                          "h-2.5 w-2.5 rounded-full transition-all",
                          i === active ? "bg-primary w-6" : "bg-slate-300 hover:bg-slate-400",
                        ].join(" ")}
                        aria-label={`Go to brand ${i + 1}`}
                        aria-current={i === active ? "true" : "false"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* WHY CHOOSE VOGUE TECHNICS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Vogue Technics</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            {/* Gallery-style collage (fills left space on desktop) */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[320px]">
                  <Image
                    src="/images/gallery/2g.webp"
                    alt="Engine rebuild and workshop"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[152px]">
                    <Image
                      src="/images/gallery/6g.webp"
                      alt="Workshop diagnostics"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 100vw"
                    />
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[152px]">
                    <Image
                      src="/images/gallery/1g.webp"
                      alt="Range Rover and Land Rover specialists"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 100vw"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] bg-slate-900 text-white p-6 shadow-xl border border-white/10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Premium workmanship</p>
                <p className="mt-3 text-slate-200 leading-relaxed">
                  Specialist engine work is precision work — clean processes, correct parts, and careful testing on every vehicle.
                </p>
              </div>
            </div>

            {/* Bullet cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseBullets.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-slate-50 border border-slate-100 rounded-[2rem] p-7 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-10 h-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process — From First Call to Collection</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <div className="text-slate-600 leading-relaxed">{step.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Customers Across Essex and Beyond</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-slate-600 text-[1.05rem] leading-relaxed space-y-4">
            <p>
              Vogue Technics has been building its reputation one engine at a time since we established our Grays workshop over twenty years ago. We've carried out thousands of engine repairs, rebuilds, and replacements across our specialist brands, and the majority of our new customers arrive through word of mouth — which, in our trade, is the most meaningful endorsement there is.
            </p>
            <p>
              We hold a consistently high rating across Google Reviews and Trustpilot, reflecting the standard of work and the customer experience we work hard to maintain. As an IGA-accredited workshop, we operate to a professional code of practice that gives you additional reassurance and accountability.
            </p>
            <p>
              Whether you're a first-time visitor who found us searching for a Range Rover engine specialist near you, or you've been referred by a friend in Thurrock, Dartford, or Romford, you'll receive the same level of honesty, expertise, and care that has kept our customers coming back for over two decades.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
            >
              Call 01375 531355
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary font-bold py-3 px-6 rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      {/* CTA */}
      <section className="py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Ready to Talk About Your Engine? Let's Get Started.
            </h2>
            <p className="text-slate-600 text-[1.05rem] leading-relaxed">
              If your Range Rover, Land Rover, Jaguar, Audi, or BMW is giving you engine trouble, don't leave it sitting on a driveway while you weigh up your options. The longer most engine faults are left, the more expensive they become to resolve.
              <br />
              <br />
              Call the Vogue Technics team today or submit an online quote request and we'll come back to you promptly with an honest assessment of where things stand. No pressure, no jargon — just straightforward advice from people who genuinely know these engines.
            </p>
          </div>
        </div>
      </section>
      <WorkshopSection />
      <PartnerLogos />
    </>
  );
}
