import { Metadata } from "next";
import Bmw7SeriesEnginesClient from "./Bmw7SeriesEnginesClient";

export const metadata: Metadata = {
  title: "BMW 7 Series Engine Rebuild   Flagship Specialist, Full Reconditioning & Engine Services Across the UK",
  description:
    "BMW 7 Series engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialist BMW flagship engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-7-series-engines" },
};

export default function Bmw7SeriesEnginesPage() {
  return <Bmw7SeriesEnginesClient />;
}

