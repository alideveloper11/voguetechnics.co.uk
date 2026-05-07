import { Metadata } from "next";
import LandRoverDiscovery4EnginesClient from "./LandRoverDiscovery4EnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Discovery 4 Engine Specialists — Rebuilds, Repairs & Replacements Across the UK",
  description:
    "Vogue Technics are Land Rover Discovery 4 engine specialists in Grays, Essex. Head gaskets, timing chains/belts, turbos, rebuilds, repairs, replacements and health checks — transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-discovery-4-engines" },
};

export default function LandRoverDiscovery4EnginesPage() {
  return <LandRoverDiscovery4EnginesClient />;
}

