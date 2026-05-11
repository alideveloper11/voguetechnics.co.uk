import { Metadata } from "next";
import Bmw2SeriesEnginesClient from "./Bmw2SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 2 Series Engine Rebuild   Expert Reconditioning, Repairs & Replacements in the UK",
  description:
    "BMW 2 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    transparent quotes, written warranty, and specialist BMW engine expertise.",
  alternates: {
    canonical: "/bmw-2-series-engines",
  },
};

export default function Bmw2SeriesEnginesPage() {
  return <Bmw2SeriesEnginesClient />;
}

