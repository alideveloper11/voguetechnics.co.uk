import { Metadata } from "next";
import LandRoverDiscoverySportEnginesClient from "./LandRoverDiscoverySportEnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Discovery Sport Engine Repair, Rebuild & Replacement — Specialists in Grays, Essex",
  description:
    "Vogue Technics are Land Rover Discovery Sport engine specialists in Grays, Essex. Ingenium and Td4 repairs, rebuilds, replacements, timing chains/belts, turbos, head gaskets and health checks — transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-discovery-sport-engines" },
};

export default function LandRoverDiscoverySportEnginesPage() {
  return <LandRoverDiscoverySportEnginesClient />;
}

