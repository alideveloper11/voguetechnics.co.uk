import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import AudiEnginesClient from "./AudiEnginesClient";

export const metadata: Metadata = pageMetadata.audiEngines;

export default function AudiEnginesPage() {
  return <AudiEnginesClient />;
}
