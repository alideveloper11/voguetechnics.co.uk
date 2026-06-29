import { ArrowRight } from "lucide-react";
import Link from "next/link";

type EngineRepairCostSectionProps = {
  title: string;
  paragraphs: string[];
  quoteTitle: string;
  quoteText: string;
};

export default function EngineRepairCostSection({
  title,
  paragraphs,
  quoteTitle,
  quoteText,
}: EngineRepairCostSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">
              Request a written quote
            </p>
            <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-tight mb-4">
              {quoteTitle}
            </h3>
            <p className="text-slate-300 font-medium leading-relaxed mb-8">
              {quoteText}
            </p>
            <div className="space-y-4">
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-sm"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="w-full inline-flex items-center justify-center gap-3 bg-white/10 border border-white/10 text-white font-black px-8 py-5 rounded-2xl hover:bg-white/15 transition-all uppercase tracking-widest text-sm"
              >
                Call 01375 531355
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
