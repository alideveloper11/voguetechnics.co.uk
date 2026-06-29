import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscovery5EnginesClient from "./LandRoverDiscovery5EnginesClient";

export const metadata: Metadata = pageMetadata.discovery5;

export default function LandRoverDiscovery5EnginesPage() {
  return <LandRoverDiscovery5EnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-5-engines")} />;
}

