import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw1SeriesEnginesClient from "./Bmw1SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw1Series;

export default function Bmw1SeriesEnginesPage() {
  return <Bmw1SeriesEnginesClient />;
}

