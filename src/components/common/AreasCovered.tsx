import { motion } from "framer-motion";
import { areaObjects } from "@/data/areasData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AreasCovered() {
  const displayedAreas = areaObjects.slice(0, 10);

  return (
    <section id="areas" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight italic leading-none">Areas We <span className="text-primary italic italic">Cover</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 text-lg font-medium">
            We provide specialist engine services and vehicle recovery in all surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedAreas.map((area, idx) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                href={`/areas-we-cover/${area.slug}`}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-3 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all group h-full"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-extrabold text-slate-700 group-hover:text-primary transition-colors text-sm md:text-base uppercase tracking-tight">{area.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Link 
                href="/areas-we-cover"
                className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
            >
                View All 54+ Service Areas <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}
