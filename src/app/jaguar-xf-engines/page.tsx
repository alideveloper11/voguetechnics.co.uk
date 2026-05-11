import { Metadata } from "next";
import JaguarXFEnginesClient from "./JaguarXFEnginesClient";

export const metadata: Metadata = {
  title: "Jaguar XF Engine Rebuild   Specialist Engine Repairs, Reconditioning & Replacements Across the UK",
  description:
    "Jaguar XF engine specialists . Vogue Technics carry out diagnostics, repairs, rebuilds and reconditioned engine replacements across both XF generations with written warranty and UK-wide support.",
  alternates: { canonical: "/jaguar-xf-engines" },
};

export default function JaguarXFEnginesPage() {
  return <JaguarXFEnginesClient />;
}

