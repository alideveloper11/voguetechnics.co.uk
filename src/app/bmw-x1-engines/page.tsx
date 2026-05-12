import { Metadata } from "next";
import BmwX1EnginesClient from "./BmwX1EnginesClient";

export const metadata: Metadata = {
  title: "BMW X1 Engine Rebuild   Expert Reconditioning, Repair & Replacement Across the UK",
  description:
    "BMW X1 engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-x1-engines" },
};

export default function BmwX1EnginesPage() {
  return <BmwX1EnginesClient />;
}

