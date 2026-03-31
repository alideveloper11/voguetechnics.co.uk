import { Metadata } from "next";
import AudiEnginesClient from "./AudiEnginesClient";

export const metadata: Metadata = {
  title: "Audi Used and Reconditioned Engines for Sale | Vogue Technics",
  description: "Top-quality reconditioned and used Audi engines for sale at affordable prices. Enter your registration to find the perfect engine and parts for your Audi today. Buy now!",
  alternates: {
    canonical: "/audi-engines",
  },
};

export default function AudiEnginesPage() {
  return <AudiEnginesClient />;
}
