import Link from "next/link";

type AreaItem = {
  slug?: string;
  name: string;
  description: string;
};

type AreasCoverageGridProps = {
  label: string;
  heading: string;
  description: string;
  areas: AreaItem[];
};

export default function AreasCoverageGrid({
  label,
  heading,
  description,
  areas,
}: AreasCoverageGridProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.slug ? `/areas/${area.slug}` : "/areas"}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-colors hover:border-primary/30 hover:bg-white"
            >
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Coverage
              </div>
              <h3 className="mt-3 text-lg font-black tracking-tight text-slate-900">
                {area.name}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
