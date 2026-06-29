import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscovery4EnginesClient from "./LandRoverDiscovery4EnginesClient";

export const metadata: Metadata = pageMetadata.discovery4;

export default function LandRoverDiscovery4EnginesPage() {
  return <LandRoverDiscovery4EnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-4-engines")} />;
}

