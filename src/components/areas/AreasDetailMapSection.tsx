import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { CoverageArea } from "@/components/areas/areasPageData";

type AreasDetailMapSectionProps = {
  areaName: string;
  areaSlug: string;
  places: string[];
  allAreas: CoverageArea[];
};

export default function AreasDetailMapSection({
  areaName,
  areaSlug,
  places,
  allAreas,
}: AreasDetailMapSectionProps) {
  const mapQuery = encodeURIComponent(`${areaName} UK ${places[0] ?? ""}`.trim());
  const embedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            Map & Coverage
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {areaName} location map
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg">
            Use the map to see the current area, then jump to another location if you need a different coverage page.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900">
                    {areaName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Map preview and collection area
                  </p>
                </div>
              </div>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Open Maps
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="aspect-[16/11] w-full">
              <iframe
                title={`${areaName} map`}
                src={embedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900">
              Other locations
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              Browse the full set of area pages from this section. The current area is highlighted.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {allAreas.map((area) => {
                const active = area.slug === areaSlug;

                return (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-sm font-bold">{area.name}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.18em]">
                      {active ? "Current" : "Open"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
