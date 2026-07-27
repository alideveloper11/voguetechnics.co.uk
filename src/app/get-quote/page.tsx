import { Metadata } from "next";
import Link from "next/link";
import GetQuoteForm, { type VehicleInfo } from "@/components/forms/GetQuoteForm";
import { lookupVehicle } from "@/app/actions/lookupVehicle";

export const metadata: Metadata = {
  title: { absolute: "Get a Free Quote | Vogue Technics" },
  description: "Request a free, no-obligation quote for engine repair, replacement, rebuild, or any specialist service. BMW, Jaguar, Land Rover & more.",
  alternates: { canonical: "/get-quote" },
};

interface Props {
  searchParams: Promise<{ reg?: string }>;
}

export default async function GetQuotePage({ searchParams }: Props) {
  const { reg } = await searchParams;

  let notFound = false;
  let vehicleInfo: VehicleInfo | undefined;

  if (reg?.trim()) {
    const result = await lookupVehicle(reg.trim());
    if (result.ok) {
      vehicleInfo = { description: result.vehicle.description, data: result.vehicle };
    } else {
      notFound = true;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-[#0c0c0c] pt-36 pb-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/50 hover:text-white/80 transition-colors"
          >
            ‹ Back to Home
          </Link>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Free Quote — No Obligation
          </p>
          <h1 className="text-[36px] font-black leading-tight tracking-tight text-white sm:text-[52px]">
            GET YOUR{" "}
            <span className="italic text-primary">ENGINE QUOTE</span>
          </h1>
          <p className="mt-3 text-[15px] text-white/60 max-w-xl">
            Fill in the form below and one of our engine specialists will respond within 24 hours with honest, no-obligation advice.
          </p>
        </div>
      </div>

      {/* Form area */}
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <GetQuoteForm
          initialReg={reg ?? ""}
          showNotFound={notFound}
          vehicleInfo={vehicleInfo}
        />
      </div>

    </div>
  );
}
