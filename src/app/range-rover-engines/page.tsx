import { Metadata } from "next";
import RangeRoverEnginesClient from "./RangeRoverEnginesClient";

export const metadata: Metadata = {
  title: "Superior Range Rover Engines - Reconditioned & Used | Vogue Technics",
  description: "Experience the Vogue Technics difference with top-quality reconditioned and used Range Rover engines. Our expert service, extensive stock, and great deals will get your vehicle back on the road in no time.",
  alternates: {
    canonical: "/range-rover-engines",
  },
};

export default function RangeRoverEnginesPage() {
  return <RangeRoverEnginesClient />;
}
