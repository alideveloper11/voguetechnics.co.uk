import { CheckCircle2 } from "lucide-react";

type AreasDetailCoverageSectionProps = {
  heading: string;
  paragraphs: string[];
  localPlaces: string[];
  vehicleCoverage: string[];
};

export default function AreasDetailCoverageSection({
  heading,
  paragraphs,
  localPlaces,
  vehicleCoverage,
}: AreasDetailCoverageSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            Coverage Detail
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {heading}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900">
              Local Places
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {localPlaces.map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-bold text-slate-700"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900">
              Vehicles and work we cover
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {vehicleCoverage.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
