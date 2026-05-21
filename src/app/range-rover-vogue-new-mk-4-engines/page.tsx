import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverVogueMk4EnginesClient from "./RangeRoverVogueMk4EnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Vogue MK4 Engines   Expert Rebuilds, Repairs & Replacements Across the UK",
  description:
    "Vogue Technics are Range Rover Vogue MK4 (L405) engine specialists . Expert rebuilds, repairs, replacements and supply & fit   transparent pricing and warranty-backed workmanship.",
  alternates: { canonical: "/range-rover-vogue-new-mk-4-engines" },
};

export default function RangeRoverVogueMk4EnginesPage() {
  return <RangeRoverVogueMk4EnginesClient engineCodes={getEngineCodesEntry("range-rover-vogue-new-mk-4-engines")} />;
}

