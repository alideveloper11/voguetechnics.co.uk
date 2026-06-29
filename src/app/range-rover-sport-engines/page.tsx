import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverSportEnginesClient from "./RangeRoverSportEnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverSport;

export default function RangeRoverSportEnginesPage() {
  return <RangeRoverSportEnginesClient engineCodes={getEngineCodesEntry("range-rover-sport-engines")} />;
}

