import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews | Vogue Technics - Range Rover Engine Specialists",
  description: "Read what our customers have to say about our professional Range Rover and Land Rover engine reconditioning and fitting services.",
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
