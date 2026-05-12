import { Metadata } from "next";
import JaguarEnginesClient from "./JaguarEnginesClient";

export const metadata: Metadata = {
  title: "Jaguar Engine Rebuild Specialists |  | UK-Wide Service",
  description:
    "Jaguar engine rebuild specialists . Vogue Technics carry out Jaguar engine rebuilds, repairs and replacements with written warranty and UK-wide collection and delivery.",
  alternates: {
    canonical: "/jaguar-engines",
  },
};

export default function JaguarEnginesPage() {
  return <JaguarEnginesClient />;
}
