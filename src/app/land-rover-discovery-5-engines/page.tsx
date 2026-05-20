import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscovery5EnginesClient from "./LandRoverDiscovery5EnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Discovery 5 Engine Repair, Rebuild & Replacement   Specialists Based in ",
  description:
    "Vogue Technics are Land Rover Discovery 5 engine specialists . Ingenium and TDV6 repairs, rebuilds, replacements, timing chains/belts, turbos, head gaskets and health checks   transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-discovery-5-engines" },
};

export default function LandRoverDiscovery5EnginesPage() {
  return <LandRoverDiscovery5EnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-5-engines")} />;
}

