import { Metadata } from "next";
import JaguarXEEnginesClient from "./JaguarXEEnginesClient";

export const metadata: Metadata = {
  title: "Jaguar XE Engine Rebuild — Specialist Engine Repairs, Reconditioning & Replacements Across the UK",
  description:
    "Jaguar XE engine specialists in Grays, Essex. Vogue Technics provide diagnostics, repairs, rebuilds and reconditioned engine replacements across the full XE range with written warranty and UK-wide support.",
  alternates: { canonical: "/jaguar-xe-engines" },
};

export default function JaguarXEEnginesPage() {
  return <JaguarXEEnginesClient />;
}

