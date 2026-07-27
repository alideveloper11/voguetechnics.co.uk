import type { Metadata } from "next";
import TermsPage from "@/components/legal/TermsAndConditionsContent";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | Vogue Technics" },
  description:
    "Review the terms governing engine sales, fitting services, and warranties at Vogue Technics before making a purchase or booking a service.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsPage />;
}
