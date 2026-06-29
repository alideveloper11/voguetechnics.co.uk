import type { Metadata } from "next";
import TermsPage from "@/components/legal/TermsAndConditionsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vogue Technics Engine Specialists",
  description:
    "Read the full terms and conditions for engine rebuild, replacement and reconditioned engine services at Vogue Technics, Grays, Essex, UK.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsPage />;
}
