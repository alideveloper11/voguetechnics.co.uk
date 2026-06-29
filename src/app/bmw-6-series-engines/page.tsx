import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw6SeriesEnginesClient from "./Bmw6SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw6Series;

export default function Bmw6SeriesEnginesPage() {
  return <Bmw6SeriesEnginesClient />;
}

