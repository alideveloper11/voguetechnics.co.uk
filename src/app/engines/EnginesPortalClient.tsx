"use client";

import { motion } from "framer-motion";
import { ArrowRight, Car, Shield, Gauge, CheckCircle2, Search, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ServicesSection from "@/components/common/ServicesSection";
import FAQSection from "@/components/common/FAQSection";

const brands = [
  {
    name: "Range Rover Engines",
    slug: "range-rover-engines",
    description: "Premium reconditioned engines for Range Rover Vogue, Sport, Velar, and Evoque models.",
    image: "/images/range-rover.webp", // Placeholder
    icon: <Car className="w-8 h-8" />,
    color: "from-emerald-600 to-green-500"
  },
  {
    name: "Land Rover Engines",
    slug: "land-rover-engines",
    description: "Durable engine solutions for Defender, Discovery, and Freelander models.",
    image: "/images/car_bgg.jpg", // Placeholder
    icon: <Shield className="w-8 h-8" />,
    color: "from-slate-700 to-slate-900"
  },
  {
    name: "Audi Engines",
    slug: "audi-engines",
    description: "High-performance replacement engines for Audi A, Q, and R series vehicles.",
    image: "/images/audi.webp", // Placeholder
    icon: <Gauge className="w-8 h-8" />,
    color: "from-red-600 to-red-800"
  },
  {
    name: "BMW Engines",
    slug: "bmw-engines",
    description: "Reliable reconditioned engines for BMW 1-7 Series and X models.",
    image: "/images/bmw.webp", // Placeholder
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Jaguar Engines",
    slug: "jaguar-engines",
    description: "Specialist engine services for Jaguar XF, XJ, and F-Type models.",
    image: "/images/jaguar.webp", // Placeholder
    icon: <Car className="w-8 h-8" />,
    color: "from-slate-800 to-black"
  }
];

export default function EnginesPortalClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Engine Portal Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Our Engines", href: "/engines" }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-emerald-400 font-semibold tracking-wider text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.3)] uppercase"
            >
              UK's Leading Engine Specialist
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-tight uppercase"
            >
              Superior Engines for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500 italic">Every Major Brand</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you're looking for Range Rover power or Audi performance, Vogue Technics provides the UK's most reliable reconditioned & used engines.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="tel:01375 531355" className="bg-primary hover:bg-emerald-500 text-white font-black py-5 px-10 rounded-[2rem] shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto transform hover:-translate-y-2 uppercase tracking-widest">
                <Phone className="w-6 h-6" /> 01375 531355
              </a>
              <Link href="/contact-us" className="bg-white hover:bg-slate-50 text-slate-900 font-black py-5 px-10 rounded-[2rem] transition-all shadow-xl w-full sm:w-auto transform hover:-translate-y-2 flex items-center justify-center uppercase tracking-widest">
                Get Instant Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* PORTAL GRID SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none underline decoration-8 underline-offset-8 decoration-primary/20">Select Your <span className="text-primary italic italic">Vehicle Brand</span></h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium">Explore our extensive range of high-performance replacement engines tailored to your specific vehicle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Brand Image/Icon Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000`} />
                  <div className="absolute inset-0 flex items-center justify-center text-white scale-150 transform transition-transform group-hover:scale-[1.8] duration-700">
                    {brand.icon}
                  </div>
                  <div className="absolute top-6 left-6 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                    UK Stock
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tighter uppercase italic">{brand.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                      {brand.description}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/${brand.slug}`} 
                    className="inline-flex items-center gap-3 bg-slate-900 text-white font-black py-4 px-8 rounded-2xl text-sm tracking-widest uppercase hover:bg-primary transition-all shadow-lg group/btn"
                  >
                    View Engines <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            ))}

            {/* Registration CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:col-span-1 bg-primary rounded-[3rem] p-10 flex flex-col justify-center items-center text-center text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm border border-white/30 group-hover:rotate-12 transition-transform">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Found Your Match?</h3>
                <p className="text-emerald-50 mb-10 font-bold uppercase tracking-widest text-sm leading-relaxed">
                  Enter your registration for an instant tailored quote for any engine model.
                </p>
                <Link 
                  href="/contact-us" 
                  className="inline-block bg-white text-primary font-black py-5 px-12 rounded-2xl text-base tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] active:scale-95"
                >
                  Instant Quote
                </Link>
              </div>
              
              {/* Decorative Pulse */}
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter italic">Precision Quality</h4>
              <p className="text-slate-600 leading-relaxed font-medium">All engines undergo rigorous testing in our purpose-built facility to ensure they meet factory specifications.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter italic">6 Month Warranty</h4>
              <p className="text-slate-600 leading-relaxed font-medium">Shop with absolute peace of mind. Every unit we supply and fit comes with a comprehensive standard warranty.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter italic">UK-Wide Delivery</h4>
              <p className="text-slate-600 leading-relaxed font-medium">Our logistics network ensures fast and secure delivery of your engine to any garage or home in the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENDED WARRANTY CALLOUT */}
      <section className="py-12 bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border-2 border-primary/30 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter italic leading-none">
                Looking for <span className="text-primary italic">Extended Coverage?</span>
              </h3>
              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                We also offer up to 24 months warranty, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <ServicesSection limit={6} />

      {/* INFORMATIVE CONTENT SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="relative p-10 md:p-16 bg-slate-50 rounded-[4rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Unmatched Expertise in <span className="text-primary italic">Engine Reconditioning</span>
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    At Vogue Technics, we pride ourselves on being the UK's premier destination for high-quality reconditioned and used engines. With over two decades of experience, our master technicians specialize in breathing new life into engines for prestigious brands like Range Rover, Land Rover, Audi, BMW, and Jaguar. Our facility is equipped with state-of-the-art diagnostic and machining tools, ensuring every rebuild meets or exceeds original manufacturer specifications. We understand the intricacies of modern engine design, allowing us to address common factory flaws and provide a more reliable power unit for your vehicle.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Rigorous <span className="text-primary italic">Quality Control</span> and Testing
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Quality is the cornerstone of our operation. Every engine that enters our workshop—whether it's destined for a full reconditioning or a simple quality check as a used unit—undergoes a series of stringent tests. This includes 50-point inspections, compression testing, oil pressure monitoring, and thorough internal assessments for wear and tear. Our commitment to precision means we only use OEM or high-spec alternative parts in our builds. This uncompromising approach to quality control is why we confidently supply engines to both individual motorists and professional garages across the country.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    Seamless Supply and <span className="text-primary italic">Nationwide Fitting</span>
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Finding the right engine is only half the battle; proper installation is critical for long-term performance. Vogue Technics provides a comprehensive end-to-end service, including fast nationwide delivery and professional "Supply and Fit" options. We operate our own recovery network, allowing us to collect your vehicle from anywhere in the UK and bring it to our specialist facility. Our technicians handle the entire replacement process, ensuring all ancillary components are correctly integrated and the engine electronics are perfectly calibrated, giving you a turn-key solution to your engine failure.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">
                    The <span className="text-primary italic">Vogue Technics</span> Advantage
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Choosing Vogue Technics means choosing peace of mind without the main dealer price tag. Customers typically save up to 40% compared to dealer rates while receiving a service that is often more specialized and personal. We back all our workmanship with comprehensive written warranties, and our "Main Dealer Sourced" extended coverage options provide up to 24 months of additional protection. Whether you are dealing with a timing chain failure, a snapped crankshaft, or high-mileage wear, our experts are here to provide honest, professional advice and a transparent roadmap to getting your vehicle back on the road safely and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST WORKSHOP FEATURE */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border-8 border-slate-50 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Vogue Technics Engine Workshop" 
                  width={800} 
                  height={1000} 
                  className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                {/* Float Badge */}
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="space-y-1">
                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter italic">Expert Technicians</h4>
                    <p className="text-white/80 text-sm font-bold uppercase tracking-widest">State of the art repairs and diagnostics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Top-Quality Specialist <br />
                  <span className="text-primary italic">Engine Repair Specialist</span>
                </h2>
                <div className="h-2 w-32 bg-primary rounded-full" />
              </div>
              
              <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  With over 20 years of experience facilitating vehicle owners, we strive to provide the best servicing and fitting facility to the locals of Grays, Essex, regardless of what model they drive. As a trusted Engine Specialist and Land Rover Specialist, our workshop is the preferred choice for drivers searching for a specialist near me for repairs, fitting, or professional diagnostics.
                </p>
                <p>
                  With substantial investment in state-of-the-art facilities and the most updated equipment specialised for engine repair, servicing, and fitting of engines, we are the top choice for locals and have gained their trust through dedication to our craft.
                </p>
                <p>
                  Our testimonials prove the quality and devotion we bring to our services and our clients. Visit us for complete peace of mind, expert service, and trusted workmanship backed by true specialists in Range Rover engine works, BMW engines repair and Land Rover engine rebuild services.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/contact-us" className="inline-flex items-center gap-6 text-primary font-black text-3xl hover:translate-x-12 transition-all uppercase tracking-tighter italic group">
                  Book Specialist Now <ArrowRight className="w-12 h-12 group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic"
          >
            NEED AN EXPERT OPINION?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-50 mb-16 max-w-3xl mx-auto font-medium"
          >
            Our master technicians are ready to diagnose and resolve your engine issues properly. Contact us for a free quote today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <a href="tel:01375531355" className="bg-white text-primary font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-50 text-xl uppercase tracking-widest min-w-[320px]">
              CALL 01375 531355
            </a>
            <Link href="/contact-us" className="bg-slate-900 text-white font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-800 text-xl uppercase tracking-widest min-w-[320px] border border-white/10">
              REQUEST QUOTE ONLINE
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full -ml-64 -mb-64 blur-3xl pointer-events-none"></div>
      </section>

      <PartnerLogos />
    </div>
  );
}
