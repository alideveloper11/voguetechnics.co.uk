import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import JaguarXFEnginesClient from "./JaguarXFEnginesClient";

export const metadata: Metadata = pageMetadata.jaguarXf;

export default function JaguarXFEnginesPage() {
  return <JaguarXFEnginesClient engineCodes={getEngineCodesEntry("jaguar-xf-engines")} />;
}

