import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverFreelander2EnginesClient from "./LandRoverFreelander2EnginesClient";

export const metadata: Metadata = pageMetadata.freelander2;

export default function LandRoverFreelander2EnginesPage() {
  return <LandRoverFreelander2EnginesClient engineCodes={getEngineCodesEntry("land-rover-freelander-2-engines")} />;
}

