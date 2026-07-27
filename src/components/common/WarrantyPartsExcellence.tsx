import { ShieldCheck } from "lucide-react";

export default function WarrantyPartsExcellence() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-2 border-emerald-300/40 bg-primary-dark p-5 md:p-7 shadow-2xl">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[80px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-300" />
          <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">
            <span className="text-white">Warranty &amp; </span>
            <span className="text-emerald-300">Parts Excellence</span>
          </h3>
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-emerald-50/90">
          All our engine services and rebuilds are performed using{" "}
          <strong className="font-bold text-white">Genuine OEM Parts</strong>{" "}
          to ensure maximum longevity and performance for your vehicle.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
              Standard Protection:
            </div>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-white">
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                1-month warranty for second-hand engine swaps
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                6-month warranty for engine reconditioning
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                12 to 24-month dealer-level warranty available
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
              Looking for extended coverage?
            </div>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white">
              We also offer{" "}
              <strong className="font-bold">up to 24 Months Warranty</strong>,
              sourced directly from main dealers. Please note, this option
              comes at a higher cost due to the extended protection and
              premium coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
