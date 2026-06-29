import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDiscoverySportEnginesClient from "./LandRoverDiscoverySportEnginesClient";

export const metadata: Metadata = pageMetadata.discoverySport;

export default function LandRoverDiscoverySportEnginesPage() {
  return <LandRoverDiscoverySportEnginesClient engineCodes={getEngineCodesEntry("land-rover-discovery-sport-engines")} />;
}

