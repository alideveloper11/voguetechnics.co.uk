import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverVogueMk3EnginesClient from "./RangeRoverVogueMk3EnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Vogue MK3 Engines – Expert Rebuilds, Repairs & Replacements in , UK",
  description:
    "Vogue Technics are Range Rover Vogue MK3 (L322) engine specialists . Expert rebuilds, repairs, replacements, timing chains, turbos, head gaskets, health checks and more   with transparent pricing and written warranty.",
  alternates: { canonical: "/range-rover-vogue-old-mk-3-engines" },
};

export default function RangeRoverVogueMk3EnginesPage() {
  return <RangeRoverVogueMk3EnginesClient engineCodes={getEngineCodesEntry("range-rover-vogue-old-mk-3-engines")} />;
}

