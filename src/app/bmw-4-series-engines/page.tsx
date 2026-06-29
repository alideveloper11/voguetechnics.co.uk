import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw4SeriesEnginesClient from "./Bmw4SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw4Series;

export default function Bmw4SeriesEnginesPage() {
  return <Bmw4SeriesEnginesClient />;
}

