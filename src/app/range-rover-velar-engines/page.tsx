import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverVelarEnginesClient from "./RangeRoverVelarEnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverVelar;

export default function RangeRoverVelarEnginesPage() {
  return <RangeRoverVelarEnginesClient engineCodes={getEngineCodesEntry("range-rover-velar-engines")} />;
}

