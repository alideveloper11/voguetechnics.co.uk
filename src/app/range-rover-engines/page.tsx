import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import RangeRoverEnginesClient from "./RangeRoverEnginesClient";

export const metadata: Metadata = pageMetadata.rangeRoverEngines;

export default function RangeRoverEnginesPage() {
  return <RangeRoverEnginesClient />;
}
