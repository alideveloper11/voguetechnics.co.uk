import { Metadata } from "next";
import RangeRoverEnginesClient from "./RangeRoverEnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Engines - Reconditioned & Used Land Rover Specialists",
  description: "Expert Range Rover and Land Rover Engine Rebuild & Replacement. Save up to 40% with Vogue Technics. Nationwide delivery and 6 months warranty across the UK.",
  alternates: {
    canonical: "/range-rover-engines",
  },
};

export default function RangeRoverEnginesPage() {
  return <RangeRoverEnginesClient />;
}
