import { Metadata } from "next";
import RangeRoverEnginesClient from "./RangeRoverEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Engine Specialist in Grays, UK – Expert Rebuilds, Repairs & Replacements",
  description:
    "Vogue Technics are trusted Range Rover engine specialists in Grays, Essex, offering engine rebuilds, repairs, replacements, timing chains/belts, turbos and head gasket work. 25+ years experience, warranty-backed work, and transparent pricing.",
  alternates: {
    canonical: "/range-rover-engines",
  },
};

export default function RangeRoverEnginesPage() {
  return <RangeRoverEnginesClient />;
}
