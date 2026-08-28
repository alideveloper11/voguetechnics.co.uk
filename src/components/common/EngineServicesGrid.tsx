export interface ServiceItem {
  title: string;
  paragraphs: string[];
}

interface EngineServicesSectionProps {
  heading?: string;
  services?: ServiceItem[];
}

export default function EngineServicesSection({
  heading = "Our Engine Services",
  services,
}: EngineServicesSectionProps) {
  if (!services || services.length === 0) return null;

  return (
    <div className="space-y-4">
      {heading && (
        <h2 className="text-lg font-extrabold text-slate-900 px-1">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              {s.title}
            </h3>
            <div className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-4">
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
