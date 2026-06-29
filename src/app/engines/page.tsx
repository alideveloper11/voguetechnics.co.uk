import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import EnginesPortalClient from "./EnginesPortalClient";

export const metadata: Metadata = pageMetadata.engines;

export default function EnginesPortalPage() {
  return <EnginesPortalClient />;
}
