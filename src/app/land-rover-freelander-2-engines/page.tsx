import { Metadata } from "next";
import LandRoverFreelander2EnginesClient from "./LandRoverFreelander2EnginesClient";

export const metadata: Metadata = {
  title: "Land Rover Freelander 2 Engine Repair, Rebuild & Replacement — Specialists in Grays, Essex",
  description:
    "Vogue Technics are Land Rover Freelander 2 engine specialists in Grays, Essex. TD4/SD4 repairs, rebuilds, replacements, timing belts, turbos, head gaskets and health checks — transparent pricing and written warranty.",
  alternates: { canonical: "/land-rover-freelander-2-engines" },
};

export default function LandRoverFreelander2EnginesPage() {
  return <LandRoverFreelander2EnginesClient />;
}

