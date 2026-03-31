"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Clock, Phone, Search, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PartnerLogos from "@/components/common/PartnerLogos";
import WorkshopSection from "@/components/common/WorkshopSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import AreasCovered from "@/components/common/AreasCovered";
import ServicesSection from "@/components/common/ServicesSection";

export default function Home() {
  const features = [
    { text: "Most Affordable Prices Online", icon: <Star className="w-5 h-5 text-accent" /> },
    { text: "20 Years of Experience of Fitting and Repairs", icon: <Clock className="w-5 h-5 text-accent" /> },
    { text: "State of the Art Equipment and In house Engine Shop", icon: <Wrench className="w-5 h-5 text-accent" /> },
    { text: "Experienced and Pleasant Staff", icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
    { text: "Satisfied Customers with Verified Reviews", icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
  ];

  const models = [
    { title: "Range Rover Evoque Engines", link: "/range-rover-evoque-engines", category: "discovery" },
    { title: "Range Rover Sport Engines", link: "/range-rover-sport-engines", category: "discovery" },
    { title: "Range Rover Velar Engines", link: "/range-rover-velar-engines", category: "discovery" },
    { title: "Range Rover Vogue New - MK 4 Engines", link: "/range-rover-vogue-new-mk-4-engines", category: "discovery" },
    { title: "Range Rover Vogue Old - Mk 3 Engines", link: "/range-rover-vogue-old-mk-3-engines", category: "discovery" },
    { title: "Land Rover Defender Engines", link: "/land-rover-defender-engines", category: "discovery" },
    { title: "Land Rover Discovery 3 Engines", link: "/land-rover-discovery-3-engines", category: "discovery" },
    { title: "Land Rover Discovery 4 Engines", link: "/land-rover-discovery-4-engines", category: "discovery" },
    { title: "Land Rover Discovery 5 Engines", link: "/land-rover-discovery-5-engines", category: "discovery" },
    { title: "Land Rover Discovery Sport Engines", link: "/land-rover-discovery-sport-engines", category: "discovery" },
    { title: "Land Rover Freelander 2 Engines", link: "/land-rover-freelander-2-engines", category: "discovery" },
    { title: "Range Rover Sport SVR", link: "/range-rover-sport-svr", category: "discovery" },
  ];

  const engineSizes = [
    { title: "Range Rover 2.0 Engines", link: "/range-rover-2-0-engines" },
    { title: "Range Rover 2.2 Engines", link: "/range-rover-2-2-engines" },
    { title: "Range Rover 2.7 Engines", link: "/range-rover-2-7-engines" },
    { title: "Range Rover 3.0 Engines", link: "/range-rover-3-0-engines" },
    { title: "Range Rover 3.6 Engines", link: "/range-rover-3-6-engines" },
    { title: "Range Rover 4.2 Engines", link: "/range-rover-4-2-engines" },
    { title: "Range Rover 4.4 Engines", link: "/range-rover-4-4-engines" },
    { title: "Range Rover 5.0 Engines", link: "/range-rover-5-0-engines" },
    { title: "Land Rover 2.0 Engines", link: "/land-rover-2-0-engines" },
    { title: "Land Rover 2.2 Engines", link: "/land-rover-2-2-engines" },
    { title: "Land Rover 2.7 Engines", link: "/land-rover-2-7-engines" },
    { title: "Land Rover 3.0 Engines", link: "/land-rover-3-0-engines" },
    { title: "Land Rover 4.0 Engines", link: "/land-rover-4-0-engines" },
    { title: "Land Rover 4.4 Engines", link: "/land-rover-4-4-engines" },
    { title: "Land Rover 5.0 Engines", link: "/land-rover-5-0-engines" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-20">
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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Range Rover Engines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500">
                Used & Reconditioned
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience unparalleled power and reliability. Vogue Technics brings you the largest stock of rigorously tested Range Rover and Land Rover engines in the UK.
            </p>
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
                  placeholder="ENTER VEHICLE REG"
                  className="w-full bg-transparent text-slate-800 font-bold text-xl md:text-2xl px-4 py-3 focus:outline-none placeholder:text-slate-600 uppercase tracking-widest"
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
        </div>
      </section>

      <PartnerLogos />

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
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/range-rover.webp"
                    alt="Range Rover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                    <div className="text-white font-bold text-2xl mb-2">Expert Technicians</div>
                    <div className="text-slate-300 text-sm">State of the art repairs and diagnostics</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Top-Quality Range Rover <span className="text-primary">Engine Repair Specialist</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-[1.05rem] leading-relaxed">
                <p>
                  With over 20 years of experience facilitating Range Rover owners, we strive to provide the best servicing and fitting facility to the locals of Grays, Essex, regardless of what model of Range Rover they drive. As a trusted Range Rover Engine Specialist and Land Rover Specialist, our workshop is the preferred choice for drivers searching for a Range Rover Engine Specialist near me or a Land Rover Engine Specialist near me for repairs, fitting, or professional diagnostics.
                </p>
                <p>
                  With substantial investment in state-of-the-art facilities and the most updated equipment specialised for Range Rover engine repair, servicing, and fitting of engines, we are the top choice for locals and have gained their trust through dedication to our craft.
                </p>
                <p>
                  Our testimonials prove the quality and devotion we bring to our services and our clients. Visit us for complete peace of mind, expert service, and trusted workmanship backed by true specialists in Range Rover engine works, <Link href="/bmw-engines" className="text-blue-600 hover:text-blue-800 underline transition-colors">BMW engines</Link> repair and Land Rover engine rebuild services
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

      {/* FIND YOUR RANGE ROVER GRID */}
      <ServicesSection limit={3} />

      {/* FIND YOUR RANGE ROVER GRID */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Find your Range Rover</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {models.slice(0, 4).map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link href={model.link} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10 w-full aspect-[4/3] bg-slate-100 rounded-xl mb-5 flex flex-col items-center justify-center overflow-hidden group-hover:bg-slate-200/50 transition-colors">
                      {/* ADD YOUR REAL IMAGES HERE -> <Image src="/images/range-rover.jpg" alt="..." fill className="object-cover" /> */}
                      <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">Image Space</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-snug">
                        {model.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-primary font-medium mt-6 group-hover:translate-x-2 transition-transform">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/range-rover-engines" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg group">
              Explore More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* POPULAR ENGINE SIZES GRID */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Engine Sizes</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {engineSizes.slice(0, 5).map((engine, idx) => (
                <Link 
                  key={idx}
                  href={engine.link}
                  className="bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-primary hover:border-primary px-5 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 text-sm md:text-base group"
                >
                  <Activity className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  {engine.title}
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/range-rover-engines#engine-sizes" className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all shadow-md group">
                View All Sizes <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* EXTENDED SEO CONTENT - ALTERNATING LAYOUT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 space-y-24">
          
          {/* Row 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Reliable Land Rover Engine <span className="text-primary">Rebuilds and Replacements</span>
              </h2>
              <div className="text-slate-600 text-[1.05rem] leading-relaxed space-y-4">
                <p>
                  At Vogue Technics, we pride ourselves on being leading specialists in range rover engine works, range rover engine rebuild, Land Rover engine rebuild, and all types of reconditioned and used engines. For years, we have been the premier destination for Land Rover owners searching for Land Rover reconditioned engines, Land Rover used engines, and high-quality Range Rover reconditioned engines.
                </p>
                <p>
                  Whether you're looking to buy engines for a Land Rover Discovery, Range Rover Sport, or the iconic Evoque, we’ve got you covered. From 2.0 Land Rover engines to Range Rover 3.0 engines, every unit is meticulously checked and reconditioned by expert engineers.
                </p>
                <p className="font-medium text-slate-800">
                  Our dedicated team always helps you select the perfect match, ensuring your Range Rover receives the engine it truly deserves.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <Image src="/images/land-rover-engine-rebuild.webp" alt="Land Rover Engine Rebuild" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Top-Notch Range Rover <span className="text-primary">Reconditioned Engines</span>
              </h2>
              <div className="text-slate-600 text-[1.05rem] leading-relaxed space-y-4">
                <p>
                  As established Range Rover engine specialists, every Land Rover reconditioned engine and used engine undergoes strict testing. Customers needing diesel or petrol options — including Range Rover 3.0 engine units — will find the best performance and value here. We also supply low-mileage Land Rover used engines for customers seeking cost-effective, reliable options without compromising on performance.
                </p>
                <p>
                  Additionally, we stock used engines that have gone through rigorous testing to ensure they are in excellent condition. We understand that not all customers require reconditioned engines; thus, we provide low-mileage used engines that offer excellent performance and value for money. Whether you are looking for diesel or petrol engines, we have a wide range of engines in stock to meet your needs.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <Image src="/images/range-rover-mechanics.webp" alt="Range Rover Mechanics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Massive Stock of Used and <span className="text-primary">Reconditioned Engines</span>
              </h2>
              <div className="text-slate-600 text-[1.05rem] leading-relaxed space-y-4">
                <p>
                  Our warehouse carries a huge stock of reconditioned and used Land Rover and Range Rover engines. We maintain all types to support your needs. From the popular Range Rover 3.0 TDV6 engine to the smaller yet powerful engines including the 4.4 Range Rover engine, 4.4 V8 Range Rover engine, and the SVR Range Rover engine, we have every engine size and type that fits your specific Range Rover model.
                </p>
                <p className="font-medium text-slate-800 border-l-4 border-primary pl-4 py-2 bg-slate-50">
                  Every engine comes with complete details such as codes and mileage to help you make an informed purchase.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <Image src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop" alt="Engine Warehouse Stock" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Row 4: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Professional Range Rover <span className="text-primary">Supply and Fit Services</span>
              </h2>
              <div className="text-slate-600 text-[1.05rem] leading-relaxed space-y-4">
                <p>
                  We don’t just replace engines — we also specialise in range rover engine supply and fit, delivering complete, end-to-end service. As a leading Range Rover Engine Specialist, our engineers carry out installations with precision and care.
                </p>
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg mt-4 text-center">
                  <h4 className="text-xl font-bold mb-2 text-emerald-400">Prefer your own mechanic?</h4>
                  <p className="text-slate-300">We can supply the engine directly to your chosen location.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <Image src="/images/supply-and-fit-service.webp" alt="Supply and Fit Service" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <ReviewsSection />
      <FAQSection />
      <AreasCovered />
      <WorkshopSection />
    </>
  );
}
