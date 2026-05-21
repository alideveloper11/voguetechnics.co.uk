import { Metadata } from "next";
import EnginesPortalClient from "./EnginesPortalClient";

export const metadata: Metadata = {
  title: "Engine Repair, Rebuild & Replacement Specialists   Vogue Technics, ",
  description:
    "Vogue Technics are prestige engine specialists in , covering Range Rover, Land Rover, Jaguar, Audi, and BMW. Engine repair, rebuild, replacement, diagnostics, turbos, timing chains and head gaskets with written quotes and warranty.",
  alternates: {
    canonical: "/engines",
  },
};

export default function EnginesPortalPage() {
  return <EnginesPortalClient />;
}
