"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PartnerLogos from "@/components/common/PartnerLogos";
import WorkshopSection from "@/components/common/WorkshopSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import PrecisionEngineSection from "@/components/common/PrecisionEngineSection";
import EngineSpecialistsSection from "@/components/common/EngineSpecialistsSection";
import RegSearch from "@/components/common/RegSearch";
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
      image: "/head_gasket/head_gasket%201.png",
      body: "A blown head gasket is one of the most serious engine faults a vehicle can develop. We carry out thorough inspections, pressure testing, and full replacement using quality gasket kits suited to your specific engine.",
    },
    {
      title: "Timing Chain Replacement",
      slug: "timing-chain-replacement",
      image: "/timming_chain/timing_chain%201.png",
      body: "Timing chain wear is a known issue across several Range Rover and Land Rover variants. We replace chains, tensioners, and guides to factory spec, restoring timing integrity and preventing catastrophic failure.",
    },
    {
      title: "Turbo Replacement",
      slug: "turbo-replacement",
      image: "/turbo_replacement/turbo_replacement%201.png",
      body: "A failing turbocharger robs your engine of performance and can cause serious secondary damage. We diagnose faults accurately and fit quality turbos matched correctly to your engine variant.",
    },
    {
      title: "Engine Rebuild",
      slug: "engine-rebuild",
      image: "/engine_rebuild/engine_rebuild%201.png",
      body: "A full engine rebuild is the right solution when internal wear or damage is beyond simple repair. We strip, inspect, machine, and reassemble to manufacturer tolerances — precision work done properly.",
    },
    {
      title: "Engine Repair",
      slug: "engine-repair",
      image: "/engine_repair/engine_repair%201.png",
      body: "Not every engine problem requires a full rebuild. Many faults can be resolved with targeted repairs at significantly lower cost. We assess honestly and recommend only what's genuinely needed.",
    },
    {
      title: "Engine Replacement",
      slug: "engine-replacement",
      image: "/engine_replacement/engine_replacement%201.png",
      body: "When an engine is beyond economical repair, replacement is often the most cost-effective path. We source quality-checked replacement engines and handle the full swap including all ancillaries and testing.",
    },
    {
      title: "Engine Swap",
      slug: "engine-swap",
      image: "/engine_swap/engine_swap%201.png",
      body: "Looking to upgrade or convert between engine types? Our engine swap service covers planning, sourcing, and fitment in full — with honest advice on compatibility and costs before any work begins.",
    },
    {
      title: "Timing Belt Replacement",
      slug: "timing-belt-replacement",
      image: "/timming_belt/timing_belt%201.png",
      body: "Missed timing belt replacement intervals can have devastating consequences. We replace belts, tensioners, and water pumps as a complete service — done once and done right.",
    },
    {
      title: "Engine Health Check",
      slug: "engine-health-check",
      image: "/images/expert-mechanicss.webp",
      body: "Buying a used vehicle or noticing symptoms you can't pin down? Our engine health check gives you a clear, honest assessment using specialist diagnostic equipment alongside physical inspection.",
    },
  ];

  const brandSpecialisms = [
    {
      title: "Range Rover Engines",
      href: "/range-rover-engines",
      body: "Specialists in Range Rover engine rebuilds, repairs and replacements across the Vogue, Sport, Evoque and Velar. We cover TDV6, SDV8, Ingenium and supercharged V8 platforms.",
    },
    {
      title: "Land Rover Engines",
      href: "/land-rover-engines",
      body: "From the Defender and Discovery to the Freelander, we diagnose and resolve engine faults across the full Land Rover range using OEM parts and specialist knowledge.",
    },
    {
      title: "Jaguar Engines",
      href: "/jaguar-engines",
      body: "We work on the XF, XE, F-Pace, XJ and F-Type covering TDV6, Ingenium and 5.0 V8 engines — specialist expertise at independent workshop pricing.",
    },
    {
      title: "Audi Engines",
      href: "/audi-engines",
      body: "Covering the A3, A4, A5, A6, Q5 and Q7, we handle timing chain faults, HPFP failures and oil consumption issues on TDI diesel and TFSI petrol units.",
    },
    {
      title: "BMW Engines",
      href: "/bmw-engines",
      body: "From N47 timing chain repairs to full engine rebuilds on the 1, 3, 5 Series, X3 and X5 — specialist knowledge applied to every BMW engine job.",
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
        "Yes. All engine work carried out at Vogue Technics is covered by a warranty. The warranty period and terms depend on the nature of the work   we'll confirm the specifics in writing as part of your quote. We stand behind the quality of our workmanship.",
    },
    {
      question: "Do I need to use a main dealer for my Range Rover engine, or will an independent specialist void my warranty?",
      answer:
        "Using an independent specialist does not automatically void your manufacturer warranty, provided the work is carried out to the correct standard using appropriate parts   which is exactly what we do. Once your vehicle is outside its manufacturer warranty period, there's no obligation to use a main dealer at all, and the cost savings of using a quality independent specialist like Vogue Technics can be very significant.",
    },
    {
      question: "Can you source a replacement engine if mine is beyond repair?",
      answer:
        "Yes. If your engine assessment indicates that repair isn't economically viable, we can source a low-mileage, quality-checked replacement engine for your specific vehicle variant. We handle the full supply and fitment process, including all ancillaries and post-fitment testing.",
    },
    {
      question: "Do you only work on vehicles in , or do customers travel to you from further afield?",
      answer:
        "We're based in , and our local customers come from across Thurrock, Dartford, Basildon, Romford, and East London. However, we also regularly work on vehicles brought to us from further across the UK. When customers need a genuine specialist for their Range Rover or Land Rover engine, they're often willing to travel   and we're well set up to accommodate that.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-28 md:pt-32 pb-28 md:pb-32">
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
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Vogue Technics
              </span>{" "}
              Range Rover & Land Rover Engine Specialists
            </h1>
          </motion.div>

          {/* Registration Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <RegSearch />
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
                  Vogue Technics has been one of 's most respected independent engine specialists since we first opened our doors . We didn't set out to be everything to everyone. From day one, our focus has been singular   engine work, done properly, on the vehicles that demand proper expertise. That focus is what's built our reputation, and it's what keeps customers returning and referring us to friends and family across Thurrock, Dartford, Romford, Basildon, and beyond.
                </p>
                <p>
                  Range Rovers and Land Rovers are at the core of what we do. The TDV6, SDV8, SDV6, Ingenium diesel, and supercharged V8 are engines we know like the backs of our hands. We've rebuilt them from the bottom end up, replaced cylinder heads, tackled timing chain failures, and resolved turbo problems that other workshops couldn't diagnose. That depth of hands-on experience simply cannot be replicated   it comes from years of working on nothing else.
                </p>
                <p>
                  Being an IGA member means we're held to a professional standard that protects you as a customer. Every job is quoted transparently before work begins. Every repair is explained in plain English. And every engine that leaves our workshop is tested, signed off, and covered by a warranty. There are no hidden surprises on your invoice and no vague explanations when you call to ask how your vehicle is getting on.
                </p>
                <p>
                  Customers drive to us from across South  and East London not because we're the closest option, but because they've learned   or been told by someone they trust   that Vogue Technics is the right option. We're the independent specialist that gives you main dealer knowledge without the main dealer price tag.
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
                className="group bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 p-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {service.body}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full border-2 border-slate-800 text-slate-900 font-bold py-2 px-4 rounded-xl hover:bg-slate-900 hover:text-white transition-colors text-sm"
                  >
                    View Details
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
                        "bg-white border border-slate-200 rounded-[2rem] p-5 shadow-sm",
                        "hover:shadow-xl hover:border-primary/40 transition-all",
                        "flex flex-col justify-between",
                      ].join(" ")}
                    >
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">
                          <Link href={brand.href} className="hover:text-primary transition-colors">
                            {brand.title}
                          </Link>
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{brand.body}</p>
                      </div>

                      <div className="pt-3">
                        <Link
                          href={brand.href}
                          className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 rounded-xl hover:bg-primary-dark transition-colors text-sm"
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

      <EngineSpecialistsSection />
      <PrecisionEngineSection />

      {/* TRUSTED */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Trusted by Customers Across the UK</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto text-slate-600 text-[0.95rem] leading-relaxed space-y-4">
            <p>
              Vogue Technics has been building its reputation one engine at a time since we established our workshop over twenty years ago. Thousands of engine repairs, rebuilds, and replacements later, the majority of our new customers still arrive through word of mouth — the most meaningful endorsement in our trade.
            </p>
            <p>
              We hold a consistently high rating on Google Reviews and Trustpilot, and as an IGA-accredited workshop we operate to a professional code of practice that gives you additional peace of mind. Whether you found us searching for a Range Rover engine specialist or were referred by a friend in Thurrock, Dartford, Romford, or Basildon — you'll receive the same honest, expert care every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
            >
              Call 01375 531355
            </a>
            <Link
              href="/get-quote"
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
              Call the Vogue Technics team today or submit an online quote request and we'll come back to you promptly with an honest assessment of where things stand. No pressure, no jargon   just straightforward advice from people who genuinely know these engines.
            </p>
          </div>
        </div>
      </section>
      <WorkshopSection />
      <PartnerLogos />
    </>
  );
}
