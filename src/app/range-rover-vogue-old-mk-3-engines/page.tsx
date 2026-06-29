import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverVogueMk3EnginesClient from "./RangeRoverVogueMk3EnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverVogueMk3;

export default function RangeRoverVogueMk3EnginesPage() {
  return <RangeRoverVogueMk3EnginesClient engineCodes={getEngineCodesEntry("range-rover-vogue-old-mk-3-engines")} />;
}

