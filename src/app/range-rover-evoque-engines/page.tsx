import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverEvoqueEnginesClient from "./RangeRoverEvoqueEnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverEvoque;

export default function RangeRoverEvoqueEnginesPage() {
  return <RangeRoverEvoqueEnginesClient engineCodes={getEngineCodesEntry("range-rover-evoque-engines")} />;
}

