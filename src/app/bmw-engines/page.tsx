import { Metadata } from "next";
import BmwEnginesClient from "./BmwEnginesClient";

export const metadata: Metadata = {
  title: "BMW Engines - Reconditioned & Used BMW Engine Rebuild & Replacement",
  description: "Expert BMW Engine Rebuild & Replacement services. Vogue Technics offers top-quality used and reconditioned BMW engines with up to 6 months warranty and nationwide delivery.",
  alternates: {
    canonical: "/bmw-engines",
  },
};

export default function BmwEnginesPage() {
  return <BmwEnginesClient />;
}
