import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import LandRoverEnginesClient from "./LandRoverEnginesClient";

export const metadata: Metadata = pageMetadata.landRoverEngines;

export default function LandRoverEnginesPage() {
  return <LandRoverEnginesClient />;
}
