import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import JaguarEnginesClient from "./JaguarEnginesClient";

export const metadata: Metadata = pageMetadata.jaguarEngines;

export default function JaguarEnginesPage() {
  return <JaguarEnginesClient />;
}
