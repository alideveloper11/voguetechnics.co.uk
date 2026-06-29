import { CheckCircle2 } from "lucide-react";

type SpecialistsBehindEveryJobSectionProps = {
  title: string;
  eyebrow: string;
  intro: string;
  supportingTitle: string;
  supportingParagraphs: string[];
  checklistItems: string[];
};

export default function SpecialistsBehindEveryJobSection({
  title,
  eyebrow,
  intro,
  supportingTitle,
  supportingParagraphs,
  checklistItems,
}: SpecialistsBehindEveryJobSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h2>
            <div className="h-1 w-24 rounded-full bg-primary" />
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
              <p>{intro}</p>
              <p>That difference is what Vogue Technics represents.</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              {supportingTitle}
            </h3>
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              {supportingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-lg bg-primary/10 p-1.5 text-primary flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
