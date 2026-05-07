import { Metadata } from "next";
import RangeRoverSportEnginesClient from "./RangeRoverSportEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Sport Engines – Expert Rebuild, Repair & Replacement in Grays, UK",
  description:
    "Vogue Technics are Range Rover Sport engine specialists in Grays, Essex. Engine rebuilds, repairs, replacements, timing chains, turbos, head gaskets, health checks and more — transparent pricing and warranty-backed workmanship.",
  alternates: { canonical: "/range-rover-sport-engines" },
};

export default function RangeRoverSportEnginesPage() {
  return <RangeRoverSportEnginesClient />;
}

