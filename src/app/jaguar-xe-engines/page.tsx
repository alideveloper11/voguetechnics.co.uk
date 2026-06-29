import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import { getEngineCodesEntry } from "@/data/engineCodes";
import JaguarXEEnginesClient from "./JaguarXEEnginesClient";

export const metadata: Metadata = pageMetadata.jaguarXe;

export default function JaguarXEEnginesPage() {
  return <JaguarXEEnginesClient engineCodes={getEngineCodesEntry("jaguar-xe-engines")} />;
}

