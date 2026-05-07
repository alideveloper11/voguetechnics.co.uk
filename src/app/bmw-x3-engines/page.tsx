import { Metadata } from "next";
import BmwX3EnginesClient from "./BmwX3EnginesClient";

export const metadata: Metadata = {
  title: "BMW X3 Engine Rebuild — Specialist Engine Repairs, Rebuilds & Replacements Across the UK",
  description:
    "BMW X3 engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in Grays, Essex — specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-x3-engines" },
};

export default function BmwX3EnginesPage() {
  return <BmwX3EnginesClient />;
}

