import { Metadata } from "next";
import AudiEnginesClient from "./AudiEnginesClient";

export const metadata: Metadata = {
  title: "Audi Engines - Reconditioned & Used Audi Replacement Engines",
  description: "Get the best deals on Audi Engines. Vogue Technics offers top-quality used and reconditioned Audi engines with up to 6 months warranty and nationwide delivery.",
  alternates: {
    canonical: "/audi-engines",
  },
};

export default function AudiEnginesPage() {
  return <AudiEnginesClient />;
}
