import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Bmw7SeriesEnginesClient from "./Bmw7SeriesEnginesClient";

export const metadata: Metadata = pageMetadata.bmw7Series;

export default function Bmw7SeriesEnginesPage() {
  return <Bmw7SeriesEnginesClient />;
}

