export interface TestimonialItem {
  by: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
        What Our Customers Say
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.by}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="text-amber-500 font-black tracking-wide">
                ★★★★★
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed italic">
                “{t.quote}”
              </p>
            </div>
            <div className="mt-5 border-t border-slate-100 pt-5 text-sm font-bold text-slate-900">
              {t.by}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}