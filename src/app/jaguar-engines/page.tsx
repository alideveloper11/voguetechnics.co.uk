import { Metadata } from "next";
import JaguarEnginesClient from "./JaguarEnginesClient";

export const metadata: Metadata = {
  title: "Reconditioned & Used Jaguar Engine for Sale | Engine Parts for Sale",
  description: "Looking for a Jaguar engine? We offer reconditioned and used engines for all models. Get your Jaguar back on the road. Enter your reg now for top deals.",
  alternates: {
    canonical: "/jaguar-engines",
  },
};

export default function JaguarEnginesPage() {
  return <JaguarEnginesClient />;
}
