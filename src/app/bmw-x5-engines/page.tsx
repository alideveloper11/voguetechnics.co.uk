import { Metadata } from "next";
import BmwX5EnginesClient from "./BmwX5EnginesClient";

export const metadata: Metadata = {
  title: "BMW X5 Engine Rebuild   Specialist Repairs, Reconditioning & Replacements Across the Full X5 Range",
  description:
    "BMW X5 engine rebuild, repair, replacement and reconditioning across the UK. Vogue Technics in    specialist BMW engine work with transparent quotes and written warranty.",
  alternates: { canonical: "/bmw-x5-engines" },
};

export default function BmwX5EnginesPage() {
  return <BmwX5EnginesClient />;
}

