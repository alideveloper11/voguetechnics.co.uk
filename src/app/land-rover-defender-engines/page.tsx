import { Metadata } from "next";
import LandRoverDefenderEnginesClient from "./LandRoverDefenderEnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Defender Engine Specialists — Rebuilds, Repairs & Replacements Across the UK",
  description:
    "Vogue Technics are Land Rover Defender engine specialists in Grays, Essex. Engine rebuilds, repairs, replacements, timing chains/belts, turbos, head gaskets and health checks — transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-defender-engines" },
};

export default function LandRoverDefenderEnginesPage() {
  return <LandRoverDefenderEnginesClient />;
}

