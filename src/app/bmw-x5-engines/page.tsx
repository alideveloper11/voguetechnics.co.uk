import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import BmwX5EnginesClient from "./BmwX5EnginesClient";

export const metadata: Metadata = pageMetadata.bmwX5;

export default function BmwX5EnginesPage() {
  return <BmwX5EnginesClient />;
}

