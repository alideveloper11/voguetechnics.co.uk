export interface Section {
  title: string;
  paragraphs: string[];
}

interface KeyBenefitsSectionProps {
  keyBenefits: Section[];
  whyAudiHeading?: string;
}

export default function KeyBenefitsSection({
  keyBenefits,
  whyAudiHeading,
}: KeyBenefitsSectionProps) {
  if (!keyBenefits || keyBenefits.length === 0) return null;

  return (
    <div>
      {whyAudiHeading && (
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {whyAudiHeading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyBenefits.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
              {s.title}
            </h3>
            <div className="mt-2 space-y-1.5 text-slate-700 leading-relaxed text-xs">
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
