import { Metadata } from "next";
import Bmw3SeriesEnginesClient from "./Bmw3SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 3 Series Engine Rebuild — Expert Repairs, Reconditioning & Replacements Across the UK",
  description:
    "BMW 3 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW engine expertise with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-3-series-engines" },
};

export default function Bmw3SeriesEnginesPage() {
  return <Bmw3SeriesEnginesClient />;
}

