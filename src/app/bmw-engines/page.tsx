import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import BmwEnginesClient from "./BmwEnginesClient";

export const metadata: Metadata = pageMetadata.bmwEngines;

export default function BmwEnginesPage() {
  return <BmwEnginesClient />;
}
