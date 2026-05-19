import { Metadata } from "next";
import BmwX2EnginesClient from "./BmwX2EnginesClient";

export const metadata: Metadata = {
  title: "BMW X2 Engine Rebuild   Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW X2 engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics — specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-x2-engines" },
};

export default function BmwX2EnginesPage() {
  return <BmwX2EnginesClient />;
}
