import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Shield, Truck, Clock, ChevronRight } from "lucide-react";
import { areaObjects } from "@/data/areasData";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";

export const metadata: Metadata = {
  title: "Areas We Cover | Vogue Technics - Nationwide Engine Specialists",
  description: "Vogue Technics provides expert engine reconditioning and fitting services across the UK. Explore our service areas including Grays, London, Essex, and more.",
};

export default function AreasHub() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs items={[{ name: "Areas We Cover", href: "/areas-we-cover" }]} />

        {/* Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/10 text-primary font-bold tracking-widest text-xs mb-6 uppercase border border-primary/20">
            <MapPin className="w-4 h-4" /> Nationwide Service
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none italic">
            Service Areas <br/><span className="text-primary italic italic">Across the UK</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            From our state-of-the-art facility in Grays, we offer specialist engine repair, replacement, and nationwide recovery services.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                <Truck className="w-12 h-12 text-primary group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">Nationwide Recovery</h3>
                <p className="text-slate-500 group-hover:text-emerald-50 text-sm">We can collect your vehicle from anywhere in the UK and bring it to our workshop.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                <Shield className="w-12 h-12 text-primary group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">6 Months Warranty</h3>
                <p className="text-slate-500 group-hover:text-emerald-50 text-sm">All repairs and replacements performed in our facility come with a full guarantee.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                <Clock className="w-12 h-12 text-primary group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">Fast Turnaround</h3>
                <p className="text-slate-500 group-hover:text-emerald-50 text-sm">Most engine replacements and rebuilds are completed within 7-10 working days.</p>
            </div>
        </div>

        {/* Areas Grid */}
        <div className="space-y-12 mb-24">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center">Browse all <span className="text-primary italic">Locations</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {areaObjects.map((area) => (
                <Link
                key={area.slug}
                href={`/areas-we-cover/${area.slug}`}
                className="bg-white border-2 border-slate-100 p-6 rounded-3xl flex items-center justify-between group hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                <span className="font-bold text-slate-800 group-hover:text-primary transition-colors text-sm uppercase tracking-tight">
                    {area.name}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
            ))}
            </div>
        </div>

        <PartnerLogos />
      </div>
    </div>
  );
}
