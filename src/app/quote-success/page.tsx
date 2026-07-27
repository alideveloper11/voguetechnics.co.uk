import { Metadata } from "next";
import QuoteSuccess from "@/components/common/QuoteSuccess";

export const metadata: Metadata = {
  title: { absolute: "Quote Received | Vogue Technics" },
  description: "Your enquiry has been received. Our engine specialists will get back to you shortly.",
  alternates: { canonical: "/quote-success" },
};

export default function QuoteSuccessPage() {
  return <QuoteSuccess />;
}
