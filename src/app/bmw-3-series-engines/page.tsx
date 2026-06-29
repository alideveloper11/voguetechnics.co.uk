import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw3SeriesEnginesClient from "./Bmw3SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw3Series;

export default function Bmw3SeriesEnginesPage() {
  return <Bmw3SeriesEnginesClient />;
}

