import { Metadata } from "next";
import EnginesPortalClient from "./EnginesPortalClient";

export const metadata: Metadata = {
  title: "High-Quality Reconditioned & Used Engines for All Major Brands | Vogue Technics",
  description: "Explore our extensive stock of reconditioned and used engines for Range Rover, Land Rover, Audi, BMW, and Jaguar. UK's leading engine specialist with nationwide delivery.",
  alternates: {
    canonical: "/engines",
  },
};

export default function EnginesPortalPage() {
  return <EnginesPortalClient />;
}
