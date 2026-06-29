import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw5SeriesEnginesClient from "./Bmw5SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw5Series;

export default function Bmw5SeriesEnginesPage() {
  return <Bmw5SeriesEnginesClient />;
}

