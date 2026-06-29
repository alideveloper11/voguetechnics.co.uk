import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverVogueMk4EnginesClient from "./RangeRoverVogueMk4EnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverVogueMk4;

export default function RangeRoverVogueMk4EnginesPage() {
  return <RangeRoverVogueMk4EnginesClient engineCodes={getEngineCodesEntry("range-rover-vogue-new-mk-4-engines")} />;
}

