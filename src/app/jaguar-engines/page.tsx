import { Metadata } from "next";
import JaguarEnginesClient from "./JaguarEnginesClient";

export const metadata: Metadata = {
  title: "Jaguar Engines - Reconditioned & Used Jaguar Engine Specialists",
  description: "Expert Jaguar Engine Rebuild, Reconditioned & Used engines. Save up to 40% with Vogue Technics. Nationwide delivery and 6 months warranty across the UK.",
  alternates: {
    canonical: "/jaguar-engines",
  },
};

export default function JaguarEnginesPage() {
  return <JaguarEnginesClient />;
}
