import { Metadata } from "next";
import AudiEnginesClient from "./AudiEnginesClient";

export const metadata: Metadata = {
  title: "Audi Engine Replacement UK – Expert Rebuilds, Repairs & Reconditioned Engines in ",
  description:
    "Audi engine replacement, rebuild and repair specialists . Vogue Technics supply used and reconditioned Audi engines with written warranty and UK-wide support.",
  alternates: {
    canonical: "/audi-engines",
  },
};

export default function AudiEnginesPage() {
  return <AudiEnginesClient />;
}
