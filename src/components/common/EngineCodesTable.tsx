import Link from "next/link";

export interface EngineRow {
  make: string;
  model: string;
  engineCode: string;
  engineCodeHref?: string;
  valves: number | string;
  actualCC: number | string;
  powerKw: number | string;
  powerHp: number | string;
  yearRange: string;
}

interface EngineCodesTableProps {
  title?: string;
  rows: EngineRow[];
  quoteHref?: string;
}

export default function EngineCodesTable({
  title,
  rows,
  quoteHref = "/contact-us",
}: EngineCodesTableProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-10">
            {title}
          </h2>
        )}

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                {["Make", "Model", "Engine Code", "Valves", "Actual CC", "Power kw / hp", "Year Range", "Action"].map(
                  (col) => (
                    <th
                      key={col}
                      className="px-4 py-4 font-semibold text-center border-r border-slate-700 last:border-r-0 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">{row.make}</td>
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">{row.model}</td>
                  <td className="px-4 py-4 text-center border-r border-slate-200">
                    {row.engineCodeHref ? (
                      <Link href={row.engineCodeHref} className="text-blue-600 hover:underline font-medium">
                        {row.engineCode}
                      </Link>
                    ) : (
                      <span className="text-blue-600 font-medium">{row.engineCode}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">{row.valves}</td>
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">{row.actualCC}</td>
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">
                    {row.powerKw} kw / {row.powerHp} hp
                  </td>
                  <td className="px-4 py-4 text-center border-r border-slate-200 text-slate-700">{row.yearRange}</td>
                  <td className="px-4 py-4 text-center">
                    <Link
                      href={quoteHref}
                      className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
                    >
                      Get Quote
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {rows.map((row, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                <span className="font-semibold text-sm">{row.make} - {row.model}</span>
                {row.engineCodeHref ? (
                  <Link href={row.engineCodeHref} className="text-blue-300 hover:underline font-medium text-sm">
                    {row.engineCode}
                  </Link>
                ) : (
                  <span className="text-blue-300 font-medium text-sm">{row.engineCode}</span>
                )}
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { label: "Valves", value: row.valves },
                  { label: "Actual CC", value: row.actualCC },
                  { label: "Power", value: `${row.powerKw} kw / ${row.powerHp} hp` },
                  { label: "Year Range", value: row.yearRange },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between px-4 py-2.5 text-sm">
                    <span className="text-slate-500 font-medium">{label}</span>
                    <span className="text-slate-800">{value}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 bg-slate-50">
                <Link
                  href={quoteHref}
                  className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
