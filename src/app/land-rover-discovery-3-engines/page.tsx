import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscovery3EnginesClient from "./LandRoverDiscovery3EnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Discovery 3 Engine Specialists   Rebuilds, Repairs & Replacements Across the UK",
  description:
    "Vogue Technics are Land Rover Discovery 3 engine specialists . Head gaskets, timing chains/belts, turbos, rebuilds, repairs, replacements and health checks   transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-discovery-3-engines" },
};

export default function LandRoverDiscovery3EnginesPage() {
  return <LandRoverDiscovery3EnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-3-engines")} />;
}

