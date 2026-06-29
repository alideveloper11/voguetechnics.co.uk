import Link from "next/link";

type UkWideServiceSectionProps = {
  title: string;
  paragraphs: string[];
  panelTitle: string;
  panelParagraph: string;
};

export default function UkWideServiceSection({
  title,
  paragraphs,
  panelTitle,
  panelParagraph,
}: UkWideServiceSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {title}
            </h2>
            <div className="h-1 w-24 rounded-full bg-primary" />
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-900 text-white p-8 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold">{panelTitle}</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              {panelParagraph}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-4 font-bold text-white transition-all hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Free Engine Quote
              </Link>
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Call Us and Speak to a Specialist Today
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition-all hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Book an Engine Inspection at Our Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
