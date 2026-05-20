import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverSportEnginesClient from "./RangeRoverSportEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Sport Engines – Expert Rebuild, Repair & Replacement in , UK",
  description:
    "Vogue Technics are Range Rover Sport engine specialists . Engine rebuilds, repairs, replacements, timing chains, turbos, head gaskets, health checks and more   transparent pricing and warranty-backed workmanship.",
  alternates: { canonical: "/range-rover-sport-engines" },
};

export default function RangeRoverSportEnginesPage() {
  return <RangeRoverSportEnginesClient engineCodes={getEngineCodesEntry("range-rover-sport-engines")} />;
}

