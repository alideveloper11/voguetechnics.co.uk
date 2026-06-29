import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import BmwX3EnginesClient from "./BmwX3EnginesClient";

export const metadata: Metadata = pageMetadata.bmwX3;

export default function BmwX3EnginesPage() {
  return <BmwX3EnginesClient />;
}

