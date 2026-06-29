import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import BmwX1EnginesClient from "./BmwX1EnginesClient";

export const metadata: Metadata = pageMetadata.bmwX1;

export default function BmwX1EnginesPage() {
  return <BmwX1EnginesClient />;
}

