import { Metadata } from "next";
import Bmw5SeriesEnginesClient from "./Bmw5SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 5 Series Engine Rebuild — Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 5 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-5-series-engines" },
};

export default function Bmw5SeriesEnginesPage() {
  return <Bmw5SeriesEnginesClient />;
}

