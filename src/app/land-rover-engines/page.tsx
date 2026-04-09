import { Metadata } from "next";
import LandRoverEnginesClient from "./LandRoverEnginesClient";

export const metadata: Metadata = {
  title: "Superior Land Rover Engines - Reconditioned & Used | Vogue Technics",
  description: "Experience the Vogue Technics difference with top-quality reconditioned and used Land Rover engines. Our expert service, extensive stock, and great deals will get your vehicle back on the road in no time.",
  alternates: {
    canonical: "/land-rover-engines",
  },
};

export default function LandRoverEnginesPage() {
  return <LandRoverEnginesClient />;
}
