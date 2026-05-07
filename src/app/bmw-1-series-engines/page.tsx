import { Metadata } from "next";
import Bmw1SeriesEnginesClient from "./Bmw1SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 1 Series Engine Rebuild — Specialist Repairs, Replacements & Reconditioning Across the UK",
  description:
    "BMW 1 Series engine rebuild, repair, replacement and reconditioning across the UK. Specialist N47/B47 engine expertise from Vogue Technics in Grays, Essex with transparent quotes and written warranty.",
  alternates: {
    canonical: "/bmw-1-series-engines",
  },
};

export default function Bmw1SeriesEnginesPage() {
  return <Bmw1SeriesEnginesClient />;
}

