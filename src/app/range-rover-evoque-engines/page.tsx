import { Metadata } from "next";
import RangeRoverEvoqueEnginesClient from "./RangeRoverEvoqueEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Evoque Engines – Specialist Supply, Rebuild & Replacement in , UK",
  description:
    "Vogue Technics are Range Rover Evoque engine specialists . Used & reconditioned Evoque engines for sale, plus rebuilds, repairs, replacements, timing chains/belts, turbos and head gasket work   with warranty-backed workmanship.",
  alternates: { canonical: "/range-rover-evoque-engines" },
};

export default function RangeRoverEvoqueEnginesPage() {
  return <RangeRoverEvoqueEnginesClient />;
}

