import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverSportSVREnginesClient from "./RangeRoverSportSVREnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverSportSvr;

export default function RangeRoverSportSVREnginesPage() {
  return <RangeRoverSportSVREnginesClient engineCodes={getEngineCodesEntry("range-rover-sport-svr-engines")} />;
}

