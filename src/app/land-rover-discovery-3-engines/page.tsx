import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscovery3EnginesClient from "./LandRoverDiscovery3EnginesClient";

export const metadata: Metadata = pageMetadata.discovery3;

export default function LandRoverDiscovery3EnginesPage() {
  return <LandRoverDiscovery3EnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-3-engines")} />;
}

