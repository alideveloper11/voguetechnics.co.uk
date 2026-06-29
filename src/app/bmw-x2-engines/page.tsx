import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import BmwX2EnginesClient from "./BmwX2EnginesClient";

export const metadata: Metadata = pageMetadata.bmwX2;

export default function BmwX2EnginesPage() {
  return <BmwX2EnginesClient />;
}
