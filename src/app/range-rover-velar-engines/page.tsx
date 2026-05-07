import { Metadata } from "next";
import RangeRoverVelarEnginesClient from "./RangeRoverVelarEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Velar Engines – Specialist Supply, Rebuild & Replacement in Grays, UK",
  description:
    "Vogue Technics are Range Rover Velar engine specialists in Grays, Essex. Used & reconditioned Velar engines for sale, plus rebuilds, repairs, replacements, timing chains/belts, turbos and head gasket work — with warranty-backed workmanship.",
  alternates: { canonical: "/range-rover-velar-engines" },
};

export default function RangeRoverVelarEnginesPage() {
  return <RangeRoverVelarEnginesClient />;
}

