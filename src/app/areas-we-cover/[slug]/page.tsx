import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Search, Phone, MapPin, Truck, Wrench, ArrowRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { areaObjects } from "@/data/areasData";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import RegSearch from "@/components/common/RegSearch";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = areaObjects.find((a) => a.slug === slug);
  
  if (!area) return { title: "Area Not Found" };

  return {
    title: `Expert Engine Specialists in ${area.name} | Vogue Technics`,
    description: `Vogue Technics provides professional engine reconditioning, replacement, and repair services for Range Rover and Land Rover in ${area.name}. Get a quote today!`,
    alternates: {
      canonical: `/areas-we-cover/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return areaObjects.map((area) => ({
    slug: area.slug,
  }));
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areaObjects.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs items={[
          { name: "Areas We Cover", href: "/areas-we-cover" },
          { name: area.name, href: `/areas-we-cover/${area.slug}` }
        ]} />

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24 mt-12 bg-slate-900 rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden text-white shadow-2xl text-left">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/car_bgg.jpg"
              alt={`Engine Service in ${area.name}`}
              fill
              className="object-cover opacity-20 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
          </div>
          
          <div className="relative z-10 space-y-8 w-full lg:w-[55%]">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-bold tracking-widest text-xs uppercase border border-primary/30 shadow-[0_0_20px_rgba(25,135,84,0.3)]">
              <MapPin className="w-4 h-4" /> Supporting {area.name}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] italic">
              Elite Engine <br/>Specialist <span className="text-primary italic italic underline decoration-primary/20 underline-offset-[12px] decoration-4">In {area.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium uppercase tracking-widest max-w-xl">
              Used & Reconditioned Engines <br/>
              <span className="text-white">With Nationwide Recovery From {area.name}</span>
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-[45%] flex flex-col items-center lg:items-end">
            <RegSearch className="lg:scale-[1.1] lg:origin-right" />
          </div>
        </div>

        {/* Local Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24 overflow-hidden">
            <div className="space-y-10 group">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none underline decoration-primary decoration-8 underline-offset-8 decoration-primary/20">Vehicle Care <br/><span className="text-primary italic">for Owners in {area.name}</span></h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-medium">
                    <p>
                        Owners in <strong>{area.name}</strong> know that premium vehicles like Range Rover and Land Rover require specialist care. At Vogue Technics, we pride ourselves on being the UK's leading authorities on engine reconditioning and major mechanical repairs.
                    </p>
                    <p>
                        If your vehicle is stranded in {area.name}, our professional recovery team can pick it up and transport it securely to our main workshop. We use specialized diagnostics that go far beyond standard garage checks, ensuring the root cause of any engine failure or power loss is properly addressed.
                    </p>
                    <div className="bg-slate-50 p-10 rounded-[3rem] border-2 border-slate-100 font-bold text-slate-900 shadow-xl relative overflow-hidden italic text-xl group-hover:scale-[1.02] transition-transform duration-500">
                      "We bring 20+ years of specialist engineering directly to the {area.name} community. No more dealership prices—just expert results."
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {[
                { icon: Truck, title: "Recovery", desc: `Doorstep pick-up from ${area.name}` },
                { icon: Shield, title: "Warranty", desc: "6-month guarantee on all parts" },
                { icon: Wrench, title: "Parts", desc: "Genuine OEM parts used for rebuilds" },
                { icon: Search, title: "Tested", desc: "Rigorous high-pressure testing" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-primary/40 transition-colors group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <item.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg uppercase tracking-tight mb-2 italic">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50 rounded-[4rem] mb-24 px-8 md:px-16 border border-slate-100">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">Common Questions <br/><span className="text-primary italic">for {area.name} Residents</span></h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Expert advice on engine specialist services</p>
                </div>
                
                <div className="space-y-6">
                    {[
                        { q: `Can you collect my vehicle from ${area.name}?`, a: `Yes, we offer professional vehicle recovery services throughout ${area.name}. We can securely transport your vehicle to our main workshop for specialist diagnostics and repair.` },
                        { q: "How long does a typical engine rebuild take?", a: "Most engine rebuilds and replacements are completed within 7 to 10 working days, depending on the specific model and parts availability." },
                        { q: "Do you offer a warranty on your engines?", a: "Every engine we recondition or install comes with a comprehensive 6-month unlimited mileage warranty for your full peace of mind." },
                        { q: "Are you using genuine parts?", a: "We exclusively use genuine or high-quality OEM (Original Equipment Manufacturer) parts for all our internal engine repairs and replacements." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/20 transition-colors">
                            <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3 italic">Q: {faq.q}</h4>
                            <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-slate-50 rounded-[5rem] mb-24 px-8 md:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
                <div className="space-y-10">
                    <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Need More <br/><span className="text-primary italic">Information?</span></h2>
                    <p className="text-slate-600 text-xl font-medium leading-relaxed">If you have specific questions or need advice on a custom build, send us a message and our specialists will contact you directly.</p>
                    <div className="space-y-4 pt-6">
                        <a href="tel:01375531355" className="flex items-center gap-6 p-8 bg-white border border-slate-200 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-slate-400 font-bold uppercase text-[0.65rem] tracking-widest">Call Today</p>
                                <p className="text-slate-900 font-black text-3xl tracking-tighter">01375 531355</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 shadow-2xl rounded-[3rem] overflow-hidden">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center mb-16">
            <Link href="/areas-we-cover" className="inline-flex items-center gap-6 text-primary font-black text-xl hover:-translate-x-12 transition-all uppercase tracking-tighter italic">
                <ArrowRight className="w-12 h-12 rotate-180" /> Back to areas hub
            </Link>
        </div>
        
        <PartnerLogos />
      </div>
    </div>
  );
}
