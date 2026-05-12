import { Metadata } from "next";
import Bmw6SeriesEnginesClient from "./Bmw6SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 6 Series Engine Rebuild   Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW 6 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-6-series-engines" },
};

export default function Bmw6SeriesEnginesPage() {
  return <Bmw6SeriesEnginesClient />;
}

