import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw2SeriesEnginesClient from "./Bmw2SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw2Series;

export default function Bmw2SeriesEnginesPage() {
  return <Bmw2SeriesEnginesClient />;
}

