import { Metadata } from "next";
import Bmw4SeriesEnginesClient from "./Bmw4SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 4 Series Engine Rebuild — Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 4 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-4-series-engines" },
};

export default function Bmw4SeriesEnginesPage() {
  return <Bmw4SeriesEnginesClient />;
}

