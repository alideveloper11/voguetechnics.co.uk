import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import LandRoverDefenderEnginesClient from "./LandRoverDefenderEnginesClient";

export const metadata: Metadata = pageMetadata.landRoverDefender;

export default function LandRoverDefenderEnginesPage() {
  return <LandRoverDefenderEnginesClient engineCodes={getEngineCodesEntry("land-rover-defender-engines")} />;
}

