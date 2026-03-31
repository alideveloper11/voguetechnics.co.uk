import { Metadata } from "next";
import BmwEnginesClient from "./BmwEnginesClient";

export const metadata: Metadata = {
  title: "Reconditioned and Used BMW Engine for Sale | Engine Parts Available",
  description: "Top-quality reconditioned and used BMW engines for sale at affordable prices. Enter your registration to find the perfect engine and parts for your BMW today. Buy now!",
  alternates: {
    canonical: "/bmw-engines",
  },
};

export default function BmwEnginesPage() {
  return <BmwEnginesClient />;
}
